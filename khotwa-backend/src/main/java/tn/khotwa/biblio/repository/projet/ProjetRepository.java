package tn.khotwa.biblio.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.biblio.entity.projet.Projet;
import tn.khotwa.biblio.enums.EtatValidationProjet;

import java.util.List;
import java.util.Optional;

public interface ProjetRepository extends JpaRepository<Projet, Long> {

    List<Projet> findByEntrepreneurId(Long entrepreneurId);

    List<Projet> findByEtatValidation(EtatValidationProjet etatValidation);

    // Trouver le secteur du projet actif d'un entrepreneur
    // On prend le dernier projet créé (le plus récent)
    @Query("""
        SELECT p.secteur FROM Projet p
        WHERE p.entrepreneurId = :entrepreneurId
        ORDER BY p.dateCreation DESC
    """)
    List<String> findSecteursParEntrepreneur(@Param("entrepreneurId") Long entrepreneurId);

    // Trouver tous les entrepreneurIds des projets d'un coach actif
    @Query("""
        SELECT DISTINCT p.entrepreneurId FROM Projet p
        JOIN ProjetCoach pc ON pc.projetId = p.id
        WHERE pc.coachId = :coachId AND pc.actif = true
    """)
    List<Long> findEntrepreneurIdsByCoachId(@Param("coachId") Long coachId);
}
