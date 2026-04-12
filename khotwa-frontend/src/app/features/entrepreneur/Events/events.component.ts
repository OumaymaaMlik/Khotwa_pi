import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { EvenementService } from '../../../core/services/events.service';
import { ReservationService } from '../../../core/services/reservations.service';
import { Evenement } from '../../../core/models/evenement.model';
import { Reservation } from '../../../core/models/Reservations.model';
import { PlanType } from '../../../core/models/user.model';
import { Router } from '@angular/router';

// ─── OTP Step type ───────────────────────────────────────────────────────────
type OtpStep = 'EMAIL_CHECK' | 'OTP_VERIFY' | 'NOT_REGISTERED';

@Component({
  selector: 'app-entrepreneur-evenements',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EntrepreneurEvenementsComponent implements OnInit {

  /* ── UI state ────────────────────────────────────────────────────────────── */
  isPlanSelected    = false;
  selectedPlanView: PlanType | null = null;
  viewMode: 'grid' | 'calendar' = 'grid';
  upgradeToastPlan: string | null = null;

  /* ── Data ────────────────────────────────────────────────────────────────── */
  events:         Evenement[]   = [];
  filteredEvents: Evenement[]   = [];
  bookings:       Reservation[] = [];
  recentBookings: Evenement[]   = [];

  /* ── Modals ──────────────────────────────────────────────────────────────── */
  selectedEvent: Evenement | null = null;
  bookingTarget: Evenement | null = null;

  /* ── OTP Modal ───────────────────────────────────────────────────────────── */
  showOtpModal     = false;
  otpTargetPlan: 'PREMIUM' | 'INSTITUTIONAL' | null = null;
  otpStep: OtpStep = 'EMAIL_CHECK';
  otpEmail         = '';
  otpCode          = '';
  otpInput         = '';
  otpError         = '';
  otpLoading       = false;
  otpResendTimer   = 0;
  private otpResendInterval: any;

  /* ── Navbar block toast ───────────────────────────────────────────────────── */
  navbarBlockToastMsg: string | null = null;

  /* ── Filters ─────────────────────────────────────────────────────────────── */
  searchText:  string = '';
  monthFilter: string = 'ALL';
  typeFilter:  string = 'ALL';

  /* ── Calendar ────────────────────────────────────────────────────────────── */
  calendarYear:   number = new Date().getFullYear();
  calendarMonth:  number = new Date().getMonth();
  calendarDays:   (number | null)[] = [];
  calendarEvents: { [day: number]: Evenement[] } = {};
  calendarDayDetails: Evenement[] | null = null;
  calendarDetailDay:  number | null = null;

  months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  monthsFr = [
    'Janvier','Février','Mars','Avril','Mai','Juin',
    'Juillet','Août','Septembre','Octobre','Novembre','Décembre'
  ];
  weekDays = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

  constructor(
    public  auth:       AuthService,
    private evSvc:      EvenementService,
    private bookingSvc: ReservationService,
    private router:     Router
  ) {}

  ngOnInit(): void {
    const userId = this.auth.currentUser?.idUser;
    if (userId) {
      this.bookingSvc.getReservationsByUser(userId).subscribe({
        next:  data => this.bookings = data,
        error: err  => console.error('Erreur réservations', err)
      });
    }
    this.isPlanSelected   = false;
    this.selectedPlanView = null;
  }

  /* ══════════════════════════════════════════════════════════════════════════
      PLAN SELECTION
     ══════════════════════════════════════════════════════════════════════════ */

  selectPlanView(plan: PlanType, fromNavbar = false): void {

    // ── Règles depuis la NAVBAR ────────────────────────────────────────────
    if (fromNavbar) {
      if (plan !== 'FREE' && this.currentUserPlan === 'FREE') {
        // FREE user → redirige vers hero (3 cards) avec toast d'upgrade
        this.goToHero();
        return;
      }
      if (this.currentUserPlan === 'PREMIUM' && plan !== 'PREMIUM') {
        this.showNavbarBlockToast(plan);
        return;
      }
      if (this.currentUserPlan === 'INSTITUTIONAL' && plan !== 'INSTITUTIONAL') {
        this.showNavbarBlockToast(plan);
        return;
      }
    }

    // ── Règles d'accès ─────────────────────────────────────────────────────
    if (plan === 'FREE') {
      this._enterPlan('FREE');
      return;
    }
    if (plan === 'PREMIUM') {
      if (this.currentUserPlan === 'PREMIUM' || this.currentUserPlan === 'INSTITUTIONAL') {
        this._enterPlan('PREMIUM');
        return;
      }
      this._openOtpModal('PREMIUM');
      return;
    }
    if (plan === 'INSTITUTIONAL') {
      if (this.currentUserPlan === 'INSTITUTIONAL') {
        this._enterPlan('INSTITUTIONAL');
        return;
      }
      this._openOtpModal('INSTITUTIONAL');
      return;
    }
  }

  private _enterPlan(plan: PlanType): void {
    this.selectedPlanView = plan;
    this.isPlanSelected   = true;
    this.resetFiltersOnly();
    this.viewMode = 'grid';
    this.loadEventsByPlan(plan);
  }

  goToHero(): void {
    this.isPlanSelected   = false;
    this.selectedPlanView = null;
    this.events           = [];
    this.filteredEvents   = [];
  }

  /* ══════════════════════════════════════════════════════════════════════════
      NAVBAR SWITCHER — restrictions
     ══════════════════════════════════════════════════════════════════════════ */

  isNavbarBtnBlocked(plan: PlanType): boolean {
    if (this.currentUserPlan === 'FREE')          return plan !== 'FREE';
    if (this.currentUserPlan === 'PREMIUM')       return plan !== 'PREMIUM';
    if (this.currentUserPlan === 'INSTITUTIONAL') return plan !== 'INSTITUTIONAL';
    return false;
  }

  private showNavbarBlockToast(plan: PlanType): void {
    if (this.currentUserPlan === 'FREE') {
      this.navbarBlockToastMsg = '🔒 Mise à niveau requise — Retournez aux plans';
    } else {
      this.navbarBlockToastMsg = `⛔ Votre espace ${this.planLabel} ne permet pas d'accéder à ${plan}`;
    }
    setTimeout(() => { this.navbarBlockToastMsg = null; }, 3500);
  }

  /* ══════════════════════════════════════════════════════════════════════════
      OTP FLOW
     ══════════════════════════════════════════════════════════════════════════ */

  private _openOtpModal(plan: 'PREMIUM' | 'INSTITUTIONAL'): void {
    this.otpTargetPlan = plan;
    this.otpStep       = 'EMAIL_CHECK';
    this.otpEmail      = '';
    this.otpCode       = '';
    this.otpInput      = '';
    this.otpError      = '';
    this.otpLoading    = false;
    this.showOtpModal  = true;
  }

  closeOtpModal(): void {
    this.showOtpModal  = false;
    this.otpTargetPlan = null;
    clearInterval(this.otpResendInterval);
  }

  /**
   * Étape 1 : Vérifier l'email de l'utilisateur.
   *
   * ═══ BACKEND À IMPLÉMENTER ═══════════════════════════════════════════════
   * POST /api/auth/otp/request
   * Body    : { email: string, requiredPlan: 'PREMIUM' | 'INSTITUTIONAL' }
   * Response: { registered: boolean }
   * Logique :
   *   1. Vérifier en DB que l'email existe et que le planType correspond.
   *   2. Si oui : générer un code OTP à 6 chiffres, le stocker dans Redis
   *      (clé = "otp:{email}", TTL = 600s), envoyer l'email via SMTP/SendGrid.
   *   3. Renvoyer { registered: true } ou { registered: false }.
   * ═══════════════════════════════════════════════════════════════════════════
   */
  submitOtpEmail(): void {
    this.otpError = '';
    if (!this.otpEmail.trim() || !this.otpEmail.includes('@')) {
      this.otpError = 'Veuillez saisir un email valide.';
      return;
    }
    this.otpLoading = true;

    // TODO: remplacer par le vrai appel :
    // this.authSvc.requestOtp(this.otpEmail, this.otpTargetPlan!).subscribe({
    //   next: res => {
    //     this.otpLoading = false;
    //     res.registered ? (this.otpStep = 'OTP_VERIFY', this._startResendTimer())
    //                    : (this.otpStep = 'NOT_REGISTERED');
    //   },
    //   error: () => { this.otpLoading = false; this.otpError = 'Erreur serveur.'; }
    // });

    // Simulation — supprimer quand le backend est opérationnel
    setTimeout(() => {
      this.otpLoading = false;
      const isRegistered = !this.otpEmail.toLowerCase().includes('notfound');
      if (isRegistered) {
        this.otpStep = 'OTP_VERIFY';
        this._startResendTimer();
      } else {
        this.otpStep = 'NOT_REGISTERED';
      }
    }, 1200);
  }

  /**
   * Étape 2 : Vérifier le code OTP saisi.
   *
   * ═══ BACKEND À IMPLÉMENTER ═══════════════════════════════════════════════
   * POST /api/auth/otp/verify
   * Body    : { email: string, code: string, plan: 'PREMIUM' | 'INSTITUTIONAL' }
   * Response: { valid: boolean, accessToken?: string }
   * Logique :
   *   1. Récupérer le code stocké dans Redis pour cet email.
   *   2. Comparer avec le code envoyé.
   *   3. Si valide : supprimer le code Redis, retourner un JWT ou confirmer la session.
   *   4. Côté Angular : stocker le token (AuthService) et rediriger.
   * ═══════════════════════════════════════════════════════════════════════════
   */
  submitOtpCode(): void {
    this.otpError = '';
    if (this.otpInput.trim().length !== 6) {
      this.otpError = 'Le code doit contenir exactement 6 chiffres.';
      return;
    }
    this.otpLoading = true;

    // TODO: remplacer par le vrai appel :
    // this.authSvc.verifyOtp(this.otpEmail, this.otpInput, this.otpTargetPlan!).subscribe({
    //   next: res => {
    //     this.otpLoading = false;
    //     if (res.valid) {
    //       clearInterval(this.otpResendInterval);
    //       this.closeOtpModal();
    //       this._enterPlan(this.otpTargetPlan!);
    //     } else {
    //       this.otpError = 'Code incorrect. Vérifiez votre email.';
    //     }
    //   },
    //   error: () => { this.otpLoading = false; this.otpError = 'Erreur serveur.'; }
    // });

    // Simulation — code correct = 123456
    setTimeout(() => {
      this.otpLoading = false;
      if (this.otpInput === '123456') {
        clearInterval(this.otpResendInterval);
        const planToEnter = this.otpTargetPlan!;
        this.closeOtpModal();
        this._enterPlan(planToEnter);
      } else {
        this.otpError = 'Code incorrect. Vérifiez votre email et réessayez.';
      }
    }, 1000);
  }

  /**
   * Renvoi du code OTP.
   *
   * ═══ BACKEND À IMPLÉMENTER ═══════════════════════════════════════════════
   * POST /api/auth/otp/resend
   * Body    : { email: string, plan: 'PREMIUM' | 'INSTITUTIONAL' }
   * Response: { sent: boolean }
   * Logique : Régénérer et renvoyer le code (limiter à 3 tentatives / 10 min).
   * ═══════════════════════════════════════════════════════════════════════════
   */
  resendOtp(): void {
    if (this.otpResendTimer > 0) return;
    this.otpError   = '';
    this.otpInput   = '';
    this.otpLoading = true;
    setTimeout(() => {
      this.otpLoading = false;
      this._startResendTimer();
    }, 800);
  }

  private _startResendTimer(): void {
    this.otpResendTimer = 60;
    clearInterval(this.otpResendInterval);
    this.otpResendInterval = setInterval(() => {
      this.otpResendTimer--;
      if (this.otpResendTimer <= 0) clearInterval(this.otpResendInterval);
    }, 1000);
  }

  goBackToEmailStep(): void {
    this.otpStep  = 'EMAIL_CHECK';
    this.otpInput = '';
    this.otpError = '';
    clearInterval(this.otpResendInterval);
  }

  /* ══════════════════════════════════════════════════════════════════════════
      LOAD EVENTS
     ══════════════════════════════════════════════════════════════════════════ */

  private loadEventsByPlan(plan: PlanType): void {
    this.evSvc.getAll().subscribe({
      next: (data: Evenement[]) => {
        let filtered: Evenement[] = [];
        if (plan === 'FREE') {
          filtered = data.filter(e => e.planType === 'FREE');
        } else if (plan === 'PREMIUM') {
          filtered = data.filter(e => e.planType === 'FREE' || e.planType === 'PREMIUM');
        } else if (plan === 'INSTITUTIONAL') {
          filtered = data.filter(e => e.planType === 'INSTITUTIONAL');
        }
        this.setEvents(filtered);
      },
      error: err => console.error('Erreur lors du chargement des événements', err)
    });
  }

  private setEvents(data: Evenement[]): void {
    this.events         = data;
    this.filteredEvents = data;
    this.buildCalendar();
  }

  /* ══════════════════════════════════════════════════════════════════════════
      SEARCH & FILTERS
     ══════════════════════════════════════════════════════════════════════════ */

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
    if (this.typeFilter !== 'ALL') {
      result = result.filter(e => e.type === this.typeFilter);
    }
    this.filteredEvents = result;
    this.buildCalendar();
  }

  private resetFiltersOnly(): void {
    this.searchText  = '';
    this.monthFilter = 'ALL';
    this.typeFilter  = 'ALL';
  }

  resetFilters(): void {
    this.resetFiltersOnly();
    this.filteredEvents = this.events;
    this.buildCalendar();
  }

  get hasActiveFilters(): boolean {
    return this.searchText.trim() !== '' || this.monthFilter !== 'ALL' || this.typeFilter !== 'ALL';
  }

  /* ══════════════════════════════════════════════════════════════════════════
      BOOKING
     ══════════════════════════════════════════════════════════════════════════ */

  isLocked(_ev: Evenement): boolean { return false; }

  isAlreadyBooked(ev: Evenement): boolean {
    return this.bookings.some(b => b.idEvenement === ev.idEvenement);
  }

  openBookingModal(ev: Evenement): void {
    if (this.isAlreadyBooked(ev) || ev.placesRestantes === 0) return;
    this.bookingTarget = ev;
  }

  confirmBooking(): void {
    const userId = this.auth.currentUser?.idUser;
    const ev = this.bookingTarget;
    if (!userId || !ev) { this.bookingTarget = null; return; }
    this.bookingSvc.addReservation(userId, ev.idEvenement).subscribe({
      next: (r) => {
        this.bookings.push(r);
        this.showToast(ev);
        this.bookingTarget = null;
      },
      error: err => { console.error('Échec réservation', err); this.bookingTarget = null; }
    });
  }

  cancelBooking(ev: Evenement): void {
    const userId = this.auth.currentUser?.idUser;
    if (!userId) return;
    this.bookingSvc.cancelReservationByEvent(userId, ev.idEvenement).subscribe({
      next: () => { this.bookings = this.bookings.filter(b => b.idEvenement !== ev.idEvenement); },
      error: err => console.error('Erreur annulation', err)
    });
  }

  private showToast(ev: Evenement): void {
    this.recentBookings.unshift(ev);
    if (this.recentBookings.length > 3) this.recentBookings.pop();
    setTimeout(() => {
      this.recentBookings = this.recentBookings.filter(b => b.idEvenement !== ev.idEvenement);
    }, 5000);
  }

  /* ══════════════════════════════════════════════════════════════════════════
      CALENDAR
     ══════════════════════════════════════════════════════════════════════════ */

  buildCalendar(): void {
    const year  = this.calendarYear;
    const month = this.calendarMonth;
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
    this.calendarDayDetails = null;
    this.buildCalendar();
  }

  nextMonth(): void {
    if (this.calendarMonth === 11) { this.calendarMonth = 0; this.calendarYear++; }
    else this.calendarMonth++;
    this.calendarDayDetails = null;
    this.buildCalendar();
  }

  isToday(day: number | null): boolean {
    if (!day) return false;
    const t = new Date();
    return t.getFullYear() === this.calendarYear && t.getMonth() === this.calendarMonth && t.getDate() === day;
  }

  getDayEvents(day: number | null): Evenement[] {
    if (!day) return [];
    return this.calendarEvents[day] || [];
  }

  hasDayBooking(day: number | null): boolean {
    const evs = this.getDayEvents(day);
    if (!evs.length) return false;
    for (const e of evs) { if (this.isAlreadyBooked(e)) return true; }
    return false;
  }

  openDayPopup(day: number | null): void {
    if (!day) return;
    const evs = this.getDayEvents(day);
    if (!evs.length) return;
    this.calendarDetailDay  = day;
    this.calendarDayDetails = evs;
  }

  closeDayPopup(): void {
    this.calendarDayDetails = null;
    this.calendarDetailDay  = null;
  }

  /* ══════════════════════════════════════════════════════════════════════════
      HELPERS
     ══════════════════════════════════════════════════════════════════════════ */

  get currentUserPlan(): PlanType {
    return this.auth.currentUser?.planType ?? 'FREE';
  }

  get planLabel(): string {
    const p = this.selectedPlanView ?? this.currentUserPlan;
    return p === 'FREE' ? 'Free' : p === 'PREMIUM' ? 'Premium' : 'Institutionnel';
  }

  get planDescription(): string {
    const p = this.selectedPlanView ?? this.currentUserPlan;
    return p === 'FREE'
      ? 'Événements gratuits'
      : p === 'PREMIUM'
        ? 'Événements Free & Premium'
        : 'Événements Institutionnels';
  }

  get planColorClass(): string {
    return (this.selectedPlanView ?? this.currentUserPlan).toLowerCase();
  }

  isLockedPlan(plan: PlanType): boolean {
    if (plan === 'FREE') return false;
    if (plan === 'PREMIUM') return this.currentUserPlan === 'FREE';
    if (plan === 'INSTITUTIONAL') return this.currentUserPlan !== 'INSTITUTIONAL';
    return false;
  }

  showUpgradeToast(plan: string): void {
    this.upgradeToastPlan = plan;
    setTimeout(() => { this.upgradeToastPlan = null; }, 4000);
  }

  openDetails(ev: Evenement): void { this.selectedEvent = ev; }
  closeDetails(): void { this.selectedEvent = null; }
  closeBookingModal(): void { this.bookingTarget = null; }
  switchView(mode: 'grid' | 'calendar'): void {
    this.viewMode = mode;
    if (mode === 'calendar') this.buildCalendar();
  }

  upgrade(): void { this.router.navigate(['/entrepreneur/pricing']); }
  goBackToPlans(): void { this.goToHero(); }
}