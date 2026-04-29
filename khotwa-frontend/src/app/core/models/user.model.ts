// ── Types partagés (source unique de vérité) ──────────────────────
export type UserRole = 'ADMIN' | 'ENTREPRENEUR' | 'COACH' | 'VISITOR';
export type PlanType = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';
export type OrganizationType = 'STARTUP' | 'INCUBATOR' | 'ENTERPRISE' | 'UNIVERSITY' | 'NGO' | 'OTHER';

export interface OrganizationSummary {
  id: number;
  name: string;
  type?: OrganizationType;
  code?: string;
  token: string;
  idUser: number;
  emailAddress: string;
  role: UserRole;
  mustChangePassword: boolean;
}

export interface User {
  talentProfileId: number;
  idUser?: number;
  id?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  role: UserRole;
  planType: PlanType | null;
  pendingPlan: PlanType | null;
  avatar: string | null;
  startup: string | null;
  phoneNumber: string | null;
  mustChangePassword: boolean;
}


/** Payload envoyé à POST /api/auth/login */
export interface LoginRequest {
  emailAddress: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  role?: string;
  avatar?: string;
  startup?: string;
  organizationId?: number;
  organizationName?: string;
  organizations?: OrganizationSummary[];
  phoneNumber?: string;
  mustChangePassword?: boolean;
  talentProfileId?: number;
}



export interface UserResponse {
  idUser: number;
  avatar?: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  pendingPlan?: PlanType;
  phoneNumber?: string;
  planType?: PlanType;
  role: UserRole;
  startup?: string;
  organizationId?: number;
  organizationName?: string;
  organizations?: OrganizationSummary[];
  mustChangePassword: boolean;
  specialite?: string;    // AJOUT — ex: "IA_DATA", "FINTECH"
  disponibilite?: string; // AJOUT — ex: "2025-01-01/2025-06-30"
}
