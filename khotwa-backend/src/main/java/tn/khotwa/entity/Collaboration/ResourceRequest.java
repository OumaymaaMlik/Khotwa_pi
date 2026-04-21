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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.ResourceRequestStatus;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.enums.Collaboration.Urgency;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "resource_requests", indexes = @Index(columnList = "createdAt"))
public class ResourceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "collaboration_id", nullable = false)
    private Collaboration collaboration;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "requester_user_id", nullable = false)
    private User requesterUser;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ResourceType resourceType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Urgency urgency = Urgency.MEDIUM;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ResourceRequestStatus status = ResourceRequestStatus.OPEN;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }
}