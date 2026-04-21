import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/auth.service";
import * as i2 from "../core/services/notification.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
function LayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵlistener("click", function LayoutComponent_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sidebarOpen = false); });
    i0.ɵɵelementEnd();
} }
function LayoutComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 54);
    i0.ɵɵlistener("click", function LayoutComponent_a_21_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sidebarOpen = false); });
    i0.ɵɵelement(1, "span", 55);
    i0.ɵɵelementStart(2, "span", 56);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("nav-item--active", ctx_r1.isActive(item_r4));
    i0.ɵɵproperty("routerLink", ctx_r1.getRoute(item_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.getIcon(item_r4.icon), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
} }
function LayoutComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.nonLus);
} }
function LayoutComponent_div_57_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵlistener("click", function LayoutComponent_div_57_div_6_Template_div_click_0_listener() { const n_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.notifService.markRead(n_r7.id)); });
    i0.ɵɵelement(1, "div", 63);
    i0.ɵɵelementStart(2, "div")(3, "p", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 65);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const n_r7 = ctx.$implicit;
    i0.ɵɵclassProp("unread", !n_r7.lu);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("dot-" + n_r7.type);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(n_r7.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(n_r7.message);
} }
function LayoutComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58)(1, "div", 59)(2, "span");
    i0.ɵɵtext(3, "Notifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 60);
    i0.ɵɵlistener("click", function LayoutComponent_div_57_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.notifService.markAllRead(); return i0.ɵɵresetView(ctx_r1.notifOpen = false); });
    i0.ɵɵtext(5, "Mark all read");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LayoutComponent_div_57_div_6_Template, 7, 6, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.notifs);
} }
export class LayoutComponent {
    constructor(auth, notifService, router) {
        this.auth = auth;
        this.notifService = notifService;
        this.router = router;
        this.sidebarOpen = false;
        this.notifOpen = false;
        this.currentUrl = '';
        this.navItems = [
            { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
            { label: 'Collaborations', icon: 'people', route: 'collaborations' },
            { label: 'Projects', icon: 'folder', route: 'projets' },
            { label: 'Messages', icon: 'message', route: 'messages' },
            { label: 'Library', icon: 'book', route: 'bibliotheque' },
            { label: 'Events', icon: 'event', route: 'evenements' },
            { label: 'Talent Market', icon: 'people', route: 'talent' },
            { label: 'Subscriptions', icon: 'card2', route: 'subscriptions' },
            { label: 'Users', icon: 'users', route: 'utilisateurs' },
        ];
        this.svgIcons = {
            dashboard: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
            folder: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
            workflow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
            message: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
            book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
            rocket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
            check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
            event: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
            people: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
            progress: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
            card2: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><circle cx="7" cy="15" r="1"/></svg>',
            users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        };
    }
    ngOnInit() {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => { this.currentUrl = e.url; });
        this.currentUrl = this.router.url;
        // Si le profil n'est pas encore chargé (firstName vide), le recharger
        if (!this.auth.currentUser?.firstName) {
            this.auth.refreshProfile().subscribe({ next: () => { }, error: () => { } });
        }
    }
    get visibleNav() { return this.navItems; }
    get roleLabel() {
        const r = this.auth.currentUser?.role;
        return r === 'ADMIN' ? 'Administrator' : r === 'ENTREPRENEUR' ? 'Entrepreneur' : r === 'COACH' ? 'Coach' : '';
    }
    get roleColor() {
        const r = this.auth.currentUser?.role;
        return r === 'ADMIN' ? '#E8622A' : r === 'ENTREPRENEUR' ? '#2ABFBF' : '#7C5CBF';
    }
    get rolePrefix() {
        const r = this.auth.currentUser?.role;
        return r === 'ADMIN' ? '/khotwaadmin' : r === 'ENTREPRENEUR' ? '/entrepreneur' : '/coach';
    }
    getRoute(item) { return `${this.rolePrefix}/${item.route}`; }
    getIcon(name) { return this.svgIcons[name] || ''; }
    isActive(item) { return this.currentUrl.includes(`/${item.route}`); }
    logout() { this.auth.logout(); this.router.navigateByUrl('/'); }
    get nonLus() { return this.notifService.nonLus(); }
    get notifs() { return this.notifService.notifs(); }
    static { this.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NotificationService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["app-layout"]], decls: 66, vars: 34, consts: [[1, "app-shell"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "sidebar"], [1, "sidebar__brand"], [1, "brand-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "brand-text"], [1, "brand-name"], [1, "brand-role"], [1, "account-badge"], [1, "account-badge__avatar"], [1, "account-badge__info"], [1, "account-badge__name"], [1, "account-badge__role"], [1, "sidebar__nav"], ["class", "nav-item", 3, "nav-item--active", "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "sidebar__footer"], [1, "user-tile"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-email"], ["title", "Sign out", 1, "logout-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "main-area"], [1, "topbar"], [1, "topbar__menu", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar__search"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026"], [1, "topbar__actions"], [1, "notif-wrapper"], [1, "topbar__icon-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], ["class", "notif-badge", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], ["routerLink", "/", "title", "Home", 1, "topbar__icon-btn"], ["d", "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "topbar__avatar"], [1, "content"], [1, "overlay", 3, "click"], [1, "nav-item", 3, "click", "routerLink"], [1, "nav-item__icon", 3, "innerHTML"], [1, "nav-item__label"], [1, "notif-badge"], [1, "notif-panel"], [1, "notif-panel__header"], [3, "click"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-item__dot"], [1, "notif-item__titre"], [1, "notif-item__msg"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, LayoutComponent_div_1_Template, 1, 0, "div", 1);
            i0.ɵɵelementStart(2, "aside", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "path", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "div", 7)(8, "span", 8);
            i0.ɵɵtext(9, "KHOTWA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 9);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 10)(13, "div", 11);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 12)(16, "span", 13);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span", 14);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "nav", 15);
            i0.ɵɵtemplate(21, LayoutComponent_a_21_Template, 4, 5, "a", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 17)(23, "div", 18)(24, "div", 19);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 20)(27, "p", 21);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p", 22);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "button", 23);
            i0.ɵɵlistener("click", function LayoutComponent_Template_button_click_31_listener() { return ctx.logout(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(32, "svg", 24);
            i0.ɵɵelement(33, "path", 25)(34, "polyline", 26)(35, "line", 27);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(36, "div", 28)(37, "header", 29)(38, "button", 30);
            i0.ɵɵlistener("click", function LayoutComponent_Template_button_click_38_listener() { return ctx.sidebarOpen = !ctx.sidebarOpen; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(39, "svg", 31);
            i0.ɵɵelement(40, "line", 32)(41, "line", 33)(42, "line", 34);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(43, "div", 35);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(44, "svg", 36);
            i0.ɵɵelement(45, "circle", 37)(46, "path", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(47, "input", 39);
            i0.ɵɵelementStart(48, "kbd");
            i0.ɵɵtext(49, "\u2318K");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 40)(51, "div", 41)(52, "button", 42);
            i0.ɵɵlistener("click", function LayoutComponent_Template_button_click_52_listener() { return ctx.notifOpen = !ctx.notifOpen; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(53, "svg", 43);
            i0.ɵɵelement(54, "path", 44)(55, "path", 45);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(56, LayoutComponent_span_56_Template, 2, 1, "span", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(57, LayoutComponent_div_57_Template, 7, 1, "div", 47);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(58, "a", 48);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(59, "svg", 43);
            i0.ɵɵelement(60, "path", 49)(61, "polyline", 50);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(62, "div", 51);
            i0.ɵɵtext(63);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(64, "main", 52);
            i0.ɵɵelement(65, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("sidebar-open", ctx.sidebarOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sidebarOpen);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("open", ctx.sidebarOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("background", "linear-gradient(135deg," + ctx.roleColor + ",#FF9A5C)");
            i0.ɵɵadvance(6);
            i0.ɵɵstyleProp("color", ctx.roleColor);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.roleLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("background", "linear-gradient(135deg," + ctx.roleColor + ",#333)");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate2(" ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName == null ? null : ctx.auth.currentUser.firstName[0], "", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.lastName == null ? null : ctx.auth.currentUser.lastName[0], " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName, " ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.lastName, "");
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("color", ctx.roleColor);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.roleLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.visibleNav);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("background", "linear-gradient(135deg," + ctx.roleColor + ", #333)");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate2(" ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName == null ? null : ctx.auth.currentUser.firstName[0], "", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.lastName == null ? null : ctx.auth.currentUser.lastName[0], " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName, " ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.lastName, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.emailAddress);
            i0.ɵɵadvance(22);
            i0.ɵɵclassProp("active", ctx.notifOpen);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.nonLus > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.notifOpen);
            i0.ɵɵadvance(5);
            i0.ɵɵstyleProp("background", "linear-gradient(135deg," + ctx.roleColor + ", #333)");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.firstName == null ? null : ctx.auth.currentUser.firstName[0], " ");
        } }, dependencies: [i4.NgForOf, i4.NgIf, i3.RouterOutlet, i3.RouterLink], styles: [".app-shell[_ngcontent-%COMP%] {\n  display: flex; height: 100vh; overflow: hidden;\n}\n\n\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.4);\n  z-index: 40; backdrop-filter: blur(2px);\n}\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  background: var(--sidebar-bg);\n  height: 100vh;\n  display: flex; flex-direction: column;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 50;\n  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed; top: 0; left: 0; height: 100vh;\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] { transform: translateX(0); }\n}\n\n\n\n.sidebar__brand[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 22px 20px 18px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 10px;\n  display: flex; align-items: center; justify-content: center; flex-shrink: 0;\n}\n.brand-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 800;\n  letter-spacing: 0.08em; color: #E8E4DC;\n}\n.brand-role[_ngcontent-%COMP%] { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; }\n\n\n\n.account-badge[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 16px 10px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n}\n.account-badge__avatar[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 11px; font-weight: 700; color: white;\n}\n.account-badge__info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 1px; min-width: 0; }\n.account-badge__name[_ngcontent-%COMP%] {\n  font-size: 12px; font-weight: 600; color: rgba(232,228,220,0.85);\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.account-badge__role[_ngcontent-%COMP%] {\n  font-size: 10px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;\n}\n\n\n\n.sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1; overflow-y: auto; padding: 12px 12px;\n  display: flex; flex-direction: column; gap: 2px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 11px;\n  padding: 9px 12px; border-radius: 10px;\n  color: rgba(232,228,220,0.45);\n  text-decoration: none;\n  font-size: 13px; font-weight: 500;\n  transition: all 0.15s;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255,255,255,0.06);\n  color: rgba(232,228,220,0.85);\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: rgba(232,98,42,0.15) !important;\n  color: #FF9A5C !important;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-item__icon[_ngcontent-%COMP%] { color: var(--orange); }\n\n.nav-item__icon[_ngcontent-%COMP%] {\n  width: 20px; display: flex; align-items: center; justify-content: center;\n  flex-shrink: 0; opacity: 0.7;\n}\n.nav-item--active[_ngcontent-%COMP%]   .nav-item__icon[_ngcontent-%COMP%] { opacity: 1; }\n\n\n\n.sidebar__footer[_ngcontent-%COMP%] {\n  padding: 14px 14px;\n  border-top: 1px solid rgba(255,255,255,0.06);\n}\n.user-tile[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px; border-radius: 10px;\n  background: rgba(255,255,255,0.04);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 11px; font-weight: 700; color: white;\n}\n.user-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.user-name[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: rgba(232,228,220,0.9); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.user-email[_ngcontent-%COMP%] { font-size: 10px; color: rgba(232,228,220,0.35); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.logout-btn[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer;\n  color: rgba(232,228,220,0.3); padding: 4px; border-radius: 6px;\n  transition: all 0.15s;\n}\n.logout-btn[_ngcontent-%COMP%]:hover { color: var(--red); background: rgba(232,74,74,0.15); }\n\n\n\n.main-area[_ngcontent-%COMP%] {\n  flex: 1; display: flex; flex-direction: column; overflow: hidden;\n  min-width: 0;\n}\n\n\n\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h); display: flex; align-items: center; gap: 16px;\n  padding: 0 24px; background: white;\n  border-bottom: 1px solid var(--border); flex-shrink: 0;\n  position: relative; z-index: 20;\n}\n.topbar__menu[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer;\n  color: var(--text-secondary); padding: 6px; border-radius: 8px;\n  transition: all 0.15s; display: none;\n}\n@media (max-width: 900px) { .topbar__menu[_ngcontent-%COMP%] { display: flex; } }\n.topbar__menu[_ngcontent-%COMP%]:hover { background: rgba(0,0,0,0.06); color: var(--text-primary); }\n\n.topbar__search[_ngcontent-%COMP%] {\n  flex: 1; max-width: 400px;\n  display: flex; align-items: center; gap: 10px;\n  background: var(--bg-app); border: 1px solid var(--border);\n  border-radius: 10px; padding: 8px 14px;\n}\n.topbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1; border: none; background: none; outline: none;\n  font-size: 13px; color: var(--text-primary); font-family: 'Inter', sans-serif;\n}\n.topbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder { color: var(--text-muted); }\n.topbar__search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { color: var(--text-muted); flex-shrink: 0; }\nkbd[_ngcontent-%COMP%] {\n  font-size: 10px; color: var(--text-muted);\n  background: rgba(0,0,0,0.06); border-radius: 5px;\n  padding: 2px 6px; font-family: inherit;\n}\n\n.topbar__actions[_ngcontent-%COMP%] { margin-left: auto; display: flex; align-items: center; gap: 8px; }\n\n.topbar__icon-btn[_ngcontent-%COMP%] {\n  position: relative; background: none; border: none; cursor: pointer;\n  color: var(--text-secondary); padding: 7px; border-radius: 9px;\n  transition: all 0.15s; text-decoration: none;\n  display: flex; align-items: center; justify-content: center;\n}\n.topbar__icon-btn[_ngcontent-%COMP%]:hover, .topbar__icon-btn.active[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.06); color: var(--text-primary);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute; top: 2px; right: 2px;\n  width: 16px; height: 16px; border-radius: 50%;\n  background: var(--red); color: white;\n  font-size: 9px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid white;\n}\n\n\n\n.notif-wrapper[_ngcontent-%COMP%] { position: relative; }\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 320px; background: white; border-radius: 14px;\n  box-shadow: var(--shadow-elevated); border: 1px solid var(--border);\n  overflow: hidden; z-index: 100;\n  animation: fadeInUp 0.2s both;\n}\n.notif-panel__header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px; border-bottom: 1px solid var(--border);\n  font-weight: 700; font-size: 13px;\n}\n.notif-panel__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer;\n  font-size: 12px; color: var(--orange); font-weight: 600;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; border-bottom: 1px solid var(--border);\n  cursor: pointer; transition: background 0.15s;\n}\n.notif-item.unread[_ngcontent-%COMP%] { background: var(--orange-light); }\n.notif-item[_ngcontent-%COMP%]:hover { background: rgba(0,0,0,0.03); }\n.notif-item__dot[_ngcontent-%COMP%] {\n  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px;\n}\n.dot-warning[_ngcontent-%COMP%] { background: var(--amber); }\n.dot-error[_ngcontent-%COMP%] { background: var(--red); }\n.dot-info[_ngcontent-%COMP%] { background: var(--teal); }\n.dot-success[_ngcontent-%COMP%] { background: var(--green); }\n.notif-item__titre[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: var(--text-primary); }\n.notif-item__msg[_ngcontent-%COMP%] { font-size: 11px; color: var(--text-secondary); margin-top: 2px; line-height: 1.4; }\n\n.topbar__avatar[_ngcontent-%COMP%] {\n  width: 32px; height: 32px; border-radius: 9px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; font-weight: 700; color: white;\n}\n\n\n\n.content[_ngcontent-%COMP%] { flex: 1; overflow-y: auto; padding: 28px 28px; }\n@media (max-width: 640px) { .content[_ngcontent-%COMP%] { padding: 16px; } }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-layout', template: "<div class=\"app-shell\" [class.sidebar-open]=\"sidebarOpen\">\n\n  <div class=\"overlay\" *ngIf=\"sidebarOpen\" (click)=\"sidebarOpen=false\"></div>\n\n  <aside class=\"sidebar\" [class.open]=\"sidebarOpen\">\n    <!-- Brand -->\n    <div class=\"sidebar__brand\">\n      <div class=\"brand-icon\" [style.background]=\"'linear-gradient(135deg,' + roleColor + ',#FF9A5C)'\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/></svg>\n      </div>\n      <div class=\"brand-text\">\n        <span class=\"brand-name\">KHOTWA</span>\n        <span class=\"brand-role\" [style.color]=\"roleColor\">{{ roleLabel }}</span>\n      </div>\n    </div>\n\n    <!-- Current account badge (replaces multi-role switcher) -->\n    <div class=\"account-badge\">\n      <div class=\"account-badge__avatar\" [style.background]=\"'linear-gradient(135deg,' + roleColor + ',#333)'\">\n        {{ auth.currentUser?.firstName?.[0] }}{{ auth.currentUser?.lastName?.[0] }}\n      </div>\n      <div class=\"account-badge__info\">\n        <span class=\"account-badge__name\">{{ auth.currentUser?.firstName }} {{ auth.currentUser?.lastName }}</span>\n        <span class=\"account-badge__role\" [style.color]=\"roleColor\">{{ roleLabel }}</span>\n      </div>\n    </div>\n\n    <!-- Nav -->\n    <nav class=\"sidebar__nav\">\n      <a *ngFor=\"let item of visibleNav\"\n         class=\"nav-item\"\n         [class.nav-item--active]=\"isActive(item)\"\n         [routerLink]=\"getRoute(item)\"\n         (click)=\"sidebarOpen=false\">\n        <span class=\"nav-item__icon\" [innerHTML]=\"getIcon(item.icon)\"></span>\n        <span class=\"nav-item__label\">{{ item.label }}</span>\n      </a>\n    </nav>\n\n    <!-- User footer -->\n    <div class=\"sidebar__footer\">\n      <div class=\"user-tile\">\n        <div class=\"user-avatar\" [style.background]=\"'linear-gradient(135deg,' + roleColor + ', #333)'\">\n          {{ auth.currentUser?.firstName?.[0] }}{{ auth.currentUser?.lastName?.[0] }}\n        </div>\n        <div class=\"user-info\">\n          <p class=\"user-name\">{{ auth.currentUser?.firstName }} {{ auth.currentUser?.lastName }}</p>\n          <p class=\"user-email\">{{ auth.currentUser?.emailAddress }}</p>\n        </div>\n        <button class=\"logout-btn\" (click)=\"logout()\" title=\"Sign out\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><polyline points=\"16 17 21 12 16 7\"/><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/></svg>\n        </button>\n      </div>\n    </div>\n  </aside>\n\n  <div class=\"main-area\">\n    <!-- Topbar -->\n    <header class=\"topbar\">\n      <button class=\"topbar__menu\" (click)=\"sidebarOpen=!sidebarOpen\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"/></svg>\n      </button>\n      <div class=\"topbar__search\">\n        <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.35-4.35\"/></svg>\n        <input type=\"text\" placeholder=\"Search\u2026\" />\n        <kbd>\u2318K</kbd>\n      </div>\n      <div class=\"topbar__actions\">\n        <div class=\"notif-wrapper\">\n          <button class=\"topbar__icon-btn\" (click)=\"notifOpen=!notifOpen\" [class.active]=\"notifOpen\">\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/></svg>\n            <span class=\"notif-badge\" *ngIf=\"nonLus > 0\">{{ nonLus }}</span>\n          </button>\n          <div class=\"notif-panel\" *ngIf=\"notifOpen\">\n            <div class=\"notif-panel__header\">\n              <span>Notifications</span>\n              <button (click)=\"notifService.markAllRead(); notifOpen=false\">Mark all read</button>\n            </div>\n            <div *ngFor=\"let n of notifs\" class=\"notif-item\" [class.unread]=\"!n.lu\" (click)=\"notifService.markRead(n.id)\">\n              <div class=\"notif-item__dot\" [class]=\"'dot-'+n.type\"></div>\n              <div>\n                <p class=\"notif-item__titre\">{{ n.titre }}</p>\n                <p class=\"notif-item__msg\">{{ n.message }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a routerLink=\"/\" class=\"topbar__icon-btn\" title=\"Home\">\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/></svg>\n        </a>\n        <div class=\"topbar__avatar\" [style.background]=\"'linear-gradient(135deg,' + roleColor + ', #333)'\">\n          {{ auth.currentUser?.firstName?.[0] }}\n        </div>\n      </div>\n    </header>\n    <main class=\"content\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n", styles: [".app-shell {\n  display: flex; height: 100vh; overflow: hidden;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550 OVERLAY \u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.overlay {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.4);\n  z-index: 40; backdrop-filter: blur(2px);\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550 SIDEBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.sidebar {\n  width: var(--sidebar-w);\n  background: var(--sidebar-bg);\n  height: 100vh;\n  display: flex; flex-direction: column;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 50;\n  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@media (max-width: 900px) {\n  .sidebar {\n    position: fixed; top: 0; left: 0; height: 100vh;\n    transform: translateX(-100%);\n  }\n  .sidebar.open { transform: translateX(0); }\n}\n\n/* Brand */\n.sidebar__brand {\n  display: flex; align-items: center; gap: 12px;\n  padding: 22px 20px 18px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n}\n.brand-icon {\n  width: 36px; height: 36px; border-radius: 10px;\n  display: flex; align-items: center; justify-content: center; flex-shrink: 0;\n}\n.brand-name {\n  display: block;\n  font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 800;\n  letter-spacing: 0.08em; color: #E8E4DC;\n}\n.brand-role { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; }\n\n/* Role switcher */\n.account-badge {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 16px 10px;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n}\n.account-badge__avatar {\n  width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 11px; font-weight: 700; color: white;\n}\n.account-badge__info { display: flex; flex-direction: column; gap: 1px; min-width: 0; }\n.account-badge__name {\n  font-size: 12px; font-weight: 600; color: rgba(232,228,220,0.85);\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.account-badge__role {\n  font-size: 10px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;\n}\n\n/* Nav */\n.sidebar__nav {\n  flex: 1; overflow-y: auto; padding: 12px 12px;\n  display: flex; flex-direction: column; gap: 2px;\n}\n\n.nav-item {\n  display: flex; align-items: center; gap: 11px;\n  padding: 9px 12px; border-radius: 10px;\n  color: rgba(232,228,220,0.45);\n  text-decoration: none;\n  font-size: 13px; font-weight: 500;\n  transition: all 0.15s;\n  position: relative;\n}\n.nav-item:hover {\n  background: rgba(255,255,255,0.06);\n  color: rgba(232,228,220,0.85);\n}\n.nav-item--active {\n  background: rgba(232,98,42,0.15) !important;\n  color: #FF9A5C !important;\n}\n.nav-item--active .nav-item__icon { color: var(--orange); }\n\n.nav-item__icon {\n  width: 20px; display: flex; align-items: center; justify-content: center;\n  flex-shrink: 0; opacity: 0.7;\n}\n.nav-item--active .nav-item__icon { opacity: 1; }\n\n/* Footer */\n.sidebar__footer {\n  padding: 14px 14px;\n  border-top: 1px solid rgba(255,255,255,0.06);\n}\n.user-tile {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px; border-radius: 10px;\n  background: rgba(255,255,255,0.04);\n}\n.user-avatar {\n  width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 11px; font-weight: 700; color: white;\n}\n.user-info { flex: 1; min-width: 0; }\n.user-name { font-size: 12px; font-weight: 600; color: rgba(232,228,220,0.9); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.user-email { font-size: 10px; color: rgba(232,228,220,0.35); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.logout-btn {\n  background: none; border: none; cursor: pointer;\n  color: rgba(232,228,220,0.3); padding: 4px; border-radius: 6px;\n  transition: all 0.15s;\n}\n.logout-btn:hover { color: var(--red); background: rgba(232,74,74,0.15); }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550 MAIN \u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.main-area {\n  flex: 1; display: flex; flex-direction: column; overflow: hidden;\n  min-width: 0;\n}\n\n/* TOPBAR */\n.topbar {\n  height: var(--topbar-h); display: flex; align-items: center; gap: 16px;\n  padding: 0 24px; background: white;\n  border-bottom: 1px solid var(--border); flex-shrink: 0;\n  position: relative; z-index: 20;\n}\n.topbar__menu {\n  background: none; border: none; cursor: pointer;\n  color: var(--text-secondary); padding: 6px; border-radius: 8px;\n  transition: all 0.15s; display: none;\n}\n@media (max-width: 900px) { .topbar__menu { display: flex; } }\n.topbar__menu:hover { background: rgba(0,0,0,0.06); color: var(--text-primary); }\n\n.topbar__search {\n  flex: 1; max-width: 400px;\n  display: flex; align-items: center; gap: 10px;\n  background: var(--bg-app); border: 1px solid var(--border);\n  border-radius: 10px; padding: 8px 14px;\n}\n.topbar__search input {\n  flex: 1; border: none; background: none; outline: none;\n  font-size: 13px; color: var(--text-primary); font-family: 'Inter', sans-serif;\n}\n.topbar__search input::placeholder { color: var(--text-muted); }\n.topbar__search svg { color: var(--text-muted); flex-shrink: 0; }\nkbd {\n  font-size: 10px; color: var(--text-muted);\n  background: rgba(0,0,0,0.06); border-radius: 5px;\n  padding: 2px 6px; font-family: inherit;\n}\n\n.topbar__actions { margin-left: auto; display: flex; align-items: center; gap: 8px; }\n\n.topbar__icon-btn {\n  position: relative; background: none; border: none; cursor: pointer;\n  color: var(--text-secondary); padding: 7px; border-radius: 9px;\n  transition: all 0.15s; text-decoration: none;\n  display: flex; align-items: center; justify-content: center;\n}\n.topbar__icon-btn:hover, .topbar__icon-btn.active {\n  background: rgba(0,0,0,0.06); color: var(--text-primary);\n}\n.notif-badge {\n  position: absolute; top: 2px; right: 2px;\n  width: 16px; height: 16px; border-radius: 50%;\n  background: var(--red); color: white;\n  font-size: 9px; font-weight: 700;\n  display: flex; align-items: center; justify-content: center;\n  border: 2px solid white;\n}\n\n/* Notif panel */\n.notif-wrapper { position: relative; }\n.notif-panel {\n  position: absolute; top: calc(100% + 10px); right: 0;\n  width: 320px; background: white; border-radius: 14px;\n  box-shadow: var(--shadow-elevated); border: 1px solid var(--border);\n  overflow: hidden; z-index: 100;\n  animation: fadeInUp 0.2s both;\n}\n.notif-panel__header {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 14px 16px; border-bottom: 1px solid var(--border);\n  font-weight: 700; font-size: 13px;\n}\n.notif-panel__header button {\n  background: none; border: none; cursor: pointer;\n  font-size: 12px; color: var(--orange); font-weight: 600;\n}\n.notif-item {\n  display: flex; align-items: flex-start; gap: 12px;\n  padding: 12px 16px; border-bottom: 1px solid var(--border);\n  cursor: pointer; transition: background 0.15s;\n}\n.notif-item.unread { background: var(--orange-light); }\n.notif-item:hover { background: rgba(0,0,0,0.03); }\n.notif-item__dot {\n  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 4px;\n}\n.dot-warning { background: var(--amber); }\n.dot-error { background: var(--red); }\n.dot-info { background: var(--teal); }\n.dot-success { background: var(--green); }\n.notif-item__titre { font-size: 12px; font-weight: 700; color: var(--text-primary); }\n.notif-item__msg { font-size: 11px; color: var(--text-secondary); margin-top: 2px; line-height: 1.4; }\n\n.topbar__avatar {\n  width: 32px; height: 32px; border-radius: 9px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px; font-weight: 700; color: white;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550 CONTENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.content { flex: 1; overflow-y: auto; padding: 28px 28px; }\n@media (max-width: 640px) { .content { padding: 16px; } }\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.NotificationService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "app\\layout\\layout.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=layout.component.js.map