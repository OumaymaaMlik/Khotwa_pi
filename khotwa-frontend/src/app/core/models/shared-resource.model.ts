export type ResourceType =
  | 'FUNDING'
  | 'EQUIPMENT'
  | 'SOFTWARE'
  | 'SERVICE'
  | 'EXPERTISE'
  | 'OTHER';

export type AvailabilityStatus = 'AVAILABLE' | 'LIMITED' | 'UNAVAILABLE';

export interface SharedResource {
  id: number;
  collaborationId: number;
  ownerUserId: number;
  ownerUserName: string;
  name: string;
  description?: string | null;
  resourceType: ResourceType;
  availabilityStatus: AvailabilityStatus;
  quantity?: number | null;
  createdAt: string;
}

export interface CreateSharedResourcePayload {
  collaborationId: number;
  name: string;
  description?: string | null;
  resourceType: ResourceType;
  availabilityStatus: AvailabilityStatus;
  quantity?: number | null;
}
