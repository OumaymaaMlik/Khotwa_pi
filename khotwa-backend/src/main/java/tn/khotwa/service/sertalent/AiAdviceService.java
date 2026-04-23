package tn.khotwa.service.sertalent;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import tn.khotwa.DTO.talent.HiringAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.HiringAiAdviceResponseDTO;
import tn.khotwa.DTO.talent.HiringAiChatRequestDTO;
import tn.khotwa.DTO.talent.HiringAiChatResponseDTO;
import tn.khotwa.DTO.talent.SkillGapAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.SkillGapAiAdviceResponseDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceResponseDTO;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.talent.AiRecommendation;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.entity.talent.Candidature;
import tn.khotwa.repository.repotalent.AnnonceRepository;
import tn.khotwa.repository.repotalent.CandidatureRepository;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiAdviceService {
    private final AiRecommendationService aiRecommendationService;
    private final AnnonceRepository annonceRepository;
    private final CandidatureRepository candidatureRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final HttpClient httpClient = HttpClient.newHttpClient();

    @Value("${ai.gemini.api-key:}")
    private String geminiApiKey;

    @Value("${ai.gemini.model:gemini-1.5-flash}")
    private String geminiModel;

    private static final List<String> HIRING_SKILLS_BASE = List.of(
            "Problem solving", "Communication", "Autonomie",
            "Docker", "CI/CD", "Clean Architecture", "English"
    );

    private static final List<String> TALENT_PRIORITY_BASE = List.of(
            "Spring Boot", "System Design", "Docker", "Testing", "English"
    );

    public HiringAiAdviceResponseDTO buildHiringAdvice(HiringAiAdviceRequestDTO req) {
        String titre = safe(req.getTitre(), "Nouveau poste");
        String typePoste = safe(req.getTypePoste(), "CDI");
        String localisation = safe(req.getLocalisation(), "Remote / Hybride");
        String contexte = safe(req.getContexte(), "");
        List<String> metiers = safeList(req.getMetiers());
        List<String> skills = parseSkills(req.getCompetencesRequises());

        LinkedHashSet<String> suggested = new LinkedHashSet<>(skills);
        suggested.addAll(HIRING_SKILLS_BASE);
        if (metiers.stream().anyMatch(m -> m.toLowerCase().contains("genai") || m.toLowerCase().contains("ml"))) {
            suggested.add("Prompt engineering");
            suggested.add("LLM Fine-tuning");
            suggested.add("Vector databases");
            suggested.add("LLMOps observability");
        }
        if (metiers.stream().anyMatch(m -> m.toLowerCase().contains("blockchain") || m.toLowerCase().contains("web3"))) {
            suggested.add("Smart contracts security");
            suggested.add("EVM fundamentals");
        }

        String metiersTxt = metiers.isEmpty() ? "Generaliste" : String.join(", ", metiers);
        String fiche = "Poste " + titre + " (" + typePoste + "). "
                + "Localisation: " + localisation + ". "
                + "Metiers cibles: " + metiersTxt + ". "
                + "Competences coeur: " + (skills.isEmpty() ? "A preciser" : String.join(", ", skills)) + ". "
                + (contexte.isBlank() ? "" : "Contexte startup: " + contexte + ".");

        List<String> interview = List.of(
                "Expliquez un projet recent et les resultats mesurables obtenus.",
                "Comment prioriseriez-vous les livrables critiques sur 2 semaines ?",
                "Quelles strategies utilisez-vous pour reduire le risque de regression en production ?",
                "Cas pratique: donnees incompletes et deadline courte, que faites-vous ?"
        );
        if (req.getExperienceYears() != null && req.getExperienceYears() < 2) {
            interview = List.of(
                    "Question junior: comment decomposez-vous une tache complexe ?",
                    "Question junior: que faites-vous si vous etes bloque plus de 30 minutes ?",
                    "Question junior: expliquez un mini-projet et ce que vous avez appris."
            );
        }

        List<String> onboarding = List.of(
                "Acces environnement (repo, CI/CD, monitoring, data).",
                "Plan 30/60/90 jours avec objectifs business et techniques.",
                "Pairing avec un mentor + rituels de feedback hebdomadaires.",
                "Definition des KPI de performance et qualite des livrables."
        );

        List<String> risks = new ArrayList<>();
        risks.add("Verifier l'alignement budget/seniorite/impact attendu.");
        risks.add("Clarifier la profondeur attendue sur les competences critiques.");
        if (skills.size() > 8) {
            risks.add("Trop de competences exigees: risque de time-to-hire eleve.");
        }
        String stage = safe(req.getStartupStage(), "");
        if (stage.equalsIgnoreCase("early")) {
            suggested.add("Polyvalence produit + execution rapide");
            risks.add("En phase early-stage, privilegier des profils polyvalents.");
        }

        HiringAiAdviceResponseDTO response = HiringAiAdviceResponseDTO.builder()
                .fichePoste(fiche)
                .competencesSuggerees(suggested.stream().limit(10).collect(Collectors.toList()))
                .questionsEntretien(interview)
                .checklistOnboarding(onboarding)
                .risquesOuGaps(risks)
                .build();

        aiRecommendationService.save(
                AiRecommendation.RecommendationType.HIRING,
                response.getFichePoste() + " | Risques: " + String.join("; ", response.getRisquesOuGaps()),
                estimateConfidence(response.getCompetencesSuggerees().size(), response.getRisquesOuGaps().size()),
                null,
                null
        );
        return response;
    }

    public TalentAiAdviceResponseDTO buildTalentAdvice(TalentAiAdviceRequestDTO req) {
        String goal = safe(req.getGoal(), "Trouver un poste");
        List<String> skills = safeList(req.getCompetences()).stream()
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toList());

        String prompt = """
                You are a senior career coach. Return strict JSON only with keys:
                resume (string), pointsForts (array of strings), competencesPrioritaires (array of strings), nextActions (array of strings).
                Context:
                - Goal: %s
                - Experience level: %s
                - Current skills: %s
                - Bio: %s
                Keep recommendations concrete and concise.
                """.formatted(
                goal,
                safe(req.getNiveauExperience(), "Non precise"),
                skills.isEmpty() ? "None" : String.join(", ", skills),
                safe(req.getBio(), "N/A")
        );

        TalentAiAdviceResponseDTO aiResponse = tryGeminiTalentAdvice(prompt);
        if (aiResponse != null) {
            aiRecommendationService.save(
                    AiRecommendation.RecommendationType.TALENT,
                    aiResponse.getResume() + " | Next: " + String.join("; ", safeList(aiResponse.getNextActions())),
                    estimateConfidence(safeList(aiResponse.getPointsForts()).size(), 0),
                    null,
                    null
            );
            return aiResponse;
        }

        List<String> strengths = skills.stream().limit(4).collect(Collectors.toList());
        if (strengths.isEmpty()) {
            strengths = List.of("Motivation", "Capacite d'apprentissage");
        }

        LinkedHashSet<String> priorities = new LinkedHashSet<>(TALENT_PRIORITY_BASE);
        for (String s : skills) {
            priorities.removeIf(p -> p.equalsIgnoreCase(s));
        }

        List<String> nextActions = List.of(
                "Adapter CV + portfolio au poste cible: " + goal + ".",
                "Construire 2 projets avec resultats chiffres (latence, conversion, qualite).",
                "Postuler de maniere ciblee a 5 offres proches de votre stack.",
                "Simuler 1 entretien technique + 1 entretien comportemental par semaine."
        );

        String resume = "Objectif detecte: " + goal + ". "
                + "Profil avec " + skills.size() + " competence(s) declaree(s). "
                + "Priorite: augmenter l'impact prouve et la visibilite des realisations.";

        List<String> goalActions = new ArrayList<>();
        String lowGoal = goal.toLowerCase();
        if (lowGoal.contains("backend")) {
            goalActions.add("Renforcer API design, securite et performance backend sur 1 projet concret.");
        }
        if (lowGoal.contains("frontend") || lowGoal.contains("ux")) {
            goalActions.add("Construire un mini design system et mesurer l'amelioration UX.");
        }
        if (lowGoal.contains("devops") || lowGoal.contains("cloud")) {
            goalActions.add("Automatiser CI/CD et monitorer les KPI de fiabilite.");
        }
        if (goalActions.isEmpty()) {
            goalActions.add("Transformer votre objectif en livrables mesurables sur 30 jours.");
        }

        List<String> dynamicActions = new ArrayList<>(nextActions);
        dynamicActions.addAll(goalActions);
        dynamicActions = dynamicActions.stream().distinct().limit(6).collect(Collectors.toList());

        TalentAiAdviceResponseDTO response = TalentAiAdviceResponseDTO.builder()
                .resume(resume)
                .pointsForts(strengths)
                .competencesPrioritaires(priorities.stream().limit(5).collect(Collectors.toList()))
                .nextActions(dynamicActions)
                .build();
        aiRecommendationService.save(
                AiRecommendation.RecommendationType.TALENT,
                response.getResume() + " | Next: " + String.join("; ", response.getNextActions()),
                estimateConfidence(response.getPointsForts().size(), 0),
                null,
                null
        );
        return response;
    }

    public HiringAiChatResponseDTO hiringChat(HiringAiChatRequestDTO req) {
        String question = safe(req.getQuestion(), "");
        String contexte = safe(req.getContexte(), "");
        String ragContext = buildHiringRagContext(req.getAnnonceId());
        String prompt = """
                You are a senior recruiting copilot.
                Return strict JSON only with keys:
                answer (string), interviewQuestions (array of strings), focusAreas (array of strings), suggestedNextSteps (array of strings).
                Recruiter question: %s
                Optional recruiter context: %s
                RAG context from platform data:
                %s
                Keep it concrete, practical, and specific to this context.
                """.formatted(question, contexte, ragContext);

        HiringAiChatResponseDTO aiResponse = tryGeminiHiringChat(prompt);
        if (aiResponse != null) {
            return aiResponse;
        }

        List<String> focus = new ArrayList<>();
        if (question.toLowerCase().contains("backend")) {
            focus.add("Evaluer la maitrise API REST, SQL et gestion des erreurs.");
            focus.add("Verifier les choix d'architecture et trade-offs techniques.");
        } else if (question.toLowerCase().contains("frontend")) {
            focus.add("Evaluer accessibilite, gestion d'etat et qualite UX.");
            focus.add("Verifier performance rendering et architecture composants.");
        } else {
            focus.add("Evaluer la capacite a prioriser et livrer en startup.");
            focus.add("Verifier communication et ownership produit.");
        }

        return HiringAiChatResponseDTO.builder()
                .answer("Analyse ciblee sur votre besoin: " + question)
                .interviewQuestions(List.of(
                        "Expliquez un projet similaire et les resultats concrets obtenus.",
                        "Comment gereriez-vous un incident critique en production ?",
                        "Quelles decisions techniques prendriez-vous dans les 2 premieres semaines ?"
                ))
                .focusAreas(focus)
                .suggestedNextSteps(List.of(
                        "Scorez chaque candidat sur competences critiques + execution.",
                        "Ajoutez un mini-cas pratique lie a l'offre.",
                        "Confrontez evaluation technique et fit startup avant decision."
                ))
                .build();
    }

    public SkillGapAiAdviceResponseDTO buildSkillGapAdvice(SkillGapAiAdviceRequestDTO req) {
        List<String> requiredSkills = safeList(req.getRequiredSkills()).stream()
                .map(String::trim).filter(s -> !s.isEmpty()).collect(Collectors.toList());
        List<String> currentSkills = safeList(req.getCurrentSkills()).stream()
                .map(String::trim).filter(s -> !s.isEmpty()).collect(Collectors.toList());

        String prompt = """
                You are a technical mentor. Return strict JSON only with keys:
                summary (string), missingSkills (array of strings), recommendedLearningPath (array of strings), actionPlan (array of strings).
                Context:
                - Job title: %s
                - Experience level: %s
                - Required skills: %s
                - Current skills: %s
                Keep output practical with max 6 items per list.
                """.formatted(
                safe(req.getJobTitle(), "Unknown role"),
                safe(req.getExperienceLevel(), "Non precise"),
                requiredSkills.isEmpty() ? "None" : String.join(", ", requiredSkills),
                currentSkills.isEmpty() ? "None" : String.join(", ", currentSkills)
        );

        SkillGapAiAdviceResponseDTO aiResponse = tryGeminiSkillGapAdvice(prompt);
        if (aiResponse != null) {
            return aiResponse;
        }

        LinkedHashSet<String> missing = new LinkedHashSet<>(requiredSkills);
        currentSkills.forEach(cs -> missing.removeIf(ms -> ms.equalsIgnoreCase(cs)));
        List<String> missingList = new ArrayList<>(missing);
        List<String> learningPath = missingList.stream()
                .map(s -> "Construire un mini-projet centre sur " + s + ".")
                .limit(6)
                .collect(Collectors.toList());
        if (learningPath.isEmpty()) {
            learningPath = List.of("Renforcer les projets full-stack pour augmenter l'impact concret.");
        }
        return SkillGapAiAdviceResponseDTO.builder()
                .summary("Analyse terminee pour " + safe(req.getJobTitle(), "le poste cible") + ".")
                .missingSkills(missingList)
                .recommendedLearningPath(learningPath)
                .actionPlan(List.of(
                        "Prioriser 2 competences critiques sur 3 semaines.",
                        "Mettre a jour CV et portfolio avec preuves d'impact.",
                        "Repasser l'analyse apres chaque nouveau projet."
                ))
                .build();
    }

    private String safe(String value, String fallback) {
        return value == null || value.trim().isEmpty() ? fallback : value.trim();
    }

    private List<String> parseSkills(String input) {
        if (input == null || input.trim().isEmpty()) return new ArrayList<>();
        return Arrays.stream(input.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .distinct()
                .collect(Collectors.toList());
    }

    private List<String> safeList(List<String> input) {
        return input == null ? new ArrayList<>() : input;
    }

    private TalentAiAdviceResponseDTO tryGeminiTalentAdvice(String prompt) {
        String raw = callGemini(prompt);
        if (raw == null || raw.isBlank()) return null;
        try {
            JsonNode root = objectMapper.readTree(raw);
            return TalentAiAdviceResponseDTO.builder()
                    .resume(root.path("resume").asText(""))
                    .pointsForts(toStringList(root.path("pointsForts")))
                    .competencesPrioritaires(toStringList(root.path("competencesPrioritaires")))
                    .nextActions(toStringList(root.path("nextActions")))
                    .build();
        } catch (Exception ex) {
            return null;
        }
    }

    private SkillGapAiAdviceResponseDTO tryGeminiSkillGapAdvice(String prompt) {
        String raw = callGemini(prompt);
        if (raw == null || raw.isBlank()) return null;
        try {
            JsonNode root = objectMapper.readTree(raw);
            return SkillGapAiAdviceResponseDTO.builder()
                    .summary(root.path("summary").asText(""))
                    .missingSkills(toStringList(root.path("missingSkills")))
                    .recommendedLearningPath(toStringList(root.path("recommendedLearningPath")))
                    .actionPlan(toStringList(root.path("actionPlan")))
                    .build();
        } catch (Exception ex) {
            return null;
        }
    }

    private HiringAiChatResponseDTO tryGeminiHiringChat(String prompt) {
        String raw = callGemini(prompt);
        if (raw == null || raw.isBlank()) return null;
        try {
            JsonNode root = objectMapper.readTree(raw);
            return HiringAiChatResponseDTO.builder()
                    .answer(root.path("answer").asText(""))
                    .interviewQuestions(toStringList(root.path("interviewQuestions")))
                    .focusAreas(toStringList(root.path("focusAreas")))
                    .suggestedNextSteps(toStringList(root.path("suggestedNextSteps")))
                    .build();
        } catch (Exception ex) {
            return null;
        }
    }

    private String buildHiringRagContext(Long annonceId) {
        StringBuilder sb = new StringBuilder();
        List<Annonce> annonces;
        if (annonceId != null) {
            annonces = annonceRepository.findById(annonceId).map(List::of).orElseGet(List::of);
        } else {
            annonces = annonceRepository.findAll().stream().limit(5).collect(Collectors.toList());
        }
        sb.append("Annonces:\n");
        for (Annonce a : annonces) {
            sb.append("- ").append(a.getTitre())
                    .append(" | type=").append(a.getTypePoste() != null ? a.getTypePoste().name() : "N/A")
                    .append(" | skills=").append(safe(a.getCompetencesRequises(), "N/A"))
                    .append("\n");
        }
        List<Candidature> candidatures = candidatureRepository.findAll().stream().limit(8).collect(Collectors.toList());
        sb.append("Candidatures recentes:\n");
        for (Candidature c : candidatures) {
            if (c.getTalent() == null || c.getAnnonce() == null) continue;
            sb.append("- ")
                    .append(c.getTalent().getPrenom()).append(" ").append(c.getTalent().getNom())
                    .append(" -> ").append(c.getAnnonce().getTitre())
                    .append(" | score=").append(c.getMatchingScore() != null ? String.format(Locale.US, "%.1f", c.getMatchingScore()) : "N/A")
                    .append(" | statut=").append(c.getStatut() != null ? c.getStatut().name() : "N/A")
                    .append("\n");
        }
        return sb.toString();
    }

    private String callGemini(String prompt) {
        if (geminiApiKey == null || geminiApiKey.isBlank()) {
            return null;
        }
        String endpoint = "https://generativelanguage.googleapis.com/v1beta/models/"
                + geminiModel + ":generateContent?key=" + geminiApiKey;
        String body = "{\"contents\":[{\"parts\":[{\"text\":" + quoteJson(prompt) + "}]}],"
                + "\"generationConfig\":{\"responseMimeType\":\"application/json\"}}";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body))
                .build();
        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 400) return null;
            JsonNode root = objectMapper.readTree(response.body());
            JsonNode textNode = root.path("candidates").path(0).path("content").path("parts").path(0).path("text");
            if (textNode.isMissingNode()) return null;
            return textNode.asText();
        } catch (IOException | InterruptedException ex) {
            Thread.currentThread().interrupt();
            return null;
        }
    }

    private String quoteJson(String value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (Exception ex) {
            return "\"\"";
        }
    }

    private List<String> toStringList(JsonNode node) {
        if (node == null || !node.isArray()) return new ArrayList<>();
        List<String> rows = new ArrayList<>();
        for (JsonNode item : node) {
            if (item != null && !item.asText("").isBlank()) {
                rows.add(item.asText().trim());
            }
        }
        return rows;
    }

    private double estimateConfidence(int signals, int penalties) {
        double confidence = 70 + (signals * 4) - (penalties * 3);
        return Math.max(20, Math.min(98, confidence));
    }
}
