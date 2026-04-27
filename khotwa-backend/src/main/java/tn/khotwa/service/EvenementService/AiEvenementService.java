package tn.khotwa.service.EvenementService;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.enums.EventsEnums.EvenementStatus;
import tn.khotwa.enums.EventsEnums.EvenementType;
import tn.khotwa.enums.EventsEnums.ReservationsStatus;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.repository.EvenementRepo.EvenementRepository;
import tn.khotwa.repository.EvenementRepo.ReservationRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class AiEvenementService implements IAiEvenementService {

    @Autowired
    private EvenementRepository evenementRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private IEvenementService evenementService;

    @Value("${groq.api.key}")
    private String groqApiKey;

    private static final String GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
    private static final int TOP_EVENTS_COUNT = 5;


    private static class EvenementStats {
        Evenement evenement;
        int reservationsConfirmees;
        double tauxRemplissage;

        EvenementStats(Evenement e, int confirmed) {
            this.evenement = e;
            this.reservationsConfirmees = confirmed;
            this.tauxRemplissage = e.getPlacesTotal() > 0
                    ? (double) confirmed / e.getPlacesTotal() * 100.0
                    : 0.0;
        }

        double getTauxRemplissage() { return tauxRemplissage; }
        int getReservationsConfirmees() { return reservationsConfirmees; }
    }


    @Override
    public Evenement generateEventFromTopPopular() {

        List<EvenementStats> stats = buildStats();

        if (stats.isEmpty()) {
            throw new RuntimeException("Aucun événement avec réservations CONFIRMED trouvé.");
        }


        stats.sort(Comparator
                .comparingDouble(EvenementStats::getTauxRemplissage).reversed()
                .thenComparingInt(EvenementStats::getReservationsConfirmees).reversed());


        List<EvenementStats> top = stats.stream().limit(TOP_EVENTS_COUNT).collect(Collectors.toList());


        EvenementType typeDominant = computeDominantType(top);
        PlanType planDominant = computeDominantPlan(top);


        String prompt = buildPrompt(top, typeDominant, planDominant);
        String aiResponse = callGroqApi(prompt);

        Evenement generated = parseAiResponse(aiResponse, typeDominant, planDominant);
        return evenementService.addEvenement(generated);
    }


    private List<EvenementStats> buildStats() {

        List<Reservation> allConfirmed = reservationRepository.findAll().stream()
                .filter(r -> ReservationsStatus.CONFIRMED.equals(r.getStatus()))
                .collect(Collectors.toList());


        Map<Evenement, Long> countByEvent = allConfirmed.stream()
                .collect(Collectors.groupingBy(Reservation::getEvenement, Collectors.counting()));


        return countByEvent.entrySet().stream()
                .map(entry -> new EvenementStats(entry.getKey(), entry.getValue().intValue()))
                .filter(s -> s.reservationsConfirmees > 0)
                .collect(Collectors.toList());
    }


    private EvenementType computeDominantType(List<EvenementStats> top) {
        return top.stream()
                .collect(Collectors.groupingBy(
                        s -> s.evenement.getType(),
                        Collectors.summingDouble(s -> s.tauxRemplissage)
                ))
                .entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse(EvenementType.WEBINAR);
    }


    private PlanType computeDominantPlan(List<EvenementStats> top) {
        return top.stream()
                .collect(Collectors.groupingBy(
                        s -> s.evenement.getPlanType(),
                        Collectors.summingDouble(s -> s.tauxRemplissage)
                ))
                .entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse(PlanType.FREE);
    }


    private String buildPrompt(List<EvenementStats> top, EvenementType typeDominant, PlanType planDominant) {
        StringBuilder sb = new StringBuilder();
        sb.append("Tu es un assistant pour une plateforme d'incubation de startups.\n");
        sb.append("Voici les TOP événements triés par TAUX DE REMPLISSAGE (réservations CONFIRMÉES / places totales) :\n\n");

        for (int i = 0; i < top.size(); i++) {
            EvenementStats s = top.get(i);
            sb.append(i + 1).append(". \"").append(s.evenement.getTitre()).append("\"\n");
            sb.append("   - Type       : ").append(s.evenement.getType()).append("\n");
            sb.append("   - Plan       : ").append(s.evenement.getPlanType()).append("\n");
            sb.append("   - Réservations confirmées : ").append(s.reservationsConfirmees)
                    .append(" / ").append(s.evenement.getPlacesTotal()).append(" places\n");
            sb.append("   - Taux de remplissage : ").append(String.format("%.1f", s.tauxRemplissage)).append("%\n\n");
        }

        // Résumé des tendances par type
        sb.append("=== ANALYSE PAR TYPE (somme des taux de remplissage) ===\n");
        top.stream()
                .collect(Collectors.groupingBy(
                        s -> s.evenement.getType().toString(),
                        Collectors.summingDouble(s -> s.tauxRemplissage)
                ))
                .entrySet().stream()
                .sorted(Map.Entry.<String, Double>comparingByValue().reversed())
                .forEach(e -> sb.append("  ").append(e.getKey())
                        .append(" : score total ").append(String.format("%.1f", e.getValue())).append("%\n"));

        sb.append("\nType dominant (score le plus élevé) : ").append(typeDominant).append("\n");
        sb.append("Plan dominant (score le plus élevé) : ").append(planDominant).append("\n");

        sb.append("\n=== INSTRUCTION ===\n");
        sb.append("Génère UN SEUL nouvel événement basé sur ces données RÉELLES de réservation.\n");
        sb.append("Règles OBLIGATOIRES :\n");
        sb.append("1. Le type doit être '").append(typeDominant).append("' car c'est ce qui attire le plus de participants.\n");
        sb.append("2. Le planType doit être '").append(planDominant).append("' car c'est le plus populaire.\n");
        sb.append("3. Le titre doit être ORIGINAL et DIFFÉRENT des titres listés ci-dessus.\n");
        sb.append("4. Inspire-toi des thèmes pour proposer quelque chose de COMPLÉMENTAIRE.\n\n");
        sb.append("Réponds UNIQUEMENT avec ce JSON exact, sans texte avant ou après :\n");
        sb.append("{\n");
        sb.append("  \"titre\": \"<titre original et spécifique>\",\n");
        sb.append("  \"description\": \"<description pertinente, 2-3 phrases>\",\n");
        sb.append("  \"intervenant\": \"<Dr. ou Expert Prénom Nom>\",\n");
        sb.append("  \"type\": \"").append(typeDominant).append("\",\n");
        sb.append("  \"planType\": \"").append(planDominant).append("\",\n");
        sb.append("  \"placesTotal\": <entier entre 20 et 100>,\n");
        sb.append("  \"daysFromNow\": <entier entre 7 et 30>,\n");
        sb.append("  \"heureStart\": \"<HH:MM:SS>\"\n");
        sb.append("}\n");

        return sb.toString();
    }


    private String callGroqApi(String prompt) {
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        Map<String, Object> message = Map.of("role", "user", "content", prompt);

        Map<String, Object> requestBody = Map.of(
                "model", "llama-3.3-70b-versatile",
                "messages", List.of(message),
                "max_tokens", 1024,
                "temperature", 0.5   // réduit pour plus de cohérence
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(groqApiKey);

        try {
            HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(GROQ_API_URL, request, String.class);

            JsonNode root = mapper.readTree(response.getBody());
            String content = root.path("choices").get(0).path("message").path("content").asText();

            System.out.println("=== GROQ RAW RESPONSE ===\n" + content); // debug
            return content;

        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de l'appel à Groq: " + e.getMessage(), e);
        }
    }


    private Evenement parseAiResponse(String jsonResponse, EvenementType typeDominant, PlanType planDominant) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            String clean = jsonResponse.trim()
                    .replaceAll("(?s)```json\\s*", "")
                    .replaceAll("```", "")
                    .trim();

            int start = clean.indexOf('{');
            int end   = clean.lastIndexOf('}');
            if (start != -1 && end != -1) {
                clean = clean.substring(start, end + 1);
            }

            JsonNode node = mapper.readTree(clean);

            EvenementType type;
            try {
                type = EvenementType.valueOf(node.path("type").asText("").toUpperCase());
            } catch (Exception e) {
                type = typeDominant;  // fallback sur le type dominant réel
            }

            // Plan : pareil
            PlanType planType;
            try {
                planType = PlanType.valueOf(node.path("planType").asText("").toUpperCase());
            } catch (Exception e) {
                planType = planDominant;  // fallback sur le plan dominant réel
            }

            LocalDate date = LocalDate.now().plusDays(Math.max(1, node.path("daysFromNow").asInt(14)));

            LocalTime heure;
            try {
                heure = LocalTime.parse(node.path("heureStart").asText("10:00:00"));
            } catch (Exception e) {
                heure = LocalTime.of(10, 0);
            }

            int places = Math.max(10, node.path("placesTotal").asInt(50));

            return Evenement.builder()
                    .titre(node.path("titre").asText("Événement IA"))
                    .description(node.path("description").asText("Généré automatiquement par IA."))
                    .intervenant(node.path("intervenant").asText("Expert Khotwa"))
                    .type(type)
                    .planType(planType)
                    .date(date)
                    .heure(heure)
                    .placesTotal(places)
                    .placesRestantes(places)
                    .statut(EvenementStatus.PENDING)
                    .lienMeet("")
                    .build();

        } catch (Exception e) {
            throw new RuntimeException("Parsing IA échoué: " + e.getMessage(), e);
        }
    }


    @Override
    public List<Map<String, Object>> getTopEventsStats() {
        List<EvenementStats> stats = buildStats();

        stats.sort(Comparator
                .comparingDouble(EvenementStats::getTauxRemplissage).reversed()
                .thenComparingInt(EvenementStats::getReservationsConfirmees).reversed());

        return stats.stream()
                .limit(TOP_EVENTS_COUNT)
                .map(s -> Map.<String, Object>of(
                        "id",              s.evenement.getIdEvenement(),
                        "titre",           s.evenement.getTitre(),
                        "type",            s.evenement.getType().toString(),
                        "participants",    s.reservationsConfirmees,
                        "placesTotal",     s.evenement.getPlacesTotal(),
                        "tauxRemplissage", (long) Math.round(s.tauxRemplissage)
                ))
                .collect(Collectors.toList());
    }

}