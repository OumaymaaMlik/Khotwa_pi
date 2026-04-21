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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Index;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.CampaignType;
import tn.khotwa.enums.Collaboration.MarketingCollaborationStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "marketing_collaborations", indexes = @Index(columnList = "createdAt"))
public class MarketingCollaboration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "collaboration_id", nullable = false)
    private Collaboration collaboration;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private String objective;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampaignType campaignType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MarketingCollaborationStatus status = MarketingCollaborationStatus.DRAFT;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "marketingCollaboration", fetch = FetchType.LAZY)
    private List<MarketingContentTask> tasks = new ArrayList<>();

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }
}