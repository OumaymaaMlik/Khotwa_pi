import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User, UserRole } from '../models/user.model';

const TOKEN_KEY   = 'khotwa_token';
const USER_KEY    = 'khotwa_user';
const ROLE_KEY    = 'khotwa_role';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // Backend JWT endpoints
  private readonly AUTH_API  = 'http://localhost:8084/khotwa/api/auth';
  private readonly USERS_API = 'http://localhost:8084/khotwa/api/users';

  private _currentUser: User | null = null;
  public currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    this._loadSession();
  }

  // ── Accesseurs ────────────────────────────────────────────────────
  get currentUser(): User | null { return this._currentUser; }
  get role(): UserRole | null    { return this._currentUser?.role ?? null; }
  get isLoggedIn(): boolean      { return this._currentUser !== null && !!this.getToken(); }
  get token(): string | null     { return this.getToken(); }

  get isAdmin():        boolean { return this.role === 'ADMIN'; }
  get isEntrepreneur(): boolean { return this.role === 'ENTREPRENEUR'; }
  get isCoach():        boolean { return this.role === 'COACH'; }
  get isVisitor():      boolean { return this.role === 'VISITOR'; }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  // ── Private helper to update user and notify observers ──────────────
  private setCurrentUser(user: User | null): void {
    this._currentUser = user;
    this.currentUserSubject.next(user);
  }

  // ── Login  →  POST /api/auth/login ───────────────────────────────
  // Backend retourne : { token, idUser, emailAddress, role, mustChangePassword }
  signIn(credentials: { emailAddress: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}/login`, credentials).pipe(
      tap(res => this._saveLoginResponse(res))
    );
  }

  // ── Register  →  POST /api/auth/register ─────────────────────────
  // Backend retourne : UserResponse (pas de token)
  // → on enchaîne avec un login automatique
  signUp(userData: {
    firstName: string; lastName: string;
    emailAddress: string; password: string;
    role?: string; phoneNumber?: string | null; startup?: string | null;
  }): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}/register`, userData).pipe(
      tap(res => {
        // Stocker le profil temporairement — le token arrive via signIn()
        if (res?.idUser) {
          this._saveProfileOnly(res);
        }
      })
    );
  }

  // ── Get my profile  →  GET /api/users/me  ────────────────────────
  getMyProfile(): Observable<any> {
    return this.http.get<any>(`${this.USERS_API}/me`).pipe(
      tap((profile: any) => {
        if (this._currentUser && profile) {
          this.setCurrentUser({ ...this._currentUser, ...this._mapProfile(profile) });
          localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
        }
      })
    );
  }

  // ── Visitor (local, sans backend) ────────────────────────────────
  setVisitorSession(): void {
    const visitor: User = {
      idUser: 0, id: 'visitor',
      firstName: 'Guest', lastName: 'Visitor',
      emailAddress: '', role: 'VISITOR',
    };
    this.setCurrentUser(visitor);
    localStorage.setItem(TOKEN_KEY, 'VISITOR');
    localStorage.setItem(ROLE_KEY,  'VISITOR');
    localStorage.setItem(USER_KEY,  JSON.stringify(visitor));
  }

  // ── Logout ────────────────────────────────────────────────────────
  logout(): void {
    this.setCurrentUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(ROLE_KEY);
    // Legacy keys cleanup
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

  // ── Private helpers ───────────────────────────────────────────────

  // Cas login : { token, idUser, emailAddress, role, mustChangePassword }
  private _saveLoginResponse(res: any): void {
    if (!res?.token) return;
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(ROLE_KEY,  res.role ?? '');

    const user = {
      idUser:       res.idUser,
      id:           String(res.idUser ?? ''),
      emailAddress: res.emailAddress,
      role:         res.role as UserRole,
      firstName:    res.firstName  ?? '',
      lastName:     res.lastName   ?? '',
      planType:     res.planType,
      pendingPlan:  res.pendingPlan,
      avatar:       res.avatar,
      startup:      res.startup,
      phoneNumber:  res.phoneNumber,
    };
    this.setCurrentUser(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Cas register : UserResponse sans token
  private _saveProfileOnly(profile: any): void {
    const user = {
      idUser:       profile.idUser,
      id:           String(profile.idUser ?? ''),
      emailAddress: profile.emailAddress,
      role:         profile.role as UserRole,
      firstName:    profile.firstName ?? '',
      lastName:     profile.lastName  ?? '',
      planType:     profile.planType,
      pendingPlan:  profile.pendingPlan,
      avatar:       profile.avatar,
      startup:      profile.startup,
      phoneNumber:  profile.phoneNumber,
    };
    localStorage.setItem(ROLE_KEY, profile.role ?? '');
    this.setCurrentUser(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private _mapProfile(p: any): Partial<User> {
    return {
      idUser: p.idUser, id: String(p.idUser ?? ''),
      emailAddress: p.emailAddress,
      role: p.role as UserRole,
      firstName: p.firstName, lastName: p.lastName,
      planType: p.planType, pendingPlan: p.pendingPlan,
      avatar: p.avatar, startup: p.startup, phoneNumber: p.phoneNumber,
    };
  }

  private _loadSession(): void {
    try {
      const saved = localStorage.getItem(USER_KEY)
                 ?? localStorage.getItem('user_profile'); // legacy key
      if (saved) this.setCurrentUser(JSON.parse(saved));
    } catch {
      this.logout();
    }
  }
}
