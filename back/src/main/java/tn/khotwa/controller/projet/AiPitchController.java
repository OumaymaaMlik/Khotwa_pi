package tn.khotwa.controller.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.projet.AiPitchRequestDto;
import tn.khotwa.dto.projet.AiPitchResponseDto;
import tn.khotwa.service.projet.AiPitchService;

@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
public class AiPitchController {

    private final AiPitchService aiPitchService;

    @PostMapping("/improve-pitch")
    public ResponseEntity<AiPitchResponseDto> improvePitch(
            @RequestBody AiPitchRequestDto dto) {
        return ResponseEntity.ok(aiPitchService.improveText(dto));
    }
}