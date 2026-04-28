import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap } from 'rxjs/operators';
import {
  Collaboration,
  CollaborationStatus,
  getCollaborationTypeLabel,
} from '../../../core/models/collaboration.model';
import { CollaborationMember } from '../../../core/models/collaboration-member.model';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { EntrepreneurSelection } from '../../../core/models/entrepreneur-selection.model';
import {
  CreateMarketingCollaborationPayload,
  MarketingCollaboration,
  MarketingCollaborationStatus,
} from '../../../core/models/marketing-collaboration.model';
import {
  CreateMarketingContentTaskPayload,
  MarketingContentTask,
  MarketingTaskStatus,
} from '../../../core/models/marketing-content-task.model';
import {
  CreateResourceRequestPayload,
  ResourceRequest,
  ResourceRequestStatus
} from '../../../core/models/resource-request.model';
import { CreateSharedResourcePayload, SharedResource, UpdateSharedResourcePayload } from '../../../core/models/shared-resource.model';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { AuthService } from '../../../core/services/auth.service';
import { ResourcesBlockComponent } from '../ResourcesBlock/ResourcesBlock.component';

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
  sharedResources: SharedResource[] = [];
  resourceRequests: ResourceRequest[] = [];
  marketingCampaigns: MarketingCollaboration[] = [];
  marketingTasks: MarketingContentTask[] = [];
  currentUserRole: Role = 'entrepreneur';
  currentUserId = 0;
  private collaborationId: number | null = null;
  collaborationRequestActionInFlightId: number | null = null;
  resourceRequestActionInFlightId: number | null = null;
  inviteCandidates: EntrepreneurSelection[] = [];
  inviteSelectedUserId: number | null = null;
  inviteSearch = '';
  inviteLoading = false;
  inviteActionInFlight = false;
  inviteError: string | null = null;
  loading = false;
  error: string | null = null;
  membersExpanded = false;
  requestsExpanded = false;
  inviteExpanded = false;
  private inviteCandidatesRaw: EntrepreneurSelection[] = [];
  private inviteSearch$ = new Subject<string>();

  @ViewChild('resourcesSection') resourcesSection?: ElementRef<HTMLElement>;
  @ViewChild('resourcesBlock') resourcesBlock?: ResourcesBlockComponent;

  constructor(
    private route: ActivatedRoute,
    private collaborationService: CollaborationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userRole = this.authService.role;
    this.currentUserRole = (userRole ? userRole.toLowerCase() : 'entrepreneur') as Role;
    this.currentUserId = this.authService.currentUser?.idUser ?? 0;

    this.inviteSearch$
      .pipe(
        map(value => value.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        tap(search => {
          this.inviteError = null;
          this.inviteSelectedUserId = null;

          if (search.length < 2) {
            this.inviteCandidatesRaw = [];
            this.inviteCandidates = [];
            this.inviteLoading = false;
          }
        }),
        filter(search => search.length >= 2),
        tap(() => { this.inviteLoading = true; }),
        switchMap(search =>
          this.collaborationService.getEntrepreneurs(search).pipe(
            catchError(err => {
              this.inviteError = this.extractError(err);
              return of([] as EntrepreneurSelection[]);
            }),
            finalize(() => { this.inviteLoading = false; })
          )
        )
      )
      .subscribe(candidates => {
        this.inviteCandidatesRaw = candidates ?? [];
        this.applyInviteCandidateFilter();
      });

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadCollaboration(id);
      }
    });
  }

  private loadCollaboration(id: number): void {
    if (this.collaborationId !== id) {
      this.resetInviteState();
      this.collaborationId = id;
    }

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
    const collaborationRequests$ = this.collaborationService.getCollaborationScopedRequests(collaboration.id);

    if (collaboration.type === 'MARKETING') {
      this.sharedResources = [];
      this.resourceRequests = [];

      forkJoin({
        collaborationRequests: collaborationRequests$,
        marketingCampaigns: this.collaborationService.getMarketingCampaigns(collaboration.id),
      }).pipe(
        switchMap(({ collaborationRequests, marketingCampaigns }) => {
          const openCampaign = this.findOpenMarketingCampaign(marketingCampaigns);

          if (!openCampaign) {
            return of({
              collaborationRequests,
              marketingCampaigns,
              marketingTasks: [] as MarketingContentTask[],
            });
          }

          return this.collaborationService.getMarketingTasks(openCampaign.id).pipe(
            map(marketingTasks => ({
              collaborationRequests,
              marketingCampaigns,
              marketingTasks,
            }))
          );
        })
      ).subscribe({
        next: ({
          collaborationRequests,
          marketingCampaigns,
          marketingTasks,
        }) => {
          this.collaborationRequests = collaborationRequests ?? [];
          this.marketingCampaigns = marketingCampaigns ?? [];
          this.marketingTasks = marketingTasks ?? [];
          this.applyInviteCandidateFilter();
          this.loading = false;
        },
        error: err => {
          this.loading = false;
          this.error = this.extractError(err);
        }
      });

      return;
    }

    this.marketingCampaigns = [];
    this.marketingTasks = [];

    forkJoin({
      collaborationRequests: collaborationRequests$,
      sharedResources: this.collaborationService.getSharedResources(collaboration.id),
      resourceRequests: this.collaborationService.getResourceRequests(collaboration.id),
    }).subscribe({
      next: ({
        collaborationRequests,
        sharedResources,
        resourceRequests
      }) => {
        this.collaborationRequests = collaborationRequests ?? [];
        this.sharedResources = sharedResources ?? [];
        this.resourceRequests = resourceRequests ?? [];
        this.applyInviteCandidateFilter();
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

  private resetInviteState(): void {
    this.inviteCandidates = [];
    this.inviteCandidatesRaw = [];
    this.inviteSelectedUserId = null;
    this.inviteSearch = '';
    this.inviteLoading = false;
    this.inviteActionInFlight = false;
    this.inviteError = null;
  }

  private extractError(err: unknown): string {
    const error = err as { error?: { message?: string }; message?: string };
    return error?.error?.message ?? error?.message ?? 'Unable to load collaboration details.';
  }

  get isOwner(): boolean {
    return (this.collaboration?.ownerId ?? 0) === this.currentUserId;
  }

  get isAdmin(): boolean {
    return this.currentUserRole === 'admin';
  }

  get isMember(): boolean {
    return this.members.some(member => member?.userId === this.currentUserId);
  }

  get belongsToCollaboration(): boolean {
    return this.currentUserId > 0 && (this.isOwner || this.isMember);
  }

  get isEntrepreneurMember(): boolean {
    return this.currentUserRole === 'entrepreneur' && this.belongsToCollaboration;
  }

  get isMarketingCollaboration(): boolean {
    return this.collaboration?.type === 'MARKETING';
  }

  get canManageCollaboration(): boolean {
    return this.currentUserRole !== 'coach' && (this.currentUserRole === 'admin' || this.isOwner);
  }

  get canInviteToCollaboration(): boolean {
    return this.canManageCollaboration && this.collaboration?.status === 'ACTIVE';
  }

  get canRemoveMembers(): boolean {
    return this.canManageCollaboration && this.collaboration?.status === 'ACTIVE';
  }

  get canLeaveCollaboration(): boolean {
    return this.collaboration?.status === 'ACTIVE'
      && this.currentUserRole === 'entrepreneur'
      && this.belongsToCollaboration;
  }

  get canUpdateStatus(): boolean {
    return this.canManageCollaboration
      && (this.isAdmin || this.collaboration?.status !== 'CLOSED');
  }

  get canUpdateResourceRequestStatuses(): boolean {
    return this.canManageCollaboration;
  }

  get showContributionActions(): boolean {
    return !this.isMarketingCollaboration
      && this.currentUserRole !== 'coach'
      && (this.currentUserRole === 'admin' || this.belongsToCollaboration);
  }

  get canContributeResources(): boolean {
    return this.canCreateResource;
  }

  get canContributeRequests(): boolean {
    return this.canCreateResourceRequest;
  }

  get canCreateMarketingCampaign(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.isOwner);
  }

  get canCreateMarketingTask(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.belongsToCollaboration);
  }

  get contributionHelperText(): string {
    if (!this.collaboration) {
      return '';
    }

    if (this.collaboration.status !== 'ACTIVE') {
      return `This collaboration is ${this.collaboration.status.toLowerCase()}. Contributions are disabled.`;
    }

    return 'Add a shared resource or submit a request for something you need.';
  }

  get pendingInvitations(): CollaborationRequest[] {
    return this.collaborationRequests
      .filter(request => request.scenario === 'COLLAB_INVITATION' && request.status === 'PENDING')
      .sort((left, right) => (right.createdAt ?? '').localeCompare(left.createdAt ?? ''));
  }

  get memberCount(): number {
    return this.members.length;
  }

  get requestCount(): number {
    return this.collaborationRequests.length;
  }

  toggleMembersExpanded(): void {
    this.membersExpanded = !this.membersExpanded;
  }

  toggleRequestsExpanded(): void {
    this.requestsExpanded = !this.requestsExpanded;
  }

  toggleInviteExpanded(): void {
    if (!this.canManageCollaboration) {
      return;
    }

    this.inviteExpanded = !this.inviteExpanded;
  }

  onInviteSearchChange(value: string): void {
    this.inviteSearch = value;

    if (!this.canManageCollaboration) {
      return;
    }

    if (!this.canInviteToCollaboration) {
      this.inviteCandidatesRaw = [];
      this.inviteCandidates = [];
      return;
    }

    this.inviteSearch$.next(value);
  }

  onInviteeSelected(value: string): void {
    const inviteeId = Number(value);
    this.inviteSelectedUserId = Number.isFinite(inviteeId) && inviteeId > 0 ? inviteeId : null;
  }

  get canSendInvitation(): boolean {
    return this.canInviteToCollaboration && !this.inviteActionInFlight && !!this.inviteSelectedUserId;
  }

  sendInvitation(): void {
    if (!this.collaboration?.id || !this.canSendInvitation) {
      return;
    }

    const selectedUserId = this.inviteSelectedUserId as number;
    this.inviteActionInFlight = true;
    this.inviteError = null;

    this.collaborationService.createCollaborationRequest({
      targetCollaborationId: this.collaboration.id,
      targetUserId: selectedUserId,
    }).pipe(
      finalize(() => { this.inviteActionInFlight = false; })
    ).subscribe({
      next: () => {
        this.inviteSelectedUserId = null;
        this.reloadDetail();
        if (this.inviteSearch.trim().length >= 2) {
          this.inviteSearch$.next(this.inviteSearch);
        }
      },
      error: err => { this.inviteError = this.extractError(err); }
    });
  }

  openContributionAction(action: 'resource' | 'request'): void {
    if (action === 'resource' && !this.canCreateResource) {
      return;
    }

    if (action === 'request' && !this.canCreateResourceRequest) {
      return;
    }

    const sectionEl = this.resourcesSection?.nativeElement;
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      if (!this.resourcesBlock) {
        return;
      }

      if (action === 'resource') {
        this.resourcesBlock.openCreateResourceForm();
      } else {
        this.resourcesBlock.openCreateRequestForm();
      }
    });
  }

  get canCreateResource(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.belongsToCollaboration);
  }

  get canCreateResourceRequest(): boolean {
    return this.currentUserRole !== 'coach'
      && this.collaboration?.status === 'ACTIVE'
      && (this.currentUserRole === 'admin' || this.belongsToCollaboration);
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

  onCreateCampaign(event: { payload: CreateMarketingCollaborationPayload }): void {
    if (!this.collaboration?.id) {
      return;
    }

    this.collaborationService.createCampaign({
      ...event.payload,
      collaborationId: this.collaboration.id,
    }).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onCreateMarketingTask(event: { payload: CreateMarketingContentTaskPayload }): void {
    this.collaborationService.createTask(event.payload).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onUpdateMarketingCampaignStatus(event: { campaignId: number; status: MarketingCollaborationStatus }): void {
    this.collaborationService.updateCampaignStatus(event.campaignId, event.status).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onUpdateMarketingTaskStatus(event: { taskId: number; status: MarketingTaskStatus; publishedAt?: string | null }): void {
    this.collaborationService.updateTaskStatus(event.taskId, {
      status: event.status,
      publishedAt: event.publishedAt ?? null,
    }).subscribe({
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

  private applyInviteCandidateFilter(): void {
    if (!this.canManageCollaboration) {
      this.inviteCandidates = [];
      this.inviteCandidatesRaw = [];
      this.inviteSelectedUserId = null;
      return;
    }

    this.inviteCandidates = this.buildInviteCandidates(this.inviteCandidatesRaw ?? []);

    if (this.inviteSelectedUserId && !this.inviteCandidates.some(candidate => candidate.id === this.inviteSelectedUserId)) {
      this.inviteSelectedUserId = null;
    }
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

  private findOpenMarketingCampaign(campaigns: MarketingCollaboration[]): MarketingCollaboration | null {
    return campaigns.find(campaign => campaign.status === 'DRAFT' || campaign.status === 'ACTIVE') ?? null;
  }
}
