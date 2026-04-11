export type ProjetStatut = 'in_progress' | 'suspended' | 'completed';
export type TacheStatut = 'a_faire' | 'in_progress' | 'pending_validation' | 'completede';
export type TachePriorite = 'basse' | 'normal' | 'high' | 'critical';

export interface Document {
  id: string;
  nom: string;
  type: 'pdf' | 'image' | 'xlsx' | 'mp4' | 'autre';
  url: string;
  taille: string;
  uploadedAt: Date;
}

export interface SousTache {
  id: string;
  titre: string;
  completede: boolean;
}

export interface Tache {
  id: string;
  titre: string;
  description: string;
  status: TacheStatut;
  priorite: TachePriorite;
  deadline: Date;
  sousTaches: SousTache[];
  documents: Document[];
  etapeId: string;
  projetId: string;
  slaJours: number;
  derniereMaj: Date;
}

export interface Etape {
  id: string;
  titre: string;
  ordre: number;
  projetId: string;
  taches: Tache[];
  dateDebut: Date;
  dateFin: Date;
}

export interface Projet {
  id: string;
  titre: string;
  description: string;
  status: ProjetStatut;
  progression: number;
  entrepreneurId: string;
  coachId?: string;
  etapes: Etape[];
  createdAt: Date;
  updatedAt: Date;
}
