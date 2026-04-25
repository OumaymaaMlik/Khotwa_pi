import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto, EtatValidation } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-entrepreneur-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class EntrepreneurProjetsComponent implements OnInit {

  projets: ProjetResponseDto[] = [];
  loading = false;
  filtre  = 'ALL';

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const userId = this.auth.currentUser?.idUser;
    this.projetService.getProjetsEntrepreneur(userId).subscribe({
      next: p => { this.projets = p; this.loading = false; },
      error: () => this.loading = false
    });
  }

  get filteredProjets(): ProjetResponseDto[] {
    if (this.filtre === 'ALL') return this.projets;
    return this.projets.filter(p => p.etatValidation === this.filtre || p.statutProjet === this.filtre);
  }

  soumettre(projetId: number) {
    this.projetService.soumettreProjet(projetId).subscribe({ next: () => this.load() });
  }

  supprimer(projetId: number) {
    this.projetService.deleteProjetBrouillon(projetId).subscribe({ next: () => this.load() });
  }

  resoumettreCorrection(projetId: number) {
    this.projetService.resoumettreCorrection(projetId).subscribe({ next: () => this.load() });
  }
}
