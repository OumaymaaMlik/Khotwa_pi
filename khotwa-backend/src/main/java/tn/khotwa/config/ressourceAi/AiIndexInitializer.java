package tn.khotwa.config.ressourceAi;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import tn.khotwa.service.ressources.ai.AiService;

import java.io.File;
import java.nio.file.Paths;

/**
 * FIX 2 — Évite la double indexation au démarrage
 *
 * Logique :
 *  - Si le fichier vector-store.json existe ET est non vide → déjà indexé, on skip
 *  - Sinon → on indexe et on sauvegarde
 *
 * Pour forcer une ré-indexation complète : supprimer le fichier vector-store.json
 * ou appeler POST /api/ai/indexation/refresh
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class AiIndexInitializer implements ApplicationRunner {

    private final AiService        aiService;
    private final SimpleVectorStore simpleVectorStore;

    @Value("${app.vector-store.path:./vector-store.json}")
    private String vectorStorePath;

    @Override
    public void run(ApplicationArguments args) {
        File jsonFile = Paths.get(vectorStorePath).toAbsolutePath().toFile();

        // Si le fichier existe déjà et est non vide → les embeddings sont déjà chargés
        if (jsonFile.exists() && jsonFile.length() > 0) {
            log.info("✅ VectorStore déjà chargé depuis le fichier ({} octets) — indexation skippée.",
                    jsonFile.length());
            return;
        }

        // Fichier absent ou vide → première indexation
        log.info("=== Démarrage indexation IA initiale ===");
        try {
            aiService.indexerToutesLesRessources();
            // Sauvegarder le résultat sur disque pour les prochains démarrages
            aiService.sauvegarderVectorStore();
            log.info("=== Indexation IA terminée et sauvegardée ===");
        } catch (Exception e) {
            log.error("=== Indexation IA échouée : {} ===", e.getMessage(), e);
            log.warn("Le chatbot et la recherche IA fonctionneront sans données indexées.");
            log.warn("Appelle POST /api/ai/indexation/refresh pour réindexer manuellement.");
        }
    }
}
