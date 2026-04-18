import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpHandler, HttpEvent,
  HttpInterceptor, HttpErrorResponse,
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

    // Ne pas injecter le token sur les routes vraiment publiques.
    // GET categories/tags = public (SecurityConfig le permet sans token).
    // POST/PUT/DELETE categories/tags = admin seulement -> token requis.
    const isPublic = request.url.includes('/api/auth/')
                  || (request.method === 'GET' && request.url.includes('/api/categories'))
                  || (request.method === 'GET' && request.url.includes('/api/tags'));

    if (token && token !== 'VISITOR' && !isPublic) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token expiré ou invalide → déconnecter
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem('khotwa_user');
          localStorage.removeItem('khotwa_role');
          this.router.navigateByUrl('/login');
        }
        return throwError(() => error);
      })
    );
  }
}