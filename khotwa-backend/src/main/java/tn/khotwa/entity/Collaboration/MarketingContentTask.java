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
import tn.khotwa.enums.Collaboration.ContentType;
import tn.khotwa.enums.Collaboration.Platform;
import tn.khotwa.enums.Collaboration.TaskStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "marketing_content_tasks", indexes = @Index(columnList = "dueDate"))
public class MarketingContentTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "marketing_collaboration_id", nullable = false)
    private MarketingCollaboration marketingCollaboration;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "assigned_user_id", nullable = false)
    private User assignedUser;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ContentType contentType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Platform platform;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskStatus status = TaskStatus.TODO;

    private LocalDateTime dueDate;

    private LocalDateTime publishedAt;

    @PrePersist
    public void prePersist() {
        // No pre-persist logic needed
    }
}