import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MessageService } from '../../../core/services/message.service';
import { ProjetService, ProjetDraftInput } from '../../../core/services/projet.service';
import { Projet, SecteurProjet, SECTEUR_PROJET_OPTIONS, getDisciplineLevelClass, formatProjetStatusLabel } from '../../../core/models';

// ─── Types locaux ────────────────────────────────────────────────────────────

type StatutTache = 'A_FAIRE' | 'EN_COURS' | 'A_CORRIGER' | 'EN_CORRECTION' | 'TERMINEE' | 'EN_RETARD' | 'BLOQUEE';
type WorkspaceView = 'KANBAN' | 'CALENDAR' | 'DELIVERABLES';

// ─── Interface CountdownInfo (réponse du backend) ────────────────────────────

export interface CountdownInfo {
  id: number;
  titre: string;
  type: 'TACHE' | 'SOUS_TACHE';
  statut: string;
  dateDebut?: string;
  dateFin?: string;
  joursRestants?: number;
  retardJours: number;
  enRetard: boolean;
  urgence: boolean;         // deadline dans <= 3 jours et statut A_FAIRE
  pasEncoreCommence: boolean;
  parentId: number;
}

// ─── Interfaces internes ─────────────────────────────────────────────────────

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

interface ProjectInfoField {
  key: string;
  label: string;
  value: string;
  missing: boolean;
}

interface CoachCorrectionFeedItem {
  level: 'TASK' | 'SUBTASK';
  title: string;
  comment: string;
  status: StatutTache;
}

interface ProjectCorrectionHint {
  fieldKey: string;
  fieldLabel: string;
  comment: string;
}

interface CorrectionGuideItem {
  level: 'PROJECT' | 'TASK' | 'SUBTASK';
  title: string;
  comment: string;
  status: StatutTache | 'A_CORRIGER';
}

type EditableProjectFieldKey =
  | 'nomStartup'
  | 'description'
  | 'secteur'
  | 'stadeProjet'
  | 'dateDebutProjet'
  | 'dateFinProjet'
  | 'problemeAdresse'
  | 'solutionProposee'
  | 'businessModel'
  | 'innovationDescription'
  | 'scalabiliteDescription'
  | 'pocDisponible';

const EDITABLE_PROJECT_FIELDS: EditableProjectFieldKey[] = [
  'nomStartup',
  'description',
  'secteur',
  'stadeProjet',
  'dateDebutProjet',
  'dateFinProjet',
  'problemeAdresse',
  'solutionProposee',
  'businessModel',
  'innovationDescription',
  'scalabiliteDescription',
  'pocDisponible',
];

interface CalendarDayCell {
  date: Date | null;
  tasks: WorkflowTache[];
  isCurrentMonth: boolean;
  isToday: boolean;
}

type SecteurProjetInput = SecteurProjet | '';

// ─── Composant ───────────────────────────────────────────────────────────────

