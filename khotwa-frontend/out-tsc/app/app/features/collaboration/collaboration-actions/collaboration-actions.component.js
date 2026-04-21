import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CollaborationActionsComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CollaborationActionsComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onUpdateStatus("ACTIVE")); });
    i0.ɵɵtext(1, "Activate");
    i0.ɵɵelementEnd();
} }
function CollaborationActionsComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function CollaborationActionsComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onUpdateStatus("SUSPENDED")); });
    i0.ɵɵtext(1, "Suspend");
    i0.ɵɵelementEnd();
} }
function CollaborationActionsComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function CollaborationActionsComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onUpdateStatus("CLOSED")); });
    i0.ɵɵtext(1, "Close");
    i0.ɵɵelementEnd();
} }
function CollaborationActionsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function CollaborationActionsComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onLeaveCollaboration()); });
    i0.ɵɵtext(1, "Leave");
    i0.ɵɵelementEnd();
} }
export class CollaborationActionsComponent {
    constructor() {
        this.statusUpdated = new EventEmitter();
        this.collaborationLeft = new EventEmitter();
    }
    onUpdateStatus(newStatus) {
        this.statusUpdated.emit({ collaborationId: this.collaboration.id, newStatus });
    }
    onLeaveCollaboration() {
        this.collaborationLeft.emit({
            collaborationId: this.collaboration.id,
            userId: this.currentUserId ?? 0
        });
    }
    static { this.ɵfac = function CollaborationActionsComponent_Factory(t) { return new (t || CollaborationActionsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationActionsComponent, selectors: [["app-collaboration-actions"]], inputs: { collaboration: "collaboration", role: "role", canUpdateStatus: "canUpdateStatus", canLeave: "canLeave", currentUserId: "currentUserId" }, outputs: { statusUpdated: "statusUpdated", collaborationLeft: "collaborationLeft" }, decls: 11, vars: 5, consts: [[1, "collaboration-actions", "kh-card"], [1, "collaboration-actions__header"], [1, "kh-section-title"], [1, "collaboration-actions__buttons"], ["class", "kh-btn kh-btn--secondary", 3, "click", 4, "ngIf"], ["class", "kh-btn kh-btn--ghost", 3, "click", 4, "ngIf"], [1, "kh-btn", "kh-btn--secondary", 3, "click"], [1, "kh-btn", "kh-btn--ghost", 3, "click"]], template: function CollaborationActionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3, "Collaboration actions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵtemplate(7, CollaborationActionsComponent_button_7_Template, 2, 0, "button", 4)(8, CollaborationActionsComponent_button_8_Template, 2, 0, "button", 5)(9, CollaborationActionsComponent_button_9_Template, 2, 0, "button", 5)(10, CollaborationActionsComponent_button_10_Template, 2, 0, "button", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("Status: ", (tmp_0_0 = ctx.collaboration == null ? null : ctx.collaboration.status) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "UNKNOWN", "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.canUpdateStatus);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.canUpdateStatus);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.canUpdateStatus);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.canLeave);
        } }, dependencies: [i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationActionsComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-actions', template: "<div class=\"collaboration-actions kh-card\">\n  <div class=\"collaboration-actions__header\">\n    <h2 class=\"kh-section-title\">Collaboration actions</h2>\n    <p>Status: {{ collaboration?.status ?? 'UNKNOWN' }}</p>\n  </div>\n\n  <div class=\"collaboration-actions__buttons\">\n    <button *ngIf=\"canUpdateStatus\" class=\"kh-btn kh-btn--secondary\" (click)=\"onUpdateStatus('ACTIVE')\">Activate</button>\n    <button *ngIf=\"canUpdateStatus\" class=\"kh-btn kh-btn--ghost\" (click)=\"onUpdateStatus('SUSPENDED')\">Suspend</button>\n    <button *ngIf=\"canUpdateStatus\" class=\"kh-btn kh-btn--ghost\" (click)=\"onUpdateStatus('CLOSED')\">Close</button>\n    <button *ngIf=\"canLeave\" class=\"kh-btn kh-btn--ghost\" (click)=\"onLeaveCollaboration()\">Leave</button>\n  </div>\n</div>\n", styles: ["/* Collaboration Actions Styles */"] }]
    }], null, { collaboration: [{
            type: Input
        }], role: [{
            type: Input
        }], canUpdateStatus: [{
            type: Input
        }], canLeave: [{
            type: Input
        }], currentUserId: [{
            type: Input
        }], statusUpdated: [{
            type: Output
        }], collaborationLeft: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationActionsComponent, { className: "CollaborationActionsComponent", filePath: "app\\features\\collaboration\\collaboration-actions\\collaboration-actions.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=collaboration-actions.component.js.map