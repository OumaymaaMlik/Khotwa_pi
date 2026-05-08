// src/app/features/entrepreneur/Events/events.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../../../core/services/auth.service';
import { EvenementService }  from '../../../core/services/events.service';
import { ReservationService } from '../../../core/services/reservations.service';
import { Evenement }          from '../../../core/models/evenement.model';
import {
  Reservation,
  ReservationHistoryDto,
  MyEventsTab
} from '../../../core/models/Reservations.model';
import { PlanType } from '../../../core/models/user.model';

@Component({
  selector:    'app-entrepreneur-evenements',
  templateUrl: './events.component.html',
  styleUrls:   ['./events.component.css']
})
export class EntrepreneurEvenementsComponent implements OnInit {

  readonly CANCEL_WINDOW_HOURS = 24;

  /* ── UI ──────────────────────────────────────────────────────────────────── */
  isPlanSelected      = false;
  selectedPlanView: PlanType | null = null;
  viewMode: 'grid' | 'calendar' = 'grid';
  upgradeToastPlan: string | null = null;
  showUpgradeOverlay = false;

  /* ── Data ────────────────────────────────────────────────────────────────── */
  events:         Evenement[]            = [];
  filteredEvents: Evenement[]            = [];
  bookings:       Reservation[]          = [];
  recentBookings: Evenement[]            = [];

  /* ── Mes Événements (historique) ─────────────────────────────────────────── */
  showMyEventsModal  = false;
  myEventsTab: MyEventsTab = 'UPCOMING';
  myEventsHistory:  ReservationHistoryDto[] = [];
  myEventsLoading   = false;
  myEventsError:    string | null = null;

  /* ── Modals ──────────────────────────────────────────────────────────────── */
  selectedEvent: Evenement | null = null;
  bookingTarget: Evenement | null = null;

  /* ── Toast smart ─────────────────────────────────────────────────────────── */
  toastType:    string | null = null;
  toastMessage  = '';
  toastEvent    = '';

  /* ── QR Code ─────────────────────────────────────────────────────────────── */
  qrCodeModal   = false;
  qrCodeImage   = '';
  qrMeetLink    = '';
  qrMeetTitre   = '';
  qrReservation: Reservation | null = null;

  /* ── Limit error dans modal ──────────────────────────────────────────────── */
  limitErrorMessage: string | null = null;

  /* ── Filtres ─────────────────────────────────────────────────────────────── */
  searchText  = '';
  monthFilter = 'ALL';
  typeFilter  = 'ALL';

  /* ── Calendar ────────────────────────────────────────────────────────────── */
  calendarYear  = new Date().getFullYear();
  calendarMonth = new Date().getMonth();
  calendarDays: (number | null)[]             = [];
  calendarEvents: { [day: number]: Evenement[] } = {};
  calendarDayDetails: Evenement[] | null = null;
  calendarDetailDay:  number     | null = null;

  months   = ['January','February','March','April','May','June',
              'July','August','September','October','November','December'];
  weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

  constructor(
    public  auth:       AuthService,
    private evSvc:      EvenementService,
    private bookingSvc: ReservationService
  ) {}

   private pollingInterval: any;
 ngOnInit(): void {
  this.auth.getMyProfile().subscribe({
    next:  () => this.loadUserBookings(),
    error: ()  => this.loadUserBookings()
  });
  this.isPlanSelected   = false;
  this.selectedPlanView = null;

  // ✅ Polling toutes les 30s pour détecter les promotions waitlist
  this.pollingInterval = setInterval(() => {
    if (this.hasWaitlistBooking()) {
      this.loadUserBookings();
    }
  }, 30000);
}

ngOnDestroy(): void {
  if (this.pollingInterval) clearInterval(this.pollingInterval);
}

// ✅ Helper — vérifie si l'user a au moins une réservation en waitlist
private hasWaitlistBooking(): boolean {
  return this.bookings.some(b => b.status === 'WAITLIST');
}

 private loadUserBookings(): void {
  const userId = this.auth.currentUser?.idUser;
  if (!userId) return;
  this.bookingSvc.getReservationsByUser(userId).subscribe({
    next: data => {
      this.bookings = data;
      // ✅ Si une promotion a eu lieu, recharger aussi les events (places restantes)
      if (this.selectedPlanView) this.loadEventsByPlan(this.selectedPlanView);
    },
    error: err => console.error('Erreur réservations', err)
  });
}

