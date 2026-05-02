package tn.khotwa.service.subscriptionServices.Ia;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import tn.khotwa.dto.subscription.EngagementScoreDTO;
import tn.khotwa.enums.subscriptionEnums.RiskLevel;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class EngagementScoringScheduler {

    private final EngagementScoreService engagementScoreService;

    @Scheduled(cron = "0 0 7 * * *")
    public void runDailyChurnScoring() {
        log.info("  CHURN SCORING — Démarrage calcul quotidien");

        try {
            List<EngagementScoreDTO> results = engagementScoreService.computeForAllUsers();

            long highCount   = results.stream().filter(r -> r.getRiskLevel() == RiskLevel.HIGH).count();
            long mediumCount = results.stream().filter(r -> r.getRiskLevel() == RiskLevel.MEDIUM).count();
            long lowCount    = results.stream().filter(r -> r.getRiskLevel() == RiskLevel.LOW).count();

            log.info("  Résultats : {} utilisateurs analysés", results.size());
            log.info("  🔴 HIGH   : {}", highCount);
            log.info("  🟠 MEDIUM : {}", mediumCount);
            log.info("  🟢 LOW    : {}", lowCount);

        } catch (Exception e) {
            log.error("Erreur lors du calcul quotidien du churn score : {}", e.getMessage(), e);
        }
    }
    @Scheduled(cron = "0 0 8 * * *")
    public void runDailyRetentionEmails() {
        log.info("  CHURN EMAILS — Envoi des emails de rétention");


        try {
            int sent = engagementScoreService.sendPendingRetentionEmails();
            log.info("  {} email(s) de rétention envoyé(s)", sent);
        } catch (Exception e) {
            log.error("Erreur lors de l'envoi des emails de rétention : {}", e.getMessage(), e);
        }
    }
}