package tn.khotwa.entity.projet;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.PrioriteTache;
import tn.khotwa.enums.StatutTache;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sous_taches")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SousTache {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(length = 2000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PrioriteTache priorite;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutTache statutSousTache;

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

    @Column(name = "tache_id", nullable = false)
    private Long tacheId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tache_id", insertable = false, updatable = false)
    @JsonIgnore
    private Tache tache;

    @OneToMany(mappedBy = "sousTache", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Document> documents = new ArrayList<>();
}
