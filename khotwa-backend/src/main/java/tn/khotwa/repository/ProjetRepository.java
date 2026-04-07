package tn.khotwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.Projet;
import tn.khotwa.enums.EtatValidationProjet;

import java.util.List;

public interface ProjetRepository extends JpaRepository<Projet, Long> {
    List<Projet> findByEntrepreneurId(Long entrepreneurId);
    List<Projet> findByEtatValidation(EtatValidationProjet etatValidation);
}
