import { PlanType } from './user.model';

export type SubscriptionStatus = 'ACTIVE' | 'EXPIRED' | 'CANCELLED' | 'PENDING';

export interface Abonnement {
  idSubscription: number;
  idUser: number;
  plan: PlanType;
  statut: SubscriptionStatus;
  dateDebut: string;
  dateFin: string | null;
  autoRenouvellement: boolean;
  paiementRef?: string;
}

export interface PlanOffer {
  id: number;
  type: PlanType;
  label: string;
  prix: number;
  duree: number;
  description: string;
  avantages: string;
}
