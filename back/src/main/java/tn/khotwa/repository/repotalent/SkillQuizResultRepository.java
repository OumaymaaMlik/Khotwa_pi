package tn.khotwa.repository.repotalent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.talent.SkillQuizResult;
import java.util.List;

@Repository
public interface SkillQuizResultRepository extends JpaRepository<SkillQuizResult, Long> {
    List<SkillQuizResult> findByTalentId(Long talentId);
}
