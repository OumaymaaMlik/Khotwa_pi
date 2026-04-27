package tn.khotwa.entity.UserEntities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
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
    private String region;
    private String specialite;
    private String disponibilite;
    private String nomAffiche;

    @Default
    @Column(name = "must_change_password", nullable = false)
    private boolean mustChangePassword = true;

    @PrePersist
    @PreUpdate
    public void normalizeEmailAddress() {
        if (emailAddress != null) {
            emailAddress = emailAddress.trim().toLowerCase();
        }
    }
}