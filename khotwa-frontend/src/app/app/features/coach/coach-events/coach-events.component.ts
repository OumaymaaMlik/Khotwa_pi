import { Component, OnInit, OnDestroy } from '@angular/core';
import { EvenementService } from '../../../core/services/events.service';
import { Evenement, EvenementStatus, PlanType, EvenementType } from '../../../core/models/evenement.model';

interface Notification {
  message: string;
  urgency: 'high' | 'normal';
}

interface Toast {
  message: string;
  type: 'success' | 'error';
  id: number;
}

interface CalendarCell {
  day: number;
  inMonth: boolean;
  isToday: boolean;
  date: Date;
  events: Evenement[];
}

@Component({
  selector: 'app-coach-events',
  templateUrl: './coach-events.component.html',
  styleUrls: ['./coach-events.component.css']
})
export class CoachEventsComponent implements OnInit, OnDestroy {
  allEvents: Evenement[] = [];
  filteredEvents: Evenement[] = [];
  pendingEvents: Evenement[] = [];
  upcomingEvents: Evenement[] = [];
  loading = true;

  // View
  activeView: 'list' | 'calendar' = 'list';

  // Filters
  statusFilter: EvenementStatus | 'ALL' = 'ALL';
  typeFilter: EvenementType | 'ALL' = 'ALL';
  planFilter: PlanType | 'ALL' = 'ALL';

  // Notifications
  notifications: Notification[] = [];
  toasts: Toast[] = [];
  private toastCounter = 0;
  private notifInterval: any;

  // Calendar
  currentCalDate = new Date();
  calendarCells: CalendarCell[] = [];
  selectedCalEvent: Evenement | null = null;
  readonly weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  constructor(private eventService: EvenementService) {}

  ngOnInit(): void {
    this.loadEvents();
    this.notifInterval = setInterval(() => this.checkNotifications(), 30000);
  }

  ngOnDestroy(): void {
    if (this.notifInterval) clearInterval(this.notifInterval);
  }

  loadEvents(): void {
    this.loading = true;
    this.eventService.getAll().subscribe({
      next: (data: Evenement[]) => {
        this.allEvents = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.refreshData();
        this.buildCalendar();
        this.checkNotifications();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur API:', err);
        this.loading = false;
      }
    });
  }

  refreshData(): void {
    this.pendingEvents = this.allEvents.filter(e => e.statut === 'PENDING' || !e.statut);

    this.filteredEvents = this.allEvents.filter(ev => {
      const matchStatus = this.statusFilter === 'ALL' || ev.statut === this.statusFilter;
      const matchType = this.typeFilter === 'ALL' || ev.type?.toUpperCase() === this.typeFilter;
      const matchPlan = this.planFilter === 'ALL' || ev.planType?.toUpperCase() === this.planFilter;
      return matchStatus && matchType && matchPlan;
    });

    const now = new Date();
    this.upcomingEvents = this.allEvents
      .filter(ev => new Date(ev.date) >= now && ev.statut === 'ACCEPTED')
      .slice(0, 10);

    this.buildCalendar();
  }

  setPlan(p: PlanType | 'ALL'): void { this.planFilter = p; this.refreshData(); }
  setStatus(s: EvenementStatus | 'ALL'): void { this.statusFilter = s; this.refreshData(); }
  setType(t: EvenementType | 'ALL'): void { this.typeFilter = t; this.refreshData(); }

  updateEventStatus(id: number, newStatus: 'ACCEPTED' | 'CANCELLED'): void {
    this.eventService.updateStatus(id, newStatus).subscribe({
      next: () => {
        const index = this.allEvents.findIndex(e => e.idEvenement === id);
        if (index !== -1) {
          const ev = this.allEvents[index];
          this.allEvents[index].statut = newStatus;
          this.refreshData();
          this.showToast(
            newStatus === 'ACCEPTED'
              ? `✅ "${ev.titre}" a été accepté`
              : `❌ "${ev.titre}" a été annulé`,
            newStatus === 'ACCEPTED' ? 'success' : 'error'
          );
        }
      },
      error: () => this.showToast('Erreur lors de la mise à jour', 'error')
    });
  }

  // ─── Stats ───
  getStatCount(status: EvenementStatus | 'TOTAL'): number {
    if (status === 'TOTAL') return this.allEvents.length;
    return this.allEvents.filter(e => e.statut === status).length;
  }

  getPlanCount(plan: PlanType): number {
    return this.allEvents.filter(e => e.planType?.toUpperCase() === plan).length;
  }

  getIcon(type: EvenementType): string {
    const icons: Record<string, string> = { 'FORMATION': '📚', 'WEBINAR': '💻', 'PITCH': '🎤' };
    return icons[type?.toUpperCase()] || '📅';
  }

  getStatusLabel(statut: EvenementStatus | string): string {
    const labels: Record<string, string> = { 'PENDING': 'En attente', 'ACCEPTED': 'Accepté', 'CANCELLED': 'Annulé' };
    return labels[statut] || 'En attente';
  }

  // ─── Notifications ───
  checkNotifications(): void {
    const now = new Date();
    const notifs: Notification[] = [];

    if (this.pendingEvents.length > 0) {
      notifs.push({ message: `${this.pendingEvents.length} événement(s) en attente de validation`, urgency: 'high' });
    }

    const soon = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const todayEvents = this.allEvents.filter(ev => {
      const d = new Date(ev.date);
      return d >= now && d <= soon && ev.statut === 'ACCEPTED';
    });
    todayEvents.forEach(ev =>
      notifs.push({ message: `Rappel: "${ev.titre}" dans moins de 24h`, urgency: 'normal' })
    );

    const thisWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weekEvents = this.allEvents.filter(ev => {
      const d = new Date(ev.date);
      return d > soon && d <= thisWeek && ev.statut === 'ACCEPTED';
    });
    if (weekEvents.length > 0) {
      notifs.push({ message: `${weekEvents.length} événement(s) accepté(s) cette semaine`, urgency: 'normal' });
    }

    this.notifications = notifs;
  }

  clearNotifications(): void { this.notifications = []; }

  showToast(message: string, type: 'success' | 'error'): void {
    const id = ++this.toastCounter;
    this.toasts.push({ message, type, id });
    setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3500);
  }

  // ─── Calendar ───
  buildCalendar(): void {
    const year = this.currentCalDate.getFullYear();
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
      const date = new Date(year, month, d);
      const isToday = date.toDateString() === today.toDateString();
      const events = this.allEvents.filter(ev => {
        const evDate = new Date(ev.date);
        const match = this.planFilter === 'ALL' || ev.planType?.toUpperCase() === this.planFilter;
        return evDate.getFullYear() === year && evDate.getMonth() === month && evDate.getDate() === d && match;
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

  goToday(): void {
    this.currentCalDate = new Date();
    this.buildCalendar();
  }

  selectCalEvent(ev: Evenement): void { this.selectedCalEvent = ev; }
}