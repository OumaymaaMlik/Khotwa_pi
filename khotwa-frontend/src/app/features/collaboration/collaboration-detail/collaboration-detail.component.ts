import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  Collaboration,
  CollaborationStatus,
  getCollaborationTypeLabel,
} from '../../../core/models/collaboration.model';
import { CollaborationMember } from '../../../core/models/collaboration-member.model';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { EntrepreneurSelection } from '../../../core/models/entrepreneur-selection.model';
import {
  CreateResourceRequestPayload,
  ResourceRequest,
  ResourceRequestStatus
} from '../../../core/models/resource-request.model';
import { CreateSharedResourcePayload, SharedResource, UpdateSharedResourcePayload } from '../../../core/models/shared-resource.model';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { AuthService } from '../../../core/services/auth.service';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-collaboration-detail',
  templateUrl: './collaboration-detail.component.html',
  styleUrls: ['./collaboration-detail.component.css'],
})
export class CollaborationDetailComponent implements OnInit {
  collaboration: Collaboration | null = null;
  members: CollaborationMember[] = [];
  collaborationRequests: CollaborationRequest[] = [];
  inviteCandidates: EntrepreneurSelection[] = [];
  sharedResources: SharedResource[] = [];
  resourceRequests: ResourceRequest[] = [];
  currentUserRole: Role = 'entrepreneur';
  currentUserId = 0;
  collaborationRequestActionInFlightId: number | null = null;
  inviteActionInFlight = false;
  resourceRequestActionInFlightId: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private collaborationService: CollaborationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userRole = this.authService.role;
    this.currentUserRole = (userRole ? userRole.toLowerCase() : 'entrepreneur') as Role;
    this.currentUserId = this.authService.currentUser?.idUser ?? 0;

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadCollaboration(id);
      }
    });
  }

  private loadCollaboration(id: number): void {
    this.loading = true;
    this.error = null;

    this.collaborationService.getCollaboration(id).subscribe({
      next: (collaboration: Collaboration) => {
        this.collaboration = collaboration;
        this.members = collaboration?.members ?? [];
        this.loadCollaborationDetails(collaboration);
      },
      error: err => {
        this.loading = false;
        this.error = this.extractError(err);
      },
    });
  }

  private loadCollaborationDetails(collaboration: Collaboration): void {
    const loadResources = collaboration.type === 'RESOURCES';
    const loadInviteCandidates = this.canLoadInviteCandidates(collaboration);

    forkJoin({
      collaborationRequests: this.collaborationService.getCollaborationScopedRequests(collaboration.id),
      inviteCandidates: loadInviteCandidates ? this.collaborationService.getEntrepreneurs() : of([]),
      sharedResources: loadResources ? this.collaborationService.getSharedResources(collaboration.id) : of([]),
      resourceRequests: loadResources ? this.collaborationService.getResourceRequests(collaboration.id) : of([]),
    }).subscribe({
      next: ({
        collaborationRequests,
        inviteCandidates,
        sharedResources,
        resourceRequests
      }) => {
        this.collaborationRequests = collaborationRequests ?? [];
        this.inviteCandidates = this.buildInviteCandidates(inviteCandidates ?? []);
        this.sharedResources = sharedResources ?? [];
        this.resourceRequests = resourceRequests ?? [];
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        this.error = this.extractError(err);
      }
    });
  }

  private reloadDetail(): void {
    if (this.collaboration?.id) {
      this.loadCollaboration(this.collaboration.id);
    }
  }

  private extractError(err: unknown): string {
    const error = err as { error?: { message?: string }; message?: string };
    return error?.error?.message ?? error?.message ?? 'Unable to load collaboration details.';
  }

  get isOwner(): boolean {
    return (this.collaboration?.ownerId ?? 0) === this.currentUserId;
  }

  get isMember(): boolean {
    return this.members.some(member => member?.userId === this.currentUserId);
  }

  get canRemoveMembers(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.isOwner);
  }

  get canInviteToCollaboration(): boolean {
    return this.collaboration?.status === 'ACTIVE' && this.currentUserRole === 'admin';
  }

  get canLeaveCollaboration(): boolean {
    return this.collaboration?.status === 'ACTIVE'
      && this.currentUserRole === 'entrepreneur'
      && (this.isOwner || this.isMember);
  }

  get canUpdateStatus(): boolean {
    return this.currentUserRole !== 'coach'
      && (this.currentUserRole === 'admin' || this.isOwner)
      && this.collaboration?.status !== 'CLOSED';
  }

  get canUpdateResourceRequestStatuses(): boolean {
    return this.currentUserRole !== 'coach' && (this.currentUserRole === 'admin' || this.isOwner);
  }

  get isResourcesCollaboration(): boolean {
    return this.collaboration?.type === 'RESOURCES';
  }

  get canCreateResource(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.isMember);
  }

  get canCreateResourceRequest(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.isMember);
  }

  get collaborationTypeLabel(): string {
    return getCollaborationTypeLabel(this.collaboration?.type);
  }

  onMemberRemoved(event: { memberId: number; collaborationId: number }): void {
    this.collaborationService.removeMember(event.collaborationId, event.memberId).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onCollaborationLeft(event: { collaborationId: number; userId: number }): void {
    this.collaborationService.leaveCollaboration(event.collaborationId).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onStatusUpdated(event: { collaborationId: number; newStatus: CollaborationStatus }): void {
    this.collaborationService.updateStatus(event.collaborationId, event.newStatus).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onRequestAccepted(event: { requestId: number }): void {
    if (this.collaborationRequestActionInFlightId !== null) {
      return;
    }

    this.collaborationRequestActionInFlightId = event.requestId;
    this.collaborationService.acceptRequest(event.requestId).pipe(
      finalize(() => {
        this.collaborationRequestActionInFlightId = null;
      })
    ).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onRequestRejected(event: { requestId: number }): void {
    if (this.collaborationRequestActionInFlightId !== null) {
      return;
    }

    this.collaborationRequestActionInFlightId = event.requestId;
    this.collaborationService.rejectRequest(event.requestId).pipe(
      finalize(() => {
        this.collaborationRequestActionInFlightId = null;
      })
    ).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onInviteRequestCreated(event: { targetUserId: number }): void {
    if (!this.collaboration?.id || this.inviteActionInFlight) {
      return;
    }

    this.inviteActionInFlight = true;
    this.collaborationService.createCollaborationRequest({
      targetCollaborationId: this.collaboration.id,
      targetUserId: event.targetUserId
    }).pipe(
      finalize(() => {
        this.inviteActionInFlight = false;
      })
    ).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onCreateResource(event: { payload: unknown }): void {
    if (!this.collaboration?.id) {
      return;
    }

    this.collaborationService.createResource({
      ...(event.payload as Record<string, unknown>),
      collaborationId: this.collaboration.id
    } as CreateSharedResourcePayload).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onUpdateResource(event: { resourceId: number; payload: UpdateSharedResourcePayload }): void {
    this.collaborationService.updateResource(event.resourceId, event.payload).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onRemoveResource(event: { resourceId: number }): void {
    this.collaborationService.deleteResource(event.resourceId).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onCreateResourceRequest(event: { payload: unknown }): void {
    if (!this.collaboration?.id) {
      return;
    }

    this.collaborationService.createResourceRequest({
      ...(event.payload as Record<string, unknown>),
      collaborationId: this.collaboration.id
    } as CreateResourceRequestPayload).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onRemoveResourceRequest(event: { requestId: number }): void {
    if (this.resourceRequestActionInFlightId !== null) {
      return;
    }

    this.resourceRequestActionInFlightId = event.requestId;
    this.collaborationService.deleteResourceRequest(event.requestId).pipe(
      finalize(() => {
        this.resourceRequestActionInFlightId = null;
      })
    ).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onUpdateResourceRequestStatus(event: {
    requestId: number;
    status: ResourceRequestStatus;
    matchedResourceId?: number | null;
  }): void {
    if (this.resourceRequestActionInFlightId !== null) {
      return;
    }

    this.resourceRequestActionInFlightId = event.requestId;
    this.collaborationService.updateResourceRequestStatus(event.requestId, {
      status: event.status,
      matchedResourceId: event.matchedResourceId ?? null
    }).pipe(
      finalize(() => {
        this.resourceRequestActionInFlightId = null;
      })
    ).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  private canLoadInviteCandidates(collaboration: Collaboration): boolean {
    return collaboration.status === 'ACTIVE' && this.currentUserRole === 'admin';
  }

  private buildInviteCandidates(candidates: EntrepreneurSelection[]): EntrepreneurSelection[] {
    const memberIds = new Set(this.members.map(member => member.userId));
    const blockedUserIds = new Set(
      this.collaborationRequests
        .filter(request => request.status === 'PENDING')
        .map(request => request.scenario === 'JOIN_REQUEST' ? request.requesterUserId : request.targetUserId)
    );

    return candidates.filter(candidate =>
      !memberIds.has(candidate.id)
      && !blockedUserIds.has(candidate.id)
      && candidate.id !== this.collaboration?.ownerId
    );
  }
}
