import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CoachValidationsComponent_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2705");
    i0.ɵɵelementEnd();
} }
function CoachValidationsComponent_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u274C");
    i0.ɵɵelementEnd();
} }
function CoachValidationsComponent_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u23F3");
    i0.ɵɵelementEnd();
} }
function CoachValidationsComponent_div_7_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function CoachValidationsComponent_div_7_ng_container_20_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const v_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.validate(v_r2.id)); });
    i0.ɵɵtext(2, "\u2713 Validate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵlistener("click", function CoachValidationsComponent_div_7_ng_container_20_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const v_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.reject(v_r2.id)); });
    i0.ɵɵtext(4, "\u2717 Rejeter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function CoachValidationsComponent_div_7_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap(v_r2.statut === "valide" ? "kh-badge--green" : "kh-badge--red");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r2.statut);
} }
function CoachValidationsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtemplate(3, CoachValidationsComponent_div_7_span_3_Template, 2, 0, "span", 9)(4, CoachValidationsComponent_div_7_span_4_Template, 2, 0, "span", 9)(5, CoachValidationsComponent_div_7_span_5_Template, 2, 0, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "p", 10);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 11);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 12);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 13);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(14, "svg", 14);
    i0.ɵɵelement(15, "path", 15)(16, "polyline", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 17);
    i0.ɵɵtemplate(20, CoachValidationsComponent_div_7_ng_container_20_Template, 5, 0, "ng-container", 9)(21, CoachValidationsComponent_div_7_span_21_Template, 2, 3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r2 = ctx.$implicit;
    i0.ɵɵclassProp("done", v_r2.statut !== "en_attente");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", v_r2.statut === "valide");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", v_r2.statut === "rejete");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", v_r2.statut === "en_attente");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(v_r2.tache);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r2.startup);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Soumis le ", v_r2.date, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(v_r2.doc);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", v_r2.statut === "en_attente");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", v_r2.statut !== "en_attente");
} }
export class CoachValidationsComponent {
    constructor() {
        this.validations = [
            { id: 'v1', tache: 'Prototype UI — E-Learning', startup: 'EduTech Pro (Sara)', doc: 'maquette_v2.pdf', statut: 'en_attente', date: '2024-12-01' },
            { id: 'v2', tache: 'Tests QA HealthMobile', startup: 'HealthMobile (Sara)', doc: 'rapport_tests.pdf', statut: 'en_attente', date: '2024-12-02' },
            { id: 'v3', tache: 'Business Plan AgriSmart', startup: 'AgriSmart (Sara)', doc: 'business_plan_v3.pdf', statut: 'valide', date: '2024-11-28' },
        ];
    }
    validate(id) { const v = this.validations.find(x => x.id === id); if (v)
        v.statut = 'valide'; }
    reject(id) { const v = this.validations.find(x => x.id === id); if (v)
        v.statut = 'rejete'; }
    static { this.ɵfac = function CoachValidationsComponent_Factory(t) { return new (t || CoachValidationsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoachValidationsComponent, selectors: [["app-coach-validations"]], decls: 8, vars: 1, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "val-list", "animate-2"], ["class", "val-card kh-card", 3, "done", 4, "ngFor", "ngForOf"], [1, "val-card", "kh-card"], [1, "val-left"], [1, "val-status-icon"], [4, "ngIf"], [1, "val-tache"], [1, "val-startup"], [1, "val-date"], [1, "val-doc"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], ["points", "14 2 14 8 20 8"], [1, "val-actions"], ["class", "kh-badge", 3, "class", 4, "ngIf"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--green)", "color", "white", 3, "click"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", 3, "click"], [1, "kh-badge"]], template: function CoachValidationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "Proof-Based Validations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 3);
            i0.ɵɵtext(5, "Review and validate submitted tasks");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, CoachValidationsComponent_div_7_Template, 22, 11, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.validations);
        } }, dependencies: [i1.NgForOf, i1.NgIf], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}.page-sub[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:4px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.card[_ngcontent-%COMP%]{padding:20px}.card-name[_ngcontent-%COMP%]{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px}.card-meta[_ngcontent-%COMP%]{font-size:12px;color:var(--text-secondary)}.startup-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7C5CBF,#5a3a9f);color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}.val-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.val-card[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;transition:opacity 0.2s}.val-card.done[_ngcontent-%COMP%]{opacity:0.7}.val-left[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:14px;flex:1;min-width:220px}.val-status-icon[_ngcontent-%COMP%]{font-size:22px;flex-shrink:0}.val-tache[_ngcontent-%COMP%]{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:14px;font-weight:700;margin-bottom:3px}.val-startup[_ngcontent-%COMP%]{font-size:12px;color:var(--violet);font-weight:600}.val-date[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);margin-top:2px}.val-doc[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 14px;background:var(--orange-light);border-radius:var(--radius-sm);font-size:12px;font-weight:600;color:var(--orange);flex-shrink:0}.val-actions[_ngcontent-%COMP%]{display:flex;gap:8px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoachValidationsComponent, [{
        type: Component,
        args: [{ selector: 'app-coach-validations', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\"><h1 class=\"kh-page-title\">Proof-Based Validations</h1><p class=\"page-sub\">Review and validate submitted tasks</p></div>\n  <div class=\"val-list animate-2\">\n    <div *ngFor=\"let v of validations\" class=\"val-card kh-card\" [class.done]=\"v.statut!=='en_attente'\">\n      <div class=\"val-left\">\n        <div class=\"val-status-icon\">\n          <span *ngIf=\"v.statut==='valide'\">\u2705</span>\n          <span *ngIf=\"v.statut==='rejete'\">\u274C</span>\n          <span *ngIf=\"v.statut==='en_attente'\">\u23F3</span>\n        </div>\n        <div>\n          <p class=\"val-tache\">{{ v.tache }}</p>\n          <p class=\"val-startup\">{{ v.startup }}</p>\n          <p class=\"val-date\">Soumis le {{ v.date }}</p>\n        </div>\n      </div>\n      <div class=\"val-doc\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z\"/><polyline points=\"14 2 14 8 20 8\"/></svg>\n        <span>{{ v.doc }}</span>\n      </div>\n      <div class=\"val-actions\">\n        <ng-container *ngIf=\"v.statut==='en_attente'\">\n          <button class=\"kh-btn kh-btn--sm\" style=\"background:var(--green);color:white\" (click)=\"validate(v.id)\">\u2713 Validate</button>\n          <button class=\"kh-btn kh-btn--danger kh-btn--sm\" (click)=\"reject(v.id)\">\u2717 Rejeter</button>\n        </ng-container>\n        <span *ngIf=\"v.statut!=='en_attente'\" class=\"kh-badge\" [class]=\"v.statut==='valide'?'kh-badge--green':'kh-badge--red'\">{{ v.statut }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page{display:flex;flex-direction:column;gap:24px}.page-header{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}.page-sub{color:var(--text-secondary);margin-top:4px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.card{padding:20px}.card-name{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px}.card-meta{font-size:12px;color:var(--text-secondary)}.startup-icon{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7C5CBF,#5a3a9f);color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}.val-list{display:flex;flex-direction:column;gap:12px}.val-card{padding:20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;transition:opacity 0.2s}.val-card.done{opacity:0.7}.val-left{display:flex;align-items:flex-start;gap:14px;flex:1;min-width:220px}.val-status-icon{font-size:22px;flex-shrink:0}.val-tache{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:14px;font-weight:700;margin-bottom:3px}.val-startup{font-size:12px;color:var(--violet);font-weight:600}.val-date{font-size:11px;color:var(--text-muted);margin-top:2px}.val-doc{display:flex;align-items:center;gap:8px;padding:8px 14px;background:var(--orange-light);border-radius:var(--radius-sm);font-size:12px;font-weight:600;color:var(--orange);flex-shrink:0}.val-actions{display:flex;gap:8px}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoachValidationsComponent, { className: "CoachValidationsComponent", filePath: "app\\features\\coach\\validations\\validations.component.ts", lineNumber: 3 }); })();
//# sourceMappingURL=validations.component.js.map