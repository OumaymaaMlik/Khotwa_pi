package tn.khotwa.service.SubscriptionServices;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tn.khotwa.dto.Subscription.EngagementScoreDTO;
import tn.khotwa.entity.SubscriptionEntities.EngagementScore;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.SubscriptionEnums.RiskLevel;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;
import tn.khotwa.repository.SubscriptionRepo.EngagementRepo.EngagementScoreRepository;
import tn.khotwa.repository.SubscriptionRepo.SubscriptionRepository;
import tn.khotwa.repository.UserRepo.UserRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class EngagementScoreService {

    private final UserRepository         userRepository;
    private final SubscriptionRepository subscriptionRepository;
    private final EngagementScoreRepository churnSignalRepository;
    private final JavaMailSender         mailSender;
    private final RestTemplate           restTemplate;

    @Value("${anthropic.api.key:}")
    private String anthropicApiKey;

    @Value("${churn.scoring.expiry-warning-days:7}")
    private int expiryWarningDays;

    @Value("${churn.scoring.recalculate-after-hours:24}")
    private int recalculateAfterHours;

    private static final String ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
    private static final String CLAUDE_MODEL  = "claude-sonnet-4-20250514";


    @Transactional
    public EngagementScoreDTO computeForUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));

        LocalDateTime threshold = LocalDateTime.now().minusHours(recalculateAfterHours);
        List<EngagementScore> recent = churnSignalRepository.findRecentByUser(userId, threshold);
        if (!recent.isEmpty()) {
            log.debug("Score récent trouvé pour user {} — pas de recalcul", userId);
            return EngagementScoreDTO.from(recent.get(0));
        }

        Optional<Subscription> subOpt = subscriptionRepository
                .findByUser_IdUserAndStatutIn(userId,
                        List.of(SubscriptionStatus.ACTIVE, SubscriptionStatus.EXPIRED,
                                SubscriptionStatus.CANCELLED, SubscriptionStatus.PENDING));

        EngagementScore signal = evaluate(user, subOpt.orElse(null));
        EngagementScore saved  = churnSignalRepository.save(signal);

        if (signal.getRiskLevel() == RiskLevel.HIGH && !Boolean.TRUE.equals(signal.getEmailSent())) {
            sendRetentionEmail(saved);
        }

        return EngagementScoreDTO.from(saved);
    }
    @Transactional
    public List<EngagementScoreDTO> computeForAllUsers() {
        List<User> users = userRepository.findAll();
        log.info("Calcul churn score pour {} utilisateurs...", users.size());

        List<EngagementScoreDTO> results = new ArrayList<>();

        for (User user : users) {
            try {
                EngagementScoreDTO dto = computeForUser(user.getIdUser());
                results.add(dto);
            } catch (Exception e) {
                log.error("Erreur calcul churn pour user {}: {}", user.getIdUser(), e.getMessage());
            }
        }

        results.sort(Comparator.comparingInt(EngagementScoreDTO::getRiskScore).reversed());
        log.info("Calcul terminé. HIGH: {} | MEDIUM: {} | LOW: {}",
                count(results, RiskLevel.HIGH),
                count(results, RiskLevel.MEDIUM),
                count(results, RiskLevel.LOW));

        return results;
    }

    public List<EngagementScoreDTO> getLatestScores() {
        return churnSignalRepository.findLatestForAllUsers()
                .stream()
                .map(EngagementScoreDTO::from)
                .collect(Collectors.toList());
    }

    public Optional<EngagementScoreDTO> getLatestScoreForUser(Long userId) {
        return churnSignalRepository
                .findTopByUser_IdUserOrderByComputedAtDesc(userId)
                .map(EngagementScoreDTO::from);
    }

    public Map<String, Object> getStats() {
        List<Object[]> counts = churnSignalRepository.countLatestByRiskLevel();
        Map<String, Long> byLevel = new LinkedHashMap<>();
        long total = 0;

        for (Object[] row : counts) {
            RiskLevel level = (RiskLevel) row[0];
            long count = (long) row[1];
            byLevel.put(level.name(), count);
            total += count;
        }

        List<EngagementScore> highRisk = churnSignalRepository
                .findByRiskLevelOrderByRiskScoreDesc(RiskLevel.HIGH);
        long emailsSent = highRisk.stream()
                .filter(c -> Boolean.TRUE.equals(c.getEmailSent()))
                .count();

        Map<String, Object> stats = new LinkedHashMap<>();
        stats.put("totalUsers",        total);
        stats.put("countByLevel",      byLevel);
        stats.put("highRiskCount",     byLevel.getOrDefault("HIGH", 0L));
        stats.put("mediumRiskCount",   byLevel.getOrDefault("MEDIUM", 0L));
        stats.put("lowRiskCount",      byLevel.getOrDefault("LOW", 0L));
        stats.put("retentionEmailsSent", emailsSent);
        return stats;
    }


    private EngagementScore evaluate(User user, Subscription sub) {
        int score = 0;
        List<String> signals = new ArrayList<>();

        if (sub == null) {
            score += 40;
            signals.add("EXPIRED_OR_NO_SUB(+40): Aucun abonnement actif trouvé");
        } else if (sub.getStatut() == SubscriptionStatus.EXPIRED) {
            score += 40;
            signals.add("EXPIRED(+40): Abonnement expiré le " + sub.getDateFin());
        } else if (sub.getStatut() == SubscriptionStatus.CANCELLED) {
            score += 40;
            signals.add("CANCELLED(+40): Abonnement annulé");
        }

        if (sub != null && !Boolean.TRUE.equals(sub.getAutoRenouvellement())) {
            score += 20;
            signals.add("NO_AUTO_RENEW(+20): Renouvellement automatique désactivé");
        }

        boolean isFree = (sub == null || sub.getPlan() == PlanType.FREE
                || user.getPlanType() == PlanType.FREE || user.getPlanType() == null);
        if (isFree) {
            score += 15;
            signals.add("FREE_PLAN(+15): Utilisateur jamais converti en plan payant");
        }

        if (sub != null && sub.getStatut() == SubscriptionStatus.ACTIVE
                && sub.getDateFin() != null && !isFree) {
            long daysLeft = ChronoUnit.DAYS.between(LocalDate.now(), sub.getDateFin());
            if (daysLeft >= 0 && daysLeft <= expiryWarningDays) {
                score += 15;
                signals.add(String.format("EXPIRY_IMMINENT(+15): Expiration dans %d jour(s)", daysLeft));
            }
        }
        if (sub == null || sub.getPaiementRef() == null || sub.getPaiementRef().isBlank()) {
            score += 10;
            signals.add("NO_PAYMENT(+10): Aucun paiement enregistré");
        }
        score = Math.min(score, 100);
        RiskLevel level = RiskLevel.from(score);

        String aiMessage = null;
        if (level == RiskLevel.HIGH) {
            aiMessage = generateRetentionMessage(user, sub, signals, score);
        }

        return EngagementScore.builder()
                .user(user)
                .riskScore(score)
                .riskLevel(level)
                .signalsDetail(String.join(" | ", signals))
                .aiRetentionMessage(aiMessage)
                .emailSent(false)
                .computedAt(LocalDateTime.now())
                .build();
    }

    private String generateRetentionMessage(User user, Subscription sub,
                                            List<String> signals, int score) {
        if (anthropicApiKey == null || anthropicApiKey.isBlank()) {
            log.warn("Clé API Anthropic non configurée — message fallback utilisé");
            return buildFallbackMessage(user, sub);
        }

        try {
            String prompt = buildChurnPrompt(user, sub, signals, score);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("x-api-key", anthropicApiKey);
            headers.set("anthropic-version", "2023-06-01");

            Map<String, Object> body = Map.of(
                    "model",      CLAUDE_MODEL,
                    "max_tokens", 500,
                    "messages",   List.of(
                            Map.of("role", "user", "content", prompt)
                    )
            );

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            ResponseEntity<Map> response = restTemplate.postForEntity(ANTHROPIC_URL, request, Map.class);

            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                List<?> content = (List<?>) response.getBody().get("content");
                if (content != null && !content.isEmpty()) {
                    Object text = ((Map<?, ?>) content.get(0)).get("text");
                    if (text != null) {
                        log.info("Message IA généré pour user {}", user.getIdUser());
                        return text.toString().trim();
                    }
                }
            }
        } catch (Exception e) {
            log.error("Erreur appel Claude API pour user {}: {}", user.getIdUser(), e.getMessage());
        }

        return buildFallbackMessage(user, sub);
    }

    private String buildChurnPrompt(User user, Subscription sub,
                                    List<String> signals, int score) {
        String startup  = nvl(user.getStartup(), "une startup");
        String prenom   = nvl(user.getFirstName(), "utilisateur");
        String plan     = sub != null ? sub.getPlan().name() : "FREE";
        String statut   = sub != null ? sub.getStatut().name() : "AUCUN";
        String dateFin  = (sub != null && sub.getDateFin() != null)
                ? sub.getDateFin().toString() : "inconnue";
        String signalsSummary = String.join(", ", signals);

        return String.format("""
            Tu es un expert en rétention client pour Khotwa, une plateforme SaaS dédiée
            aux startups tunisiennes (gestion de projets, ressources, talents, planification).

            Rédige un email de rétention personnalisé en anglais pour cet utilisateur
            à FORT risque de churn (score : %d/100).

            PROFIL UTILISATEUR :
            - Prénom : %s
            - Startup : %s
            - Plan actuel : %s
            - Statut abonnement : %s
            - Date fin : %s
            - Signaux détectés : %s

            CONSIGNES STRICTES :
            1. Ton : chaleureux, empathique, sans pression commerciale agressive
            2. Rappelle 2-3 avantages clés de Khotwa en lien avec sa situation (startup, gestion de projet)
            3. Propose une action concrète et simple (renouveler, upgrader, contacter le support)
            4. Longueur : 120–180 mots maximum
            5. Commence directement par le corps de l'email (pas de "Objet:" ni de balises)
            6. Termine par une signature : "L'équipe Khotwa 🚀"
            7. Ne jamais mentionner le score de churn ni les termes techniques internes

            Réponds uniquement avec le texte de l'email, rien d'autre.
            """,
                score, prenom, startup, plan, statut, dateFin, signalsSummary
        );
    }

    private String buildFallbackMessage(User user, Subscription sub) {
        String prenom  = nvl(user.getFirstName(), "Cher utilisateur");
        String startup = nvl(user.getStartup(), "votre startup");
        String plan    = sub != null ? sub.getPlan().name() : "actuel";
        return String.format("""
            Bonjour %s,

            Nous avons remarqué que votre abonnement %s sur Khotwa pourrait bientôt prendre fin.
            Ne laissez pas %s perdre l'accès aux outils qui font la différence : gestion de projets,
            suivi des talents, planification et bien plus encore.

            Renouvelez dès maintenant et continuez à propulser votre startup vers le succès.

            👉 http://localhost:4200/entrepreneur/profile

            Nous sommes là pour vous accompagner à chaque étape.

            L'équipe Khotwa 🚀
            """, prenom, plan, startup);
    }

    @Transactional
    public void sendRetentionEmail(EngagementScore signal) {
        User user = signal.getUser();
        if (user == null || user.getEmailAddress() == null) return;

        String body = signal.getAiRetentionMessage() != null
                ? signal.getAiRetentionMessage()
                : buildFallbackMessage(user, null);

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(user.getEmailAddress());
            message.setSubject("🚀 " + nvl(user.getFirstName(), "Cher utilisateur")
                    + ", votre espace Khotwa vous attend");
            message.setText(body);
            mailSender.send(message);

            signal.setEmailSent(true);
            signal.setEmailSentAt(LocalDateTime.now());
            churnSignalRepository.save(signal);

            log.info("Email rétention envoyé à {} (score={})",
                    user.getEmailAddress(), signal.getRiskScore());

        } catch (Exception e) {
            log.error("Échec envoi email rétention à {}: {}", user.getEmailAddress(), e.getMessage());
        }
    }

    @Transactional
    public int sendPendingRetentionEmails() {
        List<EngagementScore> pending = churnSignalRepository
                .findByRiskLevelAndEmailSentFalse(RiskLevel.HIGH);

        log.info("{} emails de rétention en attente d'envoi", pending.size());
        int sent = 0;

        for (EngagementScore signal : pending) {
            try {
                sendRetentionEmail(signal);
                sent++;
            } catch (Exception e) {
                log.error("Erreur envoi email pour signal {}: {}", signal.getId(), e.getMessage());
            }
        }

        log.info("{}/{} emails de rétention envoyés avec succès", sent, pending.size());
        return sent;
    }

    private String nvl(String val, String fallback) {
        return (val != null && !val.isBlank()) ? val : fallback;
    }

    private long count(List<EngagementScoreDTO> list, RiskLevel level) {
        return list.stream().filter(d -> level == d.getRiskLevel()).count();
    }
}