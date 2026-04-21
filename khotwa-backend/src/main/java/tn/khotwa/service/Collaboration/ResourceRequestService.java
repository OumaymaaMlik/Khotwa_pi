package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.ResourceRequest;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.ResourceRequestStatus;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.enums.Collaboration.Urgency;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.ResourceRequestRepository;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional
public class ResourceRequestService {

    private final ResourceRequestRepository resourceRequestRepository;
    private final CollaborationService collaborationService;
    private final CurrentUserService currentUserService;
    private final CollaborationAuthorizationService authorizationService;

    public ResourceRequest createResourceRequest(Long collaborationId, String title, String description, ResourceType resourceType, Urgency urgency) {
        Collaboration collaboration = collaborationService.getCollaboration(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.RESOURCES,
                "Resource requests are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanCreateResourceRequest(actor, collaboration);
        collaborationService.ensureWritableCollaboration(collaboration);

        if (title == null || title.trim().isEmpty()) {
            throw new BusinessException("Request title is required.");
        }

        if (resourceType == null) {
            throw new BusinessException("Resource type is required.");
        }

        if (urgency == null) {
            urgency = Urgency.MEDIUM;
        }

        ResourceRequest request = new ResourceRequest();
        request.setCollaboration(collaboration);
        request.setRequesterUser(actor);
        request.setTitle(title.trim());
        request.setDescription(description != null ? description.trim() : null);
        request.setResourceType(resourceType);
        request.setUrgency(urgency);
        request.setStatus(ResourceRequestStatus.OPEN);
        request.setCreatedAt(LocalDateTime.now());

        return resourceRequestRepository.save(request);
    }

    public ResourceRequest updateResourceRequestStatus(Long requestId, ResourceRequestStatus status) {
        ResourceRequest request = getResourceRequest(requestId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                request.getCollaboration(),
                CollaborationType.RESOURCES,
                "Resource requests are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanUpdateResourceRequestStatus(actor, request);
        collaborationService.ensureWritableCollaboration(request.getCollaboration());

        if (status == null) {
            throw new BusinessException("Status is required.");
        }

        request.setStatus(status);
        return resourceRequestRepository.save(request);
    }

    @Transactional(readOnly = true)
    public List<ResourceRequest> getResourceRequests(Long collaborationId) {
        Collaboration collaboration = collaborationService.getCollaboration(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.RESOURCES,
                "Resource requests are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanViewCollaboration(actor, collaboration, collaborationService.isMember(collaboration, actor));

        return resourceRequestRepository.findAllByCollaborationId(collaborationId);
    }

    @Transactional(readOnly = true)
    public ResourceRequest getResourceRequest(Long requestId) {
        return resourceRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Resource request not found."));
    }
}
