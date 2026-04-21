package tn.khotwa.DTO.talent;

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
    private String goal;
    private List<String> competences;
    private String niveauExperience;
    private String bio;
}
