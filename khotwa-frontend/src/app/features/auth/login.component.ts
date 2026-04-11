import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/user.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mode: 'signin' | 'signup' = 'signin';

  emailAddress = '';
  password     = '';
  firstName    = '';
  lastName     = '';
  selectedRole: UserRole = 'ENTREPRENEUR';

  error   = '';
  loading = false;

  roles = [
    { role: 'ENTREPRENEUR' as UserRole, label: 'Entrepreneur', color: '#2ABFBF', icon: '🚀' },
    { role: 'COACH'        as UserRole, label: 'Coach / Mentor', color: '#7C5CBF', icon: '🎯' },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  signIn(): void {
    this.error = '';
    if (!this.emailAddress || !this.password) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }

    this.loading = true;

    // Login → token stocké → refreshProfile avec le token
    this.auth.login({ emailAddress: this.emailAddress, password: this.password }).pipe(
      switchMap(() => this.auth.refreshProfile())
    ).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl(this.auth.getDefaultRoute());
      },
      error: (err: any) => {
        this.loading = false;
        // Si refreshProfile échoue mais le login a réussi, on navigue quand même
        if (this.auth.token) {
          this.router.navigateByUrl(this.auth.getDefaultRoute());
        } else {
          this.error = typeof err === 'string' ? err : 'Identifiants invalides.';
        }
      },
    });
  }

  signUp(): void {
    this.error = '';
    if (!this.emailAddress || !this.password || !this.firstName || !this.lastName) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }

    this.loading = true;

    this.auth.register({
      firstName:    this.firstName,
      lastName:     this.lastName,
      emailAddress: this.emailAddress,
      password:     this.password,
      role:         this.selectedRole,
    }).pipe(
      switchMap(() => this.auth.login({ emailAddress: this.emailAddress, password: this.password })),
      switchMap(() => this.auth.refreshProfile())
    ).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl(this.auth.getDefaultRoute());
      },
      error: (err: any) => {
        this.loading = false;
        // Si refreshProfile échoue mais le login a réussi, on navigue quand même
        if (this.auth.token) {
          this.router.navigateByUrl(this.auth.getDefaultRoute());
        } else {
          this.error = typeof err === 'string' ? err : (err?.error?.message || 'Erreur lors de la création du compte.');
        }
      },
    });
  }
}