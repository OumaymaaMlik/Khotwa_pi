package tn.khotwa.dto.feedback;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FeedbackDTO {
    private Long id;
    private Long userId;
    private String userName;
    private Integer rating;
    private String subject;
    private String comment;
    private String screenshotUrl;
    private boolean reviewed;
    private LocalDateTime reviewedAt;
    private LocalDateTime createdAt;
}
