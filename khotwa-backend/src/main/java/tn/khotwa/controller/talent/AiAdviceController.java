package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import tn.khotwa.DTO.talent.HiringAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.HiringAiAdviceResponseDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceResponseDTO;
import tn.khotwa.entity.talent.AiRecommendation;
import tn.khotwa.service.sertalent.AiRecommendationService;
import tn.khotwa.service.sertalent.AiAdviceService;
import java.util.List;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class AiAdviceController {

    private final AiAdviceService aiAdviceService;
    private final AiRecommendationService aiRecommendationService;

    @PostMapping("/hiring-advice")
    public ResponseEntity<HiringAiAdviceResponseDTO> hiringAdvice(@Valid @RequestBody HiringAiAdviceRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.buildHiringAdvice(body));
    }

    @PostMapping("/talent-advice")
    public ResponseEntity<TalentAiAdviceResponseDTO> talentAdvice(@Valid @RequestBody TalentAiAdviceRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.buildTalentAdvice(body));
    }

    @GetMapping("/recommendations")
    public ResponseEntity<List<AiRecommendation>> getRecommendations() {
        return ResponseEntity.ok(aiRecommendationService.findAll());
    }
}
