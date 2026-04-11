package tn.khotwa.biblio.entity.subscription;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.biblio.enums.PlanType;

// Offre commerciale associée à un PlanType
// PlanType réutilisé depuis tn.khotwa.biblio.enums (pas de redondance)
@Entity
@Table(name = "plan_offer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlanOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PlanType type;

    @Column(nullable = false)
    private String label;

    private Double prix;

    // Durée en jours
    private Integer duree;

    @Column(length = 500)
    private String description;

    @Column(length = 2000)
    private String avantages;
}
