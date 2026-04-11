import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // Page publique
  { path: '', loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule) },

  // Page de connexion (accessible sans être connecté)
  { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },

  // Zone Admin → protégée, rôle ADMIN requis
  {
    path: 'khotwaadmin',
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  },

  // Zone Entrepreneur → protégée, rôle ENTREPRENEUR requis
  {
    path: 'entrepreneur',
    canActivate: [AuthGuard],
    data: { roles: ['ENTREPRENEUR'] },
    loadChildren: () => import('./features/entrepreneur/entrepreneur.module').then(m => m.EntrepreneurModule),
  },

  // Zone Coach → protégée, rôle COACH requis
  {
    path: 'coach',
    canActivate: [AuthGuard],
    data: { roles: ['COACH'] },
    loadChildren: () => import('./features/coach/coach.module').then(m => m.CoachModule),
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}