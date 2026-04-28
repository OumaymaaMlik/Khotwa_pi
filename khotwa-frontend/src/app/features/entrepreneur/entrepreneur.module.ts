import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutEntrepreneurModule } from '../../layout-entrepreneur/layout-entrepreneur.module';
import { LayoutEntrepreneurComponent } from '../../layout-entrepreneur/layout-entrepreneur.component';

import { EntrepreneurDashboardComponent }    from './dashboard/dashboard.component';
import { EntrepreneurProjetsComponent }      from './projets/projets.component';
import { EntrepreneurWorkflowsComponent }    from './workflows/workflows.component';
import { EntrepreneurPlanningComponent }     from './planning/planning.component';
import { EntrepreneurMessagesComponent }     from './messages/messages.component';
import { EntrepreneurBibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { EntrepreneurProgressionsComponent } from './progressions/progressions.component';
import { EntrepreneurTalentComponent }       from './talent/talent.component';
import { EntrepreneurNotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent }                  from './profile/profile.component';
import { EntrepreneurAccountPageComponent }  from './account-page/account-page.component';
import { EntrepreneurEvenementsComponent }   from './Events/events.component';

// ── Composants IA ──────────────────────────────────────────
import { AiSearchComponent }  from '../../ressourceAi/ai-search/ai-search.component';
import { AiChatbotComponent } from '../../ressourceAi/ai-chatbot/ai-chatbot.component';
import { AiResumeComponent }  from '../../ressourceAi/ai-resume/ai-resume.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutEntrepreneurComponent,
    children: [
      { path: '',              redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',     component: EntrepreneurDashboardComponent   },
      { path: 'projets',       component: EntrepreneurProjetsComponent      },
      { path: 'projets/new',   component: EntrepreneurProjetsComponent, data: { createMode: true } },
      { path: 'workflows',     component: EntrepreneurWorkflowsComponent    },
      { path: 'planning',      component: EntrepreneurPlanningComponent     },
      { path: 'messages',      component: EntrepreneurMessagesComponent     },
      { path: 'bibliotheque',  component: EntrepreneurBibliothequeComponent },
      { path: 'talent',        component: EntrepreneurTalentComponent       },
      { path: 'progressions',  component: EntrepreneurProgressionsComponent },
      { path: 'notifications', component: EntrepreneurNotificationsComponent },
      { path: 'profile',       component: ProfileComponent                  },
      { path: 'account',       component: EntrepreneurAccountPageComponent  },
      { path: 'evenements',    component: EntrepreneurEvenementsComponent   },
      { path: 'contact',       loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
    ],
  },
];

@NgModule({
  declarations: [
    EntrepreneurDashboardComponent,
    EntrepreneurProjetsComponent,
    EntrepreneurWorkflowsComponent,
    EntrepreneurPlanningComponent,
    EntrepreneurMessagesComponent,
    EntrepreneurBibliothequeComponent,
    EntrepreneurTalentComponent,
    EntrepreneurProgressionsComponent,
    ProfileComponent,
    EntrepreneurNotificationsComponent,
    EntrepreneurAccountPageComponent,
    EntrepreneurEvenementsComponent,
    // ── IA ──
    AiSearchComponent,
    AiChatbotComponent,
    AiResumeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LayoutEntrepreneurModule,
    RouterModule.forChild(routes),
  ],
})
export class EntrepreneurModule {}
