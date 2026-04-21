import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
const API_BASE = '/api';
const TOKEN_KEY = 'khotwa_token';
const USER_KEY = 'khotwa_user';
export class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this._currentUser = null;
        const saved = localStorage.getItem(USER_KEY);
        if (saved) {
            try {
                this._currentUser = JSON.parse(saved);
            }
            catch {
                this.clearSession();
            }
        }
    }
    // ── Getters ───────────────────────────────────────────────────────────────
    get currentUser() { return this._currentUser; }
    get token() { return localStorage.getItem(TOKEN_KEY); }
    get role() {
        // Return the role from currentUser if available
        const role = this._currentUser?.role ?? null;
        // If role is missing but token exists, this is a state error
        // The guard should handle this, but we return null here to be safe
        return role;
    }
    get isAdmin() { return this._currentUser?.role === 'ADMIN'; }
    get isEntrepreneur() { return this._currentUser?.role === 'ENTREPRENEUR'; }
    get isCoach() { return this._currentUser?.role === 'COACH'; }
    get isLoggedIn() { return !!this.token && !!this._currentUser; }
    get planType() { return this._currentUser?.planType ?? null; }
    get hasActiveSubscription() {
        if (!this._currentUser)
            return false;
        if (this.isCoach || this.isAdmin)
            return true;
        return this._currentUser.planType !== 'FREE' && this._currentUser.planType !== null;
    }
    canAccess(requiredPlan) {
        if (!this._currentUser)
            return false;
        if (this.isCoach || this.isAdmin)
            return true;
        const hierarchy = { FREE: 1, PREMIUM: 2, INSTITUTIONAL: 3 };
        const userPlan = this._currentUser.planType ?? 'FREE';
        return hierarchy[userPlan] >= hierarchy[requiredPlan];
    }
    getDefaultRoute() {
        switch (this._currentUser?.role) {
            case 'ADMIN': return '/khotwaadmin/dashboard';
            case 'ENTREPRENEUR': return '/entrepreneur/dashboard';
            case 'COACH': return '/coach/dashboard';
            default: return '/login';
        }
    }
    // ── Auth methods ──────────────────────────────────────────────────────────
    login(credentials) {
        return this.http.post(`${API_BASE}/auth/login`, credentials).pipe(tap(response => this.handleAuthResponse(response)), catchError(err => throwError(() => this.extractError(err))));
    }
    register(payload) {
        return this.http.post(`${API_BASE}/auth/register`, payload).pipe(catchError(err => throwError(() => this.extractError(err))));
    }
    refreshProfile() {
        const token = localStorage.getItem(TOKEN_KEY);
        const headers = token
            ? new HttpHeaders({ Authorization: `Bearer ${token}` })
            : new HttpHeaders();
        return this.http.get(`${API_BASE}/users/me`, { headers }).pipe(tap(profile => {
            this._currentUser = {
                idUser: profile.idUser,
                firstName: profile.firstName,
                lastName: profile.lastName,
                emailAddress: profile.emailAddress,
                role: profile.role,
                planType: profile.planType,
                pendingPlan: profile.pendingPlan,
                avatar: profile.avatar,
                startup: profile.startup,
                phoneNumber: profile.phoneNumber,
                mustChangePassword: profile.mustChangePassword,
            };
            localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
        }), catchError(err => throwError(() => this.extractError(err))));
    }
    logout() {
        this.clearSession();
        this.router.navigateByUrl('/login');
    }
    // ── Private helpers ───────────────────────────────────────────────────────
    handleAuthResponse(response) {
        localStorage.setItem(TOKEN_KEY, response.token);
        this._currentUser = {
            idUser: response.idUser,
            firstName: '',
            lastName: '',
            emailAddress: response.emailAddress,
            role: response.role,
            planType: null,
            pendingPlan: null,
            avatar: null,
            startup: null,
            phoneNumber: null,
            mustChangePassword: response.mustChangePassword,
        };
        localStorage.setItem(USER_KEY, JSON.stringify(this._currentUser));
    }
    clearSession() {
        this._currentUser = null;
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    }
    extractError(err) {
        return err?.error?.message || err?.message || 'Une erreur est survenue.';
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }], null); })();
//# sourceMappingURL=auth.service.js.map