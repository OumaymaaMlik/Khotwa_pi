import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationCreateComponent } from './collaboration-create/collaboration-create.component';
import { CollaborationDetailComponent } from './collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from './collaboration-list/collaboration-list.component';
import { CollaborationMyCollaborationsPageComponent } from './collaboration-my-collaborations-page/collaboration-my-collaborations-page.component';
import { CollaborationSentRequestsPageComponent } from './collaboration-sent-requests-page/collaboration-sent-requests-page.component';

export const entrepreneurCollaborationRoutes: Routes = [
  { path: '', component: CollaborationMyCollaborationsPageComponent },
  { path: 'create', component: CollaborationCreateComponent },
  { path: 'requests', component: CollaborationSentRequestsPageComponent },
  { path: ':id', component: CollaborationDetailComponent },
];

export const adminCollaborationRoutes: Routes = [
  { path: '', component: CollaborationListComponent },
  { path: ':id', component: CollaborationDetailComponent },
];

export const coachCollaborationRoutes: Routes = [
  { path: '', component: CollaborationListComponent },
  { path: ':id', component: CollaborationDetailComponent },
];

@NgModule({
  imports: [RouterModule],
})
export class CollaborationRoutingModule {}