package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.talent.MarketIntelligenceDTO;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.repository.repotalent.AnnonceRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MarketIntelligenceService {

    private final AnnonceRepository annonceRepository;

    public MarketIntelligenceDTO getMarketIntelligence() {
        List<Annonce> annonces = annonceRepository.findAll();
        Map<String, Long> skillCounts = new HashMap<>();

        for (Annonce a : annonces) {
            if (a.getCompetencesRequises() != null) {
                String[] skills = a.getCompetencesRequises().split(",");
                for (String s : skills) {
                    String cleanSkill = s.trim().toLowerCase();
                    if (!cleanSkill.isEmpty()) {
                        skillCounts.put(cleanSkill, skillCounts.getOrDefault(cleanSkill, 0L) + 1);
                    }
                }
            }
        }

        List<Map.Entry<String, Long>> sortedSkills = skillCounts.entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(10)
                .collect(Collectors.toList());

        Long maxCount = sortedSkills.isEmpty() ? 1L : sortedSkills.get(0).getValue();

        List<MarketIntelligenceDTO.MarketSkillStatDTO> topSkills = sortedSkills.stream()
                .map(entry -> MarketIntelligenceDTO.MarketSkillStatDTO.builder()
                        .skill(capitalize(entry.getKey()))
                        .count(entry.getValue())
                        .percentage((int) ((entry.getValue() * 100) / maxCount))
                        .build())
                .collect(Collectors.toList());

        List<MarketIntelligenceDTO.SalaryEstimateDTO> salaries = List.of(
                new MarketIntelligenceDTO.SalaryEstimateDTO("React + 5 ans", 2800, 4200),
                new MarketIntelligenceDTO.SalaryEstimateDTO("Spring Boot Senior", 3000, 4800),
                new MarketIntelligenceDTO.SalaryEstimateDTO("Angular Mid", 2200, 3400),
                new MarketIntelligenceDTO.SalaryEstimateDTO("DevOps / K8s", 3500, 5500),
                new MarketIntelligenceDTO.SalaryEstimateDTO("GenAI / LLMOps", 4000, 7000),
                new MarketIntelligenceDTO.SalaryEstimateDTO("Data Engineer", 3200, 5000)
        );

        return MarketIntelligenceDTO.builder()
                .topSkills(topSkills)
                .salaryEstimates(salaries)
                .build();
    }

    private String capitalize(String s) {
        if (s == null || s.isEmpty()) return s;
        return s.substring(0, 1).toUpperCase() + s.substring(1);
    }
}
