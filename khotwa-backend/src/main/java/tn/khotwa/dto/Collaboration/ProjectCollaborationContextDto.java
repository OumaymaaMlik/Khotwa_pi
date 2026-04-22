package tn.khotwa.dto.collaboration;

public record ProjectCollaborationContextDto(
        Long projectId,
        String projectName,
        String projectDescription,
        String projectStatus,
        Long projectOwnerId,
        String projectOwnerName,
        State state,
        Coaching coaching,
        ExecutionSummary executionSummary,
        CollaborationContext collaborationContext,
        ResourceContext resourceContext,
        MarketingContext marketingContext
) {

    public record State(
            String etatValidation,
            String statutProjet
    ) {
    }

    public record Coaching(
            boolean hasAssignedCoach
    ) {
    }

    public record ExecutionSummary(
            boolean hasAnyDelay,
            boolean hasBlockingExecutionRisk
    ) {
    }

    public record CollaborationContext(
            int totalCollaborations,
            int activeCollaborations,
            int suspendedCollaborations,
            int closedCollaborations
    ) {
    }

    public record ResourceContext(
            int totalResources,
            int availableResources,
            int openRequests,
            int highPriorityOpenRequests
    ) {
    }

    public record MarketingContext(
            int totalCampaigns,
            int activeCampaigns,
            int totalTasks,
            int publishedTasks,
            int overdueTasks
    ) {
    }
}

