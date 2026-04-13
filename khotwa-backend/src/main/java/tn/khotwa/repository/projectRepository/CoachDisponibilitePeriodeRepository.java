package tn.khotwa.repository.projectRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.projectEntity.CoachDisponibilitePeriode;

import java.time.LocalDate;
import java.util.List;

public interface CoachDisponibilitePeriodeRepository extends JpaRepository<CoachDisponibilitePeriode, Long> {

    List<CoachDisponibilitePeriode> findByCoachIdAndActifTrue(Long coachId);

    List<CoachDisponibilitePeriode> findByCoachIdAndActifTrueAndDateDebutLessThanEqualAndDateFinGreaterThanEqual(
        Long coachId,
        LocalDate dateFin,
        LocalDate dateDebut
    );
}
