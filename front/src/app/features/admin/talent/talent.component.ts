import { Component, OnInit } from '@angular/core';
import { AppliedTalentSummary } from '../../../core/models/talent.model';
import { TalentService } from '../../../core/services/talent.service';
@Component({ selector:'app-admin-talent', templateUrl:'./talent.component.html', styleUrls:['./talent.component.css'] })
export class AdminTalentComponent implements OnInit {
  constructor(private talentService: TalentService) {}

  view = 'talents';
  loading = false;
  rows: AppliedTalentSummary[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loading = true;
    this.talentService.getTalentsWithAppliedOffers().subscribe({
      next: (rows) => {
        this.rows = rows ?? [];
        this.loading = false;
      },
      error: () => {
        this.rows = [];
        this.loading = false;
      }
    });
  }

  splitSkills(s?: string): string[] {
    return (s || '').split(',').map((x) => x.trim()).filter(Boolean);
  }

  get acceptedRows(): AppliedTalentSummary[] {
    return this.rows.filter((r) => (r.offres || []).some((o) => o.statut === 'ACCEPTEE'));
  }
}
