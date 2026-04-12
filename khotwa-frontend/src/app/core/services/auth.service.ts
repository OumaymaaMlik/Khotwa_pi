import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError, BehaviorSubject } from 'rxjs';
import { MessageService } from './message.service';
import { OnlineStatusService } from './online-status.service';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
  UserResponse,
  UserRole,
  PlanType,
} from '../models/user.model';

const API_BASE  = '/khotwa/api';
const TOKEN_KEY = 'khotwa_token';
const USER_KEY  = 'khotwa_user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient, 
    private router: Router,
    private messageService: MessageService,
    private onlineStatusService: OnlineStatusService
  ) {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      try { 
        const user = JSON.parse(saved);
        this.currentUserSubject.next(user);
      } catch { 
        this.clearSession(); 
      }
    }
  }



  get currentUser(): User | null  { return this.currentUserSubject.value; }
  get token(): string | null      { return localStorage.getItem(TOKEN_KEY); }
  get role(): UserRole | null     { return this.currentUser?.role ?? null; }
  

  get isAdmin(): boolean          { return this.role === 'ADMIN'; }
  get isEntrepreneur(): boolean   { return this.role === 'ENTREPRENEUR'; }
  get isCoach(): boolean          { return this.role === 'COACH'; }
  
  get isLoggedIn(): boolean       { return !!this.token && !!this.currentUser; }
  get planType(): PlanType | null { return this.currentUser?.planType ?? null; }



  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_BASE}/auth/login`, credentials).pipe(
      tap(response => {
        this.handleAuthResponse(response);
        // INTEGRATION: Announce online status immediately after successful login
        this.announceOnlineStatus(response.idUser);
      }),
      catchError(err => throwError(() => this.extractError(err)))
    );
  }

  register(payload: RegisterRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${API_BASE}/auth/register`, payload).pipe(
      catchError(err => throwError(() => this.extractError(err)))
    );
  }

  logout(): void {
    this.clearSession();
    this.router.navigateByUrl('/login');
  }


  private announceOnlineStatus(userId: number): void {
    this.messageService.announceOnline(userId).subscribe({
      next: (onlineUsers) => {
        if (onlineUsers) {
          this.onlineStatusService.updateOnlineUsers(new Set(onlineUsers));
        }
      },
      error: (err) => console.error('Status announcement failed:', err)
    });
  }


  refreshProfile(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${API_BASE}/users/me`).pipe(
      tap(profile => {
        const updatedUser: User = {
          ...profile,
          idUser: profile.idUser,
          emailAddress: profile.emailAddress
        };
        this.currentUserSubject.next(updatedUser);
        localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
      }),
      catchError(err => throwError(() => this.extractError(err)))
    );
  }

  getDefaultRoute(): string {
    const r = this.role;
    if (r === 'ADMIN') return '/khotwaadmin/dashboard';
    if (r === 'ENTREPRENEUR') return '/entrepreneur/dashboard';
    if (r === 'COACH') return '/coach/dashboard';
    return '/login';
  }

  private handleAuthResponse(response: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, response.token);
    const user: User = {
      idUser: response.idUser,
      emailAddress: response.emailAddress,
      role: response.role,
      firstName: '', lastName: '',
      planType: null, pendingPlan: null, avatar: null,
      startup: null, phoneNumber: null,
      mustChangePassword: response.mustChangePassword
    };
    this.currentUserSubject.next(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private clearSession(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  private extractError(err: any): string {
    return err?.error?.message || err?.message || 'Une erreur est survenue.';
  }
}