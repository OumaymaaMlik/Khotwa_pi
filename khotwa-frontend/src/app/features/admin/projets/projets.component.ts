import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

type UiStatus = 'in_progress' | 'suspended' | 'completed';
type BackendEtatValidation = 'BROUILLON' | 'SOUMIS_ADMIN' | 'AFFECTE_COACH' | 'EN_REVUE' | 'A_CORRIGER' | 'VALIDE' | 'REFUSE';
type CoachRole = 'COACH_PRINCIPAL' | 'COACH_SECONDAIRE' | 'EXPERT_METIER';

interface CoachOption {
  id: string;
  nom: string;
  specialite: string;
  secteur: string;
  disponibilite: string;
  chargeActuelle: number;
  nombreProjetsActifs: number;
}

interface AdminProject {
  id: string;
  titre: string;
  description: string;
  secteur: string;
  stadeProjet: string;
  dateSoumission?: Date;
  entrepreneur: string;
  etatValidation: BackendEtatValidation;
  submitted: boolean;
  status: UiStatus;
  progression: number;
  etapesCount: number;
}

interface BackendCoachDisponibilite {
  coachId: number;
  nomAffiche: string;
  specialite: string | null;
  secteur: string | null;
  disponibilite: string | null;
  chargeActuelle: number;
  nombreProjetsActifs: number;
}

interface BackendProjetResponse {
  id: number;
  nomStartup: string;
  description: string;
  entrepreneurId: number;
  secteur: string;
  stadeProjet: 'IDEE' | 'POC' | 'MVP' | 'PROTOTYPE' | 'COMMERCIALISATION' | 'SCALING';
  dateSoumission: string | null;
  entrepreneurNomAffiche: string | null;
  statutProjet: 'EN_COURS' | 'SUSPENDU' | 'TERMINE' | 'ARCHIVE';
  etatValidation: BackendEtatValidation;
  scoreDisciplineGlobal: number;
}

interface AffectationMultiplePayload {
  adminId: number;
  coachs: Array<{
    coachId: number;
    roleCoachProjet: CoachRole;
  }>;
}

interface BackendAffectationResponse {
  coachId: number;
  roleCoachProjet: CoachRole;
  actif: boolean;
}

interface ReaffectationPayload {
  ancienCoachId: number;
  nouveauCoachId: number;
  adminId: number;
  roleCoachProjet: CoachRole;
  motifReaffectation: string;
}

interface BackendCoachRecommendation {
  coachId: number;
  coachNomAffiche: string;
  scoreGlobal: number;
  scoreTemps: number;
  scoreMetier: number;
  scoreDisponibilite: number;
  scoreEquite: number;
  chargeActuelle: number;
}

interface BackendAffectationRecommendation {
  projetId: number;
  principalCoachId: number | null;
  secondaryCoachIds: number[];
  expertCoachId: number | null;
  candidats: BackendCoachRecommendation[];
}

