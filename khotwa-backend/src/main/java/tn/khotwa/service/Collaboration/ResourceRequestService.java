package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.ResourceRequest;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
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
    private final SharedResourceService sharedResourceService;

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

    public ResourceRequest updateResourceRequestStatus(Long requestId, ResourceRequestStatus status, Long matchedResourceId) {
        ResourceRequest request = getResourceRequest(requestId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                request.getCollaboration(),
                CollaborationType.RESOURCES,
                "Resource requests are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanUpdateResourceRequestStatus(actor, request);

        if (status == null) {
            throw new BusinessException("Status is required.");
        }

        validateStatusTransition(request, status);

        if (status != ResourceRequestStatus.MATCHED && matchedResourceId != null) {
            throw new BusinessException("matchedResourceId can only be provided when matching a resource request.");
        }

        if (status == ResourceRequestStatus.MATCHED) {
            matchRequestToResource(request, matchedResourceId);
        } else if (status == ResourceRequestStatus.CANCELLED) {
            cancelRequest(request);
        } else if (status == ResourceRequestStatus.FULFILLED) {
            fulfillRequest(request);
        }

        request.setStatus(status);
        return resourceRequestRepository.save(request);
    }

    public void deleteResourceRequest(Long requestId) {
        ResourceRequest request = getResourceRequest(requestId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                request.getCollaboration(),
                CollaborationType.RESOURCES,
                "Resource requests are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanDeleteResourceRequest(actor, request);
        collaborationService.ensureWritableCollaboration(request.getCollaboration());

        if (request.getStatus() == ResourceRequestStatus.MATCHED || request.getStatus() == ResourceRequestStatus.FULFILLED) {
            throw new BusinessException("Only OPEN or CANCELLED resource requests can be removed.");
        }

        resourceRequestRepository.delete(request);
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

        return resourceRequestRepository.findAllByCollaborationIdOrderByCreatedAtDesc(collaborationId);
    }

    @Transactional(readOnly = true)
    public ResourceRequest getResourceRequest(Long requestId) {
        return resourceRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Resource request not found."));
    }

    private void matchRequestToResource(ResourceRequest request, Long matchedResourceId) {
        if (request.getCollaboration().getStatus() != CollaborationStatus.ACTIVE) {
            throw new BusinessException("Only active collaborations can match resource requests.");
        }

        if (matchedResourceId == null) {
            throw new BusinessException("matchedResourceId is required when matching a resource request.");
        }

        if (request.getMatchedResource() != null) {
            throw new BusinessException("A matched resource request cannot be reassigned to another resource.");
        }

        SharedResource matchedResource = sharedResourceService.reserveMatchedResource(
                request.getCollaboration().getId(),
                matchedResourceId,
                request.getResourceType()
        );
        request.setMatchedResource(matchedResource);
    }

    private void cancelRequest(ResourceRequest request) {
        if (request.getStatus() != ResourceRequestStatus.MATCHED) {
            return;
        }

        SharedResource matchedResource = request.getMatchedResource();
        if (matchedResource == null) {
            throw new BusinessException("Cannot cancel a matched request without a linked resource.");
        }

        sharedResourceService.restoreMatchedResource(matchedResource);
    }

    private void fulfillRequest(ResourceRequest request) {
        if (request.getMatchedResource() == null) {
            throw new BusinessException("Only matched resource requests can be fulfilled.");
        }
    }

    private void validateStatusTransition(ResourceRequest request, ResourceRequestStatus targetStatus) {
        ResourceRequestStatus currentStatus = request.getStatus();

        if (currentStatus == targetStatus) {
            throw new BusinessException("Resource request is already in status " + targetStatus + ".");
        }

        boolean validTransition = switch (currentStatus) {
            case OPEN -> targetStatus == ResourceRequestStatus.MATCHED || targetStatus == ResourceRequestStatus.CANCELLED;
            case MATCHED -> targetStatus == ResourceRequestStatus.FULFILLED || targetStatus == ResourceRequestStatus.CANCELLED;
            case FULFILLED, CANCELLED -> false;
        };

        if (!validTransition) {
            throw new BusinessException("Invalid resource request status transition from " + currentStatus + " to " + targetStatus + ".");
        }
    }
}
