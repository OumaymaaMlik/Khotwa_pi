// ── Types alignés avec le backend Spring Boot ────────────────────
export type UserRole = 'ADMIN' | 'ENTREPRENEUR' | 'COACH';
export type PlanType = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';

/** Réponse du backend POST /api/auth/login */
export interface AuthResponse {
  token: string;
  idUser: number;
  emailAddress: string;
  role: UserRole;
  mustChangePassword: boolean;
}

/** Réponse du backend GET /api/users/me */
export interface UserResponse {
  idUser: number;
  avatar: string | null;
  emailAddress: string;
  firstName: string;
  lastName: string;
  pendingPlan: PlanType | null;
  phoneNumber: string | null;
  planType: PlanType | null;
  role: UserRole;
  startup: string | null;
  mustChangePassword: boolean;
}

/** Modèle local enrichi (fusionné AuthResponse + UserResponse) */
export interface User {
  idUser: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
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
  phoneNumber?: string;
  startup?: string;
}