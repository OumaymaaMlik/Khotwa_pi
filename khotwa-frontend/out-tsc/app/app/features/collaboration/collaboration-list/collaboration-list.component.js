import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "../../../core/services/collaboration.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../collaboration-card/collaboration-card.component";
function CollaborationListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div")(2, "h1", 6);
    i0.ɵɵtext(3, "Collaborations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 7);
    i0.ɵɵtext(5, "Manage and view collaboration workspaces.");
    i0.ɵɵelementEnd()()();
} }
function CollaborationListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function CollaborationListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "Loading collaborations...");
    i0.ɵɵelementEnd();
} }
function CollaborationListComponent_div_4_app_collaboration_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-collaboration-card", 12);
} if (rf & 2) {
    const collaboration_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("collaboration", collaboration_r2)("role", ctx_r0.auth.isAdmin ? "admin" : ctx_r0.auth.isCoach ? "coach" : "entrepreneur")("compact", ctx_r0.compact)("routerLink", ctx_r0.collaborationLink(collaboration_r2.id));
} }
function CollaborationListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, CollaborationListComponent_div_4_app_collaboration_card_1_Template, 1, 4, "app-collaboration-card", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.sortedCollaborations)("ngForTrackBy", ctx_r0.trackByCollaboration);
} }
function CollaborationListComponent_div_5_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r0.emptyStateActionLink);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.emptyStateActionLabel, " ");
} }
function CollaborationListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "h2", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CollaborationListComponent_div_5_a_5_Template, 2, 2, "a", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.emptyStateTitle || "No collaborations yet");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.emptyStateDescription || "You do not have any collaborations yet. Create one to start managing members, resources, and marketing work.");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.emptyStateActionLabel && ctx_r0.emptyStateActionLink);
} }
export class CollaborationListComponent {
    constructor(auth, collaborationService) {
        this.auth = auth;
        this.collaborationService = collaborationService;
        this.showHeader = true;
        this.showBody = true;
        this.compact = false;
        this.prioritizeCritical = false;
        this.summaryChange = new EventEmitter();
        this.collaborations = [];
        this.sortedCollaborations = [];
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        this.loadCollaborations();
    }
    get rolePrefix() {
        if (this.auth.isAdmin) {
            return '/khotwaadmin';
        }
        if (this.auth.isCoach) {
            return '/coach';
        }
        return '/entrepreneur';
    }
    collaborationLink(id) {
        return `${this.rolePrefix}/collaborations/${id}`;
    }
    loadCollaborations() {
        this.loading = true;
        this.error = '';
        this.sortedCollaborations = [];
        this.emitSummary();
        this.collaborationService.getCollaborations()
            .pipe(finalize(() => { this.loading = false; }))
            .subscribe({
            next: collaborations => {
                this.collaborations = collaborations ?? [];
                this.reorderCollaborations();
                this.emitSummary();
            },
            error: err => {
                this.collaborations = [];
                this.sortedCollaborations = [];
                this.error = this.extractError(err);
                this.emitSummary();
            },
        });
    }
    trackByCollaboration(_, collaboration) {
        return collaboration.id;
    }
    reorderCollaborations() {
        const collaborations = this.collaborations.slice();
        if (!this.prioritizeCritical) {
            this.sortedCollaborations = collaborations;
            return;
        }
        this.sortedCollaborations = collaborations.sort((left, right) => this.getStatusPriority(left.status) - this.getStatusPriority(right.status));
    }
    getStatusPriority(status) {
        switch (status) {
            case 'SUSPENDED':
                return 0;
            case 'ACTIVE':
                return 1;
            case 'CLOSED':
                return 2;
            default:
                return 3;
        }
    }
    extractError(err) {
        const error = err;
        return error?.error?.message ?? error?.message ?? 'An unexpected error occurred.';
    }
    emitSummary() {
        this.summaryChange.emit({
            totalCollaborations: this.collaborations.length,
            activeCollaborations: this.collaborations.filter(collaboration => collaboration.status === 'ACTIVE').length,
            suspendedCollaborations: this.collaborations.filter(collaboration => collaboration.status === 'SUSPENDED').length,
            closedCollaborations: this.collaborations.filter(collaboration => collaboration.status === 'CLOSED').length,
        });
    }
    static { this.ɵfac = function CollaborationListComponent_Factory(t) { return new (t || CollaborationListComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CollaborationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationListComponent, selectors: [["app-collaboration-list"]], inputs: { showHeader: "showHeader", showBody: "showBody", compact: "compact", prioritizeCritical: "prioritizeCritical", emptyStateTitle: "emptyStateTitle", emptyStateDescription: "emptyStateDescription", emptyStateActionLabel: "emptyStateActionLabel", emptyStateActionLink: "emptyStateActionLink" }, outputs: { summaryChange: "summaryChange" }, decls: 6, vars: 5, consts: [[1, "page"], ["class", "page-header", 4, "ngIf"], ["class", "kh-card collab-alert collab-alert--error", 4, "ngIf"], ["class", "kh-card collab-empty", 4, "ngIf"], ["class", "collaboration-grid", 4, "ngIf"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-card", "collab-alert", "collab-alert--error"], [1, "kh-card", "collab-empty"], [1, "collaboration-grid"], [3, "collaboration", "role", "compact", "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "collaboration", "role", "compact", "routerLink"], [1, "kh-section-title"], ["class", "kh-btn kh-btn--primary", 3, "routerLink", 4, "ngIf"], [1, "kh-btn", "kh-btn--primary", 3, "routerLink"]], template: function CollaborationListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CollaborationListComponent_div_1_Template, 6, 0, "div", 1)(2, CollaborationListComponent_div_2_Template, 2, 1, "div", 2)(3, CollaborationListComponent_div_3_Template, 2, 0, "div", 3)(4, CollaborationListComponent_div_4_Template, 2, 2, "div", 4)(5, CollaborationListComponent_div_5_Template, 6, 3, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody && ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody && ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody && !ctx.loading && ctx.sortedCollaborations.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody && !ctx.loading && !ctx.collaborations.length);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.RouterLink, i5.CollaborationCardComponent], styles: [".collaboration-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\r\n  gap: 20px;\r\n  margin-top: 24px;\r\n}\r\n\r\n.collaboration-card[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 18px;\r\n  padding: 20px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  transition: transform 0.16s ease, box-shadow 0.16s ease;\r\n}\r\n\r\n.collaboration-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n.collaboration-card__header[_ngcontent-%COMP%], .collaboration-card__meta[_ngcontent-%COMP%], .collab-list__item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.collaboration-card__header[_ngcontent-%COMP%] {\r\n  align-items: flex-start;\r\n}\r\n\r\n.collaboration-card__eyebrow[_ngcontent-%COMP%], .collab-list__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.collaboration-card__title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.collaboration-card__meta[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n  color: var(--text-secondary);\r\n  font-size: 13px;\r\n  gap: 16px;\r\n}\r\n\r\n.collaboration-card__signals[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.collaboration-card--critical[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #d32f2f;\r\n  box-shadow: 0 10px 30px rgba(211, 47, 47, 0.08);\r\n}\r\n\r\n.collaboration-chip[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  border-radius: 999px;\r\n  padding: 6px 10px;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  background: var(--bg-app);\r\n  color: var(--text-secondary);\r\n}\r\n\r\n.collaboration-chip--ok[_ngcontent-%COMP%] {\r\n  background: rgba(29, 153, 76, 0.12);\r\n  color: #0f6d32;\r\n}\r\n\r\n.collaboration-chip--warn[_ngcontent-%COMP%] {\r\n  background: rgba(232, 98, 42, 0.14);\r\n  color: #b2461a;\r\n}\r\n\r\n.collaboration-chip--muted[_ngcontent-%COMP%] {\r\n  background: #eef2f7;\r\n  color: #5b6573;\r\n}\r\n\r\n.kh-badge--blue[_ngcontent-%COMP%] {\r\n  background: #e8f2ff;\r\n  color: #184f90;\r\n}\r\n\r\n.collab-alert--error[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n.collab-empty[_ngcontent-%COMP%], .collab-alert[_ngcontent-%COMP%] {\r\n  padding: 40px 20px;\r\n  text-align: center;\r\n}\r\n.collab-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-bottom: 8px;\r\n}\r\n.collab-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--text-secondary);\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .collaboration-card__header[_ngcontent-%COMP%], .collab-list__item[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationListComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-list', template: "<div class=\"page\">\n  <div class=\"page-header\" *ngIf=\"showHeader\">\n    <div>\n      <h1 class=\"kh-page-title\">Collaborations</h1>\n      <p class=\"page-sub\">Manage and view collaboration workspaces.</p>\n    </div>\n  </div>\n\n  <div *ngIf=\"showBody && error\" class=\"kh-card collab-alert collab-alert--error\">{{ error }}</div>\n\n  <div *ngIf=\"showBody && loading\" class=\"kh-card collab-empty\">Loading collaborations...</div>\n\n  <div *ngIf=\"showBody && !loading && sortedCollaborations.length\" class=\"collaboration-grid\">\n    <app-collaboration-card\n      *ngFor=\"let collaboration of sortedCollaborations; trackBy: trackByCollaboration\"\n      [collaboration]=\"collaboration\"\n      [role]=\"auth.isAdmin ? 'admin' : auth.isCoach ? 'coach' : 'entrepreneur'\"\n      [compact]=\"compact\"\n      [routerLink]=\"collaborationLink(collaboration.id)\">\n    </app-collaboration-card>\n  </div>\n\n  <div *ngIf=\"showBody && !loading && !collaborations.length\" class=\"kh-card collab-empty\">\n    <h2 class=\"kh-section-title\">{{ emptyStateTitle || 'No collaborations yet' }}</h2>\n    <p>{{ emptyStateDescription || 'You do not have any collaborations yet. Create one to start managing members, resources, and marketing work.' }}</p>\n    <a *ngIf=\"emptyStateActionLabel && emptyStateActionLink\" [routerLink]=\"emptyStateActionLink\" class=\"kh-btn kh-btn--primary\">\n      {{ emptyStateActionLabel }}\n    </a>\n  </div>\n</div>\n", styles: [".collaboration-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\r\n  gap: 20px;\r\n  margin-top: 24px;\r\n}\r\n\r\n.collaboration-card {\r\n  display: grid;\r\n  gap: 18px;\r\n  padding: 20px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  transition: transform 0.16s ease, box-shadow 0.16s ease;\r\n}\r\n\r\n.collaboration-card:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n.collaboration-card__header,\r\n.collaboration-card__meta,\r\n.collab-list__item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.collaboration-card__header {\r\n  align-items: flex-start;\r\n}\r\n\r\n.collaboration-card__eyebrow,\r\n.collab-list__item p {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.collaboration-card__title {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.collaboration-card__meta {\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n  color: var(--text-secondary);\r\n  font-size: 13px;\r\n  gap: 16px;\r\n}\r\n\r\n.collaboration-card__signals {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.collaboration-card--critical {\r\n  border-left: 5px solid #d32f2f;\r\n  box-shadow: 0 10px 30px rgba(211, 47, 47, 0.08);\r\n}\r\n\r\n.collaboration-chip {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  border-radius: 999px;\r\n  padding: 6px 10px;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  background: var(--bg-app);\r\n  color: var(--text-secondary);\r\n}\r\n\r\n.collaboration-chip--ok {\r\n  background: rgba(29, 153, 76, 0.12);\r\n  color: #0f6d32;\r\n}\r\n\r\n.collaboration-chip--warn {\r\n  background: rgba(232, 98, 42, 0.14);\r\n  color: #b2461a;\r\n}\r\n\r\n.collaboration-chip--muted {\r\n  background: #eef2f7;\r\n  color: #5b6573;\r\n}\r\n\r\n.kh-badge--blue {\r\n  background: #e8f2ff;\r\n  color: #184f90;\r\n}\r\n\r\n.collab-alert--error {\r\n  color: var(--red);\r\n}\r\n\r\n.collab-empty,\r\n.collab-alert {\r\n  padding: 40px 20px;\r\n  text-align: center;\r\n}\r\n.collab-empty h2 {\r\n  margin-bottom: 8px;\r\n}\r\n.collab-empty p {\r\n  color: var(--text-secondary);\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .collaboration-card__header,\r\n  .collab-list__item {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CollaborationService }], { showHeader: [{
            type: Input
        }], showBody: [{
            type: Input
        }], compact: [{
            type: Input
        }], prioritizeCritical: [{
            type: Input
        }], emptyStateTitle: [{
            type: Input
        }], emptyStateDescription: [{
            type: Input
        }], emptyStateActionLabel: [{
            type: Input
        }], emptyStateActionLink: [{
            type: Input
        }], summaryChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationListComponent, { className: "CollaborationListComponent", filePath: "app\\features\\collaboration\\collaboration-list\\collaboration-list.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=collaboration-list.component.js.map