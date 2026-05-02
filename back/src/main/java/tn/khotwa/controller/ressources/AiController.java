package tn.khotwa.controller.ressources;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.service.ressources.ai.AiService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class AiController {

    private final AiService aiService;

    /**
     * CHATBOT (RAG)
     * POST /api/ai/chat
     * Body: { "message": "..." }
     */
    @PostMapping("/chat")
    public ResponseEntity<Map<String, Object>> chat(@RequestBody Map<String, String> payload) {
        String question = payload.get("message");
        if (question == null || question.isBlank()) {
            return ResponseEntity.badRequest().build();
        }
        log.info("Chat IA : {}", question);
        try {
            return ResponseEntity.ok(aiService.chat(question));
        } catch (Exception e) {
            log.error("Erreur chat : {}", e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * RÉSUMÉ COMPLET (lit vraiment le fichier : PDF, Word, Excel, Image, Vidéo, Lien)
     * GET /api/ai/resume/{id}
     */
    @GetMapping("/resume/{id}")
    public ResponseEntity<Map<String, String>> resumeRessource(@PathVariable Long id) {
        log.info("Résumé complet pour ressource ID : {}", id);
        try {
            String text = aiService.resumerRessource(id);
            return ResponseEntity.ok(Map.of("resume", text));
        } catch (RuntimeException e) {
            if (e.getMessage() != null && e.getMessage().contains("introuvable")) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.internalServerError()
                    .body(Map.of("resume", "Erreur lors de la génération du résumé."));
        }
    }

    /**
     * RÉSUMÉ RAPIDE (depuis métadonnées : titre + type + description)
     * POST /api/ai/resume/rapide
     * Body: { "titre": "...", "type": "...", "description": "..." }
     */
    @PostMapping("/resume/rapide")
    public ResponseEntity<Map<String, String>> resumeRapide(@RequestBody Map<String, String> payload) {
        String titre = payload.getOrDefault("titre", "Sans titre");
        String type  = payload.getOrDefault("type", "RESSOURCE");
        String desc  = payload.getOrDefault("description", "");
        log.info("Résumé rapide pour : {}", titre);
        try {
            String text = aiService.resumerRapide(titre, type, desc);
            return ResponseEntity.ok(Map.of("resume", text));
        } catch (Exception e) {
            log.error("Erreur résumé rapide: {}", e.getMessage());
            return ResponseEntity.ok(Map.of("resume", "Désolé, impossible de générer le résumé."));
        }
    }

    /**
     * RECHERCHE INTELLIGENTE (Vector Search)
     * GET /api/ai/recherche?query=...&limit=5
     */
    @GetMapping("/recherche")
    public ResponseEntity<List<Map<String, Object>>> recherche(
            @RequestParam String query,
            @RequestParam(defaultValue = "5") int limit) {
        log.info("Recherche intelligente : {}", query);
        return ResponseEntity.ok(aiService.rechercherIntelligent(query, limit));
    }

    /**
     * INDEXATION MANUELLE
     * POST /api/ai/indexation/refresh
     */
    @PostMapping("/indexation/refresh")
    public ResponseEntity<Map<String, String>> refreshIndex() {
        log.warn("Début de la ré-indexation complète du Vector Store");
        try {
            aiService.indexerToutesLesRessources();
            return ResponseEntity.ok(Map.of("message", "Indexation réussie"));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }
}