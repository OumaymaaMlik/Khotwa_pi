import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TalentService } from '../../../core/services/talent.service';
import {
  Annonce,
  SkillGapAiAdviceResponse,
  TalentAiAdviceResponse,
  TalentProfileEntity
} from '../../../core/models/talent.model';

@Component({
  selector: 'app-visitor-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class VisitorProfilComponent implements OnInit {
  form: TalentProfileEntity = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    bio: '',
    competences: '',
    diplomes: '',
    niveauExperience: 'JUNIOR',
    cvUrl: '',
    linkedinUrl: '',
  };

  loading = false;
  loadError = '';
  saveError = '';
  success = '';
  selectedJobId: number | null = null;
  jobs: Annonce[] = [];
  aiAdvice: TalentAiAdviceResponse | null = null;
  skillGapAdvice: SkillGapAiAdviceResponse | null = null;
  careerAiLoading = false;
  skillGapLoading = false;
  careerGoal = 'Trouver un poste backend moderne adapte a mon niveau';

  niveaux = [
    { v: 'JUNIOR', l: 'Junior' },
    { v: 'INTERMEDIAIRE', l: 'Intermédiaire' },
    { v: 'SENIOR', l: 'Senior' },
  ];

  constructor(
    private talentService: TalentService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    const u = this.auth.currentUser;
    if (u) {
      // ✅ Correct User field names
      this.form.prenom = u.firstName    ?? '';
      this.form.nom    = u.lastName     ?? '';
      this.form.email  = u.emailAddress ?? '';
    }

    const tid = u?.talentProfileId;
    if (tid != null) {
      this.loading = true;
      this.talentService.getTalentEntity(tid).subscribe({
        next: (e) => {
          this.form = { ...this.form, ...e };
          this.loading = false;
        },
        error: () => {
          this.loadError = "Profil introuvable côté serveur. Vous pouvez en créer un nouveau (si l'API le permet).";
          this.loading = false;
        },
      });
    }
    this.talentService.getAnnonces().subscribe({ next: (jobs) => this.jobs = jobs ?? [] });
  }

  get isUpdate(): boolean {
    return this.auth.currentUser?.talentProfileId != null;
  }

  get profileCompletion(): number {
    const checks = [
      this.form.nom,
      this.form.prenom,
      this.form.email,
      this.form.telephone,
      this.form.bio,
      this.form.competences,
      this.form.cvUrl,
      this.form.linkedinUrl,
    ];
    const done = checks.filter((v) => !!v && String(v).trim().length > 0).length;
    return Math.round((done / checks.length) * 100);
  }

  save(): void {
    if (!this.form.nom?.trim() || !this.form.prenom?.trim() || !this.form.email?.trim()) {
      this.saveError = 'Nom, prénom et email sont obligatoires.';
      return;
    }
    this.saveError = '';
    this.success = '';
    this.loading = true;

    const tid = this.auth.currentUser?.talentProfileId;
    const obs = tid != null
      ? this.talentService.modifierProfilTalent(tid, this.form)
      : this.talentService.creerProfilTalent(this.form);

    obs.subscribe({
      next: (saved) => {
        const id = saved.id ?? tid;
        if (id != null) {
          this.auth.setTalentProfileId(id);
        }
        this.loading = false;
        this.success = tid != null ? 'Profil mis à jour.' : 'Profil créé. Vous pouvez postuler aux offres.';
        this.runCareerAdvice();
        setTimeout(() => this.success = '', 5000);
      },
      error: () => {
        this.loading = false;
        this.saveError = 'Erreur API (`POST/PUT /api/talents`). Vérifiez CORS et le backend.';
      },
    });
  }

  runCareerAdvice(): void {
    const skills = (this.form.competences || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    this.careerAiLoading = true;
    this.talentService.getTalentAiAdvice({
      goal: this.careerGoal.trim() || 'Evolution de carriere',
      competences: skills,
      niveauExperience: this.form.niveauExperience,
      bio: this.form.bio,
    }).subscribe({
      next: (res) => {
        this.aiAdvice = res;
        this.careerAiLoading = false;
      },
      error: () => {
        this.saveError = 'Assistant carrière indisponible. Vérifiez la configuration Gemini API.';
        this.careerAiLoading = false;
      },
    });
  }

  analyzeSkillGap(): void {
    if (this.selectedJobId == null) return;
    const skills = (this.form.competences || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const selectedJob = this.jobs.find((j) => j.id === this.selectedJobId);
    const requiredSkills = (selectedJob?.competencesRequises || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    this.skillGapLoading = true;
    this.talentService.getSkillGapAiAdvice({
      jobTitle: selectedJob?.titre || 'Offre sélectionnée',
      requiredSkills,
      currentSkills: skills,
      experienceLevel: this.form.niveauExperience,
    }).subscribe({
      next: (res) => {
        this.skillGapAdvice = res;
        this.skillGapLoading = false;
      },
      error: () => {
        this.saveError = 'Analyse skill gap indisponible. Vérifiez la configuration Gemini API.';
        this.skillGapLoading = false;
      },
    });
  }
}