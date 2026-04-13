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
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, { email, password }).pipe(
      tap(() => {
        // Optionally fetch user profile after login if needed
        this.setCurrentUser({ id: email, nom: '', prenom: '', email, role: 'entrepreneur' });
      })
    );
  }

  register(data: { firstName: string; middleName: string; email: string; password: string; role: string; birthday?: string }): Observable<any> {
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

  private toFrontendUser(user: BackendAuthUser): User {
    const role = user.role.toLowerCase() as UserRole;
    return {
      id: String(user.id),
      idUser: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      role,
      phoneNumber: user.telephone ?? undefined,
      startup: user.nomAffiche ?? undefined,
    };
  }
}
