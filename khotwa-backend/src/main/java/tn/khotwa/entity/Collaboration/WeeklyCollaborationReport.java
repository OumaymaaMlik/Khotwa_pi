package tn.khotwa.entity.collaboration;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "weekly_collaboration_reports",
        uniqueConstraints = @UniqueConstraint(name = "uk_weekly_collaboration_report_week_start", columnNames = "week_start_date"),
        indexes = {
                @Index(name = "idx_weekly_collaboration_report_week_start", columnList = "week_start_date"),
                @Index(name = "idx_weekly_collaboration_report_generated_at", columnList = "generated_at")
        }
)
public class WeeklyCollaborationReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "week_start_date", nullable = false, updatable = false)
    private LocalDate weekStartDate;

    @Column(name = "week_end_date", nullable = false, updatable = false)
    private LocalDate weekEndDate;

    @Column(name = "generated_at", nullable = false)
    private LocalDateTime generatedAt;

    @Column(name = "collaborations_created_this_week", nullable = false)
    private int collaborationsCreatedThisWeek;

    @Column(name = "active_collaborations", nullable = false)
    private int activeCollaborations;

    @Column(name = "suspended_collaborations", nullable = false)
    private int suspendedCollaborations;

    @Column(name = "closed_collaborations", nullable = false)
    private int closedCollaborations;

    @Column(name = "collaborations_closed_this_week")
    private Integer collaborationsClosedThisWeek;

    @Column(name = "collaborations_by_type_json", nullable = false, columnDefinition = "TEXT")
    private String collaborationsByTypeJson = "{}";

    @Column(name = "pending_collaboration_requests", nullable = false)
    private int pendingCollaborationRequests;

    @Column(name = "accepted_requests_this_week", nullable = false)
    private int acceptedRequestsThisWeek;

    @Column(name = "rejected_requests_this_week", nullable = false)
    private int rejectedRequestsThisWeek;

    @Column(name = "new_members_this_week", nullable = false)
    private int newMembersThisWeek;

    @Column(name = "invitations_sent_this_week", nullable = false)
    private int invitationsSentThisWeek;

    @Column(name = "invitations_accepted_this_week", nullable = false)
    private int invitationsAcceptedThisWeek;

    @Column(name = "invitations_rejected_this_week", nullable = false)
    private int invitationsRejectedThisWeek;

    @Column(name = "open_resource_requests", nullable = false)
    private int openResourceRequests;

    @Column(name = "fulfilled_resource_requests", nullable = false)
    private int fulfilledResourceRequests;

    @Column(name = "cancelled_resource_requests", nullable = false)
    private int cancelledResourceRequests;

    @Column(name = "active_marketing_campaigns", nullable = false)
    private int activeMarketingCampaigns;

    @Column(name = "completed_marketing_campaigns", nullable = false)
    private int completedMarketingCampaigns;

    @Column(name = "overdue_marketing_tasks", nullable = false)
    private int overdueMarketingTasks;

    @Column(name = "published_marketing_tasks", nullable = false)
    private int publishedMarketingTasks;

    @Column(name = "total_marketing_tasks", nullable = false)
    private int totalMarketingTasks;

    @PrePersist
    public void prePersist() {
        if (generatedAt == null) {
            generatedAt = LocalDateTime.now();
        }
        if (collaborationsByTypeJson == null) {
            collaborationsByTypeJson = "{}";
        }
    }
}

