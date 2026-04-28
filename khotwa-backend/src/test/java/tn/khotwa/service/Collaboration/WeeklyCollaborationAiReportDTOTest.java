package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;
import tn.khotwa.dto.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.entity.collaboration.WeeklyCollaborationAiReport;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;
import tn.khotwa.enums.collaboration.AiGenerationStatus;

class WeeklyCollaborationAiReportDTOTest {

    @Test
    void fromEntityCopiesCategoryFields() {
        WeeklyCollaborationAiReport report = new WeeklyCollaborationAiReport();
        report.setId(8L);
        report.setWeeklyReport(weeklyReport());
        report.setGeneratedAt(LocalDateTime.of(2026, 4, 27, 12, 0));
        report.setUpdatedAt(LocalDateTime.of(2026, 4, 27, 12, 5));

        report.setGlobalInsightJson("{}");
        report.setGlobalStatus(AiGenerationStatus.SUCCESS);
        report.setGlobalError(null);

        report.setResourceInsightJson(null);
        report.setResourceStatus(AiGenerationStatus.FAILED);
        report.setResourceError("Gemini quota exceeded");

        report.setMarketingInsightJson("{\"risk\":\"low\"}");
        report.setMarketingStatus(AiGenerationStatus.SUCCESS);
        report.setMarketingError(null);

        WeeklyCollaborationAiReportDTO dto = WeeklyCollaborationAiReportDTO.fromEntity(report);

        assertThat(dto.id()).isEqualTo(8L);
        assertThat(dto.weeklyReportId()).isEqualTo(12L);
        assertThat(dto.generatedAt()).isEqualTo(LocalDateTime.of(2026, 4, 27, 12, 0));
        assertThat(dto.updatedAt()).isEqualTo(LocalDateTime.of(2026, 4, 27, 12, 5));

        assertThat(dto.globalInsightJson()).isEqualTo("{}");
        assertThat(dto.globalStatus()).isEqualTo(AiGenerationStatus.SUCCESS);
        assertThat(dto.globalError()).isNull();

        assertThat(dto.resourceInsightJson()).isNull();
        assertThat(dto.resourceStatus()).isEqualTo(AiGenerationStatus.FAILED);
        assertThat(dto.resourceError()).isEqualTo("Gemini quota exceeded");

        assertThat(dto.marketingInsightJson()).isEqualTo("{\"risk\":\"low\"}");
        assertThat(dto.marketingStatus()).isEqualTo(AiGenerationStatus.SUCCESS);
        assertThat(dto.marketingError()).isNull();
    }

    private WeeklyCollaborationReport weeklyReport() {
        WeeklyCollaborationReport report = new WeeklyCollaborationReport();
        report.setId(12L);
        report.setWeekStartDate(LocalDate.of(2026, 4, 20));
        report.setWeekEndDate(LocalDate.of(2026, 4, 26));
        return report;
    }
}