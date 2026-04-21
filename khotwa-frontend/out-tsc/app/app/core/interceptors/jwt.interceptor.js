import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const TOKEN_KEY = 'khotwa_token';
const USER_KEY = 'khotwa_user';
const LOGIN_ROUTE = '/login';
export class JwtInterceptor {
    constructor(router) {
        this.router = router;
        this.redirectInProgress = false;
    }
    intercept(request, next) {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
            });
        }
        this.logOutgoingRequest(request);
        return next.handle(request).pipe(catchError((error) => {
            if (error.status === 401 && this.shouldLogout(token, error)) {
                this.logoutAndRedirect();
            }
            return throwError(() => error);
        }));
    }
    shouldLogout(token, error) {
        if (!token) {
            return true;
        }
        if (this.isTokenExpired(token)) {
            return true;
        }
        return this.isAuthenticationFailure(error);
    }
    isTokenExpired(token) {
        try {
            const payload = this.decodeJwtPayload(token);
            const exp = typeof payload?.['exp'] === 'number' ? payload['exp'] : null;
            if (!exp) {
                return false;
            }
            return Date.now() >= exp * 1000;
        }
        catch {
            // If the token payload cannot be decoded, treat the session as invalid.
            return true;
        }
    }
    decodeJwtPayload(token) {
        const parts = token.split('.');
        if (parts.length !== 3 || !parts[1]) {
            throw new Error('Invalid JWT format');
        }
        const normalized = parts[1].replace(/-/g, '+').replace(/_/g, '/');
        const padded = normalized.padEnd(normalized.length + ((4 - normalized.length % 4) % 4), '=');
        const decoded = atob(padded);
        const json = decodeURIComponent(Array.from(decoded)
            .map(char => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
            .join(''));
        return JSON.parse(json);
    }
    logOutgoingRequest(request) {
        if (!request.url.includes('/api/projects/my')) {
            return;
        }
        const authorizationHeader = request.headers.get('Authorization');
        const maskedAuthorization = authorizationHeader
            ? `${authorizationHeader.slice(0, 20)}...`
            : '(missing)';
        console.debug('[JwtInterceptor] Outgoing request headers', {
            method: request.method,
            url: request.urlWithParams,
            headers: {
                Authorization: maskedAuthorization,
            },
        });
    }
    isAuthenticationFailure(error) {
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
            .filter((value) => typeof value === 'string' && value.trim().length > 0)
            .some(value => {
            const normalized = value.toLowerCase();
            return authKeywords.some(keyword => normalized.includes(keyword));
        });
    }
    collectErrorValues(source) {
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
            return Object.values(source).flatMap(value => this.collectErrorValues(value));
        }
        return [];
    }
    logoutAndRedirect() {
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
    isOnLoginPage() {
        return this.router.url.startsWith(LOGIN_ROUTE);
    }
    static { this.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(i0.ɵɵinject(i1.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JwtInterceptor, [{
        type: Injectable
    }], () => [{ type: i1.Router }], null); })();
//# sourceMappingURL=jwt.interceptor.js.map