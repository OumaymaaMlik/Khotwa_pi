import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutEntrepreneurModule } from '../../layout-entrepreneur/layout-entrepreneur.module';
import { LayoutEntrepreneurComponent } from '../../layout-entrepreneur/layout-entrepreneur.component';

import { EntrepreneurDashboardComponent }  from './dashboard/dashboard.component';
import { EntrepreneurProjetsComponent }     from './projets/projets.component';
import { EntrepreneurWorkflowsComponent }   from './workflows/workflows.component';
import { EntrepreneurPlanningComponent }    from './planning/planning.component';
import { EntrepreneurMessagesComponent }    from './messages/messages.component';
import { EntrepreneurBibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { EntrepreneurTalentComponent }       from './talent/talent.component';
import { EntrepreneurNotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutEntrepreneurComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: EntrepreneurDashboardComponent },
      { path: 'projets',      component: EntrepreneurProjetsComponent },
      { path: 'workflows',    component: EntrepreneurWorkflowsComponent },
      { path: 'planning',     component: EntrepreneurPlanningComponent },
      { path: 'messages',     component: EntrepreneurMessagesComponent },
      { path: 'bibliotheque', component: EntrepreneurBibliothequeComponent },
      { path: 'talent',       component: EntrepreneurTalentComponent },
      { path: 'notifications', component: EntrepreneurNotificationsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    EntrepreneurDashboardComponent, EntrepreneurProjetsComponent, EntrepreneurWorkflowsComponent,
    EntrepreneurPlanningComponent, EntrepreneurMessagesComponent, EntrepreneurBibliothequeComponent,
    EntrepreneurTalentComponent, EntrepreneurNotificationsComponent,
  ],
  imports: [CommonModule, FormsModule, LayoutEntrepreneurModule, RouterModule.forChild(routes)],
})
export class EntrepreneurModule {}
