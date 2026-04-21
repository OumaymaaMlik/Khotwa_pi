package tn.khotwa.service.sertalent;

import org.springframework.stereotype.Service;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class MatchingService {

    /**
     * Calcule le score de correspondance entre les compétences requises
     * et celles du candidat.
     * Formule : (intersection / union) × 100 — coefficient de Jaccard
     *
     * Exemples :
     *   requis    = ["Java", "Spring", "MySQL", "Docker"]
     *   candidat  = ["Java", "Spring", "Python", "MySQL"]
     *   score     = 3 / 5 × 100 = 60%
     */
    public double calculerScore(String competencesRequises, String competencesCandidat) {
        if (competencesRequises == null || competencesRequises.isBlank()) return 0.0;
        if (competencesCandidat == null || competencesCandidat.isBlank()) return 0.0;

        Set<String> requis = parseCompetences(competencesRequises);
        Set<String> candidat = parseCompetences(competencesCandidat);

        // Intersection
        Set<String> intersection = new HashSet<>(requis);
        intersection.retainAll(candidat);

        // Union
        Set<String> union = new HashSet<>(requis);
        union.addAll(candidat);

        if (union.isEmpty()) return 0.0;

        double score = ((double) intersection.size() / union.size()) * 100;

        // Arrondi à 2 décimales
        return Math.round(score * 100.0) / 100.0;
    }

    /**
     * Version pondérée : certaines compétences valent plus que d'autres.
     * Ex: compétences techniques = poids 2, soft skills = poids 1
     */
    public double calculerScorePondere(String competencesRequises, String competencesCandidat,
                                       Map<String, Double> poids) {
        if (competencesRequises == null || competencesCandidat == null) return 0.0;

        Set<String> requis = parseCompetences(competencesRequises);
        Set<String> candidat = parseCompetences(competencesCandidat);

        double scoreTotal = 0;
        double poidsTotal = 0;

        for (String comp : requis) {
            double p = poids.getOrDefault(comp.toLowerCase(), 1.0);
            poidsTotal += p;
            if (candidat.contains(comp)) {
                scoreTotal += p;
            }
        }

        if (poidsTotal == 0) return 0.0;
        return Math.round((scoreTotal / poidsTotal) * 100 * 100.0) / 100.0;
    }

    private Set<String> parseCompetences(String competences) {
        return Arrays.stream(competences.split(","))
                .map(String::trim)
                .map(String::toLowerCase)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toSet());
    }
}