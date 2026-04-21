import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ProjectContextCardComponent {
    projectStatusClass(status) {
        switch (status) {
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
    static { this.ɵfac = function ProjectContextCardComponent_Factory(t) { return new (t || ProjectContextCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectContextCardComponent, selectors: [["app-project-context-card"]], inputs: { projectContext: "projectContext", role: "role" }, decls: 18, vars: 8, consts: [[1, "project-context-card", "kh-card"], [1, "project-context-card__header"], [1, "kh-section-title"], [1, "project-context-card__owner"], [1, "kh-badge", 3, "ngClass"], [1, "project-context-card__description"], [1, "project-context-card__summary"], [1, "project-context-card__tag"]], template: function ProjectContextCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p", 5);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 6)(12, "span", 7);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 7);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 7);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            let tmp_7_0;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate((tmp_0_0 = ctx.projectContext == null ? null : ctx.projectContext.projectName) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Project overview");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Owned by ", (tmp_1_0 = ctx.projectContext == null ? null : ctx.projectContext.projectOwnerName) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "Unknown owner", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.projectStatusClass((tmp_2_0 = ctx.projectContext == null ? null : ctx.projectContext.projectStatus) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ""));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", (tmp_3_0 = ctx.projectContext == null ? null : ctx.projectContext.projectStatus) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "UNKNOWN", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", (tmp_4_0 = ctx.projectContext == null ? null : ctx.projectContext.projectDescription) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "No project description available.", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Collaborations: ", (tmp_5_0 = ctx.projectContext == null ? null : ctx.projectContext.collaborationContext == null ? null : ctx.projectContext.collaborationContext.totalCollaborations) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Resources: ", (tmp_6_0 = ctx.projectContext == null ? null : ctx.projectContext.resourceContext == null ? null : ctx.projectContext.resourceContext.totalResources) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Marketing tasks: ", (tmp_7_0 = ctx.projectContext == null ? null : ctx.projectContext.marketingContext == null ? null : ctx.projectContext.marketingContext.totalTasks) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0, " ");
        } }, dependencies: [i1.NgClass] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectContextCardComponent, [{
        type: Component,
        args: [{ selector: 'app-project-context-card', template: "<div class=\"project-context-card kh-card\">\n  <div class=\"project-context-card__header\">\n    <div>\n      <h2 class=\"kh-section-title\">{{ projectContext?.projectName ?? 'Project overview' }}</h2>\n      <p class=\"project-context-card__owner\">Owned by {{ projectContext?.projectOwnerName ?? 'Unknown owner' }}</p>\n    </div>\n    <span class=\"kh-badge\" [ngClass]=\"projectStatusClass(projectContext?.projectStatus ?? '')\">\n      {{ projectContext?.projectStatus ?? 'UNKNOWN' }}\n    </span>\n  </div>\n\n  <p class=\"project-context-card__description\">\n    {{ projectContext?.projectDescription ?? 'No project description available.' }}\n  </p>\n\n  <div class=\"project-context-card__summary\">\n    <span class=\"project-context-card__tag\">\n      Collaborations: {{ projectContext?.collaborationContext?.totalCollaborations ?? 0 }}\n    </span>\n    <span class=\"project-context-card__tag\">\n      Resources: {{ projectContext?.resourceContext?.totalResources ?? 0 }}\n    </span>\n    <span class=\"project-context-card__tag\">\n      Marketing tasks: {{ projectContext?.marketingContext?.totalTasks ?? 0 }}\n    </span>\n  </div>\n</div>\n", styles: ["/* Project Context Card Styles */"] }]
    }], null, { projectContext: [{
            type: Input
        }], role: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProjectContextCardComponent, { className: "ProjectContextCardComponent", filePath: "app\\features\\collaboration\\project-context-card\\project-context-card.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=project-context-card.component.js.map