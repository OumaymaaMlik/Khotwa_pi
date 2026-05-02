package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.config.Auditable;
import tn.khotwa.service.sertalent.DigitalContractService;

import java.util.Map;

@RestController
@RequestMapping("/api/contracts")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class DigitalContractController {

    private final DigitalContractService contractService;

    @PostMapping("/generate")
    public ResponseEntity<Map<String, String>> generateNda(@RequestParam Long talentId, @RequestParam Long startupId) {
        String contractId = contractService.generateNdaContract(talentId, startupId);
        return ResponseEntity.ok(Map.of("contractId", contractId, "status", "GENERATED"));
    }

    @Auditable(action = "SIGNATURE_NDA")
    @PostMapping("/sign")
    public ResponseEntity<String> signContract(@RequestParam String contractId, @RequestParam Long userId) {
        boolean signed = contractService.signContract(contractId, userId);
        if (signed) {
            return ResponseEntity.ok("Contrat " + contractId + " signé avec succès.");
        }
        return ResponseEntity.badRequest().body("Échec de la signature.");
    }
}
