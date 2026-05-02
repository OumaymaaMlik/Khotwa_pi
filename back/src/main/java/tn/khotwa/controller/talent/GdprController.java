package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.config.Auditable;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.TalentProfileRepository;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/me")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class GdprController {

    private final TalentProfileRepository talentRepository;

    @Auditable(action = "EXPORT_DONNEES_RGPD")
    @GetMapping("/export")
    public ResponseEntity<TalentProfile> exportData(@RequestParam Long talentId) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent not found"));
        talent.setDataExportRequested(true);
        talentRepository.save(talent);
        return ResponseEntity.ok(talent);
    }

    @Auditable(action = "SUPPRESSION_DONNEES_RGPD")
    @DeleteMapping("/delete")
    public ResponseEntity<String> requestDeletion(@RequestParam Long talentId) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent not found"));
        talent.setDeletionRequested(true);
        talentRepository.save(talent);
        return ResponseEntity.ok("Demande de suppression enregistrée conformément au RGPD.");
    }
    
    @PostMapping("/consent")
    public ResponseEntity<String> registerConsent(@RequestParam Long talentId) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent not found"));
        talent.setRgpdConsentDate(LocalDateTime.now());
        talentRepository.save(talent);
        return ResponseEntity.ok("Consentement RGPD enregistré.");
    }
}
