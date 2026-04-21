import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { forkJoin } from 'rxjs';
import { getCollaborationTypeLabel } from '../../../core/models/collaboration.model';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { AuthService } from '../../../core/services/auth.service';
import { CollaborationService } from '../../../core/services/collaboration.service';

@Component({
  selector: 'app-collaboration-requests',
  templateUrl: './collaboration-requests.component.html',
  styleUrls: ['./collaboration-requests.component.css'],
})
export class CollaborationRequestsComponent implements OnChanges {
  @Input() projectId: number | null = null;
  @Input() collaborationOwnerId: number | null = null;
  @Output() memberAdded = new EventEmitter<void>();

  requests: CollaborationRequest[] = [];
  error = '';
  loading = false;

  constructor(
    public auth: AuthService,
    private collaborationService: CollaborationService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['projectId'] || changes['collaborationOwnerId']) && this.projectId) {
      this.loadRequests();
    }
  }

  get currentUserId(): number {
    return this.auth.currentUser?.idUser ?? 0;
  }

  get canRespond(): boolean {
    return this.auth.isAdmin || this.currentUserId === this.collaborationOwnerId;
  }

  typeLabel(request: CollaborationRequest): string {
    return getCollaborationTypeLabel(request.type);
  }

  loadRequests(): void {
    if (!this.projectId) {
      this.requests = [];
      return;
    }

    this.loading = true;
    this.error = '';

    forkJoin({
      sent: this.collaborationService.getSentCollaborationRequests(),
      received: this.collaborationService.getReceivedCollaborationRequests(),
    }).subscribe({
      next: ({ sent, received }) => {
        const all = [...(sent ?? []), ...(received ?? [])];
        this.requests = all.filter(request => request.projectId === this.projectId);
        this.loading = false;
      },
      error: err => {
        this.error = this.extractError(err);
        this.loading = false;
      },
    });
  }

  accept(requestId: number): void {
    this.error = '';
    this.collaborationService.acceptRequest(requestId).subscribe({
      next: () => {
        this.loadRequests();
        this.memberAdded.emit();
      },
      error: err => {
        this.error = this.extractError(err);
      },
    });
  }

  reject(requestId: number): void {
    this.error = '';
    this.collaborationService.rejectRequest(requestId).subscribe({
      next: () => {
        this.loadRequests();
      },
      error: err => {
        this.error = this.extractError(err);
      },
    });
  }

  trackByRequest(_: number, request: CollaborationRequest): number {
    return request.id;
  }

  private extractError(err: unknown): string {
    const error = err as { error?: { message?: string }; message?: string };
    return error?.error?.message ?? error?.message ?? 'An unexpected error occurred.';
  }
}
