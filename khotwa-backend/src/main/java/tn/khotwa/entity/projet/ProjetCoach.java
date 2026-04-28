package tn.khotwa.entity.projet;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;

import java.time.LocalDateTime;

@Entity
@Table(name = "projet_coach")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjetCoach {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "projet_id", nullable = false)
    private Long projetId;

    @Column(name = "coach_id", nullable = false)
    private Long coachId;

    @Column(nullable = false)
    private LocalDateTime dateAffectation;

    @Column(nullable = false)
    private Long affecteParAdminId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleCoachProjet roleCoachProjet;

    @Column(length = 1000)
    private String motifReaffectation;

    @Column(nullable = false)
    private boolean actif;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "projet_id", insertable = false, updatable = false)
    @JsonIgnore
    private Projet projet;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coach_id", insertable = false, updatable = false)
    private User coach;
}
