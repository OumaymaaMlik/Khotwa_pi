package tn.khotwa.service.collaboration;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.DTO.collaboration.GlobalCollaborationInsight;
import tn.khotwa.DTO.collaboration.MarketingCollaborationInsight;
import tn.khotwa.DTO.collaboration.ResourceCollaborationInsight;
import tn.khotwa.DTO.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.DTO.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationAiReport;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.AiGenerationStatus;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.WeeklyCollaborationAiReportRepository;
import tn.khotwa.repository.collaboration.WeeklyCollaborationReportRepository;

@Service
@RequiredArgsConstructor
@Transactional
public class WeeklyCollaborationAiReportService {

    private static final ZoneId REPORT_ZONE = ZoneId.of("Africa/Tunis");

    private final WeeklyCollaborationAiReportRepository weeklyCollaborationAiReportRepository;
    private final WeeklyCollaborationReportRepository weeklyCollaborationReportRepository;
    private final WeeklyCollaborationAiGenerationService weeklyCollaborationAiGenerationService;
    private final ObjectMapper objectMapper;

    @Transactional(readOnly = true)
    public List<WeeklyCollaborationAiReportDTO> getAiReportsForWeeklyReport(Long weeklyReportId) {
        ensureWeeklyReportExists(weeklyReportId);
        return weeklyCollaborationAiReportRepository.findByWeeklyReportId(weeklyReportId)
                .map(WeeklyCollaborationAiReportDTO::fromEntity)
                .map(List::of)
                .orElseGet(List::of);
    }

