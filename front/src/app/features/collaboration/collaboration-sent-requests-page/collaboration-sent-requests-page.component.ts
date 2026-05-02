import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { AuthService } from '../../../core/services/auth.service';

type RequestsTab = 'sent' | 'received';

@Component({
  selector: 'app-collaboration-requests-page',
  templateUrl: './collaboration-sent-requests-page.component.html',
  styleUrls: ['./collaboration-sent-requests-page.component.css'],
})
export class CollaborationSentRequestsPageComponent implements OnInit {
  sentRequests: CollaborationRequest[] = [];
  receivedRequests: CollaborationRequest[] = [];
  currentUserId = 0;
  activeTab: RequestsTab = 'sent';
  requestActionInFlightId: number | null = null;
  loading = false;
  error = '';

  constructor(
    private collaborationService: CollaborationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUserId = this.authService.currentUser?.idUser ?? 0;
    this.loadRequests();
  }

  setActiveTab(tab: RequestsTab): void {
    this.activeTab = tab;
  }

  get rolePrefix(): string {
    if (this.authService.isAdmin) {
      return '/khotwaadmin';
    }
    if (this.authService.isCoach) {
      return '/coach';
    }
    return '/entrepreneur';
  }

  get visibleRequests(): CollaborationRequest[] {
    return this.activeTab === 'sent' ? this.sentRequests : this.receivedRequests;
  }

  isProcessing(request: CollaborationRequest): boolean {
    return this.requestActionInFlightId === request.id;
  }

  canRespond(request: CollaborationRequest): boolean {
    if (request.status !== 'PENDING') {
      return false;
    }

    if (this.authService.isCoach) {
      return false;
    }

    if (this.authService.isAdmin) {
      return true;
    }

    return request.targetUserId === this.currentUserId;
  }

  collaborationLabel(request: CollaborationRequest): string {
    const projectName = request.projectName?.trim();
    return projectName
      ? `${projectName} | ${request.targetCollaborationType}`
      : request.targetCollaborationType;
  }

  scenarioLabel(request: CollaborationRequest): string {
    return request.scenario === 'JOIN_REQUEST' ? 'JOIN_REQUEST' : 'COLLAB_INVITATION';
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

  trackByRequest(_: number, request: CollaborationRequest): number {
    return request.id;
  }

  private loadRequests(): void {
    this.loading = true;
    this.error = '';
    this.requestActionInFlightId = null;

    forkJoin({
      sent: this.collaborationService.getSentCollaborationRequests(),
      received: this.collaborationService.getReceivedCollaborationRequests(),
    }).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: ({ sent, received }) => {
        this.sentRequests = sent ?? [];
        this.receivedRequests = received ?? [];
      },
      error: err => {
        this.sentRequests = [];
        this.receivedRequests = [];
        this.error = this.extractError(err);
      }
    });
  }

  acceptRequest(request: CollaborationRequest): void {
    if (!this.canRespond(request) || this.requestActionInFlightId !== null) {
      return;
    }

    this.requestActionInFlightId = request.id;
    this.error = '';
    this.collaborationService.acceptRequest(request.id).pipe(
      finalize(() => {
        this.requestActionInFlightId = null;
      })
    ).subscribe({
      next: () => this.loadRequests(),
      error: err => {
        this.error = this.extractError(err);
      }
    });
  }

  rejectRequest(request: CollaborationRequest): void {
    if (!this.canRespond(request) || this.requestActionInFlightId !== null) {
      return;
    }

    this.requestActionInFlightId = request.id;
    this.error = '';
    this.collaborationService.rejectRequest(request.id).pipe(
      finalize(() => {
        this.requestActionInFlightId = null;
      })
    ).subscribe({
      next: () => this.loadRequests(),
      error: err => {
        this.error = this.extractError(err);
      }
    });
  }

  private extractError(err: unknown): string {
    const error = err as { error?: { message?: string }; message?: string };
    return error?.error?.message ?? error?.message ?? 'Unable to load requests.';
  }
}
