package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.collaboration.RequestStatus;
import tn.khotwa.enums.collaboration.ResourceRequestStatus;
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
                collaborationRequestRepository,
                resourceRequestRepository,
                marketingCollaborationRepository,
                marketingContentTaskRepository,
                weeklyCollaborationReportRepository
        );
    }

    @Test
    void generateWeeklyReportBuildsAndStoresStructuredMetrics() {
        LocalDate referenceDate = LocalDate.of(2026, 4, 21);
        LocalDate expectedWeekStart = LocalDate.of(2026, 4, 20);

        when(weeklyCollaborationReportRepository.existsByWeekStartDate(expectedWeekStart)).thenReturn(false);
        when(collaborationRepository.countByCreatedAtBetween(any(), any())).thenReturn(4L);
        when(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)).thenReturn(9L);
        when(collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                RequestStatus.PENDING,
                CollaborationStatus.ACTIVE
        )).thenReturn(3L);
        when(resourceRequestRepository.countByStatusAndCollaboration_Status(
                ResourceRequestStatus.OPEN,
                CollaborationStatus.ACTIVE
        )).thenReturn(5L);
        when(marketingCollaborationRepository.countByStatusAndCollaboration_Status(
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(2L);
        when(marketingContentTaskRepository.countOverdueMarketingContentTasks()).thenReturn(6L);
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
        assertThat(report.pendingCollaborationRequests()).isEqualTo(3);
        assertThat(report.openResourceRequests()).isEqualTo(5);
        assertThat(report.activeMarketingCampaigns()).isEqualTo(2);
        assertThat(report.overdueMarketingTasks()).isEqualTo(6);

        verify(weeklyCollaborationReportRepository, never()).findByWeekStartDate(expectedWeekStart);
        verify(weeklyCollaborationReportRepository).save(any(WeeklyCollaborationReport.class));
    }

    @Test
    void generateWeeklyReportUpdatesExistingCurrentWeekSnapshot() {
        LocalDate referenceDate = LocalDate.of(2026, 4, 21);
        LocalDate expectedWeekStart = LocalDate.of(2026, 4, 20);
        WeeklyCollaborationReport existingReport = new WeeklyCollaborationReport();
        existingReport.setId(50L);
        existingReport.setWeekStartDate(expectedWeekStart);

        when(weeklyCollaborationReportRepository.existsByWeekStartDate(expectedWeekStart)).thenReturn(true);
        when(weeklyCollaborationReportRepository.findByWeekStartDate(expectedWeekStart))
                .thenReturn(Optional.of(existingReport));
        when(collaborationRepository.countByCreatedAtBetween(any(), any())).thenReturn(7L);
        when(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)).thenReturn(11L);
        when(collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                RequestStatus.PENDING,
                CollaborationStatus.ACTIVE
        )).thenReturn(2L);
        when(resourceRequestRepository.countByStatusAndCollaboration_Status(
                ResourceRequestStatus.OPEN,
                CollaborationStatus.ACTIVE
        )).thenReturn(4L);
        when(marketingCollaborationRepository.countByStatusAndCollaboration_Status(
                MarketingCollaborationStatus.ACTIVE,
                CollaborationStatus.ACTIVE
        )).thenReturn(3L);
        when(marketingContentTaskRepository.countOverdueMarketingContentTasks()).thenReturn(1L);
        when(weeklyCollaborationReportRepository.save(existingReport)).thenReturn(existingReport);

        WeeklyCollaborationReportDTO report = weeklyCollaborationReportService.generateWeeklyReportForCurrentWeek(referenceDate);

        assertThat(report.id()).isEqualTo(50L);
        assertThat(report.weekStartDate()).isEqualTo(expectedWeekStart);
        assertThat(report.collaborationsCreatedThisWeek()).isEqualTo(7);
        assertThat(report.activeCollaborations()).isEqualTo(11);
        assertThat(report.pendingCollaborationRequests()).isEqualTo(2);

        verify(weeklyCollaborationReportRepository).findByWeekStartDate(expectedWeekStart);
        verify(weeklyCollaborationReportRepository).save(existingReport);
    }
}

