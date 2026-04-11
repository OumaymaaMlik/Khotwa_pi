import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// ── Types alignés sur le backend ──────────────────────────────────────────────
export type StatutProjet    = 'EN_COURS' | 'SUSPENDU' | 'TERMINE' | 'ARCHIVE';
export type EtatValidation  = 'BROUILLON' | 'SOUMIS_ADMIN' | 'AFFECTE_COACH' | 'EN_REVUE' | 'VALIDE' | 'REFUSE' | 'A_CORRIGER';
export type StadeProjet     = 'IDEATION' | 'PRE_SEED' | 'SEED' | 'EARLY_STAGE' | 'GROWTH';
export type StatutTache     = 'A_FAIRE' | 'EN_COURS' | 'TERMINEE' | 'A_CORRIGER' | 'EN_CORRECTION' | 'EN_RETARD' | 'BLOQUEE';
export type PrioriteTache   = 'FAIBLE' | 'NORMALE' | 'HAUTE' | 'CRITIQUE';
export type TypeTache       = 'LIVRABLE' | 'REUNION' | 'FORMATION' | 'AUTRE';
export type RoleCoachProjet = 'PRINCIPAL' | 'OBSERVATEUR';

// Compatibilité ascendante avec ancien mock
export type ProjetStatut = 'in_progress' | 'suspended' | 'completed';

export interface ProjetResponseDto {
  id: number;
  nomStartup: string;
  description: string;
  secteur: string;
  problemeAdresse: string;
  solutionProposee: string;
  businessModel: string;
  stadeProjet: StadeProjet;
  innovationDescription: string;
  scalabiliteDescription: string;
  pocDisponible: boolean;
  dateCreation: string;
  dateSoumission: string;
  dateDerniereMiseAJour: string;
  dateArchivage: string;
  statutProjet: StatutProjet;
  etatValidation: EtatValidation;
  scoreDisciplineGlobal: number;
  entrepreneurId: number;
  entrepreneurNomAffiche: string;
  adminId: number;
}

export interface ProjetCreateRequestDto {
  nomStartup: string;
  description?: string;
  secteur?: string;
  problemeAdresse?: string;
  solutionProposee?: string;
  businessModel?: string;
  stadeProjet: StadeProjet;
  innovationDescription?: string;
  scalabiliteDescription?: string;
  pocDisponible?: boolean;
}

export interface ProjetUpdateRequestDto {
  nomStartup?: string;
  description?: string;
  secteur?: string;
  problemeAdresse?: string;
  solutionProposee?: string;
  businessModel?: string;
  stadeProjet?: StadeProjet;
  innovationDescription?: string;
  scalabiliteDescription?: string;
  pocDisponible?: boolean;
}

export interface TacheDto {
  id: number;
  titre: string;
  description: string;
  typeTache: TypeTache;
  priorite: PrioriteTache;
  statutTache: StatutTache;
  dateDebut: string;
  dateFin: string;
  retardJours: number;
  commentaireCoach: string;
  justificationEntrepreneur: string;
  scoreImpact: number;
  projetId: number;
  coachCreateurId: number;
}

export interface TacheCreateRequestDto {
  titre: string;
  description?: string;
  typeTache: TypeTache;
  priorite: PrioriteTache;
  dateDebut?: string;
  dateFin?: string;
  commentaireCoach?: string;
}

export interface SousTacheDto {
  id: number;
  titre: string;
  description: string;
  priorite: PrioriteTache;
  statutSousTache: StatutTache;
  dateDebut: string;
  dateFin: string;
  retardJours: number;
  commentaireCoach: string;
  justificationEntrepreneur: string;
  scoreImpact: number;
  tacheId: number;
}

export interface SousTacheCreateRequestDto {
  titre: string;
  description?: string;
  priorite: PrioriteTache;
  dateDebut?: string;
  dateFin?: string;
  commentaireCoach?: string;
}

export interface TacheStatutUpdateRequestDto {
  statutTache: StatutTache;
  commentaireCoach?: string;
  justificationEntrepreneur?: string;
}

