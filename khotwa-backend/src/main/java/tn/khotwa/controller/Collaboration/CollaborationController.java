package tn.khotwa.controller.Collaboration;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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
import tn.khotwa.dto.Collaboration.CollaborationDTO;
import tn.khotwa.dto.Collaboration.CreateCollaborationRequest;
import tn.khotwa.dto.Collaboration.UpdateCollaborationRequest;
import tn.khotwa.service.Collaboration.CollaborationApiService;

@RestController
@RequestMapping("/api/collaborations")
@RequiredArgsConstructor
public class CollaborationController {

    private final CollaborationApiService collaborationApiService;

    @GetMapping
    public List<CollaborationDTO> getCollaborations() {
        return collaborationApiService.getCollaborations()
                .stream()
                .map(CollaborationDTO::fromEntity)
                .toList();
    }

    @PostMapping
    public ResponseEntity<CollaborationDTO> createCollaboration(@Valid @RequestBody CreateCollaborationRequest request) {
        CollaborationDTO response = CollaborationDTO.fromEntity(
                collaborationApiService.createCollaboration(request.getProjectId(), request.getType())
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    public CollaborationDTO getCollaboration(@PathVariable Long id) {
        return CollaborationDTO.fromEntity(collaborationApiService.getCollaboration(id));
    }

    @GetMapping("/project/{projectId}")
    public List<CollaborationDTO> getCollaborationsByProjectId(@PathVariable Long projectId) {
        return collaborationApiService.getCollaborationsByProjectId(projectId)
                .stream()
                .map(CollaborationDTO::fromEntity)
                .toList();
    }

    @PutMapping("/{id}")
    public CollaborationDTO updateCollaboration(
            @PathVariable Long id,
            @Valid @RequestBody UpdateCollaborationRequest request
    ) {
        return CollaborationDTO.fromEntity(
                collaborationApiService.updateCollaboration(id, request.getStatus())
        );
    }

    @DeleteMapping("/{id}/members/{memberId}")
    public ResponseEntity<Void> removeMember(@PathVariable Long id, @PathVariable Long memberId) {
        collaborationApiService.removeMember(id, memberId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/leave")
    public ResponseEntity<Void> leaveCollaboration(@PathVariable Long id) {
        collaborationApiService.leaveCollaboration(id);
        return ResponseEntity.noContent().build();
    }
}
