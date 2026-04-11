package tn.khotwa.biblio.repository.ressources;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.biblio.entity.ressources.Tag;
import tn.khotwa.biblio.projection.ressources.TagView;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {

    List<TagView> findAllProjectedBy();

    Optional<Tag> findByNom(String nom);
}
