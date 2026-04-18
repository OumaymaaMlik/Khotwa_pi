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

    /** Utilisateur évalué */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    /** Score de risque de churn (0 = aucun risque, 100 = churn quasi-certain) */
    @Column(name = "risk_score", nullable = false)
    private Integer riskScore;

    /** Catégorie calculée à partir du score */
    @Enumerated(EnumType.STRING)
    @Column(name = "risk_level", nullable = false)
    private RiskLevel riskLevel;

    /** Détail des signaux détectés (JSON-like string pour traçabilité) */
    @Column(name = "signals_detail", length = 1000)
    private String signalsDetail;

    /** Message de rétention généré par Claude */
    @Column(name = "ai_retention_message", length = 2000)
    private String aiRetentionMessage;

    /** Email de rétention envoyé ? */
    @Column(name = "email_sent", nullable = false)
    @Builder.Default
    private Boolean emailSent = false;

    /** Date du dernier calcul */
    @Column(name = "computed_at", nullable = false)
    @Builder.Default
    private LocalDateTime computedAt = LocalDateTime.now();

    /** Date d'envoi de l'email (null si pas encore envoyé) */
    @Column(name = "email_sent_at")
    private LocalDateTime emailSentAt;


}