// CandidatureRepository.java
package tn.khotwa.repository.repotalent;

import tn.khotwa.entity.talent.Candidature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CandidatureRepository extends JpaRepository<Candidature, Long> {
    List<Candidature> findByAnnonceId(Long annonceId);
    List<Candidature> findByTalentId(Long talentId);
    List<Candidature> findByStatut(Candidature.StatutCandidature statut);

    @Query("SELECT c FROM Candidature c WHERE c.annonce.id = :annonceId ORDER BY c.matchingScore DESC")
    List<Candidature> findByAnnonceIdOrderByScoreDesc(Long annonceId);

}