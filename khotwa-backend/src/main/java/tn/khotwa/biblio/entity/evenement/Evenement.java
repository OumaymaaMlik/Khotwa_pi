package tn.khotwa.biblio.entity.evenement;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.EvenementType;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

// Entité Evenement — module Gestion des Événements
// EvenementType réutilisé depuis tn.khotwa.biblio.enums (pas de redondance)
// User réutilisé depuis tn.khotwa.biblio.entity.subscription
@Entity
@Table(name = "evenement")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvenement;

    @Column(nullable = false)
    private String titre;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private LocalDate date;

    private LocalTime heure;

    private String intervenant;

    @Column(length = 512)
    private String lienMeet;

    @Column(nullable = false)
    private int placesTotal;

    @Column(nullable = false)
    private int placesRestantes;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EvenementType type;

    // Créateur de l'événement (ADMIN ou COACH)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private User creator;

    // Participants inscrits à l'événement
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "evenement_participants",
        joinColumns = @JoinColumn(name = "evenement_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @Builder.Default
    private List<User> participants = new ArrayList<>();

    // Statut : PENDING, PUBLISHED, CANCELLED, DONE
    @Column(name = "statut", nullable = false)
    @Builder.Default
    private String statut = "PENDING";
}
