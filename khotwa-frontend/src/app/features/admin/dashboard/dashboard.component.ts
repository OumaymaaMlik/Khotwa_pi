import { Component, OnInit } from '@angular/core';
import { AdminReportingResponse, ProjetService } from '../../../core/services/projet.service';

@Component({ selector:'app-admin-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class AdminDashboardComponent implements OnInit {
  reporting: AdminReportingResponse | null = null;

  constructor(public projetService: ProjetService) {}

  ngOnInit(): void {
    this.projetService.loadAdminSubmittedProjects().subscribe({
      error: () => {
        // Keep current UI state if backend data cannot be fetched.
      }
    });

    this.projetService.loadAdminReporting().subscribe({
      next: (report) => {
        this.reporting = report;
      },
      error: () => {
        this.reporting = null;
      }
    });
  }

  get projets() { return this.projetService.projets; }
  get stats() {
    const activeDelays = (this.reporting?.retardsTachesActifs ?? 0) + (this.reporting?.retardsSousTachesActifs ?? 0);
    return {
      totalProjets: this.projets.length,
      enCours: this.projets.filter(p=>p.status==='in_progress').length,
      projetsSoumis: this.reporting?.projetsSoumis ?? 0,
      projetsValides: this.reporting?.projetsValides ?? 0,
      projetsRefuses: this.reporting?.projetsRefuses ?? 0,
      scoreMoyenDiscipline: this.reporting?.scoreMoyenDiscipline ?? 0,
      activeDelays,
      utilisateurs: 24, events: 3, abonnements: 18, talents: 12,
    };
  }

  get disciplineTrendClass(): 'up' | 'down' {
    return this.stats.scoreMoyenDiscipline >= 30 ? 'up' : 'down';
  }
}
