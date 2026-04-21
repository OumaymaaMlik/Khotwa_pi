import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollaborationCreateComponent } from './collaboration-create/collaboration-create.component';
import { CollaborationDetailComponent } from './collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from './collaboration-list/collaboration-list.component';
import { CollaborationRequestsComponent } from './collaboration-requests/collaboration-requests.component';
import { CollaborationSentRequestsPageComponent } from './collaboration-sent-requests-page/collaboration-sent-requests-page.component';
import { CollaborationMyCollaborationsPageComponent } from './collaboration-my-collaborations-page/collaboration-my-collaborations-page.component';
import { CollaborationCardComponent } from './collaboration-card/collaboration-card.component';
import { MembersBlockComponent } from './members-block/members-block.component';
import { CollaborationActionsComponent } from './collaboration-actions/collaboration-actions.component';
import { RequestsBlockComponent } from './RequestsBlock/RequestsBlock.component';
import { ResourcesBlockComponent } from './ResourcesBlock/ResourcesBlock.component';
import { MarketingBlockComponent } from './MarketingBlock/MarketingBlock.component';
import { ProjectContextCardComponent } from './project-context-card/project-context-card.component';
import * as i0 from "@angular/core";
export class CollaborationModule {
    static { this.ɵfac = function CollaborationModule_Factory(t) { return new (t || CollaborationModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CollaborationModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CollaborationCreateComponent,
                    CollaborationDetailComponent,
                    CollaborationListComponent,
                    CollaborationRequestsComponent,
                    CollaborationSentRequestsPageComponent,
                    CollaborationMyCollaborationsPageComponent,
                    CollaborationCardComponent,
                    MembersBlockComponent,
                    CollaborationActionsComponent,
                    RequestsBlockComponent,
                    ResourcesBlockComponent,
                    MarketingBlockComponent,
                    ProjectContextCardComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule
                ],
                exports: [
                    CollaborationCreateComponent,
                    CollaborationDetailComponent,
                    CollaborationListComponent,
                    CollaborationRequestsComponent,
                    CollaborationSentRequestsPageComponent,
                    CollaborationMyCollaborationsPageComponent,
                    CollaborationCardComponent,
                    MembersBlockComponent,
                    CollaborationActionsComponent,
                    RequestsBlockComponent,
                    ResourcesBlockComponent,
                    MarketingBlockComponent,
                    ProjectContextCardComponent,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CollaborationModule, { declarations: [CollaborationCreateComponent,
        CollaborationDetailComponent,
        CollaborationListComponent,
        CollaborationRequestsComponent,
        CollaborationSentRequestsPageComponent,
        CollaborationMyCollaborationsPageComponent,
        CollaborationCardComponent,
        MembersBlockComponent,
        CollaborationActionsComponent,
        RequestsBlockComponent,
        ResourcesBlockComponent,
        MarketingBlockComponent,
        ProjectContextCardComponent], imports: [CommonModule,
        FormsModule,
        RouterModule], exports: [CollaborationCreateComponent,
        CollaborationDetailComponent,
        CollaborationListComponent,
        CollaborationRequestsComponent,
        CollaborationSentRequestsPageComponent,
        CollaborationMyCollaborationsPageComponent,
        CollaborationCardComponent,
        MembersBlockComponent,
        CollaborationActionsComponent,
        RequestsBlockComponent,
        ResourcesBlockComponent,
        MarketingBlockComponent,
        ProjectContextCardComponent] }); })();
//# sourceMappingURL=collaboration.module.js.map