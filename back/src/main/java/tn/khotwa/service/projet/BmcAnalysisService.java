package tn.khotwa.service.projet;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.projet.BmcAnalysisRequestDto;
import tn.khotwa.dto.projet.BmcAnalysisResponseDto;
import tn.khotwa.exception.BusinessException;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class BmcAnalysisService {

    @Value("${openrouter.api-key}")
    private String apiKey;

    @Value("${openrouter.model:deepseek/deepseek-chat-v3-0324:free}")
    private String model;

    private static final String OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

    private static final String SYSTEM_PROMPT =
            "Tu es un expert en startups et business models pour la plateforme KHOTWA. " +
                    "Tu reponds UNIQUEMENT avec un JSON valide, sans markdown, sans backticks, " +
                    "sans texte avant ou apres.";

    private final HttpClient   httpClient   = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(30))
            .build();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public BmcAnalysisResponseDto analyserBmc(BmcAnalysisRequestDto dto) {
        log.info("=== DEBUT ANALYSE BMC pour: {} ===", dto.getTitreSartup());

        int maxRetries = 3;
        int[] waitSeconds = {3, 6, 12};

        for (int attempt = 0; attempt < maxRetries; attempt++) {
            try {
                // Construction du body OpenAI-compatible (Grok)
                ObjectNode body = objectMapper.createObjectNode();
                body.put("model", model);
                body.put("temperature", 0.4);
                body.put("max_tokens", 1024);

                ArrayNode messages = body.putArray("messages");

                ObjectNode systemMsg = messages.addObject();
                systemMsg.put("role", "system");
                systemMsg.put("content", SYSTEM_PROMPT);

                ObjectNode userMsg = messages.addObject();
                userMsg.put("role", "user");
                userMsg.put("content", buildUserPrompt(dto));

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

                HttpResponse<String> response = httpClient.send(
                        request, HttpResponse.BodyHandlers.ofString());

                log.info("=== STATUS OPENROUTER: {} ===", response.statusCode());

                if (response.statusCode() == 503 || response.statusCode() == 429) {
                    log.warn("OpenRouter attempt {}/{} status {}. Body: {}. Retrying in {}s...",
                            attempt + 1, maxRetries, response.statusCode(), response.body(), waitSeconds[attempt]);
                    if (attempt < maxRetries - 1) {
                        Thread.sleep(waitSeconds[attempt] * 1000L);
                        continue;
                    }
                    throw new BusinessException(
                            "Le service IA est temporairement surchargé. Réessayez dans 1 minute.");
                }

                if (response.statusCode() != 200) {
                    log.error("=== OPENROUTER ERROR: status={}, body={} ===",
                            response.statusCode(), response.body());
                    throw new BusinessException(
                            "Le service IA a retourné une erreur. Réessayez.");
                }

                // Parse réponse OpenAI-compatible
                JsonNode root = objectMapper.readTree(response.body());
                String rawResponse = root
                        .path("choices").get(0)
                        .path("message")
                        .path("content")
                        .asText();

                log.info("=== REPONSE BRUTE: {} ===", rawResponse);

                if (rawResponse == null || rawResponse.isBlank()) {
                    throw new BusinessException("Le service IA n'a pas retourné de réponse.");
                }

                String cleaned = rawResponse
                        .replaceAll("(?s)```json\\s*", "")
                        .replaceAll("```", "")
                        .trim();

                log.info("=== JSON NETTOYE: {} ===", cleaned);
                return parseResult(cleaned);

            } catch (BusinessException e) {
                throw e;
            } catch (Exception e) {
                log.error("=== ERREUR BMC: {} ===", e.getMessage(), e);
                if (attempt < maxRetries - 1) {
                    try { Thread.sleep(waitSeconds[attempt] * 1000L); }
                    catch (InterruptedException ie) { Thread.currentThread().interrupt(); }
                    continue;
                }
                throw new BusinessException(
                        "Le service IA est temporairement indisponible. Reessayez.");
            }
        }
        throw new BusinessException(
                "Le service IA est indisponible après plusieurs tentatives.");
    }

    private String buildUserPrompt(BmcAnalysisRequestDto dto) {
        return String.format(
                "Analyse ce BMC et reponds UNIQUEMENT avec ce JSON valide:\n\n" +
                        "Startup: %s | Secteur: %s | Stade: %s\n" +
                        "- Proposition valeur: %s\n" +
                        "- Segments: %s\n" +
                        "- Revenus: %s\n" +
                        "- Canaux: %s\n" +
                        "- Relations clients: %s\n" +
                        "- Ressources: %s\n" +
                        "- Activites: %s\n" +
                        "- Couts: %s\n" +
                        "- Partenaires: %s\n\n" +
                        "Format JSON attendu:\n" +
                        "{\"scoreGlobal\":7,\"maturiteLabel\":\"Modele en developpement\"," +
                        "\"synthese\":\"texte synthese\",\"pointsForts\":[\"p1\",\"p2\",\"p3\"]," +
                        "\"incoherences\":[\"i1\",\"i2\"],\"questionsCritiques\":[\"q1\",\"q2\",\"q3\"]," +
                        "\"recommandations\":[\"r1\",\"r2\",\"r3\"]}",
                safe(dto.getTitreSartup()), safe(dto.getSecteur()), safe(dto.getStade()),
                safe(dto.getPropositionValeur()), safe(dto.getSegmentsClientele()),
                safe(dto.getSourcesRevenus()), safe(dto.getCanaux()),
                safe(dto.getRelationsClients()), safe(dto.getRessourcesCles()),
                safe(dto.getActivitesCles()), safe(dto.getStructureCouts()),
                safe(dto.getPartenaires())
        );
    }

    private BmcAnalysisResponseDto parseResult(String json) {
        try {
            if (!json.endsWith("}")) {
                log.warn("JSON tronque, reparation...");
                int lastComma = json.lastIndexOf(',');
                if (lastComma > 0) { json = json.substring(0, lastComma); }
                long ob = json.chars().filter(c -> c == '[').count()
                        - json.chars().filter(c -> c == ']').count();
                long cb = json.chars().filter(c -> c == '{').count()
                        - json.chars().filter(c -> c == '}').count();
                StringBuilder sb = new StringBuilder(json);
                for (long i = 0; i < ob; i++) { sb.append("]"); }
                for (long i = 0; i < cb; i++) { sb.append("}"); }
                json = sb.toString();
            }
            JsonNode node = objectMapper.readTree(json);
            return BmcAnalysisResponseDto.builder()
                    .scoreGlobal(node.path("scoreGlobal").asInt(5))
                    .maturiteLabel(node.path("maturiteLabel").asText("N/A"))
                    .synthese(node.path("synthese").asText(""))
                    .pointsForts(toList(node.path("pointsForts")))
                    .incoherences(toList(node.path("incoherences")))
                    .questionsCritiques(toList(node.path("questionsCritiques")))
                    .recommandations(toList(node.path("recommandations")))
                    .build();
        } catch (Exception e) {
            log.error("Erreur parsing JSON BMC : {}", e.getMessage());
            return BmcAnalysisResponseDto.builder()
                    .scoreGlobal(5)
                    .maturiteLabel("Analyse partielle")
                    .synthese("Relancez l'analyse pour un resultat complet.")
                    .pointsForts(List.of("Relancer l'analyse"))
                    .incoherences(List.of())
                    .questionsCritiques(List.of())
                    .recommandations(List.of("Relancer l'analyse"))
                    .build();
        }
    }

    private List<String> toList(JsonNode arrayNode) {
        List<String> list = new ArrayList<>();
        if (arrayNode != null && arrayNode.isArray()) {
            arrayNode.forEach(n -> list.add(n.asText()));
        }
        return list;
    }

    private String safe(String val) {
        return (val == null || val.isBlank()) ? "Non renseigne" : val.trim();
    }
}
