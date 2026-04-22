package tn.khotwa.entity.collaboration;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Index;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.collaboration.RequestStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(
        name = "collaboration_requests",
        indexes = {
                @Index(name = "idx_collaboration_request_created_at", columnList = "created_at"),
                @Index(
                        name = "idx_collaboration_request_pending_lookup",
                        columnList = "requester_user_id,target_user_id,target_collaboration_id,scenario,status"
                )
        }
)
public class CollaborationRequest {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "processed_at")
    private LocalDateTime processedAt;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private RequestStatus status = RequestStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(name = "scenario", nullable = false)
    private CollaborationRequestScenario scenario;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "requester_user_id", nullable = false)
    private User requesterUser;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "target_user_id", nullable = false)
    private User targetUser;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "target_collaboration_id", nullable = false)
    private Collaboration targetCollaboration;

    @PrePersist
    @PreUpdate
    public void syncState() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }

        if (targetCollaboration != null) {
            project = targetCollaboration.getProject();
        }

        if (scenario == null) {
            scenario = inferScenario();
        }
    }

    public CollaborationRequestScenario getScenario() {
        return scenario != null ? scenario : inferScenario();
    }

    public boolean isCollaborationInvitation() {
        return getScenario() == CollaborationRequestScenario.COLLAB_INVITATION;
    }

    public boolean isJoinRequest() {
        return getScenario() == CollaborationRequestScenario.JOIN_REQUEST;
    }

    public User getExpectedResponder() {
        return targetUser;
    }

    public User getSubjectUser() {
        return isCollaborationInvitation() ? targetUser : requesterUser;
    }

    private CollaborationRequestScenario inferScenario() {
        if (targetCollaboration == null || targetCollaboration.getOwner() == null || targetUser == null) {
            return null;
        }

        return targetUser.getIdUser().equals(targetCollaboration.getOwner().getIdUser())
                ? CollaborationRequestScenario.JOIN_REQUEST
                : CollaborationRequestScenario.COLLAB_INVITATION;
    }
}

