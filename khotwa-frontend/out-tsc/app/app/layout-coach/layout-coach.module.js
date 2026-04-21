import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutCoachComponent } from './layout-coach.component';
import * as i0 from "@angular/core";
export class LayoutCoachModule {
    static { this.ɵfac = function LayoutCoachModule_Factory(t) { return new (t || LayoutCoachModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LayoutCoachModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutCoachModule, [{
        type: NgModule,
        args: [{
                declarations: [LayoutCoachComponent],
                imports: [CommonModule, RouterModule],
                exports: [LayoutCoachComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutCoachModule, { declarations: [LayoutCoachComponent], imports: [CommonModule, RouterModule], exports: [LayoutCoachComponent] }); })();
//# sourceMappingURL=layout-coach.module.js.map