package tn.khotwa.entity.evenement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.eventsEnums.ReservationsStatus;

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
    Integer waitlistPosition;
    @Column(unique = true)
    String qrToken;
    LocalDateTime attendedAt;

    @ManyToOne
    @JsonIgnore
    User user;

    @ManyToOne
    @JsonIgnore
    Evenement evenement;

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