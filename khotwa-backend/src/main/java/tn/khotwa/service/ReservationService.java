package tn.khotwa.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.Evenement;
import tn.khotwa.entity.Reservation;
import tn.khotwa.enums.ReservationStatus;
import tn.khotwa.entity.User;
import tn.khotwa.repository.EvenementRepository;
import tn.khotwa.repository.ReservationRepository;
import tn.khotwa.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationService implements IReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EvenementRepository evenementRepository;


    @Override
    @Transactional
    public Reservation addReservation(Long idUser, Long idEvenement) {
        User user = userRepository.findById(idUser).orElseThrow(() -> new RuntimeException("User not found"));
        Evenement event = evenementRepository.findById(idEvenement).orElseThrow(() -> new RuntimeException("Event not found"));

        if (event.getPlacesRestantes() <= 0) {
            throw new RuntimeException("No available spots");
        }

        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setEvenement(event);
        reservation.setDateReservation(LocalDateTime.now());
        reservation.setStatus(ReservationStatus.CONFIRMED);

        event.setPlacesRestantes(event.getPlacesRestantes() - 1);
        evenementRepository.save(event);

        return reservationRepository.save(reservation);
    }

    @Override
    @Transactional
    public void cancelReservation(Long idReservation) {
        Reservation reservation = reservationRepository.findById(idReservation)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        reservation.setStatus(ReservationStatus.CANCELLED);
        reservation.getEvenement().setPlacesRestantes(reservation.getEvenement().getPlacesRestantes() + 1);

        evenementRepository.save(reservation.getEvenement());
        reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getReservationsByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return reservationRepository.findByUser(user);
    }

    @Override
    public List<Reservation> getReservationsByEvent(Long eventId) {
        Evenement event = evenementRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
        return reservationRepository.findByEvenement(event);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    @Transactional
    public void cancelByUserAndEvent(Long idUser, Long idEvenement) {
        Reservation reservation = reservationRepository
                .findByUser_IdUserAndEvenement_IdEvenement(idUser, idEvenement)
                .orElseThrow(() -> new RuntimeException("Réservation introuvable pour cet utilisateur et cet événement"));
        reservation.setStatus(ReservationStatus.CANCELLED);
        reservationRepository.save(reservation);
    }
}