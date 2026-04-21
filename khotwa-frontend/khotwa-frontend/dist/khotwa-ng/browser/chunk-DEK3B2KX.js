import {
  ProjetService,
  RessourceService
} from "./chunk-L4ICDUQV.js";
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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-S476STP4.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  DomSanitizer,
  JsonPipe,
  NavigationEnd,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgZone,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
  filter,
  forkJoin,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FQARK65W.js";

// src/app/layout-coach/layout-coach.component.ts
function LayoutCoachComponent_a_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function LayoutCoachComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "span", 35);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LayoutCoachComponent_a_8_span_4_Template, 1, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("coach-link--active", ctx_r1.isActive(item_r1.route));
    \u0275\u0275property("routerLink", ctx_r1.getRoute(item_r1.route));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.getIcon(item_r1.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActive(item_r1.route));
  }
}
function LayoutCoachComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nonLus);
  }
}
function LayoutCoachComponent_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function LayoutCoachComponent_div_19_div_6_Template_div_click_0_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.notifService.markRead(n_r5.id));
    });
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementStart(2, "div")(3, "p", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r5.lu);
    \u0275\u0275advance();
    \u0275\u0275classMap("dot-" + n_r5.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.message);
  }
}
function LayoutCoachComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function LayoutCoachComponent_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.notifService.markAllRead();
      return \u0275\u0275resetView(ctx_r1.notifOpen = false);
    });
    \u0275\u0275text(5, "Mark all read");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LayoutCoachComponent_div_19_div_6_Template, 7, 6, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.notifs);
  }
}
function LayoutCoachComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "p", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function LayoutCoachComponent_div_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275element(7, "span", 14);
    \u0275\u0275text(8, "Sign out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.prenom, " ", ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r1.getIcon("logout"), \u0275\u0275sanitizeHtml);
  }
}
function LayoutCoachComponent_a_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275listener("click", function LayoutCoachComponent_a_38_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileOpen = false);
    });
    \u0275\u0275element(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isActive(item_r8.route));
    \u0275\u0275property("routerLink", ctx_r1.getRoute(item_r8.route));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.getIcon(item_r8.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.label, " ");
  }
}
function LayoutCoachComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function LayoutCoachComponent_div_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var LayoutCoachComponent = class _LayoutCoachComponent {
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
      { label: "Projects", icon: "folder", route: "projets" },
      { label: "My Startups", icon: "rocket", route: "startups" },
      { label: "Validations", icon: "check", route: "validations" },
      { label: "Planning", icon: "calendar", route: "planning" },
      { label: "Messages", icon: "message", route: "messages" },
      { label: "Library", icon: "book", route: "bibliotheque" },
      { label: "Progress", icon: "progress", route: "progressions" },
      { label: "Talent", icon: "people", route: "talent" }
    ];
    this.svgIcons = {
      dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
      folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      rocket: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
      calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      message: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      progress: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
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
    return `/coach/${route}`;
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
    this.\u0275fac = function LayoutCoachComponent_Factory(t) {
      return new (t || _LayoutCoachComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutCoachComponent, selectors: [["app-layout-coach"]], hostBindings: function LayoutCoachComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function LayoutCoachComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 46, vars: 20, consts: [[1, "coach-shell"], [1, "coach-nav"], [1, "coach-nav__inner"], ["routerLink", "/coach/dashboard", 1, "coach-brand"], ["src", "assets/khotwa-logo.png", "alt", "KHOTWA", 1, "brand-logo-img", 2, "height", "32px", "width", "auto", "object-fit", "contain"], [1, "coach-brand__tag"], [1, "coach-nav__links"], ["class", "coach-link", 3, "coach-link--active", "routerLink", 4, "ngFor", "ngForOf"], [1, "coach-nav__actions"], ["routerLink", "/coach/validations", "title", "Pending validations", 1, "coach-quick-badge"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 11l3 3L22 4"], [1, "notif-wrapper"], [1, "coach-icon-btn", 3, "click"], [3, "innerHTML"], ["class", "coach-notif-dot", 4, "ngIf"], ["class", "coach-notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Home", 1, "coach-icon-btn"], [1, "coach-user", 3, "click"], [1, "coach-user__avatar"], [1, "coach-user__info"], [1, "coach-user__name"], [1, "coach-user__role"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "coach-user__caret"], ["d", "m6 9 6 6 6-6"], ["class", "coach-user__menu", 4, "ngIf"], [1, "coach-burger", 3, "click"], [1, "coach-mobile-nav"], ["class", "coach-mobile-link", 3, "active", "routerLink", "click", 4, "ngFor", "ngForOf"], ["class", "coach-overlay", 3, "click", 4, "ngIf"], [1, "coach-accent-bar"], [1, "coach-accent-bar__glow"], [1, "coach-main"], [1, "coach-content"], [1, "coach-link", 3, "routerLink"], [1, "coach-link__icon", 3, "innerHTML"], ["class", "coach-link__indicator", 4, "ngIf"], [1, "coach-link__indicator"], [1, "coach-notif-dot"], [1, "coach-notif-panel"], [1, "coach-notif-panel__head"], [3, "click"], ["class", "coach-notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "coach-notif-item", 3, "click"], [1, "coach-notif-dot-item"], [1, "coach-notif-title"], [1, "coach-notif-msg"], [1, "coach-user__menu"], [1, "coach-user__menu-header"], [1, "cmenu-name"], [1, "cmenu-email"], [1, "cmenu-item", "cmenu-item--logout", 3, "click"], [1, "coach-mobile-link", 3, "click", "routerLink"], [1, "coach-overlay", 3, "click"]], template: function LayoutCoachComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "Coach");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 6);
        \u0275\u0275template(8, LayoutCoachComponent_a_8_Template, 5, 6, "a", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "a", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 10);
        \u0275\u0275element(12, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "5");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
        \u0275\u0275listener("click", function LayoutCoachComponent_Template_button_click_16_listener() {
          return ctx.notifOpen = !ctx.notifOpen;
        });
        \u0275\u0275element(17, "span", 14);
        \u0275\u0275template(18, LayoutCoachComponent_span_18_Template, 2, 1, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, LayoutCoachComponent_div_19_Template, 7, 1, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 17);
        \u0275\u0275element(21, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 18);
        \u0275\u0275listener("click", function LayoutCoachComponent_Template_div_click_22_listener() {
          return ctx.userMenuOpen = !ctx.userMenuOpen;
        });
        \u0275\u0275elementStart(23, "div", 19);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 20)(26, "span", 21);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 22);
        \u0275\u0275text(29, "Coach Expert");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 23);
        \u0275\u0275element(31, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, LayoutCoachComponent_div_32_Template, 9, 4, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "button", 26);
        \u0275\u0275listener("click", function LayoutCoachComponent_Template_button_click_33_listener() {
          return ctx.mobileOpen = !ctx.mobileOpen;
        });
        \u0275\u0275element(34, "span")(35, "span")(36, "span");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 27);
        \u0275\u0275template(38, LayoutCoachComponent_a_38_Template, 3, 5, "a", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(39, LayoutCoachComponent_div_39_Template, 1, 0, "div", 29);
        \u0275\u0275elementStart(40, "div", 30);
        \u0275\u0275element(41, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "main", 32)(43, "div", 33);
        \u0275\u0275element(44, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(45, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("coach-nav--scrolled", ctx.scrolled);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", ctx.notifOpen);
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", ctx.getIcon("bell"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.nonLus > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notifOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", ctx.getIcon("home"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userInitials);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("flipped", ctx.userMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.userMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.mobileOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.mobileOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mobileOpen);
      }
    }, dependencies: [NgForOf, NgIf, RouterOutlet, RouterLink, FooterComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --coach-violet: #0d4a38;\n  --coach-violet-dark: #083528;\n  --coach-violet-glow: rgba(13,74,56,0.40);\n  --coach-violet-light: rgba(13,74,56,0.12);\n  --coach-deep: #020d09;\n  --coach-nav-h: 64px;\n}\n.coach-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #EFF8F5;\n}\n.coach-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  height: var(--coach-nav-h);\n  background: rgba(2, 15, 9, 0.94);\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n  border-bottom: 1px solid rgba(13, 74, 56, 0.20);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n.coach-nav--scrolled[_ngcontent-%COMP%] {\n  background: rgba(2, 15, 9, 0.99);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(13, 74, 56, 0.15);\n}\n.coach-nav__inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  gap: 0;\n}\n.coach-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  margin-right: 32px;\n  flex-shrink: 0;\n}\n.coach-brand__icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--coach-violet),\n      var(--coach-violet-dark));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 18px var(--coach-violet-glow);\n}\n.coach-brand__name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #E6F5EF;\n}\n.coach-brand__tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #7EC8A8;\n  background: rgba(13, 74, 56, 0.12);\n  border: 1px solid rgba(13, 74, 56, 0.28);\n  border-radius: 6px;\n  padding: 2px 7px;\n}\n.coach-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n}\n.coach-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(210, 240, 228, 0.45);\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n}\n.coach-link[_ngcontent-%COMP%]:hover {\n  color: rgba(210, 240, 228, 0.92);\n  background: rgba(13, 74, 56, 0.10);\n}\n.coach-link__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  flex-shrink: 0;\n  opacity: 0.55;\n  transition: opacity 0.18s;\n}\n.coach-link[_ngcontent-%COMP%]:hover   .coach-link__icon[_ngcontent-%COMP%] {\n  opacity: 0.88;\n}\n.coach-link--active[_ngcontent-%COMP%] {\n  color: #7EC8A8 !important;\n  background: rgba(13, 74, 56, 0.20) !important;\n  font-weight: 600;\n}\n.coach-link--active[_ngcontent-%COMP%]   .coach-link__icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.coach-link__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 16px;\n  height: 2px;\n  border-radius: 99px;\n  background: #7EC8A8;\n  box-shadow: 0 0 10px var(--coach-violet);\n}\n.coach-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.coach-quick-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  border-radius: 8px;\n  background: rgba(13, 74, 56, 0.12);\n  border: 1px solid rgba(13, 74, 56, 0.30);\n  color: #7EC8A8;\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.18s;\n}\n.coach-quick-badge[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 74, 56, 0.25);\n  border-color: rgba(13, 74, 56, 0.50);\n}\n.coach-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(13, 74, 56, 0.12);\n  color: rgba(210, 240, 228, 0.55);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.18s;\n  text-decoration: none;\n}\n.coach-icon-btn[_ngcontent-%COMP%]:hover, .coach-icon-btn.active[_ngcontent-%COMP%] {\n  background: rgba(13, 74, 56, 0.15);\n  border-color: rgba(13, 74, 56, 0.30);\n  color: #7EC8A8;\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.coach-notif-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #E84A4A;\n  color: white;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--coach-deep);\n}\n.coach-notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 320px;\n  background: #051a10;\n  border: 1px solid rgba(13, 74, 56, 0.22);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(13, 74, 56, 0.08);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.2s both;\n  z-index: 300;\n}\n.coach-notif-panel__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(13, 74, 56, 0.15);\n  font-weight: 700;\n  font-size: 13px;\n  color: rgba(210, 240, 228, 0.9);\n}\n.coach-notif-panel__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  color: #7EC8A8;\n  font-weight: 600;\n}\n.coach-notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.coach-notif-item.unread[_ngcontent-%COMP%] {\n  background: rgba(13, 74, 56, 0.07);\n}\n.coach-notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 74, 56, 0.12);\n}\n.coach-notif-dot-item[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.coach-notif-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: rgba(210, 240, 228, 0.9);\n}\n.coach-notif-msg[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(210, 240, 228, 0.4);\n  margin-top: 2px;\n}\n.coach-user[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 5px 10px 5px 5px;\n  border-radius: 10px;\n  border: 1px solid rgba(13, 74, 56, 0.20);\n  background: rgba(255, 255, 255, 0.04);\n  cursor: pointer;\n  transition: all 0.18s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.coach-user[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 74, 56, 0.10);\n  border-color: rgba(13, 74, 56, 0.35);\n}\n.coach-user__avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--coach-violet),\n      var(--coach-violet-dark));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px var(--coach-violet-glow);\n}\n.coach-user__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.coach-user__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: rgba(210, 240, 228, 0.9);\n  line-height: 1.2;\n}\n.coach-user__role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #7EC8A8;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n}\n.coach-user__caret[_ngcontent-%COMP%] {\n  color: rgba(210, 240, 228, 0.3);\n  transition: transform 0.2s;\n}\n.coach-user__caret.flipped[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.coach-user__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 200px;\n  background: #051a10;\n  border: 1px solid rgba(13, 74, 56, 0.22);\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.18s both;\n  z-index: 300;\n}\n.coach-user__menu-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(13, 74, 56, 0.12);\n}\n.cmenu-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(210, 240, 228, 0.9);\n}\n.cmenu-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(210, 240, 228, 0.4);\n  margin-top: 2px;\n}\n.cmenu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 11px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(210, 240, 228, 0.65);\n  transition: all 0.15s;\n  text-align: left;\n}\n.cmenu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 74, 56, 0.10);\n  color: rgba(210, 240, 228, 0.95);\n}\n.cmenu-item--logout[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 74, 74, 0.12);\n  color: #E84A4A;\n}\n.coach-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.coach-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: rgba(210, 240, 228, 0.65);\n  border-radius: 2px;\n  transition: all 0.25s;\n}\n.coach-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.coach-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.coach-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.coach-mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: #051a10;\n  border-top: 1px solid rgba(13, 74, 56, 0.15);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.coach-mobile-nav.open[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.coach-mobile-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 24px;\n  color: rgba(210, 240, 228, 0.5);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 1px solid rgba(13, 74, 56, 0.08);\n  transition: all 0.15s;\n}\n.coach-mobile-link[_ngcontent-%COMP%]:hover, .coach-mobile-link.active[_ngcontent-%COMP%] {\n  background: rgba(13, 74, 56, 0.10);\n  color: #7EC8A8;\n}\n.coach-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 190;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.coach-accent-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #083528,\n      #0d4a38,\n      #7EC8A8,\n      #0d4a38,\n      #083528);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_gradientShift 6s linear infinite;\n  position: relative;\n}\n.coach-accent-bar__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: inherit;\n  filter: blur(6px);\n  opacity: 0.5;\n}\n.coach-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.coach-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 28px;\n}\n@media (max-width: 1100px) {\n  .coach-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.coach-link__icon):not(.coach-link__indicator) {\n    display: none;\n  }\n  .coach-link[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n}\n@media (max-width: 768px) {\n  .coach-nav__links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .coach-burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .coach-mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .coach-user__info[_ngcontent-%COMP%], .coach-user__caret[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .coach-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .coach-quick-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n[_nghost-%COMP%]     .kh-card {\n  background: white;\n  border: 1px solid rgba(13, 74, 56, 0.10);\n  border-radius: 16px;\n}\n[_nghost-%COMP%]     .kh-btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--coach-violet),\n      var(--coach-violet-dark));\n  box-shadow: 0 4px 16px var(--coach-violet-glow);\n}\n[_nghost-%COMP%]     .kh-btn--primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0b3d2e,\n      #062a1f);\n  box-shadow: 0 6px 24px rgba(13, 74, 56, 0.50);\n  transform: translateY(-1px);\n}\n[_nghost-%COMP%]     .kh-progress__fill {\n  background:\n    linear-gradient(\n      90deg,\n      var(--coach-violet),\n      #7EC8A8);\n}\n[_nghost-%COMP%]     .kh-progress__fill--teal {\n  background:\n    linear-gradient(\n      90deg,\n      var(--coach-violet),\n      #7EC8A8);\n}\n[_nghost-%COMP%]     input:focus, [_nghost-%COMP%]     select:focus, [_nghost-%COMP%]     textarea:focus {\n  border-color: var(--coach-violet) !important;\n  box-shadow: 0 0 0 3px rgba(13, 74, 56, 0.12) !important;\n}\n[_nghost-%COMP%]     .kpi-card--coach {\n  background:\n    linear-gradient(\n      135deg,\n      #0d4a38,\n      #083528);\n}\n/*# sourceMappingURL=layout-coach.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutCoachComponent, { className: "LayoutCoachComponent", filePath: "app\\layout-coach\\layout-coach.component.ts", lineNumber: 14 });
})();

