import { Component, OnInit } from '@angular/core';
import { RessourceService, Ressource, PlanType, ResourceType, Categorie } from '../../../core/services/ressource.service';

export interface CourseFolder {
  name: string; files: Ressource[]; expanded: boolean;
}

@Component({ selector:'app-admin-bibliotheque', templateUrl:'./bibliotheque.component.html', styleUrls:['./bibliotheque.component.css'] })
export class AdminBibliothequeComponent implements OnInit {

  view: 'table' | 'folders' = 'table';
  ressources:    Ressource[] = [];
  folders:       CourseFolder[] = [];
  categories:    Categorie[] = [];
  loading = false;
  error   = '';

  filterType         = 'ALL';
  filterAccess       = 'ALL';
  filterPublie       = 'ALL';
  filterCategorieId: number | null = null;
  search = '';

  showForm          = false;
  isEditing         = false;
  editId: number | null = null;
  showDeleteConfirm = false;
  deleteTarget: Ressource | null = null;

  form: any = this.emptyForm();
  selectedFiles: File[] = [];
  courseName = '';

  // ── Validation ────────────────────────────────────────────────────
  submitted     = false;
  formErrors: Record<string, string> = {};
  submitError   = '';
  submitSuccess = '';

  showCatPanel   = false;
  catForm: any   = { nom: '', description: '', couleur: '#E8622A', icone: '📁' };
  editingCatId: number | null = null;

  typeIcons: Record<string,string> = { PDF:'📄', VIDEO:'🎥', EXCEL:'📊', WORD:'📝', IMAGE:'🖼️', LINK:'🔗' };
  types: ResourceType[] = ['PDF','VIDEO','EXCEL','WORD','IMAGE','LINK'];
  planTypes: PlanType[] = ['FREE','PREMIUM','INSTITUTIONAL'];
  statsData: any = {};

  constructor(public ressourceService: RessourceService) {}

  ngOnInit() { this.loadCategories(); this.loadStats(); this.load(); }

  emptyForm() {
    return { titre:'', description:'', type:'PDF' as ResourceType,
             planType:'FREE' as PlanType, categorieId: null as number|null,
             tags:'', dureeSec: null as number|null, nombrePages: null as number|null,
             publie: true, urlExterne:'' };
  }

  // ── Validation du formulaire ──────────────────────────────────────
  validateForm(): boolean {
    this.formErrors = {};
    if (!this.form.titre?.trim())
      this.formErrors['titre'] = 'Title is required.';
    if (!this.form.type)
      this.formErrors['type'] = 'Resource type is required.';
    if (!this.form.planType)
      this.formErrors['planType'] = 'Access plan is required.';
    if (this.form.type !== 'LINK' && !this.isEditing && this.selectedFiles.length === 0 && !this.form.urlExterne?.trim())
      this.formErrors['fichier'] = 'Please select a file or provide an external URL.';
    if (this.form.type === 'LINK' && !this.form.urlExterne?.trim())
      this.formErrors['urlExterne'] = 'External URL is required for this type.';
    if (this.form.dureeSec !== null && this.form.dureeSec !== '' && Number(this.form.dureeSec) < 0)
      this.formErrors['dureeSec'] = 'Duration must be positive.';
    if (this.form.nombrePages !== null && this.form.nombrePages !== '' && Number(this.form.nombrePages) < 1)
      this.formErrors['nombrePages'] = 'Number of pages must be at least 1.';
    if (this.selectedFiles.length > 1 && !this.courseName?.trim() && !this.form.titre?.trim())
      this.formErrors['courseName'] = 'Please name the course folder.';
    return Object.keys(this.formErrors).length === 0;
  }

