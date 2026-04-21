package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;

import java.util.List;
@Repository
public interface ProjetRepository extends JpaRepository<Projet, Long> {
    List<Projet> findByEntrepreneurId(Long entrepreneurId);
    List<Projet> findByEtatValidation(EtatValidationProjet etatValidation);
}
