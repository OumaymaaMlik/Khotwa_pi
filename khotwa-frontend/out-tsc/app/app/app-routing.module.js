import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
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
export class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=app-routing.module.js.map