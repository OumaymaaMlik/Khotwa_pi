package tn.khotwa.biblio.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.biblio.entity.projet.ProjetCoach;
import tn.khotwa.biblio.enums.RoleCoachProjet;

import java.util.List;
import java.util.Optional;

public interface ProjetCoachRepository extends JpaRepository<ProjetCoach, Long> {
    List<ProjetCoach> findByProjetId(Long projetId);
    List<ProjetCoach> findByProjetIdAndActifTrue(Long projetId);
    List<ProjetCoach> findByCoachIdAndActifTrue(Long coachId);
    Optional<ProjetCoach> findByProjetIdAndCoachIdAndActifTrue(Long projetId, Long coachId);
    long countByCoachIdAndActifTrue(Long coachId);
    boolean existsByProjetIdAndRoleCoachProjetAndActifTrue(Long projetId, RoleCoachProjet roleCoachProjet);
}
