import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TalentService } from '../../core/services/talent.service';
import { Annonce } from '../../core/models/talent.model';

@Component({
  selector: 'app-talent-market',
  templateUrl: './talent-market.component.html',
  styleUrls: ['./talent-market.component.css'],
})
export class TalentMarketComponent implements OnInit {
  annonces: Annonce[] = [];
  filteredAnnonces: Annonce[] = [];
  selectedAnnonce: Annonce | null = null;
  showSignupPrompt = false;
  loadingList = true;
  error = '';
  searchTerm = '';
  selectedType = 'all';

  constructor(
    private talentService: TalentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.talentService.getAnnonces().subscribe({
      next: (data) => {
        this.annonces = data ?? [];
        this.applyFilters();
        this.loadingList = false;
      },
      error: () => {
        this.loadingList = false;
        this.error = 'Unable to load offers. Please try again later.';
      },
    });
  }

  get types(): string[] {
    const all = this.annonces.map(a => (a.typePoste || '').trim()).filter(Boolean);
    return ['all', ...Array.from(new Set(all))];
  }

  skills(a: Annonce): string[] {
    if (!a.competencesRequises) return [];
    return a.competencesRequises.split(',').map(s => s.trim()).filter(Boolean);
  }

  applyFilters(): void {
    const q = this.searchTerm.trim().toLowerCase();
    this.filteredAnnonces = this.annonces.filter((a) => {
      const matchesType = this.selectedType === 'all' || (a.typePoste || '') === this.selectedType;
      const haystack = `${a.titre} ${a.competencesRequises} ${a.localisation || ''} ${a.startupNom || ''}`.toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      return matchesType && matchesSearch;
    });
  }

  openDetail(a: Annonce): void { this.selectedAnnonce = a; }
  closeDetail(): void { this.selectedAnnonce = null; }

  requireAccount(): void {
    this.selectedAnnonce = null;
    this.showSignupPrompt = true;
  }

  goSignup(): void { this.router.navigate(['/login'], { queryParams: { mode: 'signup' } }); }
  goLogin(): void { this.router.navigateByUrl('/login'); }
}
