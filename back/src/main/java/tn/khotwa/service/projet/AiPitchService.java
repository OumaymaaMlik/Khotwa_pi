package tn.khotwa.service.projet;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.projet.AiPitchRequestDto;
import tn.khotwa.dto.projet.AiPitchResponseDto;
import tn.khotwa.exception.BusinessException;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Service
@Slf4j
public class AiPitchService {

    @Value("${openrouter.api-key}")
    private String apiKey;

    @Value("${openrouter.model:deepseek/deepseek-chat-v3-0324:free}")
    private String model;

    private static final String OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

    private static final String SYSTEM_PROMPT =
            "You are an expert startup pitch consultant working with the KHOTWA incubator platform. " +
                    "Your role is to rewrite and improve text provided by entrepreneurs for their startup project files. " +
                    "Rules: " +
                    "- Keep the SAME language as the input (French input → French output, English → English). " +
                    "- Be concise, structured, professional and business-oriented. " +
                    "- Do NOT invent facts, numbers or details not present in the original text. " +
                    "- Preserve the core meaning but make it clearer and more convincing. " +
                    "- Use active voice and strong, direct sentences. " +
                    "- Return ONLY the improved text, with no explanation, no preamble, no quotes.";

    private final HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(30))
            .build();

    private final ObjectMapper objectMapper = new ObjectMapper();

    public AiPitchResponseDto improveText(AiPitchRequestDto dto) {
        if (dto.getOriginalText() == null || dto.getOriginalText().trim().length() < 10) {
            throw new BusinessException("Le texte original doit contenir au moins 10 caractères.");
        }

        String fieldLabel = dto.getFieldLabel() != null ? dto.getFieldLabel() : dto.getFieldKey();
        String userPrompt = "Field: \"" + fieldLabel + "\"\n\nOriginal text:\n"
                + dto.getOriginalText().trim() + "\n\nPlease improve this text.";

        int maxRetries = 3;
        int[] waitSeconds = {3, 6, 12};

        for (int attempt = 0; attempt < maxRetries; attempt++) {
            try {
                // Construction du body OpenAI-compatible (Grok)
                ObjectNode body = objectMapper.createObjectNode();
                body.put("model", model);
                body.put("temperature", 0.7);
                body.put("max_tokens", 1024);

                ArrayNode messages = body.putArray("messages");

                ObjectNode systemMsg = messages.addObject();
                systemMsg.put("role", "system");
                systemMsg.put("content", SYSTEM_PROMPT);

                ObjectNode userMsg = messages.addObject();
                userMsg.put("role", "user");
                userMsg.put("content", userPrompt);

                String jsonBody = objectMapper.writeValueAsString(body);

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(OPENROUTER_URL))
                        .header("Content-Type", "application/json")
                        .header("Authorization", "Bearer " + apiKey)
                        .header("HTTP-Referer", "https://khotwa.tn")
                        .header("X-Title", "Khotwa")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                        .timeout(Duration.ofSeconds(60))
                        .build();

                HttpResponse<String> response = httpClient.send(request,
                        HttpResponse.BodyHandlers.ofString());

                // 503 ou 429 → réessayer après attente
                if (response.statusCode() == 503 || response.statusCode() == 429) {
                    log.warn("OpenRouter attempt {}/{} failed with status {}. Retrying in {}s...",
                            attempt + 1, maxRetries, response.statusCode(), waitSeconds[attempt]);
                    if (attempt < maxRetries - 1) {
                        Thread.sleep(waitSeconds[attempt] * 1000L);
                        continue;
                    } else {
                        throw new BusinessException("Le service AI est temporairement surchargé. Réessayez dans 1 minute.");
                    }
                }

                if (response.statusCode() != 200) {
                    log.error("OpenRouter API error: status={}, body={}", response.statusCode(), response.body());
                    throw new BusinessException("Le service AI a retourné une erreur. Réessayez.");
                }

                // Parse réponse OpenAI-compatible
                JsonNode root = objectMapper.readTree(response.body());
                String improved = root
                        .path("choices").get(0)
                        .path("message")
                        .path("content")
                        .asText();

                if (improved == null || improved.isBlank()) {
                    throw new BusinessException("Le service AI n'a pas retourné de réponse.");
                }

                return new AiPitchResponseDto(improved.trim(), dto.getFieldKey(), dto.getOriginalText());

            } catch (BusinessException e) {
                throw e;
            } catch (Exception e) {
                log.error("OpenRouter API error: {}", e.getMessage(), e);
                if (attempt < maxRetries - 1) {
                    try { Thread.sleep(waitSeconds[attempt] * 1000L); } catch (InterruptedException ie) { Thread.currentThread().interrupt(); }
                    continue;
                }
                throw new BusinessException("Le service AI est temporairement indisponible. Réessayez dans quelques instants.");
            }
        }

        throw new BusinessException("Le service AI est temporairement indisponible après plusieurs tentatives.");
    }
}
