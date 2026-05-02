package tn.khotwa.dto.talent;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class TalentBadgeDTO {
    private Long id;
    private Long talentId;
    private String badgeType;
    private String description;
    private String dateObtenu;
}
