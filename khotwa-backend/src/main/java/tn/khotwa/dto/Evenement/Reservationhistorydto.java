package tn.khotwa.dto.Evenement;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.khotwa.enums.EventsEnums.ReservationsStatus;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * DTO retourné par GET /reservation/my-events?userId=X
 * Embarque les champs essentiels de l'événement pour éviter les
 * problèmes de sérialisation JSON (relations @JsonIgnore).
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reservationhistorydto {

    // ── Réservation ───────────────────────────────────────────────────────────
    private Long             idReservation;
    private String           dateReservation;  // ISO string
    private ReservationsStatus status;
    private Integer          waitlistPosition;
    private String           qrToken;
    private String           attendedAt;

    // ── Événement embarqué ────────────────────────────────────────────────────
    private Long   idEvenement;
    private String titre;
    private String description;
    private LocalDate date;
    private LocalTime heure;
    private String intervenant;
    private String lienMeet;
    private int    placesTotal;
    private int    placesRestantes;
    private String type;      // EvenementType.name()
    private String planType;  // PlanType.name()
    private String statut;    // EvenementStatus.name()
}

