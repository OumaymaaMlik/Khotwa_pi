package tn.khotwa.service.EvenementService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.repository.EvenementRepo.ReservationRepository;


import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReminderService {

    private final ReservationRepository reservationRepo;
    private final EmailServiceEvents emailService;

    public int sendTomorrowReminders() {
        LocalDate tomorrow = LocalDate.now().plusDays(1);
        List<Reservation> reservations = reservationRepo.findByEvenementDate(tomorrow);

        int count = 0;
        for (Reservation r : reservations) {
            try {
                emailService.sendEventReminder(r);
                count++;
            } catch (Exception e) {
                System.err.println("Email failed for reservation "
                        + r.getIdReservation() + ": " + e.getMessage());
            }
        }
        return count;
    }
}
