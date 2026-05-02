package tn.khotwa.dto.talent;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class SkillQuizResultDTO {
    private Long id;
    private Long talentId;
    private String skill;
    private Integer scorePercentage;
    private boolean verifiedBadgeAwarded;
    private String datePassed;
}
