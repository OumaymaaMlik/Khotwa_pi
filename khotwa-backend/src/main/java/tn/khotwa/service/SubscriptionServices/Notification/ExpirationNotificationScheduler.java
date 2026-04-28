package tn.khotwa.service.SubscriptionServices.Notification;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import tn.khotwa.entity.Subscription.Subscription;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;
import tn.khotwa.repository.SubscriptionRepo.SubscriptionRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class ExpirationNotificationScheduler {

    private final SubscriptionRepository subscriptionRepository;
    private final EmailService emailService;

    // Runs every day at 08:00
    @Scheduled(cron = "0 0 8 * * *")
    public void sendExpirationWarnings() {
        log.info("Running expiration notification check...");

        LocalDate today = LocalDate.now();
        LocalDate warningDate = today.plusDays(3); // notify 3 days before

        List<Subscription> subs = subscriptionRepository.findByStatutAndDateFinBetween(
                SubscriptionStatus.ACTIVE, today, warningDate
        );

        for (Subscription sub : subs) {
            User user = sub.getUser();
            if (user == null || user.getEmailAddress() == null) continue;

            long daysLeft = ChronoUnit.DAYS.between(today, sub.getDateFin());
            if (daysLeft < 0) continue;

            String planLabel = sub.getPlanOffer() != null
                    ? sub.getPlanOffer().getLabel()
                    : sub.getPlan().name();

            try {
                emailService.sendExpirationWarning(
                        user.getEmailAddress(),
                        user.getFirstName(),
                        planLabel,
                        daysLeft
                );
                log.info("Expiration email sent to {} ({}d left)", user.getEmailAddress(), daysLeft);
            } catch (Exception e) {
                log.error("Failed to send email to {}: {}", user.getEmailAddress(), e.getMessage());
            }
        }
    }
}