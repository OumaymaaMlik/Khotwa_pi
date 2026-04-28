package tn.khotwa.controller.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.service.collaboration.WeeklyCollaborationReportService;

@ExtendWith(MockitoExtension.class)
class WeeklyCollaborationReportControllerTest {

    @Mock
    private WeeklyCollaborationReportService weeklyCollaborationReportService;

    @Test
    void getLatestWeeklyReportReturnsMetricsDto() {
        WeeklyCollaborationReportDTO dto = sampleReport();
        when(weeklyCollaborationReportService.getLatestWeeklyReport()).thenReturn(dto);

        WeeklyCollaborationReportController controller =
                new WeeklyCollaborationReportController(weeklyCollaborationReportService);

        assertThat(controller.getLatestWeeklyReport().getBody()).isEqualTo(dto);
    }

    @Test
    void generateWeeklyReportReturnsMetricsDto() {
        WeeklyCollaborationReportDTO dto = sampleReport();
        when(weeklyCollaborationReportService.generateWeeklyReport()).thenReturn(dto);

        WeeklyCollaborationReportController controller =
                new WeeklyCollaborationReportController(weeklyCollaborationReportService);

        assertThat(controller.generateWeeklyReport().getBody()).isEqualTo(dto);
    }

    @Test
    void getAllWeeklyReportsReturnsHistory() {
        List<WeeklyCollaborationReportDTO> dtos = List.of(sampleReport());
        when(weeklyCollaborationReportService.getAllWeeklyReports()).thenReturn(dtos);

        WeeklyCollaborationReportController controller =
                new WeeklyCollaborationReportController(weeklyCollaborationReportService);

        assertThat(controller.getAllWeeklyReports().getBody()).isEqualTo(dtos);
    }

    @Test
    void getWeeklyReportByIdReturnsMetricsDto() {
        WeeklyCollaborationReportDTO dto = sampleReport();
        when(weeklyCollaborationReportService.getWeeklyReportById(12L)).thenReturn(dto);

        WeeklyCollaborationReportController controller =
                new WeeklyCollaborationReportController(weeklyCollaborationReportService);

        assertThat(controller.getWeeklyReportById(12L).getBody()).isEqualTo(dto);
    }

    private WeeklyCollaborationReportDTO sampleReport() {
        return new WeeklyCollaborationReportDTO(
                12L,
                LocalDate.of(2026, 4, 20),
                LocalDate.of(2026, 4, 26),
                LocalDateTime.of(2026, 4, 27, 8, 30),
                4,
                8,
                1,
                2,
                1,
                Map.of("MARKETING", 2, "RESOURCES", 2),
                3,
                5,
                1,
                4,
                2,
                1,
                0,
                1,
                2,
                1,
                2,
                1,
                2,
                4,
                0,
                "MEDIUM",
                new WeeklyCollaborationReportDTO.GlobalCollaborationHealth(
                        4,
                        8,
                        1,
                        2,
                        3,
                        5,
                        1,
                        4,
                        2,
                        1,
                        0,
                        Map.of("MARKETING", 2, "RESOURCES", 2),
                        0.8333,
                        0.5
                ),
                new WeeklyCollaborationReportDTO.ResourceCollaborationAnalysis(
                        1,
                        2,
                        1,
                        4,
                        0.5,
                        0.25
                ),
                new WeeklyCollaborationReportDTO.MarketingCollaborationAnalysis(
                        2,
                        1,
                        0,
                        2,
                        4,
                        0.0,
                        0.5
                )
        );
    }
}
