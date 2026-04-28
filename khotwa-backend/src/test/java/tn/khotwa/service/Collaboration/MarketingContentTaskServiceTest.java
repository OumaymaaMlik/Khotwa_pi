package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.Optional;
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
import tn.khotwa.enums.collaboration.CampaignType;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.ContentType;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.collaboration.Platform;
import tn.khotwa.enums.collaboration.TaskStatus;
import tn.khotwa.exception.collaboration.BusinessException;
import tn.khotwa.repository.collaboration.MarketingContentTaskRepository;
import tn.khotwa.service.User.CurrentUserService;
import tn.khotwa.service.User.UserService;

@ExtendWith(MockitoExtension.class)
class MarketingContentTaskServiceTest {

    @Mock
    private MarketingContentTaskRepository marketingContentTaskRepository;

    @Mock
    private MarketingCollaborationService marketingCollaborationService;

    @Mock
    private CollaborationService collaborationService;

    @Mock
    private CurrentUserService currentUserService;

    @Mock
    private UserService userService;

    @Mock
    private CollaborationAuthorizationService authorizationService;

    private MarketingContentTaskService marketingContentTaskService;

    @BeforeEach
    void setUp() {
        marketingContentTaskService = new MarketingContentTaskService(
                marketingContentTaskRepository,
                marketingCollaborationService,
                collaborationService,
                currentUserService,
                userService,
                authorizationService
        );
    }

    @Test
    void createsTaskWhenAssignedUserIsCollaborationMember() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User actor = user(2L, Role.ENTREPRENEUR);
        User assignedUser = user(3L, Role.ENTREPRENEUR);
        MarketingCollaboration marketingCollaboration = marketingCampaign(100L, collaboration(10L, owner), MarketingCollaborationStatus.DRAFT);

        when(marketingCollaborationService.getMarketingCollaboration(marketingCollaboration.getId())).thenReturn(marketingCollaboration);
        when(currentUserService.requireCurrentUser()).thenReturn(actor);
        when(userService.getRequiredUser(assignedUser.getIdUser())).thenReturn(assignedUser);
        when(collaborationService.isMember(marketingCollaboration.getCollaboration(), assignedUser)).thenReturn(true);
        when(marketingContentTaskRepository.save(any(MarketingContentTask.class))).thenAnswer(invocation -> invocation.getArgument(0));

        MarketingContentTask task = marketingContentTaskService.createMarketingContentTask(
                marketingCollaboration.getId(),
                assignedUser.getIdUser(),
                "Launch reel",
                "Reel brief",
                ContentType.REEL,
                Platform.INSTAGRAM,
                LocalDateTime.of(2026, 4, 30, 12, 0)
        );

