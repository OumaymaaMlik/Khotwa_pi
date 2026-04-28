package tn.khotwa.service.collaboration;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class WeeklyCollaborationReportScheduler {

    private final WeeklyCollaborationReportService weeklyCollaborationReportService;

    @Scheduled(cron = "0 0 8 ? * MON", zone = "Africa/Tunis")
    public void generateWeeklyCollaborationReport() {
        weeklyCollaborationReportService.generateWeeklyReport();
    }
}

