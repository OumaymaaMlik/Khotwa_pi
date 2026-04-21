import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collaboration, CollaborationStatus } from '../../../core/models/collaboration.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-collaboration-actions',
  templateUrl: './collaboration-actions.component.html',
  styleUrls: ['./collaboration-actions.component.css']
})
export class CollaborationActionsComponent {
  @Input() collaboration!: Collaboration;
  @Input() role!: Role;
  @Input() canUpdateStatus?: boolean;
  @Input() canLeave?: boolean;
  @Input() currentUserId?: number;

  @Output() statusUpdated = new EventEmitter<{ collaborationId: number; newStatus: CollaborationStatus }>();
  @Output() collaborationLeft = new EventEmitter<{ collaborationId: number; userId: number }>();

  onUpdateStatus(newStatus: CollaborationStatus): void {
    this.statusUpdated.emit({ collaborationId: this.collaboration.id, newStatus });
  }

  onLeaveCollaboration(): void {
    this.collaborationLeft.emit({
      collaborationId: this.collaboration.id,
      userId: this.currentUserId ?? 0
    });
  }
}
