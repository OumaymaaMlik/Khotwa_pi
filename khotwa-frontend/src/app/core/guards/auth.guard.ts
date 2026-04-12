import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }

    // Vérification du rôle si spécifié dans les données de route
    // Exemple d'usage dans app-routing : data: { roles: ['ADMIN'] }
    const requiredRoles: UserRole[] = route.data?.['roles'];
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
}