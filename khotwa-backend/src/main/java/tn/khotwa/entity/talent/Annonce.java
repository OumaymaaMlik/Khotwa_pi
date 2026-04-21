package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "annonces")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Annonce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    private String description;

    @Enumerated(EnumType.STRING)
    private TypePoste typePoste; // COFONDATEUR, STAGIAIRE, EMPLOYE

    // Compétences stockées comme liste séparée par virgule
    @Column(name = "competences_requises", columnDefinition = "TEXT")
    private String competencesRequises; // ex: "Java,Spring,MySQL,Docker"

    private String localisation;
    private LocalDate datePublication;
    private boolean active;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "startup_id")
    private Startup startup;

    public enum TypePoste {
        COFONDATEUR, STAGIAIRE, EMPLOYE
    }
}