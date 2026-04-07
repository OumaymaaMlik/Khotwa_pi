import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService, ProjetDraftInput } from '../../../core/services/projet.service';
import { Projet } from '../../../core/models';

@Component({ selector:'app-entrepreneur-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class EntrepreneurDashboardComponent implements OnInit {
  showProjectModal = false;
  editingProject: Projet | null = null;
  submitMessage = '';

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
    };
  }
}
