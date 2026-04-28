package tn.khotwa.controller.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.projet.BmcAnalysisRequestDto;
import tn.khotwa.dto.projet.BmcAnalysisResponseDto;
import tn.khotwa.service.projet.BmcAnalysisService;

@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
public class BmcAnalysisController {

    private final BmcAnalysisService bmcAnalysisService;

    @PostMapping("/analyser-bmc")
    public ResponseEntity<BmcAnalysisResponseDto> analyserBmc(
            @RequestBody BmcAnalysisRequestDto dto) {
        return ResponseEntity.ok(bmcAnalysisService.analyserBmc(dto));
    }
}