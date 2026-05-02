export interface OffreActiveDTO {
  id: number;
  titre: string;
  nombreCandidatures: number;
}

export interface AdminDashboardDTO {
  totalOffres: number;
  totalCandidats: number;
  offresAvecCandidatures: number;
  tauxContactEntrepreneurs: number;
  tempsMoyenReponse: number;
  offresPlusActives: OffreActiveDTO[];
}
