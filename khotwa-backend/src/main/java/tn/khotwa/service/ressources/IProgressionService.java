package tn.khotwa.service.ressources;

import tn.khotwa.DTO.ressources.EntrepreneurProgressionDTO;
import tn.khotwa.enums.ProgressStatus;
import tn.khotwa.projection.ressources.ProgressionView;

import java.util.List;

public interface IProgressionService {

    ProgressionView mettreAJour(Long userId, Long ressourceId, ProgressStatus statut,
                                Integer pourcentage, Integer positionVideoSec);

    ProgressionView marquerCommeTermine(Long userId, Long ressourceId);

    List<ProgressionView> getMesProgressions(Long userId);

    /**
     * Retourne les progressions de tous les entrepreneurs suivis par un coach.
     * Structure : liste de { entrepreneurId, entrepreneurNom, progressions: [...] }
     */
    List<EntrepreneurProgressionDTO> getProgressionsEntrepreneursParCoach(Long coachId);

    /**
     * Retourne les progressions d'un entrepreneur spécifique (pour un coach affecté).
     */
    List<ProgressionView> getProgressionsParEntrepreneur(Long entrepreneurId);
    boolean isCoachLinkedToEntrepreneur(Long coachId, Long entrepreneurId);
}
