import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { CollaborationService } from '../../../core/services/collaboration.service';
import {
  COLLABORATION_TYPES,
  Collaboration,
  CollaborationType,
  CreateCollaborationRequest,
  getCollaborationTypeLabel,
} from '../../../core/models/collaboration.model';
import { ProjectSummary } from '../../../core/models/project-summary.model';

type CreateCollaborationFormErrors = {
  projectId?: string;
  type?: string;
};

@Component({
  selector: 'app-collaboration-create',
  templateUrl: './collaboration-create.component.html',
  styleUrls: ['./collaboration-create.component.css'],
})
export class CollaborationCreateComponent implements OnInit {
  private readonly openStatuses = new Set<string>(['ACTIVE', 'SUSPENDED']);

  model: CreateCollaborationRequest = {
    projectId: 0,
    type: 'MARKETING',
  };

  projects: ProjectSummary[] = [];
  availableTypes: CollaborationType[] = [];
  created: Collaboration | null = null;
  loading = false;
  submitted = false;
  projectsLoading = false;
  typeAvailabilityLoading = false;
  error = '';
  success = '';
  projectsError = '';
  formErrors: CreateCollaborationFormErrors = {};

  readonly types: CollaborationType[] = [...COLLABORATION_TYPES];

  constructor(
    public auth: AuthService,
    private collaborationService: CollaborationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.auth.isEntrepreneur) {
      this.loadMyProjects();
    }
    this.availableTypes = this.types.slice();
  }

  get rolePrefix(): string {
    if (this.auth.isAdmin) return '/khotwaadmin';
    if (this.auth.isCoach) return '/coach';
    return '/entrepreneur';
  }

  get canSubmit(): boolean {
    return this.auth.isEntrepreneur;
  }

  get hasProjects(): boolean {
    return this.projects.length > 0;
  }

  get hasAvailableTypes(): boolean {
    return this.availableTypes.length > 0;
  }

  get noAvailableTypesMessage(): string {
    return 'All collaboration types already have an open collaboration for this project.';
  }

  typeLabel(type: CollaborationType): string {
    return getCollaborationTypeLabel(type);
  }

  private loadMyProjects(): void {
    this.projectsLoading = true;
    this.projectsError = '';
    this.error = '';

    this.collaborationService.getMyProjects()
      .pipe(finalize(() => { this.projectsLoading = false; }))
      .subscribe({
        next: (projects: ProjectSummary[]) => {
          this.projects = projects;
          if (projects.length && !this.model.projectId) {
            this.model.projectId = projects[0].id;
          }
          this.refreshAvailableTypes();
        },
        error: (err: any) => {
          this.projectsError = this.extractError(err);
        },
      });
  }

  onProjectChange(projectId: number): void {
    this.model.projectId = projectId;
    this.formErrors.projectId = undefined;
    this.error = '';
    this.refreshAvailableTypes();
  }

  private refreshAvailableTypes(): void {
    if (!this.model.projectId) {
      this.availableTypes = this.types.slice();
      return;
    }

    this.typeAvailabilityLoading = true;
    this.error = '';

    this.collaborationService.getCollaborationsByProjectId(this.model.projectId)
      .pipe(finalize(() => { this.typeAvailabilityLoading = false; }))
      .subscribe({
        next: collaborations => {
          const usedTypes = new Set(
            collaborations
              .filter(collaboration => this.openStatuses.has(collaboration.status))
              .map(collaboration => collaboration.type)
          );
          this.availableTypes = this.types.filter(type => !usedTypes.has(type));

          if (!this.availableTypes.length) {
            this.model.type = this.types[0];
            return;
          }

          if (!this.availableTypes.includes(this.model.type)) {
            this.model.type = this.availableTypes[0];
          }
        },
        error: (err: unknown) => {
          this.availableTypes = this.types.slice();
          this.error = this.extractError(err);
        },
      });
  }

  submit(): void {
    this.submitted = true;
    this.error = '';
    this.success = '';
    this.formErrors = {};

    if (!this.canSubmit) {
      this.error = 'Only entrepreneurs can create collaborations.';
      return;
    }

    this.formErrors = this.validateForm();

    if (Object.keys(this.formErrors).length > 0) {
      this.error = 'Please correct the highlighted fields.';
      return;
    }

    if (!this.hasAvailableTypes || !this.availableTypes.includes(this.model.type)) {
      this.error = this.noAvailableTypesMessage;
      return;
    }

    this.loading = true;
    const payload: CreateCollaborationRequest = {
      projectId: this.model.projectId,
      type: this.model.type,
    };

    this.collaborationService.createCollaboration(payload)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: (collaboration: Collaboration) => {
          this.created = collaboration;
          this.success = 'Collaboration created successfully. Redirecting to details...';
          setTimeout(() => {
            this.router.navigateByUrl(`${this.rolePrefix}/collaborations/${collaboration.id}`);
          }, 700);
        },
        error: (err: any) => {
          this.error = this.extractError(err);
        },
      });
  }

  private extractError(err: unknown): string {
    const error = err as { error?: { message?: string }; message?: string };
    return error.error?.message ?? error.message ?? 'An unexpected error occurred.';
  }

  private validateForm(): CreateCollaborationFormErrors {
    const errors: CreateCollaborationFormErrors = {};

    if (!this.hasProjects || !this.model.projectId) {
      errors.projectId = 'Project selection is required.';
    }

    if (!this.model.type || !this.availableTypes.includes(this.model.type)) {
      errors.type = this.hasAvailableTypes
        ? 'Choose an available collaboration type.'
        : 'No collaboration type is available for this project.';
    }

    return errors;
  }
}
