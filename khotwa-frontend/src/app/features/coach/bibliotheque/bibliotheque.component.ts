import { Component, OnInit, OnDestroy, ElementRef, ViewChild, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RessourceService, Ressource, Categorie, ProgressStatus, PlanType } from '../../../core/services/ressource.service';
import { AiService,AiRessource } from '../../../core/services/ai.service';
import { AuthService } from '../../../core/services/auth.service';
import { forkJoin } from 'rxjs';

declare const pdfjsLib: any;

export interface CourseFolder {
  name: string;
  files: any[];
  expanded: boolean;
}

@Component({
  selector: 'app-coach-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class CoachBibliothequeComponent implements OnInit, OnDestroy {

  @ViewChild('videoPlayer') videoPlayerRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('pdfCanvas') pdfCanvasRef?: ElementRef<HTMLCanvasElement>;

  ressources: Ressource[] = [];
  folders: CourseFolder[] = [];
  view: 'grid' | 'folders' = 'grid';
  categories: Categorie[] = [];
  loading = false;
  error = '';

  filterType = 'ALL';
  filterAccess = 'ALL';
  filterCategorieId: number | null = null;
  search = '';
  stats: any = {};

  showViewer = false;
  viewerRessource: Ressource | null = null;
  viewerType: 'pdf' | 'video' | 'image' | 'other' = 'other';
  viewerUrl = '';
  rawBlobUrl = '';
  blobUrl: SafeResourceUrl | null = null;
  viewerLoading = false;
  resumeAt = 0;

  pdfDoc: any = null;
  pdfCurrentPage = 1;
  pdfTotalPages = 1;
  pdfRendering = false;
  pdfScale = 1.5;

  private saveInterval: any = null;

  typeIcons: Record<string, string> = {
    PDF: '📄', VIDEO: '🎥', EXCEL: '📊', WORD: '📝', IMAGE: '🖼️', LINK: '🔗'
  };

  get userId(): number   { return this.auth.currentUser?.idUser ?? 0; }
  get userRole(): string { return this.auth.currentUser?.role   ?? 'COACH'; }
  get userPlan(): PlanType {
    return (this.auth.currentUser?.planType as PlanType) ?? 'FREE';
  }

  private apiBase = this.svc.getApiOrigin();

  // ── IA ──────────────────────────────────────────────
  showResumeModal  = false;
  resumeRessource: Ressource | null = null;
  aiSearchActive   = false;
  aiSearchResults: AiRessource[] = [];
  private allRessources: Ressource[] = [];

  constructor(
    private svc: RessourceService,
    private aiService: AiService,
    private auth: AuthService,
    private sanitizer: DomSanitizer,
    private zone: NgZone,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route?.queryParams?.subscribe((params: any) => {
      const openId = params['openId'];
      if (openId) {
        setTimeout(() => {
          const r = (this as any).ressources?.find((res: any) => String(res.id) === String(openId));
          if (r) (this as any).openViewer(r);
        }, 800);
      }
    }); this.loadCategories(); this.loadStats(); this.load(); }

  openResumeModal(r: Ressource, event: Event) {
    event.stopPropagation();
    this.resumeRessource = r;
    this.showResumeModal = true;
  }
  closeResumeModal() { this.showResumeModal = false; this.resumeRessource = null; }

  onAiResults(results: AiRessource[]) {
    this.aiSearchActive  = true;
    this.aiSearchResults = results || [];
    if (results && results.length > 0) {
      const ids = new Set(results.map(r => Number(r.id)).filter(id => !isNaN(id)));
      this.ressources = this.allRessources.filter(r => ids.has(r.id));
    } else {
      this.ressources = [];
    }
  }

  onAiSearchCleared() {
    this.aiSearchActive  = false;
    this.aiSearchResults = [];
    this.ressources = [...this.allRessources];
  }
  ngOnDestroy() { this.stopSaveInterval(); this.revokeBlobUrl(); }

  // ── LOGIQUE D'URL UNIQUE ET NETTOYÉE ──────────────────────────────
  private formatFullUrl(path: string | undefined): string {
    if (!path || path === '#' || path === '') return '';
    if (path.startsWith('http')) return path;

    const base = this.apiBase.replace(/\/+$/, ''); 
    let cleanPath = path;

    // Si le backend renvoie déjà khotwa/api dans le path, on le retire pour éviter le doublon
    if (cleanPath.includes('khotwa/api')) {
        const parts = cleanPath.split('khotwa/api');
        cleanPath = parts[parts.length - 1]; 
    }

    // On s'assure qu'il y a un slash au début
    if (!cleanPath.startsWith('/')) {
        cleanPath = '/' + cleanPath;
    }

    const finalUrl = base + cleanPath;
    console.log("Coach URL built:", finalUrl);
    return finalUrl;
  }

  load() {
    this.loading = true; this.error = '';
    const filters: any = { userId: this.userId, role: this.userRole, plan: this.userPlan };
    if (this.filterType !== 'ALL') filters.type = this.filterType;
    if (this.filterAccess !== 'ALL') filters.access = this.filterAccess;
    if (this.filterCategorieId) filters.categorieId = this.filterCategorieId;
    if (this.search) filters.search = this.search;

    forkJoin({
      ressources: this.svc.getRessourcesHttp(filters),
      progressions: this.svc.getMesProgressionsHttp(this.userId)
    }).subscribe({
      next: ({ ressources, progressions }) => {
        const list: Ressource[] = ressources.data ?? ressources;
        const progs: any[] = progressions.data ?? [];
        const pm = new Map<number, any>();
        progs.forEach((p: any) => {
          const rid = p.ressource?.id ?? p.ressourceId;
          if (rid) pm.set(rid, p);
        });
        this.ressources = list.map(r => ({

          ...r,
          maProgress: pm.has(r.id)
            ? { 
                status: pm.get(r.id).statut as any, 
                pourcentage: pm.get(r.id).pourcentage,
                positionVideoSec: pm.get(r.id).positionVideoSec,
                currentPage: pm.get(r.id).positionVideoSec 
              }
            : r.maProgress
        }));
        this.allRessources = [...this.ressources];
        this.buildFolders();
        this.loading = false;
      },
      error: () => { this.error = '⚠️ Unable to reach the server.'; this.loading = false; }
    });
  }

  loadStats() { this.svc.getStatsHttp(this.userId).subscribe({ next: r => this.stats = r.data ?? {}, error: () => {} }); }
  loadCategories() { this.svc.getCategoriesHttp().subscribe({ next: r => this.categories = r.data ?? [], error: () => {} }); }
  onSearch() { this.load(); }

  openViewer(r: Ressource) {
    this.svc.getRessourceByIdHttp(r.id, this.userId, this.userRole, this.userPlan).subscribe({
      next: res => {
        const detail = res.data?.ressource ?? res.data ?? r;
        const tags = res.data?.tags ?? detail.tags ?? r.tags ?? [];
        this.startViewer({ ...r, ...detail, tags, maProgress: r.maProgress ?? detail.maProgression });
      },
      error: () => this.startViewer(r)
    });
  }

  private startViewer(r: Ressource) {
    this.viewerRessource = r;
    this.viewerType = r.type === 'VIDEO' ? 'video' : r.type === 'PDF' ? 'pdf' : r.type === 'IMAGE' ? 'image' : 'other';
    this.resumeAt = (r.maProgress as any)?.positionVideoSec ?? 0;
    this.revokeBlobUrl();
    this.blobUrl = null; this.rawBlobUrl = ''; this.pdfDoc = null;

    if (r.type === 'LINK' || (!r.urlFichier && r.urlExterne)) {
      // LINK → consultation instantanée = 100% COMPLETED
      this.svc.updateProgressionHttp(this.userId, r.id, 'COMPLETED', 100).subscribe();
      if (r.maProgress) { r.maProgress.status = 'COMPLETED'; r.maProgress.pourcentage = 100; }
      window.open(r.urlExterne!, '_blank');
      this.showViewer = false;
    } else if (r.type === 'IMAGE') {
      // IMAGE → affichage immédiat = 100% COMPLETED
      this.svc.updateProgressionHttp(this.userId, r.id, 'COMPLETED', 100).subscribe();
      if (r.maProgress) { r.maProgress.status = 'COMPLETED'; r.maProgress.pourcentage = 100; }
    } else if (!r.maProgress || r.maProgress.status === 'NOT_STARTED') {
      // PDF / VIDEO → démarrer à IN_PROGRESS 1%
      this.svc.updateProgressionHttp(this.userId, r.id, 'IN_PROGRESS', 1).subscribe();
    }

    // ── Rendu du contenu (indépendant de la progression) ──
    if (r.type === 'VIDEO') {
      if (r.urlFichier && !r.urlFichier.startsWith('http')) {
        this.viewerLoading = true;
        this.showViewer = true;
        this.svc.downloadAsBlob(r.id, this.userId, this.userRole, this.userPlan).subscribe({
          next: (blob: Blob) => {
            this.rawBlobUrl = URL.createObjectURL(blob);
            this.viewerUrl = this.rawBlobUrl;
            this.viewerLoading = false;
          },
          error: () => {
            this.viewerUrl = this.formatFullUrl(r.urlFichier || r.urlExterne);
            this.viewerLoading = false;
          }
        });
      } else {
        this.viewerUrl = this.formatFullUrl(r.urlFichier || r.urlExterne);
        this.showViewer = true;
      }
      this.showViewer = true;
      this.startSaveInterval(r);
    } else if (r.type === 'PDF' || r.type === 'IMAGE') {
      this.viewerLoading = true;
      this.showViewer = true;
      this.svc.downloadAsBlob(r.id, this.userId, this.userRole, this.userPlan).subscribe({
        next: (blob: Blob) => {
          this.rawBlobUrl = URL.createObjectURL(blob);
          this.viewerLoading = false;
          if (r.type === 'PDF') this.loadPdfJs(this.rawBlobUrl, r);
        },
        error: (err: any) => {
          console.error('Download error:', err);
          this.viewerLoading = false;
          this.showViewer = false;
          alert(err?.error?.message || 'Impossible de charger la ressource.');
        }
      });
    } else {
      this.viewerUrl = this.formatFullUrl(r.urlExterne || r.urlFichier);
      this.showViewer = true;
    }
  }

  private loadPdfJs(blobUrl: string, r: Ressource) {
    if (typeof pdfjsLib === 'undefined') return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    pdfjsLib.getDocument(blobUrl).promise.then((doc: any) => {
      this.zone.run(() => {
        this.pdfDoc = doc;
        this.pdfTotalPages = doc.numPages;
        const savedPage = (r.maProgress as any)?.positionVideoSec ?? 1;
        this.pdfCurrentPage = Math.max(1, Math.min(savedPage, this.pdfTotalPages));
        setTimeout(() => this.renderPdfPage(this.pdfCurrentPage, r), 100);
      });
    });
  }

  renderPdfPage(pageNum: number, r?: Ressource) {
    if (!this.pdfDoc || this.pdfRendering) return;
    this.pdfRendering = true;
    this.pdfCurrentPage = pageNum;
    this.pdfDoc.getPage(pageNum).then((page: any) => {
      const canvas = this.pdfCanvasRef?.nativeElement;
      if (!canvas) { this.pdfRendering = false; return; }
      const viewport = page.getViewport({ scale: this.pdfScale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const ctx = canvas.getContext('2d');
      page.render({ canvasContext: ctx, viewport }).promise.then(() => {
        this.zone.run(() => {
          this.pdfRendering = false;
          const pct = Math.round((pageNum / this.pdfTotalPages) * 100);
          const status: ProgressStatus = pct >= 100 ? 'COMPLETED' : 'IN_PROGRESS';
          const target = r ?? this.viewerRessource;
          if (target) {
            if (this.viewerRessource) this.viewerRessource.maProgress = { status, pourcentage: pct };
            this.svc.saveVideoProgressionHttp(this.userId, target.id, status, pct, pageNum).subscribe();
          }
        });
      });
    });
  }

  pdfPrevPage() { if (this.pdfCurrentPage > 1) this.renderPdfPage(this.pdfCurrentPage - 1); }
  pdfNextPage() { if (this.pdfCurrentPage < this.pdfTotalPages) this.renderPdfPage(this.pdfCurrentPage + 1); }

  private startSaveInterval(r: Ressource) {
    this.stopSaveInterval();
    this.saveInterval = setInterval(() => {
      const video = this.videoPlayerRef?.nativeElement;
      if (!video || !this.viewerRessource) return;
      const sec = Math.floor(video.currentTime);
      const dur = video.duration || r.dureeSec || 1;
      const pct = Math.min(100, Math.round(sec / dur * 100));
      const status: ProgressStatus = pct >= 95 ? 'COMPLETED' : 'IN_PROGRESS';
      this.svc.saveVideoProgressionHttp(this.userId, r.id, status, pct, sec).subscribe();
    }, 10000);
  }

  private stopSaveInterval() { if (this.saveInterval) clearInterval(this.saveInterval); }

  closeViewer() {
    this.stopSaveInterval();
    this.revokeBlobUrl();
    this.showViewer = false;
    this.viewerRessource = null;
    this.pdfDoc = null;
  }

  onVideoLoaded() {
    const video = this.videoPlayerRef?.nativeElement;
    if (video && this.resumeAt > 0) video.currentTime = this.resumeAt;
  }

  private revokeBlobUrl() {
    if (this.rawBlobUrl?.startsWith('blob:')) URL.revokeObjectURL(this.rawBlobUrl);
  }

  downloadRessource(r: Ressource) {
    // On passe par HttpClient (et donc le JwtInterceptor) pour inclure le token JWT.
    // Le fetch natif contourne l'interceptor Angular => 403 garanti.
    if (r.urlExterne) {
      window.open(r.urlExterne, '_blank');
      return;
    }
    this.svc.downloadAsBlob(r.id, this.userId, this.userRole, this.userPlan).subscribe({
      next: (blob: Blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = (r as any).nomFichierOriginal || r.titre || 'document';
        a.click();
        URL.revokeObjectURL(a.href);
      },
      error: (err: any) => {
        console.error('Erreur telechargement:', err);
        alert(err?.error?.message || 'Impossible de telecharger la ressource.');
      }
    });
  }

  isCompleted(r: Ressource): boolean { return r.maProgress?.status === 'COMPLETED'; }
  getProgressColor(s: string): string { return s === 'COMPLETED' ? 'var(--green)' : s === 'IN_PROGRESS' ? 'var(--teal)' : 'var(--text-muted)'; }
  getAccessBadge(a: string): string { return a === 'FREE' ? 'kh-badge--green' : a === 'PREMIUM' ? 'kh-badge--amber' : 'kh-badge--violet'; }

  buildFolders() {
    const grouped = new Map<string, Ressource[]>();
    const solo: Ressource[] = [];
    this.ressources.forEach((r) => {
      const sep = r.titre.indexOf(' — ');
      if (sep > -1) {
        const key = r.titre.substring(0, sep).trim();
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key)!.push(r);
      } else solo.push(r);
    });
    this.folders = [];
    grouped.forEach((files, name) => {
      if (files.length > 1) this.folders.push({ name, files, expanded: false });
      else solo.push(...files);
    });
    if (solo.length > 0) this.folders.push({ name: '__solo__', files: solo, expanded: true });
  }

  toggleFolder(folder: CourseFolder) { folder.expanded = !folder.expanded; }
}