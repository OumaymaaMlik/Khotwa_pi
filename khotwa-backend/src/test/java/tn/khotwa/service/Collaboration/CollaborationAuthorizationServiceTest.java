package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.entity.User.User;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.MarketingCollaboration;
import tn.khotwa.entity.collaboration.MarketingContentTask;
import tn.khotwa.entity.collaboration.Project;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.collaboration.AccessDeniedException;
import tn.khotwa.exception.collaboration.ForbiddenOperationException;
import tn.khotwa.repository.collaboration.CollaborationMemberRepository;

@ExtendWith(MockitoExtension.class)
class CollaborationAuthorizationServiceTest {

    @Mock
    private CollaborationMemberRepository collaborationMemberRepository;

    private CollaborationAuthorizationService authorizationService;

    @BeforeEach
    void setUp() {
        authorizationService = new CollaborationAuthorizationService(collaborationMemberRepository);
    }

    @Test
    void requireMemberOrAdminAllowsAdminWithoutMembershipLookup() {
        User admin = user(1L, Role.ADMIN);
        Collaboration collaboration = collaboration(10L, user(2L, Role.ENTREPRENEUR));

        assertThatCode(() -> authorizationService.requireMemberOrAdmin(admin, collaboration))
                .doesNotThrowAnyException();
        verify(collaborationMemberRepository, never())
                .existsByCollaborationIdAndUserId(collaboration.getId(), admin.getIdUser());
    }

    @Test
    void requireMemberOrAdminRejectsCoachEvenIfMember() {
        User coach = user(1L, Role.COACH);
        Collaboration collaboration = collaboration(10L, user(2L, Role.ENTREPRENEUR));

        assertThatThrownBy(() -> authorizationService.requireMemberOrAdmin(coach, collaboration))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("Coach accounts have read-only access to collaborations.");
        verify(collaborationMemberRepository, never())
                .existsByCollaborationIdAndUserId(collaboration.getId(), coach.getIdUser());
    }

    @Test
    void requireMemberOrAdminAllowsMemberEntrepreneur() {
        User member = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, user(2L, Role.ENTREPRENEUR));

        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), member.getIdUser()))
                .thenReturn(true);

        assertThatCode(() -> authorizationService.requireMemberOrAdmin(member, collaboration))
                .doesNotThrowAnyException();
    }

    @Test
    void requireMemberOrAdminRejectsNonMemberEntrepreneur() {
        User outsider = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, user(2L, Role.ENTREPRENEUR));

        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), outsider.getIdUser()))
                .thenReturn(false);

        assertThatThrownBy(() -> authorizationService.requireMemberOrAdmin(outsider, collaboration))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("You must be a collaboration member to perform this action.");
    }

    @Test
    void requireOwnerOrAdminAllowsOwner() {
        User owner = user(2L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        assertThatCode(() -> authorizationService.requireOwnerOrAdmin(owner, collaboration))
                .doesNotThrowAnyException();
    }

    @Test
    void requireOwnerOrAdminRejectsNonOwnerEntrepreneur() {
        User owner = user(2L, Role.ENTREPRENEUR);
        User outsider = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        assertThatThrownBy(() -> authorizationService.requireOwnerOrAdmin(outsider, collaboration))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("Only the collaboration owner or admin can perform this action.");
    }

    @Test
    void checkCanCreateMarketingCollaborationRejectsNonOwnerMember() {
        User owner = user(2L, Role.ENTREPRENEUR);
        User member = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        assertThatThrownBy(() -> authorizationService.checkCanCreateMarketingCollaboration(member, collaboration))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("Only the collaboration owner or admin can perform this action.");
    }

    @Test
    void checkCanCreateMarketingContentTaskAllowsEntrepreneurMember() {
        User member = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, user(2L, Role.ENTREPRENEUR));
        MarketingCollaboration marketingCollaboration = marketingCollaboration(100L, collaboration);

        when(collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), member.getIdUser()))
                .thenReturn(true);

        assertThatCode(() -> authorizationService.checkCanCreateMarketingContentTask(member, marketingCollaboration))
                .doesNotThrowAnyException();
    }

    @Test
    void checkCanUpdateMarketingContentTaskStatusAllowsAssignedUser() {
        User owner = user(2L, Role.ENTREPRENEUR);
        User assignedUser = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingContentTask task = marketingTask(100L, collaboration, assignedUser);

        assertThatCode(() -> authorizationService.checkCanUpdateMarketingContentTaskStatus(assignedUser, task))
                .doesNotThrowAnyException();
    }

    @Test
    void checkCanUpdateMarketingContentTaskStatusAllowsOwner() {
        User owner = user(2L, Role.ENTREPRENEUR);
        User assignedUser = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingContentTask task = marketingTask(100L, collaboration, assignedUser);

        assertThatCode(() -> authorizationService.checkCanUpdateMarketingContentTaskStatus(owner, task))
                .doesNotThrowAnyException();
    }

    @Test
    void checkCanUpdateMarketingContentTaskStatusRejectsOtherEntrepreneurMember() {
        User owner = user(2L, Role.ENTREPRENEUR);
        User assignedUser = user(1L, Role.ENTREPRENEUR);
        User otherMember = user(3L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingContentTask task = marketingTask(100L, collaboration, assignedUser);

        assertThatThrownBy(() -> authorizationService.checkCanUpdateMarketingContentTaskStatus(otherMember, task))
                .isInstanceOf(ForbiddenOperationException.class)
                .hasMessage("Only the assigned user, project owner, or admin can update task status.");
    }

    @Test
    void checkCanUpdateMarketingCollaborationStatusAllowsOwner() {
        User owner = user(2L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration marketingCollaboration = marketingCollaboration(100L, collaboration);

        assertThatCode(() -> authorizationService.checkCanUpdateMarketingCollaborationStatus(owner, marketingCollaboration))
                .doesNotThrowAnyException();
    }

    @Test
    void checkCanUpdateMarketingCollaborationStatusRejectsNonOwnerMember() {
        User owner = user(2L, Role.ENTREPRENEUR);
        User member = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration marketingCollaboration = marketingCollaboration(100L, collaboration);

        assertThatThrownBy(() -> authorizationService.checkCanUpdateMarketingCollaborationStatus(member, marketingCollaboration))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("Only the collaboration owner or admin can perform this action.");
    }

    @Test
    void hasLifecycleOverrideReturnsTrueForAdminOnly() {
        assertThat(authorizationService.hasLifecycleOverride(user(1L, Role.ADMIN))).isTrue();
        assertThat(authorizationService.hasLifecycleOverride(user(2L, Role.ENTREPRENEUR))).isFalse();
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

    private static Collaboration collaboration(Long id, User owner) {
        Project project = new Project();
        project.setId(id + 100);
        project.setOwner(owner);
        project.setName("Project " + id);

        Collaboration collaboration = new Collaboration();
        collaboration.setId(id);
        collaboration.setProject(project);
        return collaboration;
    }

    private static MarketingCollaboration marketingCollaboration(Long id, Collaboration collaboration) {
        MarketingCollaboration marketingCollaboration = new MarketingCollaboration();
        marketingCollaboration.setId(id);
        marketingCollaboration.setCollaboration(collaboration);
        return marketingCollaboration;
    }

    private static MarketingContentTask marketingTask(Long id, Collaboration collaboration, User assignedUser) {
        MarketingContentTask task = new MarketingContentTask();
        task.setId(id);
        task.setMarketingCollaboration(marketingCollaboration(id + 50, collaboration));
        task.setAssignedUser(assignedUser);
        return task;
    }
}
