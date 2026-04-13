import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Projet, ProjetStatut, SecteurProjet } from '../models';

type SecteurProjetInput = SecteurProjet | '';

export interface ProjetDraftInput {
  nomStartup: string;
  description: string;
  secteur: SecteurProjetInput;
  problemeAdresse: string;
  solutionProposee: string;
  businessModel: string;
  stadeProjet: 'IDEE' | 'POC' | 'MVP' | 'PROTOTYPE' | 'COMMERCIALISATION' | 'SCALING';
  innovationDescription: string;
  scalabiliteDescription: string;
  pocDisponible: boolean;
  dateDebutProjet: string;
  dateFinProjet: string;
}

interface BackendProjetResponse {
  id: number;
  nomStartup: string;
  description: string;
  secteur: SecteurProjet;
  problemeAdresse: string;
  solutionProposee: string;
  businessModel: string;
  stadeProjet: 'IDEE' | 'POC' | 'MVP' | 'PROTOTYPE' | 'COMMERCIALISATION' | 'SCALING';
  innovationDescription: string;
  scalabiliteDescription: string;
  pocDisponible: boolean;
  dateDebutProjet: string;
  dateFinProjet: string;
  dateCreation: string;
  dateDerniereMiseAJour: string;
  statutProjet: 'EN_COURS' | 'SUSPENDU' | 'TERMINE' | 'ARCHIVE';
  etatValidation: 'BROUILLON' | 'SOUMIS_ADMIN' | 'AFFECTE_COACH' | 'EN_REVUE' | 'A_CORRIGER' | 'VALIDE' | 'REFUSE';
  commentaireCorrectionCoach?: string;
  dateDemandeCorrection?: string;
  statutCorrectionProjet?: 'DEMANDEE' | 'RESOUMISE_PAR_ENTREPRENEUR' | 'APPROUVEE_PAR_COACH' | 'RECORRECTION_DEMANDEE';
  correctionResoumiseEnAttenteCoach?: boolean;
  scoreDisciplineGlobal: number;
  entrepreneurId: number;
}

export interface AdminReportingResponse {
  projetsSoumis: number;
  projetsValides: number;
  projetsRefuses: number;
  retardsTachesActifs: number;
  retardsSousTachesActifs: number;
  scoreMoyenDiscipline: number;
}

@Injectable({ providedIn: 'root' })
export class ProjetService {
  private readonly apiUrl = 'http://localhost:8084/khotwa';
  private _projets: Projet[] = [];

  constructor(
    private auth: AuthService,
    private http: HttpClient,
  ) {}

  get projets(): Projet[] { return this._projets; }
  get projetsActifs(): Projet[] { return this._projets.filter(p => p.status === 'in_progress'); }
  get projetsEntrepreneur(): Projet[] {
    const entrepreneurId = String(this.auth.currentUser?.id ?? 'u2');
    return this._projets.filter(p => p.entrepreneurId === entrepreneurId);
  }

  getById(id: string): Projet | undefined { return this._projets.find(p => p.id === id); }

  loadEntrepreneurProjects(): Observable<Projet[]> {
    const entrepreneurId = Number(this.auth.currentUser?.idUser ?? this.auth.currentUser?.id ?? 0);
    return this.http.get<BackendProjetResponse[]>(`${this.apiUrl}/entrepreneur/projets`, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).pipe(
      map((rows) => rows.map((row) => this.toProjetModel(row))),
      tap((rows) => {
        this._projets = this.sortProjects(rows);
      })
    );
  }

  loadAdminSubmittedProjects(): Observable<Projet[]> {
    return this.http.get<BackendProjetResponse[]>(`${this.apiUrl}/admin/projets/soumis`).pipe(
      map((rows) => rows.map((row) => this.toProjetModel(row))),
      tap((rows) => {
        this._projets = this.sortProjects(rows);
      })
    );
  }

  loadCoachAssignedProjects(): Observable<Projet[]> {
    const coachId = Number(this.auth.currentUser?.idUser ?? this.auth.currentUser?.id ?? 0);
    return this.http.get<BackendProjetResponse[]>(`${this.apiUrl}/coach/projets-affectes`, {
      params: { coachId: String(coachId) }
    }).pipe(
      map((rows) => rows.map((row) => this.toProjetModel(row))),
      tap((rows) => {
        this._projets = this.sortProjects(rows);
      })
    );
  }

  loadAdminReporting(): Observable<AdminReportingResponse> {
    return this.http.get<AdminReportingResponse>(`${this.apiUrl}/admin/reporting`);
  }

  createProjet(form: ProjetDraftInput): Observable<Projet> {
    const entrepreneurId = Number(this.auth.currentUser?.idUser ?? this.auth.currentUser?.id ?? 0);
    
    // Defensive check: prevent invalid FK constraint violation
    if (entrepreneurId <= 0) {
      return new Observable(observer => {
        observer.error(new Error('Invalid entrepreneur authentication. Please log in and try again.'));
      });
    }

    const payload = {
      nomStartup: form.nomStartup,
      description: form.description,
      secteur: form.secteur,
      problemeAdresse: form.problemeAdresse,
      solutionProposee: form.solutionProposee,
      businessModel: form.businessModel,
      stadeProjet: form.stadeProjet,
      innovationDescription: form.innovationDescription,
      scalabiliteDescription: form.scalabiliteDescription,
      pocDisponible: form.pocDisponible,
      dateDebutProjet: form.dateDebutProjet,
      dateFinProjet: form.dateFinProjet,
    };

    return this.http.post<BackendProjetResponse>(`${this.apiUrl}/entrepreneur/projets`, payload, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).pipe(
      map((row) => this.toProjetModel(row)),
      tap((projet) => {
        this._projets = this.mergeProjects([projet]);
      })
    );
  }

