import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const TOKEN_KEY = 'khotwa_token';
const USER_KEY = 'khotwa_user';
const LOGIN_ROUTE = '/login';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private redirectInProgress = false;

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && this.shouldLogout(token, error)) {
          this.logoutAndRedirect();
        }

        return throwError(() => error);
      })
    );
  }

  private shouldLogout(token: string | null, error: HttpErrorResponse): boolean {
    if (!token) {
      return true;
    }

    if (this.isTokenExpired(token)) {
      return true;
    }

    return this.isAuthenticationFailure(error);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = this.decodeJwtPayload(token);
      const exp = typeof payload?.['exp'] === 'number' ? payload['exp'] : null;

      if (!exp) {
        return false;
      }

      return Date.now() >= exp * 1000;
    } catch {
      // If the token payload cannot be decoded, treat the session as invalid.
      return true;
    }
  }

  private decodeJwtPayload(token: string): Record<string, unknown> | null {
    const parts = token.split('.');

    if (parts.length !== 3 || !parts[1]) {
      throw new Error('Invalid JWT format');
    }

    const normalized = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(normalized.length + ((4 - normalized.length % 4) % 4), '=');
    const decoded = atob(padded);
    const json = decodeURIComponent(
      Array.from(decoded)
        .map(char => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join('')
    );

    return JSON.parse(json) as Record<string, unknown>;
  }

  private isAuthenticationFailure(error: HttpErrorResponse): boolean {
    const authKeywords = [
      'unauthorized',
      'unauthenticated',
      'authentication',
      'invalid token',
      'token invalid',
      'expired token',
      'token expired',
      'jwt expired',
      'expired jwt',
      'invalid jwt',
      'jwt invalid',
      'access token',
      'bearer',
      'full authentication',
      'login required',
      'not authenticated',
    ];

    const valuesToInspect = [
      error.message,
      error.statusText,
      error.headers?.get('WWW-Authenticate'),
      error.headers?.get('X-Error-Code'),
      ...this.collectErrorValues(error.error),
    ];

    return valuesToInspect
      .filter((value): value is string => typeof value === 'string' && value.trim().length > 0)
      .some(value => {
        const normalized = value.toLowerCase();
        return authKeywords.some(keyword => normalized.includes(keyword));
      });
  }

  private collectErrorValues(source: unknown): string[] {
    if (source == null) {
      return [];
    }

    if (typeof source === 'string') {
      return [source];
    }

    if (Array.isArray(source)) {
      return source.flatMap(item => this.collectErrorValues(item));
    }

    if (typeof source === 'object') {
      return Object.values(source as Record<string, unknown>).flatMap(value => this.collectErrorValues(value));
    }

    return [];
  }

  private logoutAndRedirect(): void {
    if (this.redirectInProgress || this.isOnLoginPage()) {
      return;
    }

    this.redirectInProgress = true;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    void this.router.navigateByUrl(LOGIN_ROUTE).finally(() => {
      this.redirectInProgress = false;
    });
  }

  private isOnLoginPage(): boolean {
    return this.router.url.startsWith(LOGIN_ROUTE);
  }
}
