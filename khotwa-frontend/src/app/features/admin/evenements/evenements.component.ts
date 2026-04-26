import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../../core/services/events.service';
import { AuthService } from '../../../core/services/auth.service';
import { Evenement, EvenementType, PlanType, EvenementStatus } from '../../../core/models/evenement.model';

@Component({
  selector: 'app-admin-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
})
export class AdminEvenementsComponent implements OnInit {

  // ── DATA ─────────────────────────────────────────────
  events: Evenement[] = [];
  readonly types: EvenementType[] = ['PITCH', 'WEBINAR', 'FORMATION', 'COACHING'];
  readonly plans: PlanType[] = ['FREE', 'PREMIUM', 'INSTITUTIONAL'];

  filtre: EvenementType | 'TOUS' = 'TOUS';
  filtrePlan: string = 'tous';
  searchQuery = '';
  isLoading = false;

  // ── VIEW ─────────────────────────────────────────────
  viewMode: 'grid' | 'calendar' = 'grid';
  calendarYear = new Date().getFullYear();
  calendarMonth = new Date().getMonth();
  readonly monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  readonly dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  selectedDay: string | null = null;

  // ── Modals ───────────────────────────────────────────
  showCreate = false;
  showEdit   = false;
  showDelete = false;

  // ── AI Generation ────────────────────────────────────
  isGeneratingAi = false;
  showAiModal    = false;
  aiTopStats: { id: number; titre: string; type: string; participants: number; placesTotal: number; tauxRemplissage: number }[] = [];
  isLoadingStats = false;

  newEvent: Evenement = this.emptyForm();
  editForm: Evenement = this.emptyForm();
  editTarget: Evenement | null  = null;
  deleteTarget: Evenement | null = null;

  createErrors: Partial<Record<keyof Evenement, string>> = {};
  editErrors:   Partial<Record<keyof Evenement, string>> = {};

  // ── Notification ─────────────────────────────────────
  toast: { message: string; type: 'success' | 'error' } | null = null;

  constructor(
    private eventService: EvenementService,
    private authService:  AuthService
  ) {}

  ngOnInit(): void { this.refresh(); }

