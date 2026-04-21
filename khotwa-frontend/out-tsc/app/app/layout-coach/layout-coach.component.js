import { Component, HostListener } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/auth.service";
import * as i2 from "../core/services/notification.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
function LayoutCoachComponent_a_12_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 40);
} }
function LayoutCoachComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 37);
    i0.ɵɵelement(1, "span", 38);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, LayoutCoachComponent_a_12_span_4_Template, 1, 0, "span", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("coach-link--active", ctx_r1.isActive(item_r1.route));
    i0.ɵɵproperty("routerLink", ctx_r1.getRoute(item_r1.route));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.getIcon(item_r1.icon), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isActive(item_r1.route));
} }
function LayoutCoachComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.nonLus);
} }
function LayoutCoachComponent_div_23_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵlistener("click", function LayoutCoachComponent_div_23_div_6_Template_div_click_0_listener() { const n_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.notifService.markRead(n_r5.id)); });
    i0.ɵɵelement(1, "div", 47);
    i0.ɵɵelementStart(2, "div")(3, "p", 48);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 49);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const n_r5 = ctx.$implicit;
    i0.ɵɵclassProp("unread", !n_r5.lu);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("dot-" + n_r5.type);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(n_r5.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(n_r5.message);
} }
function LayoutCoachComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43)(2, "span");
    i0.ɵɵtext(3, "Notifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function LayoutCoachComponent_div_23_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.notifService.markAllRead(); return i0.ɵɵresetView(ctx_r1.notifOpen = false); });
    i0.ɵɵtext(5, "Tout lire");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LayoutCoachComponent_div_23_div_6_Template, 7, 6, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.notifs);
} }
function LayoutCoachComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 51)(2, "p", 52);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 53);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 54);
    i0.ɵɵlistener("click", function LayoutCoachComponent_div_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵelement(7, "span", 17);
    i0.ɵɵtext(8, "D\u00E9connexion ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.firstName, " ", ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.lastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.getIcon("logout"), i0.ɵɵsanitizeHtml);
} }
function LayoutCoachComponent_a_42_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 55);
    i0.ɵɵlistener("click", function LayoutCoachComponent_a_42_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mobileOpen = false); });
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.isActive(item_r8.route));
    i0.ɵɵproperty("routerLink", ctx_r1.getRoute(item_r8.route));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.getIcon(item_r8.icon), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.label, " ");
} }
function LayoutCoachComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵlistener("click", function LayoutCoachComponent_div_43_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mobileOpen = false); });
    i0.ɵɵelementEnd();
} }
export class LayoutCoachComponent {
    constructor(auth, notifService, router) {
        this.auth = auth;
        this.notifService = notifService;
        this.router = router;
        this.notifOpen = false;
        this.mobileOpen = false;
        this.userMenuOpen = false;
        this.currentUrl = '';
        this.scrolled = false;
        this.navItems = [
            { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
            { label: 'Collaborations', icon: 'people', route: 'collaborations' },
            { label: 'Projets', icon: 'folder', route: 'projets' },
            { label: 'Mes Startups', icon: 'rocket', route: 'startups' },
            { label: 'Validations', icon: 'check', route: 'validations' },
            { label: 'Messages', icon: 'message', route: 'messages' },
            { label: 'Bibliothèque', icon: 'book', route: 'bibliotheque' },
            { label: 'Progression', icon: 'progress', route: 'progressions' },
            { label: 'Talent', icon: 'people', route: 'talent' },
        ];
        this.svgIcons = {
            dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
            folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
            rocket: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
            check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
            message: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
            book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
            progress: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
            people: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
            home: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
            logout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
        };
    }
    ngOnInit() {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e) => { this.currentUrl = e.url; });
        this.currentUrl = this.router.url;
        // Si le profil n'est pas encore chargé (firstName vide), le recharger
        if (!this.auth.currentUser?.firstName) {
            this.auth.refreshProfile().subscribe({ next: () => { }, error: () => { } });
        }
    }
    onScroll() { this.scrolled = window.scrollY > 10; }
    isActive(route) { return this.currentUrl.includes(`/${route}`); }
    getIcon(name) { return this.svgIcons[name] || ''; }
    getRoute(route) { return `/coach/${route}`; }
    logout() { this.auth.logout(); this.router.navigateByUrl('/'); }
    get nonLus() { return this.notifService.nonLus(); }
    get notifs() { return this.notifService.notifs(); }
    get userInitials() {
        const u = this.auth.currentUser;
        return `${u?.firstName?.[0] ?? ''}${u?.lastName?.[0] ?? ''}`;
    }
    static { this.ɵfac = function LayoutCoachComponent_Factory(t) { return new (t || LayoutCoachComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NotificationService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutCoachComponent, selectors: [["app-layout-coach"]], hostBindings: function LayoutCoachComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function LayoutCoachComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 49, vars: 21, consts: [[1, "coach-shell"], [1, "coach-nav"], [1, "coach-nav__inner"], ["routerLink", "/coach/dashboard", 1, "coach-brand"], [1, "coach-brand__icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "coach-brand__name"], [1, "coach-brand__tag"], [1, "coach-nav__links"], ["class", "coach-link", 3, "coach-link--active", "routerLink", 4, "ngFor", "ngForOf"], [1, "coach-nav__actions"], ["routerLink", "/coach/validations", "title", "Validations en attente", 1, "coach-quick-badge"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 11l3 3L22 4"], [1, "notif-wrapper"], [1, "coach-icon-btn", 3, "click"], [3, "innerHTML"], ["class", "coach-notif-dot", 4, "ngIf"], ["class", "coach-notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Accueil", 1, "coach-icon-btn"], [1, "coach-user", 3, "click"], [1, "coach-user__avatar"], [1, "coach-user__info"], [1, "coach-user__name"], [1, "coach-user__role"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "coach-user__caret"], ["d", "m6 9 6 6 6-6"], ["class", "coach-user__menu", 4, "ngIf"], [1, "coach-burger", 3, "click"], [1, "coach-mobile-nav"], ["class", "coach-mobile-link", 3, "active", "routerLink", "click", 4, "ngFor", "ngForOf"], ["class", "coach-overlay", 3, "click", 4, "ngIf"], [1, "coach-accent-bar"], [1, "coach-accent-bar__glow"], [1, "coach-main"], [1, "coach-content"], [1, "coach-link", 3, "routerLink"], [1, "coach-link__icon", 3, "innerHTML"], ["class", "coach-link__indicator", 4, "ngIf"], [1, "coach-link__indicator"], [1, "coach-notif-dot"], [1, "coach-notif-panel"], [1, "coach-notif-panel__head"], [3, "click"], ["class", "coach-notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "coach-notif-item", 3, "click"], [1, "coach-notif-dot-item"], [1, "coach-notif-title"], [1, "coach-notif-msg"], [1, "coach-user__menu"], [1, "coach-user__menu-header"], [1, "cmenu-name"], [1, "cmenu-email"], [1, "cmenu-item", "cmenu-item--logout", 3, "click"], [1, "coach-mobile-link", 3, "click", "routerLink"], [1, "coach-overlay", 3, "click"]], template: function LayoutCoachComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "path", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "span", 7);
            i0.ɵɵtext(8, "KHOTWA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵtext(10, "Coach");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "nav", 9);
            i0.ɵɵtemplate(12, LayoutCoachComponent_a_12_Template, 5, 6, "a", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 11)(14, "a", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(15, "svg", 13);
            i0.ɵɵelement(16, "path", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(17, "span");
            i0.ɵɵtext(18, "5");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 15)(20, "button", 16);
            i0.ɵɵlistener("click", function LayoutCoachComponent_Template_button_click_20_listener() { return ctx.notifOpen = !ctx.notifOpen; });
            i0.ɵɵelement(21, "span", 17);
            i0.ɵɵtemplate(22, LayoutCoachComponent_span_22_Template, 2, 1, "span", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, LayoutCoachComponent_div_23_Template, 7, 1, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "a", 20);
            i0.ɵɵelement(25, "span", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 21);
            i0.ɵɵlistener("click", function LayoutCoachComponent_Template_div_click_26_listener() { return ctx.userMenuOpen = !ctx.userMenuOpen; });
            i0.ɵɵelementStart(27, "div", 22);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 23)(30, "span", 24);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 25);
            i0.ɵɵtext(33, "Coach Expert");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(34, "svg", 26);
            i0.ɵɵelement(35, "path", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, LayoutCoachComponent_div_36_Template, 9, 4, "div", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(37, "button", 29);
            i0.ɵɵlistener("click", function LayoutCoachComponent_Template_button_click_37_listener() { return ctx.mobileOpen = !ctx.mobileOpen; });
            i0.ɵɵelement(38, "span")(39, "span")(40, "span");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 30);
            i0.ɵɵtemplate(42, LayoutCoachComponent_a_42_Template, 3, 5, "a", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(43, LayoutCoachComponent_div_43_Template, 1, 0, "div", 32);
            i0.ɵɵelementStart(44, "div", 33);
            i0.ɵɵelement(45, "div", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "main", 35)(47, "div", 36);
            i0.ɵɵelement(48, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("coach-nav--scrolled", ctx.scrolled);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.navItems);
            i0.ɵɵadvance(8);
            i0.ɵɵclassProp("active", ctx.notifOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHTML", ctx.getIcon("bell"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.nonLus > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.notifOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx.getIcon("home"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.userInitials);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName, " ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.lastName, "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("flipped", ctx.userMenuOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.userMenuOpen);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("open", ctx.mobileOpen);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("open", ctx.mobileOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.navItems);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mobileOpen);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i3.RouterOutlet, i3.RouterLink], styles: ["\n\n\n\n\n\n[_nghost-%COMP%] {\n  --coach-violet:       #7C5CBF;\n  --coach-violet-dark:  #5a3a9f;\n  --coach-violet-glow:  rgba(124,92,191,0.30);\n  --coach-violet-light: rgba(124,92,191,0.10);\n  --coach-deep:         #0C0818;\n  --coach-nav-h:        64px;\n}\n\n\n\n.coach-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #F5F2FC;\n}\n\n\n\n.coach-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  height: var(--coach-nav-h);\n  background: rgba(12,8,24,0.93);\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n  border-bottom: 1px solid rgba(124,92,191,0.18);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n.coach-nav--scrolled[_ngcontent-%COMP%] {\n  background: rgba(12,8,24,0.98);\n  box-shadow: 0 4px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,92,191,0.14);\n}\n\n.coach-nav__inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  gap: 0;\n}\n\n\n\n.coach-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  margin-right: 32px;\n  flex-shrink: 0;\n}\n.coach-brand__icon[_ngcontent-%COMP%] {\n  width: 34px; height: 34px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n  display: flex; align-items: center; justify-content: center;\n  box-shadow: 0 0 18px var(--coach-violet-glow);\n}\n.coach-brand__name[_ngcontent-%COMP%] {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  font-size: 15px; font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #EDE8F9;\n}\n.coach-brand__tag[_ngcontent-%COMP%] {\n  font-size: 9px; font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #B89EE0;\n  background: rgba(124,92,191,0.15);\n  border: 1px solid rgba(124,92,191,0.28);\n  border-radius: 6px;\n  padding: 2px 7px;\n}\n\n\n\n.coach-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n}\n\n.coach-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 13px; font-weight: 500;\n  color: rgba(220,210,240,0.45);\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n}\n.coach-link[_ngcontent-%COMP%]:hover {\n  color: rgba(220,210,240,0.92);\n  background: rgba(124,92,191,0.10);\n}\n.coach-link__icon[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: center;\n  width: 16px; flex-shrink: 0;\n  opacity: 0.55;\n  transition: opacity 0.18s;\n}\n.coach-link[_ngcontent-%COMP%]:hover   .coach-link__icon[_ngcontent-%COMP%] { opacity: 0.88; }\n\n.coach-link--active[_ngcontent-%COMP%] {\n  color: #C4A8FF !important;\n  background: rgba(124,92,191,0.18) !important;\n  font-weight: 600;\n}\n.coach-link--active[_ngcontent-%COMP%]   .coach-link__icon[_ngcontent-%COMP%] { opacity: 1; }\n\n.coach-link__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px; left: 50%;\n  transform: translateX(-50%);\n  width: 16px; height: 2px;\n  border-radius: 99px;\n  background: #B89EE0;\n  box-shadow: 0 0 10px var(--coach-violet);\n}\n\n\n\n.coach-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n\n\n.coach-quick-badge[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 5px;\n  padding: 5px 11px;\n  border-radius: 8px;\n  background: rgba(124,92,191,0.15);\n  border: 1px solid rgba(124,92,191,0.3);\n  color: #C4A8FF;\n  font-size: 12px; font-weight: 700;\n  text-decoration: none;\n  transition: all 0.18s;\n}\n.coach-quick-badge[_ngcontent-%COMP%]:hover {\n  background: rgba(124,92,191,0.25);\n  border-color: rgba(124,92,191,0.5);\n}\n\n.coach-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px; height: 36px;\n  border-radius: 9px;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(124,92,191,0.12);\n  color: rgba(220,210,240,0.55);\n  cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  transition: all 0.18s;\n  text-decoration: none;\n}\n.coach-icon-btn[_ngcontent-%COMP%]:hover, .coach-icon-btn.active[_ngcontent-%COMP%] {\n  background: rgba(124,92,191,0.14);\n  border-color: rgba(124,92,191,0.3);\n  color: #C4A8FF;\n}\n\n.notif-wrapper[_ngcontent-%COMP%] { position: relative; }\n.coach-notif-dot[_ngcontent-%COMP%] {\n  position: absolute; top: 3px; right: 3px;\n  width: 16px; height: 16px; border-radius: 50%;\n  background: #E84A4A; color: white;\n  font-size: 9px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid var(--coach-deep);\n}\n\n\n\n.coach-notif-panel[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 320px;\n  background: #130D1F;\n  border: 1px solid rgba(124,92,191,0.22);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(124,92,191,0.08);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.2s both;\n  z-index: 300;\n}\n.coach-notif-panel__head[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(124,92,191,0.14);\n  font-weight: 700; font-size: 13px; color: rgba(220,210,240,0.9);\n}\n.coach-notif-panel__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer;\n  font-size: 12px; color: #B89EE0; font-weight: 600;\n}\n.coach-notif-item[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);\n  cursor: pointer; transition: background 0.15s;\n}\n.coach-notif-item.unread[_ngcontent-%COMP%] { background: rgba(124,92,191,0.07); }\n.coach-notif-item[_ngcontent-%COMP%]:hover { background: rgba(124,92,191,0.12); }\n.coach-notif-dot-item[_ngcontent-%COMP%] { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }\n.coach-notif-title[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: rgba(220,210,240,0.9); }\n.coach-notif-msg[_ngcontent-%COMP%] { font-size: 11px; color: rgba(220,210,240,0.4); margin-top: 2px; }\n\n\n\n.coach-user[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex; align-items: center; gap: 9px;\n  padding: 5px 10px 5px 5px;\n  border-radius: 10px;\n  border: 1px solid rgba(124,92,191,0.18);\n  background: rgba(255,255,255,0.04);\n  cursor: pointer; transition: all 0.18s;\n  user-select: none;\n}\n.coach-user[_ngcontent-%COMP%]:hover {\n  background: rgba(124,92,191,0.10);\n  border-color: rgba(124,92,191,0.35);\n}\n.coach-user__avatar[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border-radius: 8px;\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n  display: flex; align-items: center; justify-content: center;\n  font-size: 11px; font-weight: 700; color: white; flex-shrink: 0;\n  box-shadow: 0 2px 8px var(--coach-violet-glow);\n}\n.coach-user__info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.coach-user__name[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: rgba(220,210,240,0.9); line-height: 1.2; }\n.coach-user__role[_ngcontent-%COMP%] { font-size: 10px; color: #B89EE0; font-weight: 600; letter-spacing: 0.03em; }\n.coach-user__caret[_ngcontent-%COMP%] { color: rgba(220,210,240,0.3); transition: transform 0.2s; }\n.coach-user__caret.flipped[_ngcontent-%COMP%] { transform: rotate(180deg); }\n\n.coach-user__menu[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 8px); right: 0;\n  min-width: 200px;\n  background: #130D1F;\n  border: 1px solid rgba(124,92,191,0.22);\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.55);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.18s both;\n  z-index: 300;\n}\n.coach-user__menu-header[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(124,92,191,0.12);\n}\n.cmenu-name[_ngcontent-%COMP%] { font-size: 13px; font-weight: 700; color: rgba(220,210,240,0.9); }\n.cmenu-email[_ngcontent-%COMP%] { font-size: 11px; color: rgba(220,210,240,0.4); margin-top: 2px; }\n.cmenu-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 9px;\n  width: 100%; padding: 11px 16px;\n  background: none; border: none; cursor: pointer;\n  font-size: 13px; font-weight: 500;\n  color: rgba(220,210,240,0.65);\n  transition: all 0.15s; text-align: left;\n}\n.cmenu-item[_ngcontent-%COMP%]:hover { background: rgba(124,92,191,0.10); color: rgba(220,210,240,0.95); }\n.cmenu-item--logout[_ngcontent-%COMP%]:hover { background: rgba(232,74,74,0.12); color: #E84A4A; }\n\n\n\n.coach-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column; gap: 5px;\n  background: none; border: none; cursor: pointer; padding: 6px;\n}\n.coach-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block; width: 20px; height: 2px;\n  background: rgba(220,210,240,0.65); border-radius: 2px;\n  transition: all 0.25s;\n}\n.coach-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n.coach-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) { opacity: 0; }\n.coach-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\n\n\n\n.coach-mobile-nav[_ngcontent-%COMP%] {\n  display: none; flex-direction: column;\n  background: #130D1F;\n  border-top: 1px solid rgba(124,92,191,0.14);\n  max-height: 0; overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.coach-mobile-nav.open[_ngcontent-%COMP%] { max-height: 600px; }\n.coach-mobile-link[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 13px 24px;\n  color: rgba(220,210,240,0.5);\n  text-decoration: none; font-size: 14px; font-weight: 500;\n  border-bottom: 1px solid rgba(124,92,191,0.08);\n  transition: all 0.15s;\n}\n.coach-mobile-link[_ngcontent-%COMP%]:hover, .coach-mobile-link.active[_ngcontent-%COMP%] {\n  background: rgba(124,92,191,0.10);\n  color: #C4A8FF;\n}\n\n.coach-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.55);\n  z-index: 190;\n  backdrop-filter: blur(3px);\n}\n\n\n\n.coach-accent-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: linear-gradient(90deg,\n    #3D1F80, #7C5CBF, #B89EE0, #7C5CBF, #3D1F80);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_gradientShift 6s linear infinite;\n  position: relative;\n}\n.coach-accent-bar__glow[_ngcontent-%COMP%] {\n  position: absolute; inset: 0;\n  background: inherit;\n  filter: blur(6px);\n  opacity: 0.5;\n}\n\n\n\n.coach-main[_ngcontent-%COMP%] { flex: 1; overflow-y: auto; }\n.coach-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 28px;\n}\n\n\n\n@media (max-width: 1100px) {\n  .coach-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.coach-link__icon):not(.coach-link__indicator) { display: none; }\n  .coach-link[_ngcontent-%COMP%] { padding: 8px 10px; }\n}\n@media (max-width: 768px) {\n  .coach-nav__links[_ngcontent-%COMP%] { display: none; }\n  .coach-burger[_ngcontent-%COMP%] { display: flex; }\n  .coach-mobile-nav[_ngcontent-%COMP%] { display: flex; }\n  .coach-user__info[_ngcontent-%COMP%], .coach-user__caret[_ngcontent-%COMP%] { display: none; }\n  .coach-content[_ngcontent-%COMP%] { padding: 16px; }\n  .coach-quick-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}\n\n\n\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0%   { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n[_nghost-%COMP%]     .kh-card {\n  background: white;\n  border: 1px solid rgba(124,92,191,0.10);\n  border-radius: 16px;\n}\n[_nghost-%COMP%]     .kh-btn--primary {\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n  box-shadow: 0 4px 16px var(--coach-violet-glow);\n}\n[_nghost-%COMP%]     .kh-btn--primary:hover {\n  background: linear-gradient(135deg, #6a4aad, #4a2a8f);\n  box-shadow: 0 6px 24px rgba(124,92,191,0.5);\n  transform: translateY(-1px);\n}\n[_nghost-%COMP%]     .kh-progress__fill {\n  background: linear-gradient(90deg, var(--coach-violet), #B89EE0);\n}\n[_nghost-%COMP%]     .kh-progress__fill--teal {\n  background: linear-gradient(90deg, var(--coach-violet), #B89EE0);\n}\n[_nghost-%COMP%]     input:focus, [_nghost-%COMP%]     select:focus, [_nghost-%COMP%]     textarea:focus {\n  border-color: var(--coach-violet) !important;\n  box-shadow: 0 0 0 3px rgba(124,92,191,0.15) !important;\n}\n[_nghost-%COMP%]     .kpi-card--coach {\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutCoachComponent, [{
        type: Component,
        args: [{ selector: 'app-layout-coach', template: "<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     KHOTWA \u2014 Layout COACH\n     Navbar top dark/violet premium + glass\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n\n<div class=\"coach-shell\">\n\n  <!-- \u2500\u2500 TOP NAVBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <header class=\"coach-nav\" [class.coach-nav--scrolled]=\"scrolled\">\n    <div class=\"coach-nav__inner\">\n\n      <!-- Logo -->\n      <a routerLink=\"/coach/dashboard\" class=\"coach-brand\">\n        <div class=\"coach-brand__icon\">\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\">\n            <path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/>\n          </svg>\n        </div>\n        <span class=\"coach-brand__name\">KHOTWA</span>\n        <span class=\"coach-brand__tag\">Coach</span>\n      </a>\n\n      <!-- Nav links (desktop) -->\n      <nav class=\"coach-nav__links\">\n        <a *ngFor=\"let item of navItems\"\n           class=\"coach-link\"\n           [class.coach-link--active]=\"isActive(item.route)\"\n           [routerLink]=\"getRoute(item.route)\">\n          <span class=\"coach-link__icon\" [innerHTML]=\"getIcon(item.icon)\"></span>\n          <span>{{ item.label }}</span>\n          <span class=\"coach-link__indicator\" *ngIf=\"isActive(item.route)\"></span>\n        </a>\n      </nav>\n\n      <!-- Right actions -->\n      <div class=\"coach-nav__actions\">\n\n        <!-- Validations badge rapide -->\n        <a routerLink=\"/coach/validations\" class=\"coach-quick-badge\" title=\"Validations en attente\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 11l3 3L22 4\"/></svg>\n          <span>5</span>\n        </a>\n\n        <!-- Notifs -->\n        <div class=\"notif-wrapper\">\n          <button class=\"coach-icon-btn\" (click)=\"notifOpen=!notifOpen\" [class.active]=\"notifOpen\">\n            <span [innerHTML]=\"getIcon('bell')\"></span>\n            <span class=\"coach-notif-dot\" *ngIf=\"nonLus > 0\">{{ nonLus }}</span>\n          </button>\n          <div class=\"coach-notif-panel\" *ngIf=\"notifOpen\">\n            <div class=\"coach-notif-panel__head\">\n              <span>Notifications</span>\n              <button (click)=\"notifService.markAllRead(); notifOpen=false\">Tout lire</button>\n            </div>\n            <div *ngFor=\"let n of notifs\" class=\"coach-notif-item\" [class.unread]=\"!n.lu\" (click)=\"notifService.markRead(n.id)\">\n              <div class=\"coach-notif-dot-item\" [class]=\"'dot-'+n.type\"></div>\n              <div><p class=\"coach-notif-title\">{{ n.titre }}</p><p class=\"coach-notif-msg\">{{ n.message }}</p></div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Home -->\n        <a routerLink=\"/\" class=\"coach-icon-btn\" title=\"Accueil\">\n          <span [innerHTML]=\"getIcon('home')\"></span>\n        </a>\n\n        <!-- Avatar -->\n        <div class=\"coach-user\" (click)=\"userMenuOpen=!userMenuOpen\">\n          <div class=\"coach-user__avatar\">{{ userInitials }}</div>\n          <div class=\"coach-user__info\">\n            <span class=\"coach-user__name\">{{ auth.currentUser?.firstName }} {{ auth.currentUser?.lastName }}</span>\n            <span class=\"coach-user__role\">Coach Expert</span>\n          </div>\n          <svg class=\"coach-user__caret\" [class.flipped]=\"userMenuOpen\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"m6 9 6 6 6-6\"/></svg>\n\n          <div class=\"coach-user__menu\" *ngIf=\"userMenuOpen\">\n            <div class=\"coach-user__menu-header\">\n              <p class=\"cmenu-name\">{{ auth.currentUser?.firstName }} {{ auth.currentUser?.lastName }}</p>\n              <p class=\"cmenu-email\">{{ auth.currentUser?.email }}</p>\n            </div>\n            <button class=\"cmenu-item cmenu-item--logout\" (click)=\"logout()\">\n              <span [innerHTML]=\"getIcon('logout')\"></span>D\u00E9connexion\n            </button>\n          </div>\n        </div>\n\n        <!-- Burger -->\n        <button class=\"coach-burger\" (click)=\"mobileOpen=!mobileOpen\" [class.open]=\"mobileOpen\">\n          <span></span><span></span><span></span>\n        </button>\n      </div>\n    </div>\n\n    <!-- Mobile drawer -->\n    <div class=\"coach-mobile-nav\" [class.open]=\"mobileOpen\">\n      <a *ngFor=\"let item of navItems\"\n         class=\"coach-mobile-link\"\n         [class.active]=\"isActive(item.route)\"\n         [routerLink]=\"getRoute(item.route)\"\n         (click)=\"mobileOpen=false\">\n        <span [innerHTML]=\"getIcon(item.icon)\"></span>\n        {{ item.label }}\n      </a>\n    </div>\n  </header>\n\n  <!-- \u2500\u2500 Overlay mobile \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"coach-overlay\" *ngIf=\"mobileOpen\" (click)=\"mobileOpen=false\"></div>\n\n  <!-- \u2500\u2500 Barre d\u00E9corative coach \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"coach-accent-bar\">\n    <div class=\"coach-accent-bar__glow\"></div>\n  </div>\n\n  <!-- \u2500\u2500 Contenu \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <main class=\"coach-main\">\n    <div class=\"coach-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n</div>\n", styles: ["/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   KHOTWA \u2014 Layout COACH\n   Palette : Violet #7C5CBF / Lavender #F0ECF9 / Deep #130D1F\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n:host {\n  --coach-violet:       #7C5CBF;\n  --coach-violet-dark:  #5a3a9f;\n  --coach-violet-glow:  rgba(124,92,191,0.30);\n  --coach-violet-light: rgba(124,92,191,0.10);\n  --coach-deep:         #0C0818;\n  --coach-nav-h:        64px;\n}\n\n/* \u2500\u2500 Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-shell {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #F5F2FC;\n}\n\n/* \u2500\u2500 NAVBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-nav {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  height: var(--coach-nav-h);\n  background: rgba(12,8,24,0.93);\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n  border-bottom: 1px solid rgba(124,92,191,0.18);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n.coach-nav--scrolled {\n  background: rgba(12,8,24,0.98);\n  box-shadow: 0 4px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,92,191,0.14);\n}\n\n.coach-nav__inner {\n  max-width: 1400px;\n  margin: 0 auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  gap: 0;\n}\n\n/* \u2500\u2500 Brand \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  margin-right: 32px;\n  flex-shrink: 0;\n}\n.coach-brand__icon {\n  width: 34px; height: 34px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n  display: flex; align-items: center; justify-content: center;\n  box-shadow: 0 0 18px var(--coach-violet-glow);\n}\n.coach-brand__name {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  font-size: 15px; font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #EDE8F9;\n}\n.coach-brand__tag {\n  font-size: 9px; font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #B89EE0;\n  background: rgba(124,92,191,0.15);\n  border: 1px solid rgba(124,92,191,0.28);\n  border-radius: 6px;\n  padding: 2px 7px;\n}\n\n/* \u2500\u2500 Nav links \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-nav__links {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n}\n\n.coach-link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 13px; font-weight: 500;\n  color: rgba(220,210,240,0.45);\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n}\n.coach-link:hover {\n  color: rgba(220,210,240,0.92);\n  background: rgba(124,92,191,0.10);\n}\n.coach-link__icon {\n  display: flex; align-items: center; justify-content: center;\n  width: 16px; flex-shrink: 0;\n  opacity: 0.55;\n  transition: opacity 0.18s;\n}\n.coach-link:hover .coach-link__icon { opacity: 0.88; }\n\n.coach-link--active {\n  color: #C4A8FF !important;\n  background: rgba(124,92,191,0.18) !important;\n  font-weight: 600;\n}\n.coach-link--active .coach-link__icon { opacity: 1; }\n\n.coach-link__indicator {\n  position: absolute;\n  bottom: 5px; left: 50%;\n  transform: translateX(-50%);\n  width: 16px; height: 2px;\n  border-radius: 99px;\n  background: #B89EE0;\n  box-shadow: 0 0 10px var(--coach-violet);\n}\n\n/* \u2500\u2500 Right actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-nav__actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n/* Validations quick badge */\n.coach-quick-badge {\n  display: flex; align-items: center; gap: 5px;\n  padding: 5px 11px;\n  border-radius: 8px;\n  background: rgba(124,92,191,0.15);\n  border: 1px solid rgba(124,92,191,0.3);\n  color: #C4A8FF;\n  font-size: 12px; font-weight: 700;\n  text-decoration: none;\n  transition: all 0.18s;\n}\n.coach-quick-badge:hover {\n  background: rgba(124,92,191,0.25);\n  border-color: rgba(124,92,191,0.5);\n}\n\n.coach-icon-btn {\n  position: relative;\n  width: 36px; height: 36px;\n  border-radius: 9px;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(124,92,191,0.12);\n  color: rgba(220,210,240,0.55);\n  cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  transition: all 0.18s;\n  text-decoration: none;\n}\n.coach-icon-btn:hover, .coach-icon-btn.active {\n  background: rgba(124,92,191,0.14);\n  border-color: rgba(124,92,191,0.3);\n  color: #C4A8FF;\n}\n\n.notif-wrapper { position: relative; }\n.coach-notif-dot {\n  position: absolute; top: 3px; right: 3px;\n  width: 16px; height: 16px; border-radius: 50%;\n  background: #E84A4A; color: white;\n  font-size: 9px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid var(--coach-deep);\n}\n\n/* Notif panel */\n.coach-notif-panel {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 320px;\n  background: #130D1F;\n  border: 1px solid rgba(124,92,191,0.22);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(124,92,191,0.08);\n  overflow: hidden;\n  animation: fadeInUp 0.2s both;\n  z-index: 300;\n}\n.coach-notif-panel__head {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(124,92,191,0.14);\n  font-weight: 700; font-size: 13px; color: rgba(220,210,240,0.9);\n}\n.coach-notif-panel__head button {\n  background: none; border: none; cursor: pointer;\n  font-size: 12px; color: #B89EE0; font-weight: 600;\n}\n.coach-notif-item {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);\n  cursor: pointer; transition: background 0.15s;\n}\n.coach-notif-item.unread { background: rgba(124,92,191,0.07); }\n.coach-notif-item:hover { background: rgba(124,92,191,0.12); }\n.coach-notif-dot-item { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }\n.coach-notif-title { font-size: 12px; font-weight: 700; color: rgba(220,210,240,0.9); }\n.coach-notif-msg { font-size: 11px; color: rgba(220,210,240,0.4); margin-top: 2px; }\n\n/* \u2500\u2500 User menu \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-user {\n  position: relative;\n  display: flex; align-items: center; gap: 9px;\n  padding: 5px 10px 5px 5px;\n  border-radius: 10px;\n  border: 1px solid rgba(124,92,191,0.18);\n  background: rgba(255,255,255,0.04);\n  cursor: pointer; transition: all 0.18s;\n  user-select: none;\n}\n.coach-user:hover {\n  background: rgba(124,92,191,0.10);\n  border-color: rgba(124,92,191,0.35);\n}\n.coach-user__avatar {\n  width: 30px; height: 30px; border-radius: 8px;\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n  display: flex; align-items: center; justify-content: center;\n  font-size: 11px; font-weight: 700; color: white; flex-shrink: 0;\n  box-shadow: 0 2px 8px var(--coach-violet-glow);\n}\n.coach-user__info { display: flex; flex-direction: column; }\n.coach-user__name { font-size: 12px; font-weight: 600; color: rgba(220,210,240,0.9); line-height: 1.2; }\n.coach-user__role { font-size: 10px; color: #B89EE0; font-weight: 600; letter-spacing: 0.03em; }\n.coach-user__caret { color: rgba(220,210,240,0.3); transition: transform 0.2s; }\n.coach-user__caret.flipped { transform: rotate(180deg); }\n\n.coach-user__menu {\n  position: absolute; top: calc(100% + 8px); right: 0;\n  min-width: 200px;\n  background: #130D1F;\n  border: 1px solid rgba(124,92,191,0.22);\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.55);\n  overflow: hidden;\n  animation: fadeInUp 0.18s both;\n  z-index: 300;\n}\n.coach-user__menu-header {\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(124,92,191,0.12);\n}\n.cmenu-name { font-size: 13px; font-weight: 700; color: rgba(220,210,240,0.9); }\n.cmenu-email { font-size: 11px; color: rgba(220,210,240,0.4); margin-top: 2px; }\n.cmenu-item {\n  display: flex; align-items: center; gap: 9px;\n  width: 100%; padding: 11px 16px;\n  background: none; border: none; cursor: pointer;\n  font-size: 13px; font-weight: 500;\n  color: rgba(220,210,240,0.65);\n  transition: all 0.15s; text-align: left;\n}\n.cmenu-item:hover { background: rgba(124,92,191,0.10); color: rgba(220,210,240,0.95); }\n.cmenu-item--logout:hover { background: rgba(232,74,74,0.12); color: #E84A4A; }\n\n/* \u2500\u2500 Burger \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-burger {\n  display: none;\n  flex-direction: column; gap: 5px;\n  background: none; border: none; cursor: pointer; padding: 6px;\n}\n.coach-burger span {\n  display: block; width: 20px; height: 2px;\n  background: rgba(220,210,240,0.65); border-radius: 2px;\n  transition: all 0.25s;\n}\n.coach-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n.coach-burger.open span:nth-child(2) { opacity: 0; }\n.coach-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\n\n/* \u2500\u2500 Mobile nav \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-mobile-nav {\n  display: none; flex-direction: column;\n  background: #130D1F;\n  border-top: 1px solid rgba(124,92,191,0.14);\n  max-height: 0; overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.coach-mobile-nav.open { max-height: 600px; }\n.coach-mobile-link {\n  display: flex; align-items: center; gap: 12px;\n  padding: 13px 24px;\n  color: rgba(220,210,240,0.5);\n  text-decoration: none; font-size: 14px; font-weight: 500;\n  border-bottom: 1px solid rgba(124,92,191,0.08);\n  transition: all 0.15s;\n}\n.coach-mobile-link:hover, .coach-mobile-link.active {\n  background: rgba(124,92,191,0.10);\n  color: #C4A8FF;\n}\n\n.coach-overlay {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.55);\n  z-index: 190;\n  backdrop-filter: blur(3px);\n}\n\n/* \u2500\u2500 Accent bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-accent-bar {\n  height: 4px;\n  background: linear-gradient(90deg,\n    #3D1F80, #7C5CBF, #B89EE0, #7C5CBF, #3D1F80);\n  background-size: 200% 100%;\n  animation: gradientShift 6s linear infinite;\n  position: relative;\n}\n.coach-accent-bar__glow {\n  position: absolute; inset: 0;\n  background: inherit;\n  filter: blur(6px);\n  opacity: 0.5;\n}\n\n/* \u2500\u2500 Main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coach-main { flex: 1; overflow-y: auto; }\n.coach-content {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 28px;\n}\n\n/* \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 1100px) {\n  .coach-link span:not(.coach-link__icon):not(.coach-link__indicator) { display: none; }\n  .coach-link { padding: 8px 10px; }\n}\n@media (max-width: 768px) {\n  .coach-nav__links { display: none; }\n  .coach-burger { display: flex; }\n  .coach-mobile-nav { display: flex; }\n  .coach-user__info, .coach-user__caret { display: none; }\n  .coach-content { padding: 16px; }\n  .coach-quick-badge span { display: none; }\n}\n\n/* \u2500\u2500 Animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@keyframes gradientShift {\n  0%   { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n}\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* \u2500\u2500 Overrides globaux pour le th\u00E8me coach \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n:host ::ng-deep .kh-card {\n  background: white;\n  border: 1px solid rgba(124,92,191,0.10);\n  border-radius: 16px;\n}\n:host ::ng-deep .kh-btn--primary {\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n  box-shadow: 0 4px 16px var(--coach-violet-glow);\n}\n:host ::ng-deep .kh-btn--primary:hover {\n  background: linear-gradient(135deg, #6a4aad, #4a2a8f);\n  box-shadow: 0 6px 24px rgba(124,92,191,0.5);\n  transform: translateY(-1px);\n}\n:host ::ng-deep .kh-progress__fill {\n  background: linear-gradient(90deg, var(--coach-violet), #B89EE0);\n}\n:host ::ng-deep .kh-progress__fill--teal {\n  background: linear-gradient(90deg, var(--coach-violet), #B89EE0);\n}\n:host ::ng-deep input:focus,\n:host ::ng-deep select:focus,\n:host ::ng-deep textarea:focus {\n  border-color: var(--coach-violet) !important;\n  box-shadow: 0 0 0 3px rgba(124,92,191,0.15) !important;\n}\n:host ::ng-deep .kpi-card--coach {\n  background: linear-gradient(135deg, var(--coach-violet), var(--coach-violet-dark));\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.NotificationService }, { type: i3.Router }], { onScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutCoachComponent, { className: "LayoutCoachComponent", filePath: "app\\layout-coach\\layout-coach.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=layout-coach.component.js.map