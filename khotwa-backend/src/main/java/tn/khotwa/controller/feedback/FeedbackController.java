package tn.khotwa.controller.feedback;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.dto.feedback.FeedbackDTO;
import tn.khotwa.security.AppUserPrincipal;
import tn.khotwa.service.feedback.FeedbackService;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<FeedbackDTO> submitFeedback(
            @AuthenticationPrincipal AppUserPrincipal principal,
            @RequestParam("rating") Integer rating,
            @RequestParam("subject") String subject,
            @RequestParam("comment") String comment,
            @RequestParam(value = "screenshot", required = false) MultipartFile screenshot
    ) {
        if (principal == null) {
            return ResponseEntity.status(401).build();
        }
        return ResponseEntity.ok(
                feedbackService.submitFeedback(principal.getIdUser(), rating, subject, comment, screenshot)
        );
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<FeedbackDTO>> getAdminFeedbacks() {
        return ResponseEntity.ok(feedbackService.getAllFeedbacksForAdmin());
    }

    @PutMapping("/{id}/review")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<FeedbackDTO> markFeedbackReviewed(@PathVariable Long id) {
        return ResponseEntity.ok(feedbackService.markAsReviewed(id));
    }
}