  refresh(): void {
    this.isLoading = true;
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = Array.isArray(data) ? data : [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Load error:', err);
        this.events   = [];
        this.isLoading = false;
      }
    });
  }

  // ── AI GENERATION ────────────────────────────────────
  openAiModal(): void {
    this.showAiModal   = true;
    this.isLoadingStats = true;
    this.aiTopStats    = [];

    this.eventService.getTopEventsStats().subscribe({
      next: (stats) => {
        this.aiTopStats    = stats;
        this.isLoadingStats = false;
      },
      error: (err) => {
        console.error('Stats error:', err);
        this.isLoadingStats = false;
      }
    });
  }

  generateAiEvent(): void {
    this.isGeneratingAi = true;

    this.eventService.generateAiEvent().subscribe({
      next: (event) => {
        this.isGeneratingAi = false;
        this.showAiModal    = false;
        this.refresh();
        this.showToast(
          `✨ L'IA a créé l'événement : "${event.titre}" (statut PENDING)`,
          'success'
        );
      },
      error: (err) => {
        this.isGeneratingAi = false;
        const msg = err.error?.message || err.message || 'Erreur IA';
        this.showToast('Erreur IA : ' + msg, 'error');
      }
    });
  }

  // ── STATS ────────────────────────────────────────────
  get totalEvents(): number { return this.events.length; }
  get totalParticipants(): number {
    return this.events.reduce((s, e) => s + (e.placesTotal - e.placesRestantes), 0);
  }
  get totalSeatsAvailable(): number {
    return this.events.reduce((s, e) => s + e.placesRestantes, 0);
  }
  get acceptedCount(): number {
    return this.events.filter(e => e.statut === 'ACCEPTED').length;
  }
  get pendingCount(): number {
    return this.events.filter(e => e.statut === 'PENDING').length;
  }

  // ── SEARCH + FILTER ──────────────────────────────────
  get filteredEvents(): Evenement[] {
    let list = this.events;
    if (this.filtre !== 'TOUS')
      list = list.filter(e => e.type?.toUpperCase() === this.filtre);
    if (this.filtrePlan && this.filtrePlan.toLowerCase() !== 'tous')
      list = list.filter(e => e.planType?.toLowerCase() === this.filtrePlan.toLowerCase());
    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(e =>
        e.titre?.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q) ||
        e.intervenant?.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => (b.idEvenement ?? 0) - (a.idEvenement ?? 0));
  }

  clearSearch(): void { this.searchQuery = ''; }

  // ── CALENDAR LOGIC ───────────────────────────────────
  toggleView(): void { this.viewMode = this.viewMode === 'grid' ? 'calendar' : 'grid'; this.selectedDay = null; }
  prevMonth(): void { if (this.calendarMonth === 0) { this.calendarMonth = 11; this.calendarYear--; } else this.calendarMonth--; }
  nextMonth(): void { if (this.calendarMonth === 11) { this.calendarMonth = 0; this.calendarYear++; } else this.calendarMonth++; }
  goToToday(): void { const n = new Date(); this.calendarYear = n.getFullYear(); this.calendarMonth = n.getMonth(); this.selectedDay = null; }

  get calendarCells(): (Date | null)[] {
    const first    = new Date(this.calendarYear, this.calendarMonth, 1);
    const startDay = (first.getDay() + 6) % 7;
    const total    = new Date(this.calendarYear, this.calendarMonth + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(new Date(this.calendarYear, this.calendarMonth, d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }

  dateKey(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  eventsForDay(date: Date): Evenement[] { return this.filteredEvents.filter(e => e.date === this.dateKey(date)); }
  isToday(date: Date): boolean { const t = new Date(); return date.getDate() === t.getDate() && date.getMonth() === t.getMonth() && date.getFullYear() === t.getFullYear(); }
  selectDay(date: Date): void { const key = this.dateKey(date); this.selectedDay = this.selectedDay === key ? null : key; }
  get selectedDayEvents(): Evenement[] { return this.selectedDay ? this.filteredEvents.filter(e => e.date === this.selectedDay) : []; }
  get selectedDayLabel(): string {
    if (!this.selectedDay) return '';
    const d = new Date(this.selectedDay + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }
  hasEventOnDay(date: Date): boolean { return this.eventsForDay(date).length > 0; }

  // ── CRUD ─────────────────────────────────────────────
  openCreate(): void {
    this.newEvent    = this.emptyForm();
    this.createErrors = {};
    this.showCreate  = true;
  }

  submitCreate(): void {
    if (!this.validateForm(this.newEvent, 'create')) return;

    const payload = {
      titre:       this.newEvent.titre,
      description: this.newEvent.description,
      date:        new Date(this.newEvent.date).toISOString().split('T')[0],
      heure:       this.formatHeure(this.newEvent.heure),
      intervenant: this.newEvent.intervenant,
      lienMeet:    this.newEvent.lienMeet,
      placesTotal: Number(this.newEvent.placesTotal),
      type:        this.newEvent.type.toUpperCase(),
      planType:    this.newEvent.planType.toUpperCase(),
      creator:     { idUser: this.authService.currentUser?.idUser ?? 1 }
    };

    this.eventService.create(payload as any).subscribe({
      next: () => {
        this.showCreate   = false;
        this.newEvent     = this.emptyForm();
        this.createErrors = {};
        this.refresh();
        this.showToast('Event created successfully!', 'success');
      },
      error: (err) => {
        const msg = err.error?.message || err.message || 'Server error';
        this.showToast('Error: ' + msg, 'error');
      }
    });
  }

  openEdit(ev: Evenement): void {
    this.editTarget  = ev;
    this.editForm    = JSON.parse(JSON.stringify(ev));
    this.editErrors  = {};
    this.showEdit    = true;
  }

  submitEdit(): void {
    if (!this.validateForm(this.editForm, 'edit') || !this.editTarget?.idEvenement) return;

    const inscritsActuels = this.editTarget.placesTotal - this.editTarget.placesRestantes;
    if (this.editForm.placesTotal < inscritsActuels) {
      this.editErrors.placesTotal = `Minimum ${inscritsActuels} seats (already reserved)`;
      return;
    }

    const diff = this.editForm.placesTotal - this.editTarget.placesTotal;
    const payload: any = {
      ...this.editForm,
      type:            this.editForm.type.toUpperCase(),
      planType:        this.editForm.planType.toUpperCase(),
      heure:           this.formatHeure(this.editForm.heure),
      placesRestantes: this.editTarget.placesRestantes + diff
    };

    this.eventService.update(this.editTarget.idEvenement, payload).subscribe({
      next: () => {
        this.refresh();
        this.showEdit = false;
        this.showToast('Event updated successfully!', 'success');
      },
      error: (err) => {
        if (err.status === 200) {
          this.refresh();
          this.showEdit = false;
          this.showToast('Event updated successfully!', 'success');
        } else {
          this.showToast('Error: ' + (err.error?.message || err.message), 'error');
        }
      }
    });
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.idEvenement) return;
    this.eventService.delete(this.deleteTarget.idEvenement).subscribe({
      next: () => {
        this.refresh();
        this.showDelete   = false;
        this.deleteTarget = null;
        this.showToast('Event deleted successfully.', 'success');
      },
      error: (err) => {
        if (err.status === 200 || err.status === 204) {
          this.refresh();
          this.showDelete   = false;
          this.deleteTarget = null;
          this.showToast('Event deleted successfully.', 'success');
        } else {
          this.showToast('Error: ' + (err.error?.message || err.message), 'error');
        }
      }
    });
  }

  changeStatus(ev: Evenement, status: EvenementStatus): void {
    if (!ev.idEvenement) return;
    this.eventService.changeStatus(ev.idEvenement, status).subscribe({
      next: () => {
        this.refresh();
        this.showToast(`Event ${status === 'ACCEPTED' ? 'accepted' : 'cancelled'} successfully.`, 'success');
      },
      error: (err) => {
        if (err.status === 200 || err.status === 204) {
          this.refresh();
          this.showToast(`Event ${status === 'ACCEPTED' ? 'accepted' : 'cancelled'} successfully.`, 'success');
        } else {
          this.showToast('Error: ' + (err.error?.message || err.message), 'error');
        }
      }
    });
  }

  // ── UTILS ─────────────────────────────────────────────
  badgeClass(type: string): string {
    const t = type?.toUpperCase();
    if (t === 'PITCH')     return 'kh-badge--orange';
    if (t === 'WEBINAR')   return 'kh-badge--teal';
    if (t === 'FORMATION') return 'kh-badge--violet';
    if (t === 'COACHING')  return 'kh-badge--green';
    return 'kh-badge--gray';
  }

  placeBadgeClass(restantes: number): string {
    if (restantes === 0) return 'kh-badge--red';
    if (restantes < 5)   return 'kh-badge--amber';
    return 'kh-badge--gray';
  }

  typeColor(type: string): string {
    const t = type?.toUpperCase();
    if (t === 'PITCH')     return '#E8622A';
    if (t === 'WEBINAR')   return '#0d9488';
    if (t === 'FORMATION') return '#7c3aed';
    if (t === 'COACHING')  return '#16a34a';
    return '#94a3b8';
  }

  typeLabel(type: string): string {
    return type ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() : '';
  }

  fillRate(ev: Evenement): number {
    if (!ev.placesTotal) return 0;
    return Math.round(((ev.placesTotal - ev.placesRestantes) / ev.placesTotal) * 100);
  }

  private showToast(message: string, type: 'success' | 'error'): void {
    this.toast = { message, type };
    setTimeout(() => this.toast = null, 3500);
  }

  private emptyForm(): Evenement {
    return {
      idEvenement:     0,
      titre:           '',
      description:     '',
      type:            'FORMATION' as EvenementType,
      date:            '',
      heure:           '',
      intervenant:     '',
      lienMeet:        '',
      placesTotal:     0,
      placesRestantes: 0,
      statut:          'PENDING',
      planType:        'FREE' as PlanType
    };
  }

  private validateForm(form: Evenement, target: 'create' | 'edit'): boolean {
    const errors: Partial<Record<keyof Evenement, string>> = {};

    if (!form.titre?.trim())       errors.titre       = 'Title is required';
    if (!form.description?.trim()) errors.description = 'Description is required';
    if (!form.intervenant?.trim()) errors.intervenant = 'Speaker is required';
    if (!form.date)                errors.date        = 'Date is required';
    if (form.placesTotal <= 0)     errors.placesTotal = 'Must be greater than 0';

    // ── Validation heure : obligatoire + entre 08:00 et 15:00 ──────
    if (!form.heure) {
      errors.heure = 'Time is required';
    } else {
      const [h, m] = form.heure.split(':').map(Number);
      const totalMinutes = h * 60 + m;
      const min = 8 * 60;   // 08:00
      const max = 15 * 60;  // 15:00
      if (isNaN(h) || isNaN(m) || totalMinutes < min || totalMinutes > max) {
        errors.heure = 'Time must be between 08:00 and 15:00';
      }
    }

    // ── Validation date : doit être strictement après aujourd'hui ──
    if (form.date) {
      const today = new Date(); today.setHours(0, 0, 0, 0);
      const picked = new Date(form.date);
      if (picked <= today) errors.date = 'La date doit être postérieure à aujourd\'hui.';
    }

    // ── Validation lienMeet : obligatoire et doit commencer par https:// ──
    if (!form.lienMeet?.trim()) {
      errors.lienMeet = 'Meeting link is required';
    } else if (!form.lienMeet.startsWith('https://')) {
      errors.lienMeet = 'Meeting link must start with https://';
    }

    if (target === 'create') this.createErrors = errors;
    else                     this.editErrors   = errors;

    return Object.keys(errors).length === 0;
  }

  private formatHeure(heure: string): string {
    if (!heure) return '';
    return heure.length === 5 ? `${heure}:00` : heure;
  }
}