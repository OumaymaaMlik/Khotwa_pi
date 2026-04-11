package tn.khotwa.biblio.controller.ressources;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.biblio.enums.ProgressStatus;
import tn.khotwa.biblio.service.ressources.IProgressionService;

import java.util.Map;

@RestController
@RequestMapping("/api/progressions")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProgressionController {

    private final IProgressionService progressionService;

    // POST /api/progressions — mettre à jour
    @PostMapping
    public ResponseEntity<Map<String, Object>> mettreAJour(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody Map<String, Object> body) {

        return ResponseEntity.ok(Map.of("success", true, "data",
            progressionService.mettreAJour(
                userId,
                Long.parseLong(body.get("ressourceId").toString()),
                ProgressStatus.valueOf((String) body.get("statut")),
                body.get("pourcentage")      != null ? Integer.parseInt(body.get("pourcentage").toString())      : null,
                body.get("positionVideoSec") != null ? Integer.parseInt(body.get("positionVideoSec").toString()) : null
            )));
    }

    // POST /api/progressions/{ressourceId}/terminer
    @PostMapping("/{ressourceId}/terminer")
    public ResponseEntity<Map<String, Object>> terminer(
            @RequestHeader("X-User-Id") Long userId,
            @PathVariable Long ressourceId) {

        return ResponseEntity.ok(Map.of("success", true, "message", "Ressource terminée",
            "data", progressionService.marquerCommeTermine(userId, ressourceId)));
    }

    // GET /api/progressions/mes — mes progressions (entrepreneur)
    @GetMapping("/mes")
    public ResponseEntity<Map<String, Object>> mesProgressions(
            @RequestHeader("X-User-Id") Long userId) {

        return ResponseEntity.ok(Map.of("success", true,
            "data", progressionService.getMesProgressions(userId)));
    }

    // ── Endpoints coach ───────────────────────────────────────────────

    // GET /api/progressions/coach/mes-entrepreneurs
    // Retourne les progressions de tous les entrepreneurs suivis par le coach
    @GetMapping("/coach/mes-entrepreneurs")
    public ResponseEntity<Map<String, Object>> progressionsEntrepreneurs(
            @RequestHeader("X-User-Id") Long coachId) {

        return ResponseEntity.ok(Map.of("success", true,
            "data", progressionService.getProgressionsEntrepreneursParCoach(coachId)));
    }

    // GET /api/progressions/coach/entrepreneur/{entrepreneurId}
    // Retourne les progressions d'un entrepreneur spécifique
    @GetMapping("/coach/entrepreneur/{entrepreneurId}")
    public ResponseEntity<Map<String, Object>> progressionsParEntrepreneur(
            @PathVariable Long entrepreneurId) {

        return ResponseEntity.ok(Map.of("success", true,
            "data", progressionService.getProgressionsParEntrepreneur(entrepreneurId)));
    }
}
