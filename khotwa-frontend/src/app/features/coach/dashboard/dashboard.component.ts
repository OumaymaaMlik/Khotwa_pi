import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../core/services/projet.service';
@Component({ selector:'app-coach-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./dashboard.component.css'] })
export class CoachDashboardComponent implements OnInit {
  constructor(public projetService: ProjetService) {}

  ngOnInit(): void {
    this.projetService.loadCoachAssignedProjects().subscribe({
      error: () => {
        // Keep current UI state if backend data cannot be fetched.
      }
    });
  }

  get projets() { return this.projetService.projets; }
  validations = [
    {id:'v1',task:'Prototype UI — E-Learning',startup:'EduTech Pro (Sara)',doc:'maquette_v2.pdf'},
    {id:'v2',task:'Tests QA HealthMobile',startup:'HealthMobile (Sara)',doc:'rapport_tests.pdf'},
  ];
}