        assertThat(task.getMarketingCollaboration()).isSameAs(marketingCollaboration);
        assertThat(task.getAssignedUser()).isSameAs(assignedUser);
        assertThat(task.getTitle()).isEqualTo("Launch reel");
        assertThat(task.getStatus()).isEqualTo(TaskStatus.TODO);
        verify(marketingContentTaskRepository).save(any(MarketingContentTask.class));
    }

    @Test
    void cannotCreateTaskWhenAssignedUserIsNotCollaborationMember() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User actor = user(2L, Role.ENTREPRENEUR);
        User assignedUser = user(3L, Role.ENTREPRENEUR);
        MarketingCollaboration marketingCollaboration = marketingCampaign(100L, collaboration(10L, owner), MarketingCollaborationStatus.DRAFT);

        when(marketingCollaborationService.getMarketingCollaboration(marketingCollaboration.getId())).thenReturn(marketingCollaboration);
        when(currentUserService.requireCurrentUser()).thenReturn(actor);
        when(userService.getRequiredUser(assignedUser.getIdUser())).thenReturn(assignedUser);
        when(collaborationService.isMember(marketingCollaboration.getCollaboration(), assignedUser)).thenReturn(false);

        assertThatThrownBy(() -> marketingContentTaskService.createMarketingContentTask(
                marketingCollaboration.getId(),
                assignedUser.getIdUser(),
                "Launch reel",
                "Reel brief",
                ContentType.REEL,
                Platform.INSTAGRAM,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Assigned user must be a member of the collaboration.");

        verify(marketingContentTaskRepository, never()).save(any(MarketingContentTask.class));
    }

    @Test
    void cannotCreateTaskOnCompletedCampaign() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User member = user(2L, Role.ENTREPRENEUR);
        MarketingCollaboration marketingCollaboration = marketingCampaign(100L, collaboration(10L, owner), MarketingCollaborationStatus.COMPLETED);

        when(marketingCollaborationService.getMarketingCollaboration(marketingCollaboration.getId())).thenReturn(marketingCollaboration);
        when(currentUserService.requireCurrentUser()).thenReturn(member);

        assertThatThrownBy(() -> marketingContentTaskService.createMarketingContentTask(
                marketingCollaboration.getId(),
                member.getIdUser(),
                "Task",
                null,
                ContentType.POST,
                Platform.INSTAGRAM,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("This campaign is closed. Create a new campaign to continue.");

        verify(userService, never()).getRequiredUser(any());
        verify(marketingContentTaskRepository, never()).save(any(MarketingContentTask.class));
    }

    @Test
    void cannotCreateTaskOnCancelledCampaign() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User member = user(2L, Role.ENTREPRENEUR);
        MarketingCollaboration marketingCollaboration = marketingCampaign(100L, collaboration(10L, owner), MarketingCollaborationStatus.CANCELLED);

        when(marketingCollaborationService.getMarketingCollaboration(marketingCollaboration.getId())).thenReturn(marketingCollaboration);
        when(currentUserService.requireCurrentUser()).thenReturn(member);

        assertThatThrownBy(() -> marketingContentTaskService.createMarketingContentTask(
                marketingCollaboration.getId(),
                member.getIdUser(),
                "Task",
                null,
                ContentType.REEL,
                Platform.TIKTOK,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("This campaign is closed. Create a new campaign to continue.");

        verify(userService, never()).getRequiredUser(any());
        verify(marketingContentTaskRepository, never()).save(any(MarketingContentTask.class));
    }

    @Test
    void cannotUpdateTaskStatusOnCompletedCampaign() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User assignedUser = user(2L, Role.ENTREPRENEUR);
        MarketingContentTask task = marketingTask(
                100L,
                marketingCampaign(200L, collaboration(10L, owner), MarketingCollaborationStatus.COMPLETED),
                assignedUser
        );

        when(marketingContentTaskRepository.findById(task.getId())).thenReturn(Optional.of(task));
        when(currentUserService.requireCurrentUser()).thenReturn(assignedUser);

        assertThatThrownBy(() -> marketingContentTaskService.updateMarketingContentTaskStatus(
                task.getId(),
                TaskStatus.IN_PROGRESS,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("This campaign is closed. Create a new campaign to continue.");

        verify(marketingContentTaskRepository, never()).save(any(MarketingContentTask.class));
    }

    @Test
    void cannotUpdateTaskStatusOnCancelledCampaign() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User assignedUser = user(2L, Role.ENTREPRENEUR);
        MarketingContentTask task = marketingTask(
                100L,
                marketingCampaign(200L, collaboration(10L, owner), MarketingCollaborationStatus.CANCELLED),
                assignedUser
        );

        when(marketingContentTaskRepository.findById(task.getId())).thenReturn(Optional.of(task));
        when(currentUserService.requireCurrentUser()).thenReturn(assignedUser);

        assertThatThrownBy(() -> marketingContentTaskService.updateMarketingContentTaskStatus(
                task.getId(),
                TaskStatus.READY,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("This campaign is closed. Create a new campaign to continue.");

        verify(marketingContentTaskRepository, never()).save(any(MarketingContentTask.class));
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
        collaboration.setType(CollaborationType.MARKETING);
        collaboration.setStatus(CollaborationStatus.ACTIVE);
        return collaboration;
    }

    private static MarketingCollaboration marketingCampaign(
            Long id,
            Collaboration collaboration,
            MarketingCollaborationStatus status
    ) {
        MarketingCollaboration campaign = new MarketingCollaboration();
        campaign.setId(id);
        campaign.setCollaboration(collaboration);
        campaign.setTitle("Campaign");
        campaign.setObjective("Objective");
        campaign.setCampaignType(CampaignType.CROSS_PROMOTION);
        campaign.setStatus(status);
        return campaign;
    }

    private static MarketingContentTask marketingTask(Long id, MarketingCollaboration campaign, User assignedUser) {
        MarketingContentTask task = new MarketingContentTask();
        task.setId(id);
        task.setMarketingCollaboration(campaign);
        task.setAssignedUser(assignedUser);
        task.setStatus(TaskStatus.TODO);
        task.setTitle("Task");
        task.setContentType(ContentType.POST);
        task.setPlatform(Platform.INSTAGRAM);
        return task;
    }
}
