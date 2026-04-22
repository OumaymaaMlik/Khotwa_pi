package tn.khotwa.controller.Collaboration;

import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
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
import tn.khotwa.dto.Collaboration.CreateResourceRequestRequest;
import tn.khotwa.dto.Collaboration.ResourceRequestDTO;
import tn.khotwa.dto.Collaboration.UpdateResourceRequestStatusRequest;
import tn.khotwa.service.Collaboration.ResourceRequestService;

@RestController
@RequestMapping("/api/resource-requests")
@RequiredArgsConstructor
public class ResourceRequestController {

    private final ResourceRequestService resourceRequestService;

    @PostMapping
    public ResponseEntity<ResourceRequestDTO> createResourceRequest(@Valid @RequestBody CreateResourceRequestRequest request) {
        var resourceRequest = resourceRequestService.createResourceRequest(
                request.getCollaborationId(),
                request.getTitle(),
                request.getDescription(),
                request.getResourceType(),
                request.getUrgency()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(ResourceRequestDTO.fromEntity(resourceRequest));
    }

    @PutMapping("/{id}/status")
    public ResourceRequestDTO updateResourceRequestStatus(@PathVariable Long id, @Valid @RequestBody UpdateResourceRequestStatusRequest request) {
        return ResourceRequestDTO.fromEntity(
                resourceRequestService.updateResourceRequestStatus(id, request.getStatus(), request.getMatchedResourceId())
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResourceRequest(@PathVariable Long id) {
        resourceRequestService.deleteResourceRequest(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/collaboration/{collaborationId}")
    public List<ResourceRequestDTO> getResourceRequests(@PathVariable Long collaborationId) {
        return resourceRequestService.getResourceRequests(collaborationId)
                .stream()
                .map(ResourceRequestDTO::fromEntity)
                .toList();
    }
}
