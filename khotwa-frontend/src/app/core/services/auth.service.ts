import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { User, UserRole } from '../models';

const MOCK_USERS: User[] = [
  { id: 'u1', nom: 'Bensalem', prenom: 'Karim', email: 'admin@khotwa.tn', role: 'admin' },
  { id: 'u2', nom: 'Trabelsi', prenom: 'Sara', email: 'sara@startup.tn', role: 'entrepreneur', startup: 'EduTech Pro', planType: 'FREE' as const },
  { id: 'u3', nom: 'Mansouri', prenom: 'Ahmed', email: 'ahmed@coach.tn', role: 'coach' },
];

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

  loginWithEmail(email: string): Observable<User> {
    const params = new HttpParams().set('email', email.trim());
    return this.http.post<BackendAuthUser>(`${this.apiUrl}/login`, null, { params }).pipe(
      map(user => this.toFrontendUser(user)),
      tap(user => this.setCurrentUser(user))
    );
  }

  login(role: UserRole): void {
    this.currentUser = MOCK_USERS.find(u => u.role === role) ?? null;
    this.persistUser(this.currentUser);
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
