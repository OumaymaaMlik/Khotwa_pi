package tn.khotwa.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import tn.khotwa.enums.PlanType;
import tn.khotwa.enums.Role;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idUser;

    String nom;
    String prenom;

    @Column(unique = true, nullable = false)
    String email;

    String phoneNumber;

    String avatar;

    String startup;

    @Enumerated(EnumType.STRING)
    Role role;

    @Enumerated(EnumType.STRING)
    PlanType planType;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Evenement> createdEvents = new ArrayList<>();
    @JsonIgnore
    @ManyToMany(mappedBy = "participants", fetch = FetchType.LAZY)
    private List<Evenement> eventsParticipated ;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    List<Reservation> reservations;

}