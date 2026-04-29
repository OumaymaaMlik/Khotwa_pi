import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { PlanType, User, UserResponse, UserRole } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

const TOKEN_KEY   = 'khotwa_token';
const USER_KEY    = 'khotwa_user';
const ROLE_KEY    = 'khotwa_role';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // Backend JWT endpoints
  private readonly AUTH_API  = '/api/auth';
  private readonly USERS_API = '/api/users';

  private _currentUser: User | null = null;
  public currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
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



  // ── Login  →  POST /api/auth/login ───────────────────────────────
  // Backend retourne : { token, idUser, emailAddress, role, mustChangePassword }
  signIn(credentials: { emailAddress: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}/login`, {
      emailAdress: credentials.emailAddress,
      emailAddress: credentials.emailAddress,
      password: credentials.password,
    }).pipe(
      tap(res => this._saveLoginResponse(res))
    );
  }

  loginWithGoogle(idToken: string, mode: 'signin' | 'signup', role?: string): Observable<any> {
    const body: any = { idToken, mode };
    if (role) {
      body.role = role;
    }
    return this.http.post<any>(`${this.AUTH_API}/google`, body).pipe(
      tap(res => this._saveLoginResponse(res))
    );
  }

  refreshProfile(): Observable<UserResponse> {
      const token = localStorage.getItem(TOKEN_KEY);
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    return this.http.get<UserResponse>(`${this.USERS_API}/me`, { headers }).pipe(
      tap(profile => {
        this._currentUser = {
          talentProfileId:     (profile as any).talentProfileId ?? 0,
          idUser:             profile.idUser,
          id:                 String(profile.idUser ?? ''),
          firstName:          profile.firstName,
          lastName:           profile.lastName,
          emailAddress:       profile.emailAddress,
          role:               profile.role,
          planType:           profile.planType ?? null,
          pendingPlan:        profile.pendingPlan ?? null,
          avatar:             profile.avatar ?? null,
          startup:            profile.startup ?? null,
          phoneNumber:        profile.phoneNumber ?? null,
          mustChangePassword: profile.mustChangePassword ?? false,
        };
        this.currentUserSubject.next(this._currentUser);
        localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
      }),
      catchError(err => throwError(() => this.extractError(err)))
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
    return this.http.post<any>(`${this.AUTH_API}/register`, {
      ...userData,
      emailAdress: userData.emailAddress,
    }).pipe(
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
          this._currentUser = { ...this._currentUser, ...this._mapProfile(profile) };
          localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
        }
      })
    );
  }

  // ── Visitor (local, sans backend) ────────────────────────────────
  setVisitorSession(): void {
    const visitor: User = {
      talentProfileId: 0,
      idUser: 0, id: 'visitor',
      firstName: 'Guest', lastName: 'Visitor',
      emailAddress: '', role: 'VISITOR',
      planType: null,
      pendingPlan: null,
      avatar: null,
      startup: null,
      phoneNumber: null,
      mustChangePassword: false,
    };
    this._currentUser = visitor;
    this.currentUserSubject.next(this._currentUser);
    localStorage.setItem(TOKEN_KEY, 'VISITOR');
    localStorage.setItem(ROLE_KEY,  'VISITOR');
    localStorage.setItem(USER_KEY,  JSON.stringify(visitor));
  }

  // ── Logout ────────────────────────────────────────────────────────
  logout(): void {
    this._currentUser = null;
    this.currentUserSubject.next(null);
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

    this._currentUser = {
      talentProfileId: res.talentProfileId ?? 0,
      idUser:       res.idUser,
      id:           String(res.idUser ?? ''),
      emailAddress: res.emailAddress ?? res.email,
      role:         res.role as UserRole,
      firstName:    res.firstName  ?? '',
      lastName:     res.lastName   ?? '',
      planType:     (res.planType as PlanType | undefined) ?? null,
      pendingPlan:  (res.pendingPlan as PlanType | undefined) ?? null,
      avatar:       res.avatar ?? null,
      startup:      res.startup ?? null,
      phoneNumber:  res.phoneNumber ?? null,
      mustChangePassword: res.mustChangePassword ?? false,
    };
    this.currentUserSubject.next(this._currentUser);
    localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
  }

  // Cas register : UserResponse sans token
  private _saveProfileOnly(profile: any): void {
    this._currentUser = {
      talentProfileId: profile.talentProfileId ?? 0,
      idUser:       profile.idUser,
      id:           String(profile.idUser ?? ''),
      emailAddress: profile.emailAddress,
      role:         profile.role as UserRole,
      firstName:    profile.firstName ?? '',
      lastName:     profile.lastName  ?? '',
      planType:     (profile.planType as PlanType | undefined) ?? null,
      pendingPlan:  (profile.pendingPlan as PlanType | undefined) ?? null,
      avatar:       profile.avatar ?? null,
      startup:      profile.startup ?? null,
      phoneNumber:  profile.phoneNumber ?? null,
      mustChangePassword: profile.mustChangePassword ?? false,
    };
    this.currentUserSubject.next(this._currentUser);
    localStorage.setItem(ROLE_KEY, profile.role ?? '');
    localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
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
      if (saved) this._currentUser = JSON.parse(saved);
      this.currentUserSubject.next(this._currentUser);
    } catch {
      this.logout();
    }
  }

  private extractError(error: any): any {
    return error;
  }
  setTalentProfileId(id: number) {
  if (this.currentUser) this.currentUser.talentProfileId = id;
}
}
