package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.DTO.talent.MarketIntelligenceDTO;
import tn.khotwa.service.sertalent.MarketIntelligenceService;

@RestController
@RequestMapping("/api/market-intelligence")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class MarketIntelligenceController {

    private final MarketIntelligenceService marketService;

    @GetMapping
    public ResponseEntity<MarketIntelligenceDTO> getMarketIntelligence() {
        return ResponseEntity.ok(marketService.getMarketIntelligence());
    }
}
