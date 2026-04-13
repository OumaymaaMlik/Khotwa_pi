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
      this.router.navigateByUrl(this.auth.getDefaultRoute());
    }
  }

  signIn() {
    this.error = '';
    if (!this.email || !this.password) { this.error = 'Please fill in all fields.'; return; }
    this.auth.loginWithEmailAndPassword(this.email, this.password).subscribe({
      next: () => this.router.navigateByUrl(this.auth.getDefaultRoute()),
      error: () => {
        this.error = 'Invalid credentials. Please try again.';
      },
    });
  }

  signUp() {
    this.error = '';
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = 'Please fill in all fields.'; return;
    }
    this.auth.register({
      firstName: this.firstName,
      middleName: this.lastName,
      email: this.email,
      password: this.password,
      role: this.selectedRole,
    }).subscribe({
      next: () => {
        this.mode = 'signin';
        this.error = 'Registration successful. Please check your email.';
      },
      error: (err) => {
        this.error = err?.error || 'Registration failed.';
      }
    });
  }
}
