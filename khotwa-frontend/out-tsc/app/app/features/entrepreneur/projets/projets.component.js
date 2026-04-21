import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/projet.service";
import * as i2 from "@angular/common";
function EntrepreneurProjetsComponent_div_19_ng_container_11_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 33);
} }
function EntrepreneurProjetsComponent_div_19_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelement(2, "div", 30);
    i0.ɵɵelementStart(3, "span", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, EntrepreneurProjetsComponent_div_19_ng_container_11_ng_container_2_div_5_Template, 1, 0, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("done", e_r1.ordre < 2)("active", e_r1.ordre === 2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r1.titre);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r2);
} }
function EntrepreneurProjetsComponent_div_19_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27);
    i0.ɵɵtemplate(2, EntrepreneurProjetsComponent_div_19_ng_container_11_ng_container_2_Template, 6, 6, "ng-container", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const p_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", p_r3.etapes);
} }
function EntrepreneurProjetsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementStart(2, "div", 11)(3, "div", 12)(4, "div")(5, "h3", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, EntrepreneurProjetsComponent_div_19_ng_container_11_Template, 3, 1, "ng-container", 16);
    i0.ɵɵelementStart(12, "div", 17)(13, "div", 18)(14, "div", 19)(15, "span", 20);
    i0.ɵɵtext(16, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong", 21);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 22);
    i0.ɵɵelement(20, "div", 23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 24)(22, "button", 25);
    i0.ɵɵtext(23, "View details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 26);
    i0.ɵɵtext(25, "Manage");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", p_r3.statut === "en_cours" ? "linear-gradient(180deg,#2ABFBF,#1a9999)" : p_r3.statut === "termine" ? "linear-gradient(180deg,#27AE7A,#1a8a5e)" : "linear-gradient(180deg,#F5A623,#d4881e)");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(p_r3.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r3.description);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(p_r3.statut === "en_cours" ? "kh-badge--teal" : p_r3.statut === "termine" ? "kh-badge--green" : "kh-badge--amber");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r3.statut);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r3.etapes.length > 0);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", p_r3.progression, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", p_r3.progression, "%");
} }
export class EntrepreneurProjetsComponent {
    constructor(projetService) {
        this.projetService = projetService;
        this.filtre = 'tous';
    }
    get filteredProjets() {
        const l = this.projetService.projets;
        return this.filtre === 'tous' ? l : l.filter(p => p.statut === this.filtre);
    }
    static { this.ɵfac = function EntrepreneurProjetsComponent_Factory(t) { return new (t || EntrepreneurProjetsComponent)(i0.ɵɵdirectiveInject(i1.ProjetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntrepreneurProjetsComponent, selectors: [["app-entrepreneur-projets"]], decls: 20, vars: 10, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "tab", 3, "click"], [1, "proj-list", "animate-3"], ["class", "proj-card kh-card", 4, "ngFor", "ngForOf"], [1, "proj-card", "kh-card"], [1, "proj-accent"], [1, "proj-content"], [1, "proj-header"], [1, "proj-name"], [1, "proj-desc"], [1, "kh-badge"], [4, "ngIf"], [1, "proj-footer"], [1, "prog-section"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px", "color", "var(--orange)"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "proj-actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "etapes-timeline"], [4, "ngFor", "ngForOf"], [1, "etape"], [1, "etape-dot"], [1, "etape-label"], ["class", "etape-connector", 4, "ngIf"], [1, "etape-connector"]], template: function EntrepreneurProjetsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "My Projects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵtext(8, "+ Create a project");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "button", 6);
            i0.ɵɵlistener("click", function EntrepreneurProjetsComponent_Template_button_click_10_listener() { return ctx.filtre = "tous"; });
            i0.ɵɵtext(11, "Tous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵlistener("click", function EntrepreneurProjetsComponent_Template_button_click_12_listener() { return ctx.filtre = "en_cours"; });
            i0.ɵɵtext(13, "En cours");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 6);
            i0.ɵɵlistener("click", function EntrepreneurProjetsComponent_Template_button_click_14_listener() { return ctx.filtre = "suspendu"; });
            i0.ɵɵtext(15, "Suspendu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 6);
            i0.ɵɵlistener("click", function EntrepreneurProjetsComponent_Template_button_click_16_listener() { return ctx.filtre = "termine"; });
            i0.ɵɵtext(17, "Completed");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 7);
            i0.ɵɵtemplate(19, EntrepreneurProjetsComponent_div_19_Template, 26, 11, "div", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.filteredProjets.length, " project(s) \u2014 parcours de labellisation");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.filtre === "tous");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "en_cours");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "suspendu");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "termine");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.filteredProjets);
        } }, dependencies: [i2.NgForOf, i2.NgIf], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.filters[_ngcontent-%COMP%] { display:flex;gap:8px;flex-wrap:wrap; }\n.tab[_ngcontent-%COMP%] { padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:none;cursor:pointer;background:white;color:var(--text-secondary);border:1px solid var(--border);transition:all 0.15s; }\n.tab.active[_ngcontent-%COMP%] { background:var(--teal);color:white;border-color:var(--teal); }\n.proj-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:14px; }\n.proj-card[_ngcontent-%COMP%] { display:flex;overflow:hidden; }\n.proj-accent[_ngcontent-%COMP%] { width:5px;flex-shrink:0; }\n.proj-content[_ngcontent-%COMP%] { flex:1;padding:20px 22px; }\n.proj-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px; }\n.proj-name[_ngcontent-%COMP%] { font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;margin-bottom:3px; }\n.proj-desc[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary); }\n.etapes-timeline[_ngcontent-%COMP%] { display:flex;align-items:center;gap:0;margin:14px 0;overflow-x:auto;padding-bottom:4px; }\n.etape[_ngcontent-%COMP%] { display:flex;align-items:center;gap:6px;flex-shrink:0; }\n.etape[_ngcontent-%COMP%]:not(:last-child)::after { content:'';flex:1;height:1px;background:var(--border);min-width:24px;display:block;margin:0 6px; }\n.etape-dot[_ngcontent-%COMP%] { width:10px;height:10px;border-radius:50%;background:var(--border);border:2px solid var(--border);flex-shrink:0; }\n.etape.done[_ngcontent-%COMP%]   .etape-dot[_ngcontent-%COMP%] { background:var(--teal);border-color:var(--teal); }\n.etape.active[_ngcontent-%COMP%]   .etape-dot[_ngcontent-%COMP%] { background:white;border-color:var(--orange);box-shadow:0 0 0 3px rgba(232,98,42,0.2); }\n.etape-label[_ngcontent-%COMP%] { font-size:11px;font-weight:600;color:var(--text-muted);white-space:nowrap; }\n.etape.done[_ngcontent-%COMP%]   .etape-label[_ngcontent-%COMP%] { color:var(--teal); }\n.etape.active[_ngcontent-%COMP%]   .etape-label[_ngcontent-%COMP%] { color:var(--orange); }\n.proj-footer[_ngcontent-%COMP%] { display:flex;align-items:center;gap:24px;flex-wrap:wrap; }\n.prog-section[_ngcontent-%COMP%] { flex:1;min-width:200px; }\n.proj-actions[_ngcontent-%COMP%] { display:flex;gap:8px; }\n.etape-connector[_ngcontent-%COMP%]{flex:1;height:1px;background:var(--border);min-width:20px;margin:0 4px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntrepreneurProjetsComponent, [{
        type: Component,
        args: [{ selector: 'app-entrepreneur-projets', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">My Projects</h1><p class=\"page-sub\">{{ filteredProjets.length }} project(s) \u2014 parcours de labellisation</p></div>\n    <button class=\"kh-btn kh-btn--primary\">+ Create a project</button>\n  </div>\n  <div class=\"filters animate-2\">\n    <button class=\"tab\" [class.active]=\"filtre==='tous'\" (click)=\"filtre='tous'\">Tous</button>\n    <button class=\"tab\" [class.active]=\"filtre==='en_cours'\" (click)=\"filtre='en_cours'\">En cours</button>\n    <button class=\"tab\" [class.active]=\"filtre==='suspendu'\" (click)=\"filtre='suspendu'\">Suspendu</button>\n    <button class=\"tab\" [class.active]=\"filtre==='termine'\" (click)=\"filtre='termine'\">Completed</button>\n  </div>\n  <div class=\"proj-list animate-3\">\n    <div *ngFor=\"let p of filteredProjets\" class=\"proj-card kh-card\">\n      <div class=\"proj-accent\" [style.background]=\"p.statut==='en_cours'?'linear-gradient(180deg,#2ABFBF,#1a9999)':p.statut==='termine'?'linear-gradient(180deg,#27AE7A,#1a8a5e)':'linear-gradient(180deg,#F5A623,#d4881e)'\"></div>\n      <div class=\"proj-content\">\n        <div class=\"proj-header\">\n          <div><h3 class=\"proj-name\">{{ p.titre }}</h3><p class=\"proj-desc\">{{ p.description }}</p></div>\n          <span class=\"kh-badge\" [class]=\"p.statut==='en_cours'?'kh-badge--teal':p.statut==='termine'?'kh-badge--green':'kh-badge--amber'\">{{ p.statut }}</span>\n        </div>\n        <ng-container *ngIf=\"p.etapes.length > 0\">\n          <div class=\"etapes-timeline\">\n            <ng-container *ngFor=\"let e of p.etapes; let last=last\">\n              <div class=\"etape\" [class.done]=\"e.ordre < 2\" [class.active]=\"e.ordre === 2\">\n                <div class=\"etape-dot\"></div>\n                <span class=\"etape-label\">{{ e.titre }}</span>\n              </div>\n              <div *ngIf=\"!last\" class=\"etape-connector\"></div>\n            </ng-container>\n          </div>\n        </ng-container>\n        <div class=\"proj-footer\">\n          <div class=\"prog-section\">\n            <div style=\"display:flex;justify-content:space-between;margin-bottom:5px\"><span style=\"font-size:11px;color:var(--text-muted)\">Progression</span><strong style=\"font-size:12px;color:var(--orange)\">{{ p.progression }}%</strong></div>\n            <div class=\"kh-progress\"><div class=\"kh-progress__fill\" [style.width.%]=\"p.progression\"></div></div>\n          </div>\n          <div class=\"proj-actions\">\n            <button class=\"kh-btn kh-btn--ghost kh-btn--sm\">View details</button>\n            <button class=\"kh-btn kh-btn--primary kh-btn--sm\">Manage</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.filters { display:flex;gap:8px;flex-wrap:wrap; }\n.tab { padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:none;cursor:pointer;background:white;color:var(--text-secondary);border:1px solid var(--border);transition:all 0.15s; }\n.tab.active { background:var(--teal);color:white;border-color:var(--teal); }\n.proj-list { display:flex;flex-direction:column;gap:14px; }\n.proj-card { display:flex;overflow:hidden; }\n.proj-accent { width:5px;flex-shrink:0; }\n.proj-content { flex:1;padding:20px 22px; }\n.proj-header { display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px; }\n.proj-name { font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;font-weight:800;margin-bottom:3px; }\n.proj-desc { font-size:12px;color:var(--text-secondary); }\n.etapes-timeline { display:flex;align-items:center;gap:0;margin:14px 0;overflow-x:auto;padding-bottom:4px; }\n.etape { display:flex;align-items:center;gap:6px;flex-shrink:0; }\n.etape:not(:last-child)::after { content:'';flex:1;height:1px;background:var(--border);min-width:24px;display:block;margin:0 6px; }\n.etape-dot { width:10px;height:10px;border-radius:50%;background:var(--border);border:2px solid var(--border);flex-shrink:0; }\n.etape.done .etape-dot { background:var(--teal);border-color:var(--teal); }\n.etape.active .etape-dot { background:white;border-color:var(--orange);box-shadow:0 0 0 3px rgba(232,98,42,0.2); }\n.etape-label { font-size:11px;font-weight:600;color:var(--text-muted);white-space:nowrap; }\n.etape.done .etape-label { color:var(--teal); }\n.etape.active .etape-label { color:var(--orange); }\n.proj-footer { display:flex;align-items:center;gap:24px;flex-wrap:wrap; }\n.prog-section { flex:1;min-width:200px; }\n.proj-actions { display:flex;gap:8px; }\n.etape-connector{flex:1;height:1px;background:var(--border);min-width:20px;margin:0 4px}\n"] }]
    }], () => [{ type: i1.ProjetService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EntrepreneurProjetsComponent, { className: "EntrepreneurProjetsComponent", filePath: "app\\features\\entrepreneur\\projets\\projets.component.ts", lineNumber: 4 }); })();
//# sourceMappingURL=projets.component.js.map