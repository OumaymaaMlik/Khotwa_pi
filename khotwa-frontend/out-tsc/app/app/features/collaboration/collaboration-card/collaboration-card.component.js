import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CollaborationCardComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", (tmp_1_0 = ctx_r0.collaboration == null ? null : ctx_r0.collaboration.ownerName) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "Unknown owner", " \u00B7 ", ctx_r0.toUiLabel((tmp_1_0 = ctx_r0.collaboration == null ? null : ctx_r0.collaboration.type) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ""), " ");
} }
export class CollaborationCardComponent {
    constructor() {
        this.open = new EventEmitter();
    }
    onOpen() {
        this.open.emit(this.collaboration);
    }
    get memberCount() {
        return this.collaboration?.members?.length ?? 0;
    }
    toUiLabel(value) {
        return value?.replaceAll('_', ' ') ?? '';
    }
    getStatusBadgeClass() {
        switch (this.collaboration?.status) {
            case 'ACTIVE':
                return 'kh-badge--green';
            case 'SUSPENDED':
                return 'kh-badge--amber';
            case 'CLOSED':
                return 'kh-badge--red';
            default:
                return 'kh-badge--blue';
        }
    }
    static { this.ɵfac = function CollaborationCardComponent_Factory(t) { return new (t || CollaborationCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationCardComponent, selectors: [["app-collaboration-card"]], inputs: { collaboration: "collaboration", role: "role", compact: "compact" }, outputs: { open: "open" }, decls: 15, vars: 7, consts: [[1, "kh-card", "collaboration-card"], [1, "collaboration-card__header"], [1, "collaboration-card__title"], ["class", "collaboration-card__meta", 4, "ngIf"], [1, "kh-badge", 3, "ngClass"], [1, "collaboration-card__signals"], [1, "collaboration-chip"], [1, "collaboration-card__meta"]], template: function CollaborationCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CollaborationCardComponent_p_5_Template, 2, 2, "p", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 5)(9, "span", 6);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 6);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span", 6);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_3_0;
            let tmp_5_0;
            let tmp_6_0;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate((tmp_0_0 = ctx.collaboration == null ? null : ctx.collaboration.projectName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Untitled project");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.compact);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.getStatusBadgeClass());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.toUiLabel((tmp_3_0 = ctx.collaboration == null ? null : ctx.collaboration.status) !== null && tmp_3_0 !== undefined ? tmp_3_0 : ""));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Members: ", ctx.memberCount, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Project #", (tmp_5_0 = ctx.collaboration == null ? null : ctx.collaboration.projectId) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "N/A", "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.toUiLabel((tmp_6_0 = ctx.collaboration == null ? null : ctx.collaboration.type) !== null && tmp_6_0 !== undefined ? tmp_6_0 : ""));
        } }, dependencies: [i1.NgClass, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationCardComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-card', template: "<article class=\"kh-card collaboration-card\">\n  <div class=\"collaboration-card__header\">\n    <div>\n      <h2 class=\"collaboration-card__title\">{{ collaboration?.projectName ?? 'Untitled project' }}</h2>\n      <p class=\"collaboration-card__meta\" *ngIf=\"!compact\">\n        {{ collaboration?.ownerName ?? 'Unknown owner' }} \u00B7 {{ toUiLabel(collaboration?.type ?? '') }}\n      </p>\n    </div>\n    <span class=\"kh-badge\" [ngClass]=\"getStatusBadgeClass()\">{{ toUiLabel(collaboration?.status ?? '') }}</span>\n  </div>\n\n  <div class=\"collaboration-card__signals\">\n    <span class=\"collaboration-chip\">Members: {{ memberCount }}</span>\n    <span class=\"collaboration-chip\">Project #{{ collaboration?.projectId ?? 'N/A' }}</span>\n    <span class=\"collaboration-chip\">{{ toUiLabel(collaboration?.type ?? '') }}</span>\n  </div>\n</article>\n", styles: ["/* Collaboration Card Styles */"] }]
    }], null, { collaboration: [{
            type: Input
        }], role: [{
            type: Input
        }], compact: [{
            type: Input
        }], open: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationCardComponent, { className: "CollaborationCardComponent", filePath: "app\\features\\collaboration\\collaboration-card\\collaboration-card.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=collaboration-card.component.js.map