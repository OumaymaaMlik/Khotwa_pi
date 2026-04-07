import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../core/services/projet.service';
@Component({ selector:'app-coach-startups', templateUrl:'./startups.component.html', styleUrls:['./startups.component.css'] })
export class CoachStartupsComponent implements OnInit {
  constructor(public projetService: ProjetService) {}

  ngOnInit(): void {
    this.projetService.loadCoachAssignedProjects().subscribe({
      error: () => {
        // Keep current UI state if backend data cannot be fetched.
      }
    });
  }

  get projets() { return this.projetService.projets; }
}
