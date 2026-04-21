import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models';

@Component({ selector:'app-login', templateUrl:'./login.component.html', styleUrls:['./login.component.css'] })
export class LoginComponent implements OnInit {
  mode: 'signin' | 'signup' = 'signin';

  email = '';
  password = '';
  firstName = '';
  lastName = '';
  selectedRole: UserRole = 'entrepreneur';
  error = '';

  roles = [
    { role: 'entrepreneur' as UserRole, label: 'Entrepreneur', color: '#2ABFBF', icon: '🚀' },
    { role: 'coach' as UserRole, label: 'Coach / Mentor', color: '#7C5CBF', icon: '🎯' },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.currentUser) {
      this.router.navigateByUrl(this.getRoleRedirect(this.auth.currentUser.role));
    }
  }

  signIn() {
    this.error = '';
    if (!this.email || !this.password) { this.error = 'Please fill in all fields.'; return; }
    this.auth.loginWithEmailAndPassword(this.email, this.password).subscribe({
      next: () => {
        const role = this.auth.currentUser?.role;
        this.router.navigateByUrl(this.getRoleRedirect(role));
      },
      error: (err) => {
        this.error = err?.error?.message || 'Invalid credentials. Please try again.';
      },
    });
  }

  signUp() {
    this.error = '';
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = 'Please fill in all fields.'; return;
    }
    // Prepare correct backend fields
    const registerData = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.email,
      password: this.password,
      role: this.selectedRole.toUpperCase(),
      phoneNumber: '',
      startup: ''
    };
    this.auth.register(registerData).subscribe({
      next: () => {
        // Auto-login after successful registration
        this.auth.loginWithEmailAndPassword(this.email, this.password).subscribe({
          next: () => {
            const role = this.auth.currentUser?.role;
            this.router.navigateByUrl(this.getRoleRedirect(role));
          },
          error: (err) => {
            this.error = err?.error?.message || 'Auto-login failed after registration.';
          }
        });
      },
      error: (err) => {
        this.error = err?.error?.message || 'Registration failed.';
      }
    });
  }

  private getRoleRedirect(role: string | undefined | null): string {
    if (role === 'admin') return '/khotwaadmin';
    if (role === 'coach') return '/coach';
    if (role === 'entrepreneur') return '/entrepreneur';
    return '/';
  }
}
