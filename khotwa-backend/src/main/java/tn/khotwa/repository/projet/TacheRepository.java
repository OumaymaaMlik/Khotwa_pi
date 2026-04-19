package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.StatutTache;

import java.time.LocalDate;
import java.util.List;

public interface TacheRepository extends JpaRepository<Tache, Long> {
    List<Tache> findByProjetId(Long projetId);
    List<Tache> findByProjetIdAndStatutTache(Long projetId, StatutTache statutTache);
    List<Tache> findByStatutTache(StatutTache statutTache);
    List<Tache> findByDateFinBeforeAndStatutTacheNot(LocalDate date, StatutTache statutTache);
}