export interface SousTacheStatutUpdateRequestDto {
  statutSousTache: StatutTache;
  commentaireCoach?: string;
  justificationEntrepreneur?: string;
}

export interface ProlongationRequestDto {
  nouvelleDateFin: string;
  justificationEntrepreneur: string;
}

export interface ProjetCoachResponseDto {
  id: number;
  projetId: number;
  coachId: number;
  coachNomAffiche: string;
  dateAffectation: string;
  affecteParAdminId: number;
  roleCoachProjet: RoleCoachProjet;
  motifReaffectation: string;
  actif: boolean;
}

export interface AffectationCoachRequestDto {
  coachId: number;
  adminId: number;
  roleCoachProjet: RoleCoachProjet;
}

export interface CoachDisponibiliteDto {
  coachId: number;
  nomAffiche: string;
  specialite: string;
  secteur: string;
  disponibilite: string;
  chargeActuelle: number;
  nombreProjetsActifs: number;
}

export interface DocumentDto {
  id: number;
  nomFichier: string;
  nomOriginal: string;
  typeContenu: string;
  tailleFichier: number;
  dateUpload: string;
  sousTacheId: number;
}

@Injectable({ providedIn: 'root' })
export class ProjetService {

  private readonly BASE = 'http://localhost:8084/khotwa';

  constructor(private http: HttpClient) {}

  // ── Helpers ───────────────────────────────────────────────────────────────

  private userId(): number {
    return Number(localStorage.getItem('user_id') ?? 1);
  }

  private role(): string {
    return localStorage.getItem('user_role') ?? 'ADMIN';
  }

  private h(): HttpHeaders {
    return new HttpHeaders({
      'X-User-Id':   String(this.userId()),
      'X-User-Role': this.role(),
    });
  }

  private p(key: string, value: string | number): HttpParams {
    return new HttpParams().set(key, String(value));
  }

  // ═══════════════════════════════════════════════════════════════════════
  // ENTREPRENEUR  →  /khotwa/entrepreneur/...
  // ═══════════════════════════════════════════════════════════════════════

  getProjetsEntrepreneur(entrepreneurId?: number): Observable<ProjetResponseDto[]> {
    const id = entrepreneurId ?? this.userId();
    return this.http.get<ProjetResponseDto[]>(
      `${this.BASE}/entrepreneur/projets`,
      { headers: this.h(), params: this.p('entrepreneurId', id) }
    );
  }

  createProjet(dto: ProjetCreateRequestDto, entrepreneurId?: number): Observable<ProjetResponseDto> {
    const id = entrepreneurId ?? this.userId();
    return this.http.post<ProjetResponseDto>(
      `${this.BASE}/entrepreneur/projets`, dto,
      { headers: this.h(), params: this.p('entrepreneurId', id) }
    );
  }

  updateProjet(projetId: number, dto: ProjetUpdateRequestDto, entrepreneurId?: number): Observable<ProjetResponseDto> {
    const id = entrepreneurId ?? this.userId();
    return this.http.put<ProjetResponseDto>(
      `${this.BASE}/entrepreneur/projets/${projetId}`, dto,
      { headers: this.h(), params: this.p('entrepreneurId', id) }
    );
  }

  soumettreProjet(projetId: number, entrepreneurId?: number): Observable<ProjetResponseDto> {
    const id = entrepreneurId ?? this.userId();
    return this.http.post<ProjetResponseDto>(
      `${this.BASE}/entrepreneur/projets/${projetId}/soumettre`, {},
      { headers: this.h(), params: this.p('entrepreneurId', id) }
    );
  }

  resoumettreCorrection(projetId: number, entrepreneurId?: number): Observable<ProjetResponseDto> {
    const id = entrepreneurId ?? this.userId();
    return this.http.post<ProjetResponseDto>(
      `${this.BASE}/entrepreneur/projets/${projetId}/resoumettre-correction`, {},
      { headers: this.h(), params: this.p('entrepreneurId', id) }
    );
  }

