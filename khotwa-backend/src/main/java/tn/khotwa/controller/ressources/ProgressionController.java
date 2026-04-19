package tn.khotwa.controller.ressources;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.enums.ProgressStatus;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.service.ressources.IProgressionService;
import tn.khotwa.service.UserServices.CurrentUserService;

import java.util.Map;

@RestController
@RequestMapping("/api/progressions")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProgressionController {

    private final IProgressionService progressionService;
    private final CurrentUserService  currentUser;

    // POST /api/progressions
    @PostMapping
    public ResponseEntity<Map<String, Object>> mettreAJour(@RequestBody Map<String, Object> body) {
        return ResponseEntity.ok(Map.of("success", true, "data",
                progressionService.mettreAJour(
                        currentUser.getCurrentUserId(),
                        Long.parseLong(body.get("ressourceId").toString()),
                        ProgressStatus.valueOf((String) body.get("statut")),
                        body.get("pourcentage")      != null ? Integer.parseInt(body.get("pourcentage").toString())      : null,
                        body.get("positionVideoSec") != null ? Integer.parseInt(body.get("positionVideoSec").toString()) : null
                )));
    }

    // POST /api/progressions/{ressourceId}/terminer
    @PostMapping("/{ressourceId}/terminer")
    public ResponseEntity<Map<String, Object>> terminer(@PathVariable Long ressourceId) {
        return ResponseEntity.ok(Map.of("success", true, "message", "Ressource terminée",
                "data", progressionService.marquerCommeTermine(currentUser.getCurrentUserId(), ressourceId)));
    }

    // GET /api/progressions/mes
    @GetMapping("/mes")
    public ResponseEntity<Map<String, Object>> mesProgressions() {
        return ResponseEntity.ok(Map.of("success", true,
                "data", progressionService.getMesProgressions(currentUser.getCurrentUserId())));
    }

    // GET /api/progressions/coach/mes-entrepreneurs
    @GetMapping("/coach/mes-entrepreneurs")
    public ResponseEntity<Map<String, Object>> progressionsEntrepreneurs() {
        if (currentUser.getCurrentUserRole() != Role.COACH) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("success", false, "message", "Accès réservé aux coachs."));
        }
        return ResponseEntity.ok(Map.of("success", true,
                "data", progressionService.getProgressionsEntrepreneursParCoach(currentUser.getCurrentUserId())));
    }

    // GET /api/progressions/coach/entrepreneur/{entrepreneurId}
    @GetMapping("/coach/entrepreneur/{entrepreneurId}")
    public ResponseEntity<?> progressionsParEntrepreneur(@PathVariable Long entrepreneurId) {
        if (currentUser.getCurrentUserRole() != Role.COACH) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("success", false, "message", "Accès réservé aux coachs."));
        }
        Long coachId = currentUser.getCurrentUserId();

        if (!progressionService.isCoachLinkedToEntrepreneur(coachId, entrepreneurId)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of(
                            "success", false,
                            "message", "Accès refusé : Cet entrepreneur ne vous est pas affecté."
                    ));
        }

        return ResponseEntity.ok(Map.of(
                "success", true,
                "data", progressionService.getProgressionsParEntrepreneur(entrepreneurId)
        ));
    }
}