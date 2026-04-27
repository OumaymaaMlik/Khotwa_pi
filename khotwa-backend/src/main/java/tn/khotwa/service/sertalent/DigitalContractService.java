package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DigitalContractService {

    public String generateNdaContract(Long talentId, Long startupId) {
        // Logic to generate a unique digital contract or NDA
        String contractId = "NDA-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        return contractId;
    }

    public boolean signContract(String contractId, Long userId) {
        // Save the signature
        return true;
    }
}
