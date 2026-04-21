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
public class MatchingResultDTO {
    private Long talentId;
    private Long jobId;
    private double score;
    private double confidenceScore;
    private List<String> explanation;
    private List<String> missingSkills;
    private List<String> matchedSkills;
}
