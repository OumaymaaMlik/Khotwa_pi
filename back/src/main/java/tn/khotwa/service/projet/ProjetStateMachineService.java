package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.projet.Projet;

import tn.khotwa.entity.projet.ProjetCorrection;
import tn.khotwa.entity.projet.SousTache;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;
import tn.khotwa.enums.projectEnum.ProjetCorrectionStatut;
import tn.khotwa.enums.projectEnum.StatutProjet;
import tn.khotwa.enums.projectEnum.StatutTache;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.repository.projet.*;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjetStateMachineService {

    private final ProjetRepository projetRepository;
    private final ProjetCoachRepository projetCoachRepository;
    private final ProjetCorrectionRepository projetCorrectionRepository;
    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;

    @Transactional
    public Projet soumettreProjet(Long projetId) {
        Projet projet = getProjet(projetId);
        ensureState(projet, EtatValidationProjet.BROUILLON);
        validateMandatoryFields(projet);

        projet.setEtatValidation(EtatValidationProjet.SOUMIS_ADMIN);
        projet.setDateSoumission(LocalDateTime.now());
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet affecterCoach(Long projetId, Long adminId) {
        Projet projet = getProjet(projetId);
        ensureState(projet, EtatValidationProjet.SOUMIS_ADMIN);

        if (projetCoachRepository.findByProjetIdAndActifTrue(projetId).isEmpty()) {
            throw new BusinessException("Aucun coach actif affecte au projet");
        }

        projet.setEtatValidation(EtatValidationProjet.AFFECTE_COACH);
        projet.setAdminId(adminId);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet passerEnRevueParCoach(Long projetId) {
        Projet projet = getProjet(projetId);
        if (projet.getEtatValidation() != EtatValidationProjet.AFFECTE_COACH
                && projet.getEtatValidation() != EtatValidationProjet.A_CORRIGER) {
            throw new BusinessException("Transition vers EN_REVUE non autorisee depuis l'etat courant");
        }

        boolean toutesCommencees = tacheRepository.findByProjetId(projetId).stream()
                .noneMatch(t -> t.getStatutTache() == StatutTache.A_FAIRE);
        if (!toutesCommencees) {
            throw new BusinessException("Toutes les taches doivent etre au minimum demarrees");
        }

        projet.setEtatValidation(EtatValidationProjet.EN_REVUE);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet validerProjet(Long projetId) {
        Projet projet = getProjet(projetId);
        ensureState(projet, EtatValidationProjet.EN_REVUE);

        // Discipline score non négatif
        if (projet.getScoreDisciplineGlobal() < 0) {
            throw new BusinessException(
                    "Le discipline score ne peut pas être négatif pour valider (actuel : "
                            + projet.getScoreDisciplineGlobal() + ")"
            );
        }

        // Aucune tâche bloquée ou en correction
        List<Tache> taches = tacheRepository.findByProjetId(projetId);
        boolean hasBlockedTasks = taches.stream()
                .anyMatch(t -> t.getStatutTache() == StatutTache.BLOQUEE
                        || t.getStatutTache() == StatutTache.A_CORRIGER);
        if (hasBlockedTasks) {
            throw new BusinessException(
                    "Impossible de valider : certaines tâches sont bloquées ou en attente de correction"
            );
        }

        // Projet vraiment validé et terminé
        projet.setEtatValidation(EtatValidationProjet.VALIDE);
        projet.setStatutProjet(StatutProjet.TERMINE);

        projetCorrectionRepository.findTopByProjetIdOrderByDateDemandeCorrectionDesc(projetId)
                .ifPresent(correction -> {
                    correction.setStatutCorrection(ProjetCorrectionStatut.APPROUVEE_PAR_COACH);
                    projetCorrectionRepository.save(correction);
                });
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet demanderCorrection(Long projetId, String commentaire) {
        if (commentaire == null || commentaire.isBlank()) {
            throw new BusinessException("Le commentaire de correction est obligatoire");
        }

        Projet projet = getProjet(projetId);
        if (projet.getEtatValidation() == EtatValidationProjet.REFUSE
                || projet.getEtatValidation() == EtatValidationProjet.VALIDE
                || projet.getStatutProjet() == StatutProjet.ARCHIVE) {
            throw new BusinessException("Demande de correction non autorisee sur un projet finalise");
        }

        ProjetCorrectionStatut statutCorrection = projetCorrectionRepository.findTopByProjetIdOrderByDateDemandeCorrectionDesc(projetId)
            .map(existing -> existing.getStatutCorrection() == ProjetCorrectionStatut.RESOUMISE_PAR_ENTREPRENEUR
                ? ProjetCorrectionStatut.RECORRECTION_DEMANDEE
                : ProjetCorrectionStatut.DEMANDEE)
            .orElse(ProjetCorrectionStatut.DEMANDEE);

        projet.setEtatValidation(EtatValidationProjet.A_CORRIGER);
        projetCorrectionRepository.save(ProjetCorrection.builder()
            .projetId(projetId)
            .commentaire(commentaire.trim())
            .dateDemandeCorrection(LocalDateTime.now())
            .statutCorrection(statutCorrection)
            .build());
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet resoumettreCorrection(Long projetId) {
        Projet projet = getProjet(projetId);
        ensureState(projet, EtatValidationProjet.A_CORRIGER);

        markCorrectedWorkAsResubmitted(projetId);
        projetCorrectionRepository.findTopByProjetIdOrderByDateDemandeCorrectionDesc(projetId)
            .ifPresent(correction -> {
                correction.setStatutCorrection(ProjetCorrectionStatut.RESOUMISE_PAR_ENTREPRENEUR);
                projetCorrectionRepository.save(correction);
            });

        projet.setEtatValidation(EtatValidationProjet.EN_REVUE);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet refuserProjet(Long projetId, String justification) {
        if (justification == null || justification.isBlank()) {
            throw new BusinessException("Justification obligatoire pour REFUSE");
        }
        Projet projet = getProjet(projetId);
        projet.setEtatValidation(EtatValidationProjet.REFUSE);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet suspendreProjet(Long projetId) {
        Projet projet = getProjet(projetId);
        projet.setStatutProjet(StatutProjet.SUSPENDU);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet reprendreProjet(Long projetId) {
        Projet projet = getProjet(projetId);
        if (projet.getStatutProjet() != StatutProjet.SUSPENDU) {
            throw new BusinessException("Seul un projet suspendu peut etre repris");
        }
        projet.setStatutProjet(StatutProjet.EN_COURS);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet archiverProjet(Long projetId) {
        Projet projet = getProjet(projetId);
        projet.setStatutProjet(StatutProjet.ARCHIVE);
        projet.setDateArchivage(LocalDateTime.now());
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    private Projet getProjet(Long projetId) {
        return projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));
    }

    private void ensureState(Projet projet, EtatValidationProjet expected) {
        if (projet.getEtatValidation() != expected) {
            throw new BusinessException("Transition invalide depuis l'etat " + projet.getEtatValidation());
        }
    }

    private void validateMandatoryFields(Projet p) {
        if (isBlank(p.getNomStartup()) || isBlank(p.getProblemeAdresse()) || isBlank(p.getSolutionProposee())
                || isBlank(p.getBusinessModel()) || p.getStadeProjet() == null) {
            throw new BusinessException("Les champs obligatoires du projet ne sont pas tous renseignes");
        }
    }

    private boolean isBlank(String value) {
        return value == null || value.isBlank();
    }

    private void markCorrectedWorkAsResubmitted(Long projetId) {
        List<Tache> taches = tacheRepository.findByProjetId(projetId);
        LocalDateTime now = LocalDateTime.now();

        for (Tache tache : taches) {
            if (tache.getStatutTache() == StatutTache.A_CORRIGER) {
                tache.setStatutTache(StatutTache.EN_CORRECTION);
                tache.setDateMiseAJour(now);
                tacheRepository.save(tache);
            }

            List<SousTache> sousTaches = sousTacheRepository.findByTacheId(tache.getId());
            for (SousTache sousTache : sousTaches) {
                if (sousTache.getStatutSousTache() == StatutTache.A_CORRIGER) {
                    sousTache.setStatutSousTache(StatutTache.EN_CORRECTION);
                    sousTache.setDateMiseAJour(now);
                    sousTacheRepository.save(sousTache);
                }
            }
        }
    }
}
