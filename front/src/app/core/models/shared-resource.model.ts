export type ResourceType =
  | 'MATERIAL'
  | 'SOFTWARE'
  | 'HUMAN';

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
  availabilityStatus?: AvailabilityStatus | null;
  quantity?: number | null;
}

export interface UpdateSharedResourcePayload {
  name: string;
  description?: string | null;
  resourceType: ResourceType;
  quantity?: number | null;
}
