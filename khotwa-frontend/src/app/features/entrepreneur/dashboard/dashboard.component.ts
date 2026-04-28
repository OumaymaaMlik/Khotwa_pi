import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-entrepreneur-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class EntrepreneurDashboardComponent implements OnInit {

  projets: ProjetResponseDto[] = [];
  loading = false;

  // KPIs attendus directement par le template HTML
  enCours         = 0;
  tachesTerminees = 0;
  tachesTotal     = 0;
  progression     = 0;

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const userId = this.auth.currentUser?.idUser;
    this.projetService.getProjetsEntrepreneur(userId).subscribe({
      next: (p: ProjetResponseDto[]) => {
        this.projets = p;
        this.enCours = p.filter(proj => proj.status === 'in_progress').length;
        // progression moyenne basée sur le score de discipline
        this.progression = p.length
          ? Math.round(p.reduce((s: number, proj: ProjetResponseDto) => s + (proj.disciplineScore ?? 0), 0) / p.length)
          : 0;
        // taches: on n'a pas encore l'endpoint agrégé, on expose 0/0 par défaut
        this.tachesTerminees = 0;
        this.tachesTotal     = 0;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  get stats() {
    return {
      total:      this.projets.length,
      enCours:    this.enCours,
      brouillons: this.projets.filter(p => p.etatValidation === 'BROUILLON').length,
      valides:    this.projets.filter(p => p.etatValidation === 'VALIDE').length,
    };
  }
}
