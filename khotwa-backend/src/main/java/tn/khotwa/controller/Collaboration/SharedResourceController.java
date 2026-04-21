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
import tn.khotwa.dto.Collaboration.CreateSharedResourceRequest;
import tn.khotwa.dto.Collaboration.SharedResourceDTO;
import tn.khotwa.service.Collaboration.SharedResourceService;

@RestController
@RequestMapping("/api/shared-resources")
@RequiredArgsConstructor
public class SharedResourceController {

    private final SharedResourceService sharedResourceService;

    @PostMapping
    public ResponseEntity<SharedResourceDTO> createSharedResource(@Valid @RequestBody CreateSharedResourceRequest request) {
        var resource = sharedResourceService.createSharedResource(
                request.getCollaborationId(),
                request.getName(),
                request.getDescription(),
                request.getResourceType(),
                request.getAvailabilityStatus(),
                request.getQuantity()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(SharedResourceDTO.fromEntity(resource));
    }

    @GetMapping("/collaboration/{collaborationId}")
    public List<SharedResourceDTO> getSharedResources(@PathVariable Long collaborationId) {
        return sharedResourceService.getSharedResources(collaborationId)
                .stream()
                .map(SharedResourceDTO::fromEntity)
                .toList();
    }
}