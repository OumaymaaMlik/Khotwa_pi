import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { LayoutComponent } from '../../layout/layout.component';

import { AdminDashboardComponent }    from './dashboard/dashboard.component';
import { AdminProjetsComponent }       from './projets/projets.component';
import { AdminPlanningComponent }      from './planning/planning.component';
import { AdminMessagesComponent }      from './messages/messages.component';
import { AdminBibliothequeComponent }  from './bibliotheque/bibliotheque.component';
import { AdminUtilisateursComponent }  from './utilisateurs/utilisateurs.component';
import { AdminEvenementsComponent }    from './evenements/evenements.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AdminTalentComponent }        from './talent/talent.component';
import { AdminNotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../../shared/shared.module';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: AdminDashboardComponent },
      { path: 'projets',      component: AdminProjetsComponent },
      { path: 'planning',     component: AdminPlanningComponent },
      { path: 'messages',     component: AdminMessagesComponent },
      { path: 'bibliotheque', component: AdminBibliothequeComponent },
      { path: 'utilisateurs', component: AdminUtilisateursComponent },
      { path: 'evenements',   component: AdminEvenementsComponent },
      { path: 'subcriptions',   redirectTo: 'subscriptions', pathMatch: 'full' },
      { path: 'subscriptions',  component: SubscriptionsComponent },
      { path: 'talent',       component: AdminTalentComponent },
      { path: 'notifications', component: AdminNotificationsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent, AdminProjetsComponent, AdminPlanningComponent,
    AdminMessagesComponent, AdminBibliothequeComponent, AdminUtilisateursComponent,
    AdminEvenementsComponent, SubscriptionsComponent,
    AdminTalentComponent,AdminNotificationsComponent
  ],
  imports: [CommonModule, FormsModule,SharedModule, LayoutModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
