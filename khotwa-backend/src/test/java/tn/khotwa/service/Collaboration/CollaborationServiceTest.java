package tn.khotwa.service.Collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.CollaborationMember;
import tn.khotwa.entity.Collaboration.CollaborationRequest;
import tn.khotwa.entity.Collaboration.Project;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.RequestStatus;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.Collaboration.AccessDeniedException;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.repository.Collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.Collaboration.CollaborationRequestRepository;
import tn.khotwa.repository.Collaboration.CollaborationRepository;
import tn.khotwa.repository.Collaboration.ProjectRepository;
import tn.khotwa.service.User.CurrentUserService;
import tn.khotwa.service.User.UserService;

@ExtendWith(MockitoExtension.class)
class CollaborationServiceTest {

    @Mock
    private CollaborationRepository collaborationRepository;

    @Mock
    private CollaborationMemberRepository collaborationMemberRepository;

    @Mock
    private CollaborationRequestRepository collaborationRequestRepository;

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private CurrentUserService currentUserService;

    @Mock
    private UserService userService;

    private CollaborationService collaborationService;

    @BeforeEach
    void setUp() {
        collaborationService = new CollaborationService(
                collaborationRepository,
                collaborationMemberRepository,
                collaborationRequestRepository,
                projectRepository,
                currentUserService,
                userService,
                new CollaborationAuthorizationService(collaborationMemberRepository)
        );
    }

