import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FQARK65W.js";

// src/app/core/services/projet.service.ts
var MOCK = [
  { id: "p1", titre: "Plateforme E-Learning", description: "Application mobile de formation en ligne", status: "in_progress", progression: 65, entrepreneurId: "u2", coachId: "u3", etapes: [
    { id: "e1", titre: "Market Research", ordre: 1, projetId: "p1", dateDebut: /* @__PURE__ */ new Date("2024-01-01"), dateFin: /* @__PURE__ */ new Date("2024-01-31"), taches: [] },
    { id: "e2", titre: "MVP Development", ordre: 2, projetId: "p1", dateDebut: /* @__PURE__ */ new Date("2024-02-01"), dateFin: /* @__PURE__ */ new Date("2024-04-30"), taches: [] },
    { id: "e3", titre: "Tests & Validation", ordre: 3, projetId: "p1", dateDebut: /* @__PURE__ */ new Date("2024-05-01"), dateFin: /* @__PURE__ */ new Date("2024-06-30"), taches: [] }
  ], createdAt: /* @__PURE__ */ new Date("2024-01-01"), updatedAt: /* @__PURE__ */ new Date("2024-11-20") },
  { id: "p2", titre: "HealthMobile App", description: "Health app for patient tracking", status: "in_progress", progression: 30, entrepreneurId: "u2", coachId: "u3", etapes: [], createdAt: /* @__PURE__ */ new Date("2024-03-01"), updatedAt: /* @__PURE__ */ new Date("2024-11-18") },
  { id: "p3", titre: "BTP Connect", description: "Construction materials marketplace", status: "completed", progression: 100, entrepreneurId: "u2", etapes: [], createdAt: /* @__PURE__ */ new Date("2023-06-01"), updatedAt: /* @__PURE__ */ new Date("2024-10-01") },
  { id: "p4", titre: "AgriSmart", description: "IoT for connected agriculture", status: "suspended", progression: 20, entrepreneurId: "u2", coachId: "u3", etapes: [], createdAt: /* @__PURE__ */ new Date("2024-08-01"), updatedAt: /* @__PURE__ */ new Date("2024-11-01") }
];
var ProjetService = class _ProjetService {
  constructor() {
    this._projets = [...MOCK];
  }
  get projets() {
    return this._projets;
  }
  get projetsActifs() {
    return this._projets.filter((p) => p.status === "in_progress");
  }
  getById(id) {
    return this._projets.find((p) => p.id === id);
  }
  updateStatut(id, status) {
    const p = this._projets.find((p2) => p2.id === id);
    if (p) {
      p.status = status;
      p.updatedAt = /* @__PURE__ */ new Date();
    }
  }
  delete(id) {
    this._projets = this._projets.filter((p) => p.id !== id);
  }
  static {
    this.\u0275fac = function ProjetService_Factory(t) {
      return new (t || _ProjetService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjetService, factory: _ProjetService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/ressource.service.ts
var RessourceService = class _RessourceService {
  constructor(http) {
    this.http = http;
    this.api = "http://localhost:8084/khotwa/api";
  }
  // ── Headers de Sécurité ──────────────────────────────────────────
  h(userId = 1, role = "ADMIN", plan = "FREE") {
    return new HttpHeaders({
      "X-User-Id": String(userId),
      "X-User-Role": role,
      "X-User-Plan": plan
    });
  }
  getApiOrigin() {
    return this.api;
  }
  // ── Ressources ──────────────────────────────────────────────────
  getRessourcesHttp(filters = {}) {
    let params = new HttpParams().set("page", String(filters.page ?? 0)).set("size", String(filters.size ?? 50));
    if (filters.type && filters.type !== "ALL")
      params = params.set("type", filters.type);
    if (filters.categorieId)
      params = params.set("categorieId", String(filters.categorieId));
    if (filters.search)
      params = params.set("search", filters.search);
    return this.http.get(`${this.api}/ressources`, {
      params,
      headers: this.h(filters.userId, filters.role, filters.plan ?? "FREE")
    });
  }
  getRessourceByIdHttp(id, userId = 1, role = "ADMIN", plan = "FREE") {
    return this.http.get(`${this.api}/ressources/${id}`, { headers: this.h(userId, role, plan) });
  }
  createRessourceHttp(fd, adminId = 1) {
    return this.http.post(`${this.api}/ressources`, fd, {
      headers: new HttpHeaders({ "X-User-Id": String(adminId), "X-User-Role": "ADMIN" })
    });
  }
  updateRessourceHttp(id, body) {
    return this.http.put(`${this.api}/ressources/${id}`, body, { headers: this.h() });
  }
  togglePublieHttp(id) {
    return this.http.patch(`${this.api}/ressources/${id}/toggle-publie`, {}, { headers: this.h() });
  }
  deleteRessourceHttp(id) {
    return this.http.delete(`${this.api}/ressources/${id}`, { headers: this.h() });
  }
  // ── Statistiques ─────────────────────────────────────────────────
  getStatsHttp(userId = 1) {
    return this.http.get(`${this.api}/ressources/stats`, { headers: this.h(userId) });
  }
  // ── Progress ──────────────────────────────────────────────────
  updateProgressionHttp(userId, ressourceId, status, pourcentage) {
    return this.http.post(`${this.api}/progressions`, { ressourceId, statut: status, pourcentage }, { headers: this.h(userId) });
  }
  marquerTermineHttp(userId, ressourceId) {
    return this.http.post(`${this.api}/progressions/${ressourceId}/terminer`, {}, { headers: this.h(userId) });
  }
  saveVideoProgressionHttp(userId, ressourceId, status, pourcentage, positionVideoSec) {
    return this.http.post(`${this.api}/progressions`, { ressourceId, statut: status, pourcentage, positionVideoSec }, { headers: this.h(userId) });
  }
  getMesProgressionsHttp(userId) {
    return this.http.get(`${this.api}/progressions/mes`, { headers: this.h(userId) });
  }
  // ── Catégories ───────────────────────────────────────────────────
  getCategoriesHttp() {
    return this.http.get(`${this.api}/categories`);
  }
  createCategorieHttp(body) {
    return this.http.post(`${this.api}/categories`, body, { headers: this.h() });
  }
  updateCategorieHttp(id, body) {
    return this.http.put(`${this.api}/categories/${id}`, body, { headers: this.h() });
  }
  deleteCategorieHttp(id) {
    return this.http.delete(`${this.api}/categories/${id}`, { headers: this.h() });
  }
  // ── Utilitaires ──────────────────────────────────────────────────
  downloadAsBlob(ressourceId, userId, role, plan = "FREE") {
    return this.http.get(`${this.api}/ressources/${ressourceId}/download`, {
      headers: this.h(userId, role, plan),
      responseType: "blob"
    });
  }
  buildFormData(form, fichier) {
    const fd = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null && form[key] !== void 0) {
        fd.append(key, String(form[key]));
      }
    });
    if (fichier)
      fd.append("fichier", fichier, fichier.name);
    return fd;
  }
  static {
    this.\u0275fac = function RessourceService_Factory(t) {
      return new (t || _RessourceService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RessourceService, factory: _RessourceService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProjetService,
  RessourceService
};
//# sourceMappingURL=chunk-L4ICDUQV.js.map
