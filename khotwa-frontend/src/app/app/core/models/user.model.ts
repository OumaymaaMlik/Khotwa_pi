// ── Types partagés (source unique de vérité) ──────────────────────
export type UserRole = 'admin' | 'entrepreneur' | 'coach';
export type PlanType = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';

export interface User {
  idUser: number;
  nom: string;
  prenom: string;
  email: string;
  role: UserRole;
  planType?: PlanType;
   avatar?: string;
  startup?: string;
  phoneNumber?: string;
}
