import { Component, OnInit } from '@angular/core';
import { AdminReportingResponse, ProjetService } from '../../../core/services/projet.service';

interface ProjectSlaAlert {
  title: string;
  meta: string;
  tone: 'red' | 'amber' | 'green';
  label: 'Urgent' | 'Watch' | 'OK';
}

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
    const total = this.projets.length;
    const completed = this.projets.filter(p => p.status === 'completed').length;
    const suspended = this.projets.filter(p => p.status === 'suspended').length;
    const submitted = this.projets.filter(p => p.submitted).length;
    const avgProgress = total > 0
      ? this.projets.reduce((sum, p) => sum + (p.progression || 0), 0) / total
      : 0;

    return {
      totalProjets: total,
      enCours: this.projets.filter(p=>p.status==='in_progress').length,
      projetsSoumis: this.reporting?.projetsSoumis ?? 0,
      projetsValides: this.reporting?.projetsValides ?? 0,
      projetsRefuses: this.reporting?.projetsRefuses ?? 0,
      scoreMoyenDiscipline: this.reporting?.scoreMoyenDiscipline ?? 0,
      activeDelays,
      completed,
      suspended,
      submitted,
      avgProgress,
      utilisateurs: this.reporting?.totalUtilisateurs ?? 0,
      abonnements: this.reporting?.totalAbonnements ?? 0,
      events: this.reporting?.totalEvenements ?? 0,
      talents: this.reporting?.totalTalents ?? 0,
    };
  }

  get disciplineTrendClass(): 'up' | 'down' {
    return this.stats.scoreMoyenDiscipline >= 30 ? 'up' : 'down';
  }

  get submissionRate(): number {
    if (this.stats.totalProjets === 0) {
      return 0;
    }
    return Math.round((this.stats.submitted / this.stats.totalProjets) * 100);
  }

  get validationRate(): number {
    if (this.stats.totalProjets === 0) {
      return 0;
    }
    return Math.round((this.stats.projetsValides / this.stats.totalProjets) * 100);
  }

  get slaAlerts(): ProjectSlaAlert[] {
    const rows = this.projets.slice(0, 6).map((p) => {
      const score = p.progression || 0;
      const isBlocked = p.status === 'suspended' || score < 20;
      const isWatch = !isBlocked && score < 50;
      const tone: ProjectSlaAlert['tone'] = isBlocked ? 'red' : isWatch ? 'amber' : 'green';
      const label: ProjectSlaAlert['label'] = isBlocked ? 'Urgent' : isWatch ? 'Watch' : 'OK';
      const owner = p.entrepreneurId ? `Entrepreneur #${p.entrepreneurId}` : 'Entrepreneur';

      return {
        title: `${p.titre} - ${this.prettyStatus(p.status)}`,
        meta: `Progress ${Math.round(score)}% · ${owner}`,
        tone,
        label,
      };
    });

    return rows.length > 0
      ? rows
      : [{ title: 'No project alerts', meta: 'Projects will appear here once loaded.', tone: 'green', label: 'OK' }];
  }

  private prettyStatus(status: string): string {
    if (status === 'in_progress') {
      return 'In progress';
    }
    if (status === 'completed') {
      return 'Completed';
    }
    return 'Suspended';
  }
}