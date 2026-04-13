package tn.khotwa.dto.projectDto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RecommandationAffectationResponseDto {
    private Long projetId;
    private Long principalCoachId;
    private List<Long> secondaryCoachIds;
    private Long expertCoachId;
    private List<CoachRecommandationDto> candidats;
}
