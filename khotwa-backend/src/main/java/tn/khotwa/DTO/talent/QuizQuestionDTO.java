package tn.khotwa.DTO.talent;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class QuizQuestionDTO {
    private String question;
    private java.util.List<String> options;
    private Integer correctOptionIndex;
    private String explanation;
}
