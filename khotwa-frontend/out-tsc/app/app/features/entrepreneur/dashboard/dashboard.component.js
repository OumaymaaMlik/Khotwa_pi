import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/projet.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function EntrepreneurDashboardComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "p", 37);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 38);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 39)(7, "div", 40);
    i0.ɵɵelement(8, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong", 41);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r1.titre);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(p_r1.statut === "en_cours" ? "kh-badge--teal" : p_r1.statut === "termine" ? "kh-badge--green" : "kh-badge--amber");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r1.statut);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", p_r1.progression, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r1.progression, "%");
} }
export class EntrepreneurDashboardComponent {
    constructor(projetService) {
        this.projetService = projetService;
        this.enCours = 2;
        this.tachesTerminees = 11;
        this.tachesTotal = 18;
        this.progression = 54;
    }
    get projets() { return this.projetService.projets; }
    static { this.ɵfac = function EntrepreneurDashboardComponent_Factory(t) { return new (t || EntrepreneurDashboardComponent)(i0.ɵɵdirectiveInject(i1.ProjetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntrepreneurDashboardComponent, selectors: [["app-entrepreneur-dashboard"]], decls: 94, vars: 7, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/entrepreneur/projets", 1, "kh-btn", "kh-btn--primary"], [1, "kpi-grid", "animate-2"], [1, "kpi-card", "kpi-card--primary"], [1, "kpi-value", 2, "color", "white"], [1, "kpi-label", 2, "color", "rgba(255,255,255,0.7)"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-progress"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "kpi-card", "kpi-card--alert"], [1, "kpi-value", 2, "color", "var(--red)"], [1, "bottom-grid", "animate-3"], [1, "kh-card", "panel"], [1, "panel-header"], [1, "kh-section-title"], ["routerLink", "/entrepreneur/projets", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], ["class", "project-row", 4, "ngFor", "ngForOf"], [1, "task-list"], [1, "task-item"], [1, "kh-badge", "kh-badge--red"], [1, "task-name"], [1, "task-meta"], [1, "kh-badge", "kh-badge--amber"], [1, "kh-badge", "kh-badge--orange"], [1, "rdv-list"], [1, "rdv-item"], [1, "rdv-date"], [1, "rdv-day"], [1, "rdv-mo"], [1, "project-row"], [1, "project-row__info"], [2, "font-size", "13px", "font-weight", "600"], [1, "kh-badge"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-top", "6px"], [1, "kh-progress", 2, "flex", "1"], [2, "font-size", "12px"]], template: function EntrepreneurDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Mon Espace Entrepreneur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Bienvenue Sara \u2014 suivez votre progression");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4);
            i0.ɵɵtext(8, "+ New project");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6)(11, "p", 7);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p", 8);
            i0.ɵɵtext(14, "Projets actifs");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "p", 10);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p", 11);
            i0.ɵɵtext(19, "Completed tasks");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 9)(21, "p", 10);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p", 11);
            i0.ɵɵtext(24, "Progression moyenne");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 12)(26, "div", 13);
            i0.ɵɵelement(27, "div", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 15)(29, "p", 16);
            i0.ɵɵtext(30, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p", 11);
            i0.ɵɵtext(32, "Alertes SLA");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "div", 17)(34, "div", 18)(35, "div", 19)(36, "span", 20);
            i0.ɵɵtext(37, "My Projects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "a", 21);
            i0.ɵɵtext(39, "View all");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(40, EntrepreneurDashboardComponent_div_40_Template, 11, 7, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 18)(42, "div", 19)(43, "span", 20);
            i0.ɵɵtext(44, "Urgent tasks");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 23)(46, "div", 24)(47, "span", 25);
            i0.ɵɵtext(48, "critical");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "p", 26);
            i0.ɵɵtext(50, "Prototype UI \u2014 E-Learning");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "p", 27);
            i0.ɵɵtext(52, "Deadline: tomorrow \u00B7 SLA exceeded");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "div", 24)(54, "span", 28);
            i0.ɵɵtext(55, "haute");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "p", 26);
            i0.ɵɵtext(57, "Business Plan AgriSmart");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "p", 27);
            i0.ɵɵtext(59, "Deadline: dans 3 jours");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "div", 24)(61, "span", 29);
            i0.ɵɵtext(62, "normale");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "p", 26);
            i0.ɵɵtext(64, "Tests QA HealthMobile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "p", 27);
            i0.ɵɵtext(66, "En attente de validation coach");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(67, "div", 18)(68, "div", 19)(69, "span", 20);
            i0.ɵɵtext(70, "Prochains RDV");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "div", 30)(72, "div", 31)(73, "div", 32)(74, "span", 33);
            i0.ɵɵtext(75, "15");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "span", 34);
            i0.ɵɵtext(77, "Dec");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(78, "div")(79, "p", 26);
            i0.ɵɵtext(80, "Coaching session \u2014 Ahmed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "p", 27);
            i0.ɵɵtext(82, "2:00 PM \u00B7 Google Meet");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(83, "div", 31)(84, "div", 32)(85, "span", 33);
            i0.ɵɵtext(86, "20");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "span", 34);
            i0.ɵɵtext(88, "Dec");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(89, "div")(90, "p", 26);
            i0.ɵɵtext(91, "Design Thinking Workshop");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "p", 27);
            i0.ɵɵtext(93, "9:00 AM \u00B7 In person");
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.enCours);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", ctx.tachesTerminees, "/", ctx.tachesTotal, "");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.progression, "%");
            i0.ɵɵadvance(5);
            i0.ɵɵstyleProp("width", ctx.progression, "%");
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngForOf", ctx.projets.slice(0, 3));
        } }, dependencies: [i2.NgForOf, i3.RouterLink], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.kpi-grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px; }\n.kpi-card[_ngcontent-%COMP%] { background:white;border-radius:var(--radius-md);padding:18px 20px;border:1px solid var(--border);transition:all 0.2s; }\n.kpi-card--primary[_ngcontent-%COMP%] { background:linear-gradient(135deg,#2ABFBF,#1a9999);color:white;border:none; }\n.kpi-card--primary[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] { color:rgba(255,255,255,0.7); }\n.kpi-card--alert[_ngcontent-%COMP%] { border-color:rgba(232,74,74,0.3);background:rgba(232,74,74,0.04); }\n.kpi-card[_ngcontent-%COMP%]:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.kpi-value[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:var(--text-primary); }\n.kpi-card--primary[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] { color:white; }\n.kpi-label[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary);margin-top:3px; }\n.kpi-progress[_ngcontent-%COMP%] { margin-top:12px; }\n.bottom-grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px; }\n.panel[_ngcontent-%COMP%] { padding:22px; }\n.panel-header[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px; }\n.project-row[_ngcontent-%COMP%] { padding:10px 0;border-bottom:1px solid var(--border); }\n.project-row[_ngcontent-%COMP%]:last-child { border-bottom:none; }\n.project-row__info[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between; }\n.task-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:10px; }\n.task-item[_ngcontent-%COMP%] { padding:10px 12px;background:var(--bg-app);border-radius:var(--radius-sm);display:flex;flex-direction:column;gap:4px; }\n.task-name[_ngcontent-%COMP%] { font-size:13px;font-weight:600; }\n.task-meta[_ngcontent-%COMP%] { font-size:11px;color:var(--text-muted); }\n.rdv-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:10px; }\n.rdv-item[_ngcontent-%COMP%] { display:flex;align-items:center;gap:14px;padding:10px 0;border-bottom:1px solid var(--border); }\n.rdv-item[_ngcontent-%COMP%]:last-child { border-bottom:none; }\n.rdv-date[_ngcontent-%COMP%] { text-align:center;background:var(--orange-light);border-radius:var(--radius-sm);padding:8px 12px;min-width:48px; }\n.rdv-day[_ngcontent-%COMP%] { display:block;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:var(--orange); }\n.rdv-mo[_ngcontent-%COMP%] { font-size:10px;text-transform:uppercase;font-weight:700;color:var(--orange);opacity:0.7; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntrepreneurDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-entrepreneur-dashboard', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Mon Espace Entrepreneur</h1><p class=\"page-sub\">Bienvenue Sara \u2014 suivez votre progression</p></div>\n    <a routerLink=\"/entrepreneur/projets\" class=\"kh-btn kh-btn--primary\">+ New project</a>\n  </div>\n  <div class=\"kpi-grid animate-2\">\n    <div class=\"kpi-card kpi-card--primary\">\n      <p class=\"kpi-value\" style=\"color:white\">{{ enCours }}</p><p class=\"kpi-label\" style=\"color:rgba(255,255,255,0.7)\">Projets actifs</p>\n    </div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\">{{ tachesTerminees }}/{{ tachesTotal }}</p><p class=\"kpi-label\">Completed tasks</p></div>\n    <div class=\"kpi-card\">\n      <p class=\"kpi-value\">{{ progression }}%</p><p class=\"kpi-label\">Progression moyenne</p>\n      <div class=\"kpi-progress\"><div class=\"kh-progress\"><div class=\"kh-progress__fill\" [style.width.%]=\"progression\"></div></div></div>\n    </div>\n    <div class=\"kpi-card kpi-card--alert\"><p class=\"kpi-value\" style=\"color:var(--red)\">2</p><p class=\"kpi-label\">Alertes SLA</p></div>\n  </div>\n  <div class=\"bottom-grid animate-3\">\n    <div class=\"kh-card panel\">\n      <div class=\"panel-header\"><span class=\"kh-section-title\">My Projects</span><a routerLink=\"/entrepreneur/projets\" class=\"kh-btn kh-btn--ghost kh-btn--sm\">View all</a></div>\n      <div *ngFor=\"let p of projets.slice(0,3)\" class=\"project-row\">\n        <div class=\"project-row__info\"><p style=\"font-size:13px;font-weight:600\">{{ p.titre }}</p><span class=\"kh-badge\" [class]=\"p.statut==='en_cours'?'kh-badge--teal':p.statut==='termine'?'kh-badge--green':'kh-badge--amber'\">{{ p.statut }}</span></div>\n        <div style=\"display:flex;align-items:center;gap:10px;margin-top:6px\"><div class=\"kh-progress\" style=\"flex:1\"><div class=\"kh-progress__fill\" [style.width.%]=\"p.progression\"></div></div><strong style=\"font-size:12px\">{{ p.progression }}%</strong></div>\n      </div>\n    </div>\n    <div class=\"kh-card panel\">\n      <div class=\"panel-header\"><span class=\"kh-section-title\">Urgent tasks</span></div>\n      <div class=\"task-list\">\n        <div class=\"task-item\"><span class=\"kh-badge kh-badge--red\">critical</span><p class=\"task-name\">Prototype UI \u2014 E-Learning</p><p class=\"task-meta\">Deadline: tomorrow \u00B7 SLA exceeded</p></div>\n        <div class=\"task-item\"><span class=\"kh-badge kh-badge--amber\">haute</span><p class=\"task-name\">Business Plan AgriSmart</p><p class=\"task-meta\">Deadline: dans 3 jours</p></div>\n        <div class=\"task-item\"><span class=\"kh-badge kh-badge--orange\">normale</span><p class=\"task-name\">Tests QA HealthMobile</p><p class=\"task-meta\">En attente de validation coach</p></div>\n      </div>\n    </div>\n    <div class=\"kh-card panel\">\n      <div class=\"panel-header\"><span class=\"kh-section-title\">Prochains RDV</span></div>\n      <div class=\"rdv-list\">\n        <div class=\"rdv-item\"><div class=\"rdv-date\"><span class=\"rdv-day\">15</span><span class=\"rdv-mo\">Dec</span></div><div><p class=\"task-name\">Coaching session \u2014 Ahmed</p><p class=\"task-meta\">2:00 PM \u00B7 Google Meet</p></div></div>\n        <div class=\"rdv-item\"><div class=\"rdv-date\"><span class=\"rdv-day\">20</span><span class=\"rdv-mo\">Dec</span></div><div><p class=\"task-name\">Design Thinking Workshop</p><p class=\"task-meta\">9:00 AM \u00B7 In person</p></div></div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.kpi-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px; }\n.kpi-card { background:white;border-radius:var(--radius-md);padding:18px 20px;border:1px solid var(--border);transition:all 0.2s; }\n.kpi-card--primary { background:linear-gradient(135deg,#2ABFBF,#1a9999);color:white;border:none; }\n.kpi-card--primary .kpi-label { color:rgba(255,255,255,0.7); }\n.kpi-card--alert { border-color:rgba(232,74,74,0.3);background:rgba(232,74,74,0.04); }\n.kpi-card:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.kpi-value { font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;color:var(--text-primary); }\n.kpi-card--primary .kpi-value { color:white; }\n.kpi-label { font-size:12px;color:var(--text-secondary);margin-top:3px; }\n.kpi-progress { margin-top:12px; }\n.bottom-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px; }\n.panel { padding:22px; }\n.panel-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px; }\n.project-row { padding:10px 0;border-bottom:1px solid var(--border); }\n.project-row:last-child { border-bottom:none; }\n.project-row__info { display:flex;align-items:center;justify-content:space-between; }\n.task-list { display:flex;flex-direction:column;gap:10px; }\n.task-item { padding:10px 12px;background:var(--bg-app);border-radius:var(--radius-sm);display:flex;flex-direction:column;gap:4px; }\n.task-name { font-size:13px;font-weight:600; }\n.task-meta { font-size:11px;color:var(--text-muted); }\n.rdv-list { display:flex;flex-direction:column;gap:10px; }\n.rdv-item { display:flex;align-items:center;gap:14px;padding:10px 0;border-bottom:1px solid var(--border); }\n.rdv-item:last-child { border-bottom:none; }\n.rdv-date { text-align:center;background:var(--orange-light);border-radius:var(--radius-sm);padding:8px 12px;min-width:48px; }\n.rdv-day { display:block;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:800;color:var(--orange); }\n.rdv-mo { font-size:10px;text-transform:uppercase;font-weight:700;color:var(--orange);opacity:0.7; }\n"] }]
    }], () => [{ type: i1.ProjetService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EntrepreneurDashboardComponent, { className: "EntrepreneurDashboardComponent", filePath: "app\\features\\entrepreneur\\dashboard\\dashboard.component.ts", lineNumber: 5 }); })();
//# sourceMappingURL=dashboard.component.js.map