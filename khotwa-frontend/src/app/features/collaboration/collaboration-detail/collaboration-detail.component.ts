import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import {
  Collaboration,
  CollaborationStatus,
  getCollaborationTypeLabel,
} from '../../../core/models/collaboration.model';
import { CollaborationMember } from '../../../core/models/collaboration-member.model';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { CreateMarketingCollaborationPayload, MarketingCollaboration } from '../../../core/models/marketing-collaboration.model';
import {
  CreateMarketingContentTaskPayload,
  MarketingContentTask,
  MarketingTaskStatus
} from '../../../core/models/marketing-content-task.model';
import { ProjectCollaborationContext } from '../../../core/models/project-collaboration-context.model';
import {
  CreateResourceRequestPayload,
  ResourceRequest,
  ResourceRequestStatus
} from '../../../core/models/resource-request.model';
import { CreateSharedResourcePayload, SharedResource } from '../../../core/models/shared-resource.model';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { AuthService } from '../../../core/services/auth.service';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-collaboration-detail',
  templateUrl: './collaboration-detail.component.html',
  styleUrls: ['./collaboration-detail.component.css'],
})
export class CollaborationDetailComponent implements OnInit {
  private static readonly DETAIL_REQUESTS_SCOPE_MESSAGE =
    'Collaboration-scoped request visibility is not exposed by the current backend API yet. Use the collaboration requests page for actionable invitations and join requests.';

  collaboration: Collaboration | null = null;
  projectContext: ProjectCollaborationContext | null = null;
  members: CollaborationMember[] = [];
  collaborationRequests: CollaborationRequest[] = [];
  requestScopeMessage: string | null = null;
  sharedResources: SharedResource[] = [];
  resourceRequests: ResourceRequest[] = [];
  marketingCampaigns: MarketingCollaboration[] = [];
  marketingTasks: MarketingContentTask[] = [];
  currentUserRole: Role = 'entrepreneur';
  currentUserId = 0;
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
    const loadMarketing = collaboration.type === 'MARKETING';

    forkJoin({
      projectContext: this.collaborationService.getProjectContext(collaboration.projectId),
      collaborationRequests: this.loadScopedCollaborationRequests(),
      sharedResources: loadResources ? this.collaborationService.getSharedResources(collaboration.id) : of([]),
      resourceRequests: loadResources ? this.collaborationService.getResourceRequests(collaboration.id) : of([]),
      marketingCampaigns: loadMarketing ? this.collaborationService.getMarketingCampaigns(collaboration.id) : of([]),
    }).subscribe({
      next: ({
        projectContext,
        collaborationRequests,
        sharedResources,
        resourceRequests,
        marketingCampaigns
      }) => {
        this.projectContext = projectContext ?? null;
        this.collaborationRequests = collaborationRequests ?? [];
        this.sharedResources = sharedResources ?? [];
        this.resourceRequests = resourceRequests ?? [];
        this.marketingCampaigns = marketingCampaigns ?? [];
        this.loadMarketingTasksForCampaigns();
      },
      error: err => {
        this.loading = false;
        this.error = this.extractError(err);
      },
    });
  }

  private loadScopedCollaborationRequests() {
    // The backend currently exposes only current-user inbox/outbox request endpoints.
    // Returning a partial list here would be misleading on a collaboration detail page,
    // especially for admin supervision, so we isolate the limitation until a scoped endpoint exists.
    this.requestScopeMessage = CollaborationDetailComponent.DETAIL_REQUESTS_SCOPE_MESSAGE;
    return of<CollaborationRequest[]>([]);
  }

  private loadMarketingTasksForCampaigns(): void {
    const campaignIds = this.marketingCampaigns
      .map(campaign => campaign?.id ?? 0)
      .filter((campaignId): campaignId is number => campaignId > 0);

    if (!campaignIds.length) {
      this.marketingTasks = [];
      this.loading = false;
      return;
    }

    forkJoin(campaignIds.map(campaignId => this.collaborationService.getMarketingTasks(campaignId))).subscribe({
      next: taskGroups => {
        this.marketingTasks = taskGroups.flatMap(tasks => tasks ?? []);
        this.loading = false;
      },
      error: () => {
        this.marketingTasks = [];
        this.loading = false;
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
    return this.currentUserRole === 'admin' || this.isOwner;
  }

  get canLeaveCollaboration(): boolean {
    return this.currentUserRole === 'entrepreneur' && !this.isOwner;
  }

  get canUpdateStatus(): boolean {
    return this.currentUserRole === 'admin' || this.isOwner;
  }

  get canUpdateResourceRequestStatuses(): boolean {
    return this.currentUserRole === 'admin' || this.isOwner;
  }

  get isMarketingCollaboration(): boolean {
    return this.collaboration?.type === 'MARKETING';
  }

  get isResourcesCollaboration(): boolean {
    return this.collaboration?.type === 'RESOURCES';
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
    this.collaborationService.acceptRequest(event.requestId).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onRequestRejected(event: { requestId: number }): void {
    this.collaborationService.rejectRequest(event.requestId).subscribe({
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

  onUpdateResourceRequestStatus(event: { requestId: number; status: ResourceRequestStatus }): void {
    this.collaborationService.updateResourceRequestStatus(event.requestId, event.status).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onCreateCampaign(event: { payload: unknown }): void {
    if (!this.collaboration?.id) {
      return;
    }

    this.collaborationService.createCampaign({
      ...(event.payload as Record<string, unknown>),
      collaborationId: this.collaboration.id
    } as CreateMarketingCollaborationPayload).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onCreateTask(event: { payload: unknown }): void {
    this.collaborationService.createTask(event.payload as CreateMarketingContentTaskPayload).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }

  onUpdateTaskStatus(event: { taskId: number; status: MarketingTaskStatus }): void {
    this.collaborationService.updateTaskStatus(event.taskId, event.status).subscribe({
      next: () => this.reloadDetail(),
      error: err => { this.error = this.extractError(err); }
    });
  }
}
