package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.dto.collaboration.ProjectCollaborationContextDto;
import tn.khotwa.entity.collaboration.Project;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.collaboration.AvailabilityStatus;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.collaboration.ResourceRequestStatus;
import tn.khotwa.enums.collaboration.TaskStatus;
import tn.khotwa.enums.collaboration.Urgency;
import tn.khotwa.enums.User.Role;
import tn.khotwa.repository.collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.collaboration.CollaborationRepository;
import tn.khotwa.repository.collaboration.MarketingCollaborationRepository;
import tn.khotwa.repository.collaboration.MarketingContentTaskRepository;
import tn.khotwa.repository.collaboration.ProjectRepository;
import tn.khotwa.repository.collaboration.ResourceRequestRepository;
import tn.khotwa.repository.collaboration.SharedResourceRepository;
import tn.khotwa.service.User.CurrentUserService;

@ExtendWith(MockitoExtension.class)
class ProjectOverviewServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private CollaborationRepository collaborationRepository;

    @Mock
    private CollaborationMemberRepository collaborationMemberRepository;

    @Mock
    private SharedResourceRepository sharedResourceRepository;

    @Mock
    private ResourceRequestRepository resourceRequestRepository;

    @Mock
    private MarketingCollaborationRepository marketingCollaborationRepository;

    @Mock
    private MarketingContentTaskRepository marketingContentTaskRepository;

    @Mock
    private CurrentUserService currentUserService;

    private ProjectOverviewService projectOverviewService;

    @BeforeEach
    void setUp() {
        projectOverviewService = new ProjectOverviewService(
                projectRepository,
                collaborationRepository,
                collaborationMemberRepository,
                sharedResourceRepository,
                resourceRequestRepository,
                marketingCollaborationRepository,
                marketingContentTaskRepository,
                currentUserService,
                new CollaborationAuthorizationService(collaborationMemberRepository)
        );
    }

    @Test
    void getProjectContextUsesOptimizedCounts() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Project project = project(10L, owner);

        when(projectRepository.findById(project.getId())).thenReturn(Optional.of(project));
        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationMemberRepository.existsByProjectIdAndUserId(project.getId(), owner.getIdUser())).thenReturn(true);

        when(collaborationRepository.countByProject_Id(project.getId())).thenReturn(3L);
        when(collaborationRepository.countByProject_IdAndStatus(project.getId(), CollaborationStatus.ACTIVE)).thenReturn(1L);
        when(collaborationRepository.countByProject_IdAndStatus(project.getId(), CollaborationStatus.SUSPENDED)).thenReturn(1L);
        when(collaborationRepository.countByProject_IdAndStatus(project.getId(), CollaborationStatus.CLOSED)).thenReturn(1L);

        when(sharedResourceRepository.countByCollaboration_Project_IdAndCollaboration_Status(
                project.getId(),
                CollaborationStatus.ACTIVE
        )).thenReturn(4L);
        when(sharedResourceRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndAvailabilityStatus(
                project.getId(),
                CollaborationStatus.ACTIVE,
                AvailabilityStatus.AVAILABLE
        )).thenReturn(2L);

        when(resourceRequestRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndStatus(
                project.getId(),
                CollaborationStatus.ACTIVE,
                ResourceRequestStatus.OPEN
        )).thenReturn(5L);
        when(resourceRequestRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndStatusAndUrgency(
                project.getId(),
                CollaborationStatus.ACTIVE,
                ResourceRequestStatus.OPEN,
                Urgency.HIGH
        )).thenReturn(1L);

        when(marketingCollaborationRepository.countByCollaboration_Project_IdAndCollaboration_Status(
                project.getId(),
                CollaborationStatus.ACTIVE
        )).thenReturn(6L);
        when(marketingCollaborationRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndStatus(
                project.getId(),
                CollaborationStatus.ACTIVE,
                MarketingCollaborationStatus.ACTIVE
        )).thenReturn(2L);

        when(marketingContentTaskRepository.countByMarketingCollaboration_Collaboration_Project_IdAndMarketingCollaboration_Collaboration_Status(
                project.getId(),
                CollaborationStatus.ACTIVE
        )).thenReturn(10L);
        when(marketingContentTaskRepository.countByMarketingCollaboration_Collaboration_Project_IdAndMarketingCollaboration_Collaboration_StatusAndStatus(
                project.getId(),
                CollaborationStatus.ACTIVE,
                TaskStatus.PUBLISHED
        )).thenReturn(3L);
        when(marketingContentTaskRepository.countOverdueMarketingContentTasksByProjectId(project.getId())).thenReturn(2L);

        ProjectCollaborationContextDto context = projectOverviewService.getProjectContext(project.getId());

        assertThat(context.projectStatus()).isEqualTo(CollaborationStatus.ACTIVE.name());
        assertThat(context.collaborationContext().totalCollaborations()).isEqualTo(3);
        assertThat(context.resourceContext().totalResources()).isEqualTo(4);
        assertThat(context.resourceContext().openRequests()).isEqualTo(5);
        assertThat(context.marketingContext().activeCampaigns()).isEqualTo(2);
        assertThat(context.marketingContext().overdueTasks()).isEqualTo(2);
        assertThat(context.executionSummary().hasAnyDelay()).isTrue();
        assertThat(context.executionSummary().hasBlockingExecutionRisk()).isTrue();

        verify(sharedResourceRepository, never()).findAllByCollaboration_Project_IdOrderByCreatedAtDesc(project.getId());
        verify(resourceRequestRepository, never()).findAllByCollaboration_Project_IdOrderByCreatedAtDesc(project.getId());
        verify(marketingCollaborationRepository, never()).findAllByCollaboration_Project_IdOrderByCreatedAtDesc(project.getId());
        verify(marketingContentTaskRepository, never()).findAllByMarketingCollaboration_Collaboration_Project_IdOrderByDueDateAsc(project.getId());
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
}

