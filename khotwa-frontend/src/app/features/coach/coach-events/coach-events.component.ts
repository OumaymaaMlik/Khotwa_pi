import { Component, OnInit, OnDestroy } from '@angular/core';
import { EvenementService } from '../../../core/services/events.service';
import { Evenement, EvenementStatus, PlanType, EvenementType } from '../../../core/models/evenement.model';

interface Notification {
  message: string;
  urgency: 'high' | 'normal';
}

interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  id: number;
}

interface CalendarCell {
  day: number;
  inMonth: boolean;
  isToday: boolean;
  date: Date;
  events: Evenement[];
}

interface ConfirmDialog {
  visible: boolean;
  eventId: number | null;
  eventTitle: string;
  action: 'ACCEPTED' | 'CANCELLED';
  loading: boolean;
}

@Component({
  selector: 'app-coach-events',
  templateUrl: './coach-events.component.html',
  styleUrls: ['./coach-events.component.css']
})
export class CoachEventsComponent implements OnInit, OnDestroy {

  // ── Data ──
  allEvents: Evenement[] = [];
  filteredEvents: Evenement[] = [];
  pendingEvents: Evenement[] = [];
  upcomingEvents: Evenement[] = [];
  loading = true;

  // ── View ──
  activeView: 'list' | 'calendar' = 'list';

  // ── Filters ──
  statusFilter: EvenementStatus | 'ALL' = 'ALL';
  typeFilter: EvenementType | 'ALL' = 'ALL';
  planFilter: PlanType | 'ALL' = 'ALL';

  // ── Search & Sort ──
  searchQuery = '';
  sortKey: 'date_asc' | 'date_desc' | 'title_asc' | 'title_desc' | 'status' = 'date_asc';
  searchFocused = false;

  // ── Notifications & Toasts ──
  notifications: Notification[] = [];
  toasts: Toast[] = [];
  private toastCounter = 0;
  private notifInterval: any;

  // ── Calendar ──
  currentCalDate = new Date();
  calendarCells: CalendarCell[] = [];
  selectedCalEvent: Evenement | null = null;
  readonly weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // ── Confirmation dialog ──
  confirmDialog: ConfirmDialog = {
    visible: false,
    eventId: null,
    eventTitle: '',
    action: 'ACCEPTED',
    loading: false
  };

  // ── Processing state ──
  processingId: number | null = null;

  // ── Activity Report ──
  reportLoading = false;

  // ── QR Meet Modal ─────────────────────────────────────────────────────────
  // Le coach génère un QR code contenant le lien Meet de son événement.
  // Les participants scannent avec leur téléphone → accès direct au Meet.
  qrMeetModal    = false;
  qrMeetImage    = '';        // base64 PNG du QR
  qrMeetLink     = '';        // lien Meet brut (fallback bouton)
  qrMeetTitre    = '';        // nom de l'événement affiché dans le modal
  qrMeetLoading  = false;
  qrMeetEventId: number | null = null;

  constructor(private eventService: EvenementService) {}

  ngOnInit(): void {
    this.loadEvents();
    this.notifInterval = setInterval(() => this.checkNotifications(), 30000);
  }

  ngOnDestroy(): void {
    if (this.notifInterval) clearInterval(this.notifInterval);
  }

  // ════════════════════════════════════════
  // DATA LOADING
  // ════════════════════════════════════════

  loadEvents(): void {
    this.loading = true;
    this.eventService.getAll().subscribe({
      next: (data: Evenement[]) => {
        this.allEvents = data.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        this.applyFiltersAndSort();
        this.buildCalendar();
        this.checkNotifications();
        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.loading = false;
        this.showToast('Failed to load events. Please try again.', 'error');
      }
    });
  }

  // ════════════════════════════════════════
  // FILTERS, SEARCH & SORT
  // ════════════════════════════════════════

  setPlan(p: PlanType | 'ALL'): void   { this.planFilter = p;   this.applyFiltersAndSort(); }
  setStatus(s: EvenementStatus | 'ALL'): void { this.statusFilter = s; this.applyFiltersAndSort(); }
  setType(t: EvenementType | 'ALL'): void     { this.typeFilter = t;   this.applyFiltersAndSort(); }

  applyFiltersAndSort(): void {
    let result = [...this.allEvents];

    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(ev =>
        ev.titre?.toLowerCase().includes(q) ||
        ev.intervenant?.toLowerCase().includes(q)
      );
    }

    if (this.statusFilter !== 'ALL') result = result.filter(ev => ev.statut === this.statusFilter);
    if (this.planFilter   !== 'ALL') result = result.filter(ev => ev.planType?.toUpperCase() === this.planFilter);
    if (this.typeFilter   !== 'ALL') result = result.filter(ev => ev.type?.toUpperCase() === this.typeFilter);

