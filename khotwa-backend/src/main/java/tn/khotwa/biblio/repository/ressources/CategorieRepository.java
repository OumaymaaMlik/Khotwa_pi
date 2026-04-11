package tn.khotwa.biblio.repository.ressources;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.biblio.entity.ressources.Categorie;
import tn.khotwa.biblio.projection.ressources.CategorieView;

import java.util.List;
import java.util.Optional;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {

    List<CategorieView> findAllProjectedBy();

    Optional<CategorieView> findProjectedById(Long id);


    boolean existsByNom(String nom);
}
