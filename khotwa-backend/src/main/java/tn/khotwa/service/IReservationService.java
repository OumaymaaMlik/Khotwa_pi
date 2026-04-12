package tn.khotwa.service;
import tn.khotwa.entity.Reservation;
import java.util.List;

public interface IReservationService {

    Reservation addReservation(Long userId, Long eventId);
    void cancelReservation(Long reservationId);
    List<Reservation> getReservationsByUser(Long userId);
    List<Reservation> getReservationsByEvent(Long eventId);
    List<Reservation> getAllReservations();
    void cancelByUserAndEvent(Long idUser, Long idEvenement);
}
