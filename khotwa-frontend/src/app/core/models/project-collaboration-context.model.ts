export interface ProjectCollaborationContext {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectStatus: string;
  projectOwnerId: number;
  projectOwnerName: string;
  collaborationContext: {
    totalCollaborations: number;
    activeCollaborations: number;
    suspendedCollaborations: number;
    closedCollaborations: number;
  };
  resourceContext: {
    totalResources: number;
    availableResources: number;
    openRequests: number;
    highPriorityOpenRequests: number;
  };
  marketingContext: {
    totalCampaigns: number;
    activeCampaigns: number;
    totalTasks: number;
    publishedTasks: number;
    overdueTasks: number;
  };
}
