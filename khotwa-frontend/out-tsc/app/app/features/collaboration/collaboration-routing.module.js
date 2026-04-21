import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollaborationCreateComponent } from './collaboration-create/collaboration-create.component';
import { CollaborationDetailComponent } from './collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from './collaboration-list/collaboration-list.component';
import { CollaborationMyCollaborationsPageComponent } from './collaboration-my-collaborations-page/collaboration-my-collaborations-page.component';
import { CollaborationSentRequestsPageComponent } from './collaboration-sent-requests-page/collaboration-sent-requests-page.component';
import * as i0 from "@angular/core";
export const entrepreneurCollaborationRoutes = [
    { path: '', component: CollaborationMyCollaborationsPageComponent },
    { path: 'create', component: CollaborationCreateComponent },
    { path: 'requests', component: CollaborationSentRequestsPageComponent },
    { path: ':id', component: CollaborationDetailComponent },
];
export const adminCollaborationRoutes = [
    { path: '', component: CollaborationListComponent },
    { path: ':id', component: CollaborationDetailComponent },
];
export const coachCollaborationRoutes = [
    { path: '', component: CollaborationListComponent },
    { path: ':id', component: CollaborationDetailComponent },
];
export class CollaborationRoutingModule {
    static { this.ɵfac = function CollaborationRoutingModule_Factory(t) { return new (t || CollaborationRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CollaborationRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CollaborationRoutingModule, { imports: [RouterModule] }); })();
//# sourceMappingURL=collaboration-routing.module.js.map