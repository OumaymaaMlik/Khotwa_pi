package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.GlobalCollaborationInsight;
import tn.khotwa.dto.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationAiReport;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.AiGenerationStatus;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.WeeklyCollaborationAiReportRepository;
import tn.khotwa.repository.collaboration.WeeklyCollaborationReportRepository;

@ExtendWith(MockitoExtension.class)
class WeeklyCollaborationAiReportServiceTest {

    @Mock
    private WeeklyCollaborationAiReportRepository weeklyCollaborationAiReportRepository;

    @Mock
    private WeeklyCollaborationReportRepository weeklyCollaborationReportRepository;

    @Mock
    private WeeklyCollaborationAiGenerationService weeklyCollaborationAiGenerationService;

    private WeeklyCollaborationAiReportService weeklyCollaborationAiReportService;

    @BeforeEach
    void setUp() {
        weeklyCollaborationAiReportService = new WeeklyCollaborationAiReportService(
                weeklyCollaborationAiReportRepository,
                weeklyCollaborationReportRepository,
                weeklyCollaborationAiGenerationService,
                new ObjectMapper()
        );
    }

    @Test
    void getAiReportsForWeeklyReportReturnsSingleRowWhenPresent() {
        WeeklyCollaborationReport weeklyReport = weeklyReport(12L);
        WeeklyCollaborationAiReport report = aiReport(5L, weeklyReport);

        when(weeklyCollaborationReportRepository.existsById(12L)).thenReturn(true);
        when(weeklyCollaborationAiReportRepository.findByWeeklyReportId(12L)).thenReturn(Optional.of(report));

        List<WeeklyCollaborationAiReportDTO> reports = weeklyCollaborationAiReportService.getAiReportsForWeeklyReport(12L);

        assertThat(reports).hasSize(1);
        assertThat(reports.get(0).id()).isEqualTo(5L);
        assertThat(reports.get(0).weeklyReportId()).isEqualTo(12L);
    }

