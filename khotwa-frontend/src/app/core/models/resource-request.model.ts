import { ResourceType } from './shared-resource.model';

export type Urgency = 'LOW' | 'MEDIUM' | 'HIGH';
export type ResourceRequestStatus = 'OPEN' | 'MATCHED' | 'FULFILLED' | 'CANCELLED';

export interface ResourceRequest {
  id: number;
  collaborationId: number;
  requesterUserId: number;
  requesterUserName: string;
  title: string;
  description?: string | null;
  resourceType: ResourceType;
  urgency: Urgency;
  status: ResourceRequestStatus;
  matchedResourceId?: number | null;
  matchedResourceName?: string | null;
  createdAt: string;
}

export interface CreateResourceRequestPayload {
  collaborationId: number;
  title: string;
  description?: string | null;
  resourceType: ResourceType;
  urgency: Urgency;
}

export interface UpdateResourceRequestStatusPayload {
  status: ResourceRequestStatus;
  matchedResourceId?: number | null;
}
