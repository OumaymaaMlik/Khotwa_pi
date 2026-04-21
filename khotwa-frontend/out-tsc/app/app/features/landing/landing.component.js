import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function LandingComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", item_r1.anchor, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function LandingComponent_div_65_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div", 78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 79);
    i0.ɵɵelement(3, "polyline", 80);
    i0.ɵɵelementEnd()();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feat_r5 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", feat_r5, " ");
} }
function LandingComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵlistener("click", function LandingComponent_div_65_Template_div_click_0_listener() { const r_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.loginAs(r_r3.role)); });
    i0.ɵɵelementStart(1, "div", 71)(2, "div", 72);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 73);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 74);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 75)(9, "ul", 76);
    i0.ɵɵtemplate(10, LandingComponent_div_65_li_10_Template, 5, 1, "li", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 77);
    i0.ɵɵtext(12, "Access space \u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("--rc", r_r3.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r3.emoji);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r3.desc);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", r_r3.features)("ngForTrackBy", ctx_r3.trackByText);
} }
function LandingComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81)(1, "div", 82);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 83);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 84);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", f_r6.bg);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r6.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r6.desc);
} }
function LandingComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85)(1, "div", 86);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 87);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 88);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap(s_r7.cls);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r7.n);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r7.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r7.desc);
} }
function LandingComponent_div_98_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 100);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(plan_r9.badge);
} }
function LandingComponent_div_98_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 101);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(plan_r9.period);
} }
function LandingComponent_div_98_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div", 102);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 79);
    i0.ɵɵelement(3, "polyline", 80);
    i0.ɵɵelementEnd()();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feat_r10 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", feat_r10, " ");
} }
function LandingComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 89)(1, "div", 90);
    i0.ɵɵtemplate(2, LandingComponent_div_98_span_2_Template, 2, 1, "span", 91);
    i0.ɵɵelementStart(3, "div", 92);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 93);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 94);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 95)(10, "span", 96);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, LandingComponent_div_98_span_12_Template, 2, 1, "span", 97);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "ul", 98);
    i0.ɵɵtemplate(14, LandingComponent_div_98_li_14_Template, 5, 1, "li", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 99);
    i0.ɵɵlistener("click", function LandingComponent_div_98_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r8); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.goLogin()); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const plan_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("--pc", plan_r9.color);
    i0.ɵɵclassProp("pricing-card--featured", plan_r9.featured);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", plan_r9.badge);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r9.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r9.desc);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(plan_r9.price);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", plan_r9.period);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", plan_r9.features)("ngForTrackBy", ctx_r3.trackByText);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("plan-cta--featured", plan_r9.featured);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", plan_r9.cta, " ");
} }
export class LandingComponent {
    constructor(router) {
        this.router = router;
        this.roles = [
            { role: 'entrepreneur', emoji: '🚀', name: 'Future Entrepreneur', color: '#2ABFBF',
                desc: 'Manage your startup, track your incubation journey and collaborate with your coach.',
                features: ['Project management', 'Smart workflows', 'SLA tracking', 'Collaboration workspace', 'Resource library'] },
            { role: 'coach', emoji: '🎯', name: 'Coach / Mentor', color: '#7C5CBF',
                desc: 'Support your startups, validate deliverables and organise your coaching sessions.',
                features: ['Startup tracking', 'Proof-based validation', 'Coaching sessions', 'Direct messaging', 'Personal calendar'] },
        ];
        this.features = [
            { icon: '📁', title: 'Project Management', desc: 'Steps, tasks, deliverables and real-time progress tracking with integrated Gantt view.', color: '#E8622A', bg: 'rgba(232,98,42,0.12)' },
            { icon: '⚡', title: 'Smart Workflows', desc: 'SLA automation, 24h deadline alerts and delay propagation — zero configuration.', color: '#2ABFBF', bg: 'rgba(42,191,191,0.12)' },
            { icon: '✅', title: 'Proof-Based Validation', desc: 'Every task validated with an attached document. Full history and traceability.', color: '#27AE7A', bg: 'rgba(39,174,122,0.12)' },
            { icon: '🤝', title: 'Collaboration Workspace', desc: 'Invite entrepreneurs, manage members, and review live collaboration activity.', color: '#7C5CBF', bg: 'rgba(124,92,191,0.12)' },
            { icon: '📚', title: 'Resource Library', desc: 'Videos, templates, legal guides — filtered by access level and progress tracking.', color: '#F5A623', bg: 'rgba(245,166,35,0.12)' },
            { icon: '💬', title: 'Integrated Messaging', desc: 'Direct communication between all stakeholders with history and attachments.', color: '#E84A4A', bg: 'rgba(232,74,74,0.12)' },
        ];
        this.steps = [
            { n: '1', cls: 's1', title: 'Sign up', desc: 'Choose your role and access your personalised space in seconds.' },
            { n: '2', cls: 's2', title: 'Create your project', desc: 'Define your steps, deliverables and plan your incubation roadmap.' },
            { n: '3', cls: 's3', title: 'Collaborate', desc: 'Work with your coach, validate tasks and track your SLA progress.' },
            { n: '4', cls: 's4', title: 'Get certified', desc: 'Complete all steps and earn your official KHOTWA certification.' },
        ];
        this.navItems = [
            { label: 'Features', anchor: '#fonctionnalites' },
            { label: 'Roles', anchor: '#roles' },
            { label: 'How it works', anchor: '#processus' },
            { label: 'Pricing', anchor: '#pricing' },
            { label: 'Contact', anchor: '#contact' },
        ];
        this.partnerLogos = ['EduTech Pro', 'AgriSmart', 'HealthMobile', 'BTP Connect', 'StartupLab'];
        this.plans = [
            {
                name: 'Starter', icon: '🌱', color: '#2ABFBF', price: 'Free', period: '',
                desc: 'Perfect for individuals exploring the platform.',
                badge: '', featured: false, cta: 'Get started free',
                features: ['1 active project', 'Basic workflows', 'Coach access', 'Resource library', 'Email support'],
            },
            {
                name: 'Growth', icon: '🚀', color: '#E8622A', price: '49dt', period: '/ month',
                desc: 'For entrepreneurs serious about their startup journey.',
                badge: 'Most popular', featured: true, cta: 'Start free trial',
                features: ['Up to 5 projects', 'Advanced workflows & SLA', 'Priority coach matching', 'Analytics dashboard', 'File storage 10 GB', 'Priority support'],
            },
            {
                name: 'Incubator', icon: '🏢', color: '#7C5CBF', price: '89dt', period: '/ month',
                desc: 'For incubators managing multiple startups at scale.',
                badge: '', featured: false, cta: 'Contact us',
                features: ['Unlimited projects', 'Multi-coach management', 'Custom workflows', 'API access', 'White-label branding', 'Dedicated account manager'],
            },
        ];
    }
    goLogin() { this.router.navigateByUrl('/login'); }
    loginAs(role) { this.router.navigateByUrl('/login'); }
    trackByLabel(_, item) { return item.label; }
    trackByTitle(_, item) { return item.title; }
    trackByName(_, item) { return item.name; }
    trackByStep(_, item) { return item.n; }
    trackByText(_, item) { return item; }
    static { this.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LandingComponent, selectors: [["app-landing"]], decls: 148, vars: 10, consts: [[1, "landing"], [1, "navbar"], [1, "nav-logo"], [1, "nav-logo-icon"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "nav-logo-name"], [1, "nav-menu"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nav-right"], [1, "btn-ghost-sm", 3, "click"], [1, "btn-orange-sm", 3, "click"], [1, "hero"], [1, "hero-inner"], [1, "hero-badge"], [1, "badge-pulse"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-actions"], ["type", "button", 1, "btn-primary-lg", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["type", "button", 1, "btn-outline-lg", 3, "click"], [1, "hero-stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], ["id", "roles", 1, "roles-section"], [1, "roles-inner"], [1, "section-header"], [1, "section-eyebrow"], [1, "section-title"], [1, "section-sub"], [1, "roles-grid"], ["class", "role-card", 3, "--rc", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "fonctionnalites", 1, "features-section"], [1, "features-inner"], [2, "text-align", "center", "margin-bottom", "48px"], [1, "section-sub", 2, "margin-bottom", "0"], [1, "features-grid"], ["class", "feat-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "processus", 1, "steps-section"], [1, "steps-inner"], [1, "steps-grid"], ["class", "step-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "pricing", 1, "pricing-section"], [1, "pricing-inner"], [1, "pricing-grid"], ["class", "pricing-card", 3, "pricing-card--featured", "--pc", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "contact", 1, "cta-section"], [1, "cta-inner"], [1, "cta-title"], [1, "cta-sub"], [1, "cta-btns"], ["type", "button", 1, "btn-outline-lg"], [1, "footer"], [1, "footer-top"], [1, "footer-brand-col"], [1, "footer-logo"], [1, "footer-logo-icon"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], [1, "footer-logo-name"], [1, "footer-tagline"], [1, "footer-col-title"], [1, "footer-links-list"], ["href", "#fonctionnalites"], ["href", "#contact"], ["href", "#"], [1, "footer-bottom"], [1, "footer-copy"], [3, "href"], [1, "role-card", 3, "click"], [1, "role-top"], [1, "role-emoji-bg"], [1, "role-name"], [1, "role-desc"], [1, "role-bottom"], [1, "role-list"], [1, "role-cta-btn"], [1, "role-check-icon"], ["width", "10", "height", "10", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [1, "feat-card"], [1, "feat-icon-wrap"], [1, "feat-title"], [1, "feat-desc"], [1, "step-item"], [1, "step-circle"], [1, "step-title"], [1, "step-desc"], [1, "pricing-card"], [1, "pricing-header"], ["class", "plan-badge", 4, "ngIf"], [1, "plan-icon"], [1, "plan-name"], [1, "plan-desc"], [1, "plan-price"], [1, "price-amount"], ["class", "price-period", 4, "ngIf"], [1, "plan-features"], ["type", "button", 1, "plan-cta", 3, "click"], [1, "plan-badge"], [1, "price-period"], [1, "plan-check"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7, "KHOTWA");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "ul", 7);
            i0.ɵɵtemplate(9, LandingComponent_li_9_Template, 3, 2, "li", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 9)(11, "button", 10);
            i0.ɵɵlistener("click", function LandingComponent_Template_button_click_11_listener() { return ctx.goLogin(); });
            i0.ɵɵtext(12, "Sign in");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 11);
            i0.ɵɵlistener("click", function LandingComponent_Template_button_click_13_listener() { return ctx.goLogin(); });
            i0.ɵɵtext(14, "Get started \u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "section", 12)(16, "div", 13)(17, "div", 14);
            i0.ɵɵelement(18, "span", 15);
            i0.ɵɵtext(19, "Next-generation incubation platform");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "h1", 16);
            i0.ɵɵtext(21, "Launch your startup");
            i0.ɵɵelement(22, "br");
            i0.ɵɵelementStart(23, "em");
            i0.ɵɵtext(24, "without friction");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "p", 17);
            i0.ɵɵtext(26, "The all-in-one platform for incubators, entrepreneurs and coaches \u2014 smart workflows, real-time tracking, automated certification.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 18)(28, "button", 19);
            i0.ɵɵlistener("click", function LandingComponent_Template_button_click_28_listener() { return ctx.goLogin(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(29, "svg", 20);
            i0.ɵɵelement(30, "path", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(31, " Start for free ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(32, "button", 21);
            i0.ɵɵlistener("click", function LandingComponent_Template_button_click_32_listener() { return ctx.goLogin(); });
            i0.ɵɵtext(33, "Explore the demo \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 22)(35, "div", 23)(36, "span", 24);
            i0.ɵɵtext(37, "120+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span", 25);
            i0.ɵɵtext(39, "Active projects");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 23)(41, "span", 24);
            i0.ɵɵtext(42, "98%");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "span", 25);
            i0.ɵɵtext(44, "Satisfaction");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 23)(46, "span", 24);
            i0.ɵɵtext(47, "50+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "span", 25);
            i0.ɵɵtext(49, "Incubated startups");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 23)(51, "span", 24);
            i0.ɵɵtext(52, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span", 25);
            i0.ɵɵtext(54, "Roles");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(55, "section", 26)(56, "div", 27)(57, "div", 28)(58, "span", 29);
            i0.ɵɵtext(59, "2 dedicated spaces");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "h2", 30);
            i0.ɵɵtext(61, "A space for every actor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "p", 31);
            i0.ɵɵtext(63, "KHOTWA adapts each interface to the user's exact role for an optimal experience.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "div", 32);
            i0.ɵɵtemplate(65, LandingComponent_div_65_Template, 13, 7, "div", 33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(66, "section", 34)(67, "div", 35)(68, "div", 36)(69, "span", 29);
            i0.ɵɵtext(70, "Everything you need");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "h2", 30);
            i0.ɵɵtext(72, "Key features");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "p", 37);
            i0.ɵɵtext(74, "Built for teams who want to move fast and structure their growth from day one.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "div", 38);
            i0.ɵɵtemplate(76, LandingComponent_div_76_Template, 7, 5, "div", 39);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "section", 40)(78, "div", 41)(79, "div", 28)(80, "span", 29);
            i0.ɵɵtext(81, "Simple & effective");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "h2", 30);
            i0.ɵɵtext(83, "How it works");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "p", 31);
            i0.ɵɵtext(85, "From registration to certification in 4 structured steps.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(86, "div", 42);
            i0.ɵɵtemplate(87, LandingComponent_div_87_Template, 7, 5, "div", 43);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(88, "section", 44)(89, "div", 45)(90, "div", 28)(91, "span", 29);
            i0.ɵɵtext(92, "Simple pricing");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "h2", 30);
            i0.ɵɵtext(94, "Choose your plan");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "p", 31);
            i0.ɵɵtext(96, "Start for free, scale as you grow. No hidden fees.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 46);
            i0.ɵɵtemplate(98, LandingComponent_div_98_Template, 17, 15, "div", 47);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(99, "section", 48)(100, "div", 49)(101, "h2", 50);
            i0.ɵɵtext(102, "Ready to accelerate");
            i0.ɵɵelement(103, "br");
            i0.ɵɵtext(104, "your startup?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "p", 51);
            i0.ɵɵtext(106, "Join teams who trust KHOTWA to turn their ideas into measurable success. Start in less than 5 minutes.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "div", 52)(108, "button", 19);
            i0.ɵɵlistener("click", function LandingComponent_Template_button_click_108_listener() { return ctx.goLogin(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(109, "svg", 20);
            i0.ɵɵelement(110, "path", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(111, " Access the platform ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(112, "button", 53);
            i0.ɵɵtext(113, "Contact us \u2192");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(114, "footer", 54)(115, "div", 55)(116, "div", 56)(117, "div", 57)(118, "div", 58);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(119, "svg", 59);
            i0.ɵɵelement(120, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(121, "span", 60);
            i0.ɵɵtext(122, "KHOTWA");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(123, "p", 61);
            i0.ɵɵtext(124, "Multi-role incubation platform for ambitious entrepreneurs and dedicated coaches.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(125, "div")(126, "p", 62);
            i0.ɵɵtext(127, "Product");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(128, "ul", 63)(129, "li")(130, "a", 64);
            i0.ɵɵtext(131, "Features");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(132, "li")(133, "a", 65);
            i0.ɵɵtext(134, "Contact");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(135, "div")(136, "p", 62);
            i0.ɵɵtext(137, "Support");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "ul", 63)(139, "li")(140, "a", 66);
            i0.ɵɵtext(141, "Documentation");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(142, "li")(143, "a", 66);
            i0.ɵɵtext(144, "Help center");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(145, "div", 67)(146, "p", 68);
            i0.ɵɵtext(147, "\u00A9 2026 KHOTWA. All rights reserved.");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.navItems)("ngForTrackBy", ctx.trackByLabel);
            i0.ɵɵadvance(56);
            i0.ɵɵproperty("ngForOf", ctx.roles)("ngForTrackBy", ctx.trackByName);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.features)("ngForTrackBy", ctx.trackByTitle);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackByStep);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.plans)("ngForTrackBy", ctx.trackByName);
        } }, dependencies: [i2.NgForOf, i2.NgIf], styles: ["[_nghost-%COMP%] { display: block; }\n\n.landing[_ngcontent-%COMP%] {\n  --orange: #E8622A;\n  --orange-light: #FF8C57;\n  --teal: #2ABFBF;\n  --violet: #7C5CBF;\n  --green: #27AE7A;\n  --dark: #0B0F19;\n  --dark-card: #111827;\n  --dark-border: rgba(255,255,255,0.08);\n  --text: #F0EDE8;\n  --text-muted: rgba(240,237,232,0.64);\n  --text-dim: rgba(240,237,232,0.4);\n  background: var(--dark);\n  color: var(--text);\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 0 auto 0;\n  z-index: 100;\n  height: 72px;\n  padding: 0 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(11,15,25,0.8);\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid var(--dark-border);\n}\n.nav-logo[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; text-decoration: none; }\n.nav-logo-icon[_ngcontent-%COMP%] { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, var(--orange), var(--orange-light)); display: flex; align-items: center; justify-content: center; }\n.nav-logo-name[_ngcontent-%COMP%] { font-family: var(--font-heading); font-weight: 800; letter-spacing: 0.08em; color: var(--text); }\n.nav-menu[_ngcontent-%COMP%] { list-style: none; display: flex; gap: 28px; }\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--text-dim); text-decoration: none; font-size: 14px; font-weight: 600; }\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--text); }\n.nav-right[_ngcontent-%COMP%] { display: flex; gap: 10px; }\n\n.hero[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .roles-section[_ngcontent-%COMP%], .steps-section[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] { padding: 96px 64px; }\n\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding-top: 132px;\n  position: relative;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(ellipse 65% 55% at 50% 0%, rgba(232,98,42,0.17), transparent 65%),\n    radial-gradient(ellipse 50% 40% at 15% 85%, rgba(42,191,191,0.1), transparent 60%),\n    radial-gradient(ellipse 45% 35% at 85% 75%, rgba(124,92,191,0.09), transparent 60%);\n  pointer-events: none;\n}\n.hero-inner[_ngcontent-%COMP%] { position: relative; z-index: 1; max-width: 860px; }\n.hero-badge[_ngcontent-%COMP%] { display: inline-flex; gap: 8px; align-items: center; border: 1px solid rgba(232,98,42,0.35); background: rgba(232,98,42,0.12); color: var(--orange); border-radius: 999px; padding: 6px 14px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px; }\n.badge-pulse[_ngcontent-%COMP%] { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }\n.hero-title[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: clamp(40px, 6vw, 76px); line-height: 1.04; letter-spacing: -0.02em; margin-bottom: 18px; }\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] { font-style: normal; background: linear-gradient(90deg, var(--orange), var(--teal)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }\n.hero-sub[_ngcontent-%COMP%] { color: var(--text-muted); max-width: 640px; margin: 0 auto 34px; line-height: 1.7; font-size: 16px; }\n.hero-actions[_ngcontent-%COMP%] { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-bottom: 52px; }\n.hero-stats[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }\n.stat[_ngcontent-%COMP%] { background: rgba(255,255,255,0.03); border: 1px solid var(--dark-border); border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 2px; }\n.stat-value[_ngcontent-%COMP%] { font-family: var(--font-heading); font-weight: 800; font-size: 20px; color: var(--orange); }\n.stat-label[_ngcontent-%COMP%] { color: var(--text-dim); font-size: 12px; }\n\n.section-header[_ngcontent-%COMP%] { text-align: center; max-width: 680px; margin: 0 auto 52px; }\n.section-eyebrow[_ngcontent-%COMP%] { color: var(--orange); font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.09em; display: block; margin-bottom: 12px; }\n.section-title[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: clamp(28px, 3.5vw, 44px); margin-bottom: 12px; letter-spacing: -0.02em; }\n.section-sub[_ngcontent-%COMP%] { color: var(--text-muted); line-height: 1.7; font-size: 15px; }\n\n.roles-section[_ngcontent-%COMP%] { background: rgba(255,255,255,0.012); border-top: 1px solid var(--dark-border); border-bottom: 1px solid var(--dark-border); }\n.roles-inner[_ngcontent-%COMP%], .features-inner[_ngcontent-%COMP%], .steps-inner[_ngcontent-%COMP%], .pricing-inner[_ngcontent-%COMP%], .cta-inner[_ngcontent-%COMP%] { max-width: 1120px; margin: 0 auto; }\n.roles-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }\n.role-card[_ngcontent-%COMP%] { border-radius: 18px; border: 1px solid var(--dark-border); background: var(--dark-card); overflow: hidden; cursor: pointer; transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }\n.role-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); border-color: var(--rc); box-shadow: 0 16px 40px rgba(0,0,0,.3); }\n.role-top[_ngcontent-%COMP%] { padding: 26px 24px 20px; border-bottom: 1px solid var(--dark-border); }\n.role-emoji-bg[_ngcontent-%COMP%] { width: 54px; height: 54px; border-radius: 14px; display: grid; place-items: center; font-size: 26px; margin-bottom: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }\n.role-name[_ngcontent-%COMP%] { font-family: var(--font-heading); color: var(--rc); font-size: 22px; margin-bottom: 8px; }\n.role-desc[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 14px; line-height: 1.6; }\n.role-bottom[_ngcontent-%COMP%] { padding: 18px 24px 24px; }\n.role-list[_ngcontent-%COMP%] { list-style: none; display: grid; gap: 9px; }\n.role-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; gap: 10px; align-items: center; color: var(--text-muted); font-size: 13px; }\n.role-check-icon[_ngcontent-%COMP%] { width: 18px; height: 18px; border-radius: 5px; border: 1px solid var(--dark-border); display: grid; place-items: center; color: var(--rc); flex-shrink: 0; }\n.role-cta-btn[_ngcontent-%COMP%] { width: 100%; margin-top: 16px; padding: 11px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--rc); font-weight: 700; cursor: pointer; }\n.role-cta-btn[_ngcontent-%COMP%]:hover { background: var(--rc); color: #fff; border-color: var(--rc); }\n\n.features-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }\n.feat-card[_ngcontent-%COMP%] { background: var(--dark-card); border: 1px solid var(--dark-border); border-radius: 16px; padding: 24px; transition: transform .2s ease, border-color .2s ease; }\n.feat-card[_ngcontent-%COMP%]:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.18); }\n.feat-icon-wrap[_ngcontent-%COMP%] { width: 50px; height: 50px; border-radius: 13px; border: 1px solid rgba(255,255,255,0.1); display: grid; place-items: center; font-size: 24px; margin-bottom: 14px; }\n.feat-title[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: 18px; margin-bottom: 8px; }\n.feat-desc[_ngcontent-%COMP%] { color: var(--text-muted); line-height: 1.6; font-size: 14px; }\n\n.steps-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }\n.step-item[_ngcontent-%COMP%] { text-align: center; padding: 0 10px; }\n.step-circle[_ngcontent-%COMP%] { width: 54px; height: 54px; border-radius: 50%; margin: 0 auto 16px; display: grid; place-items: center; font-family: var(--font-heading); font-weight: 800; color: #fff; }\n.step-circle.s1[_ngcontent-%COMP%] { background: linear-gradient(135deg, var(--orange), var(--orange-light)); }\n.step-circle.s2[_ngcontent-%COMP%] { background: linear-gradient(135deg, var(--teal), #1ca0a0); }\n.step-circle.s3[_ngcontent-%COMP%] { background: linear-gradient(135deg, var(--violet), #5a3f94); }\n.step-circle.s4[_ngcontent-%COMP%] { background: linear-gradient(135deg, var(--green), #1f8f65); }\n.step-title[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: 17px; margin-bottom: 7px; }\n.step-desc[_ngcontent-%COMP%] { font-size: 13px; color: var(--text-muted); line-height: 1.6; }\n\n.pricing-section[_ngcontent-%COMP%] { background: rgba(255,255,255,0.012); border-top: 1px solid var(--dark-border); }\n.pricing-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }\n.pricing-card[_ngcontent-%COMP%] { background: var(--dark-card); border: 1px solid var(--dark-border); border-radius: 18px; transition: transform .2s ease, border-color .2s ease; }\n.pricing-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); border-color: var(--pc); }\n.pricing-card--featured[_ngcontent-%COMP%] { border-color: var(--pc); box-shadow: 0 0 0 1px var(--pc), 0 12px 30px rgba(0,0,0,0.25); }\n.pricing-header[_ngcontent-%COMP%] { padding: 24px 22px 20px; border-bottom: 1px solid var(--dark-border); }\n.plan-badge[_ngcontent-%COMP%] { display: inline-block; margin-bottom: 10px; padding: 4px 10px; border-radius: 999px; background: var(--pc); color: #fff; font-size: 10px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }\n.plan-icon[_ngcontent-%COMP%] { font-size: 30px; margin-bottom: 10px; }\n.plan-name[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: 22px; margin-bottom: 6px; }\n.plan-desc[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 13px; margin-bottom: 14px; line-height: 1.55; }\n.plan-price[_ngcontent-%COMP%] { display: flex; align-items: baseline; gap: 6px; }\n.price-amount[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: 36px; color: var(--pc); }\n.price-period[_ngcontent-%COMP%] { color: var(--text-muted); font-size: 14px; }\n.plan-features[_ngcontent-%COMP%] { list-style: none; padding: 16px 22px; display: grid; gap: 10px; }\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 9px; color: var(--text-muted); font-size: 13px; }\n.plan-check[_ngcontent-%COMP%] { width: 18px; height: 18px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); display: grid; place-items: center; color: var(--pc); }\n.plan-cta[_ngcontent-%COMP%] { margin: 0 22px 22px; width: calc(100% - 44px); padding: 11px; border-radius: 10px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03); color: var(--pc); font-weight: 700; cursor: pointer; }\n.plan-cta[_ngcontent-%COMP%]:hover, .plan-cta--featured[_ngcontent-%COMP%] { background: var(--pc); color: #fff; border-color: var(--pc); }\n\n.cta-section[_ngcontent-%COMP%] { text-align: center; }\n.cta-title[_ngcontent-%COMP%] { font-family: var(--font-heading); font-size: clamp(32px, 4vw, 52px); line-height: 1.08; margin-bottom: 16px; }\n.cta-sub[_ngcontent-%COMP%] { max-width: 700px; margin: 0 auto 28px; color: var(--text-muted); line-height: 1.7; }\n.cta-btns[_ngcontent-%COMP%] { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }\n\n.btn-ghost-sm[_ngcontent-%COMP%], .btn-orange-sm[_ngcontent-%COMP%], .btn-primary-lg[_ngcontent-%COMP%], .btn-outline-lg[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all .2s ease;\n  cursor: pointer;\n}\n.btn-ghost-sm[_ngcontent-%COMP%] { border: 1px solid var(--dark-border); background: transparent; color: var(--text-muted); padding: 8px 16px; }\n.btn-ghost-sm[_ngcontent-%COMP%]:hover { color: var(--text); border-color: rgba(255,255,255,0.18); }\n.btn-orange-sm[_ngcontent-%COMP%], .btn-primary-lg[_ngcontent-%COMP%] { border: none; background: var(--orange); color: #fff; box-shadow: 0 8px 22px rgba(232,98,42,.35); }\n.btn-orange-sm[_ngcontent-%COMP%]:hover, .btn-primary-lg[_ngcontent-%COMP%]:hover { background: var(--orange-light); transform: translateY(-1px); }\n.btn-orange-sm[_ngcontent-%COMP%] { padding: 8px 16px; }\n.btn-primary-lg[_ngcontent-%COMP%] { padding: 13px 24px; display: inline-flex; align-items: center; gap: 8px; }\n.btn-outline-lg[_ngcontent-%COMP%] { border: 1px solid var(--dark-border); background: transparent; color: var(--text-muted); padding: 12px 22px; }\n.btn-outline-lg[_ngcontent-%COMP%]:hover { color: var(--text); border-color: rgba(255,255,255,.2); background: rgba(255,255,255,.04); }\n\n.footer[_ngcontent-%COMP%] { background: #070A12; border-top: 1px solid var(--dark-border); padding: 58px 64px 28px; }\n.footer-top[_ngcontent-%COMP%] { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 32px; margin-bottom: 36px; max-width: 1120px; margin-inline: auto; }\n.footer-logo[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }\n.footer-logo-icon[_ngcontent-%COMP%] { width: 32px; height: 32px; border-radius: 9px; background: linear-gradient(135deg, var(--orange), var(--orange-light)); display: grid; place-items: center; }\n.footer-logo-name[_ngcontent-%COMP%] { font-family: var(--font-heading); letter-spacing: 0.07em; font-size: 16px; }\n.footer-tagline[_ngcontent-%COMP%] { color: var(--text-dim); max-width: 300px; line-height: 1.7; font-size: 13px; }\n.footer-col-title[_ngcontent-%COMP%] { color: var(--text-dim); text-transform: uppercase; font-size: 11px; letter-spacing: .08em; margin-bottom: 12px; font-weight: 700; }\n.footer-links-list[_ngcontent-%COMP%] { list-style: none; display: grid; gap: 8px; }\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--text-muted); text-decoration: none; font-size: 13px; }\n.footer-links-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--text); }\n.footer-bottom[_ngcontent-%COMP%] { max-width: 1120px; margin: 0 auto; border-top: 1px solid var(--dark-border); padding-top: 20px; }\n.footer-copy[_ngcontent-%COMP%] { color: var(--text-dim); font-size: 12px; }\n\n@media (max-width: 1024px) {\n  .navbar[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .roles-section[_ngcontent-%COMP%], .steps-section[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] { padding-left: 24px; padding-right: 24px; }\n  .nav-menu[_ngcontent-%COMP%] { display: none; }\n  .hero-stats[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .roles-grid[_ngcontent-%COMP%], .features-grid[_ngcontent-%COMP%], .pricing-grid[_ngcontent-%COMP%], .steps-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .footer-top[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LandingComponent, [{
        type: Component,
        args: [{ selector: 'app-landing', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"landing\">\n  <nav class=\"navbar\">\n    <a class=\"nav-logo\">\n      <div class=\"nav-logo-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/></svg></div>\n      <span class=\"nav-logo-name\">KHOTWA</span>\n    </a>\n    <ul class=\"nav-menu\">\n      <li *ngFor=\"let item of navItems; trackBy: trackByLabel\"><a [href]=\"item.anchor\">{{ item.label }}</a></li>\n    </ul>\n    <div class=\"nav-right\">\n      <button class=\"btn-ghost-sm\" (click)=\"goLogin()\">Sign in</button>\n      <button class=\"btn-orange-sm\" (click)=\"goLogin()\">Get started \u2192</button>\n    </div>\n  </nav>\n\n  <section class=\"hero\">\n    <div class=\"hero-inner\">\n      <div class=\"hero-badge\"><span class=\"badge-pulse\"></span>Next-generation incubation platform</div>\n      <h1 class=\"hero-title\">Launch your startup<br><em>without friction</em></h1>\n      <p class=\"hero-sub\">The all-in-one platform for incubators, entrepreneurs and coaches \u2014 smart workflows, real-time tracking, automated certification.</p>\n      <div class=\"hero-actions\">\n        <button class=\"btn-primary-lg\" type=\"button\" (click)=\"goLogin()\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/></svg>\n          Start for free\n        </button>\n        <button class=\"btn-outline-lg\" type=\"button\" (click)=\"goLogin()\">Explore the demo \u2192</button>\n      </div>\n      <div class=\"hero-stats\">\n        <div class=\"stat\"><span class=\"stat-value\">120+</span><span class=\"stat-label\">Active projects</span></div>\n        <div class=\"stat\"><span class=\"stat-value\">98%</span><span class=\"stat-label\">Satisfaction</span></div>\n        <div class=\"stat\"><span class=\"stat-value\">50+</span><span class=\"stat-label\">Incubated startups</span></div>\n        <div class=\"stat\"><span class=\"stat-value\">2</span><span class=\"stat-label\">Roles</span></div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"roles-section\" id=\"roles\">\n    <div class=\"roles-inner\">\n      <div class=\"section-header\">\n        <span class=\"section-eyebrow\">2 dedicated spaces</span>\n        <h2 class=\"section-title\">A space for every actor</h2>\n        <p class=\"section-sub\">KHOTWA adapts each interface to the user's exact role for an optimal experience.</p>\n      </div>\n      <div class=\"roles-grid\">\n        <div *ngFor=\"let r of roles; trackBy: trackByName\" class=\"role-card\" [style.--rc]=\"r.color\" (click)=\"loginAs(r.role)\">\n          <div class=\"role-top\">\n            <div class=\"role-emoji-bg\">{{ r.emoji }}</div>\n            <p class=\"role-name\">{{ r.name }}</p>\n            <p class=\"role-desc\">{{ r.desc }}</p>\n          </div>\n          <div class=\"role-bottom\">\n            <ul class=\"role-list\">\n              <li *ngFor=\"let feat of r.features; trackBy: trackByText\">\n                <div class=\"role-check-icon\">\n                  <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><polyline points=\"20 6 9 17 4 12\"/></svg>\n                </div>\n                {{ feat }}\n              </li>\n            </ul>\n            <button class=\"role-cta-btn\">Access space \u2192</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"features-section\" id=\"fonctionnalites\">\n    <div class=\"features-inner\">\n      <div style=\"text-align:center;margin-bottom:48px\">\n        <span class=\"section-eyebrow\">Everything you need</span>\n        <h2 class=\"section-title\">Key features</h2>\n        <p class=\"section-sub\" style=\"margin-bottom:0\">Built for teams who want to move fast and structure their growth from day one.</p>\n      </div>\n      <div class=\"features-grid\">\n        <div *ngFor=\"let f of features; trackBy: trackByTitle\" class=\"feat-card\">\n          <div class=\"feat-icon-wrap\" [style.background]=\"f.bg\">{{ f.icon }}</div>\n          <h3 class=\"feat-title\">{{ f.title }}</h3>\n          <p class=\"feat-desc\">{{ f.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"steps-section\" id=\"processus\">\n    <div class=\"steps-inner\">\n      <div class=\"section-header\">\n        <span class=\"section-eyebrow\">Simple & effective</span>\n        <h2 class=\"section-title\">How it works</h2>\n        <p class=\"section-sub\">From registration to certification in 4 structured steps.</p>\n      </div>\n      <div class=\"steps-grid\">\n        <div *ngFor=\"let s of steps; trackBy: trackByStep\" class=\"step-item\">\n          <div class=\"step-circle\" [class]=\"s.cls\">{{ s.n }}</div>\n          <h3 class=\"step-title\">{{ s.title }}</h3>\n          <p class=\"step-desc\">{{ s.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n  <section class=\"pricing-section\" id=\"pricing\">\n    <div class=\"pricing-inner\">\n      <div class=\"section-header\">\n        <span class=\"section-eyebrow\">Simple pricing</span>\n        <h2 class=\"section-title\">Choose your plan</h2>\n        <p class=\"section-sub\">Start for free, scale as you grow. No hidden fees.</p>\n      </div>\n      <div class=\"pricing-grid\">\n        <div *ngFor=\"let plan of plans; trackBy: trackByName\" class=\"pricing-card\" [class.pricing-card--featured]=\"plan.featured\" [style.--pc]=\"plan.color\">\n          <div class=\"pricing-header\">\n            <span class=\"plan-badge\" *ngIf=\"plan.badge\">{{ plan.badge }}</span>\n            <div class=\"plan-icon\">{{ plan.icon }}</div>\n            <h3 class=\"plan-name\">{{ plan.name }}</h3>\n            <p class=\"plan-desc\">{{ plan.desc }}</p>\n            <div class=\"plan-price\">\n              <span class=\"price-amount\">{{ plan.price }}</span>\n              <span class=\"price-period\" *ngIf=\"plan.period\">{{ plan.period }}</span>\n            </div>\n          </div>\n          <ul class=\"plan-features\">\n            <li *ngFor=\"let feat of plan.features; trackBy: trackByText\">\n              <div class=\"plan-check\"><svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><polyline points=\"20 6 9 17 4 12\"/></svg></div>\n              {{ feat }}\n            </li>\n          </ul>\n          <button class=\"plan-cta\" type=\"button\" [class.plan-cta--featured]=\"plan.featured\" (click)=\"goLogin()\">\n            {{ plan.cta }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"cta-section\" id=\"contact\">\n    <div class=\"cta-inner\">\n      <h2 class=\"cta-title\">Ready to accelerate<br>your startup?</h2>\n      <p class=\"cta-sub\">Join teams who trust KHOTWA to turn their ideas into measurable success. Start in less than 5 minutes.</p>\n      <div class=\"cta-btns\">\n        <button class=\"btn-primary-lg\" type=\"button\" (click)=\"goLogin()\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/></svg>\n          Access the platform\n        </button>\n        <button class=\"btn-outline-lg\" type=\"button\">Contact us \u2192</button>\n      </div>\n    </div>\n  </section>\n\n  <footer class=\"footer\">\n    <div class=\"footer-top\">\n      <div class=\"footer-brand-col\">\n        <div class=\"footer-logo\">\n          <div class=\"footer-logo-icon\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\"/></svg></div>\n          <span class=\"footer-logo-name\">KHOTWA</span>\n        </div>\n        <p class=\"footer-tagline\">Multi-role incubation platform for ambitious entrepreneurs and dedicated coaches.</p>\n      </div>\n      <div><p class=\"footer-col-title\">Product</p>\n        <ul class=\"footer-links-list\">\n          <li><a href=\"#fonctionnalites\">Features</a></li>\n          <li><a href=\"#contact\">Contact</a></li>\n        </ul>\n      </div>\n      <div><p class=\"footer-col-title\">Support</p>\n        <ul class=\"footer-links-list\">\n          <li><a href=\"#\">Documentation</a></li>\n          <li><a href=\"#\">Help center</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"footer-bottom\">\n      <p class=\"footer-copy\">\u00A9 2026 KHOTWA. All rights reserved.</p>\n    </div>\n  </footer>\n</div>\n", styles: [":host { display: block; }\n\n.landing {\n  --orange: #E8622A;\n  --orange-light: #FF8C57;\n  --teal: #2ABFBF;\n  --violet: #7C5CBF;\n  --green: #27AE7A;\n  --dark: #0B0F19;\n  --dark-card: #111827;\n  --dark-border: rgba(255,255,255,0.08);\n  --text: #F0EDE8;\n  --text-muted: rgba(240,237,232,0.64);\n  --text-dim: rgba(240,237,232,0.4);\n  background: var(--dark);\n  color: var(--text);\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\n.navbar {\n  position: fixed;\n  inset: 0 0 auto 0;\n  z-index: 100;\n  height: 72px;\n  padding: 0 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(11,15,25,0.8);\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid var(--dark-border);\n}\n.nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }\n.nav-logo-icon { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, var(--orange), var(--orange-light)); display: flex; align-items: center; justify-content: center; }\n.nav-logo-name { font-family: var(--font-heading); font-weight: 800; letter-spacing: 0.08em; color: var(--text); }\n.nav-menu { list-style: none; display: flex; gap: 28px; }\n.nav-menu a { color: var(--text-dim); text-decoration: none; font-size: 14px; font-weight: 600; }\n.nav-menu a:hover { color: var(--text); }\n.nav-right { display: flex; gap: 10px; }\n\n.hero,\n.features-section,\n.roles-section,\n.steps-section,\n.pricing-section,\n.cta-section { padding: 96px 64px; }\n\n.hero {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding-top: 132px;\n  position: relative;\n}\n.hero::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(ellipse 65% 55% at 50% 0%, rgba(232,98,42,0.17), transparent 65%),\n    radial-gradient(ellipse 50% 40% at 15% 85%, rgba(42,191,191,0.1), transparent 60%),\n    radial-gradient(ellipse 45% 35% at 85% 75%, rgba(124,92,191,0.09), transparent 60%);\n  pointer-events: none;\n}\n.hero-inner { position: relative; z-index: 1; max-width: 860px; }\n.hero-badge { display: inline-flex; gap: 8px; align-items: center; border: 1px solid rgba(232,98,42,0.35); background: rgba(232,98,42,0.12); color: var(--orange); border-radius: 999px; padding: 6px 14px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px; }\n.badge-pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }\n.hero-title { font-family: var(--font-heading); font-size: clamp(40px, 6vw, 76px); line-height: 1.04; letter-spacing: -0.02em; margin-bottom: 18px; }\n.hero-title em { font-style: normal; background: linear-gradient(90deg, var(--orange), var(--teal)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }\n.hero-sub { color: var(--text-muted); max-width: 640px; margin: 0 auto 34px; line-height: 1.7; font-size: 16px; }\n.hero-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-bottom: 52px; }\n.hero-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }\n.stat { background: rgba(255,255,255,0.03); border: 1px solid var(--dark-border); border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 2px; }\n.stat-value { font-family: var(--font-heading); font-weight: 800; font-size: 20px; color: var(--orange); }\n.stat-label { color: var(--text-dim); font-size: 12px; }\n\n.section-header { text-align: center; max-width: 680px; margin: 0 auto 52px; }\n.section-eyebrow { color: var(--orange); font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.09em; display: block; margin-bottom: 12px; }\n.section-title { font-family: var(--font-heading); font-size: clamp(28px, 3.5vw, 44px); margin-bottom: 12px; letter-spacing: -0.02em; }\n.section-sub { color: var(--text-muted); line-height: 1.7; font-size: 15px; }\n\n.roles-section { background: rgba(255,255,255,0.012); border-top: 1px solid var(--dark-border); border-bottom: 1px solid var(--dark-border); }\n.roles-inner,.features-inner,.steps-inner,.pricing-inner,.cta-inner { max-width: 1120px; margin: 0 auto; }\n.roles-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }\n.role-card { border-radius: 18px; border: 1px solid var(--dark-border); background: var(--dark-card); overflow: hidden; cursor: pointer; transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }\n.role-card:hover { transform: translateY(-4px); border-color: var(--rc); box-shadow: 0 16px 40px rgba(0,0,0,.3); }\n.role-top { padding: 26px 24px 20px; border-bottom: 1px solid var(--dark-border); }\n.role-emoji-bg { width: 54px; height: 54px; border-radius: 14px; display: grid; place-items: center; font-size: 26px; margin-bottom: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }\n.role-name { font-family: var(--font-heading); color: var(--rc); font-size: 22px; margin-bottom: 8px; }\n.role-desc { color: var(--text-muted); font-size: 14px; line-height: 1.6; }\n.role-bottom { padding: 18px 24px 24px; }\n.role-list { list-style: none; display: grid; gap: 9px; }\n.role-list li { display: flex; gap: 10px; align-items: center; color: var(--text-muted); font-size: 13px; }\n.role-check-icon { width: 18px; height: 18px; border-radius: 5px; border: 1px solid var(--dark-border); display: grid; place-items: center; color: var(--rc); flex-shrink: 0; }\n.role-cta-btn { width: 100%; margin-top: 16px; padding: 11px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--rc); font-weight: 700; cursor: pointer; }\n.role-cta-btn:hover { background: var(--rc); color: #fff; border-color: var(--rc); }\n\n.features-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }\n.feat-card { background: var(--dark-card); border: 1px solid var(--dark-border); border-radius: 16px; padding: 24px; transition: transform .2s ease, border-color .2s ease; }\n.feat-card:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.18); }\n.feat-icon-wrap { width: 50px; height: 50px; border-radius: 13px; border: 1px solid rgba(255,255,255,0.1); display: grid; place-items: center; font-size: 24px; margin-bottom: 14px; }\n.feat-title { font-family: var(--font-heading); font-size: 18px; margin-bottom: 8px; }\n.feat-desc { color: var(--text-muted); line-height: 1.6; font-size: 14px; }\n\n.steps-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }\n.step-item { text-align: center; padding: 0 10px; }\n.step-circle { width: 54px; height: 54px; border-radius: 50%; margin: 0 auto 16px; display: grid; place-items: center; font-family: var(--font-heading); font-weight: 800; color: #fff; }\n.step-circle.s1 { background: linear-gradient(135deg, var(--orange), var(--orange-light)); }\n.step-circle.s2 { background: linear-gradient(135deg, var(--teal), #1ca0a0); }\n.step-circle.s3 { background: linear-gradient(135deg, var(--violet), #5a3f94); }\n.step-circle.s4 { background: linear-gradient(135deg, var(--green), #1f8f65); }\n.step-title { font-family: var(--font-heading); font-size: 17px; margin-bottom: 7px; }\n.step-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; }\n\n.pricing-section { background: rgba(255,255,255,0.012); border-top: 1px solid var(--dark-border); }\n.pricing-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }\n.pricing-card { background: var(--dark-card); border: 1px solid var(--dark-border); border-radius: 18px; transition: transform .2s ease, border-color .2s ease; }\n.pricing-card:hover { transform: translateY(-4px); border-color: var(--pc); }\n.pricing-card--featured { border-color: var(--pc); box-shadow: 0 0 0 1px var(--pc), 0 12px 30px rgba(0,0,0,0.25); }\n.pricing-header { padding: 24px 22px 20px; border-bottom: 1px solid var(--dark-border); }\n.plan-badge { display: inline-block; margin-bottom: 10px; padding: 4px 10px; border-radius: 999px; background: var(--pc); color: #fff; font-size: 10px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }\n.plan-icon { font-size: 30px; margin-bottom: 10px; }\n.plan-name { font-family: var(--font-heading); font-size: 22px; margin-bottom: 6px; }\n.plan-desc { color: var(--text-muted); font-size: 13px; margin-bottom: 14px; line-height: 1.55; }\n.plan-price { display: flex; align-items: baseline; gap: 6px; }\n.price-amount { font-family: var(--font-heading); font-size: 36px; color: var(--pc); }\n.price-period { color: var(--text-muted); font-size: 14px; }\n.plan-features { list-style: none; padding: 16px 22px; display: grid; gap: 10px; }\n.plan-features li { display: flex; align-items: center; gap: 9px; color: var(--text-muted); font-size: 13px; }\n.plan-check { width: 18px; height: 18px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); display: grid; place-items: center; color: var(--pc); }\n.plan-cta { margin: 0 22px 22px; width: calc(100% - 44px); padding: 11px; border-radius: 10px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03); color: var(--pc); font-weight: 700; cursor: pointer; }\n.plan-cta:hover,.plan-cta--featured { background: var(--pc); color: #fff; border-color: var(--pc); }\n\n.cta-section { text-align: center; }\n.cta-title { font-family: var(--font-heading); font-size: clamp(32px, 4vw, 52px); line-height: 1.08; margin-bottom: 16px; }\n.cta-sub { max-width: 700px; margin: 0 auto 28px; color: var(--text-muted); line-height: 1.7; }\n.cta-btns { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }\n\n.btn-ghost-sm,.btn-orange-sm,.btn-primary-lg,.btn-outline-lg {\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all .2s ease;\n  cursor: pointer;\n}\n.btn-ghost-sm { border: 1px solid var(--dark-border); background: transparent; color: var(--text-muted); padding: 8px 16px; }\n.btn-ghost-sm:hover { color: var(--text); border-color: rgba(255,255,255,0.18); }\n.btn-orange-sm,.btn-primary-lg { border: none; background: var(--orange); color: #fff; box-shadow: 0 8px 22px rgba(232,98,42,.35); }\n.btn-orange-sm:hover,.btn-primary-lg:hover { background: var(--orange-light); transform: translateY(-1px); }\n.btn-orange-sm { padding: 8px 16px; }\n.btn-primary-lg { padding: 13px 24px; display: inline-flex; align-items: center; gap: 8px; }\n.btn-outline-lg { border: 1px solid var(--dark-border); background: transparent; color: var(--text-muted); padding: 12px 22px; }\n.btn-outline-lg:hover { color: var(--text); border-color: rgba(255,255,255,.2); background: rgba(255,255,255,.04); }\n\n.footer { background: #070A12; border-top: 1px solid var(--dark-border); padding: 58px 64px 28px; }\n.footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 32px; margin-bottom: 36px; max-width: 1120px; margin-inline: auto; }\n.footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }\n.footer-logo-icon { width: 32px; height: 32px; border-radius: 9px; background: linear-gradient(135deg, var(--orange), var(--orange-light)); display: grid; place-items: center; }\n.footer-logo-name { font-family: var(--font-heading); letter-spacing: 0.07em; font-size: 16px; }\n.footer-tagline { color: var(--text-dim); max-width: 300px; line-height: 1.7; font-size: 13px; }\n.footer-col-title { color: var(--text-dim); text-transform: uppercase; font-size: 11px; letter-spacing: .08em; margin-bottom: 12px; font-weight: 700; }\n.footer-links-list { list-style: none; display: grid; gap: 8px; }\n.footer-links-list a { color: var(--text-muted); text-decoration: none; font-size: 13px; }\n.footer-links-list a:hover { color: var(--text); }\n.footer-bottom { max-width: 1120px; margin: 0 auto; border-top: 1px solid var(--dark-border); padding-top: 20px; }\n.footer-copy { color: var(--text-dim); font-size: 12px; }\n\n@media (max-width: 1024px) {\n  .navbar,.hero,.features-section,.roles-section,.steps-section,.pricing-section,.cta-section,.footer { padding-left: 24px; padding-right: 24px; }\n  .nav-menu { display: none; }\n  .hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .roles-grid,.features-grid,.pricing-grid,.steps-grid { grid-template-columns: 1fr; }\n  .footer-top { grid-template-columns: 1fr 1fr; }\n}\n"] }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "app\\features\\landing\\landing.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=landing.component.js.map