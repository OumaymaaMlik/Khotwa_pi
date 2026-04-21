import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/projet.service";
import * as i2 from "@angular/common";
function CoachProjetsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 12)(11, "div", 13)(12, "span", 14);
    i0.ɵɵtext(13, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong", 15);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 16);
    i0.ɵɵelement(17, "div", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 18)(19, "button", 19);
    i0.ɵɵtext(20, "View details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 20);
    i0.ɵɵtext(22, "Session RDV");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r1.titre[0]);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(p_r1.statut === "en_cours" ? "kh-badge--teal" : p_r1.statut === "termine" ? "kh-badge--green" : "kh-badge--amber");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r1.statut);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r1.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r1.description);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", p_r1.progression, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", p_r1.progression, "%");
} }
export class CoachProjetsComponent {
    constructor(projetService) {
        this.projetService = projetService;
    }
    get projets() { return this.projetService.projets; }
    static { this.ɵfac = function CoachProjetsComponent_Factory(t) { return new (t || CoachProjetsComponent)(i0.ɵɵdirectiveInject(i1.ProjetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoachProjetsComponent, selectors: [["app-coach-projets"]], decls: 8, vars: 2, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "grid", "animate-2"], ["class", "card kh-card", 4, "ngFor", "ngForOf"], [1, "card", "kh-card"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "14px"], [1, "startup-icon"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta"], [2, "margin", "14px 0 8px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "kh-progress"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "display", "flex", "gap", "8px", "padding-top", "12px", "border-top", "1px solid var(--border)"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--violet)", "color", "white"]], template: function CoachProjetsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "My Supported Startups");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, CoachProjetsComponent_div_7_Template, 23, 9, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.projets.length, " project(s)");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.projets);
        } }, dependencies: [i2.NgForOf], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}.page-sub[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:4px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.card[_ngcontent-%COMP%]{padding:20px}.card-name[_ngcontent-%COMP%]{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px}.card-meta[_ngcontent-%COMP%]{font-size:12px;color:var(--text-secondary)}.startup-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7C5CBF,#5a3a9f);color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}.val-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.val-card[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;transition:opacity 0.2s}.val-card.done[_ngcontent-%COMP%]{opacity:0.7}.val-left[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:14px;flex:1;min-width:220px}.val-status-icon[_ngcontent-%COMP%]{font-size:22px;flex-shrink:0}.val-tache[_ngcontent-%COMP%]{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:14px;font-weight:700;margin-bottom:3px}.val-startup[_ngcontent-%COMP%]{font-size:12px;color:var(--violet);font-weight:600}.val-date[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);margin-top:2px}.val-doc[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 14px;background:var(--orange-light);border-radius:var(--radius-sm);font-size:12px;font-weight:600;color:var(--orange);flex-shrink:0}.val-actions[_ngcontent-%COMP%]{display:flex;gap:8px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoachProjetsComponent, [{
        type: Component,
        args: [{ selector: 'app-coach-projets', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\"><h1 class=\"kh-page-title\">My Supported Startups</h1><p class=\"page-sub\">{{ projets.length }} project(s)</p></div>\n  <div class=\"grid animate-2\">\n    <div *ngFor=\"let p of projets\" class=\"card kh-card\">\n      <div style=\"display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px\">\n        <div class=\"startup-icon\">{{ p.titre[0] }}</div>\n        <span class=\"kh-badge\" [class]=\"p.statut==='en_cours'?'kh-badge--teal':p.statut==='termine'?'kh-badge--green':'kh-badge--amber'\">{{ p.statut }}</span>\n      </div>\n      <p class=\"card-name\">{{ p.titre }}</p>\n      <p class=\"card-meta\">{{ p.description }}</p>\n      <div style=\"margin:14px 0 8px\">\n        <div style=\"display:flex;justify-content:space-between;margin-bottom:5px\"><span style=\"font-size:11px;color:var(--text-muted)\">Progression</span><strong style=\"font-size:12px\">{{ p.progression }}%</strong></div>\n        <div class=\"kh-progress\"><div class=\"kh-progress__fill kh-progress__fill--teal\" [style.width.%]=\"p.progression\"></div></div>\n      </div>\n      <div style=\"display:flex;gap:8px;padding-top:12px;border-top:1px solid var(--border)\">\n        <button class=\"kh-btn kh-btn--ghost kh-btn--sm\">View details</button>\n        <button class=\"kh-btn kh-btn--sm\" style=\"background:var(--violet);color:white\">Session RDV</button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page{display:flex;flex-direction:column;gap:24px}.page-header{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}.page-sub{color:var(--text-secondary);margin-top:4px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.card{padding:20px}.card-name{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px}.card-meta{font-size:12px;color:var(--text-secondary)}.startup-icon{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7C5CBF,#5a3a9f);color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}.val-list{display:flex;flex-direction:column;gap:12px}.val-card{padding:20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;transition:opacity 0.2s}.val-card.done{opacity:0.7}.val-left{display:flex;align-items:flex-start;gap:14px;flex:1;min-width:220px}.val-status-icon{font-size:22px;flex-shrink:0}.val-tache{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:14px;font-weight:700;margin-bottom:3px}.val-startup{font-size:12px;color:var(--violet);font-weight:600}.val-date{font-size:11px;color:var(--text-muted);margin-top:2px}.val-doc{display:flex;align-items:center;gap:8px;padding:8px 14px;background:var(--orange-light);border-radius:var(--radius-sm);font-size:12px;font-weight:600;color:var(--orange);flex-shrink:0}.val-actions{display:flex;gap:8px}\n"] }]
    }], () => [{ type: i1.ProjetService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoachProjetsComponent, { className: "CoachProjetsComponent", filePath: "app\\features\\coach\\projets\\projets.component.ts", lineNumber: 4 }); })();
//# sourceMappingURL=projets.component.js.map