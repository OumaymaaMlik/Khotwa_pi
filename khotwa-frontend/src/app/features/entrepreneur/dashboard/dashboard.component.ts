import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService, ProjetDraftInput } from '../../../core/services/projet.service';
import { Projet, SECTEUR_PROJET_OPTIONS } from '../../../core/models';

@Component({ selector:'app-entrepreneur-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class EntrepreneurDashboardComponent implements OnInit {
  showProjectModal = false;
  editingProject: Projet | null = null;
  submitMessage = '';
  readonly minProjectDurationDays = 30;
  readonly secteurOptions = SECTEUR_PROJET_OPTIONS;

  form: ProjetDraftInput = this.createEmptyForm();

  constructor(
    public projetService: ProjetService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('created') === '1') {
        this.submitMessage = 'Project created successfully.';
      }
    });
  }

  ngOnInit(): void {
    this.projetService.loadEntrepreneurProjects().subscribe({
      error: () => {
        this.submitMessage = 'Unable to load projects from backend.';
      }
    });
  }

  get projets() { return this.projetService.projetsEntrepreneur; }
  enCours = 2; tachesTerminees = 11; tachesTotal = 18; progression = 54;

  openEditProject(project: Projet): void {
    this.submitMessage = '';
    this.editingProject = project;
    this.form = {
      nomStartup: project.titre,
      description: project.description,
      secteur: project.secteur ?? '',
      problemeAdresse: project.problemeAdresse ?? '',
      solutionProposee: project.solutionProposee ?? '',
      businessModel: project.businessModel ?? '',
      stadeProjet: project.stadeProjet ?? 'IDEE',
      innovationDescription: project.innovationDescription ?? '',
      scalabiliteDescription: project.scalabiliteDescription ?? '',
      pocDisponible: project.pocDisponible ?? false,
      dateDebutProjet: this.toDateInputValue(project.dateDebutProjet),
      dateFinProjet: this.toDateInputValue(project.dateFinProjet),
    };
    this.showProjectModal = true;
  }

  closeProjectModal(): void {
    this.showProjectModal = false;
  }

  saveProject(): void {
    if (!this.editingProject) {
      return;
    }

    if (!this.form.nomStartup.trim() || !this.form.problemeAdresse.trim() || !this.form.solutionProposee.trim() || !this.form.businessModel.trim()) {
      this.submitMessage = 'Please fill in the required fields before saving.';
      return;
    }

    if (!this.form.secteur) {
      this.submitMessage = 'Please choose a sector before saving.';
      return;
    }

    const timelineError = this.validateProjectTimeline(this.form.dateDebutProjet, this.form.dateFinProjet);
    if (timelineError) {
      this.submitMessage = timelineError;
      return;
    }

    this.projetService.updateProjet(this.editingProject.id, this.form).subscribe({
      next: () => {
        this.submitMessage = 'Project updated as draft.';
        this.showProjectModal = false;
      },
      error: () => {
        this.submitMessage = 'Project update failed. Please try again.';
      }
    });
  }

  submitProject(project: Projet): void {
    this.projetService.submitProjet(project.id).subscribe({
      next: () => {
        this.submitMessage = 'Project submitted for review.';
      },
      error: () => {
        this.submitMessage = 'Project submission failed. Please try again.';
      }
    });
  }

  canEdit(project: Projet): boolean {
    return project.etatValidation === 'BROUILLON';
  }

  isDraft(project: Projet): boolean {
    return project.etatValidation === 'BROUILLON';
  }

  statusLabel(project: Projet): string {
    if (this.isDraft(project)) {
      return 'Draft';
    }
    return project.status.toUpperCase();
  }

  private createEmptyForm(): ProjetDraftInput {
    return {
      nomStartup: '',
      description: '',
      secteur: '',
      problemeAdresse: '',
      solutionProposee: '',
      businessModel: '',
      stadeProjet: 'IDEE',
      innovationDescription: '',
      scalabiliteDescription: '',
      pocDisponible: false,
      dateDebutProjet: '',
      dateFinProjet: '',
    };
  }

  private validateProjectTimeline(startDate: string, endDate: string): string | null {
    if (!startDate || !endDate) {
      return 'Project start and end dates are required.';
    }

    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return 'Project dates are invalid.';
    }

    if (end < start) {
      return 'Project end date must be after start date.';
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const durationDays = Math.floor((end.getTime() - start.getTime()) / msPerDay);
    if (durationDays < this.minProjectDurationDays) {
      return `Project duration must be at least ${this.minProjectDurationDays} days.`;
    }

    return null;
  }

  private toDateInputValue(date?: Date): string {
    if (!date) {
      return '';
    }

    const parsed = date instanceof Date ? date : new Date(date);
    if (Number.isNaN(parsed.getTime())) {
      return '';
    }

    return parsed.toISOString().slice(0, 10);
  }
}
