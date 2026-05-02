package tn.khotwa.dto.talent;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillGapAiAdviceResponseDTO {
    private String summary;
    private List<String> missingSkills;
    private List<String> recommendedLearningPath;
    private List<String> actionPlan;
}
