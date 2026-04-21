import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import * as i0 from "@angular/core";
export class LayoutModule {
    static { this.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LayoutModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [LayoutComponent],
                imports: [CommonModule, RouterModule],
                exports: [LayoutComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutComponent], imports: [CommonModule, RouterModule], exports: [LayoutComponent] }); })();
//# sourceMappingURL=layout.module.js.map