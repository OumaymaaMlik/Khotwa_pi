package tn.khotwa.scheduler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import tn.khotwa.service.evenementService.ReminderService;

@Slf4j
@Component
@RequiredArgsConstructor
public class ReminderScheduler {

    private final ReminderService reminderService;

    @Scheduled( cron="0 0 8 * * * ")
    /*@Scheduled(cron = "0 * * * * *")*/
    public void scheduledDailyReminder() {
        System.out.println("[Scheduler] Sending tomorrow's reminders...");
        int sent = reminderService.sendTomorrowReminders();
        System.out.println("[Scheduler] " + sent + " reminder(s) sent.");
    }
}