    @Test
    void getLatestAiReportForWeeklyReportThrowsWhenMissing() {
        when(weeklyCollaborationReportRepository.existsById(12L)).thenReturn(true);
        when(weeklyCollaborationAiReportRepository.findByWeeklyReportId(12L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> weeklyCollaborationAiReportService.getLatestAiReportForWeeklyReport(12L))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("No AI report exists yet for weekly report with id 12.");
    }

    @Test
    void generateGlobalInsightCallsOnlyGlobalGeminiAndPreservesOtherCategories() {
        WeeklyCollaborationReport weeklyReport = weeklyReportWithMetrics(12L);
        WeeklyCollaborationAiReport existing = aiReport(5L, weeklyReport);
        existing.setResourceInsightJson("{\"pressure\":\"medium\"}");
        existing.setResourceStatus(AiGenerationStatus.SUCCESS);
        existing.setResourceError(null);

        when(weeklyCollaborationReportRepository.findById(12L)).thenReturn(Optional.of(weeklyReport));
        when(weeklyCollaborationAiReportRepository.findByWeeklyReportId(12L)).thenReturn(Optional.of(existing));
        when(weeklyCollaborationAiGenerationService.generateGlobalInsightResult(any()))
                .thenReturn(WeeklyCollaborationAiGenerationService.InsightGenerationResult.success(
                        new GlobalCollaborationInsight("stable", "ok", "none", List.of("Keep monitoring"), "low")
                ));
        when(weeklyCollaborationAiReportRepository.save(any(WeeklyCollaborationAiReport.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        WeeklyCollaborationAiReportDTO updated = weeklyCollaborationAiReportService.generateGlobalInsight(12L);

        assertThat(updated.globalStatus()).isEqualTo(AiGenerationStatus.SUCCESS);
        assertThat(updated.globalInsightJson()).isNotBlank();
        assertThat(updated.globalError()).isNull();

        assertThat(updated.resourceInsightJson()).isEqualTo("{\"pressure\":\"medium\"}");
        assertThat(updated.resourceStatus()).isEqualTo(AiGenerationStatus.SUCCESS);
        assertThat(updated.resourceError()).isNull();

        verify(weeklyCollaborationAiGenerationService).generateGlobalInsightResult(any());
        verify(weeklyCollaborationAiGenerationService, never()).generateResourceInsightResult(any());
        verify(weeklyCollaborationAiGenerationService, never()).generateMarketingInsightResult(any());
    }

    @Test
    void generateResourceInsightUpdatesOnlyResourceFields() {
        WeeklyCollaborationReport weeklyReport = weeklyReportWithMetrics(12L);
        WeeklyCollaborationAiReport existing = aiReport(5L, weeklyReport);
        existing.setGlobalInsightJson("{\"status\":\"stable\"}");
        existing.setGlobalStatus(AiGenerationStatus.SUCCESS);

        when(weeklyCollaborationReportRepository.findById(12L)).thenReturn(Optional.of(weeklyReport));
        when(weeklyCollaborationAiReportRepository.findByWeeklyReportId(12L)).thenReturn(Optional.of(existing));
        when(weeklyCollaborationAiGenerationService.generateResourceInsightResult(any()))
                .thenReturn(WeeklyCollaborationAiGenerationService.InsightGenerationResult.failed("Gemini quota exceeded."));
        when(weeklyCollaborationAiReportRepository.save(any(WeeklyCollaborationAiReport.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        WeeklyCollaborationAiReportDTO updated = weeklyCollaborationAiReportService.generateResourceInsight(12L);

        assertThat(updated.globalInsightJson()).isEqualTo("{\"status\":\"stable\"}");
        assertThat(updated.globalStatus()).isEqualTo(AiGenerationStatus.SUCCESS);

        assertThat(updated.resourceStatus()).isEqualTo(AiGenerationStatus.FAILED);
        assertThat(updated.resourceError()).contains("Resource insight unavailable.");

        verify(weeklyCollaborationAiGenerationService).generateResourceInsightResult(any());
        verify(weeklyCollaborationAiGenerationService, never()).generateGlobalInsightResult(any());
        verify(weeklyCollaborationAiGenerationService, never()).generateMarketingInsightResult(any());
    }

    @Test
    void generateMarketingInsightCreatesRowWhenMissing() {
        WeeklyCollaborationReport weeklyReport = weeklyReportWithMetrics(12L);
        ArgumentCaptor<WeeklyCollaborationAiReport> saved = ArgumentCaptor.forClass(WeeklyCollaborationAiReport.class);

        when(weeklyCollaborationReportRepository.findById(12L)).thenReturn(Optional.of(weeklyReport));
        when(weeklyCollaborationAiReportRepository.findByWeeklyReportId(12L)).thenReturn(Optional.empty());
        when(weeklyCollaborationAiGenerationService.generateMarketingInsightResult(any()))
                .thenReturn(WeeklyCollaborationAiGenerationService.InsightGenerationResult.failed("Invalid response."));
        when(weeklyCollaborationAiReportRepository.save(saved.capture())).thenAnswer(invocation -> {
            WeeklyCollaborationAiReport report = invocation.getArgument(0);
            if (report.getId() == null) {
                report.setId(99L);
            }
            return report;
        });

        WeeklyCollaborationAiReportDTO updated = weeklyCollaborationAiReportService.generateMarketingInsight(12L);

        assertThat(updated.id()).isEqualTo(99L);
        assertThat(saved.getValue().getWeeklyReport()).isSameAs(weeklyReport);
        assertThat(updated.marketingStatus()).isEqualTo(AiGenerationStatus.FAILED);
        assertThat(updated.marketingError()).contains("Marketing insight unavailable.");
    }

    private WeeklyCollaborationReport weeklyReport(Long id) {
        WeeklyCollaborationReport report = new WeeklyCollaborationReport();
        report.setId(id);
        report.setWeekStartDate(LocalDate.of(2026, 4, 21));
        report.setWeekEndDate(LocalDate.of(2026, 4, 27));
        report.setGeneratedAt(LocalDateTime.of(2026, 4, 27, 10, 0));
        return report;
    }

    private WeeklyCollaborationReport weeklyReportWithMetrics(Long id) {
        WeeklyCollaborationReport report = weeklyReport(id);
        report.setActiveCollaborations(12);
        report.setPendingCollaborationRequests(5);
        report.setOpenResourceRequests(7);
        report.setFulfilledResourceRequests(3);
        report.setCancelledResourceRequests(1);
        report.setActiveMarketingCampaigns(2);
        report.setCompletedMarketingCampaigns(1);
        report.setOverdueMarketingTasks(4);
        report.setPublishedMarketingTasks(6);
        report.setTotalMarketingTasks(10);
        report.setCollaborationsCreatedThisWeek(3);
        report.setClosedCollaborations(2);
        report.setSuspendedCollaborations(1);
        report.setCollaborationsClosedThisWeek(1);
        report.setAcceptedRequestsThisWeek(2);
        report.setRejectedRequestsThisWeek(0);
        report.setNewMembersThisWeek(1);
        report.setInvitationsSentThisWeek(2);
        report.setInvitationsAcceptedThisWeek(1);
        report.setInvitationsRejectedThisWeek(0);
        return report;
    }

    private WeeklyCollaborationAiReport aiReport(Long id, WeeklyCollaborationReport weeklyReport) {
        WeeklyCollaborationAiReport report = new WeeklyCollaborationAiReport();
        report.setId(id);
        report.setWeeklyReport(weeklyReport);
        report.setGeneratedAt(LocalDateTime.of(2026, 4, 27, 10, 0));
        report.setUpdatedAt(LocalDateTime.of(2026, 4, 27, 10, 0));
        report.setGlobalStatus(AiGenerationStatus.PENDING);
        report.setResourceStatus(AiGenerationStatus.PENDING);
        report.setMarketingStatus(AiGenerationStatus.PENDING);
        return report;
    }
}