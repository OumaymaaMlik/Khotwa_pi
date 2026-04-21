import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutEntrepreneurModule } from '../../layout-entrepreneur/layout-entrepreneur.module';
import { LayoutEntrepreneurComponent } from '../../layout-entrepreneur/layout-entrepreneur.component';
import { CollaborationModule } from '../collaboration/collaboration.module';
import { CollaborationMyCollaborationsPageComponent } from '../collaboration/collaboration-my-collaborations-page/collaboration-my-collaborations-page.component';
import { CollaborationSentRequestsPageComponent } from '../collaboration/collaboration-sent-requests-page/collaboration-sent-requests-page.component';
import { CollaborationCreateComponent } from '../collaboration/collaboration-create/collaboration-create.component';
import { CollaborationDetailComponent } from '../collaboration/collaboration-detail/collaboration-detail.component';

import { EntrepreneurDashboardComponent }   from './dashboard/dashboard.component';
import { EntrepreneurProjetsComponent }      from './projets/projets.component';
import { EntrepreneurWorkflowsComponent }    from './workflows/workflows.component';
import { EntrepreneurMessagesComponent }     from './messages/messages.component';
import { EntrepreneurBibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { EntrepreneurProgressionsComponent } from './progressions/progressions.component';
import { EntrepreneurTalentComponent }       from './talent/talent.component';
import { ProfileComponent }                  from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutEntrepreneurComponent,
    children: [
      { path: '',             redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: EntrepreneurDashboardComponent },
      { path: 'collaborations', component: CollaborationMyCollaborationsPageComponent },
      { path: 'collaborations/requests', component: CollaborationSentRequestsPageComponent },
      { path: 'collaborations/create', component: CollaborationCreateComponent },
      { path: 'collaborations/:id', component: CollaborationDetailComponent },
      { path: 'projets',      component: EntrepreneurProjetsComponent },
      { path: 'workflows',    component: EntrepreneurWorkflowsComponent },
      { path: 'messages',     component: EntrepreneurMessagesComponent },
      { path: 'bibliotheque', component: EntrepreneurBibliothequeComponent },
      { path: 'talent',       component: EntrepreneurTalentComponent },
      { path: 'progressions', component: EntrepreneurProgressionsComponent },
      { path: 'profile',      component: ProfileComponent },
    ],
  },
];

@NgModule({
  declarations: [
    EntrepreneurDashboardComponent, EntrepreneurProjetsComponent,
    EntrepreneurWorkflowsComponent,
    EntrepreneurMessagesComponent,  EntrepreneurBibliothequeComponent,
    EntrepreneurTalentComponent,    EntrepreneurProgressionsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule, FormsModule,
    CollaborationModule,
    LayoutEntrepreneurModule,
    RouterModule.forChild(routes),
  ],
})
export class EntrepreneurModule {}