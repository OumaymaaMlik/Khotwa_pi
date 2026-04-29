package tn.khotwa.service.feedback;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.config.websocket.WebSocketEventPublisher;
import tn.khotwa.DTO.feedback.FeedbackDTO;
import tn.khotwa.DTO.messaging.NotificationDTO;
import tn.khotwa.entity.Feedback;
import tn.khotwa.entity.NotificationType;
import tn.khotwa.repository.User.UserRepository;
import tn.khotwa.repository.feedback.FeedbackRepository;
import tn.khotwa.service.messaging.NotificationService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FeedbackService {

    private static final Long ADMIN_ID = 1L;

    private final FeedbackRepository feedbackRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    private final WebSocketEventPublisher eventPublisher;

    @Value("${app.upload.dir:./uploads}")
    private String uploadBaseDir;

    public FeedbackDTO submitFeedback(Long userId, Integer rating, String subject, String comment, MultipartFile screenshot) {
        Feedback feedback = new Feedback();
        feedback.setUserId(userId);
        feedback.setRating(rating);
        feedback.setSubject(subject);
        feedback.setComment(comment);
        feedback.setScreenshotUrl(storeScreenshotIfPresent(screenshot));
        Feedback saved = feedbackRepository.save(feedback);

        String senderName = userRepository.findById(userId)
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("User " + userId);
        try {
            NotificationDTO notif = notificationService.createNotification(
                    ADMIN_ID,
                    userId,
                    null,
                    "New feedback submitted by " + senderName,
                    NotificationType.FEEDBACK_SUBMITTED
            );
            eventPublisher.publishNotification(notif);
        } catch (Exception ex) {
            // Notification failure should never block feedback persistence.
            log.error("Feedback saved but admin notification failed for userId={}", userId, ex);
        }

        return toDTO(saved);
    }

    public List<FeedbackDTO> getAllFeedbacksForAdmin() {
        return feedbackRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public FeedbackDTO markAsReviewed(Long feedbackId) {
        Feedback feedback = feedbackRepository.findById(feedbackId)
                .orElseThrow(() -> new RuntimeException("Feedback not found"));
        feedback.setReviewed(true);
        feedback.setReviewedAt(LocalDateTime.now());
        return toDTO(feedbackRepository.save(feedback));
    }

    private String storeScreenshotIfPresent(MultipartFile screenshot) {
        if (screenshot == null || screenshot.isEmpty()) {
            return null;
        }
        try {
            String originalName = screenshot.getOriginalFilename() == null ? "attachment" : screenshot.getOriginalFilename();
            String extension = "";
            int dot = originalName.lastIndexOf('.');
            if (dot >= 0) {
                extension = originalName.substring(dot);
            }
            String fileName = "feedback-" + UUID.randomUUID() + extension;
            Path feedbackDir = Paths.get(uploadBaseDir, "feedback").toAbsolutePath().normalize();
            Files.createDirectories(feedbackDir);
            Path target = feedbackDir.resolve(fileName);
            Files.copy(screenshot.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);
            return "/khotwa/uploads/feedback/" + fileName;
        } catch (IOException ex) {
            throw new RuntimeException("Failed to store feedback screenshot", ex);
        }
    }

    private FeedbackDTO toDTO(Feedback feedback) {
        FeedbackDTO dto = new FeedbackDTO();
        dto.setId(feedback.getId());
        dto.setUserId(feedback.getUserId());
        dto.setUserName(userRepository.findById(feedback.getUserId())
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("User " + feedback.getUserId()));
        dto.setRating(feedback.getRating());
        dto.setSubject(feedback.getSubject());
        dto.setComment(feedback.getComment());
        dto.setScreenshotUrl(feedback.getScreenshotUrl());
        dto.setReviewed(feedback.isReviewed());
        dto.setReviewedAt(feedback.getReviewedAt());
        dto.setCreatedAt(feedback.getCreatedAt());
        return dto;
    }
}
