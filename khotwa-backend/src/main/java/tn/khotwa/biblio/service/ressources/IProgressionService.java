package tn.khotwa.biblio.service.ressources;

import tn.khotwa.biblio.enums.ProgressStatus;
import tn.khotwa.biblio.projection.ressources.ProgressionView;

import java.util.List;
import java.util.Map;

public interface IProgressionService {

    ProgressionView mettreAJour(Long userId, Long ressourceId, ProgressStatus statut,
                                Integer pourcentage, Integer positionVideoSec);

    ProgressionView marquerCommeTermine(Long userId, Long ressourceId);

    List<ProgressionView> getMesProgressions(Long userId);

    /**
     * Retourne les progressions de tous les entrepreneurs suivis par un coach.
     * Structure : liste de { entrepreneurId, entrepreneurNom, progressions: [...] }
     */
    List<Map<String, Object>> getProgressionsEntrepreneursParCoach(Long coachId);

    /**
     * Retourne les progressions d'un entrepreneur spécifique (pour un coach affecté).
     */
    List<ProgressionView> getProgressionsParEntrepreneur(Long entrepreneurId);
}
