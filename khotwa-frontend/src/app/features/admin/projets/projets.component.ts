import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';

@Component({ selector:'app-admin-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class AdminProjetsComponent implements OnInit {

  projets: ProjetResponseDto[] = [];
  loading = false;
  filtre  = 'ALL';
  search  = '';

  constructor(private projetService: ProjetService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    // Charge projets soumis + affectés pour la vue admin
    this.projetService.getProjetsSoumis().subscribe({
      next: soumis => {
        this.projetService.getProjetsAffectes().subscribe({
          next: affectes => {
            this.projets = [...soumis, ...affectes];
            this.loading = false;
          },
          error: () => { this.projets = soumis; this.loading = false; }
        });
      },
      error: () => this.loading = false
    });
  }

  get filteredProjets(): ProjetResponseDto[] {
    let l = this.projets;
    if (this.filtre !== 'ALL') l = l.filter(p => p.etatValidation === this.filtre || p.statutProjet === this.filtre);
    if (this.search) l = l.filter(p => p.nomStartup.toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }

  suspendre(id: number) {
    this.projetService.suspendreProjet(id).subscribe({ next: () => this.load() });
  }

  archiver(id: number) {
    this.projetService.archiverProjet(id).subscribe({ next: () => this.load() });
  }

  refuser(id: number) {
    const justification = prompt('Justification du refus :') ?? '';
    if (!justification.trim()) return;
    this.projetService.refuserProjet(id, justification).subscribe({ next: () => this.load() });
  }
}