// src/app/layout-coach/layout-coach.module.ts
var LayoutCoachModule = class _LayoutCoachModule {
  static {
    this.\u0275fac = function LayoutCoachModule_Factory(t) {
      return new (t || _LayoutCoachModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutCoachModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule, SharedModule] });
  }
};

// src/app/features/coach/dashboard/dashboard.component.ts
function CoachDashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "p", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275element(7, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "strong", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.titre[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r1.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r1.progression, "%");
  }
}
function CoachDashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div")(2, "p", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "button", 32);
    \u0275\u0275text(8, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 33);
    \u0275\u0275text(10, "\u2717");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r2.task);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.startup);
  }
}
var CoachDashboardComponent = class _CoachDashboardComponent {
  constructor(projetService) {
    this.projetService = projetService;
    this.validations = [
      { id: "v1", task: "Prototype UI \u2014 E-Learning", startup: "EduTech Pro (Sara)", doc: "maquette_v2.pdf" },
      { id: "v2", task: "Tests QA HealthMobile", startup: "HealthMobile (Sara)", doc: "rapport_tests.pdf" }
    ];
  }
  get projets() {
    return this.projetService.projets;
  }
  static {
    this.\u0275fac = function CoachDashboardComponent_Factory(t) {
      return new (t || _CoachDashboardComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachDashboardComponent, selectors: [["app-coach-dashboard"]], decls: 46, vars: 2, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/coach/planning", 1, "kh-btn", "kh-btn--primary"], [1, "kpi-grid", "animate-2"], [1, "kpi-card", "kpi-card--coach"], [1, "kpi-value", 2, "color", "white"], [1, "kpi-label", 2, "color", "rgba(255,255,255,0.7)"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-value", "kpi-alert"], [1, "bottom-grid", "animate-3"], [1, "kh-card", "panel"], [1, "panel-header"], [1, "kh-section-title"], ["routerLink", "/coach/startups", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], ["class", "startup-row", 4, "ngFor", "ngForOf"], ["routerLink", "/coach/validations", 1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "val-list"], ["class", "val-item", 4, "ngFor", "ngForOf"], [1, "startup-row"], [1, "startup-avatar"], [2, "flex", "1"], [2, "font-size", "13px", "font-weight", "600"], [1, "kh-progress", 2, "margin-top", "5px"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "font-size", "12px", "color", "var(--teal)"], [1, "val-item"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "display", "flex", "gap", "6px"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--green)", "color", "white"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"]], template: function CoachDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Coach Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Welcome Ahmed \u2014 manage your supported startups");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "\u{1F4C5} My availability");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "p", 7);
        \u0275\u0275text(12, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14, "Supported startups");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "p", 10);
        \u0275\u0275text(17, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 11);
        \u0275\u0275text(19, "Pending validations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "p", 10);
        \u0275\u0275text(22, "8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 11);
        \u0275\u0275text(24, "Sessions this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "p", 12);
        \u0275\u0275text(27, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 11);
        \u0275\u0275text(29, "SLA alerts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "span", 16);
        \u0275\u0275text(34, "My Startups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "a", 17);
        \u0275\u0275text(36, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, CoachDashboardComponent_div_37_Template, 10, 5, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 14)(39, "div", 15)(40, "span", 16);
        \u0275\u0275text(41, "Pending validations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 19);
        \u0275\u0275text(43, "Review");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 20);
        \u0275\u0275template(45, CoachDashboardComponent_div_45_Template, 11, 2, "div", 21);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(37);
        \u0275\u0275property("ngForOf", ctx.projets.slice(0, 3));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.validations);
      }
    }, dependencies: [NgForOf, RouterLink], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 14px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 18px 20px;\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n}\n.kpi-card--coach[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #5a3a9f);\n  border: none;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.kpi-alert[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 18px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.startup-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.startup-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.startup-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #5a3a9f);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.val-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.val-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 12px;\n  background: var(--bg-app);\n  border-radius: var(--radius-sm);\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachDashboardComponent, { className: "CoachDashboardComponent", filePath: "app\\features\\coach\\dashboard\\dashboard.component.ts", lineNumber: 4 });
})();

// src/app/features/coach/projets/projets.component.ts
function CoachProjetsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "div", 13)(13, "span", 14);
    \u0275\u0275text(14, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16);
    \u0275\u0275element(18, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "button", 19);
    \u0275\u0275text(21, "View details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 20);
    \u0275\u0275text(23, "Schedule session");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.titre[0]);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r1.status === "in_progress" ? "kh-badge--teal" : p_r1.status === "completed" ? "kh-badge--green" : "kh-badge--amber");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, p_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", p_r1.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r1.progression, "%");
  }
}
var CoachProjetsComponent = class _CoachProjetsComponent {
  constructor(projetService) {
    this.projetService = projetService;
  }
  get projets() {
    return this.projetService.projets;
  }
  static {
    this.\u0275fac = function CoachProjetsComponent_Factory(t) {
      return new (t || _CoachProjetsComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachProjetsComponent, selectors: [["app-coach-projets"]], decls: 8, vars: 2, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "grid", "animate-2"], ["class", "card kh-card", 4, "ngFor", "ngForOf"], [1, "card", "kh-card"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "14px"], [1, "startup-icon"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta"], [2, "margin", "14px 0 8px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "kh-progress"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "display", "flex", "gap", "8px", "padding-top", "12px", "border-top", "1px solid var(--border)"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--violet)", "color", "white"]], template: function CoachProjetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "My Supported Startups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, CoachProjetsComponent_div_7_Template, 24, 11, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.projets.length, " project(s)");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.projets);
      }
    }, dependencies: [NgForOf, UpperCasePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.startup-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #5a3a9f);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n}\n.val-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.val-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  transition: opacity 0.2s;\n}\n.val-card.done[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.val-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.val-status-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.val-tache[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 3px;\n}\n.val-startup[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--violet);\n  font-weight: 600;\n}\n.val-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.val-doc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: var(--orange-light);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--orange);\n  flex-shrink: 0;\n}\n.val-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=projets.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachProjetsComponent, { className: "CoachProjetsComponent", filePath: "app\\features\\coach\\projets\\projets.component.ts", lineNumber: 4 });
})();

// src/app/features/coach/startups/startups.component.ts
function CoachStartupsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "div", 13)(13, "span", 14);
    \u0275\u0275text(14, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16);
    \u0275\u0275element(18, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "button", 19);
    \u0275\u0275text(21, "View details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 20);
    \u0275\u0275text(23, "Schedule session");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.titre[0]);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r1.status === "in_progress" ? "kh-badge--teal" : p_r1.status === "completed" ? "kh-badge--green" : "kh-badge--amber");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, p_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", p_r1.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r1.progression, "%");
  }
}
var CoachStartupsComponent = class _CoachStartupsComponent {
  constructor(projetService) {
    this.projetService = projetService;
  }
  get projets() {
    return this.projetService.projets;
  }
  static {
    this.\u0275fac = function CoachStartupsComponent_Factory(t) {
      return new (t || _CoachStartupsComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachStartupsComponent, selectors: [["app-coach-startups"]], decls: 8, vars: 2, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "grid", "animate-2"], ["class", "card kh-card", 4, "ngFor", "ngForOf"], [1, "card", "kh-card"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "14px"], [1, "startup-icon"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta"], [2, "margin", "14px 0 8px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "kh-progress"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "display", "flex", "gap", "8px", "padding-top", "12px", "border-top", "1px solid var(--border)"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--violet)", "color", "white"]], template: function CoachStartupsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "My Supported Startups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, CoachStartupsComponent_div_7_Template, 24, 11, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.projets.length, " project(s)");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.projets);
      }
    }, dependencies: [NgForOf, UpperCasePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.startup-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #5a3a9f);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n}\n.val-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.val-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  transition: opacity 0.2s;\n}\n.val-card.done[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.val-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.val-status-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.val-tache[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 3px;\n}\n.val-startup[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--violet);\n  font-weight: 600;\n}\n.val-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.val-doc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: var(--orange-light);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--orange);\n  flex-shrink: 0;\n}\n.val-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=startups.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachStartupsComponent, { className: "CoachStartupsComponent", filePath: "app\\features\\coach\\startups\\startups.component.ts", lineNumber: 4 });
})();