  deleteProjetBrouillon(projetId: number, entrepreneurId?: number): Observable<void> {
    const id = entrepreneurId ?? this.userId();
    return this.http.delete<void>(
      `${this.BASE}/entrepreneur/projets/${projetId}`,
      { headers: this.h(), params: this.p('entrepreneurId', id) }
    );
  }

  getTachesProjet(projetId: number): Observable<TacheDto[]> {
    return this.http.get<TacheDto[]>(
      `${this.BASE}/entrepreneur/projets/${projetId}/taches`,
      { headers: this.h() }
    );
  }

  updateStatutTacheEntrepreneur(tacheId: number, dto: TacheStatutUpdateRequestDto): Observable<TacheDto> {
    return this.http.patch<TacheDto>(
      `${this.BASE}/entrepreneur/taches/${tacheId}/statut`, dto,
      { headers: this.h() }
    );
  }

  updateStatutSousTacheEntrepreneur(sousTacheId: number, dto: SousTacheStatutUpdateRequestDto): Observable<SousTacheDto> {
    return this.http.patch<SousTacheDto>(
      `${this.BASE}/entrepreneur/sous-taches/${sousTacheId}/statut`, dto,
      { headers: this.h() }
    );
  }

  demanderProlongationTache(tacheId: number, dto: ProlongationRequestDto): Observable<TacheDto> {
    return this.http.post<TacheDto>(
      `${this.BASE}/entrepreneur/taches/${tacheId}/demander-prolongation`, dto,
      { headers: this.h() }
    );
  }

  getCoachsProjet(projetId: number): Observable<ProjetCoachResponseDto[]> {
    return this.http.get<ProjetCoachResponseDto[]>(
      `${this.BASE}/entrepreneur/projets/${projetId}/coachs`,
      { headers: this.h() }
    );
  }

  getDocumentsProjet(projetId: number): Observable<DocumentDto[]> {
    return this.http.get<DocumentDto[]>(
      `${this.BASE}/entrepreneur/projets/${projetId}/documents`,
      { headers: this.h() }
    );
  }

