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
public class HiringAiAdviceResponseDTO {
    private String fichePoste;
    private List<String> competencesSuggerees;
    private List<String> questionsEntretien;
    private List<String> checklistOnboarding;
    private List<String> risquesOuGaps;
}
