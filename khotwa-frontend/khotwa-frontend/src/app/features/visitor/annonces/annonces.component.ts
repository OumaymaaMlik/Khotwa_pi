import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TalentService } from '../../../core/services/talent.service';
import { Annonce, MatchingInsight } from '../../../core/models/talent.model';

@Component({
  selector: 'app-visitor-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
})
export class VisitorAnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];
  filteredAnnonces: Annonce[] = [];
  selected: Annonce | null = null;
  message = '';
  loadingList = true;
  submitting = false;
  error = '';
  success = '';
  searchTerm = '';
  selectedType = 'all';
  matchingByJob: Record<number, MatchingInsight> = {};
  matchLoadingByJob: Record<number, boolean> = {};

  constructor(
    private talentService: TalentService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.talentService.getAnnonces().subscribe({
      next: (data) => {
        this.annonces = data ?? [];
        this.applyFilters();
        this.loadingList = false;
      },
      error: () => { this.loadingList = false; this.error = 'Impossible de charger les offres.'; },
    });
  }

  get talentId(): number | undefined {
    return this.auth.currentUser?.talentProfileId;
  }

  openPostuler(a: Annonce): void {
    this.error = '';
    this.success = '';
    this.message = '';
    this.selected = a;
    if (!this.matchingByJob[a.id]) {
      this.loadMatching(a);
    }
  }

  loadMatching(a: Annonce): void {
    const tid = this.talentId;
    if (tid == null) return;
    this.matchLoadingByJob[a.id] = true;
    this.talentService.getMatchingInsight(tid, a.id).subscribe({
      next: (m) => {
        this.matchingByJob[a.id] = m;
        this.matchLoadingByJob[a.id] = false;
      },
      error: () => {
        this.matchLoadingByJob[a.id] = false;
      }
    });
  }

  closeModal(): void {
    this.selected = null;
  }

  submitPostuler(): void {
    if (!this.selected) return;
    const tid = this.talentId;
    if (tid == null) {
      this.error = 'Créez d’abord votre profil talent (menu Mon profil talent).';
      return;
    }
    this.submitting = true;
    this.error = '';
    this.talentService.postuler({
      talentId: tid,
      annonceId: this.selected.id,
      message: this.message.trim() || undefined,
      titreAnnonce: this.selected.titre,
    }).subscribe({
      next: (c) => {
        this.submitting = false;
        this.success =
          c.statut === 'ENREGISTRÉ_LOCALEMENT'
            ? 'Candidature enregistrée sur cet appareil (API candidatures non configurée).'
            : 'Candidature envoyée au serveur.';
        this.closeModal();
        setTimeout(() => this.success = '', 5000);
      },
      error: () => {
        this.submitting = false;
        this.error = 'Impossible d’enregistrer la candidature (navigateur ou quota plein).';
      },
    });
  }

  skills(a: Annonce): string[] {
    if (!a.competencesRequises) return [];
    return a.competencesRequises.split(',').map(s => s.trim()).filter(Boolean);
  }

  get types(): string[] {
    const all = this.annonces.map(a => (a.typePoste || '').trim()).filter(Boolean);
    return ['all', ...Array.from(new Set(all))];
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
}
