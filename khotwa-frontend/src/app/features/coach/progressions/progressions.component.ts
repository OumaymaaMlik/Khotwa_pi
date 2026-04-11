import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../../core/services/ressource.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-progressions',
  templateUrl: './progressions.component.html',
  styleUrls: ['./progressions.component.css']
})
export class CoachProgresssComponent implements OnInit {

  // ── Mode vue ─────────────────────────────────────────────────────
  // 'mes'          = mes propres progressions (ressources lues par le coach)
  // 'entrepreneurs' = progressions de chaque entrepreneur affecté
  viewMode: 'mes' | 'entrepreneurs' = 'entrepreneurs';

  // Mes progressions personnelles
  progressions: any[] = [];

  // Progressions des entrepreneurs affectés (retour backend groupé par entrepreneur)
  entrepreneursProgress: any[] = [];
  expandedEntrepreneur: number | null = null;

  loading = false;

  typeIcons: Record<string, string> = {
    PDF: '📄', VIDEO: '🎥', EXCEL: '📊', WORD: '📝', IMAGE: '🖼️', LINK: '🔗'
  };

  constructor(
    private svc: RessourceService,
    private auth: AuthService,
    private router: Router
  ) {}

  get userId(): number { return this.auth.currentUser?.idUser ?? 3; }

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
        this.entrepreneursProgress = (res.data ?? []).map((e: any) => ({
          ...e,
          expanded: false
        }));
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  toggleEntrepreneur(entrepreneurId: number) {
    this.expandedEntrepreneur = this.expandedEntrepreneur === entrepreneurId
      ? null
      : entrepreneurId;
  }

  isExpanded(entrepreneurId: number): boolean {
    return this.expandedEntrepreneur === entrepreneurId;
  }

  getProgressionsEntrepreneur(e: any): any[] {
    return e.progressions ?? [];
  }

  getProgressColor(s: string): string {
    return s === 'COMPLETED' ? 'var(--green)'
         : s === 'IN_PROGRESS' ? 'var(--teal)'
         : 'var(--text-muted)';
  }

  getStatusLabel(s: string): string {
    return s === 'COMPLETED' ? '✓ Terminé'
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
