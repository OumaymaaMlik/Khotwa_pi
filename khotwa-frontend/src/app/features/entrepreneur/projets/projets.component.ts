import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ProjetService, ProjetDraftInput } from '../../../core/services/projet.service';
import { Projet, getDisciplineLevelClass, formatProjetStatusLabel } from '../../../core/models';

type StatutTache = 'A_FAIRE' | 'EN_COURS' | 'A_CORRIGER' | 'EN_CORRECTION' | 'TERMINEE' | 'EN_RETARD' | 'BLOQUEE';
type WorkspaceView = 'KANBAN' | 'CALENDAR' | 'DELIVERABLES';

interface AssignedCoach {
  coachId: number;
  coachNomAffiche?: string;
  roleCoachProjet: 'COACH_PRINCIPAL' | 'COACH_SECONDAIRE' | 'EXPERT_METIER';
}

interface WorkflowTache {
  id: number;
  titre: string;
  description: string;
  priorite: string;
  statutTache: StatutTache;
  dateDebut?: string;
  dateFin?: string;
  retardJours: number;
  commentaireCoach?: string;
  justificationEntrepreneur?: string;
}

interface WorkflowSousTache {
  id: number;
  tacheId: number;
  titre: string;
  description: string;
  priorite: string;
  statutSousTache: StatutTache;
  dateDebut?: string;
  dateFin?: string;
  retardJours: number;
  commentaireCoach?: string;
  justificationEntrepreneur?: string;
}

interface WorkflowDocument {
  id: number;
  nomOriginal: string;
  typeContenu: string;
  dateUpload: string;
}

interface WorkflowBoardColumn {
  key: StatutTache;
  title: string;
  subtitle: string;
  tone: 'teal' | 'amber' | 'green' | 'red';
}

interface CalendarDayCell {
  date: Date | null;
  tasks: WorkflowTache[];
  isCurrentMonth: boolean;
  isToday: boolean;
}

