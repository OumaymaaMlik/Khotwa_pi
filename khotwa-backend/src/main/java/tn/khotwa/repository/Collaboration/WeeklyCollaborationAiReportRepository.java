package tn.khotwa.repository.collaboration;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.collaboration.WeeklyCollaborationAiReport;

public interface WeeklyCollaborationAiReportRepository extends JpaRepository<WeeklyCollaborationAiReport, Long> {

    Optional<WeeklyCollaborationAiReport> findByWeeklyReportId(Long weeklyReportId);
}