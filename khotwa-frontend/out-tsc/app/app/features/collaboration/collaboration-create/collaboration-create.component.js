import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "../../../core/services/collaboration.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function CollaborationCreateComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, " Only project owners can create collaborations. Please select an owned project to continue. ");
    i0.ɵɵelementEnd();
} }
function CollaborationCreateComponent_form_11_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", project_r3.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", project_r3.name, " ");
} }
function CollaborationCreateComponent_form_11_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", type_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r4);
} }
function CollaborationCreateComponent_form_11_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1, "Loading your projects...");
    i0.ɵɵelementEnd();
} }
function CollaborationCreateComponent_form_11_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1, "You don't have any projects yet. Create a project first to start collaborating.");
    i0.ɵɵelementEnd();
} }
function CollaborationCreateComponent_form_11_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.projectsError);
} }
function CollaborationCreateComponent_form_11_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1, "Project selection is required.");
    i0.ɵɵelementEnd();
} }
function CollaborationCreateComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11);
    i0.ɵɵlistener("ngSubmit", function CollaborationCreateComponent_form_11_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(1, "label")(2, "span");
    i0.ɵɵtext(3, "Your project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function CollaborationCreateComponent_form_11_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.model.projectId, $event) || (ctx_r1.model.projectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 13);
    i0.ɵɵtext(6, "Select a project");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CollaborationCreateComponent_form_11_option_7_Template, 2, 2, "option", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Collaboration type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function CollaborationCreateComponent_form_11_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.model.type, $event) || (ctx_r1.model.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(12, CollaborationCreateComponent_form_11_option_12_Template, 2, 2, "option", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, CollaborationCreateComponent_form_11_p_13_Template, 2, 0, "p", 16)(14, CollaborationCreateComponent_form_11_p_14_Template, 2, 0, "p", 16)(15, CollaborationCreateComponent_form_11_p_15_Template, 2, 1, "p", 8)(16, CollaborationCreateComponent_form_11_p_16_Template, 2, 0, "p", 8);
    i0.ɵɵelementStart(17, "button", 17);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.model.projectId);
    i0.ɵɵproperty("disabled", ctx_r1.projectsLoading || !ctx_r1.hasProjects);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.projects);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.model.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.types);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.projectsLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.projectsLoading && !ctx_r1.hasProjects);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.projectsError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.submitted && !ctx_r1.model.projectId && ctx_r1.hasProjects);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.projectsLoading || !ctx_r1.hasProjects);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading ? "Creating..." : "Create collaboration", " ");
} }
function CollaborationCreateComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function CollaborationCreateComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.success);
} }
export class CollaborationCreateComponent {
    constructor(auth, collaborationService, router) {
        this.auth = auth;
        this.collaborationService = collaborationService;
        this.router = router;
        this.model = {
            projectId: 0,
            type: 'TECHNICAL',
        };
        this.projects = [];
        this.created = null;
        this.loading = false;
        this.submitted = false;
        this.projectsLoading = false;
        this.error = '';
        this.success = '';
        this.projectsError = '';
        this.types = ['TECHNICAL', 'BUSINESS', 'MARKETING', 'FINANCIAL', 'STRATEGIC'];
    }
    ngOnInit() {
        if (this.auth.isEntrepreneur) {
            this.loadMyProjects();
        }
    }
    get rolePrefix() {
        if (this.auth.isAdmin)
            return '/khotwaadmin';
        if (this.auth.isCoach)
            return '/coach';
        return '/entrepreneur';
    }
    get canSubmit() {
        return this.auth.isEntrepreneur;
    }
    get hasProjects() {
        return this.projects.length > 0;
    }
    loadMyProjects() {
        this.projectsLoading = true;
        this.projectsError = '';
        this.collaborationService.getMyProjects()
            .pipe(finalize(() => { this.projectsLoading = false; }))
            .subscribe({
            next: (projects) => {
                this.projects = projects;
                if (projects.length && !this.model.projectId) {
                    this.model.projectId = projects[0].id;
                }
            },
            error: (err) => {
                this.projectsError = this.extractError(err);
            },
        });
    }
    submit() {
        this.submitted = true;
        this.error = '';
        this.success = '';
        if (!this.canSubmit) {
            this.error = 'Only entrepreneurs can create collaborations.';
            return;
        }
        if (!this.hasProjects || !this.model.projectId) {
            this.error = 'Select one of your projects to continue.';
            return;
        }
        this.loading = true;
        this.collaborationService.createCollaboration(this.model)
            .pipe(finalize(() => { this.loading = false; }))
            .subscribe({
            next: (collaboration) => {
                this.created = collaboration;
                this.success = 'Collaboration created successfully. Redirecting to details...';
                setTimeout(() => {
                    this.router.navigateByUrl(`${this.rolePrefix}/collaborations/${collaboration.id}`);
                }, 700);
            },
            error: (err) => {
                this.error = this.extractError(err);
            },
        });
    }
    extractError(err) {
        const error = err;
        return error.error?.message ?? error.message ?? 'An unexpected error occurred.';
    }
    static { this.ɵfac = function CollaborationCreateComponent_Factory(t) { return new (t || CollaborationCreateComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CollaborationService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationCreateComponent, selectors: [["app-collaboration-create"]], decls: 14, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--ghost", 3, "routerLink"], [1, "kh-card", "create-card"], ["class", "collab-readonly", 4, "ngIf"], ["class", "create-form", 3, "ngSubmit", 4, "ngIf"], ["class", "collab-readonly collab-readonly--error", 4, "ngIf"], ["class", "collab-readonly collab-readonly--success", 4, "ngIf"], [1, "collab-readonly"], [1, "create-form", 3, "ngSubmit"], ["name", "projectId", 3, "ngModelChange", "ngModel", "disabled"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "type", 3, "ngModelChange", "ngModel"], ["class", "collab-note", 4, "ngIf"], ["type", "submit", 1, "kh-btn", "kh-btn--primary", 3, "disabled"], [3, "ngValue"], [1, "collab-note"], [1, "collab-readonly", "collab-readonly--error"], [1, "collab-readonly", "collab-readonly--success"]], template: function CollaborationCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Create collaboration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Choose one of your projects, choose a type, and create.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4);
            i0.ɵɵtext(8, "Back to list");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5);
            i0.ɵɵtemplate(10, CollaborationCreateComponent_div_10_Template, 2, 0, "div", 6)(11, CollaborationCreateComponent_form_11_Template, 19, 12, "form", 7)(12, CollaborationCreateComponent_div_12_Template, 2, 1, "div", 8)(13, CollaborationCreateComponent_div_13_Template, 2, 1, "div", 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("routerLink", ctx.rolePrefix + "/collaborations");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.canSubmit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.canSubmit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.success);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i3.RouterLink], styles: [".create-card[_ngcontent-%COMP%] {\r\n  max-width: 640px;\r\n  padding: 24px;\r\n}\r\n\r\n.create-form[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 18px;\r\n}\r\n\r\n.create-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.create-form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: var(--text-secondary);\r\n  font-weight: 500;\r\n}\r\n\r\n.create-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .create-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--r-md);\r\n  padding: 10px 12px;\r\n  background: white;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s ease;\r\n}\r\n.create-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .create-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: var(--orange);\r\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.1);\r\n}\r\n\r\n.create-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\r\n  background: var(--bg-app);\r\n  color: var(--text-muted);\r\n}\r\n\r\n.collab-note[_ngcontent-%COMP%], .collab-readonly[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  line-height: 1.6;\r\n}\r\n\r\n.collab-readonly--error[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n.collab-readonly--success[_ngcontent-%COMP%] {\r\n  color: var(--green);\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationCreateComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-create', template: "<div class=\"page\">\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h1 class=\"kh-page-title\">Create collaboration</h1>\r\n      <p class=\"page-sub\">Choose one of your projects, choose a type, and create.</p>\r\n    </div>\r\n    <a [routerLink]=\"rolePrefix + '/collaborations'\" class=\"kh-btn kh-btn--ghost\">Back to list</a>\r\n  </div>\r\n\r\n  <div class=\"kh-card create-card\">\r\n    <div *ngIf=\"!canSubmit\" class=\"collab-readonly\">\r\n      Only project owners can create collaborations. Please select an owned project to continue.\r\n    </div>\r\n\r\n    <form *ngIf=\"canSubmit\" class=\"create-form\" (ngSubmit)=\"submit()\">\r\n      <label>\r\n        <span>Your project</span>\r\n        <select name=\"projectId\" [(ngModel)]=\"model.projectId\" [disabled]=\"projectsLoading || !hasProjects\">\r\n          <option [ngValue]=\"0\" disabled>Select a project</option>\r\n          <option *ngFor=\"let project of projects\" [ngValue]=\"project.id\">\r\n            {{ project.name }}\r\n          </option>\r\n        </select>\r\n      </label>\r\n\r\n      <label>\r\n        <span>Collaboration type</span>\r\n        <select name=\"type\" [(ngModel)]=\"model.type\">\r\n          <option *ngFor=\"let type of types\" [ngValue]=\"type\">{{ type }}</option>\r\n        </select>\r\n      </label>\r\n\r\n      <p *ngIf=\"projectsLoading\" class=\"collab-note\">Loading your projects...</p>\r\n      <p *ngIf=\"!projectsLoading && !hasProjects\" class=\"collab-note\">You don't have any projects yet. Create a project first to start collaborating.</p>\r\n      <p *ngIf=\"projectsError\" class=\"collab-readonly collab-readonly--error\">{{ projectsError }}</p>\r\n      <p *ngIf=\"submitted && !model.projectId && hasProjects\" class=\"collab-readonly collab-readonly--error\">Project selection is required.</p>\r\n\r\n      <button type=\"submit\" class=\"kh-btn kh-btn--primary\" [disabled]=\"loading || projectsLoading || !hasProjects\">\r\n        {{ loading ? 'Creating...' : 'Create collaboration' }}\r\n      </button>\r\n    </form>\r\n\r\n    <div *ngIf=\"error\" class=\"collab-readonly collab-readonly--error\">{{ error }}</div>\r\n    <div *ngIf=\"success\" class=\"collab-readonly collab-readonly--success\">{{ success }}</div>\r\n  </div>\r\n</div>", styles: [".create-card {\r\n  max-width: 640px;\r\n  padding: 24px;\r\n}\r\n\r\n.create-form {\r\n  display: grid;\r\n  gap: 18px;\r\n}\r\n\r\n.create-form label {\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.create-form span {\r\n  font-size: 13px;\r\n  color: var(--text-secondary);\r\n  font-weight: 500;\r\n}\r\n\r\n.create-form input,\r\n.create-form select {\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--r-md);\r\n  padding: 10px 12px;\r\n  background: white;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s ease;\r\n}\r\n.create-form input:focus,\r\n.create-form select:focus {\r\n  outline: none;\r\n  border-color: var(--orange);\r\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.1);\r\n}\r\n\r\n.create-form select:disabled {\r\n  background: var(--bg-app);\r\n  color: var(--text-muted);\r\n}\r\n\r\n.collab-note,\r\n.collab-readonly {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  line-height: 1.6;\r\n}\r\n\r\n.collab-readonly--error {\r\n  color: var(--red);\r\n}\r\n\r\n.collab-readonly--success {\r\n  color: var(--green);\r\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CollaborationService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationCreateComponent, { className: "CollaborationCreateComponent", filePath: "app\\features\\collaboration\\collaboration-create\\collaboration-create.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=collaboration-create.component.js.map