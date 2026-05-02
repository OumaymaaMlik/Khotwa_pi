package tn.khotwa.entity.evenement;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.eventsEnums.EvenementStatus;
import tn.khotwa.enums.eventsEnums.EvenementType;
import tn.khotwa.enums.PlanType;

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

    /*
     * !! PAS de @Enumerated ici !!
     * Le @Converter(autoApply=true) de EvenementType.CaseInsensitiveConverter
     * prend le relais et convertit "formation" → FORMATION automatiquement.
     * Si @Enumerated et @Converter coexistent, @Enumerated gagne et le Converter est ignoré.
     */
    @Column(nullable = false)
    private EvenementType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PlanType planType;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User creator;

    @JsonProperty("creatorId")
    public Long getCreatorId() {
        try {
            return creator != null ? creator.getIdUser() : null;
        } catch (Exception e) {
            return null;
        }
    }

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "evenement_participants",
            joinColumns = @JoinColumn(name = "evenement_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @Builder.Default
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<User> participants = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(name = "statut", nullable = false)
    @Builder.Default
    private EvenementStatus statut = EvenementStatus.PENDING;

    @JsonProperty("participantsCount")
    public int getParticipantsCount() {
        try {
            return participants != null ? participants.size() : 0;
        } catch (Exception e) {
            return 0;
        }
    }
}