  /* ── Plan ────────────────────────────────────────────────────────────────── */
  selectPlanView(plan: PlanType): void {
    if (this.isLockedPlan(plan)) { this.showUpgradeToast(plan); return; }
    this.selectedPlanView = plan;
    this.isPlanSelected   = true;
    this.resetFiltersOnly();
    this.viewMode = 'grid';
    this.loadEventsByPlan(plan);
  }

  private loadEventsByPlan(plan: PlanType): void {
    this.evSvc.getAll().subscribe({
      next: (data: Evenement[]) => {
        let filtered: Evenement[] = [];
        if      (plan === 'FREE')          filtered = data.filter(e => e.planType === 'FREE');
        else if (plan === 'PREMIUM')       filtered = data.filter(e => e.planType === 'FREE' || e.planType === 'PREMIUM');
        else if (plan === 'INSTITUTIONAL') filtered = data.filter(e => e.planType === 'INSTITUTIONAL');
        this.setEvents(filtered);
      },
      error: err => console.error('Erreur chargement événements', err)
    });
  }

  private setEvents(data: Evenement[]): void {
    this.events = data; this.filteredEvents = data; this.buildCalendar();
  }

  /* ── Filtres ─────────────────────────────────────────────────────────────── */
  applyFilters(): void {
    let result = [...this.events];
    if (this.searchText.trim()) {
      const q = this.searchText.trim().toLowerCase();
      result = result.filter(e =>
        e.titre?.toLowerCase().includes(q) ||
        e.intervenant?.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q)
      );
    }
    if (this.monthFilter !== 'ALL') {
      const m = Number(this.monthFilter);
      result = result.filter(e => new Date(e.date).getMonth() + 1 === m);
    }
    if (this.typeFilter !== 'ALL') result = result.filter(e => e.type === this.typeFilter);
    this.filteredEvents = result;
    this.buildCalendar();
  }

  private resetFiltersOnly(): void { this.searchText = ''; this.monthFilter = 'ALL'; this.typeFilter = 'ALL'; }
  resetFilters(): void { this.resetFiltersOnly(); this.filteredEvents = this.events; this.buildCalendar(); }

  get hasActiveFilters(): boolean {
    return this.searchText.trim() !== '' || this.monthFilter !== 'ALL' || this.typeFilter !== 'ALL';
  }

  /* ── Booking state helpers ───────────────────────────────────────────────── */
getBookingForEvent(ev: Evenement): Reservation | undefined {
  const all = this.bookings.filter(b =>
    (b.idEvenement === ev.idEvenement || b.evenement?.idEvenement === ev.idEvenement) &&
    (b.status === 'CONFIRMED' || b.status === 'WAITLIST' || b.status === 'ATTENDED')
  );

  // ✅ Priorité : CONFIRMED > ATTENDED > WAITLIST
  return all.find(b => b.status === 'CONFIRMED')
      ?? all.find(b => b.status === 'ATTENDED')
      ?? all.find(b => b.status === 'WAITLIST');
}

  isAlreadyBooked(ev: Evenement): boolean { return !!this.getBookingForEvent(ev); }

  isConfirmed(ev: Evenement): boolean {
  return this.getBookingForEvent(ev)?.status === 'CONFIRMED';
}


