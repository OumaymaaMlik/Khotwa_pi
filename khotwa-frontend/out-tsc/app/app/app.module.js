import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import * as i0 from "@angular/core";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            // ← Enregistrement de l'intercepteur JWT (ajoute Authorization: Bearer <token>)
            {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtInterceptor,
                multi: true,
            },
        ], imports: [BrowserModule,
            HttpClientModule,
            AppRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [AppComponent],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    AppRoutingModule,
                ],
                providers: [
                    // ← Enregistrement de l'intercepteur JWT (ajoute Authorization: Bearer <token>)
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: JwtInterceptor,
                        multi: true,
                    },
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [BrowserModule,
        HttpClientModule,
        AppRoutingModule] }); })();
//# sourceMappingURL=app.module.js.map