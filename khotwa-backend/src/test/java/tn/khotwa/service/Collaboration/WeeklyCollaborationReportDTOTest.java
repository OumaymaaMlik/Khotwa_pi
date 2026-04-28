package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;

import java.lang.reflect.Method;
import java.time.LocalDate;
import java.util.Arrays;
import org.junit.jupiter.api.Test;
import tn.khotwa.dto.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;

class WeeklyCollaborationReportDTOTest {

    @Test
    void reportDtoDoesNotExposeLegacyAiAccessors() {
        assertThat(Arrays.stream(WeeklyCollaborationReportDTO.class.getDeclaredMethods())
                .map(Method::getName)
                .toList()).doesNotContain(
                        "aiExecutiveSummary",
                        "aiGlobalAssessment",
                        "aiCriticalIssues",
                        "aiRecommendations",
                        "aiPriorityActions",
                        "aiGlobalInsight",
                        "aiResourceInsight",
                        "aiMarketingInsight"
                );
    }

    @Test
    void fromEntityBuildsGroupedSectionsWithDecimalRatesAndSafeZeroDivision() {
        WeeklyCollaborationReport report = new WeeklyCollaborationReport();
        report.setId(6L);
        report.setWeekStartDate(LocalDate.of(2026, 4, 20));
        report.setWeekEndDate(LocalDate.of(2026, 4, 26));
        report.setCollaborationsCreatedThisWeek(3);
        report.setActiveCollaborations(8);
        report.setSuspendedCollaborations(1);
        report.setClosedCollaborations(2);
        report.setCollaborationsClosedThisWeek(null);
        report.setPendingCollaborationRequests(4);
        report.setAcceptedRequestsThisWeek(0);
        report.setRejectedRequestsThisWeek(0);
        report.setNewMembersThisWeek(5);
        report.setInvitationsSentThisWeek(0);
        report.setInvitationsAcceptedThisWeek(0);
        report.setInvitationsRejectedThisWeek(0);
        report.setOpenResourceRequests(2);
        report.setFulfilledResourceRequests(3);
        report.setCancelledResourceRequests(1);
        report.setActiveMarketingCampaigns(2);
        report.setCompletedMarketingCampaigns(1);
        report.setOverdueMarketingTasks(1);
        report.setPublishedMarketingTasks(3);
        report.setTotalMarketingTasks(5);
        report.setCollaborationsByTypeJson("{\"MARKETING\":4,\"RESOURCES\":4}");

        WeeklyCollaborationReportDTO dto = WeeklyCollaborationReportDTO.fromEntity(report);

        assertThat(dto.collaborationsClosedThisWeek()).isZero();
        assertThat(dto.globalCollaborationHealth().collaborationsByType())
                .containsEntry("MARKETING", 4)
                .containsEntry("RESOURCES", 4);
        assertThat(dto.globalCollaborationHealth().requestConversionRate()).isEqualTo(0.0);
        assertThat(dto.globalCollaborationHealth().invitationAcceptanceRate()).isEqualTo(0.0);
        assertThat(dto.resourceCollaborationAnalysis().totalResourceRequests()).isEqualTo(6);
        assertThat(dto.resourceCollaborationAnalysis().resourceFulfillmentRate()).isEqualTo(0.5);
        assertThat(dto.resourceCollaborationAnalysis().resourceBacklogRate()).isEqualTo(0.3333);
        assertThat(dto.marketingCollaborationAnalysis().overdueTaskRatio()).isEqualTo(0.2);
        assertThat(dto.marketingCollaborationAnalysis().marketingExecutionRate()).isEqualTo(0.6);
    }
}
