import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ProjetService } from '../../../core/services/projet.service';

type PrioriteTache = 'BASSE' | 'MOYENNE' | 'HAUTE' | 'CRITIQUE';
type TypeTache = 'DOCUMENT' | 'ANALYSE' | 'PITCH' | 'POC' | 'BUSINESS_MODEL' | 'ETUDE_MARCHE' | 'LEGAL' | 'FINANCIER' | 'TECHNIQUE' | 'AUTRE';
type TaskStatus = 'A_FAIRE' | 'EN_COURS' | 'A_CORRIGER' | 'EN_CORRECTION' | 'TERMINEE' | 'EN_RETARD' | 'BLOQUEE';
type CoachWorkspaceView = 'TRIAGE' | 'KANBAN' | 'CORRECTIONS' | 'DELIVERABLES';
type TriageFilter = 'ALL' | 'NEEDS_CORRECTION' | 'RESUBMITTED' | 'BLOCKED_LATE' | 'READY_TO_VALIDATE';

interface CoachBoardColumn {
  key: TaskStatus;
  title: string;
  subtitle: string;
  tone: 'teal' | 'amber' | 'green' | 'red';
}

interface BackendTache {
  id: number;
  titre: string;
  description: string;
  typeTache: TypeTache;
  priorite: PrioriteTache;
  statutTache: TaskStatus;
  dateDebut: string | null;
  dateFin: string | null;
  retardJours: number;
  commentaireCoach: string | null;
  justificationEntrepreneur: string | null;
  scoreImpact: number;
  projetId: number;
}

interface BackendSousTache {
  id: number;
  titre: string;
  description: string;
  priorite: PrioriteTache;
  statutSousTache: TaskStatus;
  dateDebut: string | null;
  dateFin: string | null;
  retardJours: number;
  commentaireCoach: string | null;
  justificationEntrepreneur: string | null;
  scoreImpact: number;
  tacheId: number;
}

interface BackendDocument {
  id: number;
  nomFichier: string;
  nomOriginal: string;
  typeContenu: string;
  cheminStockage: string;
  tailleFichier: number;
  dateUpload: string;
  sousTacheId: number;
}

interface TacheForm {
  titre: string;
  description: string;
  typeTache: TypeTache;
  priorite: PrioriteTache;
  dateDebut: string;
  dateFin: string;
  commentaireCoach: string;
}

interface SousTacheForm {
  titre: string;
  description: string;
  priorite: PrioriteTache;
  dateDebut: string;
  dateFin: string;
  commentaireCoach: string;
}

