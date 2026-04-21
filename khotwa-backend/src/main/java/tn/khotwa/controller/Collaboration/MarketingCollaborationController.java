package tn.khotwa.controller.Collaboration;

import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.Collaboration.CreateMarketingCollaborationRequest;
import tn.khotwa.dto.Collaboration.MarketingCollaborationDTO;
import tn.khotwa.service.Collaboration.MarketingCollaborationService;

@RestController
@RequestMapping("/api/marketing-collaborations")
@RequiredArgsConstructor
public class MarketingCollaborationController {

    private final MarketingCollaborationService marketingCollaborationService;

    @PostMapping
    public ResponseEntity<MarketingCollaborationDTO> createMarketingCollaboration(@Valid @RequestBody CreateMarketingCollaborationRequest request) {
        var marketingCollaboration = marketingCollaborationService.createMarketingCollaboration(
                request.getCollaborationId(),
                request.getTitle(),
                request.getDescription(),
                request.getObjective(),
                request.getCampaignType(),
                request.getStartDate(),
                request.getEndDate()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(MarketingCollaborationDTO.fromEntity(marketingCollaboration));
    }

    @GetMapping("/collaboration/{collaborationId}")
    public List<MarketingCollaborationDTO> getMarketingCollaborations(@PathVariable Long collaborationId) {
        return marketingCollaborationService.getMarketingCollaborations(collaborationId)
                .stream()
                .map(MarketingCollaborationDTO::fromEntity)
                .toList();
    }
}