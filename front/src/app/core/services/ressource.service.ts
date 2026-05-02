import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpRequest  } from '@angular/common/http';
import { Observable } from 'rxjs';

export type PlanType       = 'FREE' | 'PREMIUM' | 'INSTITUTIONAL';
export type ResourceType   = 'PDF' | 'VIDEO' | 'EXCEL' | 'WORD' | 'IMAGE' | 'LINK';
export type ProgressStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Ressource {
  id: number;
  titre: string;
  description: string;
  type: ResourceType;
  planType: PlanType;
  urlFichier: string;
  nomFichierOriginal: string;
  mimeType: string;
  tailleFichierOctets: number;
  tailleFormatee: string;
  dureeSec: number;
  nombrePages: number;
  publie: boolean;
  vues: number;
  telechargements: number;
  categorie: { id: number; nom: string; couleur: string; icone: string } | null;
  tags: { id: number; nom: string }[];
  createdAt: string;
  maProgress?: { status?: ProgressStatus; statut?: ProgressStatus; pourcentage: number } | null;
  maProgression?: { statut?: ProgressStatus; pourcentage: number } | null;
  urlExterne?: string;
}

export interface Categorie {
  id: number; nom: string; description: string; couleur: string; icone: string; secteur?: string;
}

@Injectable({ providedIn: 'root' })
export class RessourceService {

  private api = '/api';

  constructor(private http: HttpClient) {}

  getApiOrigin(): string {
    return this.api;
  }

  // ── Ressources ──────────────────────────────────────────────────
  getRessourcesHttp(filters: any = {}): Observable<any> {
    let params = new HttpParams()
      .set('page', String(filters.page ?? 0))
      .set('size', String(filters.size ?? 50));

    if (filters.type && filters.type !== 'ALL') params = params.set('type', filters.type);
    if (filters.categorieId) params = params.set('categorieId', String(filters.categorieId));
    if (filters.search) params = params.set('search', filters.search);

    // Le backend résout rôle/plan/secteur depuis le JWT — pas besoin de headers custom
    return this.http.get<any>(`${this.api}/ressources`, { params });
  }

  getRessourceByIdHttp(id: number, userId = 1, role = 'ADMIN', plan = 'FREE'): Observable<any> {
    return this.http.get<any>(`${this.api}/ressources/${id}`);
  }

  createRessourceHttp(fd: FormData, adminId = 1): Observable<any> {
    const req = new HttpRequest('POST', `${this.api}/ressources`, fd, {
      reportProgress: true,
    });
    return this.http.request(req);
  }

  updateRessourceHttp(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.api}/ressources/${id}`, body);
  }

  togglePublieHttp(id: number): Observable<any> {
    return this.http.patch<any>(`${this.api}/ressources/${id}/toggle-publie`, {});
  }

  deleteRessourceHttp(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/ressources/${id}`);
  }

  // ── Statistiques ─────────────────────────────────────────────────
  getStatsHttp(userId = 1): Observable<any> {
    return this.http.get<any>(`${this.api}/ressources/stats`);
  }

  // ── Progress ──────────────────────────────────────────────────
  updateProgressionHttp(userId: number, ressourceId: number, status: ProgressStatus, pourcentage: number): Observable<any> {
    return this.http.post<any>(`${this.api}/progressions`, 
      { ressourceId, statut: status, pourcentage }
    );
  }

  marquerTermineHttp(userId: number, ressourceId: number): Observable<any> {
    return this.http.post<any>(`${this.api}/progressions/${ressourceId}/terminer`, {});
  }

  saveVideoProgressionHttp(userId: number, ressourceId: number, status: ProgressStatus, pourcentage: number, positionVideoSec: number): Observable<any> {
    return this.http.post<any>(`${this.api}/progressions`,
      { ressourceId, statut: status, pourcentage, positionVideoSec }
    );
  }

  getMesProgressionsHttp(userId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/progressions/mes`);
  }

  // ── Catégories ───────────────────────────────────────────────────
  getCategoriesHttp(): Observable<any> {
    return this.http.get<any>(`${this.api}/categories`);
  }

  createCategorieHttp(body: any): Observable<any> {
    return this.http.post<any>(`${this.api}/categories`, body);
  }

  updateCategorieHttp(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.api}/categories/${id}`, body);
  }

  deleteCategorieHttp(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/categories/${id}`);
  }

  // ── Utilitaires ──────────────────────────────────────────────────
  downloadAsBlob(ressourceId: number, userId: number, role: string, plan = 'FREE'): Observable<Blob> {
    return this.http.get(`${this.api}/ressources/${ressourceId}/download`, { responseType: 'blob' });
  }

  buildFormData(form: any, fichier: File | null): FormData {
    const fd = new FormData();
    Object.keys(form).forEach(key => {
      if (form[key] !== null && form[key] !== undefined) {
        fd.append(key, String(form[key]));
      }
    });
    if (fichier) fd.append('fichier', fichier, fichier.name);
    return fd;
  }

  // ── Progressions coach ────────────────────────────────────────────

  /** GET /api/progressions/coach/mes-entrepreneurs
   *  Retourne les progressions de tous les entrepreneurs suivis par le coach.
   *  Structure : [{ entrepreneurId, entrepreneurNom, entrepreneurEmail, total, enCours, completes, tauxCompletion, progressions: [...] }]
   */
  getProgressionsEntrepreneursHttp(coachId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/progressions/coach/mes-entrepreneurs`);
  }

  /** GET /api/progressions/coach/entrepreneur/{entrepreneurId} */
  getProgressionsEntrepreneurHttp(entrepreneurId: number, coachId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/progressions/coach/entrepreneur/${entrepreneurId}`);
  }
}
