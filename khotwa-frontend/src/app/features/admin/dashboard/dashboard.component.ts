import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';

@Component({ selector:'app-admin-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class AdminDashboardComponent implements OnInit {

  projets:   ProjetResponseDto[] = [];
  reporting: any = {};
  loading = false;

  constructor(private projetService: ProjetService) {}

  ngOnInit() { this.loadReporting(); this.loadProjets(); }

  loadProjets() {
    this.loading = true;
    this.projetService.getProjetsSoumis().subscribe({
      next: soumis => {
        this.projetService.getProjetsAffectes().subscribe({
          next: affectes => { this.projets = [...soumis, ...affectes]; this.loading = false; },
          error: () => { this.projets = soumis; this.loading = false; }
        });
      },
      error: () => this.loading = false
    });
  }

  loadReporting() {
    this.projetService.getReporting().subscribe({
      next: r => this.reporting = r,
      error: () => {}
    });
  }

  get stats() {
    return {
      totalProjets: this.projets.length,
      enCours:      this.reporting.projetsSoumis      ?? this.projets.length,
      valides:      this.reporting.projetsValides      ?? 0,
      retardsTaches:this.reporting.retardsTachesActifs ?? 0,
      scoreMoyen:   this.reporting.scoreMoyenDiscipline?? 0,
      // Valeurs statiques pour les KPIs sans endpoint backend
      utilisateurs: 24,
      abonnements:  18,
      events:       3,
      talents:      12,
    };
  }
}
