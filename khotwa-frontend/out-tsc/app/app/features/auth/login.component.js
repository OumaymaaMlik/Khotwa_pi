import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function LoginComponent_form_15_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function LoginComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 12);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_15_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.signIn()); });
    i0.ɵɵelementStart(1, "h1");
    i0.ɵɵtext(2, "Welcome back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 13);
    i0.ɵɵtext(4, "Sign in to your KHOTWA account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14)(6, "label", 15);
    i0.ɵɵtext(7, "Email address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_15_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.emailAddress, $event) || (ctx_r1.emailAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 14)(10, "label", 17);
    i0.ɵɵtext(11, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_15_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, LoginComponent_form_15_p_13_Template, 2, 1, "p", 19);
    i0.ɵɵelementStart(14, "button", 20);
    i0.ɵɵtext(15, "Sign In \u2192");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 21);
    i0.ɵɵtext(17, " Don't have an account? ");
    i0.ɵɵelementStart(18, "a", 22);
    i0.ɵɵlistener("click", function LoginComponent_form_15_Template_a_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mode = "signup"); });
    i0.ɵɵtext(19, "Sign up");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.emailAddress);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.password);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error);
} }
function LoginComponent_form_16_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵlistener("click", function LoginComponent_form_16_div_26_Template_div_click_0_listener() { const r_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedRole = r_r5.role); });
    i0.ɵɵelementStart(1, "span", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 37);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("--c", r_r5.color);
    i0.ɵɵclassProp("selected", ctx_r1.selectedRole === r_r5.role);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.label);
} }
function LoginComponent_form_16_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function LoginComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 12);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_16_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.signUp()); });
    i0.ɵɵelementStart(1, "h1");
    i0.ɵɵtext(2, "Create your account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 13);
    i0.ɵɵtext(4, "Join KHOTWA and start your journey");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 24)(6, "div", 14)(7, "label", 25);
    i0.ɵɵtext(8, "First name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.firstName, $event) || (ctx_r1.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 14)(11, "label", 27);
    i0.ɵɵtext(12, "Last name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.lastName, $event) || (ctx_r1.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 14)(15, "label", 29);
    i0.ɵɵtext(16, "Email address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.emailAddress, $event) || (ctx_r1.emailAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 14)(19, "label", 31);
    i0.ɵɵtext(20, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_form_16_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 14)(23, "label");
    i0.ɵɵtext(24, "I am a\u2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 33);
    i0.ɵɵtemplate(26, LoginComponent_form_16_div_26_Template, 5, 6, "div", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(27, LoginComponent_form_16_p_27_Template, 2, 1, "p", 19);
    i0.ɵɵelementStart(28, "button", 20);
    i0.ɵɵtext(29, "Create account \u2192");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "p", 21);
    i0.ɵɵtext(31, " Already have an account? ");
    i0.ɵɵelementStart(32, "a", 22);
    i0.ɵɵlistener("click", function LoginComponent_form_16_Template_a_click_32_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mode = "signin"); });
    i0.ɵɵtext(33, "Sign in");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.firstName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.lastName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.emailAddress);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.password);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.roles);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error);
} }
export class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.mode = 'signin';
        this.emailAddress = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.selectedRole = 'ENTREPRENEUR';
        this.error = '';
        this.loading = false;
        this.roles = [
            { role: 'ENTREPRENEUR', label: 'Entrepreneur', color: '#2ABFBF', icon: '🚀' },
            { role: 'COACH', label: 'Coach / Mentor', color: '#7C5CBF', icon: '🎯' },
        ];
    }
    signIn() {
        this.error = '';
        if (!this.emailAddress || !this.password) {
            this.error = 'Veuillez remplir tous les champs.';
            return;
        }
        this.loading = true;
        // Login → token stocké → refreshProfile avec le token
        this.auth.login({ emailAddress: this.emailAddress, password: this.password }).pipe(switchMap(() => this.auth.refreshProfile())).subscribe({
            next: () => {
                this.loading = false;
                this.router.navigateByUrl(this.auth.getDefaultRoute());
            },
            error: (err) => {
                this.loading = false;
                // Si refreshProfile échoue mais le login a réussi, on navigue quand même
                if (this.auth.token) {
                    this.router.navigateByUrl(this.auth.getDefaultRoute());
                }
                else {
                    this.error = typeof err === 'string' ? err : 'Identifiants invalides.';
                }
            },
        });
    }
    signUp() {
        this.error = '';
        if (!this.emailAddress || !this.password || !this.firstName || !this.lastName) {
            this.error = 'Veuillez remplir tous les champs.';
            return;
        }
        this.loading = true;
        this.auth.register({
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            password: this.password,
            role: this.selectedRole,
        }).pipe(switchMap(() => this.auth.login({ emailAddress: this.emailAddress, password: this.password })), switchMap(() => this.auth.refreshProfile())).subscribe({
            next: () => {
                this.loading = false;
                this.router.navigateByUrl(this.auth.getDefaultRoute());
            },
            error: (err) => {
                this.loading = false;
                // Si refreshProfile échoue mais le login a réussi, on navigue quand même
                if (this.auth.token) {
                    this.router.navigateByUrl(this.auth.getDefaultRoute());
                }
                else {
                    this.error = typeof err === 'string' ? err : (err?.error?.message || 'Erreur lors de la création du compte.');
                }
            },
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 6, consts: [[1, "login"], [1, "bg"], [1, "glow"], [1, "content"], [1, "brand"], [1, "brand-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2.5"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "brand-name"], [1, "auth-tabs"], ["type", "button", 1, "tab-btn", 3, "click"], ["class", "auth-form", 3, "ngSubmit", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], [1, "subtitle"], [1, "form-group"], ["for", "signin-email"], ["id", "signin-email", "name", "signinEmail", "type", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "signin-password"], ["id", "signin-password", "name", "signinPassword", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], ["type", "submit", 1, "btn-submit"], [1, "form-switch"], [3, "click"], [1, "form-error"], [1, "form-row"], ["for", "signup-firstname"], ["id", "signup-firstname", "name", "firstName", "type", "text", "placeholder", "Sara", "autocomplete", "given-name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "signup-lastname"], ["id", "signup-lastname", "name", "lastName", "type", "text", "placeholder", "Trabelsi", "autocomplete", "family-name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "signup-email"], ["id", "signup-email", "name", "signupEmail", "type", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "signup-password"], ["id", "signup-password", "name", "signupPassword", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "role-pick"], ["class", "role-pick-card", 3, "selected", "--c", "click", 4, "ngFor", "ngForOf"], [1, "role-pick-card", 3, "click"], [1, "rp-icon"], [1, "rp-label"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1)(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(6, "svg", 6);
            i0.ɵɵelement(7, "path", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(8, "span", 8);
            i0.ɵɵtext(9, "KHOTWA");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 9)(11, "button", 10);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_11_listener() { return ctx.mode = "signin"; });
            i0.ɵɵtext(12, " Sign In ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 10);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_13_listener() { return ctx.mode = "signup"; });
            i0.ɵɵtext(14, " Sign Up ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(15, LoginComponent_form_15_Template, 20, 3, "form", 11)(16, LoginComponent_form_16_Template, 34, 6, "form", 11);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵclassProp("active", ctx.mode === "signin");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.mode === "signup");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mode === "signin");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mode === "signup");
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.NgModel, i4.NgForm], styles: ["[_nghost-%COMP%] { display: block; }\n.login[_ngcontent-%COMP%] { min-height: 100vh; background: #080C10; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; position: relative; overflow: hidden; }\n.bg[_ngcontent-%COMP%] { position: fixed; inset: 0; background-image: linear-gradient(rgba(232,228,220,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(232,228,220,0.025) 1px,transparent 1px); background-size: 60px 60px; }\n.glow[_ngcontent-%COMP%] { position: fixed; width: 500px; height: 500px; background: radial-gradient(circle,rgba(232,98,42,0.12),transparent 70%); top: -100px; left: -100px; border-radius: 50%; animation: _ngcontent-%COMP%_drift 12s ease-in-out infinite alternate; }\n@keyframes _ngcontent-%COMP%_drift { from { transform: translate(0,0); } to { transform: translate(100px,80px); } }\n.content[_ngcontent-%COMP%] { position: relative; z-index: 2; text-align: center; max-width: 480px; width: 100%; }\n.brand[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 32px; animation: _ngcontent-%COMP%_fadeInDown 0.5s both; }\n.brand-icon[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: 13px; background: linear-gradient(135deg,#E8622A,#FF7A40); display: flex; align-items: center; justify-content: center; }\n.brand-name[_ngcontent-%COMP%] { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 0.08em; color: #E8E4DC; }\n\n\n\n.auth-tabs[_ngcontent-%COMP%] { display: flex; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 4px; margin-bottom: 28px; animation: _ngcontent-%COMP%_fadeInDown 0.5s 0.05s both; }\n.tab-btn[_ngcontent-%COMP%] { flex: 1; padding: 9px; border-radius: 9px; border: none; background: transparent; color: rgba(232,228,220,0.45); font-family: 'Plus Jakarta Sans',sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s; }\n.tab-btn.active[_ngcontent-%COMP%] { background: #E8622A; color: white; box-shadow: 0 4px 14px rgba(232,98,42,0.4); }\n\n\n\n.auth-form[_ngcontent-%COMP%] { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 32px; text-align: left; animation: _ngcontent-%COMP%_fadeInDown 0.4s 0.1s both; }\nh1[_ngcontent-%COMP%] { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 24px; font-weight: 800; color: #E8E4DC; margin-bottom: 6px; }\n.subtitle[_ngcontent-%COMP%] { font-size: 13px; color: rgba(232,228,220,0.45); margin-bottom: 24px; }\n.form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: rgba(232,228,220,0.55); letter-spacing: 0.04em; text-transform: uppercase; }\n.form-input[_ngcontent-%COMP%] { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 11px 14px; color: #E8E4DC; font-size: 14px; font-family: 'Nunito Sans',sans-serif; outline: none; transition: border-color 0.2s; }\n.form-input[_ngcontent-%COMP%]:focus { border-color: #E8622A; }\n.form-input[_ngcontent-%COMP%]::placeholder { color: rgba(232,228,220,0.2); }\n\n\n\n.role-pick[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px; }\n.role-pick-card[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s; }\n.role-pick-card.selected[_ngcontent-%COMP%] { border-color: var(--c); background: color-mix(in srgb, var(--c) 12%, transparent); }\n.rp-icon[_ngcontent-%COMP%] { font-size: 20px; }\n.rp-label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #E8E4DC; }\n\n\n\n.form-error[_ngcontent-%COMP%] { font-size: 12px; color: #FF6B6B; margin-bottom: 12px; padding: 8px 12px; background: rgba(255,107,107,0.1); border-radius: 8px; border: 1px solid rgba(255,107,107,0.2); }\n\n\n\n.btn-submit[_ngcontent-%COMP%] { width: 100%; padding: 13px; border-radius: 11px; background: linear-gradient(135deg,#E8622A,#FF7A40); border: none; color: white; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 18px rgba(232,98,42,0.4); margin-top: 4px; }\n.btn-submit[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,98,42,0.55); }\n\n.form-switch[_ngcontent-%COMP%] { font-size: 13px; color: rgba(232,228,220,0.4); text-align: center; margin-top: 18px; }\n.form-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: #E8622A; cursor: pointer; font-weight: 600; }\n.form-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n@keyframes _ngcontent-%COMP%_fadeInDown { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', template: "<div class=\"login\">\n  <div class=\"bg\"></div>\n  <div class=\"glow\"></div>\n\n  <div class=\"content\">\n    <div class=\"brand\">\n      <div class=\"brand-icon\">\n        <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\">\n          <path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" />\n        </svg>\n      </div>\n      <span class=\"brand-name\">KHOTWA</span>\n    </div>\n\n    <!-- Tab switcher -->\n    <div class=\"auth-tabs\">\n      <button\n        type=\"button\"\n        class=\"tab-btn\"\n        [class.active]=\"mode === 'signin'\"\n        (click)=\"mode='signin'\">\n        Sign In\n      </button>\n\n      <button\n        type=\"button\"\n        class=\"tab-btn\"\n        [class.active]=\"mode === 'signup'\"\n        (click)=\"mode='signup'\">\n        Sign Up\n      </button>\n    </div>\n\n    <!-- SIGN IN -->\n    <form class=\"auth-form\" *ngIf=\"mode === 'signin'\" (ngSubmit)=\"signIn()\">\n      <h1>Welcome back</h1>\n      <p class=\"subtitle\">Sign in to your KHOTWA account</p>\n\n      <div class=\"form-group\">\n        <label for=\"signin-email\">Email address</label>\n        <input\n          id=\"signin-email\"\n          name=\"signinEmail\"\n          type=\"email\"\n          [(ngModel)]=\"emailAddress\"\n          placeholder=\"you@example.com\"\n          class=\"form-input\"\n          autocomplete=\"email\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"signin-password\">Password</label>\n        <input\n          id=\"signin-password\"\n          name=\"signinPassword\"\n          type=\"password\"\n          [(ngModel)]=\"password\"\n          placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\"\n          class=\"form-input\"\n          autocomplete=\"current-password\" />\n      </div>\n\n      <p class=\"form-error\" *ngIf=\"error\">{{ error }}</p>\n\n      <button type=\"submit\" class=\"btn-submit\">Sign In \u2192</button>\n\n      <p class=\"form-switch\">\n        Don't have an account?\n        <a (click)=\"mode='signup'\">Sign up</a>\n      </p>\n    </form>\n\n    <!-- SIGN UP -->\n    <form class=\"auth-form\" *ngIf=\"mode === 'signup'\" (ngSubmit)=\"signUp()\">\n      <h1>Create your account</h1>\n      <p class=\"subtitle\">Join KHOTWA and start your journey</p>\n\n      <div class=\"form-row\">\n        <div class=\"form-group\">\n          <label for=\"signup-firstname\">First name</label>\n          <input\n            id=\"signup-firstname\"\n            name=\"firstName\"\n            type=\"text\"\n            [(ngModel)]=\"firstName\"\n            placeholder=\"Sara\"\n            class=\"form-input\"\n            autocomplete=\"given-name\" />\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"signup-lastname\">Last name</label>\n          <input\n            id=\"signup-lastname\"\n            name=\"lastName\"\n            type=\"text\"\n            [(ngModel)]=\"lastName\"\n            placeholder=\"Trabelsi\"\n            class=\"form-input\"\n            autocomplete=\"family-name\" />\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"signup-email\">Email address</label>\n        <input\n          id=\"signup-email\"\n          name=\"signupEmail\"\n          type=\"email\"\n          [(ngModel)]=\"emailAddress\"\n          placeholder=\"you@example.com\"\n          class=\"form-input\"\n          autocomplete=\"email\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"signup-password\">Password</label>\n        <input\n          id=\"signup-password\"\n          name=\"signupPassword\"\n          type=\"password\"\n          [(ngModel)]=\"password\"\n          placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\"\n          class=\"form-input\"\n          autocomplete=\"new-password\" />\n      </div>\n\n      <div class=\"form-group\">\n        <label>I am a\u2026</label>\n        <div class=\"role-pick\">\n          <div\n            *ngFor=\"let r of roles\"\n            class=\"role-pick-card\"\n            [class.selected]=\"selectedRole === r.role\"\n            [style.--c]=\"r.color\"\n            (click)=\"selectedRole = r.role\">\n            <span class=\"rp-icon\">{{ r.icon }}</span>\n            <span class=\"rp-label\">{{ r.label }}</span>\n          </div>\n        </div>\n      </div>\n\n      <p class=\"form-error\" *ngIf=\"error\">{{ error }}</p>\n\n      <button type=\"submit\" class=\"btn-submit\">Create account \u2192</button>\n\n      <p class=\"form-switch\">\n        Already have an account?\n        <a (click)=\"mode='signin'\">Sign in</a>\n      </p>\n    </form>\n  </div>\n</div>", styles: [":host { display: block; }\n.login { min-height: 100vh; background: #080C10; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; position: relative; overflow: hidden; }\n.bg { position: fixed; inset: 0; background-image: linear-gradient(rgba(232,228,220,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(232,228,220,0.025) 1px,transparent 1px); background-size: 60px 60px; }\n.glow { position: fixed; width: 500px; height: 500px; background: radial-gradient(circle,rgba(232,98,42,0.12),transparent 70%); top: -100px; left: -100px; border-radius: 50%; animation: drift 12s ease-in-out infinite alternate; }\n@keyframes drift { from { transform: translate(0,0); } to { transform: translate(100px,80px); } }\n.content { position: relative; z-index: 2; text-align: center; max-width: 480px; width: 100%; }\n.brand { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 32px; animation: fadeInDown 0.5s both; }\n.brand-icon { width: 44px; height: 44px; border-radius: 13px; background: linear-gradient(135deg,#E8622A,#FF7A40); display: flex; align-items: center; justify-content: center; }\n.brand-name { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 0.08em; color: #E8E4DC; }\n\n/* Tabs */\n.auth-tabs { display: flex; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 4px; margin-bottom: 28px; animation: fadeInDown 0.5s 0.05s both; }\n.tab-btn { flex: 1; padding: 9px; border-radius: 9px; border: none; background: transparent; color: rgba(232,228,220,0.45); font-family: 'Plus Jakarta Sans',sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s; }\n.tab-btn.active { background: #E8622A; color: white; box-shadow: 0 4px 14px rgba(232,98,42,0.4); }\n\n/* Form */\n.auth-form { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 32px; text-align: left; animation: fadeInDown 0.4s 0.1s both; }\nh1 { font-family: 'Plus Jakarta Sans',sans-serif; font-size: 24px; font-weight: 800; color: #E8E4DC; margin-bottom: 6px; }\n.subtitle { font-size: 13px; color: rgba(232,228,220,0.45); margin-bottom: 24px; }\n.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }\n.form-group label { font-size: 12px; font-weight: 600; color: rgba(232,228,220,0.55); letter-spacing: 0.04em; text-transform: uppercase; }\n.form-input { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 11px 14px; color: #E8E4DC; font-size: 14px; font-family: 'Nunito Sans',sans-serif; outline: none; transition: border-color 0.2s; }\n.form-input:focus { border-color: #E8622A; }\n.form-input::placeholder { color: rgba(232,228,220,0.2); }\n\n/* Role pick */\n.role-pick { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px; }\n.role-pick-card { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s; }\n.role-pick-card.selected { border-color: var(--c); background: color-mix(in srgb, var(--c) 12%, transparent); }\n.rp-icon { font-size: 20px; }\n.rp-label { font-size: 13px; font-weight: 600; color: #E8E4DC; }\n\n/* Error */\n.form-error { font-size: 12px; color: #FF6B6B; margin-bottom: 12px; padding: 8px 12px; background: rgba(255,107,107,0.1); border-radius: 8px; border: 1px solid rgba(255,107,107,0.2); }\n\n/* Submit */\n.btn-submit { width: 100%; padding: 13px; border-radius: 11px; background: linear-gradient(135deg,#E8622A,#FF7A40); border: none; color: white; font-family: 'Plus Jakarta Sans',sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 18px rgba(232,98,42,0.4); margin-top: 4px; }\n.btn-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,98,42,0.55); }\n\n.form-switch { font-size: 13px; color: rgba(232,228,220,0.4); text-align: center; margin-top: 18px; }\n.form-switch a { color: #E8622A; cursor: pointer; font-weight: 600; }\n.form-switch a:hover { text-decoration: underline; }\n\n@keyframes fadeInDown { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\features\\auth\\login.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=login.component.js.map