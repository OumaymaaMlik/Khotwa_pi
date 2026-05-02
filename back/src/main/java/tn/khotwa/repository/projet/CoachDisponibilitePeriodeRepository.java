package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.projet.CoachDisponibilitePeriode;

import java.time.LocalDate;
import java.util.List;
@Repository
public interface CoachDisponibilitePeriodeRepository extends JpaRepository<CoachDisponibilitePeriode, Long> {

    List<CoachDisponibilitePeriode> findByCoachIdAndActifTrue(Long coachId);

    List<CoachDisponibilitePeriode> findByCoachIdAndActifTrueAndDateDebutLessThanEqualAndDateFinGreaterThanEqual(
        Long coachId,
        LocalDate dateFin,
        LocalDate dateDebut
    );
}