    @Transactional(readOnly = true)
    public WeeklyCollaborationAiReportDTO getLatestAiReportForWeeklyReport(Long weeklyReportId) {
        ensureWeeklyReportExists(weeklyReportId);
        return weeklyCollaborationAiReportRepository.findByWeeklyReportId(weeklyReportId)
                .map(WeeklyCollaborationAiReportDTO::fromEntity)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "No AI report exists yet for weekly report with id " + weeklyReportId + "."
                ));
    }

    public WeeklyCollaborationAiReportDTO generateGlobalInsight(Long weeklyReportId) {
        WeeklyCollaborationAiReport aiReport = findOrCreateReport(weeklyReportId);

        aiReport.setGlobalStatus(AiGenerationStatus.PENDING);
        aiReport.setGlobalError(null);
        weeklyCollaborationAiReportRepository.save(aiReport);

        WeeklyCollaborationReportDTO weeklyReportDTO = WeeklyCollaborationReportDTO.fromEntity(aiReport.getWeeklyReport());
        WeeklyCollaborationAiGenerationService.InsightGenerationResult<GlobalCollaborationInsight> result =
                weeklyCollaborationAiGenerationService.generateGlobalInsightResult(weeklyReportDTO.globalCollaborationHealth());

        applyInsight(
                result,
                () -> aiReport.setGlobalStatus(AiGenerationStatus.SUCCESS),
                () -> aiReport.setGlobalStatus(AiGenerationStatus.FAILED),
                aiReport::setGlobalInsightJson,
                aiReport::setGlobalError,
                "Global insight"
        );

        return WeeklyCollaborationAiReportDTO.fromEntity(weeklyCollaborationAiReportRepository.save(aiReport));
    }

    public WeeklyCollaborationAiReportDTO generateResourceInsight(Long weeklyReportId) {
        WeeklyCollaborationAiReport aiReport = findOrCreateReport(weeklyReportId);

        aiReport.setResourceStatus(AiGenerationStatus.PENDING);
        aiReport.setResourceError(null);
        weeklyCollaborationAiReportRepository.save(aiReport);

        WeeklyCollaborationReportDTO weeklyReportDTO = WeeklyCollaborationReportDTO.fromEntity(aiReport.getWeeklyReport());
        WeeklyCollaborationAiGenerationService.InsightGenerationResult<ResourceCollaborationInsight> result =
                weeklyCollaborationAiGenerationService.generateResourceInsightResult(weeklyReportDTO.resourceCollaborationAnalysis());

        applyInsight(
                result,
                () -> aiReport.setResourceStatus(AiGenerationStatus.SUCCESS),
                () -> aiReport.setResourceStatus(AiGenerationStatus.FAILED),
                aiReport::setResourceInsightJson,
                aiReport::setResourceError,
                "Resource insight"
        );

        return WeeklyCollaborationAiReportDTO.fromEntity(weeklyCollaborationAiReportRepository.save(aiReport));
    }

    public WeeklyCollaborationAiReportDTO generateMarketingInsight(Long weeklyReportId) {
        WeeklyCollaborationAiReport aiReport = findOrCreateReport(weeklyReportId);

        aiReport.setMarketingStatus(AiGenerationStatus.PENDING);
        aiReport.setMarketingError(null);
        weeklyCollaborationAiReportRepository.save(aiReport);

        WeeklyCollaborationReportDTO weeklyReportDTO = WeeklyCollaborationReportDTO.fromEntity(aiReport.getWeeklyReport());
        WeeklyCollaborationAiGenerationService.InsightGenerationResult<MarketingCollaborationInsight> result =
                weeklyCollaborationAiGenerationService.generateMarketingInsightResult(weeklyReportDTO.marketingCollaborationAnalysis());

        applyInsight(
                result,
                () -> aiReport.setMarketingStatus(AiGenerationStatus.SUCCESS),
                () -> aiReport.setMarketingStatus(AiGenerationStatus.FAILED),
                aiReport::setMarketingInsightJson,
                aiReport::setMarketingError,
                "Marketing insight"
        );

        return WeeklyCollaborationAiReportDTO.fromEntity(weeklyCollaborationAiReportRepository.save(aiReport));
    }

    private WeeklyCollaborationAiReport findOrCreateReport(Long weeklyReportId) {
        WeeklyCollaborationReport weeklyReport = weeklyCollaborationReportRepository.findById(weeklyReportId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Weekly collaboration report with id " + weeklyReportId + " was not found."
                ));

        return weeklyCollaborationAiReportRepository.findByWeeklyReportId(weeklyReportId)
                .orElseGet(() -> createNewAiReport(weeklyReport));
    }

    private WeeklyCollaborationAiReport createNewAiReport(WeeklyCollaborationReport weeklyReport) {
        WeeklyCollaborationAiReport aiReport = new WeeklyCollaborationAiReport();
        aiReport.setWeeklyReport(weeklyReport);

        LocalDateTime now = LocalDateTime.now(REPORT_ZONE);
        aiReport.setGeneratedAt(now);
        aiReport.setUpdatedAt(now);

        aiReport.setGlobalStatus(AiGenerationStatus.PENDING);
        aiReport.setResourceStatus(AiGenerationStatus.PENDING);
        aiReport.setMarketingStatus(AiGenerationStatus.PENDING);

        return weeklyCollaborationAiReportRepository.save(aiReport);
    }

    private void ensureWeeklyReportExists(Long weeklyReportId) {
        if (!weeklyCollaborationReportRepository.existsById(weeklyReportId)) {
            throw new ResourceNotFoundException(
                    "Weekly collaboration report with id " + weeklyReportId + " was not found."
            );
        }
    }

    private <T> void applyInsight(
            WeeklyCollaborationAiGenerationService.InsightGenerationResult<T> result,
            Runnable markSuccess,
            Runnable markFailure,
            InsightJsonConsumer insightConsumer,
            ErrorMessageConsumer errorConsumer,
            String label) {
        if (result.insight() != null) {
            insightConsumer.accept(writeInsightJson(result.insight()));
            errorConsumer.accept(null);
            markSuccess.run();
            return;
        }

        errorConsumer.accept(label + " unavailable. " + result.failureMessage());
        markFailure.run();
    }

    private String writeInsightJson(Object insight) {
        try {
            return objectMapper.writeValueAsString(insight);
        } catch (Exception exception) {
            throw new IllegalStateException("Unable to serialize generated AI insight.", exception);
        }
    }

    @FunctionalInterface
    private interface InsightJsonConsumer {
        void accept(String json);
    }

    @FunctionalInterface
    private interface ErrorMessageConsumer {
        void accept(String error);
    }
}