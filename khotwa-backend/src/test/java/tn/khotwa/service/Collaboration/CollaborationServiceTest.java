package tn.khotwa.service.Collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
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
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.RequestStatus;
import tn.khotwa.enums.User.Role;
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

        when(projectRepository.findById(project.getId())).thenReturn(Optional.of(project));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(userService.getRequiredUser(coach.getIdUser())).thenReturn(coach);

        assertThatThrownBy(() -> collaborationService.createCollaborationRequest(
                project.getId(),
                coach.getIdUser(),
                CollaborationType.RESOURCES,
                null
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
                targetProject.getId(),
                otherEntrepreneur.getIdUser(),
                CollaborationType.MARKETING,
                targetCollaboration.getId()
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Target user must be the owner of the collaboration.");
    }

    @Test
    void acceptProjectInvitationCreatesCollaborationAndAddsOwnerAndAcceptedUser() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User invitedUser = user(2L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);

        CollaborationRequest request = new CollaborationRequest();
        request.setId(100L);
        request.setRequesterUser(owner);
        request.setTargetUser(invitedUser);
        request.setProject(project);
        request.setType(CollaborationType.RESOURCES);
        request.setStatus(RequestStatus.PENDING);

        when(currentUserService.requireCurrentUser()).thenReturn(invitedUser);
        when(collaborationRequestRepository.findById(request.getId())).thenReturn(Optional.of(request));
        when(collaborationRepository.findFirstByProject_IdAndTypeOrderByCreatedAtAsc(
                project.getId(),
                CollaborationType.RESOURCES
        )).thenReturn(Optional.empty());
        when(collaborationRepository.existsByProject_IdAndType(project.getId(), CollaborationType.RESOURCES)).thenReturn(false);
        when(collaborationRepository.save(any(Collaboration.class))).thenAnswer(invocation -> {
            Collaboration collaboration = invocation.getArgument(0);
            collaboration.setId(50L);
            return collaboration;
        });
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(50L, owner.getIdUser())).thenReturn(false);
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(50L, invitedUser.getIdUser())).thenReturn(false);
        when(collaborationRequestRepository.save(any(CollaborationRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        CollaborationRequest acceptedRequest = collaborationService.acceptCollaborationRequest(request.getId());

        assertThat(acceptedRequest.getStatus()).isEqualTo(RequestStatus.ACCEPTED);
        assertThat(acceptedRequest.getRespondedAt()).isNotNull();
        verify(collaborationRepository).save(any(Collaboration.class));
        verify(collaborationMemberRepository, times(2)).save(any(CollaborationMember.class));
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
        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), owner.getIdUser()))
                .thenReturn(true);
        when(collaborationRepository.save(collaboration)).thenReturn(collaboration);

        Collaboration updated = collaborationService.updateCollaboration(
                collaboration.getId(),
                CollaborationStatus.SUSPENDED
        );

        assertThat(updated.getStatus()).isEqualTo(CollaborationStatus.SUSPENDED);
        verify(collaborationRepository).save(collaboration);
    }

    @Test
    void createJoinRequestUsesTargetCollaborationProjectWhenProjectIdIsMissing() {
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
        when(collaborationRequestRepository.existsPendingJoinRequest(requester.getIdUser(), targetCollaboration.getId()))
                .thenReturn(false);
        when(collaborationRequestRepository.save(any(CollaborationRequest.class))).thenAnswer(invocation -> invocation.getArgument(0));

        CollaborationRequest request = collaborationService.createCollaborationRequest(
                null,
                owner.getIdUser(),
                CollaborationType.MARKETING,
                targetCollaboration.getId()
        );

        assertThat(request.getProject().getId()).isEqualTo(project.getId());
        assertThat(request.getTargetCollaboration().getId()).isEqualTo(targetCollaboration.getId());
        assertThat(request.getTargetUser().getIdUser()).isEqualTo(owner.getIdUser());
        verify(collaborationRequestRepository).save(any(CollaborationRequest.class));
        verify(collaborationMemberRepository).existsByCollaborationIdAndUserId(eq(targetCollaboration.getId()), eq(requester.getIdUser()));
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
