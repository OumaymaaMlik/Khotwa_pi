package tn.khotwa.entity.SubscriptionEntities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;

import java.time.LocalDate;

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
    @Column(name = "id_subscription")
    private Long idSubscription;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PlanType plan;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private SubscriptionStatus statut = SubscriptionStatus.ACTIVE;

    @Column(name = "date_debut", nullable = false)
    private LocalDate dateDebut;

    @Column(name = "date_fin")
    private LocalDate dateFin;

    @Column(name = "auto_renouvellement", nullable = false, columnDefinition = "BIT(1) DEFAULT 0")
    @Builder.Default
    private Boolean autoRenouvellement = false;

    @Column(name = "paiement_ref")
    private String paiementRef;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @Transient
    @JsonProperty("idUser")
    private Long idUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "plan_offer_id")
    private PlanOffer planOffer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pending_plan_offer_id")
    private PlanOffer pendingPlanOffer;

    public boolean isAutoRenouvellement() {
        return Boolean.TRUE.equals(this.autoRenouvellement);
    }

    public void setAutoRenouvellement(boolean value) {
        this.autoRenouvellement = value;
    }

    @PostLoad
    public void fillTransientUserId() {
        if (user != null) {
            this.idUser = user.getIdUser();
        }
    }
}