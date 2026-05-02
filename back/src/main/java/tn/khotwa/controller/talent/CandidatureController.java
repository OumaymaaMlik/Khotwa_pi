// controller/CandidatureController.java
package tn.khotwa.controller.talent;

import tn.khotwa.dto.talent.MatchingResponseDTO;
import tn.khotwa.dto.talent.AppliedTalentSummaryDTO;
import tn.khotwa.entity.talent.Candidature;
import tn.khotwa.service.sertalent.CandidatureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/candidatures")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class CandidatureController {

    private final CandidatureService candidatureService;

    // POST /api/candidatures  body: { talentId, annonceId, message }
    @PostMapping
    public ResponseEntity<Candidature> postuler(@RequestBody Map<String, Object> body) {
        Long talentId = Long.valueOf(body.get("talentId").toString());
        Long annonceId = Long.valueOf(body.get("annonceId").toString());
        String message = (String) body.getOrDefault("message", "");
        return ResponseEntity.ok(candidatureService.postuler(talentId, annonceId, message));
    }

    // GET /api/candidatures/matching/{annonceId} — Liste des candidats triés par score
    @GetMapping("/matching/{annonceId}")
    public ResponseEntity<List<MatchingResponseDTO>> getMatching(@PathVariable Long annonceId) {
        return ResponseEntity.ok(candidatureService.getMatchingPourAnnonce(annonceId));
    }

    // GET /api/candidatures/annonce/{annonceId} — Liste des candidatures pour une annonce
    @GetMapping("/annonce/{annonceId}")
    public ResponseEntity<List<Candidature>> getCandidaturesAnnonce(@PathVariable Long annonceId) {
        return ResponseEntity.ok(candidatureService.getCandidaturesParAnnonce(annonceId));
    }
    @GetMapping("/talent/{talentId}")
    public ResponseEntity<List<Candidature>> getCandidaturesByTalent(@PathVariable Long talentId) {
        return ResponseEntity.ok(candidatureService.getCandidaturesByTalent(talentId));
    }

    @GetMapping("/talents-applied")
    public ResponseEntity<List<AppliedTalentSummaryDTO>> getTalentsApplied() {
        return ResponseEntity.ok(candidatureService.getTalentsWithAppliedOffers());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Candidature> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String statut = body.getOrDefault("statut", "EN_ATTENTE");
        return ResponseEntity.ok(candidatureService.updateStatut(id, statut));
    }

    @PutMapping("/{id}/contacted")
    public ResponseEntity<Candidature> markContacted(@PathVariable Long id) {
        return ResponseEntity.ok(candidatureService.markContacted(id));
    }

    @GetMapping("/accepted")
    public ResponseEntity<List<Candidature>> getAccepted() {
        return ResponseEntity.ok(candidatureService.getAcceptedCandidatures());
    }
}