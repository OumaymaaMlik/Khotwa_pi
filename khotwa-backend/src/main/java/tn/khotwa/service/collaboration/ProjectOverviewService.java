package tn.khotwa.service.collaboration;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.collaboration.ProjectCollaborationContextDto;
import tn.khotwa.entity.collaboration.Project;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.collaboration.AvailabilityStatus;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.collaboration.ResourceRequestStatus;
import tn.khotwa.enums.collaboration.TaskStatus;
import tn.khotwa.enums.collaboration.Urgency;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.collaboration.CollaborationRepository;
import tn.khotwa.repository.collaboration.MarketingCollaborationRepository;
import tn.khotwa.repository.collaboration.MarketingContentTaskRepository;
import tn.khotwa.repository.collaboration.ProjectRepository;
import tn.khotwa.repository.collaboration.ResourceRequestRepository;
import tn.khotwa.repository.collaboration.SharedResourceRepository;
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

        int totalCollaborations = toInt(collaborationRepository.countByProject_Id(projectId));
        int activeCollaborations = toInt(collaborationRepository.countByProject_IdAndStatus(
                projectId,
                CollaborationStatus.ACTIVE
        ));
        int suspendedCollaborations = toInt(collaborationRepository.countByProject_IdAndStatus(
                projectId,
                CollaborationStatus.SUSPENDED
        ));
        int closedCollaborations = toInt(collaborationRepository.countByProject_IdAndStatus(
                projectId,
                CollaborationStatus.CLOSED
        ));

        int totalResources = toInt(sharedResourceRepository.countByCollaboration_Project_IdAndCollaboration_Status(
                projectId,
                CollaborationStatus.ACTIVE
        ));
        int availableResources = toInt(sharedResourceRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndAvailabilityStatus(
                projectId,
                CollaborationStatus.ACTIVE,
                AvailabilityStatus.AVAILABLE
        ));
        int openRequests = toInt(resourceRequestRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndStatus(
                projectId,
                CollaborationStatus.ACTIVE,
                ResourceRequestStatus.OPEN
        ));
        int highPriorityOpenRequests = toInt(
                resourceRequestRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndStatusAndUrgency(
                        projectId,
                        CollaborationStatus.ACTIVE,
                        ResourceRequestStatus.OPEN,
                        Urgency.HIGH
                )
        );

        int totalCampaigns = toInt(marketingCollaborationRepository.countByCollaboration_Project_IdAndCollaboration_Status(
                projectId,
                CollaborationStatus.ACTIVE
        ));
        int activeCampaigns = toInt(
                marketingCollaborationRepository.countByCollaboration_Project_IdAndCollaboration_StatusAndStatus(
                        projectId,
                        CollaborationStatus.ACTIVE,
                        MarketingCollaborationStatus.ACTIVE
                )
        );
        int totalTasks = toInt(marketingContentTaskRepository
                .countByMarketingCollaboration_Collaboration_Project_IdAndMarketingCollaboration_Collaboration_Status(
                        projectId,
                        CollaborationStatus.ACTIVE
                ));
        int publishedTasks = toInt(marketingContentTaskRepository
                .countByMarketingCollaboration_Collaboration_Project_IdAndMarketingCollaboration_Collaboration_StatusAndStatus(
                        projectId,
                        CollaborationStatus.ACTIVE,
                        TaskStatus.PUBLISHED
                ));
        int overdueTasks = toInt(marketingContentTaskRepository.countOverdueMarketingContentTasksByProjectId(projectId));

        boolean hasAnyDelay = overdueTasks > 0;
        boolean hasBlockingExecutionRisk = suspendedCollaborations > 0
                || highPriorityOpenRequests > 0
                || overdueTasks > 0;

        String projectStatus = determineProjectStatus(activeCollaborations, suspendedCollaborations, closedCollaborations);
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
                        totalCollaborations,
                        activeCollaborations,
                        suspendedCollaborations,
                        closedCollaborations
                ),
                new ProjectCollaborationContextDto.ResourceContext(
                        totalResources,
                        availableResources,
                        openRequests,
                        highPriorityOpenRequests
                ),
                new ProjectCollaborationContextDto.MarketingContext(
                        totalCampaigns,
                        activeCampaigns,
                        totalTasks,
                        publishedTasks,
                        overdueTasks
                )
        );
    }

    private String determineProjectStatus(int activeCollaborations, int suspendedCollaborations, int closedCollaborations) {
        if (activeCollaborations > 0) {
            return CollaborationStatus.ACTIVE.name();
        }
        if (suspendedCollaborations > 0) {
            return CollaborationStatus.SUSPENDED.name();
        }
        if (closedCollaborations > 0) {
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

    private int toInt(long value) {
        return Math.toIntExact(value);
    }
}