@Component({ selector:'app-admin-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class AdminProjetsComponent implements OnInit {
  private readonly apiUrl = 'http://localhost:8084/khotwa';
  private readonly recPanelStorageKey = 'admin-projets-rec-panel-state';
  private readonly secteurLabels: Record<string, string> = {
    TECHNOLOGIE_LOGICIEL: 'Technologie & Logiciel',
    FINTECH: 'FinTech',
    ECOMMERCE_RETAIL: 'E-commerce & Retail',
    SANTE_MEDTECH: 'Sante & MedTech',
    EDUCATION_EDTECH: 'Education & EdTech',
    AGRICULTURE_AGRITECH: 'Agriculture & AgriTech',
    ENERGIE_CLEANTECH: 'Energie & CleanTech',
    MOBILITE_LOGISTIQUE: 'Mobilite & Logistique',
    INDUSTRIE_MANUFACTURING: 'Industrie & Manufacturing',
    IMMOBILIER_PROPTECH: 'Immobilier & PropTech',
    TOURISME_HOSPITALITE: 'Tourisme & Hospitalite',
    MEDIA_COMMUNICATION: 'Media & Communication',
    IA_DATA: 'IA & Data',
    CYBERSECURITE: 'Cybersecurite',
    SERVICES_B2B: 'Services B2B',
  };

  filtre = 'all';
  search = '';
  loadingProjects = false;
  projectsError = '';
  showAssignModal = false;
  showReassignModal = false;
  showDetailsModal = false;
  showAssignSuccessModal = false;
  showReassignSuccessModal = false;
  successModalMessage = '';
  recommendationLoading = false;
  assignMessage = '';
  coachsLoading = false;
  coachsError = '';
  selectedProjet: AdminProject | null = null;
  selectedProjectDetails: AdminProject | null = null;
  selectedPrincipalCoachId = '';
  selectedSecondaryCoachId = '';
  selectedExpertCoachId = '';
  recommendedCoachIds = new Set<string>();
  recommendationCandidates: BackendCoachRecommendation[] = [];
  showRecommendationPanel = true;

  activeAffectations: BackendAffectationResponse[] = [];
  affectationsLoading = false;
  reassignRecommendationLoading = false;
  selectedOldCoachId = '';
  selectedNewCoachId = '';
  selectedReassignRole: CoachRole = 'COACH_PRINCIPAL';
  motifReaffectation = '';
  reassignRecommendationCandidates: BackendCoachRecommendation[] = [];

  projects: AdminProject[] = [];
  coachs: CoachOption[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadCoachs();
  }

  get filteredProjets() {
    let l = this.projects;
    if (this.filtre === 'submitted') {
      l = l.filter(p => p.etatValidation === 'SOUMIS_ADMIN');
    } else if (this.filtre === 'assigned') {
      l = l.filter(p => p.etatValidation === 'AFFECTE_COACH');
    } else if (this.filtre !== 'all') {
      l = l.filter(p => p.status === this.filtre);
    }
    if (this.search) l = l.filter(p => p.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }

  canAssignCoach(projet: AdminProject): boolean {
    return projet.etatValidation === 'SOUMIS_ADMIN';
  }

  canReassignCoach(projet: AdminProject): boolean {
    return projet.etatValidation === 'AFFECTE_COACH';
  }

  openAssignCoach(projet: AdminProject): void {
    this.selectedProjet = projet;
    this.selectedPrincipalCoachId = '';
    this.selectedSecondaryCoachId = '';
    this.selectedExpertCoachId = '';
    this.recommendationCandidates = [];
    this.showRecommendationPanel = this.getRecommendationPanelPreference(projet.id) ?? true;
    this.showAssignModal = true;
    this.assignMessage = '';

    if (this.coachs.length === 0 && !this.coachsLoading) {
      this.loadCoachs();
    }

    this.loadRecommendations(projet.id);
  }

  openProjectDetails(projet: AdminProject): void {
    this.selectedProjectDetails = projet;
    this.showDetailsModal = true;
    this.activeAffectations = [];
    this.affectationsLoading = true;

    this.http.get<BackendAffectationResponse[]>(`${this.apiUrl}/admin/projets/${projet.id}/affectations`).subscribe({
      next: (rows) => {
        this.activeAffectations = rows.filter((r) => r.actif);
        this.affectationsLoading = false;
      },
      error: () => {
        this.affectationsLoading = false;
      }
    });
  }

  closeProjectDetails(): void {
    this.showDetailsModal = false;
    this.selectedProjectDetails = null;
    this.activeAffectations = [];
  }

  closeAssignCoach(): void {
    this.showAssignModal = false;
    this.selectedProjet = null;
    this.selectedPrincipalCoachId = '';
    this.selectedSecondaryCoachId = '';
    this.selectedExpertCoachId = '';
    this.recommendedCoachIds.clear();
    this.recommendationCandidates = [];
    this.showRecommendationPanel = true;
  }

  get topRecommendationCandidates(): BackendCoachRecommendation[] {
    return this.recommendationCandidates.slice(0, 3);
  }

  formatScore(value: number): string {
    return Number.isFinite(value) ? value.toFixed(1) : '0.0';
  }

  scoreTone(value: number, max: number): 'good' | 'watch' | 'risk' {
    const ratio = max > 0 ? value / max : 0;
    if (ratio >= 0.75) {
      return 'good';
    }
    if (ratio >= 0.45) {
      return 'watch';
    }
    return 'risk';
  }

  scoreWidth(value: number): number {
    if (!Number.isFinite(value)) {
      return 0;
    }
    return Math.max(0, Math.min(100, value));
  }

  openReassignCoach(projet: AdminProject): void {
    this.selectedProjet = projet;
    this.selectedOldCoachId = '';
    this.selectedNewCoachId = '';
    this.motifReaffectation = '';
    this.selectedReassignRole = 'COACH_PRINCIPAL';
    this.activeAffectations = [];
    this.reassignRecommendationCandidates = [];
    this.affectationsLoading = true;
    this.reassignRecommendationLoading = false;
    this.showReassignModal = true;

    this.http.get<BackendAffectationResponse[]>(`${this.apiUrl}/admin/projets/${projet.id}/affectations`).subscribe({
      next: (rows) => {
        this.activeAffectations = rows.filter((r) => r.actif);
        this.applyDefaultReassignSelection();
        if (!this.selectedOldCoachId) {
          this.selectedOldCoachId = this.getDefaultActiveCoachId();
        }
        this.loadReassignRecommendations(projet.id);
        this.affectationsLoading = false;
      },
      error: () => {
        this.affectationsLoading = false;
        this.assignMessage = 'Unable to load active assignments for reassignment.';
      }
    });
  }

  closeReassignCoach(): void {
    this.showReassignModal = false;
    this.selectedProjet = null;
    this.activeAffectations = [];
    this.reassignRecommendationCandidates = [];
    this.selectedOldCoachId = '';
    this.selectedNewCoachId = '';
    this.motifReaffectation = '';
    this.reassignRecommendationLoading = false;
  }

  get currentCoachLabel(): string {
    if (!this.selectedOldCoachId) {
      return 'No active coach found';
    }

    const coachName = this.getCoachName(this.selectedOldCoachId);
    const role = this.activeAffectations.find((affectation) => String(affectation.coachId) === this.selectedOldCoachId)?.roleCoachProjet;
    return role ? `${coachName} · ${this.formatRoleLabel(role)}` : coachName;
  }

  get activeCoachAssignmentsLabel(): string {
    if (this.activeAffectations.length === 0) {
      return 'No active coach assignment';
    }

    return this.activeAffectations
      .map((affectation) => `${this.getCoachName(affectation.coachId)} · ${this.formatRoleLabel(affectation.roleCoachProjet)}`)
      .join(' | ');
  }

  get selectableSecondaryCoachs(): CoachOption[] {
    return this.coachs.filter((coach) => coach.id !== this.selectedPrincipalCoachId);
  }

  get selectableExpertCoachs(): CoachOption[] {
    return this.coachs.filter((coach) => coach.id !== this.selectedPrincipalCoachId);
  }

  get selectableReassignCoachs(): CoachOption[] {
    const excluded = new Set(
      this.activeAffectations
        .map((row) => String(row.coachId))
        .filter((coachId) => coachId !== this.selectedOldCoachId)
    );
    excluded.add(this.selectedOldCoachId);
    return this.coachs.filter((coach) => !excluded.has(coach.id));
  }

  get topReassignRecommendations(): BackendCoachRecommendation[] {
    return this.reassignRecommendationCandidates.slice(0, 3);
  }

  applyBestReassignRecommendation(): void {
    const top = this.topReassignRecommendations[0];
    if (top) {
      this.selectedNewCoachId = String(top.coachId);
    }
  }

  onPrincipalCoachChange(): void {
    if (this.selectedSecondaryCoachId === this.selectedPrincipalCoachId) {
      this.selectedSecondaryCoachId = '';
    }
    if (this.selectedExpertCoachId === this.selectedPrincipalCoachId) {
      this.selectedExpertCoachId = '';
    }
    if (this.selectedPrincipalCoachId && this.selectedProjet && this.getRecommendationPanelPreference(this.selectedProjet.id) === null) {
      this.showRecommendationPanel = false;
      this.saveRecommendationPanelPreference(this.selectedProjet.id, false);
    }
  }

  toggleRecommendationPanel(): void {
    this.showRecommendationPanel = !this.showRecommendationPanel;
    if (this.selectedProjet) {
      this.saveRecommendationPanelPreference(this.selectedProjet.id, this.showRecommendationPanel);
    }
  }

  isRecommendedCoach(coachId: string): boolean {
    return this.recommendedCoachIds.has(coachId);
  }

  formatSecteurLabel(value: string | null | undefined): string {
    if (!value) {
      return 'N/A';
    }
    const key = value.trim().toUpperCase();
    if (this.secteurLabels[key]) {
      return this.secteurLabels[key];
    }
    return this.humanizeToken(value);
  }

  formatDisponibiliteLabel(value: string | null | undefined): string {
    if (!value) {
      return 'Non renseignee';
    }
    const key = value.trim().toUpperCase();
    if (['OUI', 'YES', 'TRUE', 'DISPONIBLE', 'AVAILABLE'].includes(key)) {
      return 'Disponible';
    }
    if (['NON', 'NO', 'FALSE', 'INDISPONIBLE', 'UNAVAILABLE'].includes(key)) {
      return 'Indisponible';
    }
    if (['PARTIEL', 'PARTIELLE', 'PARTIAL'].includes(key)) {
      return 'Partielle';
    }
    return this.humanizeToken(value);
  }

  formatRoleLabel(role: CoachRole): string {
    if (role === 'COACH_PRINCIPAL') {
      return 'Coach principal';
    }
    if (role === 'COACH_SECONDAIRE') {
      return 'Coach secondaire';
    }
    return 'Expert metier';
  }

  formatStadeLabel(stade: string | null | undefined): string {
    if (!stade) {
      return 'N/A';
    }
    return this.humanizeToken(stade);
  }

  principalCoachOptionLabel(coach: CoachOption): string {
    return `${coach.nom} - ${this.formatSecteurLabel(coach.specialite)} - charge ${coach.chargeActuelle}`;
  }

  secondaryCoachOptionLabel(coach: CoachOption): string {
    return `${coach.nom} - ${this.formatSecteurLabel(coach.specialite)} - ${coach.nombreProjetsActifs} projet(s) actif(s)`;
  }

  expertCoachOptionLabel(coach: CoachOption): string {
    return `${coach.nom} - ${this.formatSecteurLabel(coach.specialite)} - ${this.formatDisponibiliteLabel(coach.disponibilite)}`;
  }

  private humanizeToken(value: string): string {
    return value
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  confirmAssignCoach(): void {
    if (!this.selectedProjet || !this.selectedPrincipalCoachId) {
      return;
    }

    const adminId = this.getCurrentAdminId();
    if (!adminId) {
      this.assignMessage = 'Admin session not found. Please sign in again.';
      return;
    }

    const coachsPayload: AffectationMultiplePayload['coachs'] = [
      { coachId: Number(this.selectedPrincipalCoachId), roleCoachProjet: 'COACH_PRINCIPAL' }
    ];

    if (this.selectedSecondaryCoachId) {
      coachsPayload.push({ coachId: Number(this.selectedSecondaryCoachId), roleCoachProjet: 'COACH_SECONDAIRE' });
    }
    if (this.selectedExpertCoachId) {
      coachsPayload.push({ coachId: Number(this.selectedExpertCoachId), roleCoachProjet: 'EXPERT_METIER' });
    }

    const payload: AffectationMultiplePayload = {
      adminId,
      coachs: this.uniqueCoachRoleAssignments(coachsPayload),
    };

    this.http.post(`${this.apiUrl}/admin/projets/${this.selectedProjet.id}/affectations/multiple`, payload).subscribe({
      next: () => {
        this.successModalMessage = `Affectation réussie pour ${this.selectedProjet?.titre}.`;
        this.closeAssignCoach();
        this.showAssignSuccessModal = true;
      },
      error: () => {
        this.assignMessage = 'Assignment failed. Please try again.';
      }
    });
  }

  confirmReassignCoach(): void {
    console.log('[AdminProjets] Confirm reassignment clicked', {
      selectedProjetId: this.selectedProjet?.id,
      selectedOldCoachId: this.selectedOldCoachId,
      selectedNewCoachId: this.selectedNewCoachId,
      selectedReassignRole: this.selectedReassignRole,
      motifLength: this.motifReaffectation?.trim().length ?? 0,
    });

    if (!this.selectedProjet || !this.selectedOldCoachId || !this.selectedNewCoachId || !this.motifReaffectation.trim()) {
      console.log('[AdminProjets] Reassignment blocked by validation guard');
      return;
    }

    const adminId = this.getCurrentAdminId();
    if (!adminId) {
      this.assignMessage = 'Admin session not found. Please sign in again.';
      console.log('[AdminProjets] Reassignment blocked: invalid admin session');
      return;
    }

    const payload: ReaffectationPayload = {
      ancienCoachId: Number(this.selectedOldCoachId),
      nouveauCoachId: Number(this.selectedNewCoachId),
      adminId,
      roleCoachProjet: this.selectedReassignRole,
      motifReaffectation: this.motifReaffectation.trim(),
    };

    console.log('[AdminProjets] Reassignment request payload', payload);

    this.http.post(`${this.apiUrl}/admin/projets/${this.selectedProjet.id}/reaffectations`, payload).subscribe({
      next: () => {
        console.log('[AdminProjets] Reassignment request succeeded');
        this.successModalMessage = `Réaffectation réussie pour ${this.selectedProjet?.titre}.`;
        this.closeReassignCoach();
        this.showReassignSuccessModal = true;
      },
      error: (err) => {
        console.log('[AdminProjets] Reassignment request failed', err);
        this.assignMessage = 'Reassignment failed. Please try again.';
      }
    });
  }

  private applyDefaultReassignSelection(): void {
    if (this.selectedOldCoachId || this.activeAffectations.length === 0) {
      return;
    }

    const principal = this.activeAffectations.find((affectation) => affectation.roleCoachProjet === 'COACH_PRINCIPAL');
    const fallback = principal ?? this.activeAffectations[0];
    if (fallback) {
      this.selectedOldCoachId = String(fallback.coachId);
      this.selectedReassignRole = fallback.roleCoachProjet;
    }
  }

  private getDefaultActiveCoachId(): string {
    const principal = this.activeAffectations.find((affectation) => affectation.roleCoachProjet === 'COACH_PRINCIPAL');
    const fallback = principal ?? this.activeAffectations[0];
    return fallback ? String(fallback.coachId) : '';
  }

  getCoachName(coachId: string | number): string {
    const key = String(coachId);
    return this.coachs.find(c => c.id === key)?.nom ?? 'Unknown coach';
  }

  etatLabel(projet: AdminProject): string {
    if (projet.etatValidation === 'SOUMIS_ADMIN') {
      return 'Submitted to admin';
    }
    if (projet.etatValidation === 'AFFECTE_COACH') {
      return 'Assigned to coaches';
    }
    return projet.etatValidation;
  }

  private loadCoachs(): void {
    this.coachsLoading = true;
    this.coachsError = '';

    this.http.get<BackendCoachDisponibilite[]>(`${this.apiUrl}/admin/coachs/disponibles`).subscribe({
      next: (rows) => {
        this.coachs = rows.map((row) => ({
          id: String(row.coachId),
          nom: row.nomAffiche,
          specialite: row.specialite ?? 'General coaching',
          secteur: row.secteur ?? 'N/A',
          disponibilite: row.disponibilite ?? 'N/A',
          chargeActuelle: row.chargeActuelle,
          nombreProjetsActifs: row.nombreProjetsActifs,
        }));
        this.coachsLoading = false;
      },
      error: () => {
        this.coachsLoading = false;
        this.coachsError = 'Unable to load coaches from backend.';
      }
    });
  }

  private loadProjects(): void {
    this.loadingProjects = true;
    this.projectsError = '';

    this.http.get<BackendProjetResponse[]>(`${this.apiUrl}/admin/projets/soumis`).subscribe({
      next: (soumisRows) => {
        this.http.get<BackendProjetResponse[]>(`${this.apiUrl}/admin/projets/affectes`).subscribe({
          next: (affectesRows) => {
            const allRows = [...soumisRows, ...affectesRows];
            this.projects = allRows.map((row) => ({
              id: String(row.id),
              titre: row.nomStartup,
              description: row.description,
              secteur: row.secteur,
              stadeProjet: row.stadeProjet,
              dateSoumission: row.dateSoumission ? new Date(row.dateSoumission) : undefined,
              entrepreneur: row.entrepreneurNomAffiche ?? `Entrepreneur #${row.entrepreneurId}`,
              etatValidation: row.etatValidation,
              submitted: row.etatValidation === 'SOUMIS_ADMIN',
              status: this.toUiStatus(row.statutProjet),
              progression: Math.max(0, Math.min(100, row.scoreDisciplineGlobal)),
              etapesCount: 0,
            }));
            this.loadingProjects = false;
          },
          error: () => {
            this.loadingProjects = false;
            this.projectsError = 'Unable to load assigned projects from backend.';
          }
        });
      },
      error: () => {
        this.loadingProjects = false;
        this.projectsError = 'Unable to load submitted projects from backend.';
      }
    });
  }

  private loadRecommendations(projetId: string): void {
    this.recommendationLoading = true;
    this.http.get<BackendAffectationRecommendation>(`${this.apiUrl}/admin/projets/${projetId}/recommandations-coachs`).subscribe({
      next: (recommendation) => {
        this.applyRecommendationSelection(recommendation);
        this.recommendationLoading = false;
      },
      error: () => {
        this.recommendationLoading = false;
      }
    });
  }

  private loadReassignRecommendations(projetId: string): void {
    this.reassignRecommendationLoading = true;
    this.http.get<BackendAffectationRecommendation>(`${this.apiUrl}/admin/projets/${projetId}/recommandations-coachs`).subscribe({
      next: (recommendation) => {
        this.applyReassignRecommendationSelection(recommendation);
        this.reassignRecommendationLoading = false;
      },
      error: () => {
        this.reassignRecommendationLoading = false;
      }
    });
  }

  private applyRecommendationSelection(recommendation: BackendAffectationRecommendation): void {
    this.recommendedCoachIds.clear();
    this.recommendationCandidates = recommendation.candidats ?? [];

    if (recommendation.principalCoachId) {
      this.selectedPrincipalCoachId = String(recommendation.principalCoachId);
      this.recommendedCoachIds.add(this.selectedPrincipalCoachId);
    }

    this.selectedSecondaryCoachId = (recommendation.secondaryCoachIds ?? [])
      .map((id) => String(id))
      .filter((id) => id !== this.selectedPrincipalCoachId)
      [0] ?? '';
    if (this.selectedSecondaryCoachId) {
      this.recommendedCoachIds.add(this.selectedSecondaryCoachId);
    }

    this.selectedExpertCoachId = recommendation.expertCoachId
      ? [String(recommendation.expertCoachId)].filter((id) => id !== this.selectedPrincipalCoachId)
          [0] ?? ''
      : '';
    if (this.selectedExpertCoachId) {
      this.recommendedCoachIds.add(this.selectedExpertCoachId);
    }

    if (this.selectedProjet && this.getRecommendationPanelPreference(this.selectedProjet.id) === null) {
      this.showRecommendationPanel = !this.selectedPrincipalCoachId;
      this.saveRecommendationPanelPreference(this.selectedProjet.id, this.showRecommendationPanel);
    }

    if (recommendation.principalCoachId) {
      this.assignMessage = 'Les coachs recommandes ont ete pre-selectionnes automatiquement.';
    } else {
      this.assignMessage = 'Aucune recommandation automatique disponible pour ce projet.';
    }
  }

  closeAssignSuccessModal(): void {
    this.showAssignSuccessModal = false;
    this.successModalMessage = '';
    this.refreshAfterSuccess();
  }

  closeReassignSuccessModal(): void {
    this.showReassignSuccessModal = false;
    this.successModalMessage = '';
    this.refreshAfterSuccess();
  }

  private refreshAfterSuccess(): void {
    this.assignMessage = 'Données mises à jour.';
    this.loadProjects();
    if (this.coachs.length === 0) {
      this.loadCoachs();
    }
  }

  private applyReassignRecommendationSelection(recommendation: BackendAffectationRecommendation): void {
    const excluded = new Set(
      this.activeAffectations
        .map((row) => String(row.coachId))
        .filter((coachId) => coachId !== this.selectedOldCoachId)
    );
    excluded.add(this.selectedOldCoachId);

    this.reassignRecommendationCandidates = (recommendation.candidats ?? []).filter(
      (candidate) => !excluded.has(String(candidate.coachId))
    );

    const best = this.reassignRecommendationCandidates[0];
    if (best && (!this.selectedNewCoachId || this.selectedNewCoachId === this.selectedOldCoachId)) {
      this.selectedNewCoachId = String(best.coachId);
    }
  }

  private uniqueCoachRoleAssignments(items: AffectationMultiplePayload['coachs']): AffectationMultiplePayload['coachs'] {
    const seen = new Set<string>();
    const result: AffectationMultiplePayload['coachs'] = [];

    for (const item of items) {
      const key = `${item.coachId}-${item.roleCoachProjet}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }

    return result;
  }

  private getCurrentAdminId(): number {
    const rawId = this.authService.currentUser?.id ?? '';
    const parsed = Number(rawId);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }

  private toUiStatus(statut: BackendProjetResponse['statutProjet']): UiStatus {
    if (statut === 'SUSPENDU') {
      return 'suspended';
    }
    if (statut === 'TERMINE' || statut === 'ARCHIVE') {
      return 'completed';
    }
    return 'in_progress';
  }

  private getRecommendationPanelPreference(projectId: string): boolean | null {
    try {
      const raw = sessionStorage.getItem(this.recPanelStorageKey);
      if (!raw) {
        return null;
      }

      const parsed = JSON.parse(raw) as Record<string, boolean>;
      if (!(projectId in parsed)) {
        return null;
      }

      return !!parsed[projectId];
    } catch {
      return null;
    }
  }

  private saveRecommendationPanelPreference(projectId: string, isOpen: boolean): void {
    try {
      const raw = sessionStorage.getItem(this.recPanelStorageKey);
      const parsed = raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
      parsed[projectId] = isOpen;
      sessionStorage.setItem(this.recPanelStorageKey, JSON.stringify(parsed));
    } catch {
      // Ignore storage access issues.
    }
  }
}
