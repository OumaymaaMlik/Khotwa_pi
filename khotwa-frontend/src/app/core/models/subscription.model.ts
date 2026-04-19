import { PlanType, User } from './user.model';

export type SubscriptionStatus = 'ACTIVE' | 'EXPIRED' | 'CANCELLED' | 'PENDING';

export interface Subscription {
  idSubscription?: number;
  plan: PlanType;
  statut: SubscriptionStatus;
  dateDebut: Date | string;
  dateFin: Date | string;
  autoRenouvellement: boolean;
  paiementRef?: string;
  idUser?: number;
  user?: User;
  planOfferId?: number;
  planOffer?: PlanOffer;
  pendingPlanOffer?: PlanOffer;
  pendingPlan?: PlanType;
  previousStatut?: SubscriptionStatus;
}

export interface PlanOffer {
  id?: number;
  type: PlanType;
  label: string;
  prix: number;
  duree: number;
  description: string;
  avantages: string;
}

export { PlanType };
export interface UpgradeSuggestion {
  shouldSuggest: boolean;
  institutionalPlanOfferId?: number;
  institutionalPlanLabel?: string;
  institutionalDescription?: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercent?: number;
  premiumCount?: number;
  institutionalCount?: number;
  message?: string;
}