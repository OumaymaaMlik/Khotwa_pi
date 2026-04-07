import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutCoachModule } from '../../layout-coach/layout-coach.module';
import { LayoutCoachComponent } from '../../layout-coach/layout-coach.component';

import { CoachDashboardComponent }    from './dashboard/dashboard.component';
import { CoachProjetsComponent }       from './projets/projets.component';
import { CoachStartupsComponent }      from './startups/startups.component';
import { CoachValidationsComponent }   from './validations/validations.component';
import { CoachPlanningComponent }      from './planning/planning.component';
import { CoachMessagesComponent }      from './messages/messages.component';
import { CoachProgresssComponent }  from './progressions/progressions.component';
import { CoachBibliothequeComponent }  from './bibliotheque/bibliotheque.component';
import { CoachTalentComponent }        from './talent/talent.component';
import { CoachSettingsComponent }      from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCoachComponent,   // ← nouveau layout coach
    children: [
      { path: '',             redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: CoachDashboardComponent    },
      { path: 'projets',      component: CoachProjetsComponent      },
      { path: 'startups',     component: CoachStartupsComponent     },
      { path: 'validations',  component: CoachValidationsComponent  },
      { path: 'planning',     component: CoachPlanningComponent     },
      { path: 'messages',     component: CoachMessagesComponent     },
      { path: 'bibliotheque', component: CoachBibliothequeComponent },
      { path: 'progressions', component: CoachProgresssComponent },
      { path: 'talent',       component: CoachTalentComponent       },
      { path: 'settings',     component: CoachSettingsComponent     },
    ],
  },
];

@NgModule({
  declarations: [
    CoachDashboardComponent, CoachProjetsComponent, CoachStartupsComponent,
    CoachValidationsComponent, CoachPlanningComponent, CoachMessagesComponent,
    CoachBibliothequeComponent, CoachProgresssComponent, CoachTalentComponent,
    CoachSettingsComponent,
  ],
  imports: [
    CommonModule, FormsModule, SharedModule,
    LayoutCoachModule,
    RouterModule.forChild(routes),
  ],
})
export class CoachModule {}
