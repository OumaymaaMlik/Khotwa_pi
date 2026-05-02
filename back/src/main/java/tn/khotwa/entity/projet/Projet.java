package tn.khotwa.entity.projet;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.config.projectConfig.SecteurProjetConverter;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;
import tn.khotwa.enums.projectEnum.SecteurProjet;
import tn.khotwa.enums.projectEnum.StadeProjet;
import tn.khotwa.enums.projectEnum.StatutProjet;

import java.time.LocalDate;
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

    @Convert(converter = SecteurProjetConverter.class)
    @Column(nullable = false, length = 64)
    private SecteurProjet secteur;

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

    private LocalDate dateDebutProjet;

    private LocalDate dateFinProjet;

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
