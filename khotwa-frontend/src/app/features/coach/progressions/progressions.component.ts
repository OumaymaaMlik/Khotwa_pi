import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../../core/services/ressource.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

export interface EntrepreneurProgressionDTO {
  id: number;           // backend: id
  nomComplet: string;   // backend: nomComplet
  email: string;        // backend: email
  total: number;
  enCours: number;
  completes: number;
  tauxCompletion: number;
  progressions: any[];
}

@Component({
  selector: 'app-coach-progressions',
  templateUrl: './progressions.component.html',
  styleUrls: ['./progressions.component.css']
})
export class CoachProgressionsComponent implements OnInit {

  // ── Mode vue ─────────────────────────────────────────────────────
  viewMode: 'mes' | 'entrepreneurs' = 'entrepreneurs';

  // Mes progressions personnelles
  progressions: any[] = [];

  // Progressions des entrepreneurs affectés
  entrepreneursProgress: EntrepreneurProgressionDTO[] = [];
  expandedEntrepreneurId: number | null = null;

  loading = false;

  typeIcons: Record<string, string> = {
    PDF: '📄', VIDEO: '🎥', EXCEL: '📊', WORD: '📝', IMAGE: '🖼️', LINK: '🔗'
  };

  constructor(
    private svc: RessourceService,
    private auth: AuthService,
    private router: Router
  ) {}

  get userId(): number { return this.auth.currentUser?.idUser ?? 0; }

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    if (this.viewMode === 'entrepreneurs') {
      this.loadEntrepreneursProgressions();
    } else {
      this.loadMesProgressions();
    }
  }

  // ── Progressions des entrepreneurs affectés ──────────────────────
  loadEntrepreneursProgressions() {
    this.svc.getProgressionsEntrepreneursHttp(this.userId).subscribe({
      next: (res: any) => {
        // backend retourne: { id, nomComplet, email, total, enCours, completes, tauxCompletion, progressions }
        this.entrepreneursProgress = res.data ?? [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  toggleEntrepreneur(id: number) {
    this.expandedEntrepreneurId = this.expandedEntrepreneurId === id ? null : id;
  }

  isExpanded(id: number): boolean {
    return this.expandedEntrepreneurId === id;
  }

  getProgressionsEntrepreneur(e: EntrepreneurProgressionDTO): any[] {
    return e.progressions ?? [];
  }

  getProgressColor(s: string): string {
    return s === 'COMPLETED'  ? 'var(--green)'
         : s === 'IN_PROGRESS' ? 'var(--teal)'
         : 'var(--text-muted)';
  }

  getStatusLabel(s: string): string {
    return s === 'COMPLETED'  ? '✓ Terminé'
         : s === 'IN_PROGRESS' ? '▶ En cours'
         : '○ Non démarré';
  }

  // ── Mes propres progressions ──────────────────────────────────────
  loadMesProgressions() {
    this.svc.getMesProgressionsHttp(this.userId).subscribe({
      next: (res: any) => {
        this.progressions = (res.data ?? []).sort((a: any, b: any) => {
          const order: any = { IN_PROGRESS: 0, NOT_STARTED: 1, COMPLETED: 2 };
          return (order[a.statut] ?? 1) - (order[b.statut] ?? 1);
        });
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  get enCours()    { return this.progressions.filter(p => p.statut === 'IN_PROGRESS'); }
  get complets()   { return this.progressions.filter(p => p.statut === 'COMPLETED'); }
  get nonDemarre() { return this.progressions.filter(p => p.statut === 'NOT_STARTED'); }

  switchView(mode: 'mes' | 'entrepreneurs') {
    this.viewMode = mode;
    this.load();
  }

  openBibliotheque() { this.router.navigateByUrl('/coach/bibliotheque'); }

  marquerTermine(p: any) {
    this.svc.marquerTermineHttp(this.userId, p.ressource.id).subscribe({
      next: () => this.load()
    });
  }
}