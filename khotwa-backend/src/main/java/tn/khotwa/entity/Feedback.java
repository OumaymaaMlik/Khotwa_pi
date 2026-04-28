package tn.khotwa.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private Integer rating;

    private String subject;

    @Column(columnDefinition = "TEXT")
    private String comment;

    private String screenshotUrl;

    private boolean reviewed = false;

    private LocalDateTime reviewedAt;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        reviewed = false;
    }
}
