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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
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
  UpperCasePipe,
  __spreadProps,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FQARK65W.js";

// src/app/layout/layout.component.ts
function LayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function LayoutComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275listener("click", function LayoutComponent_a_17_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen = false);
    });
    \u0275\u0275element(1, "span", 52);
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("nav-item--active", ctx_r1.isActive(item_r4));
    \u0275\u0275property("routerLink", ctx_r1.getRoute(item_r4));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.getIcon(item_r4.icon), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function LayoutComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nonLus);
  }
}
function LayoutComponent_div_53_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function LayoutComponent_div_53_div_6_Template_div_click_0_listener() {
      const n_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.notifService.markRead(n_r7.id));
    });
    \u0275\u0275element(1, "div", 60);
    \u0275\u0275elementStart(2, "div")(3, "p", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r7.lu);
    \u0275\u0275advance();
    \u0275\u0275classMap("dot-" + n_r7.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r7.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r7.message);
  }
}
function LayoutComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 57);
    \u0275\u0275listener("click", function LayoutComponent_div_53_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.notifService.markAllRead();
      return \u0275\u0275resetView(ctx_r1.notifOpen = false);
    });
    \u0275\u0275text(5, "Mark all read");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LayoutComponent_div_53_div_6_Template, 7, 6, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.notifs);
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth, notifService, router) {
    this.auth = auth;
    this.notifService = notifService;
    this.router = router;
    this.sidebarOpen = false;
    this.notifOpen = false;
    this.currentUrl = "";
    this.navItems = [
      { label: "Dashboard", icon: "dashboard", route: "dashboard", roles: ["admin", "entrepreneur", "coach"] },
      { label: "Projects", icon: "folder", route: "projets", roles: ["admin", "entrepreneur", "coach"] },
      { label: "Workflows", icon: "workflow", route: "workflows", roles: ["entrepreneur"] },
      { label: "Planning", icon: "calendar", route: "planning", roles: ["admin", "entrepreneur", "coach"] },
      { label: "Messages", icon: "message", route: "messages", roles: ["admin", "entrepreneur", "coach"] },
      { label: "Library", icon: "book", route: "bibliotheque", roles: ["admin", "entrepreneur", "coach"] },
      { label: "My Progress", icon: "progress", route: "progressions", roles: ["entrepreneur", "coach"] },
      { label: "My Startups", icon: "rocket", route: "startups", roles: ["coach"] },
      { label: "Validations", icon: "check", route: "validations", roles: ["coach"] },
      { label: "Events", icon: "event", route: "evenements", roles: ["admin"] },
      { label: "Talent Market", icon: "people", route: "talent", roles: ["admin", "entrepreneur", "coach"] },
      { label: "Subscriptions", icon: "card", route: "abonnements", roles: ["admin"] },
      { label: "Users", icon: "users", route: "utilisateurs", roles: ["admin"] }
    ];
    this.svgIcons = {
      dashboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
      folder: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
      workflow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
      calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      message: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      rocket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
      event: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      people: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      card: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
      progress: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
      users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    };
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.currentUrl = e.url;
    });
    this.currentUrl = this.router.url;
  }
  get visibleNav() {
    const role = this.auth.currentUser?.role;
    return this.navItems.filter((item) => role && item.roles.includes(role));
  }
  get roleLabel() {
    const r = this.auth.currentUser?.role;
    return r === "admin" ? "Administrator" : r === "entrepreneur" ? "Entrepreneur" : r === "coach" ? "Coach" : "";
  }
  get roleColor() {
    const r = this.auth.currentUser?.role;
    return r === "admin" ? "#E8622A" : r === "entrepreneur" ? "#2ABFBF" : "#7C5CBF";
  }
  get rolePrefix() {
    const r = this.auth.currentUser?.role;
    return r === "admin" ? "/khotwaadmin" : r === "entrepreneur" ? "/entrepreneur" : "/coach";
  }
  getRoute(item) {
    return `${this.rolePrefix}/${item.route}`;
  }
  getIcon(name) {
    return this.svgIcons[name] || "";
  }
  isActive(item) {
    return this.currentUrl.includes(`/${item.route}`);
  }
  switchRole(role) {
    this.auth.login(role);
    this.router.navigateByUrl(this.auth.getDefaultRoute());
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
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 63, vars: 32, consts: [[1, "app-shell"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar__brand"], ["src", "assets/khotwa-logo.png", "alt", "KHOTWA", 2, "height", "36px", "width", "auto", "object-fit", "contain"], [1, "brand-text"], [1, "brand-role"], [1, "account-badge"], [1, "account-badge__avatar"], [1, "account-badge__info"], [1, "account-badge__name"], [1, "account-badge__role"], [1, "sidebar__nav"], ["class", "nav-item", 3, "nav-item--active", "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "sidebar__footer"], [1, "user-tile"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-email"], ["title", "Sign out", 1, "logout-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-area"], [1, "topbar"], [1, "topbar__menu", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar__search"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026"], [1, "topbar__actions"], [1, "notif-wrapper"], [1, "topbar__icon-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], ["class", "notif-badge", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Home", 1, "topbar__icon-btn"], ["d", "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "topbar__avatar"], [1, "content"], [1, "overlay", 3, "click"], [1, "nav-item", 3, "click", "routerLink"], [1, "nav-item__icon", 3, "innerHTML"], [1, "nav-item__label"], [1, "notif-badge"], [1, "notif-panel"], [1, "notif-panel__header"], [3, "click"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-item__dot"], [1, "notif-item__titre"], [1, "notif-item__msg"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, LayoutComponent_div_1_Template, 1, 0, "div", 1);
        \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "span", 10);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 11);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "nav", 12);
        \u0275\u0275template(17, LayoutComponent_a_17_Template, 4, 5, "a", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "div", 16);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 17)(23, "p", 18);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 19);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 20);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_27_listener() {
          return ctx.logout();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 21);
        \u0275\u0275element(29, "path", 22)(30, "polyline", 23)(31, "line", 24);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "div", 25)(33, "header", 26)(34, "button", 27);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_34_listener() {
          return ctx.sidebarOpen = !ctx.sidebarOpen;
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 28);
        \u0275\u0275element(36, "line", 29)(37, "line", 30)(38, "line", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(39, "div", 32);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 33);
        \u0275\u0275element(41, "circle", 34)(42, "path", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(43, "input", 36);
        \u0275\u0275elementStart(44, "kbd");
        \u0275\u0275text(45, "\u2318K");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 37)(47, "div", 38)(48, "button", 39);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_48_listener() {
          return ctx.notifOpen = !ctx.notifOpen;
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(49, "svg", 40);
        \u0275\u0275element(50, "path", 41)(51, "path", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275template(52, LayoutComponent_span_52_Template, 2, 1, "span", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275template(53, LayoutComponent_div_53_Template, 7, 1, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "a", 45);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 40);
        \u0275\u0275element(56, "path", 46)(57, "polyline", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(58, "div", 48);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "main", 49);
        \u0275\u0275element(61, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "app-footer");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sidebarOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.sidebarOpen);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("color", ctx.roleColor);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.roleLabel);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx.roleColor + ",#333)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom == null ? null : ctx.auth.currentUser.prenom[0], "", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.nom == null ? null : ctx.auth.currentUser.nom[0], " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom, " ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.nom, "");
        \u0275\u0275advance();
        \u0275\u0275styleProp("color", ctx.roleColor);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.roleLabel);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.visibleNav);
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx.roleColor + ", #333)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom == null ? null : ctx.auth.currentUser.prenom[0], "", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.nom == null ? null : ctx.auth.currentUser.nom[0], " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom, " ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.nom, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.email);
        \u0275\u0275advance(22);
        \u0275\u0275classProp("active", ctx.notifOpen);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.nonLus > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notifOpen);
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx.roleColor + ", #333)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.prenom == null ? null : ctx.auth.currentUser.prenom[0], " ");
      }
    }, dependencies: [NgForOf, NgIf, RouterOutlet, RouterLink, FooterComponent], styles: ['\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 40;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  background: var(--sidebar-bg);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 50;\n  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n.sidebar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.brand-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #E8E4DC;\n}\n.brand-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n}\n.account-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.account-badge__avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.account-badge__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.account-badge__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: rgba(232, 228, 220, 0.85);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-badge__role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  color: rgba(232, 228, 220, 0.45);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(232, 228, 220, 0.85);\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(232, 98, 42, 0.15) !important;\n  color: #FF9A5C !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-item__icon[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.nav-item__icon[_ngcontent-%COMP%] {\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  opacity: 0.7;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-item__icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.sidebar__footer[_ngcontent-%COMP%] {\n  padding: 14px 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.user-tile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.04);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: rgba(232, 228, 220, 0.9);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(232, 228, 220, 0.35);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(232, 228, 220, 0.3);\n  padding: 4px;\n  border-radius: 6px;\n  transition: all 0.15s;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: var(--red);\n  background: rgba(232, 74, 74, 0.15);\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 24px;\n  background: white;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 20;\n}\n.topbar__menu[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n  padding: 6px;\n  border-radius: 8px;\n  transition: all 0.15s;\n  display: none;\n}\n@media (max-width: 900px) {\n  .topbar__menu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.topbar__menu[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: var(--text-primary);\n}\n.topbar__search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 400px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 8px 14px;\n}\n.topbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 13px;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n}\n.topbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.topbar__search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\nkbd[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 5px;\n  padding: 2px 6px;\n  font-family: inherit;\n}\n.topbar__actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.topbar__icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n  padding: 7px;\n  border-radius: 9px;\n  transition: all 0.15s;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.topbar__icon-btn[_ngcontent-%COMP%]:hover, .topbar__icon-btn.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  color: var(--text-primary);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--red);\n  color: white;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 320px;\n  background: white;\n  border-radius: 14px;\n  box-shadow: var(--shadow-elevated);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  z-index: 100;\n  animation: fadeInUp 0.2s both;\n}\n.notif-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--border);\n  font-weight: 700;\n  font-size: 13px;\n}\n.notif-panel__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--orange);\n  font-weight: 600;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: var(--orange-light);\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.03);\n}\n.notif-item__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.dot-warning[_ngcontent-%COMP%] {\n  background: var(--amber);\n}\n.dot-error[_ngcontent-%COMP%] {\n  background: var(--red);\n}\n.dot-info[_ngcontent-%COMP%] {\n  background: var(--teal);\n}\n.dot-success[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.notif-item__titre[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.notif-item__msg[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n  line-height: 1.4;\n}\n.topbar__avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 28px;\n}\n.main-area[_ngcontent-%COMP%]    > app-footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "app\\layout\\layout.component.ts", lineNumber: 11 });
})();

// src/app/layout/layout.module.ts
var LayoutModule = class _LayoutModule {
  static {
    this.\u0275fac = function LayoutModule_Factory(t) {
      return new (t || _LayoutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule, SharedModule] });
  }
};

