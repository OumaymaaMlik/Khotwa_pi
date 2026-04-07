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

@Component({ selector:'app-admin-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class AdminProjetsComponent implements OnInit {
  private readonly apiUrl = 'http://localhost:8084/khotwa';

  filtre = 'all';
  search = '';
  loadingProjects = false;
  projectsError = '';
  showAssignModal = false;
  showReassignModal = false;
  assignMessage = '';
  coachsLoading = false;
  coachsError = '';
  selectedProjet: AdminProject | null = null;
  selectedPrincipalCoachId = '';
  selectedSecondaryCoachIds: string[] = [];
  selectedExpertCoachIds: string[] = [];

  activeAffectations: BackendAffectationResponse[] = [];
  affectationsLoading = false;
  selectedOldCoachId = '';
  selectedNewCoachId = '';
  selectedReassignRole: CoachRole = 'COACH_PRINCIPAL';
  motifReaffectation = '';

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
    this.selectedSecondaryCoachIds = [];
    this.selectedExpertCoachIds = [];
    this.showAssignModal = true;
    this.assignMessage = '';

    if (this.coachs.length === 0 && !this.coachsLoading) {
      this.loadCoachs();
    }
  }

  closeAssignCoach(): void {
    this.showAssignModal = false;
    this.selectedProjet = null;
    this.selectedPrincipalCoachId = '';
    this.selectedSecondaryCoachIds = [];
    this.selectedExpertCoachIds = [];
  }

  openReassignCoach(projet: AdminProject): void {
    this.selectedProjet = projet;
    this.selectedOldCoachId = '';
    this.selectedNewCoachId = '';
    this.motifReaffectation = '';
    this.selectedReassignRole = 'COACH_PRINCIPAL';
    this.activeAffectations = [];
    this.affectationsLoading = true;
    this.showReassignModal = true;

    this.http.get<BackendAffectationResponse[]>(`${this.apiUrl}/admin/projets/${projet.id}/affectations`).subscribe({
      next: (rows) => {
        this.activeAffectations = rows.filter((r) => r.actif);
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
    this.selectedOldCoachId = '';
    this.selectedNewCoachId = '';
    this.motifReaffectation = '';
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

    for (const coachId of this.selectedSecondaryCoachIds) {
      coachsPayload.push({ coachId: Number(coachId), roleCoachProjet: 'COACH_SECONDAIRE' });
    }
    for (const coachId of this.selectedExpertCoachIds) {
      coachsPayload.push({ coachId: Number(coachId), roleCoachProjet: 'EXPERT_METIER' });
    }

    const payload: AffectationMultiplePayload = {
      adminId,
      coachs: this.uniqueCoachRoleAssignments(coachsPayload),
    };

    this.http.post(`${this.apiUrl}/admin/projets/${this.selectedProjet.id}/affectations/multiple`, payload).subscribe({
      next: () => {
        this.assignMessage = `Coaches assigned to ${this.selectedProjet?.titre}.`;
        this.closeAssignCoach();
        this.loadProjects();
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
        this.assignMessage = `Coach reassigned for ${this.selectedProjet?.titre}.`;
        this.closeReassignCoach();
        this.loadProjects();
      },
      error: (err) => {
        console.log('[AdminProjets] Reassignment request failed', err);
        this.assignMessage = 'Reassignment failed. Please try again.';
      }
    });
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

  private toUiStatus(statut: BackendProjetResponse['statutProjet']): UiStatus {
    if (statut === 'SUSPENDU') {
      return 'suspended';
    }
    if (statut === 'TERMINE' || statut === 'ARCHIVE') {
      return 'completed';
    }
    return 'in_progress';
  }
}
