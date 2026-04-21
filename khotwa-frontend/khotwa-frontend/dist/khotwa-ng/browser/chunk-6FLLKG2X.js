import {
  HttpClient,
  __spreadValues,
  catchError,
  map,
  of,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FQARK65W.js";

// src/app/core/services/talent.service.ts
var TalentService = class _TalentService {
  constructor(http) {
    this.http = http;
    this.API = "http://localhost:8080/api";
    this.LS_CANDIDATURES = "khotwa_visitor_candidatures_v1";
  }
  getAnnonces() {
    return this.http.get(`${this.API}/annonces`).pipe(catchError(this.handleError));
  }
  creerAnnonce(data) {
    return this.http.post(`${this.API}/annonces`, data).pipe(catchError(this.handleError));
  }
  getTalents() {
    return this.http.get(`${this.API}/talents`).pipe(catchError(this.handleError));
  }
  handleError(error) {
    console.error("[TalentService]", error);
    return throwError(() => new Error(error.message));
  }
  // ── DELETE ANNONCE ─────────────────────────────
  deleteAnnonce(id) {
    return this.http.delete(`${this.API}/annonces/${id}`).pipe(catchError(this.handleError));
  }
  // ── MATCHING ─────────────────────────────────────────────
  getMatchingPourAnnonce(annonceId) {
    return this.http.get(`${this.API}/candidatures/matching/${annonceId}`).pipe(catchError(this.handleError));
  }
  updateAnnonce(id, data) {
    return this.http.put(`${this.API}/annonces/${id}`, data).pipe(catchError(this.handleError));
  }
  getTalentEntity(id) {
    return this.http.get(`${this.API}/talents/${id}`).pipe(catchError(this.handleError));
  }
  creerProfilTalent(dto) {
    return this.http.post(`${this.API}/talents`, dto).pipe(catchError(this.handleError));
  }
  modifierProfilTalent(id, dto) {
    return this.http.put(`${this.API}/talents/${id}`, dto).pipe(catchError(this.handleError));
  }
  /**
   * Soumet une candidature (`POST /api/candidatures` si disponible).
   * Sinon enregistrement navigateur (`localStorage`, clé `khotwa_visitor_candidatures_v1`).
   */
  postuler(body) {
    const apiBody = __spreadValues({
      talentId: body.talentId,
      annonceId: body.annonceId
    }, body.message ? { message: body.message } : {});
    return this.http.post(`${this.API}/candidatures`, apiBody).pipe(catchError((err) => {
      console.warn("[TalentService] POST /candidatures indisponible \u2014 enregistrement local", err);
      return of(this.appendLocalCandidature(body));
    }));
  }
  /**
   * Liste des candidatures d’un talent.
   * Si l’API échoue → lecture locale. Si l’API répond, fusion avec les entrées locales.
   */
  getCandidaturesParTalent(talentId) {
    return this.http.get(`${this.API}/candidatures/talent/${talentId}`).pipe(map((rows) => this.mergeServerWithLocal(talentId, rows ?? [])), catchError((err) => {
      console.warn("[TalentService] GET candidatures indisponible \u2014 lecture locale", err);
      return of(this.readLocalCandidaturesForTalent(talentId));
    }));
  }
  readLocalAll() {
    try {
      const raw = localStorage.getItem(this.LS_CANDIDATURES);
      if (!raw)
        return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  writeLocalAll(rows) {
    try {
      localStorage.setItem(this.LS_CANDIDATURES, JSON.stringify(rows));
    } catch (e) {
      console.error("[TalentService] localStorage write", e);
    }
  }
  readLocalCandidaturesForTalent(talentId) {
    return this.readLocalAll().filter((c) => c.talentId === talentId).sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
  }
  appendLocalCandidature(body) {
    const id = Date.now();
    const row = {
      id,
      talentId: body.talentId,
      annonceId: body.annonceId,
      titreAnnonce: body.titreAnnonce,
      message: body.message,
      statut: "ENREGISTR\xC9_LOCALEMENT",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      datePostulation: (/* @__PURE__ */ new Date()).toISOString()
    };
    const all = this.readLocalAll();
    all.push(row);
    this.writeLocalAll(all);
    return row;
  }
  mergeServerWithLocal(talentId, server) {
    const local = this.readLocalCandidaturesForTalent(talentId);
    const serverAnnonceIds = new Set(server.map((s) => s.annonceId).filter((x) => x != null));
    const extraLocal = local.filter((l) => l.annonceId != null && !serverAnnonceIds.has(l.annonceId));
    const merged = [...server, ...extraLocal];
    merged.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
    return merged;
  }
  /**
   * IA carrière (Spring AI conseillé). Si endpoint indisponible, fallback local.
   */
  getTalentAiAdvice(payload) {
    return this.http.post(`${this.API}/ai/talent-advice`, payload).pipe(catchError(() => of(this.buildLocalAdvice(payload))));
  }
  buildLocalAdvice(payload) {
    const skills = payload.competences.filter(Boolean);
    const topMissing = ["Spring Boot", "System Design", "Docker", "Communication", "English"].filter((s) => !skills.some((k) => k.toLowerCase() === s.toLowerCase())).slice(0, 3);
    return {
      resume: `Objectif d\xE9tect\xE9: ${payload.goal}. Le profil est prometteur avec ${skills.length} comp\xE9tence(s) d\xE9clar\xE9e(s).`,
      pointsForts: skills.slice(0, 3),
      competencesPrioritaires: topMissing,
      nextActions: [
        "Adapter le CV aux 3 comp\xE9tences demand\xE9es les plus fr\xE9quentes.",
        "Publier 2 projets concrets avec m\xE9triques de r\xE9sultat.",
        "Postuler de fa\xE7on cibl\xE9e sur 5 annonces similaires."
      ]
    };
  }
  /**
   * IA recrutement — Spring AI (`POST /api/ai/hiring-advice`).
   * Fallback local si l’API n’est pas encore déployée.
   */
  getHiringAiAdvice(payload) {
    return this.http.post(`${this.API}/ai/hiring-advice`, payload).pipe(catchError(() => of(this.buildLocalHiringAdvice(payload))));
  }
  buildLocalHiringAdvice(payload) {
    const skills = (payload.competencesRequises || "").split(",").map((s) => s.trim()).filter(Boolean);
    const met = (payload.metiers || []).join(", ");
    return {
      fichePoste: `Poste \xAB ${payload.titre} \xBB (${payload.typePoste}). ${payload.localisation ? `Localisation: ${payload.localisation}. ` : ""}Comp\xE9tences cl\xE9s attendues: ${skills.slice(0, 5).join(", ") || "\u2014"}. ` + (met ? `Orientation m\xE9tiers: ${met}. ` : "") + (payload.contexte ? `Contexte startup: ${payload.contexte}` : ""),
      competencesSuggerees: [.../* @__PURE__ */ new Set([...skills, "Communication", "Autonomie", "Anglais technique"])].slice(0, 8),
      questionsEntretien: [
        "D\xE9crivez un projet technique r\xE9cent et votre r\xF4le pr\xE9cis.",
        "Comment prioriseriez-vous les t\xE2ches avec des ressources limit\xE9es ?",
        "Cas pratique: incident production \u2014 quelles \xE9tapes ?"
      ],
      checklistOnboarding: [
        "Acc\xE8s repo + CI/CD",
        "Pairing avec un r\xE9f\xE9rent m\xE9tier",
        "Roadmap 30/60/90 jours"
      ],
      risquesOuGaps: [
        "V\xE9rifier l\u2019alignement niveau seniorit\xE9 vs budget.",
        "Anticiper la mont\xE9e en comp\xE9tence sur le stack exact."
      ]
    };
  }
  static {
    this.\u0275fac = function TalentService_Factory(t) {
      return new (t || _TalentService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TalentService, factory: _TalentService.\u0275fac, providedIn: "root" });
  }
};

export {
  TalentService
};
//# sourceMappingURL=chunk-6FLLKG2X.js.map
