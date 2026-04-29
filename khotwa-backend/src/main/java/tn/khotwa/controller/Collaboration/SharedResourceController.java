package tn.khotwa.controller.collaboration;

import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.collaboration.CreateSharedResourceRequest;
import tn.khotwa.dto.collaboration.SharedResourceDTO;
import tn.khotwa.dto.collaboration.UpdateSharedResourceRequest;
import tn.khotwa.service.collaboration.SharedResourceService;

@RestController
@RequestMapping("/api/shared-resources")
public class SharedResourceController {

    private final SharedResourceService sharedResourceService;

    public SharedResourceController(SharedResourceService sharedResourceService) {
        this.sharedResourceService = sharedResourceService;
    }

    @PostMapping
    public ResponseEntity<SharedResourceDTO> createSharedResource(
            @Valid @RequestBody CreateSharedResourceRequest request
    ) {
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

    @PutMapping("/{id}")
    public SharedResourceDTO updateSharedResource(
            @PathVariable Long id,
            @Valid @RequestBody UpdateSharedResourceRequest request
    ) {
        return SharedResourceDTO.fromEntity(sharedResourceService.updateSharedResource(
                id,
                request.getName(),
                request.getDescription(),
                request.getResourceType(),
                request.getAvailabilityStatus(),
                request.getQuantity()
        ));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSharedResource(@PathVariable Long id) {
        sharedResourceService.deleteSharedResource(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/collaboration/{collaborationId}")
    public List<SharedResourceDTO> getSharedResources(@PathVariable Long collaborationId) {
        return sharedResourceService.getSharedResources(collaborationId)
                .stream()
                .map(SharedResourceDTO::fromEntity)
                .toList();
    }
}

