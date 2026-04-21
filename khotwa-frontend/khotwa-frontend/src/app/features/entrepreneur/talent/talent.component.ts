import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../core/services/talent.service';
import {
  Annonce,
  AiRecommendation,
  HiringAiResponse,
  MatchingResultDTO,
  TalentCompetence,
  TalentProfile,
} from '../../../core/models/talent.model';

@Component({
  selector: 'app-entrepreneur-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css'],
})
export class EntrepreneurTalentComponent implements OnInit {
  constructor(private talentService: TalentService) {}

  view: 'talents' | 'annonces' = 'talents';

  talents: TalentProfile[] = [];
  annonces: Annonce[] = [];
  matchingResults: MatchingResultDTO[] = [];
  matchingLoading = false;

  selectedCandidate: any = null;
  showProfileModal = false;
  selectedAnnonce: Annonce | null = null;
  selectedAnnonceId: number | null = null;

  showForm = false;
  showEditForm = false;
  loading = false;
  successMsg = '';
  error = '';

  /** Métiers / familles de rôles avancés (UX + envoyés à l’IA / description). */
  readonly metiersCatalog = [
    { code: 'FULLSTACK', label: 'Full-stack / Platform' },
    { code: 'BACKEND', label: 'Backend / APIs' },
    { code: 'FRONTEND', label: 'Frontend / Design system' },
    { code: 'DATA_ML', label: 'Data / ML Engineer' },
    { code: 'MLOPS', label: 'MLOps / DataOps' },
    { code: 'GENAI', label: 'GenAI Engineer / LLMOps' },
    { code: 'DEVOPS', label: 'DevOps / SRE' },
    { code: 'BLOCKCHAIN', label: 'Blockchain / Web3 Architect' },
    { code: 'CLOUD', label: 'Cloud / Architecte' },
    { code: 'CYBER', label: 'Cybersécurité' },
    { code: 'PRODUCT', label: 'Product / PM' },
    { code: 'UX_UI', label: 'UX / UI' },
    { code: 'GROWTH', label: 'Growth / Marketing' },
    { code: 'BIZDEV', label: 'Business Developer' },
    { code: 'FINANCE', label: 'Finance / FP&A' },
    { code: 'LEGAL', label: 'Legal / Compliance' },
  ];

  newAnnonce = {
    poste: '',
    type: 'stagiaire',
    competences: '',
    description: '',
    localisation: 'Tunis',
    metiers: [] as string[],
  };

  editData: any = {};

  searchTalent = '';
  searchAnnonce = '';
  sortMatching: 'score' | 'nom' | 'niveau' = 'score';

  hiringAiLoading = false;
  hiringAiResult: HiringAiResponse | null = null;
  hiringContext = '';
  aiInsights: AiRecommendation[] = [];

  ngOnInit(): void {
    this.loadTalents();
    this.loadAnnonces();
    this.loadAiInsights();
  }

  loadTalents(): void {
    this.talentService.getTalents().subscribe({
      next: (data: TalentProfile[]) => {
        this.talents = data;
      },
      error: (err: any) => {
        console.error('Erreur talents:', err);
        this.error = 'Impossible de charger les talents. Vérifiez le backend.';
      },
    });
  }

  loadAnnonces(): void {
    this.talentService.getAnnonces().subscribe({
      next: (data: Annonce[]) => {
        this.annonces = data;
      },
      error: (err: any) => {
        console.error('Erreur annonces:', err);
        this.error = 'Impossible de charger les offres. Vérifiez GET /api/annonces.';
      },
    });
  }

  toggleMetier(code: string): void {
    const i = this.newAnnonce.metiers.indexOf(code);
    if (i >= 0) {
      this.newAnnonce.metiers.splice(i, 1);
    } else {
      this.newAnnonce.metiers.push(code);
    }
  }

  metierLabel(code: string): string {
    return this.metiersCatalog.find((m) => m.code === code)?.label ?? code;
  }

  private buildDescriptionPayload(): string {
    const desc = (this.newAnnonce.description || '').trim();
    const labels = this.newAnnonce.metiers
      .map((c) => this.metierLabel(c))
      .filter(Boolean);
    const met = labels.length ? `Métiers cibles: ${labels.join(', ')}` : '';
    return [desc, met].filter(Boolean).join('\n\n');
  }

