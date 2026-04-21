import {
  ProjetService,
  RessourceService
} from "./chunk-L4ICDUQV.js";
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

// src/app/layout-entrepreneur/layout-entrepreneur.component.ts
function LayoutEntrepreneurComponent_a_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
}
function LayoutEntrepreneurComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LayoutEntrepreneurComponent_a_8_span_4_Template, 1, 0, "span", 35);
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
function LayoutEntrepreneurComponent_span_13_Template(rf, ctx) {
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
function LayoutEntrepreneurComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function LayoutEntrepreneurComponent_div_14_div_6_Template_div_click_0_listener() {
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
function LayoutEntrepreneurComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function LayoutEntrepreneurComponent_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.notifService.markAllRead();
      return \u0275\u0275resetView(ctx_r2.notifOpen = false);
    });
    \u0275\u0275text(5, "Mark all read");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LayoutEntrepreneurComponent_div_14_div_6_Template, 7, 6, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.notifs);
  }
}
function LayoutEntrepreneurComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "p", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function LayoutEntrepreneurComponent_div_28_Template_button_click_6_listener() {
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
function LayoutEntrepreneurComponent_a_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275listener("click", function LayoutEntrepreneurComponent_a_34_Template_a_click_0_listener() {
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
function LayoutEntrepreneurComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function LayoutEntrepreneurComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var LayoutEntrepreneurComponent = class _LayoutEntrepreneurComponent {
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
      { label: "Workflows", icon: "workflow", route: "workflows" },
      { label: "Planning", icon: "calendar", route: "planning" },
      { label: "Messages", icon: "message", route: "messages" },
      { label: "Library", icon: "book", route: "bibliotheque" },
      { label: "Progress", icon: "progress", route: "progressions" },
      { label: "Talent", icon: "people", route: "talent" }
    ];
    this.svgIcons = {
      dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
      folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      workflow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
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
    return `/entrepreneur/${route}`;
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
    this.\u0275fac = function LayoutEntrepreneurComponent_Factory(t) {
      return new (t || _LayoutEntrepreneurComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutEntrepreneurComponent, selectors: [["app-layout-entrepreneur"]], hostBindings: function LayoutEntrepreneurComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function LayoutEntrepreneurComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 43, vars: 18, consts: [["userMenu", ""], [1, "ent-shell"], [1, "ent-nav"], [1, "ent-nav__inner"], ["routerLink", "/entrepreneur/dashboard", 1, "ent-brand"], ["src", "assets/khotwa-logo.png", "alt", "KHOTWA", 1, "brand-logo-img", 2, "height", "36px", "width", "auto", "object-fit", "contain"], [1, "ent-brand__tag"], [1, "ent-nav__links"], ["class", "ent-link", 3, "ent-link--active", "routerLink", 4, "ngFor", "ngForOf"], [1, "ent-nav__actions"], [1, "notif-wrapper"], [1, "ent-icon-btn", 3, "click"], [3, "innerHTML"], ["class", "notif-dot", 4, "ngIf"], ["class", "ent-notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Home", 1, "ent-icon-btn"], [1, "ent-user", 3, "click"], [1, "ent-user__avatar"], [1, "ent-user__info"], [1, "ent-user__name"], [1, "ent-user__role"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "ent-user__chevron"], ["d", "m6 9 6 6 6-6"], ["class", "ent-user__menu", 4, "ngIf"], [1, "ent-burger", 3, "click"], [1, "ent-mobile-nav"], ["class", "ent-mobile-link", 3, "ent-mobile-link--active", "routerLink", "click", 4, "ngFor", "ngForOf"], ["class", "ent-overlay", 3, "click", 4, "ngIf"], [1, "ent-hero-band"], [1, "ent-hero-band__orb", "ent-hero-band__orb--1"], [1, "ent-hero-band__orb", "ent-hero-band__orb--2"], [1, "ent-main"], [1, "ent-content"], [1, "ent-link", 3, "routerLink"], [1, "ent-link__icon", 3, "innerHTML"], ["class", "ent-link__pip", 4, "ngIf"], [1, "ent-link__pip"], [1, "notif-dot"], [1, "ent-notif-panel"], [1, "ent-notif-panel__head"], [3, "click"], ["class", "ent-notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "ent-notif-item", 3, "click"], [1, "ent-notif-item__dot"], [1, "ent-notif-item__title"], [1, "ent-notif-item__msg"], [1, "ent-user__menu"], [1, "ent-user__menu-header"], [1, "menu-name"], [1, "menu-email"], [1, "menu-item", "menu-item--logout", 3, "click"], [1, "ent-mobile-link", 3, "click", "routerLink"], [1, "ent-overlay", 3, "click"]], template: function LayoutEntrepreneurComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "a", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementStart(5, "span", 6);
        \u0275\u0275text(6, "Entrepreneur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 7);
        \u0275\u0275template(8, LayoutEntrepreneurComponent_a_8_Template, 5, 6, "a", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "button", 11);
        \u0275\u0275listener("click", function LayoutEntrepreneurComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.notifOpen = !ctx.notifOpen);
        });
        \u0275\u0275element(12, "span", 12);
        \u0275\u0275template(13, LayoutEntrepreneurComponent_span_13_Template, 2, 1, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, LayoutEntrepreneurComponent_div_14_Template, 7, 1, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 15);
        \u0275\u0275element(16, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 16, 0);
        \u0275\u0275listener("click", function LayoutEntrepreneurComponent_Template_div_click_17_listener() {
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
        \u0275\u0275text(25, "Entrepreneur");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 21);
        \u0275\u0275element(27, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, LayoutEntrepreneurComponent_div_28_Template, 9, 4, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "button", 24);
        \u0275\u0275listener("click", function LayoutEntrepreneurComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mobileOpen = !ctx.mobileOpen);
        });
        \u0275\u0275element(30, "span")(31, "span")(32, "span");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 25);
        \u0275\u0275template(34, LayoutEntrepreneurComponent_a_34_Template, 3, 5, "a", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, LayoutEntrepreneurComponent_div_35_Template, 1, 0, "div", 27);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutEntrepreneurComponent, { className: "LayoutEntrepreneurComponent", filePath: "app\\layout-entrepreneur\\layout-entrepreneur.component.ts", lineNumber: 14 });
})();

// src/app/layout-entrepreneur/layout-entrepreneur.module.ts
var LayoutEntrepreneurModule = class _LayoutEntrepreneurModule {
  static {
    this.\u0275fac = function LayoutEntrepreneurModule_Factory(t) {
      return new (t || _LayoutEntrepreneurModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutEntrepreneurModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule, SharedModule] });
  }
};

// src/app/features/entrepreneur/dashboard/dashboard.component.ts
function EntrepreneurDashboardComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "div", 40);
    \u0275\u0275element(9, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.titre);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r1.status === "in_progress" ? "kh-badge--teal" : p_r1.status === "completed" ? "kh-badge--green" : "kh-badge--amber");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, p_r1.status));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", p_r1.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r1.progression, "%");
  }
}
var EntrepreneurDashboardComponent = class _EntrepreneurDashboardComponent {
  constructor(projetService) {
    this.projetService = projetService;
    this.enCours = 2;
    this.tachesTerminees = 11;
    this.tachesTotal = 18;
    this.progression = 54;
  }
  get projets() {
    return this.projetService.projets;
  }
  static {
    this.\u0275fac = function EntrepreneurDashboardComponent_Factory(t) {
      return new (t || _EntrepreneurDashboardComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurDashboardComponent, selectors: [["app-entrepreneur-dashboard"]], decls: 94, vars: 7, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/entrepreneur/projets", 1, "kh-btn", "kh-btn--primary"], [1, "kpi-grid", "animate-2"], [1, "kpi-card", "kpi-card--primary"], [1, "kpi-value", 2, "color", "white"], [1, "kpi-label", 2, "color", "rgba(255,255,255,0.7)"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-progress"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "kpi-card", "kpi-card--alert"], [1, "kpi-value", 2, "color", "var(--red)"], [1, "bottom-grid", "animate-3"], [1, "kh-card", "panel"], [1, "panel-header"], [1, "kh-section-title"], ["routerLink", "/entrepreneur/projets", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], ["class", "project-row", 4, "ngFor", "ngForOf"], [1, "task-list"], [1, "task-item"], [1, "kh-badge", "kh-badge--red"], [1, "task-name"], [1, "task-meta"], [1, "kh-badge", "kh-badge--amber"], [1, "kh-badge", "kh-badge--orange"], [1, "rdv-list"], [1, "rdv-item"], [1, "rdv-date"], [1, "rdv-day"], [1, "rdv-mo"], [1, "project-row"], [1, "project-row__info"], [2, "font-size", "13px", "font-weight", "600"], [1, "kh-badge"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-top", "6px"], [1, "kh-progress", 2, "flex", "1"], [2, "font-size", "12px"]], template: function EntrepreneurDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Entrepreneur Space");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Welcome Sara \u2014 track your progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "+ New project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14, "Active projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "p", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 11);
        \u0275\u0275text(19, "Completed tasks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "p", 10);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 11);
        \u0275\u0275text(24, "Avg. progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 12)(26, "div", 13);
        \u0275\u0275element(27, "div", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 15)(29, "p", 16);
        \u0275\u0275text(30, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 11);
        \u0275\u0275text(32, "SLA alerts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 17)(34, "div", 18)(35, "div", 19)(36, "span", 20);
        \u0275\u0275text(37, "My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 21);
        \u0275\u0275text(39, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, EntrepreneurDashboardComponent_div_40_Template, 12, 9, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 18)(42, "div", 19)(43, "span", 20);
        \u0275\u0275text(44, "Urgent tasks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 23)(46, "div", 24)(47, "span", 25);
        \u0275\u0275text(48, "critical");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p", 26);
        \u0275\u0275text(50, "Prototype UI \u2014 E-Learning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 27);
        \u0275\u0275text(52, "Deadline: tomorrow \xB7 SLA exceeded");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 24)(54, "span", 28);
        \u0275\u0275text(55, "high");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p", 26);
        \u0275\u0275text(57, "Business Plan AgriSmart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p", 27);
        \u0275\u0275text(59, "Deadline: in 3 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 24)(61, "span", 29);
        \u0275\u0275text(62, "normal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 26);
        \u0275\u0275text(64, "Tests QA HealthMobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p", 27);
        \u0275\u0275text(66, "Awaiting coach validation");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "div", 18)(68, "div", 19)(69, "span", 20);
        \u0275\u0275text(70, "Upcoming appointments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 30)(72, "div", 31)(73, "div", 32)(74, "span", 33);
        \u0275\u0275text(75, "15");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span", 34);
        \u0275\u0275text(77, "Dec");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div")(79, "p", 26);
        \u0275\u0275text(80, "Coaching session \u2014 Ahmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 27);
        \u0275\u0275text(82, "2:00 PM \xB7 Google Meet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "div", 31)(84, "div", 32)(85, "span", 33);
        \u0275\u0275text(86, "20");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "span", 34);
        \u0275\u0275text(88, "Dec");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div")(90, "p", 26);
        \u0275\u0275text(91, "Design Thinking Workshop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p", 27);
        \u0275\u0275text(93, "9:00 AM \xB7 In person");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.enCours);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", ctx.tachesTerminees, "/", ctx.tachesTotal, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.progression, "%");
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("width", ctx.progression, "%");
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.projets.slice(0, 3));
      }
    }, dependencies: [NgForOf, RouterLink, UpperCasePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 14px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 18px 20px;\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n}\n.kpi-card--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2ABFBF,\n      #1a9999);\n  color: white;\n  border: none;\n}\n.kpi-card--primary[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.kpi-card--alert[_ngcontent-%COMP%] {\n  border-color: rgba(232, 74, 74, 0.3);\n  background: rgba(232, 74, 74, 0.04);\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.kpi-card--primary[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: white;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n.kpi-progress[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.project-row[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.project-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.project-row__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.task-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.task-item[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  background: var(--bg-app);\n  border-radius: var(--radius-sm);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.task-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.task-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.rdv-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rdv-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.rdv-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rdv-date[_ngcontent-%COMP%] {\n  text-align: center;\n  background: var(--orange-light);\n  border-radius: var(--radius-sm);\n  padding: 8px 12px;\n  min-width: 48px;\n}\n.rdv-day[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--orange);\n}\n.rdv-mo[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: var(--orange);\n  opacity: 0.7;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurDashboardComponent, { className: "EntrepreneurDashboardComponent", filePath: "app\\features\\entrepreneur\\dashboard\\dashboard.component.ts", lineNumber: 5 });
})();

// src/app/features/entrepreneur/projets/projets.component.ts
function EntrepreneurProjetsComponent_div_19_ng_container_12_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function EntrepreneurProjetsComponent_div_19_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275element(2, "div", 30);
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, EntrepreneurProjetsComponent_div_19_ng_container_12_ng_container_2_div_5_Template, 1, 0, "div", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275classProp("done", e_r1.ordre < 2)("active", e_r1.ordre === 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r1.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2);
  }
}
function EntrepreneurProjetsComponent_div_19_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275template(2, EntrepreneurProjetsComponent_div_19_ng_container_12_ng_container_2_Template, 6, 6, "ng-container", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", p_r3.etapes);
  }
}
function EntrepreneurProjetsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div")(5, "h3", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, EntrepreneurProjetsComponent_div_19_ng_container_12_Template, 3, 1, "ng-container", 16);
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 18)(15, "div", 19)(16, "span", 20);
    \u0275\u0275text(17, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong", 21);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 22);
    \u0275\u0275element(21, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 24)(23, "button", 25);
    \u0275\u0275text(24, "View details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 26);
    \u0275\u0275text(26, "Manage");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", p_r3.status === "in_progress" ? "linear-gradient(180deg,#2ABFBF,#1a9999)" : p_r3.status === "completed" ? "linear-gradient(180deg,#27AE7A,#1a8a5e)" : "linear-gradient(180deg,#F5A623,#d4881e)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.description);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r3.status === "in_progress" ? "kh-badge--teal" : p_r3.status === "completed" ? "kh-badge--green" : "kh-badge--amber");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, p_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r3.etapes.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", p_r3.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r3.progression, "%");
  }
}
var EntrepreneurProjetsComponent = class _EntrepreneurProjetsComponent {
  constructor(projetService) {
    this.projetService = projetService;
    this.filtre = "all";
  }
  get filteredProjets() {
    const l = this.projetService.projets;
    return this.filtre === "all" ? l : l.filter((p) => p.status === this.filtre);
  }
  static {
    this.\u0275fac = function EntrepreneurProjetsComponent_Factory(t) {
      return new (t || _EntrepreneurProjetsComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurProjetsComponent, selectors: [["app-entrepreneur-projets"]], decls: 20, vars: 10, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "tab", 3, "click"], [1, "proj-list", "animate-3"], ["class", "proj-card kh-card", 4, "ngFor", "ngForOf"], [1, "proj-card", "kh-card"], [1, "proj-accent"], [1, "proj-content"], [1, "proj-header"], [1, "proj-name"], [1, "proj-desc"], [1, "kh-badge"], [4, "ngIf"], [1, "proj-footer"], [1, "prog-section"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px", "color", "var(--orange)"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "proj-actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "etapes-timeline"], [4, "ngFor", "ngForOf"], [1, "etape"], [1, "etape-dot"], [1, "etape-label"], ["class", "etape-connector", 4, "ngIf"], [1, "etape-connector"]], template: function EntrepreneurProjetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Create a project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function EntrepreneurProjetsComponent_Template_button_click_10_listener() {
          return ctx.filtre = "all";
        });
        \u0275\u0275text(11, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function EntrepreneurProjetsComponent_Template_button_click_12_listener() {
          return ctx.filtre = "in_progress";
        });
        \u0275\u0275text(13, "In progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function EntrepreneurProjetsComponent_Template_button_click_14_listener() {
          return ctx.filtre = "suspended";
        });
        \u0275\u0275text(15, "Suspended");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 6);
        \u0275\u0275listener("click", function EntrepreneurProjetsComponent_Template_button_click_16_listener() {
          return ctx.filtre = "completed";
        });
        \u0275\u0275text(17, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275template(19, EntrepreneurProjetsComponent_div_19_Template, 27, 13, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredProjets.length, " project(s) \u2014 certification journey");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.filtre === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "in_progress");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "suspended");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "completed");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filteredProjets);
      }
    }, dependencies: [NgForOf, NgIf, UpperCasePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--teal);\n  color: white;\n  border-color: var(--teal);\n}\n.proj-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.proj-card[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n.proj-accent[_ngcontent-%COMP%] {\n  width: 5px;\n  flex-shrink: 0;\n}\n.proj-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 22px;\n}\n.proj-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.proj-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  margin-bottom: 3px;\n}\n.proj-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.etapes-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin: 14px 0;\n  overflow-x: auto;\n  padding-bottom: 4px;\n}\n.etape[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.etape[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border);\n  min-width: 24px;\n  display: block;\n  margin: 0 6px;\n}\n.etape-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--border);\n  border: 2px solid var(--border);\n  flex-shrink: 0;\n}\n.etape.done[_ngcontent-%COMP%]   .etape-dot[_ngcontent-%COMP%] {\n  background: var(--teal);\n  border-color: var(--teal);\n}\n.etape.active[_ngcontent-%COMP%]   .etape-dot[_ngcontent-%COMP%] {\n  background: white;\n  border-color: var(--orange);\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.2);\n}\n.etape-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.etape.done[_ngcontent-%COMP%]   .etape-label[_ngcontent-%COMP%] {\n  color: var(--teal);\n}\n.etape.active[_ngcontent-%COMP%]   .etape-label[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.proj-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.prog-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.proj-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.etape-connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: var(--border);\n  min-width: 20px;\n  margin: 0 4px;\n}\n/*# sourceMappingURL=projets.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurProjetsComponent, { className: "EntrepreneurProjetsComponent", filePath: "app\\features\\entrepreneur\\projets\\projets.component.ts", lineNumber: 4 });
})();

// src/app/features/entrepreneur/workflows/workflows.component.ts
function EntrepreneurWorkflowsComponent_div_25_ng_container_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurWorkflowsComponent_div_25_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "div", 21);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, EntrepreneurWorkflowsComponent_div_25_ng_container_10_div_5_Template, 2, 0, "div", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const w_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", w_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2);
  }
}
function EntrepreneurWorkflowsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 14);
    \u0275\u0275template(10, EntrepreneurWorkflowsComponent_div_25_ng_container_10_Template, 6, 4, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16)(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 19);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", w_r3.color + "22")("color", w_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r3.icone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r3.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.desc);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", w_r3.etapes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", w_r3.runs, " runs");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r3.trigger);
  }
}
var EntrepreneurWorkflowsComponent = class _EntrepreneurWorkflowsComponent {
  constructor() {
    this.workflows = [
      { id: "w1", nom: "Proof-based validation", desc: "Verifies required document is present before validation", trigger: "On submission", status: "ACTIVE", etapes: ["Task submission", "Doc verification", "Coach notification", "Validation"], runs: 34, icone: "\u2705", color: "#27AE7A" },
      { id: "w2", nom: "Alerte SLA \u2014 Blocage", desc: "Notification si une \xE9tape est bloqu\xE9e plus de 15 jours", trigger: "Cron job quotidien", status: "ACTIVE", etapes: ["Scan BDD", "Calcul d\xE9lai", "SLA > 15j?", "Notification admin"], runs: 87, icone: "\u23F0", color: "#E8622A" },
      { id: "w3", nom: "Propagation de Retard", desc: "Recalcule les dates suivantes en cas de retard critical", trigger: "Task update", status: "ACTIVE", etapes: ["D\xE9tection retard", "Impact critical?", "Recalcul dates", "Notif \xE9quipe"], runs: 12, icone: "\u{1F4C5}", color: "#2ABFBF" },
      { id: "w4", nom: "Alerte Deadline 24h", desc: "Push notification 24h avant chaque deadline", trigger: "Cron every 6h", status: "ACTIVE", etapes: ["Scan deadlines", "< 24h?", "Email + Push", "Log envoi"], runs: 156, icone: "\u{1F514}", color: "#F5A623" }
    ];
  }
  static {
    this.\u0275fac = function EntrepreneurWorkflowsComponent_Factory(t) {
      return new (t || _EntrepreneurWorkflowsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurWorkflowsComponent, selectors: [["app-entrepreneur-workflows"]], decls: 26, vars: 1, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kpi-row", "animate-2"], [1, "mini-kpi"], [1, "mini-kpi", "mini-kpi--alert"], [1, "wf-list", "animate-3"], ["class", "wf-card kh-card", 4, "ngFor", "ngForOf"], [1, "wf-card", "kh-card"], [1, "wf-left"], [1, "wf-icon"], [1, "wf-name"], [1, "wf-desc"], [1, "wf-etapes"], [4, "ngFor", "ngForOf"], [1, "wf-right"], [1, "kh-badge", "kh-badge--green"], [1, "wf-runs"], [2, "font-size", "10px", "color", "var(--text-muted)"], [1, "wf-step"], [1, "wf-step-dot"], ["class", "wf-step-arrow", 4, "ngIf"], [1, "wf-step-arrow"]], template: function EntrepreneurWorkflowsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Smart Workflows");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Active automations on your projects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span");
        \u0275\u0275text(10, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "Active workflows");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "span");
        \u0275\u0275text(14, "289");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "Runs this month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 5)(17, "span");
        \u0275\u0275text(18, "96%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "Success rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 6)(21, "span");
        \u0275\u0275text(22, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "Pending alerts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 7);
        \u0275\u0275template(25, EntrepreneurWorkflowsComponent_div_25_Template, 18, 11, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(25);
        \u0275\u0275property("ngForOf", ctx.workflows);
      }
    }, dependencies: [NgForOf, NgIf], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.mini-kpi[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.mini-kpi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.mini-kpi[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.mini-kpi--alert[_ngcontent-%COMP%] {\n  border-color: rgba(232, 74, 74, 0.3);\n  background: rgba(232, 74, 74, 0.04);\n}\n.mini-kpi--alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.wf-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.wf-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.wf-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  flex: 1;\n  min-width: 200px;\n}\n.wf-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.wf-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.wf-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  line-height: 1.4;\n  max-width: 280px;\n}\n.wf-etapes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  flex: 2;\n}\n.wf-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.wf-step-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.wf-step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  background: var(--bg-app);\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.wf-step-arrow[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n  margin: 0 2px;\n}\n.wf-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  text-align: right;\n}\n.wf-runs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=workflows.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurWorkflowsComponent, { className: "EntrepreneurWorkflowsComponent", filePath: "app\\features\\entrepreneur\\workflows\\workflows.component.ts", lineNumber: 3 });
})();

// src/app/features/entrepreneur/planning/planning.component.ts
function EntrepreneurPlanningComponent_span_19_Template(rf, ctx) {
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
function EntrepreneurPlanningComponent_div_21_span_1_Template(rf, ctx) {
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
function EntrepreneurPlanningComponent_div_21_ng_container_2_div_1_Template(rf, ctx) {
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
function EntrepreneurPlanningComponent_div_21_ng_container_2_span_2_Template(rf, ctx) {
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
function EntrepreneurPlanningComponent_div_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EntrepreneurPlanningComponent_div_21_ng_container_2_div_1_Template, 2, 5, "div", 29)(2, EntrepreneurPlanningComponent_div_21_ng_container_2_span_2_Template, 2, 1, "span", 30);
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
function EntrepreneurPlanningComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, EntrepreneurPlanningComponent_div_21_span_1_Template, 2, 1, "span", 26)(2, EntrepreneurPlanningComponent_div_21_ng_container_2_Template, 3, 2, "ng-container", 27);
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
function EntrepreneurPlanningComponent_div_26_Template(rf, ctx) {
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
var EntrepreneurPlanningComponent = class _EntrepreneurPlanningComponent {
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
    this.\u0275fac = function EntrepreneurPlanningComponent_Factory(t) {
      return new (t || _EntrepreneurPlanningComponent)(\u0275\u0275directiveInject(ProjetService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurPlanningComponent, selectors: [["app-entrepreneur-planning"]], decls: 42, vars: 5, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "cal-layout", "animate-2"], [1, "kh-card", "cal-card"], [1, "cal-nav"], [1, "nav-btn", 3, "click"], [1, "cal-month"], [1, "cal-days-header"], [4, "ngFor", "ngForOf"], [1, "cal-grid"], ["class", "cal-cell", 3, "today", "empty", 4, "ngFor", "ngForOf"], [1, "sidebar-events"], [1, "kh-card", "upcoming-card"], [1, "kh-section-title", 2, "margin-bottom", "16px"], ["class", "upcoming-item", 4, "ngFor", "ngForOf"], [1, "kh-card", "legend-card"], [2, "font-size", "13px", "font-weight", "700", "margin-bottom", "12px"], [1, "legend-item"], [1, "legend-dot", 2, "background", "#E84A4A"], [1, "legend-dot", 2, "background", "#2ABFBF"], [1, "legend-dot", 2, "background", "#E8622A"], [1, "legend-dot", 2, "background", "#27AE7A"], [1, "cal-cell"], ["class", "cal-day-num", 4, "ngIf"], [4, "ngIf"], [1, "cal-day-num"], ["class", "cal-event-pill", 3, "background", "color", 4, "ngFor", "ngForOf"], ["class", "more-events", 4, "ngIf"], [1, "cal-event-pill"], [1, "more-events"], [1, "upcoming-item"], [1, "upcoming-bar"], [1, "upcoming-title"], [1, "upcoming-date"]], template: function EntrepreneurPlanningComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function EntrepreneurPlanningComponent_Template_button_click_12_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275text(13, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h2", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function EntrepreneurPlanningComponent_Template_button_click_16_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275text(17, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275template(19, EntrepreneurPlanningComponent_span_19_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275template(21, EntrepreneurPlanningComponent_div_21_Template, 3, 6, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "h3", 16);
        \u0275\u0275text(25, "Upcoming");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, EntrepreneurPlanningComponent_div_26_Template, 7, 5, "div", 17);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurPlanningComponent, { className: "EntrepreneurPlanningComponent", filePath: "app\\features\\entrepreneur\\planning\\planning.component.ts", lineNumber: 6 });
})();

// src/app/features/entrepreneur/messages/messages.component.ts
function EntrepreneurMessagesComponent_div_12_span_11_Template(rf, ctx) {
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
function EntrepreneurMessagesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function EntrepreneurMessagesComponent_div_12_Template_div_click_0_listener() {
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
    \u0275\u0275template(11, EntrepreneurMessagesComponent_div_12_span_11_Template, 2, 1, "span", 22);
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
function EntrepreneurMessagesComponent_ng_container_14_div_11_Template(rf, ctx) {
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
function EntrepreneurMessagesComponent_ng_container_14_Template(rf, ctx) {
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
    \u0275\u0275template(11, EntrepreneurMessagesComponent_ng_container_14_div_11_Template, 6, 6, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30)(13, "button", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 32);
    \u0275\u0275element(15, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurMessagesComponent_ng_container_14_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMsg, $event) || (ctx_r2.newMsg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function EntrepreneurMessagesComponent_ng_container_14_Template_input_keydown_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMsgKey($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function EntrepreneurMessagesComponent_ng_container_14_Template_button_click_17_listener() {
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
function EntrepreneurMessagesComponent_ng_template_15_Template(rf, ctx) {
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
var EntrepreneurMessagesComponent = class _EntrepreneurMessagesComponent {
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
    this.\u0275fac = function EntrepreneurMessagesComponent_Factory(t) {
      return new (t || _EntrepreneurMessagesComponent)(\u0275\u0275directiveInject(ProjetService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurMessagesComponent, selectors: [["app-entrepreneur-messages"]], decls: 17, vars: 3, consts: [["emptyChat", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "chat-layout", "animate-2"], [1, "conv-panel", "kh-card"], [1, "conv-search"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026"], [1, "conv-list"], ["class", "conv-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "chat-area", "kh-card"], [4, "ngIf", "ngIfElse"], [1, "conv-item", 3, "click"], [1, "conv-avatar"], [1, "conv-info"], [1, "conv-top"], [1, "conv-name"], [1, "conv-time"], [1, "conv-preview"], ["class", "unread-badge", 4, "ngIf"], [1, "unread-badge"], [1, "chat-header"], [1, "conv-avatar", 2, "width", "36px", "height", "36px", "font-size", "12px"], [1, "online-status"], [1, "dot-live", "dot-live--green"], [1, "messages-body"], ["class", "msg-wrap", 3, "mine", 4, "ngFor", "ngForOf"], [1, "chat-input"], [1, "input-icon-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"], ["type", "text", "placeholder", "Write a message\u2026", 3, "ngModelChange", "keydown", "ngModel"], [1, "send-btn", 3, "click"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "msg-wrap"], [1, "msg-bubble"], [1, "msg-time"], [1, "empty-chat"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]], template: function EntrepreneurMessagesComponent_Template(rf, ctx) {
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
        \u0275\u0275template(12, EntrepreneurMessagesComponent_div_12_Template, 12, 9, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 13);
        \u0275\u0275template(14, EntrepreneurMessagesComponent_ng_container_14_Template, 21, 6, "ng-container", 14)(15, EntrepreneurMessagesComponent_ng_template_15_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurMessagesComponent, { className: "EntrepreneurMessagesComponent", filePath: "app\\features\\entrepreneur\\messages\\messages.component.ts", lineNumber: 6 });
})();

// src/app/features/entrepreneur/bibliotheque/bibliotheque.component.ts
var _c0 = ["videoPlayer"];
var _c1 = ["pdfCanvas"];
function EntrepreneurBibliothequeComponent_div_45_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_45_button_5_Template_button_click_0_listener() {
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
function EntrepreneurBibliothequeComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_45_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.filterCategorieId = null;
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(4, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EntrepreneurBibliothequeComponent_div_45_button_5_Template, 2, 4, "button", 36);
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
function EntrepreneurBibliothequeComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, "Loading resources\u2026");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_59_Template(rf, ctx) {
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
function EntrepreneurBibliothequeComponent_div_60_div_1_span_7_Template(rf, ctx) {
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
function EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\u2713 Completed");
    \u0275\u0275elementContainerEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "In progress");
    \u0275\u0275elementContainerEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Not started");
    \u0275\u0275elementContainerEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 61)(2, "span", 62);
    \u0275\u0275elementContainerStart(3, 63);
    \u0275\u0275template(4, EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_4_Template, 2, 0, "ng-container", 64)(5, EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_5_Template, 2, 0, "ng-container", 64)(6, EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_6_Template, 2, 0, "ng-container", 65);
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
function EntrepreneurBibliothequeComponent_div_60_div_1_div_19_span_1_Template(rf, ctx) {
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
function EntrepreneurBibliothequeComponent_div_60_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_60_div_1_div_19_span_1_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", r_r6.tags);
  }
}
function EntrepreneurBibliothequeComponent_div_60_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_60_div_1_button_26_Template_button_click_0_listener($event) {
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
function EntrepreneurBibliothequeComponent_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_60_div_1_Template_div_click_0_listener() {
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
    \u0275\u0275template(7, EntrepreneurBibliothequeComponent_div_60_div_1_span_7_Template, 2, 1, "span", 47);
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
    \u0275\u0275template(18, EntrepreneurBibliothequeComponent_div_60_div_1_ng_container_18_Template, 11, 10, "ng-container", 52)(19, EntrepreneurBibliothequeComponent_div_60_div_1_div_19_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(20, "div", 54)(21, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 56);
    \u0275\u0275element(23, "path", 57)(24, "circle", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Click to open ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, EntrepreneurBibliothequeComponent_div_60_div_1_button_26_Template, 6, 0, "button", 59);
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
function EntrepreneurBibliothequeComponent_div_60_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p");
    \u0275\u0275text(2, "No resources found.");
    \u0275\u0275elementEnd()();
  }
}
function EntrepreneurBibliothequeComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_60_div_1_Template, 28, 17, "div", 40)(2, EntrepreneurBibliothequeComponent_div_60_div_2_Template, 3, 0, "div", 41);
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
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 100);
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
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const r_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.downloadRessource(r_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 102);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template_div_click_0_listener() {
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
    \u0275\u0275template(12, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_div_12_Template, 3, 3, "div", 97)(13, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template, 5, 0, "button", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[r_r12.type]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r12.titre.split(" \u2014 ")[1] || r_r12.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r12.tailleFormatee || (r_r12.dureeSec ? \u0275\u0275pipeBind2(8, 8, r_r12.dureeSec / 60, "1.0-0") + " min" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getAccessBadge(r_r12.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.planType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r12.maProgress && r_r12.maProgress.pourcentage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r12.urlFichier);
  }
}
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template, 14, 11, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const folder_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", folder_r10.files);
  }
}
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 80);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template_div_click_1_listener() {
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
    \u0275\u0275template(12, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_Template, 2, 1, "div", 88);
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
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1, "Individual resources");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const r_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.downloadRessource(r_r15));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 102);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd()();
  }
}
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template_div_click_0_listener() {
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
    \u0275\u0275template(12, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_12_Template, 5, 0, "button", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeIcons[r_r15.type]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r15.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r15.tailleFormatee || (r_r15.dureeSec ? \u0275\u0275pipeBind2(8, 7, r_r15.dureeSec / 60, "1.0-0") + " min" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getAccessBadge(r_r15.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r15.planType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r15.urlFichier);
  }
}
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_1_Template, 2, 0, "div", 103)(2, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template, 13, 10, "div", 104);
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
function EntrepreneurBibliothequeComponent_div_61_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template, 13, 6, "ng-container", 52)(2, EntrepreneurBibliothequeComponent_div_61_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 52);
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
function EntrepreneurBibliothequeComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_61_ng_container_1_Template, 3, 2, "ng-container", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.folders);
  }
}
function EntrepreneurBibliothequeComponent_div_62_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
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
function EntrepreneurBibliothequeComponent_div_62_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "polyline", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Auto-saved every 10s ");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_62_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_62_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadRessource(ctx_r1.viewerRessource));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 128);
    \u0275\u0275element(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Download ");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurBibliothequeComponent_div_62_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "div", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.viewerRessource.maProgress.pourcentage, "%")("background", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgress.status));
  }
}
function EntrepreneurBibliothequeComponent_div_62_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "div", 132);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading file\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EntrepreneurBibliothequeComponent_div_62_div_18_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 136);
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
function EntrepreneurBibliothequeComponent_div_62_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "video", 134, 0);
    \u0275\u0275listener("loadedmetadata", function EntrepreneurBibliothequeComponent_div_62_div_18_Template_video_loadedmetadata_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVideoLoaded());
    });
    \u0275\u0275text(3, " Your browser does not support HTML5 video. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EntrepreneurBibliothequeComponent_div_62_div_18_p_4_Template, 3, 4, "p", 135);
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
function EntrepreneurBibliothequeComponent_div_62_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "button", 142);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_62_div_19_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pdfPrevPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 143);
    \u0275\u0275element(3, "polyline", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 145)(5, "span", 146);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 147);
    \u0275\u0275text(8, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 148);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 149);
    \u0275\u0275text(12, "pages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 142);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_62_div_19_div_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pdfNextPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 143);
    \u0275\u0275element(15, "polyline", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 150)(17, "div", 151);
    \u0275\u0275element(18, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 153);
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
function EntrepreneurBibliothequeComponent_div_62_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "div", 132);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Rendering PDF\u2026");
    \u0275\u0275elementEnd()();
  }
}
function EntrepreneurBibliothequeComponent_div_62_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_62_div_19_div_1_Template, 22, 10, "div", 138);
    \u0275\u0275elementStart(2, "div", 139);
    \u0275\u0275element(3, "canvas", 140, 1);
    \u0275\u0275template(5, EntrepreneurBibliothequeComponent_div_62_div_19_div_5_Template, 4, 0, "div", 120);
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
function EntrepreneurBibliothequeComponent_div_62_div_20_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 156);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.rawBlobUrl, \u0275\u0275sanitizeUrl);
  }
}
function EntrepreneurBibliothequeComponent_div_62_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275template(1, EntrepreneurBibliothequeComponent_div_62_div_20_img_1_Template, 1, 1, "img", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.rawBlobUrl);
  }
}
function EntrepreneurBibliothequeComponent_div_62_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 157)(2, "span", 158);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "This file type cannot be previewed in the browser.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 159);
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
function EntrepreneurBibliothequeComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_62_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event.target === $event.currentTarget && ctx_r1.closeViewer());
    });
    \u0275\u0275elementStart(1, "div", 108)(2, "div", 109)(3, "div", 110)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EntrepreneurBibliothequeComponent_div_62_span_8_Template, 2, 5, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 112);
    \u0275\u0275template(10, EntrepreneurBibliothequeComponent_div_62_span_10_Template, 4, 0, "span", 113)(11, EntrepreneurBibliothequeComponent_div_62_button_11_Template, 6, 0, "button", 114);
    \u0275\u0275elementStart(12, "button", 115);
    \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_div_62_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeViewer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 116);
    \u0275\u0275element(14, "line", 117)(15, "line", 118);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(16, EntrepreneurBibliothequeComponent_div_62_div_16_Template, 2, 4, "div", 119)(17, EntrepreneurBibliothequeComponent_div_62_div_17_Template, 4, 0, "div", 120)(18, EntrepreneurBibliothequeComponent_div_62_div_18_Template, 5, 2, "div", 121)(19, EntrepreneurBibliothequeComponent_div_62_div_19_Template, 6, 2, "div", 122)(20, EntrepreneurBibliothequeComponent_div_62_div_20_Template, 2, 1, "div", 123)(21, EntrepreneurBibliothequeComponent_div_62_div_21_Template, 10, 3, "div", 123);
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
var EntrepreneurBibliothequeComponent = class _EntrepreneurBibliothequeComponent {
  constructor(projetService, auth, svc, sanitizer, zone) {
    this.projetService = projetService;
    this.auth = auth;
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
    this.userId = 2;
    this.userRole = "ENTREPRENEUR";
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
    console.log("URL de la ressource :", finalUrl);
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
      alert("No file available.");
      return;
    }
    fetch(url, { headers: { "X-User-Id": String(this.userId), "X-User-Role": this.userRole } }).then((res) => {
      if (!res.ok)
        throw new Error("Server error lors du t\xE9l\xE9chargement");
      return res.blob();
    }).then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = r.nomFichierOriginal || r.titre || "document";
      a.click();
      URL.revokeObjectURL(a.href);
    }).catch((err) => {
      console.error("Download fallback:", err);
      window.open(url, "_blank");
    });
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
    this.\u0275fac = function EntrepreneurBibliothequeComponent_Factory(t) {
      return new (t || _EntrepreneurBibliothequeComponent)(\u0275\u0275directiveInject(ProjetService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RessourceService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurBibliothequeComponent, selectors: [["app-entrepreneur-bibliotheque"]], viewQuery: function EntrepreneurBibliothequeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoPlayerRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pdfCanvasRef = _t.first);
      }
    }, decls: 63, vars: 24, consts: [["videoPlayer", ""], ["pdfCanvas", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "lib-stats", "animate-2"], [1, "lib-stat"], [1, "lib-stat__val"], [1, "lib-stat__label"], [1, "lib-stat__val", 2, "color", "var(--green)"], [1, "lib-stat__val", 2, "color", "var(--teal)"], [1, "lib-stat__val", 2, "color", "var(--violet)"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search resources\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "filter-group"], [1, "filter-label"], [1, "tab", 3, "click"], ["class", "filter-group", 4, "ngIf"], [1, "view-toggle-row"], [3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["style", "padding:16px;background:#FCEBEB;border-radius:8px;color:#791F1F;font-size:13px", 4, "ngIf"], ["class", "res-grid animate-3", 4, "ngIf"], ["class", "folders-view animate-3", 4, "ngIf"], ["class", "viewer-overlay", 3, "click", 4, "ngIf"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [2, "padding", "16px", "background", "#FCEBEB", "border-radius", "8px", "color", "#791F1F", "font-size", "13px"], [1, "res-grid", "animate-3"], ["class", "res-card kh-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "res-card", "kh-card", 3, "click"], [1, "res-card__top"], [1, "res-icon"], [1, "res-badges"], [1, "kh-badge"], ["class", "kh-badge kh-badge--gray", 4, "ngIf"], [1, "res-titre"], [1, "res-desc"], [1, "res-meta"], [2, "color", "var(--text-muted)"], [4, "ngIf"], ["class", "res-tags", 4, "ngIf"], [1, "res-card-actions"], [1, "res-open-hint"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "download-btn", "title", "Download", 3, "click", 4, "ngIf"], [1, "kh-badge", "kh-badge--gray"], [1, "prog-row"], [1, "prog-label"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "prog-pct"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "res-tags"], ["class", "res-tag", 4, "ngFor", "ngForOf"], [1, "res-tag"], ["title", "Download", 1, "download-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "empty-state"], [1, "folders-view", "animate-3"], [4, "ngFor", "ngForOf"], [1, "folder-row", 3, "click"], [1, "folder-icon-wrap"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "folder-meta"], [1, "folder-name"], [1, "folder-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "folder-chevron"], ["points", "9 18 15 12 9 6"], ["class", "folder-files", 4, "ngIf"], [1, "folder-files"], ["class", "folder-file-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "folder-file-row", 3, "click"], [1, "ff-icon"], [1, "ff-info"], [1, "ff-name"], [1, "ff-size"], [1, "ff-side-actions"], ["class", "prog-cell", 4, "ngIf"], ["class", "ff-dl-btn", 3, "click", 4, "ngIf"], [1, "prog-cell"], [1, "prog-pct-sm"], [1, "ff-dl-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["class", "solo-label", 4, "ngIf"], ["class", "folder-file-row solo-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "solo-label"], [1, "folder-file-row", "solo-row", 3, "click"], [1, "viewer-overlay", 3, "click"], [1, "viewer-box"], [1, "viewer-header"], [1, "viewer-title"], ["class", "viewer-prog-badge", 3, "background", "color", 4, "ngIf"], [1, "viewer-header-right"], ["class", "viewer-autosave-info", 4, "ngIf"], ["class", "viewer-dl-btn", "title", "Download", 3, "click", 4, "ngIf"], [1, "viewer-close", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "viewer-prog-bar", 4, "ngIf"], ["class", "viewer-loading", 4, "ngIf"], ["class", "viewer-content", 4, "ngIf"], ["class", "viewer-content viewer-content--pdf", 4, "ngIf"], ["class", "viewer-content viewer-content--center", 4, "ngIf"], [1, "viewer-prog-badge"], [1, "viewer-autosave-info"], ["points", "20 6 9 17 4 12"], ["title", "Download", 1, "viewer-dl-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "viewer-prog-bar"], [1, "viewer-prog-fill"], [1, "viewer-loading"], [1, "viewer-spinner"], [1, "viewer-content"], ["controls", "", "preload", "metadata", 1, "viewer-video", 3, "loadedmetadata", "src"], ["class", "viewer-resume-hint", 4, "ngIf"], [1, "viewer-resume-hint"], [1, "viewer-content", "viewer-content--pdf"], ["class", "pdf-controls", 4, "ngIf"], [1, "pdf-canvas-wrap"], [1, "pdf-canvas"], [1, "pdf-controls"], [1, "pdf-nav-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "pdf-page-info"], [1, "pdf-page-current"], [1, "pdf-page-sep"], [1, "pdf-page-total"], [1, "pdf-page-label"], [1, "pdf-inline-prog"], [1, "kh-progress", 2, "width", "120px"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "font-size", "11px", "font-weight", "700", "color", "var(--teal)"], [1, "viewer-content", "viewer-content--center"], ["class", "viewer-img", "alt", "resource image", 3, "src", 4, "ngIf"], ["alt", "resource image", 1, "viewer-img", 3, "src"], [1, "viewer-download-prompt"], [1, "viewer-dl-icon"], ["target", "_blank", "download", "", 1, "kh-btn", "kh-btn--primary", 3, "href"]], template: function EntrepreneurBibliothequeComponent_Template(rf, ctx) {
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
        \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurBibliothequeComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function EntrepreneurBibliothequeComponent_Template_input_input_33_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 19)(35, "span", 20);
        \u0275\u0275text(36, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 21);
        \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_Template_button_click_37_listener() {
          ctx.filterType = "ALL";
          return ctx.load();
        });
        \u0275\u0275text(38, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 21);
        \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_Template_button_click_39_listener() {
          ctx.filterType = "PDF";
          return ctx.load();
        });
        \u0275\u0275text(40, "\u{1F4C4} PDF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 21);
        \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_Template_button_click_41_listener() {
          ctx.filterType = "VIDEO";
          return ctx.load();
        });
        \u0275\u0275text(42, "\u{1F3A5} Video");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 21);
        \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_Template_button_click_43_listener() {
          ctx.filterType = "EXCEL";
          return ctx.load();
        });
        \u0275\u0275text(44, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, EntrepreneurBibliothequeComponent_div_45_Template, 6, 3, "div", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 23)(47, "button", 24);
        \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_Template_button_click_47_listener() {
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
        \u0275\u0275listener("click", function EntrepreneurBibliothequeComponent_Template_button_click_54_listener() {
          return ctx.view = "folders";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 25);
        \u0275\u0275element(56, "path", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " Folders ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(58, EntrepreneurBibliothequeComponent_div_58_Template, 2, 0, "div", 31)(59, EntrepreneurBibliothequeComponent_div_59_Template, 2, 1, "div", 32)(60, EntrepreneurBibliothequeComponent_div_60_Template, 3, 2, "div", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275template(61, EntrepreneurBibliothequeComponent_div_61_Template, 2, 1, "div", 34)(62, EntrepreneurBibliothequeComponent_div_62_Template, 22, 11, "div", 35);
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
    }, dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, DefaultValueAccessor, NgControlStatus, NgModel, JsonPipe, DecimalPipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.lib-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.lib-stat[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 100px;\n}\n.lib-stat__val[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n}\n.lib-stat__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  min-width: 50px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 8px 14px;\n  width: 100%;\n  max-width: 360px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  flex: 1;\n  color: var(--text-primary);\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.res-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.res-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  background: white;\n}\n.res-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  border-color: var(--orange);\n}\n.res-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.res-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.res-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.res-titre[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  line-height: 1.55;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.res-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 10px;\n}\n.prog-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.prog-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n}\n.prog-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--orange);\n}\n.res-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.res-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.res-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 28px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-right: 10px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: var(--text-muted);\n  padding: 4px 8px;\n}\n.modal-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.modal-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.meta-key[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.meta-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.modal-progress[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n  flex-wrap: wrap;\n}\n.res-open-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n}\n.viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.viewer-box[_ngcontent-%COMP%] {\n  background: var(--color-background-primary,#fff);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 1100px;\n  max-height: 95vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.viewer-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: "Syne", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  overflow: hidden;\n}\n.viewer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.viewer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.viewer-prog-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.viewer-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.viewer-autosave-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: var(--green,#27AE7A);\n  font-weight: 600;\n}\n.viewer-close[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.viewer-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-app);\n  border-color: var(--text-muted);\n}\n.viewer-prog-bar[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--border);\n  flex-shrink: 0;\n}\n.viewer-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.5s ease;\n  border-radius: 2px;\n}\n.viewer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.viewer-content--center[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.viewer-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #000;\n  min-height: 0;\n}\n.viewer-iframe[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  border: none;\n  min-height: 500px;\n}\n.viewer-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.viewer-resume-hint[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12px;\n  color: var(--teal,#2ABFBF);\n  font-weight: 600;\n  background: rgba(42, 191, 191, 0.08);\n  text-align: center;\n  flex-shrink: 0;\n}\n.viewer-download-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.viewer-dl-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.viewer-download-prompt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n}\n.viewer-download-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.viewer-loading[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  color: var(--text-muted);\n}\n.viewer-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--border);\n  border-top-color: var(--orange);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.viewer-content--pdf[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.pdf-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--bg-app);\n}\n.pdf-nav-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  color: var(--text-secondary);\n}\n.pdf-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.pdf-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pdf-page-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  font-size: 13px;\n}\n.pdf-page-current[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-family: "Syne", sans-serif;\n  font-size: 16px;\n  color: var(--orange);\n}\n.pdf-page-sep[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pdf-page-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.pdf-page-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.pdf-inline-prog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.pdf-canvas-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n  background: #525659;\n}\n.pdf-canvas[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n  border-radius: 2px;\n  max-width: 100%;\n}\n.res-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n}\n.res-open-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  color: var(--text-muted);\n}\n.download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  background: white;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.viewer-dl-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.viewer-dl-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.view-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.view-toggle-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.view-toggle-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.folders-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.folder-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.folder-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  background: #FFF8F5;\n}\n.folder-icon-wrap[_ngcontent-%COMP%] {\n  color: var(--orange);\n  flex-shrink: 0;\n}\n.folder-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.folder-name[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n}\n.folder-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 2px 8px;\n}\n.folder-chevron[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.folder-chevron.open[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.folder-files[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  border-left: 2px solid var(--border);\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-bottom: 6px;\n}\n.folder-file-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.folder-file-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--teal);\n  background: #F5FFFD;\n}\n.ff-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ff-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ff-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ff-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.ff-prog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ff-dl-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 4px 6px;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.ff-dl-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.solo-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  padding: 8px 4px 4px;\n}\n.solo-row[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.folder-file-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 10px 16px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.15s;\n  margin-bottom: 4px;\n}\n.folder-file-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  background: #FFF8F5;\n}\n.ff-main-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.ff-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  width: 24px;\n  text-align: center;\n}\n.ff-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.ff-size[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  padding: 2px 6px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.ff-action-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.ff-dl-btn-small[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.2s;\n}\n.ff-dl-btn-small[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n/*# sourceMappingURL=bibliotheque.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurBibliothequeComponent, { className: "EntrepreneurBibliothequeComponent", filePath: "app\\features\\entrepreneur\\bibliotheque\\bibliotheque.component.ts", lineNumber: 21 });
})();

// src/app/features/entrepreneur/progressions/progressions.component.ts
function EntrepreneurProgresssComponent_div_28_Template(rf, ctx) {
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
function EntrepreneurProgresssComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurProgresssComponent_div_30_div_5_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function EntrepreneurProgresssComponent_div_30_div_5_Template_button_click_16_listener() {
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
function EntrepreneurProgresssComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 22);
    \u0275\u0275element(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, EntrepreneurProgresssComponent_div_30_div_5_Template, 18, 9, "div", 25);
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
function EntrepreneurProgresssComponent_div_31_div_5_Template(rf, ctx) {
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
function EntrepreneurProgresssComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h3", 22);
    \u0275\u0275element(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, EntrepreneurProgresssComponent_div_31_div_5_Template, 13, 6, "div", 40);
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
function EntrepreneurProgresssComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p");
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No resources started yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function EntrepreneurProgresssComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openBibliotheque());
    });
    \u0275\u0275text(6, "Browse the Library \u2192");
    \u0275\u0275elementEnd()();
  }
}
var EntrepreneurProgresssComponent = class _EntrepreneurProgresssComponent {
  constructor(svc, router) {
    this.svc = svc;
    this.router = router;
    this.progressions = [];
    this.loading = false;
    this.userId = 2;
    this.userRole = "ENTREPRENEUR";
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
    this.router.navigateByUrl("/entrepreneur/bibliotheque");
  }
  marquerTermine(p) {
    this.svc.marquerTermineHttp(this.userId, p.ressource.id).subscribe({
      next: () => this.load()
    });
  }
  static {
    this.\u0275fac = function EntrepreneurProgresssComponent_Factory(t) {
      return new (t || _EntrepreneurProgresssComponent)(\u0275\u0275directiveInject(RessourceService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurProgresssComponent, selectors: [["app-entrepreneur-progressions"]], decls: 33, vars: 9, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [1, "prog-kpis", "animate-2"], [1, "prog-kpi"], [1, "prog-kpi__val", 2, "color", "var(--teal)"], [1, "prog-kpi__label"], [1, "prog-kpi__val", 2, "color", "var(--green)"], [1, "prog-kpi__val"], ["class", "prog-kpi", 4, "ngIf"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["class", "animate-3", 4, "ngIf"], ["class", "animate-3", "style", "margin-top:24px", 4, "ngIf"], ["class", "empty-prog", 4, "ngIf"], [1, "prog-kpi__val", 2, "color", "var(--orange)"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "animate-3"], [1, "section-title"], [1, "section-dot", 2, "background", "var(--teal)"], [1, "prog-list"], ["class", "prog-card kh-card", 4, "ngFor", "ngForOf"], [1, "prog-card", "kh-card"], [1, "prog-card__left"], [1, "prog-card__icon"], [1, "prog-card__info"], [1, "prog-card__titre"], [1, "prog-card__meta"], [1, "prog-card__right"], [1, "prog-bar-wrap"], [1, "kh-progress", 2, "width", "120px", "height", "8px"], [1, "kh-progress__fill", 2, "background", "var(--teal)"], [1, "prog-pct-label"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "animate-3", 2, "margin-top", "24px"], [1, "section-dot", 2, "background", "var(--green)"], ["class", "prog-card kh-card prog-card--done", 4, "ngFor", "ngForOf"], [1, "prog-card", "kh-card", "prog-card--done"], [1, "done-badge"], [1, "empty-prog"]], template: function EntrepreneurProgresssComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "My Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function EntrepreneurProgresssComponent_Template_button_click_7_listener() {
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
        \u0275\u0275template(28, EntrepreneurProgresssComponent_div_28_Template, 6, 4, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, EntrepreneurProgresssComponent_div_29_Template, 2, 0, "div", 15)(30, EntrepreneurProgresssComponent_div_30_Template, 6, 2, "div", 16)(31, EntrepreneurProgresssComponent_div_31_Template, 6, 2, "div", 17)(32, EntrepreneurProgresssComponent_div_32_Template, 7, 0, "div", 18);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurProgresssComponent, { className: "EntrepreneurProgresssComponent", filePath: "app\\features\\entrepreneur\\progressions\\progressions.component.ts", lineNumber: 10 });
})();

// src/app/features/entrepreneur/talent/talent.component.ts
function EntrepreneurTalentComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.successMsg, "");
  }
}
function EntrepreneurTalentComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.error = "");
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0 ", ctx_r0.error, " ");
  }
}
function EntrepreneurTalentComponent_section_34_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_section_34_button_41_Template_button_click_0_listener() {
      const m_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleMetier(m_r5.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tm-metier-chip--on", ctx_r0.newAnnonce.metiers.includes(m_r5.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r5.label, " ");
  }
}
function EntrepreneurTalentComponent_section_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 40)(2, "div")(3, "h3");
    \u0275\u0275text(4, "Nouvelle annonce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6, "Titre, type, comp\xE9tences, m\xE9tiers cibles et description \u2014 tout part vers votre API.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_section_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showForm = false);
    });
    \u0275\u0275text(8, "Fermer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 43)(10, "div", 44)(11, "label", 45);
    \u0275\u0275text(12, "Intitul\xE9 du poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_34_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newAnnonce.poste, $event) || (ctx_r0.newAnnonce.poste = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "label", 47);
    \u0275\u0275text(16, "Type de contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_34_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newAnnonce.type, $event) || (ctx_r0.newAnnonce.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 49);
    \u0275\u0275text(19, "Co-fondateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 50);
    \u0275\u0275text(21, "Stagiaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 51);
    \u0275\u0275text(23, "CDI / temps plein");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 43)(25, "div", 44)(26, "label", 52);
    \u0275\u0275text(27, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_34_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newAnnonce.localisation, $event) || (ctx_r0.newAnnonce.localisation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 44)(30, "label", 54);
    \u0275\u0275text(31, "Comp\xE9tences requises ");
    \u0275\u0275elementStart(32, "span", 55);
    \u0275\u0275text(33, "(virgules)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_34_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newAnnonce.competences, $event) || (ctx_r0.newAnnonce.competences = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 57)(36, "label");
    \u0275\u0275text(37, "M\xE9tiers & familles avanc\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 58);
    \u0275\u0275text(39, "S\xE9lectionnez une ou plusieurs cibles \u2014 utiles pour le matching et l\u2019IA.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 59);
    \u0275\u0275template(41, EntrepreneurTalentComponent_section_34_button_41_Template, 2, 3, "button", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 44)(43, "label", 61);
    \u0275\u0275text(44, "Description du poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_34_Template_textarea_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newAnnonce.description, $event) || (ctx_r0.newAnnonce.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 63);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_section_34_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitAnnonce());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAnnonce.poste);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAnnonce.type);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAnnonce.localisation);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAnnonce.competences);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.metiersCatalog);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newAnnonce.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Publication\u2026" : "Publier l\u2019annonce", " ");
  }
}
function EntrepreneurTalentComponent_section_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 65)(1, "div", 40)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_section_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.annulerEdition());
    });
    \u0275\u0275text(5, "Fermer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44)(8, "label");
    \u0275\u0275text(9, "Intitul\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_35_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editData.titre, $event) || (ctx_r0.editData.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "label", 67);
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_35_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editData.typePoste, $event) || (ctx_r0.editData.typePoste = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 69);
    \u0275\u0275text(16, "Co-fondateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 70);
    \u0275\u0275text(18, "Stagiaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 71);
    \u0275\u0275text(20, "CDI");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 43)(22, "div", 44)(23, "label");
    \u0275\u0275text(24, "Comp\xE9tences ");
    \u0275\u0275elementStart(25, "span", 55);
    \u0275\u0275text(26, "(virgules)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_35_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editData.competencesRequises, $event) || (ctx_r0.editData.competencesRequises = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 44)(29, "label");
    \u0275\u0275text(30, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_35_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editData.localisation, $event) || (ctx_r0.editData.localisation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 44)(33, "label");
    \u0275\u0275text(34, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_section_35_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editData.description, $event) || (ctx_r0.editData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 73)(37, "button", 63);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_section_35_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sauvegarderModification());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 74);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_section_35_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.annulerEdition());
    });
    \u0275\u0275text(40, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Modifier \u2014 ", ctx_r0.editData.titre, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editData.titre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editData.typePoste);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editData.competencesRequises);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editData.localisation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editData.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
function EntrepreneurTalentComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_div_46_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTalent, $event) || (ctx_r0.searchTalent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTalent);
  }
}
function EntrepreneurTalentComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_div_47_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchAnnonce, $event) || (ctx_r0.searchAnnonce = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchAnnonce);
  }
}
function EntrepreneurTalentComponent_div_48_article_1_span_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", c_r11.niveau, "/5)");
  }
}
function EntrepreneurTalentComponent_div_48_article_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275template(2, EntrepreneurTalentComponent_div_48_article_1_span_14_ng_container_2_Template, 2, 1, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r11.nom, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r11.niveau != null && c_r11.niveau > 0);
  }
}
function EntrepreneurTalentComponent_div_48_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 81)(1, "div", 82)(2, "div", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 84)(5, "p", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 87);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_48_article_1_Template_button_click_9_listener() {
      const t_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.ouvrirProfil(t_r10));
    });
    \u0275\u0275text(10, " Voir le profil ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 88);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 89);
    \u0275\u0275template(14, EntrepreneurTalentComponent_div_48_article_1_span_14_Template, 3, 2, "span", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r10.nom == null ? null : t_r10.nom.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", t_r10.prenom, " ", t_r10.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r10.email);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("kh-badge--green", t_r10.disponible)("kh-badge--gray", !t_r10.disponible);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r10.disponible ? "Disponible" : "Indisponible", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.competencesPourAffichage(t_r10));
  }
}
function EntrepreneurTalentComponent_div_48_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93);
    \u0275\u0275text(1, "Aucun talent ne correspond \xE0 votre recherche.");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurTalentComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, EntrepreneurTalentComponent_div_48_article_1_Template, 15, 10, "article", 79)(2, EntrepreneurTalentComponent_div_48_p_2_Template, 2, 0, "p", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredTalents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredTalents.length === 0);
  }
}
function EntrepreneurTalentComponent_div_49_article_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14);
  }
}
function EntrepreneurTalentComponent_div_49_article_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", a_r13.localisation, "");
  }
}
function EntrepreneurTalentComponent_div_49_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 96)(1, "div", 97)(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 98)(5, "button", 99);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_49_article_1_Template_button_click_5_listener() {
      const a_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.ouvrirEdition(a_r13));
    });
    \u0275\u0275text(6, "\u270F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 100);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_49_article_1_Template_button_click_7_listener() {
      const a_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteAnnonce(a_r13.id));
    });
    \u0275\u0275text(8, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 85);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 101);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 102);
    \u0275\u0275template(14, EntrepreneurTalentComponent_div_49_article_1_span_14_Template, 2, 1, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EntrepreneurTalentComponent_div_49_article_1_p_15_Template, 2, 1, "p", 103);
    \u0275\u0275elementStart(16, "div", 104)(17, "button", 105);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_49_article_1_Template_button_click_17_listener() {
      const a_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.voirCandidatures(a_r13));
    });
    \u0275\u0275text(18, " Matching & candidatures ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tm-listing-card--highlight", (ctx_r0.editData == null ? null : ctx_r0.editData.id) === a_r13.id && ctx_r0.showEditForm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("kh-badge--orange", (a_r13.typePoste == null ? null : a_r13.typePoste.toUpperCase()) === "COFONDATEUR")("kh-badge--teal", (a_r13.typePoste == null ? null : a_r13.typePoste.toUpperCase()) === "STAGIAIRE")("kh-badge--green", (a_r13.typePoste == null ? null : a_r13.typePoste.toUpperCase()) === "EMPLOI");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r13.typePoste, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(a_r13.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r13.startupNom || (a_r13.startup == null ? null : a_r13.startup.nom) || "Startup");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getCompetences(a_r13.competencesRequises));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r13.localisation);
  }
}
function EntrepreneurTalentComponent_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "p");
    \u0275\u0275text(2, "Aucune offre ne correspond au filtre.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_49_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showForm = true);
    });
    \u0275\u0275text(4, "Cr\xE9er une offre");
    \u0275\u0275elementEnd()();
  }
}
function EntrepreneurTalentComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, EntrepreneurTalentComponent_div_49_article_1_Template, 19, 13, "article", 94)(2, EntrepreneurTalentComponent_div_49_div_2_Template, 5, 0, "div", 95);
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
function EntrepreneurTalentComponent_div_69_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r16);
  }
}
function EntrepreneurTalentComponent_div_69_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r17);
  }
}
function EntrepreneurTalentComponent_div_69_li_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r18);
  }
}
function EntrepreneurTalentComponent_div_69_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r19);
  }
}
function EntrepreneurTalentComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "h4");
    \u0275\u0275text(2, "Fiche synth\xE8se");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Comp\xE9tences sugg\xE9r\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275template(8, EntrepreneurTalentComponent_div_69_li_8_Template, 2, 1, "li", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4");
    \u0275\u0275text(10, "Questions d\u2019entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul");
    \u0275\u0275template(12, EntrepreneurTalentComponent_div_69_li_12_Template, 2, 1, "li", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h4");
    \u0275\u0275text(14, "Onboarding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul");
    \u0275\u0275template(16, EntrepreneurTalentComponent_div_69_li_16_Template, 2, 1, "li", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h4");
    \u0275\u0275text(18, "Risques / \xE9carts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul");
    \u0275\u0275template(20, EntrepreneurTalentComponent_div_69_li_20_Template, 2, 1, "li", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.hiringAiResult.fichePoste);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.hiringAiResult.competencesSuggerees);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.hiringAiResult.questionsEntretien);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.hiringAiResult.checklistOnboarding);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.hiringAiResult.risquesOuGaps);
  }
}
function EntrepreneurTalentComponent_div_70_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.selectedAnnonce.localisation, "");
  }
}
function EntrepreneurTalentComponent_div_70_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F3E2} ", ctx_r0.selectedAnnonce.startupNom || (ctx_r0.selectedAnnonce.startup == null ? null : ctx_r0.selectedAnnonce.startup.nom), " ");
  }
}
function EntrepreneurTalentComponent_div_70_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedAnnonce.description);
  }
}
function EntrepreneurTalentComponent_div_70_div_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21);
  }
}
function EntrepreneurTalentComponent_div_70_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "p", 138);
    \u0275\u0275text(2, "Comp\xE9tences requises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275template(4, EntrepreneurTalentComponent_div_70_div_19_span_4_Template, 2, 1, "span", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.getCompetences(ctx_r0.selectedAnnonce.competencesRequises));
  }
}
function EntrepreneurTalentComponent_div_70_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.sortedMatching.length, " profil(s)");
  }
}
function EntrepreneurTalentComponent_div_70_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275text(1, "Calcul du matching\u2026");
    \u0275\u0275elementEnd();
  }
}
function EntrepreneurTalentComponent_div_70_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "p", 142);
    \u0275\u0275text(2, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 143);
    \u0275\u0275text(4, "V\xE9rifiez l\u2019endpoint ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "GET /api/candidatures/matching/:id");
    \u0275\u0275elementEnd()()();
  }
}
function EntrepreneurTalentComponent_div_70_div_38_div_25_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r23);
  }
}
function EntrepreneurTalentComponent_div_70_div_38_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "span", 166);
    \u0275\u0275text(2, "En commun");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275template(4, EntrepreneurTalentComponent_div_70_div_38_div_25_div_1_span_4_Template, 2, 1, "span", 167);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", m_r24.competencesCommunes);
  }
}
function EntrepreneurTalentComponent_div_70_div_38_div_25_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 171);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r25);
  }
}
function EntrepreneurTalentComponent_div_70_div_38_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "span", 169);
    \u0275\u0275text(2, "\xC0 renforcer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275template(4, EntrepreneurTalentComponent_div_70_div_38_div_25_div_2_span_4_Template, 2, 1, "span", 170);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", m_r24.competencesManquantes);
  }
}
function EntrepreneurTalentComponent_div_70_div_38_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275template(1, EntrepreneurTalentComponent_div_70_div_38_div_25_div_1_Template, 5, 1, "div", 164)(2, EntrepreneurTalentComponent_div_70_div_38_div_25_div_2_Template, 5, 1, "div", 164);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r24.competencesCommunes == null ? null : m_r24.competencesCommunes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r24.competencesManquantes == null ? null : m_r24.competencesManquantes.length);
  }
}
function EntrepreneurTalentComponent_div_70_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 145)(2, "div", 146)(3, "div", 147);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 148)(6, "div", 149)(7, "h4", 150);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 151);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 152);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 153)(14, "div", 154)(15, "div", 155)(16, "span", 156);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 157);
    \u0275\u0275text(20, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "span", 158);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 159);
    \u0275\u0275element(24, "div", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, EntrepreneurTalentComponent_div_70_div_38_div_25_Template, 3, 2, "div", 161);
    \u0275\u0275elementStart(26, "div", 162)(27, "button", 42);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_70_div_38_Template_button_click_27_listener() {
      const m_r24 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.ouvrirProfil(m_r24));
    });
    \u0275\u0275text(28, "Profil");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r24 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.initialsFromNom(m_r24.nomTalent));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r24.nomTalent);
    \u0275\u0275advance();
    \u0275\u0275classProp("niveau-pill--excellent", ctx_r0.niveauTone(m_r24.niveau) === "excellent")("niveau-pill--bon", ctx_r0.niveauTone(m_r24.niveau) === "bon")("niveau-pill--faible", ctx_r0.niveauTone(m_r24.niveau) === "faible");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r24.niveau || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r24.emailTalent);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--accent", ctx_r0.getScoreColor(m_r24.matchingScore))("--pct", (m_r24.matchingScore > 100 ? 100 : m_r24.matchingScore < 0 ? 0 : m_r24.matchingScore) + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 21, m_r24.matchingScore, "1.0-1"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", i_r26 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", m_r24.matchingScore > 100 ? 100 : m_r24.matchingScore < 0 ? 0 : m_r24.matchingScore, "%")("background", ctx_r0.getScoreColor(m_r24.matchingScore));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (m_r24.competencesCommunes == null ? null : m_r24.competencesCommunes.length) || (m_r24.competencesManquantes == null ? null : m_r24.competencesManquantes.length));
  }
}
function EntrepreneurTalentComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_70_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerModal());
    });
    \u0275\u0275elementStart(1, "div", 112);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_70_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 113)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 114)(6, "button", 99);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_70_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ouvrirEdition(ctx_r0.selectedAnnonce));
    });
    \u0275\u0275text(7, "\u270F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 100);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_70_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteAnnonce(ctx_r0.selectedAnnonce.id));
    });
    \u0275\u0275text(9, "\u{1F5D1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 115);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_70_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerModal());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 116)(13, "div", 117)(14, "span", 88);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, EntrepreneurTalentComponent_div_70_span_16_Template, 2, 1, "span", 118)(17, EntrepreneurTalentComponent_div_70_span_17_Template, 2, 1, "span", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EntrepreneurTalentComponent_div_70_p_18_Template, 2, 1, "p", 119)(19, EntrepreneurTalentComponent_div_70_div_19_Template, 5, 1, "div", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 121);
    \u0275\u0275elementStart(21, "div", 122)(22, "div", 123)(23, "p", 124);
    \u0275\u0275text(24, "Matching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 125);
    \u0275\u0275template(26, EntrepreneurTalentComponent_div_70_span_26_Template, 2, 1, "span", 126);
    \u0275\u0275elementStart(27, "label", 127);
    \u0275\u0275text(28, " Trier ");
    \u0275\u0275elementStart(29, "select", 128);
    \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_div_70_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sortMatching, $event) || (ctx_r0.sortMatching = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 129);
    \u0275\u0275text(31, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 130);
    \u0275\u0275text(33, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 131);
    \u0275\u0275text(35, "Niveau");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(36, EntrepreneurTalentComponent_div_70_div_36_Template, 2, 0, "div", 132)(37, EntrepreneurTalentComponent_div_70_div_37_Template, 7, 0, "div", 133)(38, EntrepreneurTalentComponent_div_70_div_38_Template, 29, 24, "div", 134);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAnnonce.titre);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("kh-badge--orange", (ctx_r0.selectedAnnonce.typePoste || "").toUpperCase() === "COFONDATEUR")("kh-badge--teal", (ctx_r0.selectedAnnonce.typePoste || "").toUpperCase() === "STAGIAIRE")("kh-badge--green", (ctx_r0.selectedAnnonce.typePoste || "").toUpperCase() === "EMPLOI");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAnnonce.typePoste, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAnnonce.localisation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAnnonce.startupNom || (ctx_r0.selectedAnnonce.startup == null ? null : ctx_r0.selectedAnnonce.startup.nom));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAnnonce.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAnnonce.competencesRequises);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r0.matchingLoading);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sortMatching);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.matchingLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.matchingLoading && ctx_r0.sortedMatching.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sortedMatching);
  }
}
function EntrepreneurTalentComponent_div_71_span_23_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", s_r28.niveau, "/5)");
  }
}
function EntrepreneurTalentComponent_div_71_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275template(2, EntrepreneurTalentComponent_div_71_span_23_ng_container_2_Template, 2, 1, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r28.nom, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r28.niveau != null && s_r28.niveau > 0);
  }
}
function EntrepreneurTalentComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_71_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerProfil());
    });
    \u0275\u0275elementStart(1, "div", 172);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_71_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 113)(3, "h3");
    \u0275\u0275text(4, "Profil candidat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 115);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_71_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerProfil());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 173)(8, "h2", 174);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 175);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 88);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 176)(15, "strong");
    \u0275\u0275text(16, "Dipl\xF4me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 176)(20, "strong");
    \u0275\u0275text(21, "Comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 89);
    \u0275\u0275template(23, EntrepreneurTalentComponent_div_71_span_23_Template, 3, 2, "span", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 108);
    \u0275\u0275listener("click", function EntrepreneurTalentComponent_div_71_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.contacterParEmail(ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.email));
    });
    \u0275\u0275text(25, " Contacter (Gmail) ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.prenom, " ", ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("kh-badge--green", ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.disponible)("kh-badge--gray", !(ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.disponible));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.disponible) ? "Disponible" : "Indisponible", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.diplome) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.competencesPourAffichage(ctx_r0.selectedCandidate));
  }
}
var EntrepreneurTalentComponent = class _EntrepreneurTalentComponent {
  constructor(talentService) {
    this.talentService = talentService;
    this.view = "talents";
    this.talents = [];
    this.annonces = [];
    this.matchingResults = [];
    this.matchingLoading = false;
    this.selectedCandidate = null;
    this.showProfileModal = false;
    this.selectedAnnonce = null;
    this.selectedAnnonceId = null;
    this.showForm = false;
    this.showEditForm = false;
    this.loading = false;
    this.successMsg = "";
    this.error = "";
    this.metiersCatalog = [
      { code: "FULLSTACK", label: "Full-stack / Platform" },
      { code: "BACKEND", label: "Backend / APIs" },
      { code: "FRONTEND", label: "Frontend / Design system" },
      { code: "DATA_ML", label: "Data / ML Engineer" },
      { code: "MLOPS", label: "MLOps / DataOps" },
      { code: "DEVOPS", label: "DevOps / SRE" },
      { code: "CLOUD", label: "Cloud / Architecte" },
      { code: "CYBER", label: "Cybers\xE9curit\xE9" },
      { code: "PRODUCT", label: "Product / PM" },
      { code: "UX_UI", label: "UX / UI" },
      { code: "GROWTH", label: "Growth / Marketing" },
      { code: "BIZDEV", label: "Business Developer" },
      { code: "FINANCE", label: "Finance / FP&A" },
      { code: "LEGAL", label: "Legal / Compliance" }
    ];
    this.newAnnonce = {
      poste: "",
      type: "stagiaire",
      competences: "",
      description: "",
      localisation: "Tunis",
      metiers: []
    };
    this.editData = {};
    this.searchTalent = "";
    this.searchAnnonce = "";
    this.sortMatching = "score";
    this.hiringAiLoading = false;
    this.hiringAiResult = null;
    this.hiringContext = "";
  }
  ngOnInit() {
    this.loadTalents();
    this.loadAnnonces();
  }
  loadTalents() {
    this.talentService.getTalents().subscribe({
      next: (data) => this.talents = data,
      error: (err) => console.error("Erreur talents:", err)
    });
  }
  loadAnnonces() {
    this.talentService.getAnnonces().subscribe({
      next: (data) => this.annonces = data,
      error: (err) => console.error("Erreur annonces:", err)
    });
  }
  toggleMetier(code) {
    const i = this.newAnnonce.metiers.indexOf(code);
    if (i >= 0) {
      this.newAnnonce.metiers.splice(i, 1);
    } else {
      this.newAnnonce.metiers.push(code);
    }
  }
  metierLabel(code) {
    return this.metiersCatalog.find((m) => m.code === code)?.label ?? code;
  }
  buildDescriptionPayload() {
    const desc = (this.newAnnonce.description || "").trim();
    const labels = this.newAnnonce.metiers.map((c) => this.metierLabel(c)).filter(Boolean);
    const met = labels.length ? `M\xE9tiers cibles: ${labels.join(", ")}` : "";
    return [desc, met].filter(Boolean).join("\n\n");
  }
  submitAnnonce() {
    if (!this.newAnnonce.poste)
      return;
    this.loading = true;
    const payload = {
      titre: this.newAnnonce.poste,
      description: this.buildDescriptionPayload(),
      typePoste: this.newAnnonce.type.toUpperCase(),
      competencesRequises: this.newAnnonce.competences,
      localisation: this.newAnnonce.localisation || "Tunis",
      startupId: 1,
      active: true
    };
    this.talentService.creerAnnonce(payload).subscribe({
      next: (_) => {
        this.loadAnnonces();
        this.showForm = false;
        this.loading = false;
        this.successMsg = "Annonce publi\xE9e avec succ\xE8s";
        this.newAnnonce = {
          poste: "",
          type: "stagiaire",
          competences: "",
          description: "",
          localisation: "Tunis",
          metiers: []
        };
        setTimeout(() => this.successMsg = "", 3e3);
      },
      error: (err) => {
        this.loading = false;
        this.error = "Erreur lors de la cr\xE9ation";
        console.error("Erreur cr\xE9ation:", err);
      }
    });
  }
  deleteAnnonce(id) {
    if (!confirm("Supprimer cette annonce ?"))
      return;
    this.talentService.deleteAnnonce(id).subscribe({
      next: (_) => {
        this.loadAnnonces();
        this.fermerModal();
        this.successMsg = "Annonce supprim\xE9e";
        setTimeout(() => this.successMsg = "", 3e3);
      },
      error: (err) => {
        this.error = "Erreur lors de la suppression";
        console.error(err);
      }
    });
  }
  ouvrirEdition(a) {
    this.editData = {
      id: a.id,
      titre: a.titre,
      typePoste: a.typePoste,
      competencesRequises: a.competencesRequises,
      localisation: a.localisation || "",
      description: a.description || ""
    };
    this.showEditForm = true;
    this.selectedAnnonce = null;
    this.selectedAnnonceId = null;
    this.matchingResults = [];
  }
  sauvegarderModification() {
    if (!this.editData.id)
      return;
    this.loading = true;
    const payload = {
      titre: this.editData.titre,
      typePoste: this.editData.typePoste,
      competencesRequises: this.editData.competencesRequises,
      localisation: this.editData.localisation,
      description: this.editData.description || "",
      active: true
    };
    this.talentService.updateAnnonce(this.editData.id, payload).subscribe({
      next: (_) => {
        this.loadAnnonces();
        this.showEditForm = false;
        this.loading = false;
        this.successMsg = "Annonce modifi\xE9e avec succ\xE8s";
        setTimeout(() => this.successMsg = "", 3e3);
      },
      error: (err) => {
        this.loading = false;
        this.error = "Erreur lors de la modification";
        console.error(err);
      }
    });
  }
  annulerEdition() {
    this.showEditForm = false;
    this.editData = {};
  }
  voirCandidatures(annonce) {
    this.selectedAnnonce = annonce;
    this.selectedAnnonceId = annonce.id;
    this.matchingResults = [];
    this.matchingLoading = true;
    this.talentService.getMatchingPourAnnonce(annonce.id).subscribe({
      next: (data) => {
        this.matchingResults = [...data].sort((a, b) => (b.matchingScore ?? 0) - (a.matchingScore ?? 0));
        this.matchingLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.matchingLoading = false;
      }
    });
  }
  fermerModal() {
    this.selectedAnnonce = null;
    this.selectedAnnonceId = null;
    this.matchingResults = [];
    this.matchingLoading = false;
  }
  get filteredTalents() {
    const q = this.searchTalent.trim().toLowerCase();
    if (!q)
      return this.talents;
    return this.talents.filter((t) => {
      const blob = `${t.prenom} ${t.nom} ${t.email} ${this.competencesPourAffichage(t).map((c) => c.nom).join(" ")}`.toLowerCase();
      return blob.includes(q);
    });
  }
  get filteredAnnonces() {
    const q = this.searchAnnonce.trim().toLowerCase();
    if (!q)
      return this.annonces;
    return this.annonces.filter((a) => {
      const blob = `${a.titre} ${a.competencesRequises} ${a.localisation || ""} ${a.typePoste || ""}`.toLowerCase();
      return blob.includes(q);
    });
  }
  get sortedMatching() {
    const rows = [...this.matchingResults];
    if (this.sortMatching === "nom") {
      rows.sort((a, b) => (a.nomTalent || "").localeCompare(b.nomTalent || "", "fr"));
    } else if (this.sortMatching === "niveau") {
      rows.sort((a, b) => (b.niveau || "").localeCompare(a.niveau || "", "fr"));
    } else {
      rows.sort((a, b) => (b.matchingScore ?? 0) - (a.matchingScore ?? 0));
    }
    return rows;
  }
  runHiringAi() {
    const titre = this.newAnnonce.poste.trim() || "Nouveau poste";
    const typePoste = this.newAnnonce.type.toUpperCase();
    const competencesRequises = this.newAnnonce.competences;
    const metiers = this.newAnnonce.metiers.map((c) => this.metierLabel(c));
    this.hiringAiLoading = true;
    this.hiringAiResult = null;
    this.talentService.getHiringAiAdvice({
      titre,
      typePoste,
      competencesRequises,
      metiers,
      localisation: this.newAnnonce.localisation,
      contexte: this.hiringContext.trim() || void 0
    }).subscribe({
      next: (res) => {
        this.hiringAiResult = res;
        this.hiringAiLoading = false;
      },
      error: () => {
        this.hiringAiLoading = false;
      }
    });
  }
  getScoreColor(score) {
    if (score >= 75)
      return "#1D9E75";
    if (score >= 50)
      return "#EF9F27";
    return "#E24B4A";
  }
  niveauTone(niveau) {
    const n = (niveau || "").toLowerCase();
    if (n.includes("excellent"))
      return "excellent";
    if (n.includes("bon"))
      return "bon";
    return "faible";
  }
  initialsFromNom(nomComplet) {
    if (!nomComplet?.trim())
      return "?";
    const parts = nomComplet.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1)
      return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  getCompetences(str) {
    if (!str)
      return [];
    return str.split(",").map((s) => s.trim()).filter(Boolean);
  }
  ouvrirProfil(source) {
    if ("talentId" in source) {
      const m = source;
      const full = this.talents.find((t) => t.id === m.talentId);
      if (full) {
        this.selectedCandidate = full;
      } else {
        const parts = (m.nomTalent || "").trim().split(/\s+/).filter(Boolean);
        const nom = parts.length <= 1 ? parts[0] || m.nomTalent || "" : parts[parts.length - 1];
        const prenom = parts.length <= 1 ? "" : parts.slice(0, -1).join(" ");
        const fromMatch = (m.competencesCommunes || []).map((n) => ({ nom: n, niveau: 0 }));
        this.selectedCandidate = {
          id: m.talentId,
          nom,
          prenom,
          email: m.emailTalent,
          competences: fromMatch,
          diplome: "",
          disponible: true
        };
      }
    } else {
      this.selectedCandidate = source;
    }
    if (!this.selectedCandidate)
      return;
    this.showProfileModal = true;
  }
  competencesPourAffichage(c) {
    if (!c?.competences)
      return [];
    if (Array.isArray(c.competences))
      return c.competences;
    return String(c.competences).split(",").map((s) => s.trim()).filter(Boolean).map((nom) => ({ nom, niveau: 0 }));
  }
  fermerProfil() {
    this.selectedCandidate = null;
    this.showProfileModal = false;
  }
  contacterParEmail(email) {
    const subject = encodeURIComponent("Opportunity from Startup");
    const body = encodeURIComponent("Hello, I saw your profile and would like to connect with you.");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
  }
  static {
    this.\u0275fac = function EntrepreneurTalentComponent_Factory(t) {
      return new (t || _EntrepreneurTalentComponent)(\u0275\u0275directiveInject(TalentService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntrepreneurTalentComponent, selectors: [["app-entrepreneur-talent"]], decls: 72, vars: 22, consts: [[1, "page", "animate-1", "tm-page"], ["class", "kh-alert kh-alert--success", 4, "ngIf"], ["class", "kh-alert kh-alert--danger", 4, "ngIf"], [1, "tm-hero"], [1, "tm-hero__grid"], [1, "tm-hero__copy"], [1, "tm-eyebrow"], [1, "kh-page-title", "tm-hero__title"], [1, "page-sub", "tm-hero__sub"], [1, "tm-hero__chips"], [1, "tm-chip"], [1, "tm-chip", "tm-chip--outline"], [1, "tm-hero__panel"], [1, "tm-hero__panel-title"], ["type", "button", 1, "kh-btn", "kh-btn--primary", "tm-hero__btn", 3, "click"], ["type", "button", 1, "kh-btn", "kh-btn--ghost", "tm-hero__btn", 3, "click"], [1, "tm-layout"], [1, "tm-main"], ["class", "form-panel animate-2 tm-form", 4, "ngIf"], ["class", "form-panel animate-2 tm-form tm-form--edit", 4, "ngIf"], [1, "tm-tabs-row"], [1, "tabs", "tm-tabs"], ["type", "button", 1, "tab", 3, "click"], [1, "tab-count"], ["class", "tm-toolbar", 4, "ngIf"], ["class", "tm-card-grid animate-3", 4, "ngIf"], [1, "tm-aside"], [1, "tm-ai-card"], [1, "tm-ai-card__head"], [1, "tm-ai-icon"], [1, "tm-ai-intro"], [1, "tm-ai-label"], ["rows", "3", "placeholder", "Secteur, stade, \xE9quipe actuelle, contraintes budget\u2026", 1, "kh-input", "tm-textarea", "tm-ai-context", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "kh-btn", "kh-btn--primary", "w-full", 3, "click", "disabled"], ["class", "tm-ai-output", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "kh-alert", "kh-alert--success"], [1, "kh-alert", "kh-alert--danger"], ["type", "button", "aria-label", "Fermer", 1, "tm-alert-dismiss", 3, "click"], [1, "form-panel", "animate-2", "tm-form"], [1, "form-panel__header"], [1, "tm-form-lead"], ["type", "button", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "form-row"], [1, "form-group"], ["for", "poste"], ["id", "poste", "type", "text", "placeholder", "ex. Lead Full-stack, Data Engineer\u2026", 1, "kh-input", 3, "ngModelChange", "ngModel"], ["for", "type"], ["id", "type", 1, "kh-input", 3, "ngModelChange", "ngModel"], ["value", "cofondateur"], ["value", "stagiaire"], ["value", "emploi"], ["for", "loc"], ["id", "loc", "type", "text", "placeholder", "Tunis, Hybride, Remote\u2026", 1, "kh-input", 3, "ngModelChange", "ngModel"], ["for", "skills"], [1, "form-hint"], ["id", "skills", "type", "text", "placeholder", "Spring Boot, Angular, PostgreSQL\u2026", 1, "kh-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "tm-metiers-block"], [1, "form-hint", "tm-metiers-hint"], [1, "tm-metier-chips"], ["type", "button", "class", "tm-metier-chip", 3, "tm-metier-chip--on", "click", 4, "ngFor", "ngForOf"], ["for", "desc"], ["id", "desc", "rows", "4", "placeholder", "Missions, stack, niveau attendu, avantages\u2026", 1, "kh-input", "tm-textarea", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "kh-btn", "kh-btn--primary", 3, "click", "disabled"], ["type", "button", 1, "tm-metier-chip", 3, "click"], [1, "form-panel", "animate-2", "tm-form", "tm-form--edit"], ["type", "text", 1, "kh-input", 3, "ngModelChange", "ngModel"], ["for", "edit-type"], ["id", "edit-type", "name", "typePoste", "aria-label", "Type de poste", 1, "kh-input", 3, "ngModelChange", "ngModel"], ["value", "COFONDATEUR"], ["value", "STAGIAIRE"], ["value", "EMPLOI"], ["rows", "3", 1, "kh-input", "tm-textarea", 3, "ngModelChange", "ngModel"], [1, "tm-form-actions"], ["type", "button", 1, "kh-btn", "kh-btn--ghost", 3, "click"], [1, "tm-toolbar"], ["type", "search", "placeholder", "Rechercher un talent, email, comp\xE9tence\u2026", 1, "tm-search", 3, "ngModelChange", "ngModel"], ["type", "search", "placeholder", "Filtrer les offres\u2026", 1, "tm-search", 3, "ngModelChange", "ngModel"], [1, "tm-card-grid", "animate-3"], ["class", "card tm-talent-card", 4, "ngFor", "ngForOf"], ["class", "tm-empty", 4, "ngIf"], [1, "card", "tm-talent-card"], [1, "talent-header"], [1, "talent-avatar"], [1, "talent-header__body"], [1, "card-name"], [1, "card-meta"], ["type", "button", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "tm-profile-btn", 3, "click"], [1, "kh-badge"], [1, "skills"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"], [4, "ngIf"], [1, "tm-empty"], ["class", "card tm-listing-card", 3, "tm-listing-card--highlight", 4, "ngFor", "ngForOf"], ["class", "empty-state tm-empty-wide", 4, "ngIf"], [1, "card", "tm-listing-card"], [1, "listing-card__head"], [1, "action-icons"], ["type", "button", "title", "Modifier", 1, "icon", "edit", 3, "click"], ["type", "button", "title", "Supprimer", 1, "icon", "delete", 3, "click"], [1, "card-meta", "tm-listing-startup"], [1, "skills", "tm-listing-skills"], ["class", "tm-listing-loc", 4, "ngIf"], [1, "listing-card__footer"], ["type", "button", 1, "kh-btn", "kh-btn--primary", "kh-btn--sm", "w-full", 3, "click"], [1, "tm-listing-loc"], [1, "empty-state", "tm-empty-wide"], ["type", "button", 1, "kh-btn", "kh-btn--primary", 3, "click"], [1, "tm-ai-output"], [4, "ngFor", "ngForOf"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-matching", 3, "click"], [1, "modal-header"], [1, "modal-header__actions"], ["type", "button", 1, "close-btn", 3, "click"], [1, "annonce-details-panel"], [1, "annonce-meta-row"], ["class", "tm-meta-chip", 4, "ngIf"], ["class", "annonce-desc", 4, "ngIf"], ["class", "tm-modal-skills", 4, "ngIf"], [1, "tm-modal-divider"], [1, "matching-list"], [1, "matching-list__head"], [1, "matching-list__title"], [1, "matching-toolbar"], ["class", "matching-count", 4, "ngIf"], [1, "tm-sort-label"], [1, "tm-sort-select", 3, "ngModelChange", "ngModel"], ["value", "score"], ["value", "nom"], ["value", "niveau"], ["class", "modal-loading modal-loading--pulse", 4, "ngIf"], ["class", "modal-empty", 4, "ngIf"], ["class", "match-card match-card--modern", 4, "ngFor", "ngForOf"], [1, "tm-meta-chip"], [1, "annonce-desc"], [1, "tm-modal-skills"], [1, "tm-section-label"], [1, "matching-count"], [1, "modal-loading", "modal-loading--pulse"], [1, "modal-empty"], [1, "modal-empty__title"], [1, "modal-empty__hint"], [1, "match-card", "match-card--modern"], [1, "match-card__top"], [1, "match-identity"], [1, "match-avatar", "match-avatar--lg"], [1, "match-info"], [1, "match-name-row"], [1, "match-name"], [1, "niveau-pill"], [1, "email"], [1, "match-score-block"], [1, "score-donut"], [1, "score-donut__inner"], [1, "score-donut__value"], [1, "score-donut__unit"], [1, "match-rank"], [1, "score-bar-wrap", "score-bar-wrap--tight"], [1, "score-bar-fill"], ["class", "match-skills-grid", 4, "ngIf"], [1, "match-card__actions"], [1, "match-skills-grid"], ["class", "match-skills-col", 4, "ngIf"], [1, "match-skills-col"], [1, "match-skills-label", "match-skills-label--ok"], ["class", "skill-tag skill-tag--match", 4, "ngFor", "ngForOf"], [1, "skill-tag", "skill-tag--match"], [1, "match-skills-label", "match-skills-label--miss"], ["class", "skill-tag skill-tag--gap", 4, "ngFor", "ngForOf"], [1, "skill-tag", "skill-tag--gap"], [1, "modal", "tm-profile-modal", 3, "click"], [1, "tm-profile-body"], [1, "tm-profile-name"], [1, "tm-profile-email"], [1, "tm-profile-block"]], template: function EntrepreneurTalentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, EntrepreneurTalentComponent_div_1_Template, 2, 1, "div", 1)(2, EntrepreneurTalentComponent_div_2_Template, 4, 1, "div", 2);
        \u0275\u0275elementStart(3, "header", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6);
        \u0275\u0275text(7, "Talent marketplace \xB7 Spring-ready");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h1", 7);
        \u0275\u0275text(9, "Recrutement intelligent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, " Publiez des offres riches, ciblez des m\xE9tiers avanc\xE9s, exploitez le matching et l\u2019assistant IA recrutement. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "span", 10)(14, "strong");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " talents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 10)(18, "strong");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " annonces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 11);
        \u0275\u0275text(22, "IA \xB7 ");
        \u0275\u0275elementStart(23, "code");
        \u0275\u0275text(24, "/api/ai/hiring-advice");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "div", 12)(26, "p", 13);
        \u0275\u0275text(27, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 14);
        \u0275\u0275listener("click", function EntrepreneurTalentComponent_Template_button_click_28_listener() {
          ctx.showForm = true;
          ctx.showEditForm = false;
          return ctx.view = "annonces";
        });
        \u0275\u0275text(29, " + Nouvelle offre ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 15);
        \u0275\u0275listener("click", function EntrepreneurTalentComponent_Template_button_click_30_listener() {
          return ctx.view = "talents";
        });
        \u0275\u0275text(31, " Explorer les talents ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 16)(33, "div", 17);
        \u0275\u0275template(34, EntrepreneurTalentComponent_section_34_Template, 48, 8, "section", 18)(35, EntrepreneurTalentComponent_section_35_Template, 41, 8, "section", 19);
        \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "button", 22);
        \u0275\u0275listener("click", function EntrepreneurTalentComponent_Template_button_click_38_listener() {
          return ctx.view = "talents";
        });
        \u0275\u0275text(39, " Talents ");
        \u0275\u0275elementStart(40, "span", 23);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "button", 22);
        \u0275\u0275listener("click", function EntrepreneurTalentComponent_Template_button_click_42_listener() {
          return ctx.view = "annonces";
        });
        \u0275\u0275text(43, " Offres ");
        \u0275\u0275elementStart(44, "span", 23);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(46, EntrepreneurTalentComponent_div_46_Template, 2, 1, "div", 24)(47, EntrepreneurTalentComponent_div_47_Template, 2, 1, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, EntrepreneurTalentComponent_div_48_Template, 3, 2, "div", 25)(49, EntrepreneurTalentComponent_div_49_Template, 3, 2, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "aside", 26)(51, "div", 27)(52, "div", 28)(53, "span", 29);
        \u0275\u0275text(54, "\u2728");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div")(56, "h3");
        \u0275\u0275text(57, "Assistant IA recrutement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "Endpoint Spring AI conseill\xE9 : ");
        \u0275\u0275elementStart(60, "code");
        \u0275\u0275text(61, "POST /api/ai/hiring-advice");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "p", 30);
        \u0275\u0275text(63, " Renseignez le formulaire \xAB Nouvelle annonce \xBB puis g\xE9n\xE9rez une fiche de poste, des questions d\u2019entretien et une checklist d\u2019onboarding. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "label", 31);
        \u0275\u0275text(65, "Contexte startup (optionnel)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "textarea", 32);
        \u0275\u0275twoWayListener("ngModelChange", function EntrepreneurTalentComponent_Template_textarea_ngModelChange_66_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.hiringContext, $event) || (ctx.hiringContext = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 33);
        \u0275\u0275listener("click", function EntrepreneurTalentComponent_Template_button_click_67_listener() {
          return ctx.runHiringAi();
        });
        \u0275\u0275text(68);
        \u0275\u0275elementEnd();
        \u0275\u0275template(69, EntrepreneurTalentComponent_div_69_Template, 21, 5, "div", 34);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(70, EntrepreneurTalentComponent_div_70_Template, 39, 17, "div", 35)(71, EntrepreneurTalentComponent_div_71_Template, 26, 10, "div", 35);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMsg);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.talents.length);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.annonces.length);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditForm);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.view === "talents");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.filteredTalents.length);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.view === "annonces");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.filteredAnnonces.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "talents");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "annonces");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "talents");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "annonces");
        \u0275\u0275advance(17);
        \u0275\u0275twoWayProperty("ngModel", ctx.hiringContext);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.hiringAiLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.hiringAiLoading ? "G\xE9n\xE9ration IA\u2026" : "G\xE9n\xE9rer avec l\u2019IA", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hiringAiResult);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedAnnonce);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showProfileModal);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --teal: #1D9E75;\n  --teal-dark: #0F6E56;\n  --teal-light: #E1F5EE;\n  --teal-mid: #5DCAA5;\n  --amber-bg: #FAEEDA;\n  --amber-text: #854F0B;\n  --blue-bg: #E6F1FB;\n  --blue-text: #185FA5;\n  --danger-bg: #FCEBEB;\n  --danger-text: #A32D2D;\n  --danger-border: #F7C1C1;\n  --text-main: #1a1a2e;\n  --text-secondary:#64748b;\n  --text-muted: #94a3b8;\n  --bg-page: #f8fafc;\n  --bg-card: #ffffff;\n  --bg-surface: #f1f5f9;\n  --border: rgba(0,0,0,0.08);\n  --border-focus: rgba(29,158,117,0.4);\n  --radius-lg: 16px;\n  --radius-md: 10px;\n  --radius-sm: 8px;\n  --shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);\n  --shadow-hover: 0 6px 20px rgba(0,0,0,0.10);\n  --shadow-modal: 0 24px 64px rgba(0,0,0,0.18);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.page.tm-page[_ngcontent-%COMP%] {\n  padding: 28px 24px 48px;\n  max-width: 1080px;\n  margin: 0 auto;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    system-ui,\n    sans-serif;\n  color: var(--text-main);\n  background:\n    radial-gradient(\n      1200px 500px at 80% -10%,\n      rgba(29, 158, 117, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 400px at 0% 20%,\n      rgba(24, 95, 165, 0.06),\n      transparent 50%),\n    var(--bg-page);\n  min-height: 100vh;\n}\n.tm-alert-dismiss[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  font-size: 16px;\n  opacity: 0.75;\n}\n.tm-alert-dismiss[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.tm-hero[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f0fdf9 45%,\n      #f8fafc 100%);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  position: relative;\n}\n.tm-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      120deg,\n      transparent 40%,\n      rgba(29, 158, 117, 0.04) 100%);\n  pointer-events: none;\n}\n.tm-hero__grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr minmax(220px, 280px);\n  gap: 24px;\n  padding: 24px 26px;\n  align-items: start;\n}\n@media (max-width: 720px) {\n  .tm-hero__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.tm-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--teal);\n  margin: 0 0 8px;\n}\n.tm-hero__title[_ngcontent-%COMP%] {\n  margin-bottom: 6px !important;\n}\n.tm-hero__sub[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.tm-hero__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 16px;\n}\n.tm-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 13px;\n  color: var(--text-secondary);\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid var(--border);\n}\n.tm-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-main);\n  font-weight: 700;\n}\n.tm-hero__panel[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: var(--radius-md);\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(29, 158, 117, 0.18);\n  box-shadow: var(--shadow-card);\n}\n.tm-hero__panel-title[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-secondary);\n}\n.tm-hero__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.tm-hero__btn[_ngcontent-%COMP%]    + .tm-hero__btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.tm-form--edit[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--teal);\n}\n.tm-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.listing-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.listing-card__footer[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.kh-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n.kh-alert--success[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n  color: var(--teal-dark);\n  border: 1px solid var(--teal-mid);\n}\n.kh-alert--danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger-text);\n  border: 1px solid var(--danger-border);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.kh-page-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  margin-bottom: 4px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.kh-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: var(--radius-md);\n  font-size: 14px;\n  font-weight: 500;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  color: var(--text-main);\n  transition: all 0.18s ease;\n  white-space: nowrap;\n}\n.kh-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface);\n}\n.kh-btn--primary[_ngcontent-%COMP%] {\n  background: var(--teal);\n  color: #fff;\n  border-color: var(--teal);\n}\n.kh-btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--teal-dark);\n  border-color: var(--teal-dark);\n}\n.kh-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n.kh-btn--ghost[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-color: transparent;\n}\n.kh-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: var(--text-main);\n}\n.kh-btn--sm[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 13px;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-card);\n}\n.form-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.form-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.kh-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 13px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    system-ui,\n    sans-serif;\n  background: var(--bg-card);\n  color: var(--text-main);\n  outline: none;\n  transition: border-color .15s, box-shadow .15s;\n}\n.kh-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px rgba(29, 158, 117, .12);\n}\n.kh-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 24px;\n  background: var(--bg-surface);\n  padding: 4px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  width: fit-content;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 22px;\n  border-radius: 7px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary);\n  transition: all .15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  color: var(--teal);\n  border: 1px solid var(--border);\n}\n.tab[_ngcontent-%COMP%]:not(.active):hover {\n  color: var(--text-main);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  box-shadow: var(--shadow-card);\n  transition:\n    border-color .18s,\n    box-shadow .18s,\n    transform .18s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-focus);\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.tm-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n  border-color: rgba(15, 23, 42, 0.07);\n}\n.talent-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.talent-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n.talent-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--teal-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--teal-dark);\n  flex-shrink: 0;\n}\n.talent-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.exp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  background: var(--blue-bg);\n  color: var(--blue-text);\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  width: fit-content;\n  margin-bottom: 4px;\n}\n.talent-bio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 10px;\n  line-height: 1.6;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: auto;\n  padding-top: 14px;\n  border-top: 1px solid var(--border);\n  margin-top: 14px;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.location-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 8px;\n}\n.skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.skill-tag.success[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n  color: var(--teal-dark);\n}\n.skill-tag.danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger-text);\n}\n.kh-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.kh-badge--green[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n  color: var(--teal-dark);\n}\n.kh-badge--teal[_ngcontent-%COMP%] {\n  background: #e0f7fa;\n  color: #00695c;\n}\n.kh-badge--orange[_ngcontent-%COMP%] {\n  background: var(--amber-bg);\n  color: var(--amber-text);\n}\n.kh-badge--gray[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n}\n.action-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: 13px;\n  transition: all .15s;\n  font-family: inherit;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface);\n  color: var(--text-main);\n}\n.icon.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger-text);\n  border-color: var(--danger-border);\n}\n.icon.edit[_ngcontent-%COMP%]:hover {\n  background: var(--blue-bg);\n  color: var(--blue-text);\n  border-color: #B5D4F4;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 20px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  grid-column: 1/-1;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 12px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 560px;\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-modal);\n  animation: _ngcontent-%COMP%_modalIn .25s cubic-bezier(.34, 1.56, .64, 1);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-matching[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    transform: scale(.95) translateY(10px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n  position: sticky;\n  top: 0;\n  background: var(--bg-card);\n  z-index: 2;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid var(--border);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  font-size: 16px;\n  transition: all .15s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface);\n}\n.modal-loading[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.profile-modal[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.profile-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 22px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.avatar-xl[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--teal-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--teal-dark);\n  flex-shrink: 0;\n}\n.profile-hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.profile-level[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n.profile-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--teal);\n  margin-top: 2px;\n}\n.profile-body[_ngcontent-%COMP%] {\n  padding: 20px 22px 26px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-card);\n}\n.info-item[_ngcontent-%COMP%]:nth-child(odd) {\n  border-right: 1px solid var(--border);\n}\n.info-item[_ngcontent-%COMP%]:last-child, .info-item[_ngcontent-%COMP%]:nth-last-child(2):nth-child(odd) {\n  border-bottom: none;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-main);\n}\n.info-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--teal);\n  text-decoration: none;\n}\n.info-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.profile-section[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  margin-bottom: 8px;\n}\n.bio-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.65;\n  padding: 14px;\n  background: var(--bg-surface);\n  border-radius: var(--radius-sm);\n}\n.profile-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid var(--border);\n}\n.annonce-details-panel[_ngcontent-%COMP%] {\n  padding: 16px 22px 18px;\n  background: var(--bg-surface);\n}\n.annonce-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.divider-line[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid var(--border);\n  margin: 0 22px;\n}\n.matching-list[_ngcontent-%COMP%] {\n  padding: 16px 22px 22px;\n}\n.match-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  margin-bottom: 12px;\n  transition: border-color .15s;\n}\n.match-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-focus);\n}\n.match-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n.match-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--teal-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--teal-dark);\n  flex-shrink: 0;\n}\n.match-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.match-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.match-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.score-pill[_ngcontent-%COMP%] {\n  padding: 5px 13px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.micro-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.score-bar-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.score-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width .6s ease;\n}\n.animate-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp .3s ease both;\n}\n.animate-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp .3s .05s ease both;\n}\n.animate-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp .3s .10s ease both;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 600px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .kh-page-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info-item[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: none;\n  }\n  .profile-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .profile-hero[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.match-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.score-bar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.annonce-desc[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  line-height: 1.55;\n  color: var(--text-secondary);\n}\n.matching-list__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.matching-list__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.35px;\n  margin: 0;\n}\n.matching-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--teal);\n  background: var(--teal-light);\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.modal-loading--pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulseText 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseText {\n  0%, 100% {\n    opacity: 0.55;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.modal-empty[_ngcontent-%COMP%] {\n  padding: 28px 16px;\n  text-align: center;\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n  background: var(--bg-card);\n  margin-bottom: 8px;\n}\n.modal-empty__title[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-main);\n}\n.modal-empty__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.match-card--modern[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-card) 0%,\n      var(--bg-surface) 100%);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-card);\n  overflow: hidden;\n}\n.match-card--modern[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--teal-mid),\n      var(--teal));\n  border-radius: 3px 0 0 3px;\n  opacity: 0.85;\n}\n.match-card--modern[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 19px;\n}\n.match-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.match-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n}\n.match-avatar--lg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 15px;\n  letter-spacing: -0.02em;\n}\n.match-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 2px;\n}\n.match-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-main);\n  line-height: 1.3;\n}\n.niveau-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 3px 9px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n}\n.niveau-pill--excellent[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n  color: var(--teal-dark);\n  border-color: rgba(29, 158, 117, 0.25);\n}\n.niveau-pill--bon[_ngcontent-%COMP%] {\n  background: var(--amber-bg);\n  color: var(--amber-text);\n  border-color: rgba(239, 159, 39, 0.35);\n}\n.niveau-pill--faible[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger-text);\n  border-color: var(--danger-border);\n}\n.match-score-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.score-donut[_ngcontent-%COMP%] {\n  --accent: var(--teal);\n  --pct: 0%;\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  background: conic-gradient(var(--accent) var(--pct), #e2e8f0 0);\n  display: grid;\n  place-items: center;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);\n}\n.score-donut__inner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--bg-card);\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: center;\n  gap: 1px;\n  padding-top: 2px;\n}\n.score-donut__value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-main);\n  line-height: 1;\n}\n.score-donut__unit[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  line-height: 1;\n}\n.match-rank[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.score-bar-wrap--tight[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.match-skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 16px;\n  margin-bottom: 12px;\n}\n@media (max-width: 520px) {\n  .match-skills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.match-skills-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.35px;\n  margin-bottom: 6px;\n}\n.match-skills-label--ok[_ngcontent-%COMP%] {\n  color: var(--teal-dark);\n}\n.match-skills-label--miss[_ngcontent-%COMP%] {\n  color: var(--danger-text);\n}\n.skill-tag--match[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n  color: var(--teal-dark);\n  border: 1px solid rgba(29, 158, 117, 0.2);\n}\n.skill-tag--gap[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger-text);\n  border: 1px solid var(--danger-border);\n}\n.match-card__actions[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  border-top: 1px solid var(--border);\n  margin-top: 2px;\n}\n.tm-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 1024px) {\n  .tm-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tm-aside[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n.tm-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.tm-chip--outline[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  color: var(--text-secondary) !important;\n}\n.tm-chip--outline[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  background: var(--bg-surface);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.tm-form-lead[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.45;\n}\n.tm-textarea[_ngcontent-%COMP%] {\n  min-height: 88px;\n  resize: vertical;\n}\n.tm-metiers-block[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.tm-metiers-hint[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.tm-metier-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tm-metier-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.tm-metier-chip[_ngcontent-%COMP%]:hover {\n  border-color: rgba(29, 158, 117, 0.35);\n  color: var(--teal-dark);\n}\n.tm-metier-chip--on[_ngcontent-%COMP%] {\n  background: var(--teal-light);\n  border-color: rgba(29, 158, 117, 0.45);\n  color: var(--teal-dark);\n}\n.tm-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 16px;\n}\n.tm-tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.tm-toolbar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  max-width: 420px;\n}\n.tm-search[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n  font-size: 14px;\n  font-family: inherit;\n  background: var(--bg-card);\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.tm-search[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--teal);\n  box-shadow: 0 0 0 3px rgba(29, 158, 117, 0.12);\n}\n.tab-count[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-weight: 600;\n}\n.tm-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.tm-talent-card[_ngcontent-%COMP%]   .talent-header__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.tm-profile-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.tm-listing-startup[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n.tm-listing-skills[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.tm-listing-loc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 8px 0 0;\n}\n.tm-listing-card--highlight[_ngcontent-%COMP%] {\n  outline: 2px solid var(--teal);\n  outline-offset: 2px;\n}\n.tm-empty[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 28px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.tm-empty-wide[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 28px;\n}\n.tm-aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 88px;\n}\n.tm-ai-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(29, 158, 117, 0.2);\n  background:\n    linear-gradient(\n      165deg,\n      #ffffff 0%,\n      #f0fdf9 55%,\n      #f8fafc 100%);\n  padding: 20px;\n  box-shadow: var(--shadow-card);\n}\n.tm-ai-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.tm-ai-card__head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.tm-ai-card__head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.tm-ai-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1;\n}\n.tm-ai-intro[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.55;\n  margin: 0 0 12px;\n}\n.tm-ai-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.tm-ai-context[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.tm-ai-output[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.55;\n}\n.tm-ai-output[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 14px 0 6px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--teal-dark);\n}\n.tm-ai-output[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.tm-ai-output[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 0 18px;\n  padding: 0;\n}\n.tm-ai-output[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.modal-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.tm-meta-chip[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.tm-modal-divider[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  margin: 0 22px;\n}\n.tm-modal-skills[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.tm-section-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  margin-bottom: 7px;\n}\n.matching-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.tm-sort-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.tm-sort-select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  font-size: 12px;\n  font-family: inherit;\n  background: var(--bg-card);\n}\n.tm-profile-modal[_ngcontent-%COMP%]   .tm-profile-body[_ngcontent-%COMP%] {\n  padding: 22px 24px 28px;\n}\n.tm-profile-name[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.tm-profile-email[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.tm-profile-block[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.tm-profile-block[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.tm-profile-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-main);\n}\n/*# sourceMappingURL=talent.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntrepreneurTalentComponent, { className: "EntrepreneurTalentComponent", filePath: "app\\features\\entrepreneur\\talent\\talent.component.ts", lineNumber: 16 });
})();

// src/app/features/entrepreneur/entrepreneur.module.ts
var routes = [
  {
    path: "",
    component: LayoutEntrepreneurComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: EntrepreneurDashboardComponent },
      { path: "projets", component: EntrepreneurProjetsComponent },
      { path: "workflows", component: EntrepreneurWorkflowsComponent },
      { path: "planning", component: EntrepreneurPlanningComponent },
      { path: "messages", component: EntrepreneurMessagesComponent },
      { path: "bibliotheque", component: EntrepreneurBibliothequeComponent },
      { path: "talent", component: EntrepreneurTalentComponent },
      { path: "progressions", component: EntrepreneurProgresssComponent }
    ]
  }
];
var EntrepreneurModule = class _EntrepreneurModule {
  static {
    this.\u0275fac = function EntrepreneurModule_Factory(t) {
      return new (t || _EntrepreneurModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EntrepreneurModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      LayoutEntrepreneurModule,
      RouterModule.forChild(routes)
    ] });
  }
};
export {
  EntrepreneurModule
};
//# sourceMappingURL=chunk-ZNK6DJWF.js.map
