import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: LoginComponent }];
export class AuthModule {
    static { this.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [LoginComponent],
                imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { declarations: [LoginComponent], imports: [CommonModule, FormsModule, i1.RouterModule] }); })();
//# sourceMappingURL=auth.module.js.map