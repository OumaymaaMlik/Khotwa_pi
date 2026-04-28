package tn.khotwa.entity.evenement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.EventsEnums.EvenementStatus;
import tn.khotwa.enums.EventsEnums.EvenementType;
import tn.khotwa.enums.SubscriptionEnums.PlanType;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "evenement")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvenement;

    @Column(nullable = false)
    private String titre;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private LocalDate date;

    private LocalTime heure;

    private String intervenant;

    @Column(length = 512)
    private String lienMeet;

    @Column(nullable = false)
    private int placesTotal;

    @Column(nullable = false)
    private int placesRestantes;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EvenementType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PlanType planType;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private User creator;

    @com.fasterxml.jackson.annotation.JsonProperty("creatorId")
    public Long getCreatorId() {
        return creator != null ? creator.getIdUser() : null;
    }

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "evenement_participants",
            joinColumns = @JoinColumn(name = "evenement_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @Builder.Default
    private List<User> participants = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(name = "statut", nullable = false)
    @Builder.Default
    private EvenementStatus statut = EvenementStatus.PENDING;
}