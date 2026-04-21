package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.projet.ProjetCreateRequestDto;
import tn.khotwa.dto.projet.ProjetResponseDto;
import tn.khotwa.dto.projet.ProjetUpdateRequestDto;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.ProjetCorrection;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;
import tn.khotwa.enums.projectEnum.ProjetCorrectionStatut;
import tn.khotwa.enums.projectEnum.StatutProjet;
import tn.khotwa.exception.projectException.BusinessException;
import tn.khotwa.repository.projet.ProjetCorrectionRepository;
import tn.khotwa.repository.projet.ProjetRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjetService {

    private static final long MIN_PROJECT_DURATION_DAYS = 30;

    private final ProjetRepository projetRepository;
    private final ProjetCorrectionRepository projetCorrectionRepository;
    private final DtoMapper mapper;

    @Transactional
    public ProjetResponseDto createProjet(Long entrepreneurId, ProjetCreateRequestDto dto) {
        validateProjectTimeline(dto.getDateDebutProjet(), dto.getDateFinProjet());

        Projet projet = Projet.builder()
                .nomStartup(dto.getNomStartup())
                .description(dto.getDescription())
                .secteur(dto.getSecteur())
                .problemeAdresse(dto.getProblemeAdresse())
                .solutionProposee(dto.getSolutionProposee())
                .businessModel(dto.getBusinessModel())
                .stadeProjet(dto.getStadeProjet())
                .innovationDescription(dto.getInnovationDescription())
                .scalabiliteDescription(dto.getScalabiliteDescription())
                .pocDisponible(dto.isPocDisponible())
                .dateDebutProjet(dto.getDateDebutProjet())
                .dateFinProjet(dto.getDateFinProjet())
                .dateCreation(LocalDateTime.now())
                .dateDerniereMiseAJour(LocalDateTime.now())
                .statutProjet(StatutProjet.EN_COURS)
                .etatValidation(EtatValidationProjet.BROUILLON)
                .scoreDisciplineGlobal(0)
                .entrepreneurId(entrepreneurId)
                .build();

        return enrichWithLatestCorrection(mapper.toProjetResponse(projetRepository.save(projet)));
    }

    @Transactional
    public ProjetResponseDto updateProjetBrouillon(Long projetId, Long entrepreneurId, ProjetUpdateRequestDto dto) {
        Projet projet = getOwnedProjet(projetId, entrepreneurId);

        validateProjectTimeline(dto.getDateDebutProjet(), dto.getDateFinProjet());

        if (projet.getEtatValidation() != EtatValidationProjet.BROUILLON
            && projet.getEtatValidation() != EtatValidationProjet.A_CORRIGER) {
            throw new BusinessException("Projet non modifiable dans cet etat");
        }
        if (projet.getStatutProjet() == StatutProjet.ARCHIVE
                || projet.getEtatValidation() == EtatValidationProjet.VALIDE
                || projet.getEtatValidation() == EtatValidationProjet.REFUSE) {
            throw new BusinessException("Projet en lecture seule");
        }

        projet.setNomStartup(dto.getNomStartup());
        projet.setDescription(dto.getDescription());
        projet.setSecteur(dto.getSecteur());
        projet.setProblemeAdresse(dto.getProblemeAdresse());
        projet.setSolutionProposee(dto.getSolutionProposee());
        projet.setBusinessModel(dto.getBusinessModel());
        projet.setStadeProjet(dto.getStadeProjet());
        projet.setInnovationDescription(dto.getInnovationDescription());
        projet.setScalabiliteDescription(dto.getScalabiliteDescription());
        projet.setPocDisponible(dto.isPocDisponible());
        projet.setDateDebutProjet(dto.getDateDebutProjet());
        projet.setDateFinProjet(dto.getDateFinProjet());
        projet.setDateDerniereMiseAJour(LocalDateTime.now());

        return enrichWithLatestCorrection(mapper.toProjetResponse(projetRepository.save(projet)));
    }

    @Transactional
    public void deleteProjetBrouillon(Long projetId, Long entrepreneurId) {
        Projet projet = getOwnedProjet(projetId, entrepreneurId);

        if (projet.getEtatValidation() != EtatValidationProjet.BROUILLON) {
            throw new BusinessException("Suppression autorisee uniquement pour un brouillon");
        }

        projetRepository.delete(projet);
    }

    public void ensureOwnership(Long projetId, Long entrepreneurId) {
        getOwnedProjet(projetId, entrepreneurId);
    }

    public List<ProjetResponseDto> projetsByEntrepreneur(Long entrepreneurId) {
        List<ProjetResponseDto> projets = projetRepository.findByEntrepreneurId(entrepreneurId)
                .stream()
                .map(mapper::toProjetResponse)
                .toList();
        return enrichWithLatestCorrection(projets);
    }

    public ProjetResponseDto byId(Long projetId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));
        return enrichWithLatestCorrection(mapper.toProjetResponse(projet));
    }

    public List<ProjetResponseDto> byIds(List<Long> projetIds) {
        List<ProjetResponseDto> projets = projetIds.stream()
                .distinct()
                .map((id) -> projetRepository.findById(id)
                        .orElseThrow(() -> new BusinessException("Projet introuvable")))
                .map(mapper::toProjetResponse)
                .toList();
        return enrichWithLatestCorrection(projets);
    }

    private ProjetResponseDto enrichWithLatestCorrection(ProjetResponseDto projet) {
        projet.setStatutCorrectionProjet(null);
        projet.setCorrectionResoumiseEnAttenteCoach(false);
        projet.setProjectCorrectionRequired(false); // default

        if (projet.getEtatValidation() != EtatValidationProjet.A_CORRIGER
                && projet.getEtatValidation() != EtatValidationProjet.EN_REVUE) {
            projet.setCommentaireCorrectionCoach(null);
            projet.setDateDemandeCorrection(null);
            return projet;
        }

        projetCorrectionRepository.findTopByProjetIdOrderByDateDemandeCorrectionDesc(projet.getId())
                .ifPresentOrElse(
                        correction -> {
                            projet.setStatutCorrectionProjet(correction.getStatutCorrection());
                            projet.setCorrectionResoumiseEnAttenteCoach(
                                    projet.getEtatValidation() == EtatValidationProjet.EN_REVUE
                                            && correction.getStatutCorrection() == ProjetCorrectionStatut.RESOUMISE_PAR_ENTREPRENEUR
                            );
                            // Only DEMANDEE means project-level correction is required
                            if (correction.getStatutCorrection() == ProjetCorrectionStatut.DEMANDEE) {
                                projet.setProjectCorrectionRequired(true);
                            } else {
                                projet.setProjectCorrectionRequired(false);
                            }
                            if (projet.getEtatValidation() == EtatValidationProjet.A_CORRIGER
                                    || projet.getEtatValidation() == EtatValidationProjet.EN_REVUE) {
                                applyCorrectionDisplayFields(projet, correction);
                            } else {
                                projet.setCommentaireCorrectionCoach(null);
                                projet.setDateDemandeCorrection(null);
                            }
                        },
                        () -> {
                            projet.setCommentaireCorrectionCoach(null);
                            projet.setDateDemandeCorrection(null);
                            projet.setStatutCorrectionProjet(null);
                            projet.setCorrectionResoumiseEnAttenteCoach(false);
                            projet.setProjectCorrectionRequired(false);
                        }
                );
        return projet;
    }

    private List<ProjetResponseDto> enrichWithLatestCorrection(List<ProjetResponseDto> projets) {
        List<Long> projetIds = projets.stream().map(ProjetResponseDto::getId).toList();
        Map<Long, ProjetCorrection> latestByProject = projetCorrectionRepository.findLatestByProjetIds(projetIds).stream()
                .collect(Collectors.toMap(ProjetCorrection::getProjetId, Function.identity(), (left, right) -> {
                    if (left.getDateDemandeCorrection().isAfter(right.getDateDemandeCorrection())) {
                        return left;
                    }
                    return right;
                }));

        for (ProjetResponseDto projet : projets) {
            projet.setStatutCorrectionProjet(null);
            projet.setCorrectionResoumiseEnAttenteCoach(false);

            if (projet.getEtatValidation() != EtatValidationProjet.A_CORRIGER
                    && projet.getEtatValidation() != EtatValidationProjet.EN_REVUE) {
                projet.setCommentaireCorrectionCoach(null);
                projet.setDateDemandeCorrection(null);
                continue;
            }

            ProjetCorrection latest = latestByProject.get(projet.getId());
            if (latest == null) {
                projet.setCommentaireCorrectionCoach(null);
                projet.setDateDemandeCorrection(null);
                continue;
            }

            projet.setStatutCorrectionProjet(latest.getStatutCorrection());
            projet.setCorrectionResoumiseEnAttenteCoach(
                    projet.getEtatValidation() == EtatValidationProjet.EN_REVUE
                            && latest.getStatutCorrection() == ProjetCorrectionStatut.RESOUMISE_PAR_ENTREPRENEUR
            );

                if (projet.getEtatValidation() == EtatValidationProjet.A_CORRIGER
                        || projet.getEtatValidation() == EtatValidationProjet.EN_REVUE) {
                    applyCorrectionDisplayFields(projet, latest);
                } else {
                    projet.setCommentaireCorrectionCoach(null);
                    projet.setDateDemandeCorrection(null);
                }
        }

        return projets;
    }

        private void applyCorrectionDisplayFields(ProjetResponseDto projet, ProjetCorrection latest) {
            String latestComment = latest.getCommentaire();
            if (latestComment != null && !latestComment.trim().isEmpty()) {
                projet.setCommentaireCorrectionCoach(latestComment);
                projet.setDateDemandeCorrection(latest.getDateDemandeCorrection());
                return;
            }

            List<ProjetCorrection> fallback = projetCorrectionRepository.findLatestNonBlankCommentByProjetId(projet.getId());
            if (!fallback.isEmpty()) {
                ProjetCorrection withComment = fallback.get(0);
                projet.setCommentaireCorrectionCoach(withComment.getCommentaire());
                projet.setDateDemandeCorrection(withComment.getDateDemandeCorrection());
                return;
            }

            projet.setCommentaireCorrectionCoach(null);
            projet.setDateDemandeCorrection(null);
        }

    private Projet getOwnedProjet(Long projetId, Long entrepreneurId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        if (!projet.getEntrepreneurId().equals(entrepreneurId)) {
            throw new BusinessException("Projet non autorise pour cet entrepreneur");
        }

        return projet;
    }

    private void validateProjectTimeline(LocalDate startDate, LocalDate endDate) {
        if (startDate == null || endDate == null) {
            throw new BusinessException("Les dates de debut et de fin du projet sont obligatoires");
        }

        if (endDate.isBefore(startDate)) {
            throw new BusinessException("La date de fin du projet doit etre posterieure a la date de debut");
        }

        long durationDays = ChronoUnit.DAYS.between(startDate, endDate);
        if (durationDays < MIN_PROJECT_DURATION_DAYS) {
            throw new BusinessException("La duree minimale du projet est de " + MIN_PROJECT_DURATION_DAYS + " jours");
        }
    }
}
