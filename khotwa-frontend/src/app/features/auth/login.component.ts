import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mode: 'signin' | 'signup' = 'signin';

  // ── Champs du formulaire ─────────────────────────────────────────
  emailAddress = '';   // FIX: était "email" mais le HTML bindait "emailAddress"
  password     = '';
  firstName    = '';
  lastName     = '';
  phoneNumber  = '';
  selectedRole: UserRole = 'ENTREPRENEUR';

  error   = '';
  success = '';
  loading = false;

  roles = [
    { role: 'ENTREPRENEUR' as UserRole, label: 'Entrepreneur',  color: '#2ABFBF', icon: '🚀' },
    { role: 'COACH'        as UserRole, label: 'Coach / Mentor', color: '#0d4a38', icon: '🎯' },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  // ── Sign In ──────────────────────────────────────────────────────
  signIn() {
    this.error = ''; this.success = '';
    if (!this.emailAddress.trim() || !this.password) {
      this.error = 'Please fill in all fields.';
      return;
    }
    this.loading = true;
    this.auth.signIn({ emailAddress: this.emailAddress.trim(), password: this.password })
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl(this.auth.getDefaultRoute());
        },
        error: (err) => {
          this.loading = false;
          this.error = err.error?.message || err.error?.data?.emailAddress
                    || 'Invalid credentials. Please try again.';
        }
      });
  }

  // ── Sign Up ──────────────────────────────────────────────────────
  signUp() {
    this.error = ''; this.success = '';
    if (!this.emailAddress.trim() || !this.password || !this.firstName.trim() || !this.lastName.trim()) {
      this.error = 'Please fill in all required fields.';
      return;
    }
    if (this.password.length < 8) {
      this.error = 'Password must be at least 8 characters.';
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
        this.loading = false;
        this.router.navigateByUrl(this.auth.getDefaultRoute());
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Registration failed. Email may already be in use.';
      }
    });
  }

  // ── Visitor (no account needed) ──────────────────────────────────
  continueAsVisitor() {
    // Visitor = accès local sans appel backend
    this.auth.setVisitorSession();
    this.router.navigateByUrl('/visitor/events');
  }
}
