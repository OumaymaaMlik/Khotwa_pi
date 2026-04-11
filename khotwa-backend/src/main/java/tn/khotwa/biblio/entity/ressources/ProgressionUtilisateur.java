package tn.khotwa.biblio.entity.ressources;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import tn.khotwa.biblio.enums.ProgressStatus;

import java.time.LocalDateTime;


@Entity
@Table(
    name = "progressions_utilisateurs",
    // FIX: colonne renommée userID → utilisateur_id pour cohérence avec le reste du code
    uniqueConstraints = @UniqueConstraint(columnNames = {"utilisateur_id", "ressource_id"})
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProgressionUtilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // FIX: était "userID" (incohérent), maintenant "utilisateurId" aligné
    // avec ProgressionRepository et ProgressionService
    @Column(name = "utilisateur_id", nullable = false)
    private Long utilisateurId;

    @ManyToOne(fetch = FetchType.LAZY)
    @ToString.Exclude
    private Ressource ressource;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private ProgressStatus statut = ProgressStatus.NOT_STARTED;

    @Column(nullable = false)
    @Builder.Default
    private Integer pourcentage = 0;

    private Integer positionVideoSec;

    private LocalDateTime premierAcces;

    @UpdateTimestamp
    private LocalDateTime dernierAcces;

    private LocalDateTime dateCompletion;
}
