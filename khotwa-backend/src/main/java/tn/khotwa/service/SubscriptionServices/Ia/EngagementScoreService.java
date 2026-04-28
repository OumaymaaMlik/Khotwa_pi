package tn.khotwa.service.SubscriptionServices.Ia;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tn.khotwa.DTO.Subscription.EngagementScoreDTO;
import tn.khotwa.entity.Subscription.EngagementScore;
import tn.khotwa.entity.Subscription.Subscription;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.SubscriptionEnums.RiskLevel;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;
import tn.khotwa.enums.User.Role;
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
        return computeForUserInternal(userId, true);
    }

    @Transactional
    public EngagementScoreDTO computeForUserForced(Long userId) {
        return computeForUserInternal(userId, false);
    }

    private EngagementScoreDTO computeForUserInternal(Long userId, boolean useRecentCache) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));

        if (shouldExcludeFromChurn(user)) {
            log.debug("User {} exclu du churn (role={})", userId, user.getRole());
            return buildExcludedScore(user);
        }

        if (useRecentCache) {
            LocalDateTime threshold = LocalDateTime.now().minusHours(recalculateAfterHours);
            List<EngagementScore> recent = churnSignalRepository.findRecentByUser(userId, threshold);
            if (!recent.isEmpty()) {
                log.debug("Score récent trouvé pour user {} — pas de recalcul", userId);
                return EngagementScoreDTO.from(recent.get(0));
            }
        }

        Optional<Subscription> activeOrPending = subscriptionRepository
                .findTopByUser_IdUserAndStatutInOrderByIdSubscriptionDesc(
                        userId,
                        List.of(SubscriptionStatus.ACTIVE, SubscriptionStatus.PENDING)
                );

        Optional<Subscription> latestAny = subscriptionRepository.findTopByUser_IdUserOrderByIdSubscriptionDesc(userId);
        Subscription scoringSub = activeOrPending.orElseGet(() -> latestAny.orElse(null));
        boolean hasExpiredHistory = subscriptionRepository.existsByUser_IdUserAndStatut(userId, SubscriptionStatus.EXPIRED);
        List<Subscription> history = subscriptionRepository.findAllByUser_IdUser(userId);
        boolean hasEverPaid = history.stream()
                .anyMatch(s -> s.getPaiementRef() != null && !s.getPaiementRef().isBlank());
        boolean hasEverUpgradedFromFree = history.stream()
                .anyMatch(s -> s.getPlan() != null && s.getPlan() != PlanType.FREE);

        EngagementScore signal = evaluate(user, scoringSub, hasExpiredHistory, hasEverPaid, hasEverUpgradedFromFree);
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
            if (shouldExcludeFromChurn(user)) continue;
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

    @Transactional
    public List<EngagementScoreDTO> computeForAllUsersForced() {
        List<User> users = userRepository.findAll();
        log.info("Calcul churn score FORCE pour {} utilisateurs...", users.size());

        List<EngagementScoreDTO> results = new ArrayList<>();

        for (User user : users) {
            if (shouldExcludeFromChurn(user)) continue;
            try {
                EngagementScoreDTO dto = computeForUserForced(user.getIdUser());
                results.add(dto);
            } catch (Exception e) {
                log.error("Erreur calcul churn forcé pour user {}: {}", user.getIdUser(), e.getMessage());
            }
        }

        results.sort(Comparator.comparingInt(EngagementScoreDTO::getRiskScore).reversed());
        log.info("Calcul forcé terminé. HIGH: {} | MEDIUM: {} | LOW: {}",
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


    private EngagementScore evaluate(
            User user,
            Subscription sub,
            boolean hasExpiredHistory,
            boolean hasEverPaid,
            boolean hasEverUpgradedFromFree
    ) {
        int score = 0;
        List<String> signals = new ArrayList<>();
        boolean expiredByDate = hasActuallyExpired(sub);
        boolean expiredHistorically = hasExpiredHistory
                || (sub != null && sub.getWasExpired() != null && sub.getWasExpired() > 0);

        if (sub == null) {
            score += 40;
            signals.add("EXPIRED_OR_NO_SUB(+40): No active subscription found");
        } else if (expiredByDate) {
            score += 40;
            signals.add("EXPIRED_BY_DATE(+40): End date passed on " + sub.getDateFin());
        } else if (sub.getStatut() == SubscriptionStatus.EXPIRED) {
            score += 40;
            signals.add("EXPIRED(+40): Subscription expired on " + sub.getDateFin());
        } else if (expiredHistorically) {
            score += 40;
            signals.add("EXPIRED_HISTORY(+40): Subscription expired in the past and switched back to FREE");
        } else if (sub.getStatut() == SubscriptionStatus.CANCELLED) {
            score += 40;
            signals.add("CANCELLED(+40): Subscription cancelled");
        }

        if (sub != null && !Boolean.TRUE.equals(sub.getAutoRenouvellement())) {
            score += 20;
            signals.add("NO_AUTO_RENEW(+20): Auto-renew is disabled");
        }

        boolean isFree = (sub == null || sub.getPlan() == PlanType.FREE
                || user.getPlanType() == PlanType.FREE || user.getPlanType() == null);
        if (isFree && !hasEverPaid && !hasEverUpgradedFromFree) {
            score += 15;
            signals.add("FREE_NEVER_UPGRADED(+15): Current plan is FREE and user has never upgraded or paid");
        }

        if (sub != null && sub.getStatut() == SubscriptionStatus.ACTIVE
                && sub.getDateFin() != null && !isFree) {
            long daysLeft = ChronoUnit.DAYS.between(LocalDate.now(), sub.getDateFin());
            if (daysLeft >= 0 && daysLeft <= expiryWarningDays) {
                score += 15;
                signals.add(String.format("EXPIRY_IMMINENT(+15): Subscription expires in %d day(s)", daysLeft));
            }
        }
        // No-payment signal is relevant only when a non-free subscription is expected.
        if (sub == null || (sub.getPlan() != PlanType.FREE
                && (sub.getPaiementRef() == null || sub.getPaiementRef().isBlank()))) {
            score += 10;
            signals.add("NO_PAYMENT(+10): No payment recorded");
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
            You are a customer retention expert for Khotwa, a SaaS platform for startups.

            Write a personalized retention email in English for this high churn-risk user (score: %d/100).

            USER PROFILE:
            - First name: %s
            - Startup: %s
            - Current plan: %s
            - Subscription status: %s
            - End date: %s
            - Detected signals: %s

            STRICT REQUIREMENTS:
            1. Tone: warm, empathetic, and non-aggressive.
            2. Mention 2-3 key Khotwa benefits relevant to the user's startup context.
            3. Propose one simple next step (renew, upgrade, or contact support).
            4. Length: 120-180 words maximum.
            5. Start directly with the email body (no "Subject:" and no markup).
            6. End with this signature: "The Khotwa Team 🚀".
            7. Never mention churn score or internal technical terms.

            Return only the email text.
            """,
                score, prenom, startup, plan, statut, dateFin, signalsSummary
        );
    }

    private String buildFallbackMessage(User user, Subscription sub) {
        String prenom  = nvl(user.getFirstName(), "there");
        String startup = nvl(user.getStartup(), "your startup");
        String plan    = sub != null ? sub.getPlan().name() : "current";
        return String.format("""
            Hi %s,

            We noticed that your %s subscription on Khotwa may end soon.
            Don't let %s lose access to the tools that help teams move faster:
            project management, talent tracking, planning, and more.

            Renew now to keep your momentum and continue growing with confidence.

            👉 http://localhost:4200/entrepreneur/profile

            If you need help, our team is here for you.

            The Khotwa Team 🚀
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
            message.setSubject("🚀 " + nvl(user.getFirstName(), "there")
                    + ", your Khotwa workspace is waiting");
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

    private boolean hasActuallyExpired(Subscription sub) {
        return sub != null
                && sub.getDateFin() != null
                && sub.getDateFin().getYear() < 2099
                && sub.getDateFin().isBefore(LocalDate.now());
    }

    private long count(List<EngagementScoreDTO> list, RiskLevel level) {
        return list.stream().filter(d -> level == d.getRiskLevel()).count();
    }

    private boolean shouldExcludeFromChurn(User user) {
        if (user == null || user.getRole() == null) return false;
        return user.getRole() == Role.ADMIN || user.getRole() == Role.COACH;
    }

    private EngagementScoreDTO buildExcludedScore(User user) {
        EngagementScoreDTO dto = new EngagementScoreDTO();
        dto.setUserId(user.getIdUser());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmailAddress());
        dto.setStartup(user.getStartup());
        dto.setPlanType(user.getPlanType() != null ? user.getPlanType().name() : "FREE");
        dto.setRiskScore(0);
        dto.setRiskLevel(RiskLevel.LOW);
        dto.setRiskLevelLabel("🟢 Low");
        dto.setSignalsDetail("EXCLUDED_ROLE(+0): Internal account excluded from churn scoring");
        dto.setEmailSent(false);
        dto.setComputedAt(LocalDateTime.now());
        return dto;
    }
}