import { PlanType } from './user.model';

export type EvenementType   = 'FORMATION' | 'PITCH' | 'WEBINAR' | 'COACHING';
export type EvenementStatus = 'PENDING' | 'ACCEPTED' | 'CANCELLED';

export interface Evenement {
  idEvenement: number;
  titre: string;
  type: EvenementType;
  date: string;
  heure: string;
  intervenant: string;
  lienMeet?: string;
  description: string;
  placesTotal: number;
  placesRestantes: number;
  statut: EvenementStatus;
  creator?: { idUser: number };
  creatorId?: number | null;   // null = événement généré par l'IA
  planType: PlanType;
}

export { PlanType };