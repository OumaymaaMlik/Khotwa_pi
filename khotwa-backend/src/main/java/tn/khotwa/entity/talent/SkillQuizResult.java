package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "skill_quiz_results")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class SkillQuizResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "talent_id", nullable = false)
    private TalentProfile talent;

    @Column(nullable = false)
    private String skill; // ex: "Java", "React"

    @Column(nullable = false)
    private Integer scorePercentage;

    private boolean verifiedBadgeAwarded;

    private LocalDateTime datePassed;
}
