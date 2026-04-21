import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../collaboration/collaboration-list/collaboration-list.component";
import * as i2 from "@angular/router";
export class CollaborationsOverviewComponent {
    constructor() {
        this.summary = {
            totalCollaborations: 0,
            activeCollaborations: 0,
            suspendedCollaborations: 0,
            closedCollaborations: 0,
        };
    }
    onSummaryChange(summary) {
        this.summary = summary;
    }
    static { this.ɵfac = function CollaborationsOverviewComponent_Factory(t) { return new (t || CollaborationsOverviewComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationsOverviewComponent, selectors: [["app-collaborations-overview"]], decls: 31, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/khotwaadmin/collaborations", 1, "kh-btn", "kh-btn--ghost"], ["aria-label", "Collaboration monitoring summary", 1, "summary-grid"], [1, "kh-card", "summary-card"], [1, "kh-card", "summary-card", "summary-card--risk"], [1, "kh-card", "summary-card", "summary-card--delay"], [3, "summaryChange", "showHeader", "showBody"]], template: function CollaborationsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Collaboration overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "High-level monitoring of collaboration lifecycle states.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4);
            i0.ɵɵtext(8, "Open full collaboration list");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "section", 5)(10, "article", 6)(11, "p");
            i0.ɵɵtext(12, "Total collaborations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "strong");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "article", 7)(16, "p");
            i0.ɵɵtext(17, "Active collaborations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "strong");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "article", 8)(21, "p");
            i0.ɵɵtext(22, "Suspended collaborations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "article", 6)(26, "p");
            i0.ɵɵtext(27, "Closed collaborations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "strong");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "app-collaboration-list", 9);
            i0.ɵɵlistener("summaryChange", function CollaborationsOverviewComponent_Template_app_collaboration_list_summaryChange_30_listener($event) { return ctx.onSummaryChange($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.summary.totalCollaborations);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.summary.activeCollaborations);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.summary.suspendedCollaborations);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.summary.closedCollaborations);
            i0.ɵɵadvance();
            i0.ɵɵproperty("showHeader", false)("showBody", false);
        } }, dependencies: [i1.CollaborationListComponent, i2.RouterLink], styles: [".summary-grid[_ngcontent-%COMP%] {\r\n  margin-top: 18px;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.summary-card[_ngcontent-%COMP%] {\r\n  padding: 18px;\r\n  display: grid;\r\n  gap: 8px;\r\n}\r\n\r\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  color: var(--text-muted);\r\n}\r\n\r\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  line-height: 1;\r\n}\r\n\r\n.summary-card--risk[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n.summary-card--delay[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #b55d00;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .summary-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationsOverviewComponent, [{
        type: Component,
        args: [{ selector: 'app-collaborations-overview', template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"kh-page-title\">Collaboration overview</h1>\n      <p class=\"page-sub\">High-level monitoring of collaboration lifecycle states.</p>\n    </div>\n    <a routerLink=\"/khotwaadmin/collaborations\" class=\"kh-btn kh-btn--ghost\">Open full collaboration list</a>\n  </div>\n\n  <section class=\"summary-grid\" aria-label=\"Collaboration monitoring summary\">\n    <article class=\"kh-card summary-card\">\n      <p>Total collaborations</p>\n      <strong>{{ summary.totalCollaborations }}</strong>\n    </article>\n\n    <article class=\"kh-card summary-card summary-card--risk\">\n      <p>Active collaborations</p>\n      <strong>{{ summary.activeCollaborations }}</strong>\n    </article>\n\n    <article class=\"kh-card summary-card summary-card--delay\">\n      <p>Suspended collaborations</p>\n      <strong>{{ summary.suspendedCollaborations }}</strong>\n    </article>\n\n    <article class=\"kh-card summary-card\">\n      <p>Closed collaborations</p>\n      <strong>{{ summary.closedCollaborations }}</strong>\n    </article>\n  </section>\n\n  <app-collaboration-list [showHeader]=\"false\" [showBody]=\"false\" (summaryChange)=\"onSummaryChange($event)\"></app-collaboration-list>\n</div>\n", styles: [".summary-grid {\r\n  margin-top: 18px;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, minmax(0, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.summary-card {\r\n  padding: 18px;\r\n  display: grid;\r\n  gap: 8px;\r\n}\r\n\r\n.summary-card p {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  color: var(--text-muted);\r\n}\r\n\r\n.summary-card strong {\r\n  font-size: 30px;\r\n  line-height: 1;\r\n}\r\n\r\n.summary-card--risk strong {\r\n  color: var(--red);\r\n}\r\n\r\n.summary-card--delay strong {\r\n  color: #b55d00;\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .summary-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationsOverviewComponent, { className: "CollaborationsOverviewComponent", filePath: "app\\features\\admin\\collaborations-overview\\collaborations-overview.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=collaborations-overview.component.js.map