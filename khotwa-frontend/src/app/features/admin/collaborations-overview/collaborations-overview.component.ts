import { Component } from '@angular/core';
import { CollaborationListSummary } from '../../collaboration/collaboration-list/collaboration-list.component';

@Component({
  selector: 'app-collaborations-overview',
  templateUrl: './collaborations-overview.component.html',
  styleUrls: ['./collaborations-overview.component.css'],
})
export class CollaborationsOverviewComponent {
  summary: CollaborationListSummary = {
    totalCollaborations: 0,
    activeCollaborations: 0,
    suspendedCollaborations: 0,
    closedCollaborations: 0,
  };

  onSummaryChange(summary: CollaborationListSummary): void {
    this.summary = summary;
  }
}
