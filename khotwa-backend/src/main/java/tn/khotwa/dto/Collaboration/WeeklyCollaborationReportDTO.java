package tn.khotwa.dto.collaboration;

import java.time.LocalDate;
import java.time.LocalDateTime;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;

public record WeeklyCollaborationReportDTO(
        Long id,
        LocalDate weekStartDate,
        LocalDate weekEndDate,
        LocalDateTime generatedAt,
        int collaborationsCreatedThisWeek,
        int activeCollaborations,
        int pendingCollaborationRequests,
        int openResourceRequests,
        int activeMarketingCampaigns,
        int overdueMarketingTasks
) {

    public static WeeklyCollaborationReportDTO fromEntity(WeeklyCollaborationReport report) {
        return new WeeklyCollaborationReportDTO(
                report.getId(),
                report.getWeekStartDate(),
                report.getWeekEndDate(),
                report.getGeneratedAt(),
                report.getCollaborationsCreatedThisWeek(),
                report.getActiveCollaborations(),
                report.getPendingCollaborationRequests(),
                report.getOpenResourceRequests(),
                report.getActiveMarketingCampaigns(),
                report.getOverdueMarketingTasks()
        );
    }
}

