import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function EntrepreneurWorkflowsComponent_div_25_ng_container_10_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1, "\u2192");
    i0.ɵɵelementEnd();
} }
function EntrepreneurWorkflowsComponent_div_25_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 21);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, EntrepreneurWorkflowsComponent_div_25_ng_container_10_div_5_Template, 2, 0, "div", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const w_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", w_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r2);
} }
function EntrepreneurWorkflowsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "p", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 14);
    i0.ɵɵtemplate(10, EntrepreneurWorkflowsComponent_div_25_ng_container_10_Template, 6, 4, "ng-container", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 16)(12, "span", 17);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 18);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 19);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const w_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", w_r3.color + "22")("color", w_r3.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(w_r3.icone);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(w_r3.nom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r3.desc);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", w_r3.etapes);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(w_r3.statut);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", w_r3.runs, " runs");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r3.trigger);
} }
export class EntrepreneurWorkflowsComponent {
    constructor() {
        this.workflows = [
            { id: 'w1', nom: 'Validation par Preuve', desc: 'Vérifie la présence du document requis avant validation', trigger: 'À la soumission', statut: 'actif', etapes: ['Soumission tâche', 'Vérif. document', 'Notification coach', 'Validation'], runs: 34, icone: '✅', color: '#27AE7A' },
            { id: 'w2', nom: 'Alerte SLA — Blocage', desc: 'Notification si une étape est bloquée plus de 15 jours', trigger: 'Cron job quotidien', statut: 'actif', etapes: ['Scan BDD', 'Calcul délai', 'SLA > 15j?', 'Notification admin'], runs: 87, icone: '⏰', color: '#E8622A' },
            { id: 'w3', nom: 'Propagation de Retard', desc: 'Recalcule les dates suivantes en cas de retard critical', trigger: 'Mise à jour tâche', statut: 'actif', etapes: ['Détection retard', 'Impact critical?', 'Recalcul dates', 'Notif équipe'], runs: 12, icone: '📅', color: '#2ABFBF' },
            { id: 'w4', nom: 'Alerte Deadline 24h', desc: 'Push notification 24h avant chaque deadline', trigger: 'Cron toutes 6h', statut: 'actif', etapes: ['Scan deadlines', '< 24h?', 'Email + Push', 'Log envoi'], runs: 156, icone: '🔔', color: '#F5A623' },
        ];
    }
    static { this.ɵfac = function EntrepreneurWorkflowsComponent_Factory(t) { return new (t || EntrepreneurWorkflowsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntrepreneurWorkflowsComponent, selectors: [["app-entrepreneur-workflows"]], decls: 26, vars: 1, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kpi-row", "animate-2"], [1, "mini-kpi"], [1, "mini-kpi", "mini-kpi--alert"], [1, "wf-list", "animate-3"], ["class", "wf-card kh-card", 4, "ngFor", "ngForOf"], [1, "wf-card", "kh-card"], [1, "wf-left"], [1, "wf-icon"], [1, "wf-name"], [1, "wf-desc"], [1, "wf-etapes"], [4, "ngFor", "ngForOf"], [1, "wf-right"], [1, "kh-badge", "kh-badge--green"], [1, "wf-runs"], [2, "font-size", "10px", "color", "var(--text-muted)"], [1, "wf-step"], [1, "wf-step-dot"], ["class", "wf-step-arrow", 4, "ngIf"], [1, "wf-step-arrow"]], template: function EntrepreneurWorkflowsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Workflows Intelligents");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Automatisations actives sur vos projets");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 4)(8, "div", 5)(9, "span");
            i0.ɵɵtext(10, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, "Workflows actifs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5)(13, "span");
            i0.ɵɵtext(14, "289");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(15, "Runs this month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 5)(17, "span");
            i0.ɵɵtext(18, "96%");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, "Success rate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 6)(21, "span");
            i0.ɵɵtext(22, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, "Alertes en attente");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 7);
            i0.ɵɵtemplate(25, EntrepreneurWorkflowsComponent_div_25_Template, 18, 11, "div", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(25);
            i0.ɵɵproperty("ngForOf", ctx.workflows);
        } }, dependencies: [i1.NgForOf, i1.NgIf], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.kpi-row[_ngcontent-%COMP%] { display:flex;gap:14px;flex-wrap:wrap; }\n.mini-kpi[_ngcontent-%COMP%] { background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 18px;display:flex;flex-direction:column;gap:3px; }\n.mini-kpi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:var(--text-primary); }\n.mini-kpi[_ngcontent-%COMP%] { font-size:11px;color:var(--text-muted); }\n.mini-kpi--alert[_ngcontent-%COMP%] { border-color:rgba(232,74,74,0.3);background:rgba(232,74,74,0.04); }\n.mini-kpi--alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color:var(--red); }\n.wf-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:14px; }\n.wf-card[_ngcontent-%COMP%] { padding:20px;display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap; }\n.wf-left[_ngcontent-%COMP%] { display:flex;align-items:flex-start;gap:14px;flex:1;min-width:200px; }\n.wf-icon[_ngcontent-%COMP%] { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0; }\n.wf-name[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;margin-bottom:4px; }\n.wf-desc[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary);line-height:1.4;max-width:280px; }\n.wf-etapes[_ngcontent-%COMP%] { display:flex;align-items:center;flex-wrap:wrap;gap:4px;flex:2; }\n.wf-step[_ngcontent-%COMP%] { display:flex;align-items:center;gap:4px; }\n.wf-step-dot[_ngcontent-%COMP%] { width:6px;height:6px;border-radius:50%; }\n.wf-step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size:11px;font-weight:600;color:var(--text-secondary);background:var(--bg-app);padding:3px 8px;border-radius:6px; }\n.wf-step-arrow[_ngcontent-%COMP%] { color:var(--text-muted);font-size:12px;margin:0 2px; }\n.wf-right[_ngcontent-%COMP%] { display:flex;flex-direction:column;align-items:flex-end;gap:6px;text-align:right; }\n.wf-runs[_ngcontent-%COMP%] { font-size:12px;font-weight:600;color:var(--text-primary); }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntrepreneurWorkflowsComponent, [{
        type: Component,
        args: [{ selector: 'app-entrepreneur-workflows', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Workflows Intelligents</h1><p class=\"page-sub\">Automatisations actives sur vos projets</p></div>\n  </div>\n  <div class=\"kpi-row animate-2\">\n    <div class=\"mini-kpi\"><span>4</span>Workflows actifs</div>\n    <div class=\"mini-kpi\"><span>289</span>Runs this month</div>\n    <div class=\"mini-kpi\"><span>96%</span>Success rate</div>\n    <div class=\"mini-kpi mini-kpi--alert\"><span>2</span>Alertes en attente</div>\n  </div>\n  <div class=\"wf-list animate-3\">\n    <div *ngFor=\"let w of workflows\" class=\"wf-card kh-card\">\n      <div class=\"wf-left\">\n        <div class=\"wf-icon\" [style.background]=\"w.color + '22'\" [style.color]=\"w.color\">{{ w.icone }}</div>\n        <div>\n          <p class=\"wf-name\">{{ w.nom }}</p>\n          <p class=\"wf-desc\">{{ w.desc }}</p>\n        </div>\n      </div>\n      <div class=\"wf-etapes\">\n        <ng-container *ngFor=\"let e of w.etapes; let last=last\">\n          <div class=\"wf-step\">\n            <div class=\"wf-step-dot\" [style.background]=\"w.color\"></div>\n            <span>{{ e }}</span>\n          </div>\n          <div *ngIf=\"!last\" class=\"wf-step-arrow\">\u2192</div>\n        </ng-container>\n      </div>\n      <div class=\"wf-right\">\n        <span class=\"kh-badge kh-badge--green\">{{ w.statut }}</span>\n        <p class=\"wf-runs\">{{ w.runs }} runs</p>\n        <p style=\"font-size:10px;color:var(--text-muted)\">{{ w.trigger }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.kpi-row { display:flex;gap:14px;flex-wrap:wrap; }\n.mini-kpi { background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 18px;display:flex;flex-direction:column;gap:3px; }\n.mini-kpi span { font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:var(--text-primary); }\n.mini-kpi { font-size:11px;color:var(--text-muted); }\n.mini-kpi--alert { border-color:rgba(232,74,74,0.3);background:rgba(232,74,74,0.04); }\n.mini-kpi--alert span { color:var(--red); }\n.wf-list { display:flex;flex-direction:column;gap:14px; }\n.wf-card { padding:20px;display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap; }\n.wf-left { display:flex;align-items:flex-start;gap:14px;flex:1;min-width:200px; }\n.wf-icon { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0; }\n.wf-name { font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;margin-bottom:4px; }\n.wf-desc { font-size:12px;color:var(--text-secondary);line-height:1.4;max-width:280px; }\n.wf-etapes { display:flex;align-items:center;flex-wrap:wrap;gap:4px;flex:2; }\n.wf-step { display:flex;align-items:center;gap:4px; }\n.wf-step-dot { width:6px;height:6px;border-radius:50%; }\n.wf-step span { font-size:11px;font-weight:600;color:var(--text-secondary);background:var(--bg-app);padding:3px 8px;border-radius:6px; }\n.wf-step-arrow { color:var(--text-muted);font-size:12px;margin:0 2px; }\n.wf-right { display:flex;flex-direction:column;align-items:flex-end;gap:6px;text-align:right; }\n.wf-runs { font-size:12px;font-weight:600;color:var(--text-primary); }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EntrepreneurWorkflowsComponent, { className: "EntrepreneurWorkflowsComponent", filePath: "app\\features\\entrepreneur\\workflows\\workflows.component.ts", lineNumber: 3 }); })();
//# sourceMappingURL=workflows.component.js.map