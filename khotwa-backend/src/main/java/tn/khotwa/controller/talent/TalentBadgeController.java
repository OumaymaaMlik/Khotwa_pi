package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.DTO.talent.TalentBadgeDTO;
import tn.khotwa.service.sertalent.TalentBadgeService;
import java.util.List;

@RestController
@RequestMapping("/api/talents/{talentId}/badges")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class TalentBadgeController {

    private final TalentBadgeService badgeService;

    @GetMapping
    public ResponseEntity<List<TalentBadgeDTO>> getBadges(@PathVariable Long talentId) {
        return ResponseEntity.ok(badgeService.getBadgesForTalent(talentId));
    }

    @PostMapping
    public ResponseEntity<TalentBadgeDTO> assignBadge(@PathVariable Long talentId,
                                                      @RequestParam String badgeType,
                                                      @RequestParam String description) {
        return ResponseEntity.ok(badgeService.assignBadge(talentId, badgeType, description));
    }
}
