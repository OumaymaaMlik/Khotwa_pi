import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collaboration } from '../../../core/models/collaboration.model';
import { CollaborationService } from '../../../core/services/collaboration.service';
import { AuthService } from '../../../core/services/auth.service';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-collaboration-my-collaborations-page',
  templateUrl: './collaboration-my-collaborations-page.component.html',
  styleUrls: ['./collaboration-my-collaborations-page.component.css'],
})
export class CollaborationMyCollaborationsPageComponent implements OnInit {
  collaborations: Collaboration[] = [];
  currentUserRole: Role = 'entrepreneur';
  loading = false;

  constructor(
    private collaborationService: CollaborationService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const role = this.authService.role;
    this.currentUserRole = (role ? role.toLowerCase() : 'entrepreneur') as Role;
    this.loadCollaborations();
  }

  private loadCollaborations(): void {
    this.loading = true;
    this.collaborationService.getCollaborations().subscribe({
      next: (collaborations: Collaboration[]) => {
        this.collaborations = collaborations;
        this.loading = false;
      },
      error: (_err: any) => {
        this.collaborations = [];
        this.loading = false;
      },
    });
  }

  onCollaborationOpen(collaboration: Collaboration): void {
    const base =
      this.currentUserRole === 'admin'
        ? '/khotwaadmin/collaborations'
        : this.currentUserRole === 'coach'
          ? '/coach/collaborations'
          : '/entrepreneur/collaborations';

    this.router.navigate([base, collaboration.id]);
  }
}