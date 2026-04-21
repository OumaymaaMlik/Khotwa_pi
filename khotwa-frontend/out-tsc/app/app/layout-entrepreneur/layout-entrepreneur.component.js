import { Component, HostListener } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/auth.service";
import * as i2 from "../core/services/notification.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/common";
const _c0 = a0 => ["/entrepreneur", a0];
function LayoutEntrepreneurComponent_a_12_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 39);
} }
function LayoutEntrepreneurComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 36);
    i0.ɵɵelement(1, "span", 37);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, LayoutEntrepreneurComponent_a_12_span_4_Template, 1, 0, "span", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ent-link--active", ctx_r2.isActive(item_r2.route));
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, item_r2.route));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r2.getIcon(item_r2.icon), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isActive(item_r2.route));
} }
function LayoutEntrepreneurComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.nonLus);
} }
function LayoutEntrepreneurComponent_div_18_div_6_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 51);
    i0.ɵɵtext(1, "\u2192 Go to Profile");
    i0.ɵɵelementEnd();
} }
function LayoutEntrepreneurComponent_div_18_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_div_18_div_6_Template_div_click_0_listener() { const n_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onNotifClick(n_r6)); });
    i0.ɵɵelement(1, "div", 46);
    i0.ɵɵelementStart(2, "div", 47)(3, "p", 48);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 49);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, LayoutEntrepreneurComponent_div_18_div_6_p_7_Template, 2, 0, "p", 50);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const n_r6 = ctx.$implicit;
    i0.ɵɵclassProp("unread", !n_r6.lu)("notif-item--warning", n_r6.type === "warning")("notif-item--error", n_r6.type === "error");
    i0.ɵɵadvance();
    i0.ɵɵclassMap("dot-" + n_r6.type);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(n_r6.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(n_r6.message);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", n_r6.link);
} }
function LayoutEntrepreneurComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42)(2, "span");
    i0.ɵɵtext(3, "Notifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 43);
    i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_div_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.notifService.markAllRead(); return i0.ɵɵresetView(ctx_r2.notifOpen = false); });
    i0.ɵɵtext(5, "Mark all as read");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LayoutEntrepreneurComponent_div_18_div_6_Template, 8, 11, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.notifs);
} }
function LayoutEntrepreneurComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 53)(2, "p", 54);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 55);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 56);
    i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_div_32_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.logout()); });
    i0.ɵɵelement(7, "span", 15);
    i0.ɵɵtext(8, "Logout ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.firstName, " ", ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.lastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.emailAddress);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r2.getIcon("logout"), i0.ɵɵsanitizeHtml);
} }
function LayoutEntrepreneurComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 57);
    i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_a_38_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mobileOpen = false); });
    i0.ɵɵelement(1, "span", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ent-mobile-link--active", ctx_r2.isActive(item_r9.route));
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, item_r9.route));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r2.getIcon(item_r9.icon), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r9.label, " ");
} }
function LayoutEntrepreneurComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_div_39_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mobileOpen = false); });
    i0.ɵɵelementEnd();
} }
export class LayoutEntrepreneurComponent {
    constructor(auth, notifService, router, sanitizer) {
        this.auth = auth;
        this.notifService = notifService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.notifOpen = false;
        this.mobileOpen = false;
        this.userMenuOpen = false;
        this.currentUrl = '';
        this.scrolled = false;
        this.navItems = [
            { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
            { label: 'Collaborations', icon: 'people', route: 'collaborations' },
            { label: 'Projets', icon: 'folder', route: 'projets' },
            { label: 'Workflows', icon: 'workflow', route: 'workflows' },
            { label: 'Messages', icon: 'message', route: 'messages' },
            { label: 'Bibliothèque', icon: 'book', route: 'bibliotheque' },
            { label: 'Progression', icon: 'progress', route: 'progressions' },
            { label: 'Talent', icon: 'people', route: 'talent' },
            { label: 'Profile', icon: 'user', route: 'profile' },
        ];
        this.svgIcons = {
            dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
            folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
            workflow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
            message: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
            book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
            progress: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
            people: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
            bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
            home: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
            logout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
        };
        this.safeIconCache = {};
    }
    ngOnInit() {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e) => { this.currentUrl = e.url; });
        this.currentUrl = this.router.url;
        // Si le profil n'est pas encore chargé (firstName vide), le recharger
        if (!this.auth.currentUser?.firstName) {
            this.auth.refreshProfile().subscribe({
                next: () => { },
                error: () => { }
            });
        }
        // ── Load expiration alert for the connected entrepreneur ──────────────
        const userId = this.auth.currentUser?.idUser;
        if (userId && this.auth.isEntrepreneur) {
            this.notifService.loadExpirationAlert(userId);
        }
    }
    onScroll() { this.scrolled = window.scrollY > 10; }
    isActive(route) { return this.currentUrl.includes(`/${route}`); }
    getIcon(name) {
        if (!this.safeIconCache[name]) {
            this.safeIconCache[name] = this.sanitizer.bypassSecurityTrustHtml(this.svgIcons[name] ?? '');
        }
        return this.safeIconCache[name];
    }
    // Navigate to profile when clicking an expiration notification
    onNotifClick(notif) {
        this.notifService.markRead(notif.id);
        if (notif.link) {
            this.router.navigateByUrl(notif.link);
            this.notifOpen = false;
        }
    }
    logout() { this.auth.logout(); this.router.navigateByUrl('/'); }
    get nonLus() { return this.notifService.nonLus(); }
    get notifs() { return this.notifService.notifs(); }
    get userInitials() {
        const u = this.auth.currentUser;
        return `${u?.firstName?.[0] ?? ''}${u?.lastName?.[0] ?? ''}`.toUpperCase();
    }
    static { this.ɵfac = function LayoutEntrepreneurComponent_Factory(t) { return new (t || LayoutEntrepreneurComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NotificationService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutEntrepreneurComponent, selectors: [["app-layout-entrepreneur"]], hostBindings: function LayoutEntrepreneurComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function LayoutEntrepreneurComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 46, vars: 19, consts: [["userMenu", ""], [1, "ent-shell"], [1, "ent-nav"], [1, "ent-nav__inner"], ["routerLink", "/entrepreneur/dashboard", 1, "ent-brand"], [1, "ent-brand__icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "ent-brand__name"], [1, "ent-brand__tag"], [1, "ent-nav__links"], ["class", "ent-link", 3, "ent-link--active", "routerLink", 4, "ngFor", "ngForOf"], [1, "ent-nav__actions"], [1, "notif-wrapper"], [1, "ent-icon-btn", 3, "click"], [3, "innerHTML"], ["class", "notif-dot", 4, "ngIf"], ["class", "ent-notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Home", 1, "ent-icon-btn"], [1, "ent-user", 3, "click"], [1, "ent-user__avatar"], [1, "ent-user__info"], [1, "ent-user__name"], [1, "ent-user__role"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "ent-user__chevron"], ["d", "m6 9 6 6 6-6"], ["class", "ent-user__menu", 4, "ngIf"], [1, "ent-burger", 3, "click"], [1, "ent-mobile-nav"], ["class", "ent-mobile-link", 3, "ent-mobile-link--active", "routerLink", "click", 4, "ngFor", "ngForOf"], ["class", "ent-overlay", 3, "click", 4, "ngIf"], [1, "ent-hero-band"], [1, "ent-hero-band__orb", "ent-hero-band__orb--1"], [1, "ent-hero-band__orb", "ent-hero-band__orb--2"], [1, "ent-main"], [1, "ent-content"], [1, "ent-link", 3, "routerLink"], [1, "ent-link__icon", 3, "innerHTML"], ["class", "ent-link__pip", 4, "ngIf"], [1, "ent-link__pip"], [1, "notif-dot"], [1, "ent-notif-panel"], [1, "ent-notif-panel__head"], [3, "click"], ["class", "ent-notif-item", 3, "unread", "notif-item--warning", "notif-item--error", "click", 4, "ngFor", "ngForOf"], [1, "ent-notif-item", 3, "click"], [1, "ent-notif-item__dot"], [2, "flex", "1"], [1, "ent-notif-item__title"], [1, "ent-notif-item__msg"], ["class", "ent-notif-item__link", 4, "ngIf"], [1, "ent-notif-item__link"], [1, "ent-user__menu"], [1, "ent-user__menu-header"], [1, "menu-name"], [1, "menu-email"], [1, "menu-item", "menu-item--logout", 3, "click"], [1, "ent-mobile-link", 3, "click", "routerLink"], [1, "ent-overlay", 3, "click"]], template: function LayoutEntrepreneurComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "a", 4)(4, "div", 5);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 6);
            i0.ɵɵelement(6, "path", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "span", 8);
            i0.ɵɵtext(8, "KHOTWA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 9);
            i0.ɵɵtext(10, "Entrepreneur");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "nav", 10);
            i0.ɵɵtemplate(12, LayoutEntrepreneurComponent_a_12_Template, 5, 8, "a", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 12)(14, "div", 13)(15, "button", 14);
            i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.notifOpen = !ctx.notifOpen); });
            i0.ɵɵelement(16, "span", 15);
            i0.ɵɵtemplate(17, LayoutEntrepreneurComponent_span_17_Template, 2, 1, "span", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, LayoutEntrepreneurComponent_div_18_Template, 7, 1, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 18);
            i0.ɵɵelement(20, "span", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 19, 0);
            i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_Template_div_click_21_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.userMenuOpen = !ctx.userMenuOpen); });
            i0.ɵɵelementStart(23, "div", 20);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 21)(26, "span", 22);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span", 23);
            i0.ɵɵtext(29, "Entrepreneur");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(30, "svg", 24);
            i0.ɵɵelement(31, "path", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(32, LayoutEntrepreneurComponent_div_32_Template, 9, 4, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(33, "button", 27);
            i0.ɵɵlistener("click", function LayoutEntrepreneurComponent_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.mobileOpen = !ctx.mobileOpen); });
            i0.ɵɵelement(34, "span")(35, "span")(36, "span");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "div", 28);
            i0.ɵɵtemplate(38, LayoutEntrepreneurComponent_a_38_Template, 3, 7, "a", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(39, LayoutEntrepreneurComponent_div_39_Template, 1, 0, "div", 30);
            i0.ɵɵelementStart(40, "div", 31);
            i0.ɵɵelement(41, "div", 32)(42, "div", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "main", 34)(44, "div", 35);
            i0.ɵɵelement(45, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ent-nav--scrolled", ctx.scrolled);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.navItems);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("ent-icon-btn--active", ctx.notifOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHTML", ctx.getIcon("bell"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.nonLus > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.notifOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx.getIcon("home"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.userInitials);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName, " ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.lastName, "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("rotated", ctx.userMenuOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.userMenuOpen);
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("open", ctx.mobileOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.navItems);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mobileOpen);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i3.RouterOutlet, i3.RouterLink], styles: ["\n\n\n\n\n\n[_nghost-%COMP%] {\n  --ent-teal:       #2ABFBF;\n  --ent-teal-dark:  #1a9999;\n  --ent-teal-glow:  rgba(42,191,191,0.28);\n  --ent-teal-light: rgba(42,191,191,0.10);\n  --ent-dark:       #070F14;\n  --ent-nav-h:      64px;\n  --ent-band-h:     6px;\n}\n\n\n\n.ent-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #F0F9F9;\n}\n\n\n\n.ent-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  height: var(--ent-nav-h);\n  background: rgba(7,15,20,0.92);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(42,191,191,0.15);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n.ent-nav--scrolled[_ngcontent-%COMP%] {\n  background: rgba(7,15,20,0.97);\n  box-shadow: 0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(42,191,191,0.12);\n}\n\n\n\n.ent-nav__inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  gap: 0;\n}\n\n\n\n.ent-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n  margin-right: 16px;\n}\n.ent-brand__icon[_ngcontent-%COMP%] {\n  width: 32px; height: 32px;\n  border-radius: 9px;\n  background: linear-gradient(135deg, var(--ent-teal), #1a7f7f);\n  display: flex; align-items: center; justify-content: center;\n  box-shadow: 0 0 16px var(--ent-teal-glow);\n}\n.ent-brand__name[_ngcontent-%COMP%] {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  font-size: 14px; font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #E8F9F9;\n}\n.ent-brand__tag[_ngcontent-%COMP%] {\n  font-size: 9px; font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--ent-teal);\n  background: var(--ent-teal-light);\n  border: 1px solid rgba(42,191,191,0.25);\n  border-radius: 5px;\n  padding: 2px 6px;\n}\n\n\n\n.ent-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  flex: 1;               \n\n  justify-content: center; \n\n  overflow: hidden;\n}\n\n.ent-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 9px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(210,240,240,0.5);\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ent-link[_ngcontent-%COMP%]:hover {\n  color: rgba(210,240,240,0.95);\n  background: rgba(42,191,191,0.08);\n}\n.ent-link__icon[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: center;\n  width: 15px; flex-shrink: 0;\n  opacity: 0.6;\n  transition: opacity 0.18s;\n}\n.ent-link[_ngcontent-%COMP%]:hover   .ent-link__icon[_ngcontent-%COMP%] { opacity: 0.9; }\n\n.ent-link--active[_ngcontent-%COMP%] {\n  color: var(--ent-teal) !important;\n  background: rgba(42,191,191,0.12) !important;\n  font-weight: 600;\n}\n.ent-link--active[_ngcontent-%COMP%]   .ent-link__icon[_ngcontent-%COMP%] { opacity: 1; }\n\n.ent-link__pip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 14px; height: 2px;\n  border-radius: 99px;\n  background: var(--ent-teal);\n  box-shadow: 0 0 8px var(--ent-teal);\n}\n\n\n\n.ent-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n\n.ent-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px; height: 34px;\n  border-radius: 9px;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.08);\n  color: rgba(210,240,240,0.6);\n  cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  transition: all 0.18s;\n  text-decoration: none;\n}\n.ent-icon-btn[_ngcontent-%COMP%]:hover, .ent-icon-btn--active[_ngcontent-%COMP%] {\n  background: rgba(42,191,191,0.12);\n  border-color: rgba(42,191,191,0.25);\n  color: var(--ent-teal);\n}\n\n.notif-wrapper[_ngcontent-%COMP%] { position: relative; }\n.notif-dot[_ngcontent-%COMP%] {\n  position: absolute; top: 3px; right: 3px;\n  width: 15px; height: 15px; border-radius: 50%;\n  background: #E84A4A; color: white;\n  font-size: 9px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid var(--ent-dark);\n}\n\n\n\n.ent-notif-panel[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 300px;\n  background: #0D1E1E;\n  border: 1px solid rgba(42,191,191,0.2);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(42,191,191,0.08);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.2s both;\n  z-index: 300;\n}\n.ent-notif-panel__head[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(42,191,191,0.12);\n  font-weight: 700; font-size: 13px; color: rgba(210,240,240,0.9);\n}\n.ent-notif-panel__head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer;\n  font-size: 12px; color: var(--ent-teal); font-weight: 600;\n}\n.ent-notif-item[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);\n  cursor: pointer; transition: background 0.15s;\n}\n.ent-notif-item.unread[_ngcontent-%COMP%] { background: rgba(42,191,191,0.06); }\n.ent-notif-item[_ngcontent-%COMP%]:hover  { background: rgba(42,191,191,0.1); }\n.ent-notif-item__dot[_ngcontent-%COMP%] { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }\n.ent-notif-item__title[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: rgba(210,240,240,0.9); }\n.ent-notif-item__msg[_ngcontent-%COMP%] { font-size: 11px; color: rgba(210,240,240,0.45); margin-top: 2px; }\n\n\n\n.ent-user[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px;\n  border-radius: 10px;\n  border: 1px solid rgba(42,191,191,0.15);\n  background: rgba(255,255,255,0.04);\n  cursor: pointer;\n  transition: all 0.18s;\n  user-select: none;\n}\n.ent-user[_ngcontent-%COMP%]:hover {\n  background: rgba(42,191,191,0.08);\n  border-color: rgba(42,191,191,0.3);\n}\n.ent-user__avatar[_ngcontent-%COMP%] {\n  width: 28px; height: 28px; border-radius: 7px;\n  background: linear-gradient(135deg, var(--ent-teal), #1a7f7f);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 10px; font-weight: 700; color: white;\n  flex-shrink: 0;\n}\n.ent-user__info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n.ent-user__name[_ngcontent-%COMP%] { font-size: 11px; font-weight: 600; color: rgba(210,240,240,0.9); line-height: 1.2; }\n.ent-user__role[_ngcontent-%COMP%] { font-size: 10px; color: var(--ent-teal); font-weight: 600; }\n.ent-user__chevron[_ngcontent-%COMP%] { color: rgba(210,240,240,0.35); transition: transform 0.2s; }\n.ent-user__chevron.rotated[_ngcontent-%COMP%] { transform: rotate(180deg); }\n\n.ent-user__menu[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 8px); right: 0;\n  min-width: 190px;\n  background: #0D1E1E;\n  border: 1px solid rgba(42,191,191,0.2);\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.5);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.18s both;\n  z-index: 300;\n}\n.ent-user__menu-header[_ngcontent-%COMP%] {\n  padding: 13px 15px;\n  border-bottom: 1px solid rgba(42,191,191,0.1);\n}\n.menu-name[_ngcontent-%COMP%] { font-size: 13px; font-weight: 700; color: rgba(210,240,240,0.9); }\n.menu-email[_ngcontent-%COMP%] { font-size: 11px; color: rgba(210,240,240,0.4); margin-top: 2px; }\n.menu-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 9px;\n  width: 100%; padding: 11px 15px;\n  background: none; border: none; cursor: pointer;\n  font-size: 13px; font-weight: 500;\n  color: rgba(210,240,240,0.7);\n  transition: all 0.15s; text-align: left;\n}\n.menu-item[_ngcontent-%COMP%]:hover { background: rgba(42,191,191,0.08); color: rgba(210,240,240,0.95); }\n.menu-item--logout[_ngcontent-%COMP%]:hover { background: rgba(232,74,74,0.12); color: #E84A4A; }\n\n\n\n.ent-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column; gap: 5px;\n  background: none; border: none; cursor: pointer; padding: 6px;\n}\n.ent-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block; width: 20px; height: 2px;\n  background: rgba(210,240,240,0.7); border-radius: 2px; transition: all 0.2s;\n}\n\n\n\n.ent-mobile-nav[_ngcontent-%COMP%] {\n  display: none; flex-direction: column;\n  background: #0D1E1E;\n  border-top: 1px solid rgba(42,191,191,0.12);\n  max-height: 0; overflow: hidden; transition: max-height 0.3s ease;\n}\n.ent-mobile-nav.open[_ngcontent-%COMP%] { max-height: 600px; }\n\n.ent-mobile-link[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 13px 24px;\n  color: rgba(210,240,240,0.55);\n  text-decoration: none; font-size: 14px; font-weight: 500;\n  border-bottom: 1px solid rgba(42,191,191,0.07);\n  transition: all 0.15s;\n}\n.ent-mobile-link[_ngcontent-%COMP%]:hover { background: rgba(42,191,191,0.08); color: var(--ent-teal); }\n.ent-mobile-link--active[_ngcontent-%COMP%] { color: var(--ent-teal); background: rgba(42,191,191,0.08); font-weight: 600; }\n\n.ent-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 190; backdrop-filter: blur(2px);\n}\n\n\n\n.ent-hero-band[_ngcontent-%COMP%] {\n  height: var(--ent-band-h);\n  background: linear-gradient(90deg, #1a9999, #2ABFBF, #5AD5D5, #2ABFBF, #1a9999);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_gradientShift 5s linear infinite;\n  position: relative; overflow: hidden;\n}\n.ent-hero-band__orb[_ngcontent-%COMP%] {\n  position: absolute; border-radius: 50%; filter: blur(30px); opacity: 0.4;\n}\n.ent-hero-band__orb--1[_ngcontent-%COMP%] {\n  width: 120px; height: 40px; background: rgba(255,255,255,0.6);\n  top: -10px; left: 10%; animation: _ngcontent-%COMP%_orbFloat 4s ease-in-out infinite;\n}\n.ent-hero-band__orb--2[_ngcontent-%COMP%] {\n  width: 80px; height: 30px; background: rgba(255,255,255,0.5);\n  top: -8px; right: 20%; animation: _ngcontent-%COMP%_orbFloat 6s ease-in-out infinite reverse;\n}\n\n\n\n.ent-main[_ngcontent-%COMP%] { flex: 1; overflow-y: auto; }\n.ent-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 32px;\n}\n\n\n\n@media (max-width: 1200px) {\n  \n\n  .ent-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.ent-link__icon):not(.ent-link__pip) { display: none; }\n  .ent-link[_ngcontent-%COMP%] { padding: 8px; }\n  .ent-brand__tag[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 900px) {\n  .ent-nav__links[_ngcontent-%COMP%] { display: none; }\n  .ent-burger[_ngcontent-%COMP%] { display: flex; }\n  .ent-mobile-nav[_ngcontent-%COMP%] { display: flex; }\n  .ent-user__info[_ngcontent-%COMP%] { display: none; }\n  .ent-user__chevron[_ngcontent-%COMP%] { display: none; }\n  .ent-content[_ngcontent-%COMP%] { padding: 16px; }\n}\n\n\n\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0%   { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n}\n@keyframes _ngcontent-%COMP%_orbFloat {\n  0%, 100% { transform: translateX(0); }\n  50%       { transform: translateX(30px); }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n\n\n[_nghost-%COMP%]     .kh-card {\n  background: white;\n  border: 1px solid rgba(42,191,191,0.1);\n  border-radius: 16px;\n}\n[_nghost-%COMP%]     .kh-btn--primary {\n  background: linear-gradient(135deg, var(--ent-teal), var(--ent-teal-dark));\n  box-shadow: 0 4px 16px var(--ent-teal-glow);\n}\n[_nghost-%COMP%]     .kh-btn--primary:hover {\n  background: linear-gradient(135deg, var(--ent-teal-dark), #147a7a);\n  box-shadow: 0 6px 24px rgba(42,191,191,0.45);\n}\n[_nghost-%COMP%]     .kh-progress__fill {\n  background: linear-gradient(90deg, var(--ent-teal), #5AD5D5);\n}\n[_nghost-%COMP%]     input:focus, [_nghost-%COMP%]     select:focus, [_nghost-%COMP%]     textarea:focus {\n  border-color: var(--ent-teal) !important;\n  box-shadow: 0 0 0 3px rgba(42,191,191,0.15) !important;\n}\n\n\n.ent-notif-item.notif-item--warning[_ngcontent-%COMP%] {\n  border-left: 3px solid rgba(245,166,35,0.7);\n}\n.ent-notif-item.notif-item--error[_ngcontent-%COMP%] {\n  border-left: 3px solid rgba(232,74,74,0.7);\n}\n \n\n\n.ent-notif-item__link[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--ent-teal);\n  font-weight: 600;\n  margin: 4px 0 0;\n  cursor: pointer;\n}\n \n\n\n.dot-warning[_ngcontent-%COMP%] { background: #F5A623; }\n.dot-error[_ngcontent-%COMP%]   { background: #E84A4A; }\n.dot-info[_ngcontent-%COMP%]    { background: #2ABFBF; }\n.dot-success[_ngcontent-%COMP%] { background: #27AE7A; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutEntrepreneurComponent, [{
        type: Component,
        args: [{ selector: 'app-layout-entrepreneur', template: "\n<div class=\"ent-shell\">\n\n  <!-- \u2500\u2500 TOP NAVBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <header class=\"ent-nav\" [class.ent-nav--scrolled]=\"scrolled\">\n    <div class=\"ent-nav__inner\">\n\n      <!-- Logo -->\n      <a routerLink=\"/entrepreneur/dashboard\" class=\"ent-brand\">\n        <div class=\"ent-brand__icon\">\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\">\n            <path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/>\n          </svg>\n        </div>\n        <span class=\"ent-brand__name\">KHOTWA</span>\n        <span class=\"ent-brand__tag\">Entrepreneur</span>\n      </a>\n\n      <!-- Nav links (desktop) -->\n      <nav class=\"ent-nav__links\">\n        <a *ngFor=\"let item of navItems\"\n           class=\"ent-link\"\n           [class.ent-link--active]=\"isActive(item.route)\"\n           [routerLink]=\"['/entrepreneur', item.route]\">\n          <span class=\"ent-link__icon\" [innerHTML]=\"getIcon(item.icon)\"></span>\n          <span>{{ item.label }}</span>\n          <span class=\"ent-link__pip\" *ngIf=\"isActive(item.route)\"></span>\n        </a>\n      </nav>\n\n      <!-- Actions right -->\n      <div class=\"ent-nav__actions\">\n\n        <!-- Notifs -->\n        <div class=\"notif-wrapper\">\n          <button class=\"ent-icon-btn\" (click)=\"notifOpen=!notifOpen\" [class.ent-icon-btn--active]=\"notifOpen\">\n            <span [innerHTML]=\"getIcon('bell')\"></span>\n            <span class=\"notif-dot\" *ngIf=\"nonLus > 0\">{{ nonLus }}</span>\n          </button>\n          <div class=\"ent-notif-panel\" *ngIf=\"notifOpen\">\n            <div class=\"ent-notif-panel__head\">\n              <span>Notifications</span>\n              <button (click)=\"notifService.markAllRead(); notifOpen=false\">Mark all as read</button>\n            </div>\n            <div *ngFor=\"let n of notifs\"\n     class=\"ent-notif-item\"\n     [class.unread]=\"!n.lu\"\n     [class.notif-item--warning]=\"n.type === 'warning'\"\n     [class.notif-item--error]=\"n.type === 'error'\"\n     (click)=\"onNotifClick(n)\">\n  <div class=\"ent-notif-item__dot\" [class]=\"'dot-'+n.type\"></div>\n  <div style=\"flex:1\">\n    <p class=\"ent-notif-item__title\">{{ n.titre }}</p>\n    <p class=\"ent-notif-item__msg\">{{ n.message }}</p>\n    <p *ngIf=\"n.link\" class=\"ent-notif-item__link\">\u2192 Go to Profile</p>\n  </div>\n</div>\n \n          </div>\n        </div>\n\n        <!-- Home -->\n        <a routerLink=\"/\" class=\"ent-icon-btn\" title=\"Home\">\n          <span [innerHTML]=\"getIcon('home')\"></span>\n        </a>\n\n        <!-- Avatar + dropdown -->\n        <div class=\"ent-user\" (click)=\"userMenuOpen=!userMenuOpen\" #userMenu>\n          <div class=\"ent-user__avatar\">{{ userInitials }}</div>\n          <div class=\"ent-user__info\">\n            <span class=\"ent-user__name\">{{ auth.currentUser?.firstName }} {{ auth.currentUser?.lastName }}</span>\n            <span class=\"ent-user__role\">Entrepreneur</span>\n          </div>\n          <svg class=\"ent-user__chevron\" [class.rotated]=\"userMenuOpen\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"m6 9 6 6 6-6\"/></svg>\n\n          <div class=\"ent-user__menu\" *ngIf=\"userMenuOpen\">\n            <div class=\"ent-user__menu-header\">\n              <p class=\"menu-name\">{{ auth.currentUser?.firstName }} {{ auth.currentUser?.lastName }}</p>\n              <p class=\"menu-email\">{{ auth.currentUser?.emailAddress }}</p>\n            </div>\n            <button class=\"menu-item menu-item--logout\" (click)=\"logout()\">\n              <span [innerHTML]=\"getIcon('logout')\"></span>Logout\n            </button>\n          </div>\n        </div>\n\n        <!-- Mobile burger -->\n        <button class=\"ent-burger\" (click)=\"mobileOpen=!mobileOpen\">\n          <span></span><span></span><span></span>\n        </button>\n      </div>\n    </div>\n\n    <!-- Mobile nav drawer -->\n    <div class=\"ent-mobile-nav\" [class.open]=\"mobileOpen\">\n      <a *ngFor=\"let item of navItems\"\n         class=\"ent-mobile-link\"\n         [class.ent-mobile-link--active]=\"isActive(item.route)\"\n         [routerLink]=\"['/entrepreneur', item.route]\"\n         (click)=\"mobileOpen=false\">\n        <span [innerHTML]=\"getIcon(item.icon)\"></span>\n        {{ item.label }}\n      </a>\n    </div>\n  </header>\n\n  <!-- \u2500\u2500 OVERLAY mobile \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"ent-overlay\" *ngIf=\"mobileOpen\" (click)=\"mobileOpen=false\"></div>\n\n  <!-- \u2500\u2500 HERO BAND (sous la navbar, d\u00E9coratif) \u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"ent-hero-band\">\n    <div class=\"ent-hero-band__orb ent-hero-band__orb--1\"></div>\n    <div class=\"ent-hero-band__orb ent-hero-band__orb--2\"></div>\n  </div>\n\n  <!-- \u2500\u2500 CONTENU PRINCIPAL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <main class=\"ent-main\">\n    <div class=\"ent-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n</div>\n", styles: ["/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   KHOTWA \u2014 Layout ENTREPRENEUR\n   Palette : Teal #2ABFBF / Mint #E6F9F9 / Dark #0D2626\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n:host {\n  --ent-teal:       #2ABFBF;\n  --ent-teal-dark:  #1a9999;\n  --ent-teal-glow:  rgba(42,191,191,0.28);\n  --ent-teal-light: rgba(42,191,191,0.10);\n  --ent-dark:       #070F14;\n  --ent-nav-h:      64px;\n  --ent-band-h:     6px;\n}\n\n/* \u2500\u2500 Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-shell {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #F0F9F9;\n}\n\n/* \u2500\u2500 NAVBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-nav {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  height: var(--ent-nav-h);\n  background: rgba(7,15,20,0.92);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(42,191,191,0.15);\n  transition: background 0.3s, box-shadow 0.3s;\n}\n.ent-nav--scrolled {\n  background: rgba(7,15,20,0.97);\n  box-shadow: 0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(42,191,191,0.12);\n}\n\n/* \u2500\u2500 Nav inner : full width, space-between \u2500\u2500 */\n.ent-nav__inner {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  gap: 0;\n}\n\n/* \u2500\u2500 Brand \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n  margin-right: 16px;\n}\n.ent-brand__icon {\n  width: 32px; height: 32px;\n  border-radius: 9px;\n  background: linear-gradient(135deg, var(--ent-teal), #1a7f7f);\n  display: flex; align-items: center; justify-content: center;\n  box-shadow: 0 0 16px var(--ent-teal-glow);\n}\n.ent-brand__name {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  font-size: 14px; font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #E8F9F9;\n}\n.ent-brand__tag {\n  font-size: 9px; font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--ent-teal);\n  background: var(--ent-teal-light);\n  border: 1px solid rgba(42,191,191,0.25);\n  border-radius: 5px;\n  padding: 2px 6px;\n}\n\n/* \u2500\u2500 Nav links : flex-1, centred \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-nav__links {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  flex: 1;               /* takes remaining space */\n  justify-content: center; /* centres links between brand and actions */\n  overflow: hidden;\n}\n\n.ent-link {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 9px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(210,240,240,0.5);\n  text-decoration: none;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ent-link:hover {\n  color: rgba(210,240,240,0.95);\n  background: rgba(42,191,191,0.08);\n}\n.ent-link__icon {\n  display: flex; align-items: center; justify-content: center;\n  width: 15px; flex-shrink: 0;\n  opacity: 0.6;\n  transition: opacity 0.18s;\n}\n.ent-link:hover .ent-link__icon { opacity: 0.9; }\n\n.ent-link--active {\n  color: var(--ent-teal) !important;\n  background: rgba(42,191,191,0.12) !important;\n  font-weight: 600;\n}\n.ent-link--active .ent-link__icon { opacity: 1; }\n\n.ent-link__pip {\n  position: absolute;\n  bottom: 3px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 14px; height: 2px;\n  border-radius: 99px;\n  background: var(--ent-teal);\n  box-shadow: 0 0 8px var(--ent-teal);\n}\n\n/* \u2500\u2500 Actions right : fixed width, no shrink \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-nav__actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n\n.ent-icon-btn {\n  position: relative;\n  width: 34px; height: 34px;\n  border-radius: 9px;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.08);\n  color: rgba(210,240,240,0.6);\n  cursor: pointer;\n  display: flex; align-items: center; justify-content: center;\n  transition: all 0.18s;\n  text-decoration: none;\n}\n.ent-icon-btn:hover,\n.ent-icon-btn--active {\n  background: rgba(42,191,191,0.12);\n  border-color: rgba(42,191,191,0.25);\n  color: var(--ent-teal);\n}\n\n.notif-wrapper { position: relative; }\n.notif-dot {\n  position: absolute; top: 3px; right: 3px;\n  width: 15px; height: 15px; border-radius: 50%;\n  background: #E84A4A; color: white;\n  font-size: 9px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid var(--ent-dark);\n}\n\n/* Notif panel */\n.ent-notif-panel {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 300px;\n  background: #0D1E1E;\n  border: 1px solid rgba(42,191,191,0.2);\n  border-radius: 14px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(42,191,191,0.08);\n  overflow: hidden;\n  animation: fadeInUp 0.2s both;\n  z-index: 300;\n}\n.ent-notif-panel__head {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid rgba(42,191,191,0.12);\n  font-weight: 700; font-size: 13px; color: rgba(210,240,240,0.9);\n}\n.ent-notif-panel__head button {\n  background: none; border: none; cursor: pointer;\n  font-size: 12px; color: var(--ent-teal); font-weight: 600;\n}\n.ent-notif-item {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);\n  cursor: pointer; transition: background 0.15s;\n}\n.ent-notif-item.unread { background: rgba(42,191,191,0.06); }\n.ent-notif-item:hover  { background: rgba(42,191,191,0.1); }\n.ent-notif-item__dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }\n.ent-notif-item__title { font-size: 12px; font-weight: 700; color: rgba(210,240,240,0.9); }\n.ent-notif-item__msg { font-size: 11px; color: rgba(210,240,240,0.45); margin-top: 2px; }\n\n/* \u2500\u2500 User avatar menu \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-user {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px 4px 4px;\n  border-radius: 10px;\n  border: 1px solid rgba(42,191,191,0.15);\n  background: rgba(255,255,255,0.04);\n  cursor: pointer;\n  transition: all 0.18s;\n  user-select: none;\n}\n.ent-user:hover {\n  background: rgba(42,191,191,0.08);\n  border-color: rgba(42,191,191,0.3);\n}\n.ent-user__avatar {\n  width: 28px; height: 28px; border-radius: 7px;\n  background: linear-gradient(135deg, var(--ent-teal), #1a7f7f);\n  display: flex; align-items: center; justify-content: center;\n  font-size: 10px; font-weight: 700; color: white;\n  flex-shrink: 0;\n}\n.ent-user__info { display: flex; flex-direction: column; }\n.ent-user__name { font-size: 11px; font-weight: 600; color: rgba(210,240,240,0.9); line-height: 1.2; }\n.ent-user__role { font-size: 10px; color: var(--ent-teal); font-weight: 600; }\n.ent-user__chevron { color: rgba(210,240,240,0.35); transition: transform 0.2s; }\n.ent-user__chevron.rotated { transform: rotate(180deg); }\n\n.ent-user__menu {\n  position: absolute; top: calc(100% + 8px); right: 0;\n  min-width: 190px;\n  background: #0D1E1E;\n  border: 1px solid rgba(42,191,191,0.2);\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.5);\n  overflow: hidden;\n  animation: fadeInUp 0.18s both;\n  z-index: 300;\n}\n.ent-user__menu-header {\n  padding: 13px 15px;\n  border-bottom: 1px solid rgba(42,191,191,0.1);\n}\n.menu-name { font-size: 13px; font-weight: 700; color: rgba(210,240,240,0.9); }\n.menu-email { font-size: 11px; color: rgba(210,240,240,0.4); margin-top: 2px; }\n.menu-item {\n  display: flex; align-items: center; gap: 9px;\n  width: 100%; padding: 11px 15px;\n  background: none; border: none; cursor: pointer;\n  font-size: 13px; font-weight: 500;\n  color: rgba(210,240,240,0.7);\n  transition: all 0.15s; text-align: left;\n}\n.menu-item:hover { background: rgba(42,191,191,0.08); color: rgba(210,240,240,0.95); }\n.menu-item--logout:hover { background: rgba(232,74,74,0.12); color: #E84A4A; }\n\n/* \u2500\u2500 Burger mobile \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-burger {\n  display: none;\n  flex-direction: column; gap: 5px;\n  background: none; border: none; cursor: pointer; padding: 6px;\n}\n.ent-burger span {\n  display: block; width: 20px; height: 2px;\n  background: rgba(210,240,240,0.7); border-radius: 2px; transition: all 0.2s;\n}\n\n/* \u2500\u2500 Mobile nav \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-mobile-nav {\n  display: none; flex-direction: column;\n  background: #0D1E1E;\n  border-top: 1px solid rgba(42,191,191,0.12);\n  max-height: 0; overflow: hidden; transition: max-height 0.3s ease;\n}\n.ent-mobile-nav.open { max-height: 600px; }\n\n.ent-mobile-link {\n  display: flex; align-items: center; gap: 12px;\n  padding: 13px 24px;\n  color: rgba(210,240,240,0.55);\n  text-decoration: none; font-size: 14px; font-weight: 500;\n  border-bottom: 1px solid rgba(42,191,191,0.07);\n  transition: all 0.15s;\n}\n.ent-mobile-link:hover { background: rgba(42,191,191,0.08); color: var(--ent-teal); }\n.ent-mobile-link--active { color: var(--ent-teal); background: rgba(42,191,191,0.08); font-weight: 600; }\n\n.ent-overlay {\n  position: fixed; inset: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 190; backdrop-filter: blur(2px);\n}\n\n/* \u2500\u2500 Hero band \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-hero-band {\n  height: var(--ent-band-h);\n  background: linear-gradient(90deg, #1a9999, #2ABFBF, #5AD5D5, #2ABFBF, #1a9999);\n  background-size: 200% 100%;\n  animation: gradientShift 5s linear infinite;\n  position: relative; overflow: hidden;\n}\n.ent-hero-band__orb {\n  position: absolute; border-radius: 50%; filter: blur(30px); opacity: 0.4;\n}\n.ent-hero-band__orb--1 {\n  width: 120px; height: 40px; background: rgba(255,255,255,0.6);\n  top: -10px; left: 10%; animation: orbFloat 4s ease-in-out infinite;\n}\n.ent-hero-band__orb--2 {\n  width: 80px; height: 30px; background: rgba(255,255,255,0.5);\n  top: -8px; right: 20%; animation: orbFloat 6s ease-in-out infinite reverse;\n}\n\n/* \u2500\u2500 Main content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.ent-main { flex: 1; overflow-y: auto; }\n.ent-content {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 28px 32px;\n}\n\n/* \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 1200px) {\n  /* Hide label text on all links, keep only icons */\n  .ent-link span:not(.ent-link__icon):not(.ent-link__pip) { display: none; }\n  .ent-link { padding: 8px; }\n  .ent-brand__tag { display: none; }\n}\n@media (max-width: 900px) {\n  .ent-nav__links { display: none; }\n  .ent-burger { display: flex; }\n  .ent-mobile-nav { display: flex; }\n  .ent-user__info { display: none; }\n  .ent-user__chevron { display: none; }\n  .ent-content { padding: 16px; }\n}\n\n/* \u2500\u2500 Animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@keyframes gradientShift {\n  0%   { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n}\n@keyframes orbFloat {\n  0%, 100% { transform: translateX(0); }\n  50%       { transform: translateX(30px); }\n}\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* \u2500\u2500 Deep overrides for entrepreneur theme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n:host ::ng-deep .kh-card {\n  background: white;\n  border: 1px solid rgba(42,191,191,0.1);\n  border-radius: 16px;\n}\n:host ::ng-deep .kh-btn--primary {\n  background: linear-gradient(135deg, var(--ent-teal), var(--ent-teal-dark));\n  box-shadow: 0 4px 16px var(--ent-teal-glow);\n}\n:host ::ng-deep .kh-btn--primary:hover {\n  background: linear-gradient(135deg, var(--ent-teal-dark), #147a7a);\n  box-shadow: 0 6px 24px rgba(42,191,191,0.45);\n}\n:host ::ng-deep .kh-progress__fill {\n  background: linear-gradient(90deg, var(--ent-teal), #5AD5D5);\n}\n:host ::ng-deep input:focus,\n:host ::ng-deep select:focus,\n:host ::ng-deep textarea:focus {\n  border-color: var(--ent-teal) !important;\n  box-shadow: 0 0 0 3px rgba(42,191,191,0.15) !important;\n}\n/* Notification item color variants */\n.ent-notif-item.notif-item--warning {\n  border-left: 3px solid rgba(245,166,35,0.7);\n}\n.ent-notif-item.notif-item--error {\n  border-left: 3px solid rgba(232,74,74,0.7);\n}\n \n/* Link hint inside notification */\n.ent-notif-item__link {\n  font-size: 11px;\n  color: var(--ent-teal);\n  font-weight: 600;\n  margin: 4px 0 0;\n  cursor: pointer;\n}\n \n/* Dot colors */\n.dot-warning { background: #F5A623; }\n.dot-error   { background: #E84A4A; }\n.dot-info    { background: #2ABFBF; }\n.dot-success { background: #27AE7A; }"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.NotificationService }, { type: i3.Router }, { type: i4.DomSanitizer }], { onScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutEntrepreneurComponent, { className: "LayoutEntrepreneurComponent", filePath: "app\\layout-entrepreneur\\layout-entrepreneur.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=layout-entrepreneur.component.js.map