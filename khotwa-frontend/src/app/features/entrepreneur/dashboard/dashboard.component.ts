import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../../../core/services/projet.service';
import { UpgradeSuggestion } from '../../../core/models/subscription.model';
import { SubscriptionService } from '../../../core/services/subscription.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-entrepreneur-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class EntrepreneurDashboardComponent implements OnInit {
  suggestionPopupVisible = false;
  upgradeSuggestion: UpgradeSuggestion | null = null;

  enCours = 2;
  tachesTerminees = 11;
  tachesTotal = 18;
  progression = 54;

  constructor(
    public projetService: ProjetService,
    private router: Router,
    private subscriptionService: SubscriptionService,
    private authService: AuthService
  ) {}

  get projets() {
    return this.projetService.projets;
  }

  ngOnInit(): void {
}}