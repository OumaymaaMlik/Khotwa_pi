import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppComponent {
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [i1.RouterOutlet], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>',
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 7 }); })();
//# sourceMappingURL=app.component.js.map