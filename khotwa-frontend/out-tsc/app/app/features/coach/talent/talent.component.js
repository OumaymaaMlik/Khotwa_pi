import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CoachTalentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "h3");
    i0.ɵɵtext(3, "New listing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 11);
    i0.ɵɵlistener("click", function CoachTalentComponent_div_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showForm = false); });
    i0.ɵɵtext(5, "\u2715 Cancel");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 12)(7, "div", 13)(8, "label");
    i0.ɵɵtext(9, "Startup");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newAnnonce.startup, $event) || (ctx_r1.newAnnonce.startup = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 13)(12, "label");
    i0.ɵɵtext(13, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newAnnonce.type, $event) || (ctx_r1.newAnnonce.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(15, "option", 16);
    i0.ɵɵtext(16, "Co-founder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 17);
    i0.ɵɵtext(18, "Intern");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 18);
    i0.ɵɵtext(20, "Full-time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 19);
    i0.ɵɵtext(22, "Freelance");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(23, "div", 13)(24, "label");
    i0.ɵɵtext(25, "Position / Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 20);
    i0.ɵɵtwoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newAnnonce.poste, $event) || (ctx_r1.newAnnonce.poste = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 13)(28, "label");
    i0.ɵɵtext(29, "Required skills ");
    i0.ɵɵelementStart(30, "span", 21);
    i0.ɵɵtext(31, "(comma-separated)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_input_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newAnnonce.competences, $event) || (ctx_r1.newAnnonce.competences = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "button", 4);
    i0.ɵɵlistener("click", function CoachTalentComponent_div_9_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAnnonce()); });
    i0.ɵɵtext(34, "Post listing \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newAnnonce.startup);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newAnnonce.type);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newAnnonce.poste);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newAnnonce.competences);
} }
function CoachTalentComponent_div_15_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r3);
} }
function CoachTalentComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "p", 28);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 29);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 30);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 31);
    i0.ɵɵtemplate(12, CoachTalentComponent_div_15_div_1_span_12_Template, 2, 1, "span", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 33)(14, "div", 34)(15, "span", 35);
    i0.ɵɵtext(16, "Overall score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong", 36);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 37);
    i0.ɵɵelement(20, "div", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 39)(22, "button", 40);
    i0.ɵɵtext(23, "Contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 41);
    i0.ɵɵtext(25, "Profile");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r4.nom[0]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r4.nom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r4.poste);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(t_r4.disponible ? "kh-badge--green" : "kh-badge--gray");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", t_r4.disponible ? "Available" : "Unavailable", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", t_r4.competences);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", t_r4.score, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", t_r4.score, "%");
} }
function CoachTalentComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, CoachTalentComponent_div_15_div_1_Template, 26, 10, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.talents);
} }
function CoachTalentComponent_div_16_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", a_r5.match, "% match");
} }
function CoachTalentComponent_div_16_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r6);
} }
function CoachTalentComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 44)(2, "span", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CoachTalentComponent_div_16_div_1_span_4_Template, 2, 1, "span", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 28);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 29);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 47);
    i0.ɵɵtemplate(10, CoachTalentComponent_div_16_div_1_span_10_Template, 2, 1, "span", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 48);
    i0.ɵɵtext(12, "View applications");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(a_r5.type === "cofondateur" ? "kh-badge--orange" : a_r5.type === "stagiaire" ? "kh-badge--teal" : "kh-badge--green");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r5.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r5.match > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r5.poste);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r5.startup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", a_r5.competences);
} }
function CoachTalentComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "p");
    i0.ɵɵtext(2, "No listings yet. Post an opportunity for one of your startups!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function CoachTalentComponent_div_16_div_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showForm = true); });
    i0.ɵɵtext(4, "+ Post listing");
    i0.ɵɵelementEnd()();
} }
function CoachTalentComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, CoachTalentComponent_div_16_div_1_Template, 13, 7, "div", 24)(2, CoachTalentComponent_div_16_div_2_Template, 5, 0, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.annonces);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.annonces.length === 0);
} }
export class CoachTalentComponent {
    constructor() {
        this.view = 'talents';
        this.talents = [
            { id: 't1', nom: 'Karim Dridi', poste: 'Full Stack Developer', competences: ['Angular', 'Node.js', 'MongoDB'], score: 92, disponible: true },
            { id: 't2', nom: 'Amira Saidi', poste: 'UX/UI Designer', competences: ['Figma', 'Adobe XD', 'CSS'], score: 88, disponible: true },
            { id: 't3', nom: 'Youssef Ben Hmida', poste: 'Data Scientist', competences: ['Python', 'TensorFlow', 'SQL'], score: 75, disponible: false },
            { id: 't4', nom: 'Sonia Mhiri', poste: 'Digital Marketing', competences: ['SEO', 'Google Ads', 'Analytics'], score: 81, disponible: true },
        ];
        this.annonces = [
            { id: 'a1', startup: 'EduTech Pro', poste: 'Co-founder CTO', type: 'cofondateur', competences: ['React', 'AWS'], match: 92 },
            { id: 'a2', startup: 'HealthMobile', poste: 'iOS Dev Intern', type: 'stagiaire', competences: ['Swift', 'UIKit'], match: 75 },
        ];
        this.showForm = false;
        this.newAnnonce = { poste: '', startup: '', type: 'stagiaire', competences: '' };
    }
    submitAnnonce() {
        if (!this.newAnnonce.poste || !this.newAnnonce.startup)
            return;
        this.annonces.push({
            id: 'a' + Date.now(),
            startup: this.newAnnonce.startup,
            poste: this.newAnnonce.poste,
            type: this.newAnnonce.type,
            competences: this.newAnnonce.competences.split(',').map(s => s.trim()).filter(Boolean),
            match: 0,
        });
        this.showForm = false;
        this.newAnnonce = { poste: '', startup: '', type: 'stagiaire', competences: '' };
        this.view = 'annonces';
    }
    static { this.ɵfac = function CoachTalentComponent_Factory(t) { return new (t || CoachTalentComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoachTalentComponent, selectors: [["app-coach-talent"]], decls: 17, vars: 9, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["class", "form-panel animate-2", 4, "ngIf"], [1, "tabs", "animate-2"], [1, "tab", 3, "click"], ["class", "grid animate-3", 4, "ngIf"], [1, "form-panel", "animate-2"], [1, "form-panel__header"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "e.g. EduTech Pro", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "kh-input", 3, "ngModelChange", "ngModel"], ["value", "cofondateur"], ["value", "stagiaire"], ["value", "emploi"], ["value", "freelance"], ["type", "text", "placeholder", "e.g. Backend Developer", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["type", "text", "placeholder", "e.g. React, Node.js, AWS", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "talent-header"], [1, "talent-avatar"], [1, "card-name"], [1, "card-meta"], [1, "kh-badge", 2, "margin-left", "auto"], [1, "skills"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "14px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-secondary)"], [2, "font-size", "12px", "color", "var(--violet)"], [1, "kh-progress"], [1, "kh-progress__fill", "kh-progress__fill--violet"], [2, "margin-top", "14px", "padding-top", "12px", "border-top", "1px solid var(--border)", "display", "flex", "gap", "8px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "skill-tag"], ["class", "empty-state", 4, "ngIf"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "12px"], [1, "kh-badge"], ["class", "score-badge", 4, "ngIf"], [1, "skills", 2, "margin-top", "10px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 2, "margin-top", "14px", "width", "100%", "justify-content", "center"], [1, "score-badge"], [1, "empty-state"]], template: function CoachTalentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Talent Marketplace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Connect your startups with the right talent");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function CoachTalentComponent_Template_button_click_7_listener() { return ctx.showForm = true; });
            i0.ɵɵtext(8, "+ Post listing");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, CoachTalentComponent_div_9_Template, 35, 4, "div", 5);
            i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
            i0.ɵɵlistener("click", function CoachTalentComponent_Template_button_click_11_listener() { return ctx.view = "talents"; });
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 7);
            i0.ɵɵlistener("click", function CoachTalentComponent_Template_button_click_13_listener() { return ctx.view = "annonces"; });
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(15, CoachTalentComponent_div_15_Template, 2, 1, "div", 8)(16, CoachTalentComponent_div_16_Template, 3, 2, "div", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.showForm);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.view === "talents");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\uD83D\uDC64 Talents (", ctx.talents.length, ")");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.view === "annonces");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\uD83D\uDCCB Listings (", ctx.annonces.length, ")");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "talents");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "annonces");
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n\n.form-panel[_ngcontent-%COMP%] { background:white;border-radius:var(--radius-lg);border:1px solid var(--border);padding:24px;box-shadow:var(--shadow-card); }\n.form-panel__header[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between;margin-bottom:20px; }\n.form-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700; }\n.form-row[_ngcontent-%COMP%] { display:grid;grid-template-columns:1fr 1fr;gap:16px; }\n.form-group[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:6px;margin-bottom:16px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size:12px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em; }\n.form-hint[_ngcontent-%COMP%] { font-size:11px;font-weight:400;text-transform:none;letter-spacing:0; }\n.kh-input[_ngcontent-%COMP%] { padding:9px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;font-family:inherit;outline:none;transition:border-color 0.2s; }\n.kh-input[_ngcontent-%COMP%]:focus { border-color:#7C5CBF; }\n\n.tabs[_ngcontent-%COMP%] { display:flex;gap:8px; }\n.tab[_ngcontent-%COMP%] { padding:8px 18px;border-radius:var(--radius-sm);font-size:13px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s; }\n.tab.active[_ngcontent-%COMP%] { background:#7C5CBF;color:white;border-color:#7C5CBF; }\n\n.grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px; }\n.card[_ngcontent-%COMP%] { padding:20px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card[_ngcontent-%COMP%]:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n\n.talent-header[_ngcontent-%COMP%] { display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap; }\n.talent-avatar[_ngcontent-%COMP%] { width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,#7C5CBF,#9E82D4);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0; }\n.card-name[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;margin-bottom:2px; }\n.card-meta[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary); }\n\n.skills[_ngcontent-%COMP%] { display:flex;flex-wrap:wrap;gap:6px; }\n.skill-tag[_ngcontent-%COMP%] { padding:3px 10px;background:rgba(124,92,191,0.1);color:#7C5CBF;border-radius:99px;font-size:11px;font-weight:600; }\n.score-badge[_ngcontent-%COMP%] { background:linear-gradient(135deg,#7C5CBF,#9E82D4);color:white;padding:4px 10px;border-radius:99px;font-size:11px;font-weight:700; }\n\n.kh-progress__fill--violet[_ngcontent-%COMP%] { background:linear-gradient(90deg,#7C5CBF,#9E82D4) !important; }\n\n.empty-state[_ngcontent-%COMP%] { grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--text-secondary);display:flex;flex-direction:column;align-items:center;gap:16px; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoachTalentComponent, [{
        type: Component,
        args: [{ selector: 'app-coach-talent', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"kh-page-title\">Talent Marketplace</h1>\n      <p class=\"page-sub\">Connect your startups with the right talent</p>\n    </div>\n    <button class=\"kh-btn kh-btn--primary\" (click)=\"showForm=true\">+ Post listing</button>\n  </div>\n\n  <!-- Post listing form -->\n  <div class=\"form-panel animate-2\" *ngIf=\"showForm\">\n    <div class=\"form-panel__header\">\n      <h3>New listing</h3>\n      <button class=\"kh-btn kh-btn--ghost kh-btn--sm\" (click)=\"showForm=false\">\u2715 Cancel</button>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label>Startup</label>\n        <input class=\"kh-input\" type=\"text\" [(ngModel)]=\"newAnnonce.startup\" placeholder=\"e.g. EduTech Pro\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Type</label>\n        <select class=\"kh-input\" [(ngModel)]=\"newAnnonce.type\">\n          <option value=\"cofondateur\">Co-founder</option>\n          <option value=\"stagiaire\">Intern</option>\n          <option value=\"emploi\">Full-time</option>\n          <option value=\"freelance\">Freelance</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Position / Role</label>\n      <input class=\"kh-input\" type=\"text\" [(ngModel)]=\"newAnnonce.poste\" placeholder=\"e.g. Backend Developer\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Required skills <span class=\"form-hint\">(comma-separated)</span></label>\n      <input class=\"kh-input\" type=\"text\" [(ngModel)]=\"newAnnonce.competences\" placeholder=\"e.g. React, Node.js, AWS\" />\n    </div>\n    <button class=\"kh-btn kh-btn--primary\" (click)=\"submitAnnonce()\">Post listing \u2192</button>\n  </div>\n\n  <div class=\"tabs animate-2\">\n    <button class=\"tab\" [class.active]=\"view==='talents'\" (click)=\"view='talents'\">\uD83D\uDC64 Talents ({{ talents.length }})</button>\n    <button class=\"tab\" [class.active]=\"view==='annonces'\" (click)=\"view='annonces'\">\uD83D\uDCCB Listings ({{ annonces.length }})</button>\n  </div>\n\n  <!-- Talents list -->\n  <div *ngIf=\"view==='talents'\" class=\"grid animate-3\">\n    <div *ngFor=\"let t of talents\" class=\"card\">\n      <div class=\"talent-header\">\n        <div class=\"talent-avatar\">{{ t.nom[0] }}</div>\n        <div>\n          <p class=\"card-name\">{{ t.nom }}</p>\n          <p class=\"card-meta\">{{ t.poste }}</p>\n        </div>\n        <span class=\"kh-badge\" [class]=\"t.disponible ? 'kh-badge--green' : 'kh-badge--gray'\" style=\"margin-left:auto\">\n          {{ t.disponible ? 'Available' : 'Unavailable' }}\n        </span>\n      </div>\n      <div class=\"skills\">\n        <span *ngFor=\"let c of t.competences\" class=\"skill-tag\">{{ c }}</span>\n      </div>\n      <div style=\"margin-top:14px\">\n        <div style=\"display:flex;justify-content:space-between;margin-bottom:5px\">\n          <span style=\"font-size:11px;color:var(--text-secondary)\">Overall score</span>\n          <strong style=\"font-size:12px;color:var(--violet)\">{{ t.score }}%</strong>\n        </div>\n        <div class=\"kh-progress\"><div class=\"kh-progress__fill kh-progress__fill--violet\" [style.width.%]=\"t.score\"></div></div>\n      </div>\n      <div style=\"margin-top:14px;padding-top:12px;border-top:1px solid var(--border);display:flex;gap:8px\">\n        <button class=\"kh-btn kh-btn--primary kh-btn--sm\">Contact</button>\n        <button class=\"kh-btn kh-btn--ghost kh-btn--sm\">Profile</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Listings -->\n  <div *ngIf=\"view==='annonces'\" class=\"grid animate-3\">\n    <div *ngFor=\"let a of annonces\" class=\"card\">\n      <div style=\"display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px\">\n        <span class=\"kh-badge\" [class]=\"a.type==='cofondateur' ? 'kh-badge--orange' : a.type==='stagiaire' ? 'kh-badge--teal' : 'kh-badge--green'\">{{ a.type }}</span>\n        <span class=\"score-badge\" *ngIf=\"a.match > 0\">{{ a.match }}% match</span>\n      </div>\n      <p class=\"card-name\">{{ a.poste }}</p>\n      <p class=\"card-meta\">{{ a.startup }}</p>\n      <div class=\"skills\" style=\"margin-top:10px\">\n        <span *ngFor=\"let c of a.competences\" class=\"skill-tag\">{{ c }}</span>\n      </div>\n      <button class=\"kh-btn kh-btn--primary kh-btn--sm\" style=\"margin-top:14px;width:100%;justify-content:center\">View applications</button>\n    </div>\n\n    <div *ngIf=\"annonces.length === 0\" class=\"empty-state\">\n      <p>No listings yet. Post an opportunity for one of your startups!</p>\n      <button class=\"kh-btn kh-btn--primary\" (click)=\"showForm=true\">+ Post listing</button>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n\n.form-panel { background:white;border-radius:var(--radius-lg);border:1px solid var(--border);padding:24px;box-shadow:var(--shadow-card); }\n.form-panel__header { display:flex;align-items:center;justify-content:space-between;margin-bottom:20px; }\n.form-panel__header h3 { font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:700; }\n.form-row { display:grid;grid-template-columns:1fr 1fr;gap:16px; }\n.form-group { display:flex;flex-direction:column;gap:6px;margin-bottom:16px; }\n.form-group label { font-size:12px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em; }\n.form-hint { font-size:11px;font-weight:400;text-transform:none;letter-spacing:0; }\n.kh-input { padding:9px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;font-family:inherit;outline:none;transition:border-color 0.2s; }\n.kh-input:focus { border-color:#7C5CBF; }\n\n.tabs { display:flex;gap:8px; }\n.tab { padding:8px 18px;border-radius:var(--radius-sm);font-size:13px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s; }\n.tab.active { background:#7C5CBF;color:white;border-color:#7C5CBF; }\n\n.grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px; }\n.card { padding:20px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n\n.talent-header { display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap; }\n.talent-avatar { width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,#7C5CBF,#9E82D4);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0; }\n.card-name { font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;margin-bottom:2px; }\n.card-meta { font-size:12px;color:var(--text-secondary); }\n\n.skills { display:flex;flex-wrap:wrap;gap:6px; }\n.skill-tag { padding:3px 10px;background:rgba(124,92,191,0.1);color:#7C5CBF;border-radius:99px;font-size:11px;font-weight:600; }\n.score-badge { background:linear-gradient(135deg,#7C5CBF,#9E82D4);color:white;padding:4px 10px;border-radius:99px;font-size:11px;font-weight:700; }\n\n.kh-progress__fill--violet { background:linear-gradient(90deg,#7C5CBF,#9E82D4) !important; }\n\n.empty-state { grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--text-secondary);display:flex;flex-direction:column;align-items:center;gap:16px; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoachTalentComponent, { className: "CoachTalentComponent", filePath: "app\\features\\coach\\talent\\talent.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=talent.component.js.map