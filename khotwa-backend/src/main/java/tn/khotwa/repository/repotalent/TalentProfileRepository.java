// TalentProfileRepository.java
package tn.khotwa.repository.repotalent;

import tn.khotwa.entity.talent.TalentProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TalentProfileRepository extends JpaRepository<TalentProfile, Long> {
    Optional<TalentProfile> findByEmail(String email);
    List<TalentProfile> findByCompetences(String competences);
    List<TalentProfile> findByNomContainingIgnoreCase(String nom);

}