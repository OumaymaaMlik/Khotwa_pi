import { Component, EventEmitter, Input, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "../../../core/services/collaboration.service";
import * as i3 from "@angular/common";
function CollaborationRequestsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function CollaborationRequestsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Loading requests...");
    i0.ɵɵelementEnd();
} }
function CollaborationRequestsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "No collaboration requests found.");
    i0.ɵɵelementEnd();
} }
function CollaborationRequestsComponent_div_10_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function CollaborationRequestsComponent_div_10_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const request_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.accept(request_r3.id)); });
    i0.ɵɵtext(1, "Accept");
    i0.ɵɵelementEnd();
} }
function CollaborationRequestsComponent_div_10_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function CollaborationRequestsComponent_div_10_div_1_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const request_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.reject(request_r3.id)); });
    i0.ɵɵtext(1, "Reject");
    i0.ɵɵelementEnd();
} }
function CollaborationRequestsComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 11)(7, "span", 12);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CollaborationRequestsComponent_div_10_div_1_button_9_Template, 2, 0, "button", 13)(10, CollaborationRequestsComponent_div_10_div_1_button_10_Template, 2, 0, "button", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    const request_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_3_0 = request_r3.requesterUserName) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "Unknown sender");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", request_r3.type, " \u00B7 ", request_r3.scenario, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(request_r3.status === "ACCEPTED" ? "kh-badge--green" : request_r3.status === "REJECTED" ? "kh-badge--red" : "kh-badge--amber");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", request_r3.status, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.canRespond && request_r3.status === "PENDING" && request_r3.targetUserId === ctx_r0.currentUserId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.canRespond && request_r3.status === "PENDING" && request_r3.targetUserId === ctx_r0.currentUserId);
} }
function CollaborationRequestsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CollaborationRequestsComponent_div_10_div_1_Template, 11, 8, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.requests)("ngForTrackBy", ctx_r0.trackByRequest);
} }
export class CollaborationRequestsComponent {
    constructor(auth, collaborationService) {
        this.auth = auth;
        this.collaborationService = collaborationService;
        this.projectId = null;
        this.collaborationOwnerId = null;
        this.memberAdded = new EventEmitter();
        this.requests = [];
        this.error = '';
        this.loading = false;
    }
    ngOnChanges(changes) {
        if ((changes['projectId'] || changes['collaborationOwnerId']) && this.projectId) {
            this.loadRequests();
        }
    }
    get currentUserId() {
        return this.auth.currentUser?.idUser ?? 0;
    }
    get canRespond() {
        return this.auth.isAdmin || this.currentUserId === this.collaborationOwnerId;
    }
    loadRequests() {
        if (!this.projectId) {
            this.requests = [];
            return;
        }
        this.loading = true;
        this.error = '';
        forkJoin({
            sent: this.collaborationService.getSentCollaborationRequests(),
            received: this.collaborationService.getReceivedCollaborationRequests(),
        }).subscribe({
            next: ({ sent, received }) => {
                const all = [...(sent ?? []), ...(received ?? [])];
                this.requests = all.filter(request => request.projectId === this.projectId);
                this.loading = false;
            },
            error: err => {
                this.error = this.extractError(err);
                this.loading = false;
            },
        });
    }
    accept(requestId) {
        this.error = '';
        this.collaborationService.acceptRequest(requestId).subscribe({
            next: () => {
                this.loadRequests();
                this.memberAdded.emit();
            },
            error: err => {
                this.error = this.extractError(err);
            },
        });
    }
    reject(requestId) {
        this.error = '';
        this.collaborationService.rejectRequest(requestId).subscribe({
            next: () => {
                this.loadRequests();
            },
            error: err => {
                this.error = this.extractError(err);
            },
        });
    }
    trackByRequest(_, request) {
        return request.id;
    }
    extractError(err) {
        const error = err;
        return error?.error?.message ?? error?.message ?? 'An unexpected error occurred.';
    }
    static { this.ɵfac = function CollaborationRequestsComponent_Factory(t) { return new (t || CollaborationRequestsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CollaborationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationRequestsComponent, selectors: [["app-collaboration-requests"]], inputs: { projectId: "projectId", collaborationOwnerId: "collaborationOwnerId" }, outputs: { memberAdded: "memberAdded" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 4, consts: [[1, "kh-card", "request-panel"], [1, "request-panel__header"], [1, "kh-section-title"], ["class", "request-feedback request-feedback--error", 4, "ngIf"], ["class", "request-empty", 4, "ngIf"], ["class", "request-list", 4, "ngIf"], [1, "request-feedback", "request-feedback--error"], [1, "request-empty"], [1, "request-list"], ["class", "request-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "request-row"], [1, "request-row__actions"], [1, "kh-badge"], ["type", "button", "class", "kh-btn kh-btn--primary kh-btn--sm", 3, "click", 4, "ngIf"], ["type", "button", "class", "kh-btn kh-btn--danger kh-btn--sm", 3, "click", 4, "ngIf"], ["type", "button", 1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 3, "click"], ["type", "button", 1, "kh-btn", "kh-btn--danger", "kh-btn--sm", 3, "click"]], template: function CollaborationRequestsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4, "Collaboration requests");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Requests linked to this project");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(7, CollaborationRequestsComponent_div_7_Template, 2, 1, "div", 3)(8, CollaborationRequestsComponent_div_8_Template, 2, 0, "div", 4)(9, CollaborationRequestsComponent_div_9_Template, 2, 0, "div", 4)(10, CollaborationRequestsComponent_div_10_Template, 2, 2, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.requests.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.requests.length);
        } }, dependencies: [i3.NgForOf, i3.NgIf], styles: [".request-panel[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n  display: grid;\r\n  gap: 18px;\r\n}\r\n\r\n.request-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .request-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .request-empty[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n  text-align: center;\r\n  color: var(--text-secondary);\r\n  font-size: 14px;\r\n}\r\n\r\n.request-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.request-row[_ngcontent-%COMP%], .request-row__actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.request-row[_ngcontent-%COMP%] {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n}\r\n\r\n.request-row__actions[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.request-feedback--error[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .request-row[_ngcontent-%COMP%], .request-row__actions[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationRequestsComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-requests', template: "<section class=\"kh-card request-panel\">\n  <div class=\"request-panel__header\">\n    <div>\n      <h2 class=\"kh-section-title\">Collaboration requests</h2>\n      <p>Requests linked to this project</p>\n    </div>\n  </div>\n\n  <div *ngIf=\"error\" class=\"request-feedback request-feedback--error\">{{ error }}</div>\n  <div *ngIf=\"loading\" class=\"request-empty\">Loading requests...</div>\n  <div *ngIf=\"!loading && !requests.length\" class=\"request-empty\">No collaboration requests found.</div>\n\n  <div *ngIf=\"!loading && requests.length\" class=\"request-list\">\n    <div *ngFor=\"let request of requests; trackBy: trackByRequest\" class=\"request-row\">\n      <div>\n        <strong>{{ request.requesterUserName ?? 'Unknown sender' }}</strong>\n        <p>{{ request.type }} \u00B7 {{ request.scenario }}</p>\n      </div>\n      <div class=\"request-row__actions\">\n        <span class=\"kh-badge\" [class]=\"request.status === 'ACCEPTED' ? 'kh-badge--green' : request.status === 'REJECTED' ? 'kh-badge--red' : 'kh-badge--amber'\">\n          {{ request.status }}\n        </span>\n        <button *ngIf=\"canRespond && request.status === 'PENDING' && request.targetUserId === currentUserId\" type=\"button\" class=\"kh-btn kh-btn--primary kh-btn--sm\" (click)=\"accept(request.id)\">Accept</button>\n        <button *ngIf=\"canRespond && request.status === 'PENDING' && request.targetUserId === currentUserId\" type=\"button\" class=\"kh-btn kh-btn--danger kh-btn--sm\" (click)=\"reject(request.id)\">Reject</button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: [".request-panel {\r\n  padding: 24px;\r\n  display: grid;\r\n  gap: 18px;\r\n}\r\n\r\n.request-panel__header p,\r\n.request-row p,\r\n.request-empty {\r\n  padding: 24px;\r\n  text-align: center;\r\n  color: var(--text-secondary);\r\n  font-size: 14px;\r\n}\r\n\r\n.request-list {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.request-row,\r\n.request-row__actions {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.request-row {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n}\r\n\r\n.request-row__actions {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.request-feedback--error {\r\n  color: var(--red);\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .request-row,\r\n  .request-row__actions {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CollaborationService }], { projectId: [{
            type: Input
        }], collaborationOwnerId: [{
            type: Input
        }], memberAdded: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationRequestsComponent, { className: "CollaborationRequestsComponent", filePath: "app\\features\\collaboration\\collaboration-requests\\collaboration-requests.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=collaboration-requests.component.js.map