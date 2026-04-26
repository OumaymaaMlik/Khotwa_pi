package tn.khotwa.repository.EvenementRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.enums.EventsEnums.EvenementType;
import tn.khotwa.enums.EventsEnums.ReservationsStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByUser(User user);
    List<Reservation> findByEvenement(Evenement evenement);

    Optional<Reservation> findByUser_IdUserAndEvenement_IdEvenement(Long idUser, Long idEvenement);

    Optional<Reservation> findFirstByUser_IdUserAndEvenement_IdEvenementAndStatusInOrderByDateReservationDesc(
            Long idUser,
            Long idEvenement,
            Collection<ReservationsStatus> statuses
    );


    @Query("SELECT r FROM Reservation r " +
            "JOIN FETCH r.evenement e " +
            "WHERE r.user = :user")
    List<Reservation> findByUserWithEvenement(@Param("user") User user);


    @Query("SELECT r FROM Reservation r " +
            "JOIN FETCH r.user u " +
            "JOIN FETCH r.evenement e " +
            "WHERE e.date = :date")
    List<Reservation> findByEvenementDate(@Param("date") LocalDate date);


    @Query("SELECT r FROM Reservation r WHERE r.evenement = :event " +
            "AND r.status = 'WAITLIST' " +
            "ORDER BY r.waitlistPosition ASC")
    List<Reservation> findWaitlistByEvent(@Param("event") Evenement event);

    @Query("SELECT COALESCE(MAX(r.waitlistPosition), 0) FROM Reservation r " +
            "WHERE r.evenement = :event AND r.status = 'WAITLIST'")
    int findMaxWaitlistPosition(@Param("event") Evenement event);

    boolean existsByUser_IdUserAndEvenement_IdEvenementAndStatus(
            Long idUser, Long idEvenement, ReservationsStatus status);


    @Query("SELECT COUNT(r) FROM Reservation r " +
            "WHERE r.user.idUser = :userId " +
            "AND r.evenement.type = :type " +
            "AND r.status = 'CONFIRMED' " +
            "AND r.dateReservation >= :startOfMonth " +
            "AND r.dateReservation < :startOfNextMonth")
    long countConfirmedByUserAndTypeThisMonth(
            @Param("userId") Long userId,
            @Param("type") EvenementType type,
            @Param("startOfMonth") LocalDateTime startOfMonth,
            @Param("startOfNextMonth") LocalDateTime startOfNextMonth
    );

    Optional<Reservation> findByQrToken(String qrToken);

    List<Reservation> findByEvenementAndStatus(Evenement evenement, ReservationsStatus status);
}