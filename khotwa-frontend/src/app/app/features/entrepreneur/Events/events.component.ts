import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { EvenementService } from '../../../core/services/events.service';
import { ReservationService } from '../../../core/services/reservations.service';
import { Evenement } from '../../../core/models/evenement.model';
import { Reservation } from '../../../core/models/Reservations.model';
import { PlanType } from '../../../core/models/user.model';

@Component({
  selector: 'app-entrepreneur-evenements',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EntrepreneurEvenementsComponent implements OnInit {

  /* ---- UI state ---- */
  showPlanSelection = false;
  isPlanSelected    = false;

  /* ---- Data ---- */
  events:         Evenement[]   = [];
  filteredEvents: Evenement[]   = [];
  bookings:       Reservation[] = [];   // réservations confirmées
  recentBookings: Evenement[]   = [];   // toasts (3 derniers max)

  /* ---- Modals ---- */
  selectedEvent: Evenement | null = null;
  bookingTarget: Evenement | null = null;

  /* ---- Filters ---- */
  monthFilter: string = 'ALL';
  typeFilter:  string = 'ALL';

  months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  constructor(
    public  auth:       AuthService,
    private evSvc:      EvenementService,
    private bookingSvc: ReservationService
  ) {}

  ngOnInit(): void {
    const userId = this.auth.currentUser?.idUser;
    
    // 1. Charger les réservations existantes
    if (userId) {
      this.bookingSvc.getReservationsByUser(userId).subscribe({
        next:  data => this.bookings = data,
        error: err  => console.error('Erreur chargement réservations', err)
      });
    }

    // 2. Charger les événements par défaut selon le plan de l'utilisateur
    this.loadEventsByPlan(this.currentUserPlan);
  }

  /* ====================================================
      PLAN SELECTION & LOADING
     ==================================================== */

  togglePlanSelector(): void {
    this.showPlanSelection = !this.showPlanSelection;
  }

  selectPlanView(plan: PlanType): void {
    this.isPlanSelected    = true;
    this.showPlanSelection = false;
    this.loadEventsByPlan(plan);
  }

  private loadEventsByPlan(plan: PlanType): void {
    const userId = this.auth.currentUser?.idUser;
    if (!userId && plan !== 'FREE') return;

    if (plan === 'FREE') {
      this.evSvc.getFreeEvents().subscribe({
        next:  data => this.setEvents(data),
        error: err  => console.error('Erreur chargement free events', err)
      });
    } else {
      // Pour PREMIUM ou INSTITUTIONAL
      this.evSvc.getVisibleEventsByPlan(userId!).subscribe({
        next:  data => this.setEvents(data),
        error: err  => console.error('Erreur chargement events par plan', err)
      });
    }
  }

  private setEvents(data: Evenement[]): void {
    this.events         = data;
    this.filteredEvents = data;
  }

  /* ====================================================
      SEARCH & FILTERS
     ==================================================== */

  onSearch(): void {
    const userId = this.auth.currentUser?.idUser;
    
    // Nettoyage des filtres pour le service
    const month = this.monthFilter === 'ALL' ? null : Number(this.monthFilter);
    const type = this.typeFilter === 'ALL' ? undefined : this.typeFilter;

    if (this.currentUserPlan === 'FREE') {
      this.evSvc.searchFreeEvents(month, type).subscribe({
        next: data => this.filteredEvents = data,
        error: err => console.error('Erreur recherche FREE', err)
      });
    } else if (userId) {
      this.evSvc.searchEventsByPlan(userId, month, type).subscribe({
        next: data => this.filteredEvents = data,
        error: err => console.error('Erreur recherche par Plan', err)
      });
    }
  }

  resetFilters(): void {
    this.monthFilter    = 'ALL';
    this.typeFilter     = 'ALL';
    this.filteredEvents = this.events;
  }

  /* ====================================================
      ACCESS CONTROL & BOOKING
     ==================================================== */

  isLocked(ev: Evenement): boolean {
  // 1. Si l'événement n'a pas de plan spécifié ou est gratuit, il n'est jamais verrouillé
  if (!ev.planType || ev.planType === 'FREE') {
    return false;
  }

  // 2. Si l'utilisateur est en mode FREE, il ne peut pas accéder aux autres types (PREMIUM, etc.)
  if (this.currentUserPlan === 'FREE') {
    return true; 
  }

  // 3. Logique additionnelle : un utilisateur PREMIUM ne peut pas voir l'INSTITUTIONAL (si applicable)
  if (this.currentUserPlan === 'PREMIUM' && ev.planType === 'INSTITUTIONAL') {
    return true;
  }

  return false;
}

  isAlreadyBooked(ev: Evenement): boolean {
    return this.bookings.some(b => b.idEvenement === ev.idEvenement);
  }

  openBookingModal(ev: Evenement): void {
    if (this.isAlreadyBooked(ev) || this.isLocked(ev)) return;
    this.bookingTarget = ev;
  }

  confirmBooking(): void {
    const userId = this.auth.currentUser?.idUser;
    const ev = this.bookingTarget;

    if (!userId || !ev) {
      this.bookingTarget = null;
      return;
    }

    this.bookingSvc.addReservation(userId, ev.idEvenement).subscribe({
      next: (reservation) => {
        this.bookings.push(reservation);
        this.showToast(ev);
        this.bookingTarget = null;
      },
      error: err => {
        console.error('Échec de la réservation', err);
        this.bookingTarget = null;
      }
    });
  }

  private showToast(ev: Evenement): void {
    this.recentBookings.unshift(ev);
    if (this.recentBookings.length > 3) this.recentBookings.pop();

    setTimeout(() => {
      this.recentBookings = this.recentBookings.filter(b => b.idEvenement !== ev.idEvenement);
    }, 5000);
  }

  /* ====================================================
      HELPERS
     ==================================================== */

  get currentUserPlan(): PlanType {
    return this.auth.currentUser?.planType ?? 'FREE';
  }

  openDetails(ev: Evenement): void {
    this.selectedEvent = ev;
  }

  closeDetails(): void {
    this.selectedEvent = null;
  }

  closeBookingModal(): void {
    this.bookingTarget = null;
  }

  upgrade(): void {
    window.location.href = '/entrepreneur/pricing';
  }
}