// src/app/features/coach/validations/validations.component.ts
function CoachValidationsComponent_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function CoachValidationsComponent_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function CoachValidationsComponent_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function CoachValidationsComponent_div_7_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 19);
    \u0275\u0275listener("click", function CoachValidationsComponent_div_7_ng_container_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const v_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.validate(v_r2.id));
    });
    \u0275\u0275text(2, "\u2713 Validate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function CoachValidationsComponent_div_7_ng_container_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const v_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(v_r2.id));
    });
    \u0275\u0275text(4, "\u2717 Rejeter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CoachValidationsComponent_div_7_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(v_r2.status === "approved" ? "kh-badge--green" : "kh-badge--red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r2.status);
  }
}
function CoachValidationsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275template(3, CoachValidationsComponent_div_7_span_3_Template, 2, 0, "span", 9)(4, CoachValidationsComponent_div_7_span_4_Template, 2, 0, "span", 9)(5, CoachValidationsComponent_div_7_span_5_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 14);
    \u0275\u0275element(15, "path", 15)(16, "polyline", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17);
    \u0275\u0275template(20, CoachValidationsComponent_div_7_ng_container_20_Template, 5, 0, "ng-container", 9)(21, CoachValidationsComponent_div_7_span_21_Template, 2, 3, "span", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    \u0275\u0275classProp("done", v_r2.status !== "pending");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", v_r2.status === "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r2.status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r2.status === "pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r2.task);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.startup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Submitted on ", v_r2.date, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(v_r2.doc);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", v_r2.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", v_r2.status !== "pending");
  }
}
var CoachValidationsComponent = class _CoachValidationsComponent {
  constructor() {
    this.validations = [
      { id: "v1", task: "Prototype UI \u2014 E-Learning", startup: "EduTech Pro (Sara)", doc: "maquette_v2.pdf", status: "pending", date: "2024-12-01" },
      { id: "v2", task: "Tests QA HealthMobile", startup: "HealthMobile (Sara)", doc: "rapport_tests.pdf", status: "pending", date: "2024-12-02" },
      { id: "v3", task: "Business Plan AgriSmart", startup: "AgriSmart (Sara)", doc: "business_plan_v3.pdf", status: "approved", date: "2024-11-28" }
    ];
  }
  validate(id) {
    const v = this.validations.find((x) => x.id === id);
    if (v)
      v.status = "approved";
  }
  reject(id) {
    const v = this.validations.find((x) => x.id === id);
    if (v)
      v.status = "rejected";
  }
  static {
    this.\u0275fac = function CoachValidationsComponent_Factory(t) {
      return new (t || _CoachValidationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachValidationsComponent, selectors: [["app-coach-validations"]], decls: 8, vars: 1, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "val-list", "animate-2"], ["class", "val-card kh-card", 3, "done", 4, "ngFor", "ngForOf"], [1, "val-card", "kh-card"], [1, "val-left"], [1, "val-status-icon"], [4, "ngIf"], [1, "val-tache"], [1, "val-startup"], [1, "val-date"], [1, "val-doc"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], ["points", "14 2 14 8 20 8"], [1, "val-actions"], ["class", "kh-badge", 3, "class", 4, "ngIf"], [1, "kh-btn", "kh-btn--sm", 2, "background", "var(--green)", "color", "white", 3, "click"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", 3, "click"], [1, "kh-badge"]], template: function CoachValidationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Proof-Based Validations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Review and validate submitted tasks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, CoachValidationsComponent_div_7_Template, 22, 11, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.validations);
      }
    }, dependencies: [NgForOf, NgIf], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.startup-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #5a3a9f);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n}\n.val-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.val-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  transition: opacity 0.2s;\n}\n.val-card.done[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.val-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.val-status-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.val-tache[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 3px;\n}\n.val-startup[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--violet);\n  font-weight: 600;\n}\n.val-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.val-doc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: var(--orange-light);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--orange);\n  flex-shrink: 0;\n}\n.val-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=validations.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachValidationsComponent, { className: "CoachValidationsComponent", filePath: "app\\features\\coach\\validations\\validations.component.ts", lineNumber: 3 });
})();

// src/app/features/coach/planning/planning.component.ts
function CoachPlanningComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1);
  }
}
function CoachPlanningComponent_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r2.day);
  }
}
function CoachPlanningComponent_div_21_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r3 = ctx.$implicit;
    \u0275\u0275styleProp("background", ev_r3.couleur + "22")("color", ev_r3.couleur);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r3.titre);
  }
}
function CoachPlanningComponent_div_21_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", cell_r2.events.length - 2, "");
  }
}
function CoachPlanningComponent_div_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CoachPlanningComponent_div_21_ng_container_2_div_1_Template, 2, 5, "div", 29)(2, CoachPlanningComponent_div_21_ng_container_2_span_2_Template, 2, 1, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", cell_r2.events.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r2.events.length > 2);
  }
}
function CoachPlanningComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, CoachPlanningComponent_div_21_span_1_Template, 2, 1, "span", 26)(2, CoachPlanningComponent_div_21_ng_container_2_Template, 3, 2, "ng-container", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("today", ctx_r3.isToday(cell_r2.day))("empty", !cell_r2.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r2.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r2.day);
  }
}
function CoachPlanningComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "div")(3, "p", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ev_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ev_r5.couleur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ev_r5.date, " ", ctx_r3.monthNames[ctx_r3.currentMonth], "");
  }
}
var CoachPlanningComponent = class _CoachPlanningComponent {
  constructor(projetService, auth) {
    this.projetService = projetService;
    this.auth = auth;
    this.filtre = "all";
    this.search = "";
    this.selectedConv = null;
    this.newMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    this.calEvents = [
      { id: "e1", titre: "Pitch Day", date: 5, type: "evenement", couleur: "#E8622A" },
      { id: "e2", titre: "Livraison MVP", date: 12, type: "deadline", couleur: "#E84A4A" },
      { id: "e3", titre: "Sprint Review", date: 15, type: "rdv", couleur: "#2ABFBF" },
      { id: "e7", titre: "Onboarding", date: this.today.getDate(), type: "rdv", couleur: "#2ABFBF" }
    ];
    this.conversations = [
      { id: "c1", nom: "Sara Trabelsi", initials: "ST", color: "#2ABFBF", lastMsg: "Hello!", time: "11:24", unread: 2, messages: [{ from: "Sara", text: "Hello! Update done", time: "11:20", mine: false }] },
      { id: "c2", nom: "Ahmed Coach", initials: "AC", color: "#7C5CBF", lastMsg: "Session confirm\xE9e", time: "10:15", unread: 0, messages: [{ from: "Ahmed", text: "Session vendredi 14h", time: "10:15", mine: false }] }
    ];
    this.workflows = [
      { id: "w1", nom: "Proof-based validation", desc: "Verifies that the required document is present", trigger: "On submission", status: "ACTIVE", etapes: ["Task submission", "Doc verification", "Coach notification", "Validation"], runs: 34, icone: "\u2705", color: "#27AE7A" },
      { id: "w2", nom: "Alerte SLA", desc: "Notification if blocked > 15 days", trigger: "Daily cron", status: "ACTIVE", etapes: ["DB scan", "Delay calc", "SLA > 15d?", "Notification"], runs: 87, icone: "\u23F0", color: "#E8622A" },
      { id: "w3", nom: "Propagation Retard", desc: "Recalculates dates when critically delayed", trigger: "Task update", status: "ACTIVE", etapes: ["Delay detection", "Impact?", "Date recalc", "Team notif"], runs: 12, icone: "\u{1F4C5}", color: "#2ABFBF" },
      { id: "w4", nom: "Alerte Deadline 24h", desc: "Push notification before deadline", trigger: "Cron every 6h", status: "ACTIVE", etapes: ["Deadline scan", "< 24h?", "Email + Push", "Log"], runs: 156, icone: "\u{1F514}", color: "#F5A623" }
    ];
    this.ressources = [
      { id: "r1", titre: "Business Plan Guide", desc: "Mod\xE8le complet", type: "pdf", acces: "incubes", categorie: "Strategy", taille: "2.4 MB", progression: 100, lu: true },
      { id: "r2", titre: "Template Canvas BMC", desc: "Excel interactif", type: "xlsx", acces: "public", categorie: "Outils", taille: "850 KB", progression: 0, lu: false },
      { id: "r3", titre: "Pitch Masterclass", desc: "Vid\xE9o 45min", type: "video", acces: "payant", categorie: "Training", taille: "45 min", progression: 60, lu: false },
      { id: "r4", titre: "SARL Legal Guide", desc: "\xC9tapes l\xE9gales Tunisie", type: "pdf", acces: "incubes", categorie: "Legal", taille: "1.2 MB", progression: 30, lu: false }
    ];
    this.validations = [
      { id: "v1", task: "Prototype UI \u2014 E-Learning", startup: "EduTech Pro (Sara)", doc: "maquette_v2.pdf", status: "pending", date: "2024-12-01" },
      { id: "v2", task: "Tests QA HealthMobile", startup: "HealthMobile (Sara)", doc: "rapport_tests.pdf", status: "pending", date: "2024-12-02" },
      { id: "v3", task: "Business Plan AgriSmart", startup: "AgriSmart (Sara)", doc: "business_plan_v3.pdf", status: "approved", date: "2024-11-28" }
    ];
  }
  get projets() {
    return this.projetService.projets;
  }
  get calCells() {
    const yr = this.currentYear, mo = this.currentMonth;
    const firstDay = new Date(yr, mo, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(yr, mo + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < offset; i++)
      cells.push({ day: null, events: [] });
    for (let d = 1; d <= daysInMonth; d++)
      cells.push({ day: d, events: this.calEvents.filter((e) => e.date === d) });
    while (cells.length < 42)
      cells.push({ day: null, events: [] });
    return cells;
  }
  isToday(day) {
    return day === this.today.getDate() && this.currentMonth === this.today.getMonth() && this.currentYear === this.today.getFullYear();
  }
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }
  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }
  selectConv(c) {
    this.selectedConv = __spreadProps(__spreadValues({}, c), { unread: 0 });
    c.unread = 0;
  }
  sendMsg() {
    if (!this.newMsg.trim() || !this.selectedConv)
      return;
    this.selectedConv.messages.push({ from: "Moi", text: this.newMsg, time: "maintenant", mine: true });
    this.newMsg = "";
  }
  onMsgKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.sendMsg();
    }
  }
  get filteredRessources() {
    let l = this.ressources;
    if (this.filtre !== "all")
      l = l.filter((r) => r.type === this.filtre || r.acces === this.filtre);
    if (this.search)
      l = l.filter((r) => r.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }
  validate(id) {
    const v = this.validations.find((x) => x.id === id);
    if (v)
      v.status = "approved";
  }
  reject(id) {
    const v = this.validations.find((x) => x.id === id);
    if (v)
      v.status = "rejected";
  }
  static {
    this.\u0275fac = function CoachPlanningComponent_Factory(t) {
      return new (t || _CoachPlanningComponent)(\u0275\u0275directiveInject(ProjetService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachPlanningComponent, selectors: [["app-coach-planning"]], decls: 42, vars: 5, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "cal-layout", "animate-2"], [1, "kh-card", "cal-card"], [1, "cal-nav"], [1, "nav-btn", 3, "click"], [1, "cal-month"], [1, "cal-days-header"], [4, "ngFor", "ngForOf"], [1, "cal-grid"], ["class", "cal-cell", 3, "today", "empty", 4, "ngFor", "ngForOf"], [1, "sidebar-events"], [1, "kh-card", "upcoming-card"], [1, "kh-section-title", 2, "margin-bottom", "16px"], ["class", "upcoming-item", 4, "ngFor", "ngForOf"], [1, "kh-card", "legend-card"], [2, "font-size", "13px", "font-weight", "700", "margin-bottom", "12px"], [1, "legend-item"], [1, "legend-dot", 2, "background", "#E84A4A"], [1, "legend-dot", 2, "background", "#2ABFBF"], [1, "legend-dot", 2, "background", "#E8622A"], [1, "legend-dot", 2, "background", "#27AE7A"], [1, "cal-cell"], ["class", "cal-day-num", 4, "ngIf"], [4, "ngIf"], [1, "cal-day-num"], ["class", "cal-event-pill", 3, "background", "color", 4, "ngFor", "ngForOf"], ["class", "more-events", 4, "ngIf"], [1, "cal-event-pill"], [1, "more-events"], [1, "upcoming-item"], [1, "upcoming-bar"], [1, "upcoming-title"], [1, "upcoming-date"]], template: function CoachPlanningComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Planning & Calendar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Monthly view of events and deadlines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Add event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "button", 8);
        \u0275\u0275listener("click", function CoachPlanningComponent_Template_button_click_12_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275text(13, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h2", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function CoachPlanningComponent_Template_button_click_16_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275text(17, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275template(19, CoachPlanningComponent_span_19_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275template(21, CoachPlanningComponent_div_21_Template, 3, 6, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "h3", 16);
        \u0275\u0275text(25, "Upcoming");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, CoachPlanningComponent_div_26_Template, 7, 5, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 18)(28, "h3", 19);
        \u0275\u0275text(29, "Legend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 20);
        \u0275\u0275element(31, "div", 21);
        \u0275\u0275text(32, "Deadline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 20);
        \u0275\u0275element(34, "div", 22);
        \u0275\u0275text(35, "Rendez-vous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 20);
        \u0275\u0275element(37, "div", 23);
        \u0275\u0275text(38, "Event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 20);
        \u0275\u0275element(40, "div", 24);
        \u0275\u0275text(41, "Planification");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate2("", ctx.monthNames[ctx.currentMonth], " ", ctx.currentYear, "");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.dayNames);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.calCells);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.calEvents);
      }
    }, dependencies: [NgForOf, NgIf], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.cal-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 260px;\n  gap: 18px;\n  align-items: start;\n}\n@media (max-width:900px) {\n  .cal-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cal-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.cal-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.cal-month[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: var(--text-secondary);\n  padding: 4px 10px;\n  border-radius: 8px;\n  transition: all 0.15s;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange-light);\n  color: var(--orange);\n}\n.cal-days-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 4px;\n}\n.cal-days-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  padding: 4px;\n}\n.cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.cal-cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  padding: 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n  border: 1px solid transparent;\n}\n.cal-cell[_ngcontent-%COMP%]:hover:not(.empty) {\n  background: var(--orange-light);\n  border-color: rgba(232, 98, 42, 0.2);\n}\n.cal-cell.empty[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.25;\n}\n.cal-cell.today[_ngcontent-%COMP%] {\n  background: var(--orange-light);\n  border-color: rgba(232, 98, 42, 0.3);\n}\n.cal-cell.today[_ngcontent-%COMP%]   .cal-day-num[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.cal-day-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 3px;\n}\n.cal-event-pill[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  padding: 2px 5px;\n  border-radius: 4px;\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.more-events[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--text-muted);\n  font-weight: 600;\n  margin-top: 2px;\n}\n.sidebar-events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.upcoming-card[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.legend-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.upcoming-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border);\n}\n.upcoming-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.upcoming-bar[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 36px;\n  border-radius: 99px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.upcoming-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.upcoming-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-bottom: 7px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=planning.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachPlanningComponent, { className: "CoachPlanningComponent", filePath: "app\\features\\coach\\planning\\planning.component.ts", lineNumber: 6 });
})();

