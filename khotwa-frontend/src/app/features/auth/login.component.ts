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
    this.auth.loginWithEmail(this.email).subscribe({
      next: () => this.router.navigateByUrl(this.auth.getDefaultRoute()),
      error: () => {
        this.error = 'Invalid credentials. Try admin@khotwa.tn, sara@startup.tn, or ahmed@coach.tn.';
      },
    });
  }

  signUp() {
    this.error = '';
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = 'Please fill in all fields.'; return;
    }
    // Mock registration: log in with chosen role
    this.auth.login(this.selectedRole);
    this.router.navigateByUrl(this.auth.getDefaultRoute());
  }
}
