package tn.khotwa.biblio.entity.projet;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.PrioriteTache;
import tn.khotwa.biblio.enums.StatutTache;
import tn.khotwa.biblio.enums.TypeTache;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "taches")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Tache {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(length = 2000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeTache typeTache;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PrioriteTache priorite;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutTache statutTache;

    private LocalDate dateDebut;
    private LocalDate dateFin;

    @Column(nullable = false)
    private int retardJours;

    @Column(length = 2000)
    private String commentaireCoach;

    @Column(length = 2000)
    private String justificationEntrepreneur;

    @Column(nullable = false)
    private int scoreImpact;

    @Column(nullable = false)
    private LocalDateTime dateCreation;

    @Column(nullable = false)
    private LocalDateTime dateMiseAJour;

    @Column(name = "projet_id", nullable = false)
    private Long projetId;

    @Column(name = "coach_createur_id", nullable = false)
    private Long coachCreateurId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "projet_id", insertable = false, updatable = false)
    @JsonIgnore
    private Projet projet;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coach_createur_id", insertable = false, updatable = false)
    @JsonIgnore
    private User coachCreateur;

    @OneToMany(mappedBy = "tache", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<SousTache> sousTaches = new ArrayList<>();
}
