package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.projectEnum.StatutTache;

import java.time.LocalDate;
import java.util.List;
@Repository
public interface TacheRepository extends JpaRepository<Tache, Long> {
    List<Tache> findByProjetId(Long projetId);
    List<Tache> findByProjetIdAndStatutTache(Long projetId, StatutTache statutTache);
    List<Tache> findByStatutTache(StatutTache statutTache);
    List<Tache> findByDateFinBeforeAndStatutTacheNot(LocalDate date, StatutTache statutTache);
}
