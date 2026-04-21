package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "ai_recommendations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private RecommendationType type;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private Double confidenceScore;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private Long relatedJobId;
    private Long relatedTalentId;

    public enum RecommendationType {
        HIRING, TALENT
    }
}
