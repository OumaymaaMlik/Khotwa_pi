package tn.khotwa.biblio.controller.ressources;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.*;
import org.springframework.data.domain.Page;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.biblio.enums.*;
import tn.khotwa.biblio.projection.ressources.RessourceSummaryView;
import tn.khotwa.biblio.projection.ressources.RessourceView;
import tn.khotwa.biblio.repository.projet.ProjetRepository;
import tn.khotwa.biblio.service.ressources.IRessourceService;
import tn.khotwa.biblio.service.ressources.IRessourceService.EnrichedRessource;

import java.nio.file.Path;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ressources")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Slf4j
public class RessourceController {

    private final IRessourceService ressourceService;
    private final ProjetRepository  projetRepo;

    // GET /api/ressources
    // Pour un ENTREPRENEUR : filtre automatique par secteur de son projet
    // Pour un COACH/ADMIN  : pas de filtrage par secteur
    @GetMapping
    public ResponseEntity<Map<String, Object>> lister(
            @RequestHeader(value = "X-User-Id",   required = false) Long userId,
            @RequestHeader(value = "X-User-Role",  required = false) String role,
            @RequestHeader(value = "X-User-Plan",  required = false) String plan,
            @RequestParam(required = false) ResourceType type,
            @RequestParam(required = false) Long categorieId,
            @RequestParam(required = false) String tag,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "12") int size) {

        Role parsedRole = parseRole(role);

        // Résoudre automatiquement le secteur de l'entrepreneur
        String secteur = null;
        if (parsedRole == Role.ENTREPRENEUR && userId != null) {
            secteur = resoudreSecteurEntrepreneur(userId);
        }

        Page<RessourceSummaryView> resultat = ressourceService.lister(
            parsedRole, parsePlan(plan), userId, type, categorieId,
            tag, search, secteur, page, size
        );

        return ResponseEntity.ok(Map.of(
            "success",       true,
            "data",          resultat.getContent(),
            "totalElements", resultat.getTotalElements(),
            "totalPages",    resultat.getTotalPages(),
            "page",          resultat.getNumber(),
            "secteur",       secteur != null ? secteur : ""
        ));
    }

    // GET /api/ressources/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getParId(
            @PathVariable Long id,
            @RequestHeader(value = "X-User-Id",   required = false) Long userId,
            @RequestHeader(value = "X-User-Role",  required = false) String role,
            @RequestHeader(value = "X-User-Plan",  required = false) String plan) {

        EnrichedRessource enriched = ressourceService.getParId(
            id, userId, parseRole(role), parsePlan(plan)
        );

        return ResponseEntity.ok(Map.of(
            "success", true,
            "data", Map.of(
                "ressource",     enriched.ressource(),
                "tags",          enriched.tags(),
                "maProgression", enriched.maProgression() != null ? enriched.maProgression() : Map.of()
            )
        ));
    }

    // POST /api/ressources (multipart)
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String, Object>> creer(
            @RequestParam("titre")                                   String titre,
            @RequestParam("type")                                    String type,
            @RequestParam("planType")                                String planType,
            @RequestParam(value = "description",   required = false) String description,
            @RequestParam(value = "categorieId",   required = false) String categorieId,
            @RequestParam(value = "tags",          required = false) List<String> tags,
            @RequestParam(value = "urlExterne",    required = false) String urlExterne,
            @RequestParam(value = "dureeSec",      required = false) String dureeSec,
            @RequestParam(value = "nombrePages",   required = false) String nombrePages,
            @RequestParam(value = "publie",        required = false) String publie,
            @RequestParam(value = "fichier",       required = false) MultipartFile fichier,
            @RequestHeader("X-User-Id") Long adminId) {

        RessourceView cree = ressourceService.creer(
            titre, description,
            ResourceType.valueOf(type),
            PlanType.valueOf(planType),
            categorieId   != null ? Long.parseLong(categorieId) : null,
            tags, urlExterne,
            dureeSec      != null ? Integer.parseInt(dureeSec)   : null,
            nombrePages   != null ? Integer.parseInt(nombrePages) : null,
            publie        != null ? Boolean.parseBoolean(publie)  : false,
            fichier, adminId
        );

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(Map.of("success", true, "message", "Ressource créée", "data", cree));
    }

    // PUT /api/ressources/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> mettreAJour(
            @PathVariable Long id,
            @RequestBody Map<String, Object> body) {

        RessourceView maj = ressourceService.mettreAJour(
            id,
            (String) body.get("titre"),
            (String) body.get("description"),
            body.get("planType") != null ? PlanType.valueOf((String) body.get("planType")) : null,
            body.get("categorieId") != null ? Long.parseLong(body.get("categorieId").toString()) : null,
            (List<String>) body.get("tags"),
            body.get("dureeSec")    != null ? Integer.parseInt(body.get("dureeSec").toString()) : null,
            body.get("nombrePages") != null ? Integer.parseInt(body.get("nombrePages").toString()) : null,
            body.get("publie")      != null ? (Boolean) body.get("publie") : null
        );

        return ResponseEntity.ok(Map.of("success", true, "data", maj));
    }

    // PATCH /api/ressources/{id}/fichier
    @PatchMapping(value = "/{id}/fichier", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String, Object>> remplacerFichier(
            @PathVariable Long id, @RequestPart("fichier") MultipartFile fichier) {
        return ResponseEntity.ok(Map.of("success", true, "data",
            ressourceService.remplacerFichier(id, fichier)));
    }

    // PATCH /api/ressources/{id}/toggle-publie
    @PatchMapping("/{id}/toggle-publie")
    public ResponseEntity<Map<String, Object>> togglePublie(@PathVariable Long id) {
        return ResponseEntity.ok(Map.of("success", true, "data",
            ressourceService.togglePublie(id)));
    }

    // DELETE /api/ressources/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> supprimer(@PathVariable Long id) {
        ressourceService.supprimer(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Ressource supprimée"));
    }

    // GET /api/ressources/{id}/download
    @GetMapping("/{id}/download")
    public ResponseEntity<?> telecharger(
            @PathVariable Long id,
            @RequestHeader(value = "X-User-Role", required = false) String role,
            @RequestHeader(value = "X-User-Plan", required = false) String plan) {
        try {
            // Récupérer la vue pour vérifier cheminFichier vs urlExterne
            var vue = ressourceService.getVueById(id, parseRole(role), parsePlan(plan));

            // Ressource LINK ou sans fichier → redirection vers urlExterne
            if (vue.getCheminFichier() == null || vue.getCheminFichier().isBlank()) {
                String externe = vue.getUrlExterne();
                if (externe != null && !externe.isBlank()) {
                    return ResponseEntity.status(HttpStatus.FOUND)
                        .header(HttpHeaders.LOCATION, externe)
                        .build();
                }
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("success", false, "message", "Aucun fichier ni URL externe."));
            }

            // Résoudre le fichier physique
            Path chemin = ressourceService.obtenirCheminFichier(id, parseRole(role), parsePlan(plan));
            log.info("Download request — id={}, chemin résolu={}", id, chemin.toAbsolutePath());

            if (!java.nio.file.Files.exists(chemin) || !java.nio.file.Files.isReadable(chemin)) {
                log.warn("Fichier introuvable : {}", chemin.toAbsolutePath());
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("success", false,
                        "message", "Fichier introuvable : " + chemin.toAbsolutePath()));
            }

            String ct = java.nio.file.Files.probeContentType(chemin);
            Resource res = new FileSystemResource(chemin);
            return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(ct != null ? ct : "application/octet-stream"))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "inline; filename=\"" + chemin.getFileName() + "\"")
                .contentLength(java.nio.file.Files.size(chemin))
                .body(res);

        } catch (tn.khotwa.biblio.exception.AccessDeniedException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(Map.of("success", false, "message", e.getMessage()));
        } catch (tn.khotwa.biblio.exception.ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("success", false, "message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("success", false, "message", "Erreur fichier : " + e.getMessage()));
        }
    }

    // GET /api/ressources/stats
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats(
            @RequestHeader(value = "X-User-Id", required = false) Long userId) {
        return ResponseEntity.ok(Map.of("success", true, "data",
            ressourceService.getStats(userId)));
    }

    // ── Helpers ───────────────────────────────────────────────────────

    /**
     * Résout le secteur du projet actif d'un entrepreneur.
     * Retourne le secteur du projet le plus récent, ou null si pas de projet.
     */
    private String resoudreSecteurEntrepreneur(Long entrepreneurId) {
        List<String> secteurs = projetRepo.findSecteursParEntrepreneur(entrepreneurId);
        return secteurs.isEmpty() ? null : secteurs.get(0);
    }

    private Role parseRole(String r) {
        if (r == null) return null;
        try { return Role.valueOf(r.toUpperCase()); }
        catch (IllegalArgumentException e) { return null; }
    }

    private PlanType parsePlan(String p) {
        if (p == null) return null;
        try { return PlanType.valueOf(p.toUpperCase()); }
        catch (IllegalArgumentException e) { return null; }
    }
}