@Component({
  selector: 'app-entrepreneur-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class EntrepreneurProjetsComponent implements OnInit, OnDestroy {

  // ── Modals & UI state ──────────────────────────────────────────────────────
  showProjectDetails = false;
  showProjectDetailsModal = false;
  showProjectModal = false;
  showCreateProjectModal = false;
  showSubmitProjectModal = false;
  showDeleteProjectModal = false;
  showCorrectionSubmitModal = false;
  showSaveEditModal = false;
  pendingProjectSubmission: Projet | null = null;
  pendingProjectDeletion: Projet | null = null;
  pendingCorrectionSubmission: Projet | null = null;
  editingProject: Projet | null = null;
  submitMessage = '';
  isSubmitting = false;

  // ── Workspace ──────────────────────────────────────────────────────────────
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
  showCorrectionGuideModal = false;
  correctionGuideSeenByProjectId: Record<string, string> = {};
  currentCalendarCursor = this.createMonthAnchor(new Date());
  createProjectStep = 1;
  readonly createProjectStepCount = 4;
  readonly minProjectDurationDays = 30;

  // ── Données projet & tâches ────────────────────────────────────────────────
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

  // ── COUNTDOWN ──────────────────────────────────────────────────────────────
  countdowns: CountdownInfo[] = [];
  private countdownRefreshInterval: ReturnType<typeof setInterval> | null = null;

  // ── Colonnes Kanban ────────────────────────────────────────────────────────
  readonly boardColumns: WorkflowBoardColumn[] = [
    { key: 'A_FAIRE',      title: 'A_FAIRE',       subtitle: 'Waiting to start',   tone: 'teal'  },
    { key: 'EN_COURS',     title: 'EN_COURS',      subtitle: 'In progress',        tone: 'teal'  },
    { key: 'A_CORRIGER',   title: 'A_CORRIGER',    subtitle: 'Needs correction',   tone: 'red'   },
    { key: 'EN_CORRECTION',title: 'EN_CORRECTION', subtitle: 'Under correction',   tone: 'amber' },
    { key: 'TERMINEE',     title: 'TERMINEE',      subtitle: 'Completed',          tone: 'green' },
  ];

  readonly taskStatusOptions: StatutTache[] = ['A_FAIRE', 'EN_COURS', 'A_CORRIGER', 'EN_CORRECTION', 'TERMINEE', 'EN_RETARD', 'BLOQUEE'];
  readonly stageOptions: Array<{ value: ProjetDraftInput['stadeProjet']; label: string }> = [
    { value: 'IDEE',              label: 'Idée'                  },
    { value: 'POC',               label: 'Preuve de concept'     },
    { value: 'MVP',               label: 'MVP'                   },
    { value: 'PROTOTYPE',         label: 'Prototype'             },
    { value: 'COMMERCIALISATION', label: 'Commercialisation'     },
    { value: 'SCALING',           label: "Passage à l'échelle"   },
  ];
  readonly secteurOptions = SECTEUR_PROJET_OPTIONS;

  form: ProjetDraftInput = this.createEmptyForm();
  conversationForm = {
    nomStartup: '',
    secteur: '' as SecteurProjetInput,
    stadeProjet: 'IDEE' as ProjetDraftInput['stadeProjet'],
    pitch: '',
    dateDebutProjet: '',
    dateFinProjet: '',
    solutionProposee: '',
    businessModel: '',
    innovationDescription: '',
    scalabiliteDescription: '',
    pocDisponible: false,
  };

  // ── Constantes privées ─────────────────────────────────────────────────────
  private readonly apiUrl = 'http://localhost:8084/khotwa';
  private readonly selectedProjectStorageKey = 'entrepreneur-selected-project-id';
  private readonly pendingCoachApprovalStorageKey = 'entrepreneur-pending-coach-approval-project-ids';
  private waitingApprovalPollHandle: ReturnType<typeof setInterval> | null = null;

  constructor(
    public projetService: ProjetService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  // ═══════════════════════════════════════════════════════════════════════════
  // Lifecycle
  // ═══════════════════════════════════════════════════════════════════════════

  ngOnInit(): void {
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
        console.log('[DEBUG] All loaded projects:', projects);
        projects.forEach(p => {
          console.log(`[DEBUG] Project ${p.id} projectCorrectionRequired:`, p.projectCorrectionRequired);
          if (p.projectCorrectionRequired) {
            const corrKey = this.getCorrectionGuideStorageKey(p);
            if (localStorage.getItem(corrKey)) {
              this.correctionGuideSeenByProjectId[p.id] = corrKey;
            }
          }
        });
        const persistedProjectId = this.getPersistedSelectedProjectId();
        const persistedProject = persistedProjectId
          ? projects.find((project) => project.id === persistedProjectId)
          : null;
        if (projects.length > 0) {
          const currentProject = this.selectedWorkflowProject
            ? projects.find((project) => project.id === this.selectedWorkflowProject?.id)
            : null;
          this.selectProject(persistedProject ?? currentProject ?? projects[0]);
        }
      },
      error: () => {
        this.submitMessage = 'Unable to load projects from backend.';
      }
    });
  }

  ngOnDestroy(): void {
    this.stopWaitingApprovalPolling();
    this.stopCountdownRefresh();
    this.revokeDeliverablePreviewUrl();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Getters & helpers UI
  // ═══════════════════════════════════════════════════════════════════════════

  get filteredProjets(): Projet[] {
    return this.projetService.projetsEntrepreneur;
  }

  get selectedProjectName(): string {
    return this.selectedWorkflowProject?.titre ?? 'Choisir un projet';
  }

  openProjectDetailsModal(): void { this.showProjectDetailsModal = true; }
  closeProjectDetailsModal(): void { this.showProjectDetailsModal = false; }
  toggleProjectDetails(): void { this.showProjectDetails = !this.showProjectDetails; }
  toggleProjectSelector(): void { this.projectSelectorOpen = !this.projectSelectorOpen; }

  switchWorkspaceView(view: WorkspaceView): void {
    this.activeWorkspaceView = view;
    if (view === 'DELIVERABLES' && this.selectedWorkflowProject) {
      this.loadProjectDocuments(this.selectedWorkflowProject.id);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // COUNTDOWN — méthodes publiques
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Charge les countdowns depuis le backend pour un projet donné.
   * Appelé à chaque sélection de projet et toutes les 60 secondes.
   */
  loadCountdowns(projetId: string | number): void {
    this.http.get<CountdownInfo[]>(
      `${this.apiUrl}/entrepreneur/projets/${projetId}/countdowns`
    ).subscribe({
      next: (data) => { this.countdowns = data; },
      error: () => { /* Silencieux : le countdown est un indicateur non bloquant */ }
    });
  }

  /** Démarre le rafraîchissement automatique (toutes les 60 s). */
  private startCountdownRefresh(): void {
    this.stopCountdownRefresh();
    this.countdownRefreshInterval = setInterval(() => {
      if (this.selectedWorkflowProject) {
        this.loadCountdowns(this.selectedWorkflowProject.id);
      }
    }, 60_000);
  }

  /** Arrête le rafraîchissement automatique. */
  private stopCountdownRefresh(): void {
    if (this.countdownRefreshInterval) {
      clearInterval(this.countdownRefreshInterval);
      this.countdownRefreshInterval = null;
    }
  }

  /** Retourne le countdown d'une tâche parente, ou undefined. */
  getCountdownForTask(taskId: number): CountdownInfo | undefined {
    return this.countdowns.find(c => c.type === 'TACHE' && c.id === taskId);
  }

  /** Retourne le countdown d'une sous-tâche, ou undefined. */
  getCountdownForSubTask(subTaskId: number): CountdownInfo | undefined {
    return this.countdowns.find(c => c.type === 'SOUS_TACHE' && c.id === subTaskId);
  }

  /**
   * Formate le label lisible du compteur à rebours.
   * Exemples :
   *   "⚠️ En retard de 3 jour(s)"
   *   "🔴 Deadline aujourd'hui !"
   *   "🟠 2j restant(s) — pas encore démarré !"
   *   "⏳ 10 jour(s) restant(s)"
   */
  formatCountdownLabel(countdown: CountdownInfo | undefined): string {
    if (!countdown || countdown.dateFin == null) { return ''; }

    if (countdown.enRetard) {
      return `⚠️ En retard de ${countdown.retardJours} jour(s)`;
    }
    if (countdown.joursRestants === 0) {
      return '🔴 Deadline aujourd\'hui !';
    }
    if (countdown.joursRestants != null && countdown.joursRestants > 0) {
      if (countdown.urgence) {
        return `🟠 ${countdown.joursRestants}j restant(s) — pas encore démarré !`;
      }
      return `⏳ ${countdown.joursRestants} jour(s) restant(s)`;
    }
    return '';
  }

  /**
   * Retourne la classe CSS à appliquer sur le badge countdown.
   *   countdown--retard  → rouge
   *   countdown--urgence → orange clignotant (A_FAIRE + <= 3j)
   *   countdown--proche  → jaune (<= 7j)
   *   countdown--ok      → vert
   */
  getCountdownClass(countdown: CountdownInfo | undefined): string {
    if (!countdown || !countdown.dateFin) { return ''; }
    if (countdown.enRetard)  { return 'countdown--retard';  }
    if (countdown.urgence)   { return 'countdown--urgence'; }
    if (countdown.joursRestants != null && countdown.joursRestants <= 7) {
      return 'countdown--proche';
    }
    return 'countdown--ok';
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Création de projet
  // ═══════════════════════════════════════════════════════════════════════════

  openCreateProjectConversation(): void {
    this.submitMessage = '';
    this.createProjectStep = 1;
    this.conversationForm = {
      nomStartup: '',
      secteur: '',
      stadeProjet: 'IDEE',
      pitch: '',
      dateDebutProjet: '',
      dateFinProjet: '',
      solutionProposee: '',
      businessModel: '',
      innovationDescription: '',
      scalabiliteDescription: '',
      pocDisponible: false,
    };
    this.showCreateProjectModal = true;
  }

  closeCreateProjectConversation(): void { this.showCreateProjectModal = false; }

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
    if (this.createProjectStep === 1) { return this.conversationForm.nomStartup.trim().length >= 3; }
    if (this.createProjectStep === 2) { return !!this.conversationForm.secteur; }
    if (this.createProjectStep === 3) { return !!this.conversationForm.stadeProjet; }
    if (this.conversationForm.pitch.trim().length < 10) { return false; }
    return this.getProjectTimelineValidationError(
      this.conversationForm.dateDebutProjet,
      this.conversationForm.dateFinProjet,
      true,
    ) === null;
  }

  getConversationTimelineValidationError(): string | null {
    return this.getProjectTimelineValidationError(
      this.conversationForm.dateDebutProjet,
      this.conversationForm.dateFinProjet,
      true,
    );
  }

  createProjectFromConversation(): void {
    const name    = this.conversationForm.nomStartup.trim();
    const secteur = this.conversationForm.secteur;
    const pitch   = this.conversationForm.pitch.trim();
    const timelineError = this.getProjectTimelineValidationError(
      this.conversationForm.dateDebutProjet,
      this.conversationForm.dateFinProjet,
      true,
    );

    if (name.length < 3 || !secteur || pitch.length < 10 || timelineError) {
      this.submitMessage = timelineError ?? 'Complétez les étapes requises avant de valider.';
      return;
    }

    const entrepreneurId = this.getCurrentEntrepreneurId();
    if (!entrepreneurId || isNaN(entrepreneurId) || entrepreneurId <= 0) {
      this.isSubmitting = false;
      this.submitMessage = 'Erreur : Session entrepreneur invalide. Veuillez vous reconnecter.';
      this.authService.logout();
      this.router.navigate(['/login']);
      return;
    }

    const draft: ProjetDraftInput = {
      nomStartup: name,
      description: pitch,
      secteur,
      problemeAdresse: pitch,
      solutionProposee: this.conversationForm.solutionProposee.trim() || `Solution proposée pour ${name}`,
      businessModel: this.conversationForm.businessModel.trim() || `Modèle économique initial de ${name}`,
      stadeProjet: this.conversationForm.stadeProjet,
      innovationDescription: this.conversationForm.innovationDescription.trim() || 'Initial draft generated from conversational flow.',
      scalabiliteDescription: this.conversationForm.scalabiliteDescription.trim() || 'Scalability plan to be detailed with coach.',
      pocDisponible: this.conversationForm.pocDisponible,
      dateDebutProjet: this.conversationForm.dateDebutProjet,
      dateFinProjet: this.conversationForm.dateFinProjet,
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

  // ═══════════════════════════════════════════════════════════════════════════
  // Édition & suppression de projet
  // ═══════════════════════════════════════════════════════════════════════════

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

  closeProjectModal(): void { this.showProjectModal = false; }

  isFormValid(): boolean { return this.validateProjectForm() === null; }

  saveProject(): void {
    const validationError = this.validateProjectForm();
    if (validationError) { this.submitMessage = validationError; return; }

    const entrepreneurId = this.getCurrentEntrepreneurId();
    if (entrepreneurId <= 0) {
      this.submitMessage = 'Error: Invalid user authentication. Please log in again.';
      this.authService.logout();
      this.router.navigate(['/login']);
      return;
    }

    if (!this.editingProject) {
      this.submitMessage = 'Use the create button in the right panel to add a new project.';
      return;
    }

    this.showSaveEditModal = true;
  }

  closeSaveEditModal(): void { if (!this.isSubmitting) { this.showSaveEditModal = false; } }

  confirmSaveProject(): void {
    if (!this.editingProject) { this.showSaveEditModal = false; this.submitMessage = 'Use the create button in the right panel to add a new project.'; return; }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.projetService.updateProjet(this.editingProject.id, this.form).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showSaveEditModal = false;
        this.submitMessage = 'Project updated as draft.';
        this.closeProjectModal();
        this.refreshWithSelectedProject(this.editingProject?.id);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showSaveEditModal = false;
        this.submitMessage = this.parseHttpError(err, 'Project update failed. Please try again.');
      }
    });
  }

  submitProject(project: Projet): void {
    this.pendingProjectSubmission = project;
    this.showSubmitProjectModal = true;
  }

  closeSubmitProjectModal(): void {
    if (!this.isSubmitting) { this.showSubmitProjectModal = false; this.pendingProjectSubmission = null; }
  }

  confirmProjectSubmission(): void {
    if (!this.pendingProjectSubmission) { return; }
    const project = this.pendingProjectSubmission;
    this.isSubmitting = true;
    this.submitMessage = '';

    this.projetService.submitProjet(project.id).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showSubmitProjectModal = false;
        this.pendingProjectSubmission = null;
        this.submitMessage = 'Project submitted for review successfully.';
        this.refreshWithSelectedProject(project.id);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showSubmitProjectModal = false;
        this.pendingProjectSubmission = null;
        this.submitMessage = this.parseHttpError(err, 'Project submission failed. Please try again.');
      }
    });
  }

  deleteProject(project: Projet): void {
    this.pendingProjectDeletion = project;
    this.showDeleteProjectModal = true;
  }

  closeDeleteProjectModal(): void {
    if (!this.isSubmitting) { this.showDeleteProjectModal = false; this.pendingProjectDeletion = null; }
  }

  confirmDeleteProject(): void {
    if (!this.pendingProjectDeletion) { return; }
    const project = this.pendingProjectDeletion;
    this.isSubmitting = true;
    this.submitMessage = '';

    this.projetService.deleteProjet(project.id).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showDeleteProjectModal = false;
        this.pendingProjectDeletion = null;
        this.submitMessage = 'Draft deleted successfully.';
        this.projetService.loadEntrepreneurProjects().subscribe({
          next: (projects) => {
            const nextProject = projects.find((row) => row.id !== project.id) ?? projects[0];
            if (nextProject) { this.refreshWithSelectedProject(nextProject.id); }
            else { setTimeout(() => window.location.reload(), 800); }
          },
          error: () => { setTimeout(() => window.location.reload(), 800); },
        });
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showDeleteProjectModal = false;
        this.pendingProjectDeletion = null;
        this.submitMessage = this.parseHttpError(err, 'Unable to delete draft project. Please try again.');
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Sélection & workflow projet
  // ═══════════════════════════════════════════════════════════════════════════

  selectProject(project: Projet): void {
    this.selectedWorkflowProject = project;
    this.openAssignedWorkflow(project);
  }

  openAssignedWorkflow(project: Projet): void {
    this.selectedWorkflowProject = project;
    this.showCorrectionGuideModal = false;

    if (project.etatValidation === 'A_CORRIGER' || project.etatValidation === 'VALIDE' || project.etatValidation === 'REFUSE') {
      this.clearPendingCoachApproval(project.id);
    }

    this.persistSelectedProjectId(project.id);
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
    // Réinitialiser les countdowns à chaque changement de projet
    this.countdowns = [];

    this.loadAssignedCoachs(project.id);
    this.loadWorkflowTaches(project.id);
    this.updateWaitingApprovalPolling(project);

    // ── Charger les countdowns et démarrer le rafraîchissement auto ──────────
    this.loadCountdowns(project.id);
    this.startCountdownRefresh();

    if (this.needsCorrection(project) && !this.correctionGuideSeenByProjectId[project.id]) {
      this.openCorrectionGuide();
    }
  }

  closeAssignedWorkflow(): void {
    this.stopWaitingApprovalPolling();
    this.stopCountdownRefresh();
    this.selectedWorkflowProject = null;
  }

  refreshCurrentProjectStatus(): void { this.refreshSelectedProjectInPlace(); }

  // ═══════════════════════════════════════════════════════════════════════════
  // Correction guide
  // ═══════════════════════════════════════════════════════════════════════════

  openCorrectionGuide(): void {
    if (!this.selectedWorkflowProject) { return; }
    this.showCorrectionGuideModal = true;
    const project = this.selectedWorkflowProject;
    const corrKey = this.getCorrectionGuideStorageKey(project);
    this.correctionGuideSeenByProjectId[project.id] = corrKey;
    localStorage.setItem(corrKey, '1');
  }

  closeCorrectionGuide(): void { this.showCorrectionGuideModal = false; }

  hasUnreadCorrectionGuide(project: Projet): boolean {
    if (!this.needsCorrection(project)) { return false; }
    const corrKey = this.getCorrectionGuideStorageKey(project);
    return !this.correctionGuideSeenByProjectId[project.id] && !localStorage.getItem(corrKey);
  }

  hasProjectLevelCorrection(project: Projet | null): boolean {
    if (!project) { return false; }
    return typeof project.commentaireCorrectionCoach === 'string' && project.commentaireCorrectionCoach.trim().length > 0;
  }

  getProjectCorrectionSummary(project: Projet | null): string {
    if (!project || !this.hasProjectLevelCorrection(project)) {
      return 'Correction state is active. The coach feedback will appear here once available.';
    }
    return 'Coach feedback received: update the requested fields, then submit correction to coach review.';
  }

  getCompactText(value: string, maxLength = 140): string {
    const normalized = (value ?? '').replace(/\s+/g, ' ').trim();
    if (normalized.length <= maxLength) { return normalized; }
    return `${normalized.slice(0, Math.max(0, maxLength - 3))}...`;
  }

  getTotalCorrectionSignals(project: Projet | null): number {
    const projectItems = this.getProjectCorrectionHints(project).length;
    const workflowItems = this.getCoachCorrectionsFeed().filter((item) => item.status === 'A_CORRIGER' || item.status === 'EN_CORRECTION').length;
    return projectItems + workflowItems;
  }

  hasActionableCorrection(project: Projet | null): boolean {
    if (!project || !this.needsCorrection(project)) { return false; }
    return this.getCorrectionGuideItems(project).length > 0;
  }

  getMissingActionableCorrectionHint(project: Projet | null): string {
    if (!project || !this.needsCorrection(project)) { return ''; }
    if (this.hasActionableCorrection(project)) { return ''; }
    return 'No actionable correction details from coach yet. Ask for explicit items before re-submitting.';
  }

  getCorrectionGuideItems(project: Projet | null): CorrectionGuideItem[] {
    const projectItems = this.getProjectCorrectionHints(project).map((hint) => ({
      level: 'PROJECT' as const,
      title: hint.fieldLabel,
      comment: hint.comment,
      status: 'A_CORRIGER' as const,
    }));

    const workflowItems = this.getCoachCorrectionsFeed()
      .filter((item) => item.status === 'A_CORRIGER' || item.status === 'EN_CORRECTION')
      .map((item) => ({ level: item.level, title: item.title, comment: item.comment, status: item.status }));

    return [...projectItems, ...workflowItems].filter((item) => item.comment.trim().length > 0);
  }

  getProjectSnapshotFields(project: Projet): ProjectInfoField[] {
    return this.getProjectInfoFields(project).slice(0, 4);
  }

  getProjectCorrectionHints(project: Projet | null): ProjectCorrectionHint[] {
    if (!project || !this.hasProjectLevelCorrection(project)) { return []; }

    const raw = project.commentaireCorrectionCoach!;
    const blocks = raw.split(/\n\s*--------------------\s*\n/g).map((c) => c.trim()).filter((c) => c.length > 0);
    const hints: ProjectCorrectionHint[] = [];

    for (const block of blocks) {
      const lines = block.split(/\n+/).map((l) => l.trim()).filter((l) => l.length > 0);
      if (!lines.length) { continue; }
      const label = lines[0];
      const field = this.getProjectInfoFields(project).find((item) => item.label.toLowerCase() === label.toLowerCase());
      const requestedLine = lines.find((l) => /^Requested correction:/i.test(l));
      const extracted = requestedLine
        ? requestedLine.replace(/^Requested correction:\s*/i, '').trim()
        : lines.slice(1).join(' ');
      if (!extracted) { continue; }
      hints.push({
        fieldKey: field?.key ?? this.toProjectFormFieldKeyFromLabel(label),
        fieldLabel: field?.label ?? label,
        comment: extracted,
      });
    }

    if (hints.length) { return hints; }
    return [{ fieldKey: 'global', fieldLabel: 'General project correction', comment: raw.trim() }];
  }

  isCorrectionScopedEdit(project: Projet | null): boolean {
    if (!project || !this.needsCorrection(project)) { return false; }
    return this.getRequestedCorrectionFieldKeys(project).size > 0;
  }

  canEditProjectField(fieldKey: EditableProjectFieldKey): boolean {
    const project = this.editingProject;
    if (!project) { return false; }
    if (!this.needsCorrection(project)) { return true; }
    if (!this.isCorrectionScopedEdit(project)) { return true; }
    const requestedKeys = this.getRequestedCorrectionFieldKeys(project);
    if (!requestedKeys.size) { return true; }
    return requestedKeys.has(fieldKey);
  }

  isCorrectionRequestedForField(fieldKey: EditableProjectFieldKey): boolean {
    const project = this.editingProject;
    if (!project || !this.needsCorrection(project)) { return false; }
    return this.getRequestedCorrectionFieldKeys(project).has(fieldKey);
  }

  shouldShowRequestedBadge(fieldKey: EditableProjectFieldKey): boolean { return this.isCorrectionRequestedForField(fieldKey); }

  shouldShowLockedBadge(fieldKey: EditableProjectFieldKey): boolean {
    const project = this.editingProject;
    if (!project || !this.needsCorrection(project) || !this.isCorrectionScopedEdit(project)) { return false; }
    return !this.isCorrectionRequestedForField(fieldKey);
  }

  getCorrectionHintForField(project: Projet, fieldKey: string): string {
    const match = this.getProjectCorrectionHints(project).find((h) => h.fieldKey === fieldKey);
    return match?.comment ?? '';
  }

  hasCorrectionHintForField(project: Projet, fieldKey: string): boolean {
    return this.getCorrectionHintForField(project, fieldKey).length > 0;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Kanban & tâches
  // ═══════════════════════════════════════════════════════════════════════════

  isSelectedProject(project: Projet): boolean { return this.selectedWorkflowProject?.id === project.id; }

  getWorkflowTasksByStatus(status: StatutTache): WorkflowTache[] {
    if (status === 'EN_COURS') {
      return this.workflowTaches.filter((task) => task.statutTache === 'EN_COURS' || task.statutTache === 'EN_RETARD' || task.statutTache === 'BLOQUEE');
    }
    return this.workflowTaches.filter((task) => task.statutTache === status);
  }

  getTaskStatusLabel(task: WorkflowTache): string {
    if (task.statutTache === 'EN_RETARD') { return 'EN_COURS (retard)'; }
    if (task.statutTache === 'BLOQUEE')   { return 'EN_COURS (bloquée)'; }
    return task.statutTache;
  }

  toggleTaskExpansion(task: WorkflowTache): void {
    const isOpen = this.expandedTaskId === task.id;
    this.expandedTaskId = isOpen ? null : task.id;
  }

  openTaskModal(task: WorkflowTache): void {
    console.log('[DEBUG] openTaskModal', { task });
    this.selectedTaskForModal = task;
    this.showTaskModal = true;
    if (!this.hasLoadedSubTasks(task.id) && !this.loadingSousTachesByTache[task.id]) {
      this.loadSousTaches(task.id);
    }
  }

  closeTaskModal(): void { this.showTaskModal = false; this.selectedTaskForModal = null; }

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

  isTaskExpanded(taskId: number): boolean { return this.expandedTaskId === taskId; }

  onTaskDragStart(task: WorkflowTache): void { this.draggedTaskId = task.id; }
  allowTaskDrop(event: DragEvent): void { event.preventDefault(); }

  dropTaskInColumn(targetStatus: StatutTache): void {
    if (!this.draggedTaskId) { return; }
    const task = this.workflowTaches.find((row) => row.id === this.draggedTaskId);
    this.draggedTaskId = null;
    if (!task || task.statutTache === targetStatus) { return; }
    if (!this.isAllowedTaskTransition(task.statutTache, targetStatus)) {
      this.submitMessage = `Transition non autorisée: ${task.statutTache} -> ${targetStatus}`;
      return;
    }
    this.updateTaskStatus(task, targetStatus);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Livrables & documents
  // ═══════════════════════════════════════════════════════════════════════════

  getAllWorkflowDocuments(): WorkflowDocument[] {
    if (this.workflowProjectDocuments.length) { return this.workflowProjectDocuments; }
    const documents: WorkflowDocument[] = [];
    Object.values(this.workflowDocumentsBySousTache).forEach((rows) => documents.push(...rows));
    return documents;
  }

  canPreviewDocument(doc: WorkflowDocument): boolean {
    const mime = (doc.typeContenu || '').toLowerCase();
    return mime.startsWith('image/') || mime === 'application/pdf';
  }

  openDeliverablePreview(doc: WorkflowDocument): void {
    if (!this.canPreviewDocument(doc)) { this.downloadDeliverable(doc); return; }
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
      error: (err) => { this.isSubmitting = false; this.submitMessage = this.parseHttpError(err, 'Impossible de charger ce livrable pour visualisation.'); }
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
      error: (err) => { this.isSubmitting = false; this.submitMessage = this.parseHttpError(err, 'Impossible de télécharger ce livrable.'); }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Sous-tâches
  // ═══════════════════════════════════════════════════════════════════════════

  hasLoadedSubTasks(tacheId: number): boolean { return !!this.subTasksLoadedByTache[tacheId]; }
  getSousTachesForTask(tacheId: number): WorkflowSousTache[] { return this.workflowSousTachesByTache[tacheId] ?? []; }

  getActiveProjectDisplayScore(): string {
    if (!this.selectedWorkflowProject) { return '--'; }
    return String(this.selectedWorkflowProject.disciplineScore);
  }

  getActiveProjectStatusTone(project: Projet): 'teal' | 'amber' | 'green' | 'red' {
    if (this.needsCorrection(project)) { return 'red'; }
    if (project.status === 'completed') { return 'green'; }
    if (project.status === 'suspended') { return 'amber'; }
    return 'teal';
  }

  getWorkflowScoreHint(): string {
    if (!this.selectedWorkflowProject) { return 'Select a project to inspect its workflow.'; }
    const score = this.selectedWorkflowProject.disciplineScore;
    if (score >= 30) { return 'Good discipline. The workflow is stable.'; }
    if (score >= 0)  { return 'Watch the delays and corrections closely.'; }
    return 'Risk level. The project needs immediate attention.';
  }

  getProjectInfoFields(project: Projet): ProjectInfoField[] {
    const toValue = (value?: string | boolean | null): string => {
      if (typeof value === 'boolean') { return value ? 'Yes' : 'No'; }
      if (typeof value === 'string' && value.trim().length > 0) { return value.trim(); }
      return 'Not provided';
    };
    return [
      { key: 'problemeAdresse',       label: 'Problem addressed', value: toValue(project.problemeAdresse),       missing: !project.problemeAdresse?.trim()       },
      { key: 'solutionProposee',      label: 'Proposed solution', value: toValue(project.solutionProposee),      missing: !project.solutionProposee?.trim()      },
      { key: 'businessModel',         label: 'Business model',    value: toValue(project.businessModel),         missing: !project.businessModel?.trim()         },
      { key: 'innovationDescription', label: 'Innovation',        value: toValue(project.innovationDescription), missing: !project.innovationDescription?.trim() },
      { key: 'scalabiliteDescription',label: 'Scalability',       value: toValue(project.scalabiliteDescription),missing: !project.scalabiliteDescription?.trim()},
      { key: 'stadeProjet',           label: 'Project stage',     value: toValue(project.stadeProjet),           missing: !project.stadeProjet                   },
      { key: 'secteur',               label: 'Sector',            value: toValue(project.secteur),               missing: !project.secteur                       },
      { key: 'pocDisponible',         label: 'POC available',     value: toValue(project.pocDisponible),         missing: false                                  },
    ];
  }

  getCoachCorrectionsFeed(): CoachCorrectionFeedItem[] {
    const feed: CoachCorrectionFeedItem[] = [];

    this.workflowTaches.forEach((task) => {
      const taskComment = (task.commentaireCoach ?? '').trim();
      if (taskComment) { feed.push({ level: 'TASK', title: task.titre, comment: taskComment, status: task.statutTache }); }

      this.getSousTachesForTask(task.id).forEach((subTask) => {
        const subTaskComment = (subTask.commentaireCoach ?? '').trim();
        if (!subTaskComment) { return; }
        feed.push({ level: 'SUBTASK', title: `${task.titre} / ${subTask.titre}`, comment: subTaskComment, status: subTask.statutSousTache });
      });
    });

    return feed.sort((a, b) => {
      const rank = (status: StatutTache): number => {
        if (status === 'A_CORRIGER') { return 0; }
        if (status === 'EN_RETARD' || status === 'BLOQUEE') { return 1; }
        if (status === 'EN_CORRECTION') { return 2; }
        return 3;
      };
      return rank(a.status) - rank(b.status);
    });
  }

  resendCorrection(project: Projet): void {
    if (!this.hasActionableCorrection(project)) { this.submitMessage = this.getMissingActionableCorrectionHint(project); return; }
    const entrepreneurId = this.getCurrentEntrepreneurId();
    if (!entrepreneurId) { this.submitMessage = 'Entrepreneur session not found. Please sign in again.'; return; }
    this.pendingCorrectionSubmission = project;
    this.showCorrectionSubmitModal = true;
  }

  closeCorrectionSubmitModal(): void {
    if (!this.isSubmitting) { this.showCorrectionSubmitModal = false; this.pendingCorrectionSubmission = null; }
  }

  confirmCorrectionSubmission(): void {
    const project = this.pendingCorrectionSubmission;
    if (!project) { return; }
    const entrepreneurId = this.getCurrentEntrepreneurId();
    if (!entrepreneurId) {
      this.showCorrectionSubmitModal = false;
      this.pendingCorrectionSubmission = null;
      this.submitMessage = 'Entrepreneur session not found. Please sign in again.';
      return;
    }
    this.isSubmitting = true;
    this.submitMessage = '';

    this.http.post<Projet>(`${this.apiUrl}/entrepreneur/projets/${project.id}/resoumettre-correction`, null, {
      params: { entrepreneurId: String(entrepreneurId) }
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showCorrectionSubmitModal = false;
        this.pendingCorrectionSubmission = null;
        this.persistPendingCoachApproval(project.id);
        this.submitMessage = 'Correction submitted to coach review successfully.';
        this.refreshWithSelectedProject(project.id);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showCorrectionSubmitModal = false;
        this.pendingCorrectionSubmission = null;
        this.submitMessage = this.parseHttpError(err, 'Unable to re-submit corrections. Please try again.');
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Chargement des données depuis l'API
  // ═══════════════════════════════════════════════════════════════════════════

  loadSousTaches(tacheId: number): void {
    console.log('[DEBUG] loadSousTaches: called for tacheId', tacheId);
    this.loadingSousTachesByTache[tacheId] = true;
    this.http.get<WorkflowSousTache[]>(`${this.apiUrl}/entrepreneur/taches/${tacheId}/sous-taches`).subscribe({
      next: (rows) => {
        console.log('[DEBUG] loadSousTaches: API response', { tacheId, rows });
        this.workflowSousTachesByTache[tacheId] = rows;
        this.subTasksLoadedByTache[tacheId] = true;
        rows.forEach((row) => { this.sousTacheStatusById[row.id] = row.statutSousTache; });
        rows.forEach((st) => this.loadDocuments(st.id));
        this.loadingSousTachesByTache[tacheId] = false;
      },
      error: (err) => { console.error('[DEBUG] loadSousTaches: API error', err); this.loadingSousTachesByTache[tacheId] = false; }
    });
  }

  loadDocuments(sousTacheId: number): void {
    this.http.get<WorkflowDocument[]>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTacheId}/documents`).subscribe({
      next: (rows) => { this.workflowDocumentsBySousTache[sousTacheId] = rows; },
      error: () => { this.submitMessage = 'Unable to load sub-task documents.'; }
    });
  }

  loadProjectDocuments(projetId: string): void {
    this.http.get<WorkflowDocument[]>(`${this.apiUrl}/entrepreneur/projets/${projetId}/documents`).subscribe({
      next: (rows) => { this.workflowProjectDocuments = rows; },
      error: () => { this.submitMessage = 'Unable to load project deliverables.'; }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Statut des sous-tâches
  // ═══════════════════════════════════════════════════════════════════════════

  updateSousTacheStatut(sousTache: WorkflowSousTache): void {
    let statut = this.sousTacheStatusById[sousTache.id] ?? sousTache.statutSousTache;
    const justification = this.sousTacheJustificationById[sousTache.id] ?? '';

    if (!statut) { this.submitMessage = 'Please select a status before updating.'; return; }
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
        if (this.selectedWorkflowProject) { this.projetService.loadEntrepreneurProjects().subscribe(); }
      },
      error: (err) => { this.isSubmitting = false; this.submitMessage = this.parseHttpError(err, 'Unable to update sub-task status. Please try again.'); }
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
    if (sousTache.statutSousTache === 'A_CORRIGER') { return ['EN_CORRECTION']; }
    return this.taskStatusOptions.filter((status) => status !== 'A_CORRIGER');
  }

  getSubmissionTargetStatusForEntrepreneur(sousTache: WorkflowSousTache): StatutTache {
    if (sousTache.statutSousTache === 'A_CORRIGER') { return 'EN_CORRECTION'; }
    return 'TERMINEE';
  }

  canSubmitSousTache(sousTache: WorkflowSousTache): boolean {
    if (!this.canOpenSousTacheSubmitModal(sousTache)) { return false; }
    const hasFile = !!this.uploadFileBySousTacheId[sousTache.id];
    const hasJustification = (this.sousTacheJustificationById[sousTache.id] ?? '').trim().length >= 10;
    return hasFile && hasJustification;
  }

  canOpenSousTacheSubmitModal(sousTache: WorkflowSousTache): boolean {
    const nonSubmittableStatuses: StatutTache[] = ['TERMINEE', 'EN_CORRECTION'];
    if (nonSubmittableStatuses.includes(sousTache.statutSousTache)) { return false; }
    const parentTask = this.workflowTaches.find((task) => task.id === sousTache.tacheId);
    if (parentTask?.statutTache === 'TERMINEE') { return false; }
    return true;
  }

  getSousTacheSubmissionBlockReason(sousTache: WorkflowSousTache): string {
    if (sousTache.statutSousTache === 'TERMINEE')     { return 'Cette sous-tâche est déjà terminée: soumission désactivée.'; }
    if (sousTache.statutSousTache === 'EN_CORRECTION'){ return 'Sous-tâche déjà re-soumise: en attente de revue coach.'; }
    const parentTask = this.workflowTaches.find((task) => task.id === sousTache.tacheId);
    if (parentTask?.statutTache === 'TERMINEE') { return 'La tâche parente est terminée: nouvelle soumission désactivée.'; }
    return 'Soumission non disponible pour cet état.';
  }

  submitSousTacheWithLivrable(sousTache: WorkflowSousTache): void {
    const file = this.uploadFileBySousTacheId[sousTache.id];
    const justification = (this.sousTacheJustificationById[sousTache.id] ?? '').trim();

    if (!this.canOpenSousTacheSubmitModal(sousTache)) { this.submitMessage = this.getSousTacheSubmissionBlockReason(sousTache); return; }
    if (!file || justification.length < 10) { this.submitMessage = 'Upload file and justification (min 10 chars) are required before submission.'; return; }

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
            if (this.selectedWorkflowProject) { this.projetService.loadEntrepreneurProjects().subscribe(); }
            this.openSubmissionToast('Soumission réussie. Retour au Kanban...');
            setTimeout(() => {
              this.isSubmitting = false;
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
    if (!file) { this.submitMessage = 'Please select a file before upload.'; return; }

    this.isSubmitting = true;
    this.submitMessage = '';
    const formData = new FormData();
    formData.append('file', file);

    this.http.post<WorkflowDocument>(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/documents/upload`, formData).subscribe({
      next: () => { this.onDocumentUploadSuccess(sousTache); },
      error: () => {
        const timestamp = Date.now();
        this.http.post(`${this.apiUrl}/entrepreneur/sous-taches/${sousTache.id}/documents`, {
          nomFichier: `deliverable_${timestamp}`,
          nomOriginal: file.name,
          typeContenu: file.type || 'application/octet-stream',
          cheminStockage: `/uploads/${file.name}`,
          tailleFichier: file.size || 0
        }).subscribe({
          next: () => { this.onDocumentUploadSuccess(sousTache); },
          error: (fallbackErr) => { this.isSubmitting = false; this.submitMessage = this.parseHttpError(fallbackErr, 'Unable to upload deliverable. Please try again.'); }
        });
      }
    });
  }

  demanderProlongationSousTache(sousTache: WorkflowSousTache): void {
    const newDate = this.sousTacheExtensionDateById[sousTache.id];
    const justification = (this.sousTacheJustificationById[sousTache.id] ?? '').trim();

    if (!newDate)                   { this.submitMessage = 'Please select a new extension date.'; return; }
    if (!justification)             { this.submitMessage = 'Please provide a justification for the extension request.'; return; }
    if (justification.length < 10)  { this.submitMessage = 'Justification must be at least 10 characters long.'; return; }

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
      error: (err) => { this.isSubmitting = false; this.submitMessage = this.parseHttpError(err, 'Unable to request sub-task extension. Please try again.'); }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Statut & helpers projet
  // ═══════════════════════════════════════════════════════════════════════════

  isAssignedToCoach(project: Projet): boolean {
    return project.etatValidation === 'AFFECTE_COACH' || project.etatValidation === 'A_CORRIGER' || project.etatValidation === 'EN_REVUE';
  }
  needsCorrection(project: Projet): boolean { return project.etatValidation === 'A_CORRIGER'; }
  isDraft(project: Projet): boolean         { return project.etatValidation === 'BROUILLON'; }
  canEdit(project: Projet): boolean         { return this.isDraft(project) || this.needsCorrection(project); }
  statusLabel(project: Projet): string      { return formatProjetStatusLabel(project); }
  disciplineLevel(score: number): 'good' | 'watch' | 'risk' { return getDisciplineLevelClass(score); }

  impactHintSubTask(subTask: WorkflowSousTache): string {
    if (subTask.statutSousTache === 'BLOQUEE')  { return 'Blockage penalty: -15'; }
    if (subTask.retardJours > 7)                { return 'Long delay penalty: -10'; }
    if (subTask.statutSousTache === 'EN_RETARD'){ return 'Delay penalty: -3'; }
    if (subTask.statutSousTache === 'TERMINEE') { return subTask.retardJours > 0 ? 'Completed late: -3' : 'Completed on time: +5'; }
    return 'No direct score impact yet';
  }

  impactHintTask(task: WorkflowTache): string {
    if (task.statutTache === 'BLOQUEE')   { return 'Blockage penalty: -15'; }
    if (task.retardJours > 7)             { return 'Long delay penalty: -10'; }
    if (task.statutTache === 'EN_RETARD') { return 'Delay penalty: -5'; }
    if (task.statutTache === 'A_CORRIGER'){ return 'Correction penalty: -12'; }
    if (task.statutTache === 'TERMINEE')  { return task.retardJours > 0 ? 'Completed late: -5' : 'Completed on time: +10'; }
    return 'Active workflow item';
  }

  getTaskSubtaskCount(tacheId: number): number { return this.getSousTachesForTask(tacheId).length; }
  getDocumentsForSousTache(sousTacheId: number): WorkflowDocument[] { return this.workflowDocumentsBySousTache[sousTacheId] ?? []; }

  // ═══════════════════════════════════════════════════════════════════════════
  // Calendrier
  // ═══════════════════════════════════════════════════════════════════════════

  getCalendarMonthLabel(): string {
    return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(this.currentCalendarCursor);
  }
  goToPreviousCalendarMonth(): void {
    this.currentCalendarCursor = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth() - 1, 1);
  }
  goToNextCalendarMonth(): void {
    this.currentCalendarCursor = new Date(this.currentCalendarCursor.getFullYear(), this.currentCalendarCursor.getMonth() + 1, 1);
  }
  getCalendarDayHeaders(): string[] { return ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']; }

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

  // ═══════════════════════════════════════════════════════════════════════════
  // Polling "waiting coach approval"
  // ═══════════════════════════════════════════════════════════════════════════

  isWaitingCoachApproval(project: Projet | null): boolean {
    if (!project || project.etatValidation !== 'EN_REVUE') { return false; }
    if (project.correctionResoumiseEnAttenteCoach) { return true; }
    return this.readPendingCoachApprovalIds().includes(project.id);
  }

  private updateWaitingApprovalPolling(project: Projet | null): void {
    if (!project || !this.isWaitingCoachApproval(project)) { this.stopWaitingApprovalPolling(); return; }
    this.startWaitingApprovalPolling();
  }

  private startWaitingApprovalPolling(): void {
    if (this.waitingApprovalPollHandle) { return; }
    this.waitingApprovalPollHandle = setInterval(() => { this.refreshSelectedProjectInPlace(); }, 10000);
  }

  private stopWaitingApprovalPolling(): void {
    if (!this.waitingApprovalPollHandle) { return; }
    clearInterval(this.waitingApprovalPollHandle);
    this.waitingApprovalPollHandle = null;
  }

  private refreshSelectedProjectInPlace(): void {
    const selectedId = this.selectedWorkflowProject?.id;
    if (!selectedId) { return; }
    this.projetService.loadEntrepreneurProjects().subscribe({
      next: (projects) => {
        const updated = projects.find((project) => project.id === selectedId);
        if (!updated) { this.stopWaitingApprovalPolling(); return; }
        this.selectedWorkflowProject = updated;
        if (updated.etatValidation !== 'EN_REVUE') {
          this.clearPendingCoachApproval(updated.id);
          this.stopWaitingApprovalPolling();
          this.submitMessage = updated.etatValidation === 'VALIDE' ? 'Coach approved your correction.' : this.submitMessage;
        }
      },
      error: () => {}
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Storage helpers
  // ═══════════════════════════════════════════════════════════════════════════

  private persistSelectedProjectId(projectId: string): void {
    try { sessionStorage.setItem(this.selectedProjectStorageKey, projectId); } catch { }
  }

  private getPersistedSelectedProjectId(): string | null {
    try { return sessionStorage.getItem(this.selectedProjectStorageKey); } catch { return null; }
  }

  private refreshWithSelectedProject(projectId?: string): void {
    const idToPersist = projectId ?? this.selectedWorkflowProject?.id;
    if (idToPersist) { this.persistSelectedProjectId(idToPersist); }
    setTimeout(() => window.location.reload(), 800);
  }

  private persistPendingCoachApproval(projectId: string): void {
    try {
      const existing = this.readPendingCoachApprovalIds();
      if (!existing.includes(projectId)) { existing.push(projectId); }
      sessionStorage.setItem(this.pendingCoachApprovalStorageKey, JSON.stringify(existing));
    } catch { }
  }

  private clearPendingCoachApproval(projectId: string): void {
    try {
      const updated = this.readPendingCoachApprovalIds().filter((id) => id !== projectId);
      sessionStorage.setItem(this.pendingCoachApprovalStorageKey, JSON.stringify(updated));
    } catch { }
  }

  private readPendingCoachApprovalIds(): string[] {
    try {
      const raw = sessionStorage.getItem(this.pendingCoachApprovalStorageKey);
      if (!raw) { return []; }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((v) => typeof v === 'string') : [];
    } catch { return []; }
  }

  private getCorrectionGuideStorageKey(project: Projet): string {
    const corr = project.commentaireCorrectionCoach || '';
    const hash = corr ? this.simpleHash(corr) : (project.updatedAt || String(project.id));
    return `correctionGuideSeen_${project.id}_${hash}`;
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return Math.abs(hash);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Helpers privés divers
  // ═══════════════════════════════════════════════════════════════════════════

  private validateProjectForm(): string | null {
    const form = this.form;
    if (!form.nomStartup?.trim())           { return 'Startup name is required.'; }
    if (form.nomStartup.trim().length < 3)  { return 'Startup name must be at least 3 characters long.'; }
    if (!form.description?.trim())          { return 'Description is required.'; }
    if (form.description.trim().length < 10){ return 'Description must be at least 10 characters long.'; }
    if (!form.problemeAdresse?.trim())      { return 'Problem addressed is required.'; }
    if (!form.solutionProposee?.trim())     { return 'Proposed solution is required.'; }
    if (!form.businessModel?.trim())        { return 'Business model is required.'; }
    if (!form.secteur)                      { return 'Sector is required.'; }
    return this.getProjectTimelineValidationError(form.dateDebutProjet, form.dateFinProjet, false);
  }

  private createEmptyForm(): ProjetDraftInput {
    return {
      nomStartup: '', description: '', secteur: '', problemeAdresse: '',
      solutionProposee: '', businessModel: '', stadeProjet: 'IDEE',
      innovationDescription: '', scalabiliteDescription: '', pocDisponible: false,
      dateDebutProjet: '', dateFinProjet: '',
    };
  }

  private getProjectTimelineValidationError(startDate: string, endDate: string, enforceFutureStart: boolean): string | null {
    if (!startDate || !endDate) { return 'Project start and end dates are required.'; }
    const start = new Date(`${startDate}T00:00:00`);
    const end   = new Date(`${endDate}T00:00:00`);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) { return 'Project dates are invalid.'; }
    if (end < start) { return 'Project end date must be after start date.'; }
    if (enforceFutureStart) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (start < today) { return 'Project start date cannot be in the past.'; }
    }
    const msPerDay = 1000 * 60 * 60 * 24;
    const durationDays = Math.floor((end.getTime() - start.getTime()) / msPerDay);
    if (durationDays < this.minProjectDurationDays) {
      return `Project duration must be at least ${this.minProjectDurationDays} days.`;
    }
    return null;
  }

  private toDateInputValue(date?: Date): string {
    if (!date) { return ''; }
    const d = date instanceof Date ? date : new Date(date);
    if (Number.isNaN(d.getTime())) { return ''; }
    return d.toISOString().slice(0, 10);
  }

  private loadAssignedCoachs(projetId: string): void {
    this.http.get<AssignedCoach[]>(`${this.apiUrl}/entrepreneur/projets/${projetId}/coachs`).subscribe({
      next: (rows) => { this.assignedCoachs = rows; },
      error: () => { this.submitMessage = 'Unable to load assigned coaches.'; }
    });
  }

  private loadWorkflowTaches(projetId: string): void {
    this.http.get<WorkflowTache[]>(`${this.apiUrl}/entrepreneur/projets/${projetId}/taches`).subscribe({
      next: (rows) => {
        this.workflowTaches = rows;
        const firstTaskDate = rows.find((row) => !!row.dateFin)?.dateFin;
        if (firstTaskDate) { this.currentCalendarCursor = this.createMonthAnchor(new Date(firstTaskDate)); }
        this.workflowSousTachesByTache = {};
        this.workflowDocumentsBySousTache = {};
        this.subTasksLoadedByTache = {};
        this.loadingSousTachesByTache = {};
      },
      error: () => { this.submitMessage = 'Unable to load project tasks.'; }
    });
  }

  private isAllowedTaskTransition(from: StatutTache, to: StatutTache): boolean {
    const allowed: Record<StatutTache, StatutTache[]> = {
      A_FAIRE:       ['EN_COURS'],
      EN_COURS:      ['A_CORRIGER', 'TERMINEE', 'EN_RETARD', 'BLOQUEE'],
      A_CORRIGER:    ['EN_CORRECTION'],
      EN_CORRECTION: ['EN_COURS', 'A_CORRIGER', 'TERMINEE'],
      TERMINEE:      [],
      EN_RETARD:     ['EN_COURS', 'A_CORRIGER', 'TERMINEE'],
      BLOQUEE:       ['EN_COURS', 'A_CORRIGER'],
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
        if (this.selectedWorkflowProject) { this.projetService.loadEntrepreneurProjects().subscribe(); }
      },
      error: (err) => { this.isSubmitting = false; this.submitMessage = this.parseHttpError(err, 'Unable to update task status.'); }
    });
  }

  private getCurrentEntrepreneurId(): number {
    const u = this.authService.currentUser;
    if (u?.idUser != null && Number.isFinite(u.idUser) && u.idUser > 0) {
      return u.idUser;
    }
    const parsed = Number(u?.id ?? '');
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
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
    if (this.selectedWorkflowProject) { this.loadProjectDocuments(this.selectedWorkflowProject.id); }
  }

  contactPrimaryCoach(): void {
    const currentUserId = this.getCurrentEntrepreneurId();
    if (!currentUserId) {
      this.submitMessage = 'Entrepreneur session not found. Please sign in again.';
      return;
    }
    const primaryCoach = this.assignedCoachs.find(c => c.roleCoachProjet === 'COACH_PRINCIPAL') ?? this.assignedCoachs[0];
    if (!primaryCoach?.coachId) {
      this.submitMessage = 'Primary coach is not assigned yet.';
      return;
    }
    this.messageService.ensureDirectConversation(currentUserId, primaryCoach.coachId).subscribe({
      next: (conversation: any) => {
        const conversationId = conversation?.id ?? conversation?.conversationId ?? primaryCoach.coachId;
        this.router.navigate(['/entrepreneur/messages'], { queryParams: { conversationId } });
      },
      error: () => {
        this.submitMessage = 'Unable to open coach conversation right now.';
      }
    });
  }

  private openSubmissionToast(message: string): void {
    this.submissionToastMessage = message;
    this.showSubmissionToast = true;
    setTimeout(() => { this.showSubmissionToast = false; this.submissionToastMessage = ''; }, 1800);
  }

  private revokeDeliverablePreviewUrl(): void {
    if (this.selectedDeliverablePreviewUrl) {
      URL.revokeObjectURL(this.selectedDeliverablePreviewUrl);
      this.selectedDeliverablePreviewUrl = '';
    }
  }

  private formatDateKey(date: Date): string {
    const year  = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day   = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private createMonthAnchor(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private getRequestedCorrectionFieldKeys(project: Projet): Set<EditableProjectFieldKey> {
    const keys = new Set<EditableProjectFieldKey>();
    for (const hint of this.getProjectCorrectionHints(project)) {
      const normalized = this.normalizeToEditableProjectFieldKey(hint.fieldKey);
      if (normalized) { keys.add(normalized); }
    }
    return keys;
  }

  private normalizeToEditableProjectFieldKey(value: string): EditableProjectFieldKey | null {
    const normalized = (value ?? '').trim();
    if (!normalized) { return null; }
    if ((EDITABLE_PROJECT_FIELDS as string[]).includes(normalized)) { return normalized as EditableProjectFieldKey; }
    const fromLabel = this.toProjectFormFieldKeyFromLabel(normalized);
    if ((EDITABLE_PROJECT_FIELDS as string[]).includes(fromLabel)) { return fromLabel as EditableProjectFieldKey; }
    return null;
  }

  private toProjectFormFieldKeyFromLabel(label: string): string {
    const normalized = label.trim().toLowerCase();
    if (normalized === 'problem addressed') { return 'problemeAdresse'; }
    if (normalized === 'proposed solution') { return 'solutionProposee'; }
    if (normalized === 'business model')    { return 'businessModel'; }
    if (normalized === 'innovation')        { return 'innovationDescription'; }
    if (normalized === 'scalability')       { return 'scalabiliteDescription'; }
    if (normalized === 'poc')               { return 'pocDisponible'; }
    return label;
  }
}