import { SecteurProjet } from './secteur.model';

/* ============================================================================
   Status and Priority Types
   ============================================================================ */

export type ProjetStatut = 'in_progress' | 'suspended' | 'completed';
export type EtatValidation = 'BROUILLON' | 'SOUMIS_ADMIN' | 'AFFECTE_COACH' | 'EN_REVUE' | 'A_CORRIGER' | 'VALIDE' | 'REFUSE';
export type ProjetCorrectionStatut = 'DEMANDEE' | 'RESOUMISE_PAR_ENTREPRENEUR' | 'APPROUVEE_PAR_COACH' | 'RECORRECTION_DEMANDEE';
export type StadeProjet = 'IDEE' | 'POC' | 'MVP' | 'PROTOTYPE' | 'COMMERCIALISATION' | 'SCALING';
export type TachePriorite = 'basse' | 'normal' | 'haute' | 'critique';
export type TacheStatut = 'A_FAIRE' | 'EN_COURS' | 'A_CORRIGER' | 'EN_CORRECTION' | 'TERMINEE' | 'EN_RETARD' | 'BLOQUEE';

/* ============================================================================
   Models
   ============================================================================ */

export interface Document {
  id: number;
  nomOriginal: string;
  nomFichier?: string;
  typeContenu: string;
  cheminStockage?: string;
  tailleFichier?: number;
  dateUpload: string;
  url?: string;
}

export interface SousTache {
  id: number;
  titre: string;
  description?: string;
  completede?: boolean;
  tacheId?: number;
}

export interface CountdownInfo {
  id: number;
  titre: string;
  type: 'TACHE' | 'SOUS_TACHE';
  statut: string;
  dateDebut?: string;
  dateFin?: string;
  joursRestants?: number;
  retardJours: number;
  enRetard: boolean;
  urgence: boolean;         // deadline dans <= 3 jours et pas encore commencé
  pasEncoreCommence: boolean;
  parentId: number;
}

export interface Tache {
  id: number;
  titre: string;
  description?: string;
  priorite: TachePriorite;
  deadline?: Date;
  sousTaches?: SousTache[];
  documents?: Document[];
  etapeId?: string;
  projetId?: string;
  slaJours?: number;
  derniereMaj?: Date;
}

export interface Etape {
  id?: string;
  titre: string;
  ordre: number;
  projetId?: string;
  taches?: Tache[];
  dateDebut?: Date;
  dateFin?: Date;
}

/* ============================================================================
   BMC — Business Model Canvas (sérialisé en JSON dans le champ businessModel)
   ============================================================================ */
export interface BmcData {
  propositionValeur: string;
  segmentsClientele: string;
  canaux: string;
  relationsClients: string;
  sourcesRevenus: string;
  ressourcesCles: string;
  activitesCles: string;
  structureCouts: string;
  partenaires: string;
}

export const EMPTY_BMC: BmcData = {
  propositionValeur: '',
  segmentsClientele: '',
  canaux: '',
  relationsClients: '',
  sourcesRevenus: '',
  ressourcesCles: '',
  activitesCles: '',
  structureCouts: '',
  partenaires: '',
};

/** Parse le champ businessModel (JSON ou texte brut) vers BmcData */
export function parseBmc(businessModel?: string): BmcData {
  if (!businessModel) { 
    return { ...EMPTY_BMC }; 
  }
  try {
    const parsed = JSON.parse(businessModel);
    if (typeof parsed === 'object' && parsed !== null) {
      return {
        propositionValeur: parsed.propositionValeur || '',
        segmentsClientele: parsed.segmentsClientele || '',
        canaux: parsed.canaux || '',
        relationsClients: parsed.relationsClients || '',
        sourcesRevenus: parsed.sourcesRevenus || '',
        ressourcesCles: parsed.ressourcesCles || '',
        activitesCles: parsed.activitesCles || '',
        structureCouts: parsed.structureCouts || '',
        partenaires: parsed.partenaires || '',
      };
    }
  } catch (_) {}
  // Fallback : texte libre dans propositionValeur
  return { ...EMPTY_BMC, propositionValeur: businessModel };
}

/** Sérialise BmcData en JSON string pour stockage dans businessModel */
export function stringifyBmc(bmc: BmcData): string {
  return JSON.stringify(bmc);
}

export interface Projet {
  id: string;
  titre: string;
  description: string;
  status: ProjetStatut;
  submitted?: boolean;
  etatValidation?: EtatValidation;
  commentaireCorrectionCoach?: string;
  dateDemandeCorrection?: Date;
  statutCorrectionProjet?: ProjetCorrectionStatut;
  correctionResoumiseEnAttenteCoach?: boolean;
  stadeProjet?: StadeProjet;
  secteur?: SecteurProjet;
  problemeAdresse?: string;
  solutionProposee?: string;
  businessModel?: string; 
  bmc?: BmcData;          // Peut contenir du JSON (BmcData) ou du texte
  innovationDescription?: string;
  scalabiliteDescription?: string;
  pocDisponible?: boolean;
  dateDebutProjet?: Date;
  dateFinProjet?: Date;
  disciplineScore: number;
  progression: number;
  entrepreneurId: string;
  coachId?: string;
  etapes: Etape[];
  createdAt: Date;
  updatedAt: Date;

  // New: true only if a project-level correction is required
  projectCorrectionRequired?: boolean;
}

/* ============================================================================
   Helper Functions & Classes
   ============================================================================ */

/**
 * Get the badge color class for a project status
 */
export function getBadgeClassForStatus(status: ProjetStatut): string {
  switch (status) {
    case 'in_progress':
      return 'kh-badge--teal';
    case 'completed':
      return 'kh-badge--green';
    case 'suspended':
      return 'kh-badge--amber';
    default:
      return 'kh-badge--teal';
  }
}

/**
 * Get the badge color class for a task status
 */
export function getBadgeClassForTaskStatus(status: TacheStatut): string {
  if (status === 'EN_RETARD' || status === 'BLOQUEE' || status === 'A_CORRIGER') {
    return 'kh-badge--red';
  }
  if (status === 'EN_CORRECTION') {
    return 'kh-badge--amber';
  }
  return 'kh-badge--teal';
}

/**
 * Get the accent gradient for a project card
 */
export function getAccentGradientForStatus(status: ProjetStatut): string {
  switch (status) {
    case 'in_progress':
      return 'linear-gradient(180deg,#2ABFBF,#1a9999)';
    case 'completed':
      return 'linear-gradient(180deg,#27AE7A,#1a8a5e)';
    case 'suspended':
      return 'linear-gradient(180deg,#F5A623,#d4881e)';
    default:
      return 'linear-gradient(180deg,#2ABFBF,#1a9999)';
  }
}

/**
 * Determine discipline score level
 */
export function getDisciplineLevelClass(score: number): 'good' | 'watch' | 'risk' {
  if (score >= 30) {
    return 'good';
  }
  if (score >= 0) {
    return 'watch';
  }
  return 'risk';
}

/**
 * Format project status for display
 */
export function formatProjetStatusLabel(projet: Projet): string {
  if (projet.etatValidation === 'BROUILLON') {
    return 'Draft';
  }
  return projet.status.toUpperCase().replace('_', ' ');
}