    @Test
    void createCollaborationRequestRejectsNonEntrepreneurTarget() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User coach = user(2L, Role.COACH);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.RESOURCES);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationRepository.findById(collaboration.getId())).thenReturn(Optional.of(collaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(userService.getRequiredUser(coach.getIdUser())).thenReturn(coach);

        assertThatThrownBy(() -> collaborationService.createCollaborationRequest(
                coach.getIdUser(),
                collaboration.getId()
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Collaboration requests can only target entrepreneurs.");
    }

    @Test
    void createJoinRequestRejectsTargetUserWhoIsNotCollaborationOwner() {
        User requester = user(1L, Role.ENTREPRENEUR);
        User targetOwner = user(2L, Role.ENTREPRENEUR);
        User otherEntrepreneur = user(3L, Role.ENTREPRENEUR);
        Project targetProject = project(20L, targetOwner);
        Collaboration targetCollaboration = collaboration(30L, targetProject, CollaborationType.MARKETING);

        when(currentUserService.requireCurrentUser()).thenReturn(requester);
        when(collaborationRepository.findById(targetCollaboration.getId())).thenReturn(Optional.of(targetCollaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(targetCollaboration.getId(), targetOwner.getIdUser()))
                .thenReturn(true);

        assertThatThrownBy(() -> collaborationService.createCollaborationRequest(
                otherEntrepreneur.getIdUser(),
                targetCollaboration.getId()
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Target user must be the owner of the collaboration.");
    }

    @Test
    void acceptCollaborationInvitationAddsAcceptedUserOnlyToTargetCollaboration() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration resourcesCollaboration = collaboration(60L, project, CollaborationType.RESOURCES);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(owner);
        request.setTargetUser(invitedUser);
        request.setProject(project);
        request.setTargetCollaboration(resourcesCollaboration);
        request.setScenario(CollaborationRequestScenario.COLLAB_INVITATION);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(invitedUser);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(resourcesCollaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(resourcesCollaboration.getId(), invitedUser.getIdUser()))
                .thenReturn(false);
        when(collaborationRequestRepository.save(any(CollaborationRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        CollaborationRequest acceptedRequest = collaborationService.acceptCollaborationRequest(request.getId());

        assertThat(acceptedRequest.getStatus()).isEqualTo(RequestStatus.ACCEPTED);
        assertThat(acceptedRequest.getProcessedAt()).isNotNull();
        verify(collaborationMemberRepository).save(any(CollaborationMember.class));
    }

    @Test
    void createCollaborationAddsProjectOwnerAsMember() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);

        when(projectRepository.findById(project.getId())).thenReturn(Optional.of(project));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationRepository.existsByProject_IdAndType(project.getId(), CollaborationType.RESOURCES)).thenReturn(false);
        when(collaborationRepository.save(any(Collaboration.class))).thenAnswer(invocation -> {
            Collaboration collaboration = invocation.getArgument(0);
            collaboration.setId(50L);
            return collaboration;
        });
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(50L, owner.getIdUser())).thenReturn(false);

        Collaboration collaboration = collaborationService.createCollaboration(project.getId(), CollaborationType.RESOURCES);

        assertThat(collaboration.getProject().getId()).isEqualTo(project.getId());
        assertThat(collaboration.getStatus()).isEqualTo(CollaborationStatus.ACTIVE);
        verify(collaborationMemberRepository).save(any(CollaborationMember.class));
    }

    @Test
    void ownerCanUpdateCollaborationStatus() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(50L, project, CollaborationType.RESOURCES);

        when(collaborationRepository.findById(collaboration.getId())).thenReturn(Optional.of(collaboration));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationRepository.save(collaboration)).thenReturn(collaboration);

        Collaboration updated = collaborationService.updateCollaboration(
                collaboration.getId(),
                CollaborationStatus.SUSPENDED
        );

        assertThat(updated.getStatus()).isEqualTo(CollaborationStatus.SUSPENDED);
        verify(collaborationRepository).save(collaboration);
    }

    @Test
    void createJoinRequestUsesTargetCollaborationProject() {
        User requester = user(1L, Role.ENTREPRENEUR);
        User owner = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration targetCollaboration = collaboration(30L, project, CollaborationType.MARKETING);

        when(currentUserService.requireCurrentUser()).thenReturn(requester);
        when(collaborationRepository.findById(targetCollaboration.getId())).thenReturn(Optional.of(targetCollaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(targetCollaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(targetCollaboration.getId(), requester.getIdUser()))
                .thenReturn(false);
        when(collaborationRequestRepository.save(any(CollaborationRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        CollaborationRequest request = collaborationService.createCollaborationRequest(
                owner.getIdUser(),
                targetCollaboration.getId()
        );

        assertThat(request.getProject().getId()).isEqualTo(project.getId());
        assertThat(request.getTargetCollaboration().getId()).isEqualTo(targetCollaboration.getId());
        assertThat(request.getTargetUser().getIdUser()).isEqualTo(owner.getIdUser());
        assertThat(request.getScenario()).isEqualTo(CollaborationRequestScenario.JOIN_REQUEST);
        verify(collaborationRequestRepository).save(any(CollaborationRequest.class));
        verify(collaborationMemberRepository).existsByCollaborationIdAndUserId(eq(targetCollaboration.getId()), eq(requester.getIdUser()));
    }

    @Test
    void nonResponderCannotAcceptCollaborationRequest() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User requester = user(2L, Role.ENTREPRENEUR);
        User outsider = user(3L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.MARKETING);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(requester);
        request.setTargetUser(owner);
        request.setProject(project);
        request.setTargetCollaboration(collaboration);
        request.setScenario(CollaborationRequestScenario.JOIN_REQUEST);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(outsider);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));

        assertThatThrownBy(() -> collaborationService.acceptCollaborationRequest(request.getId()))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("Only the target user or admin can respond to this collaboration request.");
    }

    @Test
    void requesterCannotProcessOwnRequest() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User requester = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.MARKETING);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(requester);
        request.setTargetUser(owner);
        request.setProject(project);
        request.setTargetCollaboration(collaboration);
        request.setScenario(CollaborationRequestScenario.JOIN_REQUEST);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(requester);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));

        assertThatThrownBy(() -> collaborationService.acceptCollaborationRequest(request.getId()))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("The requester cannot process their own collaboration request.");
    }

    @Test
    void acceptRequestRejectsAlreadyMember() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(60L, project, CollaborationType.RESOURCES);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(owner);
        request.setTargetUser(invitedUser);
        request.setProject(project);
        request.setTargetCollaboration(collaboration);
        request.setScenario(CollaborationRequestScenario.COLLAB_INVITATION);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(invitedUser);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), invitedUser.getIdUser()))
                .thenReturn(true);

        assertThatThrownBy(() -> collaborationService.acceptCollaborationRequest(request.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("The user is already a member of this collaboration.");
    }

    @Test
    void acceptRequestRejectsInactiveCollaboration() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(60L, project, CollaborationType.RESOURCES);
        collaboration.setStatus(CollaborationStatus.SUSPENDED);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(owner);
        request.setTargetUser(invitedUser);
        request.setProject(project);
        request.setTargetCollaboration(collaboration);
        request.setScenario(CollaborationRequestScenario.COLLAB_INVITATION);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(invitedUser);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), owner.getIdUser()))
                .thenReturn(true);

        assertThatThrownBy(() -> collaborationService.acceptCollaborationRequest(request.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Only active collaborations can accept collaboration requests.");
    }

    @Test
    void rejectRequestRejectsNonPendingStatus() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(60L, project, CollaborationType.RESOURCES);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(owner);
        request.setTargetUser(invitedUser);
        request.setProject(project);
        request.setTargetCollaboration(collaboration);
        request.setScenario(CollaborationRequestScenario.COLLAB_INVITATION);
        request.setStatus(RequestStatus.ACCEPTED);

        when(currentUserService.requireCurrentUser()).thenReturn(invitedUser);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));

        assertThatThrownBy(() -> collaborationService.rejectCollaborationRequest(request.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Only pending collaboration requests can be rejected.");
    }

    @Test
    void createJoinRequestRejectsConflictingInvitation() {
        User requester = user(1L, Role.ENTREPRENEUR);
        User owner = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.MARKETING);

        when(currentUserService.requireCurrentUser()).thenReturn(requester);
        when(collaborationRepository.findById(collaboration.getId())).thenReturn(Optional.of(collaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), requester.getIdUser()))
                .thenReturn(false);
        when(collaborationRequestRepository.existsPendingRequestForUserAndCollaborationAndScenario(
                requester.getIdUser(),
                collaboration.getId(),
                CollaborationRequestScenario.COLLAB_INVITATION
        )).thenReturn(true);

        assertThatThrownBy(() -> collaborationService.createCollaborationRequest(owner.getIdUser(), collaboration.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("A conflicting pending collaboration request already exists for this user and collaboration.");
    }

    @Test
    void createInvitationRejectsExactDuplicatePendingRequest() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.MARKETING);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationRepository.findById(collaboration.getId())).thenReturn(Optional.of(collaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), invitedUser.getIdUser()))
                .thenReturn(false);
        when(userService.getRequiredUser(invitedUser.getIdUser())).thenReturn(invitedUser);
        when(collaborationRequestRepository.existsByRequesterAndTargetUserAndCollaborationAndScenarioAndStatus(
                owner,
                invitedUser,
                collaboration,
                CollaborationRequestScenario.COLLAB_INVITATION,
                RequestStatus.PENDING
        )).thenReturn(true);

        assertThatThrownBy(() -> collaborationService.createCollaborationRequest(invitedUser.getIdUser(), collaboration.getId()))
                .isInstanceOf(BusinessException.class)
                .hasMessage("A matching pending collaboration request already exists.");
    }

    @Test
    void getCollaborationScopedRequestsReturnsAllRequestsForMembers() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User member = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.MARKETING);
        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(member);
        request.setTargetUser(owner);
        request.setTargetCollaboration(collaboration);
        request.setProject(project);
        request.setScenario(CollaborationRequestScenario.JOIN_REQUEST);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(member);
        when(collaborationRepository.findById(collaboration.getId())).thenReturn(Optional.of(collaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), member.getIdUser()))
                .thenReturn(true);
        when(collaborationRequestRepository.findAllByTargetCollaboration_IdOrderByCreatedAtDesc(collaboration.getId()))
                .thenReturn(List.of(request));

        List<CollaborationRequest> requests = collaborationService.getCollaborationScopedRequests(collaboration.getId());

        assertThat(requests).containsExactly(request);
    }

    @Test
    void getCollaborationScopedRequestsReturnsOnlyTargetedRequestsForNonMembers() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);
        Collaboration collaboration = collaboration(30L, project, CollaborationType.MARKETING);
        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(owner);
        request.setTargetUser(invitedUser);
        request.setTargetCollaboration(collaboration);
        request.setProject(project);
        request.setScenario(CollaborationRequestScenario.COLLAB_INVITATION);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(invitedUser);
        when(collaborationRepository.findById(collaboration.getId())).thenReturn(Optional.of(collaboration));
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), invitedUser.getIdUser()))
                .thenReturn(false);
        when(collaborationRequestRepository.findAllByTargetCollaboration_IdAndTargetUser_IdUserOrderByCreatedAtDesc(
                collaboration.getId(),
                invitedUser.getIdUser()
        )).thenReturn(List.of(request));

        List<CollaborationRequest> requests = collaborationService.getCollaborationScopedRequests(collaboration.getId());

        assertThat(requests).containsExactly(request);
    }

    private static User user(Long id, Role role) {
        User user = new User();
        user.setIdUser(id);
        user.setRole(role);
        user.setFirstName("User");
        user.setLastName(String.valueOf(id));
        user.setEmailAddress("user" + id + "@example.com");
        user.setPassword("secret");
        return user;
    }

    private static Project project(Long id, User owner) {
        Project project = new Project();
        project.setId(id);
        project.setName("Project " + id);
        project.setOwner(owner);
        return project;
    }

    private static Collaboration collaboration(Long id, Project project, CollaborationType type) {
        Collaboration collaboration = new Collaboration();
        collaboration.setId(id);
        collaboration.setProject(project);
        collaboration.setType(type);
        collaboration.setStatus(CollaborationStatus.ACTIVE);
        return collaboration;
    }
}