  uploadDocument(sousTacheId: number, file: File): Observable<DocumentDto> {
    const fd = new FormData();
    fd.append('file', file, file.name);
    return this.http.post<DocumentDto>(
      `${this.BASE}/entrepreneur/sous-taches/${sousTacheId}/documents/upload`, fd,
      { headers: new HttpHeaders({ 'X-User-Id': String(this.userId()), 'X-User-Role': this.role() }) }
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  // COACH  →  /khotwa/coach/...
  // ═══════════════════════════════════════════════════════════════════════

  getProjetsCoach(coachId?: number): Observable<ProjetResponseDto[]> {
    const id = coachId ?? this.userId();
    return this.http.get<ProjetResponseDto[]>(
      `${this.BASE}/coach/projets-affectes`,
      { headers: this.h(), params: this.p('coachId', id) }
    );
  }

  createTache(projetId: number, dto: TacheCreateRequestDto, coachId?: number): Observable<TacheDto> {
    const id = coachId ?? this.userId();
    return this.http.post<TacheDto>(
      `${this.BASE}/coach/projets/${projetId}/taches`, dto,
      { headers: this.h(), params: this.p('coachId', id) }
    );
  }

  createSousTache(tacheId: number, dto: SousTacheCreateRequestDto): Observable<SousTacheDto> {
    return this.http.post<SousTacheDto>(
      `${this.BASE}/coach/taches/${tacheId}/sous-taches`, dto,
      { headers: this.h() }
    );
  }

  updateStatutTacheCoach(tacheId: number, dto: TacheStatutUpdateRequestDto): Observable<TacheDto> {
    return this.http.patch<TacheDto>(
      `${this.BASE}/coach/taches/${tacheId}/statut`, dto,
      { headers: this.h() }
    );
  }

  updateStatutSousTacheCoach(sousTacheId: number, dto: SousTacheStatutUpdateRequestDto): Observable<SousTacheDto> {
    return this.http.patch<SousTacheDto>(
      `${this.BASE}/coach/sous-taches/${sousTacheId}/statut`, dto,
      { headers: this.h() }
    );
  }

  passerEnRevue(projetId: number): Observable<ProjetResponseDto> {
    return this.http.post<ProjetResponseDto>(
      `${this.BASE}/coach/projets/${projetId}/passer-en-revue`, {},
      { headers: this.h() }
    );
  }

  validerProjet(projetId: number): Observable<ProjetResponseDto> {
    return this.http.post<ProjetResponseDto>(
      `${this.BASE}/coach/projets/${projetId}/valider`, {},
      { headers: this.h() }
    );
  }

  demanderCorrectionProjet(projetId: number, commentaire: string): Observable<ProjetResponseDto> {
    return this.http.post<ProjetResponseDto>(
      `${this.BASE}/coach/projets/${projetId}/demander-correction`,
      { commentaire },
      { headers: this.h() }
    );
  }

  demanderCorrectionTache(tacheId: number, commentaire: string): Observable<TacheDto> {
    return this.http.post<TacheDto>(
      `${this.BASE}/coach/taches/${tacheId}/demander-correction`,
      { commentaire },
      { headers: this.h() }
    );
  }

  getTachesProjetCoach(projetId: number): Observable<TacheDto[]> {
    return this.http.get<TacheDto[]>(
      `${this.BASE}/coach/projets/${projetId}/taches`,
      { headers: this.h() }
    );
  }

  getSousTaches(tacheId: number): Observable<SousTacheDto[]> {
    return this.http.get<SousTacheDto[]>(
      `${this.BASE}/coach/taches/${tacheId}/sous-taches`,
      { headers: this.h() }
    );
  }

  getDocumentsTacheCoach(projetId: number): Observable<DocumentDto[]> {
    return this.http.get<DocumentDto[]>(
      `${this.BASE}/coach/projets/${projetId}/documents`,
      { headers: this.h() }
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  // ADMIN  →  /khotwa/admin/...
  // ═══════════════════════════════════════════════════════════════════════

  getProjetsSoumis(): Observable<ProjetResponseDto[]> {
    return this.http.get<ProjetResponseDto[]>(
      `${this.BASE}/admin/projets/soumis`,
      { headers: this.h() }
    );
  }

  getProjetsAffectes(): Observable<ProjetResponseDto[]> {
    return this.http.get<ProjetResponseDto[]>(
      `${this.BASE}/admin/projets/affectes`,
      { headers: this.h() }
    );
  }

  affecterCoach(projetId: number, dto: AffectationCoachRequestDto): Observable<ProjetCoachResponseDto> {
    return this.http.post<ProjetCoachResponseDto>(
      `${this.BASE}/admin/projets/${projetId}/affectations`, dto,
      { headers: this.h() }
    );
  }

  getCoachsDisponibles(): Observable<CoachDisponibiliteDto[]> {
    return this.http.get<CoachDisponibiliteDto[]>(
      `${this.BASE}/admin/coachs/disponibles`,
      { headers: this.h() }
    );
  }

  refuserProjet(projetId: number, justification: string): Observable<any> {
    return this.http.post(
      `${this.BASE}/admin/projets/${projetId}/refuser`,
      { justification },
      { headers: this.h() }
    );
  }

  suspendreProjet(projetId: number): Observable<any> {
    return this.http.post(
      `${this.BASE}/admin/projets/${projetId}/suspendre`, {},
      { headers: this.h() }
    );
  }

  reprendreProjet(projetId: number): Observable<any> {
    return this.http.post(
      `${this.BASE}/admin/projets/${projetId}/reprendre`, {},
      { headers: this.h() }
    );
  }

  archiverProjet(projetId: number): Observable<any> {
    return this.http.post(
      `${this.BASE}/admin/projets/${projetId}/archiver`, {},
      { headers: this.h() }
    );
  }

  getReporting(): Observable<any> {
    return this.http.get(
      `${this.BASE}/admin/reporting`,
      { headers: this.h() }
    );
  }

  getHistoriqueAffectations(projetId: number): Observable<ProjetCoachResponseDto[]> {
    return this.http.get<ProjetCoachResponseDto[]>(
      `${this.BASE}/admin/projets/${projetId}/affectations`,
      { headers: this.h() }
    );
  }
}
