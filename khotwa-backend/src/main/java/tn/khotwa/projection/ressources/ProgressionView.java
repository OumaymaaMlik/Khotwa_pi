package tn.khotwa.projection.ressources;

import tn.khotwa.enums.ProgressStatus;

import java.time.LocalDateTime;

// FIX: getUserID → getUtilisateurId pour correspondre au champ renommé
public interface ProgressionView {

    Long getId();
    // FIX: était getUserID() — aligné avec le champ utilisateurId de l'entité
    Long getUtilisateurId();
    ProgressStatus getStatut();
    Integer getPourcentage();
    Integer getPositionVideoSec();
    LocalDateTime getPremierAcces();
    LocalDateTime getDernierAcces();
    LocalDateTime getDateCompletion();

    RessourceResume getRessource();

    interface RessourceResume {
        Long getId();
        String getTitre();
    }

    default boolean estComplete() {
        return getStatut() == ProgressStatus.COMPLETED;
    }
}
