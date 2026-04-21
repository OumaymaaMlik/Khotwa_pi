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
import tn.khotwa.dto.Collaboration.CollaborationRequestDTO;
import tn.khotwa.dto.Collaboration.SendCollaborationRequestRequest;
import tn.khotwa.service.Collaboration.CollaborationApiService;

@RestController
@RequestMapping("/api/collaboration-requests")
@RequiredArgsConstructor
public class CollaborationRequestController {

    private final CollaborationApiService collaborationApiService;

    @PostMapping
    public ResponseEntity<CollaborationRequestDTO> createCollaborationRequest(
            @Valid @RequestBody SendCollaborationRequestRequest request
    ) {
        CollaborationRequestDTO response = CollaborationRequestDTO.fromEntity(
                collaborationApiService.createCollaborationRequest(request.getProjectId(), request.getTargetUserId(), request.getType(), request.getTargetCollaborationId())
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/sent")
    public List<CollaborationRequestDTO> getSentRequests() {
        return collaborationApiService.getSentCollaborationRequests()
                .stream()
                .map(CollaborationRequestDTO::fromEntity)
                .toList();
    }

    @GetMapping("/received")
    public List<CollaborationRequestDTO> getReceivedRequests() {
        return collaborationApiService.getReceivedCollaborationRequests()
                .stream()
                .map(CollaborationRequestDTO::fromEntity)
                .toList();
    }

    @PostMapping("/{id}/accept")
    public CollaborationRequestDTO acceptRequest(@PathVariable Long id) {
        return CollaborationRequestDTO.fromEntity(collaborationApiService.acceptCollaborationRequest(id));
    }

    @PostMapping("/{id}/reject")
    public CollaborationRequestDTO rejectRequest(@PathVariable Long id) {
        return CollaborationRequestDTO.fromEntity(collaborationApiService.rejectCollaborationRequest(id));
    }
}