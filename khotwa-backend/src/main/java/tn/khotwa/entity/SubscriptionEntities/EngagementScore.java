package tn.khotwa.entity.SubscriptionEntities;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.SubscriptionEnums.RiskLevel;

import java.time.LocalDateTime;


@Entity
@Table(name = "engagementScore")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EngagementScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "risk_score", nullable = false)
    private Integer riskScore;

    @Enumerated(EnumType.STRING)
    @Column(name = "risk_level", nullable = false)
    private RiskLevel riskLevel;

    @Column(name = "signals_detail", length = 1000)
    private String signalsDetail;

    @Column(name = "ai_retention_message", length = 2000)
    private String aiRetentionMessage;

    @Column(name = "email_sent", nullable = false)
    @Builder.Default
    private Boolean emailSent = false;

    @Column(name = "computed_at", nullable = false)
    @Builder.Default
    private LocalDateTime computedAt = LocalDateTime.now();

    @Column(name = "email_sent_at")
    private LocalDateTime emailSentAt;


}