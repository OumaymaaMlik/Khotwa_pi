import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ResourcesBlockComponent_div_4_li_2_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const resource_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 Qty: ", resource_r1 == null ? null : resource_r1.quantity, "");
} }
function ResourcesBlockComponent_div_4_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 9)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵtemplate(8, ResourcesBlockComponent_div_4_li_2_span_8_Template, 2, 1, "span", 10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const resource_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_5_0 = resource_r1 == null ? null : resource_r1.name) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "Unnamed resource");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_6_0 = resource_r1 == null ? null : resource_r1.resourceType) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "UNKNOWN", " \u00B7 Shared by ", (tmp_6_0 = resource_r1 == null ? null : resource_r1.ownerUserName) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "Unknown owner", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Status: ", (tmp_7_0 = resource_r1 == null ? null : resource_r1.availabilityStatus) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "UNKNOWN", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (resource_r1 == null ? null : resource_r1.quantity) != null);
} }
function ResourcesBlockComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "ul", 7);
    i0.ɵɵtemplate(2, ResourcesBlockComponent_div_4_li_2_Template, 9, 5, "li", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.resources)("ngForTrackBy", ctx_r1.trackByResource);
} }
function ResourcesBlockComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, "No shared resources yet.");
    i0.ɵɵelementEnd();
} }
function ResourcesBlockComponent_div_10_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 14)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 15);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const request_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_5_0 = request_r3 == null ? null : request_r3.title) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "Request #" + (request_r3 == null ? null : request_r3.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_6_0 = request_r3 == null ? null : request_r3.requesterUserName) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "Unknown requester", " \u00B7 ", (tmp_6_0 = request_r3 == null ? null : request_r3.resourceType) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "UNKNOWN", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Urgency: ", (tmp_7_0 = request_r3 == null ? null : request_r3.urgency) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "MEDIUM", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.resourceRequestBadgeClass((tmp_8_0 = request_r3 == null ? null : request_r3.status) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "OPEN"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_9_0 = request_r3 == null ? null : request_r3.status) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "OPEN");
} }
function ResourcesBlockComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "ul", 12);
    i0.ɵɵtemplate(2, ResourcesBlockComponent_div_10_li_2_Template, 10, 6, "li", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.resourceRequests)("ngForTrackBy", ctx_r1.trackByRequest);
} }
function ResourcesBlockComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, "No resource requests yet.");
    i0.ɵɵelementEnd();
} }
export class ResourcesBlockComponent {
    constructor() {
        this.resources = [];
        this.resourceRequests = [];
        this.createResource = new EventEmitter();
        this.createResourceRequest = new EventEmitter();
        this.updateResourceRequestStatus = new EventEmitter();
    }
    trackByResource(_, resource) {
        return resource.id;
    }
    trackByRequest(_, request) {
        return request.id;
    }
    resourceRequestBadgeClass(status) {
        switch (status) {
            case 'FULFILLED':
                return 'kh-badge--green';
            case 'CANCELLED':
                return 'kh-badge--red';
            case 'MATCHED':
                return 'kh-badge--blue';
            default:
                return 'kh-badge--amber';
        }
    }
    static { this.ɵfac = function ResourcesBlockComponent_Factory(t) { return new (t || ResourcesBlockComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResourcesBlockComponent, selectors: [["app-resources-block"]], inputs: { resources: "resources", resourceRequests: "resourceRequests", role: "role", canCreateResource: "canCreateResource", canRequestResource: "canRequestResource" }, outputs: { createResource: "createResource", createResourceRequest: "createResourceRequest", updateResourceRequestStatus: "updateResourceRequestStatus" }, decls: 13, vars: 4, consts: [["noResources", ""], ["noRequestItems", ""], [1, "resources-block", "kh-card"], [1, "resources-block__header"], [1, "kh-section-title"], [4, "ngIf", "ngIfElse"], [1, "resources-block__section"], [1, "resources-block__list"], ["class", "resources-block__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "resources-block__item"], [4, "ngIf"], [1, "resources-block__empty"], [1, "resource-requests-list"], ["class", "resource-requests-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "resource-requests-list__item"], [1, "kh-badge", 3, "ngClass"]], template: function ResourcesBlockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
            i0.ɵɵtext(3, "Resources");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, ResourcesBlockComponent_div_4_Template, 3, 2, "div", 5)(5, ResourcesBlockComponent_ng_template_5_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(7, "div", 6)(8, "h3");
            i0.ɵɵtext(9, "Resource requests");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, ResourcesBlockComponent_div_10_Template, 3, 2, "div", 5)(11, ResourcesBlockComponent_ng_template_11_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const noResources_r4 = i0.ɵɵreference(6);
            const noRequestItems_r5 = i0.ɵɵreference(12);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.resources == null ? null : ctx.resources.length)("ngIfElse", noResources_r4);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.resourceRequests == null ? null : ctx.resourceRequests.length)("ngIfElse", noRequestItems_r5);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourcesBlockComponent, [{
        type: Component,
        args: [{ selector: 'app-resources-block', template: "<div class=\"resources-block kh-card\">\n  <div class=\"resources-block__header\">\n    <h2 class=\"kh-section-title\">Resources</h2>\n  </div>\n\n  <div *ngIf=\"resources?.length; else noResources\">\n    <ul class=\"resources-block__list\">\n      <li *ngFor=\"let resource of resources; trackBy: trackByResource\" class=\"resources-block__item\">\n        <div>\n          <strong>{{ resource?.name ?? 'Unnamed resource' }}</strong>\n          <p>{{ resource?.resourceType ?? 'UNKNOWN' }} \u00B7 Shared by {{ resource?.ownerUserName ?? 'Unknown owner' }}</p>\n          <p>Status: {{ resource?.availabilityStatus ?? 'UNKNOWN' }}<span *ngIf=\"resource?.quantity != null\"> \u00B7 Qty: {{ resource?.quantity }}</span></p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <ng-template #noResources>\n    <div class=\"resources-block__empty\">No shared resources yet.</div>\n  </ng-template>\n\n  <div class=\"resources-block__section\">\n    <h3>Resource requests</h3>\n    <div *ngIf=\"resourceRequests?.length; else noRequestItems\">\n      <ul class=\"resource-requests-list\">\n        <li *ngFor=\"let request of resourceRequests; trackBy: trackByRequest\" class=\"resource-requests-list__item\">\n          <div>\n            <strong>{{ request?.title ?? ('Request #' + request?.id) }}</strong>\n            <p>{{ request?.requesterUserName ?? 'Unknown requester' }} \u00B7 {{ request?.resourceType ?? 'UNKNOWN' }}</p>\n            <p>Urgency: {{ request?.urgency ?? 'MEDIUM' }}</p>\n          </div>\n          <span class=\"kh-badge\" [ngClass]=\"resourceRequestBadgeClass(request?.status ?? 'OPEN')\">{{ request?.status ?? 'OPEN' }}</span>\n        </li>\n      </ul>\n    </div>\n    <ng-template #noRequestItems>\n      <div class=\"resources-block__empty\">No resource requests yet.</div>\n    </ng-template>\n  </div>\n</div>\n", styles: ["/* Resources Block Styles */"] }]
    }], null, { resources: [{
            type: Input
        }], resourceRequests: [{
            type: Input
        }], role: [{
            type: Input
        }], canCreateResource: [{
            type: Input
        }], canRequestResource: [{
            type: Input
        }], createResource: [{
            type: Output
        }], createResourceRequest: [{
            type: Output
        }], updateResourceRequestStatus: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResourcesBlockComponent, { className: "ResourcesBlockComponent", filePath: "app\\features\\collaboration\\ResourcesBlock\\ResourcesBlock.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ResourcesBlock.component.js.map