package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "talent_badges")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class TalentBadge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "talent_id", nullable = false)
    private TalentProfile talent;

    @Column(nullable = false)
    private String badgeType; // ex: "Expert React", "Collaboratif", "Livraison Rapide"

    private String description;
    
    private LocalDateTime dateObtenu;
}
