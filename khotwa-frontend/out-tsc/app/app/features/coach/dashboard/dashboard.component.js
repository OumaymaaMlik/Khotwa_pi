import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/projet.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function CoachDashboardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 24)(4, "p", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26);
    i0.ɵɵelement(7, "div", 27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "strong", 28);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r1.titre[0]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r1.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", p_r1.progression, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r1.progression, "%");
} }
function CoachDashboardComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "div")(2, "p", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 31)(7, "button", 32);
    i0.ɵɵtext(8, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 33);
    i0.ɵɵtext(10, "\u2717");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const v_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r2.tache);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r2.startup);
} }
export class CoachDashboardComponent {
    constructor(projetService) {
        this.projetService = projetService;
        this.validations = [
            { id: 'v1', tache: 'Prototype UI — E-Learning', startup: 'EduTech Pro (Sara)', doc: 'maquette_v2.pdf' },
            { id: 'v2', tache: 'Tests QA HealthMobile', startup: 'HealthMobile (Sara)', doc: 'rapport_tests.pdf' },
        ];
    }
    get projets() { return this.projetService.projets; }
    static { this.ɵfac = function CoachDashboardComponent_Factory(t) { return new (t || CoachDashboardComponent)(i0.ɵɵdirectiveInject(i1.ProjetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoachDashboardComponent, selectors: [["app-coach-dashboard"]], decls: 46, vars: 2, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/coach/collaborations", 1, "kh-btn", "kh-btn--primary"], [1, "kpi-grid", "animate-2"], [1, "kpi-card", "kpi-card--coach"], [1, "kpi-value", 2, "color", "white"], [1, "kpi-label", 2, "color", "rgba(255,255,255,0.7)"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-value", "kpi-alert"], [1, "bottom-grid", "animate-3"], [1, "kh-card", "panel"], [1, "panel-header"], [1, "kh-section-title"], ["routerLink", "/coach/startups", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], ["class", "startup-row", 4, "ngFor", "ngForOf"], ["routerLink", "/coach/validations", 1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "val-list"], ["class", "val-item", 4, "ngFor", "ngForOf"], [1, "startup-row"], [1, "startup-avatar"], [2, "flex", "1"], [2, "font-size", "13px", "font-weight", "600"], [1, "kh-progress", 2, "margin-top", "5px"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "font-size", "12px", "color", "var(--teal)"], [1, "val-item"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "display", "flex", "gap", "6px"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--green)", "color", "white"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"]], template: function CoachDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Coach Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Welcome Ahmed \u2014 manage your supported startups");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4);
            i0.ɵɵtext(8, "\uD83E\uDD1D View collaborations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6)(11, "p", 7);
            i0.ɵɵtext(12, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p", 8);
            i0.ɵɵtext(14, "Supported startups");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "p", 10);
            i0.ɵɵtext(17, "5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p", 11);
            i0.ɵɵtext(19, "Validations en attente");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 9)(21, "p", 10);
            i0.ɵɵtext(22, "8");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p", 11);
            i0.ɵɵtext(24, "Sessions ce mois");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 9)(26, "p", 12);
            i0.ɵɵtext(27, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p", 11);
            i0.ɵɵtext(29, "Alertes SLA");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "span", 16);
            i0.ɵɵtext(34, "My Startups");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "a", 17);
            i0.ɵɵtext(36, "View all");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(37, CoachDashboardComponent_div_37_Template, 10, 5, "div", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 14)(39, "div", 15)(40, "span", 16);
            i0.ɵɵtext(41, "Validations en attente");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "a", 19);
            i0.ɵɵtext(43, "Traiter");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "div", 20);
            i0.ɵɵtemplate(45, CoachDashboardComponent_div_45_Template, 11, 2, "div", 21);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(37);
            i0.ɵɵproperty("ngForOf", ctx.projets.slice(0, 3));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.validations);
        } }, dependencies: [i2.NgForOf, i3.RouterLink], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.kpi-grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px; }\n.kpi-card[_ngcontent-%COMP%] { background:white;border-radius:var(--radius-md);padding:18px 20px;border:1px solid var(--border);transition:all 0.2s; }\n.kpi-card--coach[_ngcontent-%COMP%] { background:linear-gradient(135deg,#7C5CBF,#5a3a9f);border:none; }\n.kpi-card[_ngcontent-%COMP%]:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.kpi-value[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:var(--text-primary); }\n.kpi-alert[_ngcontent-%COMP%] { color:var(--red); }\n.kpi-label[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary);margin-top:3px; }\n.bottom-grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px; }\n.panel[_ngcontent-%COMP%] { padding:22px; }\n.panel-header[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px; }\n.startup-row[_ngcontent-%COMP%] { display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border); }\n.startup-row[_ngcontent-%COMP%]:last-child { border-bottom:none; }\n.startup-avatar[_ngcontent-%COMP%] { width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#7C5CBF,#5a3a9f);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0; }\n.val-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:12px; }\n.val-item[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px;background:var(--bg-app);border-radius:var(--radius-sm);flex-wrap:wrap; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoachDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-coach-dashboard', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Coach Dashboard</h1><p class=\"page-sub\">Welcome Ahmed \u2014 manage your supported startups</p></div>\n    <a routerLink=\"/coach/collaborations\" class=\"kh-btn kh-btn--primary\">\uD83E\uDD1D View collaborations</a>\n  </div>\n  <div class=\"kpi-grid animate-2\">\n    <div class=\"kpi-card kpi-card--coach\"><p class=\"kpi-value\" style=\"color:white\">3</p><p class=\"kpi-label\" style=\"color:rgba(255,255,255,0.7)\">Supported startups</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\">5</p><p class=\"kpi-label\">Validations en attente</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\">8</p><p class=\"kpi-label\">Sessions ce mois</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value kpi-alert\">2</p><p class=\"kpi-label\">Alertes SLA</p></div>\n  </div>\n  <div class=\"bottom-grid animate-3\">\n    <div class=\"kh-card panel\">\n      <div class=\"panel-header\"><span class=\"kh-section-title\">My Startups</span><a routerLink=\"/coach/startups\" class=\"kh-btn kh-btn--ghost kh-btn--sm\">View all</a></div>\n      <div *ngFor=\"let p of projets.slice(0,3)\" class=\"startup-row\">\n        <div class=\"startup-avatar\">{{ p.titre[0] }}</div>\n        <div style=\"flex:1\">\n          <p style=\"font-size:13px;font-weight:600\">{{ p.titre }}</p>\n          <div class=\"kh-progress\" style=\"margin-top:5px\"><div class=\"kh-progress__fill kh-progress__fill--teal\" [style.width.%]=\"p.progression\"></div></div>\n        </div>\n        <strong style=\"font-size:12px;color:var(--teal)\">{{ p.progression }}%</strong>\n      </div>\n    </div>\n    <div class=\"kh-card panel\">\n      <div class=\"panel-header\"><span class=\"kh-section-title\">Validations en attente</span><a routerLink=\"/coach/validations\" class=\"kh-btn kh-btn--primary kh-btn--sm\">Traiter</a></div>\n      <div class=\"val-list\">\n        <div *ngFor=\"let v of validations\" class=\"val-item\">\n          <div><p style=\"font-size:13px;font-weight:600\">{{ v.tache }}</p><p style=\"font-size:11px;color:var(--text-muted)\">{{ v.startup }}</p></div>\n          <div style=\"display:flex;gap:6px\">\n            <button class=\"kh-btn kh-btn--sm\" style=\"background:var(--green);color:white\">\u2713</button>\n            <button class=\"kh-btn kh-btn--danger kh-btn--sm\">\u2717</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.kpi-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px; }\n.kpi-card { background:white;border-radius:var(--radius-md);padding:18px 20px;border:1px solid var(--border);transition:all 0.2s; }\n.kpi-card--coach { background:linear-gradient(135deg,#7C5CBF,#5a3a9f);border:none; }\n.kpi-card:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.kpi-value { font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:var(--text-primary); }\n.kpi-alert { color:var(--red); }\n.kpi-label { font-size:12px;color:var(--text-secondary);margin-top:3px; }\n.bottom-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px; }\n.panel { padding:22px; }\n.panel-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px; }\n.startup-row { display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border); }\n.startup-row:last-child { border-bottom:none; }\n.startup-avatar { width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#7C5CBF,#5a3a9f);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0; }\n.val-list { display:flex;flex-direction:column;gap:12px; }\n.val-item { display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px;background:var(--bg-app);border-radius:var(--radius-sm);flex-wrap:wrap; }\n"] }]
    }], () => [{ type: i1.ProjetService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoachDashboardComponent, { className: "CoachDashboardComponent", filePath: "app\\features\\coach\\dashboard\\dashboard.component.ts", lineNumber: 4 }); })();
//# sourceMappingURL=dashboard.component.js.map