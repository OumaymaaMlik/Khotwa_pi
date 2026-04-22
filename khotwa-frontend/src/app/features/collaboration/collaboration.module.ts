import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CollaborationCreateComponent } from './collaboration-create/collaboration-create.component';
import { CollaborationDetailComponent } from './collaboration-detail/collaboration-detail.component';
import { CollaborationListComponent } from './collaboration-list/collaboration-list.component';
import { CollaborationSentRequestsPageComponent } from './collaboration-sent-requests-page/collaboration-sent-requests-page.component';
import { CollaborationMyCollaborationsPageComponent } from './collaboration-my-collaborations-page/collaboration-my-collaborations-page.component';
import { CollaborationCardComponent } from './collaboration-card/collaboration-card.component';
import { MembersBlockComponent } from './members-block/members-block.component';
import { CollaborationActionsComponent } from './collaboration-actions/collaboration-actions.component';
import { RequestsBlockComponent } from './RequestsBlock/RequestsBlock.component';
import { ResourcesBlockComponent } from './ResourcesBlock/ResourcesBlock.component';
import { MarketingBlockComponent } from './MarketingBlock/MarketingBlock.component';
import { ProjectContextCardComponent } from './project-context-card/project-context-card.component';

@NgModule({
  declarations: [
    CollaborationCreateComponent,
    CollaborationDetailComponent,
    CollaborationListComponent,
    CollaborationSentRequestsPageComponent,
    CollaborationMyCollaborationsPageComponent,
    CollaborationCardComponent,
    MembersBlockComponent,
    CollaborationActionsComponent,
    RequestsBlockComponent,
    ResourcesBlockComponent,
    MarketingBlockComponent,
    ProjectContextCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CollaborationCreateComponent,
    CollaborationDetailComponent,
    CollaborationListComponent,
    CollaborationSentRequestsPageComponent,
    CollaborationMyCollaborationsPageComponent,
    CollaborationCardComponent,
    MembersBlockComponent,
    CollaborationActionsComponent,
    RequestsBlockComponent,
    ResourcesBlockComponent,
    MarketingBlockComponent,
    ProjectContextCardComponent,
  ],
})
export class CollaborationModule {}
