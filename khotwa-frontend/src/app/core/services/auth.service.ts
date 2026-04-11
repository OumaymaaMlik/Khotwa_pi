import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User, UserRole } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API = 'http://localhost:8084/khotwa/api/users';

  private _currentUser: User | null = null;

  constructor(private http: HttpClient) {
    this.loadSession();
  }

  // ── Accesseurs ────────────────────────────────────────────────────
  get currentUser(): User | null { return this._currentUser; }
  get role(): UserRole | null    { return this._currentUser?.role ?? null; }

  get isAdmin():        boolean { return this.role === 'ADMIN'; }
  get isEntrepreneur(): boolean { return this.role === 'ENTREPRENEUR'; }
  get isCoach():        boolean { return this.role === 'COACH'; }
  get isVisitor():      boolean { return this.role === 'VISITOR'; }

  // ── Sign In ───────────────────────────────────────────────────────
  signIn(credentials: { emailAddress: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.API}/signin`, credentials).pipe(
      tap(res => {
        if (res.success && res.data) {
          // Backend signin → { token, userId, role, profile }
          this._saveSignInData(res.data);
        }
      })
    );
  }

  // ── Sign Up ───────────────────────────────────────────────────────
  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${this.API}/signup`, userData).pipe(
      tap(res => {
        if (res.success && res.data) {
          // Backend signup → { idUser, firstName, lastName, emailAddress, role, planType... }
          // Il n'y a pas de token dans le signup → on fait un signin automatiquement
          // après avoir sauvegardé le profil reçu
          this._saveSignUpData(res.data, userData.role);
        }
      })
    );
  }

  // ── Visitor local (sans backend) ─────────────────────────────────
  setVisitorSession(): void {
    const visitor: User = {
      idUser: 0,
      id: 'visitor',
      firstName: 'Guest',
      lastName:  'Visitor',
      emailAddress: '',
      role: 'VISITOR',
    };
    this._currentUser = visitor;
    localStorage.setItem('user_role',    'VISITOR');
    localStorage.setItem('user_id',      '0');
    localStorage.setItem('user_token',   'VISITOR');
    localStorage.setItem('user_profile', JSON.stringify(visitor));
  }

  // ── Logout ────────────────────────────────────────────────────────
  logout(): void {
    this._currentUser = null;
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_profile');
  }

  // ── Route par défaut selon le rôle ───────────────────────────────
  getDefaultRoute(): string {
    switch (this.role) {
      case 'ADMIN':        return '/khotwaadmin/dashboard';
      case 'ENTREPRENEUR': return '/entrepreneur/dashboard';
      case 'COACH':        return '/coach/dashboard';
      case 'VISITOR':      return '/visitor/events';
      default:             return '/login';
    }
  }

  // ── Internals ─────────────────────────────────────────────────────

  /**
   * Cas SIGN IN — le backend retourne :
   * { success, message, data: { token, userId, role, profile: UserView } }
   */
  private _saveSignInData(data: any): void {
    const profile = data.profile || data;
    this._currentUser = {
      idUser:       data.userId   ?? profile.idUser,
      id:           String(data.userId ?? profile.idUser ?? ''),
      firstName:    profile.firstName,
      lastName:     profile.lastName,
      emailAddress: profile.emailAddress,
      role:         (data.role ?? profile.role) as UserRole,
      planType:     profile.planType,
      pendingPlan:  profile.pendingPlan,
      avatar:       profile.avatar,
      startup:      profile.startup,
      phoneNumber:  profile.phoneNumber,
    };
    localStorage.setItem('user_token',   data.token   ?? '');
    localStorage.setItem('user_id',      String(data.userId ?? profile.idUser ?? ''));
    localStorage.setItem('user_role',    data.role    ?? profile.role ?? '');
    localStorage.setItem('user_profile', JSON.stringify(this._currentUser));
  }

  /**
   * Cas SIGN UP — le backend retourne :
   * { success, message, data: UserView }
   * Pas de token → on stocke le profil et un token factice basé sur l'idUser.
   * Le vrai token sera obtenu à la prochaine connexion.
   */
  private _saveSignUpData(profile: any, role: string): void {
    this._currentUser = {
      idUser:       profile.idUser,
      id:           String(profile.idUser ?? ''),
      firstName:    profile.firstName,
      lastName:     profile.lastName,
      emailAddress: profile.emailAddress,
      role:         (profile.role ?? role) as UserRole,
      planType:     profile.planType,
      pendingPlan:  profile.pendingPlan,
      avatar:       profile.avatar,
      startup:      profile.startup,
      phoneNumber:  profile.phoneNumber,
    };
    localStorage.setItem('user_token',   `USER-${profile.idUser}`);
    localStorage.setItem('user_id',      String(profile.idUser ?? ''));
    localStorage.setItem('user_role',    profile.role ?? role ?? '');
    localStorage.setItem('user_profile', JSON.stringify(this._currentUser));
  }

  /** Restaure la session depuis le localStorage au démarrage */
  private loadSession(): void {
    try {
      const saved = localStorage.getItem('user_profile');
      if (saved) this._currentUser = JSON.parse(saved);
    } catch {
      this.logout();
    }
  }
}
