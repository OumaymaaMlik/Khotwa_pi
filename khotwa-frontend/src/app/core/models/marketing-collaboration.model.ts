export type CampaignType =
  | 'SOCIAL_MEDIA'
  | 'EMAIL_MARKETING'
  | 'CONTENT_MARKETING'
  | 'PAID_ADS'
  | 'EVENT'
  | 'OTHER';

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
