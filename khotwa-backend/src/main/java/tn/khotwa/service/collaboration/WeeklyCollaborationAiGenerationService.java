package tn.khotwa.service.collaboration;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import tn.khotwa.DTO.collaboration.GlobalCollaborationInsight;
import tn.khotwa.DTO.collaboration.MarketingCollaborationInsight;
import tn.khotwa.DTO.collaboration.ResourceCollaborationInsight;
import tn.khotwa.DTO.collaboration.WeeklyCollaborationReportDTO;

@Service
@RequiredArgsConstructor
@Slf4j
public class WeeklyCollaborationAiGenerationService {

    private static final Set<String> GLOBAL_STATUS_VALUES = Set.of("HEALTHY", "STAGNANT", "BLOCKED");
    private static final Set<String> GLOBAL_ONBOARDING_VALUES = Set.of("SMOOTH", "SLOW", "BLOCKED");
    private static final Set<String> PRIORITY_VALUES = Set.of("LOW", "MEDIUM", "HIGH");
    private static final Set<String> RESOURCE_PRESSURE_VALUES = Set.of("LOW", "MEDIUM", "HIGH");
    private static final Set<String> RESOURCE_FULFILLMENT_VALUES = Set.of("GOOD", "PARTIAL", "POOR");
    private static final Set<String> MARKETING_EXECUTION_VALUES = Set.of("GOOD", "DEGRADED", "CRITICAL");
    private static final Set<String> MARKETING_RISK_VALUES = Set.of("LOW", "MEDIUM", "HIGH");

    private static final String COMMON_RULES = """
            Rules:
            - Return strict JSON only.
            - Use only the provided metrics.
            - Do not invent projects, users, emails, hidden causes, or external context.
            - Do not repeat raw metrics unless necessary for clarity.
            - Return at most 3 actions.
            - Every action must be concrete and relevant to the collaboration module.
            """;

    private static final String GLOBAL_SYSTEM_PROMPT = """
            You are generating a global collaboration insight for a weekly admin report.
            Analyze only GlobalCollaborationHealth metrics.
            Do not mention resources or marketing.
            Return JSON with exactly these keys:
            {
              "status": "HEALTHY | STAGNANT | BLOCKED",
              "onboarding": "SMOOTH | SLOW | BLOCKED",
              "issue": "...",
              "actions": ["...", "..."],
              "priority": "LOW | MEDIUM | HIGH"
            }
            """;

    private static final String RESOURCE_SYSTEM_PROMPT = """
            You are generating a resource collaboration insight for a weekly admin report.
            Analyze only ResourceCollaborationAnalysis metrics.
            Do not mention onboarding, general collaboration health, or marketing.
            Return JSON with exactly these keys:
            {
              "pressure": "LOW | MEDIUM | HIGH",
              "fulfillment": "GOOD | PARTIAL | POOR",
              "issue": "...",
              "actions": ["...", "..."],
              "priority": "LOW | MEDIUM | HIGH"
            }
            """;

    private static final String MARKETING_SYSTEM_PROMPT = """
            You are generating a marketing collaboration insight for a weekly admin report.
            Analyze only MarketingCollaborationAnalysis metrics.
            Do not mention onboarding, general collaboration health, or resources.
            Return JSON with exactly these keys:
            {
              "execution": "GOOD | DEGRADED | CRITICAL",
              "risk": "LOW | MEDIUM | HIGH",
              "issue": "...",
              "actions": ["...", "..."],
              "priority": "LOW | MEDIUM | HIGH"
            }
            """;

    private final ObjectProvider<ChatClient> chatClientProvider;
    private final ObjectMapper objectMapper;

    public GlobalCollaborationInsight generateGlobalInsight(WeeklyCollaborationReportDTO.GlobalCollaborationHealth global) {
        return generateGlobalInsightResult(global).insight();
    }

    public ResourceCollaborationInsight generateResourceInsight(WeeklyCollaborationReportDTO.ResourceCollaborationAnalysis resource) {
        return generateResourceInsightResult(resource).insight();
    }

    public MarketingCollaborationInsight generateMarketingInsight(WeeklyCollaborationReportDTO.MarketingCollaborationAnalysis marketing) {
        return generateMarketingInsightResult(marketing).insight();
    }

    public InsightGenerationResult<GlobalCollaborationInsight> generateGlobalInsightResult(
            WeeklyCollaborationReportDTO.GlobalCollaborationHealth global) {
        return generateInsight(
                "global",
                global,
                GlobalCollaborationInsight.class,
                GLOBAL_SYSTEM_PROMPT,
                COMMON_RULES,
                this::sanitizeGlobalInsight
        );
    }

    public InsightGenerationResult<ResourceCollaborationInsight> generateResourceInsightResult(
            WeeklyCollaborationReportDTO.ResourceCollaborationAnalysis resource) {
        return generateInsight(
                "resource",
                resource,
                ResourceCollaborationInsight.class,
                RESOURCE_SYSTEM_PROMPT,
                COMMON_RULES,
                this::sanitizeResourceInsight
        );
    }

    public InsightGenerationResult<MarketingCollaborationInsight> generateMarketingInsightResult(
            WeeklyCollaborationReportDTO.MarketingCollaborationAnalysis marketing) {
        return generateInsight(
                "marketing",
                marketing,
                MarketingCollaborationInsight.class,
                MARKETING_SYSTEM_PROMPT,
                COMMON_RULES,
                this::sanitizeMarketingInsight
        );
    }

