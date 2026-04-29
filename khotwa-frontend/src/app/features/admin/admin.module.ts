import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { LayoutComponent } from '../../layout/layout.component';
import { SharedModule } from '../../shared/shared.module';

import { AdminDashboardComponent }    from './dashboard/dashboard.component';
import { AdminProjetsComponent }       from './projets/projets.component';
import { AdminMessagesComponent }      from './messages/messages.component';
import { AdminBibliothequeComponent }  from './bibliotheque/bibliotheque.component';
import { AdminUtilisateursComponent }  from './utilisateurs/utilisateurs.component';
import { AdminEvenementsComponent }    from './evenements/evenements.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AdminTalentComponent }        from './talent/talent.component';
import { AdminNotificationsComponent } from './notifications/notifications.component';
import { AdminFeedbacksComponent } from './feedbacks/feedbacks.component';
import { WeeklyCollaborationReportComponent } from './weekly-collaboration-report/weekly-collaboration-report.component';
import { CollaborationModule } from '../collaboration/collaboration.module';
import { CollaborationListComponent } from '../collaboration/collaboration-list/collaboration-list.component';
import { CollaborationDetailComponent } from '../collaboration/collaboration-detail/collaboration-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: AdminDashboardComponent },
      { path: 'projets',      component: AdminProjetsComponent },
      { path: 'messages',     component: AdminMessagesComponent },
      { path: 'bibliotheque', component: AdminBibliothequeComponent },
      { path: 'utilisateurs', component: AdminUtilisateursComponent },
      { path: 'evenements',   component: AdminEvenementsComponent },
      { path: 'subcriptions',   redirectTo: 'subscriptions', pathMatch: 'full' },
      { path: 'subscriptions',  component: SubscriptionsComponent },
      { path: 'talent',       component: AdminTalentComponent },
      { path: 'notifications', component: AdminNotificationsComponent },
      { path: 'feedbacks', component: AdminFeedbacksComponent },
      { path: 'weekly-collaboration-report', component: WeeklyCollaborationReportComponent },
      { path: 'collaborations', component: CollaborationListComponent },
      { path: 'collaborations/:id', component: CollaborationDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent, AdminProjetsComponent,
    AdminMessagesComponent, AdminBibliothequeComponent, AdminUtilisateursComponent,
    AdminEvenementsComponent, SubscriptionsComponent,
    AdminTalentComponent,AdminNotificationsComponent ,AdminFeedbacksComponent,
    WeeklyCollaborationReportComponent,
  ],
  imports: [CommonModule, FormsModule, LayoutModule, SharedModule, CollaborationModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
