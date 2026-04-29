import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutCoachModule } from '../../layout-coach/layout-coach.module';
import { LayoutCoachComponent } from '../../layout-coach/layout-coach.component';
import { CollaborationModule } from '../collaboration/collaboration.module';
import { CollaborationDetailComponent } from '../collaboration/collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from '../collaboration/collaboration-list/collaboration-list.component';
import { CollaborationSentRequestsPageComponent } from '../collaboration/collaboration-sent-requests-page/collaboration-sent-requests-page.component';

import { CoachDashboardComponent }    from './dashboard/dashboard.component';
import { CoachProjetsComponent }       from './projets/projets.component';
import { CoachStartupsComponent }      from './startups/startups.component';
import { CoachValidationsComponent }   from './validations/validations.component';
import { CoachMessagesComponent }      from './messages/messages.component';
import { CoachProgressionsComponent }  from './progressions/progressions.component';
import { CoachBibliothequeComponent }  from './bibliotheque/bibliotheque.component';
import { CoachTalentComponent }        from './talent/talent.component';
import { CoachSettingsComponent }      from './settings/settings.component';
import { CoachAccountPageComponent }   from './account-page/account-page.component';
import { CoachEventsComponent }        from './coach-events/coach-events.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCoachComponent,   // ← nouveau layout coach
    children: [
      { path: '',             redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: CoachDashboardComponent    },
      { path: 'collaborations', component: CollaborationListComponent },
      { path: 'collaborations/requests', component: CollaborationSentRequestsPageComponent },
      { path: 'collaborations/:id', component: CollaborationDetailComponent },
      { path: 'projets',      component: CoachProjetsComponent      },
      { path: 'startups',     component: CoachStartupsComponent     },
      { path: 'validations',  component: CoachValidationsComponent  },
      { path: 'messages',     component: CoachMessagesComponent     },
      { path: 'bibliotheque', component: CoachBibliothequeComponent },
      { path: 'progressions', component: CoachProgressionsComponent },
      { path: 'talent',       component: CoachTalentComponent       },
      { path: 'settings',     component: CoachSettingsComponent     },
      { path: 'account',      component: CoachAccountPageComponent  },
      { path: 'events',       component: CoachEventsComponent       },
    ],
  },
];

@NgModule({
  declarations: [
    CoachDashboardComponent, CoachProjetsComponent, CoachStartupsComponent,
    CoachValidationsComponent, CoachMessagesComponent,
    CoachBibliothequeComponent, CoachProgressionsComponent, CoachTalentComponent,
    CoachSettingsComponent, CoachAccountPageComponent, CoachEventsComponent,
  ],
  imports: [
    CommonModule, FormsModule,CollaborationModule, SharedModule,
    LayoutCoachModule,
    RouterModule.forChild(routes),
  ],
})
export class CoachModule {}
