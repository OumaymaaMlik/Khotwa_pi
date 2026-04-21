import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AdminEvenementsComponent_div_21_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ev_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", (ev_r1.places - ev_r1.restantes) / ev_r1.places * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ev_r1.places - ev_r1.restantes, "/", ev_r1.places, " inscrits");
} }
function AdminEvenementsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 12);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 13);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 14);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, AdminEvenementsComponent_div_21_ng_container_12_Template, 5, 4, "ng-container", 15);
    i0.ɵɵelementStart(13, "div", 16)(14, "div", 17)(15, "button", 18);
    i0.ɵɵtext(16, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 19);
    i0.ɵɵtext(18, "Cancel");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ev_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ev_r1.type === "pitch" ? "kh-badge--orange" : ev_r1.type === "webinar" ? "kh-badge--teal" : ev_r1.type === "formation" ? "kh-badge--violet" : "kh-badge--green");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ev_r1.type);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ev_r1.restantes === 0 ? "kh-badge--red" : ev_r1.restantes < 5 ? "kh-badge--amber" : "kh-badge--gray");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ev_r1.restantes === 0 ? "Complet" : ev_r1.restantes + " places");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ev_r1.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("\uD83D\uDCC5 ", ev_r1.date, " \u00B7 ", ev_r1.heure, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83C\uDFA4 ", ev_r1.intervenant, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ev_r1.restantes > 0);
} }
export class AdminEvenementsComponent {
    constructor() {
        this.filtre = 'tous';
        this.events = [
            { id: 'ev1', titre: 'Atelier Pitch Day', type: 'pitch', date: '2024-12-10', heure: '14h00', intervenant: 'Dr. Ben Salem', places: 30, restantes: 8 },
            { id: 'ev2', titre: 'Webinar BMC', type: 'webinar', date: '2024-12-15', heure: '10h00', intervenant: 'Sara Coach', places: 50, restantes: 0 },
            { id: 'ev3', titre: 'Training Design Thinking', type: 'formation', date: '2024-12-20', heure: '09h00', intervenant: 'Ahmed Mansouri', places: 20, restantes: 5 },
            { id: 'ev4', titre: 'Group Coaching Session', type: 'coaching', date: '2025-01-08', heure: '15h00', intervenant: 'KHOTWA Team', places: 15, restantes: 12 },
        ];
    }
    get filteredEvents() { return this.filtre === 'tous' ? this.events : this.events.filter(e => e.type === this.filtre); }
    static { this.ɵfac = function AdminEvenementsComponent_Factory(t) { return new (t || AdminEvenementsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminEvenementsComponent, selectors: [["app-admin-evenements"]], decls: 22, vars: 12, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "tab", 3, "click"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "14px"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta", 2, "margin-top", "6px"], [1, "card-meta"], [4, "ngIf"], [1, "card-footer"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"], [1, "kh-progress", 2, "margin", "14px 0 4px"], [1, "kh-progress__fill"], [2, "font-size", "11px", "color", "var(--text-muted)"]], template: function AdminEvenementsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Events & Workshops");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵtext(8, "+ Create event");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "button", 6);
            i0.ɵɵlistener("click", function AdminEvenementsComponent_Template_button_click_10_listener() { return ctx.filtre = "tous"; });
            i0.ɵɵtext(11, "Tous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵlistener("click", function AdminEvenementsComponent_Template_button_click_12_listener() { return ctx.filtre = "pitch"; });
            i0.ɵɵtext(13, "Pitch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 6);
            i0.ɵɵlistener("click", function AdminEvenementsComponent_Template_button_click_14_listener() { return ctx.filtre = "webinar"; });
            i0.ɵɵtext(15, "Webinar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 6);
            i0.ɵɵlistener("click", function AdminEvenementsComponent_Template_button_click_16_listener() { return ctx.filtre = "formation"; });
            i0.ɵɵtext(17, "Formation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 6);
            i0.ɵɵlistener("click", function AdminEvenementsComponent_Template_button_click_18_listener() { return ctx.filtre = "coaching"; });
            i0.ɵɵtext(19, "Coaching");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 7);
            i0.ɵɵtemplate(21, AdminEvenementsComponent_div_21_Template, 19, 11, "div", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.filteredEvents.length, " event(s)");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.filtre === "tous");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "pitch");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "webinar");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "formation");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "coaching");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.filteredEvents);
        } }, dependencies: [i1.NgForOf, i1.NgIf], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}.page-sub[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:4px}.filters[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.tab[_ngcontent-%COMP%]{padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}.tab.active[_ngcontent-%COMP%]{background:var(--orange);color:white;border-color:var(--orange)}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.card[_ngcontent-%COMP%]{padding:22px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card)}.card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-hover);transform:translateY(-2px)}.card-name[_ngcontent-%COMP%]{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px}.card-meta[_ngcontent-%COMP%]{font-size:12px;color:var(--text-secondary)}.card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;margin-top:14px;padding-top:12px;border-top:1px solid var(--border)}.actions[_ngcontent-%COMP%]{display:flex;gap:6px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminEvenementsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-evenements', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Events & Workshops</h1><p class=\"page-sub\">{{ filteredEvents.length }} event(s)</p></div>\n    <button class=\"kh-btn kh-btn--primary\">+ Create event</button>\n  </div>\n  <div class=\"filters animate-2\">\n    <button class=\"tab\" [class.active]=\"filtre==='tous'\" (click)=\"filtre='tous'\">Tous</button>\n    <button class=\"tab\" [class.active]=\"filtre==='pitch'\" (click)=\"filtre='pitch'\">Pitch</button>\n    <button class=\"tab\" [class.active]=\"filtre==='webinar'\" (click)=\"filtre='webinar'\">Webinar</button>\n    <button class=\"tab\" [class.active]=\"filtre==='formation'\" (click)=\"filtre='formation'\">Formation</button>\n    <button class=\"tab\" [class.active]=\"filtre==='coaching'\" (click)=\"filtre='coaching'\">Coaching</button>\n  </div>\n  <div class=\"grid animate-3\">\n    <div *ngFor=\"let ev of filteredEvents\" class=\"card\">\n      <div style=\"display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px\">\n        <span class=\"kh-badge\" [class]=\"ev.type==='pitch'?'kh-badge--orange':ev.type==='webinar'?'kh-badge--teal':ev.type==='formation'?'kh-badge--violet':'kh-badge--green'\">{{ ev.type }}</span>\n        <span class=\"kh-badge\" [class]=\"ev.restantes===0?'kh-badge--red':ev.restantes<5?'kh-badge--amber':'kh-badge--gray'\">{{ ev.restantes===0 ? 'Complet' : ev.restantes+' places' }}</span>\n      </div>\n      <p class=\"card-name\">{{ ev.titre }}</p>\n      <p class=\"card-meta\" style=\"margin-top:6px\">\uD83D\uDCC5 {{ ev.date }} \u00B7 {{ ev.heure }}</p>\n      <p class=\"card-meta\">\uD83C\uDFA4 {{ ev.intervenant }}</p>\n      <ng-container *ngIf=\"ev.restantes > 0\">\n        <div class=\"kh-progress\" style=\"margin:14px 0 4px\"><div class=\"kh-progress__fill\" [style.width.%]=\"((ev.places - ev.restantes)/ev.places)*100\"></div></div>\n        <p style=\"font-size:11px;color:var(--text-muted)\">{{ ev.places - ev.restantes }}/{{ ev.places }} inscrits</p>\n      </ng-container>\n      <div class=\"card-footer\">\n        <div class=\"actions\">\n          <button class=\"kh-btn kh-btn--ghost kh-btn--sm\">Edit</button>\n          <button class=\"kh-btn kh-btn--danger kh-btn--sm\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".page{display:flex;flex-direction:column;gap:24px}.page-header{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}.page-sub{color:var(--text-secondary);margin-top:4px}.filters{display:flex;gap:8px;flex-wrap:wrap}.tab{padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}.tab.active{background:var(--orange);color:white;border-color:var(--orange)}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.card{padding:22px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card)}.card:hover{box-shadow:var(--shadow-hover);transform:translateY(-2px)}.card-name{font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px}.card-meta{font-size:12px;color:var(--text-secondary)}.card-footer{display:flex;align-items:center;justify-content:flex-end;margin-top:14px;padding-top:12px;border-top:1px solid var(--border)}.actions{display:flex;gap:6px}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminEvenementsComponent, { className: "AdminEvenementsComponent", filePath: "app\\features\\admin\\evenements\\evenements.component.ts", lineNumber: 3 }); })();
//# sourceMappingURL=evenements.component.js.map