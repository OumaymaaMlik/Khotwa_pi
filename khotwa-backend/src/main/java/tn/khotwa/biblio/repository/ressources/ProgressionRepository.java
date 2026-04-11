package tn.khotwa.biblio.repository.ressources;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.biblio.entity.ressources.ProgressionUtilisateur;
import tn.khotwa.biblio.enums.ProgressStatus;
import tn.khotwa.biblio.projection.ressources.ProgressionView;

import java.util.List;
import java.util.Optional;

// FIX: aligné avec le champ utilisateurId (était userID dans l'entité)
public interface ProgressionRepository extends JpaRepository<ProgressionUtilisateur, Long> {

    Optional<ProgressionView> findProjectedByUtilisateurIdAndRessourceId(
        Long utilisateurId, Long ressourceId
    );

    List<ProgressionView> findByUtilisateurId(Long utilisateurId);

    Optional<ProgressionUtilisateur> findByUtilisateurIdAndRessourceId(
        Long utilisateurId, Long ressourceId
    );

    long countByUtilisateurIdAndStatut(Long utilisateurId, ProgressStatus statut);

    @Query("""
        SELECT p FROM ProgressionUtilisateur p
        WHERE p.utilisateurId = :userId
          AND p.ressource.id IN :ressourceIds
    """)
    List<ProgressionView> findByUtilisateurIdAndRessourceIds(
        @Param("userId")       Long userId,
        @Param("ressourceIds") List<Long> ressourceIds
    );
}
