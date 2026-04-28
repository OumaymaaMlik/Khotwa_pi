package tn.khotwa.controller.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.enums.collaboration.AiGenerationStatus;
import tn.khotwa.service.collaboration.WeeklyCollaborationAiReportService;

@ExtendWith(MockitoExtension.class)
class WeeklyCollaborationAiGenerationControllerTest {

    @Mock
    private WeeklyCollaborationAiReportService weeklyCollaborationAiReportService;

    @Test
    void generateGlobalInsightDelegatesToService() {
        WeeklyCollaborationAiReportDTO dto = sampleReport();
        when(weeklyCollaborationAiReportService.generateGlobalInsight(12L)).thenReturn(dto);

        WeeklyCollaborationAiGenerationController controller =
                new WeeklyCollaborationAiGenerationController(weeklyCollaborationAiReportService);

        assertThat(controller.generateGlobalInsight(12L).getBody()).isEqualTo(dto);
    }

    @Test
    void generateResourceInsightDelegatesToService() {
        WeeklyCollaborationAiReportDTO dto = sampleReport();
        when(weeklyCollaborationAiReportService.generateResourceInsight(12L)).thenReturn(dto);

        WeeklyCollaborationAiGenerationController controller =
                new WeeklyCollaborationAiGenerationController(weeklyCollaborationAiReportService);

        assertThat(controller.generateResourceInsight(12L).getBody()).isEqualTo(dto);
    }

    @Test
    void generateMarketingInsightDelegatesToService() {
        WeeklyCollaborationAiReportDTO dto = sampleReport();
        when(weeklyCollaborationAiReportService.generateMarketingInsight(12L)).thenReturn(dto);

        WeeklyCollaborationAiGenerationController controller =
                new WeeklyCollaborationAiGenerationController(weeklyCollaborationAiReportService);

        assertThat(controller.generateMarketingInsight(12L).getBody()).isEqualTo(dto);
    }

    private WeeklyCollaborationAiReportDTO sampleReport() {
        return new WeeklyCollaborationAiReportDTO(
                5L,
                12L,
                LocalDateTime.of(2026, 4, 27, 10, 0),
                LocalDateTime.of(2026, 4, 27, 10, 0),
                "{}",
                AiGenerationStatus.SUCCESS,
                null,
                null,
                AiGenerationStatus.PENDING,
                null,
                null,
                AiGenerationStatus.PENDING,
                null
        );
    }
}