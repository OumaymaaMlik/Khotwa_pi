// ── Types partagés (source unique de vérité) ──────────────────────
export type UserRole = 'admin' | 'entrepreneur' | 'coach' | 'visitor';
export type PlanType = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';

export interface User {
  idUser?: number;
  id: string;
  nom: string;
  prenom: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  email: string;
  role: UserRole;
  planType?: PlanType;
  pendingPlan?: PlanType;
  avatar?: string;
  startup?: string;
  phoneNumber?: string;
  /** Profil talent Spring (`/api/talents`) — requis pour postuler. */
  talentProfileId?: number;
}
