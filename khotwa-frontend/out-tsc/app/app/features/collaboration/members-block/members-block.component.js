import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MembersBlockComponent_div_6_li_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function MembersBlockComponent_div_6_li_2_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const member_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onRemoveMember(member_r2.id)); });
    i0.ɵɵtext(1, "Remove");
    i0.ɵɵelementEnd();
} }
function MembersBlockComponent_div_6_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, MembersBlockComponent_div_6_li_2_button_8_Template, 2, 0, "button", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const member_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_4_0 = member_r2 == null ? null : member_r2.fullName) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "Unknown member");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_5_0 = member_r2 == null ? null : member_r2.email) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "No email provided");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_6_0 = member_r2 == null ? null : member_r2.roleLabel) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "ENTREPRENEUR");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.canRemoveMember(member_r2));
} }
function MembersBlockComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "ul", 6);
    i0.ɵɵtemplate(2, MembersBlockComponent_div_6_li_2_Template, 9, 4, "li", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.members)("ngForTrackBy", ctx_r2.trackByMember);
} }
function MembersBlockComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No members have joined this collaboration yet.");
    i0.ɵɵelementEnd();
} }
function MembersBlockComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function MembersBlockComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onLeaveCollaboration()); });
    i0.ɵɵtext(1, "Leave collaboration");
    i0.ɵɵelementEnd();
} }
export class MembersBlockComponent {
    constructor() {
        this.members = [];
        this.memberRemoved = new EventEmitter();
        this.collaborationLeft = new EventEmitter();
    }
    trackByMember(_, member) {
        return member.id;
    }
    canRemoveMember(member) {
        if (!this.canRemoveMembers) {
            return false;
        }
        return member?.userId !== this.currentUserId && member?.userId !== this.ownerUserId;
    }
    onRemoveMember(memberId) {
        this.memberRemoved.emit({ memberId, collaborationId: this.collaborationId });
    }
    onLeaveCollaboration() {
        this.collaborationLeft.emit({ collaborationId: this.collaborationId, userId: this.currentUserId });
    }
    static { this.ɵfac = function MembersBlockComponent_Factory(t) { return new (t || MembersBlockComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MembersBlockComponent, selectors: [["app-members-block"]], inputs: { members: "members", collaborationId: "collaborationId", role: "role", currentUserId: "currentUserId", ownerUserId: "ownerUserId", canRemoveMembers: "canRemoveMembers", canLeave: "canLeave" }, outputs: { memberRemoved: "memberRemoved", collaborationLeft: "collaborationLeft" }, decls: 10, vars: 5, consts: [["noMembers", ""], [1, "members-block", "kh-card"], [1, "members-block__header"], [1, "kh-section-title"], [4, "ngIf", "ngIfElse"], ["class", "kh-btn kh-btn--ghost", 3, "click", 4, "ngIf"], [1, "members-block__list"], ["class", "members-block__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "members-block__item"], [1, "kh-btn", "kh-btn--ghost", 3, "click"], [1, "members-empty"]], template: function MembersBlockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
            i0.ɵɵtext(3, "Members");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, MembersBlockComponent_div_6_Template, 3, 2, "div", 4)(7, MembersBlockComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(9, MembersBlockComponent_button_9_Template, 2, 0, "button", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const noMembers_r5 = i0.ɵɵreference(8);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", (ctx.members == null ? null : ctx.members.length) || 0, " participant", ((ctx.members == null ? null : ctx.members.length) || 0) === 1 ? "" : "s", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.members == null ? null : ctx.members.length)("ngIfElse", noMembers_r5);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.canLeave);
        } }, dependencies: [i1.NgForOf, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MembersBlockComponent, [{
        type: Component,
        args: [{ selector: 'app-members-block', template: "<div class=\"members-block kh-card\">\n  <div class=\"members-block__header\">\n    <h2 class=\"kh-section-title\">Members</h2>\n    <p>{{ members?.length || 0 }} participant{{ (members?.length || 0) === 1 ? '' : 's' }}</p>\n  </div>\n\n  <div *ngIf=\"members?.length; else noMembers\">\n    <ul class=\"members-block__list\">\n      <li *ngFor=\"let member of members; trackBy: trackByMember\" class=\"members-block__item\">\n        <div>\n          <strong>{{ member?.fullName ?? 'Unknown member' }}</strong>\n          <p>{{ member?.email ?? 'No email provided' }}</p>\n          <p>{{ member?.roleLabel ?? 'ENTREPRENEUR' }}</p>\n        </div>\n        <button *ngIf=\"canRemoveMember(member)\" class=\"kh-btn kh-btn--ghost\" (click)=\"onRemoveMember(member.id)\">Remove</button>\n      </li>\n    </ul>\n  </div>\n\n  <ng-template #noMembers>\n    <div class=\"members-empty\">No members have joined this collaboration yet.</div>\n  </ng-template>\n\n  <button *ngIf=\"canLeave\" class=\"kh-btn kh-btn--ghost\" (click)=\"onLeaveCollaboration()\">Leave collaboration</button>\n</div>\n", styles: ["/* Members Block Styles */"] }]
    }], null, { members: [{
            type: Input
        }], collaborationId: [{
            type: Input
        }], role: [{
            type: Input
        }], currentUserId: [{
            type: Input
        }], ownerUserId: [{
            type: Input
        }], canRemoveMembers: [{
            type: Input
        }], canLeave: [{
            type: Input
        }], memberRemoved: [{
            type: Output
        }], collaborationLeft: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MembersBlockComponent, { className: "MembersBlockComponent", filePath: "app\\features\\collaboration\\members-block\\members-block.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=members-block.component.js.map