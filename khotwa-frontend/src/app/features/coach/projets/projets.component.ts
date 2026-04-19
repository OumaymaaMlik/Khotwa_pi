import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-coach-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class CoachProjetsComponent implements OnInit {

  projets: ProjetResponseDto[] = [];
  loading = false;

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const coachId = this.auth.currentUser?.idUser;
    this.projetService.getProjetsCoach(coachId).subscribe({
      next: p => { this.projets = p; this.loading = false; },
      error: () => this.loading = false
    });
  }

  valider(projetId: number) {
    this.projetService.validerProjet(projetId).subscribe({ next: () => this.load() });
  }

  demanderCorrection(projetId: number) {
    const commentaire = prompt('Commentaire de correction :') ?? '';
    if (!commentaire.trim()) return;
    this.projetService.demanderCorrectionProjet(projetId, commentaire).subscribe({ next: () => this.load() });
  }

  passerEnRevue(projetId: number) {
    this.projetService.passerEnRevue(projetId).subscribe({ next: () => this.load() });
  }
}
