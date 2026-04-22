package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;

import java.util.List;
@Repository
public interface ProjetRepository extends JpaRepository<Projet, Long> {
    List<Projet> findByEtatValidation(EtatValidationProjet etatValidation);
    List<Projet> findByEntrepreneurId(Long entrepreneurId);
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

