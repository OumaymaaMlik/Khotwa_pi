import { CollaborationMember } from './collaboration-member.model';

export type CollaborationStatus = 'ACTIVE' | 'SUSPENDED' | 'CLOSED';
export const COLLABORATION_TYPES = ['MARKETING', 'RESOURCES'] as const;
export type CollaborationType = typeof COLLABORATION_TYPES[number];

export const COLLABORATION_TYPE_LABELS: Record<CollaborationType, string> = {
  MARKETING: 'Marketing',
  RESOURCES: 'Resources',
};

export function getCollaborationTypeLabel(type: CollaborationType | null | undefined): string {
  return type ? COLLABORATION_TYPE_LABELS[type] : 'Collaboration';
}

export interface Collaboration {
  id: number;
  projectId: number;
  projectName?: string;
  ownerId: number;
  ownerName?: string;
  ownerEmail?: string;
  status: CollaborationStatus;
  type: CollaborationType;
  members: CollaborationMember[];
}

export interface CreateCollaborationRequest {
  projectId: number;
  type: CollaborationType;
}

export interface UpdateCollaborationRequest {
  status: CollaborationStatus;
}
