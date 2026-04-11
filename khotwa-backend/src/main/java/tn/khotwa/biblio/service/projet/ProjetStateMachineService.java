package tn.khotwa.biblio.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.biblio.entity.projet.Projet;
import tn.khotwa.biblio.entity.projet.SousTache;
import tn.khotwa.biblio.entity.projet.Tache;
import tn.khotwa.biblio.enums.EtatValidationProjet;
import tn.khotwa.biblio.enums.StatutProjet;
import tn.khotwa.biblio.enums.StatutTache;
import tn.khotwa.biblio.exception.BusinessException;
import tn.khotwa.biblio.repository.projet.ProjetCoachRepository;
import tn.khotwa.biblio.repository.projet.ProjetRepository;
import tn.khotwa.biblio.repository.projet.SousTacheRepository;
import tn.khotwa.biblio.repository.projet.TacheRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjetStateMachineService {

    private final ProjetRepository projetRepository;
    private final ProjetCoachRepository projetCoachRepository;
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
        projet.setEtatValidation(EtatValidationProjet.VALIDE);
        projet.setStatutProjet(StatutProjet.TERMINE);
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

        projet.setEtatValidation(EtatValidationProjet.A_CORRIGER);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    @Transactional
    public Projet resoumettreCorrection(Long projetId) {
        Projet projet = getProjet(projetId);
        ensureState(projet, EtatValidationProjet.A_CORRIGER);

        markCorrectedWorkAsResubmitted(projetId);

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
