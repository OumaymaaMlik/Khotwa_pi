package tn.khotwa.controller.collaboration;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.service.collaboration.WeeklyCollaborationAiReportService;

@RestController
@RequestMapping("/api/collaborations/reports/weekly")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class WeeklyCollaborationAiReportController {

    private final WeeklyCollaborationAiReportService weeklyCollaborationAiReportService;

    @GetMapping("/{id}/ai-reports")
    public ResponseEntity<List<WeeklyCollaborationAiReportDTO>> getAiReports(@PathVariable Long id) {
        return ResponseEntity.ok(weeklyCollaborationAiReportService.getAiReportsForWeeklyReport(id));
    }

    @GetMapping("/{id}/ai-reports/latest")
    public ResponseEntity<WeeklyCollaborationAiReportDTO> getLatestAiReport(@PathVariable Long id) {
        return ResponseEntity.ok(weeklyCollaborationAiReportService.getLatestAiReportForWeeklyReport(id));
    }
}