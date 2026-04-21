package tn.khotwa.entity.Collaboration;

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
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.RequestStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "collaboration_requests", indexes = @Index(columnList = "createdAt"))
public class CollaborationRequest {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    private LocalDateTime respondedAt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RequestStatus status = RequestStatus.PENDING;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "requester_user_id", nullable = false)
    private User requesterUser;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "target_user_id", nullable = false)
    private User targetUser;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "target_collaboration_id")
    private Collaboration targetCollaboration;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CollaborationType type;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }

    public CollaborationRequestScenario getScenario() {
        return targetCollaboration == null
                ? CollaborationRequestScenario.PROJECT_INVITATION
                : CollaborationRequestScenario.COLLABORATION_JOIN_REQUEST;
    }

    public boolean isProjectInvitation() {
        return getScenario() == CollaborationRequestScenario.PROJECT_INVITATION;
    }

    public boolean isJoinRequest() {
        return getScenario() == CollaborationRequestScenario.COLLABORATION_JOIN_REQUEST;
    }

    public User getExpectedResponder() {
        return isProjectInvitation()
                ? targetUser
                : targetCollaboration.getOwner();
    }
}
