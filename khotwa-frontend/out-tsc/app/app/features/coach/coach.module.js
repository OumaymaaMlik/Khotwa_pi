import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutCoachModule } from '../../layout-coach/layout-coach.module';
import { LayoutCoachComponent } from '../../layout-coach/layout-coach.component';
import { CollaborationModule } from '../collaboration/collaboration.module';
import { CollaborationDetailComponent } from '../collaboration/collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from '../collaboration/collaboration-list/collaboration-list.component';
import { CoachDashboardComponent } from './dashboard/dashboard.component';
import { CoachProjetsComponent } from './projets/projets.component';
import { CoachStartupsComponent } from './startups/startups.component';
import { CoachValidationsComponent } from './validations/validations.component';
import { CoachMessagesComponent } from './messages/messages.component';
import { CoachProgressionsComponent } from './progressions/progressions.component';
import { CoachBibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { CoachTalentComponent } from './talent/talent.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: LayoutCoachComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: CoachDashboardComponent },
            { path: 'collaborations', component: CollaborationListComponent },
            { path: 'collaborations/:id', component: CollaborationDetailComponent },
            { path: 'projets', component: CoachProjetsComponent },
            { path: 'startups', component: CoachStartupsComponent },
            { path: 'validations', component: CoachValidationsComponent },
            { path: 'messages', component: CoachMessagesComponent },
            { path: 'bibliotheque', component: CoachBibliothequeComponent },
            { path: 'progressions', component: CoachProgressionsComponent },
            { path: 'talent', component: CoachTalentComponent },
        ],
    },
];
export class CoachModule {
    static { this.ɵfac = function CoachModule_Factory(t) { return new (t || CoachModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoachModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule,
            CollaborationModule,
            LayoutCoachModule,
            RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoachModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CoachDashboardComponent, CoachProjetsComponent, CoachStartupsComponent,
                    CoachValidationsComponent, CoachMessagesComponent,
                    CoachBibliothequeComponent, CoachProgressionsComponent, CoachTalentComponent,
                ],
                imports: [
                    CommonModule, FormsModule,
                    CollaborationModule,
                    LayoutCoachModule,
                    RouterModule.forChild(routes),
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoachModule, { declarations: [CoachDashboardComponent, CoachProjetsComponent, CoachStartupsComponent,
        CoachValidationsComponent, CoachMessagesComponent,
        CoachBibliothequeComponent, CoachProgressionsComponent, CoachTalentComponent], imports: [CommonModule, FormsModule,
        CollaborationModule,
        LayoutCoachModule, i1.RouterModule] }); })();
//# sourceMappingURL=coach.module.js.map