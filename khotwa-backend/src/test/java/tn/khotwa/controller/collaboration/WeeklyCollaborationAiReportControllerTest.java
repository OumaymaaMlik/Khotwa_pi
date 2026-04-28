package tn.khotwa.controller.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.enums.collaboration.AiGenerationStatus;
import tn.khotwa.service.collaboration.WeeklyCollaborationAiReportService;

@ExtendWith(MockitoExtension.class)
class WeeklyCollaborationAiReportControllerTest {

    @Mock
    private WeeklyCollaborationAiReportService weeklyCollaborationAiReportService;

    @Test
    void getAiReportsReturnsSingleRowList() {
        List<WeeklyCollaborationAiReportDTO> dtos = List.of(sampleReport());
        when(weeklyCollaborationAiReportService.getAiReportsForWeeklyReport(12L)).thenReturn(dtos);

        WeeklyCollaborationAiReportController controller =
                new WeeklyCollaborationAiReportController(weeklyCollaborationAiReportService);

        assertThat(controller.getAiReports(12L).getBody()).isEqualTo(dtos);
    }

    @Test
    void getLatestAiReportReturnsReport() {
        WeeklyCollaborationAiReportDTO dto = sampleReport();
        when(weeklyCollaborationAiReportService.getLatestAiReportForWeeklyReport(12L)).thenReturn(dto);

        WeeklyCollaborationAiReportController controller =
                new WeeklyCollaborationAiReportController(weeklyCollaborationAiReportService);

        assertThat(controller.getLatestAiReport(12L).getBody()).isEqualTo(dto);
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