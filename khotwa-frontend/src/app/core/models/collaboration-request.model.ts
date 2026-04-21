import { CollaborationType } from './collaboration.model';

export type RequestStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';
export type CollaborationRequestScenario = 'PROJECT_INVITATION' | 'COLLABORATION_JOIN_REQUEST';

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
  targetCollaborationId?: number | null;
  targetCollaborationType?: CollaborationType | null;
  type: CollaborationType;
  status: RequestStatus;
  createdAt: string;
  respondedAt: string | null;
}

export interface SendCollaborationRequestRequest {
  projectId?: number | null;
  type: CollaborationType;
  targetUserId?: number | null;
  targetCollaborationId?: number | null;
}
