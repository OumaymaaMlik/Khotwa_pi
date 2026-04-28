package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.CollaborationTypeCountView;
import tn.khotwa.dto.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.collaboration.RequestStatus;
import tn.khotwa.enums.collaboration.ResourceRequestStatus;
import tn.khotwa.enums.collaboration.TaskStatus;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.collaboration.CollaborationRepository;
import tn.khotwa.repository.collaboration.CollaborationRequestRepository;
import tn.khotwa.repository.collaboration.MarketingCollaborationRepository;
import tn.khotwa.repository.collaboration.MarketingContentTaskRepository;
import tn.khotwa.repository.collaboration.ResourceRequestRepository;
import tn.khotwa.repository.collaboration.WeeklyCollaborationReportRepository;

@ExtendWith(MockitoExtension.class)
class WeeklyCollaborationReportServiceTest {

    @Mock
    private CollaborationRepository collaborationRepository;

    @Mock
    private CollaborationRequestRepository collaborationRequestRepository;

    @Mock
    private CollaborationMemberRepository collaborationMemberRepository;

    @Mock
    private ResourceRequestRepository resourceRequestRepository;

    @Mock
    private MarketingCollaborationRepository marketingCollaborationRepository;

    @Mock
    private MarketingContentTaskRepository marketingContentTaskRepository;

    @Mock
    private WeeklyCollaborationReportRepository weeklyCollaborationReportRepository;

    private WeeklyCollaborationReportService weeklyCollaborationReportService;

    @BeforeEach
    void setUp() {
        weeklyCollaborationReportService = new WeeklyCollaborationReportService(
                collaborationRepository,
                collaborationMemberRepository,
                collaborationRequestRepository,
                resourceRequestRepository,
                marketingCollaborationRepository,
                marketingContentTaskRepository,
                weeklyCollaborationReportRepository
        );
    }

