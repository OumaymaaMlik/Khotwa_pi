import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/user.model';
import {of, switchMap } from 'rxjs';
import { SubscriptionService } from '../../core/services/subscription.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mode: 'signin' | 'signup' = 'signin';

  emailAddress = '';
  password     = '';
  firstName    = '';
  lastName     = '';
  phoneNumber  = '';
  selectedRole: UserRole = 'ENTREPRENEUR';

  error   = '';
  success = '';
  loading = false;

  roles = [
    { role: 'ENTREPRENEUR' as UserRole, label: 'Entrepreneur',   color: '#2ABFBF', icon: '🚀' },
    { role: 'COACH'        as UserRole, label: 'Coach / Mentor',  color: '#0d4a38', icon: '🎯' },
  ];

  constructor(private auth: AuthService, private router: Router  ,  private subscriptionService: SubscriptionService
) {}

  // ── Sign In ── POST /api/auth/login

 signIn(): void {
   this.error = '';
   this.success = '';

   if (!this.emailAddress.trim() || !this.password) {
     this.error = 'Veuillez remplir tous les champs.';
     return;
   }

   this.loading = true;

   this.auth.signIn({
     emailAddress: this.emailAddress.trim(),
     password: this.password
   }).pipe(
     switchMap(() => this.auth.refreshProfile()),
     switchMap(() => {
       const user = this.auth.currentUser;

       if (!user || user.role !== 'ENTREPRENEUR' || !user.idUser) {
         return of(null);
       }

       return this.subscriptionService.getUpgradeSuggestion(user.idUser);
     })
   ).subscribe({
     next: (suggestion: any) => {
       this.loading = false;

       if (suggestion?.shouldSuggest) {
         sessionStorage.setItem('upgradeSuggestion', JSON.stringify(suggestion));
       } else {
         sessionStorage.removeItem('upgradeSuggestion');
       }

       this.router.navigateByUrl(this.auth.getDefaultRoute());
     },
     error: (err: any) => {
       this.loading = false;

       if (this.auth.token) {
         this.router.navigateByUrl(this.auth.getDefaultRoute());
       } else {
         this.error = err?.error?.message || 'Identifiants invalides.';
       }
     }
   });
 }
  // ── Sign Up ── POST /api/auth/register  then auto-login
  signUp() {
    this.error = ''; this.success = '';
    if (!this.emailAddress.trim() || !this.password ||
        !this.firstName.trim()    || !this.lastName.trim()) {
      this.error = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }
    if (this.password.length < 8) {
      this.error = 'Le mot de passe doit contenir au moins 8 caractères.';
      return;
    }

    this.loading = true;
    const body = {
      firstName:    this.firstName.trim(),
      lastName:     this.lastName.trim(),
      emailAddress: this.emailAddress.trim(),
      password:     this.password,
      role:         this.selectedRole,
      phoneNumber:  this.phoneNumber.trim() || null
    };

    this.auth.signUp(body).subscribe({
      next: () => {
        // Register succeeded → auto login
        this.auth.signIn({ emailAddress: body.emailAddress, password: body.password })
          .subscribe({
            next: () => {
              this.loading = false;
              this.router.navigateByUrl(this.auth.getDefaultRoute());
            },
            error: () => {
              // Register OK but login failed → go to login page
              this.loading = false;
              this.mode = 'signin';
              this.success = 'Compte créé ! Connectez-vous maintenant.';
            }
          });
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message ?? 'Inscription échouée. Email déjà utilisé ?';
      }
    });
  }

  continueAsVisitor() {
    this.auth.setVisitorSession();
    this.router.navigateByUrl('/visitor/events');
  }
}
