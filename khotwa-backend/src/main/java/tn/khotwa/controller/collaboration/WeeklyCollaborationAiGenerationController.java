package tn.khotwa.controller.collaboration;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.DTO.collaboration.WeeklyCollaborationAiReportDTO;
import tn.khotwa.service.collaboration.WeeklyCollaborationAiReportService;

@RestController
@RequestMapping("/api/weekly-reports")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class WeeklyCollaborationAiGenerationController {

    private final WeeklyCollaborationAiReportService weeklyCollaborationAiReportService;

    @PostMapping("/{id}/ai/global")
    public ResponseEntity<WeeklyCollaborationAiReportDTO> generateGlobalInsight(@PathVariable Long id) {
        return ResponseEntity.ok(weeklyCollaborationAiReportService.generateGlobalInsight(id));
    }

    @PostMapping("/{id}/ai/resource")
    public ResponseEntity<WeeklyCollaborationAiReportDTO> generateResourceInsight(@PathVariable Long id) {
        return ResponseEntity.ok(weeklyCollaborationAiReportService.generateResourceInsight(id));
    }

    @PostMapping("/{id}/ai/marketing")
    public ResponseEntity<WeeklyCollaborationAiReportDTO> generateMarketingInsight(@PathVariable Long id) {
        return ResponseEntity.ok(weeklyCollaborationAiReportService.generateMarketingInsight(id));
    }
}