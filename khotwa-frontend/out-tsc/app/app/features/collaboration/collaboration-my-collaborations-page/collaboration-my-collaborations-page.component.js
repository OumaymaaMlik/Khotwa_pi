import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/collaboration.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../core/services/auth.service";
import * as i4 from "../collaboration-list/collaboration-list.component";
export class CollaborationMyCollaborationsPageComponent {
    constructor(collaborationService, router, authService) {
        this.collaborationService = collaborationService;
        this.router = router;
        this.authService = authService;
        this.collaborations = [];
        this.currentUserRole = 'entrepreneur';
        this.loading = false;
    }
    ngOnInit() {
        const role = this.authService.role;
        this.currentUserRole = (role ? role.toLowerCase() : 'entrepreneur');
        this.loadCollaborations();
    }
    loadCollaborations() {
        this.loading = true;
        this.collaborationService.getCollaborations().subscribe({
            next: (collaborations) => {
                this.collaborations = collaborations;
                this.loading = false;
            },
            error: (_err) => {
                this.collaborations = [];
                this.loading = false;
            },
        });
    }
    onCollaborationOpen(collaboration) {
        const base = this.currentUserRole === 'admin'
            ? '/khotwaadmin/collaborations'
            : this.currentUserRole === 'coach'
                ? '/coach/collaborations'
                : '/entrepreneur/collaborations';
        this.router.navigate([base, collaboration.id]);
    }
    static { this.ɵfac = function CollaborationMyCollaborationsPageComponent_Factory(t) { return new (t || CollaborationMyCollaborationsPageComponent)(i0.ɵɵdirectiveInject(i1.CollaborationService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationMyCollaborationsPageComponent, selectors: [["app-collaboration-my-collaborations-page"]], decls: 15, vars: 3, consts: [[1, "page"], [1, "action-header", "kh-card"], [1, "action-header__info"], [1, "action-header__eyebrow"], [1, "action-header__title"], [1, "action-header__subtitle"], [1, "action-header__controls"], ["routerLink", "/entrepreneur/collaborations/create", 1, "kh-btn", "kh-btn--primary"], ["routerLink", "/entrepreneur/collaborations/requests", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], ["emptyStateTitle", "No collaborations yet", "emptyStateDescription", "Collaborations help you organize members, resources, and marketing work around a project.", "emptyStateActionLabel", "Create collaboration", "emptyStateActionLink", "/entrepreneur/collaborations/create", 3, "showHeader", "compact", "prioritizeCritical"]], template: function CollaborationMyCollaborationsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Action required");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1", 4);
            i0.ɵɵtext(6, "My collaborations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, " Focus on collaborations that need your attention and take the next step immediately. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "a", 7);
            i0.ɵɵtext(11, "Create collaboration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 8);
            i0.ɵɵtext(13, "Sent requests");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(14, "app-collaboration-list", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("showHeader", false)("compact", true)("prioritizeCritical", true);
        } }, dependencies: [i2.RouterLink, i4.CollaborationListComponent], styles: [".page[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 24px;\r\n}\r\n\r\n.action-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  gap: 24px;\r\n  padding: 28px;\r\n  border-radius: 20px;\r\n  background: var(--surface);\r\n}\r\n\r\n.action-header__info[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n}\r\n\r\n.action-header__eyebrow[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-bottom: 10px;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.action-header__title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 32px;\r\n  font-weight: 800;\r\n}\r\n\r\n.action-header__subtitle[_ngcontent-%COMP%] {\r\n  margin: 12px 0 0;\r\n  max-width: 640px;\r\n  color: var(--text-secondary);\r\n  line-height: 1.6;\r\n}\r\n\r\n.action-header__controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.action-header__pill[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.action-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  min-width: 24px;\r\n  justify-content: center;\r\n  padding: 0 8px;\r\n  border-radius: 999px;\r\n  background: rgba(0, 102, 255, 0.12);\r\n  color: #0056d6;\r\n  font-weight: 700;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .action-header[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .action-header__controls[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationMyCollaborationsPageComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-my-collaborations-page', template: "<div class=\"page\">\r\n  <section class=\"action-header kh-card\">\r\n    <div class=\"action-header__info\">\r\n      <span class=\"action-header__eyebrow\">Action required</span>\r\n      <h1 class=\"action-header__title\">My collaborations</h1>\r\n      <p class=\"action-header__subtitle\">\r\n        Focus on collaborations that need your attention and take the next step immediately.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"action-header__controls\">\r\n      <a routerLink=\"/entrepreneur/collaborations/create\" class=\"kh-btn kh-btn--primary\">Create collaboration</a>\r\n      <a routerLink=\"/entrepreneur/collaborations/requests\" class=\"kh-btn kh-btn--ghost kh-btn--sm\">Sent requests</a>\r\n    </div>\r\n  </section>\r\n\r\n  <app-collaboration-list\n    [showHeader]=\"false\"\n    [compact]=\"true\"\n    [prioritizeCritical]=\"true\"\n    emptyStateTitle=\"No collaborations yet\"\n    emptyStateDescription=\"Collaborations help you organize members, resources, and marketing work around a project.\"\n    emptyStateActionLabel=\"Create collaboration\"\n    emptyStateActionLink=\"/entrepreneur/collaborations/create\">\n  </app-collaboration-list>\n</div>\n", styles: [".page {\r\n  display: grid;\r\n  gap: 24px;\r\n}\r\n\r\n.action-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  gap: 24px;\r\n  padding: 28px;\r\n  border-radius: 20px;\r\n  background: var(--surface);\r\n}\r\n\r\n.action-header__info {\r\n  min-width: 0;\r\n}\r\n\r\n.action-header__eyebrow {\r\n  display: inline-flex;\r\n  margin-bottom: 10px;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.action-header__title {\r\n  margin: 0;\r\n  font-size: 32px;\r\n  font-weight: 800;\r\n}\r\n\r\n.action-header__subtitle {\r\n  margin: 12px 0 0;\r\n  max-width: 640px;\r\n  color: var(--text-secondary);\r\n  line-height: 1.6;\r\n}\r\n\r\n.action-header__controls {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.action-header__pill {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.action-badge {\r\n  display: inline-flex;\r\n  min-width: 24px;\r\n  justify-content: center;\r\n  padding: 0 8px;\r\n  border-radius: 999px;\r\n  background: rgba(0, 102, 255, 0.12);\r\n  color: #0056d6;\r\n  font-weight: 700;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .action-header {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .action-header__controls {\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n"] }]
    }], () => [{ type: i1.CollaborationService }, { type: i2.Router }, { type: i3.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationMyCollaborationsPageComponent, { className: "CollaborationMyCollaborationsPageComponent", filePath: "app\\features\\collaboration\\collaboration-my-collaborations-page\\collaboration-my-collaborations-page.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=collaboration-my-collaborations-page.component.js.map