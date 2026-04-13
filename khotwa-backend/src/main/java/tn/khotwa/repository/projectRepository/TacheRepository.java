package tn.khotwa.repository.projectRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.projectEntity.Tache;
import tn.khotwa.enums.projectEnum.StatutTache;

import java.time.LocalDate;
import java.util.List;

public interface TacheRepository extends JpaRepository<Tache, Long> {
    List<Tache> findByProjetId(Long projetId);
    List<Tache> findByProjetIdAndStatutTache(Long projetId, StatutTache statutTache);
    List<Tache> findByStatutTache(StatutTache statutTache);
    List<Tache> findByDateFinBeforeAndStatutTacheNot(LocalDate date, StatutTache statutTache);
}