@Component({ selector:'app-coach-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class CoachProjetsComponent implements OnInit {
  private readonly apiUrl = 'http://localhost:8084/khotwa';

  readonly boardColumns: CoachBoardColumn[] = [
    { key: 'A_FAIRE', title: 'A_FAIRE', subtitle: 'To launch', tone: 'teal' },
    { key: 'EN_COURS', title: 'EN_COURS', subtitle: 'Execution', tone: 'teal' },
    { key: 'A_CORRIGER', title: 'A_CORRIGER', subtitle: 'Coach fix requested', tone: 'red' },
    { key: 'EN_CORRECTION', title: 'EN_CORRECTION', subtitle: 'Resubmitted', tone: 'amber' },
    { key: 'TERMINEE', title: 'TERMINEE', subtitle: 'Done', tone: 'green' },
  ];

  selectedProjetId = '';
  activeWorkspaceView: CoachWorkspaceView = 'TRIAGE';
  activeTriageFilter: TriageFilter = 'ALL';
  expandedTaskId: number | null = null;
  showCreateTaskModal = false;
  showCreateSubTaskModal = false;
  selectedTaskForSubTaskCreation: BackendTache | null = null;
  showCorrectionModal = false;
  correctionTarget: { type: 'PROJECT' | 'TASK' | 'SUBTASK'; id: number } | null = null;
  correctionComment = '';
  showDocumentPreviewModal = false;
  selectedDocumentForPreview: BackendDocument | null = null;
  selectedDocumentPreviewUrl = '';
  selectedDocumentPreviewMimeType = '';
  taches: BackendTache[] = [];
  sousTachesByTache: Record<number, BackendSousTache[]> = {};
  documentsBySousTache: Record<number, BackendDocument[]> = {};
  workflowProjectDocuments: BackendDocument[] = [];

  selectedTacheId = '';
  selectedSousTacheId = '';
  createdParentTaskId: number | null = null;
  quickSousTacheTitre = '';
  quickSousTacheImpact: PrioriteTache = 'MOYENNE';
  quickSousTacheTitreByTaskId: Record<number, string> = {};
  quickSousTacheImpactByTaskId: Record<number, PrioriteTache> = {};
  correctionInputOpenBySubTaskId: Record<number, boolean> = {};
  correctionCommentBySubTaskId: Record<number, string> = {};
  taskStatusDraft: Record<number, TaskStatus> = {};
  subTaskStatusDraft: Record<number, TaskStatus> = {};

  loadingTaches = false;
  loadingSousTaches: Record<number, boolean> = {};
  loadingDocuments: Record<number, boolean> = {};
  message = '';

  tacheForm: TacheForm = this.createTacheForm();
  sousTacheForm: SousTacheForm = this.createSousTacheForm();

  readonly typeTacheOptions: TypeTache[] = ['DOCUMENT', 'ANALYSE', 'PITCH', 'POC', 'BUSINESS_MODEL', 'ETUDE_MARCHE', 'LEGAL', 'FINANCIER', 'TECHNIQUE', 'AUTRE'];
  readonly prioriteOptions: PrioriteTache[] = ['BASSE', 'MOYENNE', 'HAUTE', 'CRITIQUE'];
  readonly taskStatusOptions: TaskStatus[] = ['A_FAIRE', 'EN_COURS', 'A_CORRIGER', 'EN_CORRECTION', 'TERMINEE', 'EN_RETARD', 'BLOQUEE'];
  readonly triageFilters: Array<{ key: TriageFilter; label: string }> = [
    { key: 'ALL', label: 'All' },
    { key: 'NEEDS_CORRECTION', label: 'Needs correction' },
    { key: 'RESUBMITTED', label: 'Re-submitted' },
    { key: 'BLOCKED_LATE', label: 'Blocked/Late' },
    { key: 'READY_TO_VALIDATE', label: 'Ready to validate' },
  ];

  constructor(
    public projetService: ProjetService,
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.projetService.loadCoachAssignedProjects().subscribe({
      next: (projets) => {
        if (projets.length > 0) {
          this.selectedProjetId = projets[0].id;
          this.loadTachesForSelectedProjet();
        }
      },
      error: () => {
        this.message = 'Unable to load assigned projects from backend.';
      }
    });
  }

  get projets() { return this.projetService.projets; }

  get selectedProjet() {
    return this.projets.find((p) => p.id === this.selectedProjetId) ?? null;
  }

  onSelectedProjetChange(): void {
    this.selectedTacheId = '';
    this.selectedSousTacheId = '';
    this.expandedTaskId = null;
    this.showCreateSubTaskModal = false;
    this.selectedTaskForSubTaskCreation = null;
    this.sousTachesByTache = {};
    this.documentsBySousTache = {};
    this.workflowProjectDocuments = [];
    this.taskStatusDraft = {};
    this.subTaskStatusDraft = {};
    this.activeTriageFilter = 'ALL';
    this.loadTachesForSelectedProjet();
    this.loadProjectDocuments();
  }

  selectProjectFromList(projectId: string): void {
    if (!projectId || this.selectedProjetId === projectId) {
      return;
    }
    this.selectedProjetId = projectId;
    this.onSelectedProjetChange();
  }

  switchWorkspaceView(view: CoachWorkspaceView): void {
    this.activeWorkspaceView = view;
    if (view === 'DELIVERABLES') {
      this.loadProjectDocuments();
    }
  }

  setTriageFilter(filter: TriageFilter): void {
    this.activeTriageFilter = filter;
  }

  openCreateTaskModal(): void {
    this.tacheForm = this.createTacheForm();
    this.createdParentTaskId = null;
    this.quickSousTacheTitre = '';
    this.quickSousTacheImpact = 'MOYENNE';
    this.showCreateTaskModal = true;
    this.message = '';
  }

  closeCreateTaskModal(): void {
    this.showCreateTaskModal = false;
    this.createdParentTaskId = null;
    this.quickSousTacheTitre = '';
  }

  demanderCorrectionProjet(): void {
    if (!this.selectedProjetId) {
      this.message = 'Please select a project first.';
      return;
    }
    this.openCorrectionModal('PROJECT', Number(this.selectedProjetId));
  }

  passerProjetEnRevue(): void {
    if (!this.selectedProjetId) {
      this.message = 'Please select a project first.';
      return;
    }

    if (!this.canPassProjectToReview()) {
      this.message = 'All tasks must be started before moving the project to review.';
      return;
    }

    this.http.post<unknown>(`${this.apiUrl}/coach/projets/${this.selectedProjetId}/passer-en-revue`, {}).subscribe({
      next: () => {
        this.message = 'Project moved to review.';
        this.refreshProjects();
      },
      error: (err) => {
        this.message = this.parseHttpError(err, 'Unable to move project to review.');
      }
    });
  }

  validerProjet(): void {
    if (!this.selectedProjetId) {
      this.message = 'Please select a project first.';
      return;
    }

    if (!this.canValidateProject()) {
      this.message = 'The project must already be in review before validation.';
      return;
    }

    this.http.post<unknown>(`${this.apiUrl}/coach/projets/${this.selectedProjetId}/valider`, {}).subscribe({
      next: () => {
        this.message = 'Project validated.';
        this.refreshProjects();
      },
      error: (err) => {
        this.message = this.parseHttpError(err, 'Unable to validate project.');
      }
    });
  }

  updateTaskStatus(tache: BackendTache): void {
    const statutTache = this.taskStatusDraft[tache.id] ?? tache.statutTache;

    this.http.patch<BackendTache>(`${this.apiUrl}/coach/taches/${tache.id}/statut`, {
      statutTache,
      justificationEntrepreneur: tache.justificationEntrepreneur,
      commentaireCoach: tache.commentaireCoach,
    }).subscribe({
      next: () => {
        this.message = `Task ${tache.titre} updated.`;
        this.loadTachesForSelectedProjet();
        this.loadSousTaches(tache.id);
      },
      error: () => {
        this.message = 'Unable to update task status.';
      }
    });
  }

  updateSousTacheStatus(sousTache: BackendSousTache): void {
    const statutSousTache = this.subTaskStatusDraft[sousTache.id] ?? sousTache.statutSousTache;

    this.http.patch<BackendSousTache>(`${this.apiUrl}/coach/sous-taches/${sousTache.id}/statut`, {
      statutSousTache,
      justificationEntrepreneur: sousTache.justificationEntrepreneur,
      commentaireCoach: sousTache.commentaireCoach,
    }).subscribe({
      next: () => {
        this.message = `Sub-task ${sousTache.titre} updated.`;
        this.loadSousTaches(sousTache.tacheId);
        this.loadTachesForSelectedProjet();
      },
      error: () => {
        this.message = 'Unable to update sub-task status.';
      }
    });
  }

  demanderCorrectionTache(tache: BackendTache): void {
    this.openCorrectionModal('TASK', tache.id);
  }

  demanderCorrectionSousTache(sousTache: BackendSousTache): void {
    this.openCorrectionModal('SUBTASK', sousTache.id);
  }

  approuverCorrectionSousTache(sousTache: BackendSousTache): void {
    this.http.patch<BackendSousTache>(`${this.apiUrl}/coach/sous-taches/${sousTache.id}/statut`, {
      statutSousTache: 'TERMINEE',
      justificationEntrepreneur: sousTache.justificationEntrepreneur,
      commentaireCoach: sousTache.commentaireCoach,
    }).subscribe({
      next: () => {
        this.message = 'Sub-task correction approved.';
        this.loadSousTaches(sousTache.tacheId);
        this.loadTachesForSelectedProjet();
        this.refreshProjects();
      },
      error: (err) => {
        this.message = this.parseHttpError(err, 'Unable to approve sub-task correction.');
      }
    });
  }

  createTache(): void {
    if (!this.selectedProjetId || !this.tacheForm.titre.trim()) {
      this.message = 'Please select a project and fill task title.';
      return;
    }

    const coachId = this.getCurrentCoachId();
    if (!coachId) {
      this.message = 'Coach session not found. Please sign in again.';
      return;
    }

    const payload = {
      titre: this.tacheForm.titre.trim(),
      description: this.tacheForm.description.trim(),
      typeTache: this.tacheForm.typeTache,
      priorite: this.tacheForm.priorite,
      dateDebut: this.tacheForm.dateDebut || null,
      dateFin: this.tacheForm.dateFin || null,
      commentaireCoach: this.tacheForm.commentaireCoach.trim(),
    };

    this.http.post<BackendTache>(`${this.apiUrl}/coach/projets/${this.selectedProjetId}/taches`, payload, {
      params: { coachId: String(coachId) }
    }).subscribe({
      next: (task) => {
        this.createdParentTaskId = task.id;
        this.selectedTacheId = String(task.id);
        this.expandedTaskId = task.id;
        this.message = 'Task created. You can now chain sub-tasks with Enter.';
        this.loadTachesForSelectedProjet();
      },
      error: () => {
        this.message = 'Task creation failed.';
      }
    });
  }

  addQuickSousTacheFromCreateModal(event?: KeyboardEvent): void {
    if (event) {
      event.preventDefault();
    }

    if (!this.createdParentTaskId || !this.quickSousTacheTitre.trim()) {
      this.message = 'Create the parent task first, then fill sub-task title.';
      return;
    }

    const payload = {
      titre: this.quickSousTacheTitre.trim(),
      description: '',
      priorite: this.quickSousTacheImpact,
      dateDebut: null,
      dateFin: null,
      commentaireCoach: '',
    };

    this.http.post<BackendSousTache>(`${this.apiUrl}/coach/taches/${this.createdParentTaskId}/sous-taches`, payload).subscribe({
      next: () => {
        this.quickSousTacheTitre = '';
        this.message = 'Sub-task added. Press Enter to add another.';
        this.loadSousTaches(this.createdParentTaskId!);
      },
      error: () => {
        this.message = 'Sub-task creation failed.';
      }
    });
  }

  addSousTacheToExistingTask(task: BackendTache, event?: KeyboardEvent): void {
    if (event) {
      event.preventDefault();
    }

    const titre = (this.quickSousTacheTitreByTaskId[task.id] ?? '').trim();
    const priorite = this.quickSousTacheImpactByTaskId[task.id] ?? 'MOYENNE';

    if (!titre) {
      this.message = 'Sub-task title is required.';
      return;
    }

    const payload = {
      titre,
      description: '',
      priorite,
      dateDebut: null,
      dateFin: null,
      commentaireCoach: '',
    };

    this.http.post<BackendSousTache>(`${this.apiUrl}/coach/taches/${task.id}/sous-taches`, payload).subscribe({
      next: () => {
        this.quickSousTacheTitreByTaskId[task.id] = '';
        this.message = 'Sub-task added.';
        this.loadSousTaches(task.id);
      },
      error: () => {
        this.message = 'Sub-task creation failed.';
      }
    });
  }

  finishTaskCreationFlow(): void {
    if (!this.createdParentTaskId) {
      this.message = 'Please create the parent task first.';
      return;
    }
    this.closeCreateTaskModal();
  }

  openCreateSubTaskModalForTask(task: BackendTache): void {
    this.selectedTaskForSubTaskCreation = task;
    this.sousTacheForm = this.createSousTacheForm();
    this.showCreateSubTaskModal = true;
    this.message = '';
  }

  closeCreateSubTaskModal(): void {
    this.showCreateSubTaskModal = false;
    this.selectedTaskForSubTaskCreation = null;
    this.sousTacheForm = this.createSousTacheForm();
  }

  createSousTacheFromModal(): void {
    if (!this.selectedTaskForSubTaskCreation) {
      this.message = 'No parent task selected.';
      return;
    }

    if (!this.sousTacheForm.titre.trim()) {
      this.message = 'Sub-task title is required.';
      return;
    }

    const payload = {
      titre: this.sousTacheForm.titre.trim(),
      description: this.sousTacheForm.description.trim(),
      priorite: this.sousTacheForm.priorite,
      dateDebut: this.sousTacheForm.dateDebut || null,
      dateFin: this.sousTacheForm.dateFin || null,
      commentaireCoach: this.sousTacheForm.commentaireCoach.trim(),
    };

    this.http.post<BackendSousTache>(`${this.apiUrl}/coach/taches/${this.selectedTaskForSubTaskCreation.id}/sous-taches`, payload).subscribe({
      next: () => {
        this.message = 'Sub-task created successfully.';
        this.loadSousTaches(this.selectedTaskForSubTaskCreation!.id);
        this.closeCreateSubTaskModal();
      },
      error: () => {
        this.message = 'Sub-task creation failed.';
      }
    });
  }

  shouldShowBinaryReviewActions(subTask: BackendSousTache): boolean {
    return subTask.statutSousTache === 'TERMINEE' || subTask.statutSousTache === 'EN_CORRECTION';
  }

  toggleReCorrectionCommentInput(subTask: BackendSousTache): void {
    this.correctionInputOpenBySubTaskId[subTask.id] = !this.correctionInputOpenBySubTaskId[subTask.id];
    if (!this.correctionCommentBySubTaskId[subTask.id]) {
      this.correctionCommentBySubTaskId[subTask.id] = '';
    }
  }

  demanderReCorrectionSousTacheAvecCommentaire(subTask: BackendSousTache): void {
    const comment = (this.correctionCommentBySubTaskId[subTask.id] ?? '').trim();
    if (!comment) {
      this.message = 'Please add a correction comment before sending back.';
      return;
    }

    this.http.post(`${this.apiUrl}/coach/sous-taches/${subTask.id}/demander-correction`, { commentaire: comment }).subscribe({
      next: () => {
        this.message = 'Re-correction requested successfully.';
        this.correctionInputOpenBySubTaskId[subTask.id] = false;
        this.correctionCommentBySubTaskId[subTask.id] = '';
        this.loadSousTaches(subTask.tacheId);
        this.loadTachesForSelectedProjet();
      },
      error: (err) => {
        this.message = this.parseHttpError(err, 'Unable to request re-correction.');
      }
    });
  }

  loadSousTaches(tacheId: number): void {
    this.loadingSousTaches[tacheId] = true;
    this.http.get<BackendSousTache[]>(`${this.apiUrl}/coach/taches/${tacheId}/sous-taches`).subscribe({
      next: (rows) => {
        this.sousTachesByTache[tacheId] = this.sortSubTaskQueue(rows);
        this.quickSousTacheImpactByTaskId[tacheId] = this.quickSousTacheImpactByTaskId[tacheId] ?? 'MOYENNE';
        this.subTaskStatusDraft = rows.reduce((acc, row) => {
          acc[row.id] = row.statutSousTache;
          return acc;
        }, {} as Record<number, TaskStatus>);
        for (const row of rows) {
          this.loadDocuments(row.id);
        }
        this.loadingSousTaches[tacheId] = false;
      },
      error: () => {
        this.loadingSousTaches[tacheId] = false;
        this.message = 'Unable to load sub-tasks.';
      }
    });
  }

  loadDocuments(sousTacheId: number): void {
    this.loadingDocuments[sousTacheId] = true;
    this.http.get<BackendDocument[]>(`${this.apiUrl}/coach/sous-taches/${sousTacheId}/documents`).subscribe({
      next: (rows) => {
        this.documentsBySousTache[sousTacheId] = rows;
        this.loadingDocuments[sousTacheId] = false;
      },
      error: () => {
        this.loadingDocuments[sousTacheId] = false;
        this.message = 'Unable to load documents.';
      }
    });
  }

  loadProjectDocuments(): void {
    if (!this.selectedProjetId) {
      this.workflowProjectDocuments = [];
      return;
    }

    this.http.get<BackendDocument[]>(`${this.apiUrl}/coach/projets/${this.selectedProjetId}/documents`).subscribe({
      next: (rows) => {
        this.workflowProjectDocuments = rows;
      },
      error: () => {
        this.message = 'Unable to load project deliverables.';
      }
    });
  }

  downloadDocument(document: BackendDocument): void {
    this.http.get(`${this.apiUrl}/coach/documents/${document.id}/download`, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = window.document.createElement('a');
        a.href = url;
        a.download = document.nomOriginal || 'document';
        window.document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      },
      error: () => {
        this.message = 'Unable to download document.';
      }
    });
  }

  canPreviewDocument(doc: BackendDocument): boolean {
    const mime = (doc.typeContenu || '').toLowerCase();
    return mime.startsWith('image/') || mime === 'application/pdf';
  }

  openDocumentPreview(document: BackendDocument): void {
    if (!this.canPreviewDocument(document)) {
      this.downloadDocument(document);
      return;
    }

    this.http.get(`${this.apiUrl}/coach/documents/${document.id}/download`, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        this.closeDocumentPreviewModal();
        this.selectedDocumentPreviewUrl = URL.createObjectURL(blob);
        this.selectedDocumentPreviewMimeType = document.typeContenu || blob.type || 'application/octet-stream';
        this.selectedDocumentForPreview = document;
        this.showDocumentPreviewModal = true;
      },
      error: () => {
        this.message = 'Unable to open document preview.';
      }
    });
  }

  closeDocumentPreviewModal(): void {
    this.showDocumentPreviewModal = false;
    if (this.selectedDocumentPreviewUrl) {
      URL.revokeObjectURL(this.selectedDocumentPreviewUrl);
      this.selectedDocumentPreviewUrl = '';
    }
    this.selectedDocumentForPreview = null;
    this.selectedDocumentPreviewMimeType = '';
  }

  openTaskWorkspace(task: BackendTache): void {
    this.activeWorkspaceView = 'KANBAN';
    this.expandedTaskId = this.expandedTaskId === task.id ? null : task.id;
    if (this.expandedTaskId === task.id) {
      this.loadSousTaches(task.id);
    }
  }

  closeTaskWorkspace(): void {
    this.expandedTaskId = null;
  }

  isTaskExpanded(taskId: number): boolean {
    return this.expandedTaskId === taskId;
  }

  getWorkflowTasksByStatus(status: TaskStatus): BackendTache[] {
    if (status === 'EN_COURS') {
      return this.taches.filter((task) => task.statutTache === 'EN_COURS' || task.statutTache === 'EN_RETARD' || task.statutTache === 'BLOQUEE');
    }
    return this.taches.filter((task) => task.statutTache === status);
  }

  getSubTasksForTask(tacheId: number): BackendSousTache[] {
    return this.sousTachesByTache[tacheId] ?? [];
  }

  getSubTaskCount(tacheId: number): number {
    return this.getSubTasksForTask(tacheId).length;
  }

  getProjectDeliverables(): BackendDocument[] {
    if (this.workflowProjectDocuments.length) {
      return this.workflowProjectDocuments;
    }
    const docs: BackendDocument[] = [];
    Object.values(this.documentsBySousTache).forEach((rows) => docs.push(...rows));
    return docs;
  }

  openCorrectionModal(type: 'PROJECT' | 'TASK' | 'SUBTASK', id: number): void {
    this.correctionTarget = { type, id };
    this.correctionComment = '';
    this.showCorrectionModal = true;
  }

  closeCorrectionModal(): void {
    this.showCorrectionModal = false;
    this.correctionTarget = null;
    this.correctionComment = '';
  }

  submitCorrectionRequest(): void {
    const comment = this.correctionComment.trim();
    if (!this.correctionTarget) {
      return;
    }
    if (!comment) {
      this.message = 'Correction comment is required.';
      return;
    }

    const { type, id } = this.correctionTarget;
    let endpoint = '';
    let successMessage = '';

    if (type === 'PROJECT') {
      endpoint = `${this.apiUrl}/coach/projets/${id}/demander-correction`;
      successMessage = 'Project sent back for correction.';
    } else if (type === 'TASK') {
      endpoint = `${this.apiUrl}/coach/taches/${id}/demander-correction`;
      successMessage = 'Task correction requested.';
    } else {
      endpoint = `${this.apiUrl}/coach/sous-taches/${id}/demander-correction`;
      successMessage = 'Sub-task correction requested.';
    }

    this.http.post(endpoint, { commentaire: comment }).subscribe({
      next: () => {
        this.closeCorrectionModal();
        this.message = successMessage;
        this.loadTachesForSelectedProjet();
        this.refreshProjects();
      },
      error: (err) => {
        this.message = this.parseHttpError(err, 'Unable to request correction.');
      }
    });
  }

  getTriageTasks(): BackendTache[] {
    const filtered = this.taches.filter((task) => {
      if (this.activeTriageFilter === 'ALL') {
        return true;
      }
      if (this.activeTriageFilter === 'NEEDS_CORRECTION') {
        return task.statutTache === 'A_CORRIGER';
      }
      if (this.activeTriageFilter === 'RESUBMITTED') {
        return task.statutTache === 'EN_CORRECTION';
      }
      if (this.activeTriageFilter === 'BLOCKED_LATE') {
        return task.statutTache === 'BLOQUEE' || task.statutTache === 'EN_RETARD' || task.retardJours > 0;
      }
      return task.statutTache === 'TERMINEE';
    });

    return [...filtered].sort((a, b) => this.getTaskUrgencyScore(b) - this.getTaskUrgencyScore(a));
  }

  getTriageSectionTasks(section: 'NOW' | 'WAITING' | 'STABLE'): BackendTache[] {
    return this.getTriageTasks().filter((task) => {
      if (section === 'NOW') {
        return task.statutTache === 'A_CORRIGER' || task.statutTache === 'BLOQUEE' || task.statutTache === 'EN_RETARD';
      }
      if (section === 'WAITING') {
        return task.statutTache === 'EN_CORRECTION' || task.statutTache === 'EN_COURS';
      }
      return task.statutTache === 'TERMINEE' || task.statutTache === 'A_FAIRE';
    });
  }

  getProjectQuickCount(projectId: string): number {
    return this.projets.find((p) => p.id === projectId)?.disciplineScore ?? 0;
  }

  getCorrectionQueueCount(): number {
    return this.taches.filter((task) => task.statutTache === 'A_CORRIGER' || task.statutTache === 'EN_CORRECTION').length;
  }

  getCorrectionTasks(): BackendTache[] {
    return this.taches.filter((task) => task.statutTache === 'A_CORRIGER' || task.statutTache === 'EN_CORRECTION');
  }

  getKanbanHealthHint(): string {
    if (this.getCorrectionQueueCount() === 0) {
      return 'Workflow is stable. No pending correction queue.';
    }
    return 'Correction flow active. Prioritize cards in A_CORRIGER and EN_CORRECTION.';
  }

  tacheProgressLabel(t: BackendTache): string {
    if (t.statutTache === 'TERMINEE') {
      return '100%';
    }
    if (t.statutTache === 'EN_CORRECTION') {
      return 'Waiting coach review';
    }
    if (t.statutTache === 'A_CORRIGER') {
      return 'Correction requested';
    }
    if (t.statutTache === 'EN_COURS') {
      return '50%';
    }
    if (t.statutTache === 'EN_RETARD' || t.statutTache === 'BLOQUEE') {
      return 'Risk';
    }
    return '0%';
  }

  disciplineLevel(score: number): 'good' | 'watch' | 'risk' {
    if (score >= 30) {
      return 'good';
    }
    if (score >= 0) {
      return 'watch';
    }
    return 'risk';
  }

  impactHintTask(task: BackendTache): string {
    if (task.statutTache === 'BLOQUEE') {
      return 'Blockage penalty: -15';
    }
    if (task.retardJours > 7) {
      return 'Long delay penalty: -10';
    }
    if (task.statutTache === 'EN_RETARD') {
      return 'Delay penalty: -5';
    }
    if (task.statutTache === 'TERMINEE') {
      return task.retardJours > 0 ? 'Completed late: -5' : 'Completed on time: +10';
    }
    return 'No direct score impact yet';
  }

  impactHintSubTask(subTask: BackendSousTache): string {
    if (subTask.statutSousTache === 'BLOQUEE') {
      return 'Blockage penalty: -15';
    }
    if (subTask.retardJours > 7) {
      return 'Long delay penalty: -10';
    }
    if (subTask.statutSousTache === 'EN_RETARD') {
      return 'Delay penalty: -3';
    }
    if (subTask.statutSousTache === 'TERMINEE') {
      return subTask.retardJours > 0 ? 'Completed late: -3' : 'Completed on time: +5';
    }
    return 'No direct score impact yet';
  }

  isBlockedOrLate(statut: string): boolean {
    return statut === 'EN_RETARD' || statut === 'BLOQUEE' || statut === 'A_CORRIGER';
  }

  isCorrectionResubmittedTask(task: BackendTache): boolean {
    return task.statutTache === 'EN_CORRECTION';
  }

  isCorrectionResubmittedSubTask(subTask: BackendSousTache): boolean {
    return subTask.statutSousTache === 'EN_CORRECTION';
  }

  canPassProjectToReview(): boolean {
    if (!this.selectedProjetId || this.taches.length === 0) {
      return false;
    }

    return this.taches.every((task) => task.statutTache !== 'A_FAIRE');
  }

  canValidateProject(): boolean {
    return this.selectedProjet?.etatValidation === 'EN_REVUE';
  }

  private loadTachesForSelectedProjet(): void {
    if (!this.selectedProjetId) {
      this.taches = [];
      return;
    }
    this.loadingTaches = true;
    this.http.get<BackendTache[]>(`${this.apiUrl}/coach/projets/${this.selectedProjetId}/taches`).subscribe({
      next: (rows) => {
        this.taches = this.sortTaskQueue(rows);
        this.taskStatusDraft = rows.reduce((acc, row) => {
          acc[row.id] = row.statutTache;
          return acc;
        }, {} as Record<number, TaskStatus>);
        for (const task of rows) {
          this.loadSousTaches(task.id);
        }
        this.loadingTaches = false;
      },
      error: () => {
        this.loadingTaches = false;
        this.message = 'Unable to load project tasks.';
      }
    });
  }

  private parseHttpError(err: unknown, fallback: string): string {
    const message = (err as { error?: { message?: string } })?.error?.message;
    return (typeof message === 'string' && message.trim()) ? message : fallback;
  }

  private refreshProjects(): void {
    this.projetService.loadCoachAssignedProjects().subscribe({
      next: () => {
        const stillSelected = this.projets.find((p) => p.id === this.selectedProjetId);
        if (!stillSelected && this.projets.length > 0) {
          this.selectedProjetId = this.projets[0].id;
          this.loadTachesForSelectedProjet();
        }
      },
      error: () => {
        this.message = 'Unable to refresh assigned projects.';
      }
    });
  }

  private getCurrentCoachId(): number {
    const idUser = this.authService.currentUser?.idUser;
    if (typeof idUser === 'number' && Number.isFinite(idUser) && idUser > 0) {
      return idUser;
    }

    const rawId = this.authService.currentUser?.id ?? '';
    const parsed = Number(rawId);
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }

    const digits = rawId.replace(/\D/g, '');
    const fallback = Number(digits);
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }

  private createTacheForm(): TacheForm {
    return {
      titre: '',
      description: '',
      typeTache: 'DOCUMENT',
      priorite: 'MOYENNE',
      dateDebut: '',
      dateFin: '',
      commentaireCoach: '',
    };
  }

  private createSousTacheForm(): SousTacheForm {
    return {
      titre: '',
      description: '',
      priorite: 'MOYENNE',
      dateDebut: '',
      dateFin: '',
      commentaireCoach: '',
    };
  }

  private sortTaskQueue(tasks: BackendTache[]): BackendTache[] {
    const priority: Record<TaskStatus, number> = {
      EN_CORRECTION: 0,
      TERMINEE: 1,
      A_CORRIGER: 2,
      EN_COURS: 3,
      EN_RETARD: 4,
      BLOQUEE: 5,
      A_FAIRE: 6,
    };

    return [...tasks].sort((a, b) => {
      const pA = priority[a.statutTache] ?? 99;
      const pB = priority[b.statutTache] ?? 99;
      if (pA !== pB) {
        return pA - pB;
      }
      return a.id - b.id;
    });
  }

  private sortSubTaskQueue(subTasks: BackendSousTache[]): BackendSousTache[] {
    const priority: Record<TaskStatus, number> = {
      EN_CORRECTION: 0,
      TERMINEE: 1,
      A_CORRIGER: 2,
      EN_COURS: 3,
      EN_RETARD: 4,
      BLOQUEE: 5,
      A_FAIRE: 6,
    };

    return [...subTasks].sort((a, b) => {
      const pA = priority[a.statutSousTache] ?? 99;
      const pB = priority[b.statutSousTache] ?? 99;
      if (pA !== pB) {
        return pA - pB;
      }
      return a.id - b.id;
    });
  }

  private getTaskUrgencyScore(task: BackendTache): number {
    let score = 0;
    if (task.statutTache === 'A_CORRIGER') {
      score += 80;
    }
    if (task.statutTache === 'BLOQUEE') {
      score += 70;
    }
    if (task.statutTache === 'EN_RETARD') {
      score += 55;
    }
    if (task.statutTache === 'EN_CORRECTION') {
      score += 45;
    }
    if (task.priorite === 'CRITIQUE') {
      score += 40;
    }
    if (task.priorite === 'HAUTE') {
      score += 25;
    }
    score += Math.min(30, Math.max(0, task.retardJours * 4));
    return score;
  }
}