  submitAnnonce(): void {
    if (!this.newAnnonce.poste) return;
    this.loading = true;

    const payload = {
      titre: this.newAnnonce.poste,
      description: this.buildDescriptionPayload(),
      typePoste: this.newAnnonce.type.toUpperCase(),
      competencesRequises: this.newAnnonce.competences,
      localisation: this.newAnnonce.localisation || 'Tunis',
      startupId: 1,
      active: true,
    };

    this.talentService.creerAnnonce(payload).subscribe({
      next: (_: any) => {
        this.loadAnnonces();
        this.showForm = false;
        this.loading = false;
        this.successMsg = 'Annonce publiée avec succès';
        this.newAnnonce = {
          poste: '',
          type: 'stagiaire',
          competences: '',
          description: '',
          localisation: 'Tunis',
          metiers: [],
        };
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: (err: any) => {
        this.loading = false;
        this.error = 'Erreur lors de la création';
        console.error('Erreur création:', err);
      },
    });
  }

  deleteAnnonce(id: number): void {
    if (!confirm('Supprimer cette annonce ?')) return;
    this.talentService.deleteAnnonce(id).subscribe({
      next: (_: any) => {
        this.loadAnnonces();
        this.fermerModal();
        this.successMsg = 'Annonce supprimée';
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: (err: any) => {
        this.error = 'Erreur lors de la suppression';
        console.error(err);
      },
    });
  }

  ouvrirEdition(a: Annonce): void {
    this.editData = {
      id: a.id,
      titre: a.titre,
      typePoste: a.typePoste,
      competencesRequises: a.competencesRequises,
      localisation: (a as any).localisation || '',
      description: a.description || '',
    };
    this.showEditForm = true;
    this.selectedAnnonce = null;
    this.selectedAnnonceId = null;
    this.matchingResults = [];
  }

  sauvegarderModification(): void {
    if (!this.editData.id) return;
    this.loading = true;

    const payload = {
      titre: this.editData.titre,
      typePoste: this.editData.typePoste,
      competencesRequises: this.editData.competencesRequises,
      localisation: this.editData.localisation,
      description: this.editData.description || '',
      active: true,
    };

    this.talentService.updateAnnonce(this.editData.id, payload).subscribe({
      next: (_: any) => {
        this.loadAnnonces();
        this.showEditForm = false;
        this.loading = false;
        this.successMsg = 'Annonce modifiée avec succès';
        setTimeout(() => (this.successMsg = ''), 3000);
      },
      error: (err: any) => {
        this.loading = false;
        this.error = 'Erreur lors de la modification';
        console.error(err);
      },
    });
  }

  annulerEdition(): void {
    this.showEditForm = false;
    this.editData = {};
  }

  voirCandidatures(annonce: Annonce): void {
    this.selectedAnnonce = annonce;
    this.selectedAnnonceId = annonce.id;
    this.matchingResults = [];
    this.matchingLoading = true;

    this.talentService.getMatchingPourAnnonce(annonce.id).subscribe({
      next: (data: MatchingResultDTO[]) => {
        this.matchingResults = [...data].sort(
          (a, b) => (b.matchingScore ?? 0) - (a.matchingScore ?? 0),
        );
        this.matchingLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.matchingLoading = false;
      },
    });
  }

  fermerModal(): void {
    this.selectedAnnonce = null;
    this.selectedAnnonceId = null;
    this.matchingResults = [];
    this.matchingLoading = false;
  }

  get filteredTalents(): TalentProfile[] {
    const q = this.searchTalent.trim().toLowerCase();
    if (!q) return this.talents;
    return this.talents.filter((t) => {
      const blob = `${t.prenom} ${t.nom} ${t.email} ${this.competencesPourAffichage(t).map((c) => c.nom).join(' ')}`.toLowerCase();
      return blob.includes(q);
    });
  }

  get filteredAnnonces(): Annonce[] {
    const q = this.searchAnnonce.trim().toLowerCase();
    if (!q) return this.annonces;
    return this.annonces.filter((a) => {
      const blob = `${a.titre} ${a.competencesRequises} ${a.localisation || ''} ${a.typePoste || ''}`.toLowerCase();
      return blob.includes(q);
    });
  }

  get sortedMatching(): MatchingResultDTO[] {
    const rows = [...this.matchingResults];
    if (this.sortMatching === 'nom') {
      rows.sort((a, b) => (a.nomTalent || '').localeCompare(b.nomTalent || '', 'fr'));
    } else if (this.sortMatching === 'niveau') {
      rows.sort((a, b) => (b.niveau || '').localeCompare(a.niveau || '', 'fr'));
    } else {
      rows.sort((a, b) => (b.matchingScore ?? 0) - (a.matchingScore ?? 0));
    }
    return rows;
  }

  runHiringAi(): void {
    const titre = this.newAnnonce.poste.trim() || 'Nouveau poste';
    const typePoste = this.newAnnonce.type.toUpperCase();
    const competencesRequises = this.newAnnonce.competences;
    const metiers = this.newAnnonce.metiers.map((c) => this.metierLabel(c));
    this.hiringAiLoading = true;
    this.hiringAiResult = null;
    this.talentService
      .getHiringAiAdvice({
        titre,
        typePoste,
        competencesRequises,
        metiers,
        localisation: this.newAnnonce.localisation,
        contexte: this.hiringContext.trim() || undefined,
      })
      .subscribe({
        next: (res) => {
          this.hiringAiResult = res;
          this.hiringAiLoading = false;
          this.loadAiInsights();
        },
        error: () => {
          this.hiringAiLoading = false;
          this.error = 'La génération IA a échoué. Vérifiez /api/ai/hiring-advice.';
        },
      });
  }

  loadAiInsights(): void {
    this.talentService.getAiRecommendations().subscribe({
      next: (rows) => this.aiInsights = rows ?? [],
    });
  }

  getScoreColor(score: number): string {
    if (score >= 75) return '#1D9E75';
    if (score >= 50) return '#EF9F27';
    return '#E24B4A';
  }

  niveauTone(niveau: string | undefined): 'excellent' | 'bon' | 'faible' {
    const n = (niveau || '').toLowerCase();
    if (n.includes('excellent')) return 'excellent';
    if (n.includes('bon')) return 'bon';
    return 'faible';
  }

  initialsFromNom(nomComplet: string): string {
    if (!nomComplet?.trim()) return '?';
    const parts = nomComplet.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  getCompetences(str: string): string[] {
    if (!str) return [];
    return str.split(',').map((s) => s.trim()).filter(Boolean);
  }

  ouvrirProfil(source: TalentProfile | MatchingResultDTO): void {
    if ('talentId' in source) {
      const m = source as MatchingResultDTO;
      const full = this.talents.find((t) => t.id === m.talentId);
      if (full) {
        this.selectedCandidate = full;
      } else {
        const parts = (m.nomTalent || '').trim().split(/\s+/).filter(Boolean);
        const nom = parts.length <= 1 ? parts[0] || m.nomTalent || '' : parts[parts.length - 1];
        const prenom = parts.length <= 1 ? '' : parts.slice(0, -1).join(' ');
        const fromMatch: TalentCompetence[] = (m.competencesCommunes || []).map((n) => ({ nom: n, niveau: 0 }));
        this.selectedCandidate = {
          id: m.talentId,
          nom,
          prenom,
          email: m.emailTalent,
          competences: fromMatch,
          diplome: '',
          disponible: true,
        } as TalentProfile;
      }
    } else {
      this.selectedCandidate = source as TalentProfile;
    }

    if (!this.selectedCandidate) return;
    this.showProfileModal = true;
  }

  competencesPourAffichage(c: TalentProfile | null): TalentCompetence[] {
    if (!c?.competences) return [];
    if (Array.isArray(c.competences)) return c.competences;
    return String(c.competences)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((nom) => ({ nom, niveau: 0 }));
  }

  fermerProfil(): void {
    this.selectedCandidate = null;
    this.showProfileModal = false;
  }

  contacterParEmail(email: string): void {
    const subject = encodeURIComponent('Opportunity from Startup');
    const body = encodeURIComponent('Hello, I saw your profile and would like to connect with you.');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  }
}
