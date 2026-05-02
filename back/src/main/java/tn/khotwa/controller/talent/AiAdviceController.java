package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import tn.khotwa.dto.talent.HiringAiAdviceRequestDTO;
import tn.khotwa.dto.talent.HiringAiAdviceResponseDTO;
import tn.khotwa.dto.talent.HiringAiChatRequestDTO;
import tn.khotwa.dto.talent.HiringAiChatResponseDTO;
import tn.khotwa.dto.talent.AiKeywordsResponseDTO;
import tn.khotwa.dto.talent.SkillGapAiAdviceRequestDTO;
import tn.khotwa.dto.talent.SkillGapAiAdviceResponseDTO;
import tn.khotwa.dto.talent.TalentAiAdviceRequestDTO;
import tn.khotwa.dto.talent.TalentAiAdviceResponseDTO;
import tn.khotwa.entity.talent.AiRecommendation;
import tn.khotwa.service.sertalent.AiRecommendationService;
import tn.khotwa.service.sertalent.AiAdviceService;
import java.util.List;
import java.util.Map;

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

    @PostMapping("/hiring-chat")
    public ResponseEntity<HiringAiChatResponseDTO> hiringChat(@Valid @RequestBody HiringAiChatRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.hiringChat(body));
    }

    @PostMapping("/talent-advice")
    public ResponseEntity<TalentAiAdviceResponseDTO> talentAdvice(@Valid @RequestBody TalentAiAdviceRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.buildTalentAdvice(body));
    }

    @PostMapping("/skill-gap-advice")
    public ResponseEntity<SkillGapAiAdviceResponseDTO> skillGapAdvice(@Valid @RequestBody SkillGapAiAdviceRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.buildSkillGapAdvice(body));
    }

    @GetMapping("/recommendations")
    public ResponseEntity<List<AiRecommendation>> getRecommendations() {
        return ResponseEntity.ok(aiRecommendationService.findAll());
    }

    @PostMapping("/keywords")
    public ResponseEntity<AiKeywordsResponseDTO> buildKeywords(@RequestBody Map<String, Object> body) {
        String goal = body.get("goal") != null ? body.get("goal").toString() : "";
        @SuppressWarnings("unchecked")
        List<String> skills = body.get("skills") instanceof List<?> ? (List<String>) body.get("skills") : List.of();
        return ResponseEntity.ok(aiAdviceService.buildKeywords(goal, skills));
    }
}
