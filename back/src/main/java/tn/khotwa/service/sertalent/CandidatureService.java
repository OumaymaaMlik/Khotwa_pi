// service/CandidatureService.java
package tn.khotwa.service.sertalent;

import tn.khotwa.dto.talent.MatchingResponseDTO;
import tn.khotwa.dto.talent.AppliedOfferDTO;
import tn.khotwa.dto.talent.AppliedTalentSummaryDTO;

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
    private final NotificationEmailService notificationEmailService;

    public Candidature postuler(Long talentId, Long annonceId, String message) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent introuvable: " + talentId));
        Annonce annonce = annonceRepository.findById(annonceId)
                .orElseThrow(() -> new RuntimeException("Annonce introuvable: " + annonceId));

        // FIX: vérifier si une candidature existe déjà pour éviter un doublon (constraint violation → 500)
        boolean alreadyApplied = candidatureRepository.findByTalentId(talentId)
                .stream()
                .anyMatch(c -> c.getAnnonce() != null && c.getAnnonce().getId().equals(annonceId));
        if (alreadyApplied) {
            throw new RuntimeException("Le talent a déjà postulé à cette annonce.");
        }

        // FIX: score par défaut à 0 si le matching plante (compétences nulles/vides)
        double score;
        try {
            score = matchingService.calculateDetailedMatching(talentId, annonceId).getScore();
        } catch (Exception e) {
            score = 0.0;
        }

        Candidature candidature = Candidature.builder()
                .talent(talent)
                .annonce(annonce)
                .matchingScore(score)
                .statut(Candidature.StatutCandidature.EN_ATTENTE)
                .dateCandidature(LocalDateTime.now())
                // FIX: message peut être null
                .messageMotivaion(message != null ? message : "")
                .build();

        Candidature saved = candidatureRepository.save(candidature);
        notificationEmailService.sendNewApplicationNotification(saved);
        return saved;
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
        double score;
        try {
            score = matchingService.calculateDetailedMatching(talent.getId(), annonce.getId()).getScore();
        } catch (Exception e) {
            score = 0.0;
        }

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
        if (s == null || s.isBlank()) return new HashSet<>();
        return Arrays.stream(s.split(","))
                .map(String::trim).map(String::toLowerCase)
                .filter(str -> !str.isEmpty())
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
                                    .candidatureId(c.getId())
                                    .annonceId(c.getAnnonce().getId())
                                    .titreAnnonce(c.getAnnonce().getTitre())
                                    .typePoste(c.getAnnonce().getTypePoste() != null ? c.getAnnonce().getTypePoste().name() : null)
                                    .localisation(c.getAnnonce().getLocalisation())
                                    .matchingScore(c.getMatchingScore())
                                    .dateCandidature(c.getDateCandidature() != null ? c.getDateCandidature().toString() : null)
                                    .statut(c.getStatut() != null ? c.getStatut().name() : null)
                                    .contactEntrepreneur(Boolean.TRUE.equals(c.getContactEntrepreneur()))
                                    .dateContactEntrepreneur(c.getDateContactEntrepreneur() != null ? c.getDateContactEntrepreneur().toString() : null)
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

    public Candidature updateStatut(Long candidatureId, String statut) {
        Candidature candidature = candidatureRepository.findById(candidatureId)
                .orElseThrow(() -> new RuntimeException("Candidature introuvable"));
        Candidature.StatutCandidature newStatus = Candidature.StatutCandidature.valueOf(statut.toUpperCase());
        candidature.setStatut(newStatus);
        candidature.setDateDecision(LocalDateTime.now());
        Candidature saved = candidatureRepository.save(candidature);
        notificationEmailService.sendStatusChangedNotification(saved);
        return saved;
    }

    public Candidature markContacted(Long candidatureId) {
        Candidature candidature = candidatureRepository.findById(candidatureId)
                .orElseThrow(() -> new RuntimeException("Candidature introuvable"));
        candidature.setContactEntrepreneur(true);
        candidature.setDateContactEntrepreneur(LocalDateTime.now());
        Candidature saved = candidatureRepository.save(candidature);
        notificationEmailService.sendContactNotification(saved);
        return saved;
    }

    public List<Candidature> getAcceptedCandidatures() {
        return candidatureRepository.findByStatut(Candidature.StatutCandidature.ACCEPTEE);
    }
}