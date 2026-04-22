import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollaborationStatus, getCollaborationTypeLabel } from '../../../core/models/collaboration.model';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { EntrepreneurSelection } from '../../../core/models/entrepreneur-selection.model';

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
  @Input() collaborationStatus: CollaborationStatus | null = null;
  @Input() requestActionInFlightId: number | null = null;
  @Input() canRespond?: boolean;
  @Input() canInvite = false;
  @Input() inviteCandidates: EntrepreneurSelection[] = [];
  @Input() inviteActionInFlight = false;

  @Output() requestAccepted = new EventEmitter<{ requestId: number }>();
  @Output() requestRejected = new EventEmitter<{ requestId: number }>();
  @Output() requestCreated = new EventEmitter<{ targetUserId: number }>();

  selectedInviteeId: number | null = null;
  readonly statusPriority: Record<CollaborationRequest['status'], number> = {
    PENDING: 0,
    ACCEPTED: 1,
    REJECTED: 2,
  };

  trackByRequest(_: number, request: CollaborationRequest): number {
    return request.id;
  }

  trackByInviteCandidate(_: number, candidate: EntrepreneurSelection): number {
    return candidate.id;
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
    if (request.scenario === 'JOIN_REQUEST') {
      return request.projectName ?? 'Join collaboration request';
    }
    return request.projectName ?? 'Collaboration invitation';
  }

  requestSubtitle(request: CollaborationRequest): string {
    const typeLabel = getCollaborationTypeLabel(request.targetCollaborationType);
    if (request.scenario === 'JOIN_REQUEST') {
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

  scenarioLabel(request: CollaborationRequest): string {
    return request.scenario === 'JOIN_REQUEST' ? 'Join request' : 'Invitation';
  }

  canShowProcessedAt(request: CollaborationRequest): boolean {
    return !!request.processedAt;
  }

  isRequestActionInFlight(request: CollaborationRequest): boolean {
    return this.requestActionInFlightId === request.id;
  }

  canShowInviteForm(): boolean {
    return this.viewMode === 'collaboration'
      && this.collaborationStatus === 'ACTIVE'
      && this.canInvite;
  }

  get displayRequests(): CollaborationRequest[] {
    return [...this.requests].sort((left, right) => {
      const statusDiff = this.statusPriority[left.status] - this.statusPriority[right.status];

      if (statusDiff !== 0) {
        return statusDiff;
      }

      return (right.createdAt ?? '').localeCompare(left.createdAt ?? '');
    });
  }

  get pendingRequests(): CollaborationRequest[] {
    return this.displayRequests.filter(request => request.status === 'PENDING');
  }

  get historicalRequests(): CollaborationRequest[] {
    return this.displayRequests.filter(request => request.status !== 'PENDING');
  }

  canSubmitInvite(): boolean {
    return this.canShowInviteForm()
      && !this.inviteActionInFlight
      && !!this.selectedInviteeId;
  }

  onInviteeChange(value: string): void {
    const inviteeId = Number(value);
    this.selectedInviteeId = Number.isFinite(inviteeId) && inviteeId > 0 ? inviteeId : null;
  }

  submitInvite(): void {
    if (!this.canSubmitInvite()) {
      return;
    }

    this.requestCreated.emit({ targetUserId: this.selectedInviteeId as number });
    this.selectedInviteeId = null;
  }

  canRespondToRequest(request: CollaborationRequest): boolean {
    if (request.status !== 'PENDING') {
      return false;
    }
    if (this.canRespond === false) {
      return false;
    }
    if (this.viewMode === 'collaboration' && this.collaborationStatus !== 'ACTIVE') {
      return false;
    }
    if (this.role === 'admin') {
      return true;
    }
    return !!this.currentUserId && request.targetUserId === this.currentUserId;
  }
}