  updateProjet(id: string, form: ProjetDraftInput): Observable<Projet> {
    const entrepreneurId = Number(this.auth.currentUser?.idUser ?? this.auth.currentUser?.id ?? 0);
    const payload = {
      nomStartup: form.nomStartup,
      description: form.description,
      secteur: form.secteur,
      problemeAdresse: form.problemeAdresse,
      solutionProposee: form.solutionProposee,
      businessModel: form.businessModel,
      stadeProjet: form.stadeProjet,
      innovationDescription: form.innovationDescription,
      scalabiliteDescription: form.scalabiliteDescription,
      pocDisponible: form.pocDisponible,
      dateDebutProjet: form.dateDebutProjet,
      dateFinProjet: form.dateFinProjet,
    };

    return this.http.put<BackendProjetResponse>(`${this.apiUrl}/entrepreneur/projets/${id}`, payload, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).pipe(
      map((row) => this.toProjetModel(row)),
      tap((projet) => {
        this._projets = this.mergeProjects([projet]);
      })
    );
  }

  submitProjet(id: string): Observable<Projet> {
    const entrepreneurId = Number(this.auth.currentUser?.idUser ?? this.auth.currentUser?.id ?? 0);
    return this.http.post<BackendProjetResponse>(`${this.apiUrl}/entrepreneur/projets/${id}/soumettre`, null, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).pipe(
      map((row) => this.toProjetModel(row)),
      tap((projet) => {
        this._projets = this.mergeProjects([projet]);
      })
    );
  }

  deleteProjet(id: string): Observable<void> {
    const entrepreneurId = Number(this.auth.currentUser?.idUser ?? this.auth.currentUser?.id ?? 0);
    return this.http.delete<void>(`${this.apiUrl}/entrepreneur/projets/${id}`, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).pipe(
      tap(() => {
        this._projets = this._projets.filter((p) => p.id !== id);
      })
    );
  }

  assignCoach(projetId: string, coachId: string): Projet | undefined {
    const projet = this._projets.find(p => p.id === projetId);
    if (!projet || !projet.submitted) {
      return projet;
    }

    projet.coachId = coachId;
    projet.updatedAt = new Date();
    return projet;
  }

  updateStatut(id: string, status: ProjetStatut): void {
    const p = this._projets.find(p => p.id === id);
    if (p) { p.status = status; p.updatedAt = new Date(); }
  }
  delete(id: string): void { this._projets = this._projets.filter(p => p.id !== id); }

  private toProjetModel(row: BackendProjetResponse): Projet {
    const disciplineScore = row.scoreDisciplineGlobal ?? 0;
    return {
      id: String(row.id),
      titre: row.nomStartup,
      description: row.description,
      status: this.toUiStatus(row.statutProjet),
      submitted: row.etatValidation !== 'BROUILLON',
      etatValidation: row.etatValidation,
      commentaireCorrectionCoach: row.commentaireCorrectionCoach?.trim() || undefined,
      dateDemandeCorrection: row.dateDemandeCorrection ? new Date(row.dateDemandeCorrection) : undefined,
      statutCorrectionProjet: row.statutCorrectionProjet,
      correctionResoumiseEnAttenteCoach: row.correctionResoumiseEnAttenteCoach === true,
      stadeProjet: row.stadeProjet,
      secteur: row.secteur,
      problemeAdresse: row.problemeAdresse,
      solutionProposee: row.solutionProposee,
      businessModel: row.businessModel,
      innovationDescription: row.innovationDescription,
      scalabiliteDescription: row.scalabiliteDescription,
      pocDisponible: row.pocDisponible,
      dateDebutProjet: row.dateDebutProjet ? new Date(row.dateDebutProjet) : undefined,
      dateFinProjet: row.dateFinProjet ? new Date(row.dateFinProjet) : undefined,
      disciplineScore,
      progression: Math.max(0, Math.min(100, disciplineScore)),
      entrepreneurId: String(row.entrepreneurId),
      etapes: [],
      createdAt: new Date(row.dateCreation),
      updatedAt: new Date(row.dateDerniereMiseAJour),
    };
  }

  private mergeProjects(incoming: Projet[]): Projet[] {
    const mapById = new Map<string, Projet>();

    for (const p of this._projets) {
      mapById.set(p.id, p);
    }
    for (const p of incoming) {
      mapById.set(p.id, p);
    }

    return this.sortProjects(Array.from(mapById.values()));
  }

  private sortProjects(projects: Projet[]): Projet[] {
    return [...projects].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  private toUiStatus(statut: BackendProjetResponse['statutProjet']): ProjetStatut {
    if (statut === 'SUSPENDU') {
      return 'suspended';
    }
    if (statut === 'TERMINE' || statut === 'ARCHIVE') {
      return 'completed';
    }
    return 'in_progress';
  }
}