// src/app/features/admin/dashboard/dashboard.component.ts
function AdminDashboardComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "p", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 56)(8, "div", 57);
    \u0275\u0275element(9, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 59);
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
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(projetService) {
    this.projetService = projetService;
  }
  get projets() {
    return this.projetService.projets;
  }
  get stats() {
    return {
      totalProjets: this.projets.length,
      enCours: this.projets.filter((p) => p.status === "in_progress").length,
      utilisateurs: 24,
      events: 3,
      abonnements: 18,
      talents: 12
    };
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 142, vars: 7, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], ["routerLink", "/admin/utilisateurs", 1, "kh-btn", "kh-btn--primary"], [1, "kpi-grid", "animate-2"], [1, "kpi-card"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#E8622A,#FF9A5C)"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-trend", "up"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#2ABFBF,#1a9999)"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#7C5CBF,#5a3a9f)"], ["width", "20", "height", "14", "x", "2", "y", "5", "rx", "2"], ["x1", "2", "y1", "10", "x2", "22", "y2", "10"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#27AE7A,#1a8a5e)"], ["width", "18", "height", "18", "x", "3", "y", "4", "rx", "2"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#F5A623,#d4881e)"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "kpi-icon", 2, "background", "linear-gradient(135deg,#E84A4A,#c73232)"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], [1, "bottom-grid", "animate-3"], [1, "kh-card", "panel"], [1, "panel-header"], [1, "kh-section-title"], ["routerLink", "/admin/projets", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], ["class", "project-row", 4, "ngFor", "ngForOf"], [1, "quick-actions"], ["routerLink", "/admin/utilisateurs", 1, "qa-btn"], ["routerLink", "/admin/evenements", 1, "qa-btn"], ["routerLink", "/admin/abonnements", 1, "qa-btn"], ["routerLink", "/admin/talent", 1, "qa-btn"], ["routerLink", "/admin/bibliotheque", 1, "qa-btn"], ["routerLink", "/admin/planning", 1, "qa-btn"], [1, "kh-card", "panel", "panel--wide"], [1, "alert-list"], [1, "alert-item", "alert-item--red"], [1, "dot-live", "dot-live--orange"], [1, "alert-title"], [1, "alert-meta"], [1, "kh-badge", "kh-badge--red"], [1, "alert-item", "alert-item--amber"], [1, "dot-live", "dot-live--amber"], [1, "kh-badge", "kh-badge--amber"], [1, "alert-item"], [1, "dot-live", "dot-live--green"], [1, "kh-badge", "kh-badge--green"], [1, "project-row"], [1, "project-row__info"], [1, "project-row__name"], [1, "kh-badge"], [1, "project-row__progress"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "prog-pct"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Global overview of the KHOTWA platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "+ Add user");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 8);
        \u0275\u0275element(13, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div")(15, "p", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 11);
        \u0275\u0275text(18, "Total projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "+2 this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6)(22, "div", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 8);
        \u0275\u0275element(24, "path", 14)(25, "circle", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "div")(27, "p", 10);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 11);
        \u0275\u0275text(30, "Active users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "+5 this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 6)(34, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 8);
        \u0275\u0275element(36, "rect", 17)(37, "line", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "div")(39, "p", 10);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 11);
        \u0275\u0275text(42, "Active subscriptions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "span", 12);
        \u0275\u0275text(44, "+3 this month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 6)(46, "div", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(47, "svg", 8);
        \u0275\u0275element(48, "rect", 20)(49, "line", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(50, "div")(51, "p", 10);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 11);
        \u0275\u0275text(54, "Upcoming events");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 6)(56, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(57, "svg", 8);
        \u0275\u0275element(58, "path", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(59, "div")(60, "p", 10);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 11);
        \u0275\u0275text(63, "Registered talents");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 6)(65, "div", 24);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(66, "svg", 8);
        \u0275\u0275element(67, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(68, "div")(69, "p", 10);
        \u0275\u0275text(70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p", 11);
        \u0275\u0275text(72, "Active projects");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(73, "div", 26)(74, "div", 27)(75, "div", 28)(76, "span", 29);
        \u0275\u0275text(77, "Recent projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "a", 30);
        \u0275\u0275text(79, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(80, AdminDashboardComponent_div_80_Template, 12, 9, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 27)(82, "div", 28)(83, "span", 29);
        \u0275\u0275text(84, "Actions rapides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 32)(86, "a", 33)(87, "span");
        \u0275\u0275text(88, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, "Manage users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "a", 34)(91, "span");
        \u0275\u0275text(92, "\u{1F4C5}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, "Create event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "a", 35)(95, "span");
        \u0275\u0275text(96, "\u{1F4B3}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, "Subscriptions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "a", 36)(99, "span");
        \u0275\u0275text(100, "\u{1F3AF}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, "Talent Market");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "a", 37)(103, "span");
        \u0275\u0275text(104, "\u{1F4DA}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, "Library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "a", 38)(107, "span");
        \u0275\u0275text(108, "\u{1F5D3}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275text(109, "Planning global");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "div", 39)(111, "div", 28)(112, "span", 29);
        \u0275\u0275text(113, "SLA alerts actives");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 40)(115, "div", 41);
        \u0275\u0275element(116, "span", 42);
        \u0275\u0275elementStart(117, "div")(118, "p", 43);
        \u0275\u0275text(119, "Prototype UI \u2014 E-Learning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "p", 44);
        \u0275\u0275text(121, "Blocked for 16 days \xB7 Sara Trabelsi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "span", 45);
        \u0275\u0275text(123, "Urgent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 46);
        \u0275\u0275element(125, "span", 47);
        \u0275\u0275elementStart(126, "div")(127, "p", 43);
        \u0275\u0275text(128, "Business Plan \u2014 AgriSmart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "p", 44);
        \u0275\u0275text(130, "Blocked for 12 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "span", 48);
        \u0275\u0275text(132, "Watch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 49);
        \u0275\u0275element(134, "span", 50);
        \u0275\u0275elementStart(135, "div")(136, "p", 43);
        \u0275\u0275text(137, "Tests QA \u2014 HealthMobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "p", 44);
        \u0275\u0275text(139, "Updated 2 days ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "span", 51);
        \u0275\u0275text(141, "OK");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.stats.totalProjets);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.utilisateurs);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.abonnements);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.events);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.stats.talents);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.stats.enCours);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.projets.slice(0, 4));
      }
    }, dependencies: [NgForOf, RouterLink, UpperCasePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 14px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 18px;\n  border: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: all 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n}\n.kpi-trend.up[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.panel--wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width:700px) {\n  .panel--wide[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.project-row[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.project-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.project-row__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.project-row__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.project-row__progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.project-row__progress[_ngcontent-%COMP%]   .kh-progress[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.prog-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  width: 30px;\n  text-align: right;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.qa-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--bg-app);\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.qa-btn[_ngcontent-%COMP%]:hover {\n  background: var(--orange-light);\n  color: var(--orange);\n}\n.alert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.alert-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-app);\n}\n.alert-item--red[_ngcontent-%COMP%] {\n  background: rgba(232, 74, 74, 0.06);\n}\n.alert-item--amber[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.06);\n}\n.alert-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.alert-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "app\\features\\admin\\dashboard\\dashboard.component.ts", lineNumber: 5 });
})();

// src/app/features/admin/projets/projets.component.ts
function AdminProjetsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 18);
    \u0275\u0275element(4, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 23)(13, "div", 24);
    \u0275\u0275element(14, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 26)(16, "span", 27);
    \u0275\u0275text(17, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong", 28);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 29)(21, "span", 27);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 30)(24, "button", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 7);
    \u0275\u0275element(26, "path", 32)(27, "circle", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 34);
    \u0275\u0275listener("click", function AdminProjetsComponent_div_24_Template_button_click_28_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(p_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 7);
    \u0275\u0275element(30, "polyline", 35)(31, "path", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", p_r2.status === "in_progress" ? "linear-gradient(135deg,#2ABFBF,#1a9999)" : p_r2.status === "completed" ? "linear-gradient(135deg,#27AE7A,#1a8a5e)" : "linear-gradient(135deg,#F5A623,#d4881e)");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(p_r2.status === "in_progress" ? "kh-badge--teal" : p_r2.status === "completed" ? "kh-badge--green" : "kh-badge--amber");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, p_r2.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", p_r2.progression, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", p_r2.progression, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r2.etapes.length, " step(s)");
  }
}
function AdminProjetsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, "No projects found");
    \u0275\u0275elementEnd();
  }
}
var AdminProjetsComponent = class _AdminProjetsComponent {
  constructor(projetService) {
    this.projetService = projetService;
    this.filtre = "all";
    this.search = "";
  }
  get filteredProjets() {
    let l = this.projetService.projets;
    if (this.filtre !== "all")
      l = l.filter((p) => p.status === this.filtre);
    if (this.search)
      l = l.filter((p) => p.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }
  delete(id) {
    this.projetService.delete(id);
  }
  static {
    this.\u0275fac = function AdminProjetsComponent_Factory(t) {
      return new (t || _AdminProjetsComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProjetsComponent, selectors: [["app-admin-projets"]], decls: 26, vars: 12, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026", 3, "ngModelChange", "ngModel"], [1, "tab", 3, "click"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "empty", "style", "grid-column:1/-1", 4, "ngIf"], [1, "card"], [1, "card-top"], [1, "card-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta"], [1, "card-progress"], [1, "kh-progress"], [1, "kh-progress__fill"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "card-footer"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], [1, "empty", 2, "grid-column", "1/-1"]], template: function AdminProjetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Project Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ New project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 7);
        \u0275\u0275element(12, "circle", 8)(13, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminProjetsComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 11);
        \u0275\u0275listener("click", function AdminProjetsComponent_Template_button_click_15_listener() {
          return ctx.filtre = "all";
        });
        \u0275\u0275text(16, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275listener("click", function AdminProjetsComponent_Template_button_click_17_listener() {
          return ctx.filtre = "in_progress";
        });
        \u0275\u0275text(18, "In progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function AdminProjetsComponent_Template_button_click_19_listener() {
          return ctx.filtre = "suspended";
        });
        \u0275\u0275text(20, "Suspended");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275listener("click", function AdminProjetsComponent_Template_button_click_21_listener() {
          return ctx.filtre = "completed";
        });
        \u0275\u0275text(22, "Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12);
        \u0275\u0275template(24, AdminProjetsComponent_div_24_Template, 32, 13, "div", 13)(25, AdminProjetsComponent_div_25_Template, 2, 0, "div", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredProjets.length, " project(s)");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.filtre === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "in_progress");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "suspended");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "completed");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filteredProjets);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredProjets.length === 0);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, UpperCasePipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 7px 12px;\n  font-family: inherit;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  font-family: inherit;\n  min-width: 180px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 22px;\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n  box-shadow: var(--shadow-card);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.card-progress[_ngcontent-%COMP%] {\n  margin: 14px 0 8px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 0 auto 12px;\n  display: block;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=projets.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProjetsComponent, { className: "AdminProjetsComponent", filePath: "app\\features\\admin\\projets\\projets.component.ts", lineNumber: 5 });
})();

