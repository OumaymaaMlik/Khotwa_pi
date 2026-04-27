package tn.khotwa.dto.Evenement;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.khotwa.enums.EventsEnums.ReservationsStatus;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reservationhistorydto {

    private Long             idReservation;
    private String           dateReservation;
    private ReservationsStatus status;
    private Integer          waitlistPosition;
    private String           qrToken;
    private String           attendedAt;


    private Long   idEvenement;
    private String titre;
    private String description;
    private LocalDate date;
    private LocalTime heure;
    private String intervenant;
    private String lienMeet;
    private int    placesTotal;
    private int    placesRestantes;
    private String type;
    private String planType;
    private String statut;
}

