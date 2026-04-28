import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../core/services/projet.service';
import { AdminDashboardService } from '../../../core/services/admin-dashboard.service';
import { AdminDashboardDTO } from '../../../core/models/admin-dashboard.model';

@Component({ selector:'app-admin-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class AdminDashboardComponent implements OnInit {
  analyticsData: AdminDashboardDTO | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(public projetService: ProjetService, private dashboardService: AdminDashboardService) {}

  ngOnInit() {
    this.dashboardService.getDashboardAnalytics().subscribe({
      next: (data) => {
        this.analyticsData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load analytics data';
        this.loading = false;
        console.error(err);
      }
    });
  }

  get projets() { return this.projetService.projets; }
  get stats() {
    return {
      totalProjets: this.projets.length,
      enCours: this.projets.filter(p=>p.status==='in_progress').length,
      utilisateurs: 24, events: 3, abonnements: 18, talents: 12,
    };
  }
}
