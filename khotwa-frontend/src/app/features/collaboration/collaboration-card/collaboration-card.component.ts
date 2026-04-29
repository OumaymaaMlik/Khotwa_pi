import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Collaboration,
  CollaborationType,
  getCollaborationTypeLabel,
} from '../../../core/models/collaboration.model';

@Component({
  selector: 'app-collaboration-card',
  templateUrl: './collaboration-card.component.html',
  styleUrls: ['./collaboration-card.component.css']
})
export class CollaborationCardComponent {
  @Input() collaboration!: Collaboration;

  @Output() open = new EventEmitter<Collaboration>();

  onOpen(): void {
    this.open.emit(this.collaboration);
  }

  typeLabel(type: CollaborationType): string {
    return getCollaborationTypeLabel(type);
  }

  toUiLabel(value: string): string {
    return value?.replaceAll('_', ' ') ?? '';
  }

  getStatusBadgeClass(): string {
    switch (this.collaboration?.status) {
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