    private <T> InsightGenerationResult<T> generateInsight(
            String domain,
            Object metrics,
            Class<T> responseType,
            String systemPrompt,
            String commonRules,
            InsightSanitizer<T> sanitizer) {
        ChatClient chatClient = chatClientProvider.getIfAvailable();
        if (chatClient == null) {
            return InsightGenerationResult.failed("Gemini is not configured for AI report generation.");
        }

        try {
            T response = chatClient.prompt()
                    .system(systemPrompt)
                    .user(buildUserPrompt(commonRules, metrics))
                    .call()
                    .entity(responseType);

            T sanitized = sanitizer.sanitize(response);
            if (sanitized == null) {
                return InsightGenerationResult.failed("AI returned an invalid structured response.");
            }

            return InsightGenerationResult.success(sanitized);
        } catch (Exception exception) {
            String failureMessage = toFriendlyFailureMessage(exception);
            log.warn("Weekly collaboration {} AI insight generation failed: {}", domain, failureMessage, exception);
            return InsightGenerationResult.failed(failureMessage);
        }
    }

    private String buildUserPrompt(String commonRules, Object metrics) throws Exception {
        return """
                %s

                Metrics JSON:
                %s
                """.formatted(commonRules, objectMapper.writeValueAsString(metrics));
    }

    private GlobalCollaborationInsight sanitizeGlobalInsight(GlobalCollaborationInsight insight) {
        if (insight == null) {
            return null;
        }

        return new GlobalCollaborationInsight(
                normalizeEnum(insight.status(), GLOBAL_STATUS_VALUES),
                normalizeEnum(insight.onboarding(), GLOBAL_ONBOARDING_VALUES),
                normalizeText(insight.issue()),
                sanitizeActions(insight.actions()),
                normalizeEnum(insight.priority(), PRIORITY_VALUES)
        );
    }

    private ResourceCollaborationInsight sanitizeResourceInsight(ResourceCollaborationInsight insight) {
        if (insight == null) {
            return null;
        }

        return new ResourceCollaborationInsight(
                normalizeEnum(insight.pressure(), RESOURCE_PRESSURE_VALUES),
                normalizeEnum(insight.fulfillment(), RESOURCE_FULFILLMENT_VALUES),
                normalizeText(insight.issue()),
                sanitizeActions(insight.actions()),
                normalizeEnum(insight.priority(), PRIORITY_VALUES)
        );
    }

    private MarketingCollaborationInsight sanitizeMarketingInsight(MarketingCollaborationInsight insight) {
        if (insight == null) {
            return null;
        }

        return new MarketingCollaborationInsight(
                normalizeEnum(insight.execution(), MARKETING_EXECUTION_VALUES),
                normalizeEnum(insight.risk(), MARKETING_RISK_VALUES),
                normalizeText(insight.issue()),
                sanitizeActions(insight.actions()),
                normalizeEnum(insight.priority(), PRIORITY_VALUES)
        );
    }

    private String normalizeEnum(String value, Set<String> allowedValues) {
        String normalized = normalizeText(value);
        if (normalized == null) {
            return null;
        }

        String upperCase = normalized.toUpperCase(Locale.ROOT);
        return allowedValues.contains(upperCase) ? upperCase : null;
    }

    private String normalizeText(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }

    private List<String> sanitizeActions(List<String> actions) {
        if (actions == null || actions.isEmpty()) {
            return List.of();
        }

        LinkedHashSet<String> uniqueActions = new LinkedHashSet<>();
        for (String action : actions) {
            String normalized = normalizeText(action);
            if (normalized != null) {
                uniqueActions.add(normalized);
            }
            if (uniqueActions.size() == 3) {
                break;
            }
        }

        return List.copyOf(uniqueActions);
    }

    private String toFriendlyFailureMessage(Exception exception) {
        String message = buildExceptionMessage(exception).toLowerCase(Locale.ROOT);

        if (message.contains("503") || message.contains("high demand") || message.contains("service unavailable")) {
            return "AI service is under high demand right now.";
        }
        if (message.contains("quota") || message.contains("resource exhausted") || message.contains("429")) {
            return "Gemini quota has been exceeded.";
        }
        if (message.contains("api key") || message.contains("unauthorized") || message.contains("permission")
                || message.contains("401") || message.contains("403")) {
            return "Gemini API key is invalid or lacks permission.";
        }
        if (message.contains("timeout") || message.contains("timed out") || message.contains("deadline")) {
            return "AI request timed out.";
        }
        if (message.contains("json") || message.contains("parse") || message.contains("deserialize")
                || message.contains("structured response")) {
            return "AI returned an invalid structured response.";
        }

        return "AI insight generation is unavailable right now.";
    }

    private String buildExceptionMessage(Throwable throwable) {
        StringBuilder messageBuilder = new StringBuilder();
        Throwable current = throwable;
        while (current != null) {
            if (StringUtils.hasText(current.getMessage())) {
                if (!messageBuilder.isEmpty()) {
                    messageBuilder.append(' ');
                }
                messageBuilder.append(current.getMessage());
            }
            current = current.getCause();
        }
        return messageBuilder.toString();
    }

    @FunctionalInterface
    private interface InsightSanitizer<T> {
        T sanitize(T insight);
    }

    public record InsightGenerationResult<T>(T insight, String failureMessage) {

        public static <T> InsightGenerationResult<T> success(T insight) {
            return new InsightGenerationResult<>(insight, null);
        }

        public static <T> InsightGenerationResult<T> failed(String failureMessage) {
            return new InsightGenerationResult<>(null, failureMessage);
        }
    }
}
