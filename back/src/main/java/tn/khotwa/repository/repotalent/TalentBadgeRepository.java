package tn.khotwa.repository.repotalent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.talent.TalentBadge;
import java.util.List;

@Repository
public interface TalentBadgeRepository extends JpaRepository<TalentBadge, Long> {
    List<TalentBadge> findByTalentId(Long talentId);
}
