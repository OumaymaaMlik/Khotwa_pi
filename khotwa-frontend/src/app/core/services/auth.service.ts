import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { User, UserRole } from '../models';



interface BackendAuthUser {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: 'ADMIN' | 'ENTREPRENEUR' | 'COACH';
  telephone?: string | null;
  region?: string | null;
  specialite?: string | null;
  disponibilite?: string | null;
  nomAffiche?: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = 'http://localhost:8084/khotwa';

  currentUser: User | null = this.restoreUser();

  constructor(private http: HttpClient) {}

  get role(): UserRole | null { return this.currentUser?.role ?? null; }
  get isAdmin(): boolean { return this.currentUser?.role === 'admin'; }
  get isEntrepreneur(): boolean { return this.currentUser?.role === 'entrepreneur'; }
  get isCoach(): boolean { return this.currentUser?.role === 'coach'; }


  loginWithEmailAndPassword(email: string, password: string): Observable<any> {
    // Backend expects emailAddress
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, { emailAddress: email, password }).pipe(
      tap((res) => {
        if (res && res.token) {
          this.setCurrentUser(this.toFrontendUser(res));
          localStorage.setItem('khotwa-jwt', res.token);
        }
      })
    );
  }

  register(data: any): Observable<any> {
    // data should already have correct backend field names
    return this.http.post<any>(`${this.apiUrl}/api/auth/register`, data);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('khotwa-current-user');
  }

  getDefaultRoute(): string {
    const r = this.currentUser?.role;
    return r === 'admin' ? '/khotwaadmin/dashboard'
      : r === 'entrepreneur' ? '/entrepreneur/dashboard'
      : r === 'coach' ? '/coach/dashboard' : '/';
  }

  private setCurrentUser(user: User): void {
    this.currentUser = user;
    this.persistUser(user);
  }

  private persistUser(user: User | null): void {
    if (!user) {
      localStorage.removeItem('khotwa-current-user');
      return;
    }

    localStorage.setItem('khotwa-current-user', JSON.stringify(user));
  }

  private restoreUser(): User | null {
    const raw = localStorage.getItem('khotwa-current-user');
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as User;
    } catch {
      localStorage.removeItem('khotwa-current-user');
      return null;
    }
  }

  private toFrontendUser(user: any): User {
    const role = (user.role || '').toLowerCase() as UserRole;
    // Mapping compatible équipe : id (string) et idUser (number)
    const id = user.idUser ?? user.id;
    return {
      id: id ? String(id) : '',
      idUser: typeof id === 'number' ? id : Number(id),
      nom: user.nom || user.firstName || '',
      prenom: user.prenom || user.lastName || '',
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email || user.emailAddress || '',
      emailAddress: user.emailAddress,
      role,
      phoneNumber: user.phoneNumber || user.telephone || undefined,
      startup: user.nomAffiche ?? user.startup ?? undefined,
      avatar: user.avatar,
      planType: user.planType,
      pendingPlan: user.pendingPlan,
    };
  }
}
