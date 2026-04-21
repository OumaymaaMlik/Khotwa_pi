import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminUtilisateursComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td")(7, "span", 15);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span", 15);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 16);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "div", 17)(16, "button", 18);
    i0.ɵɵtext(17, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 19);
    i0.ɵɵtext(19, "Delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const u_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", u_r1.prenom, " ", u_r1.nom, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r1.email);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(u_r1.role === "admin" ? "kh-badge--orange" : u_r1.role === "entrepreneur" ? "kh-badge--teal" : "kh-badge--violet");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(u_r1.role);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(u_r1.statut === "ACTIVE" ? "kh-badge--green" : "kh-badge--gray");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(u_r1.statut);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r1.createdAt);
} }
export class AdminUtilisateursComponent {
    constructor() {
        this.filtre = 'tous';
        this.search = '';
        this.users = [
            { id: 'u1', nom: 'Bensalem', prenom: 'Karim', email: 'admin@khotwa.tn', role: 'admin', statut: 'ACTIVE', createdAt: '2024-01-01' },
            { id: 'u2', nom: 'Trabelsi', prenom: 'Sara', email: 'sara@startup.tn', role: 'entrepreneur', statut: 'ACTIVE', createdAt: '2024-02-15' },
            { id: 'u3', nom: 'Mansouri', prenom: 'Ahmed', email: 'ahmed@coach.tn', role: 'coach', statut: 'ACTIVE', createdAt: '2024-03-01' },
            { id: 'u4', nom: 'Ben Ali', prenom: 'Nadia', email: 'nadia@edu.tn', role: 'entrepreneur', statut: 'inactif', createdAt: '2024-04-10' },
            { id: 'u5', nom: 'Chaabane', prenom: 'Omar', email: 'omar@agri.tn', role: 'entrepreneur', statut: 'ACTIVE', createdAt: '2024-05-20' },
        ];
    }
    get filteredUsers() {
        let l = this.users;
        if (this.filtre !== 'tous')
            l = l.filter(u => u.role === this.filtre);
        if (this.search)
            l = l.filter(u => (u.nom + ' ' + u.prenom + ' ' + u.email).toLowerCase().includes(this.search.toLowerCase()));
        return l;
    }
    static { this.ɵfac = function AdminUtilisateursComponent_Factory(t) { return new (t || AdminUtilisateursComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminUtilisateursComponent, selectors: [["app-admin-utilisateurs"]], decls: 41, vars: 11, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026", 3, "ngModelChange", "ngModel"], [1, "tab", 3, "click"], [1, "table-wrap", "animate-3"], [4, "ngFor", "ngForOf"], [2, "color", "var(--text-secondary)"], [1, "kh-badge"], [2, "color", "var(--text-muted)"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"]], template: function AdminUtilisateursComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Gestion des Users");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵtext(8, "+ Inviter utilisateur");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(11, "svg", 7);
            i0.ɵɵelement(12, "circle", 8)(13, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminUtilisateursComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "button", 11);
            i0.ɵɵlistener("click", function AdminUtilisateursComponent_Template_button_click_15_listener() { return ctx.filtre = "tous"; });
            i0.ɵɵtext(16, "Tous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 11);
            i0.ɵɵlistener("click", function AdminUtilisateursComponent_Template_button_click_17_listener() { return ctx.filtre = "admin"; });
            i0.ɵɵtext(18, "Admin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 11);
            i0.ɵɵlistener("click", function AdminUtilisateursComponent_Template_button_click_19_listener() { return ctx.filtre = "entrepreneur"; });
            i0.ɵɵtext(20, "Entrepreneurs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 11);
            i0.ɵɵlistener("click", function AdminUtilisateursComponent_Template_button_click_21_listener() { return ctx.filtre = "coach"; });
            i0.ɵɵtext(22, "Coachs");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 12)(24, "table")(25, "thead")(26, "tr")(27, "th");
            i0.ɵɵtext(28, "User");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "th");
            i0.ɵɵtext(32, "Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "th");
            i0.ɵɵtext(34, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "th");
            i0.ɵɵtext(36, "Registered");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "th");
            i0.ɵɵtext(38, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "tbody");
            i0.ɵɵtemplate(40, AdminUtilisateursComponent_tr_40_Template, 20, 10, "tr", 13);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.filteredUsers.length, " utilisateur(s)");
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.filtre === "tous");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "admin");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "entrepreneur");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filtre === "coach");
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngForOf", ctx.filteredUsers);
        } }, dependencies: [i1.NgForOf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px; }\n.page-header[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub[_ngcontent-%COMP%] { color:var(--text-secondary);margin-top:4px; }\n.filters[_ngcontent-%COMP%] { display:flex;align-items:center;gap:8px;flex-wrap:wrap; }\n.search-box[_ngcontent-%COMP%] { display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);padding:7px 12px;font-family:inherit; }\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border:none;outline:none;font-size:13px;font-family:inherit;min-width:180px; }\n.tab[_ngcontent-%COMP%] { padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);transition:all 0.15s; }\n.tab.active[_ngcontent-%COMP%] { background:var(--orange);color:white; }\n.grid[_ngcontent-%COMP%] { display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px; }\n.card[_ngcontent-%COMP%] { padding:22px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card[_ngcontent-%COMP%]:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.card-top[_ngcontent-%COMP%] { display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px; }\n.card-icon[_ngcontent-%COMP%] { width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center; }\n.card-name[_ngcontent-%COMP%] { font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px; }\n.card-meta[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary); }\n.card-progress[_ngcontent-%COMP%] { margin:14px 0 8px; }\n.card-footer[_ngcontent-%COMP%] { display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid var(--border); }\n.actions[_ngcontent-%COMP%] { display:flex;gap:6px; }\n.empty[_ngcontent-%COMP%] { text-align:center;padding:60px 20px;color:var(--text-muted); }\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { margin:0 auto 12px;display:block;opacity:0.3; }\n.table-wrap[_ngcontent-%COMP%] { background:white;border-radius:var(--radius-lg);border:1px solid var(--border);overflow:hidden; }\ntable[_ngcontent-%COMP%] { width:100%;border-collapse:collapse; }\nth[_ngcontent-%COMP%] { padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);background:var(--bg-app);text-align:left; }\ntd[_ngcontent-%COMP%] { padding:13px 16px;font-size:13px;border-top:1px solid var(--border); }\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] { background:rgba(0,0,0,0.015); }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminUtilisateursComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-utilisateurs', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Gestion des Users</h1><p class=\"page-sub\">{{ filteredUsers.length }} utilisateur(s)</p></div>\n    <button class=\"kh-btn kh-btn--primary\">+ Inviter utilisateur</button>\n  </div>\n  <div class=\"filters animate-2\">\n    <div class=\"search-box\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.35-4.35\"/></svg>\n      <input type=\"text\" placeholder=\"Search\u2026\" [(ngModel)]=\"search\" />\n    </div>\n    <button class=\"tab\" [class.active]=\"filtre==='tous'\" (click)=\"filtre='tous'\">Tous</button>\n    <button class=\"tab\" [class.active]=\"filtre==='admin'\" (click)=\"filtre='admin'\">Admin</button>\n    <button class=\"tab\" [class.active]=\"filtre==='entrepreneur'\" (click)=\"filtre='entrepreneur'\">Entrepreneurs</button>\n    <button class=\"tab\" [class.active]=\"filtre==='coach'\" (click)=\"filtre='coach'\">Coachs</button>\n  </div>\n  <div class=\"table-wrap animate-3\">\n    <table>\n      <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead>\n      <tbody>\n        <tr *ngFor=\"let u of filteredUsers\">\n          <td><strong>{{ u.prenom }} {{ u.nom }}</strong></td>\n          <td style=\"color:var(--text-secondary)\">{{ u.email }}</td>\n          <td><span class=\"kh-badge\" [class]=\"u.role==='admin'?'kh-badge--orange':u.role==='entrepreneur'?'kh-badge--teal':'kh-badge--violet'\">{{ u.role }}</span></td>\n          <td><span class=\"kh-badge\" [class]=\"u.statut==='ACTIVE'?'kh-badge--green':'kh-badge--gray'\">{{ u.statut }}</span></td>\n          <td style=\"color:var(--text-muted)\">{{ u.createdAt }}</td>\n          <td><div class=\"actions\"><button class=\"kh-btn kh-btn--ghost kh-btn--sm\">Edit</button><button class=\"kh-btn kh-btn--danger kh-btn--sm\">Delete</button></div></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["\n.page { display:flex;flex-direction:column;gap:24px; }\n.page-header { display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px; }\n.page-sub { color:var(--text-secondary);margin-top:4px; }\n.filters { display:flex;align-items:center;gap:8px;flex-wrap:wrap; }\n.search-box { display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);padding:7px 12px;font-family:inherit; }\n.search-box input { border:none;outline:none;font-size:13px;font-family:inherit;min-width:180px; }\n.tab { padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);transition:all 0.15s; }\n.tab.active { background:var(--orange);color:white; }\n.grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px; }\n.card { padding:22px;background:white;border-radius:var(--radius-lg);border:1px solid var(--border);transition:all 0.2s;box-shadow:var(--shadow-card); }\n.card:hover { box-shadow:var(--shadow-hover);transform:translateY(-2px); }\n.card-top { display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px; }\n.card-icon { width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center; }\n.card-name { font-family:\"Plus Jakarta Sans\",sans-serif;font-size:15px;font-weight:700;margin-bottom:4px; }\n.card-meta { font-size:12px;color:var(--text-secondary); }\n.card-progress { margin:14px 0 8px; }\n.card-footer { display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid var(--border); }\n.actions { display:flex;gap:6px; }\n.empty { text-align:center;padding:60px 20px;color:var(--text-muted); }\n.empty svg { margin:0 auto 12px;display:block;opacity:0.3; }\n.table-wrap { background:white;border-radius:var(--radius-lg);border:1px solid var(--border);overflow:hidden; }\ntable { width:100%;border-collapse:collapse; }\nth { padding:12px 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);background:var(--bg-app);text-align:left; }\ntd { padding:13px 16px;font-size:13px;border-top:1px solid var(--border); }\ntr:hover td { background:rgba(0,0,0,0.015); }\n\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminUtilisateursComponent, { className: "AdminUtilisateursComponent", filePath: "app\\features\\admin\\utilisateurs\\utilisateurs.component.ts", lineNumber: 3 }); })();
//# sourceMappingURL=utilisateurs.component.js.map