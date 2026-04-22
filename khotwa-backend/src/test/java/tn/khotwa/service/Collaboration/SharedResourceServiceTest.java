package tn.khotwa.service.Collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.OptimisticLockingFailureException;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.Project;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.repository.Collaboration.ResourceRequestRepository;
import tn.khotwa.repository.Collaboration.SharedResourceRepository;
import tn.khotwa.service.User.CurrentUserService;

@ExtendWith(MockitoExtension.class)
class SharedResourceServiceTest {

    @Mock
    private SharedResourceRepository sharedResourceRepository;

    @Mock
    private ResourceRequestRepository resourceRequestRepository;

    @Mock
    private CollaborationService collaborationService;

    @Mock
    private CurrentUserService currentUserService;

    @Mock
    private CollaborationAuthorizationService authorizationService;

    private SharedResourceService sharedResourceService;

    @BeforeEach
    void setUp() {
        sharedResourceService = new SharedResourceService(
                sharedResourceRepository,
                resourceRequestRepository,
                collaborationService,
                currentUserService,
                authorizationService
        );
    }

    @Test
    void createSharedResourceDerivesAvailabilityFromQuantity() {
        User actor = user(1L);
        Collaboration collaboration = collaboration(10L, actor);

        when(collaborationService.getCollaboration(collaboration.getId())).thenReturn(collaboration);
        when(currentUserService.requireCurrentUser()).thenReturn(actor);
        when(sharedResourceRepository.saveAndFlush(any(SharedResource.class))).thenAnswer(invocation -> invocation.getArgument(0));

        SharedResource resource = sharedResourceService.createSharedResource(
                collaboration.getId(),
                "Camera",
                "4k camera",
                ResourceType.MATERIAL,
                AvailabilityStatus.UNAVAILABLE,
                2
        );

        assertThat(resource.getQuantity()).isEqualTo(2);
        assertThat(resource.getAvailabilityStatus()).isEqualTo(AvailabilityStatus.AVAILABLE);
        verify(authorizationService).checkCanCreateSharedResource(actor, collaboration);
        verify(collaborationService).ensureWritableCollaboration(collaboration);
    }

    @Test
    void createSharedResourceRejectsNegativeQuantity() {
        User actor = user(1L);
        Collaboration collaboration = collaboration(10L, actor);

        when(collaborationService.getCollaboration(collaboration.getId())).thenReturn(collaboration);
        when(currentUserService.requireCurrentUser()).thenReturn(actor);

        assertThatThrownBy(() -> sharedResourceService.createSharedResource(
                collaboration.getId(),
                "Camera",
                null,
                ResourceType.MATERIAL,
                AvailabilityStatus.AVAILABLE,
                -1
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Resource quantity cannot be negative.");
    }

    @Test
    void updateSharedResourceRecomputesAvailabilityFromQuantity() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner);
        SharedResource resource = new SharedResource();
        resource.setId(55L);
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(owner);
        resource.setName("Mentoring");
        resource.setResourceType(ResourceType.HUMAN);
        resource.setQuantity(3);
        resource.setAvailabilityStatus(AvailabilityStatus.AVAILABLE);

        when(sharedResourceRepository.findById(resource.getId())).thenReturn(Optional.of(resource));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(sharedResourceRepository.saveAndFlush(resource)).thenReturn(resource);

        SharedResource updated = sharedResourceService.updateSharedResource(
                resource.getId(),
                "Mentoring",
                "Single expert slot",
                ResourceType.HUMAN,
                AvailabilityStatus.AVAILABLE,
                1
        );

        assertThat(updated.getQuantity()).isEqualTo(1);
        assertThat(updated.getAvailabilityStatus()).isEqualTo(AvailabilityStatus.LIMITED);
        verify(authorizationService).checkCanManageSharedResource(owner, resource);
        verify(collaborationService).ensureWritableCollaboration(collaboration);
    }

    @Test
    void reserveMatchedResourceFailsCleanlyOnConcurrentUpdate() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner);
        SharedResource resource = new SharedResource();
        resource.setId(55L);
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(owner);
        resource.setName("Camera");
        resource.setResourceType(ResourceType.MATERIAL);
        resource.setQuantity(1);
        resource.setAvailabilityStatus(AvailabilityStatus.LIMITED);

        when(sharedResourceRepository.findByIdAndCollaborationId(resource.getId(), collaboration.getId()))
                .thenReturn(Optional.of(resource));
        when(sharedResourceRepository.saveAndFlush(resource))
                .thenThrow(new OptimisticLockingFailureException("conflict"));

        assertThatThrownBy(() -> sharedResourceService.reserveMatchedResource(
                collaboration.getId(),
                resource.getId(),
                ResourceType.MATERIAL
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("The shared resource was updated by another request. Please retry.");
    }

    @Test
    void deleteSharedResourceAllowsOwnerWhenResourceIsNotMatched() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner);
        SharedResource resource = new SharedResource();
        resource.setId(55L);
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(owner);

        when(sharedResourceRepository.findById(resource.getId())).thenReturn(Optional.of(resource));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(resourceRequestRepository.existsByMatchedResource_Id(resource.getId())).thenReturn(false);

        sharedResourceService.deleteSharedResource(resource.getId());

        verify(authorizationService).checkCanManageSharedResource(owner, resource);
        verify(collaborationService).ensureWritableCollaboration(collaboration);
        verify(sharedResourceRepository).delete(resource);
    }

    @Test
    void deleteSharedResourceRejectsMatchedResources() {
        User owner = user(1L);
        Collaboration collaboration = collaboration(10L, owner);
        SharedResource resource = new SharedResource();
        resource.setId(55L);
        resource.setCollaboration(collaboration);
        resource.setOwnerUser(owner);

        when(sharedResourceRepository.findById(resource.getId())).thenReturn(Optional.of(resource));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(resourceRequestRepository.existsByMatchedResource_Id(resource.getId())).thenReturn(true);

        assertThatThrownBy(() -> sharedResourceService.deleteSharedResource(resource.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Cannot remove a shared resource that is already linked to a resource request.");
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

    private static Collaboration collaboration(Long id, User owner) {
        Project project = new Project();
        project.setId(id + 100);
        project.setOwner(owner);
        project.setName("Project " + id);

        Collaboration collaboration = new Collaboration();
        collaboration.setId(id);
        collaboration.setProject(project);
        collaboration.setStatus(CollaborationStatus.ACTIVE);
        collaboration.setType(CollaborationType.RESOURCES);
        return collaboration;
    }
}
