package tn.khotwa.repository.projectRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.projectEntity.Projet;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;

import java.util.List;

public interface ProjetRepository extends JpaRepository<Projet, Long> {
    List<Projet> findByEntrepreneurId(Long entrepreneurId);
    List<Projet> findByEtatValidation(EtatValidationProjet etatValidation);
}
