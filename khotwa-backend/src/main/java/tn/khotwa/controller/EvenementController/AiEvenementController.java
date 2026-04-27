package tn.khotwa.controller.EvenementController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.service.EvenementService.IAiEvenementService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/evenement/ai")
@CrossOrigin(origins = "http://localhost:4200")
public class AiEvenementController {

    @Autowired
    private IAiEvenementService aiEvenementService;  // ← interface

    @PostMapping(value = "/generate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> generateEvent() {
        try {
            Evenement created = aiEvenementService.generateEventFromTopPopular();
            return ResponseEntity.ok(created);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping(value = "/top-stats", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Map<String, Object>>> getTopStats() {
        List<Map<String, Object>> stats = aiEvenementService.getTopEventsStats();
        return ResponseEntity.ok(stats);
    }
}