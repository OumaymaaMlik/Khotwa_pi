import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TalentService } from '../../../core/services/talent.service';
import { Candidature } from '../../../core/models/talent.model';

@Component({
  selector: 'app-visitor-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css'],
})
export class VisitorCandidaturesComponent implements OnInit {
  list: Candidature[] = [];
  loading = true;
  error = '';

  constructor(
    private talentService: TalentService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    const tid = this.auth.currentUser?.talentProfileId;
    if (tid == null) {
      this.loading = false;
      return;
    }
    this.talentService.getCandidaturesParTalent(tid).subscribe({
      next: (data) => {
        this.list = [...(data ?? [])].sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger vos candidatures (vérifiez GET /api/candidatures/talent/{id}).';
        this.loading = false;
      },
    });
  }

  get hasProfil(): boolean {
    return this.auth.currentUser?.talentProfileId != null;
  }

  dateLabel(c: Candidature): string {
    const raw = c.datePostulation || c.createdAt;
    if (!raw) return '—';
    try {
      return new Date(raw).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return raw;
    }
  }
}
