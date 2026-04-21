import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  Annonce,
  TalentProfile,
  MatchingResultDTO,
  CreateAnnonceRequest,
  TalentProfileEntity,
  Candidature,
  PostulerRequest,
  TalentAiAdviceRequest,
  TalentAiAdviceResponse,
  HiringAiRequest,
  HiringAiResponse
} from '../models/talent.model';

@Injectable({ providedIn: 'root' })
export class TalentService {

  private readonly API = 'http://localhost:8080/api';
  /** Candidatures sans backend : stockage navigateur (par appareil). */
  private readonly LS_CANDIDATURES = 'khotwa_visitor_candidatures_v1';

  constructor(private http: HttpClient) {}

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.API}/annonces`)
      .pipe(catchError(this.handleError));
  }

 creerAnnonce(data: any): Observable<any> {
  return this.http.post(`${this.API}/annonces`, data)
    .pipe(catchError(this.handleError));
}

  getTalents(): Observable<TalentProfile[]> {
    return this.http.get<TalentProfile[]>(`${this.API}/talents`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('[TalentService]', error);
    return throwError(() => new Error(error.message));
  }
  // ── DELETE ANNONCE ─────────────────────────────

deleteAnnonce(id: number) {
  return this.http.delete(`${this.API}/annonces/${id}`)
    .pipe(catchError(this.handleError));
}
// ── MATCHING ─────────────────────────────────────────────

getMatchingPourAnnonce(annonceId: number): Observable<MatchingResultDTO[]> {
  return this.http.get<MatchingResultDTO[]>(
    `${this.API}/candidatures/matching/${annonceId}`
  ).pipe(catchError(this.handleError));
}
updateAnnonce(id: number, data: any): Observable<any> {
  return this.http.put(`${this.API}/annonces/${id}`, data)
    .pipe(catchError(this.handleError));
}

  getTalentEntity(id: number): Observable<TalentProfileEntity> {
    return this.http.get<TalentProfileEntity>(`${this.API}/talents/${id}`)
      .pipe(catchError(this.handleError));
  }

  creerProfilTalent(dto: TalentProfileEntity): Observable<TalentProfileEntity> {
    return this.http.post<TalentProfileEntity>(`${this.API}/talents`, dto)
      .pipe(catchError(this.handleError));
  }

  modifierProfilTalent(id: number, dto: TalentProfileEntity): Observable<TalentProfileEntity> {
    return this.http.put<TalentProfileEntity>(`${this.API}/talents/${id}`, dto)
      .pipe(catchError(this.handleError));
  }

  /**
   * Soumet une candidature (`POST /api/candidatures` si disponible).
   * Sinon enregistrement navigateur (`localStorage`, clé `khotwa_visitor_candidatures_v1`).
   */
  postuler(body: PostulerRequest): Observable<Candidature> {
    const apiBody = {
      talentId: body.talentId,
      annonceId: body.annonceId,
      ...(body.message ? { message: body.message } : {}),
    };
    return this.http.post<Candidature>(`${this.API}/candidatures`, apiBody).pipe(
      catchError((err) => {
        console.warn('[TalentService] POST /candidatures indisponible — enregistrement local', err);
        return of(this.appendLocalCandidature(body));
      }),
    );
  }

  /**
   * Liste des candidatures d’un talent.
   * Si l’API échoue → lecture locale. Si l’API répond, fusion avec les entrées locales.
   */
  getCandidaturesParTalent(talentId: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.API}/candidatures/talent/${talentId}`).pipe(
      map((rows) => this.mergeServerWithLocal(talentId, rows ?? [])),
      catchError((err) => {
        console.warn('[TalentService] GET candidatures indisponible — lecture locale', err);
        return of(this.readLocalCandidaturesForTalent(talentId));
      }),
    );
  }

  private readLocalAll(): Candidature[] {
    try {
      const raw = localStorage.getItem(this.LS_CANDIDATURES);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as Candidature[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private writeLocalAll(rows: Candidature[]): void {
    try {
      localStorage.setItem(this.LS_CANDIDATURES, JSON.stringify(rows));
    } catch (e) {
      console.error('[TalentService] localStorage write', e);
    }
  }

  private readLocalCandidaturesForTalent(talentId: number): Candidature[] {
    return this.readLocalAll()
      .filter((c) => c.talentId === talentId)
      .sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
  }

  private appendLocalCandidature(body: PostulerRequest): Candidature {
    const id = Date.now();
    const row: Candidature = {
      id,
      talentId: body.talentId,
      annonceId: body.annonceId,
      titreAnnonce: body.titreAnnonce,
      message: body.message,
      statut: 'ENREGISTRÉ_LOCALEMENT',
      createdAt: new Date().toISOString(),
      datePostulation: new Date().toISOString(),
    };
    const all = this.readLocalAll();
    all.push(row);
    this.writeLocalAll(all);
    return row;
  }

  private mergeServerWithLocal(talentId: number, server: Candidature[]): Candidature[] {
    const local = this.readLocalCandidaturesForTalent(talentId);
    const serverAnnonceIds = new Set(server.map((s) => s.annonceId).filter((x): x is number => x != null));
    const extraLocal = local.filter((l) => l.annonceId != null && !serverAnnonceIds.has(l.annonceId));
    const merged = [...server, ...extraLocal];
    merged.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
    return merged;
  }

  /**
   * IA carrière (Spring AI conseillé). Si endpoint indisponible, fallback local.
   */
  getTalentAiAdvice(payload: TalentAiAdviceRequest): Observable<TalentAiAdviceResponse> {
    return this.http.post<TalentAiAdviceResponse>(`${this.API}/ai/talent-advice`, payload).pipe(
      catchError(() => of(this.buildLocalAdvice(payload))),
    );
  }

  private buildLocalAdvice(payload: TalentAiAdviceRequest): TalentAiAdviceResponse {
    const skills = payload.competences.filter(Boolean);
    const topMissing = ['Spring Boot', 'System Design', 'Docker', 'Communication', 'English']
      .filter((s) => !skills.some((k) => k.toLowerCase() === s.toLowerCase()))
      .slice(0, 3);
    return {
      resume: `Objectif détecté: ${payload.goal}. Le profil est prometteur avec ${skills.length} compétence(s) déclarée(s).`,
      pointsForts: skills.slice(0, 3),
      competencesPrioritaires: topMissing,
      nextActions: [
        'Adapter le CV aux 3 compétences demandées les plus fréquentes.',
        'Publier 2 projets concrets avec métriques de résultat.',
        'Postuler de façon ciblée sur 5 annonces similaires.',
      ],
    };
  }

  /**
   * IA recrutement — Spring AI (`POST /api/ai/hiring-advice`).
   * Fallback local si l’API n’est pas encore déployée.
   */
  getHiringAiAdvice(payload: HiringAiRequest): Observable<HiringAiResponse> {
    return this.http.post<HiringAiResponse>(`${this.API}/ai/hiring-advice`, payload).pipe(
      catchError(() => of(this.buildLocalHiringAdvice(payload))),
    );
  }

  private buildLocalHiringAdvice(payload: HiringAiRequest): HiringAiResponse {
    const skills = (payload.competencesRequises || '').split(',').map((s) => s.trim()).filter(Boolean);
    const met = (payload.metiers || []).join(', ');
    return {
      fichePoste: `Poste « ${payload.titre} » (${payload.typePoste}). ${payload.localisation ? `Localisation: ${payload.localisation}. ` : ''}` +
        `Compétences clés attendues: ${skills.slice(0, 5).join(', ') || '—'}. ` +
        (met ? `Orientation métiers: ${met}. ` : '') +
        (payload.contexte ? `Contexte startup: ${payload.contexte}` : ''),
      competencesSuggerees: [...new Set([...skills, 'Communication', 'Autonomie', 'Anglais technique'])].slice(0, 8),
      questionsEntretien: [
        'Décrivez un projet technique récent et votre rôle précis.',
        'Comment prioriseriez-vous les tâches avec des ressources limitées ?',
        'Cas pratique: incident production — quelles étapes ?',
      ],
      checklistOnboarding: [
        'Accès repo + CI/CD',
        'Pairing avec un référent métier',
        'Roadmap 30/60/90 jours',
      ],
      risquesOuGaps: [
        'Vérifier l’alignement niveau seniorité vs budget.',
        'Anticiper la montée en compétence sur le stack exact.',
      ],
    };
  }
}