import {
  AuthService
} from "./chunk-3A6GV6NY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-S476STP4.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FQARK65W.js";

// src/app/features/auth/login.component.ts
function LoginComponent_div_15_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LoginComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h1");
    \u0275\u0275text(2, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "Sign in to your KHOTWA account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "label");
    \u0275\u0275text(7, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_15_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "label");
    \u0275\u0275text(11, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, LoginComponent_div_15_p_13_Template, 2, 1, "p", 17);
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275listener("click", function LoginComponent_div_15_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signIn());
    });
    \u0275\u0275text(15, "Sign In \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 19);
    \u0275\u0275text(17, "Don't have an account? ");
    \u0275\u0275elementStart(18, "a", 20);
    \u0275\u0275listener("click", function LoginComponent_div_15_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode = "signup");
    });
    \u0275\u0275text(19, "Sign up");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function LoginComponent_div_16_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function LoginComponent_div_16_div_26_Template_div_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedRole = r_r5.role);
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--c", r_r5.color);
    \u0275\u0275classProp("selected", ctx_r1.selectedRole === r_r5.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.label);
  }
}
function LoginComponent_div_16_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h1");
    \u0275\u0275text(2, "Create your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "Join KHOTWA and start your journey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 14)(7, "label");
    \u0275\u0275text(8, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_16_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.firstName, $event) || (ctx_r1.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_16_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.lastName, $event) || (ctx_r1.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 14)(15, "label");
    \u0275\u0275text(16, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_16_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "label");
    \u0275\u0275text(20, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_16_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "label");
    \u0275\u0275text(24, "I am a\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25);
    \u0275\u0275template(26, LoginComponent_div_16_div_26_Template, 5, 6, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, LoginComponent_div_16_p_27_Template, 2, 1, "p", 17);
    \u0275\u0275elementStart(28, "button", 18);
    \u0275\u0275listener("click", function LoginComponent_div_16_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signUp());
    });
    \u0275\u0275text(29, "Create account \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 19);
    \u0275\u0275text(31, "Already have an account? ");
    \u0275\u0275elementStart(32, "a", 20);
    \u0275\u0275listener("click", function LoginComponent_div_16_Template_a_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode = "signin");
    });
    \u0275\u0275text(33, "Sign in");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.mode = "signin";
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.selectedRole = "entrepreneur";
    this.error = "";
    this.roles = [
      { role: "entrepreneur", label: "Entrepreneur", color: "#2ABFBF", icon: "\u{1F680}" },
      { role: "coach", label: "Coach / Mentor", color: "#7C5CBF", icon: "\u{1F3AF}" },
      { role: "visitor", label: "Talent / Visitor", color: "#0d9488", icon: "\u2728" }
    ];
  }
  signIn() {
    this.error = "";
    if (!this.email || !this.password) {
      this.error = "Please fill in all fields.";
      return;
    }
    const mockMap = {
      "admin@khotwa.tn": "admin",
      "sara@startup.tn": "entrepreneur",
      "ahmed@coach.tn": "coach",
      "visitor@khotwa.tn": "visitor"
    };
    const role = mockMap[this.email.toLowerCase()];
    if (!role) {
      this.error = "Invalid credentials. Try sara@startup.tn, ahmed@coach.tn, or visitor@khotwa.tn.";
      return;
    }
    this.auth.login(role);
    this.router.navigateByUrl(this.auth.getDefaultRoute());
  }
  signUp() {
    this.error = "";
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = "Please fill in all fields.";
      return;
    }
    this.auth.login(this.selectedRole);
    this.router.navigateByUrl(this.auth.getDefaultRoute());
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 17, vars: 6, consts: [[1, "login"], [1, "bg"], [1, "glow"], [1, "content"], [1, "brand"], [1, "brand-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "brand-name"], [1, "auth-tabs"], [1, "tab-btn", 3, "click"], ["class", "auth-form", 4, "ngIf"], [1, "auth-form"], [1, "subtitle"], [1, "form-group"], ["type", "email", "placeholder", "you@example.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "btn-submit", 3, "click"], [1, "form-switch"], [3, "click"], [1, "form-error"], [1, "form-row"], ["type", "text", "placeholder", "Sara", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Trabelsi", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "role-pick"], ["class", "role-pick-card", 3, "selected", "--c", "click", 4, "ngFor", "ngForOf"], [1, "role-pick-card", 3, "click"], [1, "rp-icon"], [1, "rp-label"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275text(9, "KHOTWA");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_11_listener() {
          return ctx.mode = "signin";
        });
        \u0275\u0275text(12, "Sign In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_13_listener() {
          return ctx.mode = "signup";
        });
        \u0275\u0275text(14, "Sign Up");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, LoginComponent_div_15_Template, 20, 3, "div", 11)(16, LoginComponent_div_16_Template, 34, 6, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.mode === "signin");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.mode === "signup");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.mode === "signin");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "signup");
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.login[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #080C10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  position: relative;\n  overflow: hidden;\n}\n.bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(232, 228, 220, 0.025) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(232, 228, 220, 0.025) 1px,\n      transparent 1px);\n  background-size: 60px 60px;\n}\n.glow[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(232, 98, 42, 0.12),\n      transparent 70%);\n  top: -100px;\n  left: -100px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_drift 12s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_drift {\n  from {\n    transform: translate(0, 0);\n  }\n  to {\n    transform: translate(100px, 80px);\n  }\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 480px;\n  width: 100%;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 32px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.5s both;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #E8622A,\n      #FF7A40);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #E8E4DC;\n}\n.auth-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 4px;\n  margin-bottom: 28px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.5s 0.05s both;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px;\n  border-radius: 9px;\n  border: none;\n  background: transparent;\n  color: rgba(232, 228, 220, 0.45);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #E8622A;\n  color: white;\n  box-shadow: 0 4px 14px rgba(232, 98, 42, 0.4);\n}\n.auth-form[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 32px;\n  text-align: left;\n  animation: _ngcontent-%COMP%_fadeInDown 0.4s 0.1s both;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 24px;\n  font-weight: 800;\n  color: #E8E4DC;\n  margin-bottom: 6px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(232, 228, 220, 0.45);\n  margin-bottom: 24px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: rgba(232, 228, 220, 0.55);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.form-input[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  padding: 11px 14px;\n  color: #E8E4DC;\n  font-size: 14px;\n  font-family: "Nunito Sans", sans-serif;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #E8622A;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(232, 228, 220, 0.2);\n}\n.role-pick[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 4px;\n}\n.role-pick-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.role-pick-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--c);\n  background: color-mix(in srgb, var(--c) 12%, transparent);\n}\n.rp-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.rp-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #E8E4DC;\n}\n.form-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FF6B6B;\n  margin-bottom: 12px;\n  padding: 8px 12px;\n  background: rgba(255, 107, 107, 0.1);\n  border-radius: 8px;\n  border: 1px solid rgba(255, 107, 107, 0.2);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #E8622A,\n      #FF7A40);\n  border: none;\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 18px rgba(232, 98, 42, 0.4);\n  margin-top: 4px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(232, 98, 42, 0.55);\n}\n.form-switch[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(232, 228, 220, 0.4);\n  text-align: center;\n  margin-top: 18px;\n}\n.form-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E8622A;\n  cursor: pointer;\n  font-weight: 600;\n}\n.form-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\features\\auth\\login.component.ts", lineNumber: 7 });
})();

// src/app/features/auth/auth.module.ts
var routes = [{ path: "", component: LoginComponent }];
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(t) {
      return new (t || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, RouterModule.forChild(routes)] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-ZEQ7PTUP.js.map
