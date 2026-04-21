import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getCollaborationTypeLabel } from '../../../core/models/collaboration.model';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-requests-block',
  templateUrl: './RequestsBlock.component.html',
  styleUrls: ['./RequestsBlock.component.css']
})
export class RequestsBlockComponent {
  @Input() requests: CollaborationRequest[] = [];
  @Input() viewMode!: 'sent' | 'received' | 'collaboration';
  @Input() role!: Role;
  @Input() currentUserId?: number;
  @Input() canRespond?: boolean;
  @Input() canCancel?: boolean;

  @Output() requestAccepted = new EventEmitter<{ requestId: number }>();
  @Output() requestRejected = new EventEmitter<{ requestId: number }>();
  @Output() requestCancelled = new EventEmitter<{ requestId: number }>();

  trackByRequest(_: number, request: CollaborationRequest): number {
    return request.id;
  }

  statusLabel(status: CollaborationRequest['status']): string {
    switch (status) {
      case 'ACCEPTED':
        return 'Accepted';
      case 'REJECTED':
        return 'Rejected';
      default:
        return 'Pending';
    }
  }

  statusBadgeClass(status: CollaborationRequest['status']): string {
    switch (status) {
      case 'ACCEPTED':
        return 'kh-badge--green';
      case 'REJECTED':
        return 'kh-badge--red';
      default:
        return 'kh-badge--amber';
    }
  }

  requestTitle(request: CollaborationRequest): string {
    if (request.scenario === 'COLLABORATION_JOIN_REQUEST') {
      return request.projectName ?? 'Join collaboration request';
    }
    return request.projectName ?? 'Project invitation';
  }

  requestSubtitle(request: CollaborationRequest): string {
    const typeLabel = getCollaborationTypeLabel(request.type);
    if (request.scenario === 'COLLABORATION_JOIN_REQUEST') {
      return `${typeLabel} join request`;
    }
    return `${typeLabel} invitation`;
  }

  requestActorLabel(request: CollaborationRequest): string {
    if (this.viewMode === 'sent') {
      return `To ${request.targetUserName ?? 'Unknown user'}`;
    }
    return `From ${request.requesterUserName ?? 'Unknown user'}`;
  }

  canRespondToRequest(request: CollaborationRequest): boolean {
    if (request.status !== 'PENDING') {
      return false;
    }
    if (this.canRespond === false) {
      return false;
    }
    if (this.role === 'admin') {
      return true;
    }
    return !!this.currentUserId && request.targetUserId === this.currentUserId;
  }
}