// src/app/features/coach/messages/messages.component.ts
function CoachMessagesComponent_div_12_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.unread);
  }
}
function CoachMessagesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function CoachMessagesComponent_div_12_Template_div_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectConv(c_r2));
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CoachMessagesComponent_div_12_span_11_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.selectedConv == null ? null : ctx_r2.selectedConv.id) === c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.initials);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.lastMsg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.unread > 0);
  }
}
function CoachMessagesComponent_ng_container_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275classProp("mine", m_r5.mine);
    \u0275\u0275advance();
    \u0275\u0275classProp("mine", m_r5.mine);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.time);
  }
}
function CoachMessagesComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275element(8, "span", 27);
    \u0275\u0275text(9, " En ligne");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275template(11, CoachMessagesComponent_ng_container_14_div_11_Template, 6, 6, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30)(13, "button", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 32);
    \u0275\u0275element(15, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CoachMessagesComponent_ng_container_14_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMsg, $event) || (ctx_r2.newMsg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function CoachMessagesComponent_ng_container_14_Template_input_keydown_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMsgKey($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function CoachMessagesComponent_ng_container_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMsg());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 32);
    \u0275\u0275element(19, "line", 36)(20, "polygon", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.selectedConv.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedConv.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedConv.nom);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.selectedConv.messages);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMsg);
  }
}
function CoachMessagesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 42);
    \u0275\u0275element(2, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select a conversation");
    \u0275\u0275elementEnd()();
  }
}
var CoachMessagesComponent = class _CoachMessagesComponent {
  constructor(projetService, auth) {
    this.projetService = projetService;
    this.auth = auth;
    this.filtre = "all";
    this.search = "";
    this.selectedConv = null;
    this.newMsg = "";
    this.today = /* @__PURE__ */ new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    this.calEvents = [
      { id: "e1", titre: "Pitch Day", date: 5, type: "evenement", couleur: "#E8622A" },
      { id: "e2", titre: "Livraison MVP", date: 12, type: "deadline", couleur: "#E84A4A" },
      { id: "e3", titre: "Sprint Review", date: 15, type: "rdv", couleur: "#2ABFBF" },
      { id: "e7", titre: "Onboarding", date: this.today.getDate(), type: "rdv", couleur: "#2ABFBF" }
    ];
    this.conversations = [
      { id: "c1", nom: "Sara Trabelsi", initials: "ST", color: "#2ABFBF", lastMsg: "Hello!", time: "11:24", unread: 2, messages: [{ from: "Sara", text: "Hello! Update done", time: "11:20", mine: false }] },
      { id: "c2", nom: "Ahmed Coach", initials: "AC", color: "#7C5CBF", lastMsg: "Session confirm\xE9e", time: "10:15", unread: 0, messages: [{ from: "Ahmed", text: "Session vendredi 14h", time: "10:15", mine: false }] }
    ];
    this.workflows = [
      { id: "w1", nom: "Proof-based validation", desc: "Verifies that the required document is present", trigger: "On submission", status: "ACTIVE", etapes: ["Task submission", "Doc verification", "Coach notification", "Validation"], runs: 34, icone: "\u2705", color: "#27AE7A" },
      { id: "w2", nom: "Alerte SLA", desc: "Notification if blocked > 15 days", trigger: "Daily cron", status: "ACTIVE", etapes: ["DB scan", "Delay calc", "SLA > 15d?", "Notification"], runs: 87, icone: "\u23F0", color: "#E8622A" },
      { id: "w3", nom: "Propagation Retard", desc: "Recalculates dates when critically delayed", trigger: "Task update", status: "ACTIVE", etapes: ["Delay detection", "Impact?", "Date recalc", "Team notif"], runs: 12, icone: "\u{1F4C5}", color: "#2ABFBF" },
      { id: "w4", nom: "Alerte Deadline 24h", desc: "Push notification before deadline", trigger: "Cron every 6h", status: "ACTIVE", etapes: ["Deadline scan", "< 24h?", "Email + Push", "Log"], runs: 156, icone: "\u{1F514}", color: "#F5A623" }
    ];
    this.ressources = [
      { id: "r1", titre: "Business Plan Guide", desc: "Mod\xE8le complet", type: "pdf", acces: "incubes", categorie: "Strategy", taille: "2.4 MB", progression: 100, lu: true },
      { id: "r2", titre: "Template Canvas BMC", desc: "Excel interactif", type: "xlsx", acces: "public", categorie: "Outils", taille: "850 KB", progression: 0, lu: false },
      { id: "r3", titre: "Pitch Masterclass", desc: "Vid\xE9o 45min", type: "video", acces: "payant", categorie: "Training", taille: "45 min", progression: 60, lu: false },
      { id: "r4", titre: "SARL Legal Guide", desc: "\xC9tapes l\xE9gales Tunisie", type: "pdf", acces: "incubes", categorie: "Legal", taille: "1.2 MB", progression: 30, lu: false }
    ];
    this.validations = [
      { id: "v1", task: "Prototype UI \u2014 E-Learning", startup: "EduTech Pro (Sara)", doc: "maquette_v2.pdf", status: "pending", date: "2024-12-01" },
      { id: "v2", task: "Tests QA HealthMobile", startup: "HealthMobile (Sara)", doc: "rapport_tests.pdf", status: "pending", date: "2024-12-02" },
      { id: "v3", task: "Business Plan AgriSmart", startup: "AgriSmart (Sara)", doc: "business_plan_v3.pdf", status: "approved", date: "2024-11-28" }
    ];
  }
  get projets() {
    return this.projetService.projets;
  }
  get calCells() {
    const yr = this.currentYear, mo = this.currentMonth;
    const firstDay = new Date(yr, mo, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(yr, mo + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < offset; i++)
      cells.push({ day: null, events: [] });
    for (let d = 1; d <= daysInMonth; d++)
      cells.push({ day: d, events: this.calEvents.filter((e) => e.date === d) });
    while (cells.length < 42)
      cells.push({ day: null, events: [] });
    return cells;
  }
  isToday(day) {
    return day === this.today.getDate() && this.currentMonth === this.today.getMonth() && this.currentYear === this.today.getFullYear();
  }
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }
  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }
  selectConv(c) {
    this.selectedConv = __spreadProps(__spreadValues({}, c), { unread: 0 });
    c.unread = 0;
  }
  sendMsg() {
    if (!this.newMsg.trim() || !this.selectedConv)
      return;
    this.selectedConv.messages.push({ from: "Moi", text: this.newMsg, time: "maintenant", mine: true });
    this.newMsg = "";
  }
  onMsgKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.sendMsg();
    }
  }
  get filteredRessources() {
    let l = this.ressources;
    if (this.filtre !== "all")
      l = l.filter((r) => r.type === this.filtre || r.acces === this.filtre);
    if (this.search)
      l = l.filter((r) => r.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }
  validate(id) {
    const v = this.validations.find((x) => x.id === id);
    if (v)
      v.status = "approved";
  }
  reject(id) {
    const v = this.validations.find((x) => x.id === id);
    if (v)
      v.status = "rejected";
  }
  static {
    this.\u0275fac = function CoachMessagesComponent_Factory(t) {
      return new (t || _CoachMessagesComponent)(\u0275\u0275directiveInject(ProjetService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachMessagesComponent, selectors: [["app-coach-messages"]], decls: 17, vars: 3, consts: [["emptyChat", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "chat-layout", "animate-2"], [1, "conv-panel", "kh-card"], [1, "conv-search"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026"], [1, "conv-list"], ["class", "conv-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "chat-area", "kh-card"], [4, "ngIf", "ngIfElse"], [1, "conv-item", 3, "click"], [1, "conv-avatar"], [1, "conv-info"], [1, "conv-top"], [1, "conv-name"], [1, "conv-time"], [1, "conv-preview"], ["class", "unread-badge", 4, "ngIf"], [1, "unread-badge"], [1, "chat-header"], [1, "conv-avatar", 2, "width", "36px", "height", "36px", "font-size", "12px"], [1, "online-status"], [1, "dot-live", "dot-live--green"], [1, "messages-body"], ["class", "msg-wrap", 3, "mine", 4, "ngFor", "ngForOf"], [1, "chat-input"], [1, "input-icon-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"], ["type", "text", "placeholder", "Write a message\u2026", 3, "ngModelChange", "keydown", "ngModel"], [1, "send-btn", 3, "click"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "msg-wrap"], [1, "msg-bubble"], [1, "msg-time"], [1, "empty-chat"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]], template: function CoachMessagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
        \u0275\u0275text(3, "Messages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "circle", 8)(9, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11);
        \u0275\u0275template(12, CoachMessagesComponent_div_12_Template, 12, 9, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 13);
        \u0275\u0275template(14, CoachMessagesComponent_ng_container_14_Template, 21, 6, "ng-container", 14)(15, CoachMessagesComponent_ng_template_15_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const emptyChat_r6 = \u0275\u0275reference(16);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.conversations);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedConv)("ngIfElse", emptyChat_r6);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  height: calc(100vh - var(--topbar-h) - 56px);\n}\n.page-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.chat-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 16px;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n@media (max-width:768px) {\n  .chat-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.conv-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.conv-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n}\n.conv-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  flex: 1;\n  font-family: inherit;\n  color: var(--text-primary);\n}\n.conv-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.conv-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.conv-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 13px 16px;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.conv-item.active[_ngcontent-%COMP%] {\n  background: var(--orange-light);\n}\n.conv-item[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.03);\n}\n.conv-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.conv-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.conv-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 3px;\n}\n.conv-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.conv-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n}\n.conv-preview[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.chat-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.online-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 2px;\n}\n.messages-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.msg-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.msg-wrap.mine[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: 65%;\n  padding: 10px 14px;\n  border-radius: 16px;\n  background: white;\n  border: 1px solid var(--border);\n  position: relative;\n}\n.msg-bubble.mine[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      #FF7A40);\n  color: white;\n  border: none;\n}\n.msg-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.5;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.55;\n  display: block;\n  margin-top: 4px;\n  text-align: right;\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  outline: none;\n  font-family: inherit;\n  background: var(--bg-app);\n}\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--orange);\n}\n.input-icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.15s;\n  display: flex;\n}\n.input-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange-light);\n  color: var(--orange);\n}\n.send-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      #FF7A40);\n  border: none;\n  cursor: pointer;\n  color: white;\n  padding: 10px 14px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.send-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(232, 98, 42, 0.4);\n}\n.empty-chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.empty-chat[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n/*# sourceMappingURL=messages.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachMessagesComponent, { className: "CoachMessagesComponent", filePath: "app\\features\\coach\\messages\\messages.component.ts", lineNumber: 6 });
})();

