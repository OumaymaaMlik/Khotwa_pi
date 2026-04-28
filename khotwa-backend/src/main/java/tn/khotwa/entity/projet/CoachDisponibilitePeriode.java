package tn.khotwa.entity.projet;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.projectEnum.DisponibilitePeriodeStatut;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "coach_disponibilite_periodes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoachDisponibilitePeriode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "coach_id", nullable = false)
    private Long coachId;

    @Column(nullable = false)
    private LocalDate dateDebut;

    @Column(nullable = false)
    private LocalDate dateFin;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DisponibilitePeriodeStatut statut;

    @Column(length = 1000)
    private String commentaire;

    @Column(nullable = false)
    private boolean actif;

    @Column(nullable = false)
    private LocalDateTime dateCreation;

    @Column(nullable = false)
    private LocalDateTime dateDerniereMiseAJour;
}
