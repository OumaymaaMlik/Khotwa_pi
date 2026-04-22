package tn.khotwa.repository.collaboration;

import java.time.LocalDate;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.collaboration.WeeklyCollaborationReport;

public interface WeeklyCollaborationReportRepository extends JpaRepository<WeeklyCollaborationReport, Long> {

    boolean existsByWeekStartDate(LocalDate weekStartDate);

    Optional<WeeklyCollaborationReport> findByWeekStartDate(LocalDate weekStartDate);

    Optional<WeeklyCollaborationReport> findFirstByOrderByWeekStartDateDesc();
}

