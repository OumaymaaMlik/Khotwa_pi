package tn.khotwa.biblio.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.biblio.entity.projet.SousTache;
import tn.khotwa.biblio.enums.StatutTache;

import java.time.LocalDate;
import java.util.List;

public interface SousTacheRepository extends JpaRepository<SousTache, Long> {
    List<SousTache> findByTacheId(Long tacheId);
    List<SousTache> findByStatutSousTache(StatutTache statutTache);
    List<SousTache> findByDateFinBeforeAndStatutSousTacheNot(LocalDate date, StatutTache statutTache);
}
