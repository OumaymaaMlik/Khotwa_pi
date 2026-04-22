import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() emptyStateTitle?: string;
  @Input() emptyStateDescription?: string;
  @Output() summaryChange = new EventEmitter<CollaborationListSummary>();

  collaborations: Collaboration[] = [];
  loading = false;
  error = '';

  constructor(
    public auth: AuthService,
    private collaborationService: CollaborationService,
    private router: Router,
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
    this.emitSummary();

    this.collaborationService.getCollaborations()
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: collaborations => {
          this.collaborations = collaborations ?? [];
          this.emitSummary();
        },
        error: err => {
          this.collaborations = [];
          this.error = this.extractError(err);
          this.emitSummary();
        },
      });
  }

  trackByCollaboration(_: number, collaboration: Collaboration): number {
    return collaboration.id;
  }

  onOpenCollaboration(collaboration: Collaboration): void {
    this.router.navigate([this.collaborationLink(collaboration.id)]);
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
