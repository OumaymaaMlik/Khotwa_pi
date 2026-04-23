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
public class HiringAiChatResponseDTO {
    private String answer;
    private List<String> interviewQuestions;
    private List<String> focusAreas;
    private List<String> suggestedNextSteps;
}
