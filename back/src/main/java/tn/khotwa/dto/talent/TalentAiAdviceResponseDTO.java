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
public class TalentAiAdviceResponseDTO {
    private String resume;
    private List<String> pointsForts;
    private List<String> competencesPrioritaires;
    private List<String> nextActions;
}
