import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../core/services/talent.service';
import { AiService } from '../../../core/services/ai.service';
import {
  Annonce,
  AppliedOffer,
  AppliedTalentSummary,
  AiRecommendation,
  HiringAiChatResponse,
  HiringAiResponse,
  MatchingResultDTO,
  TalentCompetence,
  TalentProfile,
} from '../../../core/models/talent.model';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  typing?: boolean;
}

export interface MarketSkillStat {
  skill: string;
  count: number;
  pct: number;
}

export interface SalaryEstimate {
  stack: string;
  avgMin: number;
  avgMax: number;
}

@Component({
  selector: 'app-entrepreneur-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css'],
})
export class EntrepreneurTalentComponent implements OnInit {
  constructor(private talentService: TalentService, private aiService: AiService) { }

  view: 'applicants' | 'annonces' | 'talents' = 'applicants';

  talents: TalentProfile[] = [];
  appliedTalents: AppliedTalentSummary[] = [];
  annonces: Annonce[] = [];
  matchingResults: MatchingResultDTO[] = [];
  matchingLoading = false;

  selectedCandidate: any = null;
  showProfileModal = false;
  selectedAnnonce: Annonce | null = null;
  selectedAnnonceId: number | null = null;

  // ── Talents × Offres modal ──
  showTalentsOffresModal = false;
  searchTalentsOffres = '';

  showForm = false;
  showEditForm = false;
  loading = false;
  successMsg = '';
  error = '';
  actionLoadingId: number | null = null;

