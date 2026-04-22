import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-coach-validations', templateUrl:'./validations.component.html', styleUrls:['./validations.component.css'] })
export class CoachValidationsComponent implements OnInit {

  validations: any[] = [];
  loading = false;
  loadError: string | null = null;

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.loadError = null;
    this.projetService.getProjetsCoach().subscribe({
      next: (projets: ProjetResponseDto[]) => {
        this.validations = projets
          .filter(p =>
            p.etatValidation === 'EN_REVUE' ||
            p.etatValidation === 'A_CORRIGER' ||
            p.etatValidation === 'AFFECTE_COACH'
          )
          .map(p => ({
            id:      p.id,
            task:    p.titre,
            startup: `Entrepreneur #${p.entrepreneurId}`,
            doc:     'Voir documents',
            status:  p.etatValidation === 'EN_REVUE'    ? 'pending'
                   : p.etatValidation === 'A_CORRIGER'  ? 'rejected'
                   : 'pending',
            // Accès sécurisé à updatedAt (peut être undefined)
            date:    (p.updatedAt instanceof Date && !isNaN(p.updatedAt.getTime()))
                       ? p.updatedAt.toISOString().slice(0, 10)
                       : '',
          }));
        this.loading = false;
      },
      error: () => {
        this.validations = [];
        this.loadError = 'Impossible de charger les validations. Vérifiez que l\'API tourne.';
        this.loading = false;
      }
    });
  }

  validate(id: string | number) {
    this.projetService.validerProjet(id).subscribe({ next: () => this.load() });
  }

  reject(id: string | number) {
    const commentaire = prompt('Commentaire de correction :') ?? '';
    if (!commentaire.trim()) return;
    this.projetService.demanderCorrectionProjet(id, commentaire).subscribe({ next: () => this.load() });
  }
}