// controller/TalentController.java
package tn.khotwa.controller.talent;

import tn.khotwa.DTO.talent.TalentProfileDTO;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.service.sertalent.TalentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/talents")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class TalentController {

    private final TalentService talentService;

    @PostMapping
    public ResponseEntity<TalentProfile> creerProfil(@RequestBody TalentProfileDTO dto) {
        return ResponseEntity.ok(talentService.creerProfil(dto));
    }

    @GetMapping
    public ResponseEntity<List<TalentProfile>> getAllTalents() {
        return ResponseEntity.ok(talentService.getAllTalents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TalentProfile> getTalent(@PathVariable Long id) {
        return ResponseEntity.ok(talentService.getTalentById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TalentProfile> modifierProfil(@PathVariable Long id,
                                                        @RequestBody TalentProfileDTO dto) {
        return ResponseEntity.ok(talentService.modifierProfil(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerProfil(@PathVariable Long id) {
        talentService.supprimerProfil(id);
        return ResponseEntity.noContent().build();
    }
}