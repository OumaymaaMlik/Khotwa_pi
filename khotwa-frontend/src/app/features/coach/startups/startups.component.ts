import { Component, OnInit } from '@angular/core';
import { ProjetService, ProjetResponseDto } from '../../../core/services/projet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-coach-startups', templateUrl:'./startups.component.html', styleUrls:['./startups.component.css'] })
export class CoachStartupsComponent implements OnInit {

  projets: ProjetResponseDto[] = [];
  loading = false;

  constructor(private projetService: ProjetService, private auth: AuthService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const coachId = this.auth.currentUser?.idUser;
    this.projetService.getProjetsCoach(coachId).subscribe({
      next: p => { this.projets = p; this.loading = false; },
      error: () => this.loading = false
    });
  }
}
