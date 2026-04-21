import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError } from 'rxjs';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
  UserResponse,
  UserRole,
  PlanType,
} from '../models/user.model';

const API_BASE  = '/api';
const TOKEN_KEY = 'khotwa_token';
const USER_KEY  = 'khotwa_user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _currentUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      try { this._currentUser = JSON.parse(saved); } catch { this.clearSession(); }
    }
  }

  // ── Getters ───────────────────────────────────────────────────────────────

  get currentUser(): User | null  { return this._currentUser; }
  get token(): string | null      { return localStorage.getItem(TOKEN_KEY); }
  get role(): UserRole | null     { 
    // Return the role from currentUser if available
    const role = this._currentUser?.role ?? null;
    // If role is missing but token exists, this is a state error
    // The guard should handle this, but we return null here to be safe
    return role;
  }
  get isAdmin(): boolean          { return this._currentUser?.role === 'ADMIN'; }
  get isEntrepreneur(): boolean   { return this._currentUser?.role === 'ENTREPRENEUR'; }
  get isCoach(): boolean          { return this._currentUser?.role === 'COACH'; }
  get isLoggedIn(): boolean       { return !!this.token && !!this._currentUser; }
  get planType(): PlanType | null { return this._currentUser?.planType ?? null; }

  get hasActiveSubscription(): boolean {
    if (!this._currentUser) return false;
    if (this.isCoach || this.isAdmin) return true;
    return this._currentUser.planType !== 'FREE' && this._currentUser.planType !== null;
  }

  canAccess(requiredPlan: PlanType): boolean {
    if (!this._currentUser) return false;
    if (this.isCoach || this.isAdmin) return true;
    const hierarchy: Record<PlanType, number> = { FREE: 1, PREMIUM: 2, INSTITUTIONAL: 3 };
    const userPlan = this._currentUser.planType ?? 'FREE';
    return hierarchy[userPlan] >= hierarchy[requiredPlan];
  }

  getDefaultRoute(): string {
    switch (this._currentUser?.role) {
      case 'ADMIN':        return '/khotwaadmin/dashboard';
      case 'ENTREPRENEUR': return '/entrepreneur/dashboard';
      case 'COACH':        return '/coach/dashboard';
      default:             return '/login';
    }
  }

  // ── Auth methods ──────────────────────────────────────────────────────────

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_BASE}/auth/login`, credentials).pipe(
      tap(response => this.handleAuthResponse(response)),
      catchError(err => throwError(() => this.extractError(err)))
    );
  }

  register(payload: RegisterRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${API_BASE}/auth/register`, payload).pipe(
      catchError(err => throwError(() => this.extractError(err)))
    );
  }

  refreshProfile(): Observable<UserResponse> {
    const token = localStorage.getItem(TOKEN_KEY);
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    return this.http.get<UserResponse>(`${API_BASE}/users/me`, { headers }).pipe(
      tap(profile => {
        this._currentUser = {
          idUser:             profile.idUser,
          firstName:          profile.firstName,
          lastName:           profile.lastName,
          emailAddress:       profile.emailAddress,
          role:               profile.role,
          planType:           profile.planType,
          pendingPlan:        profile.pendingPlan,
          avatar:             profile.avatar,
          startup:            profile.startup,
          phoneNumber:        profile.phoneNumber,
          mustChangePassword: profile.mustChangePassword,
        };
        localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
      }),
      catchError(err => throwError(() => this.extractError(err)))
    );
  }

  logout(): void {
    this.clearSession();
    this.router.navigateByUrl('/login');
  }

  // ── Private helpers ───────────────────────────────────────────────────────

  private handleAuthResponse(response: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, response.token);
    this._currentUser = {
      idUser:             response.idUser,
      firstName:          '',
      lastName:           '',
      emailAddress:       response.emailAddress,
      role:               response.role,
      planType:           null,
      pendingPlan:        null,
      avatar:             null,
      startup:            null,
      phoneNumber:        null,
      mustChangePassword: response.mustChangePassword,
    };
    localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
  }

  private clearSession(): void {
    this._currentUser = null;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  private extractError(err: any): string {
    return err?.error?.message || err?.message || 'Une erreur est survenue.';
  }
}