  load() {
    this.loading = true; this.error = '';
    const filters: any = { type: this.filterType, access: this.filterAccess, search: this.search };
    if (this.filterCategorieId) filters.categorieId = this.filterCategorieId;

    // FIX: On n'appelle PLUS getRessourceByIdHttp ici car cet endpoint
    // déclenche incrementerVues() côté backend → les vues montaient à chaque rechargement.
    // La liste paginée suffit pour la vue admin.
    this.ressourceService.getRessourcesHttp(filters).subscribe({
      next: res => {
        this.ressources = res.data ?? res;
        this.buildFolders();
        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Unable to load resources.'; }
    });
  }

  buildFolders() {
    const map = new Map<string, Ressource[]>();
    const solo: Ressource[] = [];
    this.ressources.forEach(r => {
      const sep = r.titre.indexOf(' — ');
      if (sep > -1) {
        const key = r.titre.substring(0, sep).trim();
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(r);
      } else { solo.push(r); }
    });
    this.folders = [];
    map.forEach((files, name) => {
      if (files.length > 1) this.folders.push({ name, files, expanded: false });
      else solo.push(...files);
    });
    if (solo.length > 0) this.folders.push({ name: '__solo__', files: solo, expanded: true });
  }

  toggleFolder(f: CourseFolder) { f.expanded = !f.expanded; }
  onSearch() { this.load(); }

  openCreate() {
    this.form = this.emptyForm(); this.isEditing = false;
    this.editId = null; this.selectedFiles = []; this.courseName = '';
    this.submitted = false; this.formErrors = {}; this.submitError = ''; this.submitSuccess = '';
    this.showForm = true;
  }

  openEdit(r: Ressource) {
    this.form = {
      titre: r.titre, description: r.description, type: r.type, planType: r.planType,
      categorieId: r.categorie?.id || null,
      tags: r.tags?.map((t:any) => t.nom).join(', ') || '',
      dureeSec: r.dureeSec || null, nombrePages: r.nombrePages || null,
      publie: r.publie, urlExterne: (r as any).urlExterne || ''
    };
    this.isEditing = true; this.editId = r.id;
    this.selectedFiles = [];
    this.submitted = false; this.formErrors = {}; this.submitError = ''; this.submitSuccess = '';
    this.showForm = true;
  }

  onTypeChange() { this.selectedFiles = []; this.courseName = ''; this.formErrors['fichier'] = ''; this.formErrors['urlExterne'] = ''; }

  onFileChange(e: any) {
    const newFiles = Array.from(e.target.files as FileList) as File[];
    const existing = this.selectedFiles.map(f => f.name);
    const toAdd = newFiles.filter(f => !existing.includes(f.name));
    this.selectedFiles = [...this.selectedFiles, ...toAdd];
    if (this.selectedFiles.length > 0) this.formErrors['fichier'] = '';
    e.target.value = '';
  }

  removeFile(i: number) { this.selectedFiles.splice(i, 1); }

  formatSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes/1024).toFixed(1) + ' KB';
    return (bytes/1048576).toFixed(1) + ' MB';
  }

  submitForm() {
    this.submitted = true;
    this.submitError = '';
    this.submitSuccess = '';

    if (!this.validateForm()) return;

    if (this.isEditing && this.editId) {
      const body: any = {
        titre: this.form.titre, description: this.form.description,
        planType: this.form.planType, publie: this.form.publie,
        urlExterne: this.form.urlExterne
      };
      if (this.form.categorieId) body.categorieId = this.form.categorieId;
      if (this.form.tags) body.tags = this.form.tags.split(',').map((t:any) => t.trim()).filter(Boolean);
      if (this.form.dureeSec)    body.dureeSec    = this.form.dureeSec;
      if (this.form.nombrePages) body.nombrePages = this.form.nombrePages;
      this.ressourceService.updateRessourceHttp(this.editId, body).subscribe({
        next: () => { this.submitSuccess = 'Resource updated successfully!'; setTimeout(() => { this.showForm = false; this.load(); this.loadStats(); }, 900); },
        error: err => { this.submitError = this.parseBackendError(err); }
      });
      return;
    }

    const files = this.selectedFiles.length > 0 ? this.selectedFiles : [null as any];
    const isMulti    = this.selectedFiles.length > 1;
    const courseTitle = isMulti && this.courseName.trim() ? this.courseName.trim() : this.form.titre;
    let completed = 0; const total = files.length;

    for (const file of files) {
      const fd = this.ressourceService.buildFormData(this.form, file);
      if (isMulti && file) {
        const fileLabel = file.name.replace(/\.[^/.]+$/, '');
        fd.set('titre',       courseTitle + ' — ' + fileLabel);
        fd.set('description', this.form.description || ('Part of: ' + courseTitle));
      }
      this.ressourceService.createRessourceHttp(fd, 1).subscribe({
        next: () => { completed++; if (completed === total) { this.submitSuccess = total > 1 ? `${total} resources created!` : 'Resource created successfully!'; setTimeout(() => { this.showForm = false; this.courseName = ''; this.load(); this.loadStats(); }, 900); } },
        error: err => { this.submitError = this.parseBackendError(err); }
      });
    }
  }

  private parseBackendError(err: any): string {
    if (!err) return 'Unknown error.';
    const body = err.error;
    if (!body) return `Server error (${err.status}).`;
    if (body.message) return body.message;
    if (body.data && typeof body.data === 'object') {
      return Object.entries(body.data).map(([k, v]) => `${k}: ${v}`).join(' · ');
    }
    if (typeof body === 'string') return body;
    return `Server error (${err.status}).`;
  }

  confirmDelete(r: Ressource) { this.deleteTarget = r; this.showDeleteConfirm = true; }
  doDelete() {
    if (!this.deleteTarget) return;
    this.ressourceService.deleteRessourceHttp(this.deleteTarget.id).subscribe({
      next: () => { this.load(); this.loadStats(); },
      error: err => alert('Error: ' + (err.error?.message || 'Server error'))
    });
    this.showDeleteConfirm = false; this.deleteTarget = null;
  }
  cancelDelete() { this.showDeleteConfirm = false; this.deleteTarget = null; }

  togglePublie(r: Ressource) { this.ressourceService.togglePublieHttp(r.id).subscribe({ next: () => this.load() }); }

  downloadRessource(r: any) {
    const url = r.urlFichier?.startsWith('http') ? r.urlFichier : r.urlFichier ? 'http://localhost:8084' + r.urlFichier : r.urlExterne ?? '';
    if (!url) { alert('No file attached.'); return; }
    fetch(url, { headers: { 'X-User-Id': '1', 'X-User-Role': 'ADMIN' } })
      .then(res => res.blob())
      .then(blob => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = r.nomFichierOriginal || r.titre; a.click(); URL.revokeObjectURL(a.href); })
      .catch(() => window.open(url, '_blank'));
  }

  loadStats() { this.ressourceService.getStatsHttp(1).subscribe({ next: r => this.statsData = r.data ?? {}, error: () => {} }); }
  get stats() { return this.statsData; }

  loadCategories() {
    this.ressourceService.getCategoriesHttp().subscribe({
      next: (res) => { this.categories = res.data ?? []; },
      error: () => { this.categories = []; }
    });
  }

  openCatPanel() { this.showCatPanel = true; this.catForm = { nom:'', description:'', couleur:'#E8622A', icone:'📁' }; this.editingCatId = null; }
  closeCatPanel() { this.showCatPanel = false; }

  editCategorie(c: Categorie) {
    this.editingCatId = c.id;
    this.catForm = { nom: c.nom, description: c.description || '', couleur: c.couleur || '#E8622A', icone: c.icone || '📁' };
  }

  submitCategorie() {
    if (!this.catForm.nom) return;
    if (this.editingCatId) {
      this.ressourceService.updateCategorieHttp(this.editingCatId, this.catForm).subscribe({
        next: () => { this.editingCatId = null; this.catForm = { nom:'', description:'', couleur:'#E8622A', icone:'📁' }; this.loadCategories(); },
        error: () => this.loadCategories()
      });
    } else {
      this.ressourceService.createCategorieHttp(this.catForm).subscribe({
        next: () => { this.catForm = { nom:'', description:'', couleur:'#E8622A', icone:'📁' }; this.loadCategories(); },
        error: () => this.loadCategories()
      });
    }
  }

  deleteCategorie(c: Categorie) {
    if (!confirm(`Delete category "${c.nom}"?`)) return;
    this.ressourceService.deleteCategorieHttp(c.id).subscribe({ next: () => this.loadCategories(), error: () => this.loadCategories() });
  }

  getAccessBadge(a: string): string {
    return a === 'FREE' ? 'kh-badge--green' : a === 'PREMIUM' ? 'kh-badge--amber' : 'kh-badge--violet';
  }
  getProgressColor(s: string): string {
    return s === 'COMPLETED' ? 'var(--green)' : s === 'IN_PROGRESS' ? 'var(--teal)' : 'var(--text-muted)';
  }
}
