import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutEntrepreneurModule } from '../../layout-entrepreneur/layout-entrepreneur.module';
import { LayoutEntrepreneurComponent } from '../../layout-entrepreneur/layout-entrepreneur.component';

import { EntrepreneurDashboardComponent }   from './dashboard/dashboard.component';
import { EntrepreneurProjetsComponent }      from './projets/projets.component';
import { EntrepreneurWorkflowsComponent }    from './workflows/workflows.component';
import { EntrepreneurPlanningComponent }     from './planning/planning.component';
import { EntrepreneurMessagesComponent }     from './messages/messages.component';
import { EntrepreneurBibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { EntrepreneurProgressionsComponent } from './progressions/progressions.component';
import { EntrepreneurTalentComponent }       from './talent/talent.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutEntrepreneurComponent,   // ← nouveau layout entrepreneur
    children: [
      { path: '',             redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    component: EntrepreneurDashboardComponent  },
      { path: 'projets',      component: EntrepreneurProjetsComponent     },
      { path: 'workflows',    component: EntrepreneurWorkflowsComponent   },
      { path: 'planning',     component: EntrepreneurPlanningComponent    },
      { path: 'messages',     component: EntrepreneurMessagesComponent    },
      { path: 'bibliotheque', component: EntrepreneurBibliothequeComponent},
      { path: 'talent',       component: EntrepreneurTalentComponent      },
      { path: 'progressions', component: EntrepreneurProgressionsComponent},
    ],
  },
];

@NgModule({
  declarations: [
    EntrepreneurDashboardComponent, EntrepreneurProjetsComponent,
    EntrepreneurWorkflowsComponent, EntrepreneurPlanningComponent,
    EntrepreneurMessagesComponent,  EntrepreneurBibliothequeComponent,
    EntrepreneurTalentComponent,    EntrepreneurProgressionsComponent,
  ],
  imports: [
    CommonModule, FormsModule, SharedModule,
    LayoutEntrepreneurModule,
    RouterModule.forChild(routes),
  ],
})
export class EntrepreneurModule {}
