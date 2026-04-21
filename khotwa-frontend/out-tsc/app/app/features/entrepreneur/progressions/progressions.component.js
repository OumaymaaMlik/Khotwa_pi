import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/ressource.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function EntrepreneurProgressionsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "span", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5, "Completion rate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, ctx_r0.complets.length / ctx_r0.progressions.length * 100, "1.0-0"), "% ");
} }
function EntrepreneurProgressionsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1, "Loading\u2026");
    i0.ɵɵelementEnd();
} }
function EntrepreneurProgressionsComponent_div_30_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 29)(5, "p", 30);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 31);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 32)(11, "div", 33)(12, "div", 34);
    i0.ɵɵelement(13, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 36);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "button", 37);
    i0.ɵɵlistener("click", function EntrepreneurProgressionsComponent_div_30_div_5_Template_button_click_16_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.marquerTermine(p_r3)); });
    i0.ɵɵtext(17, "Mark done");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.typeIcons[p_r3.ressource == null ? null : p_r3.ressource.type] || "\uD83D\uDCDA" || "\uD83D\uDCC1");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r3.ressource == null ? null : p_r3.ressource.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Last accessed: ", i0.ɵɵpipeBind2(9, 6, p_r3.dernierAcces, "d MMM y"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("width", p_r3.pourcentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r3.pourcentage, "%");
} }
function EntrepreneurProgressionsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "h3", 22);
    i0.ɵɵelement(2, "span", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 24);
    i0.ɵɵtemplate(5, EntrepreneurProgressionsComponent_div_30_div_5_Template, 18, 9, "div", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" In progress (", ctx_r0.enCours.length, ") ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.enCours);
} }
function EntrepreneurProgressionsComponent_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 27)(2, "span", 28);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 29)(5, "p", 30);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 31);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 32)(11, "span", 42);
    i0.ɵɵtext(12, "\u2713 Completed");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.typeIcons[p_r4.ressource == null ? null : p_r4.ressource.type] || "\uD83D\uDCDA" || "\uD83D\uDCC1");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r4.ressource == null ? null : p_r4.ressource.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Completed: ", i0.ɵɵpipeBind2(9, 3, p_r4.dateCompletion, "d MMM y"), "");
} }
function EntrepreneurProgressionsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "h3", 22);
    i0.ɵɵelement(2, "span", 39);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 24);
    i0.ɵɵtemplate(5, EntrepreneurProgressionsComponent_div_31_div_5_Template, 13, 6, "div", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Completed (", ctx_r0.complets.length, ") ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.complets);
} }
function EntrepreneurProgressionsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "p");
    i0.ɵɵtext(2, "\uD83D\uDCDA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No resources started yet.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 4);
    i0.ɵɵlistener("click", function EntrepreneurProgressionsComponent_div_32_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openBibliotheque()); });
    i0.ɵɵtext(6, "Browse the Library \u2192");
    i0.ɵɵelementEnd()();
} }
export class EntrepreneurProgressionsComponent {
    constructor(svc, router) {
        this.svc = svc;
        this.router = router;
        this.progressions = [];
        this.loading = false;
        this.userId = 2;
        this.userRole = 'ENTREPRENEUR';
        this.typeIcons = {
            PDF: '📄', VIDEO: '🎥', EXCEL: '📊', WORD: '📝', IMAGE: '🖼️', LINK: '🔗'
        };
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.svc.getMesProgressionsHttp(this.userId).subscribe({
            next: res => {
                this.progressions = (res.data ?? []).sort((a, b) => {
                    // Tri : en cours en premier, complétés en dernier
                    const order = { IN_PROGRESS: 0, NOT_STARTED: 1, COMPLETED: 2 };
                    return (order[a.statut] ?? 1) - (order[b.statut] ?? 1);
                });
                this.loading = false;
            },
            error: () => this.loading = false
        });
    }
    get enCours() { return this.progressions.filter(p => p.statut === 'IN_PROGRESS'); }
    get complets() { return this.progressions.filter(p => p.statut === 'COMPLETED'); }
    get nonDemarre() { return this.progressions.filter(p => p.statut === 'NOT_STARTED'); }
    getProgressColor(s) {
        return s === 'COMPLETED' ? 'var(--green)' : s === 'IN_PROGRESS' ? 'var(--teal)' : 'var(--text-muted)';
    }
    openBibliotheque() { this.router.navigateByUrl('/entrepreneur/bibliotheque'); }
    marquerTermine(p) {
        this.svc.marquerTermineHttp(this.userId, p.ressource.id).subscribe({
            next: () => this.load()
        });
    }
    static { this.ɵfac = function EntrepreneurProgressionsComponent_Factory(t) { return new (t || EntrepreneurProgressionsComponent)(i0.ɵɵdirectiveInject(i1.RessourceService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntrepreneurProgressionsComponent, selectors: [["app-entrepreneur-progressions"]], decls: 33, vars: 9, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [1, "prog-kpis", "animate-2"], [1, "prog-kpi"], [1, "prog-kpi__val", 2, "color", "var(--teal)"], [1, "prog-kpi__label"], [1, "prog-kpi__val", 2, "color", "var(--green)"], [1, "prog-kpi__val"], ["class", "prog-kpi", 4, "ngIf"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["class", "animate-3", 4, "ngIf"], ["class", "animate-3", "style", "margin-top:24px", 4, "ngIf"], ["class", "empty-prog", 4, "ngIf"], [1, "prog-kpi__val", 2, "color", "var(--orange)"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "animate-3"], [1, "section-title"], [1, "section-dot", 2, "background", "var(--teal)"], [1, "prog-list"], ["class", "prog-card kh-card", 4, "ngFor", "ngForOf"], [1, "prog-card", "kh-card"], [1, "prog-card__left"], [1, "prog-card__icon"], [1, "prog-card__info"], [1, "prog-card__titre"], [1, "prog-card__meta"], [1, "prog-card__right"], [1, "prog-bar-wrap"], [1, "kh-progress", 2, "width", "120px", "height", "8px"], [1, "kh-progress__fill", 2, "background", "var(--teal)"], [1, "prog-pct-label"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "animate-3", 2, "margin-top", "24px"], [1, "section-dot", 2, "background", "var(--green)"], ["class", "prog-card kh-card prog-card--done", 4, "ngFor", "ngForOf"], [1, "prog-card", "kh-card", "prog-card--done"], [1, "done-badge"], [1, "empty-prog"]], template: function EntrepreneurProgressionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "My Progression");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function EntrepreneurProgressionsComponent_Template_button_click_7_listener() { return ctx.openBibliotheque(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 5);
            i0.ɵɵelement(9, "path", 6)(10, "path", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Go to Library ");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 11);
            i0.ɵɵtext(17, "In progress");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 9)(19, "span", 12);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span", 11);
            i0.ɵɵtext(22, "Completed");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 9)(24, "span", 13);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "span", 11);
            i0.ɵɵtext(27, "Total started");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(28, EntrepreneurProgressionsComponent_div_28_Template, 6, 4, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, EntrepreneurProgressionsComponent_div_29_Template, 2, 0, "div", 15)(30, EntrepreneurProgressionsComponent_div_30_Template, 6, 2, "div", 16)(31, EntrepreneurProgressionsComponent_div_31_Template, 6, 2, "div", 17)(32, EntrepreneurProgressionsComponent_div_32_Template, 7, 0, "div", 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.progressions.length, " resource(s) started");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.enCours.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.complets.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.progressions.length);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.progressions.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enCours.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.complets.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.progressions.length === 0);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.DecimalPipe, i3.DatePipe], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}\n.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.prog-kpis[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}\n.prog-kpi[_ngcontent-%COMP%]{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 20px;display:flex;flex-direction:column;gap:4px;min-width:100px}\n.prog-kpi__val[_ngcontent-%COMP%]{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;line-height:1}\n.prog-kpi__label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em}\n.section-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px}\n.section-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;flex-shrink:0}\n.prog-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}\n.prog-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 20px;flex-wrap:wrap}\n.prog-card--done[_ngcontent-%COMP%]{opacity:0.75}\n.prog-card__left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex:1;min-width:0}\n.prog-card__icon[_ngcontent-%COMP%]{font-size:24px;flex-shrink:0}\n.prog-card__info[_ngcontent-%COMP%]{flex:1;min-width:0}\n.prog-card__titre[_ngcontent-%COMP%]{font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.prog-card__meta[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);margin-top:2px}\n.prog-card__right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-shrink:0}\n.prog-bar-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}\n.prog-pct-label[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--teal);min-width:32px}\n.done-badge[_ngcontent-%COMP%]{padding:4px 12px;background:#EAF3DE;color:#27500A;border-radius:20px;font-size:12px;font-weight:700}\n.empty-prog[_ngcontent-%COMP%]{text-align:center;padding:60px;display:flex;flex-direction:column;align-items:center;gap:12px;color:var(--text-muted)}\n.empty-prog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-size:48px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntrepreneurProgressionsComponent, [{
        type: Component,
        args: [{ selector: 'app-entrepreneur-progressions', template: "<div class=\"page animate-1\">\n\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"kh-page-title\">My Progression</h1>\n      <p class=\"page-sub\">{{ progressions.length }} resource(s) started</p>\n    </div>\n    <button class=\"kh-btn kh-btn--primary\" (click)=\"openBibliotheque()\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>\n      Go to Library\n    </button>\n  </div>\n\n  <!-- KPI -->\n  <div class=\"prog-kpis animate-2\">\n    <div class=\"prog-kpi\">\n      <span class=\"prog-kpi__val\" style=\"color:var(--teal)\">{{ enCours.length }}</span>\n      <span class=\"prog-kpi__label\">In progress</span>\n    </div>\n    <div class=\"prog-kpi\">\n      <span class=\"prog-kpi__val\" style=\"color:var(--green)\">{{ complets.length }}</span>\n      <span class=\"prog-kpi__label\">Completed</span>\n    </div>\n    <div class=\"prog-kpi\">\n      <span class=\"prog-kpi__val\">{{ progressions.length }}</span>\n      <span class=\"prog-kpi__label\">Total started</span>\n    </div>\n    <div class=\"prog-kpi\" *ngIf=\"progressions.length > 0\">\n      <span class=\"prog-kpi__val\" style=\"color:var(--orange)\">\n        {{ (complets.length / progressions.length * 100) | number:'1.0-0' }}%\n      </span>\n      <span class=\"prog-kpi__label\">Completion rate</span>\n    </div>\n  </div>\n\n  <div *ngIf=\"loading\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">Loading\u2026</div>\n\n  <!-- En cours -->\n  <div *ngIf=\"enCours.length > 0\" class=\"animate-3\">\n    <h3 class=\"section-title\">\n      <span class=\"section-dot\" style=\"background:var(--teal)\"></span>\n      In progress ({{ enCours.length }})\n    </h3>\n    <div class=\"prog-list\">\n      <div *ngFor=\"let p of enCours\" class=\"prog-card kh-card\">\n        <div class=\"prog-card__left\">\n          <span class=\"prog-card__icon\">{{ typeIcons[p.ressource?.type] || '\uD83D\uDCDA' || '\uD83D\uDCC1' }}</span>\n          <div class=\"prog-card__info\">\n            <p class=\"prog-card__titre\">{{ p.ressource?.titre }}</p>\n            <p class=\"prog-card__meta\">Last accessed: {{ p.dernierAcces | date:'d MMM y' }}</p>\n          </div>\n        </div>\n        <div class=\"prog-card__right\">\n          <div class=\"prog-bar-wrap\">\n            <div class=\"kh-progress\" style=\"width:120px;height:8px\">\n              <div class=\"kh-progress__fill\" style=\"background:var(--teal)\" [style.width.%]=\"p.pourcentage\"></div>\n            </div>\n            <span class=\"prog-pct-label\">{{ p.pourcentage }}%</span>\n          </div>\n          <button class=\"kh-btn kh-btn--ghost kh-btn--sm\" (click)=\"marquerTermine(p)\">Mark done</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Compl\u00E9t\u00E9s -->\n  <div *ngIf=\"complets.length > 0\" class=\"animate-3\" style=\"margin-top:24px\">\n    <h3 class=\"section-title\">\n      <span class=\"section-dot\" style=\"background:var(--green)\"></span>\n      Completed ({{ complets.length }})\n    </h3>\n    <div class=\"prog-list\">\n      <div *ngFor=\"let p of complets\" class=\"prog-card kh-card prog-card--done\">\n        <div class=\"prog-card__left\">\n          <span class=\"prog-card__icon\">{{ typeIcons[p.ressource?.type] || '\uD83D\uDCDA' || '\uD83D\uDCC1' }}</span>\n          <div class=\"prog-card__info\">\n            <p class=\"prog-card__titre\">{{ p.ressource?.titre }}</p>\n            <p class=\"prog-card__meta\">Completed: {{ p.dateCompletion | date:'d MMM y' }}</p>\n          </div>\n        </div>\n        <div class=\"prog-card__right\">\n          <span class=\"done-badge\">\u2713 Completed</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Vide -->\n  <div *ngIf=\"!loading && progressions.length === 0\" class=\"empty-prog\">\n    <p>\uD83D\uDCDA</p>\n    <p>No resources started yet.</p>\n    <button class=\"kh-btn kh-btn--primary\" (click)=\"openBibliotheque()\">Browse the Library \u2192</button>\n  </div>\n\n</div>\n", styles: [".page{display:flex;flex-direction:column;gap:24px}\n.page-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.prog-kpis{display:flex;gap:12px;flex-wrap:wrap}\n.prog-kpi{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 20px;display:flex;flex-direction:column;gap:4px;min-width:100px}\n.prog-kpi__val{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;line-height:1}\n.prog-kpi__label{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em}\n.section-title{display:flex;align-items:center;gap:8px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;margin-bottom:12px}\n.section-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}\n.prog-list{display:flex;flex-direction:column;gap:8px}\n.prog-card{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 20px;flex-wrap:wrap}\n.prog-card--done{opacity:0.75}\n.prog-card__left{display:flex;align-items:center;gap:12px;flex:1;min-width:0}\n.prog-card__icon{font-size:24px;flex-shrink:0}\n.prog-card__info{flex:1;min-width:0}\n.prog-card__titre{font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.prog-card__meta{font-size:11px;color:var(--text-muted);margin-top:2px}\n.prog-card__right{display:flex;align-items:center;gap:12px;flex-shrink:0}\n.prog-bar-wrap{display:flex;align-items:center;gap:8px}\n.prog-pct-label{font-size:12px;font-weight:700;color:var(--teal);min-width:32px}\n.done-badge{padding:4px 12px;background:#EAF3DE;color:#27500A;border-radius:20px;font-size:12px;font-weight:700}\n.empty-prog{text-align:center;padding:60px;display:flex;flex-direction:column;align-items:center;gap:12px;color:var(--text-muted)}\n.empty-prog p:first-child{font-size:48px}\n"] }]
    }], () => [{ type: i1.RessourceService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EntrepreneurProgressionsComponent, { className: "EntrepreneurProgressionsComponent", filePath: "app\\features\\entrepreneur\\progressions\\progressions.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=progressions.component.js.map