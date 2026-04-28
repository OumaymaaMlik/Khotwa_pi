export type WeeklyCollaborationRiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface GlobalCollaborationHealth {
  collaborationsCreatedThisWeek: number;
  activeCollaborations: number;
  suspendedCollaborations: number;
  closedCollaborations: number;
  pendingCollaborationRequests: number;
  acceptedRequestsThisWeek: number;
  rejectedRequestsThisWeek: number;
  newMembersThisWeek: number;
  invitationsSentThisWeek: number;
  invitationsAcceptedThisWeek: number;
  invitationsRejectedThisWeek: number;
  collaborationsByType: Record<string, number>;
  requestConversionRate: number;
  invitationAcceptanceRate: number;
}

export interface ResourceCollaborationAnalysis {
  openResourceRequests: number;
  fulfilledResourceRequests: number;
  cancelledResourceRequests: number;
  totalResourceRequests: number;
  resourceFulfillmentRate: number;
  resourceBacklogRate: number;
}

export interface MarketingCollaborationAnalysis {
  activeMarketingCampaigns: number;
  completedMarketingCampaigns: number;
  overdueMarketingTasks: number;
  publishedMarketingTasks: number;
  totalMarketingTasks: number;
  overdueTaskRatio: number;
  marketingExecutionRate: number;
}

export interface WeeklyCollaborationReport {
  id: number;
  weekStartDate: string;
  weekEndDate: string;
  generatedAt: string;
  collaborationsCreatedThisWeek: number;
  activeCollaborations: number;
  suspendedCollaborations: number;
  closedCollaborations: number;
  collaborationsClosedThisWeek: number;
  collaborationsByType: Record<string, number>;
  pendingCollaborationRequests: number;
  acceptedRequestsThisWeek: number;
  rejectedRequestsThisWeek: number;
  newMembersThisWeek: number;
  invitationsSentThisWeek: number;
  invitationsAcceptedThisWeek: number;
  invitationsRejectedThisWeek: number;
  openResourceRequests: number;
  fulfilledResourceRequests: number;
  cancelledResourceRequests: number;
  activeMarketingCampaigns: number;
  completedMarketingCampaigns: number;
  overdueMarketingTasks: number;
  publishedMarketingTasks: number;
  totalMarketingTasks: number;
  riskLevel: WeeklyCollaborationRiskLevel;
  globalCollaborationHealth: GlobalCollaborationHealth;
  resourceCollaborationAnalysis: ResourceCollaborationAnalysis;
  marketingCollaborationAnalysis: MarketingCollaborationAnalysis;
}
