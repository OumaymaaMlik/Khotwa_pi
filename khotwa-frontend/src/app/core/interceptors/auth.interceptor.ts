import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /** Routes publiques qui ne nécessitent PAS de headers d'auth */
  private readonly PUBLIC_URLS = ['/signin', '/signup'];

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Ne pas injecter les headers sur les routes publiques
    const isPublic = this.PUBLIC_URLS.some(url => request.url.includes(url));
    if (isPublic) return next.handle(request);

    const userId  = localStorage.getItem('user_id');
    const userRole = localStorage.getItem('user_role');

    // Ne pas envoyer les headers si visiteur ou non connecté
    if (!userId || userId === '0' || userRole === 'VISITOR') {
      return next.handle(request);
    }

    const authReq = request.clone({
      setHeaders: {
        'X-User-Id':   userId,
        'X-User-Role': userRole || ''
      }
    });
    return next.handle(authReq);
  }
}
