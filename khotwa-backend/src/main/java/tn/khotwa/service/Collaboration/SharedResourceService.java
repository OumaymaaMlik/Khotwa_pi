package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.SharedResourceRepository;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional
public class SharedResourceService {

    private final SharedResourceRepository sharedResourceRepository;
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

        if (name == null || name.trim().isEmpty()) {
            throw new BusinessException("Resource name is required.");
        }

        if (resourceType == null) {
            throw new BusinessException("Resource type is required.");
        }

        if (availabilityStatus == null) {
            availabilityStatus = AvailabilityStatus.AVAILABLE;
        }

        SharedResource resource = new SharedResource();
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(actor);
        resource.setName(name.trim());
        resource.setDescription(description != null ? description.trim() : null);
        resource.setResourceType(resourceType);
        resource.setAvailabilityStatus(availabilityStatus);
        resource.setQuantity(quantity);
        resource.setCreatedAt(LocalDateTime.now());

        return sharedResourceRepository.save(resource);
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

        return sharedResourceRepository.findAllByCollaborationId(collaborationId);
    }

    @Transactional(readOnly = true)
    public SharedResource getSharedResource(Long resourceId) {
        return sharedResourceRepository.findById(resourceId)
                .orElseThrow(() -> new ResourceNotFoundException("Shared resource not found."));
    }
}
