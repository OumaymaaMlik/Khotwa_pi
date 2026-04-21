import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { LayoutComponent } from '../../layout/layout.component';
import { CollaborationModule } from '../collaboration/collaboration.module';
import { CollaborationDetailComponent } from '../collaboration/collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from '../collaboration/collaboration-list/collaboration-list.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminProjetsComponent } from './projets/projets.component';
import { AdminMessagesComponent } from './messages/messages.component';
import { AdminBibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { AdminUtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AdminEvenementsComponent } from './evenements/evenements.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AdminTalentComponent } from './talent/talent.component';
import { CollaborationsOverviewComponent } from './collaborations-overview/collaborations-overview.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: 'collaborations', component: CollaborationListComponent },
            { path: 'collaborations/:id', component: CollaborationDetailComponent },
            { path: 'projets', component: AdminProjetsComponent },
            { path: 'messages', component: AdminMessagesComponent },
            { path: 'bibliotheque', component: AdminBibliothequeComponent },
            { path: 'utilisateurs', component: AdminUtilisateursComponent },
            { path: 'evenements', component: AdminEvenementsComponent },
            { path: 'subscriptions', component: SubscriptionsComponent },
            { path: 'talent', component: AdminTalentComponent },
        ],
    },
];
export class AdminModule {
    static { this.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AdminModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, LayoutModule, CollaborationModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AdminDashboardComponent, AdminProjetsComponent,
                    AdminMessagesComponent, AdminBibliothequeComponent, AdminUtilisateursComponent,
                    AdminEvenementsComponent, SubscriptionsComponent, AdminTalentComponent,
                    CollaborationsOverviewComponent,
                ],
                imports: [CommonModule, FormsModule, LayoutModule, CollaborationModule, RouterModule.forChild(routes)],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AdminModule, { declarations: [AdminDashboardComponent, AdminProjetsComponent,
        AdminMessagesComponent, AdminBibliothequeComponent, AdminUtilisateursComponent,
        AdminEvenementsComponent, SubscriptionsComponent, AdminTalentComponent,
        CollaborationsOverviewComponent], imports: [CommonModule, FormsModule, LayoutModule, CollaborationModule, i1.RouterModule] }); })();
//# sourceMappingURL=admin.module.js.map