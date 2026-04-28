package tn.khotwa.service.collaboration;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.temporal.TemporalAdjusters;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.DTO.collaboration.CollaborationTypeCountView;
import tn.khotwa.DTO.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.collaboration.CollaborationStatus;
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

@Service
@RequiredArgsConstructor
@Transactional
public class WeeklyCollaborationReportService {

    private static final ZoneId REPORT_ZONE = ZoneId.of("Africa/Tunis");
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    private final CollaborationRepository collaborationRepository;
    private final CollaborationMemberRepository collaborationMemberRepository;
    private final CollaborationRequestRepository collaborationRequestRepository;
    private final ResourceRequestRepository resourceRequestRepository;
    private final MarketingCollaborationRepository marketingCollaborationRepository;
    private final MarketingContentTaskRepository marketingContentTaskRepository;
    private final WeeklyCollaborationReportRepository weeklyCollaborationReportRepository;

    public WeeklyCollaborationReportDTO generateWeeklyReport() {
        return generateWeeklyReportForCurrentWeek(LocalDate.now(REPORT_ZONE));
    }

    WeeklyCollaborationReportDTO generateWeeklyReportForCurrentWeek(LocalDate referenceDate) {
        WeeklyReportWindow reportWindow = buildWeeklyReportWindow(referenceDate);

        WeeklyCollaborationReport report = loadOrCreateCurrentWeekReport(reportWindow.weekStartDate());

        report.setWeekStartDate(reportWindow.weekStartDate());
        report.setWeekEndDate(reportWindow.weekEndDate());
        report.setGeneratedAt(LocalDateTime.now(REPORT_ZONE));
        report.setCollaborationsCreatedThisWeek(toInt(
                collaborationRepository.countByCreatedAtBetween(
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setActiveCollaborations(toInt(collaborationRepository.countByStatus(CollaborationStatus.ACTIVE)));
        report.setSuspendedCollaborations(toInt(collaborationRepository.countByStatus(CollaborationStatus.SUSPENDED)));
        report.setClosedCollaborations(toInt(collaborationRepository.countByStatus(CollaborationStatus.CLOSED)));
        report.setCollaborationsClosedThisWeek(toInt(
                collaborationRepository.countByStatusAndClosedAtBetween(
                        CollaborationStatus.CLOSED,
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setCollaborationsByTypeJson(buildCollaborationsByTypeJson(collaborationRepository.countCollaborationsByType()));
        report.setPendingCollaborationRequests(toInt(
                collaborationRequestRepository.countByStatusAndTargetCollaboration_Status(
                        RequestStatus.PENDING,
                        CollaborationStatus.ACTIVE
                )
        ));
        report.setAcceptedRequestsThisWeek(toInt(
                collaborationRequestRepository.countByStatusAndProcessedAtBetween(
                        RequestStatus.ACCEPTED,
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setRejectedRequestsThisWeek(toInt(
                collaborationRequestRepository.countByStatusAndProcessedAtBetween(
                        RequestStatus.REJECTED,
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setNewMembersThisWeek(toInt(
                collaborationMemberRepository.countByJoinedAtBetween(
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setInvitationsSentThisWeek(toInt(
                collaborationRequestRepository.countByScenarioAndCreatedAtBetween(
                        CollaborationRequestScenario.COLLAB_INVITATION,
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setInvitationsAcceptedThisWeek(toInt(
                collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                        RequestStatus.ACCEPTED,
                        CollaborationRequestScenario.COLLAB_INVITATION,
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setInvitationsRejectedThisWeek(toInt(
                collaborationRequestRepository.countByStatusAndScenarioAndProcessedAtBetween(
                        RequestStatus.REJECTED,
                        CollaborationRequestScenario.COLLAB_INVITATION,
                        reportWindow.weekStartDateTime(),
                        reportWindow.weekEndDateTime()
                )
        ));
        report.setOpenResourceRequests(toInt(resourceRequestRepository.countByStatus(ResourceRequestStatus.OPEN)));
        report.setFulfilledResourceRequests(toInt(resourceRequestRepository.countByStatus(ResourceRequestStatus.FULFILLED)));
        report.setCancelledResourceRequests(toInt(resourceRequestRepository.countByStatus(ResourceRequestStatus.CANCELLED)));
        report.setActiveMarketingCampaigns(toInt(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.ACTIVE)));
        report.setCompletedMarketingCampaigns(toInt(marketingCollaborationRepository.countByStatus(MarketingCollaborationStatus.COMPLETED)));
        report.setPublishedMarketingTasks(toInt(
                marketingContentTaskRepository.countByStatusAndMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                        TaskStatus.PUBLISHED,
                        MarketingCollaborationStatus.ACTIVE,
                        CollaborationStatus.ACTIVE
                )
        ));
        report.setTotalMarketingTasks(toInt(
                marketingContentTaskRepository.countByMarketingCollaboration_StatusAndMarketingCollaboration_Collaboration_Status(
                        MarketingCollaborationStatus.ACTIVE,
                        CollaborationStatus.ACTIVE
                )
        ));
        report.setOverdueMarketingTasks(toInt(marketingContentTaskRepository.countOverdueMarketingContentTasksForActiveCampaigns()));
        WeeklyCollaborationReport savedReport = saveWeeklyReport(reportWindow.weekStartDate(), report);
        return WeeklyCollaborationReportDTO.fromEntity(savedReport);
    }

    @Transactional(readOnly = true)
    public WeeklyCollaborationReportDTO getLatestWeeklyReport() {
        return weeklyCollaborationReportRepository.findFirstByOrderByWeekStartDateDesc()
                .map(WeeklyCollaborationReportDTO::fromEntity)
                .orElseThrow(() -> new ResourceNotFoundException("No weekly collaboration report has been generated yet."));
    }

    @Transactional(readOnly = true)
    public List<WeeklyCollaborationReportDTO> getAllWeeklyReports() {
        return weeklyCollaborationReportRepository.findAllByOrderByWeekStartDateDesc()
                .stream()
                .map(WeeklyCollaborationReportDTO::fromEntity)
                .toList();
    }

    @Transactional(readOnly = true)
    public WeeklyCollaborationReportDTO getWeeklyReportById(Long id) {
        return weeklyCollaborationReportRepository.findById(id)
                .map(WeeklyCollaborationReportDTO::fromEntity)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Weekly collaboration report with id " + id + " was not found."
                ));
    }

    private WeeklyCollaborationReport loadOrCreateCurrentWeekReport(LocalDate weekStartDate) {
        return weeklyCollaborationReportRepository.findByWeekStartDate(weekStartDate)
                .orElseGet(WeeklyCollaborationReport::new);
    }

    private WeeklyCollaborationReport saveWeeklyReport(LocalDate weekStartDate, WeeklyCollaborationReport report) {
        try {
            return weeklyCollaborationReportRepository.save(report);
        } catch (DataIntegrityViolationException exception) {
            WeeklyCollaborationReport existingReport = weeklyCollaborationReportRepository.findByWeekStartDate(weekStartDate)
                    .orElseThrow(() -> exception);
            copySnapshot(report, existingReport);
            return weeklyCollaborationReportRepository.save(existingReport);
        }
    }

    private void copySnapshot(WeeklyCollaborationReport source, WeeklyCollaborationReport target) {
        target.setWeekStartDate(source.getWeekStartDate());
        target.setWeekEndDate(source.getWeekEndDate());
        target.setGeneratedAt(source.getGeneratedAt());
        target.setCollaborationsCreatedThisWeek(source.getCollaborationsCreatedThisWeek());
        target.setActiveCollaborations(source.getActiveCollaborations());
        target.setSuspendedCollaborations(source.getSuspendedCollaborations());
        target.setClosedCollaborations(source.getClosedCollaborations());
        target.setCollaborationsClosedThisWeek(source.getCollaborationsClosedThisWeek());
        target.setCollaborationsByTypeJson(source.getCollaborationsByTypeJson());
        target.setPendingCollaborationRequests(source.getPendingCollaborationRequests());
        target.setAcceptedRequestsThisWeek(source.getAcceptedRequestsThisWeek());
        target.setRejectedRequestsThisWeek(source.getRejectedRequestsThisWeek());
        target.setNewMembersThisWeek(source.getNewMembersThisWeek());
        target.setInvitationsSentThisWeek(source.getInvitationsSentThisWeek());
        target.setInvitationsAcceptedThisWeek(source.getInvitationsAcceptedThisWeek());
        target.setInvitationsRejectedThisWeek(source.getInvitationsRejectedThisWeek());
        target.setOpenResourceRequests(source.getOpenResourceRequests());
        target.setFulfilledResourceRequests(source.getFulfilledResourceRequests());
        target.setCancelledResourceRequests(source.getCancelledResourceRequests());
        target.setActiveMarketingCampaigns(source.getActiveMarketingCampaigns());
        target.setCompletedMarketingCampaigns(source.getCompletedMarketingCampaigns());
        target.setOverdueMarketingTasks(source.getOverdueMarketingTasks());
        target.setPublishedMarketingTasks(source.getPublishedMarketingTasks());
        target.setTotalMarketingTasks(source.getTotalMarketingTasks());
    }

    private WeeklyReportWindow buildWeeklyReportWindow(LocalDate referenceDate) {
        LocalDate weekStartDate = referenceDate.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
        LocalDate weekEndDate = weekStartDate.plusDays(6);
        LocalDateTime weekStartDateTime = weekStartDate.atStartOfDay();
        LocalDateTime weekEndDateTime = weekEndDate.atTime(LocalTime.MAX);

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

    private String buildCollaborationsByTypeJson(List<CollaborationTypeCountView> counts) {
        Map<String, Integer> byType = new LinkedHashMap<>();
        for (CollaborationType type : CollaborationType.values()) {
            byType.put(type.name(), 0);
        }
        for (CollaborationTypeCountView count : counts) {
            byType.put(count.getCollaborationType().name(), toInt(count.getCollaborationCount()));
        }

        try {
            return OBJECT_MAPPER.writeValueAsString(byType);
        } catch (Exception exception) {
            throw new IllegalStateException("Unable to serialize collaboration type metrics.", exception);
        }
    }

    private record WeeklyReportWindow(
            LocalDate weekStartDate,
            LocalDate weekEndDate,
            LocalDateTime weekStartDateTime,
            LocalDateTime weekEndDateTime
    ) {
    }
}