// src/app/features/coach/progressions/progressions.component.ts
function CoachProgresssComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, "Completion rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r0.complets.length / ctx_r0.progressions.length * 100, "1.0-0"), "% ");
  }
}
function CoachProgresssComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function CoachProgresssComponent_div_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 32)(11, "div", 33)(12, "div", 34);
    \u0275\u0275element(13, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 37);
    \u0275\u0275listener("click", function CoachProgresssComponent_div_30_div_5_Template_button_click_16_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.marquerTermine(p_r3));
    });
    \u0275\u0275text(17, "Mark done");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.typeIcons[p_r3.ressource == null ? null : p_r3.ressource.type] || "\u{1F4DA}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.ressource == null ? null : p_r3.ressource.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Last accessed: ", \u0275\u0275pipeBind2(9, 6, p_r3.dernierAcces, "d MMM y"), "");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", p_r3.pourcentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r3.pourcentage, "%");
  }
}
function CoachProgresssComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 22);
    \u0275\u0275element(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, CoachProgresssComponent_div_30_div_5_Template, 18, 9, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" In progress (", ctx_r0.enCours.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.enCours);
  }
}
function CoachProgresssComponent_div_31_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 32)(11, "span", 42);
    \u0275\u0275text(12, "\u2713 Completed");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.typeIcons[p_r4.ressource == null ? null : p_r4.ressource.type] || "\u{1F4DA}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.ressource == null ? null : p_r4.ressource.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Completed: ", \u0275\u0275pipeBind2(9, 3, p_r4.dateCompletion, "d MMM y"), "");
  }
}
function CoachProgresssComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h3", 22);
    \u0275\u0275element(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, CoachProgresssComponent_div_31_div_5_Template, 13, 6, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Completed (", ctx_r0.complets.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.complets);
  }
}
function CoachProgresssComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p");
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No resources started yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function CoachProgresssComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openBibliotheque());
    });
    \u0275\u0275text(6, "Browse the Library \u2192");
    \u0275\u0275elementEnd()();
  }
}
var CoachProgresssComponent = class _CoachProgresssComponent {
  constructor(svc, router) {
    this.svc = svc;
    this.router = router;
    this.progressions = [];
    this.loading = false;
    this.userId = 3;
    this.userRole = "COACH";
    this.typeIcons = {
      PDF: "\u{1F4C4}",
      VIDEO: "\u{1F3A5}",
      EXCEL: "\u{1F4CA}",
      WORD: "\u{1F4DD}",
      IMAGE: "\u{1F5BC}\uFE0F",
      LINK: "\u{1F517}"
    };
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.svc.getMesProgressionsHttp(this.userId).subscribe({
      next: (res) => {
        this.progressions = (res.data ?? []).sort((a, b) => {
          const order = { IN_PROGRESS: 0, NOT_STARTED: 1, COMPLETED: 2 };
          return (order[a.statut] ?? 1) - (order[b.statut] ?? 1);
        });
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  get enCours() {
    return this.progressions.filter((p) => p.statut === "IN_PROGRESS");
  }
  get complets() {
    return this.progressions.filter((p) => p.statut === "COMPLETED");
  }
  get nonDemarre() {
    return this.progressions.filter((p) => p.statut === "NOT_STARTED");
  }
  getProgressColor(s) {
    return s === "COMPLETED" ? "var(--green)" : s === "IN_PROGRESS" ? "var(--teal)" : "var(--text-muted)";
  }
  openBibliotheque() {
    this.router.navigateByUrl("/coach/bibliotheque");
  }
  marquerTermine(p) {
    this.svc.marquerTermineHttp(this.userId, p.ressource.id).subscribe({
      next: () => this.load()
    });
  }
  static {
    this.\u0275fac = function CoachProgresssComponent_Factory(t) {
      return new (t || _CoachProgresssComponent)(\u0275\u0275directiveInject(RessourceService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachProgresssComponent, selectors: [["app-coach-progressions"]], decls: 33, vars: 9, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [1, "prog-kpis", "animate-2"], [1, "prog-kpi"], [1, "prog-kpi__val", 2, "color", "var(--teal)"], [1, "prog-kpi__label"], [1, "prog-kpi__val", 2, "color", "var(--green)"], [1, "prog-kpi__val"], ["class", "prog-kpi", 4, "ngIf"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["class", "animate-3", 4, "ngIf"], ["class", "animate-3", "style", "margin-top:24px", 4, "ngIf"], ["class", "empty-prog", 4, "ngIf"], [1, "prog-kpi__val", 2, "color", "var(--orange)"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "animate-3"], [1, "section-title"], [1, "section-dot", 2, "background", "var(--teal)"], [1, "prog-list"], ["class", "prog-card kh-card", 4, "ngFor", "ngForOf"], [1, "prog-card", "kh-card"], [1, "prog-card__left"], [1, "prog-card__icon"], [1, "prog-card__info"], [1, "prog-card__titre"], [1, "prog-card__meta"], [1, "prog-card__right"], [1, "prog-bar-wrap"], [1, "kh-progress", 2, "width", "120px", "height", "8px"], [1, "kh-progress__fill", 2, "background", "var(--teal)"], [1, "prog-pct-label"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "animate-3", 2, "margin-top", "24px"], [1, "section-dot", 2, "background", "var(--green)"], ["class", "prog-card kh-card prog-card--done", 4, "ngFor", "ngForOf"], [1, "prog-card", "kh-card", "prog-card--done"], [1, "done-badge"], [1, "empty-prog"]], template: function CoachProgresssComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function CoachProgresssComponent_Template_button_click_7_listener() {
          return ctx.openBibliotheque();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6)(10, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Go to Library ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "In progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "span", 12);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 11);
        \u0275\u0275text(22, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 9)(24, "span", 13);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 11);
        \u0275\u0275text(27, "Total started");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, CoachProgresssComponent_div_28_Template, 6, 4, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, CoachProgresssComponent_div_29_Template, 2, 0, "div", 15)(30, CoachProgresssComponent_div_30_Template, 6, 2, "div", 16)(31, CoachProgresssComponent_div_31_Template, 6, 2, "div", 17)(32, CoachProgresssComponent_div_32_Template, 7, 0, "div", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.progressions.length, " resource(s) started");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.enCours.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.complets.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.progressions.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.progressions.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.enCours.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.complets.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.progressions.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, DecimalPipe, DatePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.prog-kpis[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.prog-kpi[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 100px;\n}\n.prog-kpi__val[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.prog-kpi__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.section-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.prog-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.prog-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  flex-wrap: wrap;\n}\n.prog-card--done[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.prog-card__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.prog-card__icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.prog-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.prog-card__titre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.prog-card__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.prog-card__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.prog-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.prog-pct-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--teal);\n  min-width: 32px;\n}\n.done-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: #EAF3DE;\n  color: #27500A;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.empty-prog[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  color: var(--text-muted);\n}\n.empty-prog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  font-size: 48px;\n}\n/*# sourceMappingURL=progressions.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachProgresssComponent, { className: "CoachProgresssComponent", filePath: "app\\features\\coach\\progressions\\progressions.component.ts", lineNumber: 10 });
})();

// src/app/features/coach/bibliotheque/bibliotheque.component.ts
var _c0 = ["videoPlayer"];
var _c1 = ["pdfCanvas"];
function CoachBibliothequeComponent_div_45_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_45_button_5_Template_button_click_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.filterCategorieId = c_r4.id;
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.filterCategorieId === c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r4.icone, " ", c_r4.nom, "");
  }
}
function CoachBibliothequeComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_45_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.filterCategorieId = null;
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(4, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CoachBibliothequeComponent_div_45_button_5_Template, 2, 4, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.filterCategorieId === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function CoachBibliothequeComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, "Loading resources\u2026");
    \u0275\u0275elementEnd();
  }
}
function CoachBibliothequeComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function CoachBibliothequeComponent_div_60_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.categorie.nom);
  }
}
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\u2713 Completed");
    \u0275\u0275elementContainerEnd();
  }
}
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "In progress");
    \u0275\u0275elementContainerEnd();
  }
}
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Not started");
    \u0275\u0275elementContainerEnd();
  }
}
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 61)(2, "span", 62);
    \u0275\u0275elementContainerStart(3, 63);
    \u0275\u0275template(4, CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_4_Template, 2, 0, "ng-container", 64)(5, CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_5_Template, 2, 0, "ng-container", 64)(6, CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_6_Template, 2, 0, "ng-container", 65);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 67);
    \u0275\u0275element(10, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getProgressColor(r_r6.maProgress.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", r_r6.maProgress.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "COMPLETED");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "IN_PROGRESS");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r6.maProgress.pourcentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", r_r6.maProgress.pourcentage, "%")("background", ctx_r1.getProgressColor(r_r6.maProgress.status));
  }
}
function CoachBibliothequeComponent_div_60_div_1_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7.nom);
  }
}
function CoachBibliothequeComponent_div_60_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_60_div_1_div_19_span_1_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", r_r6.tags);
  }
}
function CoachBibliothequeComponent_div_60_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_60_div_1_button_26_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const r_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.downloadRessource(r_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Download ");
    \u0275\u0275elementEnd();
  }
}
function CoachBibliothequeComponent_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_60_div_1_Template_div_click_0_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openViewer(r_r6));
    });
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CoachBibliothequeComponent_div_60_div_1_span_7_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 50)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, CoachBibliothequeComponent_div_60_div_1_ng_container_18_Template, 11, 10, "ng-container", 52)(19, CoachBibliothequeComponent_div_60_div_1_div_19_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(20, "div", 54)(21, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 56);
    \u0275\u0275element(23, "path", 57)(24, "circle", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Click to open ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CoachBibliothequeComponent_div_60_div_1_button_26_Template, 6, 0, "button", 59);
    \u0275\u0275pipe(27, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[r_r6.type] || "\u{1F4C1}");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getAccessBadge(r_r6.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.planType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r6.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.tailleFormatee || (r_r6.dureeSec ? \u0275\u0275pipeBind2(15, 12, r_r6.dureeSec / 60, "1.0-0") + " min" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r6.vues, " views");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r6.maProgress && r_r6.maProgress.pourcentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r6.tags == null ? null : r_r6.tags.length);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", r_r6.urlFichier || \u0275\u0275pipeBind1(27, 15, r_r6).includes("urlExterne"));
  }
}
function CoachBibliothequeComponent_div_60_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p");
    \u0275\u0275text(2, "No resources found.");
    \u0275\u0275elementEnd()();
  }
}
function CoachBibliothequeComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_60_div_1_Template, 28, 17, "div", 40)(2, CoachBibliothequeComponent_div_60_div_2_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.ressources);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ressources.length === 0 && !ctx_r1.loading);
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getProgressColor(r_r12.maProgress.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r12.maProgress.pourcentage, "% ");
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const r_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.downloadRessource(r_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 101);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template_div_click_0_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openViewer(r_r12));
    });
    \u0275\u0275elementStart(1, "span", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 96)(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_div_12_Template, 3, 3, "div", 97)(13, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template, 5, 0, "button", 98);
    \u0275\u0275pipe(14, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[r_r12.type] || "\u{1F4C4}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r12.titre.split(" \u2014 ")[1] || r_r12.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r12.tailleFormatee || (r_r12.dureeSec ? \u0275\u0275pipeBind2(8, 8, r_r12.dureeSec / 60, "1.0-0") + " min" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getAccessBadge(r_r12.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r12.planType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r12.maProgress && r_r12.maProgress.pourcentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r12.urlFichier || \u0275\u0275pipeBind1(14, 11, r_r12).includes("urlExterne"));
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template, 15, 13, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const folder_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", folder_r10.files);
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 80);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const folder_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFolder(folder_r10));
    });
    \u0275\u0275elementStart(2, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 82);
    \u0275\u0275element(4, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 83)(6, "span", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 86);
    \u0275\u0275element(11, "polyline", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_Template, 2, 1, "div", 88);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(folder_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", folder_r10.files.length, " file", folder_r10.files.length > 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", folder_r10.expanded);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", folder_r10.expanded);
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1, "Individual resources");
    \u0275\u0275elementEnd();
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getProgressColor(r_r15.maProgress.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r15.maProgress.pourcentage, "% ");
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const r_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.downloadRessource(r_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 101);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template_div_click_0_listener() {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openViewer(r_r15));
    });
    \u0275\u0275elementStart(1, "span", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 96)(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_div_12_Template, 3, 3, "div", 97)(13, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_13_Template, 5, 0, "button", 98);
    \u0275\u0275pipe(14, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[r_r15.type] || "\u{1F4C4}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r15.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r15.tailleFormatee || (r_r15.dureeSec ? \u0275\u0275pipeBind2(8, 8, r_r15.dureeSec / 60, "1.0-0") + " min" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getAccessBadge(r_r15.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r15.planType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r15.maProgress && r_r15.maProgress.pourcentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r15.urlFichier || \u0275\u0275pipeBind1(14, 11, r_r15).includes("urlExterne"));
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_1_Template, 2, 0, "div", 102)(2, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template, 15, 13, "div", 103);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.folders.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", folder_r10.files);
  }
}
function CoachBibliothequeComponent_div_61_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template, 13, 6, "ng-container", 52)(2, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", folder_r10.name !== "__solo__");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", folder_r10.name === "__solo__");
  }
}
function CoachBibliothequeComponent_div_61_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, "No resources found.");
    \u0275\u0275elementEnd();
  }
}
function CoachBibliothequeComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_61_ng_container_1_Template, 3, 2, "ng-container", 79)(2, CoachBibliothequeComponent_div_61_p_2_Template, 2, 0, "p", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.folders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.folders.length === 0);
  }
}
function CoachBibliothequeComponent_div_62_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgress.status) + "22")("color", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgress.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewerRessource.maProgress.pourcentage, "% ");
  }
}
function CoachBibliothequeComponent_div_62_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "polyline", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Auto-saved every 10s ");
    \u0275\u0275elementEnd();
  }
}
function CoachBibliothequeComponent_div_62_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_62_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadRessource(ctx_r1.viewerRessource));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 127);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Download ");
    \u0275\u0275elementEnd();
  }
}
function CoachBibliothequeComponent_div_62_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275element(1, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.viewerRessource.maProgress.pourcentage, "%")("background", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgress.status));
  }
}
function CoachBibliothequeComponent_div_62_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "div", 131);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading file\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CoachBibliothequeComponent_div_62_div_18_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u25B6 Resuming from ", \u0275\u0275pipeBind2(2, 1, ctx_r1.resumeAt, "1.0-0"), "s");
  }
}
function CoachBibliothequeComponent_div_62_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "video", 133, 0);
    \u0275\u0275listener("loadedmetadata", function CoachBibliothequeComponent_div_62_div_18_Template_video_loadedmetadata_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVideoLoaded());
    });
    \u0275\u0275text(3, " Your browser does not support HTML5 video. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CoachBibliothequeComponent_div_62_div_18_p_4_Template, 3, 4, "p", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.viewerUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.resumeAt > 0);
  }
}
function CoachBibliothequeComponent_div_62_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "button", 141);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_62_div_19_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pdfPrevPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 142);
    \u0275\u0275element(3, "polyline", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 144)(5, "span", 145);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 146);
    \u0275\u0275text(8, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 147);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 148);
    \u0275\u0275text(12, "pages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 141);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_62_div_19_div_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pdfNextPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 142);
    \u0275\u0275element(15, "polyline", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 149)(17, "div", 150);
    \u0275\u0275element(18, "div", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 152);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pdfCurrentPage <= 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pdfCurrentPage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pdfTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pdfCurrentPage >= ctx_r1.pdfTotalPages);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.pdfCurrentPage / ctx_r1.pdfTotalPages * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 7, ctx_r1.pdfCurrentPage / ctx_r1.pdfTotalPages * 100, "1.0-0"), "% ");
  }
}
function CoachBibliothequeComponent_div_62_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "div", 131);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Rendering PDF\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CoachBibliothequeComponent_div_62_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_62_div_19_div_1_Template, 22, 10, "div", 137);
    \u0275\u0275elementStart(2, "div", 138);
    \u0275\u0275element(3, "canvas", 139, 1);
    \u0275\u0275template(5, CoachBibliothequeComponent_div_62_div_19_div_5_Template, 4, 0, "div", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pdfDoc);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.pdfDoc && !ctx_r1.viewerLoading);
  }
}
function CoachBibliothequeComponent_div_62_div_20_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 155);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.rawBlobUrl, \u0275\u0275sanitizeUrl);
  }
}
function CoachBibliothequeComponent_div_62_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275template(1, CoachBibliothequeComponent_div_62_div_20_img_1_Template, 1, 1, "img", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rawBlobUrl);
  }
}
function CoachBibliothequeComponent_div_62_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 156)(2, "span", 157);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "This file type cannot be previewed in the browser.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 158);
    \u0275\u0275text(9, "\u{1F4E5} Download file");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.type) || "PDF"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.titre);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.viewerUrl, \u0275\u0275sanitizeUrl);
  }
}
function CoachBibliothequeComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_62_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r1.closeViewer());
    });
    \u0275\u0275elementStart(1, "div", 107)(2, "div", 108)(3, "div", 109)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CoachBibliothequeComponent_div_62_span_8_Template, 2, 5, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 111);
    \u0275\u0275template(10, CoachBibliothequeComponent_div_62_span_10_Template, 4, 0, "span", 112)(11, CoachBibliothequeComponent_div_62_button_11_Template, 6, 0, "button", 113);
    \u0275\u0275elementStart(12, "button", 114);
    \u0275\u0275listener("click", function CoachBibliothequeComponent_div_62_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeViewer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 115);
    \u0275\u0275element(14, "line", 116)(15, "line", 117);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(16, CoachBibliothequeComponent_div_62_div_16_Template, 2, 4, "div", 118)(17, CoachBibliothequeComponent_div_62_div_17_Template, 4, 0, "div", 119)(18, CoachBibliothequeComponent_div_62_div_18_Template, 5, 2, "div", 120)(19, CoachBibliothequeComponent_div_62_div_19_Template, 6, 2, "div", 121)(20, CoachBibliothequeComponent_div_62_div_20_Template, 2, 1, "div", 122)(21, CoachBibliothequeComponent_div_62_div_21_Template, 10, 3, "div", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.type) || "PDF"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.maProgress) && ctx_r1.viewerRessource.maProgress.pourcentage > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.viewerType === "video");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewerRessource);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.maProgress) && ctx_r1.viewerRessource.maProgress.pourcentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewerType === "video" && !ctx_r1.viewerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewerType === "pdf" && !ctx_r1.viewerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewerType === "image" && !ctx_r1.viewerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewerType === "other");
  }
}
var CoachBibliothequeComponent = class _CoachBibliothequeComponent {
  constructor(svc, sanitizer, zone) {
    this.svc = svc;
    this.sanitizer = sanitizer;
    this.zone = zone;
    this.ressources = [];
    this.folders = [];
    this.view = "grid";
    this.categories = [];
    this.loading = false;
    this.error = "";
    this.filterType = "ALL";
    this.filterAccess = "ALL";
    this.filterCategorieId = null;
    this.search = "";
    this.stats = {};
    this.showViewer = false;
    this.viewerRessource = null;
    this.viewerType = "other";
    this.viewerUrl = "";
    this.rawBlobUrl = "";
    this.blobUrl = null;
    this.viewerLoading = false;
    this.resumeAt = 0;
    this.pdfDoc = null;
    this.pdfCurrentPage = 1;
    this.pdfTotalPages = 1;
    this.pdfRendering = false;
    this.pdfScale = 1.5;
    this.saveInterval = null;
    this.typeIcons = {
      PDF: "\u{1F4C4}",
      VIDEO: "\u{1F3A5}",
      EXCEL: "\u{1F4CA}",
      WORD: "\u{1F4DD}",
      IMAGE: "\u{1F5BC}\uFE0F",
      LINK: "\u{1F517}"
    };
    this.userId = 3;
    this.userRole = "COACH";
    this.userPlan = "FREE";
    this.apiBase = this.svc.getApiOrigin();
  }
  ngOnInit() {
    this.loadCategories();
    this.loadStats();
    this.load();
  }
  ngOnDestroy() {
    this.stopSaveInterval();
    this.revokeBlobUrl();
  }
  // ── LOGIQUE D'URL UNIQUE ET NETTOYÉE ──────────────────────────────
  formatFullUrl(path) {
    if (!path || path === "#" || path === "")
      return "";
    if (path.startsWith("http"))
      return path;
    const base = this.apiBase.replace(/\/+$/, "");
    let cleanPath = path;
    if (cleanPath.includes("khotwa/api")) {
      const parts = cleanPath.split("khotwa/api");
      cleanPath = parts[parts.length - 1];
    }
    if (!cleanPath.startsWith("/")) {
      cleanPath = "/" + cleanPath;
    }
    const finalUrl = base + cleanPath;
    console.log("Coach URL built:", finalUrl);
    return finalUrl;
  }
  load() {
    this.loading = true;
    this.error = "";
    const filters = { userId: this.userId, role: this.userRole, plan: this.userPlan };
    if (this.filterType !== "ALL")
      filters.type = this.filterType;
    if (this.filterAccess !== "ALL")
      filters.access = this.filterAccess;
    if (this.filterCategorieId)
      filters.categorieId = this.filterCategorieId;
    if (this.search)
      filters.search = this.search;
    forkJoin({
      ressources: this.svc.getRessourcesHttp(filters),
      progressions: this.svc.getMesProgressionsHttp(this.userId)
    }).subscribe({
      next: ({ ressources, progressions }) => {
        const list = ressources.data ?? ressources;
        const progs = progressions.data ?? [];
        const pm = /* @__PURE__ */ new Map();
        progs.forEach((p) => {
          const rid = p.ressource?.id ?? p.ressourceId;
          if (rid)
            pm.set(rid, p);
        });
        this.ressources = list.map((r) => __spreadProps(__spreadValues({}, r), {
          maProgress: pm.has(r.id) ? {
            status: pm.get(r.id).statut,
            pourcentage: pm.get(r.id).pourcentage,
            positionVideoSec: pm.get(r.id).positionVideoSec,
            currentPage: pm.get(r.id).positionVideoSec
          } : r.maProgress
        }));
        this.buildFolders();
        this.loading = false;
      },
      error: () => {
        this.error = "\u26A0\uFE0F Unable to reach the server.";
        this.loading = false;
      }
    });
  }
  loadStats() {
    this.svc.getStatsHttp(this.userId).subscribe({ next: (r) => this.stats = r.data ?? {}, error: () => {
    } });
  }
  loadCategories() {
    this.svc.getCategoriesHttp().subscribe({ next: (r) => this.categories = r.data ?? [], error: () => {
    } });
  }
  onSearch() {
    this.load();
  }
  openViewer(r) {
    this.svc.getRessourceByIdHttp(r.id, this.userId, this.userRole, this.userPlan).subscribe({
      next: (res) => {
        const detail = res.data?.ressource ?? res.data ?? r;
        const tags = res.data?.tags ?? detail.tags ?? r.tags ?? [];
        this.startViewer(__spreadProps(__spreadValues(__spreadValues({}, r), detail), { tags, maProgress: r.maProgress ?? detail.maProgression }));
      },
      error: () => this.startViewer(r)
    });
  }
  startViewer(r) {
    this.viewerRessource = r;
    this.viewerType = r.type === "VIDEO" ? "video" : r.type === "PDF" ? "pdf" : r.type === "IMAGE" ? "image" : "other";
    this.resumeAt = r.maProgress?.positionVideoSec ?? 0;
    this.revokeBlobUrl();
    this.blobUrl = null;
    this.rawBlobUrl = "";
    this.pdfDoc = null;
    if (!r.maProgress || r.maProgress.status === "NOT_STARTED") {
      this.svc.updateProgressionHttp(this.userId, r.id, "IN_PROGRESS", 1).subscribe();
    }
    if (r.type === "VIDEO") {
      this.viewerUrl = this.formatFullUrl(r.urlFichier || r.urlExterne);
      this.showViewer = true;
      this.startSaveInterval(r);
    } else if (r.type === "PDF" || r.type === "IMAGE") {
      this.viewerLoading = true;
      this.showViewer = true;
      this.svc.downloadAsBlob(r.id, this.userId, this.userRole, this.userPlan).subscribe({
        next: (blob) => {
          this.rawBlobUrl = URL.createObjectURL(blob);
          this.viewerLoading = false;
          if (r.type === "PDF")
            this.loadPdfJs(this.rawBlobUrl, r);
        },
        error: () => {
          this.viewerLoading = false;
        }
      });
    } else {
      this.viewerUrl = this.formatFullUrl(r.urlExterne || r.urlFichier);
      this.showViewer = true;
    }
  }
  loadPdfJs(blobUrl, r) {
    if (typeof pdfjsLib === "undefined")
      return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    pdfjsLib.getDocument(blobUrl).promise.then((doc) => {
      this.zone.run(() => {
        this.pdfDoc = doc;
        this.pdfTotalPages = doc.numPages;
        const savedPage = r.maProgress?.positionVideoSec ?? 1;
        this.pdfCurrentPage = Math.max(1, Math.min(savedPage, this.pdfTotalPages));
        setTimeout(() => this.renderPdfPage(this.pdfCurrentPage, r), 100);
      });
    });
  }
  renderPdfPage(pageNum, r) {
    if (!this.pdfDoc || this.pdfRendering)
      return;
    this.pdfRendering = true;
    this.pdfCurrentPage = pageNum;
    this.pdfDoc.getPage(pageNum).then((page) => {
      const canvas = this.pdfCanvasRef?.nativeElement;
      if (!canvas) {
        this.pdfRendering = false;
        return;
      }
      const viewport = page.getViewport({ scale: this.pdfScale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const ctx = canvas.getContext("2d");
      page.render({ canvasContext: ctx, viewport }).promise.then(() => {
        this.zone.run(() => {
          this.pdfRendering = false;
          const pct = Math.round(pageNum / this.pdfTotalPages * 100);
          const status = pct >= 100 ? "COMPLETED" : "IN_PROGRESS";
          const target = r ?? this.viewerRessource;
          if (target) {
            if (this.viewerRessource)
              this.viewerRessource.maProgress = { status, pourcentage: pct };
            this.svc.saveVideoProgressionHttp(this.userId, target.id, status, pct, pageNum).subscribe();
          }
        });
      });
    });
  }
  pdfPrevPage() {
    if (this.pdfCurrentPage > 1)
      this.renderPdfPage(this.pdfCurrentPage - 1);
  }
  pdfNextPage() {
    if (this.pdfCurrentPage < this.pdfTotalPages)
      this.renderPdfPage(this.pdfCurrentPage + 1);
  }
  startSaveInterval(r) {
    this.stopSaveInterval();
    this.saveInterval = setInterval(() => {
      const video = this.videoPlayerRef?.nativeElement;
      if (!video || !this.viewerRessource)
        return;
      const sec = Math.floor(video.currentTime);
      const dur = video.duration || r.dureeSec || 1;
      const pct = Math.min(100, Math.round(sec / dur * 100));
      const status = pct >= 95 ? "COMPLETED" : "IN_PROGRESS";
      this.svc.saveVideoProgressionHttp(this.userId, r.id, status, pct, sec).subscribe();
    }, 1e4);
  }
  stopSaveInterval() {
    if (this.saveInterval)
      clearInterval(this.saveInterval);
  }
  closeViewer() {
    this.stopSaveInterval();
    this.revokeBlobUrl();
    this.showViewer = false;
    this.viewerRessource = null;
    this.pdfDoc = null;
  }
  onVideoLoaded() {
    const video = this.videoPlayerRef?.nativeElement;
    if (video && this.resumeAt > 0)
      video.currentTime = this.resumeAt;
  }
  revokeBlobUrl() {
    if (this.rawBlobUrl?.startsWith("blob:"))
      URL.revokeObjectURL(this.rawBlobUrl);
  }
  downloadRessource(r) {
    const url = this.formatFullUrl(r.urlFichier || r.urlExterne);
    if (!url) {
      alert("No file attached.");
      return;
    }
    fetch(url, { headers: { "X-User-Id": String(this.userId), "X-User-Role": this.userRole } }).then((res) => {
      if (!res.ok)
        throw new Error("Download failed");
      return res.blob();
    }).then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = r.nomFichierOriginal || r.titre || "document";
      a.click();
      URL.revokeObjectURL(a.href);
    }).catch(() => window.open(url, "_blank"));
  }
  isCompleted(r) {
    return r.maProgress?.status === "COMPLETED";
  }
  getProgressColor(s) {
    return s === "COMPLETED" ? "var(--green)" : s === "IN_PROGRESS" ? "var(--teal)" : "var(--text-muted)";
  }
  getAccessBadge(a) {
    return a === "FREE" ? "kh-badge--green" : a === "PREMIUM" ? "kh-badge--amber" : "kh-badge--violet";
  }
  buildFolders() {
    const grouped = /* @__PURE__ */ new Map();
    const solo = [];
    this.ressources.forEach((r) => {
      const sep = r.titre.indexOf(" \u2014 ");
      if (sep > -1) {
        const key = r.titre.substring(0, sep).trim();
        if (!grouped.has(key))
          grouped.set(key, []);
        grouped.get(key).push(r);
      } else
        solo.push(r);
    });
    this.folders = [];
    grouped.forEach((files, name) => {
      if (files.length > 1)
        this.folders.push({ name, files, expanded: false });
      else
        solo.push(...files);
    });
    if (solo.length > 0)
      this.folders.push({ name: "__solo__", files: solo, expanded: true });
  }
  toggleFolder(folder) {
    folder.expanded = !folder.expanded;
  }
  static {
    this.\u0275fac = function CoachBibliothequeComponent_Factory(t) {
      return new (t || _CoachBibliothequeComponent)(\u0275\u0275directiveInject(RessourceService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachBibliothequeComponent, selectors: [["app-coach-bibliotheque"]], viewQuery: function CoachBibliothequeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoPlayerRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pdfCanvasRef = _t.first);
      }
    }, decls: 63, vars: 24, consts: [["videoPlayer", ""], ["pdfCanvas", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "lib-stats", "animate-2"], [1, "lib-stat"], [1, "lib-stat__val"], [1, "lib-stat__label"], [1, "lib-stat__val", 2, "color", "var(--green)"], [1, "lib-stat__val", 2, "color", "var(--teal)"], [1, "lib-stat__val", 2, "color", "var(--violet)"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search resources\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "filter-group"], [1, "filter-label"], [1, "tab", 3, "click"], ["class", "filter-group", 4, "ngIf"], [1, "view-toggle-row"], [3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["style", "padding:16px;background:#FCEBEB;border-radius:8px;color:#791F1F;font-size:13px", 4, "ngIf"], ["class", "res-grid animate-3", 4, "ngIf"], ["class", "folders-view animate-3", 4, "ngIf"], ["class", "viewer-overlay", 3, "click", 4, "ngIf"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [2, "padding", "16px", "background", "#FCEBEB", "border-radius", "8px", "color", "#791F1F", "font-size", "13px"], [1, "res-grid", "animate-3"], ["class", "res-card kh-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "res-card", "kh-card", 3, "click"], [1, "res-card__top"], [1, "res-icon"], [1, "res-badges"], [1, "kh-badge"], ["class", "kh-badge kh-badge--gray", 4, "ngIf"], [1, "res-titre"], [1, "res-desc"], [1, "res-meta"], [2, "color", "var(--text-muted)"], [4, "ngIf"], ["class", "res-tags", 4, "ngIf"], [1, "res-card-actions"], [1, "res-open-hint"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "download-btn", "title", "Download", 3, "click", 4, "ngIf"], [1, "kh-badge", "kh-badge--gray"], [1, "prog-row"], [1, "prog-label"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "prog-pct"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "res-tags"], ["class", "res-tag", 4, "ngFor", "ngForOf"], [1, "res-tag"], ["title", "Download", 1, "download-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "empty-state"], [1, "folders-view", "animate-3"], [4, "ngFor", "ngForOf"], [1, "folder-row", 3, "click"], [1, "folder-icon-wrap"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "folder-meta"], [1, "folder-name"], [1, "folder-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "folder-chevron"], ["points", "9 18 15 12 9 6"], ["class", "folder-files", 4, "ngIf"], [1, "folder-files"], ["class", "folder-file-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "folder-file-row", 3, "click"], [1, "ff-icon"], [1, "ff-info"], [1, "ff-name"], [1, "ff-size"], [1, "ff-side-actions"], ["class", "ff-prog", 4, "ngIf"], ["class", "ff-dl-btn", 3, "click", 4, "ngIf"], [1, "ff-prog"], [1, "ff-dl-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["class", "solo-label", 4, "ngIf"], ["class", "folder-file-row solo-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "solo-label"], [1, "folder-file-row", "solo-row", 3, "click"], [1, "viewer-overlay", 3, "click"], [1, "viewer-box"], [1, "viewer-header"], [1, "viewer-title"], ["class", "viewer-prog-badge", 3, "background", "color", 4, "ngIf"], [1, "viewer-header-right"], ["class", "viewer-autosave-info", 4, "ngIf"], ["class", "viewer-dl-btn", "title", "Download", 3, "click", 4, "ngIf"], [1, "viewer-close", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "viewer-prog-bar", 4, "ngIf"], ["class", "viewer-loading", 4, "ngIf"], ["class", "viewer-content", 4, "ngIf"], ["class", "viewer-content viewer-content--pdf", 4, "ngIf"], ["class", "viewer-content viewer-content--center", 4, "ngIf"], [1, "viewer-prog-badge"], [1, "viewer-autosave-info"], ["points", "20 6 9 17 4 12"], ["title", "Download", 1, "viewer-dl-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "viewer-prog-bar"], [1, "viewer-prog-fill"], [1, "viewer-loading"], [1, "viewer-spinner"], [1, "viewer-content"], ["controls", "", "preload", "metadata", 1, "viewer-video", 3, "loadedmetadata", "src"], ["class", "viewer-resume-hint", 4, "ngIf"], [1, "viewer-resume-hint"], [1, "viewer-content", "viewer-content--pdf"], ["class", "pdf-controls", 4, "ngIf"], [1, "pdf-canvas-wrap"], [1, "pdf-canvas"], [1, "pdf-controls"], [1, "pdf-nav-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "pdf-page-info"], [1, "pdf-page-current"], [1, "pdf-page-sep"], [1, "pdf-page-total"], [1, "pdf-page-label"], [1, "pdf-inline-prog"], [1, "kh-progress", 2, "width", "120px"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "font-size", "11px", "font-weight", "700", "color", "var(--teal)"], [1, "viewer-content", "viewer-content--center"], ["class", "viewer-img", "alt", "resource image", 3, "src", 4, "ngIf"], ["alt", "resource image", 1, "viewer-img", 3, "src"], [1, "viewer-download-prompt"], [1, "viewer-dl-icon"], ["target", "_blank", "download", "", 1, "kh-btn", "kh-btn--primary", 3, "href"]], template: function CoachBibliothequeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
        \u0275\u0275text(4, "Resource Library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "span", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 9);
        \u0275\u0275text(17, "Free");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7)(19, "span", 11);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 9);
        \u0275\u0275text(22, "Premium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "span", 12);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 9);
        \u0275\u0275text(27, "Institutional");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 13)(29, "div", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 15);
        \u0275\u0275element(31, "circle", 16)(32, "path", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function CoachBibliothequeComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function CoachBibliothequeComponent_Template_input_input_33_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 19)(35, "span", 20);
        \u0275\u0275text(36, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 21);
        \u0275\u0275listener("click", function CoachBibliothequeComponent_Template_button_click_37_listener() {
          ctx.filterType = "ALL";
          return ctx.load();
        });
        \u0275\u0275text(38, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 21);
        \u0275\u0275listener("click", function CoachBibliothequeComponent_Template_button_click_39_listener() {
          ctx.filterType = "PDF";
          return ctx.load();
        });
        \u0275\u0275text(40, "\u{1F4C4} PDF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 21);
        \u0275\u0275listener("click", function CoachBibliothequeComponent_Template_button_click_41_listener() {
          ctx.filterType = "VIDEO";
          return ctx.load();
        });
        \u0275\u0275text(42, "\u{1F3A5} Video");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 21);
        \u0275\u0275listener("click", function CoachBibliothequeComponent_Template_button_click_43_listener() {
          ctx.filterType = "EXCEL";
          return ctx.load();
        });
        \u0275\u0275text(44, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, CoachBibliothequeComponent_div_45_Template, 6, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 23)(47, "button", 24);
        \u0275\u0275listener("click", function CoachBibliothequeComponent_Template_button_click_47_listener() {
          return ctx.view = "grid";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 25);
        \u0275\u0275element(49, "rect", 26)(50, "rect", 27)(51, "rect", 28)(52, "rect", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, " Grid ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "button", 24);
        \u0275\u0275listener("click", function CoachBibliothequeComponent_Template_button_click_54_listener() {
          return ctx.view = "folders";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 25);
        \u0275\u0275element(56, "path", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " Folders ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(58, CoachBibliothequeComponent_div_58_Template, 2, 0, "div", 31)(59, CoachBibliothequeComponent_div_59_Template, 2, 1, "div", 32)(60, CoachBibliothequeComponent_div_60_Template, 3, 2, "div", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275template(61, CoachBibliothequeComponent_div_61_Template, 3, 2, "div", 34)(62, CoachBibliothequeComponent_div_62_Template, 22, 11, "div", 35);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.ressources.length, " resource(s) available");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.stats.total || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats.free || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats.premium || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats.institutional || 0);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.filterType === "ALL");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "PDF");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "VIDEO");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "EXCEL");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.categories.length);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view === "grid");
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.view === "folders");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "grid");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "folders" && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showViewer);
      }
    }, dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, DefaultValueAccessor, NgControlStatus, NgModel, JsonPipe, DecimalPipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.lib-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.lib-stat[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 100px;\n}\n.lib-stat__val[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n}\n.lib-stat__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  min-width: 50px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 8px 14px;\n  width: 100%;\n  max-width: 360px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  flex: 1;\n  color: var(--text-primary);\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.res-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.res-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  background: white;\n}\n.res-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  border-color: var(--orange);\n}\n.res-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.res-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.res-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.res-titre[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  line-height: 1.55;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.res-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 10px;\n}\n.prog-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.prog-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n}\n.prog-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--orange);\n}\n.res-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.res-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.res-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 28px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-right: 10px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: var(--text-muted);\n  padding: 4px 8px;\n}\n.modal-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.modal-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.meta-key[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.meta-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.modal-progress[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n  flex-wrap: wrap;\n}\n.res-open-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n}\n.viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.viewer-box[_ngcontent-%COMP%] {\n  background: var(--color-background-primary,#fff);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 1100px;\n  max-height: 95vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.viewer-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: "Syne", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  overflow: hidden;\n}\n.viewer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.viewer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.viewer-prog-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.viewer-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.viewer-autosave-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--green,#27AE7A);\n  font-weight: 600;\n}\n.viewer-close[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.viewer-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-app);\n  border-color: var(--text-muted);\n}\n.viewer-prog-bar[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--border);\n  flex-shrink: 0;\n}\n.viewer-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.5s ease;\n  border-radius: 2px;\n}\n.viewer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.viewer-content--center[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.viewer-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #000;\n  min-height: 0;\n}\n.viewer-iframe[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  border: none;\n  min-height: 500px;\n}\n.viewer-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.viewer-resume-hint[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12px;\n  color: var(--teal,#2ABFBF);\n  font-weight: 600;\n  background: rgba(42, 191, 191, 0.08);\n  text-align: center;\n  flex-shrink: 0;\n}\n.viewer-download-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.viewer-dl-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.viewer-download-prompt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n}\n.viewer-download-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.viewer-loading[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  color: var(--text-muted);\n}\n.viewer-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--border);\n  border-top-color: var(--orange);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.viewer-content--pdf[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.pdf-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--bg-app);\n}\n.pdf-nav-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  color: var(--text-secondary);\n}\n.pdf-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.pdf-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pdf-page-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  font-size: 13px;\n}\n.pdf-page-current[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-family: "Syne", sans-serif;\n  font-size: 16px;\n  color: var(--orange);\n}\n.pdf-page-sep[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pdf-page-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.pdf-page-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.pdf-inline-prog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.pdf-canvas-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n  background: #525659;\n}\n.pdf-canvas[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n  border-radius: 2px;\n  max-width: 100%;\n}\n.res-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n}\n.res-open-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  color: var(--text-muted);\n}\n.download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  background: white;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.viewer-dl-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.viewer-dl-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.view-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.view-toggle-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.view-toggle-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.folders-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.folder-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.folder-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  background: #FFF8F5;\n}\n.folder-icon-wrap[_ngcontent-%COMP%] {\n  color: var(--orange);\n  flex-shrink: 0;\n}\n.folder-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.folder-name[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n}\n.folder-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 2px 8px;\n}\n.folder-chevron[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.folder-chevron.open[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.folder-files[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  border-left: 2px solid var(--border);\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-bottom: 6px;\n}\n.folder-file-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 9px 12px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.folder-file-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--teal);\n  background: #F5FFFD;\n}\n.ff-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ff-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ff-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.ff-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.ff-prog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ff-dl-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 4px 6px;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.ff-dl-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.solo-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  padding: 8px 4px 4px;\n}\n.solo-row[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.ff-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  min-width: 70px;\n}\n.ff-side-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex-shrink: 0;\n}\n.ff-dl-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ff-dl-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n/*# sourceMappingURL=bibliotheque.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachBibliothequeComponent, { className: "CoachBibliothequeComponent", filePath: "app\\features\\coach\\bibliotheque\\bibliotheque.component.ts", lineNumber: 19 });
})();

