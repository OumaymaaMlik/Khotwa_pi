import {
  ɵɵdefineInjectable
} from "./chunk-FQARK65W.js";

// src/app/core/services/auth.service.ts
var MOCK_USERS = [
  { id: "u1", nom: "Bensalem", prenom: "Karim", email: "admin@khotwa.tn", role: "admin" },
  { id: "u2", nom: "Trabelsi", prenom: "Sara", email: "sara@startup.tn", role: "entrepreneur", startup: "EduTech Pro", planType: "FREE" },
  { id: "u3", nom: "Mansouri", prenom: "Ahmed", email: "ahmed@coach.tn", role: "coach" },
  { id: "u6", nom: "Ben Amor", prenom: "Yasmine", email: "visitor@khotwa.tn", role: "visitor", talentProfileId: void 0 }
];
var AuthService = class _AuthService {
  constructor() {
    this.currentUser = MOCK_USERS[0];
  }
  get role() {
    return this.currentUser?.role ?? null;
  }
  get isAdmin() {
    return this.currentUser?.role === "admin";
  }
  get isEntrepreneur() {
    return this.currentUser?.role === "entrepreneur";
  }
  get isCoach() {
    return this.currentUser?.role === "coach";
  }
  get isVisitor() {
    return this.currentUser?.role === "visitor";
  }
  login(role) {
    this.currentUser = MOCK_USERS.find((u) => u.role === role) ?? null;
  }
  logout() {
    this.currentUser = null;
  }
  /** Après création du profil via POST `/api/talents`. */
  setTalentProfileId(id) {
    if (this.currentUser) {
      this.currentUser.talentProfileId = id;
    }
  }
  getDefaultRoute() {
    const r = this.currentUser?.role;
    return r === "admin" ? "/khotwaadmin/dashboard" : r === "entrepreneur" ? "/entrepreneur/dashboard" : r === "coach" ? "/coach/dashboard" : r === "visitor" ? "/visitor/dashboard" : "/";
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-3A6GV6NY.js.map
