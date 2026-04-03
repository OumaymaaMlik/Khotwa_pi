import { PlanType } from './user.model';

export type ResourceType   = 'PDF' | 'VIDEO' | 'EXCEL' | 'WORD' | 'IMAGE' | 'LINK';
export type ProgressStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Ressource {
  id: string;
  titre: string;
  description: string;
  type: ResourceType;
  planType?: PlanType;
  categorie?: string;
  tags: string[];
  url: string;
  taille?: string;
  dureeMin?: number;
  progression?: number;
  lu: boolean;
  urlExterne?: string;
}
