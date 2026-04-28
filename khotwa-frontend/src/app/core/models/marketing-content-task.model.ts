export type ContentType =
  | 'POST'
  | 'REEL'
  | 'VIDEO';

export type Platform =
  | 'INSTAGRAM'
  | 'FACEBOOK'
  | 'LINKEDIN'
  | 'TIKTOK'
  | 'YOUTUBE'
  | 'X';

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

export interface UpdateMarketingContentTaskStatusPayload {
  status: MarketingTaskStatus;
  publishedAt?: string | null;
}