// src/app/features/admin/planning/planning.component.ts
function AdminPlanningComponent_span_19_Template(rf, ctx) {
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
function AdminPlanningComponent_div_21_span_1_Template(rf, ctx) {
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
function AdminPlanningComponent_div_21_ng_container_2_div_1_Template(rf, ctx) {
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
function AdminPlanningComponent_div_21_ng_container_2_span_2_Template(rf, ctx) {
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
function AdminPlanningComponent_div_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminPlanningComponent_div_21_ng_container_2_div_1_Template, 2, 5, "div", 29)(2, AdminPlanningComponent_div_21_ng_container_2_span_2_Template, 2, 1, "span", 30);
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
function AdminPlanningComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, AdminPlanningComponent_div_21_span_1_Template, 2, 1, "span", 26)(2, AdminPlanningComponent_div_21_ng_container_2_Template, 3, 2, "ng-container", 27);
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
function AdminPlanningComponent_div_26_Template(rf, ctx) {
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
var AdminPlanningComponent = class _AdminPlanningComponent {
  constructor(projetService) {
    this.projetService = projetService;
    this.filtre = "all";
    this.search = "";
    this.view = "talents";
    this.users = [
      { id: "u1", nom: "Bensalem", prenom: "Karim", email: "admin@khotwa.tn", role: "admin", status: "ACTIVE", createdAt: "2024-01-01" },
      { id: "u2", nom: "Trabelsi", prenom: "Sara", email: "sara@startup.tn", role: "entrepreneur", status: "ACTIVE", createdAt: "2024-02-15" },
      { id: "u3", nom: "Mansouri", prenom: "Ahmed", email: "ahmed@coach.tn", role: "coach", status: "ACTIVE", createdAt: "2024-03-01" },
      { id: "u4", nom: "Ben Ali", prenom: "Nadia", email: "nadia@edu.tn", role: "entrepreneur", status: "inactif", createdAt: "2024-04-10" }
    ];
    this.events = [
      { id: "ev1", titre: "Atelier Pitch Day", type: "pitch", date: "2024-12-10", heure: "14h00", intervenant: "Dr. Ben Salem", places: 30, restantes: 8 },
      { id: "ev2", titre: "Webinar BMC", type: "webinar", date: "2024-12-15", heure: "10h00", intervenant: "Sara Coach", places: 50, restantes: 0 },
      { id: "ev3", titre: "Training Design Thinking", type: "formation", date: "2024-12-20", heure: "09h00", intervenant: "Ahmed Mansouri", places: 20, restantes: 5 }
    ];
    this.abonnements = [
      { id: "a1", user: "Sara Trabelsi", email: "sara@startup.tn", plan: "PREMIUM", status: "ACTIVE", debut: "2024-09-01", fin: "2025-09-01" },
      { id: "a2", user: "Omar Chaabane", email: "omar@agri.tn", plan: "FREE", status: "ACTIVE", debut: "2024-10-15", fin: "2025-10-15" },
      { id: "a3", user: "Nadia Ben Ali", email: "nadia@edu.tn", plan: "INSTITUTIONAL", status: "EXPIRED", debut: "2023-11-01", fin: "2024-11-01" }
    ];
    this.talents = [
      { id: "t1", nom: "Karim Dridi", poste: "Full Stack Developer", competences: ["Angular", "Node.js"], score: 92, disponible: true },
      { id: "t2", nom: "Amira Saidi", poste: "Designer UX/UI", competences: ["Figma", "CSS"], score: 88, disponible: true },
      { id: "t3", nom: "Youssef Ben Hmida", poste: "Data Scientist", competences: ["Python", "SQL"], score: 75, disponible: false }
    ];
    this.annonces = [
      { id: "a1", startup: "EduTech Pro", poste: "Co-fondateur CTO", type: "cofondateur", competences: ["React", "AWS"], match: 92 },
      { id: "a2", startup: "HealthMobile", poste: "Stagiaire iOS Dev", type: "stagiaire", competences: ["Swift"], match: 75 }
    ];
    this.ressources = [
      { id: "r1", titre: "Business Plan Guide", desc: "Complete business plan template", type: "pdf", acces: "incubes", categorie: "Strategy", taille: "2.4 MB", progression: 100, lu: true },
      { id: "r2", titre: "Template Canvas BMC", desc: "Tableau Excel interactif", type: "xlsx", acces: "public", categorie: "Outils", taille: "850 KB", progression: 0, lu: false },
      { id: "r3", titre: "Pitch Masterclass", desc: "Video 45min \u2014 Dr. Ben Salem", type: "video", acces: "payant", categorie: "Training", taille: "45 min", progression: 60, lu: false },
      { id: "r4", titre: "SARL Legal Guide", desc: "Legal steps in Tunisia", type: "pdf", acces: "incubes", categorie: "Legal", taille: "1.2 MB", progression: 30, lu: false }
    ];
    this.today = /* @__PURE__ */ new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    this.calEvents = [
      { id: "e1", titre: "Pitch Day", date: 5, type: "evenement", couleur: "#E8622A" },
      { id: "e2", titre: "Livraison MVP", date: 12, type: "deadline", couleur: "#E84A4A" },
      { id: "e3", titre: "Sprint Review", date: 15, type: "rdv", couleur: "#2ABFBF" },
      { id: "e4", titre: "Demo Client", date: 22, type: "rdv", couleur: "#7C5CBF" },
      { id: "e7", titre: "Onboarding", date: this.today.getDate(), type: "rdv", couleur: "#2ABFBF" }
    ];
    this.conversations = [
      { id: "c1", nom: "Sara Trabelsi", initials: "ST", color: "#2ABFBF", lastMsg: "Hello, I updated the deliverables", time: "11:24", unread: 2, messages: [{ from: "Sara", text: "Hello! I updated the sprint deliverables", time: "11:20", mine: false }, { from: "Moi", text: "Great, I'll check that", time: "11:22", mine: true }] },
      { id: "c2", nom: "Ahmed Coach", initials: "AC", color: "#7C5CBF", lastMsg: "Coaching session confirmed", time: "10:15", unread: 0, messages: [{ from: "Ahmed", text: "Coaching session confirmed for Friday 2pm", time: "10:15", mine: false }] },
      { id: "c3", nom: "KHOTWA Team", initials: "KH", color: "#E8622A", lastMsg: "Reminder: webinar tomorrow 10am", time: "09:00", unread: 1, messages: [{ from: "KHOTWA", text: "Reminder: webinar tomorrow at 10am", time: "09:00", mine: false }] }
    ];
    this.selectedConv = null;
    this.newMsg = "";
  }
  get projets() {
    return this.projetService.projets;
  }
  get items() {
    let list = this.projets;
    if (this.filtre !== "all")
      list = list.filter((p) => p.status === this.filtre || p.plan === this.filtre || p.role === this.filtre || p.type === this.filtre);
    if (this.search)
      list = list.filter((p) => JSON.stringify(p).toLowerCase().includes(this.search.toLowerCase()));
    return list;
  }
  get filteredRessources() {
    let l = this.ressources;
    if (this.filtre !== "all")
      l = l.filter((r) => r.type === this.filtre || r.acces === this.filtre);
    if (this.search)
      l = l.filter((r) => r.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
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
  delete(id) {
    this.projetService.delete(id);
  }
  static {
    this.\u0275fac = function AdminPlanningComponent_Factory(t) {
      return new (t || _AdminPlanningComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPlanningComponent, selectors: [["app-admin-planning"]], decls: 42, vars: 5, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "cal-layout", "animate-2"], [1, "kh-card", "cal-card"], [1, "cal-nav"], [1, "nav-btn", 3, "click"], [1, "cal-month"], [1, "cal-days-header"], [4, "ngFor", "ngForOf"], [1, "cal-grid"], ["class", "cal-cell", 3, "today", "empty", 4, "ngFor", "ngForOf"], [1, "sidebar-events"], [1, "kh-card", "upcoming-card"], [1, "kh-section-title", 2, "margin-bottom", "16px"], ["class", "upcoming-item", 4, "ngFor", "ngForOf"], [1, "kh-card", "legend-card"], [2, "font-size", "13px", "font-weight", "700", "margin-bottom", "12px"], [1, "legend-item"], [1, "legend-dot", 2, "background", "#E84A4A"], [1, "legend-dot", 2, "background", "#2ABFBF"], [1, "legend-dot", 2, "background", "#E8622A"], [1, "legend-dot", 2, "background", "#27AE7A"], [1, "cal-cell"], ["class", "cal-day-num", 4, "ngIf"], [4, "ngIf"], [1, "cal-day-num"], ["class", "cal-event-pill", 3, "background", "color", 4, "ngFor", "ngForOf"], ["class", "more-events", 4, "ngIf"], [1, "cal-event-pill"], [1, "more-events"], [1, "upcoming-item"], [1, "upcoming-bar"], [1, "upcoming-title"], [1, "upcoming-date"]], template: function AdminPlanningComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function AdminPlanningComponent_Template_button_click_12_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275text(13, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h2", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function AdminPlanningComponent_Template_button_click_16_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275text(17, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275template(19, AdminPlanningComponent_span_19_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275template(21, AdminPlanningComponent_div_21_Template, 3, 6, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "h3", 16);
        \u0275\u0275text(25, "Upcoming");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, AdminPlanningComponent_div_26_Template, 7, 5, "div", 17);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPlanningComponent, { className: "AdminPlanningComponent", filePath: "app\\features\\admin\\planning\\planning.component.ts", lineNumber: 5 });
})();

// src/app/features/admin/messages/messages.component.ts
function AdminMessagesComponent_div_12_span_11_Template(rf, ctx) {
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
function AdminMessagesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function AdminMessagesComponent_div_12_Template_div_click_0_listener() {
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
    \u0275\u0275template(11, AdminMessagesComponent_div_12_span_11_Template, 2, 1, "span", 22);
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
function AdminMessagesComponent_ng_container_14_div_11_Template(rf, ctx) {
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
function AdminMessagesComponent_ng_container_14_Template(rf, ctx) {
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
    \u0275\u0275template(11, AdminMessagesComponent_ng_container_14_div_11_Template, 6, 6, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30)(13, "button", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 32);
    \u0275\u0275element(15, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AdminMessagesComponent_ng_container_14_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMsg, $event) || (ctx_r2.newMsg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function AdminMessagesComponent_ng_container_14_Template_input_keydown_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMsgKey($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function AdminMessagesComponent_ng_container_14_Template_button_click_17_listener() {
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
function AdminMessagesComponent_ng_template_15_Template(rf, ctx) {
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
var AdminMessagesComponent = class _AdminMessagesComponent {
  constructor(projetService) {
    this.projetService = projetService;
    this.filtre = "all";
    this.search = "";
    this.view = "talents";
    this.users = [
      { id: "u1", nom: "Bensalem", prenom: "Karim", email: "admin@khotwa.tn", role: "admin", status: "ACTIVE", createdAt: "2024-01-01" },
      { id: "u2", nom: "Trabelsi", prenom: "Sara", email: "sara@startup.tn", role: "entrepreneur", status: "ACTIVE", createdAt: "2024-02-15" },
      { id: "u3", nom: "Mansouri", prenom: "Ahmed", email: "ahmed@coach.tn", role: "coach", status: "ACTIVE", createdAt: "2024-03-01" },
      { id: "u4", nom: "Ben Ali", prenom: "Nadia", email: "nadia@edu.tn", role: "entrepreneur", status: "inactif", createdAt: "2024-04-10" }
    ];
    this.events = [
      { id: "ev1", titre: "Atelier Pitch Day", type: "pitch", date: "2024-12-10", heure: "14h00", intervenant: "Dr. Ben Salem", places: 30, restantes: 8 },
      { id: "ev2", titre: "Webinar BMC", type: "webinar", date: "2024-12-15", heure: "10h00", intervenant: "Sara Coach", places: 50, restantes: 0 },
      { id: "ev3", titre: "Training Design Thinking", type: "formation", date: "2024-12-20", heure: "09h00", intervenant: "Ahmed Mansouri", places: 20, restantes: 5 }
    ];
    this.abonnements = [
      { id: "a1", user: "Sara Trabelsi", email: "sara@startup.tn", plan: "PREMIUM", status: "ACTIVE", debut: "2024-09-01", fin: "2025-09-01" },
      { id: "a2", user: "Omar Chaabane", email: "omar@agri.tn", plan: "FREE", status: "ACTIVE", debut: "2024-10-15", fin: "2025-10-15" },
      { id: "a3", user: "Nadia Ben Ali", email: "nadia@edu.tn", plan: "INSTITUTIONAL", status: "EXPIRED", debut: "2023-11-01", fin: "2024-11-01" }
    ];
    this.talents = [
      { id: "t1", nom: "Karim Dridi", poste: "Full Stack Developer", competences: ["Angular", "Node.js"], score: 92, disponible: true },
      { id: "t2", nom: "Amira Saidi", poste: "Designer UX/UI", competences: ["Figma", "CSS"], score: 88, disponible: true },
      { id: "t3", nom: "Youssef Ben Hmida", poste: "Data Scientist", competences: ["Python", "SQL"], score: 75, disponible: false }
    ];
    this.annonces = [
      { id: "a1", startup: "EduTech Pro", poste: "Co-fondateur CTO", type: "cofondateur", competences: ["React", "AWS"], match: 92 },
      { id: "a2", startup: "HealthMobile", poste: "Stagiaire iOS Dev", type: "stagiaire", competences: ["Swift"], match: 75 }
    ];
    this.ressources = [
      { id: "r1", titre: "Business Plan Guide", desc: "Complete business plan template", type: "pdf", acces: "incubes", categorie: "Strategy", taille: "2.4 MB", progression: 100, lu: true },
      { id: "r2", titre: "Template Canvas BMC", desc: "Tableau Excel interactif", type: "xlsx", acces: "public", categorie: "Outils", taille: "850 KB", progression: 0, lu: false },
      { id: "r3", titre: "Pitch Masterclass", desc: "Video 45min \u2014 Dr. Ben Salem", type: "video", acces: "payant", categorie: "Training", taille: "45 min", progression: 60, lu: false },
      { id: "r4", titre: "SARL Legal Guide", desc: "Legal steps in Tunisia", type: "pdf", acces: "incubes", categorie: "Legal", taille: "1.2 MB", progression: 30, lu: false }
    ];
    this.today = /* @__PURE__ */ new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    this.calEvents = [
      { id: "e1", titre: "Pitch Day", date: 5, type: "evenement", couleur: "#E8622A" },
      { id: "e2", titre: "Livraison MVP", date: 12, type: "deadline", couleur: "#E84A4A" },
      { id: "e3", titre: "Sprint Review", date: 15, type: "rdv", couleur: "#2ABFBF" },
      { id: "e4", titre: "Demo Client", date: 22, type: "rdv", couleur: "#7C5CBF" },
      { id: "e7", titre: "Onboarding", date: this.today.getDate(), type: "rdv", couleur: "#2ABFBF" }
    ];
    this.conversations = [
      { id: "c1", nom: "Sara Trabelsi", initials: "ST", color: "#2ABFBF", lastMsg: "Hello, I updated the deliverables", time: "11:24", unread: 2, messages: [{ from: "Sara", text: "Hello! I updated the sprint deliverables", time: "11:20", mine: false }, { from: "Moi", text: "Great, I'll check that", time: "11:22", mine: true }] },
      { id: "c2", nom: "Ahmed Coach", initials: "AC", color: "#7C5CBF", lastMsg: "Coaching session confirmed", time: "10:15", unread: 0, messages: [{ from: "Ahmed", text: "Coaching session confirmed for Friday 2pm", time: "10:15", mine: false }] },
      { id: "c3", nom: "KHOTWA Team", initials: "KH", color: "#E8622A", lastMsg: "Reminder: webinar tomorrow 10am", time: "09:00", unread: 1, messages: [{ from: "KHOTWA", text: "Reminder: webinar tomorrow at 10am", time: "09:00", mine: false }] }
    ];
    this.selectedConv = null;
    this.newMsg = "";
  }
  get projets() {
    return this.projetService.projets;
  }
  get items() {
    let list = this.projets;
    if (this.filtre !== "all")
      list = list.filter((p) => p.status === this.filtre || p.plan === this.filtre || p.role === this.filtre || p.type === this.filtre);
    if (this.search)
      list = list.filter((p) => JSON.stringify(p).toLowerCase().includes(this.search.toLowerCase()));
    return list;
  }
  get filteredRessources() {
    let l = this.ressources;
    if (this.filtre !== "all")
      l = l.filter((r) => r.type === this.filtre || r.acces === this.filtre);
    if (this.search)
      l = l.filter((r) => r.titre.toLowerCase().includes(this.search.toLowerCase()));
    return l;
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
  delete(id) {
    this.projetService.delete(id);
  }
  static {
    this.\u0275fac = function AdminMessagesComponent_Factory(t) {
      return new (t || _AdminMessagesComponent)(\u0275\u0275directiveInject(ProjetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMessagesComponent, selectors: [["app-admin-messages"]], decls: 17, vars: 3, consts: [["emptyChat", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "chat-layout", "animate-2"], [1, "conv-panel", "kh-card"], [1, "conv-search"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026"], [1, "conv-list"], ["class", "conv-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "chat-area", "kh-card"], [4, "ngIf", "ngIfElse"], [1, "conv-item", 3, "click"], [1, "conv-avatar"], [1, "conv-info"], [1, "conv-top"], [1, "conv-name"], [1, "conv-time"], [1, "conv-preview"], ["class", "unread-badge", 4, "ngIf"], [1, "unread-badge"], [1, "chat-header"], [1, "conv-avatar", 2, "width", "36px", "height", "36px", "font-size", "12px"], [1, "online-status"], [1, "dot-live", "dot-live--green"], [1, "messages-body"], ["class", "msg-wrap", 3, "mine", 4, "ngFor", "ngForOf"], [1, "chat-input"], [1, "input-icon-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"], ["type", "text", "placeholder", "Write a message\u2026", 3, "ngModelChange", "keydown", "ngModel"], [1, "send-btn", 3, "click"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "msg-wrap"], [1, "msg-bubble"], [1, "msg-time"], [1, "empty-chat"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]], template: function AdminMessagesComponent_Template(rf, ctx) {
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
        \u0275\u0275template(12, AdminMessagesComponent_div_12_Template, 12, 9, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 13);
        \u0275\u0275template(14, AdminMessagesComponent_ng_container_14_Template, 21, 6, "ng-container", 14)(15, AdminMessagesComponent_ng_template_15_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMessagesComponent, { className: "AdminMessagesComponent", filePath: "app\\features\\admin\\messages\\messages.component.ts", lineNumber: 5 });
})();

// src/app/features/admin/bibliotheque/bibliotheque.component.ts
function AdminBibliothequeComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_78_tr_23_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("border-color", r_r2.categorie.couleur)("color", r_r2.categorie.couleur);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r2.categorie.icone, " ", r_r2.categorie.nom, "");
  }
}
function AdminBibliothequeComponent_div_78_tr_23_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_78_tr_23_div_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3.nom);
  }
}
function AdminBibliothequeComponent_div_78_tr_23_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_78_tr_23_div_20_span_1_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", r_r2.tags);
  }
}
function AdminBibliothequeComponent_div_78_tr_23_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_78_tr_23_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_78_tr_23_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.downloadRessource(r_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 71)(3, "polyline", 72)(4, "line", 73);
    \u0275\u0275elementEnd()();
  }
}
function AdminBibliothequeComponent_div_78_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 44)(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, AdminBibliothequeComponent_div_78_tr_23_span_17_Template, 2, 6, "span", 50)(18, AdminBibliothequeComponent_div_78_tr_23_span_18_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275template(20, AdminBibliothequeComponent_div_78_tr_23_div_20_Template, 2, 1, "div", 52)(21, AdminBibliothequeComponent_div_78_tr_23_span_21_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 53);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 54);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "button", 55);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_78_tr_23_Template_button_click_27_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.togglePublie(r_r2));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 56)(31, "button", 57);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_78_tr_23_Template_button_click_31_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEdit(r_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 7);
    \u0275\u0275element(33, "path", 58)(34, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, AdminBibliothequeComponent_div_78_tr_23_button_35_Template, 5, 0, "button", 60);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "button", 61);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_78_tr_23_Template_button_click_36_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(r_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 7);
    \u0275\u0275element(38, "polyline", 62)(39, "path", 63)(40, "path", 64);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.typeIcons[r_r2.type]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.nomFichierOriginal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getAccessBadge(r_r2.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.planType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r2.categorie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r2.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r2.tags == null ? null : r_r2.tags.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(r_r2.tags == null ? null : r_r2.tags.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.tailleFormatee || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.vues);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("published", r_r2.publie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.publie ? "Published" : "Draft");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", r_r2.urlFichier);
  }
}
function AdminBibliothequeComponent_div_78_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2, "No resources found");
    \u0275\u0275elementEnd()();
  }
}
function AdminBibliothequeComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Resource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AdminBibliothequeComponent_div_78_tr_23_Template, 41, 17, "tr", 42)(24, AdminBibliothequeComponent_div_78_tr_24_Template, 3, 0, "tr", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r3.ressources);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.ressources.length === 0);
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.downloadRessource(r_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 92);
    \u0275\u0275element(2, "path", 71)(3, "polyline", 72)(4, "line", 73);
    \u0275\u0275elementEnd()();
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89)(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 55);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template_button_click_10_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.togglePublie(r_r9));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56)(13, "button", 57);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template_button_click_13_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.openEdit(r_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 92);
    \u0275\u0275element(15, "path", 58)(16, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_button_17_Template, 5, 0, "button", 60);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 61);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template_button_click_18_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(r_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 92);
    \u0275\u0275element(20, "polyline", 62)(21, "path", 63)(22, "path", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.typeIcons[r_r9.type]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.titre.split(" \u2014 ")[1] || r_r9.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.tailleFormatee || r_r9.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getAccessBadge(r_r9.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.planType);
    \u0275\u0275advance();
    \u0275\u0275classProp("published", r_r9.publie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.publie ? "Published" : "Draft");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", r_r9.urlFichier);
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template, 23, 10, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const folder_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", folder_r7.files);
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 76);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const folder_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFolder(folder_r7));
    });
    \u0275\u0275elementStart(2, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 78);
    \u0275\u0275element(4, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 79)(6, "span", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 81);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 82);
    \u0275\u0275element(11, "polyline", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_Template, 2, 1, "div", 84);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(folder_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", folder_r7.files.length, " file", folder_r7.files.length > 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", folder_r7.expanded);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", folder_r7.expanded);
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275text(1, "Individual files");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const r_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.downloadRessource(r_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 92);
    \u0275\u0275element(2, "path", 71)(3, "polyline", 72)(4, "line", 73);
    \u0275\u0275elementEnd()();
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89)(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 55);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template_button_click_10_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.togglePublie(r_r12));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56)(13, "button", 97);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template_button_click_13_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.openEdit(r_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 92);
    \u0275\u0275element(15, "path", 58)(16, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_button_17_Template, 5, 0, "button", 98);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 99);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template_button_click_18_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(r_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 92);
    \u0275\u0275element(20, "polyline", 62)(21, "path", 63)(22, "path", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.typeIcons[r_r12.type]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r12.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r12.tailleFormatee || r_r12.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getAccessBadge(r_r12.planType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.planType);
    \u0275\u0275advance();
    \u0275\u0275classProp("published", r_r12.publie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.publie ? "Published" : "Draft");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", r_r12.urlFichier);
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_1_Template, 2, 0, "div", 93)(2, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template, 23, 10, "div", 94);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.folders.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", folder_r7.files);
  }
}
function AdminBibliothequeComponent_div_79_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_Template, 13, 6, "ng-container", 43)(2, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const folder_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", folder_r7.name !== "__solo__");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", folder_r7.name === "__solo__");
  }
}
function AdminBibliothequeComponent_div_79_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "No resources found");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_79_ng_container_1_Template, 3, 2, "ng-container", 42)(2, AdminBibliothequeComponent_div_79_p_2_Template, 2, 0, "p", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.folders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.folders.length === 0);
  }
}
function AdminBibliothequeComponent_div_80_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 128);
    \u0275\u0275element(2, "polyline", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.submitSuccess, " ");
  }
}
function AdminBibliothequeComponent_div_80_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 131);
    \u0275\u0275element(2, "circle", 132)(3, "line", 133)(4, "line", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.submitError, " ");
  }
}
function AdminBibliothequeComponent_div_80_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 136);
    \u0275\u0275element(2, "circle", 132)(3, "line", 133)(4, "line", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formErrors["titre"], " ");
  }
}
function AdminBibliothequeComponent_div_80_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", t_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r3.typeIcons[t_r15], " ", t_r15, "");
  }
}
function AdminBibliothequeComponent_div_80_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formErrors["type"]);
  }
}
function AdminBibliothequeComponent_div_80_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formErrors["planType"]);
  }
}
function AdminBibliothequeComponent_div_80_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("value", c_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r16.icone, " ", c_r16.nom, "");
  }
}
function AdminBibliothequeComponent_div_80_div_54_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275text(1, "\u2014 select multiple PDFs for a course folder");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_80_div_54_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, " *");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_80_div_54_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 146);
    \u0275\u0275element(2, "path", 71)(3, "polyline", 147)(4, "line", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 149);
    \u0275\u0275text(8, "Up to 500 MB per file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Click to select ", ctx_r3.form.type === "PDF" && !ctx_r3.isEditing ? "one or more PDFs" : "a file", "");
  }
}
function AdminBibliothequeComponent_div_80_div_54_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 154);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 155);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 156);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_div_54_div_9_div_1_Template_button_click_7_listener($event) {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r3 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.removeFile(i_r20));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r21 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatSize(f_r21.size));
  }
}
function AdminBibliothequeComponent_div_80_div_54_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_80_div_54_div_9_div_1_Template, 9, 2, "div", 151);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.selectedFiles);
  }
}
function AdminBibliothequeComponent_div_80_div_54_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1, "(click to add more)");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_80_div_54_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 136);
    \u0275\u0275element(2, "circle", 132)(3, "line", 133)(4, "line", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formErrors["fichier"], " ");
  }
}
function AdminBibliothequeComponent_div_80_div_54_div_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formErrors["courseName"]);
  }
}
function AdminBibliothequeComponent_div_80_div_54_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158)(1, "div", 159);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 160)(4, "label");
    \u0275\u0275text(5, "Course / Folder name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_54_div_12_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.courseName, $event) || (ctx_r3.courseName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminBibliothequeComponent_div_80_div_54_div_12_span_7_Template, 2, 1, "span", 111);
    \u0275\u0275elementStart(8, "p", 162);
    \u0275\u0275text(9, " Files will be grouped as: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ", ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\u2026 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.courseName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && ctx_r3.formErrors["courseName"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.courseName || ctx_r3.form.titre || "\u2026", " \u2014 chapitre1.pdf");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.courseName || ctx_r3.form.titre || "\u2026", " \u2014 chapitre2.pdf");
  }
}
function AdminBibliothequeComponent_div_80_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "label");
    \u0275\u0275text(2, " File ");
    \u0275\u0275template(3, AdminBibliothequeComponent_div_80_div_54_span_3_Template, 2, 0, "span", 138)(4, AdminBibliothequeComponent_div_80_div_54_span_4_Template, 2, 0, "span", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 140);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_div_54_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const fileInput_r18 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(fileInput_r18.click());
    });
    \u0275\u0275elementStart(6, "input", 141, 0);
    \u0275\u0275listener("change", function AdminBibliothequeComponent_div_80_div_54_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminBibliothequeComponent_div_80_div_54_ng_container_8_Template, 9, 1, "ng-container", 43)(9, AdminBibliothequeComponent_div_80_div_54_div_9_Template, 2, 1, "div", 142)(10, AdminBibliothequeComponent_div_80_div_54_span_10_Template, 2, 0, "span", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminBibliothequeComponent_div_80_div_54_span_11_Template, 6, 1, "span", 111)(12, AdminBibliothequeComponent_div_80_div_54_div_12_Template, 16, 4, "div", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.form.type === "PDF" && !ctx_r3.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isEditing);
    \u0275\u0275advance(2);
    \u0275\u0275property("multiple", ctx_r3.form.type === "PDF" && !ctx_r3.isEditing)("accept", ctx_r3.form.type === "PDF" ? ".pdf,application/pdf" : "*");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selectedFiles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedFiles.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedFiles.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && ctx_r3.formErrors["fichier"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedFiles.length > 1);
  }
}
function AdminBibliothequeComponent_div_80_div_55_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formErrors["urlExterne"]);
  }
}
function AdminBibliothequeComponent_div_80_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "label");
    \u0275\u0275text(2, "External URL ");
    \u0275\u0275elementStart(3, "span", 109);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 163);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_55_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.form.urlExterne, $event) || (ctx_r3.form.urlExterne = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminBibliothequeComponent_div_80_div_55_span_6_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("input-error", ctx_r3.submitted && ctx_r3.formErrors["urlExterne"]);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.urlExterne);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && ctx_r3.formErrors["urlExterne"]);
  }
}
function AdminBibliothequeComponent_div_80_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "label");
    \u0275\u0275text(2, "Duration (seconds)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_56_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.form.dureeSec, $event) || (ctx_r3.form.dureeSec = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.dureeSec);
  }
}
function AdminBibliothequeComponent_div_80_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "label");
    \u0275\u0275text(2, "Number of pages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 165);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_57_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.form.nombrePages, $event) || (ctx_r3.form.nombrePages = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.nombrePages);
  }
}
function AdminBibliothequeComponent_div_80__svg_svg_65__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "path", 166)(2, "polyline", 167)(3, "polyline", 168);
    \u0275\u0275elementContainerEnd();
  }
}
function AdminBibliothequeComponent_div_80__svg_svg_65__svg_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "line", 19)(2, "line", 20);
    \u0275\u0275elementContainerEnd();
  }
}
function AdminBibliothequeComponent_div_80__svg_svg_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275template(1, AdminBibliothequeComponent_div_80__svg_svg_65__svg_ng_container_1_Template, 4, 0, "ng-container", 43)(2, AdminBibliothequeComponent_div_80__svg_svg_65__svg_ng_container_2_Template, 3, 0, "ng-container", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isEditing);
  }
}
function AdminBibliothequeComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 101);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 102)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 103);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showForm = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 104);
    \u0275\u0275template(8, AdminBibliothequeComponent_div_80_div_8_Template, 4, 1, "div", 105)(9, AdminBibliothequeComponent_div_80_div_9_Template, 6, 1, "div", 106);
    \u0275\u0275elementStart(10, "div", 107)(11, "div", 108)(12, "label");
    \u0275\u0275text(13, "Title ");
    \u0275\u0275elementStart(14, "span", 109);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.titre, $event) || (ctx_r3.form.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminBibliothequeComponent_div_80_span_17_Template, 6, 1, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 108)(19, "label");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 112);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.description, $event) || (ctx_r3.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 113)(23, "label");
    \u0275\u0275text(24, "Type ");
    \u0275\u0275elementStart(25, "span", 109);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 114);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.type, $event) || (ctx_r3.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTypeChange());
    });
    \u0275\u0275template(28, AdminBibliothequeComponent_div_80_option_28_Template, 2, 3, "option", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AdminBibliothequeComponent_div_80_span_29_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 113)(31, "label");
    \u0275\u0275text(32, "Access Plan ");
    \u0275\u0275elementStart(33, "span", 109);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 114);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.planType, $event) || (ctx_r3.form.planType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 116);
    \u0275\u0275text(37, "\u{1F310} Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 117);
    \u0275\u0275text(39, "\u{1F48E} Premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 118);
    \u0275\u0275text(41, "\u{1F3DB}\uFE0F Institutional");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, AdminBibliothequeComponent_div_80_span_42_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 113)(44, "label");
    \u0275\u0275text(45, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 114);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.categorieId, $event) || (ctx_r3.form.categorieId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(47, "option", 119);
    \u0275\u0275text(48, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, AdminBibliothequeComponent_div_80_option_49_Template, 2, 3, "option", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 113)(51, "label");
    \u0275\u0275text(52, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 120);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.tags, $event) || (ctx_r3.form.tags = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, AdminBibliothequeComponent_div_80_div_54_Template, 13, 9, "div", 121)(55, AdminBibliothequeComponent_div_80_div_55_Template, 7, 4, "div", 121)(56, AdminBibliothequeComponent_div_80_div_56_Template, 4, 1, "div", 122)(57, AdminBibliothequeComponent_div_80_div_57_Template, 4, 1, "div", 122);
    \u0275\u0275elementStart(58, "div", 108)(59, "label", 123)(60, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.publie, $event) || (ctx_r3.form.publie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "Publish immediately");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(63, "div", 125)(64, "button", 17);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitForm());
    });
    \u0275\u0275template(65, AdminBibliothequeComponent_div_80__svg_svg_65_Template, 3, 2, "svg", 126);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 6);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_80_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showForm = false);
    });
    \u0275\u0275text(68, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.isEditing ? "Edit Resource" : "Add New Resource");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.submitSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitError);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r3.submitted && ctx_r3.formErrors["titre"]);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("input-error", ctx_r3.submitted && ctx_r3.formErrors["titre"]);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && ctx_r3.formErrors["titre"]);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.description);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r3.submitted && ctx_r3.formErrors["type"]);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("input-error", ctx_r3.submitted && ctx_r3.formErrors["type"]);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.types);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && ctx_r3.formErrors["type"]);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r3.submitted && ctx_r3.formErrors["planType"]);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("input-error", ctx_r3.submitted && ctx_r3.formErrors["planType"]);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.planType);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.submitted && ctx_r3.formErrors["planType"]);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.categorieId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.tags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.type !== "LINK");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.type === "LINK");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.type === "VIDEO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.type === "PDF" || ctx_r3.form.type === "WORD");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.publie);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r3.submitSuccess && !ctx_r3.submitError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing ? "Save changes" : ctx_r3.selectedFiles.length > 1 ? "Upload " + ctx_r3.selectedFiles.length + " files" : "Add resource", " ");
  }
}
function AdminBibliothequeComponent_div_81_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.editingCatId = null;
      return \u0275\u0275resetView(ctx_r3.catForm = { nom: "", description: "", couleur: "#E8622A", icone: "\u{1F4C1}" });
    });
    \u0275\u0275text(1, " Cancel ");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_81_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 180);
    \u0275\u0275element(1, "div", 181);
    \u0275\u0275elementStart(2, "span", 182);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 183);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 184)(7, "button", 97);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_div_16_Template_button_click_7_listener() {
      const c_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editCategorie(c_r29));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 92);
    \u0275\u0275element(9, "path", 58)(10, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 99);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_div_16_Template_button_click_11_listener() {
      const c_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteCategorie(c_r29));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 92);
    \u0275\u0275element(13, "polyline", 62)(14, "path", 63)(15, "path", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r29.couleur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r29.icone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r29.nom);
  }
}
function AdminBibliothequeComponent_div_81_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 185);
    \u0275\u0275text(1, "No categories yet");
    \u0275\u0275elementEnd();
  }
}
function AdminBibliothequeComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCatPanel());
    });
    \u0275\u0275elementStart(1, "div", 169);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 102)(3, "h2");
    \u0275\u0275text(4, "Manage Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 103);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCatPanel());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 104)(8, "div", 170)(9, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_81_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.catForm.nom, $event) || (ctx_r3.catForm.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 172);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_81_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.catForm.icone, $event) || (ctx_r3.catForm.icone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_div_81_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.catForm.couleur, $event) || (ctx_r3.catForm.couleur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 174);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_81_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitCategorie());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminBibliothequeComponent_div_81_button_14_Template, 2, 0, "button", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 176);
    \u0275\u0275template(16, AdminBibliothequeComponent_div_81_div_16_Template, 16, 4, "div", 177)(17, AdminBibliothequeComponent_div_81_p_17_Template, 2, 0, "p", 178);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.catForm.nom);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.catForm.icone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.catForm.couleur);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.catForm.nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingCatId ? "Save" : "Add", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.editingCatId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.categories.length === 0);
  }
}
function AdminBibliothequeComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_82_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 186);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_82_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 187);
    \u0275\u0275text(3, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Delete resource?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "You are about to delete ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". This cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 188)(12, "button", 189);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_82_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.doDelete());
    });
    \u0275\u0275text(13, "Yes, delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 6);
    \u0275\u0275listener("click", function AdminBibliothequeComponent_div_82_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancelDelete());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.deleteTarget == null ? null : ctx_r3.deleteTarget.titre);
  }
}
var AdminBibliothequeComponent = class _AdminBibliothequeComponent {
  constructor(ressourceService) {
    this.ressourceService = ressourceService;
    this.view = "table";
    this.ressources = [];
    this.folders = [];
    this.categories = [];
    this.loading = false;
    this.error = "";
    this.filterType = "ALL";
    this.filterAccess = "ALL";
    this.filterPublie = "ALL";
    this.filterCategorieId = null;
    this.search = "";
    this.showForm = false;
    this.isEditing = false;
    this.editId = null;
    this.showDeleteConfirm = false;
    this.deleteTarget = null;
    this.form = this.emptyForm();
    this.selectedFiles = [];
    this.courseName = "";
    this.submitted = false;
    this.formErrors = {};
    this.submitError = "";
    this.submitSuccess = "";
    this.showCatPanel = false;
    this.catForm = { nom: "", description: "", couleur: "#E8622A", icone: "\u{1F4C1}" };
    this.editingCatId = null;
    this.typeIcons = { PDF: "\u{1F4C4}", VIDEO: "\u{1F3A5}", EXCEL: "\u{1F4CA}", WORD: "\u{1F4DD}", IMAGE: "\u{1F5BC}\uFE0F", LINK: "\u{1F517}" };
    this.types = ["PDF", "VIDEO", "EXCEL", "WORD", "IMAGE", "LINK"];
    this.planTypes = ["FREE", "PREMIUM", "INSTITUTIONAL"];
    this.statsData = {};
  }
  ngOnInit() {
    this.loadCategories();
    this.loadStats();
    this.load();
  }
  emptyForm() {
    return {
      titre: "",
      description: "",
      type: "PDF",
      planType: "FREE",
      categorieId: null,
      tags: "",
      dureeSec: null,
      nombrePages: null,
      publie: true,
      urlExterne: ""
    };
  }
  // ── Validation du formulaire ──────────────────────────────────────
  validateForm() {
    this.formErrors = {};
    if (!this.form.titre?.trim())
      this.formErrors["titre"] = "Title is required.";
    if (!this.form.type)
      this.formErrors["type"] = "Resource type is required.";
    if (!this.form.planType)
      this.formErrors["planType"] = "Access plan is required.";
    if (this.form.type !== "LINK" && !this.isEditing && this.selectedFiles.length === 0 && !this.form.urlExterne?.trim())
      this.formErrors["fichier"] = "Please select a file or provide an external URL.";
    if (this.form.type === "LINK" && !this.form.urlExterne?.trim())
      this.formErrors["urlExterne"] = "External URL is required for this type.";
    if (this.form.dureeSec !== null && this.form.dureeSec !== "" && Number(this.form.dureeSec) < 0)
      this.formErrors["dureeSec"] = "Duration must be positive.";
    if (this.form.nombrePages !== null && this.form.nombrePages !== "" && Number(this.form.nombrePages) < 1)
      this.formErrors["nombrePages"] = "Number of pages must be at least 1.";
    if (this.selectedFiles.length > 1 && !this.courseName?.trim() && !this.form.titre?.trim())
      this.formErrors["courseName"] = "Please name the course folder.";
    return Object.keys(this.formErrors).length === 0;
  }
  load() {
    this.loading = true;
    this.error = "";
    const filters = { type: this.filterType, access: this.filterAccess, search: this.search };
    if (this.filterCategorieId)
      filters.categorieId = this.filterCategorieId;
    this.ressourceService.getRessourcesHttp(filters).subscribe({
      next: (res) => {
        this.ressources = res.data ?? res;
        this.buildFolders();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Unable to load resources.";
      }
    });
  }
  buildFolders() {
    const map = /* @__PURE__ */ new Map();
    const solo = [];
    this.ressources.forEach((r) => {
      const sep = r.titre.indexOf(" \u2014 ");
      if (sep > -1) {
        const key = r.titre.substring(0, sep).trim();
        if (!map.has(key))
          map.set(key, []);
        map.get(key).push(r);
      } else {
        solo.push(r);
      }
    });
    this.folders = [];
    map.forEach((files, name) => {
      if (files.length > 1)
        this.folders.push({ name, files, expanded: false });
      else
        solo.push(...files);
    });
    if (solo.length > 0)
      this.folders.push({ name: "__solo__", files: solo, expanded: true });
  }
  toggleFolder(f) {
    f.expanded = !f.expanded;
  }
  onSearch() {
    this.load();
  }
  openCreate() {
    this.form = this.emptyForm();
    this.isEditing = false;
    this.editId = null;
    this.selectedFiles = [];
    this.courseName = "";
    this.submitted = false;
    this.formErrors = {};
    this.submitError = "";
    this.submitSuccess = "";
    this.showForm = true;
  }
  openEdit(r) {
    this.form = {
      titre: r.titre,
      description: r.description,
      type: r.type,
      planType: r.planType,
      categorieId: r.categorie?.id || null,
      tags: r.tags?.map((t) => t.nom).join(", ") || "",
      dureeSec: r.dureeSec || null,
      nombrePages: r.nombrePages || null,
      publie: r.publie,
      urlExterne: r.urlExterne || ""
    };
    this.isEditing = true;
    this.editId = r.id;
    this.selectedFiles = [];
    this.submitted = false;
    this.formErrors = {};
    this.submitError = "";
    this.submitSuccess = "";
    this.showForm = true;
  }
  onTypeChange() {
    this.selectedFiles = [];
    this.courseName = "";
    this.formErrors["fichier"] = "";
    this.formErrors["urlExterne"] = "";
  }
  onFileChange(e) {
    const newFiles = Array.from(e.target.files);
    const existing = this.selectedFiles.map((f) => f.name);
    const toAdd = newFiles.filter((f) => !existing.includes(f.name));
    this.selectedFiles = [...this.selectedFiles, ...toAdd];
    if (this.selectedFiles.length > 0)
      this.formErrors["fichier"] = "";
    e.target.value = "";
  }
  removeFile(i) {
    this.selectedFiles.splice(i, 1);
  }
  formatSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1048576)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  }
  submitForm() {
    this.submitted = true;
    this.submitError = "";
    this.submitSuccess = "";
    if (!this.validateForm())
      return;
    if (this.isEditing && this.editId) {
      const body = {
        titre: this.form.titre,
        description: this.form.description,
        planType: this.form.planType,
        publie: this.form.publie,
        urlExterne: this.form.urlExterne
      };
      if (this.form.categorieId)
        body.categorieId = this.form.categorieId;
      if (this.form.tags)
        body.tags = this.form.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (this.form.dureeSec)
        body.dureeSec = this.form.dureeSec;
      if (this.form.nombrePages)
        body.nombrePages = this.form.nombrePages;
      this.ressourceService.updateRessourceHttp(this.editId, body).subscribe({
        next: () => {
          this.submitSuccess = "Resource updated successfully!";
          setTimeout(() => {
            this.showForm = false;
            this.load();
            this.loadStats();
          }, 900);
        },
        error: (err) => {
          this.submitError = this.parseBackendError(err);
        }
      });
      return;
    }
    const files = this.selectedFiles.length > 0 ? this.selectedFiles : [null];
    const isMulti = this.selectedFiles.length > 1;
    const courseTitle = isMulti && this.courseName.trim() ? this.courseName.trim() : this.form.titre;
    let completed = 0;
    const total = files.length;
    for (const file of files) {
      const fd = this.ressourceService.buildFormData(this.form, file);
      if (isMulti && file) {
        const fileLabel = file.name.replace(/\.[^/.]+$/, "");
        fd.set("titre", courseTitle + " \u2014 " + fileLabel);
        fd.set("description", this.form.description || "Part of: " + courseTitle);
      }
      this.ressourceService.createRessourceHttp(fd, 1).subscribe({
        next: () => {
          completed++;
          if (completed === total) {
            this.submitSuccess = total > 1 ? `${total} resources created!` : "Resource created successfully!";
            setTimeout(() => {
              this.showForm = false;
              this.courseName = "";
              this.load();
              this.loadStats();
            }, 900);
          }
        },
        error: (err) => {
          this.submitError = this.parseBackendError(err);
        }
      });
    }
  }
  parseBackendError(err) {
    if (!err)
      return "Unknown error.";
    const body = err.error;
    if (!body)
      return `Server error (${err.status}).`;
    if (body.message)
      return body.message;
    if (body.data && typeof body.data === "object") {
      return Object.entries(body.data).map(([k, v]) => `${k}: ${v}`).join(" \xB7 ");
    }
    if (typeof body === "string")
      return body;
    return `Server error (${err.status}).`;
  }
  confirmDelete(r) {
    this.deleteTarget = r;
    this.showDeleteConfirm = true;
  }
  doDelete() {
    if (!this.deleteTarget)
      return;
    this.ressourceService.deleteRessourceHttp(this.deleteTarget.id).subscribe({
      next: () => {
        this.load();
        this.loadStats();
      },
      error: (err) => alert("Error: " + (err.error?.message || "Server error"))
    });
    this.showDeleteConfirm = false;
    this.deleteTarget = null;
  }
  cancelDelete() {
    this.showDeleteConfirm = false;
    this.deleteTarget = null;
  }
  togglePublie(r) {
    this.ressourceService.togglePublieHttp(r.id).subscribe({ next: () => this.load() });
  }
  downloadRessource(r) {
    const url = r.urlFichier?.startsWith("http") ? r.urlFichier : r.urlFichier ? "http://localhost:8084" + r.urlFichier : r.urlExterne ?? "";
    if (!url) {
      alert("No file attached.");
      return;
    }
    fetch(url, { headers: { "X-User-Id": "1", "X-User-Role": "ADMIN" } }).then((res) => res.blob()).then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = r.nomFichierOriginal || r.titre;
      a.click();
      URL.revokeObjectURL(a.href);
    }).catch(() => window.open(url, "_blank"));
  }
  loadStats() {
    this.ressourceService.getStatsHttp(1).subscribe({ next: (r) => this.statsData = r.data ?? {}, error: () => {
    } });
  }
  get stats() {
    return this.statsData;
  }
  loadCategories() {
    this.ressourceService.getCategoriesHttp().subscribe({
      next: (res) => {
        this.categories = res.data ?? [];
      },
      error: () => {
        this.categories = [];
      }
    });
  }
  openCatPanel() {
    this.showCatPanel = true;
    this.catForm = { nom: "", description: "", couleur: "#E8622A", icone: "\u{1F4C1}" };
    this.editingCatId = null;
  }
  closeCatPanel() {
    this.showCatPanel = false;
  }
  editCategorie(c) {
    this.editingCatId = c.id;
    this.catForm = { nom: c.nom, description: c.description || "", couleur: c.couleur || "#E8622A", icone: c.icone || "\u{1F4C1}" };
  }
  submitCategorie() {
    if (!this.catForm.nom)
      return;
    if (this.editingCatId) {
      this.ressourceService.updateCategorieHttp(this.editingCatId, this.catForm).subscribe({
        next: () => {
          this.editingCatId = null;
          this.catForm = { nom: "", description: "", couleur: "#E8622A", icone: "\u{1F4C1}" };
          this.loadCategories();
        },
        error: () => this.loadCategories()
      });
    } else {
      this.ressourceService.createCategorieHttp(this.catForm).subscribe({
        next: () => {
          this.catForm = { nom: "", description: "", couleur: "#E8622A", icone: "\u{1F4C1}" };
          this.loadCategories();
        },
        error: () => this.loadCategories()
      });
    }
  }
  deleteCategorie(c) {
    if (!confirm(`Delete category "${c.nom}"?`))
      return;
    this.ressourceService.deleteCategorieHttp(c.id).subscribe({ next: () => this.loadCategories(), error: () => this.loadCategories() });
  }
  getAccessBadge(a) {
    return a === "FREE" ? "kh-badge--green" : a === "PREMIUM" ? "kh-badge--amber" : "kh-badge--violet";
  }
  getProgressColor(s) {
    return s === "COMPLETED" ? "var(--green)" : s === "IN_PROGRESS" ? "var(--teal)" : "var(--text-muted)";
  }
  static {
    this.\u0275fac = function AdminBibliothequeComponent_Factory(t) {
      return new (t || _AdminBibliothequeComponent)(\u0275\u0275directiveInject(RessourceService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBibliothequeComponent, selectors: [["app-admin-bibliotheque"]], decls: 83, vars: 27, consts: [["fileInput", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "header-actions"], [1, "kh-btn", "kh-btn--ghost", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "view-toggle"], [3, "click"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "kpi-row", "animate-2"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-value", 2, "color", "var(--green)"], [1, "kpi-value", 2, "color", "var(--teal)"], [1, "kpi-value", 2, "color", "var(--violet)"], [1, "kpi-value", 2, "color", "#E84A4A"], [1, "filters", "animate-2"], [1, "search-box"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search by title\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "filter-chips"], [1, "tab", 3, "click"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["class", "table-wrap animate-3", 4, "ngIf"], ["class", "folders-view animate-3", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "table-wrap", "animate-3"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "res-name-cell"], [1, "res-type-icon"], [2, "font-weight", "600", "font-size", "13px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [1, "kh-badge", "kh-badge--gray"], [1, "kh-badge"], ["class", "cat-chip", 3, "borderColor", "color", 4, "ngIf"], ["style", "color:var(--text-muted);font-size:12px", 4, "ngIf"], ["class", "res-tags", 4, "ngIf"], [2, "font-size", "12px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "status-toggle", 3, "click"], [1, "actions"], ["title", "Edit", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["class", "kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon", "title", "Download", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6M14 11v6"], [1, "cat-chip"], [2, "color", "var(--text-muted)", "font-size", "12px"], [1, "res-tags"], ["class", "res-tag", 4, "ngFor", "ngForOf"], [1, "res-tag"], ["title", "Download", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["colspan", "9", 2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "folders-view", "animate-3"], [1, "folder-row", 3, "click"], [1, "folder-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "folder-info"], [1, "folder-name"], [1, "folder-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "folder-chevron"], ["points", "9 18 15 12 9 6"], ["class", "folder-files", 4, "ngIf"], [1, "folder-files"], ["class", "folder-file-row", 4, "ngFor", "ngForOf"], [1, "folder-file-row"], [1, "folder-file-icon"], [1, "folder-file-info"], [1, "folder-file-name"], [1, "folder-file-meta"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "solo-label", 4, "ngIf"], ["class", "folder-file-row solo-row", 4, "ngFor", "ngForOf"], [1, "solo-label"], [1, "folder-file-row", "solo-row"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["class", "kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon", 3, "click", 4, "ngIf"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "kh-btn--icon", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", "kh-card", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["class", "form-success-banner", 4, "ngIf"], ["class", "form-error-banner", 4, "ngIf"], [1, "form-grid"], [1, "form-group", "full"], [1, "req"], ["type", "text", "placeholder", "ex. Guide Business Plan 2024", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["rows", "3", "placeholder", "Br\xE8ve description\u2026", 3, "ngModelChange", "ngModel"], [1, "form-group"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "FREE"], ["value", "PREMIUM"], ["value", "INSTITUTIONAL"], [3, "ngValue"], ["type", "text", "placeholder", "BMC, Finance (comma separated)", 3, "ngModelChange", "ngModel"], ["class", "form-group full", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 4, "ngIf"], [1, "form-success-banner"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "form-error-banner"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "field-error"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [3, "value"], ["class", "label-hint", 4, "ngIf"], ["class", "req", 4, "ngIf"], [1, "file-upload-zone", 3, "click"], ["type", "file", 2, "display", "none", 3, "change", "multiple", "accept"], ["class", "file-list", 4, "ngIf"], ["class", "file-add-more", 4, "ngIf"], ["class", "course-name-field", 4, "ngIf"], [1, "label-hint"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "file-hint"], [1, "file-list"], ["class", "file-list-item", 4, "ngFor", "ngForOf"], [1, "file-list-item"], [1, "file-list-icon"], [1, "file-list-name"], [1, "file-list-size"], [1, "file-list-remove", 3, "click"], [1, "file-add-more"], [1, "course-name-field"], [1, "course-name-icon"], [1, "course-name-body"], ["type", "text", "placeholder", "e.g. Introduction to Entrepreneurship", 1, "course-name-input", 3, "ngModelChange", "ngModel"], [1, "course-name-hint"], ["type", "url", "placeholder", "https://example.com/resource", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "e.g. 2700 = 45 min", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "e.g. 45", "min", "1", 3, "ngModelChange", "ngModel"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], [1, "modal-box", "kh-card", 2, "max-width", "560px", 3, "click"], [1, "cat-form"], ["type", "text", "placeholder", "Category name *", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Icon e.g. \u{1F4C1}", 2, "width", "80px", "text-align", "center", 3, "ngModelChange", "ngModel"], ["type", "color", 2, "width", "44px", "height", "36px", "padding", "2px", "border-radius", "6px", "border", "1px solid var(--border)", "cursor", "pointer", 3, "ngModelChange", "ngModel"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 3, "click", "disabled"], ["class", "kh-btn kh-btn--ghost kh-btn--sm", 3, "click", 4, "ngIf"], [1, "cat-list"], ["class", "cat-list-row", 4, "ngFor", "ngForOf"], ["style", "text-align:center;color:var(--text-muted);padding:20px", 4, "ngIf"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "cat-list-row"], [1, "cat-color-dot"], [1, "cat-icon"], [1, "cat-name"], [1, "actions", 2, "margin-left", "auto"], [2, "text-align", "center", "color", "var(--text-muted)", "padding", "20px"], [1, "confirm-box", "kh-card", 3, "click"], [1, "confirm-icon"], [1, "confirm-actions"], [1, "kh-btn", "kh-btn--danger", 3, "click"]], template: function AdminBibliothequeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Resource Library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_8_listener() {
          return ctx.openCatPanel();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 7);
        \u0275\u0275element(10, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Categories ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_13_listener() {
          return ctx.view = "table";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 7);
        \u0275\u0275element(15, "line", 11)(16, "line", 12)(17, "line", 13)(18, "line", 14)(19, "line", 15)(20, "line", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " List ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "button", 10);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_22_listener() {
          return ctx.view = "folders";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 7);
        \u0275\u0275element(24, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Folders ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "button", 17);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_26_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 18);
        \u0275\u0275element(28, "line", 19)(29, "line", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Add Resource ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "p", 23);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 24);
        \u0275\u0275text(36, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 22)(38, "p", 25);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 24);
        \u0275\u0275text(41, "Free");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 22)(43, "p", 26);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p", 24);
        \u0275\u0275text(46, "Premium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 22)(48, "p", 27);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p", 24);
        \u0275\u0275text(51, "Institutional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 22)(53, "p", 28);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 24);
        \u0275\u0275text(56, "PDFs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 22)(58, "p", 27);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p", 24);
        \u0275\u0275text(61, "Videos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 29)(63, "div", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(64, "svg", 7);
        \u0275\u0275element(65, "circle", 31)(66, "path", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(67, "input", 33);
        \u0275\u0275twoWayListener("ngModelChange", function AdminBibliothequeComponent_Template_input_ngModelChange_67_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AdminBibliothequeComponent_Template_input_input_67_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 34)(69, "button", 35);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_69_listener() {
          ctx.filterType = "ALL";
          return ctx.load();
        });
        \u0275\u0275text(70, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 35);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_71_listener() {
          ctx.filterType = "PDF";
          return ctx.load();
        });
        \u0275\u0275text(72, "\u{1F4C4} PDF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "button", 35);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_73_listener() {
          ctx.filterType = "VIDEO";
          return ctx.load();
        });
        \u0275\u0275text(74, "\u{1F3A5} Video");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "button", 35);
        \u0275\u0275listener("click", function AdminBibliothequeComponent_Template_button_click_75_listener() {
          ctx.filterType = "EXCEL";
          return ctx.load();
        });
        \u0275\u0275text(76, "\u{1F4CA} Excel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(77, AdminBibliothequeComponent_div_77_Template, 2, 0, "div", 36)(78, AdminBibliothequeComponent_div_78_Template, 25, 2, "div", 37)(79, AdminBibliothequeComponent_div_79_Template, 3, 2, "div", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275template(80, AdminBibliothequeComponent_div_80_Template, 69, 34, "div", 39)(81, AdminBibliothequeComponent_div_81_Template, 18, 8, "div", 39)(82, AdminBibliothequeComponent_div_82_Template, 16, 1, "div", 39);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.stats.totalRessources || 0, " total \u2014 ", ctx.stats.ressourcesPubliees || 0, " published");
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.view === "table");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.view === "folders");
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats.totalRessources || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats.free || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats.premium || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats.institutional || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((ctx.stats.parType == null ? null : ctx.stats.parType.PDF) || 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((ctx.stats.parType == null ? null : ctx.stats.parType.VIDEO) || 0);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "ALL");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "PDF");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "VIDEO");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filterType === "EXCEL");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "table" && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "folders" && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCatPanel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDeleteConfirm);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 90px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 8px 14px;\n  max-width: 360px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  flex: 1;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  text-align: left;\n  white-space: nowrap;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  border-top: 1px solid var(--border);\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.015);\n}\n.res-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.res-type-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid;\n  transition: all 0.2s;\n  background: var(--bg-app);\n  border-color: var(--border);\n  color: var(--text-muted);\n}\n.status-toggle.published[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  border-color: #3B6D11;\n  color: #27500A;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.res-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.res-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.cat-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1px solid currentColor;\n  background: transparent;\n  white-space: nowrap;\n}\n.kh-progress[_ngcontent-%COMP%] {\n  background: var(--border);\n  border-radius: 99px;\n  overflow: hidden;\n  height: 5px;\n  flex-shrink: 0;\n}\n.kh-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.3s ease;\n}\n.prog-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.prog-pct-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.filter-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  align-self: center;\n  white-space: nowrap;\n}\n.filter-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 18px;\n  background: var(--border);\n  align-self: center;\n  flex-shrink: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 28px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: var(--text-muted);\n  padding: 4px 8px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  outline: none;\n  font-family: inherit;\n  background: white;\n  color: var(--text-primary);\n  transition: border-color 0.2s;\n  width: 100%;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--orange);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.file-upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border);\n  border-radius: var(--radius-md);\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n}\n.file-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  background: rgba(232, 98, 42, 0.03);\n}\n.file-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.file-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.file-size[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 400;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--orange);\n}\n.checkbox-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 400;\n  margin-left: 4px;\n}\n.confirm-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  padding: 32px;\n  text-align: center;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n.confirm-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.confirm-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n  line-height: 1.55;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.label-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--teal);\n  margin-left: 6px;\n}\n.file-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n}\n.file-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  background: var(--bg-app);\n  border-radius: 6px;\n  border: 1px solid var(--border);\n}\n.file-list-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.file-list-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-list-size[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.file-list-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 13px;\n  padding: 0 2px;\n  line-height: 1;\n  transition: color 0.15s;\n  flex-shrink: 0;\n}\n.file-list-remove[_ngcontent-%COMP%]:hover {\n  color: #E84A4A;\n}\n.file-add-more[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 8px;\n  display: block;\n  text-align: center;\n}\n.batch-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--teal);\n  font-weight: 600;\n  margin-top: 6px;\n  padding: 6px 10px;\n  background: rgba(42, 191, 191, 0.08);\n  border-radius: 6px;\n}\n.course-name-field[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 14px;\n  background: rgba(42, 191, 191, 0.06);\n  border: 1px solid rgba(42, 191, 191, 0.3);\n  border-radius: var(--radius-md);\n  margin-top: 10px;\n}\n.course-name-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.course-name-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.course-name-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--teal);\n}\n.course-name-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid rgba(42, 191, 191, 0.4);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  outline: none;\n  font-family: inherit;\n  background: white;\n  color: var(--text-primary);\n  transition: border-color 0.2s;\n  width: 100%;\n}\n.course-name-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--teal);\n}\n.course-name-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.course-name-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--teal);\n  font-weight: 600;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n  background: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n}\n.folders-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.folder-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.folder-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  background: #FFF8F5;\n}\n.folder-icon[_ngcontent-%COMP%] {\n  color: var(--orange);\n  flex-shrink: 0;\n}\n.folder-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.folder-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n}\n.folder-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 2px 8px;\n}\n.folder-chevron[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.folder-chevron.open[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.folder-files[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  border-left: 2px solid var(--border);\n  padding-left: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-bottom: 8px;\n}\n.folder-file-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  transition: all 0.15s;\n}\n.folder-file-row[_ngcontent-%COMP%]:hover {\n  background: #FAFAF8;\n}\n.folder-file-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.folder-file-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.folder-file-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.folder-file-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.solo-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  padding: 8px 4px 4px;\n}\n.solo-row[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.cat-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border);\n  flex-wrap: wrap;\n}\n.cat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.cat-list-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: var(--bg-app);\n  border-radius: var(--radius-sm);\n}\n.cat-color-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.cat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--red);\n  margin-left: 2px;\n}\n.has-error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: var(--red) !important;\n  box-shadow: 0 0 0 3px rgba(232, 74, 74, 0.12) !important;\n  background: rgba(232, 74, 74, 0.03) !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--red);\n  margin-top: 4px;\n  animation: fadeInUp 0.15s ease;\n}\n.field-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(232, 74, 74, 0.08);\n  border: 1px solid rgba(232, 74, 74, 0.25);\n  border-radius: var(--r-md);\n  color: var(--red);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  animation: fadeInUp 0.2s ease;\n}\n.form-success-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(39, 174, 122, 0.08);\n  border: 1px solid rgba(39, 174, 122, 0.25);\n  border-radius: var(--r-md);\n  color: var(--green);\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  animation: fadeInUp 0.2s ease;\n}\n/*# sourceMappingURL=bibliotheque.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBibliothequeComponent, { className: "AdminBibliothequeComponent", filePath: "app\\features\\admin\\bibliotheque\\bibliotheque.component.ts", lineNumber: 9 });
})();

