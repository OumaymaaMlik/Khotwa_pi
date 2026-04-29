package tn.khotwa.service.EvenementService;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.khotwa.DTO.Evenement.Reservationhistorydto;
import tn.khotwa.entity.User.User;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.enums.EventsEnums.EvenementStatus;
import tn.khotwa.enums.EventsEnums.ReservationsStatus;
import tn.khotwa.enums.PlanType;
import tn.khotwa.repository.EvenementRepo.EvenementRepository;
import tn.khotwa.repository.EvenementRepo.ReservationRepository;
import tn.khotwa.repository.User.UserRepository;

import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ReservationService implements IReservationService {

    private static final int CANCELLATION_DEADLINE_HOURS = 24;

    @Autowired private ReservationRepository reservationRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private EvenementRepository   evenementRepository;
    @Autowired private EmailServiceEvents    emailService;

    private int getMonthlyLimit(PlanType plan) {
        return switch (plan) {
            case FREE          -> 2;
            case PREMIUM       -> 5;
            case INSTITUTIONAL -> Integer.MAX_VALUE;
        };
    }

    @Override
    @Transactional
    public Reservation addReservation(Long idUser, Long idEvenement) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Evenement event = evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        if (event.getStatut() != EvenementStatus.ACCEPTED) {
            throw new RuntimeException(
                    "This event is not yet accepted. Only ACCEPTED events can be reserved.");
        }

        boolean alreadyExists =
                reservationRepository.existsByUser_IdUserAndEvenement_IdEvenementAndStatus(
                        idUser, idEvenement, ReservationsStatus.CONFIRMED) ||
                        reservationRepository.existsByUser_IdUserAndEvenement_IdEvenementAndStatus(
                                idUser, idEvenement, ReservationsStatus.WAITLIST);

        if (alreadyExists) {
            throw new RuntimeException("You are already registered or on the waitlist for this event.");
        }

        PlanType plan = user.getPlanType() != null ? user.getPlanType() : PlanType.FREE;
        int limit = getMonthlyLimit(plan);

        LocalDateTime startOfMonth     = LocalDate.now().withDayOfMonth(1).atStartOfDay();
        LocalDateTime startOfNextMonth = startOfMonth.plusMonths(1);

        long countThisMonth = reservationRepository.countConfirmedByUserAndTypeThisMonth(
                idUser, event.getType(), startOfMonth, startOfNextMonth);

        if (countThisMonth >= limit) {
            throw new RuntimeException(
                    "Monthly limit reached: you can only book " + limit +
                            " " + event.getType() + " event(s) per month with your " + plan + " plan.");
        }

        if (event.getPlacesRestantes() > 0) {
            Reservation reservation = new Reservation();
            reservation.setUser(user);
            reservation.setEvenement(event);
            reservation.setDateReservation(LocalDateTime.now());
            reservation.setStatus(ReservationsStatus.CONFIRMED);
            reservation.setQrToken(UUID.randomUUID().toString());

            event.setPlacesRestantes(event.getPlacesRestantes() - 1);
            evenementRepository.save(event);


            Reservation saved = reservationRepository.save(reservation);
            return saved;

        } else {
            int nextPosition = reservationRepository.findMaxWaitlistPosition(event) + 1;

            Reservation waitlistReservation = new Reservation();
            waitlistReservation.setUser(user);
            waitlistReservation.setEvenement(event);
            waitlistReservation.setDateReservation(LocalDateTime.now());
            waitlistReservation.setStatus(ReservationsStatus.WAITLIST);
            waitlistReservation.setWaitlistPosition(nextPosition);

            Reservation saved = reservationRepository.save(waitlistReservation);
            try { emailService.sendWaitlistAdded(saved); } catch (Exception ignored) {}
            return saved;
        }
    }

    @Override
    @Transactional
    public void cancelReservation(Long idReservation) {
        Reservation reservation = reservationRepository.findById(idReservation)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        if (ReservationsStatus.CANCELLED.equals(reservation.getStatus())) {
            throw new RuntimeException("Reservation already cancelled.");
        }
        if (ReservationsStatus.ATTENDED.equals(reservation.getStatus())) {
            throw new RuntimeException("Attended reservations cannot be cancelled.");
        }

        enforceCancellationWindow(reservation.getEvenement());
        boolean wasConfirmed = ReservationsStatus.CONFIRMED.equals(reservation.getStatus());

        reservation.setStatus(ReservationsStatus.CANCELLED);
        reservation.setWaitlistPosition(null);
        reservationRepository.save(reservation);

        if (wasConfirmed) {
            Evenement event = reservation.getEvenement();
            event.setPlacesRestantes(event.getPlacesRestantes() + 1);
            evenementRepository.save(event);
            promoteFromWaitlist(event);
        }
    }

    @Override
    @Transactional
    public void cancelByUserAndEvent(Long idUser, Long idEvenement) {
        Reservation reservation = reservationRepository
                .findFirstByUser_IdUserAndEvenement_IdEvenementAndStatusInOrderByDateReservationDesc(
                        idUser,
                        idEvenement,
                        Arrays.asList(
                                ReservationsStatus.CONFIRMED,
                                ReservationsStatus.WAITLIST,
                                ReservationsStatus.PENDING
                        )
                )
                .orElseThrow(() -> new RuntimeException("Active reservation not found for this user and event."));

        boolean wasConfirmed = ReservationsStatus.CONFIRMED.equals(reservation.getStatus());
        enforceCancellationWindow(reservation.getEvenement());

        reservation.setStatus(ReservationsStatus.CANCELLED);
        reservation.setWaitlistPosition(null);
        reservationRepository.save(reservation);

        if (wasConfirmed) {
            Evenement event = reservation.getEvenement();
            event.setPlacesRestantes(event.getPlacesRestantes() + 1);
            evenementRepository.save(event);
            promoteFromWaitlist(event);
        }
    }

    @Override
    public List<Reservationhistorydto> getMyEventsHistory(Long userId, String tab) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Reservation> all = reservationRepository.findByUserWithEvenement(user);

        LocalDateTime now = LocalDateTime.now();

        List<Reservation> filtered = all.stream()
                .filter(r -> r.getEvenement() != null)
                .filter(r -> {
                    Evenement ev = r.getEvenement();
                    boolean isCancelledBooking = ReservationsStatus.CANCELLED.equals(r.getStatus())
                            || EvenementStatus.CANCELLED.equals(ev.getStatut());
                    boolean isPast = getEventDateTime(ev).isBefore(now);

                    return switch (tab.toUpperCase()) {
                        case "UPCOMING"  -> !isCancelledBooking && !isPast
                                && !ReservationsStatus.PENDING.equals(r.getStatus());
                        case "PAST"      -> !isCancelledBooking
                                && (isPast || ReservationsStatus.ATTENDED.equals(r.getStatus()));
                        case "CANCELLED" -> isCancelledBooking;
                        case "PENDING"   -> ReservationsStatus.PENDING.equals(r.getStatus());
                        default          -> true; // ALL
                    };
                })
                .sorted((a, b) -> {
                    long aTs = getEventDateTime(a.getEvenement()).toEpochSecond(java.time.ZoneOffset.UTC);
                    long bTs = getEventDateTime(b.getEvenement()).toEpochSecond(java.time.ZoneOffset.UTC);
                    // UPCOMING : tri croissant ; autres : décroissant
                    return "UPCOMING".equalsIgnoreCase(tab)
                            ? Long.compare(aTs, bTs)
                            : Long.compare(bTs, aTs);
                })
                .collect(Collectors.toList());

        return filtered.stream()
                .map(this::toHistoryDto)
                .collect(Collectors.toList());
    }

    private Reservationhistorydto toHistoryDto(Reservation r) {
        Evenement ev = r.getEvenement();
        return Reservationhistorydto.builder()
                .idReservation(r.getIdReservation())
                .dateReservation(r.getDateReservation() != null ? r.getDateReservation().toString() : null)
                .status(r.getStatus())
                .waitlistPosition(r.getWaitlistPosition())
                .qrToken(r.getQrToken())
                .attendedAt(r.getAttendedAt() != null ? r.getAttendedAt().toString() : null)

                .idEvenement(ev.getIdEvenement())
                .titre(ev.getTitre())
                .description(ev.getDescription())
                .date(ev.getDate())
                .heure(ev.getHeure())
                .intervenant(ev.getIntervenant())
                .lienMeet(ev.getLienMeet())
                .placesTotal(ev.getPlacesTotal())
                .placesRestantes(ev.getPlacesRestantes())
                .type(ev.getType() != null ? ev.getType().name() : null)
                .planType(ev.getPlanType() != null ? ev.getPlanType().name() : null)
                .statut(ev.getStatut() != null ? ev.getStatut().name() : null)
                .build();
    }

    private LocalDateTime getEventDateTime(Evenement ev) {
        LocalTime t = ev.getHeure() != null ? ev.getHeure() : LocalTime.MIDNIGHT;
        return LocalDateTime.of(ev.getDate(), t);
    }

    private void enforceCancellationWindow(Evenement event) {
        LocalDateTime deadline = getEventDateTime(event).minusHours(CANCELLATION_DEADLINE_HOURS);
        if (LocalDateTime.now().isAfter(deadline)) {
            throw new RuntimeException(
                    "Cancellations are only allowed up to " + CANCELLATION_DEADLINE_HOURS + " hours before the event.");
        }
    }

    private void promoteFromWaitlist(Evenement event) {
        List<Reservation> waitlist = reservationRepository.findWaitlistByEvent(event);
        if (waitlist.isEmpty()) return;

        Reservation first = waitlist.get(0);
        first.setStatus(ReservationsStatus.CONFIRMED);
        first.setWaitlistPosition(null);
        first.setQrToken(UUID.randomUUID().toString());

        event.setPlacesRestantes(event.getPlacesRestantes() - 1);
        evenementRepository.save(event);
        reservationRepository.save(first);

        for (int i = 1; i < waitlist.size(); i++) {
            waitlist.get(i).setWaitlistPosition(i);
            reservationRepository.save(waitlist.get(i));
        }
        try { emailService.sendWaitlistConfirmation(first); } catch (Exception ignored) {}
    }

    @Override
    public Map<String, String> generateQrCode(Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        if (!ReservationsStatus.CONFIRMED.equals(reservation.getStatus())) {
            throw new RuntimeException("QR code only available for CONFIRMED reservations.");
        }

        String meetUrl = reservation.getEvenement().getLienMeet();
        if (meetUrl == null || meetUrl.isBlank()) {
            throw new RuntimeException("No meet link configured for this event.");
        }
        if (!meetUrl.startsWith("http://") && !meetUrl.startsWith("https://")) {
            meetUrl = "https://" + meetUrl;
        }

        try {
            QRCodeWriter writer = new QRCodeWriter();
            BitMatrix matrix = writer.encode(meetUrl, BarcodeFormat.QR_CODE, 250, 250);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(matrix, "PNG", out);
            String qrBase64 = "data:image/png;base64," + Base64.getEncoder().encodeToString(out.toByteArray());

            return Map.of(
                    "qrCode",   qrBase64,
                    "lienMeet", meetUrl,
                    "titre",    reservation.getEvenement().getTitre()
            );
        } catch (Exception e) {
            throw new RuntimeException("QR code generation failed: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public Map<String, Object> scanQrCode(String qrToken) {
        Reservation reservation = reservationRepository.findByQrToken(qrToken)
                .orElseThrow(() -> new RuntimeException("Invalid QR code."));

        if (ReservationsStatus.ATTENDED.equals(reservation.getStatus())) {
            return Map.of(
                    "success", false,
                    "message", "Already marked as attended.",
                    "user",    reservation.getUser().getFirstName() + " " + reservation.getUser().getLastName(),
                    "event",   reservation.getEvenement().getTitre()
            );
        }
        if (!ReservationsStatus.CONFIRMED.equals(reservation.getStatus())) {
            throw new RuntimeException("This reservation is not CONFIRMED.");
        }

        reservation.setStatus(ReservationsStatus.ATTENDED);
        reservation.setAttendedAt(LocalDateTime.now());
        reservationRepository.save(reservation);


        return Map.of(
                "success",    true,
                "message",    "Attendance confirmed!",
                "user",       reservation.getUser().getFirstName() + " " + reservation.getUser().getLastName(),
                "event",      reservation.getEvenement().getTitre(),
                "attendedAt", reservation.getAttendedAt().toString()
        );
    }

    @Override
    public List<Reservation> getReservationsByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reservationRepository.findByUser(user);
    }

    @Override
    public List<Reservation> getReservationsByEvent(Long eventId) {
        Evenement event = evenementRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return reservationRepository.findByEvenement(event);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> getWaitlistByEvent(Long eventId) {
        Evenement event = evenementRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return reservationRepository.findWaitlistByEvent(event);
    }
}
