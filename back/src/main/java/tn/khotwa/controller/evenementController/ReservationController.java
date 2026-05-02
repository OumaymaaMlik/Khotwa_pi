package tn.khotwa.controller.evenementController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.Evenement.Reservationhistorydto;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.service.evenementService.IReservationService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins = "http://localhost:4200")
public class ReservationController {

    @Autowired
    private IReservationService reservationService;
    @PostMapping("/add/{idUser}/{idEvenement}")
    public ResponseEntity<?> addReservation(
            @PathVariable Long idUser,
            @PathVariable Long idEvenement) {
        try {
            Reservation r = reservationService.addReservation(idUser, idEvenement);
            return ResponseEntity.ok(Map.of(
                    "status",      r.getStatus().toString(),
                    "reservation", r,
                    "message", r.getStatus().toString().equals("WAITLIST")
                            ? "Event is full. You are on the waiting list at position #" + r.getWaitlistPosition()
                            : "Reservation confirmed!"
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PutMapping("/cancel/{idReservation}")
    public ResponseEntity<?> cancelReservation(@PathVariable Long idReservation) {
        try {
            reservationService.cancelReservation(idReservation);
            return ResponseEntity.ok(Map.of("message", "Reservation cancelled."));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }


    @PutMapping("/cancel/user/{idUser}/event/{idEvenement}")
    public ResponseEntity<?> cancelByUserAndEvent(
            @PathVariable Long idUser,
            @PathVariable Long idEvenement) {
        try {
            reservationService.cancelByUserAndEvent(idUser, idEvenement);
            return ResponseEntity.ok(Map.of("message", "Reservation cancelled."));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
    @GetMapping("/my-events")
    public ResponseEntity<?> getMyEventsHistory(
            @RequestParam Long userId,
            @RequestParam(defaultValue = "ALL") String tab) {
        try {
            List<Reservationhistorydto> history = reservationService.getMyEventsHistory(userId, tab);
            return ResponseEntity.ok(history);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }


    @GetMapping("/waitlist/event/{idEvenement}")
    public ResponseEntity<List<Reservation>> getWaitlist(@PathVariable Long idEvenement) {
        return ResponseEntity.ok(reservationService.getWaitlistByEvent(idEvenement));
    }



    @GetMapping(value = "/qr/{idReservation}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getQrCode(@PathVariable Long idReservation) {
        try {
            return ResponseEntity.ok(reservationService.generateQrCode(idReservation));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/scan")
    public ResponseEntity<Map<String, Object>> scanQr(@RequestBody Map<String, String> body) {
        try {
            return ResponseEntity.ok(reservationService.scanQrCode(body.get("qrToken")));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "error",   e.getMessage()
            ));
        }
    }

    @GetMapping("/all")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/user/{idUser}")
    public List<Reservation> getReservationsByUser(@PathVariable Long idUser) {
        return reservationService.getReservationsByUser(idUser);
    }

    @GetMapping("/event/{idEvenement}")
    public List<Reservation> getReservationsByEvent(@PathVariable Long idEvenement) {
        return reservationService.getReservationsByEvent(idEvenement);
    }
}