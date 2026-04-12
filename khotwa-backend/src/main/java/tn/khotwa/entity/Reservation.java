package tn.khotwa.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.khotwa.enums.ReservationStatus;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idReservation;

    LocalDateTime dateReservation;

    @Enumerated(EnumType.STRING)
    ReservationStatus status;
    @ManyToOne
    User user;
    @ManyToOne
    Evenement evenement;
}