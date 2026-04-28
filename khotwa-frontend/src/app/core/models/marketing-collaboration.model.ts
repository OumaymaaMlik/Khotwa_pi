export type CampaignType =
  | 'CROSS_PROMOTION'
  | 'EVENT_PROMOTION';

export type MarketingCollaborationStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface MarketingCollaboration {
  id: number;
  collaborationId: number;
  title: string;
  description?: string | null;
  objective: string;
  campaignType: CampaignType;
  status: MarketingCollaborationStatus;
  startDate?: string | null;
  endDate?: string | null;
  createdAt: string;
}

export interface CreateMarketingCollaborationPayload {
  collaborationId: number;
  title: string;
  description?: string | null;
  objective: string;
  campaignType: CampaignType;
  startDate?: string | null;
  endDate?: string | null;
}

export interface UpdateMarketingCollaborationStatusPayload {
  status: MarketingCollaborationStatus;
}