    @Test
    void generateWeeklyReportBuildsAndStoresStructuredDomainMetrics() {
        LocalDate referenceDate = LocalDate.of(2026, 4, 21);
        LocalDate expectedWeekStart = LocalDate.of(2026, 4, 20);

        when(weeklyCollaborationReportRepository.findByWeekStartDate(expectedWeekStart)).thenReturn(Optional.empty());
        when(collaborationRepository.countByCreatedAtBetween(any(), any())).thenReturn(4L);
        when(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)).thenReturn(9L);
        when(collaborationRepository.countByStatus(CollaborationStatus.SUSPENDED)).thenReturn(2L);
        when(collaborationRepository.countByStatus(CollaborationStatus.CLOSED)).thenReturn(5L);
        when(collaborationRepository.countByStatusAndClosedAtBetween(eq(CollaborationStatus.CLOSED), any(), any())).thenReturn(3L);
        when(collaborationRepository.countCollaborationsByType()).thenReturn(List.of(
                typeCount(CollaborationType.MARKETING, 6L),
                typeCount(CollaborationType.RESOURCES, 10L)
        ));
        when(collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                RequestStatus.PENDING,
                CollaborationStatus.ACTIVE
        )).thenReturn(3L);
        when(collaborationRequestRepository.countByStatusAndProcessedAtBetween(eq(RequestStatus.ACCEPTED), any(), any()))
                .thenReturn(8L);
        when(collaborationRequestRepository.countByStatusAndProcessedAtBetween(eq(RequestStatus.REJECTED), any(), any()))
                .thenReturn(2L);
        when(collaborationRequestRepository.countByScenarioAndCreatedAtBetween(
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(5L);
        when(collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                eq(RequestStatus.ACCEPTED),
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(4L);
        when(collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                eq(RequestStatus.REJECTED),
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(1L);
        when(collaborationMemberRepository.countByJoinedAtBetween(any(), any())).thenReturn(7L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.OPEN)).thenReturn(5L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.FULFILLED)).thenReturn(9L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.CANCELLED)).thenReturn(2L);
        when(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.ACTIVE)).thenReturn(2L);
        when(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.COMPLETED)).thenReturn(4L);
        when(marketingContentTaskRepository.countByStatusAndMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                TaskStatus.PUBLISHED,
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(12L);
        when(marketingContentTaskRepository.countByMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(20L);
        when(marketingContentTaskRepository.countOverdueMarketingContentTasksForActiveCampaigns()).thenReturn(6L);
        when(weeklyCollaborationReportRepository.save(any(WeeklyCollaborationReport.class))).thenAnswer(invocation -> {
            WeeklyCollaborationReport report = invocation.getArgument(0);
            report.setId(100L);
            return report;
        });

        WeeklyCollaborationReportDTO report = weeklyCollaborationReportService.generateWeeklyReportForCurrentWeek(referenceDate);

        assertThat(report.id()).isEqualTo(100L);
        assertThat(report.weekStartDate()).isEqualTo(expectedWeekStart);
        assertThat(report.weekEndDate()).isEqualTo(expectedWeekStart.plusDays(6));
        assertThat(report.collaborationsCreatedThisWeek()).isEqualTo(4);
        assertThat(report.activeCollaborations()).isEqualTo(9);
        assertThat(report.suspendedCollaborations()).isEqualTo(2);
        assertThat(report.closedCollaborations()).isEqualTo(5);
        assertThat(report.collaborationsClosedThisWeek()).isEqualTo(3);
        assertThat(report.collaborationsByType()).containsEntry("MARKETING", 6).containsEntry("RESOURCES", 10);
        assertThat(report.pendingCollaborationRequests()).isEqualTo(3);
        assertThat(report.acceptedRequestsThisWeek()).isEqualTo(8);
        assertThat(report.rejectedRequestsThisWeek()).isEqualTo(2);
        assertThat(report.newMembersThisWeek()).isEqualTo(7);
        assertThat(report.invitationsSentThisWeek()).isEqualTo(5);
        assertThat(report.invitationsAcceptedThisWeek()).isEqualTo(4);
        assertThat(report.invitationsRejectedThisWeek()).isEqualTo(1);
        assertThat(report.openResourceRequests()).isEqualTo(5);
        assertThat(report.fulfilledResourceRequests()).isEqualTo(9);
        assertThat(report.cancelledResourceRequests()).isEqualTo(2);
        assertThat(report.activeMarketingCampaigns()).isEqualTo(2);
        assertThat(report.completedMarketingCampaigns()).isEqualTo(4);
        assertThat(report.overdueMarketingTasks()).isEqualTo(6);
        assertThat(report.publishedMarketingTasks()).isEqualTo(12);
        assertThat(report.totalMarketingTasks()).isEqualTo(20);
        assertThat(report.riskLevel()).isEqualTo("HIGH");
        assertThat(report.globalCollaborationHealth().requestConversionRate()).isEqualTo(0.8);
        assertThat(report.globalCollaborationHealth().invitationAcceptanceRate()).isEqualTo(0.8);
        assertThat(report.resourceCollaborationAnalysis().totalResourceRequests()).isEqualTo(16);
        assertThat(report.resourceCollaborationAnalysis().resourceFulfillmentRate()).isEqualTo(0.5625);
        assertThat(report.resourceCollaborationAnalysis().resourceBacklogRate()).isEqualTo(0.3125);
        assertThat(report.marketingCollaborationAnalysis().totalMarketingTasks()).isEqualTo(20);
        assertThat(report.marketingCollaborationAnalysis().overdueTaskRatio()).isEqualTo(0.3);
        assertThat(report.marketingCollaborationAnalysis().marketingExecutionRate()).isEqualTo(0.6);

        verify(weeklyCollaborationReportRepository).findByWeekStartDate(expectedWeekStart);
        verify(weeklyCollaborationReportRepository).save(any(WeeklyCollaborationReport.class));
    }

    @Test
    void generateWeeklyReportUpdatesExistingCurrentWeekSnapshot() {
        LocalDate referenceDate = LocalDate.of(2026, 4, 21);
        LocalDate expectedWeekStart = LocalDate.of(2026, 4, 20);
        WeeklyCollaborationReport existingReport = new WeeklyCollaborationReport();
        existingReport.setId(50L);
        existingReport.setWeekStartDate(expectedWeekStart);

        when(weeklyCollaborationReportRepository.findByWeekStartDate(expectedWeekStart))
                .thenReturn(Optional.of(existingReport));
        when(collaborationRepository.countByCreatedAtBetween(any(), any())).thenReturn(7L);
        when(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)).thenReturn(11L);
        when(collaborationRepository.countByStatus(CollaborationStatus.SUSPENDED)).thenReturn(1L);
        when(collaborationRepository.countByStatus(CollaborationStatus.CLOSED)).thenReturn(3L);
        when(collaborationRepository.countByStatusAndClosedAtBetween(eq(CollaborationStatus.CLOSED), any(), any())).thenReturn(1L);
        when(collaborationRepository.countCollaborationsByType()).thenReturn(List.of(
                typeCount(CollaborationType.MARKETING, 4L),
                typeCount(CollaborationType.RESOURCES, 11L)
        ));
        when(collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                RequestStatus.PENDING,
                CollaborationStatus.ACTIVE
        )).thenReturn(2L);
        when(collaborationRequestRepository.countByStatusAndProcessedAtBetween(eq(RequestStatus.ACCEPTED), any(), any()))
                .thenReturn(6L);
        when(collaborationRequestRepository.countByStatusAndProcessedAtBetween(eq(RequestStatus.REJECTED), any(), any()))
                .thenReturn(1L);
        when(collaborationRequestRepository.countByScenarioAndCreatedAtBetween(
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(3L);
        when(collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                eq(RequestStatus.ACCEPTED),
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(2L);
        when(collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                eq(RequestStatus.REJECTED),
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(0L);
        when(collaborationMemberRepository.countByJoinedAtBetween(any(), any())).thenReturn(4L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.OPEN)).thenReturn(4L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.FULFILLED)).thenReturn(6L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.CANCELLED)).thenReturn(1L);
        when(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.ACTIVE)).thenReturn(3L);
        when(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.COMPLETED)).thenReturn(2L);
        when(marketingContentTaskRepository.countByStatusAndMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                TaskStatus.PUBLISHED,
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(5L);
        when(marketingContentTaskRepository.countByMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(10L);
        when(marketingContentTaskRepository.countOverdueMarketingContentTasksForActiveCampaigns()).thenReturn(1L);
        when(weeklyCollaborationReportRepository.save(existingReport)).thenReturn(existingReport);

        WeeklyCollaborationReportDTO report = weeklyCollaborationReportService.generateWeeklyReportForCurrentWeek(referenceDate);

        assertThat(report.id()).isEqualTo(50L);
        assertThat(report.weekStartDate()).isEqualTo(expectedWeekStart);
        assertThat(report.collaborationsCreatedThisWeek()).isEqualTo(7);
        assertThat(report.activeCollaborations()).isEqualTo(11);
        assertThat(report.suspendedCollaborations()).isEqualTo(1);
        assertThat(report.closedCollaborations()).isEqualTo(3);
        assertThat(report.collaborationsClosedThisWeek()).isEqualTo(1);
        assertThat(report.pendingCollaborationRequests()).isEqualTo(2);
        assertThat(report.acceptedRequestsThisWeek()).isEqualTo(6);
        assertThat(report.newMembersThisWeek()).isEqualTo(4);
        assertThat(report.invitationsSentThisWeek()).isEqualTo(3);
        assertThat(report.riskLevel()).isEqualTo("HIGH");
        assertThat(report.resourceCollaborationAnalysis().totalResourceRequests()).isEqualTo(11);
        assertThat(report.marketingCollaborationAnalysis().marketingExecutionRate()).isEqualTo(0.5);

        verify(weeklyCollaborationReportRepository).findByWeekStartDate(expectedWeekStart);
        verify(weeklyCollaborationReportRepository).save(existingReport);
    }

    @Test
    void generateWeeklyReportReturnsMetricsOnlyDto() {
        LocalDate referenceDate = LocalDate.of(2026, 4, 21);
        LocalDate expectedWeekStart = LocalDate.of(2026, 4, 20);

        when(weeklyCollaborationReportRepository.findByWeekStartDate(expectedWeekStart)).thenReturn(Optional.empty());
        when(collaborationRepository.countByCreatedAtBetween(any(), any())).thenReturn(1L);
        when(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)).thenReturn(2L);
        when(collaborationRepository.countByStatus(CollaborationStatus.SUSPENDED)).thenReturn(0L);
        when(collaborationRepository.countByStatus(CollaborationStatus.CLOSED)).thenReturn(0L);
        when(collaborationRepository.countByStatusAndClosedAtBetween(eq(CollaborationStatus.CLOSED), any(), any())).thenReturn(0L);
        when(collaborationRepository.countCollaborationsByType()).thenReturn(List.of(typeCount(CollaborationType.MARKETING, 1L)));
        when(collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                RequestStatus.PENDING,
                CollaborationStatus.ACTIVE
        )).thenReturn(0L);
        when(collaborationRequestRepository.countByStatusAndProcessedAtBetween(eq(RequestStatus.ACCEPTED), any(), any()))
                .thenReturn(0L);
        when(collaborationRequestRepository.countByStatusAndProcessedAtBetween(eq(RequestStatus.REJECTED), any(), any()))
                .thenReturn(0L);
        when(collaborationRequestRepository.countByScenarioAndCreatedAtBetween(
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(0L);
        when(collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                eq(RequestStatus.ACCEPTED),
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(0L);
        when(collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                eq(RequestStatus.REJECTED),
                eq(CollaborationRequestScenario.COLLAB_INVITATION),
                any(),
                any()
        )).thenReturn(0L);
        when(collaborationMemberRepository.countByJoinedAtBetween(any(), any())).thenReturn(0L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.OPEN)).thenReturn(0L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.FULFILLED)).thenReturn(0L);
        when(resourceRequestRepository.countByStatus(ResourceRequestStatus.CANCELLED)).thenReturn(0L);
        when(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.ACTIVE)).thenReturn(0L);
        when(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.COMPLETED)).thenReturn(0L);
        when(marketingContentTaskRepository.countByStatusAndMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                TaskStatus.PUBLISHED,
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(0L);
        when(marketingContentTaskRepository.countByMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(0L);
        when(marketingContentTaskRepository.countOverdueMarketingContentTasksForActiveCampaigns()).thenReturn(0L);
        when(weeklyCollaborationReportRepository.save(any(WeeklyCollaborationReport.class))).thenAnswer(invocation -> {
            WeeklyCollaborationReport report = invocation.getArgument(0);
            report.setId(101L);
            return report;
        });

        WeeklyCollaborationReportDTO report = weeklyCollaborationReportService.generateWeeklyReportForCurrentWeek(referenceDate);

        assertThat(report.id()).isEqualTo(101L);
        assertThat(report.weekStartDate()).isEqualTo(expectedWeekStart);
        assertThat(report.collaborationsByType()).containsEntry("MARKETING", 1).containsEntry("RESOURCES", 0);
        assertThat(report.globalCollaborationHealth().activeCollaborations()).isEqualTo(2);
        assertThat(report.resourceCollaborationAnalysis().totalResourceRequests()).isZero();
        assertThat(report.marketingCollaborationAnalysis().marketingExecutionRate()).isZero();
    }

    @Test
    void getLatestWeeklyReportReturnsMostRecentSnapshot() {
        WeeklyCollaborationReport report = new WeeklyCollaborationReport();
        report.setId(7L);
        report.setWeekStartDate(LocalDate.of(2026, 4, 20));
        report.setWeekEndDate(LocalDate.of(2026, 4, 26));
        report.setCollaborationsClosedThisWeek(2);
        report.setPendingCollaborationRequests(5);
        report.setOpenResourceRequests(1);
        report.setFulfilledResourceRequests(2);
        report.setCancelledResourceRequests(1);
        report.setSuspendedCollaborations(1);
        report.setActiveMarketingCampaigns(3);
        report.setCompletedMarketingCampaigns(1);
        report.setOverdueMarketingTasks(0);
        report.setPublishedMarketingTasks(4);
        report.setTotalMarketingTasks(8);
        report.setCollaborationsByTypeJson("{\"MARKETING\":1,\"RESOURCES\":2}");
        when(weeklyCollaborationReportRepository.findFirstByOrderByWeekStartDateDesc())
                .thenReturn(Optional.of(report));

        WeeklyCollaborationReportDTO dto = weeklyCollaborationReportService.getLatestWeeklyReport();

        assertThat(dto.id()).isEqualTo(7L);
        assertThat(dto.riskLevel()).isEqualTo("MEDIUM");
        assertThat(dto.resourceCollaborationAnalysis().totalResourceRequests()).isEqualTo(4);
        assertThat(dto.marketingCollaborationAnalysis().marketingExecutionRate()).isEqualTo(0.5);
    }

    @Test
    void getLatestWeeklyReportThrowsWhenNoSnapshotExists() {
        when(weeklyCollaborationReportRepository.findFirstByOrderByWeekStartDateDesc()).thenReturn(Optional.empty());

        assertThatThrownBy(() -> weeklyCollaborationReportService.getLatestWeeklyReport())
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("No weekly collaboration report has been generated yet.");
    }

    @Test
    void getAllWeeklyReportsReturnsDescendingDtos() {
        WeeklyCollaborationReport latest = new WeeklyCollaborationReport();
        latest.setId(9L);
        latest.setWeekStartDate(LocalDate.of(2026, 4, 27));

        WeeklyCollaborationReport previous = new WeeklyCollaborationReport();
        previous.setId(8L);
        previous.setWeekStartDate(LocalDate.of(2026, 4, 20));

        when(weeklyCollaborationReportRepository.findAllByOrderByWeekStartDateDesc())
                .thenReturn(List.of(latest, previous));

        List<WeeklyCollaborationReportDTO> reports = weeklyCollaborationReportService.getAllWeeklyReports();

        assertThat(reports).hasSize(2);
        assertThat(reports).extracting(WeeklyCollaborationReportDTO::id).containsExactly(9L, 8L);
    }

    @Test
    void getWeeklyReportByIdReturnsDto() {
        WeeklyCollaborationReport report = new WeeklyCollaborationReport();
        report.setId(12L);
        report.setCollaborationsClosedThisWeek(1);
        report.setPendingCollaborationRequests(1);
        report.setOpenResourceRequests(1);
        report.setFulfilledResourceRequests(1);
        report.setCancelledResourceRequests(0);
        report.setActiveMarketingCampaigns(1);
        report.setCompletedMarketingCampaigns(0);
        report.setOverdueMarketingTasks(0);
        report.setPublishedMarketingTasks(1);
        report.setTotalMarketingTasks(2);
        report.setCollaborationsByTypeJson("{\"MARKETING\":0,\"RESOURCES\":0}");

        when(weeklyCollaborationReportRepository.findById(12L)).thenReturn(Optional.of(report));

        WeeklyCollaborationReportDTO dto = weeklyCollaborationReportService.getWeeklyReportById(12L);

        assertThat(dto.id()).isEqualTo(12L);
        assertThat(dto.riskLevel()).isEqualTo("LOW");
    }

    @Test
    void getWeeklyReportByIdThrowsWhenMissing() {
        when(weeklyCollaborationReportRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> weeklyCollaborationReportService.getWeeklyReportById(99L))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("Weekly collaboration report with id 99 was not found.");
    }

    @Test
    void weeklyCollaborationReportEntityDoesNotDeclareLegacyAiFields() {
        List<String> fieldNames = Arrays.stream(WeeklyCollaborationReport.class.getDeclaredFields())
                .map(Field::getName)
                .toList();

        assertThat(fieldNames).doesNotContain(
                "aiExecutiveSummary",
                "aiGlobalAssessment",
                "aiCriticalIssuesJson",
                "aiRecommendationsJson",
                "aiPriorityActionsJson",
                "aiGlobalInsightJson",
                "aiResourceInsightJson",
                "aiMarketingInsightJson"
        );
    }

    private CollaborationTypeCountView typeCount(CollaborationType type, long count) {
        return new CollaborationTypeCountView() {
            @Override
            public CollaborationType getCollaborationType() {
                return type;
            }

            @Override
            public Long getCollaborationCount() {
                return count;
            }
        };
    }
}