// src/app/features/coach/talent/talent.component.ts
function CoachTalentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h3");
    \u0275\u0275text(3, "New listing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function CoachTalentComponent_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(5, "\u2715 Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13)(8, "label");
    \u0275\u0275text(9, "Startup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAnnonce.startup, $event) || (ctx_r1.newAnnonce.startup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "label");
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAnnonce.type, $event) || (ctx_r1.newAnnonce.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 16);
    \u0275\u0275text(16, "Co-founder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 17);
    \u0275\u0275text(18, "Intern");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 18);
    \u0275\u0275text(20, "Full-time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 19);
    \u0275\u0275text(22, "Freelance");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 13)(24, "label");
    \u0275\u0275text(25, "Position / Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAnnonce.poste, $event) || (ctx_r1.newAnnonce.poste = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 13)(28, "label");
    \u0275\u0275text(29, "Required skills ");
    \u0275\u0275elementStart(30, "span", 21);
    \u0275\u0275text(31, "(comma-separated)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CoachTalentComponent_div_9_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAnnonce.competences, $event) || (ctx_r1.newAnnonce.competences = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 4);
    \u0275\u0275listener("click", function CoachTalentComponent_div_9_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAnnonce());
    });
    \u0275\u0275text(34, "Post listing \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAnnonce.startup);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAnnonce.type);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAnnonce.poste);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAnnonce.competences);
  }
}
function CoachTalentComponent_div_15_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function CoachTalentComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 31);
    \u0275\u0275template(12, CoachTalentComponent_div_15_div_1_span_12_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 33)(14, "div", 34)(15, "span", 35);
    \u0275\u0275text(16, "Overall score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 37);
    \u0275\u0275element(20, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 39)(22, "button", 40);
    \u0275\u0275text(23, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 41);
    \u0275\u0275text(25, "Profile");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.nom[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.poste);
    \u0275\u0275advance();
    \u0275\u0275classMap(t_r4.disponible ? "kh-badge--green" : "kh-badge--gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4.disponible ? "Available" : "Unavailable", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", t_r4.competences);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", t_r4.score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", t_r4.score, "%");
  }
}
function CoachTalentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, CoachTalentComponent_div_15_div_1_Template, 26, 10, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.talents);
  }
}
function CoachTalentComponent_div_16_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", a_r5.match, "% match");
  }
}
function CoachTalentComponent_div_16_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6);
  }
}
function CoachTalentComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 44)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CoachTalentComponent_div_16_div_1_span_4_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275template(10, CoachTalentComponent_div_16_div_1_span_10_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275text(12, "View applications");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(a_r5.type === "cofondateur" ? "kh-badge--orange" : a_r5.type === "stagiaire" ? "kh-badge--teal" : "kh-badge--green");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.match > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.poste);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.startup);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", a_r5.competences);
  }
}
function CoachTalentComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "p");
    \u0275\u0275text(2, "No listings yet. Post an opportunity for one of your startups!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function CoachTalentComponent_div_16_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275text(4, "+ Post listing");
    \u0275\u0275elementEnd()();
  }
}
function CoachTalentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, CoachTalentComponent_div_16_div_1_Template, 13, 7, "div", 24)(2, CoachTalentComponent_div_16_div_2_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.annonces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.annonces.length === 0);
  }
}
var CoachTalentComponent = class _CoachTalentComponent {
  constructor() {
    this.view = "talents";
    this.talents = [
      { id: "t1", nom: "Karim Dridi", poste: "Full Stack Developer", competences: ["Angular", "Node.js", "MongoDB"], score: 92, disponible: true },
      { id: "t2", nom: "Amira Saidi", poste: "UX/UI Designer", competences: ["Figma", "Adobe XD", "CSS"], score: 88, disponible: true },
      { id: "t3", nom: "Youssef Ben Hmida", poste: "Data Scientist", competences: ["Python", "TensorFlow", "SQL"], score: 75, disponible: false },
      { id: "t4", nom: "Sonia Mhiri", poste: "Digital Marketing", competences: ["SEO", "Google Ads", "Analytics"], score: 81, disponible: true }
    ];
    this.annonces = [
      { id: "a1", startup: "EduTech Pro", poste: "Co-founder CTO", type: "cofondateur", competences: ["React", "AWS"], match: 92 },
      { id: "a2", startup: "HealthMobile", poste: "iOS Dev Intern", type: "stagiaire", competences: ["Swift", "UIKit"], match: 75 }
    ];
    this.showForm = false;
    this.newAnnonce = { poste: "", startup: "", type: "stagiaire", competences: "" };
  }
  submitAnnonce() {
    if (!this.newAnnonce.poste || !this.newAnnonce.startup)
      return;
    this.annonces.push({
      id: "a" + Date.now(),
      startup: this.newAnnonce.startup,
      poste: this.newAnnonce.poste,
      type: this.newAnnonce.type,
      competences: this.newAnnonce.competences.split(",").map((s) => s.trim()).filter(Boolean),
      match: 0
    });
    this.showForm = false;
    this.newAnnonce = { poste: "", startup: "", type: "stagiaire", competences: "" };
    this.view = "annonces";
  }
  static {
    this.\u0275fac = function CoachTalentComponent_Factory(t) {
      return new (t || _CoachTalentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoachTalentComponent, selectors: [["app-coach-talent"]], decls: 17, vars: 9, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["class", "form-panel animate-2", 4, "ngIf"], [1, "tabs", "animate-2"], [1, "tab", 3, "click"], ["class", "grid animate-3", 4, "ngIf"], [1, "form-panel", "animate-2"], [1, "form-panel__header"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "e.g. EduTech Pro", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "kh-input", 3, "ngModelChange", "ngModel"], ["value", "cofondateur"], ["value", "stagiaire"], ["value", "emploi"], ["value", "freelance"], ["type", "text", "placeholder", "e.g. Backend Developer", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["type", "text", "placeholder", "e.g. React, Node.js, AWS", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "talent-header"], [1, "talent-avatar"], [1, "card-name"], [1, "card-meta"], [1, "kh-badge", 2, "margin-left", "auto"], [1, "skills"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "14px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-secondary)"], [2, "font-size", "12px", "color", "var(--violet)"], [1, "kh-progress"], [1, "kh-progress__fill", "kh-progress__fill--violet"], [2, "margin-top", "14px", "padding-top", "12px", "border-top", "1px solid var(--border)", "display", "flex", "gap", "8px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "skill-tag"], ["class", "empty-state", 4, "ngIf"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "12px"], [1, "kh-badge"], ["class", "score-badge", 4, "ngIf"], [1, "skills", 2, "margin-top", "10px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 2, "margin-top", "14px", "width", "100%", "justify-content", "center"], [1, "score-badge"], [1, "empty-state"]], template: function CoachTalentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Talent Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Connect your startups with the right talent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function CoachTalentComponent_Template_button_click_7_listener() {
          return ctx.showForm = true;
        });
        \u0275\u0275text(8, "+ Post listing");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, CoachTalentComponent_div_9_Template, 35, 4, "div", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function CoachTalentComponent_Template_button_click_11_listener() {
          return ctx.view = "talents";
        });
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function CoachTalentComponent_Template_button_click_13_listener() {
          return ctx.view = "annonces";
        });
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, CoachTalentComponent_div_15_Template, 2, 1, "div", 8)(16, CoachTalentComponent_div_16_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view === "talents");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\u{1F464} Talents (", ctx.talents.length, ")");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.view === "annonces");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\u{1F4CB} Listings (", ctx.annonces.length, ")");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "talents");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "annonces");
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.form-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  padding: 24px;\n  box-shadow: var(--shadow-card);\n}\n.form-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.form-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.kh-input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-family: inherit;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.kh-input[_ngcontent-%COMP%]:focus {\n  border-color: #7C5CBF;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #7C5CBF;\n  color: white;\n  border-color: #7C5CBF;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n  box-shadow: var(--shadow-card);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.talent-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.talent-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #9E82D4);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  background: rgba(124, 92, 191, 0.1);\n  color: #7C5CBF;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.score-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7C5CBF,\n      #9E82D4);\n  color: white;\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.kh-progress__fill--violet[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #7C5CBF,\n      #9E82D4) !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 48px 24px;\n  color: var(--text-secondary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=talent.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoachTalentComponent, { className: "CoachTalentComponent", filePath: "app\\features\\coach\\talent\\talent.component.ts", lineNumber: 8 });
})();

// src/app/features/coach/coach.module.ts
var routes = [
  {
    path: "",
    component: LayoutCoachComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: CoachDashboardComponent },
      { path: "projets", component: CoachProjetsComponent },
      { path: "startups", component: CoachStartupsComponent },
      { path: "validations", component: CoachValidationsComponent },
      { path: "planning", component: CoachPlanningComponent },
      { path: "messages", component: CoachMessagesComponent },
      { path: "bibliotheque", component: CoachBibliothequeComponent },
      { path: "progressions", component: CoachProgresssComponent },
      { path: "talent", component: CoachTalentComponent }
    ]
  }
];
var CoachModule = class _CoachModule {
  static {
    this.\u0275fac = function CoachModule_Factory(t) {
      return new (t || _CoachModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CoachModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      LayoutCoachModule,
      RouterModule.forChild(routes)
    ] });
  }
};
export {
  CoachModule
};
//# sourceMappingURL=chunk-DEK3B2KX.js.map
