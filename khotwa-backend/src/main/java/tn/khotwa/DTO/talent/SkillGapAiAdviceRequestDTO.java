package tn.khotwa.DTO.talent;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillGapAiAdviceRequestDTO {
    @NotBlank(message = "Le titre du poste est obligatoire")
    private String jobTitle;
    private List<String> requiredSkills;
    private List<String> currentSkills;
    private String experienceLevel;
}
