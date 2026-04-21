export type ContentType =
  | 'POST'
  | 'VIDEO'
  | 'ARTICLE'
  | 'EMAIL'
  | 'DESIGN'
  | 'OTHER';

export type Platform =
  | 'FACEBOOK'
  | 'INSTAGRAM'
  | 'LINKEDIN'
  | 'TIKTOK'
  | 'YOUTUBE'
  | 'EMAIL'
  | 'WEBSITE'
  | 'OTHER';

export type MarketingTaskStatus = 'TODO' | 'IN_PROGRESS' | 'READY' | 'PUBLISHED';

export interface MarketingContentTask {
  id: number;
  marketingCollaborationId: number;
  assignedUserId: number;
  assignedUserName: string;
  title: string;
  description?: string | null;
  contentType: ContentType;
  platform: Platform;
  status: MarketingTaskStatus;
  dueDate?: string | null;
  publishedAt?: string | null;
}

export interface CreateMarketingContentTaskPayload {
  marketingCollaborationId: number;
  assignedUserId: number;
  title: string;
  description?: string | null;
  contentType: ContentType;
  platform: Platform;
  dueDate?: string | null;
}
