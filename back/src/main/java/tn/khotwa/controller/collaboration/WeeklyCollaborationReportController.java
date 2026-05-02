package tn.khotwa.controller.collaboration;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.service.collaboration.WeeklyCollaborationReportService;

@RestController
@RequestMapping("/api/collaborations/reports/weekly")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class WeeklyCollaborationReportController {

    private final WeeklyCollaborationReportService weeklyCollaborationReportService;

    @GetMapping("/latest")
    public ResponseEntity<WeeklyCollaborationReportDTO> getLatestWeeklyReport() {
        return ResponseEntity.ok(weeklyCollaborationReportService.getLatestWeeklyReport());
    }

    @PostMapping("/generate")
    public ResponseEntity<WeeklyCollaborationReportDTO> generateWeeklyReport() {
        return ResponseEntity.ok(weeklyCollaborationReportService.generateWeeklyReport());
    }

    @GetMapping
    public ResponseEntity<List<WeeklyCollaborationReportDTO>> getAllWeeklyReports() {
        return ResponseEntity.ok(weeklyCollaborationReportService.getAllWeeklyReports());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WeeklyCollaborationReportDTO> getWeeklyReportById(@PathVariable Long id) {
        return ResponseEntity.ok(weeklyCollaborationReportService.getWeeklyReportById(id));
    }
}
