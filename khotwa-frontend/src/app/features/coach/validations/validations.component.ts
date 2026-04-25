import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-coach-validations', templateUrl:'./validations.component.html', styleUrls:['./validations.component.css'] })
export class CoachValidationsComponent implements OnInit {

  validations: any[] = [];
  loading = false;

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const coachId = this.auth.currentUser?.idUser;
    this.projetService.getProjetsCoach(coachId).subscribe({
      next: projets => {
        this.validations = projets
          .filter(p => p.etatValidation === 'EN_REVUE' || p.etatValidation === 'A_CORRIGER' || p.etatValidation === 'AFFECTE_COACH')
          .map(p => ({
            id:      p.id,
            task:    p.nomStartup,
            startup: p.entrepreneurNomAffiche ?? `Entrepreneur #${p.entrepreneurId}`,
            doc:     'Voir documents',
            status:  p.etatValidation === 'EN_REVUE' ? 'pending'
                   : p.etatValidation === 'A_CORRIGER' ? 'rejected'
                   : 'pending',
            date:    p.dateDerniereMiseAJour?.slice(0, 10) ?? '',
          }));
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  validate(id: number) {
    this.projetService.validerProjet(id).subscribe({ next: () => this.load() });
  }

  reject(id: number) {
    const commentaire = prompt('Commentaire de correction :') ?? '';
    if (!commentaire.trim()) return;
    this.projetService.demanderCorrectionProjet(id, commentaire).subscribe({ next: () => this.load() });
  }
}
