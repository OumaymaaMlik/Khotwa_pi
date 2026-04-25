package tn.khotwa.entity.evenement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.EventsEnums.ReservationsStatus;

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
    ReservationsStatus status;

    // ── Liste d'attente ──────────────────────────────
    // Position dans la file (1 = premier, null si pas en waitlist)
    Integer waitlistPosition;

    // ── QR Code présence ─────────────────────────────
    // Token unique généré à la confirmation, scanné par l'intervenant
    @Column(unique = true)
    String qrToken;

    // Date/heure du scan (présence marquée)
    LocalDateTime attendedAt;

    @ManyToOne
    @JsonIgnore
    User user;

    @ManyToOne
    @JsonIgnore
    Evenement evenement;

    // ── Champs virtuels exposés au front ─────────────────────────────────────
    // @Transient = ignoré par JPA (pas de colonne)
    // @JsonProperty = inclus dans la réponse JSON malgré FieldDefaults(PRIVATE)
    // Lombok @Getter génère getIdEvenement() / getIdUser() automatiquement.
    // PostLoad remplit ces champs APRÈS que JPA ait chargé les relations.

    @Transient
    @JsonProperty("idEvenement")
    Long idEvenement;

    @Transient
    @JsonProperty("idUser")
    Long idUser;

    @PostLoad
    @PostPersist
    @PostUpdate
    void syncIds() {
        this.idEvenement = (evenement != null) ? evenement.getIdEvenement() : null;
        this.idUser      = (user      != null) ? user.getIdUser()           : null;
    }
}