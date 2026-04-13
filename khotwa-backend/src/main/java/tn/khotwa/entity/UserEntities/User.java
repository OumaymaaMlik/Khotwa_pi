package tn.khotwa.entity.UserEntities;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.UserEnum.Role;

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
    @Column(name = "id_user")
    private Long idUser;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "email_address", nullable = false, unique = true)
    private String emailAddress;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "pending_plan")
    private PlanType pendingPlan;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "plan_type")
    private PlanType planType;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role;

    @Column(name = "startup")
    private String startup;

    @Column(name = "must_change_password")
    private boolean mustChangePassword;
}
