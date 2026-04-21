package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.projet.CoachRecommandationDto;
import tn.khotwa.dto.projet.RecommandationAffectationResponseDto;
import tn.khotwa.entity.projet.CoachDisponibilitePeriode;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.projectEnum.DisponibilitePeriodeStatut;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.enums.projectEnum.SecteurProjet;
import tn.khotwa.exception.projectException.BusinessException;
import tn.khotwa.repository.projet.CoachDisponibilitePeriodeRepository;
import tn.khotwa.repository.projet.ProjetCoachRepository;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.UserRepo.UserRepository;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CoachRecommendationService {

    private static final double COVERAGE_THRESHOLD = 0.8d;
    private static final int MAX_ACTIVE_PROJECTS = 5;

    private final ProjetRepository projetRepository;
    private final UserRepository userRepository;
    private final ProjetCoachRepository projetCoachRepository;
    private final CoachDisponibilitePeriodeRepository disponibiliteRepository;

    public RecommandationAffectationResponseDto recommendForProject(Long projetId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        if (projet.getDateDebutProjet() == null || projet.getDateFinProjet() == null) {
            throw new BusinessException("Le projet doit avoir une date de debut et une date de fin");
        }

        List<User> coachs = userRepository.findByRole(Role.COACH);
        if (coachs.isEmpty()) {
            return emptyRecommendation(projetId);
        }

        double averageLoad = coachs.stream()
                .mapToLong(c -> projetCoachRepository.countByCoachIdAndActifTrue(c.getIdUser()))
                .average()
                .orElse(0.0);

        List<CoachRecommandationDto> candidats = new ArrayList<>();
        for (User coach : coachs) {
            long charge = projetCoachRepository.countByCoachIdAndActifTrue(coach.getIdUser());
            if (charge >= MAX_ACTIVE_PROJECTS) {
                continue;
            }

            double coverage = computeCoverage(coach, projet.getDateDebutProjet(), projet.getDateFinProjet());
            if (coverage < COVERAGE_THRESHOLD && !isLegacyAvailable(coach)) {
                continue;
            }

            double timeScore = clamp(coverage) * 40.0;
            double metierScore = computeMetierScore(projet.getSecteur(), coach) * 30.0;
            double disponibiliteScore = (coverage >= COVERAGE_THRESHOLD || isLegacyAvailable(coach)) ? 10.0 : 0.0;
            double equiteScore = computeEquityScore(charge, averageLoad) * 20.0;
            double global = round2(timeScore + metierScore + disponibiliteScore + equiteScore);

                candidats.add(CoachRecommandationDto.builder()
                    .coachId(coach.getIdUser())
                    .coachNomAffiche(coach.getNomAffiche())
                    .scoreGlobal(global)
                    .scoreTemps(round2(timeScore))
                    .scoreMetier(round2(metierScore))
                    .scoreDisponibilite(round2(disponibiliteScore))
                    .scoreEquite(round2(equiteScore))
                    .chargeActuelle(charge)
                    .build());
        }

        if (candidats.isEmpty()) {
            return emptyRecommendation(projetId);
        }

        candidats.sort(Comparator
                .comparingDouble(CoachRecommandationDto::getScoreGlobal).reversed()
                .thenComparingLong(CoachRecommandationDto::getChargeActuelle));

        Long principal = candidats.get(0).getCoachId();

        List<Long> secondaries = candidats.stream()
                .map(CoachRecommandationDto::getCoachId)
                .filter(id -> !id.equals(principal))
                .limit(1)
                .toList();

        Set<Long> excluded = Set.of(principal);
        Long expert = candidats.stream()
                .filter(c -> !excluded.contains(c.getCoachId()))
                .max(Comparator.comparingDouble(CoachRecommandationDto::getScoreMetier))
                .map(CoachRecommandationDto::getCoachId)
                .orElse(null);

        return RecommandationAffectationResponseDto.builder()
                .projetId(projetId)
                .principalCoachId(principal)
                .secondaryCoachIds(secondaries)
                .expertCoachId(expert)
                .candidats(candidats)
                .build();
    }

    private RecommandationAffectationResponseDto emptyRecommendation(Long projetId) {
        return RecommandationAffectationResponseDto.builder()
                .projetId(projetId)
                .principalCoachId(null)
                .secondaryCoachIds(List.of())
                .expertCoachId(null)
                .candidats(List.of())
                .build();
    }

    private double computeCoverage(User coach, LocalDate start, LocalDate end) {
        List<CoachDisponibilitePeriode> overlaps = disponibiliteRepository
                .findByCoachIdAndActifTrueAndDateDebutLessThanEqualAndDateFinGreaterThanEqual(coach.getIdUser(), end, start);

        if (overlaps.isEmpty()) {
            return 0.0;
        }

        long totalDays = Math.max(1, ChronoUnit.DAYS.between(start, end) + 1);
        double coveredDays = 0.0;

        for (CoachDisponibilitePeriode period : overlaps) {
            LocalDate overlapStart = period.getDateDebut().isAfter(start) ? period.getDateDebut() : start;
            LocalDate overlapEnd = period.getDateFin().isBefore(end) ? period.getDateFin() : end;
            if (overlapEnd.isBefore(overlapStart)) {
                continue;
            }

            long days = ChronoUnit.DAYS.between(overlapStart, overlapEnd) + 1;
            if (period.getStatut() == DisponibilitePeriodeStatut.DISPONIBLE) {
                coveredDays += days;
            } else if (period.getStatut() == DisponibilitePeriodeStatut.PARTIELLE) {
                coveredDays += days * 0.5;
            }
        }

        return clamp(coveredDays / totalDays);
    }

    private double computeMetierScore(SecteurProjet secteurProjet, User coach) {
        String specialite = normalize(coach.getSpecialite());
        String region = normalize(coach.getRegion());
        String secteur = secteurProjet != null ? secteurProjet.name() : "";

        if (specialite.contains(secteur) || region.contains(secteur)) {
            return 1.0;
        }

        if ((secteurProjet == SecteurProjet.IA_DATA && specialite.contains("TECH"))
                || (secteurProjet == SecteurProjet.TECHNOLOGIE_LOGICIEL && specialite.contains("IA"))
                || (secteurProjet == SecteurProjet.ECOMMERCE_RETAIL && specialite.contains("B2B"))) {
            return 0.6;
        }

        return 0.2;
    }

    private double computeEquityScore(long chargeActuelle, double averageLoad) {
        if (averageLoad <= 0.0) {
            return 1.0;
        }

        if (chargeActuelle <= averageLoad) {
            double bonusFactor = (averageLoad - chargeActuelle) / averageLoad;
            return clamp(0.7 + Math.min(0.3, bonusFactor * 0.3));
        }

        double overloadRatio = (chargeActuelle - averageLoad) / averageLoad;
        return clamp(1.0 - overloadRatio);
    }

    private boolean isLegacyAvailable(User coach) {
        String raw = normalize(coach.getDisponibilite());
        return raw.equals("OUI") || raw.equals("YES") || raw.equals("TRUE") || raw.equals("AVAILABLE") || raw.equals("DISPONIBLE");
    }

    private String normalize(String value) {
        return value == null ? "" : value.trim().toUpperCase(Locale.ROOT);
    }

    private double clamp(double value) {
        if (value < 0.0) {
            return 0.0;
        }
        if (value > 1.0) {
            return 1.0;
        }
        return value;
    }

    private double round2(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}
