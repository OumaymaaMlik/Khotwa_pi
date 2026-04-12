package tn.khotwa.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.khotwa.enums.EvenementStatus;
import tn.khotwa.enums.EvenementType;
import tn.khotwa.enums.PlanType;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idEvenement;

    String titre;
    String description;
    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate date;

    @JsonFormat(pattern = "HH:mm:ss")
    LocalTime heure;
    String intervenant;
    String lienMeet;

    int placesTotal;
    int placesRestantes;

    @Enumerated(EnumType.STRING)
    EvenementType type;

    @ManyToOne
    @JsonIgnore
    private User creator;

    @Enumerated(EnumType.STRING)
    private EvenementStatus statut;

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<User> participants = new ArrayList<>();

    @OneToMany(mappedBy = "evenement")
    @JsonIgnore
    List<Reservation> reservations;

    @Enumerated(EnumType.STRING)
    @Column(name = "plan_type")
    private PlanType planType;


}