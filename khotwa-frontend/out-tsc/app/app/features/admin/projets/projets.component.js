import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/projet.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function AdminProjetsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 18);
    i0.ɵɵelement(4, "path", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 21);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 22);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 23)(12, "div", 24);
    i0.ɵɵelement(13, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 26)(15, "span", 27);
    i0.ɵɵtext(16, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong", 28);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 29)(20, "span", 27);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 30)(23, "button", 31);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(24, "svg", 7);
    i0.ɵɵelement(25, "path", 32)(26, "circle", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "button", 34);
    i0.ɵɵlistener("click", function AdminProjetsComponent_div_24_Template_button_click_27_listener() { const p_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.delete(p_r2.id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(28, "svg", 7);
    i0.ɵɵelement(29, "polyline", 35)(30, "path", 36);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", p_r2.statut === "en_cours" ? "linear-gradient(135deg,#2ABFBF,#1a9999)" : p_r2.statut === "termine" ? "linear-gradient(135deg,#27AE7A,#1a8a5e)" : "linear-gradient(135deg,#F5A623,#d4881e)");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(p_r2.statut === "en_cours" ? "kh-badge--teal" : p_r2.statut === "termine" ? "kh-badge--green" : "kh-badge--amber");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r2.statut);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.description);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", p_r2.progression, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", p_r2.progression, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", p_r2.etapes.length, " step(s)");
} }
function AdminProjetsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtext(1, "No projects found");
    i0.ɵɵelementEnd();
} }
export class AdminProjetsComponent {
    constructor(projetService) {
        this.projetService = projetService;
        this.filtre = 'tous';
        this.search = '';
    }
    get filteredProjets() {
        let l = this.projetService.projets;
        if (this.filtre !== 'tous')
            l = l.filter(p => p.statut === this.filtre);
        if (this.search)
            l = l.filter(p => p.titre.toLowerCase().includes(this.search.toLowerCase()));
        return l;
    }
    delete(id) { this.projetService.delete(id); }
    static { this.ɵfac = function AdminProjetsComponent_Factory(t) { return new (t || AdminProjetsComponent)(i0.ɵɵdirectiveInject(i1.ProjetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminProjetsComponent, selectors: [["app-admin-projets"]], decls: 26, vars: 12, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026", 3, "ngModelChange", "ngModel"], [1, "tab", 3, "click"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "empty", "style", "grid-column:1/-1", 4, "ngIf"], [1, "card"], [1, "card-top"], [1, "card-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta"], [1, "card-progress"], [1, "kh-progress"], [1, "kh-progress__fill"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "card-footer"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], [1, "empty", 2, "grid-column", "1/-1"]], template: function AdminProjetsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Gestion des Projets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵtext(8, "+ New project");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(11, "svg", 7);
            i0.ɵɵelement(12, "circle", 8)(13, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminProjetsComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "button", 11);
            i0.ɵɵlistener("click", function AdminProjetsComponent_Template_button_click_15_listener() { return ctx.filtre = "tous"; });
            i0.ɵɵtext(16, "Tous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 11);
            i0.ɵɵlistener("click", function AdminProjetsComponent_Template_button_click_17_listener() { return ctx.filtre = "en_cours"; });
            i0.ɵɵtext(18, "En cours");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 11);
            i0.ɵɵlistener("click", function AdminProjetsComponent_Template_button_click_19_listener() { return ctx.filtre = "suspendu"; });
            i0.ɵɵtext(20, "Suspendu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 11);
            i0.ɵɵlistener("click", function AdminProjetsComponent_Template_button_click_21_listener() { return ctx.filtre = "termine"; });
            i0.ɵɵtext(22, "Completed");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 12);
            i0.ɵɵtemplate(24, AdminProjetsComponent_div_24_Template, 31, 11, "div", 13)(25, AdminProjetsComponent_div_25_Template, 2, 0, "div", 14);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.filteredProjets.length, " project(s)");
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.filtre === "tous");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "en_cours");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "suspendu");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "termine");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.filteredProjets);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.filteredProjets.length === 0);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.filters[_ngcontent-%COMP%] { display:flex;align-items:center;gap:8px;flex-wrap:wrap; }\n.search-box[_ngcontent-%COMP%] { display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);padding:7px 12px;font-family:inherit; }\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border:none;outline:none;font-size:13px;font-family:inherit;min-width:180px; }\n.tab[_ngcontent-%COMP%] { padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);transition:all 0.15s; }\n.tab.active[_ngcontent-%COMP%] { background:var(--orange);color:white; }\n.grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px; }\n.card[_ngcontent-%COMP%] { padding:22px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card[_ngcontent-%COMP%]:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.card-top[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px; }\n.card-icon[_ngcontent-%COMP%] { width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center; }\n.card-name[_ngcontent-%COMP%] { font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px; }\n.card-meta[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary); }\n.card-progress[_ngcontent-%COMP%] { margin:14px 0 8px; }\n.card-footer[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid var(--border); }\n.actions[_ngcontent-%COMP%] { display:flex;gap:6px; }\n.empty[_ngcontent-%COMP%] { text-align:center;padding:60px 20px;color:var(--text-muted); }\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { margin:0 auto 12px;display:block;opacity:0.3; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminProjetsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-projets', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Gestion des Projets</h1><p class=\"page-sub\">{{ filteredProjets.length }} project(s)</p></div>\n    <button class=\"kh-btn kh-btn--primary\">+ New project</button>\n  </div>\n  <div class=\"filters animate-2\">\n    <div class=\"search-box\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.35-4.35\"/></svg>\n      <input type=\"text\" placeholder=\"Search\u2026\" [(ngModel)]=\"search\" />\n    </div>\n    <button class=\"tab\" [class.active]=\"filtre==='tous'\" (click)=\"filtre='tous'\">Tous</button>\n    <button class=\"tab\" [class.active]=\"filtre==='en_cours'\" (click)=\"filtre='en_cours'\">En cours</button>\n    <button class=\"tab\" [class.active]=\"filtre==='suspendu'\" (click)=\"filtre='suspendu'\">Suspendu</button>\n    <button class=\"tab\" [class.active]=\"filtre==='termine'\" (click)=\"filtre='termine'\">Completed</button>\n  </div>\n  <div class=\"grid animate-3\">\n    <div *ngFor=\"let p of filteredProjets\" class=\"card\">\n      <div class=\"card-top\">\n        <div class=\"card-icon\" [style.background]=\"p.statut==='en_cours'?'linear-gradient(135deg,#2ABFBF,#1a9999)':p.statut==='termine'?'linear-gradient(135deg,#27AE7A,#1a8a5e)':'linear-gradient(135deg,#F5A623,#d4881e)'\">\n          <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/></svg>\n        </div>\n        <span class=\"kh-badge\" [class]=\"p.statut==='en_cours'?'kh-badge--teal':p.statut==='termine'?'kh-badge--green':'kh-badge--amber'\">{{ p.statut }}</span>\n      </div>\n      <p class=\"card-name\">{{ p.titre }}</p>\n      <p class=\"card-meta\">{{ p.description }}</p>\n      <div class=\"card-progress\">\n        <div class=\"kh-progress\"><div class=\"kh-progress__fill\" [style.width.%]=\"p.progression\"></div></div>\n        <div style=\"display:flex;justify-content:space-between;margin-top:5px\"><span style=\"font-size:11px;color:var(--text-muted)\">Progression</span><strong style=\"font-size:12px\">{{ p.progression }}%</strong></div>\n      </div>\n      <div class=\"card-footer\">\n        <span style=\"font-size:11px;color:var(--text-muted)\">{{ p.etapes.length }} step(s)</span>\n        <div class=\"actions\">\n          <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg></button>\n          <button class=\"kh-btn kh-btn--danger kh-btn--sm kh-btn--icon\" (click)=\"delete(p.id)\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14H6L5 6\"/></svg></button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"filteredProjets.length===0\" class=\"empty\" style=\"grid-column:1/-1\">No projects found</div>\n  </div>\n</div>\n", styles: ["\n.page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.filters { display:flex;align-items:center;gap:8px;flex-wrap:wrap; }\n.search-box { display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);padding:7px 12px;font-family:inherit; }\n.search-box input { border:none;outline:none;font-size:13px;font-family:inherit;min-width:180px; }\n.tab { padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);transition:all 0.15s; }\n.tab.active { background:var(--orange);color:white; }\n.grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px; }\n.card { padding:22px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.card-top { display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px; }\n.card-icon { width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center; }\n.card-name { font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px; }\n.card-meta { font-size:12px;color:var(--text-secondary); }\n.card-progress { margin:14px 0 8px; }\n.card-footer { display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid var(--border); }\n.actions { display:flex;gap:6px; }\n.empty { text-align:center;padding:60px 20px;color:var(--text-muted); }\n.empty svg { margin:0 auto 12px;display:block;opacity:0.3; }\n\n"] }]
    }], () => [{ type: i1.ProjetService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminProjetsComponent, { className: "AdminProjetsComponent", filePath: "app\\features\\admin\\projets\\projets.component.ts", lineNumber: 5 }); })();
//# sourceMappingURL=projets.component.js.map