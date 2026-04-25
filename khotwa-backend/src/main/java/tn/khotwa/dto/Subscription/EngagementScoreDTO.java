package tn.khotwa.dto.Subscription;

import lombok.Getter;
import lombok.Setter;
import tn.khotwa.entity.Subscription.EngagementScore;
import tn.khotwa.enums.SubscriptionEnums.RiskLevel;

import java.time.LocalDateTime;
@Getter
@Setter

public class EngagementScoreDTO {

    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String startup;
    private String planType;

    private Integer riskScore;
    private RiskLevel riskLevel;
    private String riskLevelLabel;

    private String signalsDetail;
    private String aiRetentionMessage;

    private Boolean emailSent;
    private LocalDateTime emailSentAt;
    private LocalDateTime computedAt;

    public EngagementScoreDTO() {}

    public static EngagementScoreDTO from(EngagementScore signal) {
        EngagementScoreDTO dto = new EngagementScoreDTO();
        if (signal.getUser() != null) {
            dto.userId    = signal.getUser().getIdUser();
            dto.firstName = signal.getUser().getFirstName();
            dto.lastName  = signal.getUser().getLastName();
            dto.email     = signal.getUser().getEmailAddress();
            dto.startup   = signal.getUser().getStartup();
            dto.planType  = signal.getUser().getPlanType() != null
                    ? signal.getUser().getPlanType().name() : "FREE";
        }
        dto.riskScore          = signal.getRiskScore();
        dto.riskLevel          = signal.getRiskLevel();
        dto.riskLevelLabel     = resolveLabel(signal.getRiskLevel());
        dto.signalsDetail      = signal.getSignalsDetail();
        dto.aiRetentionMessage = signal.getAiRetentionMessage();
        dto.emailSent          = signal.getEmailSent();
        dto.emailSentAt        = signal.getEmailSentAt();
        dto.computedAt         = signal.getComputedAt();
        return dto;
    }

    private static String resolveLabel(RiskLevel level) {
        if (level == null) return "Inconnu";
        return switch (level) {
            case HIGH   -> "🔴 Élevé";
            case MEDIUM -> "🟠 Moyen";
            case LOW    -> "🟢 Faible";
        };
    }




}