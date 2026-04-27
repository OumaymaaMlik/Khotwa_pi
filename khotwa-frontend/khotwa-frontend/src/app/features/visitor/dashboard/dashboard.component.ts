import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TalentService } from '../../../core/services/talent.service';
import { AiService } from '../../../core/services/ai.service';
import { TalentProfileEntity } from '../../../core/models/talent.model';

@Component({
  selector: 'app-visitor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class VisitorDashboardComponent implements OnInit {
  annoncesCount = 0;
  candidaturesCount = 0;
  loading = true;
  profile: TalentProfileEntity | null = null;
  aiGoal = 'Trouver une annonce backend Spring';
  aiLoading = false;
  aiAdvice = '';
  aiBullets: string[] = [];
  keywordInput = '';
  keywords: string[] = [];
  suggestedRoles: string[] = [];

  constructor(
    public auth: AuthService,
    private talentService: TalentService,
    private aiService: AiService,
  ) {}

  ngOnInit(): void {
    this.talentService.getAnnonces().subscribe({
      next: (list) => {
        this.annoncesCount = list?.length ?? 0;
        this.refreshCandidatures();
      },
      error: () => {
        this.annoncesCount = 0;
        this.refreshCandidatures();
      },
    });
    this.loadProfile();
  }

  private refreshCandidatures(): void {
    const tid = this.auth.currentUser?.talentProfileId;
    if (tid == null) {
      this.candidaturesCount = 0;
      this.loading = false;
      return;
    }
    this.talentService.getCandidaturesParTalent(tid).subscribe({
      next: (c) => {
        this.candidaturesCount = c?.length ?? 0;
        this.loading = false;
      },
      error: () => {
        this.candidaturesCount = 0;
        this.loading = false;
      },
    });
  }

  get hasProfil(): boolean {
    return this.auth.currentUser?.talentProfileId != null;
  }

  get profileCompletion(): number {
    if (!this.profile) return 0;
    const checks = [
      this.profile.nom,
      this.profile.prenom,
      this.profile.email,
      this.profile.competences,
      this.profile.bio,
      this.profile.cvUrl,
      this.profile.linkedinUrl,
    ];
    const done = checks.filter((v) => !!v && String(v).trim().length > 0).length;
    return Math.round((done / checks.length) * 100);
  }

  askAi(): void {
    const competences = (this.profile?.competences || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    this.aiLoading = true;
    this.talentService.getTalentAiAdvice({
      goal: this.aiGoal,
      competences,
      niveauExperience: this.profile?.niveauExperience,
      bio: this.profile?.bio,
    }).subscribe({
      next: (res) => {
        this.aiAdvice = res.resume;
        this.aiBullets = [...(res.competencesPrioritaires ?? []), ...(res.nextActions ?? [])].slice(0, 5);
        this.aiLoading = false;
      },
      error: () => {
        this.aiAdvice = 'Assistant IA momentanément indisponible.';
        this.aiBullets = [];
        this.aiLoading = false;
      },
    });
  }

  generateKeywordsFromGoal(): void {
    const skills = `${this.profile?.competences || ''} ${this.keywordInput}`
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    this.aiService.getKeywords(this.aiGoal, skills).subscribe({
      next: (res) => {
        this.keywords = res.keywords ?? [];
        this.suggestedRoles = res.suggestedRoles ?? [];
      },
      error: () => {
        this.keywords = [];
        this.suggestedRoles = [];
      },
    });
  }

  private loadProfile(): void {
    const tid = this.auth.currentUser?.talentProfileId;
    if (tid == null) return;
    this.talentService.getTalentEntity(tid).subscribe({
      next: (p) => this.profile = p,
      error: () => this.profile = null,
    });
  }
}
