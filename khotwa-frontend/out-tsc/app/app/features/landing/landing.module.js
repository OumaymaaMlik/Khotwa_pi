import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: LandingComponent }];
export class LandingModule {
    static { this.ɵfac = function LandingModule_Factory(t) { return new (t || LandingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LandingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule.forChild(routes)] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LandingModule, [{
        type: NgModule,
        args: [{
                declarations: [LandingComponent],
                imports: [CommonModule, RouterModule.forChild(routes)],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LandingModule, { declarations: [LandingComponent], imports: [CommonModule, i1.RouterModule] }); })();
//# sourceMappingURL=landing.module.js.map