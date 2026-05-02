package tn.khotwa.dto.collaboration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.CollaborationType;

public record WeeklyCollaborationReportDTO(
        Long id,
        LocalDate weekStartDate,
        LocalDate weekEndDate,
        LocalDateTime generatedAt,
        int collaborationsCreatedThisWeek,
        int activeCollaborations,
        int suspendedCollaborations,
        int closedCollaborations,
        int collaborationsClosedThisWeek,
        Map<String, Integer> collaborationsByType,
        int pendingCollaborationRequests,
        int acceptedRequestsThisWeek,
        int rejectedRequestsThisWeek,
        int newMembersThisWeek,
        int invitationsSentThisWeek,
        int invitationsAcceptedThisWeek,
        int invitationsRejectedThisWeek,
        int openResourceRequests,
        int fulfilledResourceRequests,
        int cancelledResourceRequests,
        int activeMarketingCampaigns,
        int completedMarketingCampaigns,
        int overdueMarketingTasks,
        int publishedMarketingTasks,
        int totalMarketingTasks,
        String riskLevel,
        GlobalCollaborationHealth globalCollaborationHealth,
        ResourceCollaborationAnalysis resourceCollaborationAnalysis,
        MarketingCollaborationAnalysis marketingCollaborationAnalysis
) {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    public static WeeklyCollaborationReportDTO fromEntity(WeeklyCollaborationReport report) {
        int suspendedCollaborations = report.getSuspendedCollaborations();
        int pendingCollaborationRequests = report.getPendingCollaborationRequests();
        int openResourceRequests = report.getOpenResourceRequests();
        int fulfilledResourceRequests = report.getFulfilledResourceRequests();
        int cancelledResourceRequests = report.getCancelledResourceRequests();
        int activeMarketingCampaigns = report.getActiveMarketingCampaigns();
        int completedMarketingCampaigns = report.getCompletedMarketingCampaigns();
        int overdueMarketingTasks = report.getOverdueMarketingTasks();
        int publishedMarketingTasks = report.getPublishedMarketingTasks();
        int totalMarketingTasks = report.getTotalMarketingTasks();
        Map<String, Integer> collaborationsByType = parseCollaborationsByType(report.getCollaborationsByTypeJson());
        GlobalCollaborationHealth globalCollaborationHealth = new GlobalCollaborationHealth(
                report.getCollaborationsCreatedThisWeek(),
                report.getActiveCollaborations(),
                suspendedCollaborations,
                report.getClosedCollaborations(),
                pendingCollaborationRequests,
                report.getAcceptedRequestsThisWeek(),
                report.getRejectedRequestsThisWeek(),
                report.getNewMembersThisWeek(),
                report.getInvitationsSentThisWeek(),
                report.getInvitationsAcceptedThisWeek(),
                report.getInvitationsRejectedThisWeek(),
                collaborationsByType,
                safeRate(
                        report.getAcceptedRequestsThisWeek(),
                        report.getAcceptedRequestsThisWeek() + report.getRejectedRequestsThisWeek()
                ),
                safeRate(report.getInvitationsAcceptedThisWeek(), report.getInvitationsSentThisWeek())
        );
        ResourceCollaborationAnalysis resourceCollaborationAnalysis = new ResourceCollaborationAnalysis(
                openResourceRequests,
                fulfilledResourceRequests,
                cancelledResourceRequests,
                openResourceRequests + fulfilledResourceRequests + cancelledResourceRequests,
                safeRate(fulfilledResourceRequests,
                        openResourceRequests + fulfilledResourceRequests + cancelledResourceRequests),
                safeRate(openResourceRequests,
                        openResourceRequests + fulfilledResourceRequests + cancelledResourceRequests)
        );
        MarketingCollaborationAnalysis marketingCollaborationAnalysis = new MarketingCollaborationAnalysis(
                activeMarketingCampaigns,
                completedMarketingCampaigns,
                overdueMarketingTasks,
                publishedMarketingTasks,
                totalMarketingTasks,
                safeRate(overdueMarketingTasks, totalMarketingTasks),
                safeRate(publishedMarketingTasks, totalMarketingTasks)
        );

        return new WeeklyCollaborationReportDTO(
                report.getId(),
                report.getWeekStartDate(),
                report.getWeekEndDate(),
                report.getGeneratedAt(),
                report.getCollaborationsCreatedThisWeek(),
                report.getActiveCollaborations(),
                suspendedCollaborations,
                report.getClosedCollaborations(),
                report.getCollaborationsClosedThisWeek() != null ? report.getCollaborationsClosedThisWeek() : 0,
                collaborationsByType,
                pendingCollaborationRequests,
                report.getAcceptedRequestsThisWeek(),
                report.getRejectedRequestsThisWeek(),
                report.getNewMembersThisWeek(),
                report.getInvitationsSentThisWeek(),
                report.getInvitationsAcceptedThisWeek(),
                report.getInvitationsRejectedThisWeek(),
                openResourceRequests,
                fulfilledResourceRequests,
                cancelledResourceRequests,
                activeMarketingCampaigns,
                completedMarketingCampaigns,
                overdueMarketingTasks,
                publishedMarketingTasks,
                totalMarketingTasks,
                determineRiskLevel(
                        pendingCollaborationRequests,
                        openResourceRequests,
                        overdueMarketingTasks,
                        suspendedCollaborations
                ),
                globalCollaborationHealth,
                resourceCollaborationAnalysis,
                marketingCollaborationAnalysis
        );
    }

    private static String determineRiskLevel(
            int pendingCollaborationRequests,
            int openResourceRequests,
            int overdueMarketingTasks,
            int suspendedCollaborations) {
        if (overdueMarketingTasks > 0 || suspendedCollaborations >= 3 || pendingCollaborationRequests >= 10) {
            return "HIGH";
        }

        if (pendingCollaborationRequests >= 5 || openResourceRequests >= 5 || suspendedCollaborations >= 1) {
            return "MEDIUM";
        }

        return "LOW";
    }

    private static Map<String, Integer> parseCollaborationsByType(String json) {
        Map<String, Integer> defaults = new LinkedHashMap<>();
        for (CollaborationType type : CollaborationType.values()) {
            defaults.put(type.name(), 0);
        }

        if (json == null || json.isBlank()) {
            return defaults;
        }

        try {
            Map<String, Integer> parsed = OBJECT_MAPPER.readValue(json, new TypeReference<Map<String, Integer>>() {
            });
            if (parsed == null) {
                return defaults;
            }
            parsed.forEach((key, value) -> defaults.put(key, value != null ? value : 0));
            return defaults;
        } catch (Exception exception) {
            return defaults;
        }
    }

    private static double safeRate(long numerator, long denominator) {
        if (denominator <= 0 || numerator <= 0) {
            return 0.0;
        }

        return BigDecimal.valueOf(numerator)
                .divide(BigDecimal.valueOf(denominator), 4, RoundingMode.HALF_UP)
                .doubleValue();
    }

    public record GlobalCollaborationHealth(
            int collaborationsCreatedThisWeek,
            int activeCollaborations,
            int suspendedCollaborations,
            int closedCollaborations,
            int pendingCollaborationRequests,
            int acceptedRequestsThisWeek,
            int rejectedRequestsThisWeek,
            int newMembersThisWeek,
            int invitationsSentThisWeek,
            int invitationsAcceptedThisWeek,
            int invitationsRejectedThisWeek,
            Map<String, Integer> collaborationsByType,
            double requestConversionRate,
            double invitationAcceptanceRate
    ) {
    }

    public record ResourceCollaborationAnalysis(
            int openResourceRequests,
            int fulfilledResourceRequests,
            int cancelledResourceRequests,
            int totalResourceRequests,
            double resourceFulfillmentRate,
            double resourceBacklogRate
    ) {
    }

    public record MarketingCollaborationAnalysis(
            int activeMarketingCampaigns,
            int completedMarketingCampaigns,
            int overdueMarketingTasks,
            int publishedMarketingTasks,
            int totalMarketingTasks,
            double overdueTaskRatio,
            double marketingExecutionRate
    ) {
    }
}

