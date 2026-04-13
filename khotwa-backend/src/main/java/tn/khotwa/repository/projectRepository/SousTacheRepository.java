package tn.khotwa.repository.projectRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.projectEntity.SousTache;
import tn.khotwa.enums.projectEnum.StatutTache;

import java.time.LocalDate;
import java.util.List;

public interface SousTacheRepository extends JpaRepository<SousTache, Long> {
    List<SousTache> findByTacheId(Long tacheId);
    List<SousTache> findByStatutSousTache(StatutTache statutTache);
    List<SousTache> findByDateFinBeforeAndStatutSousTacheNot(LocalDate date, StatutTache statutTache);
}
