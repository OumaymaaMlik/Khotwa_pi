package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import tn.khotwa.DTO.talent.HiringAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.HiringAiAdviceResponseDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceResponseDTO;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.talent.AiRecommendation;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiAdviceService {
    private final AiRecommendationService aiRecommendationService;

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

        TalentAiAdviceResponseDTO response = TalentAiAdviceResponseDTO.builder()
                .resume(resume)
                .pointsForts(strengths)
                .competencesPrioritaires(priorities.stream().limit(5).collect(Collectors.toList()))
                .nextActions(nextActions)
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

    private double estimateConfidence(int signals, int penalties) {
        double confidence = 70 + (signals * 4) - (penalties * 3);
        return Math.max(20, Math.min(98, confidence));
    }
}
