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

    @Value("${gemini.api-key}")
    private String apiKey;

    @Value("${gemini.model:gemini-1.5-flash}")
    private String model;

    private static final String GEMINI_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent?key=%s";

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
        String prompt = SYSTEM_PROMPT + "\n\nField: \"" + fieldLabel + "\"\n\nOriginal text:\n"
                + dto.getOriginalText().trim() + "\n\nPlease improve this text.";

        int maxRetries = 3;
        int[] waitSeconds = {3, 6, 12}; // attente progressive entre chaque tentative

        for (int attempt = 0; attempt < maxRetries; attempt++) {
            try {
                ObjectNode body = objectMapper.createObjectNode();
                ArrayNode contents = body.putArray("contents");
                ObjectNode content = contents.addObject();
                ArrayNode parts = content.putArray("parts");
                parts.addObject().put("text", prompt);
                ObjectNode generationConfig = body.putObject("generationConfig");
                generationConfig.put("maxOutputTokens", 1024);
                generationConfig.put("temperature", 0.7);

                String jsonBody = objectMapper.writeValueAsString(body);
                String url = String.format(GEMINI_URL, model, apiKey);

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                        .timeout(Duration.ofSeconds(60))
                        .build();

                HttpResponse<String> response = httpClient.send(request,
                        HttpResponse.BodyHandlers.ofString());

                // 503 ou 429 → réessayer après attente
                if (response.statusCode() == 503 || response.statusCode() == 429) {
                    log.warn("Gemini attempt {}/{} failed with status {}. Retrying in {}s...",
                            attempt + 1, maxRetries, response.statusCode(), waitSeconds[attempt]);
                    if (attempt < maxRetries - 1) {
                        Thread.sleep(waitSeconds[attempt] * 1000L);
                        continue;
                    } else {
                        throw new BusinessException("Le service AI est temporairement surchargé. Réessayez dans 1 minute.");
                    }
                }

                if (response.statusCode() != 200) {
                    log.error("Gemini API error: status={}, body={}", response.statusCode(), response.body());
                    throw new BusinessException("Le service AI a retourné une erreur. Réessayez.");
                }

                JsonNode root = objectMapper.readTree(response.body());
                String improved = root
                        .path("candidates").get(0)
                        .path("content")
                        .path("parts").get(0)
                        .path("text")
                        .asText();

                if (improved == null || improved.isBlank()) {
                    throw new BusinessException("Le service AI n'a pas retourné de réponse.");
                }

                return new AiPitchResponseDto(improved.trim(), dto.getFieldKey(), dto.getOriginalText());

            } catch (BusinessException e) {
                throw e;
            } catch (Exception e) {
                log.error("Gemini API error: {}", e.getMessage(), e);
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