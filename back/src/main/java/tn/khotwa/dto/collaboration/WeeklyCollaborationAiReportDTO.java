package tn.khotwa.dto.collaboration;

import java.time.LocalDateTime;
import tn.khotwa.entity.collaboration.WeeklyCollaborationAiReport;
import tn.khotwa.enums.collaboration.AiGenerationStatus;

public record WeeklyCollaborationAiReportDTO(
        Long id,
        Long weeklyReportId,
        LocalDateTime generatedAt,
        LocalDateTime updatedAt,
        String globalInsightJson,
        AiGenerationStatus globalStatus,
        String globalError,
        String resourceInsightJson,
        AiGenerationStatus resourceStatus,
        String resourceError,
        String marketingInsightJson,
        AiGenerationStatus marketingStatus,
        String marketingError
) {

    public static WeeklyCollaborationAiReportDTO fromEntity(WeeklyCollaborationAiReport report) {
        return new WeeklyCollaborationAiReportDTO(
                report.getId(),
                report.getWeeklyReport().getId(),
                report.getGeneratedAt(),
                report.getUpdatedAt(),
                report.getGlobalInsightJson(),
                report.getGlobalStatus(),
                report.getGlobalError(),
                report.getResourceInsightJson(),
                report.getResourceStatus(),
                report.getResourceError(),
                report.getMarketingInsightJson(),
                report.getMarketingStatus(),
                report.getMarketingError()
        );
    }
}