@Component({ selector:'app-entrepreneur-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class EntrepreneurProjetsComponent implements OnInit, OnDestroy {
  private readonly apiUrl = 'http://localhost:8084/khotwa';

  readonly boardColumns: WorkflowBoardColumn[] = [
    { key: 'A_FAIRE', title: 'A_FAIRE', subtitle: 'Waiting to start', tone: 'teal' },
    { key: 'EN_COURS', title: 'EN_COURS', subtitle: 'In progress', tone: 'teal' },
    { key: 'A_CORRIGER', title: 'A_CORRIGER', subtitle: 'Needs correction', tone: 'red' },
    { key: 'EN_CORRECTION', title: 'EN_CORRECTION', subtitle: 'Under correction', tone: 'amber' },
    { key: 'TERMINEE', title: 'TERMINEE', subtitle: 'Completed', tone: 'green' },
  ];

  showProjectModal = false;
  showCreateProjectModal = false;
  editingProject: Projet | null = null;
  submitMessage = '';
  isSubmitting = false;

  activeWorkspaceView: WorkspaceView = 'KANBAN';
  projectSelectorOpen = false;
  expandedTaskId: number | null = null;
  draggedTaskId: number | null = null;
  showTaskModal = false;
  selectedTaskForModal: WorkflowTache | null = null;
  showSousTacheSubmitModal = false;
  selectedSousTacheForSubmit: WorkflowSousTache | null = null;
  submissionProgress = 0;
  submissionStateLabel = '';
  submissionToastMessage = '';
  showSubmissionToast = false;
  showDeliverablePreviewModal = false;
  selectedDeliverableForPreview: WorkflowDocument | null = null;
  selectedDeliverablePreviewUrl = '';
  selectedDeliverablePreviewMimeType = '';
  currentCalendarCursor = this.createMonthAnchor(new Date());
  createProjectStep = 1;
  readonly createProjectStepCount = 4;

  selectedWorkflowProject: Projet | null = null;
  assignedCoachs: AssignedCoach[] = [];
  workflowTaches: WorkflowTache[] = [];
  workflowSousTachesByTache: Record<number, WorkflowSousTache[]> = {};
  workflowDocumentsBySousTache: Record<number, WorkflowDocument[]> = {};
  workflowProjectDocuments: WorkflowDocument[] = [];
  loadingSousTachesByTache: Record<number, boolean> = {};
  subTasksLoadedByTache: Record<number, boolean> = {};

  sousTacheStatusById: Record<number, StatutTache> = {};
  sousTacheJustificationById: Record<number, string> = {};
  sousTacheExtensionDateById: Record<number, string> = {};

  uploadDocNameBySousTacheId: Record<number, string> = {};
  uploadDocTypeBySousTacheId: Record<number, string> = {};
  uploadFileBySousTacheId: Record<number, File | null> = {};

  readonly taskStatusOptions: StatutTache[] = ['A_FAIRE', 'EN_COURS', 'A_CORRIGER', 'EN_CORRECTION', 'TERMINEE', 'EN_RETARD', 'BLOQUEE'];
  readonly stageOptions: Array<{ value: ProjetDraftInput['stadeProjet']; label: string }> = [
    { value: 'IDEE', label: 'Idée' },
    { value: 'PROTOTYPE', label: 'Prototype' },
    { value: 'MVP', label: 'MVP' },
    { value: 'COMMERCIALISATION', label: 'Traction' },
  ];

  form: ProjetDraftInput = this.createEmptyForm();
  conversationForm = {
    nomStartup: '',
    secteur: '',
    stadeProjet: 'IDEE' as ProjetDraftInput['stadeProjet'],
    pitch: '',
  };

  constructor(
    public projetService: ProjetService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Security check: ensure user is authenticated
    if (!this.authService.currentUser) {
      this.submitMessage = 'You must be logged in to view projects.';
      setTimeout(() => this.router.navigate(['/login']), 2000);
      return;
    }

    if (!this.authService.isEntrepreneur) {
      this.submitMessage = 'Only entrepreneurs can access this section.';
      setTimeout(() => this.router.navigate([this.authService.getDefaultRoute()]), 2000);
      return;
    }

    this.projetService.loadEntrepreneurProjects().subscribe({
      next: (projects) => {
        if (projects.length > 0) {
          const currentProject = this.selectedWorkflowProject
            ? projects.find((project) => project.id === this.selectedWorkflowProject?.id)
            : null;
          this.selectProject(currentProject ?? projects[0]);
        }
      },
      error: () => {
        this.submitMessage = 'Unable to load projects from backend.';
      }
    });
  }

  ngOnDestroy(): void {
    this.revokeDeliverablePreviewUrl();
  }
  get filteredProjets(): Projet[] {
    return this.projetService.projetsEntrepreneur;
  }

  get selectedProjectName(): string {
    return this.selectedWorkflowProject?.titre ?? 'Choisir un projet';
  }

  toggleProjectSelector(): void {
    this.projectSelectorOpen = !this.projectSelectorOpen;
  }

  switchWorkspaceView(view: WorkspaceView): void {
    this.activeWorkspaceView = view;
    if (view === 'DELIVERABLES' && this.selectedWorkflowProject) {
      this.loadProjectDocuments(this.selectedWorkflowProject.id);
    }
  }

  openCreateProjectConversation(): void {
    this.submitMessage = '';
    this.createProjectStep = 1;
    this.conversationForm = {
      nomStartup: '',
      secteur: '',
      stadeProjet: 'IDEE',
      pitch: '',
    };
    this.showCreateProjectModal = true;
  }

  closeCreateProjectConversation(): void {
    this.showCreateProjectModal = false;
  }

  nextCreateStep(): void {
    if (!this.canContinueCurrentCreateStep()) {
      this.submitMessage = 'Merci de compléter le champ avant de continuer.';
      return;
    }
    this.submitMessage = '';
    this.createProjectStep = Math.min(this.createProjectStep + 1, this.createProjectStepCount);
  }

  previousCreateStep(): void {
    this.submitMessage = '';
    this.createProjectStep = Math.max(this.createProjectStep - 1, 1);
  }

  canContinueCurrentCreateStep(): boolean {
    if (this.createProjectStep === 1) {
      return this.conversationForm.nomStartup.trim().length >= 3;
    }
    if (this.createProjectStep === 2) {
      return this.conversationForm.secteur.trim().length >= 2;
    }
    if (this.createProjectStep === 3) {
      return !!this.conversationForm.stadeProjet;
    }
    return this.conversationForm.pitch.trim().length >= 10;
  }

  createProjectFromConversation(): void {
    const name = this.conversationForm.nomStartup.trim();
    const secteur = this.conversationForm.secteur.trim();
    const pitch = this.conversationForm.pitch.trim();

    if (name.length < 3 || secteur.length < 2 || pitch.length < 10) {
      this.submitMessage = 'Complétez les étapes requises avant de valider.';
      return;
    }

    const draft: ProjetDraftInput = {
      nomStartup: name,
      description: pitch,
      secteur,
      problemeAdresse: pitch,
      solutionProposee: `Solution proposée pour ${name}`,
      businessModel: `Modèle économique initial de ${name}`,
      stadeProjet: this.conversationForm.stadeProjet,
      innovationDescription: 'Initial draft generated from conversational flow.',
      scalabiliteDescription: 'Scalability plan to be detailed with coach.',
      pocDisponible: false,
    };

    this.isSubmitting = true;
    this.submitMessage = '';

    this.projetService.createProjet(draft).subscribe({
      next: (project) => {
        this.isSubmitting = false;
        this.showCreateProjectModal = false;
        this.submitMessage = 'Projet créé avec succès.';
        this.selectProject(project);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Project creation failed. Please check backend connection and try again.');
      }
    });
  }

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

  closeProjectModal(): void { this.showProjectModal = false; }

  isFormValid(): boolean {
    return this.validateProjectForm() === null;
  }

  saveProject(): void {
    const validationError = this.validateProjectForm();
    if (validationError) {
      this.submitMessage = validationError;
      return;
    }

    // Security check: verify entrepreneur ID is valid before submit
    const entrepreneurId = this.getCurrentEntrepreneurId();
    if (entrepreneurId <= 0) {
      this.submitMessage = 'Error: Invalid user authentication. Please log in again.';
      this.authService.logout();
      this.router.navigate(['/login']);
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    if (!this.editingProject) {
      this.isSubmitting = false;
      this.submitMessage = 'Use the create button in the right panel to add a new project.';
      return;
    }

    this.projetService.updateProjet(this.editingProject.id, this.form).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Project updated as draft.';
        setTimeout(() => this.closeProjectModal(), 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Project update failed. Please try again.');
      }
    });
  }

  submitProject(project: Projet): void {
    if (!confirm('Are you sure you want to submit this project for review? You won\'t be able to edit it afterward.')) {
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.projetService.submitProjet(project.id).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Project submitted for review successfully.';
        setTimeout(() => this.projetService.loadEntrepreneurProjects().subscribe(), 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Project submission failed. Please try again.');
      }
    });
  }

  deleteProject(project: Projet): void {
    if (!confirm('Are you sure you want to delete this draft? This action cannot be undone.')) {
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.projetService.deleteProjet(project.id).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Draft deleted successfully.';
        setTimeout(() => this.projetService.loadEntrepreneurProjects().subscribe(), 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Unable to delete draft project. Please try again.');
      }
    });
  }

  openAssignedWorkflow(project: Projet): void {
    this.selectedWorkflowProject = project;
    this.projectSelectorOpen = false;
    this.expandedTaskId = null;
    this.activeWorkspaceView = 'KANBAN';
    this.assignedCoachs = [];
    this.workflowTaches = [];
    this.workflowSousTachesByTache = {};
    this.workflowDocumentsBySousTache = {};
    this.workflowProjectDocuments = [];
    this.loadingSousTachesByTache = {};
    this.subTasksLoadedByTache = {};
    this.submitMessage = '';

    this.loadAssignedCoachs(project.id);
    this.loadWorkflowTaches(project.id);
  }

  selectProject(project: Projet): void {
    this.openAssignedWorkflow(project);
  }

  isSelectedProject(project: Projet): boolean {
    return this.selectedWorkflowProject?.id === project.id;
  }

  getWorkflowTasksByStatus(status: StatutTache): WorkflowTache[] {
    if (status === 'EN_COURS') {
      return this.workflowTaches.filter((task) => task.statutTache === 'EN_COURS' || task.statutTache === 'EN_RETARD' || task.statutTache === 'BLOQUEE');
    }
    return this.workflowTaches.filter((task) => task.statutTache === status);
  }

  getTaskStatusLabel(task: WorkflowTache): string {
    if (task.statutTache === 'EN_RETARD') {
      return 'EN_COURS (retard)';
    }
    if (task.statutTache === 'BLOQUEE') {
      return 'EN_COURS (bloquée)';
    }
    return task.statutTache;
  }

  toggleTaskExpansion(task: WorkflowTache): void {
    const isOpen = this.expandedTaskId === task.id;
    this.expandedTaskId = isOpen ? null : task.id;
  }

  openTaskModal(task: WorkflowTache): void {
    this.selectedTaskForModal = task;
    this.showTaskModal = true;
    if (!this.hasLoadedSubTasks(task.id) && !this.loadingSousTachesByTache[task.id]) {
      this.loadSousTaches(task.id);
    }
  }

  closeTaskModal(): void {
    this.showTaskModal = false;
    this.selectedTaskForModal = null;
  }

  openSousTacheSubmitModal(subTask: WorkflowSousTache): void {
    if (!this.canOpenSousTacheSubmitModal(subTask)) {
      this.submitMessage = this.getSousTacheSubmissionBlockReason(subTask);
      return;
    }
    this.selectedSousTacheForSubmit = subTask;
    this.sousTacheJustificationById[subTask.id] = this.sousTacheJustificationById[subTask.id] ?? '';
    this.submissionProgress = 0;
    this.submissionStateLabel = '';
    this.showSousTacheSubmitModal = true;
  }

  closeSousTacheSubmitModal(): void {
    this.showSousTacheSubmitModal = false;
    this.selectedSousTacheForSubmit = null;
    this.submissionProgress = 0;
    this.submissionStateLabel = '';
  }

  isTaskExpanded(taskId: number): boolean {
    return this.expandedTaskId === taskId;
  }

  onTaskDragStart(task: WorkflowTache): void {
    this.draggedTaskId = task.id;
  }

  allowTaskDrop(event: DragEvent): void {
    event.preventDefault();
  }

  dropTaskInColumn(targetStatus: StatutTache): void {
    if (!this.draggedTaskId) {
      return;
    }

    const task = this.workflowTaches.find((row) => row.id === this.draggedTaskId);
    this.draggedTaskId = null;

    if (!task || task.statutTache === targetStatus) {
      return;
    }

    if (!this.isAllowedTaskTransition(task.statutTache, targetStatus)) {
      this.submitMessage = `Transition non autorisée: ${task.statutTache} -> ${targetStatus}`;
      return;
    }

    this.updateTaskStatus(task, targetStatus);
  }

  getAllWorkflowDocuments(): WorkflowDocument[] {
    if (this.workflowProjectDocuments.length) {
      return this.workflowProjectDocuments;
    }
    const documents: WorkflowDocument[] = [];
    Object.values(this.workflowDocumentsBySousTache).forEach((rows) => documents.push(...rows));
    return documents;
  }

  canPreviewDocument(doc: WorkflowDocument): boolean {
    const mime = (doc.typeContenu || '').toLowerCase();
    return mime.startsWith('image/') || mime === 'application/pdf';
  }

  openDeliverablePreview(doc: WorkflowDocument): void {
    if (!this.canPreviewDocument(doc)) {
      this.downloadDeliverable(doc);
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';
    this.http.get(`${this.apiUrl}/entrepreneur/documents/${doc.id}/download`, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        this.revokeDeliverablePreviewUrl();
        this.selectedDeliverablePreviewUrl = URL.createObjectURL(blob);
        this.selectedDeliverablePreviewMimeType = doc.typeContenu || blob.type || 'application/octet-stream';
        this.selectedDeliverableForPreview = doc;
        this.showDeliverablePreviewModal = true;
        this.isSubmitting = false;
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Impossible de charger ce livrable pour visualisation.');
      }
    });
  }

  closeDeliverablePreviewModal(): void {
    this.showDeliverablePreviewModal = false;
    this.selectedDeliverableForPreview = null;
    this.selectedDeliverablePreviewMimeType = '';
    this.revokeDeliverablePreviewUrl();
  }

  downloadDeliverable(doc: WorkflowDocument): void {
    this.isSubmitting = true;
    this.submitMessage = '';
    this.http.get(`${this.apiUrl}/entrepreneur/documents/${doc.id}/download`, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = objectUrl;
        anchor.download = doc.nomOriginal || `document-${doc.id}`;
        anchor.click();
        URL.revokeObjectURL(objectUrl);
        this.isSubmitting = false;
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Impossible de télécharger ce livrable.');
      }
    });
  }

  hasLoadedSubTasks(tacheId: number): boolean {
    return !!this.subTasksLoadedByTache[tacheId];
  }

  getSousTachesForTask(tacheId: number): WorkflowSousTache[] {
    return this.workflowSousTachesByTache[tacheId] ?? [];
  }

  getActiveProjectDisplayScore(): string {
    if (!this.selectedWorkflowProject) {
      return '--';
    }

    return String(this.selectedWorkflowProject.disciplineScore);
  }

  getActiveProjectStatusTone(project: Projet): 'teal' | 'amber' | 'green' | 'red' {
    if (this.needsCorrection(project)) {
      return 'red';
    }

    if (project.status === 'completed') {
      return 'green';
    }

    if (project.status === 'suspended') {
      return 'amber';
    }

    return 'teal';
  }

  getWorkflowScoreHint(): string {
    if (!this.selectedWorkflowProject) {
      return 'Select a project to inspect its workflow.';
    }

    const score = this.selectedWorkflowProject.disciplineScore;
    if (score >= 30) {
      return 'Good discipline. The workflow is stable.';
    }

    if (score >= 0) {
      return 'Watch the delays and corrections closely.';
    }

    return 'Risk level. The project needs immediate attention.';
  }

  resendCorrection(project: Projet): void {
    const entrepreneurId = this.getCurrentEntrepreneurId();
    if (!entrepreneurId) {
      this.submitMessage = 'Entrepreneur session not found. Please sign in again.';
      return;
    }

    if (!confirm('Are you sure you want to submit your corrections for coach review?')) {
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.http.post<Projet>(`${this.apiUrl}/entrepreneur/projets/${project.id}/resoumettre-correction`, null, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Correction submitted to coach review successfully.';
        this.projetService.loadEntrepreneurProjects().subscribe();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Unable to re-submit corrections. Please try again.');
      }
    });
  }

  closeAssignedWorkflow(): void {
    this.selectedWorkflowProject = null;
  }

  loadSousTaches(tacheId: number): void {
    this.loadingSousTachesByTache[tacheId] = true;
    this.http.get<WorkflowSousTache[]>(`${this.apiUrl}/entrepreneur/taches/${tacheId}/sous-taches`).subscribe({
      next: (rows) => {
        this.workflowSousTachesByTache[tacheId] = rows;
        this.subTasksLoadedByTache[tacheId] = true;
        rows.forEach((row) => {
          this.sousTacheStatusById[row.id] = row.statutSousTache;
        });
        rows.forEach((st) => this.loadDocuments(st.id));
        this.loadingSousTachesByTache[tacheId] = false;
      },
      error: () => {
        this.loadingSousTachesByTache[tacheId] = false;
        this.submitMessage = 'Unable to load sub-tasks.';
      }
    });
  }

  loadDocuments(sousTacheId: number): void {
    this.http.get<WorkflowDocument[]>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTacheId}/documents`).subscribe({
      next: (rows) => {
        this.workflowDocumentsBySousTache[sousTacheId] = rows;
      },
      error: () => {
        this.submitMessage = 'Unable to load sub-task documents.';
      }
    });
  }

  loadProjectDocuments(projetId: string): void {
    this.http.get<WorkflowDocument[]>(`${this.apiUrl}/entrepreneur/projets/${projetId}/documents`).subscribe({
      next: (rows) => {
        this.workflowProjectDocuments = rows;
      },
      error: () => {
        this.submitMessage = 'Unable to load project deliverables.';
      }
    });
  }

  updateSousTacheStatut(sousTache: WorkflowSousTache): void {
    let statut = this.sousTacheStatusById[sousTache.id] ?? sousTache.statutSousTache;
    const justification = this.sousTacheJustificationById[sousTache.id] ?? '';

    if (!statut) {
      this.submitMessage = 'Please select a status before updating.';
      return;
    }

    if (sousTache.statutSousTache === 'A_CORRIGER' && statut === 'TERMINEE') {
      statut = 'EN_CORRECTION';
      this.sousTacheStatusById[sousTache.id] = 'EN_CORRECTION';
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.http.patch<WorkflowSousTache>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/statut`, {
      statutSousTache: statut,
      justificationEntrepreneur: justification,
      commentaireCoach: sousTache.commentaireCoach ?? ''
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Sub-task status updated successfully.';
        this.loadSousTaches(sousTache.tacheId);
        if (this.selectedWorkflowProject) {
          this.projetService.loadEntrepreneurProjects().subscribe();
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Unable to update sub-task status. Please try again.');
      }
    });
  }

  onSubTaskFileSelected(sousTache: WorkflowSousTache, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      this.uploadFileBySousTacheId[sousTache.id] = null;
      this.uploadDocNameBySousTacheId[sousTache.id] = '';
      this.uploadDocTypeBySousTacheId[sousTache.id] = '';
      return;
    }

    this.uploadFileBySousTacheId[sousTache.id] = file;
    this.uploadDocNameBySousTacheId[sousTache.id] = file.name;
    this.uploadDocTypeBySousTacheId[sousTache.id] = file.type || 'application/octet-stream';
  }

  getAvailableStatusOptionsForEntrepreneur(sousTache: WorkflowSousTache): StatutTache[] {
    if (sousTache.statutSousTache === 'A_CORRIGER') {
      return ['EN_CORRECTION'];
    }

    // Entrepreneur should not manually force coach-owned correction states.
    return this.taskStatusOptions.filter((status) => status !== 'A_CORRIGER');
  }

  getSubmissionTargetStatusForEntrepreneur(sousTache: WorkflowSousTache): StatutTache {
    if (sousTache.statutSousTache === 'A_CORRIGER') {
      return 'EN_CORRECTION';
    }
    return 'TERMINEE';
  }

  canSubmitSousTache(sousTache: WorkflowSousTache): boolean {
    if (!this.canOpenSousTacheSubmitModal(sousTache)) {
      return false;
    }
    const hasFile = !!this.uploadFileBySousTacheId[sousTache.id];
    const hasJustification = (this.sousTacheJustificationById[sousTache.id] ?? '').trim().length >= 10;
    return hasFile && hasJustification;
  }

  canOpenSousTacheSubmitModal(sousTache: WorkflowSousTache): boolean {
    const nonSubmittableStatuses: StatutTache[] = ['TERMINEE', 'EN_CORRECTION'];
    if (nonSubmittableStatuses.includes(sousTache.statutSousTache)) {
      return false;
    }

    const parentTask = this.workflowTaches.find((task) => task.id === sousTache.tacheId);
    if (parentTask?.statutTache === 'TERMINEE') {
      return false;
    }

    return true;
  }

  getSousTacheSubmissionBlockReason(sousTache: WorkflowSousTache): string {
    if (sousTache.statutSousTache === 'TERMINEE') {
      return 'Cette sous-tâche est déjà terminée: soumission désactivée.';
    }
    if (sousTache.statutSousTache === 'EN_CORRECTION') {
      return 'Sous-tâche déjà re-soumise: en attente de revue coach.';
    }
    const parentTask = this.workflowTaches.find((task) => task.id === sousTache.tacheId);
    if (parentTask?.statutTache === 'TERMINEE') {
      return 'La tâche parente est terminée: nouvelle soumission désactivée.';
    }
    return 'Soumission non disponible pour cet état.';
  }

  submitSousTacheWithLivrable(sousTache: WorkflowSousTache): void {
    const file = this.uploadFileBySousTacheId[sousTache.id];
    const justification = (this.sousTacheJustificationById[sousTache.id] ?? '').trim();

    if (!this.canOpenSousTacheSubmitModal(sousTache)) {
      this.submitMessage = this.getSousTacheSubmissionBlockReason(sousTache);
      return;
    }

    if (!file || justification.length < 10) {
      this.submitMessage = 'Upload file and justification (min 10 chars) are required before submission.';
      return;
    }

    const statut = this.getSubmissionTargetStatusForEntrepreneur(sousTache);
    this.isSubmitting = true;
    this.submitMessage = '';
    this.submissionProgress = 25;
    this.submissionStateLabel = 'Uploading deliverable...';

    const formData = new FormData();
    formData.append('file', file);

    this.http.post<WorkflowDocument>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/documents/upload`, formData).subscribe({
      next: () => {
        this.submissionProgress = 70;
        this.submissionStateLabel = 'Updating workflow status...';
        this.http.patch<WorkflowSousTache>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/statut`, {
          statutSousTache: statut,
          justificationEntrepreneur: justification,
          commentaireCoach: sousTache.commentaireCoach ?? ''
        }).subscribe({
          next: () => {
            this.submissionProgress = 100;
            this.submissionStateLabel = 'Submission completed.';
            this.submitMessage = 'Sub-task submitted successfully.';
            this.uploadFileBySousTacheId[sousTache.id] = null;
            this.uploadDocNameBySousTacheId[sousTache.id] = '';
            this.uploadDocTypeBySousTacheId[sousTache.id] = '';
            this.loadDocuments(sousTache.id);
            this.loadSousTaches(sousTache.tacheId);
            if (this.selectedWorkflowProject) {
              this.projetService.loadEntrepreneurProjects().subscribe();
            }

            this.openSubmissionToast('Soumission réussie. Retour au Kanban...');
            setTimeout(() => {
              this.isSubmitting = false;
              // UX flow: close submission windows and return focus to Kanban automatically.
              this.closeSousTacheSubmitModal();
              this.closeTaskModal();
              this.switchWorkspaceView('KANBAN');
            }, 900);
          },
          error: (err) => {
            this.isSubmitting = false;
            this.submissionProgress = 0;
            this.submissionStateLabel = '';
            this.submitMessage = this.parseHttpError(err, 'Unable to submit sub-task status.');
          }
        });
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submissionProgress = 0;
        this.submissionStateLabel = '';
        this.submitMessage = this.parseHttpError(err, 'Unable to upload deliverable before submission.');
      }
    });
  }

  uploadSousTacheDocument(sousTache: WorkflowSousTache): void {
    const file = this.uploadFileBySousTacheId[sousTache.id];
    if (!file) {
      this.submitMessage = 'Please select a file before upload.';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';
    const formData = new FormData();
    formData.append('file', file);

    this.http.post<WorkflowDocument>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/documents/upload`, formData).subscribe({
      next: () => {
        this.onDocumentUploadSuccess(sousTache);
      },
      error: () => {
        // Backward-compatible fallback for older backend builds still using JSON upload DTO.
        const timestamp = Date.now();
        this.http.post(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/documents`, {
          nomFichier: `deliverable_${timestamp}`,
          nomOriginal: file.name,
          typeContenu: file.type || 'application/octet-stream',
          cheminStockage: `/uploads/${file.name}`,
          tailleFichier: file.size || 0
        }).subscribe({
          next: () => {
            this.onDocumentUploadSuccess(sousTache);
          },
          error: (fallbackErr) => {
            this.isSubmitting = false;
            this.submitMessage = this.parseHttpError(fallbackErr, 'Unable to upload deliverable. Please try again.');
          }
        });
      }
    });
  }

  demanderProlongationSousTache(sousTache: WorkflowSousTache): void {
    const newDate = this.sousTacheExtensionDateById[sousTache.id];
    const justification = (this.sousTacheJustificationById[sousTache.id] ?? '').trim();

    if (!newDate) {
      this.submitMessage = 'Please select a new extension date.';
      return;
    }

    if (!justification) {
      this.submitMessage = 'Please provide a justification for the extension request.';
      return;
    }

    if (justification.length < 10) {
      this.submitMessage = 'Justification must be at least 10 characters long.';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.http.post(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/demander-prolongation`, {
      nouvelleDateFin: newDate,
      justificationEntrepreneur: justification
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Sub-task extension requested successfully.';
        this.sousTacheExtensionDateById[sousTache.id] = '';
        this.loadSousTaches(sousTache.tacheId);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Unable to request sub-task extension. Please try again.');
      }
    });
  }

  isAssignedToCoach(project: Projet): boolean {
    return project.etatValidation === 'AFFECTE_COACH' || project.etatValidation === 'A_CORRIGER' || project.etatValidation === 'EN_REVUE';
  }

  needsCorrection(project: Projet): boolean {
    return project.etatValidation === 'A_CORRIGER';
  }

  isDraft(project: Projet): boolean {
    return project.etatValidation === 'BROUILLON';
  }

  canEdit(project: Projet): boolean { return this.isDraft(project); }

  statusLabel(project: Projet): string {
    return formatProjetStatusLabel(project);
  }

  disciplineLevel(score: number): 'good' | 'watch' | 'risk' {
    return getDisciplineLevelClass(score);
  }

  impactHintSubTask(subTask: WorkflowSousTache): string {
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

  impactHintTask(task: WorkflowTache): string {
    if (task.statutTache === 'BLOQUEE') {
      return 'Blockage penalty: -15';
    }

    if (task.retardJours > 7) {
      return 'Long delay penalty: -10';
    }

    if (task.statutTache === 'EN_RETARD') {
      return 'Delay penalty: -5';
    }

    if (task.statutTache === 'A_CORRIGER') {
      return 'Correction penalty: -12';
    }

    if (task.statutTache === 'TERMINEE') {
      return task.retardJours > 0 ? 'Completed late: -5' : 'Completed on time: +10';
    }

    return 'Active workflow item';
  }

  getTaskSubtaskCount(tacheId: number): number {
    return this.getSousTachesForTask(tacheId).length;
  }

  getDocumentsForSousTache(sousTacheId: number): WorkflowDocument[] {
    return this.workflowDocumentsBySousTache[sousTacheId] ?? [];
  }

  getCalendarMonthLabel(): string {
    return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(this.currentCalendarCursor);
  }

  goToPreviousCalendarMonth(): void {
    this.currentCalendarCursor = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth() - 1, 1);
  }

  goToNextCalendarMonth(): void {
    this.currentCalendarCursor = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth() + 1, 1);
  }

  getCalendarDayHeaders(): string[] {
    return ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  }

  getCalendarGridDays(): CalendarDayCell[] {
    const firstDayOfMonth = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth(), 1);
    const daysInMonth = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth() + 1, 0).getDate();
    const mondayAlignedOffset = (firstDayOfMonth.getDay() + 6) % 7;
    const cells: CalendarDayCell[] = [];

    for (let i = 0; i < mondayAlignedOffset; i += 1) {
      cells.push({ date: null, tasks: [], isCurrentMonth: false, isToday: false });
    }

    const todayKey = this.formatDateKey(new Date());
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth(), day);
      const dateKey = this.formatDateKey(date);
      cells.push({
        date,
        tasks: this.workflowTaches.filter((task) => task.dateFin === dateKey),
        isCurrentMonth: true,
        isToday: dateKey === todayKey,
      });
    }

    while (cells.length % 7 !== 0) {
      cells.push({ date: null, tasks: [], isCurrentMonth: false, isToday: false });
    }

    return cells;
  }

  private validateProjectForm(): string | null {
    const form = this.form;

    if (!form.nomStartup?.trim()) {
      return 'Startup name is required.';
    }

    if (form.nomStartup.trim().length < 3) {
      return 'Startup name must be at least 3 characters long.';
    }

    if (!form.description?.trim()) {
      return 'Description is required.';
    }

    if (form.description.trim().length < 10) {
      return 'Description must be at least 10 characters long.';
    }

    if (!form.problemeAdresse?.trim()) {
      return 'Problem addressed is required.';
    }

    if (!form.solutionProposee?.trim()) {
      return 'Proposed solution is required.';
    }

    if (!form.businessModel?.trim()) {
      return 'Business model is required.';
    }

    if (!form.secteur?.trim()) {
      return 'Sector is required.';
    }

    return null;
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

  private loadAssignedCoachs(projetId: string): void {
    this.http.get<AssignedCoach[]>(`${this.apiUrl}/entrepreneur/projets/${projetId}/coachs`).subscribe({
      next: (rows) => {
        this.assignedCoachs = rows;
      },
      error: () => {
        this.submitMessage = 'Unable to load assigned coaches.';
      }
    });
  }

  private loadWorkflowTaches(projetId: string): void {
    this.http.get<WorkflowTache[]>(`${this.apiUrl}/entrepreneur/projets/${projetId}/taches`).subscribe({
      next: (rows) => {
        this.workflowTaches = rows;
        const firstTaskDate = rows.find((row) => !!row.dateFin)?.dateFin;
        if (firstTaskDate) {
          this.currentCalendarCursor = this.createMonthAnchor(new Date(firstTaskDate));
        }
        this.workflowSousTachesByTache = {};
        this.workflowDocumentsBySousTache = {};
        this.subTasksLoadedByTache = {};
        this.loadingSousTachesByTache = {};
      },
      error: () => {
        this.submitMessage = 'Unable to load project tasks.';
      }
    });
  }

  private isAllowedTaskTransition(from: StatutTache, to: StatutTache): boolean {
    const allowed: Record<StatutTache, StatutTache[]> = {
      A_FAIRE: ['EN_COURS'],
      EN_COURS: ['A_CORRIGER', 'TERMINEE', 'EN_RETARD', 'BLOQUEE'],
      A_CORRIGER: ['EN_CORRECTION'],
      EN_CORRECTION: ['EN_COURS', 'A_CORRIGER', 'TERMINEE'],
      TERMINEE: [],
      EN_RETARD: ['EN_COURS', 'A_CORRIGER', 'TERMINEE'],
      BLOQUEE: ['EN_COURS', 'A_CORRIGER'],
    };

    return allowed[from].includes(to);
  }

  private updateTaskStatus(task: WorkflowTache, targetStatus: StatutTache): void {
    this.isSubmitting = true;
    this.submitMessage = '';

    this.http.patch<WorkflowTache>(`${this.apiUrl}/entrepreneur/taches/${task.id}/statut`, {
      statutTache: targetStatus,
      justificationEntrepreneur: task.justificationEntrepreneur ?? ''
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Statut de tâche mis à jour.';
        task.statutTache = targetStatus;
        if (this.selectedWorkflowProject) {
          this.projetService.loadEntrepreneurProjects().subscribe();
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = this.parseHttpError(err, 'Unable to update task status.');
      }
    });
  }

  private getCurrentEntrepreneurId(): number {
    const idUser = this.authService.currentUser?.idUser;
    if (typeof idUser === 'number' && Number.isFinite(idUser) && idUser > 0) {
      return idUser;
    }

    const rawId = this.authService.currentUser?.id ?? '';
    const parsed = Number(rawId);
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }

    const digits = String(rawId).replace(/\D/g, '');
    const fallback = Number(digits);
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }

  private parseHttpError(err: unknown, fallback: string): string {
    const message = (err as { error?: { message?: string } })?.error?.message;
    return (typeof message === 'string' && message.trim()) ? message : fallback;
  }

  private onDocumentUploadSuccess(sousTache: WorkflowSousTache): void {
    this.isSubmitting = false;
    this.submitMessage = 'Deliverable uploaded successfully.';
    this.uploadFileBySousTacheId[sousTache.id] = null;
    this.uploadDocNameBySousTacheId[sousTache.id] = '';
    this.uploadDocTypeBySousTacheId[sousTache.id] = '';
    this.loadDocuments(sousTache.id);
    if (this.selectedWorkflowProject) {
      this.loadProjectDocuments(this.selectedWorkflowProject.id);
    }
  }

  private openSubmissionToast(message: string): void {
    this.submissionToastMessage = message;
    this.showSubmissionToast = true;
    setTimeout(() => {
      this.showSubmissionToast = false;
      this.submissionToastMessage = '';
    }, 1800);
  }

  private revokeDeliverablePreviewUrl(): void {
    if (this.selectedDeliverablePreviewUrl) {
      URL.revokeObjectURL(this.selectedDeliverablePreviewUrl);
      this.selectedDeliverablePreviewUrl = '';
    }
  }

  private formatDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private createMonthAnchor(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
}
