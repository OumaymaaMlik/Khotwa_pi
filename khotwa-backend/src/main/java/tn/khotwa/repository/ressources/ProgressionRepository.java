package tn.khotwa.repository.ressources;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.dto.ressources.StagnationInfo;
import tn.khotwa.entity.ressources.ProgressionUtilisateur;
import tn.khotwa.enums.ProgressStatus;
import tn.khotwa.projection.ressources.ProgressionView;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Repository principal des progressions utilisateurs.
 *
 * Les méthodes de détection de stagnation utilisent des JOIN explicites
 * pour récupérer entrepreneur, coach et ressource en une seule requête SQL,
 * garantissant des performances < 2 s sur les volumes attendus.
 */
public interface ProgressionRepository extends JpaRepository<ProgressionUtilisateur, Long> {

    // ── Méthodes existantes (inchangées) ────────────────────────────

    Optional<ProgressionView> findProjectedByUtilisateurIdAndRessourceId(
            Long utilisateurId, Long ressourceId);

    List<ProgressionView> findByUtilisateurId(Long utilisateurId);

    Optional<ProgressionUtilisateur> findByUtilisateurIdAndRessourceId(
            Long utilisateurId, Long ressourceId);

    long countByUtilisateurIdAndStatut(Long utilisateurId, ProgressStatus statut);

    @Query("""
        SELECT p FROM ProgressionUtilisateur p
        WHERE p.utilisateurId = :userId
          AND p.ressource.id IN :ressourceIds
    """)
    List<ProgressionView> findByUtilisateurIdAndRessourceIds(
            @Param("userId")       Long userId,
            @Param("ressourceIds") List<Long> ressourceIds);

    @Query("""
        SELECT p FROM ProgressionUtilisateur p
        WHERE p.utilisateurId IN :userIds
    """)
    List<ProgressionView> findByUtilisateurIdIn(@Param("userIds") List<Long> userIds);

    // ── Nouvelles méthodes : détection de stagnation pour le Nudging ─

    /**
     * Détecte les progressions stagnantes depuis {@code seuil} et retourne
     * toutes les données nécessaires (entrepreneur + coach + ressource) en
     * une seule requête avec JOIN.
     *
     * <p>Règles :
     * <ul>
     *   <li>Statut IN_PROGRESS uniquement (NOT_STARTED = jamais commencé → pas de nudge ;
     *       COMPLETED = terminé → pas de nudge).</li>
     *   <li>dernierAcces &lt;= seuil (inactif depuis au moins X heures).</li>
     *   <li>LEFT JOIN FETCH vers Projet/ProjetCoach pour remonter le coach
     *       actif principal affecté à l'entrepreneur.</li>
     * </ul>
     *
     * <p>La sous-requête sur ProjetCoach récupère un seul coach par entrepreneur
     * (COACH_PRINCIPAL en priorité). Si aucun projet actif n'existe, les champs
     * coach sont null → le DTO {@code StagnationInfo.hasCoach()} retourne false.
     *
     * @param seuil  Borne temporelle : uniquement les progressions antérieures à cette date
     * @return       Liste de {@link StagnationInfo} prête à l'emploi pour l'envoi des mails
     */
    @Query("""
        SELECT new tn.khotwa.dto.ressources.StagnationInfo(
            u.idUser,
            u.firstName,
            u.lastName,
            u.emailAddress,
            coach.idUser,
            coach.firstName,
            coach.lastName,
            coach.emailAddress,
            r.id,
            r.titre,
            p.dernierAcces,
            p.pourcentage
        )
        FROM ProgressionUtilisateur p
        JOIN tn.khotwa.entity.UserEntities.User u
            ON u.idUser = p.utilisateurId
        JOIN p.ressource r
        LEFT JOIN tn.khotwa.entity.projet.ProjetCoach pc
            ON pc.projetId IN (
                SELECT proj.id
                FROM tn.khotwa.entity.projet.Projet proj
                WHERE proj.entrepreneurId = p.utilisateurId
            )
            AND pc.actif = true
            AND pc.roleCoachProjet = tn.khotwa.enums.projectEnum.RoleCoachProjet.COACH_PRINCIPAL
        LEFT JOIN tn.khotwa.entity.UserEntities.User coach
            ON coach.idUser = pc.coachId
        WHERE p.statut = tn.khotwa.enums.ProgressStatus.IN_PROGRESS
          AND p.dernierAcces <= :seuil
          AND r.publie = true
    """)
    List<StagnationInfo> findProgressionsStagnantes(@Param("seuil") LocalDateTime seuil);
}