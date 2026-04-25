package tn.khotwa.entity.UserEntities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
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

    @Default
    @Column(name = "must_change_password", nullable = false)
    private boolean mustChangePassword = true;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Evenement> createdEvents = new ArrayList<>();
    @JsonIgnore
    @ManyToMany(mappedBy = "participants", fetch = FetchType.LAZY)
    private List<Evenement> eventsParticipated ;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    List<Reservation> reservations;

    @PrePersist
    @PreUpdate
    public void normalizeEmailAddress() {
        if (emailAddress != null) {
            emailAddress = emailAddress.trim().toLowerCase();
        }
    }
}