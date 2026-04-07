package tn.khotwa.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.EtatValidationProjet;
import tn.khotwa.enums.StadeProjet;
import tn.khotwa.enums.StatutProjet;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Projet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomStartup;

    @Column(length = 2000)
    private String description;

    private String secteur;

    @Column(length = 2000)
    private String problemeAdresse;

    @Column(length = 2000)
    private String solutionProposee;

    @Column(length = 2000)
    private String businessModel;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StadeProjet stadeProjet;

    @Column(length = 2000)
    private String innovationDescription;

    @Column(length = 2000)
    private String scalabiliteDescription;

    private boolean pocDisponible;

    @Column(nullable = false)
    private LocalDateTime dateCreation;

    private LocalDateTime dateSoumission;

    @Column(nullable = false)
    private LocalDateTime dateDerniereMiseAJour;

    private LocalDateTime dateArchivage;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutProjet statutProjet;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EtatValidationProjet etatValidation;

    @Column(nullable = false)
    private int scoreDisciplineGlobal;

    @Column(name = "entrepreneur_id", nullable = false)
    private Long entrepreneurId;

    @Column(name = "admin_id")
    private Long adminId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "entrepreneur_id", insertable = false, updatable = false)
    @JsonIgnore
    private User entrepreneur;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id", insertable = false, updatable = false)
    @JsonIgnore
    private User admin;

    @OneToMany(mappedBy = "projet", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Tache> taches = new ArrayList<>();

    @OneToMany(mappedBy = "projet", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<ProjetCoach> affectationsCoach = new ArrayList<>();
}
