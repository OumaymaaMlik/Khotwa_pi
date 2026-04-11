import { Component } from '@angular/core';
import { ProjetService } from '../../../core/services/projet.service';

@Component({ selector:'app-admin-projets', templateUrl:'./projets.component.html', styleUrls:['./projets.component.css'] })
export class AdminProjetsComponent {
  filtre = 'all';
  search = '';
  constructor(public projetService: ProjetService) {}
  get filteredProjets() {
    let l = this.projetService.projets;
    if (this.filtre !== 'all') l = l.filter(p => p.status === this.filtre);
    if (this.search) l = l.filter(p => p.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }
  delete(id: string) { this.projetService.delete(id); }
}
