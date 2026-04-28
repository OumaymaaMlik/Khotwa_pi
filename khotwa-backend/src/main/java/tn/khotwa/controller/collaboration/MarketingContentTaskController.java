package tn.khotwa.controller.collaboration;

import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.DTO.collaboration.CreateMarketingContentTaskRequest;
import tn.khotwa.DTO.collaboration.MarketingContentTaskDTO;
import tn.khotwa.DTO.collaboration.UpdateMarketingContentTaskStatusRequest;
import tn.khotwa.service.collaboration.MarketingContentTaskService;

@RestController
@RequestMapping("/api/marketing-content-tasks")
@RequiredArgsConstructor
public class MarketingContentTaskController {

    private final MarketingContentTaskService marketingContentTaskService;

    @PostMapping
    public ResponseEntity<MarketingContentTaskDTO> createMarketingContentTask(@Valid @RequestBody CreateMarketingContentTaskRequest request) {
        var task = marketingContentTaskService.createMarketingContentTask(
                request.getMarketingCollaborationId(),
                request.getAssignedUserId(),
                request.getTitle(),
                request.getDescription(),
                request.getContentType(),
                request.getPlatform(),
                request.getDueDate()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(MarketingContentTaskDTO.fromEntity(task));
    }

    @PutMapping("/{id}/status")
    public MarketingContentTaskDTO updateMarketingContentTaskStatus(@PathVariable Long id, @Valid @RequestBody UpdateMarketingContentTaskStatusRequest request) {
        return MarketingContentTaskDTO.fromEntity(
                marketingContentTaskService.updateMarketingContentTaskStatus(id, request.getStatus(), request.getPublishedAt())
        );
    }

    @GetMapping("/marketing-collaboration/{marketingCollaborationId}")
    public List<MarketingContentTaskDTO> getMarketingContentTasks(@PathVariable Long marketingCollaborationId) {
        return marketingContentTaskService.getMarketingContentTasks(marketingCollaborationId)
                .stream()
                .map(MarketingContentTaskDTO::fromEntity)
                .toList();
    }
}
