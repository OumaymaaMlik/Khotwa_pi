import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CollaborationRequest } from '../../../core/models/collaboration-request.model';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { AuthService } from '../../../core/services/auth.service';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-collaboration-requests-page',
  templateUrl: './collaboration-sent-requests-page.component.html',
  styleUrls: ['./collaboration-sent-requests-page.component.css'],
})
export class CollaborationSentRequestsPageComponent implements OnInit {
  sentRequests: CollaborationRequest[] = [];
  receivedRequests: CollaborationRequest[] = [];
  currentUserRole: Role = 'entrepreneur';
  currentUserId = 0;
  loading = false;
  error = '';

  constructor(
    private collaborationService: CollaborationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const role = this.authService.role;
    this.currentUserRole = (role ? role.toLowerCase() : 'entrepreneur') as Role;
    this.currentUserId = this.authService.currentUser?.idUser ?? 0;
    this.loadRequests();
  }

  private loadRequests(): void {
    this.loading = true;
    this.error = '';

    forkJoin({
      sent: this.collaborationService.getSentCollaborationRequests(),
      received: this.collaborationService.getReceivedCollaborationRequests(),
    }).subscribe({
      next: ({ sent, received }) => {
        this.sentRequests = sent ?? [];
        this.receivedRequests = received ?? [];
        this.loading = false;
      },
      error: () => {
        this.sentRequests = [];
        this.receivedRequests = [];
        this.error = 'Unable to load requests.';
        this.loading = false;
      }
    });
  }

  onRequestCancelled({ requestId }: { requestId: number }): void {
    this.collaborationService.cancelRequest(requestId).subscribe({
      next: () => this.loadRequests(),
      error: () => {}
    });
  }

  onRequestAccepted({ requestId }: { requestId: number }): void {
    this.collaborationService.acceptRequest(requestId).subscribe({
      next: () => this.loadRequests(),
      error: () => {}
    });
  }

  onRequestRejected({ requestId }: { requestId: number }): void {
    this.collaborationService.rejectRequest(requestId).subscribe({
      next: () => this.loadRequests(),
      error: () => {}
    });
  }
}
