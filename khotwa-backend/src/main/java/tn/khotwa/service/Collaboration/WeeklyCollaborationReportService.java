package tn.khotwa.service.collaboration;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.TemporalAdjusters;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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

@Service
@RequiredArgsConstructor
@Transactional
public class WeeklyCollaborationReportService {

    private final CollaborationRepository collaborationRepository;
    private final CollaborationRequestRepository collaborationRequestRepository;
    private final ResourceRequestRepository resourceRequestRepository;
    private final MarketingCollaborationRepository marketingCollaborationRepository;
    private final MarketingContentTaskRepository marketingContentTaskRepository;
    private final WeeklyCollaborationReportRepository weeklyCollaborationReportRepository;

    public WeeklyCollaborationReportDTO generateWeeklyReport() {
        return generateWeeklyReportForCurrentWeek(LocalDate.now());
    }

    WeeklyCollaborationReportDTO generateWeeklyReportForCurrentWeek(LocalDate referenceDate) {
        WeeklyReportWindow reportWindow = buildWeeklyReportWindow(referenceDate);

        WeeklyCollaborationReport report = loadOrCreateCurrentWeekReport(reportWindow.weekStartDate());

        report.setWeekStartDate(reportWindow.weekStartDate());
        report.setWeekEndDate(reportWindow.weekEndDate());
        report.setGeneratedAt(LocalDateTime.now());
        report.setCollaborationsCreatedThisWeek(toInt(
                collaborationRepository.countByCreatedAtBetween(
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setActiveCollaborations(toInt(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)));
        report.setPendingCollaborationRequests(toInt(
                collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                        RequestStatus.PENDING,
                        CollaborationStatus.ACTIVE
                )
        ));
        report.setOpenResourceRequests(toInt(
                resourceRequestRepository.countByStatusAndCollaboration_Status(
                        ResourceRequestStatus.OPEN,
                        CollaborationStatus.ACTIVE
                )
        ));
        report.setActiveMarketingCampaigns(toInt(
                marketingCollaborationRepository.countByStatusAndCollaboration_Status(
                        MarketingCollaborationStatus.ACTIVE,
                        CollaborationStatus.ACTIVE
                )
        ));
        report.setOverdueMarketingTasks(toInt(marketingContentTaskRepository.countOverdueMarketingContentTasks()));

        WeeklyCollaborationReport savedReport = weeklyCollaborationReportRepository.save(report);
        return WeeklyCollaborationReportDTO.fromEntity(savedReport);
    }

    @Transactional(readOnly = true)
    public WeeklyCollaborationReportDTO getLatestWeeklyReport() {
        return weeklyCollaborationReportRepository.findFirstByOrderByWeekStartDateDesc()
                .map(WeeklyCollaborationReportDTO::fromEntity)
                .orElse(null);
    }

    private WeeklyCollaborationReport loadOrCreateCurrentWeekReport(LocalDate weekStartDate) {
        if (!weeklyCollaborationReportRepository.existsByWeekStartDate(weekStartDate)) {
            return new WeeklyCollaborationReport();
        }

        return weeklyCollaborationReportRepository.findByWeekStartDate(weekStartDate)
                .orElseGet(WeeklyCollaborationReport::new);
    }

    private WeeklyReportWindow buildWeeklyReportWindow(LocalDate referenceDate) {
        LocalDate weekStartDate = referenceDate.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
        LocalDate weekEndDate = weekStartDate.plusDays(6);
        LocalDateTime weekStartDateTime = weekStartDate.atStartOfDay();
        LocalDateTime weekEndDateTime = weekEndDate.atTime(LocalTime.of(23, 59, 59));

        return new WeeklyReportWindow(
                weekStartDate,
                weekEndDate,
                weekStartDateTime,
                weekEndDateTime
        );
    }

    private int toInt(long value) {
        return Math.toIntExact(value);
    }

    private record WeeklyReportWindow(
            LocalDate weekStartDate,
            LocalDate weekEndDate,
            LocalDateTime weekStartDateTime,
            LocalDateTime weekEndDateTime
    ) {
    }
}

