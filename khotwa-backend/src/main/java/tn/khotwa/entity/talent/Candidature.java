package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "candidatures")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Candidature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "talent_id", nullable = false)
    private TalentProfile talent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "annonce_id", nullable = false)
    private Annonce annonce;

    // Le score calculé par l'algorithme
    private Double matchingScore;

    @Enumerated(EnumType.STRING)
    private StatutCandidature statut; // EN_ATTENTE, ACCEPTEE, REFUSEE

    private LocalDateTime dateCandidature;

    @Column(columnDefinition = "TEXT")
    private String messageMotivaion;

    public enum StatutCandidature {
        EN_ATTENTE, ACCEPTEE, REFUSEE
    }
}