// ── Types partagés (source unique de vérité) ──────────────────────
export type UserRole = 'ADMIN' | 'COACH' | 'ENTREPRENEUR' | 'VISITOR';
export type PlanType = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';

export interface User {
  idUser?: number;
  id: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  role: UserRole;
  planType?: PlanType;
  pendingPlan?: PlanType;
  avatar?: string;
  startup?: string;
  phoneNumber?: string;
}
