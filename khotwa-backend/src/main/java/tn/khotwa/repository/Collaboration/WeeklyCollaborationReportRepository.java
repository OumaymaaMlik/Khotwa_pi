package tn.khotwa.repository.Collaboration;

import java.time.LocalDate;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.Collaboration.WeeklyCollaborationReport;

public interface WeeklyCollaborationReportRepository extends JpaRepository<WeeklyCollaborationReport, Long> {

    boolean existsByWeekStartDate(LocalDate weekStartDate);

    Optional<WeeklyCollaborationReport> findByWeekStartDate(LocalDate weekStartDate);

    Optional<WeeklyCollaborationReport> findFirstByOrderByWeekStartDateDesc();
}
