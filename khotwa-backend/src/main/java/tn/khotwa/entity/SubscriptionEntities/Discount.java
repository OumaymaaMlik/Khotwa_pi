package tn.khotwa.entity.SubscriptionEntities;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.entity.UserEntities.User;

import java.time.LocalDateTime;

@Entity
@Table(name = "discount")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Discount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Null = global (tous les entrepreneurs), sinon un user spécifique */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    /** Le plan auquel s'applique la remise */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "plan_offer_id", nullable = false)
    private PlanOffer planOffer;

    @Column(name = "discount_percent", nullable = false)
    private Integer discountPercent;

    @Column(name = "valid_from", nullable = false)
    private LocalDateTime validFrom;

    @Column(name = "valid_until", nullable = false)
    private LocalDateTime validUntil;

    @Column(name = "status", nullable = false)
    @Builder.Default
    private String status = "ACTIVE"; // ACTIVE | EXPIRED | USED

    @Column(name = "used_at")
    private LocalDateTime usedAt;

    @Column(name = "notes")
    private String notes;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}