isOnWaitlist(ev: Evenement): boolean {
  return this.getBookingForEvent(ev)?.status === 'WAITLIST';
}
isAttended(ev: Evenement): boolean {
  return this.getBookingForEvent(ev)?.status === 'ATTENDED';
}

  getWaitlistPosition(ev: Evenement): number | null {
    const b = this.bookings.find(b =>
      (b.idEvenement === ev.idEvenement || b.evenement?.idEvenement === ev.idEvenement) &&
      b.status === 'WAITLIST'
    );
    return b?.waitlistPosition ?? null;
  }

  openQrCode(ev: Evenement): void {
    const booking = this.getBookingForEvent(ev);
    if (!booking || booking.status !== 'CONFIRMED') return;
    this.bookingSvc.getQrCode(booking.idReservation).subscribe({
      next: resp => {
        this.qrCodeImage   = resp.qrCode;
        this.qrMeetLink    = resp.lienMeet;
        this.qrMeetTitre   = resp.titre;
        this.qrReservation = booking;
        this.qrCodeModal   = true;
      },
      error: err => console.error('Erreur QR code', err)
    });
  }

  openQrCodeFromHistory(dto: ReservationHistoryDto): void {
    if (dto.status !== 'CONFIRMED' || !dto.idReservation) return;
    this.bookingSvc.getQrCode(dto.idReservation).subscribe({
      next: resp => {
        this.qrCodeImage = resp.qrCode;
        this.qrMeetLink  = resp.lienMeet;
        this.qrMeetTitre = resp.titre;
        this.qrCodeModal = true;
      },
      error: err => console.error('Erreur QR code', err)
    });
  }

  openTeamsLink(): void { if (this.qrMeetLink) window.open(this.qrMeetLink, '_blank'); }
  closeQrModal(): void { this.qrCodeModal = false; this.qrCodeImage = ''; this.qrMeetLink = ''; this.qrMeetTitre = ''; this.qrReservation = null; }

  /* ── Booking actions ─────────────────────────────────────────────────────── */
  openBookingModal(ev: Evenement): void {
    if (this.isAlreadyBooked(ev)) return;
    this.limitErrorMessage = null;
    this.bookingTarget = ev;
  }

  confirmBooking(): void {
    const userId = this.auth.currentUser?.idUser;
    const ev = this.bookingTarget;
    if (!userId || !ev) { this.bookingTarget = null; return; }

    this.bookingSvc.addReservation(userId, ev.idEvenement).subscribe({
      next: resp => {
        this.bookings.push(resp.reservation);
        this.bookingTarget = null;
        if (resp.status === 'WAITLIST') {
          this.showSmartToast('waitlist', ev.titre, resp.message);
        } else {
          this.showSmartToast('confirmed', ev.titre, resp.message);
          this.recentBookings.unshift(ev);
          if (this.recentBookings.length > 3) this.recentBookings.pop();
          setTimeout(() => {
            this.recentBookings = this.recentBookings.filter(b => b.idEvenement !== ev.idEvenement);
          }, 5000);
        }
        if (this.selectedPlanView) this.loadEventsByPlan(this.selectedPlanView);
      },
      error: err => {
        const msg: string = err?.error?.error || err?.message || 'Booking failed.';
        if (msg.toLowerCase().includes('limit') || msg.toLowerCase().includes('monthly')) {
          this.limitErrorMessage = msg;
        } else {
          this.showSmartToast('error', ev.titre, msg);
          this.bookingTarget = null;
        }
      }
    });
  }

 isCancelling = false;

