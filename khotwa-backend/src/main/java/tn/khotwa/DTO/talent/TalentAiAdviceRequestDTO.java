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
public class TalentAiAdviceRequestDTO {
    @NotBlank(message = "Le goal est obligatoire")
    private String goal;
    private List<String> competences;
    private String niveauExperience;
    private String bio;
    private Integer experienceYears;
}
