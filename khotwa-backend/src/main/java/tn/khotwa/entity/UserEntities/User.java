package tn.khotwa.entity.UserEntities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.ProjetCoach;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.UserEnum.Role;

import java.util.ArrayList;
import java.util.List;

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

    // Unified schema fields
    @Column(name = "email_address", nullable = false, unique = true)
    private String emailAddress;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;



    @Column(name = "password", nullable = false)
    private String password;

    @Builder.Default
    @Column(name = "must_change_password", nullable = false)
    private boolean mustChangePassword = true;

    @Enumerated(EnumType.STRING)
    @Column(name = "pending_plan")
    private tn.khotwa.enums.SubscriptionEnums.PlanType pendingPlan;

    @Enumerated(EnumType.STRING)
    @Column(name = "plan_type")
    private tn.khotwa.enums.SubscriptionEnums.PlanType planType;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role;

    @Column(name = "phone_number")
    private String phoneNumber;
    private String region;
    private String specialite;
    private String disponibilite;
    private String nomAffiche;

    @Column(name = "startup")
    private String startup;
    @PrePersist
    @PreUpdate
    public void normalizeEmailAddress() {
        if (emailAddress != null) {
            emailAddress = emailAddress.trim().toLowerCase();
        }
    }

    @OneToMany(mappedBy = "entrepreneur")
    @JsonIgnore
    @Builder.Default
    private List<Projet> projetsEntrepreneur = new ArrayList<>();

    @OneToMany(mappedBy = "admin")
    @JsonIgnore
    @Builder.Default
    private List<Projet> projetsAdmin = new ArrayList<>();

    @OneToMany(mappedBy = "coachCreateur")
    @JsonIgnore
    @Builder.Default
    private List<Tache> tachesCreees = new ArrayList<>();

    @OneToMany(mappedBy = "coach")
    @JsonIgnore
    @Builder.Default
    private List<ProjetCoach> affectationsCoach = new ArrayList<>();
}
