import { CollaborationType } from './collaboration.model';

export type RequestStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';
export type CollaborationRequestScenario = 'JOIN_REQUEST' | 'COLLAB_INVITATION';

export interface CollaborationRequest {
  id: number;
  requesterUserId: number;
  requesterUserName?: string;
  requesterUserEmail?: string;
  targetUserId: number;
  targetUserName?: string;
  targetUserEmail?: string;
  projectId: number;
  projectName?: string;
  scenario: CollaborationRequestScenario;
  targetCollaborationId: number;
  targetCollaborationType: CollaborationType;
  status: RequestStatus;
  createdAt: string;
  processedAt: string | null;
}

export interface SendCollaborationRequestRequest {
  targetUserId?: number | null;
  targetCollaborationId: number;
}