// src/app/features/admin/utilisateurs/utilisateurs.component.ts
function AdminUtilisateursComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 17)(16, "button", 18);
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275text(19, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r1.prenom, " ", u_r1.nom, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(u_r1.role === "admin" ? "kh-badge--orange" : u_r1.role === "entrepreneur" ? "kh-badge--teal" : "kh-badge--violet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(u_r1.status === "ACTIVE" ? "kh-badge--green" : "kh-badge--gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.createdAt);
  }
}
var AdminUtilisateursComponent = class _AdminUtilisateursComponent {
  constructor() {
    this.filtre = "all";
    this.search = "";
    this.users = [
      { id: "u1", nom: "Bensalem", prenom: "Karim", email: "admin@khotwa.tn", role: "admin", status: "ACTIVE", createdAt: "2024-01-01" },
      { id: "u2", nom: "Trabelsi", prenom: "Sara", email: "sara@startup.tn", role: "entrepreneur", status: "ACTIVE", createdAt: "2024-02-15" },
      { id: "u3", nom: "Mansouri", prenom: "Ahmed", email: "ahmed@coach.tn", role: "coach", status: "ACTIVE", createdAt: "2024-03-01" },
      { id: "u4", nom: "Ben Ali", prenom: "Nadia", email: "nadia@edu.tn", role: "entrepreneur", status: "inactif", createdAt: "2024-04-10" },
      { id: "u5", nom: "Chaabane", prenom: "Omar", email: "omar@agri.tn", role: "entrepreneur", status: "ACTIVE", createdAt: "2024-05-20" }
    ];
  }
  get filteredUsers() {
    let l = this.users;
    if (this.filtre !== "all")
      l = l.filter((u) => u.role === this.filtre);
    if (this.search)
      l = l.filter((u) => (u.nom + " " + u.prenom + " " + u.email).toLowerCase().includes(this.search.toLowerCase()));
    return l;
  }
  static {
    this.\u0275fac = function AdminUtilisateursComponent_Factory(t) {
      return new (t || _AdminUtilisateursComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUtilisateursComponent, selectors: [["app-admin-utilisateurs"]], decls: 41, vars: 11, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026", 3, "ngModelChange", "ngModel"], [1, "tab", 3, "click"], [1, "table-wrap", "animate-3"], [4, "ngFor", "ngForOf"], [2, "color", "var(--text-secondary)"], [1, "kh-badge"], [2, "color", "var(--text-muted)"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"]], template: function AdminUtilisateursComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "User Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Invite user");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 7);
        \u0275\u0275element(12, "circle", 8)(13, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminUtilisateursComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 11);
        \u0275\u0275listener("click", function AdminUtilisateursComponent_Template_button_click_15_listener() {
          return ctx.filtre = "all";
        });
        \u0275\u0275text(16, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275listener("click", function AdminUtilisateursComponent_Template_button_click_17_listener() {
          return ctx.filtre = "admin";
        });
        \u0275\u0275text(18, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function AdminUtilisateursComponent_Template_button_click_19_listener() {
          return ctx.filtre = "entrepreneur";
        });
        \u0275\u0275text(20, "Entrepreneurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275listener("click", function AdminUtilisateursComponent_Template_button_click_21_listener() {
          return ctx.filtre = "coach";
        });
        \u0275\u0275text(22, "Coachs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12)(24, "table")(25, "thead")(26, "tr")(27, "th");
        \u0275\u0275text(28, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Registered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275template(40, AdminUtilisateursComponent_tr_40_Template, 20, 10, "tr", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredUsers.length, " user(s)");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.filtre === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "admin");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "entrepreneur");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "coach");
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.filteredUsers);
      }
    }, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 7px 12px;\n  font-family: inherit;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  font-family: inherit;\n  min-width: 180px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 22px;\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n  box-shadow: var(--shadow-card);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.card-progress[_ngcontent-%COMP%] {\n  margin: 14px 0 8px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 0 auto 12px;\n  display: block;\n  opacity: 0.3;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  text-align: left;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  font-size: 13px;\n  border-top: 1px solid var(--border);\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.015);\n}\n/*# sourceMappingURL=utilisateurs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUtilisateursComponent, { className: "AdminUtilisateursComponent", filePath: "app\\features\\admin\\utilisateurs\\utilisateurs.component.ts", lineNumber: 3 });
})();

// src/app/features/admin/evenements/evenements.component.ts
function AdminEvenementsComponent_div_21_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ev_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (ev_r1.places - ev_r1.restantes) / ev_r1.places * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ev_r1.places - ev_r1.restantes, "/", ev_r1.places, " registered");
  }
}
function AdminEvenementsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminEvenementsComponent_div_21_ng_container_12_Template, 5, 4, "ng-container", 15);
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "button", 18);
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 19);
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ev_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ev_r1.type === "pitch" ? "kh-badge--orange" : ev_r1.type === "webinar" ? "kh-badge--teal" : ev_r1.type === "formation" ? "kh-badge--violet" : "kh-badge--green");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r1.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ev_r1.restantes === 0 ? "kh-badge--red" : ev_r1.restantes < 5 ? "kh-badge--amber" : "kh-badge--gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r1.restantes === 0 ? "Full" : ev_r1.restantes + " spots");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\u{1F4C5} ", ev_r1.date, " \xB7 ", ev_r1.heure, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F3A4} ", ev_r1.intervenant, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ev_r1.restantes > 0);
  }
}
var AdminEvenementsComponent = class _AdminEvenementsComponent {
  constructor() {
    this.filtre = "all";
    this.events = [
      { id: "ev1", titre: "Atelier Pitch Day", type: "pitch", date: "2024-12-10", heure: "14h00", intervenant: "Dr. Ben Salem", places: 30, restantes: 8 },
      { id: "ev2", titre: "Webinar BMC", type: "webinar", date: "2024-12-15", heure: "10h00", intervenant: "Sara Coach", places: 50, restantes: 0 },
      { id: "ev3", titre: "Training Design Thinking", type: "formation", date: "2024-12-20", heure: "09h00", intervenant: "Ahmed Mansouri", places: 20, restantes: 5 },
      { id: "ev4", titre: "Group Coaching Session", type: "coaching", date: "2025-01-08", heure: "15h00", intervenant: "KHOTWA Team", places: 15, restantes: 12 }
    ];
  }
  get filteredEvents() {
    return this.filtre === "all" ? this.events : this.events.filter((e) => e.type === this.filtre);
  }
  static {
    this.\u0275fac = function AdminEvenementsComponent_Factory(t) {
      return new (t || _AdminEvenementsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEvenementsComponent, selectors: [["app-admin-evenements"]], decls: 22, vars: 12, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "filters", "animate-2"], [1, "tab", 3, "click"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "14px"], [1, "kh-badge"], [1, "card-name"], [1, "card-meta", 2, "margin-top", "6px"], [1, "card-meta"], [4, "ngIf"], [1, "card-footer"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"], [1, "kh-progress", 2, "margin", "14px 0 4px"], [1, "kh-progress__fill"], [2, "font-size", "11px", "color", "var(--text-muted)"]], template: function AdminEvenementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Events & Workshops");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Create event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function AdminEvenementsComponent_Template_button_click_10_listener() {
          return ctx.filtre = "all";
        });
        \u0275\u0275text(11, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function AdminEvenementsComponent_Template_button_click_12_listener() {
          return ctx.filtre = "pitch";
        });
        \u0275\u0275text(13, "Pitch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function AdminEvenementsComponent_Template_button_click_14_listener() {
          return ctx.filtre = "webinar";
        });
        \u0275\u0275text(15, "Webinar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 6);
        \u0275\u0275listener("click", function AdminEvenementsComponent_Template_button_click_16_listener() {
          return ctx.filtre = "formation";
        });
        \u0275\u0275text(17, "Formation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 6);
        \u0275\u0275listener("click", function AdminEvenementsComponent_Template_button_click_18_listener() {
          return ctx.filtre = "coaching";
        });
        \u0275\u0275text(19, "Coaching");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275template(21, AdminEvenementsComponent_div_21_Template, 19, 11, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredEvents.length, " event(s)");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.filtre === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "pitch");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "webinar");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "formation");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "coaching");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.filteredEvents);
      }
    }, dependencies: [NgForOf, NgIf], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 22px;\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n  box-shadow: var(--shadow-card);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n/*# sourceMappingURL=evenements.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEvenementsComponent, { className: "AdminEvenementsComponent", filePath: "app\\features\\admin\\evenements\\evenements.component.ts", lineNumber: 3 });
})();

// src/app/features/admin/abonnements/abonnements.component.ts
function AdminSubscriptionsComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 17)(19, "button", 18);
    \u0275\u0275text(20, "Renouveler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275text(22, "Suspendre");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.user);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(a_r1.plan === "PREMIUM" ? "kh-badge--orange" : a_r1.plan === "INSTITUTIONAL" ? "kh-badge--violet" : "kh-badge--gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.plan);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(a_r1.status === "ACTIVE" ? "kh-badge--green" : "kh-badge--red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.debut);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", a_r1.status === "EXPIRED" ? "var(--red)" : "var(--text-secondary)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.fin);
  }
}
var AdminSubscriptionsComponent = class _AdminSubscriptionsComponent {
  constructor() {
    this.filtre = "all";
    this.abonnements = [
      { id: "a1", user: "Sara Trabelsi", email: "sara@startup.tn", plan: "PREMIUM", status: "ACTIVE", debut: "2024-09-01", fin: "2025-09-01" },
      { id: "a2", user: "Omar Chaabane", email: "omar@agri.tn", plan: "FREE", status: "ACTIVE", debut: "2024-10-15", fin: "2025-10-15" },
      { id: "a3", user: "Nadia Ben Ali", email: "nadia@edu.tn", plan: "INSTITUTIONAL", status: "EXPIRED", debut: "2023-11-01", fin: "2024-11-01" },
      { id: "a4", user: "Hedi Slim", email: "hedi@btp.tn", plan: "PREMIUM", status: "ACTIVE", debut: "2024-08-01", fin: "2025-08-01" }
    ];
  }
  get filteredSubscriptions() {
    return this.filtre === "all" ? this.abonnements : this.abonnements.filter((a) => a.plan === this.filtre);
  }
  static {
    this.\u0275fac = function AdminSubscriptionsComponent_Factory(t) {
      return new (t || _AdminSubscriptionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSubscriptionsComponent, selectors: [["app-admin-abonnements"]], decls: 57, vars: 10, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "kpi-row", "animate-2"], [1, "mini-kpi"], [1, "mini-kpi__val"], [1, "mini-kpi__label"], [1, "mini-kpi", "mini-kpi--red"], [1, "filters", "animate-3"], [1, "tab", 3, "click"], [1, "table-wrap", "animate-4"], [4, "ngFor", "ngForOf"], [2, "color", "var(--text-muted)", "font-size", "11px"], [1, "kh-badge"], [2, "color", "var(--text-secondary)"], [1, "actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm"]], template: function AdminSubscriptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Subscription Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Assign plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "span", 7);
        \u0275\u0275text(12, "12");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Active premium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
        \u0275\u0275text(17, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 8);
        \u0275\u0275text(19, "Free");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6)(21, "span", 7);
        \u0275\u0275text(22, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 8);
        \u0275\u0275text(24, "Institutional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "span", 7);
        \u0275\u0275text(27, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 8);
        \u0275\u0275text(29, "Expired this month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 10)(31, "button", 11);
        \u0275\u0275listener("click", function AdminSubscriptionsComponent_Template_button_click_31_listener() {
          return ctx.filtre = "all";
        });
        \u0275\u0275text(32, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 11);
        \u0275\u0275listener("click", function AdminSubscriptionsComponent_Template_button_click_33_listener() {
          return ctx.filtre = "FREE";
        });
        \u0275\u0275text(34, "Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 11);
        \u0275\u0275listener("click", function AdminSubscriptionsComponent_Template_button_click_35_listener() {
          return ctx.filtre = "PREMIUM";
        });
        \u0275\u0275text(36, "Premium");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 11);
        \u0275\u0275listener("click", function AdminSubscriptionsComponent_Template_button_click_37_listener() {
          return ctx.filtre = "INSTITUTIONAL";
        });
        \u0275\u0275text(38, "Institutional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 12)(40, "table")(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "End");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275template(56, AdminSubscriptionsComponent_tr_56_Template, 23, 12, "tr", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredSubscriptions.length, " subscription(s)");
        \u0275\u0275advance(25);
        \u0275\u0275classProp("active", ctx.filtre === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "FREE");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "PREMIUM");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filtre === "INSTITUTIONAL");
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.filteredSubscriptions);
      }
    }, dependencies: [NgForOf], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.mini-kpi[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 130px;\n}\n.mini-kpi--red[_ngcontent-%COMP%] {\n  border-color: rgba(232, 74, 74, 0.3);\n  background: rgba(232, 74, 74, 0.05);\n}\n.mini-kpi__val[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 24px;\n  font-weight: 800;\n}\n.mini-kpi__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  background: var(--bg-app);\n  text-align: left;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  font-size: 13px;\n  border-top: 1px solid var(--border);\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.015);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n/*# sourceMappingURL=abonnements.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSubscriptionsComponent, { className: "AdminSubscriptionsComponent", filePath: "app\\features\\admin\\abonnements\\abonnements.component.ts", lineNumber: 3 });
})();

// src/app/features/admin/talent/talent.component.ts
function AdminTalentComponent_div_14_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
function AdminTalentComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275template(12, AdminTalentComponent_div_14_div_1_span_12_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 19)(15, "span", 20);
    \u0275\u0275text(16, "Score global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275element(20, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24)(22, "button", 25);
    \u0275\u0275text(23, "Contacter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 26);
    \u0275\u0275text(25, "Profil");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.nom[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.poste);
    \u0275\u0275advance();
    \u0275\u0275classMap(t_r2.disponible ? "kh-badge--green" : "kh-badge--gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.disponible ? "Available" : "Unavailable");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", t_r2.competences);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", t_r2.score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", t_r2.score, "%");
  }
}
function AdminTalentComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, AdminTalentComponent_div_14_div_1_Template, 26, 10, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.talents);
  }
}
function AdminTalentComponent_div_15_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function AdminTalentComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275template(11, AdminTalentComponent_div_15_div_1_span_11_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275text(13, "View applications");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(a_r5.type === "cofondateur" ? "kh-badge--orange" : a_r5.type === "stagiaire" ? "kh-badge--teal" : "kh-badge--green");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", a_r5.match, "% match");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.poste);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.startup);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", a_r5.competences);
  }
}
function AdminTalentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, AdminTalentComponent_div_15_div_1_Template, 14, 7, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.annonces);
  }
}
var AdminTalentComponent = class _AdminTalentComponent {
  constructor() {
    this.view = "talents";
    this.talents = [
      { id: "t1", nom: "Karim Dridi", poste: "Full Stack Developer", competences: ["Angular", "Node.js", "MongoDB"], score: 92, disponible: true },
      { id: "t2", nom: "Amira Saidi", poste: "Designer UX/UI", competences: ["Figma", "Adobe XD", "CSS"], score: 88, disponible: true },
      { id: "t3", nom: "Youssef Ben Hmida", poste: "Data Scientist", competences: ["Python", "TensorFlow", "SQL"], score: 75, disponible: false },
      { id: "t4", nom: "Sonia Mhiri", poste: "Marketing Digital", competences: ["SEO", "Google Ads", "Analytics"], score: 81, disponible: true }
    ];
    this.annonces = [
      { id: "a1", startup: "EduTech Pro", poste: "Co-fondateur CTO", type: "cofondateur", competences: ["React", "AWS"], match: 92 },
      { id: "a2", startup: "HealthMobile", poste: "Stagiaire iOS Dev", type: "stagiaire", competences: ["Swift", "UIKit"], match: 75 }
    ];
  }
  static {
    this.\u0275fac = function AdminTalentComponent_Factory(t) {
      return new (t || _AdminTalentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTalentComponent, selectors: [["app-admin-talent"]], decls: 16, vars: 8, consts: [[1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary"], [1, "tabs", "animate-2"], [1, "tab", 3, "click"], ["class", "grid animate-3", 4, "ngIf"], [1, "grid", "animate-3"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "talent-header"], [1, "talent-avatar"], [1, "card-name", 2, "font-size", "14px"], [1, "card-meta"], [1, "kh-badge", 2, "margin-left", "auto"], [1, "skills"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "14px"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "5px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [2, "font-size", "12px", "color", "var(--orange)"], [1, "kh-progress"], [1, "kh-progress__fill"], [2, "margin-top", "14px", "padding-top", "12px", "border-top", "1px solid var(--border)", "display", "flex", "gap", "8px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm"], [1, "skill-tag"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "margin-bottom", "12px"], [1, "kh-badge"], [1, "score-badge"], [1, "card-name"], [1, "skills", 2, "margin-top", "10px"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 2, "margin-top", "14px", "width", "100%", "justify-content", "center"]], template: function AdminTalentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Talent Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Connect startups with talent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275text(8, "+ Post listing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function AdminTalentComponent_Template_button_click_10_listener() {
          return ctx.view = "talents";
        });
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function AdminTalentComponent_Template_button_click_12_listener() {
          return ctx.view = "annonces";
        });
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, AdminTalentComponent_div_14_Template, 2, 1, "div", 7)(15, AdminTalentComponent_div_15_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.view === "talents");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\u{1F464} Talents (", ctx.talents.length, ")");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.view === "annonces");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\u{1F4CB} Annonces (", ctx.annonces.length, ")");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "talents");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "annonces");
      }
    }, dependencies: [NgForOf, NgIf], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  background: white;\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  transition: all 0.15s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n  box-shadow: var(--shadow-card);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-hover);\n  transform: translateY(-2px);\n}\n.talent-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.talent-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #E8622A,\n      #FF9A5C);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  background: var(--orange-light);\n  color: var(--orange);\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.score-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      #FF9A5C);\n  color: white;\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=talent.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTalentComponent, { className: "AdminTalentComponent", filePath: "app\\features\\admin\\talent\\talent.component.ts", lineNumber: 3 });
})();

// src/app/features/admin/admin.module.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: AdminDashboardComponent },
      { path: "projets", component: AdminProjetsComponent },
      { path: "planning", component: AdminPlanningComponent },
      { path: "messages", component: AdminMessagesComponent },
      { path: "bibliotheque", component: AdminBibliothequeComponent },
      { path: "utilisateurs", component: AdminUtilisateursComponent },
      { path: "evenements", component: AdminEvenementsComponent },
      { path: "abonnements", component: AdminSubscriptionsComponent },
      { path: "talent", component: AdminTalentComponent }
    ]
  }
];
var AdminModule = class _AdminModule {
  static {
    this.\u0275fac = function AdminModule_Factory(t) {
      return new (t || _AdminModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, LayoutModule, RouterModule.forChild(routes)] });
  }
};
export {
  AdminModule
};
//# sourceMappingURL=chunk-YQXRZSUQ.js.map
