import {
  FormsModule
} from "./chunk-S476STP4.js";
import {
  BrowserModule,
  HttpClientModule,
  RouterModule,
  RouterOutlet,
  platformBrowser,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement
} from "./chunk-FQARK65W.js";

// src/app/app-routing.module.ts
var routes = [
  { path: "", loadChildren: () => import("./chunk-YXTBYLQA.js").then((m) => m.LandingModule) },
  { path: "login", loadChildren: () => import("./chunk-ZEQ7PTUP.js").then((m) => m.AuthModule) },
  { path: "khotwaadmin", loadChildren: () => import("./chunk-YQXRZSUQ.js").then((m) => m.AdminModule) },
  { path: "entrepreneur", loadChildren: () => import("./chunk-ZNK6DJWF.js").then((m) => m.EntrepreneurModule) },
  { path: "coach", loadChildren: () => import("./chunk-DEK3B2KX.js").then((m) => m.CoachModule) },
  { path: "visitor", loadChildren: () => import("./chunk-PCKKMXTK.js").then((m) => m.VisitorModule) },
  { path: "**", redirectTo: "" }
];
var AppRoutingModule = class _AppRoutingModule {
  static {
    this.\u0275fac = function AppRoutingModule_Factory(t) {
      return new (t || _AppRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
  }
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 7 });
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static {
    this.\u0275fac = function AppModule_Factory(t) {
      return new (t || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
    ] });
  }
};

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
