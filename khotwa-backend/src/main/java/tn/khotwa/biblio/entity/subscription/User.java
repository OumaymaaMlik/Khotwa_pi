package tn.khotwa.biblio.entity.subscription;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.biblio.enums.PlanType;
import tn.khotwa.biblio.enums.Role;

// Entité User — module Subscription
// Enums Role et PlanType réutilisés depuis tn.khotwa.biblio.enums (pas de redondance)
@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String emailAddress;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Enumerated(EnumType.STRING)
    @Column(name = "plan_type")
    private PlanType planType;

    @Column
    private String avatar;

    @Column
    private String startup;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "pending_plan")
    private PlanType pendingPlan;
}
