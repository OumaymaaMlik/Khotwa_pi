import { Component } from '@angular/core';

interface Event {
  id: string; titre: string; type: string;
  date: string; heure: string; intervenant: string;
  places: number; restantes: number; description: string;
  location: string;
}

@Component({
  selector: 'app-visitor-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class VisitorEventsComponent {
  filtre = 'all';
  search = '';
  selectedEvent: Event | null = null;

  events: Event[] = [
    { id:'ev1', titre:'Pitch Day — Spring 2025', type:'pitch',
      date:'2025-05-10', heure:'14:00', intervenant:'Dr. Ben Salem',
      places:30, restantes:8, location:'KHOTWA HQ, Tunis',
      description:'Present your startup to a panel of expert investors and receive live feedback. A unique opportunity to test your pitch and make connections.' },
    { id:'ev2', titre:'Webinar: Building Your BMC', type:'webinar',
      date:'2025-05-15', heure:'10:00', intervenant:'Sara Coach',
      places:50, restantes:0, location:'Online — Zoom',
      description:'90-minute live session covering the 9 blocks of the Business Model Canvas with real Tunisian startup examples.' },
    { id:'ev3', titre:'Design Thinking Bootcamp', type:'formation',
      date:'2025-05-20', heure:'09:00', intervenant:'Ahmed Mansouri',
      places:20, restantes:5, location:'Co-working Space, Lac 2',
      description:'Full-day hands-on workshop on problem-solving and innovation using the Design Thinking framework. Teams of 4.' },
    { id:'ev4', titre:'Group Coaching Session', type:'coaching',
      date:'2025-06-08', heure:'15:00', intervenant:'KHOTWA Team',
      places:15, restantes:12, location:'KHOTWA HQ, Tunis',
      description:'Monthly collective coaching session for all incubated startups. Share challenges, get peer feedback, and align with your coach.' },
    { id:'ev5', titre:'Legal Workshop: SARL Registration', type:'formation',
      date:'2025-06-12', heure:'10:00', intervenant:'Me. Khaled Feriani',
      places:25, restantes:18, location:'Online — Google Meet',
      description:'Everything you need to know about registering your company in Tunisia: costs, timelines, required documents and common pitfalls.' },
    { id:'ev6', titre:'Demo Day — Q2 2025', type:'pitch',
      date:'2025-06-20', heure:'14:00', intervenant:'Jury KHOTWA',
      places:100, restantes:34, location:'Palais des Congrès, Tunis',
      description:'The biggest KHOTWA event of the semester. 10 startups present their final products to investors, partners and the press.' },
  ];

  typeColors: Record<string, string> = {
    pitch:    'kh-badge--orange',
    webinar:  'kh-badge--teal',
    formation:'kh-badge--violet',
    coaching: 'kh-badge--green',
  };

  typeIcons: Record<string, string> = {
    pitch: '🏆', webinar: '💻', formation: '📚', coaching: '🎯'
  };

  get filteredEvents(): Event[] {
    return this.events.filter(e => {
      const matchType   = this.filtre === 'all' || e.type === this.filtre;
      const matchSearch = !this.search ||
        e.titre.toLowerCase().includes(this.search.toLowerCase()) ||
        e.intervenant.toLowerCase().includes(this.search.toLowerCase());
      return matchType && matchSearch;
    });
  }

  get upcomingCount(): number { return this.events.filter(e => e.restantes > 0).length; }
  get fullCount():     number { return this.events.filter(e => e.restantes === 0).length; }
  get totalSeats():   number { return this.events.reduce((s, e) => s + e.places, 0); }

  openEvent(ev: Event) { this.selectedEvent = ev; }
  closeEvent()         { this.selectedEvent = null; }

  fillRate(ev: Event): number {
    return ev.places > 0 ? Math.round(((ev.places - ev.restantes) / ev.places) * 100) : 0;
  }

  badgeClass(ev: Event): string {
    return ev.restantes === 0 ? 'kh-badge--red'
         : ev.restantes < 5  ? 'kh-badge--amber'
         : 'kh-badge--gray';
  }
}
