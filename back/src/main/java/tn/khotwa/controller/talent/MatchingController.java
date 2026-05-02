package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.talent.MatchingResultDTO;
import tn.khotwa.service.sertalent.MatchingService;

@RestController
@RequestMapping("/api/matching")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class MatchingController {

    private final MatchingService matchingService;

    @GetMapping("/{talentId}/{jobId}")
    public ResponseEntity<MatchingResultDTO> getMatching(@PathVariable Long talentId, @PathVariable Long jobId) {
        return ResponseEntity.ok(matchingService.calculateDetailedMatching(talentId, jobId));
    }
}
