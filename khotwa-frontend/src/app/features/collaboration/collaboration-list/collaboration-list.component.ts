import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { Collaboration } from '../../../core/models/collaboration.model';

@Component({
  selector: 'app-collaboration-list',
  templateUrl: './collaboration-list.component.html',
  styleUrls: ['./collaboration-list.component.css'],
})
export class CollaborationListComponent implements OnInit {
  @Input() showHeader = true;
  @Input() showBody = true;
  @Input() compact = false;
  @Input() prioritizeCritical = false;
  @Input() emptyStateTitle?: string;
  @Input() emptyStateDescription?: string;
  @Input() emptyStateActionLabel?: string;
  @Input() emptyStateActionLink?: string;
  @Output() summaryChange = new EventEmitter<CollaborationListSummary>();

  collaborations: Collaboration[] = [];
  sortedCollaborations: Collaboration[] = [];
  loading = false;
  error = '';

  constructor(
    public auth: AuthService,
    private collaborationService: CollaborationService,
  ) {}

  ngOnInit(): void {
    this.loadCollaborations();
  }

  get rolePrefix(): string {
    if (this.auth.isAdmin) {
      return '/khotwaadmin';
    }
    if (this.auth.isCoach) {
      return '/coach';
    }
    return '/entrepreneur';
  }

  collaborationLink(id: number): string {
    return `${this.rolePrefix}/collaborations/${id}`;
  }

  loadCollaborations(): void {
    this.loading = true;
    this.error = '';
    this.sortedCollaborations = [];
    this.emitSummary();

    this.collaborationService.getCollaborations()
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: collaborations => {
          this.collaborations = collaborations ?? [];
          this.reorderCollaborations();
          this.emitSummary();
        },
        error: err => {
          this.collaborations = [];
          this.sortedCollaborations = [];
          this.error = this.extractError(err);
          this.emitSummary();
        },
      });
  }

  trackByCollaboration(_: number, collaboration: Collaboration): number {
    return collaboration.id;
  }

  private reorderCollaborations(): void {
    const collaborations = this.collaborations.slice();

    if (!this.prioritizeCritical) {
      this.sortedCollaborations = collaborations;
      return;
    }

    this.sortedCollaborations = collaborations.sort(
      (left, right) => this.getStatusPriority(left.status) - this.getStatusPriority(right.status)
    );
  }

  private getStatusPriority(status: Collaboration['status']): number {
    switch (status) {
      case 'SUSPENDED':
        return 0;
      case 'ACTIVE':
        return 1;
      case 'CLOSED':
        return 2;
      default:
        return 3;
    }
  }

  private extractError(err: unknown): string {
    const error = err as { error?: { message?: string }; message?: string };
    return error?.error?.message ?? error?.message ?? 'An unexpected error occurred.';
  }

  private emitSummary(): void {
    this.summaryChange.emit({
      totalCollaborations: this.collaborations.length,
      activeCollaborations: this.collaborations.filter(collaboration => collaboration.status === 'ACTIVE').length,
      suspendedCollaborations: this.collaborations.filter(collaboration => collaboration.status === 'SUSPENDED').length,
      closedCollaborations: this.collaborations.filter(collaboration => collaboration.status === 'CLOSED').length,
    });
  }
}

export interface CollaborationListSummary {
  totalCollaborations: number;
  activeCollaborations: number;
  suspendedCollaborations: number;
  closedCollaborations: number;
}
