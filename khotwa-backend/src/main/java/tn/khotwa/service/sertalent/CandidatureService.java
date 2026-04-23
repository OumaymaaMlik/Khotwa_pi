// service/CandidatureService.java
package tn.khotwa.service.sertalent;

import tn.khotwa.DTO.talent.MatchingResponseDTO;
import tn.khotwa.DTO.talent.AppliedOfferDTO;
import tn.khotwa.DTO.talent.AppliedTalentSummaryDTO;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.entity.talent.Candidature;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.AnnonceRepository;
import tn.khotwa.repository.repotalent.CandidatureRepository;
import tn.khotwa.repository.repotalent.TalentProfileRepository;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidatureService {

    private final CandidatureRepository candidatureRepository;
    private final TalentProfileRepository talentRepository;
    private final AnnonceRepository annonceRepository;
    private final MatchingService matchingService;

    public Candidature postuler(Long talentId, Long annonceId, String message) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent introuvable"));
        Annonce annonce = annonceRepository.findById(annonceId)
                .orElseThrow(() -> new RuntimeException("Annonce introuvable"));

        double score = matchingService.calculateDetailedMatching(talentId, annonceId).getScore();

        Candidature candidature = Candidature.builder()
                .talent(talent)
                .annonce(annonce)
                .matchingScore(score)
                .statut(Candidature.StatutCandidature.EN_ATTENTE)
                .dateCandidature(LocalDateTime.now())
                .messageMotivaion(message)
                .build();

        return candidatureRepository.save(candidature);
    }

    /**
     * Retourne tous les talents avec leur score pour une annonce donnée,
     * triés du meilleur au moins bon.
     */
    public List<MatchingResponseDTO> getMatchingPourAnnonce(Long annonceId) {
        Annonce annonce = annonceRepository.findById(annonceId)
                .orElseThrow(() -> new RuntimeException("Annonce introuvable"));

        List<TalentProfile> tousLesTalents = talentRepository.findAll();

        return tousLesTalents.stream()
                .map(talent -> buildMatchingResult(talent, annonce))
                .sorted(Comparator.comparingDouble(MatchingResponseDTO::getMatchingScore).reversed())
                .collect(Collectors.toList());
    }

    private MatchingResponseDTO buildMatchingResult(TalentProfile talent, Annonce annonce) {
        double score = matchingService.calculateDetailedMatching(talent.getId(), annonce.getId()).getScore();

        Set<String> requis = parseSet(annonce.getCompetencesRequises());
        Set<String> candidatSet = parseSet(talent.getCompetences());

        List<String> communes = requis.stream()
                .filter(candidatSet::contains).collect(Collectors.toList());

        List<String> manquantes = requis.stream()
                .filter(c -> !candidatSet.contains(c)).collect(Collectors.toList());

        String niveau = score >= 80 ? "Excellent" : score >= 50 ? "Bon" : "Faible";

        return MatchingResponseDTO.builder()
                .talentId(talent.getId())
                .nomTalent(talent.getPrenom() + " " + talent.getNom())
                .emailTalent(talent.getEmail())
                .annonceId(annonce.getId())
                .titreAnnonce(annonce.getTitre())
                .matchingScore(score)
                .competencesCommunes(communes)
                .competencesManquantes(manquantes)
                .niveau(niveau)
                .build();
    }

    private Set<String> parseSet(String s) {
        if (s == null) return new HashSet<>();
        return Arrays.stream(s.split(","))
                .map(String::trim).map(String::toLowerCase)
                .collect(Collectors.toSet());
    }

    public List<Candidature> getCandidaturesParAnnonce(Long annonceId) {
        return candidatureRepository.findByAnnonceIdOrderByScoreDesc(annonceId);
    }
    public List<Candidature> getCandidaturesByTalent(Long talentId) {
        return candidatureRepository.findByTalentId(talentId);
    }

    public List<AppliedTalentSummaryDTO> getTalentsWithAppliedOffers() {
        List<Candidature> rows = candidatureRepository.findAll();
        Map<Long, List<Candidature>> byTalent = rows.stream()
                .filter(c -> c.getTalent() != null && c.getTalent().getId() != null)
                .collect(Collectors.groupingBy(c -> c.getTalent().getId()));

        return byTalent.values().stream().map(group -> {
            Candidature first = group.get(0);
            TalentProfile t = first.getTalent();
            List<AppliedOfferDTO> offres = group.stream()
                    .filter(c -> c.getAnnonce() != null)
                    .sorted(Comparator.comparing(Candidature::getDateCandidature, Comparator.nullsLast(Comparator.reverseOrder())))
                    .map(c -> AppliedOfferDTO.builder()
                            .annonceId(c.getAnnonce().getId())
                            .titreAnnonce(c.getAnnonce().getTitre())
                            .typePoste(c.getAnnonce().getTypePoste() != null ? c.getAnnonce().getTypePoste().name() : null)
                            .localisation(c.getAnnonce().getLocalisation())
                            .matchingScore(c.getMatchingScore())
                            .dateCandidature(c.getDateCandidature() != null ? c.getDateCandidature().toString() : null)
                            .statut(c.getStatut() != null ? c.getStatut().name() : null)
                            .build())
                    .collect(Collectors.toList());

            return AppliedTalentSummaryDTO.builder()
                    .talentId(t.getId())
                    .nom(t.getNom())
                    .prenom(t.getPrenom())
                    .email(t.getEmail())
                    .competences(t.getCompetences())
                    .offres(offres)
                    .build();
        }).sorted(Comparator.comparing((AppliedTalentSummaryDTO x) -> x.getOffres() != null ? x.getOffres().size() : 0).reversed())
                .collect(Collectors.toList());
    }
}