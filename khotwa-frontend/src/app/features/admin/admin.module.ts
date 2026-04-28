import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { LayoutComponent } from '../../layout/layout.component';
import { CollaborationModule } from '../collaboration/collaboration.module';
import { CollaborationDetailComponent } from '../collaboration/collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from '../collaboration/collaboration-list/collaboration-list.component';
import { CollaborationSentRequestsPageComponent } from '../collaboration/collaboration-sent-requests-page/collaboration-sent-requests-page.component';

import { AdminDashboardComponent }    from './dashboard/dashboard.component';
import { AdminProjetsComponent }       from './projets/projets.component';
import { AdminMessagesComponent }      from './messages/messages.component';
import { AdminBibliothequeComponent }  from './bibliotheque/bibliotheque.component';
import { AdminUtilisateursComponent }  from './utilisateurs/utilisateurs.component';
import { AdminEvenementsComponent }    from './evenements/evenements.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AdminTalentComponent }        from './talent/talent.component';
import { WeeklyCollaborationReportComponent } from './weekly-collaboration-report/weekly-collaboration-report.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: AdminDashboardComponent },
      { path: 'collaborations', component: CollaborationListComponent },
      {
        path: 'collaborations/weekly-report',
        component: WeeklyCollaborationReportComponent,
        data: { viewMode: 'weekly-report' },
      },
      {
        path: 'collaborations/ai-recommendations',
        component: WeeklyCollaborationReportComponent,
        data: { viewMode: 'ai-recommendations' },
      },
      { path: 'collaborations/requests', component: CollaborationSentRequestsPageComponent },
      { path: 'collaborations/:id', component: CollaborationDetailComponent },
      { path: 'collaboration-reports/weekly', redirectTo: 'collaborations/weekly-report', pathMatch: 'full' },
      { path: 'projets',      component: AdminProjetsComponent },
      { path: 'messages',     component: AdminMessagesComponent },
      { path: 'bibliotheque', component: AdminBibliothequeComponent },
      { path: 'utilisateurs', component: AdminUtilisateursComponent },
      { path: 'evenements',   component: AdminEvenementsComponent },
      { path: 'subscriptions',  component: SubscriptionsComponent },
      { path: 'talent',       component: AdminTalentComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent, AdminProjetsComponent,
    AdminMessagesComponent, AdminBibliothequeComponent, AdminUtilisateursComponent,
    AdminEvenementsComponent, SubscriptionsComponent, AdminTalentComponent,
    WeeklyCollaborationReportComponent,
  ],
  imports: [CommonModule, FormsModule, LayoutModule, CollaborationModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
