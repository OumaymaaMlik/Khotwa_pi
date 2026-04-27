package tn.khotwa.DTO.talent;

import lombok.*;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class MarketIntelligenceDTO {
    private List<MarketSkillStatDTO> topSkills;
    private List<SalaryEstimateDTO> salaryEstimates;

    @Data @NoArgsConstructor @AllArgsConstructor @Builder
    public static class MarketSkillStatDTO {
        private String skill;
        private Long count;
        private Integer percentage;
    }

    @Data @NoArgsConstructor @AllArgsConstructor @Builder
    public static class SalaryEstimateDTO {
        private String stack;
        private Integer avgMin;
        private Integer avgMax;
    }
}
