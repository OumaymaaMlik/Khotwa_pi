package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.Collaboration.ProjectCollaborationContextDto;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.MarketingCollaboration;
import tn.khotwa.entity.Collaboration.MarketingContentTask;
import tn.khotwa.entity.Collaboration.Project;
import tn.khotwa.entity.Collaboration.ResourceRequest;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.Collaboration.ResourceRequestStatus;
import tn.khotwa.enums.Collaboration.TaskStatus;
import tn.khotwa.enums.Collaboration.Urgency;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.Collaboration.CollaborationRepository;
import tn.khotwa.repository.Collaboration.MarketingCollaborationRepository;
import tn.khotwa.repository.Collaboration.MarketingContentTaskRepository;
import tn.khotwa.repository.Collaboration.ProjectRepository;
import tn.khotwa.repository.Collaboration.ResourceRequestRepository;
import tn.khotwa.repository.Collaboration.SharedResourceRepository;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectOverviewService {

    private static final String DEFAULT_PROJECT_DESCRIPTION =
            "Local collaboration workspace for resource and marketing activities.";
    private static final String LOCAL_PROJECT_STATE = "LOCAL_COLLABORATION_CONTEXT";
    private static final String NOT_STARTED_STATUS = "NOT_STARTED";

    private final ProjectRepository projectRepository;
    private final CollaborationRepository collaborationRepository;
    private final CollaborationMemberRepository collaborationMemberRepository;
    private final SharedResourceRepository sharedResourceRepository;
    private final ResourceRequestRepository resourceRequestRepository;
    private final MarketingCollaborationRepository marketingCollaborationRepository;
    private final MarketingContentTaskRepository marketingContentTaskRepository;
    private final CurrentUserService currentUserService;
    private final CollaborationAuthorizationService authorizationService;

    public ProjectCollaborationContextDto getProjectContext(Long projectId) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found."));
        User actor = currentUserService.requireCurrentUser();

        boolean isProjectCollaborationMember = collaborationMemberRepository.existsByProjectIdAndUserId(
                projectId,
                actor.getIdUser()
        );
        authorizationService.checkCanViewProject(actor, project, isProjectCollaborationMember);

        List<Collaboration> collaborations = collaborationRepository.findAllByProjectId(projectId);
        List<SharedResource> resources = sharedResourceRepository.findAllByProjectId(projectId);
        List<ResourceRequest> resourceRequests = resourceRequestRepository.findAllByProjectId(projectId);
        List<MarketingCollaboration> marketingCollaborations = marketingCollaborationRepository.findAllByProjectId(projectId);
        List<MarketingContentTask> marketingTasks = marketingContentTaskRepository.findAllByProjectId(projectId);

        int activeCollaborations = countCollaborationsByStatus(collaborations, CollaborationStatus.ACTIVE);
        int suspendedCollaborations = countCollaborationsByStatus(collaborations, CollaborationStatus.SUSPENDED);
        int closedCollaborations = countCollaborationsByStatus(collaborations, CollaborationStatus.CLOSED);

        int availableResources = (int) resources.stream()
                .filter(resource -> resource.getAvailabilityStatus() == AvailabilityStatus.AVAILABLE)
                .count();
        int openRequests = (int) resourceRequests.stream()
                .filter(this::isOpenResourceRequest)
                .count();
        int highPriorityOpenRequests = (int) resourceRequests.stream()
                .filter(this::isHighPriorityOpenRequest)
                .count();

        int activeCampaigns = (int) marketingCollaborations.stream()
                .filter(campaign -> campaign.getStatus() == MarketingCollaborationStatus.ACTIVE)
                .count();
        int publishedTasks = (int) marketingTasks.stream()
                .filter(task -> task.getStatus() == TaskStatus.PUBLISHED)
                .count();
        int overdueTasks = (int) marketingTasks.stream()
                .filter(this::isOverdueMarketingTask)
                .count();

        boolean hasAnyDelay = overdueTasks > 0;
        boolean hasBlockingExecutionRisk = suspendedCollaborations > 0
                || highPriorityOpenRequests > 0
                || overdueTasks > 0;

        String projectStatus = determineProjectStatus(collaborations);
        String projectDescription = buildProjectDescription(project);

        return new ProjectCollaborationContextDto(
                project.getId(),
                project.getName(),
                projectDescription,
                projectStatus,
                project.getOwner().getIdUser(),
                project.getOwner().getFullName(),
                new ProjectCollaborationContextDto.State(
                        LOCAL_PROJECT_STATE,
                        projectStatus
                ),
                // Legacy compatibility for the current frontend contract.
                new ProjectCollaborationContextDto.Coaching(false),
                new ProjectCollaborationContextDto.ExecutionSummary(
                        hasAnyDelay,
                        hasBlockingExecutionRisk
                ),
                new ProjectCollaborationContextDto.CollaborationContext(
                        collaborations.size(),
                        activeCollaborations,
                        suspendedCollaborations,
                        closedCollaborations
                ),
                new ProjectCollaborationContextDto.ResourceContext(
                        resources.size(),
                        availableResources,
                        openRequests,
                        highPriorityOpenRequests
                ),
                new ProjectCollaborationContextDto.MarketingContext(
                        marketingCollaborations.size(),
                        activeCampaigns,
                        marketingTasks.size(),
                        publishedTasks,
                        overdueTasks
                )
        );
    }

    private int countCollaborationsByStatus(List<Collaboration> collaborations, CollaborationStatus status) {
        return (int) collaborations.stream()
                .filter(collaboration -> collaboration.getStatus() == status)
                .count();
    }

    private boolean isOpenResourceRequest(ResourceRequest request) {
        return request.getStatus() == ResourceRequestStatus.OPEN
                || request.getStatus() == ResourceRequestStatus.MATCHED;
    }

    private boolean isHighPriorityOpenRequest(ResourceRequest request) {
        return request.getUrgency() == Urgency.HIGH && isOpenResourceRequest(request);
    }

    private boolean isOverdueMarketingTask(MarketingContentTask task) {
        return task.getDueDate() != null
                && task.getDueDate().isBefore(LocalDateTime.now())
                && task.getStatus() != TaskStatus.PUBLISHED;
    }

    private String determineProjectStatus(List<Collaboration> collaborations) {
        if (collaborations.stream().anyMatch(collaboration -> collaboration.getStatus() == CollaborationStatus.ACTIVE)) {
            return CollaborationStatus.ACTIVE.name();
        }
        if (collaborations.stream().anyMatch(collaboration -> collaboration.getStatus() == CollaborationStatus.SUSPENDED)) {
            return CollaborationStatus.SUSPENDED.name();
        }
        if (collaborations.stream().anyMatch(collaboration -> collaboration.getStatus() == CollaborationStatus.CLOSED)) {
            return CollaborationStatus.CLOSED.name();
        }
        return NOT_STARTED_STATUS;
    }

    private String buildProjectDescription(Project project) {
        if (project.getName() == null || project.getName().isBlank()) {
            return DEFAULT_PROJECT_DESCRIPTION;
        }
        return "Collaboration workspace for " + project.getName().trim() + ".";
    }
}