cancelBooking(ev: Evenement): void {
  if (this.isCancelling) return; // ✅ Bloque les double-clics
  const userId = this.auth.currentUser?.idUser;
  if (!userId) return;
  
  this.isCancelling = true;
  this.bookingSvc.cancelReservationByEvent(userId, ev.idEvenement).subscribe({
    next: () => {
      this.isCancelling = false;
      this.loadUserBookings(); // recharge depuis serveur
      this.showSmartToast('cancelled', ev.titre, 'Reservation cancelled.');
      if (this.selectedPlanView) this.loadEventsByPlan(this.selectedPlanView);
      if (this.showMyEventsModal) this.loadMyEventsTab(this.myEventsTab);
    },
    error: err => {
      this.isCancelling = false;
      const msg = err?.error?.error || err?.message || 'Cancellation failed.';
      this.showSmartToast('error', ev.titre, msg);
    }
  });
}
  /**
   * Acannnuler depuis la modale historique (à partir d'un DTO).
   * Construit un objet Evenement minimal pour réutiliser cancelBooking().
   */
  cancelFromHistory(dto: ReservationHistoryDto): void {
    const userId = this.auth.currentUser?.idUser;
    if (!userId) return;

    if (!this.canCancelFromDto(dto)) {
      this.showSmartToast('error', dto.titre,
        `Cancellations are only allowed up to ${this.CANCEL_WINDOW_HOURS} hours before the event.`);
      return;
    }

    this.bookingSvc.cancelReservationByEvent(userId, dto.idEvenement).subscribe({
      next: () => {
        this.showSmartToast('cancelled', dto.titre, 'Reservation cancelled.');
        // Mettre à jour localement sans rechargement complet
        const entry = this.myEventsHistory.find(h => h.idReservation === dto.idReservation);
        if (entry) entry.status = 'CANCELLED';
        // Recharger l'onglet courant pour maintenir la cohérence
        this.loadMyEventsTab(this.myEventsTab);
        // Aussi recharger les bookings du grid
        this.loadUserBookings();
        if (this.selectedPlanView) this.loadEventsByPlan(this.selectedPlanView);
      },
      error: err => {
        const msg: string = err?.error?.error || err?.message || 'Cancellation failed.';
        this.showSmartToast('error', dto.titre, msg);
      }
    });
  }

  /* ── Toast ───────────────────────────────────────────────────────────────── */
  private showSmartToast(type: string, eventTitle: string, message: string): void {
    this.toastType = type; this.toastMessage = message; this.toastEvent = eventTitle;
    setTimeout(() => { this.toastType = null; }, 6000);
  }
  closeToast(): void { this.toastType = null; }

  /* ── Mes Événements — modal historique ──────────────────────────────────── */
  openMyEventsHistory(): void {
    this.showMyEventsModal = true;
    this.myEventsTab = 'UPCOMING';
    this.loadMyEventsTab('UPCOMING');
  }

  closeMyEventsHistory(): void {
    this.showMyEventsModal = false;
    this.myEventsHistory   = [];
    this.myEventsError     = null;
  }

  setMyEventsTab(tab: MyEventsTab): void {
    this.myEventsTab = tab;
    this.loadMyEventsTab(tab);
  }

  private loadMyEventsTab(tab: MyEventsTab): void {
    const userId = this.auth.currentUser?.idUser;
    if (!userId) return;

    this.myEventsLoading = true;
    this.myEventsError   = null;

    this.bookingSvc.getMyEventsHistory(userId, tab).subscribe({
      next: data => {
        this.myEventsHistory = data;
        this.myEventsLoading = false;
      },
      error: err => {
        this.myEventsError   = err?.error?.error || 'Unable to load history.';
        this.myEventsLoading = false;
      }
    });
  }

  /* ── Helpers annulation depuis DTO ───────────────────────────────────────── */
  canCancelFromDto(dto: ReservationHistoryDto): boolean {
    if (dto.status === 'CANCELLED' || dto.status === 'ATTENDED') return false;
    if (dto.statut  === 'CANCELLED') return false;

    const eventDateTime = this.getDtoEventDateTime(dto);
    const diffMs        = eventDateTime.getTime() - Date.now();
    return diffMs >= this.CANCEL_WINDOW_HOURS * 60 * 60 * 1000;
  }

  private getDtoEventDateTime(dto: ReservationHistoryDto): Date {
    const datePart = String(dto.date).split('T')[0];
    const timePart = dto.heure?.length >= 5 ? dto.heure.substring(0, 5) : '00:00';
    return new Date(`${datePart}T${timePart}`);
  }

  /* ── canCancelBooking (grid) ─────────────────────────────────────────────── */
  canCancelBooking(ev: Evenement): boolean {
    const booking = this.getBookingForEvent(ev);
    if (!booking) return false;
    if (booking.status === 'CANCELLED' || booking.status === 'ATTENDED') return false;
    if (ev.statut === 'CANCELLED') return false;

    const diffMs  = this.getEventDateTime(ev).getTime() - Date.now();
    return diffMs >= this.CANCEL_WINDOW_HOURS * 60 * 60 * 1000;
  }

  private isPastEvent(ev: Evenement): boolean {
    return this.getEventDateTime(ev).getTime() < Date.now();
  }

  private getEventDateTime(ev: Evenement): Date {
    const datePart = String(ev.date).split('T')[0];
    const timePart = ev.heure?.length ? ev.heure : '00:00';
    return new Date(`${datePart}T${timePart}`);
  }

  /* ── Calendar ────────────────────────────────────────────────────────────── */
  buildCalendar(): void {
    const year = this.calendarYear, month = this.calendarMonth;
    const firstDay    = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    this.calendarDays = [];
    for (let i = 0; i < startOffset; i++) this.calendarDays.push(null);
    for (let d = 1; d <= daysInMonth; d++) this.calendarDays.push(d);
    this.calendarEvents = {};
    this.filteredEvents.forEach(ev => {
      const d = new Date(ev.date);
      if (d.getFullYear() === year && d.getMonth() === month) {
        const day = d.getDate();
        if (!this.calendarEvents[day]) this.calendarEvents[day] = [];
        this.calendarEvents[day].push(ev);
      }
    });
  }

  prevMonth(): void {
    if (this.calendarMonth === 0) { this.calendarMonth = 11; this.calendarYear--; }
    else this.calendarMonth--;
    this.calendarDayDetails = null; this.buildCalendar();
  }

  nextMonth(): void {
    if (this.calendarMonth === 11) { this.calendarMonth = 0; this.calendarYear++; }
    else this.calendarMonth++;
    this.calendarDayDetails = null; this.buildCalendar();
  }

  isToday(day: number | null): boolean {
    if (!day) return false;
    const t = new Date();
    return t.getFullYear() === this.calendarYear &&
           t.getMonth()    === this.calendarMonth &&
           t.getDate()     === day;
  }

  getDayEvents(day: number | null): Evenement[] { return day ? (this.calendarEvents[day] || []) : []; }
  hasDayBooking(day: number | null): boolean    { return this.getDayEvents(day).some(e => this.isAlreadyBooked(e)); }

  openDayPopup(day: number | null): void {
    if (!day) return;
    const evs = this.getDayEvents(day);
    if (!evs.length) return;
    this.calendarDetailDay = day; this.calendarDayDetails = evs;
  }
  closeDayPopup(): void { this.calendarDayDetails = null; this.calendarDetailDay = null; }

  /* ── Helpers plan ────────────────────────────────────────────────────────── */
  get currentUserPlan(): PlanType {
    const raw = this.auth.currentUser?.planType;
    if (!raw) return 'FREE';
    const n = String(raw).toUpperCase() as PlanType;
    return (['FREE', 'PREMIUM', 'INSTITUTIONAL'].includes(n)) ? n : 'FREE';
  }

  get planLabel(): string {
    const p = this.selectedPlanView ?? this.currentUserPlan;
    return p === 'FREE' ? 'Free' : p === 'PREMIUM' ? 'Premium' : 'Institutional';
  }

  get planDescription(): string {
    const p = this.selectedPlanView ?? this.currentUserPlan;
    return p === 'FREE' ? 'Free events' : p === 'PREMIUM' ? 'Free & Premium events' : 'Institutional events';
  }

  get planColorClass(): string { return (this.selectedPlanView ?? this.currentUserPlan).toLowerCase(); }

  isLockedPlan(plan: PlanType): boolean {
    const u = this.currentUserPlan;
    if (plan === 'FREE')          return false;
    if (plan === 'PREMIUM')       return u === 'FREE';
    if (plan === 'INSTITUTIONAL') return u !== 'INSTITUTIONAL';
    return false;
  }

  showUpgradeToast(plan: string): void {
    this.upgradeToastPlan = plan;
    setTimeout(() => { this.upgradeToastPlan = null; }, 4000);
  }

  upgrade(): void { window.location.href = 'http://localhost:4200/#/entrepreneur/profile'; }
  openDetails(ev: Evenement): void { this.selectedEvent = ev; }
  closeDetails(): void { this.selectedEvent = null; }
  closeBookingModal(): void { this.bookingTarget = null; this.limitErrorMessage = null; }
  switchView(mode: 'grid' | 'calendar'): void { this.viewMode = mode; if (mode === 'calendar') this.buildCalendar(); }
  isLocked(_ev: Evenement): boolean { return false; }

  /* ── Getters labels statut pour template ─────────────────────────────────── */
  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'Confirmed', WAITLIST: 'Waitlist',
      ATTENDED:  'Attended',  CANCELLED: 'Cancelled', PENDING: 'Pending'
    };
    return map[status] ?? status;
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      CONFIRMED: 'ev-booked-badge--confirmed',
      WAITLIST:  'ev-booked-badge--waitlist',
      ATTENDED:  'ev-booked-badge--attended',
      CANCELLED: 'ev-booked-badge--cancelled',
      PENDING:   'ev-booked-badge--waitlist'
    };
    return map[status] ?? '';
  }
}