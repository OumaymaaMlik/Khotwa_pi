/** Compétence telle que renvoyée par l’API talents (objet ou chaîne selon backend). */
export interface TalentCompetence {
  nom: string;
  niveau?: number;
}

export interface TalentProfile {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  competences: TalentCompetence[] | string;
  diplome: string;
  disponible: boolean;
  scoreMatch?: number;
}

export interface Annonce {
  id: number;
  titre: string;
  description?: string;
  typePoste: string;
  competencesRequises: string;
  localisation?: string;
  startupNom?: string;
  startupId?: number;
}

/** Réponse algo de scoring (MatchingResultDTO côté Spring). */
export interface MatchingResultDTO {
  talentId: number;
  nomTalent: string;
  emailTalent: string;
  annonceId: number;
  titreAnnonce: string;
  matchingScore: number;
  competencesCommunes: string[];
  competencesManquantes: string[];
  niveau: string;
}

export interface CreateAnnonceRequest {
  titre: string;
  description: string;
  typePoste: string;
  competencesRequises: string;
  startupId: number;
}

/** Entité `TalentProfile` renvoyée par `/api/talents` (backend JPA). */
export interface TalentProfileEntity {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  bio?: string;
  competences?: string;
  diplomes?: string;
  niveauExperience?: string;
  cvUrl?: string;
  linkedinUrl?: string;
}

/** Candidature — champs alignés sur un DTO Spring typique (ajuster si besoin). */
export interface Candidature {
  id?: number;
  talentId?: number;
  annonceId?: number;
  titreAnnonce?: string;
  statut?: string;
  message?: string;
  datePostulation?: string;
  createdAt?: string;
}

export interface PostulerRequest {
  talentId: number;
  annonceId: number;
  message?: string;
  /** Pour l’affichage si enregistrement local (sans API). */
  titreAnnonce?: string;
}

export interface TalentAiAdviceRequest {
  goal: string;
  competences: string[];
  niveauExperience?: string;
  bio?: string;
}

export interface TalentAiAdviceResponse {
  resume: string;
  pointsForts: string[];
  competencesPrioritaires: string[];
  nextActions: string[];
}

/** Spring AI — assistant recrutement entrepreneur (`POST /api/ai/hiring-advice`). */
export interface HiringAiRequest {
  titre: string;
  typePoste: string;
  competencesRequises: string;
  metiers?: string[];
  localisation?: string;
  contexte?: string;
  startupStage?: string;
  experienceYears?: number;
}

export interface HiringAiResponse {
  fichePoste: string;
  competencesSuggerees: string[];
  questionsEntretien: string[];
  checklistOnboarding: string[];
  risquesOuGaps: string[];
}

export interface MatchingInsight {
  talentId: number;
  jobId: number;
  score: number;
  confidenceScore: number;
  explanation: string[];
  missingSkills: string[];
  matchedSkills: string[];
}

export interface SkillGapAnalysis {
  talentId: number;
  jobId: number;
  missingSkills: string[];
  recommendedLearningPath: string[];
}

export interface AiRecommendation {
  id: number;
  type: 'HIRING' | 'TALENT';
  content: string;
  confidenceScore: number;
  createdAt: string;
  relatedJobId?: number;
  relatedTalentId?: number;
}