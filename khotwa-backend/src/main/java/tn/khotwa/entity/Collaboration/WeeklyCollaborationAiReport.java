package tn.khotwa.entity.collaboration;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.LocalDateTime;
import java.time.ZoneId;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.AiGenerationStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "weekly_collaboration_ai_reports",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_weekly_ai_report_weekly_report", columnNames = "weekly_report_id")
        },
        indexes = {
                @Index(name = "idx_weekly_ai_report_weekly_report", columnList = "weekly_report_id"),
                @Index(name = "idx_weekly_ai_report_generated_at", columnList = "generated_at"),
                @Index(name = "idx_weekly_ai_report_updated_at", columnList = "updated_at")
        }
)
public class WeeklyCollaborationAiReport {

    private static final ZoneId REPORT_ZONE = ZoneId.of("Africa/Tunis");

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "weekly_report_id", nullable = false)
    private WeeklyCollaborationReport weeklyReport;

    @Column(name = "generated_at", nullable = false)
    private LocalDateTime generatedAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "global_insight_json", columnDefinition = "TEXT")
    private String globalInsightJson;

    @Enumerated(EnumType.STRING)
    @Column(name = "global_status", nullable = false, length = 16)
    private AiGenerationStatus globalStatus;

    @Column(name = "global_error", columnDefinition = "TEXT")
    private String globalError;

    @Column(name = "resource_insight_json", columnDefinition = "TEXT")
    private String resourceInsightJson;

    @Enumerated(EnumType.STRING)
    @Column(name = "resource_status", nullable = false, length = 16)
    private AiGenerationStatus resourceStatus;

    @Column(name = "resource_error", columnDefinition = "TEXT")
    private String resourceError;

    @Column(name = "marketing_insight_json", columnDefinition = "TEXT")
    private String marketingInsightJson;

    @Enumerated(EnumType.STRING)
    @Column(name = "marketing_status", nullable = false, length = 16)
    private AiGenerationStatus marketingStatus;

    @Column(name = "marketing_error", columnDefinition = "TEXT")
    private String marketingError;

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now(REPORT_ZONE);

        if (generatedAt == null) {
            generatedAt = now;
        }
        if (updatedAt == null) {
            updatedAt = now;
        }

        if (globalStatus == null) {
            globalStatus = AiGenerationStatus.PENDING;
        }
        if (resourceStatus == null) {
            resourceStatus = AiGenerationStatus.PENDING;
        }
        if (marketingStatus == null) {
            marketingStatus = AiGenerationStatus.PENDING;
        }
    }

    @PreUpdate
    public void preUpdate() {
        updatedAt = LocalDateTime.now(REPORT_ZONE);
    }
}