  /** Métiers avancés enrichis avec Backend/Frontend vérifiés */
  readonly metiersCatalog = [
    { code: 'FULLSTACK', label: 'Full-stack / Platform' },
    { code: 'BACKEND', label: 'Backend / APIs' },
    { code: 'FRONTEND', label: 'Frontend / Design system' },
    { code: 'VERIFIED_BACKEND', label: '✓ Backend Vérifié — Tests & Clean Arch' },
    { code: 'VERIFIED_FRONTEND', label: '✓ Frontend Vérifié — A11y & Design System' },
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
    { code: 'AI_AGENT_ARCHITECT', label: 'AI Agent Architect' },
    { code: 'DIGITAL_TWIN_ENGINEER', label: 'Digital Twin Engineer' },
    { code: 'QUANTUM_SOFTWARE', label: 'Quantum Software Engineer' },
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

  searchApplicants = '';
  aiSearchHints: string[] = [];
  searchAnnonce = '';
  searchTalents = '';
  sortMatching: 'score' | 'nom' | 'niveau' = 'score';

  // ── Chat IA — nouveau design terminal ──
  chatMessages: ChatMessage[] = [];
  chatInput = '';
  chatLoading = false;
  hiringContext = '';
  chatInitialized = false;

  aiInsights: AiRecommendation[] = [];

  // ── Market Intelligence ──
  marketTopSkills: MarketSkillStat[] = [];
  salaryEstimates: SalaryEstimate[] = [];

  ngOnInit(): void {
    this.loadTalents();
    this.loadAppliedTalents();
    this.loadAnnonces();
    this.loadAiInsights();
    this.buildMarketIntelligence();
    this.initChat();
  }

  // ──────────────────────────────
  // CHAT IA — Terminal Style
  // ──────────────────────────────
  initChat(): void {
    this.chatMessages = [
      {
        role: 'assistant',
        content: `Hey 👋 Je suis **Alex**, Senior Engineering Lead avec 10 ans d'XP en recrutement tech.

Remplissez le formulaire d'annonce et je vous donne mes conseils sur : fiche de poste, questions d'entretien, red flags à éviter et onboarding.

Ou posez-moi directement une question sur votre recrutement.`,
        timestamp: new Date(),
      },
    ];
    this.chatInitialized = true;
  }

  sendChatMessage(): void {
    const q = this.chatInput.trim();
    if (!q || this.chatLoading) return;

    this.chatMessages.push({ role: 'user', content: q, timestamp: new Date() });
    this.chatInput = '';
    this.chatLoading = true;

    // Typing indicator
    const typingMsg: ChatMessage = { role: 'assistant', content: '', timestamp: new Date(), typing: true };
    this.chatMessages.push(typingMsg);

    this.talentService
      .getHiringAiChat({
        question: q,
        contexte: this.hiringContext.trim() || undefined,
        annonceId: this.selectedAnnonceId ?? undefined,
      })
      .subscribe({
        next: (res) => {
          const idx = this.chatMessages.indexOf(typingMsg);
          if (idx !== -1) {
            const fullAnswer = this.buildChatAnswer(res);
            this.chatMessages[idx] = { role: 'assistant', content: fullAnswer, timestamp: new Date() };
          }
          this.chatLoading = false;
          this.loadAiInsights();
        },
        error: () => {
          const idx = this.chatMessages.indexOf(typingMsg);
          if (idx !== -1) {
            this.chatMessages[idx] = {
              role: 'assistant',
              content: '⚠️ Erreur de connexion. Vérifiez que le backend est bien démarré sur `/api/ai/hiring-chat`.',
              timestamp: new Date(),
            };
          }
          this.chatLoading = false;
        },
      });
  }

  runHiringAi(): void {
    const titre = this.newAnnonce.poste.trim() || 'Nouveau poste';
    const typePoste = this.newAnnonce.type.toUpperCase();
    const competencesRequises = this.newAnnonce.competences;
    const metiers = this.newAnnonce.metiers.map((c) => this.metierLabel(c));

    const userMsg = `Analyse mon annonce : **${titre}** (${typePoste}) — compétences : ${competencesRequises || 'N/A'} — métiers : ${metiers.join(', ') || 'N/A'}${this.hiringContext ? ` — contexte : ${this.hiringContext}` : ''}`;
    this.chatMessages.push({ role: 'user', content: userMsg, timestamp: new Date() });

    const typingMsg: ChatMessage = { role: 'assistant', content: '', timestamp: new Date(), typing: true };
    this.chatMessages.push(typingMsg);
    this.chatLoading = true;

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
          const idx = this.chatMessages.indexOf(typingMsg);
          if (idx !== -1) {
            const content = this.buildAdviceAnswer(res);
            this.chatMessages[idx] = { role: 'assistant', content, timestamp: new Date() };
          }
          this.chatLoading = false;
          this.loadAiInsights();
        },
        error: () => {
          const idx = this.chatMessages.indexOf(typingMsg);
          if (idx !== -1) {
            this.chatMessages[idx] = {
              role: 'assistant',
              content: '⚠️ Erreur lors de la génération IA. Vérifiez `/api/ai/hiring-advice`.',
              timestamp: new Date(),
            };
          }
          this.chatLoading = false;
        },
      });
  }

  clearChat(): void {
    this.initChat();
  }

  onChatKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendChatMessage();
    }
  }

  private buildChatAnswer(res: HiringAiChatResponse): string {
    let out = res.answer || '';
    if (res.interviewQuestions?.length) {
      out += "\n\n**Questions d'entretien recommandées:**\n" + res.interviewQuestions.map((q) => `• ${q}`).join('\n');
    }
    if (res.focusAreas?.length) {
      out += '\n\n**Focus prioritaire :**\n' + res.focusAreas.map((f) => `• ${f}`).join('\n');
    }
    if (res.suggestedNextSteps?.length) {
      out += '\n\n**Next steps :**\n' + res.suggestedNextSteps.map((s) => `→ ${s}`).join('\n');
    }
    return out;
  }

  private buildAdviceAnswer(res: HiringAiResponse): string {
    let out = `**Fiche synthèse :** ${res.fichePoste || '—'}\n`;
    if (res.competencesSuggerees?.length) {
      out += '\n**Compétences suggérées :**\n' + res.competencesSuggerees.map((s) => `• ${s}`).join('\n');
    }
    if (res.questionsEntretien?.length) {
      out += "\n\n**Questions d'entretien:**\n" + res.questionsEntretien.map((q) => `• ${q}`).join('\n');
    }
    if (res.checklistOnboarding?.length) {
      out += '\n\n**Onboarding :**\n' + res.checklistOnboarding.map((o) => `✓ ${o}`).join('\n');
    }
    if (res.risquesOuGaps?.length) {
      out += '\n\n**Risques / Écarts :**\n' + res.risquesOuGaps.map((r) => `⚠ ${r}`).join('\n');
    }
    return out;
  }

  // ──────────────────────────────
  // MARKET INTELLIGENCE
  // ──────────────────────────────
  buildMarketIntelligence(): void {
    // Construit dynamiquement depuis les annonces (sera rechargé après loadAnnonces)
    setTimeout(() => this.computeMarketStats(), 1200);
  }

  computeMarketStats(): void {
    const skillMap: Record<string, number> = {};
    this.annonces.forEach((a) => {
      (a.competencesRequises || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((s) => {
          skillMap[s] = (skillMap[s] || 0) + 1;
        });
    });

    const sorted = Object.entries(skillMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    const max = sorted[0]?.[1] || 1;

    this.marketTopSkills = sorted.map(([skill, count]) => ({
      skill,
      count,
      pct: Math.round((count / max) * 100),
    }));

    // Estimations salaires (statiques enrichies)
    this.salaryEstimates = [
      { stack: 'React + 5 ans', avgMin: 2800, avgMax: 4200 },
      { stack: 'Spring Boot Senior', avgMin: 3000, avgMax: 4800 },
      { stack: 'Angular Mid', avgMin: 2200, avgMax: 3400 },
      { stack: 'DevOps / K8s', avgMin: 3500, avgMax: 5500 },
      { stack: 'GenAI / LLMOps', avgMin: 4000, avgMax: 7000 },
      { stack: 'Data Engineer', avgMin: 3200, avgMax: 5000 },
    ];
  }

  // ──────────────────────────────
  // TALENTS × OFFRES MODAL
  // ──────────────────────────────
  get filteredTalentsOffres(): AppliedTalentSummary[] {
    const q = this.searchTalentsOffres.trim().toLowerCase();
    if (!q) return this.appliedTalents;
    return this.appliedTalents.filter((t) => {
      const offers = (t.offres ?? []).map((o) => `${o.titreAnnonce} ${o.typePoste || ''}`).join(' ');
      return `${t.prenom} ${t.nom} ${t.email} ${t.competences || ''} ${offers}`.toLowerCase().includes(q);
    });
  }

  ouvrirTalentsOffres(): void {
    this.showTalentsOffresModal = true;
  }

  fermerTalentsOffres(): void {
    this.showTalentsOffresModal = false;
    this.searchTalentsOffres = '';
  }

  // ──────────────────────────────
  // LOADERS
  // ──────────────────────────────
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
        this.computeMarketStats();
      },
      error: (err: any) => {
        console.error('Erreur annonces:', err);
        this.error = 'Impossible de charger les offres. Vérifiez GET /api/annonces.';
      },
    });
  }

  loadAppliedTalents(): void {
    this.talentService.getTalentsWithAppliedOffers().subscribe({
      next: (rows) => {
        this.appliedTalents = rows ?? [];
      },
      error: () => {
        this.error = 'Impossible de charger les candidats ayant postulé.';
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
    const labels = this.newAnnonce.metiers.map((c) => this.metierLabel(c)).filter(Boolean);
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
        this.newAnnonce = { poste: '', type: 'stagiaire', competences: '', description: '', localisation: 'Tunis', metiers: [] };
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
        this.matchingResults = [...data].sort((a, b) => (b.matchingScore ?? 0) - (a.matchingScore ?? 0));
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

  get filteredApplicants(): AppliedTalentSummary[] {
    const q = this.searchApplicants.trim().toLowerCase();
    if (!q) return this.appliedTalents;
    return this.appliedTalents.filter((t) => {
      const offers = (t.offres ?? []).map((o) => `${o.titreAnnonce} ${o.typePoste || ''} ${o.localisation || ''}`).join(' ');
      const blob = `${t.prenom} ${t.nom} ${t.email} ${t.competences || ''} ${offers}`.toLowerCase();
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

  get filteredTalents(): TalentProfile[] {
    const q = this.searchTalents.trim().toLowerCase();
    if (!q) return this.talents;
    return this.talents.filter((t) =>
      `${t.prenom} ${t.nom} ${t.email} ${t.competences || ''} ${t.niveauExperience || ''}`.toLowerCase().includes(q)
    );
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

  loadAiInsights(): void {
    this.talentService.getAiRecommendations().subscribe({
      next: (rows) => (this.aiInsights = rows ?? []),
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
          id: m.talentId, nom, prenom, email: m.emailTalent,
          competences: fromMatch, diplome: '', disponible: true,
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
    return String(c.competences).split(',').map((s) => s.trim()).filter(Boolean).map((nom) => ({ nom, niveau: 0 }));
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

  updateOfferStatus(offer: AppliedOffer, statut: 'ACCEPTEE' | 'REFUSEE'): void {
    if (!offer.candidatureId || this.actionLoadingId != null) return;
    this.actionLoadingId = offer.candidatureId;
    this.talentService.updateCandidatureStatus(offer.candidatureId, statut).subscribe({
      next: () => {
        this.successMsg = statut === 'ACCEPTEE' ? 'Candidat accepte.' : 'Candidat refuse.';
        this.actionLoadingId = null;
        this.loadAppliedTalents();
      },
      error: () => {
        this.error = 'Impossible de mettre a jour le statut de candidature.';
        this.actionLoadingId = null;
      },
    });
  }

  contacterDepuisCandidature(offer: AppliedOffer, email: string): void {
    if (offer.candidatureId && this.actionLoadingId == null) {
      this.actionLoadingId = offer.candidatureId;
      this.talentService.markCandidatureContacted(offer.candidatureId).subscribe({
        next: () => {
          this.actionLoadingId = null;
          this.loadAppliedTalents();
        },
        error: () => {
          this.actionLoadingId = null;
        },
      });
    }
    this.contacterParEmail(email);
  }

  talentNiveauLabel(t: TalentProfile): string {
    const n = (t.niveauExperience || '').toUpperCase();
    if (n.includes('SENIOR')) return 'Senior';
    if (n.includes('INTERMEDIAIRE') || n.includes('MID')) return 'Mid';
    if (n.includes('JUNIOR')) return 'Junior';
    return t.niveauExperience || '—';
  }

  hasSkill(competences: any, skill: string): boolean {
    if (!competences) return false;
    let str = '';
    if (typeof competences === 'string') {
      str = competences;
    } else if (Array.isArray(competences)) {
      str = competences.map((c: any) => c.nom || c).join(', ');
    }
    return str.toLowerCase().includes(skill.toLowerCase());
  }

  getTalentBadges(t: TalentProfile): string[] {
    const skillsStr = typeof t.competences === 'string' ? t.competences : (Array.isArray(t.competences) ? t.competences.map((c: any) => c.nom || c).join(', ') : '');
    const skills = (skillsStr || '').toLowerCase();
    const badges: string[] = [];
    if (skills.includes('react')) badges.push('Expert React');
    if (skills.includes('spring') || skills.includes('java')) badges.push('Expert Java');
    if (skills.includes('docker') || skills.includes('k8s') || skills.includes('kubernetes')) badges.push('DevOps Ready');
    if (skills.includes('angular')) badges.push('Angular Pro');
    if ((t.niveauExperience || '').toUpperCase().includes('SENIOR')) badges.push('Livraison Rapide');
    return badges.slice(0, 3);
  }

  suggestApplicantKeywords(): void {
    const skillsPool = this.appliedTalents
      .flatMap((t) => (t.competences || '').split(','))
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 30);
    this.aiService.getKeywords(this.searchApplicants || 'recrutement startup', skillsPool).subscribe({
      next: (res) => {
        this.aiSearchHints = res.keywords ?? [];
      },
      error: () => {
        this.aiSearchHints = [];
      },
    });
  }

  applyHintToSearch(hint: string): void {
    this.searchApplicants = hint;
  }
}
