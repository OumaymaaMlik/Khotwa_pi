package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.DTO.talent.HiringAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.HiringAiAdviceResponseDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceRequestDTO;
import tn.khotwa.DTO.talent.TalentAiAdviceResponseDTO;
import tn.khotwa.service.sertalent.AiAdviceService;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class AiAdviceController {

    private final AiAdviceService aiAdviceService;

    @PostMapping("/hiring-advice")
    public ResponseEntity<HiringAiAdviceResponseDTO> hiringAdvice(@RequestBody HiringAiAdviceRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.buildHiringAdvice(body));
    }

    @PostMapping("/talent-advice")
    public ResponseEntity<TalentAiAdviceResponseDTO> talentAdvice(@RequestBody TalentAiAdviceRequestDTO body) {
        return ResponseEntity.ok(aiAdviceService.buildTalentAdvice(body));
    }
}
