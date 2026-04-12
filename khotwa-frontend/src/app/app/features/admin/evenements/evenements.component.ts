import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../../core/services/events.service';
import { AuthService } from '../../../core/services/auth.service';
import { Evenement, EvenementType, PlanType , EvenementStatus} from '../../../core/models/evenement.model';

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
  readonly monthNames = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  readonly dayNames = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  selectedDay: string | null = null;

  // ── Modals ───────────────────────────────────────────
  showCreate = false;
  showEdit = false;
  showDelete = false;
  
  newEvent: Evenement = this.emptyForm();
  editForm: Evenement = this.emptyForm();
  editTarget: Evenement | null = null;
  deleteTarget: Evenement | null = null;
  
  createErrors: Partial<Record<keyof Evenement, string>> = {};
  editErrors: Partial<Record<keyof Evenement, string>> = {};

  constructor(
    private eventService: EvenementService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.isLoading = true;
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = Array.isArray(data) ? data : [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur chargement:', err);
        this.events = [];
        this.isLoading = false;
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

  // ── SEARCH + FILTER ──────────────────────────────────
  get filteredEvents(): Evenement[] {
    let list = this.events;
    if (this.filtre !== 'TOUS') list = list.filter(e => e.type?.toUpperCase() === this.filtre);
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
    return list;
  }

  clearSearch(): void { this.searchQuery = ''; }

  // ── CALENDAR LOGIC ───────────────────────────────────
  toggleView(): void {
    this.viewMode = this.viewMode === 'grid' ? 'calendar' : 'grid';
    this.selectedDay = null;
  }
  prevMonth(): void {
    if (this.calendarMonth === 0) { this.calendarMonth = 11; this.calendarYear--; }
    else this.calendarMonth--;
  }
  nextMonth(): void {
    if (this.calendarMonth === 11) { this.calendarMonth = 0; this.calendarYear++; }
    else this.calendarMonth++;
  }
  goToToday(): void {
    const n = new Date();
    this.calendarYear = n.getFullYear();
    this.calendarMonth = n.getMonth();
    this.selectedDay = null;
  }
  get calendarCells(): (Date | null)[] {
    const first = new Date(this.calendarYear, this.calendarMonth, 1);
    const startDay = (first.getDay() + 6) % 7;
    const total = new Date(this.calendarYear, this.calendarMonth + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(new Date(this.calendarYear, this.calendarMonth, d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }
  dateKey(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2,'0');
    const d = String(date.getDate()).padStart(2,'0');
    return `${y}-${m}-${d}`;
  }
  eventsForDay(date: Date): Evenement[] {
    const key = this.dateKey(date);
    return this.filteredEvents.filter(e => e.date === key);
  }
  isToday(date: Date): boolean {
    const t = new Date();
    return date.getDate() === t.getDate() && date.getMonth() === t.getMonth() && date.getFullYear() === t.getFullYear();
  }
  selectDay(date: Date): void {
    const key = this.dateKey(date);
    this.selectedDay = this.selectedDay === key ? null : key;
  }
  get selectedDayEvents(): Evenement[] {
    return this.selectedDay ? this.filteredEvents.filter(e => e.date === this.selectedDay) : [];
  }
  get selectedDayLabel(): string {
    if (!this.selectedDay) return '';
    const d = new Date(this.selectedDay + 'T00:00:00');
    return d.toLocaleDateString('fr-FR',{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
  }
  hasEventOnDay(date: Date): boolean { return this.eventsForDay(date).length > 0; }

  // ── CRUD ─────────────────────────────────────────────
  openCreate(): void { 
    this.newEvent = this.emptyForm(); 
    this.createErrors = {}; 
    this.showCreate = true; 
  }

submitCreate(): void {
  if (!this.validateForm(this.newEvent, 'create')) return;

  const { idEvenement, ...dataToSend } = this.newEvent;

  const payload = {
    ...dataToSend,
    type: this.newEvent.type.toUpperCase(),
    planType: this.newEvent.planType.toUpperCase(),
    heure: this.formatHeure(this.newEvent.heure),
    placesTotal: Number(this.newEvent.placesTotal),
    placesRestantes: Number(this.newEvent.placesTotal),
    creator: { idUser: 1 }
  };

  this.eventService.create(payload as any).subscribe({
    next: (res) => {
      console.log('Succès !', res);
      this.showCreate = false;        // ← fermer D'ABORD
      this.newEvent = this.emptyForm();
      this.createErrors = {};
      this.refresh();                 // ← puis recharger
    },
    error: (err) => {
      console.error('Erreur:', err);
      // Si statut 200 mais parsing JSON échoue → l'événement est quand même créé
      if (err.status === 200) {
        this.showCreate = false;
        this.newEvent = this.emptyForm();
        this.createErrors = {};
        this.refresh();               // ← recharger quand même
      } else {
        alert("Erreur lors de l'ajout. Vérifiez la console.");
      }
    }
  });
}
  openEdit(ev: Evenement): void { 
    this.editTarget = ev; 
    this.editForm = JSON.parse(JSON.stringify(ev)); // Deep copy
    this.editErrors = {}; 
    this.showEdit = true; 
  }

  submitEdit(): void {
    if (!this.validateForm(this.editForm, 'edit') || !this.editTarget?.idEvenement) return;
    
    // Protection : On ne peut pas mettre moins de places totales que de gens déjà inscrits
    const inscritsActuels = this.editTarget.placesTotal - this.editTarget.placesRestantes;
    if (this.editForm.placesTotal < inscritsActuels) {
        this.editErrors.placesTotal = `Minimum ${inscritsActuels} places (déjà réservées)`;
        return;
    }

    // Recalcul des places restantes
    const diff = this.editForm.placesTotal - this.editTarget.placesTotal;
    const payload: any = { 
      ...this.editForm, 
      type: this.editForm.type.toUpperCase(), 
      heure: this.formatHeure(this.editForm.heure),
      placesRestantes: this.editTarget.placesRestantes + diff
    };

    this.eventService.update(this.editTarget.idEvenement, payload).subscribe({
      next: () => { this.refresh(); this.showEdit = false; },
      error: (err) => alert('Erreur : ' + (err.error?.message || err.message))
    });
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.idEvenement) return;
    this.eventService.delete(this.deleteTarget.idEvenement).subscribe({
      next: () => { this.refresh(); this.showDelete = false; },
      error: (err) => alert('Erreur : ' + (err.error?.message || err.message))
    });
  }
  

  // ── UTILS ─────────────────────────────────────────────
  badgeClass(type: string): string {
    const t = type?.toUpperCase();
    if (t === 'PITCH') return 'kh-badge--orange';
    if (t === 'WEBINAR') return 'kh-badge--teal';
    if (t === 'FORMATION') return 'kh-badge--violet';
    if (t === 'COACHING') return 'kh-badge--green';
    return 'kh-badge--gray';
  }

 // Utilisez le type EvenementStatus défini dans votre modèle
changeStatus(ev: Evenement, nouveauStatut: EvenementType): void {
  if (!ev.idEvenement) return;

  this.eventService.updateStatus(ev.idEvenement, nouveauStatut).subscribe({
    next: () => {
      this.refresh(); // Recharge la liste pour voir le changement de couleur/statut
    },
    error: (err) => {
      console.error('Erreur statut:', err);
      alert('Erreur changement statut : ' + (err.error?.message || err.message));
    }
  });
}

  placeBadgeClass(restantes: number): string {
    if (restantes === 0) return 'kh-badge--red';
    if (restantes < 5) return 'kh-badge--amber';
    return 'kh-badge--gray';
  }

  typeColor(type: string): string {
    const t = type?.toUpperCase();
    if (t === 'PITCH') return '#E8622A';
    if (t === 'WEBINAR') return '#0d9488';
    if (t === 'FORMATION') return '#7c3aed';
    if (t === 'COACHING') return '#16a34a';
    return '#94a3b8';
  }

  typeLabel(type: string): string {
    return type ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() : '';
  }

  private emptyForm(): Evenement {
    return {
      idEvenement: 0, titre: '', description: '', type: 'FORMATION' as EvenementType,
      date: '', heure: '', intervenant: '', lienMeet: '',
      placesTotal: 0, placesRestantes: 0, statut: 'PENDING', planType: 'FREE' as PlanType
    };
  }
private validateForm(form: Evenement, target: 'create' | 'edit'): boolean {
  const errors: Partial<Record<keyof Evenement, string>> = {};
  if (!form.titre?.trim()) errors.titre = 'Titre requis';
  if (!form.description?.trim()) errors.description = 'Description requise';
  if (!form.intervenant?.trim()) errors.intervenant = 'Intervenant requis'; // Ajouté
  if (!form.date) errors.date = 'Date requise';
  if (!form.heure) errors.heure = 'Heure requise';
  if (form.placesTotal <= 0) errors.placesTotal = 'Doit être > 0';
  
  if (target === 'create') this.createErrors = errors;
  else this.editErrors = errors;
  
  return Object.keys(errors).length === 0;
}


  private formatHeure(heure: string): string {
    if (!heure) return '';
    return heure.length === 5 ? `${heure}:00` : heure;
  }
}