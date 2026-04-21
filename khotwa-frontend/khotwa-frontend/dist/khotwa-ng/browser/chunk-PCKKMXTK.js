import {
  TalentService
} from "./chunk-6FLLKG2X.js";
import {
  NotificationService
} from "./chunk-LCW3X733.js";
import {
  FooterComponent,
  SharedModule
} from "./chunk-2PX5TB77.js";
import {
  AuthService
} from "./chunk-3A6GV6NY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-S476STP4.js";
import {
  CommonModule,
  NavigationEnd,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  __spreadValues,
  filter,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FQARK65W.js";

// src/app/layout-visitor/layout-visitor.component.ts
function LayoutVisitorComponent_a_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
}
function LayoutVisitorComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LayoutVisitorComponent_a_8_span_4_Template, 1, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ent-link--active", ctx_r2.isActive(item_r2.route));
    \u0275\u0275property("routerLink", ctx_r2.getRoute(item_r2.route));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getIcon(item_r2.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isActive(item_r2.route));
  }
}
function LayoutVisitorComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.nonLus);
  }
}
function LayoutVisitorComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function LayoutVisitorComponent_div_14_div_6_Template_div_click_0_listener() {
      const n_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.notifService.markRead(n_r6.id));
    });
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementStart(2, "div")(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r6.lu);
    \u0275\u0275advance();
    \u0275\u0275classMap("dot-" + n_r6.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r6.message);
  }
}
function LayoutVisitorComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function LayoutVisitorComponent_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.notifService.markAllRead();
      return \u0275\u0275resetView(ctx_r2.notifOpen = false);
    });
    \u0275\u0275text(5, "Mark all read");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LayoutVisitorComponent_div_14_div_6_Template, 7, 6, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.notifs);
  }
}
function LayoutVisitorComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "p", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function LayoutVisitorComponent_div_28_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275element(7, "span", 12);
    \u0275\u0275text(8, "Sign out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.prenom, " ", ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.getIcon("logout"), \u0275\u0275sanitizeHtml);
  }
}
function LayoutVisitorComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275listener("click", function LayoutVisitorComponent_a_34_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileOpen = false);
    });
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ent-mobile-link--active", ctx_r2.isActive(item_r9.route));
    \u0275\u0275property("routerLink", ctx_r2.getRoute(item_r9.route));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getIcon(item_r9.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.label, " ");
  }
}
function LayoutVisitorComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function LayoutVisitorComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var LayoutVisitorComponent = class _LayoutVisitorComponent {
  constructor(auth, notifService, router) {
    this.auth = auth;
    this.notifService = notifService;
    this.router = router;
    this.notifOpen = false;
    this.mobileOpen = false;
    this.userMenuOpen = false;
    this.currentUrl = "";
    this.scrolled = false;
    this.navItems = [
      { label: "Dashboard", icon: "dashboard", route: "dashboard" },
      { label: "Offres", icon: "folder", route: "annonces" },
      { label: "Mes candidatures", icon: "message", route: "candidatures" },
      { label: "Mon profil talent", icon: "people", route: "profil" }
    ];
    this.svgIcons = {
      dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
      folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      message: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      people: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
      home: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      logout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`
    };
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.currentUrl = e.url;
    });
    this.currentUrl = this.router.url;
  }
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }
  isActive(route) {
    return this.currentUrl.includes(`/${route}`);
  }
  getIcon(name) {
    return this.svgIcons[name] || "";
  }
  getRoute(route) {
    return `/visitor/${route}`;
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/");
  }
  get nonLus() {
    return this.notifService.nonLus();
  }
  get notifs() {
    return this.notifService.notifs();
  }
  get userInitials() {
    const u = this.auth.currentUser;
    return `${u?.prenom?.[0] ?? ""}${u?.nom?.[0] ?? ""}`;
  }
  static {
    this.\u0275fac = function LayoutVisitorComponent_Factory(t) {
      return new (t || _LayoutVisitorComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutVisitorComponent, selectors: [["app-layout-visitor"]], hostBindings: function LayoutVisitorComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function LayoutVisitorComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 43, vars: 18, consts: [["userMenu", ""], [1, "ent-shell"], [1, "ent-nav"], [1, "ent-nav__inner"], ["routerLink", "/visitor/dashboard", 1, "ent-brand"], ["src", "assets/khotwa-logo.png", "alt", "KHOTWA", 1, "brand-logo-img", 2, "height", "36px", "width", "auto", "object-fit", "contain"], [1, "ent-brand__tag"], [1, "ent-nav__links"], ["class", "ent-link", 3, "ent-link--active", "routerLink", 4, "ngFor", "ngForOf"], [1, "ent-nav__actions"], [1, "notif-wrapper"], [1, "ent-icon-btn", 3, "click"], [3, "innerHTML"], ["class", "notif-dot", 4, "ngIf"], ["class", "ent-notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Home", 1, "ent-icon-btn"], [1, "ent-user", 3, "click"], [1, "ent-user__avatar"], [1, "ent-user__info"], [1, "ent-user__name"], [1, "ent-user__role"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "ent-user__chevron"], ["d", "m6 9 6 6 6-6"], ["class", "ent-user__menu", 4, "ngIf"], [1, "ent-burger", 3, "click"], [1, "ent-mobile-nav"], ["class", "ent-mobile-link", 3, "ent-mobile-link--active", "routerLink", "click", 4, "ngFor", "ngForOf"], ["class", "ent-overlay", 3, "click", 4, "ngIf"], [1, "ent-hero-band"], [1, "ent-hero-band__orb", "ent-hero-band__orb--1"], [1, "ent-hero-band__orb", "ent-hero-band__orb--2"], [1, "ent-main"], [1, "ent-content"], [1, "ent-link", 3, "routerLink"], [1, "ent-link__icon", 3, "innerHTML"], ["class", "ent-link__pip", 4, "ngIf"], [1, "ent-link__pip"], [1, "notif-dot"], [1, "ent-notif-panel"], [1, "ent-notif-panel__head"], [3, "click"], ["class", "ent-notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "ent-notif-item", 3, "click"], [1, "ent-notif-item__dot"], [1, "ent-notif-item__title"], [1, "ent-notif-item__msg"], [1, "ent-user__menu"], [1, "ent-user__menu-header"], [1, "menu-name"], [1, "menu-email"], [1, "menu-item", "menu-item--logout", 3, "click"], [1, "ent-mobile-link", 3, "click", "routerLink"], [1, "ent-overlay", 3, "click"]], template: function LayoutVisitorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "a", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementStart(5, "span", 6);
        \u0275\u0275text(6, "Talent \xB7 Visitor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 7);
        \u0275\u0275template(8, LayoutVisitorComponent_a_8_Template, 5, 6, "a", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "button", 11);
        \u0275\u0275listener("click", function LayoutVisitorComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.notifOpen = !ctx.notifOpen);
        });
        \u0275\u0275element(12, "span", 12);
        \u0275\u0275template(13, LayoutVisitorComponent_span_13_Template, 2, 1, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, LayoutVisitorComponent_div_14_Template, 7, 1, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 15);
        \u0275\u0275element(16, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 16, 0);
        \u0275\u0275listener("click", function LayoutVisitorComponent_Template_div_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.userMenuOpen = !ctx.userMenuOpen);
        });
        \u0275\u0275elementStart(19, "div", 17);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 18)(22, "span", 19);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 20);
        \u0275\u0275text(25, "Visitor");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 21);
        \u0275\u0275element(27, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, LayoutVisitorComponent_div_28_Template, 9, 4, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "button", 24);
        \u0275\u0275listener("click", function LayoutVisitorComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mobileOpen = !ctx.mobileOpen);
        });
        \u0275\u0275element(30, "span")(31, "span")(32, "span");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 25);
        \u0275\u0275template(34, LayoutVisitorComponent_a_34_Template, 3, 5, "a", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, LayoutVisitorComponent_div_35_Template, 1, 0, "div", 27);
        \u0275\u0275elementStart(36, "div", 28);
        \u0275\u0275element(37, "div", 29)(38, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "main", 31)(40, "div", 32);
        \u0275\u0275element(41, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(42, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("ent-nav--scrolled", ctx.scrolled);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("ent-icon-btn--active", ctx.notifOpen);
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", ctx.getIcon("bell"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.nonLus > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notifOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", ctx.getIcon("home"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("rotated", ctx.userMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.userMenuOpen);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("open", ctx.mobileOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mobileOpen);
      }
    }, dependencies: [NgForOf, NgIf, RouterOutlet, RouterLink, FooterComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --ent-teal: #2ABFBF;\n  --ent-teal-dark: #1a9999;\n  --ent-teal-glow: rgba(42,191,191,0.28);\n  --ent-teal-light: rgba(42,191,191,0.10);\n  --ent-dark: #070F14;\n  --ent-nav-h: 64px;\n  --ent-band-h: 6px;\n}\n.ent-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #F0F9F9;\n}\n.ent-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  height: var(--ent-nav-h);\n  background: rgba(7, 15, 20, 0.92);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(42, 191, 191, 0.15);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n.ent-nav--scrolled[_ngcontent-%COMP%] {\n  background: rgba(7, 15, 20, 0.97);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(42, 191, 191, 0.12);\n}\n.ent-nav__inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  gap: 0;\n}\n.ent-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n  margin-right: 16px;\n}\n.ent-brand__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--ent-teal),\n      #1a7f7f);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 16px var(--ent-teal-glow);\n}\n.ent-brand__name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #E8F9F9;\n}\n.ent-brand__tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--ent-teal);\n  background: var(--ent-teal-light);\n  border: 1px solid rgba(42, 191, 191, 0.25);\n  border-radius: 5px;\n  padding: 2px 6px;\n}\n.ent-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  flex: 1;\n  justify-content: center;\n  overflow: hidden;\n}\n.ent-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 9px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(210, 240, 240, 0.5);\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ent-link[_ngcontent-%COMP%]:hover {\n  color: rgba(210, 240, 240, 0.95);\n  background: rgba(42, 191, 191, 0.08);\n}\n.ent-link__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15px;\n  flex-shrink: 0;\n  opacity: 0.6;\n  transition: opacity 0.18s;\n}\n.ent-link[_ngcontent-%COMP%]:hover   .ent-link__icon[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.ent-link--active[_ngcontent-%COMP%] {\n  color: var(--ent-teal) !important;\n  background: rgba(42, 191, 191, 0.12) !important;\n  font-weight: 600;\n}\n.ent-link--active[_ngcontent-%COMP%]   .ent-link__icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ent-link__pip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 14px;\n  height: 2px;\n  border-radius: 99px;\n  background: var(--ent-teal);\n  box-shadow: 0 0 8px var(--ent-teal);\n}\n.ent-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n.ent-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: rgba(210, 240, 240, 0.6);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.18s;\n  text-decoration: none;\n}\n.ent-icon-btn[_ngcontent-%COMP%]:hover, .ent-icon-btn--active[_ngcontent-%COMP%] {\n  background: rgba(42, 191, 191, 0.12);\n  border-color: rgba(42, 191, 191, 0.25);\n  color: var(--ent-teal);\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: #E84A4A;\n  color: white;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--ent-dark);\n}\n.ent-notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 300px;\n  background: #0D1E1E;\n  border: 1px solid rgba(42, 191, 191, 0.2);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(42, 191, 191, 0.08);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.2s both;\n  z-index: 300;\n}\n.ent-notif-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(42, 191, 191, 0.12);\n  font-weight: 700;\n  font-size: 13px;\n  color: rgba(210, 240, 240, 0.9);\n}\n.ent-notif-panel__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--ent-teal);\n  font-weight: 600;\n}\n.ent-notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ent-notif-item.unread[_ngcontent-%COMP%] {\n  background: rgba(42, 191, 191, 0.06);\n}\n.ent-notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(42, 191, 191, 0.1);\n}\n.ent-notif-item__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.ent-notif-item__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: rgba(210, 240, 240, 0.9);\n}\n.ent-notif-item__msg[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(210, 240, 240, 0.45);\n  margin-top: 2px;\n}\n.ent-user[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px;\n  border-radius: 10px;\n  border: 1px solid rgba(42, 191, 191, 0.15);\n  background: rgba(255, 255, 255, 0.04);\n  cursor: pointer;\n  transition: all 0.18s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ent-user[_ngcontent-%COMP%]:hover {\n  background: rgba(42, 191, 191, 0.08);\n  border-color: rgba(42, 191, 191, 0.3);\n}\n.ent-user__avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--ent-teal),\n      #1a7f7f);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.ent-user__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.ent-user__name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: rgba(210, 240, 240, 0.9);\n  line-height: 1.2;\n}\n.ent-user__role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--ent-teal);\n  font-weight: 600;\n}\n.ent-user__chevron[_ngcontent-%COMP%] {\n  color: rgba(210, 240, 240, 0.35);\n  transition: transform 0.2s;\n}\n.ent-user__chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.ent-user__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 190px;\n  background: #0D1E1E;\n  border: 1px solid rgba(42, 191, 191, 0.2);\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.18s both;\n  z-index: 300;\n}\n.ent-user__menu-header[_ngcontent-%COMP%] {\n  padding: 13px 15px;\n  border-bottom: 1px solid rgba(42, 191, 191, 0.1);\n}\n.menu-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(210, 240, 240, 0.9);\n}\n.menu-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(210, 240, 240, 0.4);\n  margin-top: 2px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 11px 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(210, 240, 240, 0.7);\n  transition: all 0.15s;\n  text-align: left;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(42, 191, 191, 0.08);\n  color: rgba(210, 240, 240, 0.95);\n}\n.menu-item--logout[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 74, 74, 0.12);\n  color: #E84A4A;\n}\n.ent-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.ent-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: rgba(210, 240, 240, 0.7);\n  border-radius: 2px;\n  transition: all 0.2s;\n}\n.ent-mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: #0D1E1E;\n  border-top: 1px solid rgba(42, 191, 191, 0.12);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.ent-mobile-nav.open[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.ent-mobile-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 24px;\n  color: rgba(210, 240, 240, 0.55);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 1px solid rgba(42, 191, 191, 0.07);\n  transition: all 0.15s;\n}\n.ent-mobile-link[_ngcontent-%COMP%]:hover {\n  background: rgba(42, 191, 191, 0.08);\n  color: var(--ent-teal);\n}\n.ent-mobile-link--active[_ngcontent-%COMP%] {\n  color: var(--ent-teal);\n  background: rgba(42, 191, 191, 0.08);\n  font-weight: 600;\n}\n.ent-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 190;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.ent-hero-band[_ngcontent-%COMP%] {\n  height: var(--ent-band-h);\n  background:\n    linear-gradient(\n      90deg,\n      #1a9999,\n      #2ABFBF,\n      #5AD5D5,\n      #2ABFBF,\n      #1a9999);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_gradientShift 5s linear infinite;\n  position: relative;\n  overflow: hidden;\n}\n.ent-hero-band__orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(30px);\n  opacity: 0.4;\n}\n.ent-hero-band__orb--1[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.6);\n  top: -10px;\n  left: 10%;\n  animation: _ngcontent-%COMP%_orbFloat 4s ease-in-out infinite;\n}\n.ent-hero-band__orb--2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 30px;\n  background: rgba(255, 255, 255, 0.5);\n  top: -8px;\n  right: 20%;\n  animation: _ngcontent-%COMP%_orbFloat 6s ease-in-out infinite reverse;\n}\n.ent-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.ent-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 32px;\n}\n@media (max-width: 1200px) {\n  .ent-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.ent-link__icon):not(.ent-link__pip) {\n    display: none;\n  }\n  .ent-link[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .ent-brand__tag[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 900px) {\n  .ent-nav__links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ent-burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .ent-mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .ent-user__info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ent-user__chevron[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ent-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_orbFloat {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(30px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n[_nghost-%COMP%]     .kh-card {\n  background: white;\n  border: 1px solid rgba(42, 191, 191, 0.1);\n  border-radius: 16px;\n}\n[_nghost-%COMP%]     .kh-btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--ent-teal),\n      var(--ent-teal-dark));\n  box-shadow: 0 4px 16px var(--ent-teal-glow);\n}\n[_nghost-%COMP%]     .kh-btn--primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--ent-teal-dark),\n      #147a7a);\n  box-shadow: 0 6px 24px rgba(42, 191, 191, 0.45);\n}\n[_nghost-%COMP%]     .kh-progress__fill {\n  background:\n    linear-gradient(\n      90deg,\n      var(--ent-teal),\n      #5AD5D5);\n}\n[_nghost-%COMP%]     input:focus, [_nghost-%COMP%]     select:focus, [_nghost-%COMP%]     textarea:focus {\n  border-color: var(--ent-teal) !important;\n  box-shadow: 0 0 0 3px rgba(42, 191, 191, 0.15) !important;\n}\n/*# sourceMappingURL=layout-entrepreneur.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutVisitorComponent, { className: "LayoutVisitorComponent", filePath: "app\\layout-visitor\\layout-visitor.component.ts", lineNumber: 14 });
})();

// src/app/layout-visitor/layout-visitor.module.ts
var LayoutVisitorModule = class _LayoutVisitorModule {
  static {
    this.\u0275fac = function LayoutVisitorModule_Factory(t) {
      return new (t || _LayoutVisitorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutVisitorModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule, SharedModule] });
  }
};

// src/app/features/visitor/dashboard/dashboard.component.ts
function VisitorDashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "strong");
    \u0275\u0275text(2, "Profil talent requis");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " pour postuler. Renseignez vos comp\xE9tences sur ");
    \u0275\u0275elementStart(4, "a", 15);
    \u0275\u0275text(5, "Mon profil talent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". ");
    \u0275\u0275elementEnd();
  }
}
function VisitorDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "a", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5, "Offres publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 20)(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, "Mes candidatures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 21)(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 19);
    \u0275\u0275text(15, "Compl\xE9tude du profil");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.annoncesCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.candidaturesCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.profileCompletion, "%");
  }
}
function VisitorDashboardComponent_div_26_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2);
  }
}
function VisitorDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, VisitorDashboardComponent_div_26_li_4_Template, 2, 1, "li", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.aiAdvice);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.aiBullets);
  }
}
var VisitorDashboardComponent = class _VisitorDashboardComponent {
  constructor(auth, talentService) {
    this.auth = auth;
    this.talentService = talentService;
    this.annoncesCount = 0;
    this.candidaturesCount = 0;
    this.loading = true;
    this.profile = null;
    this.aiGoal = "Trouver une annonce backend Spring";
    this.aiLoading = false;
    this.aiAdvice = "";
    this.aiBullets = [];
  }
  ngOnInit() {
    this.talentService.getAnnonces().subscribe({
      next: (list) => {
        this.annoncesCount = list?.length ?? 0;
        this.refreshCandidatures();
      },
      error: () => {
        this.annoncesCount = 0;
        this.refreshCandidatures();
      }
    });
    this.loadProfile();
  }
  refreshCandidatures() {
    const tid = this.auth.currentUser?.talentProfileId;
    if (tid == null) {
      this.candidaturesCount = 0;
      this.loading = false;
      return;
    }
    this.talentService.getCandidaturesParTalent(tid).subscribe({
      next: (c) => {
        this.candidaturesCount = c?.length ?? 0;
        this.loading = false;
      },
      error: () => {
        this.candidaturesCount = 0;
        this.loading = false;
      }
    });
  }
  get hasProfil() {
    return this.auth.currentUser?.talentProfileId != null;
  }
  get profileCompletion() {
    if (!this.profile)
      return 0;
    const checks = [
      this.profile.nom,
      this.profile.prenom,
      this.profile.email,
      this.profile.competences,
      this.profile.bio,
      this.profile.cvUrl,
      this.profile.linkedinUrl
    ];
    const done = checks.filter((v) => !!v && String(v).trim().length > 0).length;
    return Math.round(done / checks.length * 100);
  }
  askAi() {
    const competences = (this.profile?.competences || "").split(",").map((s) => s.trim()).filter(Boolean);
    this.aiLoading = true;
    this.talentService.getTalentAiAdvice({
      goal: this.aiGoal,
      competences,
      niveauExperience: this.profile?.niveauExperience,
      bio: this.profile?.bio
    }).subscribe({
      next: (res) => {
        this.aiAdvice = res.resume;
        this.aiBullets = [...res.competencesPrioritaires ?? [], ...res.nextActions ?? []].slice(0, 5);
        this.aiLoading = false;
      },
      error: () => {
        this.aiAdvice = "Assistant IA momentan\xE9ment indisponible.";
        this.aiBullets = [];
        this.aiLoading = false;
      }
    });
  }
  loadProfile() {
    const tid = this.auth.currentUser?.talentProfileId;
    if (tid == null)
      return;
    this.talentService.getTalentEntity(tid).subscribe({
      next: (p) => this.profile = p,
      error: () => this.profile = null
    });
  }
  static {
    this.\u0275fac = function VisitorDashboardComponent_Factory(t) {
      return new (t || _VisitorDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TalentService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorDashboardComponent, selectors: [["app-visitor-dashboard"]], decls: 27, vars: 7, consts: [[1, "vis-page"], [1, "vis-hero"], ["class", "vis-banner vis-banner--warn", 4, "ngIf"], ["class", "vis-stats", 4, "ngIf"], [1, "vis-actions"], ["routerLink", "/visitor/annonces", 1, "vis-btn", "vis-btn--primary"], ["routerLink", "/visitor/profil", 1, "vis-btn", "vis-btn--ghost"], ["routerLink", "/visitor/candidatures", 1, "vis-btn", "vis-btn--ghost"], [1, "vis-ai-card"], [1, "vis-ai-head"], [1, "vis-ai-badge"], ["rows", "2", "placeholder", "Ex: Devenir top candidat sur les offres Spring/Angular", 3, "ngModelChange", "ngModel"], [1, "vis-btn", "vis-btn--primary", 3, "click", "disabled"], ["class", "vis-ai-result", 4, "ngIf"], [1, "vis-banner", "vis-banner--warn"], ["routerLink", "/visitor/profil"], [1, "vis-stats"], ["routerLink", "/visitor/annonces", 1, "vis-stat-card"], [1, "vis-stat-val"], [1, "vis-stat-lbl"], ["routerLink", "/visitor/candidatures", 1, "vis-stat-card"], ["routerLink", "/visitor/profil", 1, "vis-stat-card"], [1, "vis-ai-result"], [4, "ngFor", "ngForOf"]], template: function VisitorDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Parcourez les offres, compl\xE9tez votre profil talent et pilotez votre strat\xE9gie de candidature.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, VisitorDashboardComponent_div_6_Template, 7, 0, "div", 2)(7, VisitorDashboardComponent_div_7_Template, 16, 3, "div", 3);
        \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
        \u0275\u0275text(10, "Voir les offres");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 6);
        \u0275\u0275text(12, "Mon profil talent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 7);
        \u0275\u0275text(14, "Mes candidatures");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "h3");
        \u0275\u0275text(18, "Assistant IA Carri\xE8re");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "Spring AI ready");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "p");
        \u0275\u0275text(22, "D\xE9cris ton objectif, puis laisse l\u2019IA proposer les prochaines actions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "textarea", 11);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorDashboardComponent_Template_textarea_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.aiGoal, $event) || (ctx.aiGoal = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 12);
        \u0275\u0275listener("click", function VisitorDashboardComponent_Template_button_click_24_listener() {
          return ctx.askAi();
        });
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, VisitorDashboardComponent_div_26_Template, 5, 2, "div", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Bonjour, ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.hasProfil);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.aiGoal);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.aiLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.aiLoading ? "Analyse\u2026" : "G\xE9n\xE9rer un plan IA", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.aiAdvice);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n.vis-page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n  padding: 8px 4px 40px;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    system-ui,\n    sans-serif;\n}\n.vis-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 8px;\n  letter-spacing: -0.3px;\n}\n.vis-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: #64748b;\n  font-size: 15px;\n  line-height: 1.55;\n}\n.vis-banner[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 12px;\n  font-size: 14px;\n  line-height: 1.5;\n  margin-bottom: 22px;\n}\n.vis-banner--warn[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  color: #9a3412;\n}\n.vis-banner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c2410c;\n  font-weight: 600;\n}\n.vis-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.vis-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 20px;\n  border-radius: 14px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.18s, border-color 0.18s;\n}\n.vis-stat-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(29, 158, 117, 0.35);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.vis-stat-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1d9e75;\n}\n.vis-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 500;\n}\n.vis-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.vis-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  background: #fff;\n  color: #334155;\n}\n.vis-btn--primary[_ngcontent-%COMP%] {\n  background: #1d9e75;\n  color: #fff;\n  border-color: #1d9e75;\n}\n.vis-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #0f6e56;\n  border-color: #0f6e56;\n}\n.vis-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.vis-ai-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  background:\n    linear-gradient(\n      160deg,\n      #ffffff,\n      #f8fbfb);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 10px;\n}\n.vis-ai-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.vis-ai-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.vis-ai-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #0f6e56;\n  background: #e1f5ee;\n  padding: 4px 9px;\n  border-radius: 999px;\n}\n.vis-ai-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n.vis-ai-card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n  font-family: inherit;\n}\n.vis-ai-result[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 10px;\n}\n.vis-ai-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0 18px;\n  color: #475569;\n  font-size: 13px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorDashboardComponent, { className: "VisitorDashboardComponent", filePath: "app\\features\\visitor\\dashboard\\dashboard.component.ts", lineNumber: 11 });
})();

// src/app/features/visitor/annonces/annonces.component.ts
function VisitorAnnoncesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function VisitorAnnoncesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function VisitorAnnoncesComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2 === "all" ? "Tous les types" : t_r2);
  }
}
function VisitorAnnoncesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function VisitorAnnoncesComponent_div_18_article_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function VisitorAnnoncesComponent_div_18_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275template(8, VisitorAnnoncesComponent_div_18_article_1_span_8_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function VisitorAnnoncesComponent_div_18_article_1_Template_button_click_9_listener() {
      const a_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPostuler(a_r5));
    });
    \u0275\u0275text(10, " Postuler ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.typePoste);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r5.startupNom || "Startup", " \xB7 ", a_r5.localisation || "\u2014", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skills(a_r5));
  }
}
function VisitorAnnoncesComponent_div_18_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "Aucune offre ne correspond \xE0 votre filtre.");
    \u0275\u0275elementEnd();
  }
}
function VisitorAnnoncesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, VisitorAnnoncesComponent_div_18_article_1_Template, 11, 5, "article", 18)(2, VisitorAnnoncesComponent_div_18_p_2_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredAnnonces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredAnnonces.length === 0);
  }
}
function VisitorAnnoncesComponent_div_19_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, " Vous devez d\u2019abord enregistrer votre ");
    \u0275\u0275elementStart(2, "a", 2);
    \u0275\u0275text(3, "profil talent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
  }
}
function VisitorAnnoncesComponent_div_19_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function VisitorAnnoncesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function VisitorAnnoncesComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function VisitorAnnoncesComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 30)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function VisitorAnnoncesComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275template(8, VisitorAnnoncesComponent_div_19_p_8_Template, 5, 0, "p", 4);
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Message (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorAnnoncesComponent_div_19_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.message, $event) || (ctx_r0.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, VisitorAnnoncesComponent_div_19_p_12_Template, 2, 1, "p", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "footer", 34)(14, "button", 35);
    \u0275\u0275listener("click", function VisitorAnnoncesComponent_div_19_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(15, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 36);
    \u0275\u0275listener("click", function VisitorAnnoncesComponent_div_19_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitPostuler());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Postuler \u2014 ", ctx_r0.selected.titre, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.talentId == null);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.error && ctx_r0.selected);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.submitting || ctx_r0.talentId == null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Envoi\u2026" : "Envoyer la candidature", " ");
  }
}
var VisitorAnnoncesComponent = class _VisitorAnnoncesComponent {
  constructor(talentService, auth) {
    this.talentService = talentService;
    this.auth = auth;
    this.annonces = [];
    this.filteredAnnonces = [];
    this.selected = null;
    this.message = "";
    this.loadingList = true;
    this.submitting = false;
    this.error = "";
    this.success = "";
    this.searchTerm = "";
    this.selectedType = "all";
  }
  ngOnInit() {
    this.talentService.getAnnonces().subscribe({
      next: (data) => {
        this.annonces = data ?? [];
        this.applyFilters();
        this.loadingList = false;
      },
      error: () => {
        this.loadingList = false;
        this.error = "Impossible de charger les offres.";
      }
    });
  }
  get talentId() {
    return this.auth.currentUser?.talentProfileId;
  }
  openPostuler(a) {
    this.error = "";
    this.success = "";
    this.message = "";
    this.selected = a;
  }
  closeModal() {
    this.selected = null;
  }
  submitPostuler() {
    if (!this.selected)
      return;
    const tid = this.talentId;
    if (tid == null) {
      this.error = "Cr\xE9ez d\u2019abord votre profil talent (menu Mon profil talent).";
      return;
    }
    this.submitting = true;
    this.error = "";
    this.talentService.postuler({
      talentId: tid,
      annonceId: this.selected.id,
      message: this.message.trim() || void 0,
      titreAnnonce: this.selected.titre
    }).subscribe({
      next: (c) => {
        this.submitting = false;
        this.success = c.statut === "ENREGISTR\xC9_LOCALEMENT" ? "Candidature enregistr\xE9e sur cet appareil (API candidatures non configur\xE9e)." : "Candidature envoy\xE9e au serveur.";
        this.closeModal();
        setTimeout(() => this.success = "", 5e3);
      },
      error: () => {
        this.submitting = false;
        this.error = "Impossible d\u2019enregistrer la candidature (navigateur ou quota plein).";
      }
    });
  }
  skills(a) {
    if (!a.competencesRequises)
      return [];
    return a.competencesRequises.split(",").map((s) => s.trim()).filter(Boolean);
  }
  get types() {
    const all = this.annonces.map((a) => (a.typePoste || "").trim()).filter(Boolean);
    return ["all", ...Array.from(new Set(all))];
  }
  applyFilters() {
    const q = this.searchTerm.trim().toLowerCase();
    this.filteredAnnonces = this.annonces.filter((a) => {
      const matchesType = this.selectedType === "all" || (a.typePoste || "") === this.selectedType;
      const haystack = `${a.titre} ${a.competencesRequises} ${a.localisation || ""} ${a.startupNom || ""}`.toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      return matchesType && matchesSearch;
    });
  }
  static {
    this.\u0275fac = function VisitorAnnoncesComponent_Factory(t) {
      return new (t || _VisitorAnnoncesComponent)(\u0275\u0275directiveInject(TalentService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorAnnoncesComponent, selectors: [["app-visitor-annonces"]], decls: 20, vars: 9, consts: [[1, "vis-page"], [1, "vis-head"], ["routerLink", "/visitor/profil"], ["class", "vis-alert vis-alert--ok", 4, "ngIf"], ["class", "vis-alert vis-alert--err", 4, "ngIf"], [1, "vis-filters"], ["type", "text", "placeholder", "Rechercher par titre, comp\xE9tence, ville\u2026", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "vis-count"], ["class", "vis-muted", 4, "ngIf"], ["class", "vis-grid", 4, "ngIf"], ["class", "vis-backdrop", 3, "click", 4, "ngIf"], [1, "vis-alert", "vis-alert--ok"], [1, "vis-alert", "vis-alert--err"], [3, "ngValue"], [1, "vis-muted"], [1, "vis-grid"], ["class", "vis-card", 4, "ngFor", "ngForOf"], ["class", "vis-empty", 4, "ngIf"], [1, "vis-card"], [1, "vis-badge"], [1, "vis-meta"], [1, "vis-tags"], ["class", "vis-tag", 4, "ngFor", "ngForOf"], ["type", "button", 1, "vis-btn", "vis-btn--primary", "vis-btn--block", 3, "click"], [1, "vis-tag"], [1, "vis-empty"], [1, "vis-backdrop", 3, "click"], [1, "vis-modal", 3, "click"], [1, "vis-modal__head"], ["type", "button", "aria-label", "Fermer", 1, "vis-icon-x", 3, "click"], [1, "vis-modal__body"], ["rows", "4", "placeholder", "Pr\xE9sentez-vous bri\xE8vement\u2026", 3, "ngModelChange", "ngModel"], [1, "vis-modal__foot"], ["type", "button", 1, "vis-btn", "vis-btn--ghost", 3, "click"], ["type", "button", 1, "vis-btn", "vis-btn--primary", 3, "click", "disabled"]], template: function VisitorAnnoncesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Offres \xE0 pourvoir");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Postulez en un clic une fois votre ");
        \u0275\u0275elementStart(6, "a", 2);
        \u0275\u0275text(7, "profil talent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " cr\xE9\xE9.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, VisitorAnnoncesComponent_div_9_Template, 2, 1, "div", 3)(10, VisitorAnnoncesComponent_div_10_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(11, "div", 5)(12, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorAnnoncesComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function VisitorAnnoncesComponent_Template_input_ngModelChange_12_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorAnnoncesComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function VisitorAnnoncesComponent_Template_select_ngModelChange_13_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275template(14, VisitorAnnoncesComponent_option_14_Template, 2, 2, "option", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, VisitorAnnoncesComponent_div_17_Template, 2, 0, "div", 10)(18, VisitorAnnoncesComponent_div_18_Template, 3, 2, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, VisitorAnnoncesComponent_div_19_Template, 18, 6, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error && !ctx.selected);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.types);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.filteredAnnonces.length, " r\xE9sultat(s)");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loadingList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selected);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n.vis-page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 8px 4px 48px;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    system-ui,\n    sans-serif;\n}\n.vis-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #1a1a2e;\n}\n.vis-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  color: #64748b;\n  font-size: 14px;\n}\n.vis-head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1d9e75;\n  font-weight: 600;\n}\n.vis-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 180px auto;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.vis-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .vis-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 14px;\n  background: #fff;\n}\n.vis-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n  border-radius: 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 600;\n}\n@media (max-width: 760px) {\n  .vis-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.vis-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.vis-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.vis-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.vis-badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #e0f7fa;\n  color: #00695c;\n}\n.vis-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.vis-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.vis-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 10px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  color: #475569;\n}\n.vis-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  background: #fff;\n}\n.vis-btn--primary[_ngcontent-%COMP%] {\n  background: #1d9e75;\n  color: #fff;\n  border-color: #1d9e75;\n}\n.vis-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.vis-btn--ghost[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.vis-btn--block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n}\n.vis-muted[_ngcontent-%COMP%], .vis-empty[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n.vis-alert[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 10px;\n  font-size: 14px;\n  margin-bottom: 14px;\n}\n.vis-alert--ok[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #0f6e56;\n  border: 1px solid #5dca95;\n}\n.vis-alert--err[_ngcontent-%COMP%] {\n  background: #fcebeb;\n  color: #a32d2d;\n  border: 1px solid #f7c1c1;\n}\n.vis-alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: 700;\n}\n.vis-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  padding: 16px;\n}\n.vis-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18);\n}\n.vis-modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.vis-modal__head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.vis-icon-x[_ngcontent-%COMP%] {\n  border: none;\n  background: #f1f5f9;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 20px;\n  line-height: 1;\n  cursor: pointer;\n  color: #64748b;\n}\n.vis-modal__body[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.vis-modal__body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.vis-modal__body[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-family: inherit;\n  font-size: 14px;\n  resize: vertical;\n}\n.vis-modal__foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 18px;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=annonces.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorAnnoncesComponent, { className: "VisitorAnnoncesComponent", filePath: "app\\features\\visitor\\annonces\\annonces.component.ts", lineNumber: 11 });
})();

// src/app/features/visitor/candidatures/candidatures.component.ts
function VisitorCandidaturesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2, "Aucun profil talent li\xE9. Cr\xE9ez votre profil pour postuler et voir vos candidatures ici.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 8);
    \u0275\u0275text(4, "Mon profil talent \u2192");
    \u0275\u0275elementEnd()();
  }
}
function VisitorCandidaturesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function VisitorCandidaturesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function VisitorCandidaturesComponent_ul_8_li_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.message);
  }
}
function VisitorCandidaturesComponent_ul_8_li_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.statut);
  }
}
function VisitorCandidaturesComponent_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "div")(2, "p", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, VisitorCandidaturesComponent_ul_8_li_1_p_6_Template, 2, 1, "p", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VisitorCandidaturesComponent_ul_8_li_1_span_7_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.titreAnnonce || "Annonce #" + c_r2.annonceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Envoy\xE9e le ", ctx_r0.dateLabel(c_r2), " \xB7 Annonce #", c_r2.annonceId, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.statut);
  }
}
function VisitorCandidaturesComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275template(1, VisitorCandidaturesComponent_ul_8_li_1_Template, 8, 5, "li", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.list);
  }
}
function VisitorCandidaturesComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, " Vous n\u2019avez pas encore postul\xE9. ");
    \u0275\u0275elementStart(2, "a", 21);
    \u0275\u0275text(3, "Parcourir les offres");
    \u0275\u0275elementEnd()();
  }
}
var VisitorCandidaturesComponent = class _VisitorCandidaturesComponent {
  constructor(talentService, auth) {
    this.talentService = talentService;
    this.auth = auth;
    this.list = [];
    this.loading = true;
    this.error = "";
  }
  ngOnInit() {
    const tid = this.auth.currentUser?.talentProfileId;
    if (tid == null) {
      this.loading = false;
      return;
    }
    this.talentService.getCandidaturesParTalent(tid).subscribe({
      next: (data) => {
        this.list = [...data ?? []].sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger vos candidatures (v\xE9rifiez GET /api/candidatures/talent/{id}).";
        this.loading = false;
      }
    });
  }
  get hasProfil() {
    return this.auth.currentUser?.talentProfileId != null;
  }
  dateLabel(c) {
    const raw = c.datePostulation || c.createdAt;
    if (!raw)
      return "\u2014";
    try {
      return new Date(raw).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
    } catch {
      return raw;
    }
  }
  static {
    this.\u0275fac = function VisitorCandidaturesComponent_Factory(t) {
      return new (t || _VisitorCandidaturesComponent)(\u0275\u0275directiveInject(TalentService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorCandidaturesComponent, selectors: [["app-visitor-candidatures"]], decls: 10, vars: 5, consts: [[1, "vis-page"], [1, "vis-sub"], ["class", "vis-banner", 4, "ngIf"], ["class", "vis-muted", 4, "ngIf"], ["class", "vis-alert vis-alert--err", 4, "ngIf"], ["class", "vis-list", 4, "ngIf"], ["class", "vis-empty", 4, "ngIf"], [1, "vis-banner"], ["routerLink", "/visitor/profil", 1, "vis-link"], [1, "vis-muted"], [1, "vis-alert", "vis-alert--err"], [1, "vis-list"], ["class", "vis-row", 4, "ngFor", "ngForOf"], [1, "vis-row"], [1, "vis-row__title"], [1, "vis-row__meta"], ["class", "vis-row__msg", 4, "ngIf"], ["class", "vis-status", 4, "ngIf"], [1, "vis-row__msg"], [1, "vis-status"], [1, "vis-empty"], ["routerLink", "/visitor/annonces"]], template: function VisitorCandidaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Mes candidatures");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Historique des offres auxquelles vous avez postul\xE9.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, VisitorCandidaturesComponent_div_5_Template, 5, 0, "div", 2)(6, VisitorCandidaturesComponent_div_6_Template, 2, 0, "div", 3)(7, VisitorCandidaturesComponent_div_7_Template, 2, 1, "div", 4)(8, VisitorCandidaturesComponent_ul_8_Template, 2, 1, "ul", 5)(9, VisitorCandidaturesComponent_p_9_Template, 4, 0, "p", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.hasProfil);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasProfil && !ctx.loading && !ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasProfil && !ctx.loading && ctx.list.length === 0 && !ctx.error);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink], styles: ['\n\n.vis-page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 8px 4px 48px;\n  font-family:\n    "DM Sans",\n    -apple-system,\n    sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #1a1a2e;\n}\n.vis-sub[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  color: #64748b;\n  font-size: 14px;\n}\n.vis-banner[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  margin-bottom: 20px;\n}\n.vis-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #475569;\n  font-size: 14px;\n}\n.vis-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1d9e75;\n  text-decoration: none;\n}\n.vis-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.vis-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n.vis-row__title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n  font-size: 15px;\n  color: #1a1a2e;\n}\n.vis-row__meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.vis-row__msg[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.45;\n}\n.vis-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #e0f7fa;\n  color: #00695c;\n}\n.vis-muted[_ngcontent-%COMP%], .vis-empty[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n.vis-empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1d9e75;\n  font-weight: 600;\n}\n.vis-alert--err[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 10px;\n  background: #fcebeb;\n  color: #a32d2d;\n  border: 1px solid #f7c1c1;\n  font-size: 14px;\n}\n/*# sourceMappingURL=candidatures.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorCandidaturesComponent, { className: "VisitorCandidaturesComponent", filePath: "app\\features\\visitor\\candidatures\\candidatures.component.ts", lineNumber: 11 });
})();

// src/app/features/visitor/profil/profil.component.ts
function VisitorProfilComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError);
  }
}
function VisitorProfilComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function VisitorProfilComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.saveError);
  }
}
function VisitorProfilComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", o_r2.v);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.l);
  }
}
var VisitorProfilComponent = class _VisitorProfilComponent {
  constructor(talentService, auth) {
    this.talentService = talentService;
    this.auth = auth;
    this.form = {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      bio: "",
      competences: "",
      diplomes: "",
      niveauExperience: "JUNIOR",
      cvUrl: "",
      linkedinUrl: ""
    };
    this.loading = false;
    this.loadError = "";
    this.saveError = "";
    this.success = "";
    this.niveaux = [
      { v: "JUNIOR", l: "Junior" },
      { v: "INTERMEDIAIRE", l: "Interm\xE9diaire" },
      { v: "SENIOR", l: "Senior" }
    ];
  }
  ngOnInit() {
    const u = this.auth.currentUser;
    if (u) {
      this.form.prenom = u.prenom ?? "";
      this.form.nom = u.nom ?? "";
      this.form.email = u.email ?? "";
    }
    const tid = u?.talentProfileId;
    if (tid != null) {
      this.loading = true;
      this.talentService.getTalentEntity(tid).subscribe({
        next: (e) => {
          this.form = __spreadValues(__spreadValues({}, this.form), e);
          this.loading = false;
        },
        error: () => {
          this.loadError = "Profil introuvable c\xF4t\xE9 serveur. Vous pouvez en cr\xE9er un nouveau (si l\u2019API le permet).";
          this.loading = false;
        }
      });
    }
  }
  get isUpdate() {
    return this.auth.currentUser?.talentProfileId != null;
  }
  save() {
    if (!this.form.nom?.trim() || !this.form.prenom?.trim() || !this.form.email?.trim()) {
      this.saveError = "Nom, pr\xE9nom et email sont obligatoires.";
      return;
    }
    this.saveError = "";
    this.success = "";
    this.loading = true;
    const tid = this.auth.currentUser?.talentProfileId;
    const obs = tid != null ? this.talentService.modifierProfilTalent(tid, this.form) : this.talentService.creerProfilTalent(this.form);
    obs.subscribe({
      next: (saved) => {
        const id = saved.id ?? tid;
        if (id != null) {
          this.auth.setTalentProfileId(id);
        }
        this.loading = false;
        this.success = tid != null ? "Profil mis \xE0 jour." : "Profil cr\xE9\xE9. Vous pouvez postuler aux offres.";
        setTimeout(() => this.success = "", 5e3);
      },
      error: () => {
        this.loading = false;
        this.saveError = "Erreur API (`POST/PUT /api/talents`). V\xE9rifiez CORS et le backend.";
      }
    });
  }
  static {
    this.\u0275fac = function VisitorProfilComponent_Factory(t) {
      return new (t || _VisitorProfilComponent)(\u0275\u0275directiveInject(TalentService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorProfilComponent, selectors: [["app-visitor-profil"]], decls: 61, vars: 16, consts: [[1, "vis-page"], [1, "vis-sub"], ["class", "vis-alert vis-alert--warn", 4, "ngIf"], ["class", "vis-alert vis-alert--ok", 4, "ngIf"], ["class", "vis-alert vis-alert--err", 4, "ngIf"], [1, "vis-form", 3, "ngSubmit"], [1, "vis-row2"], [1, "vis-field"], ["for", "prenom"], ["id", "prenom", "name", "prenom", "required", "", 3, "ngModelChange", "ngModel"], ["for", "nom"], ["id", "nom", "name", "nom", "required", "", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "name", "email", "type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["for", "tel"], ["id", "tel", "name", "tel", 3, "ngModelChange", "ngModel"], ["for", "bio"], ["id", "bio", "name", "bio", "rows", "3", 3, "ngModelChange", "ngModel"], ["for", "comp"], [1, "hint"], ["id", "comp", "name", "comp", "placeholder", "Java, Spring, Angular", 3, "ngModelChange", "ngModel"], ["for", "dip"], ["id", "dip", "name", "dip", 3, "ngModelChange", "ngModel"], ["for", "nx"], ["id", "nx", "name", "nx", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "cv"], ["id", "cv", "name", "cv", "placeholder", "https://\u2026", 3, "ngModelChange", "ngModel"], ["for", "li"], ["id", "li", "name", "li", "placeholder", "https://linkedin.com/in/\u2026", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "vis-submit", 3, "disabled"], [1, "vis-alert", "vis-alert--warn"], [1, "vis-alert", "vis-alert--ok"], [1, "vis-alert", "vis-alert--err"], [3, "ngValue"]], template: function VisitorProfilComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Mon profil talent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Align\xE9 sur ");
        \u0275\u0275elementStart(5, "code");
        \u0275\u0275text(6, "TalentProfileDTO");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " \u2014 utilis\xE9 pour postuler aux annonces.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, VisitorProfilComponent_div_8_Template, 2, 1, "div", 2)(9, VisitorProfilComponent_div_9_Template, 2, 1, "div", 3)(10, VisitorProfilComponent_div_10_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(11, "form", 5);
        \u0275\u0275listener("ngSubmit", function VisitorProfilComponent_Template_form_ngSubmit_11_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "label", 8);
        \u0275\u0275text(15, "Pr\xE9nom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.prenom, $event) || (ctx.form.prenom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 10);
        \u0275\u0275text(19, "Nom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.nom, $event) || (ctx.form.nom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 7)(22, "label", 12);
        \u0275\u0275text(23, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "label", 14);
        \u0275\u0275text(27, "T\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.telephone, $event) || (ctx.form.telephone = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 7)(30, "label", 16);
        \u0275\u0275text(31, "Bio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "textarea", 17);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_textarea_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.bio, $event) || (ctx.form.bio = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 7)(34, "label", 18);
        \u0275\u0275text(35, "Comp\xE9tences ");
        \u0275\u0275elementStart(36, "span", 19);
        \u0275\u0275text(37, "(s\xE9par\xE9es par des virgules)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.competences, $event) || (ctx.form.competences = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 7)(40, "label", 21);
        \u0275\u0275text(41, "Dipl\xF4mes ");
        \u0275\u0275elementStart(42, "span", 19);
        \u0275\u0275text(43, "(s\xE9par\xE9s par des virgules)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.diplomes, $event) || (ctx.form.diplomes = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 7)(46, "label", 23);
        \u0275\u0275text(47, "Niveau d\u2019exp\xE9rience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "select", 24);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_select_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.niveauExperience, $event) || (ctx.form.niveauExperience = $event);
          return $event;
        });
        \u0275\u0275template(49, VisitorProfilComponent_option_49_Template, 2, 2, "option", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 6)(51, "div", 7)(52, "label", 26);
        \u0275\u0275text(53, "URL CV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.cvUrl, $event) || (ctx.form.cvUrl = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 7)(56, "label", 28);
        \u0275\u0275text(57, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorProfilComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.linkedinUrl, $event) || (ctx.form.linkedinUrl = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "button", 30);
        \u0275\u0275text(60);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.loadError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.saveError);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.prenom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.nom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.telephone);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.bio);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.competences);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.diplomes);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.niveauExperience);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.niveaux);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.cvUrl);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.linkedinUrl);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Enregistrement\u2026" : ctx.isUpdate ? "Mettre \xE0 jour" : "Cr\xE9er mon profil", " ");
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.vis-page[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n  padding: 8px 4px 48px;\n  font-family:\n    "DM Sans",\n    -apple-system,\n    sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 8px;\n  color: #1a1a2e;\n}\n.vis-sub[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #64748b;\n  font-size: 14px;\n}\n.vis-sub[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.vis-form[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 14px;\n  padding: 22px;\n}\n.vis-row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 520px) {\n  .vis-row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.vis-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.vis-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #94a3b8;\n}\n.vis-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .vis-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .vis-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 14px;\n  font-family: inherit;\n}\n.vis-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .vis-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .vis-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1d9e75;\n  box-shadow: 0 0 0 3px rgba(29, 158, 117, 0.15);\n}\n.vis-submit[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  background: #1d9e75;\n  color: #fff;\n  cursor: pointer;\n}\n.vis-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.vis-alert[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 10px;\n  font-size: 14px;\n  margin-bottom: 14px;\n}\n.vis-alert--ok[_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #0f6e56;\n  border: 1px solid #5dca95;\n}\n.vis-alert--err[_ngcontent-%COMP%] {\n  background: #fcebeb;\n  color: #a32d2d;\n  border: 1px solid #f7c1c1;\n}\n.vis-alert--warn[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #9a3412;\n  border: 1px solid #fed7aa;\n}\n/*# sourceMappingURL=profil.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorProfilComponent, { className: "VisitorProfilComponent", filePath: "app\\features\\visitor\\profil\\profil.component.ts", lineNumber: 11 });
})();

// src/app/features/visitor/visitor.module.ts
var routes = [
  {
    path: "",
    component: LayoutVisitorComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: VisitorDashboardComponent },
      { path: "annonces", component: VisitorAnnoncesComponent },
      { path: "candidatures", component: VisitorCandidaturesComponent },
      { path: "profil", component: VisitorProfilComponent }
    ]
  }
];
var VisitorModule = class _VisitorModule {
  static {
    this.\u0275fac = function VisitorModule_Factory(t) {
      return new (t || _VisitorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      LayoutVisitorModule,
      RouterModule.forChild(routes)
    ] });
  }
};
export {
  VisitorModule
};
//# sourceMappingURL=chunk-PCKKMXTK.js.map
