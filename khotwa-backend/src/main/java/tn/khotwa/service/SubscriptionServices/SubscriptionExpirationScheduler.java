package tn.khotwa.service.SubscriptionServices;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class SubscriptionExpirationScheduler {

    private final SubscriptionService subscriptionService;

    @Scheduled(cron = "0 */9 * * * *")
    public void processExpiredSubscriptions() {
        log.info("Running expired subscriptions synchronization...");
        subscriptionService.desactiverSubExpired();
    }
}
