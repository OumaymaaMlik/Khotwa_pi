package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.enums.EtatValidationProjet;

import java.util.List;

public interface ProjetRepository extends JpaRepository<Projet, Long> {

    List<Projet> findByEntrepreneurId(Long entrepreneurId);

    List<Projet> findByEtatValidation(EtatValidationProjet etatValidation);

    @Query("""
        SELECT p.secteur FROM Projet p
        WHERE p.entrepreneurId = :entrepreneurId
        ORDER BY p.dateCreation DESC
    """)
    List<String> findSecteursParEntrepreneur(@Param("entrepreneurId") Long entrepreneurId);

    @Query("""
        SELECT DISTINCT p.entrepreneurId FROM Projet p
        JOIN ProjetCoach pc ON pc.projetId = p.id
        WHERE pc.coachId = :coachId AND pc.actif = true
    """)
    List<Long> findEntrepreneurIdsByCoachId(@Param("coachId") Long coachId);


    @Query("""
        SELECT COUNT(p) > 0 FROM Projet p
        JOIN ProjetCoach pc ON pc.projetId = p.id
        WHERE pc.coachId = :coachId 
          AND p.entrepreneurId = :entrepreneurId 
          AND pc.actif = true
    """)
    boolean existsByCoachIdAndEntrepreneurId(@Param("coachId") Long coachId, @Param("entrepreneurId") Long entrepreneurId);
}