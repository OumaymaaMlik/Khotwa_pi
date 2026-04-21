import {
  FooterComponent,
  SharedModule
} from "./chunk-2PX5TB77.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FQARK65W.js";

// src/app/features/landing/landing.component.ts
function LandingComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", item_r1.anchor, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function LandingComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 56);
    \u0275\u0275listener("click", function LandingComponent_a_16_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileMenuOpen = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("href", item_r4.anchor, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function LandingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59);
    \u0275\u0275element(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 61);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "em");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 63)(13, "button", 51);
    \u0275\u0275listener("click", function LandingComponent_div_21_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goLogin());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 52);
    \u0275\u0275element(15, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Start for free ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 64);
    \u0275\u0275listener("click", function LandingComponent_div_21_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goLogin());
    });
    \u0275\u0275text(18, "Explore the demo \u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(slide_r6.bg + (i_r7 === ctx_r2.sliderIndex ? " slide--active" : ""));
    \u0275\u0275classProp("slide--active", i_r7 === ctx_r2.sliderIndex);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", slide_r6.badge, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", slide_r6.title, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r6.titleAccent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r6.sub);
  }
}
function LandingComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function LandingComponent_button_29_Template_button_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goSlide(i_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("slider-dot--active", i_r9 === ctx_r2.sliderIndex);
  }
}
function LandingComponent_div_64_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 75);
    \u0275\u0275element(3, "polyline", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", feat_r12, " ");
  }
}
function LandingComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function LandingComponent_div_64_Template_div_click_0_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loginAs(r_r11.role));
    });
    \u0275\u0275elementStart(1, "div", 67)(2, "div", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 71)(9, "ul", 72);
    \u0275\u0275template(10, LandingComponent_div_64_li_10_Template, 5, 1, "li", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 73);
    \u0275\u0275text(12, "Access space \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--rc", r_r11.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.desc);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", r_r11.features)("ngForTrackBy", ctx_r2.trackByText);
  }
}
function LandingComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r13.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r13.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r13.desc);
  }
}
function LandingComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r14.cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r14.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r14.desc);
  }
}
function LandingComponent_div_97_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r16.badge);
  }
}
function LandingComponent_div_97_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r16.period);
  }
}
function LandingComponent_div_97_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 98);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 75);
    \u0275\u0275element(3, "polyline", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r17 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", feat_r17, " ");
  }
}
function LandingComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275template(2, LandingComponent_div_97_span_2_Template, 2, 1, "span", 87);
    \u0275\u0275elementStart(3, "div", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 91)(10, "span", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, LandingComponent_div_97_span_12_Template, 2, 1, "span", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ul", 94);
    \u0275\u0275template(14, LandingComponent_div_97_li_14_Template, 5, 1, "li", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 95);
    \u0275\u0275listener("click", function LandingComponent_div_97_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goLogin());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--pc", plan_r16.color);
    \u0275\u0275classProp("pricing-card--featured", plan_r16.featured);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r16.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r16.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r16.desc);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r16.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r16.period);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", plan_r16.features)("ngForTrackBy", ctx_r2.trackByText);
    \u0275\u0275advance();
    \u0275\u0275classProp("plan-cta--featured", plan_r16.featured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r16.cta, " ");
  }
}
var LandingComponent = class _LandingComponent {
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }
  constructor(router) {
    this.router = router;
    this.scrolled = false;
    this.mobileMenuOpen = false;
    this.sliderIndex = 0;
    this.slides = [
      {
        badge: "Next-generation incubation platform",
        title: "Launch your startup",
        titleAccent: "without friction",
        sub: "The all-in-one platform for incubators, entrepreneurs and coaches \u2014 smart workflows, real-time tracking, automated certification.",
        bg: "slide-bg-1"
      },
      {
        badge: "Intelligent coaching",
        title: "Support your",
        titleAccent: "startups to success",
        sub: "Manage your startup portfolio, validate deliverables and organise your coaching sessions from one single space.",
        bg: "slide-bg-2"
      },
      {
        badge: "Resource library",
        title: "Learn,",
        titleAccent: "grow, succeed",
        sub: "Access hundreds of resources \u2014 videos, templates, legal guides \u2014 and track your progress in real time.",
        bg: "slide-bg-3"
      }
    ];
    this.navItems = [
      { label: "Features", anchor: "#fonctionnalites" },
      { label: "Spaces", anchor: "#roles" },
      { label: "How it works", anchor: "#processus" },
      { label: "Pricing", anchor: "#pricing" },
      { label: "Contact", anchor: "#contact" }
    ];
    this.roles = [
      {
        role: "entrepreneur",
        emoji: "\u{1F680}",
        name: "Entrepreneur",
        color: "#2ABFBF",
        desc: "Manage your startup, track your incubation journey and collaborate with your coach.",
        features: ["Project management", "Smart workflows", "SLA tracking", "Planning & deadlines", "Resource library"]
      },
      {
        role: "coach",
        emoji: "\u{1F3AF}",
        name: "Coach / Mentor",
        color: "#0d4a38",
        desc: "Support your startups, validate deliverables and organise your coaching sessions.",
        features: ["Startup tracking", "Proof-based validation", "Coaching sessions", "Direct messaging", "Personal calendar"]
      },
      {
        role: "visitor",
        emoji: "\u2728",
        name: "Talent / Visitor",
        color: "#0d9488",
        desc: "Create your talent profile, browse job listings and submit applications in one place.",
        features: ["Talent profile", "Job board", "Applications tracking", "Skills & CV links"]
      }
    ];
    this.features = [
      { icon: "\u{1F4C1}", title: "Project Management", desc: "Steps, tasks, deliverables and real-time progress tracking with integrated Gantt view.", bg: "rgba(232,98,42,0.08)" },
      { icon: "\u26A1", title: "Smart Workflows", desc: "SLA automation, 24h deadline alerts and delay propagation \u2014 zero configuration.", bg: "rgba(42,191,191,0.08)" },
      { icon: "\u2705", title: "Proof-Based Validation", desc: "Every task validated with an attached document. Full history and traceability.", bg: "rgba(39,174,122,0.08)" },
      { icon: "\u{1F4C5}", title: "Planning & Calendar", desc: "Interactive monthly calendar with coaching slots, deadlines and events.", bg: "rgba(13,74,56,0.08)" },
      { icon: "\u{1F4DA}", title: "Resource Library", desc: "Videos, templates, legal guides \u2014 filtered by access level with progress tracking.", bg: "rgba(245,166,35,0.08)" },
      { icon: "\u{1F4AC}", title: "Integrated Messaging", desc: "Direct communication between all stakeholders with history and attachments.", bg: "rgba(232,74,74,0.08)" }
    ];
    this.steps = [
      { n: "1", cls: "s1", title: "Sign up", desc: "Choose your role and access your personalised space in seconds." },
      { n: "2", cls: "s2", title: "Create your project", desc: "Define your steps, deliverables and plan your incubation roadmap." },
      { n: "3", cls: "s3", title: "Collaborate", desc: "Work with your coach, validate tasks and track your SLA progress." },
      { n: "4", cls: "s4", title: "Get certified", desc: "Complete all steps and earn your official KHOTWA certification." }
    ];
    this.plans = [
      {
        name: "Starter",
        icon: "\u{1F331}",
        color: "#2ABFBF",
        price: "Free",
        period: "",
        desc: "Perfect for individuals exploring the platform.",
        badge: "",
        featured: false,
        cta: "Start for free",
        features: ["1 active project", "Basic workflows", "Coach access", "Resource library", "Email support"]
      },
      {
        name: "Growth",
        icon: "\u{1F680}",
        color: "#E8622A",
        price: "49dt",
        period: "/ month",
        desc: "For entrepreneurs serious about their startup journey.",
        badge: "Most popular",
        featured: true,
        cta: "Start free trial",
        features: ["Up to 5 projects", "Advanced workflows & SLA", "Priority coach", "Analytics dashboard", "10 GB storage", "Priority support"]
      },
      {
        name: "Incubator",
        icon: "\u{1F3E2}",
        color: "#0d4a38",
        price: "89dt",
        period: "/ month",
        desc: "For incubators managing multiple startups at scale.",
        badge: "",
        featured: false,
        cta: "Contact us",
        features: ["Unlimited projects", "Multi-coach management", "Custom workflows", "API access", "White-label branding", "Dedicated account manager"]
      }
    ];
  }
  get currentSlide() {
    return this.slides[this.sliderIndex];
  }
  ngOnInit() {
    this.sliderTimer = setInterval(() => {
      this.sliderIndex = (this.sliderIndex + 1) % this.slides.length;
    }, 5e3);
  }
  ngOnDestroy() {
    clearInterval(this.sliderTimer);
  }
  goSlide(i) {
    this.sliderIndex = i;
  }
  prevSlide() {
    this.sliderIndex = (this.sliderIndex - 1 + this.slides.length) % this.slides.length;
  }
  nextSlide() {
    this.sliderIndex = (this.sliderIndex + 1) % this.slides.length;
  }
  goLogin() {
    this.router.navigateByUrl("/login");
  }
  loginAs(role) {
    this.router.navigateByUrl("/login");
  }
  trackByLabel(_, item) {
    return item.label;
  }
  trackByTitle(_, item) {
    return item.title;
  }
  trackByName(_, item) {
    return item.name;
  }
  trackByStep(_, item) {
    return item.n;
  }
  trackByText(_, item) {
    return item;
  }
  trackByIndex(i) {
    return i;
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(t) {
      return new (t || _LandingComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], hostBindings: function LandingComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function LandingComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 116, vars: 19, consts: [[1, "landing"], [1, "navbar"], ["routerLink", "/", 1, "nav-logo"], ["src", "assets/khotwa-logo.png", "alt", "KHOTWA", 1, "nav-logo-img"], [1, "nav-menu"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nav-right"], [1, "btn-ghost-sm", 3, "click"], [1, "btn-orange-sm", 3, "click"], [1, "nav-burger", 3, "click"], [1, "mobile-menu"], [3, "href", "click", 4, "ngFor", "ngForOf"], [1, "btn-orange-sm", 2, "margin-top", "8px", 3, "click"], [1, "hero-slider"], [1, "slider-track"], ["class", "slide", 3, "slide--active", "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "slider-arrow", "slider-arrow--prev", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "slider-arrow", "slider-arrow--next", 3, "click"], ["points", "9 18 15 12 9 6"], [1, "slider-dots"], ["class", "slider-dot", 3, "slider-dot--active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "hero-stats-bar"], [1, "stat-item"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-sep"], ["id", "roles", 1, "roles-section"], [1, "section-inner"], [1, "section-header"], [1, "section-eyebrow"], [1, "section-title"], [1, "section-sub"], [1, "roles-grid"], ["class", "role-card", 3, "--rc", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "fonctionnalites", 1, "features-section"], [1, "features-grid"], ["class", "feat-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "processus", 1, "steps-section"], [1, "steps-grid"], ["class", "step-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "pricing", 1, "pricing-section"], [1, "pricing-grid"], ["class", "pricing-card", 3, "pricing-card--featured", "--pc", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "contact", 1, "cta-section"], [1, "cta-inner"], [1, "cta-badge"], [1, "cta-title"], [1, "cta-sub"], [1, "cta-btns"], [1, "btn-primary-lg", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "btn-outline-lg"], [3, "href"], [3, "click", "href"], [1, "slide"], [1, "slide-inner"], [1, "hero-badge"], [1, "badge-pulse"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-actions"], [1, "btn-outline-lg", 3, "click"], [1, "slider-dot", 3, "click"], [1, "role-card", 3, "click"], [1, "role-top"], [1, "role-emoji-bg"], [1, "role-name"], [1, "role-desc"], [1, "role-bottom"], [1, "role-list"], [1, "role-cta-btn"], [1, "role-check-icon"], ["width", "10", "height", "10", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [1, "feat-card"], [1, "feat-icon-wrap"], [1, "feat-title"], [1, "feat-desc"], [1, "step-item"], [1, "step-circle"], [1, "step-title"], [1, "step-desc"], [1, "pricing-card"], [1, "pricing-header"], ["class", "plan-badge", 4, "ngIf"], [1, "plan-icon"], [1, "plan-name"], [1, "plan-desc"], [1, "plan-price"], [1, "price-amount"], ["class", "price-period", 4, "ngIf"], [1, "plan-features"], [1, "plan-cta", 3, "click"], [1, "plan-badge"], [1, "price-period"], [1, "plan-check"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 4);
        \u0275\u0275template(5, LandingComponent_li_5_Template, 3, 2, "li", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_7_listener() {
          return ctx.goLogin();
        });
        \u0275\u0275text(8, "Sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 8);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_9_listener() {
          return ctx.goLogin();
        });
        \u0275\u0275text(10, "Get started \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 9);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_11_listener() {
          return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
        });
        \u0275\u0275element(12, "span")(13, "span")(14, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, LandingComponent_a_16_Template, 2, 2, "a", 11);
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_17_listener() {
          return ctx.goLogin();
        });
        \u0275\u0275text(18, "Get started \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "section", 13)(20, "div", 14);
        \u0275\u0275template(21, LandingComponent_div_21_Template, 19, 8, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 16);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_22_listener() {
          return ctx.prevSlide();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 17);
        \u0275\u0275element(24, "polyline", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "button", 19);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_25_listener() {
          return ctx.nextSlide();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 17);
        \u0275\u0275element(27, "polyline", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "div", 21);
        \u0275\u0275template(29, LandingComponent_button_29_Template, 1, 2, "button", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 23)(31, "div", 24)(32, "span", 25);
        \u0275\u0275text(33, "120+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 26);
        \u0275\u0275text(35, "Active projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(36, "div", 27);
        \u0275\u0275elementStart(37, "div", 24)(38, "span", 25);
        \u0275\u0275text(39, "98%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 26);
        \u0275\u0275text(41, "Satisfaction");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(42, "div", 27);
        \u0275\u0275elementStart(43, "div", 24)(44, "span", 25);
        \u0275\u0275text(45, "50+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 26);
        \u0275\u0275text(47, "Incubated startups");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(48, "div", 27);
        \u0275\u0275elementStart(49, "div", 24)(50, "span", 25);
        \u0275\u0275text(51, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 26);
        \u0275\u0275text(53, "Dedicated roles");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "section", 28)(55, "div", 29)(56, "div", 30)(57, "span", 31);
        \u0275\u0275text(58, "2 dedicated spaces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h2", 32);
        \u0275\u0275text(60, "A space for every role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 33);
        \u0275\u0275text(62, "KHOTWA tailors each interface to the user's exact role for an optimal experience.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 34);
        \u0275\u0275template(64, LandingComponent_div_64_Template, 13, 7, "div", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "section", 36)(66, "div", 29)(67, "div", 30)(68, "span", 31);
        \u0275\u0275text(69, "Everything you need");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "h2", 32);
        \u0275\u0275text(71, "Key features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 33);
        \u0275\u0275text(73, "Built for teams who want to move fast and structure their growth from day one.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 37);
        \u0275\u0275template(75, LandingComponent_div_75_Template, 7, 5, "div", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "section", 39)(77, "div", 29)(78, "div", 30)(79, "span", 31);
        \u0275\u0275text(80, "Simple & effective");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h2", 32);
        \u0275\u0275text(82, "How it works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p", 33);
        \u0275\u0275text(84, "From sign-up to certification in 4 structured steps.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 40);
        \u0275\u0275template(86, LandingComponent_div_86_Template, 7, 5, "div", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "section", 42)(88, "div", 29)(89, "div", 30)(90, "span", 31);
        \u0275\u0275text(91, "Simple pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "h2", 32);
        \u0275\u0275text(93, "Choose your plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p", 33);
        \u0275\u0275text(95, "Start for free, scale as you grow. No hidden fees.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 43);
        \u0275\u0275template(97, LandingComponent_div_97_Template, 17, 15, "div", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "section", 45)(99, "div", 46)(100, "div", 47);
        \u0275\u0275text(101, "\u{1F680} Join KHOTWA today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "h2", 48);
        \u0275\u0275text(103, "Ready to accelerate");
        \u0275\u0275element(104, "br");
        \u0275\u0275text(105, "your startup?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p", 49);
        \u0275\u0275text(107, "Join teams who trust KHOTWA to turn their ideas into measurable success. Get started in under 5 minutes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 50)(109, "button", 51);
        \u0275\u0275listener("click", function LandingComponent_Template_button_click_109_listener() {
          return ctx.goLogin();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(110, "svg", 52);
        \u0275\u0275element(111, "path", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, " Access the platform ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(113, "button", 54);
        \u0275\u0275text(114, "Contact us \u2192");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(115, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("navbar--scrolled", ctx.scrolled);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.navItems)("ngForTrackBy", ctx.trackByLabel);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("open", ctx.mobileMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.navItems);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.slides)("ngForTrackBy", ctx.trackByIndex);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.slides)("ngForTrackBy", ctx.trackByIndex);
        \u0275\u0275advance(35);
        \u0275\u0275property("ngForOf", ctx.roles)("ngForTrackBy", ctx.trackByName);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.features)("ngForTrackBy", ctx.trackByTitle);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackByStep);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.plans)("ngForTrackBy", ctx.trackByName);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, FooterComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.landing[_ngcontent-%COMP%] {\n  --orange: #E8622A;\n  --orange-lt: #FF8C57;\n  --orange-bg: #FEF0E9;\n  --teal: #2ABFBF;\n  --teal-bg: #E6F9F9;\n  --coach: #0d4a38;\n  --coach-bg: #E6F3EF;\n  --green: #27AE7A;\n  --violet: #7C5CBF;\n  --bg: #FAFAF8;\n  --bg-alt: #F4F2EE;\n  --card: #FFFFFF;\n  --text: #111827;\n  --text-sec: #4B5563;\n  --text-muted: #9CA3AF;\n  --border: rgba(0,0,0,0.07);\n  --shadow-card: 0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);\n  background: var(--bg);\n  color: var(--text);\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 0 auto 0;\n  z-index: 200;\n  height: 68px;\n  padding: 0 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(250, 250, 248, 0.88);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid var(--border);\n  transition: box-shadow 0.3s;\n}\n.navbar--scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.nav-logo-img[_ngcontent-%COMP%] {\n  height: 44px;\n  width: auto;\n  object-fit: contain;\n  filter: brightness(1);\n}\n.nav-logo-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 800;\n  font-size: 16px;\n  letter-spacing: 0.07em;\n  color: var(--text);\n}\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 24px;\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.15s;\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--orange);\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.nav-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.nav-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: var(--text-sec);\n  border-radius: 2px;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 4px;\n  position: fixed;\n  top: 68px;\n  inset-inline: 0;\n  z-index: 190;\n  background: white;\n  border-bottom: 1px solid var(--border);\n  padding: 16px 24px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--border);\n}\n.hero-slider[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding-top: 68px;\n}\n.slider-track[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 600px;\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  transition: opacity 0.7s ease, transform 0.7s ease;\n  transform: translateX(30px);\n  padding: 80px 48px 60px;\n}\n.slide--active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n  z-index: 1;\n}\n.slide-bg-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FEF0E9 0%,\n      #FAFAF8 40%,\n      #E6F9F9 100%);\n}\n.slide-bg-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E6F3EF 0%,\n      #F0F9F5 40%,\n      #E6F9F9 100%);\n}\n.slide-bg-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF 0%,\n      #FAFAF8 40%,\n      #FEF0E9 100%);\n}\n.slide[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse 60% 50% at 20% 20%,\n      rgba(232, 98, 42, 0.07),\n      transparent 60%),\n    radial-gradient(\n      ellipse 50% 40% at 80% 80%,\n      rgba(42, 191, 191, 0.08),\n      transparent 60%);\n  pointer-events: none;\n}\n.slide-bg-2[_ngcontent-%COMP%]::before {\n  background:\n    radial-gradient(\n      ellipse 60% 50% at 20% 30%,\n      rgba(13, 74, 56, 0.07),\n      transparent 60%),\n    radial-gradient(\n      ellipse 50% 40% at 80% 70%,\n      rgba(42, 191, 191, 0.08),\n      transparent 60%);\n}\n.slide-bg-3[_ngcontent-%COMP%]::before {\n  background:\n    radial-gradient(\n      ellipse 60% 50% at 30% 20%,\n      rgba(124, 92, 191, 0.07),\n      transparent 60%),\n    radial-gradient(\n      ellipse 50% 40% at 70% 80%,\n      rgba(232, 98, 42, 0.06),\n      transparent 60%);\n}\n.slide-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n  border: 1px solid rgba(232, 98, 42, 0.25);\n  background: rgba(232, 98, 42, 0.07);\n  color: var(--orange);\n  border-radius: 999px;\n  padding: 6px 16px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n}\n.badge-pulse[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--orange);\n  animation: _ngcontent-%COMP%_pulse-dot 2s infinite;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: clamp(38px, 6vw, 72px);\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n  color: var(--text);\n  margin-bottom: 18px;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  background:\n    linear-gradient(\n      90deg,\n      var(--orange),\n      var(--teal));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.slide-bg-2[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--coach),\n      var(--teal));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  max-width: 600px;\n  margin: 0 auto 36px;\n  line-height: 1.75;\n  font-size: 16px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.slider-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid var(--border);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-sec);\n  transition: all 0.2s;\n}\n.slider-arrow[_ngcontent-%COMP%]:hover {\n  background: var(--orange);\n  color: white;\n  border-color: var(--orange);\n}\n.slider-arrow--prev[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.slider-arrow--next[_ngcontent-%COMP%] {\n  right: 24px;\n}\n.slider-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 8px;\n  z-index: 10;\n}\n.slider-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.15);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.slider-dot--active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: var(--orange);\n}\n.hero-stats-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid var(--border);\n  padding: 20px 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  flex-shrink: 0;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  padding: 0 32px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--orange);\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--border);\n}\n.section-inner[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.roles-section[_ngcontent-%COMP%] {\n  padding: 96px 48px;\n  background: var(--bg-alt);\n}\n.features-section[_ngcontent-%COMP%] {\n  padding: 96px 48px;\n  background: var(--bg);\n}\n.steps-section[_ngcontent-%COMP%] {\n  padding: 96px 48px;\n  background: var(--bg-alt);\n}\n.pricing-section[_ngcontent-%COMP%] {\n  padding: 96px 48px;\n  background: var(--bg);\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 96px 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #FEF0E9,\n      #FAFAF8,\n      #E6F9F9);\n  text-align: center;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 680px;\n  margin: 0 auto 52px;\n}\n.section-eyebrow[_ngcontent-%COMP%] {\n  color: var(--orange);\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.09em;\n  display: block;\n  margin-bottom: 10px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: clamp(28px, 3.5vw, 42px);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--text);\n  margin-bottom: 12px;\n}\n.section-sub[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  line-height: 1.75;\n  font-size: 15px;\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n.role-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid var(--border);\n  background: var(--card);\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: var(--shadow-card);\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: var(--rc);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);\n}\n.role-top[_ngcontent-%COMP%] {\n  padding: 28px 26px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.role-emoji-bg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  font-size: 26px;\n  margin-bottom: 14px;\n  background: color-mix(in srgb, var(--rc) 10%, white);\n  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);\n}\n.role-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  color: var(--rc);\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.role-desc[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  font-size: 14px;\n  line-height: 1.65;\n}\n.role-bottom[_ngcontent-%COMP%] {\n  padding: 20px 26px 26px;\n}\n.role-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.role-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  color: var(--text-sec);\n  font-size: 13px;\n}\n.role-check-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  background: color-mix(in srgb, var(--rc) 8%, white);\n  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);\n  display: grid;\n  place-items: center;\n  color: var(--rc);\n  flex-shrink: 0;\n}\n.role-cta-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 18px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1.5px solid color-mix(in srgb, var(--rc) 35%, transparent);\n  background: color-mix(in srgb, var(--rc) 5%, white);\n  color: var(--rc);\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.role-cta-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rc);\n  color: #fff;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.feat-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  padding: 26px;\n  box-shadow: var(--shadow-card);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.feat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.feat-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 13px;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  margin-bottom: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.feat-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.feat-desc[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  line-height: 1.65;\n  font-size: 14px;\n}\n.steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n.step-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 12px;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  display: grid;\n  place-items: center;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 800;\n  color: #fff;\n  font-size: 18px;\n}\n.step-circle.s1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-lt));\n}\n.step-circle.s2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--teal),\n      #1ca0a0);\n}\n.step-circle.s3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--coach),\n      #0a5e48);\n}\n.step-circle.s4[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--green),\n      #1f8f65);\n}\n.step-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.step-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-sec);\n  line-height: 1.65;\n}\n.pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.pricing-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1.5px solid var(--border);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: var(--shadow-card);\n  transition: transform 0.2s;\n}\n.pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.pricing-card--featured[_ngcontent-%COMP%] {\n  border-color: var(--pc);\n  box-shadow: 0 0 0 1px var(--pc), 0 16px 40px rgba(0, 0, 0, 0.1);\n}\n.pricing-header[_ngcontent-%COMP%] {\n  padding: 26px 24px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.plan-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 4px 12px;\n  border-radius: 999px;\n  background: var(--pc);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: .05em;\n  text-transform: uppercase;\n}\n.plan-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 10px;\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 6px;\n}\n.plan-desc[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  font-size: 13px;\n  margin-bottom: 16px;\n  line-height: 1.6;\n}\n.plan-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 38px;\n  font-weight: 800;\n  color: var(--pc);\n}\n.price-period[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.plan-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 18px 24px;\n  display: grid;\n  gap: 10px;\n}\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--text-sec);\n  font-size: 13px;\n}\n.plan-check[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  flex-shrink: 0;\n  background: color-mix(in srgb, var(--pc) 10%, white);\n  border: 1px solid color-mix(in srgb, var(--pc) 25%, transparent);\n  display: grid;\n  place-items: center;\n  color: var(--pc);\n}\n.plan-cta[_ngcontent-%COMP%] {\n  margin: 0 24px 24px;\n  width: calc(100% - 48px);\n  padding: 12px;\n  border-radius: 10px;\n  border: 1.5px solid color-mix(in srgb, var(--pc) 30%, transparent);\n  background: color-mix(in srgb, var(--pc) 6%, white);\n  color: var(--pc);\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.plan-cta[_ngcontent-%COMP%]:hover, .plan-cta--featured[_ngcontent-%COMP%] {\n  background: var(--pc);\n  color: #fff;\n  border-color: var(--pc);\n}\n.cta-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 999px;\n  background: rgba(232, 98, 42, 0.1);\n  color: var(--orange);\n  font-size: 13px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: clamp(32px, 4vw, 52px);\n  line-height: 1.08;\n  font-weight: 800;\n  color: var(--text);\n  margin-bottom: 16px;\n}\n.cta-sub[_ngcontent-%COMP%] {\n  color: var(--text-sec);\n  max-width: 600px;\n  margin: 0 auto 32px;\n  line-height: 1.75;\n}\n.cta-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-ghost-sm[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-sec);\n  padding: 8px 18px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-ghost-sm[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--text);\n}\n.btn-orange-sm[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--orange);\n  color: #fff;\n  padding: 8px 18px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(232, 98, 42, 0.3);\n  transition: all 0.2s;\n}\n.btn-orange-sm[_ngcontent-%COMP%]:hover {\n  background: var(--orange-lt);\n  transform: translateY(-1px);\n}\n.btn-primary-lg[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--orange);\n  color: #fff;\n  padding: 13px 26px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(232, 98, 42, 0.32);\n  transition: all 0.2s;\n}\n.btn-primary-lg[_ngcontent-%COMP%]:hover {\n  background: var(--orange-lt);\n  transform: translateY(-1px);\n  box-shadow: 0 8px 28px rgba(232, 98, 42, 0.4);\n}\n.btn-outline-lg[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--border);\n  background: white;\n  color: var(--text-sec);\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-outline-lg[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n  color: var(--orange);\n  background: var(--orange-bg);\n}\n@media (max-width: 1024px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .hero-stats-bar[_ngcontent-%COMP%] {\n    padding: 16px 24px;\n    gap: 0;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .roles-section[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .steps-section[_ngcontent-%COMP%], .pricing-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {\n    padding: 72px 24px;\n  }\n  .features-grid[_ngcontent-%COMP%], .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .roles-grid[_ngcontent-%COMP%], .features-grid[_ngcontent-%COMP%], .pricing-grid[_ngcontent-%COMP%], .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .slider-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-stats-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .stat-sep[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 8px 16px;\n  }\n  .slide[_ngcontent-%COMP%] {\n    padding: 80px 20px 60px;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "app\\features\\landing\\landing.component.ts", lineNumber: 11 });
})();

// src/app/features/landing/landing.module.ts
var routes = [{ path: "", component: LandingComponent }];
var LandingModule = class _LandingModule {
  static {
    this.\u0275fac = function LandingModule_Factory(t) {
      return new (t || _LandingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LandingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule.forChild(routes), SharedModule] });
  }
};
export {
  LandingModule
};
//# sourceMappingURL=chunk-YXTBYLQA.js.map
