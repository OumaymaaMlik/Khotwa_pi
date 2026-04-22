package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.ResourceRequestRepository;
import tn.khotwa.repository.Collaboration.SharedResourceRepository;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional
public class SharedResourceService {

    private final SharedResourceRepository sharedResourceRepository;
    private final ResourceRequestRepository resourceRequestRepository;
    private final CollaborationService collaborationService;
    private final CurrentUserService currentUserService;
    private final CollaborationAuthorizationService authorizationService;

    public SharedResource createSharedResource(Long collaborationId, String name, String description, ResourceType resourceType, AvailabilityStatus availabilityStatus, Integer quantity) {
        Collaboration collaboration = collaborationService.getCollaboration(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.RESOURCES,
                "Shared resources are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanCreateSharedResource(actor, collaboration);
        collaborationService.ensureWritableCollaboration(collaboration);

        SharedResource resource = new SharedResource();
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(actor);
        resource.setCreatedAt(LocalDateTime.now());
        applyResourceDetails(resource, name, description, resourceType, quantity);

        return saveResource(resource);
    }

    public SharedResource updateSharedResource(Long resourceId, String name, String description, ResourceType resourceType, AvailabilityStatus availabilityStatus, Integer quantity) {
        SharedResource resource = getSharedResource(resourceId);
        User actor = currentUserService.requireCurrentUser();
        Collaboration collaboration = resource.getCollaboration();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.RESOURCES,
                "Shared resources are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanManageSharedResource(actor, resource);
        collaborationService.ensureWritableCollaboration(collaboration);

        applyResourceDetails(resource, name, description, resourceType, quantity);
        return saveResource(resource);
    }

    public void deleteSharedResource(Long resourceId) {
        SharedResource resource = getSharedResource(resourceId);
        User actor = currentUserService.requireCurrentUser();
        Collaboration collaboration = resource.getCollaboration();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.RESOURCES,
                "Shared resources are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanManageSharedResource(actor, resource);
        collaborationService.ensureWritableCollaboration(collaboration);

        if (resourceRequestRepository.existsByMatchedResource_Id(resourceId)) {
            throw new BusinessException("Cannot remove a shared resource that is already linked to a resource request.");
        }

        sharedResourceRepository.delete(resource);
    }

    @Transactional(readOnly = true)
    public List<SharedResource> getSharedResources(Long collaborationId) {
        Collaboration collaboration = collaborationService.getCollaboration(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.RESOURCES,
                "Shared resources are only available for RESOURCES collaborations."
        );
        authorizationService.checkCanViewCollaboration(actor, collaboration, collaborationService.isMember(collaboration, actor));

        return sharedResourceRepository.findAllByCollaborationIdOrderByCreatedAtDesc(collaborationId);
    }

    @Transactional(readOnly = true)
    public SharedResource getSharedResource(Long resourceId) {
        return sharedResourceRepository.findById(resourceId)
                .orElseThrow(() -> new ResourceNotFoundException("Shared resource not found."));
    }

    @Transactional(readOnly = true)
    public SharedResource getSharedResourceForCollaboration(Long collaborationId, Long resourceId) {
        return sharedResourceRepository.findByIdAndCollaborationId(resourceId, collaborationId)
                .orElseThrow(() -> new ResourceNotFoundException("Shared resource not found."));
    }

    public SharedResource reserveMatchedResource(Long collaborationId, Long resourceId, ResourceType expectedResourceType) {
        SharedResource resource = getSharedResourceForCollaboration(collaborationId, resourceId);

        if (resource.getResourceType() != expectedResourceType) {
            throw new BusinessException("Matched resource type must match the resource request type.");
        }

        int availableQuantity = normalizeQuantity(resource.getQuantity());
        if (availableQuantity == 0) {
            throw new BusinessException("Cannot match a request with an unavailable resource.");
        }

        resource.setQuantity(availableQuantity - 1);
        resource.setAvailabilityStatus(deriveAvailabilityStatus(resource.getQuantity()));
        return saveResource(resource);
    }

    public SharedResource restoreMatchedResource(SharedResource resource) {
        int currentQuantity = normalizeQuantity(resource.getQuantity());
        resource.setQuantity(currentQuantity + 1);
        resource.setAvailabilityStatus(deriveAvailabilityStatus(resource.getQuantity()));
        return saveResource(resource);
    }

    private void applyResourceDetails(SharedResource resource, String name, String description, ResourceType resourceType, Integer quantity) {
        if (name == null || name.trim().isEmpty()) {
            throw new BusinessException("Resource name is required.");
        }

        if (resourceType == null) {
            throw new BusinessException("Resource type is required.");
        }

        int normalizedQuantity = normalizeQuantity(quantity);
        resource.setName(name.trim());
        resource.setDescription(description != null && !description.trim().isEmpty() ? description.trim() : null);
        resource.setResourceType(resourceType);
        resource.setQuantity(normalizedQuantity);
        resource.setAvailabilityStatus(deriveAvailabilityStatus(normalizedQuantity));
    }

    private int normalizeQuantity(Integer quantity) {
        if (quantity == null) {
            return 1;
        }

        if (quantity < 0) {
            throw new BusinessException("Resource quantity cannot be negative.");
        }

        return quantity;
    }

    private AvailabilityStatus deriveAvailabilityStatus(int quantity) {
        if (quantity <= 0) {
            return AvailabilityStatus.UNAVAILABLE;
        }

        if (quantity == 1) {
            return AvailabilityStatus.LIMITED;
        }

        return AvailabilityStatus.AVAILABLE;
    }

    private SharedResource saveResource(SharedResource resource) {
        try {
            return sharedResourceRepository.saveAndFlush(resource);
        } catch (OptimisticLockingFailureException exception) {
            throw new BusinessException("The shared resource was updated by another request. Please retry.");
        }
    }
}
