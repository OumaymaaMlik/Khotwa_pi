// ── Types partagés (source unique de vérité) ──────────────────────
export type UserRole = 'ADMIN' | 'COACH' | 'ENTREPRENEUR' | 'VISITOR';
export type PlanType = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';
export type OrganizationType = 'STARTUP' | 'INCUBATOR' | 'ENTERPRISE' | 'UNIVERSITY' | 'NGO' | 'OTHER';

export interface OrganizationSummary {
  id: number;
  name: string;
  type?: OrganizationType;
  code?: string;
}

export interface User {
  idUser?: number;
  id?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  role: UserRole;
  planType?: PlanType;
  pendingPlan?: PlanType;
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