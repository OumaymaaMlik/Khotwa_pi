package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.talent.MatchingResultDTO;
import tn.khotwa.dto.talent.SkillGapResponseDTO;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.AnnonceRepository;
import tn.khotwa.repository.repotalent.TalentProfileRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MatchingService {

    private final TalentProfileRepository talentRepository;
    private final AnnonceRepository annonceRepository;

    @Cacheable(cacheNames = "matchingResults", key = "#talentId + '-' + #jobId")
    public MatchingResultDTO calculateDetailedMatching(Long talentId, Long jobId) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new IllegalArgumentException("Talent introuvable: " + talentId));
        Annonce job = annonceRepository.findById(jobId)
                .orElseThrow(() -> new IllegalArgumentException("Job introuvable: " + jobId));

        Set<String> required = parseCompetences(job.getCompetencesRequises());
        Set<String> talentSkills = parseCompetences(talent.getCompetences());

        Set<String> matched = new HashSet<>(required);
        matched.retainAll(talentSkills);
        Set<String> missing = new HashSet<>(required);
        missing.removeAll(talentSkills);

        double jaccard = jaccard(required, talentSkills); // 0..1
        double skillsScore = jaccard * 100.0;
        double expScore = experienceScore(talent.getNiveauExperience(), job.getTypePoste());
        double locationScore = locationScore(talent.getBio(), job.getLocalisation());

        double weighted = (skillsScore * 0.50) + (expScore * 0.30) + (locationScore * 0.20);

        List<String> explanation = new ArrayList<>();
        explanation.add(String.format("Skills similarity (Jaccard): %.1f%%", skillsScore));
        explanation.add(String.format("Experience alignment: %.1f%%", expScore));
        explanation.add(String.format("Location alignment: %.1f%%", locationScore));

        for (String m : matched.stream().limit(4).toList()) {
            explanation.add("✔ " + m + " match");
        }
        for (String m : missing.stream().limit(4).toList()) {
            explanation.add("❌ " + m + " missing");
        }

        if (diplomaMatches(talent.getDiplomes(), job.getDescription())) {
            weighted += 5.0;
            explanation.add("✔ Bonus diplôme pertinent (+5)");
        }
        if (!missing.isEmpty() && containsCriticalMissing(missing)) {
            weighted -= 7.0;
            explanation.add("❌ Pénalité compétence critique manquante (-7)");
        }

        double finalScore = clamp(weighted, 0.0, 100.0);
        double confidence = clamp(60.0 + (matched.size() * 8.0) - (missing.size() * 5.0), 15.0, 99.0);
        explanation.add("Score global " + Math.round(finalScore) + "%");

        return MatchingResultDTO.builder()
                .talentId(talentId)
                .jobId(jobId)
                .score(round2(finalScore))
                .confidenceScore(round2(confidence))
                .matchedSkills(matched.stream().sorted().toList())
                .missingSkills(missing.stream().sorted().toList())
                .explanation(explanation)
                .build();
    }

    public SkillGapResponseDTO computeSkillGap(Long talentId, Long jobId) {
        MatchingResultDTO matching = calculateDetailedMatching(talentId, jobId);
        List<String> learningPath = matching.getMissingSkills().stream()
                .map(this::buildLearningPath)
                .toList();

        return SkillGapResponseDTO.builder()
                .talentId(talentId)
                .jobId(jobId)
                .missingSkills(matching.getMissingSkills())
                .recommendedLearningPath(learningPath)
                .build();
    }

    private Set<String> parseCompetences(String competences) {
        if (competences == null || competences.isBlank()) return new HashSet<>();
        return Arrays.stream(competences.split(","))
                .map(String::trim)
                .map(String::toLowerCase)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toSet());
    }

    private double jaccard(Set<String> a, Set<String> b) {
        if (a.isEmpty() && b.isEmpty()) return 1.0;
        Set<String> intersection = new HashSet<>(a);
        intersection.retainAll(b);
        Set<String> union = new HashSet<>(a);
        union.addAll(b);
        return union.isEmpty() ? 0.0 : (double) intersection.size() / union.size();
    }

    private double experienceScore(String niveauExperience, Annonce.TypePoste typePoste) {
        String level = Optional.ofNullable(niveauExperience).orElse("").toUpperCase(Locale.ROOT);
        if (typePoste == Annonce.TypePoste.STAGIAIRE) {
            return "JUNIOR".equals(level) ? 100 : 80;
        }
        if (typePoste == Annonce.TypePoste.COFONDATEUR) {
            return ("SENIOR".equals(level) || "INTERMEDIAIRE".equals(level)) ? 95 : 55;
        }
        return "SENIOR".equals(level) ? 100 : ("INTERMEDIAIRE".equals(level) ? 80 : 60);
    }

    private double locationScore(String talentBio, String jobLocation) {
        if (jobLocation == null || jobLocation.isBlank()) return 70;
        if (talentBio == null || talentBio.isBlank()) return 60;
        return talentBio.toLowerCase(Locale.ROOT).contains(jobLocation.toLowerCase(Locale.ROOT)) ? 100 : 55;
    }

    private boolean diplomaMatches(String diplomes, String description) {
        if (diplomes == null || description == null) return false;
        return Arrays.stream(diplomes.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .anyMatch(d -> description.toLowerCase(Locale.ROOT).contains(d.toLowerCase(Locale.ROOT)));
    }

    private boolean containsCriticalMissing(Set<String> missing) {
        Set<String> critical = Set.of("java", "spring", "docker", "sql", "angular");
        return missing.stream().anyMatch(critical::contains);
    }

    private String buildLearningPath(String skill) {
        return "Learn " + skill + " via project-based course + 2 portfolio tasks.";
    }

    private double clamp(double value, double min, double max) {
        return Math.max(min, Math.min(max, value));
    }

    private double round2(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}