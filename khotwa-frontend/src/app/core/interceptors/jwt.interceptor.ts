import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const TOKEN_KEY = 'khotwa_token';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(TOKEN_KEY);

    // Injecte le token JWT si présent
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // 401 → session expirée ou token invalide → redirect login
        if (error.status === 401) {
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem('khotwa_user');
          this.router.navigateByUrl('/login');
        }
        return throwError(() => error);
      })
    );
  }
}