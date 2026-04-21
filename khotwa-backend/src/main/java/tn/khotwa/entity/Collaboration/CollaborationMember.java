package tn.khotwa.entity.Collaboration;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Index;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.User.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "collaboration_members",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"collaboration_id", "user_id"})
        },
        indexes = @Index(columnList = "joinedAt")
)
public class CollaborationMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "collaboration_id", nullable = false)
    private Collaboration collaboration;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

        @Column(nullable = false, updatable = false)
    private LocalDateTime joinedAt;
        @PrePersist
        public void prePersist() {
                if (joinedAt == null) {
                        joinedAt = LocalDateTime.now();
                }
        }
}