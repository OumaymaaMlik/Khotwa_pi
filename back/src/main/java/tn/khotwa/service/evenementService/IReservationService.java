package tn.khotwa.service.evenementService;
import tn.khotwa.dto.Evenement.Reservationhistorydto;
import tn.khotwa.entity.evenement.Reservation;
import java.util.List;
import java.util.Map;
public interface IReservationService {



    Reservation addReservation(Long userId, Long eventId);
    void cancelReservation(Long reservationId);
    void cancelByUserAndEvent(Long idUser, Long idEvenement);
    List<Reservation> getReservationsByUser(Long userId);
    List<Reservation> getReservationsByEvent(Long eventId);
    List<Reservation> getAllReservations();
    List<Reservationhistorydto> getMyEventsHistory(Long userId, String tab);
    List<Reservation> getWaitlistByEvent(Long eventId);
    Map<String, String> generateQrCode(Long reservationId);
    Map<String, Object> scanQrCode(String qrToken);

}