package tn.khotwa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.Reservation;
import tn.khotwa.service.IReservationService;

import java.util.List;

@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins = "http://localhost:4200")
public class ReservationController {

    @Autowired
    private IReservationService reservationService;


    @PostMapping("/add/{idUser}/{idEvenement}")
    public Reservation addReservation(@PathVariable Long idUser, @PathVariable Long idEvenement) {
        return reservationService.addReservation(idUser, idEvenement);
    }


    @PutMapping("/cancel/{idReservation}")
    public void cancelReservation(@PathVariable Long idReservation) {
        reservationService.cancelReservation(idReservation);
    }


    @PutMapping("/cancelByuserandEvenet/user/{idUser}/event/{idEvenement}")
    public void cancelByEvent(@PathVariable Long idUser, @PathVariable Long idEvenement) {
        reservationService.cancelByUserAndEvent(idUser, idEvenement);
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