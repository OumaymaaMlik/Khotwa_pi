package tn.khotwa.repository.ressources;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.ressources.NudgeHistory;
import tn.khotwa.enums.NudgeLevel;

import java.time.LocalDateTime;

/**
 * Accès aux historiques de nudges.
 */
public interface NudgeHistoryRepository extends JpaRepository<NudgeHistory, Long> {

    /**
     * Vérifie si un nudge d'un niveau donné a déjà été envoyé pour un couple
     * (utilisateur, ressource) dans une fenêtre temporelle.
     *
     * Utilisé pour éviter les doublons si le scheduler tourne plusieurs fois
     * dans la même journée.
     *
     * @param utilisateurId  ID de l'entrepreneur
     * @param ressourceId    ID de la ressource
     * @param niveauNudge    NIVEAU_1 ou NIVEAU_2
     * @param depuis         Borne inférieure de la fenêtre (ex. : début de journée)
     */
    @Query("""
        SELECT COUNT(n) > 0
        FROM NudgeHistory n
        WHERE n.utilisateurId = :uid
          AND n.ressource.id  = :rid
          AND n.niveauNudge   = :niveau
          AND n.dateNudge    >= :depuis
          AND n.envoiReussi   = true
    """)
    boolean existsNudgeEnvoye(
            @Param("uid")    Long utilisateurId,
            @Param("rid")    Long ressourceId,
            @Param("niveau") NudgeLevel niveauNudge,
            @Param("depuis") LocalDateTime depuis
    );
}