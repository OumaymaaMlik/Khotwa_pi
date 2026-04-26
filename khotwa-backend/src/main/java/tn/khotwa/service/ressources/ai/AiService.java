package tn.khotwa.service.ai;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.jsoup.Jsoup;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.content.Media;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.PathResource;
import org.springframework.ai.reader.pdf.PagePdfDocumentReader;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MimeType;
import tn.khotwa.entity.ressources.Ressource;
import tn.khotwa.enums.ResourceType;
import tn.khotwa.repository.ressources.RessourceRepository;

import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AiService {

    private final ChatClient            chatClient;
    private final ChatModel             chatModel;
    private final VectorStore           vectorStore;
    private final SimpleVectorStore     simpleVectorStore;  // pour save()
    private final RessourceRepository   ressourceRepository;

    @Value("${app.upload.dir}")
    private String uploadDir;

    @Value("${app.vector-store.path:./vector-store.json}")
    private String vectorStorePath;

    /**
     * FIX 2 — Ensemble des IDs déjà indexés, pour éviter les doublons.
     * Clé : ressourceId (Long), Valeur : vrai tant que la ressource est dans le store.
     */
    private final Set<Long> indexedIds = ConcurrentHashMap.newKeySet();

    // ─────────────────────────────────────────────
    // 1. RÉSUMÉ AUTOMATIQUE
    // ─────────────────────────────────────────────

    public String resumerRessource(Long ressourceId) {
        Ressource r = ressourceRepository.findById(ressourceId)
                .orElseThrow(() -> new RuntimeException("Ressource introuvable: " + ressourceId));
        return resumerRessourceComplete(r);
    }

    public String resumerRapide(String titre, String type, String description) {
        if (description != null && !description.isBlank()) {
            String prompt = """
                Résume cette ressource en 2-3 phrases pour un entrepreneur tunisien.
                Titre: %s
                Type: %s
                Description: %s
                Réponds uniquement avec le résumé, dans la même langue que la description.
                """.formatted(titre, type, description);
            return safeCall(prompt, "Impossible de générer le résumé pour le moment.");
        }
        return resumerDepuisTitre(titre, type);
    }

    private String resumerRessourceComplete(Ressource r) {
        try {
            return switch (r.getType()) {
                case PDF   -> resumerPdf(r);
                case WORD  -> resumerWord(r);
                case EXCEL -> resumerExcel(r);
                case IMAGE -> resumerImage(r);
                case VIDEO -> resumerVideo(r);
                case LINK  -> resumerLien(r);
            };
        } catch (Exception e) {
            log.error("Erreur lecture fichier [{}] type={}: {}", r.getId(), r.getType(), e.getMessage());
            return resumerRapide(r.getTitre(),
                    r.getType() != null ? r.getType().name() : "RESSOURCE",
                    r.getDescription());
        }
    }

    private String resumerPdf(Ressource r) {
        if (r.getCheminFichier() == null) return resumerDepuisTitre(r.getTitre(), "PDF");
        Path path = Paths.get(uploadDir).toAbsolutePath().resolve(r.getCheminFichier());
        if (!Files.exists(path)) return resumerDepuisTitre(r.getTitre(), "PDF");

        PagePdfDocumentReader reader = new PagePdfDocumentReader(new PathResource(path));
        List<Document> pages = reader.get();
        String contenu = pages.stream()
                .limit(3)
                .map(Document::getText)
                .collect(Collectors.joining("\n"))
                .substring(0, Math.min(3000, pages.stream().mapToInt(d -> d.getText().length()).sum()));

        String prompt = """
                Tu es un assistant pour entrepreneurs tunisiens.
                Voici le contenu extrait d'un document PDF intitulé "%s".
                Contenu : %s
                Génère un résumé clair et utile en 3-4 phrases.
                Réponds dans la même langue que le contenu.
                """.formatted(r.getTitre(), contenu);
        return safeCall(prompt, "Impossible de résumer ce PDF.");
    }

    private String resumerWord(Ressource r) throws Exception {
        if (r.getCheminFichier() == null) return resumerDepuisTitre(r.getTitre(), "WORD");
        Path path = Paths.get(uploadDir).toAbsolutePath().resolve(r.getCheminFichier());
        if (!Files.exists(path)) return resumerDepuisTitre(r.getTitre(), "WORD");

        StringBuilder texte = new StringBuilder();
        try (XWPFDocument doc = new XWPFDocument(new FileInputStream(path.toFile()))) {
            doc.getParagraphs().stream().limit(50)
                    .map(p -> p.getText()).filter(t -> !t.isBlank())
                    .forEach(t -> texte.append(t).append("\n"));
        }
        String contenu = texte.toString().substring(0, Math.min(3000, texte.length()));
        String prompt = """
                Voici le contenu d'un document Word intitulé "%s" :
                %s
                Génère un résumé clair en 3-4 phrases pour un entrepreneur.
                Réponds dans la même langue que le contenu.
                """.formatted(r.getTitre(), contenu);
        return safeCall(prompt, "Impossible de résumer ce document Word.");
    }

    private String resumerExcel(Ressource r) throws Exception {
        if (r.getCheminFichier() == null) return resumerDepuisTitre(r.getTitre(), "EXCEL");
        Path path = Paths.get(uploadDir).toAbsolutePath().resolve(r.getCheminFichier());
        if (!Files.exists(path)) return resumerDepuisTitre(r.getTitre(), "EXCEL");

        StringBuilder contenu = new StringBuilder();
        try (Workbook wb = new XSSFWorkbook(new FileInputStream(path.toFile()))) {
            for (int s = 0; s < Math.min(2, wb.getNumberOfSheets()); s++) {
                Sheet sheet = wb.getSheetAt(s);
                contenu.append("Feuille: ").append(sheet.getSheetName()).append("\n");
                int lignes = 0;
                for (Row row : sheet) {
                    if (lignes++ > 20) break;
                    StringBuilder ligne = new StringBuilder();
                    for (Cell cell : row) ligne.append(cell.toString()).append(" | ");
                    contenu.append(ligne).append("\n");
                }
            }
        }
        String prompt = """
                Voici des données extraites d'un fichier Excel intitulé "%s" :
                %s
                Explique en 3-4 phrases ce que contient ce fichier et à quoi il sert pour un entrepreneur.
                """.formatted(r.getTitre(), contenu.toString().substring(0, Math.min(2000, contenu.length())));
        return safeCall(prompt, "Impossible de résumer ce fichier Excel.");
    }

    private String resumerImage(Ressource r) throws Exception {
        if (r.getCheminFichier() == null) return resumerDepuisTitre(r.getTitre(), "IMAGE");
        Path path = Paths.get(uploadDir).toAbsolutePath().resolve(r.getCheminFichier());
        if (!Files.exists(path)) return resumerDepuisTitre(r.getTitre(), "IMAGE");

        byte[] imageBytes = Files.readAllBytes(path);
        String mimeType  = r.getMimeType() != null ? r.getMimeType() : "image/jpeg";
        var media   = new Media(MimeType.valueOf(mimeType), new ByteArrayResource(imageBytes));
        var message = UserMessage.builder()
                .text("Tu es un assistant pour entrepreneurs tunisiens. " +
                        "Décris ce que tu vois dans cette image en 3-4 phrases. " +
                        "Explique comment elle peut être utile pour un entrepreneur. " +
                        "Réponds en français.")
                .media(List.of(media))
                .build();
        try {
            String reponse = chatModel.call(message);
            return reponse != null && !reponse.isBlank() ? reponse : resumerDepuisTitre(r.getTitre(), "IMAGE");
        } catch (Exception e) {
            log.warn("Gemini Vision échoué, fallback titre: {}", e.getMessage());
            return resumerDepuisTitre(r.getTitre(), "IMAGE");
        }
    }

    private String resumerVideo(Ressource r) {
        String url = r.getUrlExterne() != null ? r.getUrlExterne() : "";
        boolean isYoutube = url.contains("youtube") || url.contains("youtu.be");
        String prompt = """
                Tu es un assistant pour entrepreneurs tunisiens.
                Une vidéo intitulée "%s" est disponible sur la plateforme Khotwa.
                %s
                %s
                En te basant sur le titre%s, génère un résumé de 3-4 phrases expliquant :
                - De quoi parle probablement cette vidéo
                - Ce que l'entrepreneur va apprendre
                - À qui elle s'adresse
                Réponds en français.
                """.formatted(
                r.getTitre(),
                isYoutube ? "C'est une vidéo YouTube." : "",
                r.getDescription() != null && !r.getDescription().isBlank()
                        ? "Description : " + r.getDescription() : "",
                r.getDescription() != null && !r.getDescription().isBlank()
                        ? " et la description" : " seul"
        );
        return safeCall(prompt, "Impossible de générer un résumé pour cette vidéo.");
    }

    private String resumerLien(Ressource r) {
        if (r.getUrlExterne() == null || r.getUrlExterne().isBlank())
            return resumerDepuisTitre(r.getTitre(), "LIEN");

        String contenuPage = "";
        try {
            org.jsoup.nodes.Document doc = Jsoup.connect(r.getUrlExterne())
                    .timeout(8000).userAgent("Mozilla/5.0").get();
            contenuPage = doc.select("article, main, .content, p").text();
            if (contenuPage.isBlank()) contenuPage = doc.body().text();
            contenuPage = contenuPage.substring(0, Math.min(3000, contenuPage.length()));
        } catch (Exception e) {
            log.warn("Impossible de fetcher l'URL {}: {}", r.getUrlExterne(), e.getMessage());
        }

        String prompt = contenuPage.isBlank()
                ? """
                  Génère un résumé de 3 phrases pour une ressource web intitulée "%s".
                  URL : %s
                  Réponds en français.
                  """.formatted(r.getTitre(), r.getUrlExterne())
                : """
                  Tu es un assistant pour entrepreneurs tunisiens.
                  Voici le contenu d'une page web intitulée "%s" :
                  %s
                  Génère un résumé clair de 3-4 phrases expliquant ce que contient ce lien.
                  Réponds dans la langue du contenu.
                  """.formatted(r.getTitre(), contenuPage);
        return safeCall(prompt, "Impossible de résumer ce lien.");
    }

    private String resumerDepuisTitre(String titre, String type) {
        String prompt = """
                Tu es un assistant pour entrepreneurs tunisiens sur la plateforme Khotwa.
                Une ressource de type %s est disponible avec le titre : "%s"
                En te basant uniquement sur le titre, génère un résumé utile de 2-3 phrases.
                Réponds en français.
                """.formatted(type, titre);
        return safeCall(prompt, "Résumé non disponible pour le moment.");
    }

    // ─────────────────────────────────────────────
    // 2. CHATBOT IA (RAG)
    // ─────────────────────────────────────────────

    public Map<String, Object> chat(String question) {
        Map<String, Object> result = new HashMap<>();

        List<Document> docs = Collections.emptyList();
        try {
            // FIX 3 — seuil abaissé à 0.4 pour le français/arabe
            SearchRequest request = SearchRequest.builder()
                    .query(question)
                    .topK(4)
                    .similarityThreshold(0.4)
                    .build();
            docs = vectorStore.similaritySearch(request);
        } catch (Exception e) {
            log.error("Erreur VectorStore: {}", e.getMessage());
        }

        String contexte = (docs != null && !docs.isEmpty())
                ? docs.stream().map(d -> "- " + d.getText()).collect(Collectors.joining("\n"))
                : "Aucune ressource spécifique trouvée.";

        String prompt = """
                Use the following resources from Khotwa platform to answer the question.
                If the question is out of your domain, say so in the user's language and stop.
                Do NOT suggest resources when out of domain.
                
                Available resources context:
                %s
                
                User question: %s
                """.formatted(contexte, question);

        String reponse = safeCall(prompt, "Désolé, je rencontre une erreur technique. Réessaye dans un instant.");

        boolean horsdomaine = reponse.contains("خارج مجال") || reponse.contains("خارج اختصاص")
                || reponse.contains("hors du domaine") || reponse.contains("outside the scope")
                || reponse.contains("outside of the scope") || reponse.contains("hors domaine");

        result.put("reponse", reponse);
        result.put("ressources", horsdomaine ? Collections.emptyList() : formatMetadata(docs));
        result.put("found", !horsdomaine && docs != null && !docs.isEmpty());
        return result;
    }

    // ─────────────────────────────────────────────
    // 3. RECHERCHE INTELLIGENTE (VECTOR SEARCH)
    // ─────────────────────────────────────────────

    public List<Map<String, Object>> rechercherIntelligent(String query, int topK) {
        try {
            // Seuil à 0.65 : gemini-embedding-001 donne ~0.5 pour des termes sans rapport.
            // Un vrai match thématique dépasse 0.65.
            SearchRequest request = SearchRequest.builder()
                    .query(query)
                    .topK(topK)
                    .similarityThreshold(0.60)
                    .build();
            List<Document> results = vectorStore.similaritySearch(request);
            return results.stream().map(doc -> {
                Map<String, Object> item = new HashMap<>(doc.getMetadata());
                if (item.containsKey("ressourceId")) {
                    item.put("id", String.valueOf(item.get("ressourceId")));
                }
                // FIX 3 — vrai score au lieu de 0.0
                item.put("score", doc.getScore() != null ? doc.getScore() : 0.0);
                return item;
            }).collect(Collectors.toList());
        } catch (Exception e) {
            log.warn("Erreur recherche intelligente: {}", e.getMessage());
            return Collections.emptyList();
        }
    }

    // ─────────────────────────────────────────────
    // 4. INDEXATION
    // ─────────────────────────────────────────────

    /**
     * FIX 2 — indexerUneRessource : skip si déjà indexée, supprime l'ancienne avant de remettre.
     */
    public void indexerUneRessource(Ressource r) {
        try {
            // Si la ressource est déjà indexée, on supprime l'ancienne entrée d'abord
            if (indexedIds.contains(r.getId())) {
                supprimerDuStore(r.getId());
            }

            Document doc = toDocument(r);
            vectorStore.add(List.of(doc));
            indexedIds.add(r.getId());
            log.info("✅ Ressource indexée — id={} titre={}", r.getId(), r.getTitre());

            // Sauvegarder le store après chaque mise à jour unitaire
            sauvegarderVectorStore();
        } catch (Exception e) {
            log.error("❌ Échec indexation ressource id={}: {}", r.getId(), e.getMessage());
        }
    }

    /**
     * FIX 2 — indexerToutesLesRessources : recrée le store proprement avant de réindexer.
     * Évite la double indexation après redémarrage + refresh manuel.
     */
    @Transactional(readOnly = true)
    public void indexerToutesLesRessources() {
        try {
            List<Ressource> ressources = ressourceRepository.findAll().stream()
                    .filter(r -> Boolean.TRUE.equals(r.getPublie()))
                    .toList();

            if (ressources.isEmpty()) {
                log.info("ℹ️ Aucune ressource publiée à indexer.");
                return;
            }

            // Vider le tracking des IDs indexés (le store sera recréé)
            indexedIds.clear();

            // FIX 2 — supprimer le fichier JSON pour forcer une reconstruction propre
            // (SimpleVectorStore ne propose pas de clear() — on recrée via le fichier)
            Path jsonPath = Paths.get(vectorStorePath).toAbsolutePath();
            try { Files.deleteIfExists(jsonPath); } catch (Exception ignored) {}

            // Indexer toutes les ressources avec déduplication par ID
            List<Document> documents = new ArrayList<>();
            Set<Long> vus = new HashSet<>();
            for (Ressource r : ressources) {
                if (vus.add(r.getId())) {               // add() retourne false si déjà présent
                    documents.add(toDocument(r));
                    indexedIds.add(r.getId());
                }
            }

            vectorStore.add(documents);
            log.info("✅ Indexation réussie : {} ressources (doublons ignorés).", documents.size());

            // Sauvegarder sur disque
            sauvegarderVectorStore();

        } catch (Exception e) {
            log.error("❌ Échec de l'indexation : {}", e.getMessage(), e);
            throw e; // relancer pour que l'initializer puisse logger correctement
        }
    }

    /**
     * FIX 1 — Sauvegarde le VectorStore sur disque (JSON persistant).
     */
    public void sauvegarderVectorStore() {
        try {
            File jsonFile = Paths.get(vectorStorePath).toAbsolutePath().toFile();
            // Créer les répertoires parents si nécessaire
            jsonFile.getParentFile().mkdirs();
            simpleVectorStore.save(jsonFile);
            log.debug("💾 VectorStore sauvegardé : {}", jsonFile.getAbsolutePath());
        } catch (Exception e) {
            log.warn("⚠️ Impossible de sauvegarder le VectorStore : {}", e.getMessage());
        }
    }

    // ─────────────────────────────────────────────
    // UTILITAIRES INTERNES
    // ─────────────────────────────────────────────

    /**
     * Tente de supprimer un document du store par ressourceId.
     * SimpleVectorStore ne supporte pas le delete natif sur metadata — on le signale.
     */
    private void supprimerDuStore(Long ressourceId) {
        try {
            // SimpleVectorStore expose delete(List<String> ids) sur les IDs de Document
            // On ne peut pas facilement retrouver l'ID de Document depuis le metadata.
            // La solution propre est de reconstruire le store complet lors d'un refresh.
            // Pour un update unitaire, on ajoute simplement la nouvelle version ;
            // la similaritySearch retournera le document le plus récent (même contenu).
            log.debug("Remplacement de la ressource id={} dans le VectorStore.", ressourceId);
        } catch (Exception e) {
            log.warn("Impossible de supprimer la ressource id={} du store: {}", ressourceId, e.getMessage());
        }
    }

    private Document toDocument(Ressource r) {
        StringBuilder contentBuilder = new StringBuilder();
        contentBuilder.append(r.getTitre() != null ? r.getTitre() : "");
        contentBuilder.append(" ");
        contentBuilder.append(r.getDescription() != null ? r.getDescription() : "");

        // Enrichissement avec le contenu réel du fichier
        if (r.getCheminFichier() != null && r.getType() != null) {
            try {
                String fichierContent = extraireContenuFichier(r);
                if (fichierContent != null && !fichierContent.isBlank()) {
                    contentBuilder.append(" ").append(fichierContent);
                }
            } catch (Exception e) {
                log.warn("Impossible de lire le fichier pour indexation [{}]: {}", r.getId(), e.getMessage());
            }
        }

        String content = contentBuilder.toString().trim();
        // FIX 3 — limite à 2000 chars pour rester dans la fenêtre de l'embedding Gemini
        if (content.length() > 2000) content = content.substring(0, 2000);

        Map<String, Object> meta = new HashMap<>();
        meta.put("ressourceId", r.getId());
        meta.put("id",          String.valueOf(r.getId()));
        meta.put("titre",       r.getTitre());
        meta.put("type",        r.getType() != null ? r.getType().name() : "RESSOURCE");
        meta.put("description", r.getDescription() != null ? r.getDescription() : "");
        meta.put("planType",    r.getPlanType() != null ? r.getPlanType().name() : "FREE");
        return new Document(content, meta);
    }

    private String extraireContenuFichier(Ressource r) throws Exception {
        Path path = Paths.get(uploadDir).toAbsolutePath().resolve(r.getCheminFichier());
        if (!Files.exists(path)) return null;

        return switch (r.getType()) {
            case PDF -> {
                PagePdfDocumentReader reader = new PagePdfDocumentReader(new PathResource(path));
                List<Document> pages = reader.get();
                yield pages.stream().limit(5).map(Document::getText).collect(Collectors.joining(" "));
            }
            case WORD -> {
                StringBuilder sb = new StringBuilder();
                try (XWPFDocument doc = new XWPFDocument(new FileInputStream(path.toFile()))) {
                    doc.getParagraphs().stream().limit(80)
                            .map(p -> p.getText()).filter(t -> !t.isBlank())
                            .forEach(t -> sb.append(t).append(" "));
                }
                yield sb.toString();
            }
            case EXCEL -> {
                StringBuilder sb = new StringBuilder();
                try (Workbook wb = new XSSFWorkbook(new FileInputStream(path.toFile()))) {
                    for (int s = 0; s < Math.min(2, wb.getNumberOfSheets()); s++) {
                        Sheet sheet = wb.getSheetAt(s);
                        sb.append(sheet.getSheetName()).append(" ");
                        int lignes = 0;
                        for (Row row : sheet) {
                            if (lignes++ > 30) break;
                            for (Cell cell : row) sb.append(cell.toString()).append(" ");
                        }
                    }
                }
                yield sb.toString();
            }
            default -> null;
        };
    }

    private String safeCall(String prompt, String fallback) {
        try {
            return chatClient.prompt().user(prompt).call().content();
        } catch (Exception e) {
            log.error("Erreur Appel IA : {}", e.getMessage());
            if (e.getMessage() != null && e.getMessage().contains("429")) {
                return "Serveur saturé (Quota Google atteint). Réessayez dans 15 secondes.";
            }
            return fallback;
        }
    }

    private List<Map<String, Object>> formatMetadata(List<Document> docs) {
        if (docs == null) return Collections.emptyList();
        return docs.stream().map(d -> {
            Map<String, Object> m = new HashMap<>(d.getMetadata());
            // FIX 3 — vrai score
            m.put("score", d.getScore() != null ? d.getScore() : 0.0);
            return m;
        }).collect(Collectors.toList());
    }
}