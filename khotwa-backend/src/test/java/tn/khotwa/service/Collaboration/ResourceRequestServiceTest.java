package tn.khotwa.service.Collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.never;

import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.Project;
import tn.khotwa.entity.Collaboration.ResourceRequest;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.ResourceRequestStatus;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.enums.Collaboration.Urgency;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.repository.Collaboration.ResourceRequestRepository;
import tn.khotwa.service.User.CurrentUserService;

@ExtendWith(MockitoExtension.class)
class ResourceRequestServiceTest {

    @Mock
    private ResourceRequestRepository resourceRequestRepository;

    @Mock
    private CollaborationService collaborationService;

    @Mock
    private CurrentUserService currentUserService;

    @Mock
    private CollaborationAuthorizationService authorizationService;

    @Mock
    private SharedResourceService sharedResourceService;

    private ResourceRequestService resourceRequestService;

    @BeforeEach
    void setUp() {
        resourceRequestService = new ResourceRequestService(
                resourceRequestRepository,
                collaborationService,
                currentUserService,
                authorizationService,
                sharedResourceService
        );
    }

    @Test
    void matchRequestRequiresConcreteResourceAndDecrementsAvailability() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, owner);
        SharedResource matchedResource = resource(50L, collaboration, owner, 1, AvailabilityStatus.LIMITED);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(sharedResourceService.reserveMatchedResource(
                collaboration.getId(),
                matchedResource.getId(),
                request.getResourceType()
        )).thenReturn(matchedResource);
        when(resourceRequestRepository.save(any(ResourceRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        ResourceRequest updated = resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.MATCHED,
                matchedResource.getId()
        );

        assertThat(updated.getStatus()).isEqualTo(ResourceRequestStatus.MATCHED);
        assertThat(updated.getMatchedResource()).isSameAs(matchedResource);
        verify(authorizationService).checkCanUpdateResourceRequestStatus(owner, request);
    }

    @Test
    void cancelMatchedRequestRestoresQuantity() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.ACTIVE);
        SharedResource matchedResource = resource(50L, collaboration, owner, 0, AvailabilityStatus.UNAVAILABLE);
        ResourceRequest request = openRequest(100L, collaboration, owner);
        request.setStatus(ResourceRequestStatus.MATCHED);
        request.setMatchedResource(matchedResource);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(resourceRequestRepository.save(any(ResourceRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        ResourceRequest updated = resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.CANCELLED,
                null
        );

        assertThat(updated.getStatus()).isEqualTo(ResourceRequestStatus.CANCELLED);
        assertThat(updated.getMatchedResource()).isSameAs(matchedResource);
        verify(sharedResourceService).restoreMatchedResource(matchedResource);
    }

    @Test
    void matchRequestRejectsMissingMatchedResource() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, owner);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);

        assertThatThrownBy(() -> resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.MATCHED,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("matchedResourceId is required when matching a resource request.");
    }

    @Test
    void matchRequestRejectsInactiveCollaboration() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.SUSPENDED);
        ResourceRequest request = openRequest(100L, collaboration, owner);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);

        assertThatThrownBy(() -> resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.MATCHED,
                50L
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Only active collaborations can match resource requests.");
    }

    @Test
    void matchRequestRejectsReassignmentWhenMatchedResourceAlreadyExists() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, owner);
        request.setMatchedResource(resource(40L, collaboration, owner, 1, AvailabilityStatus.LIMITED));

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);

        assertThatThrownBy(() -> resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.MATCHED,
                50L
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("A matched resource request cannot be reassigned to another resource.");
    }

    @Test
    void cancelOpenRequestDoesNotRestoreAnyResourceQuantity() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, owner);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(resourceRequestRepository.save(any(ResourceRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        ResourceRequest updated = resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.CANCELLED,
                null
        );

        assertThat(updated.getStatus()).isEqualTo(ResourceRequestStatus.CANCELLED);
        verify(sharedResourceService, never()).restoreMatchedResource(any());
    }

    @Test
    void matchedRequestCannotBeMatchedAgain() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, owner);
        request.setStatus(ResourceRequestStatus.MATCHED);
        request.setMatchedResource(resource(40L, collaboration, owner, 0, AvailabilityStatus.UNAVAILABLE));

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);

        assertThatThrownBy(() -> resourceRequestService.updateResourceRequestStatus(
                request.getId(),
                ResourceRequestStatus.MATCHED,
                50L
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Resource request is already in status MATCHED.");
        verify(sharedResourceService, never()).reserveMatchedResource(any(), any(), any());
    }

    @Test
    void deleteResourceRequestAllowsRequesterWhenOpen() {
        User requester = user(1L);
        Collaboration collaboration = collaboration(10L, requester, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, requester);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(requester);

        resourceRequestService.deleteResourceRequest(request.getId());

        verify(authorizationService).checkCanDeleteResourceRequest(requester, request);
        verify(collaborationService).ensureWritableCollaboration(collaboration);
        verify(resourceRequestRepository).delete(request);
    }

    @Test
    void deleteResourceRequestRejectsMatchedRequests() {
        User requester = user(1L);
        Collaboration collaboration = collaboration(10L, requester, CollaborationStatus.ACTIVE);
        ResourceRequest request = openRequest(100L, collaboration, requester);
        request.setStatus(ResourceRequestStatus.MATCHED);

        when(resourceRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(currentUserService.requireCurrentUser()).thenReturn(requester);

        assertThatThrownBy(() -> resourceRequestService.deleteResourceRequest(request.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Only OPEN or CANCELLED resource requests can be removed.");
    }

    private static User user(Long id) {
        User user = new User();
        user.setIdUser(id);
        user.setRole(Role.ENTREPRENEUR);
        user.setFirstName("User");
        user.setLastName(String.valueOf(id));
        user.setEmailAddress("user" + id + "@example.com");
        user.setPassword("secret");
        return user;
    }

    private static Collaboration collaboration(Long id, User owner, CollaborationStatus status) {
        Project project = new Project();
        project.setId(id + 100);
        project.setOwner(owner);
        project.setName("Project " + id);

        Collaboration collaboration = new Collaboration();
        collaboration.setId(id);
        collaboration.setProject(project);
        collaboration.setStatus(status);
        collaboration.setType(CollaborationType.RESOURCES);
        return collaboration;
    }

    private static ResourceRequest openRequest(Long id, Collaboration collaboration, User requester) {
        ResourceRequest request = new ResourceRequest();
        request.setId(id);
        request.setCollaboration(collaboration);
        request.setRequesterUser(requester);
        request.setTitle("Need help");
        request.setResourceType(ResourceType.MATERIAL);
        request.setUrgency(Urgency.MEDIUM);
        request.setStatus(ResourceRequestStatus.OPEN);
        return request;
    }

    private static SharedResource resource(
            Long id,
            Collaboration collaboration,
            User owner,
            int quantity,
            AvailabilityStatus availabilityStatus
    ) {
        SharedResource resource = new SharedResource();
        resource.setId(id);
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(owner);
        resource.setName("Resource " + id);
        resource.setResourceType(ResourceType.MATERIAL);
        resource.setQuantity(quantity);
        resource.setAvailabilityStatus(availabilityStatus);
        return resource;
    }
}
