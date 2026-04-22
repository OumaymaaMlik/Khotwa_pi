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
  @Input() isReadOnly = false;
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

  get canShowStatusActions(): boolean {
    return !!this.canUpdateStatus && !this.isReadOnly && this.collaboration?.status !== 'CLOSED';
  }

  get canShowLeaveAction(): boolean {
    return !!this.canLeave && !this.isReadOnly && this.collaboration?.status === 'ACTIVE';
  }

  get canActivate(): boolean {
    return this.canShowStatusActions && this.collaboration?.status === 'SUSPENDED';
  }

  get canSuspend(): boolean {
    return this.canShowStatusActions && this.collaboration?.status === 'ACTIVE';
  }

  get canClose(): boolean {
    return this.canShowStatusActions;
  }
}
