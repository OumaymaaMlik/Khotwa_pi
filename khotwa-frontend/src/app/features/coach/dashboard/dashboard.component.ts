import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-coach-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class CoachDashboardComponent implements OnInit {

  projets:     ProjetResponseDto[] = [];
  validations: any[] = [];
  loading = false;

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const coachId = this.auth.currentUser?.idUser;
    this.projetService.getProjetsCoach(coachId).subscribe({
      next: p => {
        this.projets = p;
        // Les projets EN_REVUE ou A_CORRIGER sont des validations en attente
        this.validations = p
          .filter(proj => proj.etatValidation === 'EN_REVUE' || proj.etatValidation === 'A_CORRIGER')
          .map(proj => ({
            task:    proj.nomStartup,
            startup: proj.entrepreneurNomAffiche ?? `Entrepreneur #${proj.entrepreneurId}`,
            status:  proj.etatValidation === 'EN_REVUE' ? 'pending' : 'correction',
            doc:     '—',
            date:    proj.dateDerniereMiseAJour?.slice(0, 10) ?? '',
          }));
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  get stats() {
    return {
      total:       this.projets.length,
      enCours:     this.projets.filter(p => p.statutProjet === 'EN_COURS').length,
      enRevue:     this.projets.filter(p => p.etatValidation === 'EN_REVUE').length,
      aCorrection: this.projets.filter(p => p.etatValidation === 'A_CORRIGER').length,
    };
  }
}
