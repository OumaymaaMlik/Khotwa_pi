package tn.khotwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.Evenement;
import tn.khotwa.entity.Reservation;
import tn.khotwa.entity.User;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByUser(User user);
    List<Reservation> findByEvenement(Evenement evenement);
    Optional<Reservation> findByUser_IdUserAndEvenement_IdEvenement(Long idUser, Long idEvenement);
}
