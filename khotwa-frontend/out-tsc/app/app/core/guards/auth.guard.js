import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth.service";
import * as i2 from "@angular/router";
export class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        // Check if token exists
        if (!this.auth.token) {
            this.router.navigateByUrl('/login');
            return false;
        }
        // If currentUser is missing but token exists, this is a state error
        // Redirect to login to force re-authentication
        if (!this.auth.currentUser) {
            this.router.navigateByUrl('/login');
            return false;
        }
        // Vérification du rôle si spécifié dans les données de route
        // Exemple d'usage dans app-routing : data: { roles: ['ADMIN'] }
        const requiredRoles = route.data?.['roles'];
        if (requiredRoles && requiredRoles.length > 0) {
            const userRole = this.auth.role;
            if (!userRole || !requiredRoles.includes(userRole)) {
                // Redirige vers le dashboard approprié si connecté mais mauvais rôle
                this.router.navigateByUrl(this.auth.getDefaultRoute());
                return false;
            }
        }
        return true;
    }
    static { this.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
//# sourceMappingURL=auth.guard.js.map