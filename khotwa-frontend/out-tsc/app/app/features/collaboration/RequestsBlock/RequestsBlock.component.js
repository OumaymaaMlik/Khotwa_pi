import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function RequestsBlockComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Track invitations and join requests you have sent.");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Manage incoming invitations and collaboration requests.");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Review requests linked to this collaboration or its project.");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, " No requests found. ");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_ul_9_li_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function RequestsBlockComponent_ul_9_li_1_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const request_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.requestAccepted.emit({ requestId: request_r2.id })); });
    i0.ɵɵtext(1, "Accept");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_ul_9_li_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function RequestsBlockComponent_ul_9_li_1_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const request_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.requestRejected.emit({ requestId: request_r2.id })); });
    i0.ɵɵtext(1, "Reject");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_ul_9_li_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function RequestsBlockComponent_ul_9_li_1_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const request_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.requestCancelled.emit({ requestId: request_r2.id })); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function RequestsBlockComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 10)(1, "div", 11)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "span", 12);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 13);
    i0.ɵɵtemplate(13, RequestsBlockComponent_ul_9_li_1_button_13_Template, 2, 0, "button", 14)(14, RequestsBlockComponent_ul_9_li_1_button_14_Template, 2, 0, "button", 15)(15, RequestsBlockComponent_ul_9_li_1_button_15_Template, 2, 0, "button", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const request_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.requestTitle(request_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r2.requestSubtitle(request_r2), " \u00B7 ", i0.ɵɵpipeBind2(7, 9, request_r2.createdAt, "MMM d, yyyy"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.requestActorLabel(request_r2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.statusBadgeClass(request_r2.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(request_r2.status));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.canRespondToRequest(request_r2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.canRespondToRequest(request_r2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewMode === "sent" && ctx_r2.canCancel);
} }
function RequestsBlockComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵtemplate(1, RequestsBlockComponent_ul_9_li_1_Template, 16, 12, "li", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.requests)("ngForTrackBy", ctx_r2.trackByRequest);
} }
export class RequestsBlockComponent {
    constructor() {
        this.requests = [];
        this.requestAccepted = new EventEmitter();
        this.requestRejected = new EventEmitter();
        this.requestCancelled = new EventEmitter();
    }
    trackByRequest(_, request) {
        return request.id;
    }
    statusLabel(status) {
        switch (status) {
            case 'ACCEPTED':
                return 'Accepted';
            case 'REJECTED':
                return 'Rejected';
            default:
                return 'Pending';
        }
    }
    statusBadgeClass(status) {
        switch (status) {
            case 'ACCEPTED':
                return 'kh-badge--green';
            case 'REJECTED':
                return 'kh-badge--red';
            default:
                return 'kh-badge--amber';
        }
    }
    requestTitle(request) {
        if (request.scenario === 'COLLABORATION_JOIN_REQUEST') {
            return request.projectName ?? 'Join collaboration request';
        }
        return request.projectName ?? 'Project invitation';
    }
    requestSubtitle(request) {
        const typeLabel = request.type?.replaceAll('_', ' ') ?? 'COLLABORATION';
        if (request.scenario === 'COLLABORATION_JOIN_REQUEST') {
            return `${typeLabel} join request`;
        }
        return `${typeLabel} invitation`;
    }
    requestActorLabel(request) {
        if (this.viewMode === 'sent') {
            return `To ${request.targetUserName ?? 'Unknown user'}`;
        }
        return `From ${request.requesterUserName ?? 'Unknown user'}`;
    }
    canRespondToRequest(request) {
        if (request.status !== 'PENDING') {
            return false;
        }
        if (this.canRespond === false) {
            return false;
        }
        if (this.role === 'admin') {
            return true;
        }
        return !!this.currentUserId && request.targetUserId === this.currentUserId;
    }
    static { this.ɵfac = function RequestsBlockComponent_Factory(t) { return new (t || RequestsBlockComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RequestsBlockComponent, selectors: [["app-requests-block"]], inputs: { requests: "requests", viewMode: "viewMode", role: "role", currentUserId: "currentUserId", canRespond: "canRespond", canCancel: "canCancel" }, outputs: { requestAccepted: "requestAccepted", requestRejected: "requestRejected", requestCancelled: "requestCancelled" }, decls: 10, vars: 6, consts: [[1, "requests-block", "kh-card"], [1, "requests-block__header"], [1, "kh-section-title"], ["class", "requests-block__subtitle", 4, "ngIf"], ["class", "requests-block__empty", 4, "ngIf"], ["class", "requests-block__list", 4, "ngIf"], [1, "requests-block__subtitle"], [1, "requests-block__empty"], [1, "requests-block__list"], ["class", "requests-block__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "requests-block__item"], [1, "requests-block__meta"], [1, "kh-badge", 3, "ngClass"], [1, "requests-block__actions"], ["class", "kh-btn kh-btn--secondary", 3, "click", 4, "ngIf"], ["class", "kh-btn kh-btn--ghost", 3, "click", 4, "ngIf"], [1, "kh-btn", "kh-btn--secondary", 3, "click"], [1, "kh-btn", "kh-btn--ghost", 3, "click"]], template: function RequestsBlockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, RequestsBlockComponent_p_5_Template, 2, 0, "p", 3)(6, RequestsBlockComponent_p_6_Template, 2, 0, "p", 3)(7, RequestsBlockComponent_p_7_Template, 2, 0, "p", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(8, RequestsBlockComponent_div_8_Template, 2, 0, "div", 4)(9, RequestsBlockComponent_ul_9_Template, 2, 2, "ul", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.viewMode === "sent" ? "Sent requests" : ctx.viewMode === "received" ? "Received requests" : "Collaboration requests", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.viewMode === "sent");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.viewMode === "received");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.viewMode === "collaboration");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !(ctx.requests == null ? null : ctx.requests.length));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.requests == null ? null : ctx.requests.length);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.DatePipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequestsBlockComponent, [{
        type: Component,
        args: [{ selector: 'app-requests-block', template: "<div class=\"requests-block kh-card\">\n  <div class=\"requests-block__header\">\n    <div>\n      <h2 class=\"kh-section-title\">\n        {{ viewMode === 'sent' ? 'Sent requests' : viewMode === 'received' ? 'Received requests' : 'Collaboration requests' }}\n      </h2>\n      <p class=\"requests-block__subtitle\" *ngIf=\"viewMode === 'sent'\">Track invitations and join requests you have sent.</p>\n      <p class=\"requests-block__subtitle\" *ngIf=\"viewMode === 'received'\">Manage incoming invitations and collaboration requests.</p>\n      <p class=\"requests-block__subtitle\" *ngIf=\"viewMode === 'collaboration'\">Review requests linked to this collaboration or its project.</p>\n    </div>\n  </div>\n\n  <div *ngIf=\"!requests?.length\" class=\"requests-block__empty\">\n    No requests found.\n  </div>\n\n  <ul *ngIf=\"requests?.length\" class=\"requests-block__list\">\n    <li *ngFor=\"let request of requests; trackBy: trackByRequest\" class=\"requests-block__item\">\n      <div class=\"requests-block__meta\">\n        <div>\n          <strong>{{ requestTitle(request) }}</strong>\n          <p>{{ requestSubtitle(request) }} \u00B7 {{ request.createdAt | date:'MMM d, yyyy' }}</p>\n          <p>{{ requestActorLabel(request) }}</p>\n        </div>\n        <span class=\"kh-badge\" [ngClass]=\"statusBadgeClass(request.status)\">{{ statusLabel(request.status) }}</span>\n      </div>\n      <div class=\"requests-block__actions\">\n        <button *ngIf=\"canRespondToRequest(request)\" class=\"kh-btn kh-btn--secondary\" (click)=\"requestAccepted.emit({ requestId: request.id })\">Accept</button>\n        <button *ngIf=\"canRespondToRequest(request)\" class=\"kh-btn kh-btn--ghost\" (click)=\"requestRejected.emit({ requestId: request.id })\">Reject</button>\n        <button *ngIf=\"viewMode === 'sent' && canCancel\" class=\"kh-btn kh-btn--ghost\" (click)=\"requestCancelled.emit({ requestId: request.id })\">Cancel</button>\n      </div>\n    </li>\n  </ul>\n</div>\n", styles: ["/* Requests Block Styles */"] }]
    }], null, { requests: [{
            type: Input
        }], viewMode: [{
            type: Input
        }], role: [{
            type: Input
        }], currentUserId: [{
            type: Input
        }], canRespond: [{
            type: Input
        }], canCancel: [{
            type: Input
        }], requestAccepted: [{
            type: Output
        }], requestRejected: [{
            type: Output
        }], requestCancelled: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RequestsBlockComponent, { className: "RequestsBlockComponent", filePath: "app\\features\\collaboration\\RequestsBlock\\RequestsBlock.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=RequestsBlock.component.js.map