import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-coach-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class CoachDashboardComponent implements OnInit {

  projets:     ProjetResponseDto[] = [];
  validations: any[] = [];
  loading   = false;
  loadError: string | null = null;

  constructor(private projetService: ProjetService, public auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.loadError = null;
    this.projetService.getProjetsCoach().subscribe({
      next: (p: ProjetResponseDto[]) => {
        this.projets = p;
        this.validations = p
          .filter(proj =>
            proj.etatValidation === 'EN_REVUE' ||
            proj.etatValidation === 'A_CORRIGER' ||
            proj.etatValidation === 'AFFECTE_COACH'
          )
          .map(proj => ({
            task:    proj.titre,
            startup: `Entrepreneur #${proj.entrepreneurId}`,
            status:  proj.etatValidation === 'EN_REVUE'    ? 'pending'
                   : proj.etatValidation === 'A_CORRIGER'  ? 'correction'
                   : 'pending',
            doc:     '—',
            // Accès sécurisé à updatedAt
            date:    (proj.updatedAt instanceof Date && !isNaN(proj.updatedAt.getTime()))
                       ? proj.updatedAt.toISOString().slice(0, 10)
                       : '',
          }));
        this.loading = false;
      },
      error: () => {
        this.projets     = [];
        this.validations = [];
        this.loadError   = 'Impossible de charger les projets. Vérifiez que l\'API tourne (port 8084) et que vous êtes connecté en tant que coach.';
        this.loading     = false;
      },
    });
  }

  get coachFirstName(): string {
    return this.auth.currentUser?.firstName?.trim() || 'Coach';
  }

  get stats() {
    const pendingEv = (ev: string | undefined) =>
      ev === 'EN_REVUE' || ev === 'A_CORRIGER' || ev === 'AFFECTE_COACH';
    return {
      total:              this.projets.length,
      enCours:            this.projets.filter(p => p.status === 'in_progress').length,
      pendingValidations: this.projets.filter(p => pendingEv(p.etatValidation)).length,
      enRevue:            this.projets.filter(p => p.etatValidation === 'EN_REVUE').length,
      aCorrection:        this.projets.filter(p => p.etatValidation === 'A_CORRIGER').length,
      sessionsThisMonth:  0,
      slaAlerts:          0,
    };
  }
}