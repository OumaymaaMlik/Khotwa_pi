package tn.khotwa.biblio.entity.subscription;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.biblio.enums.PlanType;
import tn.khotwa.biblio.enums.SubscriptionStatus;

import java.time.LocalDate;

// Abonnement d'un User à un PlanOffer
// PlanType et SubscriptionStatus réutilisés depuis tn.khotwa.biblio.enums
@Entity
@Table(name = "subscription")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSubscription;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PlanType plan;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private SubscriptionStatus statut = SubscriptionStatus.ACTIVE;

    @Column(nullable = false)
    private LocalDate dateDebut;

    @Column
    private LocalDate dateFin;

    @Column(name = "auto_renouvellement", nullable = false,
            columnDefinition = "BIT(1) DEFAULT 0")
    @Builder.Default
    private Boolean autoRenouvellement = false;

    @Column
    private String paiementRef;

    // Relation 1-1 avec User (un user = un abonnement actif)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    @JsonIgnore
    private User user;

    // Champ transient pour exposer l'id user en JSON sans charger l'objet complet
    @Transient
    @JsonProperty("idUser")
    private Long idUser;

    // Offre active actuellement souscrite
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "plan_offer_id")
    private PlanOffer planOffer;

    // Offre en attente (upgrade/downgrade planifié)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pending_plan_offer_id")
    private PlanOffer pendingPlanOffer;

    public boolean isAutoRenouvellement() {
        return Boolean.TRUE.equals(this.autoRenouvellement);
    }

    public void setAutoRenouvellement(boolean value) {
        this.autoRenouvellement = value;
    }
}