    result.sort((a, b) => {
      switch (this.sortKey) {
        case 'date_asc':   return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date_desc':  return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title_asc':  return (a.titre || '').localeCompare(b.titre || '');
        case 'title_desc': return (b.titre || '').localeCompare(a.titre || '');
        case 'status':     return (a.statut || '').localeCompare(b.statut || '');
        default:           return 0;
      }
    });

    this.filteredEvents  = result;
    this.pendingEvents   = this.allEvents.filter(e => e.statut === 'PENDING' || !e.statut);

    const now = new Date();
    this.upcomingEvents  = this.allEvents
      .filter(ev => new Date(ev.date) >= now && ev.statut === 'ACCEPTED')
      .slice(0, 10);

    this.buildCalendar();
  }

  hasActiveFilters(): boolean {
    return (
      this.searchQuery.trim().length > 0 ||
      this.statusFilter !== 'ALL' ||
      this.planFilter !== 'ALL' ||
      this.typeFilter !== 'ALL' ||
      this.sortKey !== 'date_asc'
    );
  }

  resetFilters(): void {
    this.searchQuery  = '';
    this.statusFilter = 'ALL';
    this.planFilter   = 'ALL';
    this.typeFilter   = 'ALL';
    this.sortKey      = 'date_asc';
    this.applyFiltersAndSort();
  }

  // ════════════════════════════════════════
  // CONFIRM DIALOG
  // ════════════════════════════════════════

  openConfirm(id: number, title: string, action: 'ACCEPTED' | 'CANCELLED'): void {
    this.confirmDialog = { visible: true, eventId: id, eventTitle: title, action, loading: false };
  }

  closeConfirm(): void {
    if (!this.confirmDialog.loading) this.confirmDialog.visible = false;
  }

  confirmAction(): void {
    if (!this.confirmDialog.eventId) return;
    this.confirmDialog.loading = true;
    this.processingId = this.confirmDialog.eventId;

    this.updateEventStatus(this.confirmDialog.eventId, this.confirmDialog.action, () => {
      this.confirmDialog.loading = false;
      this.confirmDialog.visible = false;
      this.processingId = null;
    });
  }

  // ════════════════════════════════════════
  // STATUS UPDATE
  // ════════════════════════════════════════

  updateEventStatus(id: number, newStatus: 'ACCEPTED' | 'CANCELLED', onDone?: () => void): void {
    this.eventService.updateStatus(id, newStatus).subscribe({
      next: () => {
        const index = this.allEvents.findIndex(e => e.idEvenement === id);
        if (index !== -1) {
          const ev = this.allEvents[index];
          this.allEvents[index] = { ...ev, statut: newStatus };
          this.applyFiltersAndSort();
          this.showToast(
            newStatus === 'ACCEPTED'
              ? `"${ev.titre}" has been accepted.`
              : `"${ev.titre}" has been cancelled.`,
            newStatus === 'ACCEPTED' ? 'success' : 'error'
          );
        }
        if (onDone) onDone();
      },
      error: () => {
        this.showToast('Update failed. Please try again.', 'error');
        if (onDone) onDone();
      }
    });
  }

  // ════════════════════════════════════════
  // QR MEET — Coach génère le QR du lien Meet
  // Les participants scannent → accès direct au Meet
  // ════════════════════════════════════════

  // Helper — génère l'URL du QR preview pour le template
  getQrPreviewUrl(lienMeet: string): string {
    return `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(lienMeet)}`;
  }

  openQrMeetModal(ev: Evenement): void {
    if (!ev.lienMeet) {
      this.showToast('No meet link configured for this event.', 'error');
      return;
    }
    this.qrMeetModal   = true;
    this.qrMeetLoading = true;
    this.qrMeetImage   = '';
    this.qrMeetLink    = ev.lienMeet;
    this.qrMeetTitre   = ev.titre;
    this.qrMeetEventId = ev.idEvenement;

    // Génération du QR directement depuis le lienMeet (même approche que l'entrepreneur)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ev.lienMeet)}`;
    const img = new Image();
    img.onload = () => {
      this.qrMeetImage   = qrUrl;
      this.qrMeetLoading = false;
    };
    img.onerror = () => {
      // Fallback : utiliser directement l'URL sans vérification
      this.qrMeetImage   = qrUrl;
      this.qrMeetLoading = false;
    };
    img.src = qrUrl;
  }

  closeQrMeetModal(): void {
    this.qrMeetModal   = false;
    this.qrMeetImage   = '';
    this.qrMeetLink    = '';
    this.qrMeetTitre   = '';
    this.qrMeetEventId = null;
  }

  // Ouvrir le lien Meet directement (fallback bouton)
  openMeetLink(): void {
    if (this.qrMeetLink) window.open(this.qrMeetLink, '_blank');
  }

  // ════════════════════════════════════════
  // ACTIVITY REPORT
  // ════════════════════════════════════════

  requestActivityReport(): void {
    this.reportLoading = true;
    this.showToast('Generating your activity report...', 'info');

    this.eventService.generateActivityReport().subscribe({
      next: (response: any) => {
        this.reportLoading = false;
        if (response?.downloadUrl) {
          window.open(response.downloadUrl, '_blank');
          this.showToast('Report ready — download started.', 'success');
        } else {
          this.showToast('Report sent to your email address.', 'success');
        }
      },
      error: () => {
        this.reportLoading = false;
        this.showToast('Failed to generate report. Please try again.', 'error');
      }
    });
  }

  // ════════════════════════════════════════
  // STATS
  // ════════════════════════════════════════

  getStatCount(status: EvenementStatus | 'TOTAL'): number {
    if (status === 'TOTAL') return this.allEvents.length;
    return this.allEvents.filter(e => e.statut === status).length;
  }

  getPlanCount(plan: PlanType): number {
    return this.allEvents.filter(e => e.planType?.toUpperCase() === plan).length;
  }

  getStatusLabel(statut: EvenementStatus | string): string {
    const labels: Record<string, string> = {
      PENDING:   'Pending',
      ACCEPTED:  'Accepted',
      CANCELLED: 'Cancelled'
    };
    return labels[statut] || 'Pending';
  }

  // ════════════════════════════════════════
  // NOTIFICATIONS
  // ════════════════════════════════════════

  checkNotifications(): void {
    const now   = new Date();
    const notifs: Notification[] = [];

    if (this.pendingEvents.length > 0) {
      notifs.push({ message: `${this.pendingEvents.length} event(s) awaiting your validation`, urgency: 'high' });
    }

    const soon = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    this.allEvents
      .filter(ev => { const d = new Date(ev.date); return d >= now && d <= soon && ev.statut === 'ACCEPTED'; })
      .forEach(ev => notifs.push({ message: `Reminder: "${ev.titre}" in less than 24h`, urgency: 'normal' }));

    const thisWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weekCount = this.allEvents.filter(ev => {
      const d = new Date(ev.date); return d > soon && d <= thisWeek && ev.statut === 'ACCEPTED';
    }).length;
    if (weekCount > 0) notifs.push({ message: `${weekCount} accepted event(s) this week`, urgency: 'normal' });

    this.notifications = notifs;
  }

  clearNotifications(): void { this.notifications = []; }

  showToast(message: string, type: 'success' | 'error' | 'info'): void {
    const id = ++this.toastCounter;
    this.toasts.push({ message, type, id });
    setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3800);
  }

  // ════════════════════════════════════════
  // CALENDAR
  // ════════════════════════════════════════

  buildCalendar(): void {
    const year  = this.currentCalDate.getFullYear();
    const month = this.currentCalDate.getMonth();
    const today = new Date();

    const firstDay = new Date(year, month, 1);
    let startDow = firstDay.getDay();
    startDow = startDow === 0 ? 6 : startDow - 1;

    const cells: CalendarCell[] = [];

    for (let i = startDow - 1; i >= 0; i--) {
      const d = new Date(year, month, -i);
      cells.push({ day: d.getDate(), inMonth: false, isToday: false, date: d, events: [] });
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const date    = new Date(year, month, d);
      const isToday = date.toDateString() === today.toDateString();
      const events  = this.allEvents.filter(ev => {
        const evDate = new Date(ev.date);
        const matchPlan = this.planFilter === 'ALL' || ev.planType?.toUpperCase() === this.planFilter;
        return evDate.getFullYear() === year && evDate.getMonth() === month && evDate.getDate() === d && matchPlan;
      });
      cells.push({ day: d, inMonth: true, isToday, date, events });
    }

    while (cells.length % 7 !== 0) {
      const d = new Date(year, month + 1, cells.length - daysInMonth - startDow + 1);
      cells.push({ day: d.getDate(), inMonth: false, isToday: false, date: d, events: [] });
    }

    this.calendarCells = cells;
  }

  prevMonth(): void {
    this.currentCalDate = new Date(this.currentCalDate.getFullYear(), this.currentCalDate.getMonth() - 1, 1);
    this.buildCalendar();
  }

  nextMonth(): void {
    this.currentCalDate = new Date(this.currentCalDate.getFullYear(), this.currentCalDate.getMonth() + 1, 1);
    this.buildCalendar();
  }

  goToday(): void { this.currentCalDate = new Date(); this.buildCalendar(); }

  selectCalEvent(ev: Evenement): void { this.selectedCalEvent = ev; }
}