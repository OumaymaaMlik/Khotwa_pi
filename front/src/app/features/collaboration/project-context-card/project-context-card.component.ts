import { Component, Input } from '@angular/core';
import { ProjectCollaborationContext } from '../../../core/models/project-collaboration-context.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-project-context-card',
  templateUrl: './project-context-card.component.html',
  styleUrls: ['./project-context-card.component.css']
})
export class ProjectContextCardComponent {
  @Input() projectContext!: ProjectCollaborationContext;
  @Input() role!: Role;

  projectStatusClass(status: string): string {
    switch (status) {
      case 'ACTIVE':
        return 'kh-badge--green';
      case 'SUSPENDED':
        return 'kh-badge--amber';
      case 'CLOSED':
        return 'kh-badge--red';
      default:
        return 'kh-badge--blue';
    }
  }
}
