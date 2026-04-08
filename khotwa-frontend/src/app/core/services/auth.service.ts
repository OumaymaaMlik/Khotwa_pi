import { Injectable } from '@angular/core';
import { User, UserRole } from '../models';

const MOCK_USERS: User[] = [
  {
    idUser: 1,
    nom: 'Bensalem',
    prenom: 'Karim',
    emailAddress: 'admin@khotwa.tn',
    role: 'admin'
  },
  {
    idUser: 2,
    nom: 'Trabelsi',
    prenom: 'Sara',
    emailAddress: 'sara@startup.tn',
    role: 'entrepreneur',
    startup: 'EduTech Pro',
    planType: 'FREE'
  },
  {
    idUser: 3,
    nom: 'Mansouri',
    prenom: 'Ahmed',
    emailAddress: 'ahmed@coach.tn',
    role: 'coach',
    planType: 'INSTITUTIONAL'
  },
  {
    idUser: 4,
    nom: 'Chamsi',
    prenom: 'Amira',
    emailAddress: 'amirachamsi9@gmail.com',
    role: 'entrepreneur',
    startup: 'TechNova',
    planType: 'FREE'
  },
  {
    idUser: 5,
    nom: 'Ben Yedder',
    prenom: 'Amine',
    emailAddress: 'amine@smartbiz.tn',
    role: 'entrepreneur',
    startup: 'SmartBiz',
    planType: 'PREMIUM'
  }
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: User | null = null;

  constructor() {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      this.currentUser = JSON.parse(saved);
    }
  }

  get role(): UserRole | null {
    return this.currentUser?.role ?? null;
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  get isEntrepreneur(): boolean {
    return this.currentUser?.role === 'entrepreneur';
  }

  get isCoach(): boolean {
    return this.currentUser?.role === 'coach';
  }

  login(role: UserRole): void {
    this.currentUser = MOCK_USERS.find(u => u.role === role) ?? null;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  loginByEmail(email: string): void {
    this.currentUser =
      MOCK_USERS.find(u => (u.emailAddress ?? '').toLowerCase() === email.toLowerCase()) ?? null;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getDefaultRoute(): string {
    const r = this.currentUser?.role;
    return r === 'admin'
      ? '/khotwaadmin/dashboard'
      : r === 'entrepreneur'
      ? '/entrepreneur/dashboard'
      : r === 'coach'
      ? '/coach/dashboard'
      : '/';
  }

  get planType(): string | null {
    return this.currentUser?.planType ?? null;
  }

  get hasActiveSubscription(): boolean {
    if (!this.currentUser) return false;
    if (this.isCoach) return true;
    return this.currentUser.planType !== 'FREE';
  }

  canAccess(requiredPlan: 'FREE' | 'PREMIUM' | 'INSTITUTIONAL'): boolean {
    if (!this.currentUser) return false;
    if (this.isCoach) return true;

    const hierarchy = {
      FREE: 1,
      PREMIUM: 2,
      INSTITUTIONAL: 3
    };

    const userPlan = this.currentUser.planType ?? 'FREE';
    return hierarchy[userPlan] >= hierarchy[requiredPlan];
  }
}