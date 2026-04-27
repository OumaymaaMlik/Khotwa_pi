export type SecteurProjet =
  | 'TECHNOLOGIE_LOGICIEL'
  | 'FINTECH'
  | 'ECOMMERCE_RETAIL'
  | 'SANTE_MEDTECH'
  | 'EDUCATION_EDTECH'
  | 'AGRICULTURE_AGRITECH'
  | 'ENERGIE_CLEANTECH'
  | 'MOBILITE_LOGISTIQUE'
  | 'INDUSTRIE_MANUFACTURING'
  | 'IMMOBILIER_PROPTECH'
  | 'TOURISME_HOSPITALITE'
  | 'MEDIA_COMMUNICATION'
  | 'IA_DATA'
  | 'CYBERSECURITE'
  | 'SERVICES_B2B';

export const SECTEUR_PROJET_OPTIONS: Array<{ value: SecteurProjet; label: string }> = [
  { value: 'TECHNOLOGIE_LOGICIEL', label: 'Technologie & Logiciel' },
  { value: 'FINTECH', label: 'FinTech' },
  { value: 'ECOMMERCE_RETAIL', label: 'E-commerce & Retail' },
  { value: 'SANTE_MEDTECH', label: 'Sante & MedTech' },
  { value: 'EDUCATION_EDTECH', label: 'Education & EdTech' },
  { value: 'AGRICULTURE_AGRITECH', label: 'Agriculture & AgriTech' },
  { value: 'ENERGIE_CLEANTECH', label: 'Energie & CleanTech' },
  { value: 'MOBILITE_LOGISTIQUE', label: 'Mobilite & Logistique' },
  { value: 'INDUSTRIE_MANUFACTURING', label: 'Industrie & Manufacturing' },
  { value: 'IMMOBILIER_PROPTECH', label: 'Immobilier & PropTech' },
  { value: 'TOURISME_HOSPITALITE', label: 'Tourisme & Hospitalite' },
  { value: 'MEDIA_COMMUNICATION', label: 'Media & Communication' },
  { value: 'IA_DATA', label: 'IA & Data' },
  { value: 'CYBERSECURITE', label: 'Cybersecurite' },
  { value: 'SERVICES_B2B', label: 'Services B2B' },
];
