// AnnonceRepository.java
package tn.khotwa.repository.repotalent;

import tn.khotwa.entity.talent.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Long> {
    List<Annonce> findByActiveTrue();
    List<Annonce> findByStartupId(Long startupId);
    List<Annonce> findByTypePoste(Annonce.TypePoste typePoste);
    List<Annonce> findByTitreContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String titre, String description);
}