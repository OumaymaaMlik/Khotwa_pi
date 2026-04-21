import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MarketingBlockComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const campaign_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_5_0 = campaign_r1 == null ? null : campaign_r1.title) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "Untitled campaign");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_6_0 = campaign_r1 == null ? null : campaign_r1.campaignType) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "OTHER", " \u00B7 ", (tmp_6_0 = campaign_r1 == null ? null : campaign_r1.status) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "DRAFT", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_7_0 = campaign_r1 == null ? null : campaign_r1.objective) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "No objective provided.");
} }
function MarketingBlockComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "ul", 6);
    i0.ɵɵtemplate(2, MarketingBlockComponent_div_7_li_2_Template, 8, 4, "li", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.campaigns)("ngForTrackBy", ctx_r1.trackByCampaign);
} }
function MarketingBlockComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "No marketing campaigns available.");
    i0.ɵɵelementEnd();
} }
function MarketingBlockComponent_div_13_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const task_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_5_0 = task_r3 == null ? null : task_r3.title) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "Untitled task");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_6_0 = task_r3 == null ? null : task_r3.assignedUserName) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "Unassigned", " \u00B7 ", (tmp_6_0 = task_r3 == null ? null : task_r3.platform) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "OTHER", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.taskBadgeClass((tmp_7_0 = task_r3 == null ? null : task_r3.status) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "TODO"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_8_0 = task_r3 == null ? null : task_r3.status) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "TODO");
} }
function MarketingBlockComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "ul", 6);
    i0.ɵɵtemplate(2, MarketingBlockComponent_div_13_li_2_Template, 8, 5, "li", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.tasks)("ngForTrackBy", ctx_r1.trackByTask);
} }
function MarketingBlockComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "No marketing tasks have been created.");
    i0.ɵɵelementEnd();
} }
export class MarketingBlockComponent {
    constructor() {
        this.campaigns = [];
        this.tasks = [];
        this.createCampaign = new EventEmitter();
        this.createTask = new EventEmitter();
        this.updateTaskStatus = new EventEmitter();
    }
    trackByCampaign(_, campaign) {
        return campaign.id;
    }
    trackByTask(_, task) {
        return task.id;
    }
    taskBadgeClass(status) {
        switch (status) {
            case 'PUBLISHED':
                return 'kh-badge--green';
            case 'READY':
                return 'kh-badge--blue';
            case 'IN_PROGRESS':
                return 'kh-badge--amber';
            default:
                return 'kh-badge--ghost';
        }
    }
    static { this.ɵfac = function MarketingBlockComponent_Factory(t) { return new (t || MarketingBlockComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MarketingBlockComponent, selectors: [["app-marketing-block"]], inputs: { campaigns: "campaigns", tasks: "tasks", role: "role", canCreateCampaign: "canCreateCampaign", canManageTasks: "canManageTasks" }, outputs: { createCampaign: "createCampaign", createTask: "createTask", updateTaskStatus: "updateTaskStatus" }, decls: 16, vars: 4, consts: [["noCampaigns", ""], ["noTasks", ""], [1, "marketing-block", "kh-card"], [1, "marketing-block__header"], [1, "kh-section-title"], [4, "ngIf", "ngIfElse"], [1, "marketing-block__list"], ["class", "marketing-block__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "marketing-block__item"], [1, "marketing-block__empty"], [1, "kh-badge", 3, "ngClass"]], template: function MarketingBlockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
            i0.ɵɵtext(3, "Marketing");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "section")(5, "h3");
            i0.ɵɵtext(6, "Campaigns");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MarketingBlockComponent_div_7_Template, 3, 2, "div", 5)(8, MarketingBlockComponent_ng_template_8_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "section")(11, "h3");
            i0.ɵɵtext(12, "Tasks");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, MarketingBlockComponent_div_13_Template, 3, 2, "div", 5)(14, MarketingBlockComponent_ng_template_14_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const noCampaigns_r4 = i0.ɵɵreference(9);
            const noTasks_r5 = i0.ɵɵreference(15);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.campaigns == null ? null : ctx.campaigns.length)("ngIfElse", noCampaigns_r4);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.tasks == null ? null : ctx.tasks.length)("ngIfElse", noTasks_r5);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarketingBlockComponent, [{
        type: Component,
        args: [{ selector: 'app-marketing-block', template: "<div class=\"marketing-block kh-card\">\n  <div class=\"marketing-block__header\">\n    <h2 class=\"kh-section-title\">Marketing</h2>\n  </div>\n\n  <section>\n    <h3>Campaigns</h3>\n    <div *ngIf=\"campaigns?.length; else noCampaigns\">\n      <ul class=\"marketing-block__list\">\n        <li *ngFor=\"let campaign of campaigns; trackBy: trackByCampaign\" class=\"marketing-block__item\">\n          <div>\n            <strong>{{ campaign?.title ?? 'Untitled campaign' }}</strong>\n            <p>{{ campaign?.campaignType ?? 'OTHER' }} \u00B7 {{ campaign?.status ?? 'DRAFT' }}</p>\n            <p>{{ campaign?.objective ?? 'No objective provided.' }}</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <ng-template #noCampaigns>\n      <div class=\"marketing-block__empty\">No marketing campaigns available.</div>\n    </ng-template>\n  </section>\n\n  <section>\n    <h3>Tasks</h3>\n    <div *ngIf=\"tasks?.length; else noTasks\">\n      <ul class=\"marketing-block__list\">\n        <li *ngFor=\"let task of tasks; trackBy: trackByTask\" class=\"marketing-block__item\">\n          <div>\n            <strong>{{ task?.title ?? 'Untitled task' }}</strong>\n            <p>{{ task?.assignedUserName ?? 'Unassigned' }} \u00B7 {{ task?.platform ?? 'OTHER' }}</p>\n          </div>\n          <span class=\"kh-badge\" [ngClass]=\"taskBadgeClass(task?.status ?? 'TODO')\">{{ task?.status ?? 'TODO' }}</span>\n        </li>\n      </ul>\n    </div>\n    <ng-template #noTasks>\n      <div class=\"marketing-block__empty\">No marketing tasks have been created.</div>\n    </ng-template>\n  </section>\n</div>\n", styles: ["/* Marketing Block Styles */"] }]
    }], null, { campaigns: [{
            type: Input
        }], tasks: [{
            type: Input
        }], role: [{
            type: Input
        }], canCreateCampaign: [{
            type: Input
        }], canManageTasks: [{
            type: Input
        }], createCampaign: [{
            type: Output
        }], createTask: [{
            type: Output
        }], updateTaskStatus: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MarketingBlockComponent, { className: "MarketingBlockComponent", filePath: "app\\features\\collaboration\\MarketingBlock\\MarketingBlock.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=MarketingBlock.component.js.map