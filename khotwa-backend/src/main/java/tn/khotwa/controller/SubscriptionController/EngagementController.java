package tn.khotwa.controller.SubscriptionController;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.Subscription.EngagementScoreDTO;
import tn.khotwa.service.SubscriptionServices.EngagementScoreService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/engagement")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EngagementController {

    private final EngagementScoreService churnScoringService;

    @GetMapping("/scores")
    public ResponseEntity<List<EngagementScoreDTO>> getAllLatestScores() {
        return ResponseEntity.ok(churnScoringService.getLatestScores());
    }

    @GetMapping("/scores/{userId}")
    public ResponseEntity<EngagementScoreDTO> getScoreForUser(@PathVariable Long userId) {
        return churnScoringService
                .getLatestScoreForUser(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/compute/{userId}")
    public ResponseEntity<EngagementScoreDTO> computeForUser(@PathVariable Long userId) {
        EngagementScoreDTO result = churnScoringService.computeForUser(userId);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/compute/all")
    public ResponseEntity<List<EngagementScoreDTO>> computeForAll() {
        List<EngagementScoreDTO> results = churnScoringService.computeForAllUsers();
        return ResponseEntity.ok(results);
    }

    @PostMapping("/send-pending-emails")
    public ResponseEntity<Map<String, Object>> sendPendingEmails() {
        int sent = churnScoringService.sendPendingRetentionEmails();
        return ResponseEntity.ok(Map.of(
                "status",      "done",
                "emailsSent",  sent
        ));
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        return ResponseEntity.ok(churnScoringService.getStats());
    }
}