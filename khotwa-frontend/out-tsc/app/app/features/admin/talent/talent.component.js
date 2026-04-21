import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AdminTalentComponent_div_14_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1);
} }
function AdminTalentComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "p", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 16);
    i0.ɵɵtemplate(12, AdminTalentComponent_div_14_div_1_span_12_Template, 2, 1, "span", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 18)(14, "div", 19)(15, "span", 20);
    i0.ɵɵtext(16, "Score global");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong", 21);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 22);
    i0.ɵɵelement(20, "div", 23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 24)(22, "button", 25);
    i0.ɵɵtext(23, "Contacter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 26);
    i0.ɵɵtext(25, "Profil");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r2.nom[0]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r2.nom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.poste);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(t_r2.disponible ? "kh-badge--green" : "kh-badge--gray");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r2.disponible ? "Dispo" : "Indispo");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", t_r2.competences);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", t_r2.score, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", t_r2.score, "%");
} }
function AdminTalentComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, AdminTalentComponent_div_14_div_1_Template, 26, 10, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.talents);
} }
function AdminTalentComponent_div_15_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r4);
} }
function AdminTalentComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 28)(2, "span", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 31);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 14);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 32);
    i0.ɵɵtemplate(11, AdminTalentComponent_div_15_div_1_span_11_Template, 2, 1, "span", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 33);
    i0.ɵɵtext(13, "View applications");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(a_r5.type === "cofondateur" ? "kh-badge--orange" : a_r5.type === "stagiaire" ? "kh-badge--teal" : "kh-badge--green");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", a_r5.match, "% match");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r5.poste);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r5.startup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", a_r5.competences);
} }
function AdminTalentComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, AdminTalentComponent_div_15_div_1_Template, 14, 7, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.annonces);
} }
export class AdminTalentComponent {
    constructor() {
        this.view = 'talents';
        this.talents = [
            { id: 't1', nom: 'Karim Dridi', poste: 'Full Stack Developer', competences: ['Angular', 'Node.js', 'MongoDB'], score: 92, disponible: true },
            { id: 't2', nom: 'Amira Saidi', poste: 'Designer UX/UI', competences: ['Figma', 'Adobe XD', 'CSS'], score: 88, disponible: true },
            { id: 't3', nom: 'Youssef Ben Hmida', poste: 'Data Scientist', competences: ['Python', 'TensorFlow', 'SQL'], score: 75, disponible: false },
            { id: 't4', nom: 'Sonia Mhiri', poste: 'Marketing Digital', competences: ['SEO', 'Google Ads', 'Analytics'], score: 81, disponible: true },
        ];
        this.annonces = [
            { id: 'a1', startup: 'EduTech Pro', poste: 'Co-fondateur CTO', type: 'cofondateur', competences: ['React', 'AWS'], match: 92 },
            { id: 'a2', startup: 'HealthMobile', poste: 'Stagiaire iOS Dev', type: 'stagiaire', competences: ['Swift', 'UIKit'], match: 75 },
        ];
    }
    static { this.ɵfac = function AdminTalentComponent_Factory(t) { return new (t || AdminTalentComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminTalentComponent, selectors: [["app-admin-talent"]], decls: 16, vars: 8, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "tabs", "animate-2"], [1, "tab", 3, "click"], ["class", "grid animate-3", 4, "ngIf"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "talent-header"], [1, "talent-avatar"], [1, "card-name", 2, "font-size", "14px"], [1, "card-meta"], [1, "kh-badge", 2, "margin-left", "auto"], [1, "skills"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "14px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px", "color", "var(--orange)"], [1, "kh-progress"], [1, "kh-progress__fill"], [2, "margin-top", "14px", "padding-top", "12px", "border-top", "1px solid var(--border)", "display", "flex", "gap", "8px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "skill-tag"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "12px"], [1, "kh-badge"], [1, "score-badge"], [1, "card-name"], [1, "skills", 2, "margin-top", "10px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 2, "margin-top", "14px", "width", "100%", "justify-content", "center"]], template: function AdminTalentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Talent Marketplace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Connectez startups et talents");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵtext(8, "+ Post listing");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "button", 6);
            i0.ɵɵlistener("click", function AdminTalentComponent_Template_button_click_10_listener() { return ctx.view = "talents"; });
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵlistener("click", function AdminTalentComponent_Template_button_click_12_listener() { return ctx.view = "annonces"; });
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(14, AdminTalentComponent_div_14_Template, 2, 1, "div", 7)(15, AdminTalentComponent_div_15_Template, 2, 1, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵclassProp("active", ctx.view === "talents");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\uD83D\uDC64 Talents (", ctx.talents.length, ")");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.view === "annonces");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\uD83D\uDCCB Annonces (", ctx.annonces.length, ")");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "talents");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "annonces");
        } }, dependencies: [i1.NgForOf, i1.NgIf], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.tabs[_ngcontent-%COMP%] { display:flex;gap:8px; }\n.tab[_ngcontent-%COMP%] { padding:8px 18px;border-radius:var(--radius-sm);font-size:13px;font-weight:600;border:none;cursor:pointer;background:white;color:var(--text-secondary);border:1px solid var(--border);transition:all 0.15s; }\n.tab.active[_ngcontent-%COMP%] { background:var(--orange);color:white;border-color:var(--orange); }\n.grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px; }\n.card[_ngcontent-%COMP%] { padding:20px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card[_ngcontent-%COMP%]:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.talent-header[_ngcontent-%COMP%] { display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap; }\n.talent-avatar[_ngcontent-%COMP%] { width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,#E8622A,#FF9A5C);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0; }\n.card-name[_ngcontent-%COMP%] { font-family:\"Plus Jakarta Sans\",sans-serif;font-size:14px;font-weight:700;margin-bottom:2px; }\n.card-meta[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary); }\n.skills[_ngcontent-%COMP%] { display:flex;flex-wrap:wrap;gap:6px; }\n.skill-tag[_ngcontent-%COMP%] { padding:3px 10px;background:var(--orange-light);color:var(--orange);border-radius:99px;font-size:11px;font-weight:600; }\n.score-badge[_ngcontent-%COMP%] { background:linear-gradient(135deg,var(--orange),#FF9A5C);color:white;padding:4px 10px;border-radius:99px;font-size:11px;font-weight:700; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminTalentComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-talent', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Talent Marketplace</h1><p class=\"page-sub\">Connectez startups et talents</p></div>\n    <button class=\"kh-btn kh-btn--primary\">+ Post listing</button>\n  </div>\n  <div class=\"tabs animate-2\">\n    <button class=\"tab\" [class.active]=\"view==='talents'\" (click)=\"view='talents'\">\uD83D\uDC64 Talents ({{ talents.length }})</button>\n    <button class=\"tab\" [class.active]=\"view==='annonces'\" (click)=\"view='annonces'\">\uD83D\uDCCB Annonces ({{ annonces.length }})</button>\n  </div>\n  <div *ngIf=\"view==='talents'\" class=\"grid animate-3\">\n    <div *ngFor=\"let t of talents\" class=\"card\">\n      <div class=\"talent-header\">\n        <div class=\"talent-avatar\">{{ t.nom[0] }}</div>\n        <div>\n          <p class=\"card-name\" style=\"font-size:14px\">{{ t.nom }}</p>\n          <p class=\"card-meta\">{{ t.poste }}</p>\n        </div>\n        <span class=\"kh-badge\" [class]=\"t.disponible?'kh-badge--green':'kh-badge--gray'\" style=\"margin-left:auto\">{{ t.disponible ? 'Dispo' : 'Indispo' }}</span>\n      </div>\n      <div class=\"skills\">\n        <span *ngFor=\"let c of t.competences\" class=\"skill-tag\">{{ c }}</span>\n      </div>\n      <div style=\"margin-top:14px\">\n        <div style=\"display:flex;justify-content:space-between;margin-bottom:5px\"><span style=\"font-size:11px;color:var(--text-muted)\">Score global</span><strong style=\"font-size:12px;color:var(--orange)\">{{ t.score }}%</strong></div>\n        <div class=\"kh-progress\"><div class=\"kh-progress__fill\" [style.width.%]=\"t.score\"></div></div>\n      </div>\n      <div style=\"margin-top:14px;padding-top:12px;border-top:1px solid var(--border);display:flex;gap:8px\">\n        <button class=\"kh-btn kh-btn--primary kh-btn--sm\">Contacter</button>\n        <button class=\"kh-btn kh-btn--ghost kh-btn--sm\">Profil</button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"view==='annonces'\" class=\"grid animate-3\">\n    <div *ngFor=\"let a of annonces\" class=\"card\">\n      <div style=\"display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px\">\n        <span class=\"kh-badge\" [class]=\"a.type==='cofondateur'?'kh-badge--orange':a.type==='stagiaire'?'kh-badge--teal':'kh-badge--green'\">{{ a.type }}</span>\n        <span class=\"score-badge\">{{ a.match }}% match</span>\n      </div>\n      <p class=\"card-name\">{{ a.poste }}</p>\n      <p class=\"card-meta\">{{ a.startup }}</p>\n      <div class=\"skills\" style=\"margin-top:10px\">\n        <span *ngFor=\"let c of a.competences\" class=\"skill-tag\">{{ c }}</span>\n      </div>\n      <button class=\"kh-btn kh-btn--primary kh-btn--sm\" style=\"margin-top:14px;width:100%;justify-content:center\">View applications</button>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.tabs { display:flex;gap:8px; }\n.tab { padding:8px 18px;border-radius:var(--radius-sm);font-size:13px;font-weight:600;border:none;cursor:pointer;background:white;color:var(--text-secondary);border:1px solid var(--border);transition:all 0.15s; }\n.tab.active { background:var(--orange);color:white;border-color:var(--orange); }\n.grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px; }\n.card { padding:20px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.talent-header { display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap; }\n.talent-avatar { width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,#E8622A,#FF9A5C);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0; }\n.card-name { font-family:\"Plus Jakarta Sans\",sans-serif;font-size:14px;font-weight:700;margin-bottom:2px; }\n.card-meta { font-size:12px;color:var(--text-secondary); }\n.skills { display:flex;flex-wrap:wrap;gap:6px; }\n.skill-tag { padding:3px 10px;background:var(--orange-light);color:var(--orange);border-radius:99px;font-size:11px;font-weight:600; }\n.score-badge { background:linear-gradient(135deg,var(--orange),#FF9A5C);color:white;padding:4px 10px;border-radius:99px;font-size:11px;font-weight:700; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminTalentComponent, { className: "AdminTalentComponent", filePath: "app\\features\\admin\\talent\\talent.component.ts", lineNumber: 3 }); })();
//# sourceMappingURL=talent.component.js.map