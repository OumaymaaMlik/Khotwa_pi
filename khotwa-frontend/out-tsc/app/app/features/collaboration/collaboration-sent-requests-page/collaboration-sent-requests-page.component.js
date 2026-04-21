import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/collaboration.service";
import * as i2 from "../../../core/services/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../RequestsBlock/RequestsBlock.component";
function CollaborationSentRequestsPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "Loading requests...");
    i0.ɵɵelementEnd();
} }
function CollaborationSentRequestsPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function CollaborationSentRequestsPageComponent_app_requests_block_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-requests-block", 11);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("requests", ctx_r0.sentRequests)("role", ctx_r0.currentUserRole)("currentUserId", ctx_r0.currentUserId);
} }
function CollaborationSentRequestsPageComponent_app_requests_block_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-requests-block", 12);
    i0.ɵɵlistener("requestAccepted", function CollaborationSentRequestsPageComponent_app_requests_block_12_Template_app_requests_block_requestAccepted_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onRequestAccepted($event)); })("requestRejected", function CollaborationSentRequestsPageComponent_app_requests_block_12_Template_app_requests_block_requestRejected_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onRequestRejected($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("requests", ctx_r0.receivedRequests)("role", ctx_r0.currentUserRole)("currentUserId", ctx_r0.currentUserId);
} }
export class CollaborationSentRequestsPageComponent {
    constructor(collaborationService, authService) {
        this.collaborationService = collaborationService;
        this.authService = authService;
        this.sentRequests = [];
        this.receivedRequests = [];
        this.currentUserRole = 'entrepreneur';
        this.currentUserId = 0;
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        const role = this.authService.role;
        this.currentUserRole = (role ? role.toLowerCase() : 'entrepreneur');
        this.currentUserId = this.authService.currentUser?.idUser ?? 0;
        this.loadRequests();
    }
    loadRequests() {
        this.loading = true;
        this.error = '';
        forkJoin({
            sent: this.collaborationService.getSentCollaborationRequests(),
            received: this.collaborationService.getReceivedCollaborationRequests(),
        }).subscribe({
            next: ({ sent, received }) => {
                this.sentRequests = sent ?? [];
                this.receivedRequests = received ?? [];
                this.loading = false;
            },
            error: () => {
                this.sentRequests = [];
                this.receivedRequests = [];
                this.error = 'Unable to load requests.';
                this.loading = false;
            }
        });
    }
    onRequestCancelled({ requestId }) {
        this.collaborationService.cancelRequest(requestId).subscribe({
            next: () => this.loadRequests(),
            error: () => { }
        });
    }
    onRequestAccepted({ requestId }) {
        this.collaborationService.acceptRequest(requestId).subscribe({
            next: () => this.loadRequests(),
            error: () => { }
        });
    }
    onRequestRejected({ requestId }) {
        this.collaborationService.rejectRequest(requestId).subscribe({
            next: () => this.loadRequests(),
            error: () => { }
        });
    }
    static { this.ɵfac = function CollaborationSentRequestsPageComponent_Factory(t) { return new (t || CollaborationSentRequestsPageComponent)(i0.ɵɵdirectiveInject(i1.CollaborationService), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationSentRequestsPageComponent, selectors: [["app-collaboration-requests-page"]], decls: 13, vars: 4, consts: [[1, "page"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/entrepreneur/collaborations", 1, "kh-btn", "kh-btn--ghost"], ["class", "kh-card collab-empty", 4, "ngIf"], ["class", "kh-card collab-alert collab-alert--error", 4, "ngIf"], ["viewMode", "sent", 3, "requests", "role", "currentUserId", 4, "ngIf"], ["viewMode", "received", 3, "requests", "role", "currentUserId", "requestAccepted", "requestRejected", 4, "ngIf"], [1, "kh-card", "collab-empty"], [1, "kh-card", "collab-alert", "collab-alert--error"], ["viewMode", "sent", 3, "requests", "role", "currentUserId"], ["viewMode", "received", 3, "requestAccepted", "requestRejected", "requests", "role", "currentUserId"]], template: function CollaborationSentRequestsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Collaboration requests");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Review invitations you sent and requests waiting for your response.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4);
            i0.ɵɵtext(8, "Back to collaborations");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, CollaborationSentRequestsPageComponent_div_9_Template, 2, 0, "div", 5)(10, CollaborationSentRequestsPageComponent_div_10_Template, 2, 1, "div", 6)(11, CollaborationSentRequestsPageComponent_app_requests_block_11_Template, 1, 3, "app-requests-block", 7)(12, CollaborationSentRequestsPageComponent_app_requests_block_12_Template, 1, 3, "app-requests-block", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.error);
        } }, dependencies: [i3.NgIf, i4.RouterLink, i5.RequestsBlockComponent], styles: [".requests-section[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 18px;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.requests-section__head[_ngcontent-%COMP%], .requests-inline-form[_ngcontent-%COMP%], .request-list__item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.requests-section__head[_ngcontent-%COMP%] {\r\n  align-items: flex-start;\r\n}\r\n\r\n.requests-help[_ngcontent-%COMP%], .request-list__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.requests-help[_ngcontent-%COMP%] {\r\n  max-width: 520px;\r\n}\r\n\r\n.requests-inline-form[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.requests-field[_ngcontent-%COMP%] {\r\n  min-width: 220px;\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.requests-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: var(--text-muted);\r\n}\r\n\r\n.requests-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--r-md);\r\n  padding: 10px 12px;\r\n  background: white;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s ease;\r\n}\r\n\r\n.requests-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: var(--orange);\r\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.1);\r\n}\r\n\r\n.requests-feedback[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.requests-feedback--error[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n.requests-feedback--success[_ngcontent-%COMP%] {\r\n  color: var(--green);\r\n}\r\n\r\n.request-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.request-list__item[_ngcontent-%COMP%] {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n  border: 1px solid var(--line-soft);\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .requests-section__head[_ngcontent-%COMP%], .requests-inline-form[_ngcontent-%COMP%], .request-list__item[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .requests-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationSentRequestsPageComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-requests-page', template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"kh-page-title\">Collaboration requests</h1>\n      <p class=\"page-sub\">Review invitations you sent and requests waiting for your response.</p>\n    </div>\n    <a routerLink=\"/entrepreneur/collaborations\" class=\"kh-btn kh-btn--ghost\">Back to collaborations</a>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"kh-card collab-empty\">Loading requests...</div>\n  <div *ngIf=\"error\" class=\"kh-card collab-alert collab-alert--error\">{{ error }}</div>\n\n  <app-requests-block\n    *ngIf=\"!loading && !error\"\n    [requests]=\"sentRequests\"\n    viewMode=\"sent\"\n    [role]=\"currentUserRole\"\n    [currentUserId]=\"currentUserId\">\n  </app-requests-block>\n\n  <app-requests-block\n    *ngIf=\"!loading && !error\"\n    [requests]=\"receivedRequests\"\n    viewMode=\"received\"\n    [role]=\"currentUserRole\"\n    [currentUserId]=\"currentUserId\"\n    (requestAccepted)=\"onRequestAccepted($event)\"\n    (requestRejected)=\"onRequestRejected($event)\">\n  </app-requests-block>\n</div>\n", styles: [".requests-section {\r\n  display: grid;\r\n  gap: 18px;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.requests-section__head,\r\n.requests-inline-form,\r\n.request-list__item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.requests-section__head {\r\n  align-items: flex-start;\r\n}\r\n\r\n.requests-help,\r\n.request-list__item p {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.requests-help {\r\n  max-width: 520px;\r\n}\r\n\r\n.requests-inline-form {\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.requests-field {\r\n  min-width: 220px;\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.requests-field span {\r\n  font-size: 12px;\r\n  color: var(--text-muted);\r\n}\r\n\r\n.requests-field select {\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--r-md);\r\n  padding: 10px 12px;\r\n  background: white;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s ease;\r\n}\r\n\r\n.requests-field select:focus {\r\n  outline: none;\r\n  border-color: var(--orange);\r\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.1);\r\n}\r\n\r\n.requests-feedback {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n}\r\n\r\n.requests-feedback--error {\r\n  color: var(--red);\r\n}\r\n\r\n.requests-feedback--success {\r\n  color: var(--green);\r\n}\r\n\r\n.request-list {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.request-list__item {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n  border: 1px solid var(--line-soft);\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .requests-section__head,\r\n  .requests-inline-form,\r\n  .request-list__item {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .requests-field {\r\n    width: 100%;\r\n  }\r\n}\r\n"] }]
    }], () => [{ type: i1.CollaborationService }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationSentRequestsPageComponent, { className: "CollaborationSentRequestsPageComponent", filePath: "app\\features\\collaboration\\collaboration-sent-requests-page\\collaboration-sent-requests-page.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=collaboration-sent-requests-page.component.js.map