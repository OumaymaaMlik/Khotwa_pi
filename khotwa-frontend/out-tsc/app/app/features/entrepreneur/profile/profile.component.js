import { Component, Inject } from '@angular/core';
import { SubscriptionService } from '../../../core/services/subscription.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../../core/services/subscription.service";
const _c0 = (a0, a1, a2) => ({ "plan-card--premium": a0, "plan-card--institutional": a1, "plan-card--current": a2 });
const _c1 = (a0, a1, a2) => ({ "plan-badge--free": a0, "plan-badge--premium": a1, "plan-badge--institutional": a2 });
const _c2 = (a0, a1) => ({ "plan-price-val--orange": a0, "plan-price-val--gold": a1 });
const _c3 = (a0, a1, a2) => ({ "kh-btn--current-disabled": a0, "kh-btn--gold": a1, "kh-btn--action": a2 });
const _c4 = (a0, a1, a2) => ({ "bi-check2-circle": a0, "bi-arrow-up-right": a1, "bi-arrow-repeat": a2 });
const _c5 = (a0, a1) => ({ "plan-features--orange": a0, "plan-features--gold": a1 });
const _c6 = (a0, a1, a2) => ({ "icon--orange": a0, "icon--gold": a1, "icon--teal": a2 });
function ProfileComponent_div_6_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 2, sub_r1.dateFin, "dd MMM"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 5, sub_r1.dateFin, "yyyy"), " ");
} }
function ProfileComponent_div_6_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1, "Unlimited");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    i0.ɵɵtext(3, "Current subscription");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "i", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 15)(10, "div", 16)(11, "span", 17);
    i0.ɵɵtext(12, "Your current plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 18);
    i0.ɵɵtext(14, " Manage your subscription, billing and renewal settings. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 16)(16, "span", 17);
    i0.ɵɵtext(17, "Days Remaining");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 19);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 16)(21, "span", 17);
    i0.ɵɵtext(22, "Expiration Date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ProfileComponent_div_6_span_23_Template, 6, 8, "span", 20)(24, ProfileComponent_div_6_ng_template_24_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sub_r1 = ctx.ngIf;
    const freeExpiration_r2 = i0.ɵɵreference(25);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (sub_r1.planOffer == null ? null : sub_r1.planOffer.label) || sub_r1.plan, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getStatusLabel(sub_r1.statut), " ");
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r2.getRemainingDays());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", sub_r1.plan !== "FREE")("ngIfElse", freeExpiration_r2);
} }
function ProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Subscription Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Manage your subscription, billing and renewal settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 24)(8, "span", 25);
    i0.ɵɵelement(9, "i", 14);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 26)(12, "div", 27)(13, "div", 28)(14, "span", 29);
    i0.ɵɵtext(15, "Plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 30);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 31);
    i0.ɵɵelement(19, "i", 14);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 28)(22, "div", 32)(23, "div", 33)(24, "span", 29);
    i0.ɵɵelement(25, "i", 34);
    i0.ɵɵtext(26, " Start date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 35);
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 31);
    i0.ɵɵelement(31, "i", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 33)(33, "span", 29);
    i0.ɵɵelement(34, "i", 34);
    i0.ɵɵtext(35, " End date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "span", 35);
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span", 31);
    i0.ɵɵelement(40, "i", 14);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(42, "div", 27)(43, "div", 36)(44, "div")(45, "span", 29);
    i0.ɵɵtext(46, "Auto-renewal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "span", 30);
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "button", 37);
    i0.ɵɵlistener("click", function ProfileComponent_div_7_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleAutoRenew()); });
    i0.ɵɵelement(50, "i", 38);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 28)(53, "span", 29);
    i0.ɵɵelement(54, "i", 39);
    i0.ɵɵtext(55, " Payment ref");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 40);
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const sub_r5 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getStatusLabel(sub_r5.statut), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate((sub_r5.planOffer == null ? null : sub_r5.planOffer.label) || sub_r5.plan);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getStatusLabel(sub_r5.statut), " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(29, 10, sub_r5.dateDebut, "dd MMM yyyy"), " ");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", sub_r5.plan === "FREE" ? "Unlimited" : i0.ɵɵpipeBind2(38, 13, sub_r5.dateFin, "MMM yyyy"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getStatusLabel(sub_r5.statut), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", sub_r5.autoRenouvellement ? "Enabled" : "Disabled", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.isProcessing);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", sub_r5.autoRenouvellement ? "Disable Auto-Renewal" : "Enable Auto-Renewal", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", sub_r5.paiementRef || "No payment reference", " ");
} }
function ProfileComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelement(1, "i", 57);
    i0.ɵɵtext(2, " Current Subscription ");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵelement(1, "i", 59);
    i0.ɵɵtext(2, " Enterprise ");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_16_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 60);
    i0.ɵɵtext(1, "DT / month");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_div_16_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 61);
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const plan_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c5, ctx_r2.isCurrentPlan(plan_r8), plan_r8.type === "INSTITUTIONAL" && !ctx_r2.isCurrentPlan(plan_r8)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c6, ctx_r2.isCurrentPlan(plan_r8), plan_r8.type === "INSTITUTIONAL" && !ctx_r2.isCurrentPlan(plan_r8), !ctx_r2.isCurrentPlan(plan_r8) && plan_r8.type !== "INSTITUTIONAL"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7);
} }
function ProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, ProfileComponent_div_16_div_1_Template, 3, 0, "div", 42)(2, ProfileComponent_div_16_div_2_Template, 3, 0, "div", 43);
    i0.ɵɵelementStart(3, "div", 44)(4, "div")(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 46)(12, "span", 47);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, ProfileComponent_div_16_span_14_Template, 2, 0, "span", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 49);
    i0.ɵɵelement(16, "i", 50);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "div", 51);
    i0.ɵɵelementStart(19, "ul", 52);
    i0.ɵɵtemplate(20, ProfileComponent_div_16_li_20_Template, 4, 10, "li", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 54);
    i0.ɵɵlistener("click", function ProfileComponent_div_16_Template_button_click_21_listener() { const plan_r8 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openPlanModal(plan_r8)); });
    i0.ɵɵelement(22, "i", 55);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const plan_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(16, _c0, plan_r8.type === "PREMIUM", plan_r8.type === "INSTITUTIONAL", ctx_r2.isCurrentPlan(plan_r8)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isCurrentPlan(plan_r8));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", plan_r8.type === "INSTITUTIONAL" && !ctx_r2.isCurrentPlan(plan_r8));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(plan_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r8.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(20, _c1, plan_r8.type === "FREE", plan_r8.type === "PREMIUM", plan_r8.type === "INSTITUTIONAL"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", plan_r8.type === "FREE" ? "Free" : plan_r8.type === "PREMIUM" ? "Premium" : "Gold", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(24, _c2, ctx_r2.isCurrentPlan(plan_r8), plan_r8.type === "INSTITUTIONAL" && !ctx_r2.isCurrentPlan(plan_r8)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", plan_r8.prix === 0 ? "Free" : plan_r8.prix, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", plan_r8.prix !== 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getDuration(plan_r8), "\n");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.getAvantagesList(plan_r8.avantages || ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(27, _c3, ctx_r2.isCurrentPlan(plan_r8), plan_r8.type === "INSTITUTIONAL" && !ctx_r2.isCurrentPlan(plan_r8), !ctx_r2.isCurrentPlan(plan_r8) && plan_r8.type !== "INSTITUTIONAL"))("disabled", ctx_r2.isCurrentPlan(plan_r8) || ctx_r2.isProcessing || !ctx_r2.canChangePlan(plan_r8.type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(31, _c4, ctx_r2.isCurrentPlan(plan_r8), !ctx_r2.isCurrentPlan(plan_r8) && ctx_r2.isUpgrade(plan_r8.type), !ctx_r2.isCurrentPlan(plan_r8) && !ctx_r2.isUpgrade(plan_r8.type)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getButtonLabel(plan_r8), " ");
} }
function ProfileComponent_div_17_div_2_div_9_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 85)(1, "label", 86);
    i0.ɵɵtext(2, "Start date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 87);
    i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_div_17_div_2_div_9_div_30_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r2.modalStartDate, $event) || (ctx_r2.modalStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.modalStartDate);
} }
function ProfileComponent_div_17_div_2_div_9_p_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 88);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.paymentError);
} }
function ProfileComponent_div_17_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "div", 72);
    i0.ɵɵtext(4, "Plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 73);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 71)(8, "div", 72);
    i0.ɵɵtext(9, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 73);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 71)(13, "div", 72);
    i0.ɵɵtext(14, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 74);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 71)(18, "div", 72);
    i0.ɵɵtext(19, "Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 73);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "label", 75)(23, "input", 76);
    i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_div_17_div_2_div_9_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.modalAutoRenew, $event) || (ctx_r2.modalAutoRenew = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "label", 77);
    i0.ɵɵtext(25, "Enable auto-renewal");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "label", 75)(27, "input", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_div_17_div_2_div_9_Template_input_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.modalNotifyBefore, $event) || (ctx_r2.modalNotifyBefore = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "label", 79);
    i0.ɵɵtext(29, "Notify me before renewal");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(30, ProfileComponent_div_17_div_2_div_9_div_30_Template, 4, 1, "div", 80)(31, ProfileComponent_div_17_div_2_div_9_p_31_Template, 2, 1, "p", 81);
    i0.ɵɵelementStart(32, "div", 82)(33, "button", 83);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_2_div_9_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵtext(34, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 84);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_2_div_9_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.proceedToPayment()); });
    i0.ɵɵelement(36, "i", 39);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const plan_r13 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(plan_r13.label);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(plan_r13.type);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", plan_r13.prix === 0 ? "Free" : plan_r13.prix + " DT", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(plan_r13.duree === 0 ? "Unlimited" : plan_r13.duree + " days");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.modalAutoRenew);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.modalNotifyBefore);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.isDowngrade);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.paymentError);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.isProcessing);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", plan_r13.prix === 0 ? "Confirm Plan" : "Proceed to Payment", " ");
} }
function ProfileComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 66)(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 67);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, ProfileComponent_div_17_div_2_div_9_Template, 38, 10, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.description);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.selectedPlan);
} }
function ProfileComponent_div_17_div_3_p_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 88);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.paymentError);
} }
function ProfileComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 89)(2, "div")(3, "h3");
    i0.ɵɵtext(4, "Secure Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Choose your preferred payment method");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 67);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 69)(10, "div", 90)(11, "div")(12, "div", 91);
    i0.ɵɵtext(13, "Amount due");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 92);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 93)(17, "span", 94);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 95);
    i0.ɵɵtext(20, "DT");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(21, "div", 96);
    i0.ɵɵtemplate(22, ProfileComponent_div_17_div_3_p_22_Template, 2, 1, "p", 81);
    i0.ɵɵelementStart(23, "button", 97);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_3_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.backToDetails()); });
    i0.ɵɵelement(24, "i", 98);
    i0.ɵɵtext(25, " Back ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate2("", ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.label, " \u00B7 ", ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.duree, " days");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.prix);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.paymentError);
} }
function ProfileComponent_div_17_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105)(1, "div", 106)(2, "span", 107);
    i0.ɵɵtext(3, "Payment reference");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 108);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "div", 109);
    i0.ɵɵelementStart(7, "div", 106)(8, "span", 107);
    i0.ɵɵtext(9, "Subscription starts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 110);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(13, "div", 109);
    i0.ɵɵelementStart(14, "div", 106)(15, "span", 107);
    i0.ɵɵtext(16, "Subscription ends");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 110);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(20, "div", 109);
    i0.ɵɵelementStart(21, "div", 106)(22, "span", 107);
    i0.ɵɵtext(23, "Amount paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 111);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.currentSubscription.paiementRef);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 4, ctx_r2.currentSubscription.dateDebut, "dd MMM yyyy"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(19, 7, ctx_r2.currentSubscription.dateFin, "dd MMM yyyy"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.prix, " DT");
} }
function ProfileComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 99)(2, "div")(3, "h3");
    i0.ɵɵtext(4, "Payment Confirmed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Your subscription has been activated");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 67);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 69)(10, "div", 100)(11, "div", 101);
    i0.ɵɵelement(12, "i", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h4");
    i0.ɵɵtext(14, "Payment Successful!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, ProfileComponent_div_17_div_4_div_17_Template, 26, 10, "div", 103);
    i0.ɵɵelementStart(18, "button", 104);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_div_4_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeModal()); });
    i0.ɵɵelement(19, "i", 57);
    i0.ɵɵtext(20, " Done ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate1("Your ", ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.label, " plan is now active. Welcome aboard!");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.currentSubscription);
} }
function ProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵlistener("click", function ProfileComponent_div_17_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onOverlayClick($event)); });
    i0.ɵɵelementStart(1, "div", 64);
    i0.ɵɵtemplate(2, ProfileComponent_div_17_div_2_Template, 10, 3, "div", 65)(3, ProfileComponent_div_17_div_3_Template, 26, 4, "div", 65)(4, ProfileComponent_div_17_div_4_Template, 21, 2, "div", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.showPayment && !ctx_r2.paymentSuccess);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showPayment && !ctx_r2.paymentSuccess);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.paymentSuccess);
} }
export class ProfileComponent {
    get currentUserId() {
        return this.authService.currentUser?.idUser ?? 0;
    }
    constructor(subscriptionService, authService) {
        this.subscriptionService = subscriptionService;
        this.authService = authService;
        this.currentSubscription = null;
        this.plans = [];
        this.isProcessing = false;
        this.showModal = false;
        this.selectedPlan = null;
        this.isDowngrade = false;
        this.modalAutoRenew = false;
        this.modalNotifyBefore = false;
        this.modalStartDate = '';
        this.showPayment = false;
        this.paymentProcessing = false;
        this.paymentSuccess = false;
        this.paymentError = '';
        this.paypalRendered = false;
    }
    ngOnInit() {
        console.log('Current user in profile:', this.authService.currentUser);
        console.log('Current user id:', this.currentUserId);
        this.loadCurrentSubscription();
        this.loadPlans();
    }
    loadCurrentSubscription() {
        if (!this.currentUserId)
            return;
        console.log('currentUserId =', this.currentUserId);
        this.subscriptionService.getCurrentSubscriptionByUser(this.currentUserId).subscribe({
            next: (data) => {
                console.log('subscription returned by backend =', data);
                this.currentSubscription = data;
            },
            error: (err) => {
                console.error('subscription error =', err);
                this.currentSubscription = null;
            }
        });
    }
    loadPlans() {
        this.subscriptionService.getAvailablePlans().subscribe({
            next: (data) => { this.plans = data; },
            error: (err) => { console.error('Error loading plans', err); }
        });
    }
    getStatusLabel(status) {
        const labels = {
            ACTIVE: 'Active', EXPIRED: 'Expired', CANCELLED: 'Cancelled', PENDING: 'Pending'
        };
        return labels[status] ?? status;
    }
    // ── Takes PlanOffer (matches template) ──────────────────────────────────
    isCurrentPlan(plan) {
        if (!this.currentSubscription)
            return false;
        if (this.currentSubscription.planOffer?.id != null && plan.id != null) {
            return this.currentSubscription.planOffer.id === plan.id;
        }
        return this.currentSubscription.plan === plan.type;
    }
    getButtonLabel(plan) {
        if (this.isCurrentPlan(plan))
            return 'Current Plan';
        if (!this.currentSubscription)
            return 'Choose Plan';
        return this.isUpgrade(plan.type) ? 'Upgrade now' : 'Switch at renewal';
    }
    getDuration(plan) {
        if (!plan.duree || plan.duree <= 0)
            return 'Unlimited';
        return `${plan.duree} days`;
    }
    canChangePlan(type) {
        if (!this.currentSubscription)
            return true;
        if (this.currentSubscription.planOffer?.id != null) {
            const activePlanType = this.currentSubscription.planOffer.type;
            const activePlanId = this.currentSubscription.planOffer.id;
            if (activePlanType !== type)
                return true;
            return this.plans.filter(p => p.type === type && p.id !== activePlanId).length > 0;
        }
        return this.currentSubscription.plan !== type;
    }
    isUpgrade(type) {
        if (!this.currentSubscription)
            return true;
        return this.getPlanRank(type) > this.getPlanRank(this.currentSubscription.plan);
    }
    getPlanRank(plan) {
        switch (plan) {
            case 'FREE': return 1;
            case 'PREMIUM': return 2;
            case 'INSTITUTIONAL': return 3;
        }
    }
    getRemainingDays() {
        if (!this.currentSubscription)
            return 0;
        if (this.currentSubscription.plan === 'FREE') {
            return '∞';
        }
        if (!this.currentSubscription.dateFin)
            return 0;
        const diff = new Date(this.currentSubscription.dateFin).getTime() - Date.now();
        return Math.max(Math.ceil(diff / 86400000), 0);
    }
    getAvantagesList(avantages) {
        if (!avantages)
            return [];
        return avantages.split('\n').map((a) => a.trim()).filter((a) => a.length > 0);
    }
    toggleAutoRenew() {
        if (!this.currentSubscription || this.isProcessing)
            return;
        const subscriptionId = this.currentSubscription.idSubscription;
        if (subscriptionId == null)
            return;
        const newValue = !this.currentSubscription.autoRenouvellement;
        if (!window.confirm(newValue ? 'Enable auto-renewal?' : 'Disable auto-renewal?'))
            return;
        this.isProcessing = true;
        this.subscriptionService.updateAutoRenew(subscriptionId, newValue).subscribe({
            next: (updated) => {
                this.currentSubscription = { ...this.currentSubscription, autoRenouvellement: updated.autoRenouvellement ?? newValue };
                this.isProcessing = false;
            },
            error: () => {
                this.currentSubscription = { ...this.currentSubscription, autoRenouvellement: newValue };
                this.isProcessing = false;
            }
        });
    }
    openPlanModal(plan) {
        if (this.isCurrentPlan(plan) || this.isProcessing)
            return;
        this.selectedPlan = plan;
        this.isDowngrade = this.currentSubscription
            ? this.getPlanRank(plan.type) < this.getPlanRank(this.currentSubscription.plan) : false;
        this.modalAutoRenew = this.currentSubscription?.autoRenouvellement ?? false;
        this.modalNotifyBefore = false;
        this.showModal = true;
        this.showPayment = false;
        this.paymentSuccess = false;
        this.paymentError = '';
        this.paypalRendered = false;
        this.modalStartDate = this.isDowngrade && this.currentSubscription?.dateFin
            ? new Date(this.currentSubscription.dateFin).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0];
    }
    closeModal() {
        this.showModal = false;
        this.selectedPlan = null;
        this.showPayment = false;
        this.paymentSuccess = false;
        this.paymentError = '';
        this.paypalRendered = false;
    }
    onOverlayClick(event) {
        if (event.target.classList.contains('modal-overlay'))
            this.closeModal();
    }
    proceedToPayment() {
        if (!this.selectedPlan || !this.currentUserId) {
            this.paymentError = 'Missing selected plan or user.';
            return;
        }
        this.paymentError = '';
        // Plan gratuit
        if (this.selectedPlan.prix === 0) {
            this._doFreeSubscribe();
            return;
        }
        // Plan payant
        this.isProcessing = true;
        this.subscriptionService.selectPlan(this.currentUserId, this.selectedPlan.id).subscribe({
            next: (res) => {
                this.currentSubscription = res;
                this.isProcessing = false;
                this.showPayment = true;
                this.paypalRendered = false;
                setTimeout(() => this._mountPaypalButton(), 150);
            },
            error: (err) => {
                console.error('Erreur démarrage paiement', err);
                this.isProcessing = false;
                this.paymentError = 'Unable to start payment. Please try again.';
                console.log('selectedPlan =', this.selectedPlan);
                console.log('currentUser =', this.authService.currentUser);
                console.log('currentUserId =', this.currentUserId);
            }
        });
    }
    backToDetails() {
        if (this.currentSubscription?.idSubscription && this.currentSubscription.statut === 'PENDING') {
            this.subscriptionService.cancelPending(this.currentSubscription.idSubscription).subscribe({
                next: (res) => { this.currentSubscription = res; }
            });
        }
        this.showPayment = false;
        this.paymentError = '';
        this.paypalRendered = false;
    }
    _mountPaypalButton() {
        const paypalSDK = window['paypal'];
        if (!paypalSDK) {
            this.paymentError = '⚠️ PayPal SDK not loaded. Check your index.html.';
            return;
        }
        if (this.paypalRendered)
            return;
        const prixUSD = ((this.selectedPlan?.prix ?? 0) / 3.1).toFixed(2);
        const nomPlan = this.selectedPlan?.label ?? 'Plan';
        paypalSDK.Buttons({
            style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay' },
            createOrder: (_data, actions) => actions.order.create({
                purchase_units: [{ description: `Subscription ${nomPlan}`, amount: { currency_code: 'USD', value: prixUSD } }],
                application_context: {
                    return_url: 'http://localhost:4200/entrepreneur/profile',
                    cancel_url: 'http://localhost:4200/entrepreneur/profile',
                    user_action: 'PAY_NOW'
                }
            }),
            onApprove: (data, actions) => {
                this.paymentProcessing = true;
                return actions.order.capture().then((_d) => this._confirmPayment(data.orderID, data.payerID));
            },
            onCancel: () => {
                this.paymentError = 'Payment cancelled.';
                this.paymentProcessing = false;
                if (this.currentSubscription?.idSubscription) {
                    this.subscriptionService.cancelPending(this.currentSubscription.idSubscription).subscribe({
                        next: (res) => { this.currentSubscription = res; this.showPayment = false; }
                    });
                }
                else {
                    this.showPayment = false;
                }
            },
            onError: (err) => {
                console.error('PayPal error:', err);
                this.paymentProcessing = false;
                this.paymentError = 'An error occurred. Please try again.';
                if (this.currentSubscription?.idSubscription) {
                    this.subscriptionService.cancelPending(this.currentSubscription.idSubscription).subscribe({
                        next: (res) => { this.currentSubscription = res; }
                    });
                }
            }
        }).render('#paypal-button-container');
        this.paypalRendered = true;
    }
    _confirmPayment(orderId, payerId) {
        if (!this.selectedPlan || !this.currentUserId) {
            this.paymentError = 'Missing data. Please try again.';
            this.paymentProcessing = false;
            return;
        }
        this.paymentProcessing = true;
        this.paymentError = '';
        this.subscriptionService.confirmPaypalPayment(this.currentUserId, this.selectedPlan.id, orderId, payerId).subscribe({
            next: (res) => {
                this.paymentProcessing = false;
                this.paymentSuccess = true;
                this.currentSubscription = res;
                this.loadCurrentSubscription();
                if (res.idSubscription != null && this.modalAutoRenew !== res.autoRenouvellement) {
                    this.subscriptionService.updateAutoRenew(res.idSubscription, this.modalAutoRenew).subscribe();
                }
            },
            error: (err) => {
                console.error('Payment confirmation error:', err);
                this.paymentProcessing = false;
                this.paymentError = 'Payment received but activation failed. Please contact support.';
            }
        });
    }
    _doFreeSubscribe() {
        this.isProcessing = true;
        this.subscriptionService.selectPlan(this.currentUserId, this.selectedPlan.id).subscribe({
            next: (res) => {
                this.currentSubscription = res;
                this.isProcessing = false;
                this.paymentSuccess = true;
                if (res.idSubscription != null && this.modalAutoRenew !== res.autoRenouvellement) {
                    this.subscriptionService.updateAutoRenew(res.idSubscription, this.modalAutoRenew).subscribe();
                }
                this.loadCurrentSubscription();
            },
            error: () => { this.isProcessing = false; this.paymentError = 'An error occurred. Please try again.'; }
        });
    }
    static { this.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(i0.ɵɵdirectiveInject(SubscriptionService), i0.ɵɵdirectiveInject(i1.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], decls: 18, vars: 4, consts: [["freeExpiration", ""], [1, "page"], [1, "page-header"], ["class", "overview", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "plans-header"], [1, "plans-grid"], ["class", "plan-card", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "overview"], [1, "overview-left", "overview-left--current"], [1, "overview-eyebrow"], [1, "overview-plan-name"], [1, "overview-status-badge", "overview-status-badge--current"], [1, "bi", "bi-check-circle-fill"], [1, "overview-right"], [1, "overview-stat"], [1, "overview-stat-label"], [1, "overview-stat-desc"], [1, "overview-stat-value"], ["class", "overview-stat-date", 4, "ngIf", "ngIfElse"], [1, "overview-stat-date"], [1, "card"], [1, "card-head"], [1, "card-head-right"], [1, "badge", "badge--current"], [1, "detail-grid"], [1, "detail-col"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "detail-sub", "detail-sub--current"], [1, "detail-dates"], [1, "detail-date-item"], [1, "bi", "bi-calendar3"], [1, "detail-value", 2, "font-size", "13px"], [1, "detail-row", "detail-row--inline"], [1, "kh-btn", "kh-btn--outline-current", "kh-btn--sm", 3, "click", "disabled"], [1, "bi", "bi-arrow-repeat"], [1, "bi", "bi-credit-card"], [1, "ref-box"], [1, "plan-card", 3, "ngClass"], ["class", "plan-ribbon plan-ribbon--current", 4, "ngIf"], ["class", "plan-ribbon plan-ribbon--institutional", 4, "ngIf"], [1, "plan-top"], [1, "plan-badge", 3, "ngClass"], [1, "plan-price"], [1, "plan-price-val", 3, "ngClass"], ["class", "plan-price-unit", 4, "ngIf"], [1, "plan-duration"], [1, "bi", "bi-clock"], [1, "plan-divider"], [1, "plan-features"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "kh-btn", "kh-btn--full", 2, "margin-top", "auto", 3, "click", "ngClass", "disabled"], [1, "bi", 3, "ngClass"], [1, "plan-ribbon", "plan-ribbon--current"], [1, "bi", "bi-check2-circle"], [1, "plan-ribbon", "plan-ribbon--institutional"], [1, "bi", "bi-star-fill"], [1, "plan-price-unit"], [3, "ngClass"], [1, "bi", "bi-check2", 3, "ngClass"], [1, "modal-overlay", 3, "click"], [1, "modal-card"], [4, "ngIf"], [1, "modal-head", "modal-head--orange"], ["type", "button", 1, "modal-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "modal-summary-grid"], [1, "modal-stat-box"], [1, "modal-stat-label"], [1, "modal-stat-value"], [1, "modal-stat-value", "modal-stat-value--orange"], [1, "modal-check-row"], ["id", "modalAutoRenew", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "modalAutoRenew"], ["id", "modalNotifyBefore", "type", "checkbox", 3, "ngModelChange", "ngModel"], ["for", "modalNotifyBefore"], ["class", "form-group", 4, "ngIf"], ["class", "form-error", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "kh-btn", "kh-btn--ghost", 3, "click"], ["type", "button", 1, "kh-btn", "kh-btn--orange", 3, "click", "disabled"], [1, "form-group"], ["for", "modalStartDate"], ["id", "modalStartDate", "type", "date", 3, "ngModelChange", "ngModel"], [1, "form-error"], [1, "modal-head", "modal-head--dark"], [1, "amount-due"], [1, "amount-due-label"], [1, "amount-due-sub"], [1, "amount-due-value"], [1, "amount-due-number"], [1, "amount-due-unit"], ["id", "paypal-button-container"], ["type", "button", 1, "kh-btn", "kh-btn--ghost", "kh-btn--full", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "modal-head", "modal-head--green"], [1, "payment-success-box"], [1, "payment-success-icon"], [1, "bi", "bi-check-lg"], ["class", "payment-ref-grid", 4, "ngIf"], ["type", "button", 1, "kh-btn", "kh-btn--teal", "kh-btn--full", 3, "click"], [1, "payment-ref-grid"], [1, "payment-ref-row"], [1, "payment-ref-label"], [1, "payment-ref-value", "payment-ref-value--orange"], [1, "payment-ref-divider"], [1, "payment-ref-value"], [1, "payment-ref-value", "payment-ref-value--green"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h1");
            i0.ɵɵtext(3, "Profile & Subscription");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Manage your current plan and explore available upgrades");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, ProfileComponent_div_6_Template, 26, 5, "div", 3)(7, ProfileComponent_div_7_Template, 58, 16, "div", 4);
            i0.ɵɵelementStart(8, "div")(9, "div", 5)(10, "div")(11, "h2");
            i0.ɵɵtext(12, "Choose Your Plan");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Choose the best subscription for your business needs");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 6);
            i0.ɵɵtemplate(16, ProfileComponent_div_16_Template, 24, 35, "div", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(17, ProfileComponent_div_17_Template, 5, 3, "div", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.currentSubscription);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentSubscription);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.plans);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showModal);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.DefaultValueAccessor, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel, i2.DatePipe], styles: ["\n\n\n\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n[_ngcontent-%COMP%]:root {\n  --teal: #2abfbf;\n  --teal-dark: #1a9999;\n  --teal-light: #e1f5f5;\n  --teal-mid: rgba(42, 191, 191, 0.12);\n  --teal-border: rgba(42, 191, 191, 0.25);\n\n  --orange: #e85a1e;\n  --orange-dark: #c94a14;\n  --orange-light: #fff0ea;\n  --orange-mid: rgba(232, 90, 30, 0.10);\n  --orange-border: rgba(232, 90, 30, 0.22);\n\n  --gold: #c9960c;\n  --gold-dark: #a07a08;\n  --gold-light: #fffbeb;\n  --gold-mid: rgba(201, 150, 12, 0.12);\n  --gold-border: rgba(201, 150, 12, 0.30);\n\n  --text-primary: #1a1d23;\n  --text-secondary: #6b7280;\n  --text-muted: #9ca3af;\n\n  --border: rgba(0, 0, 0, 0.08);\n  --border-md: rgba(0, 0, 0, 0.13);\n  --bg: #eef1f4;\n  --bg-card: #ffffff;\n  --bg-inner: #f5f7f9;\n\n  --r-sm: 8px;\n  --r-md: 12px;\n  --r-lg: 16px;\n  --r-xl: 20px;\n  --r-2xl: 22px;\n\n  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.10);\n\n  --violet: #7c5cbf;\n  --red: #e84a4a;\n  --green: #27ae7a;\n  --amber: #f5a623;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: 'Plus Jakarta Sans', 'Segoe UI', system-ui, -apple-system, sans-serif;\n  background: var(--bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  line-height: 1.5;\n  min-height: 100vh;\n}\n\n\n\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 30px 32px 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n\n\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n\n\n\n\n.overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  border-radius: var(--r-2xl);\n  overflow: hidden;\n  border: 1px solid var(--border-md);\n  box-shadow: var(--shadow-md);\n  background: white;\n   border-radius: 20px;\n}\n\n.overview-left[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, #2abfbf 0%, #1a9999 100%);\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  border-radius: var(--r-2xl) 0 0 var(--r-2xl);\n}\n\n.overview-eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.overview-plan-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: white;\n  line-height: 1.2;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  word-break: break-word;\n}\n\n.overview-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.22);\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 13px;\n  border-radius: 99px;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  width: fit-content;\n}\n.overview-status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 12px; }\n\n.overview-right[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.overview-stat[_ngcontent-%COMP%] {\n  padding: 28px 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n  border-left: 1px solid var(--border);\n}\n\n.overview-stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n}\n\n.overview-stat-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n\n.overview-stat-value[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.overview-stat-date[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n\n\n\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border-md);\n  border-radius: var(--r-xl);\n  padding: 22px 24px;\n  box-shadow: var(--shadow-sm);\n}\n\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n\n.card-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n\n.card-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n\n.card-head-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n\n\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 99px;\n}\n.badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 11px; }\n\n.badge--current[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 122, 0.1);\n  color: var(--green);\n  border: 1px solid rgba(39, 174, 122, 0.2);\n}\n\n.badge--orange[_ngcontent-%COMP%] {\n  background: var(--orange-mid);\n  color: var(--orange);\n  border: 1px solid var(--orange-border);\n}\n\n.badge--red[_ngcontent-%COMP%] {\n  background: rgba(232, 74, 74, 0.1);\n  color: var(--red);\n  border: 1px solid rgba(232, 74, 74, 0.2);\n}\n\n.badge--neutral[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.1);\n  color: #4b5563;\n  border: 1px solid rgba(107, 114, 128, 0.15);\n}\n\n\n\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.detail-col[_ngcontent-%COMP%] {\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.055);\n}\n\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.detail-row--inline[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.detail-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 11px; }\n\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n\n.detail-sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.detail-sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 12px; }\n\n.detail-sub--current[_ngcontent-%COMP%] { color: var(--green); }\n\n.detail-dates[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.detail-date-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.ref-box[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border-md);\n  border-radius: var(--r-md);\n  padding: 10px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-primary);\n  word-break: break-all;\n  line-height: 1.6;\n}\n\n\n\n\n.kh-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: var(--r-md);\n  font-size: 12px;\n  font-weight: 700;\n  font-family: inherit;\n  border: none;\n  cursor: pointer;\n  transition: all 0.18s;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.kh-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 13px; }\n\n.kh-btn--ghost[_ngcontent-%COMP%] {\n  background: var(--bg-inner);        \n\n  border: 1.5px solid var(--border-md);\n  color: var(--text-primary);         \n\n  font-weight: 700;\n}\n.kh-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e8eaed;\n  border-color: rgba(0,0,0,0.20);\n}\n.kh-btn--outline-current[_ngcontent-%COMP%] {\n  background: orange-light;\n  border: 1px solid var(--teal);\n  color: var(--teal);\n}\n.kh-btn--outline-current[_ngcontent-%COMP%]:hover { background: var(--teal-light); }\n\n.kh-btn--action[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--teal), var(--teal-dark));\n  color: var(--orange-light);\n}\n.kh-btn--action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(42, 191, 191, 0.32);\n}\n\n.kh-btn--orange[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--teal), var(--teal-dark));\n  color: var(--orange-light);\n  box-shadow: 0 4px 16px rgba(42, 191, 191, 0.30);\n}\n.kh-btn--orange[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(232, 90, 30, 0.35);\n}\n\n.kh-btn--gold[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--gold), #f0b429);\n  color: var(--orange-light);\n}\n.kh-btn--gold[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(201, 150, 12, 0.35);\n}\n\n.kh-btn--teal[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--teal), var(--teal-dark));\n  color: var(--orange-light);\n}\n.kh-btn--teal[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(42, 191, 191, 0.32);\n}\n\n.kh-btn--current-disabled[_ngcontent-%COMP%] {\n  background: var(--orange-light);\n  color: var(--orange);\n  border: 1px solid var(--orange-border);\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.kh-btn--sm[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 11px;\n  border-radius: var(--r-sm);\n}\n\n.kh-btn--full[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 42px;\n  border-radius: var(--r-lg);\n  font-size: 13px;\n}\n\n.kh-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n\n\n\n.plans-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.plans-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n\n.plans-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-top: 14px;\n}\n\n\n\n\n.plan-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border-md);\n  border-radius: 20px;\n  padding: 24px 22px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n  box-shadow: var(--shadow-sm);\n\n}\n\n.plan-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0; left: 0; right: 0;\n  height: 3px;\n  background: var(--border-md);\n  border-radius: var(--r-2xl) var(--r-2xl) 0 0;\n}\n\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n\n\n\n.plan-card--premium[_ngcontent-%COMP%]::before {\n  background: linear-gradient(90deg, #2abfbf, #1a9999, #2abfbf);\n}\n.plan-card--premium[_ngcontent-%COMP%] {\n  background: linear-gradient(160deg, #f0fdfd 0%, #e0f7f7 40%, #ffffff 100%);\n}\n\n\n\n.plan-card--current[_ngcontent-%COMP%] {\n  border: 2px solid var(--orange);\n  box-shadow:\n    0 0 0 3px rgba(232, 90, 30, 0.12),\n    0 12px 40px rgba(232, 90, 30, 0.18),\n    var(--shadow-md);\n  background: linear-gradient(160deg, #fff5f0 0%, #ffe8dc 40%, #ffffff 100%);\n  transform: translateY(-6px) scale(1.03);\n  z-index: 2;\n    border-radius: 20px;\n\n}\n.plan-card--current[_ngcontent-%COMP%]::before {\n  background: linear-gradient(90deg, #e85a1e, #f5a07a, #e85a1e);\n}\n.plan-card--current[_ngcontent-%COMP%]:hover {\n  transform: translateY(-9px) scale(1.04);\n  box-shadow:\n    0 0 0 3px rgba(232, 90, 30, 0.18),\n    0 18px 50px rgba(232, 90, 30, 0.24),\n    var(--shadow-md);\n}\n\n\n\n.plan-card--institutional[_ngcontent-%COMP%] {\n  border: 1px solid var(--gold-border);\n  background: linear-gradient(160deg, #fffdf0 0%, #fff8d8 40%, #ffffff 100%);\n    border-radius: 20px;\n\n}\n.plan-card--institutional[_ngcontent-%COMP%]::before {\n  background: linear-gradient(90deg, #c9960c, #f5c842, #c9960c);\n}\n.plan-card--institutional[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(201, 150, 12, 0.18);\n}\n\n\n\n\n.plan-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  font-weight: 800;\n  padding: 5px 12px;\n  border-radius: 99px;\n  letter-spacing: 0.04em;\n  color: white;\n}\n.plan-ribbon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 11px; }\n\n.plan-ribbon--current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e85a1e, #c94a14);\n  box-shadow: 0 3px 12px rgba(232, 90, 30, 0.35);\n}\n\n.plan-ribbon--institutional[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #c9960c, #f5c842);\n  box-shadow: 0 3px 12px rgba(201, 150, 12, 0.3);\n  color: #5a3e02;\n}\n\n\n\n\n.plan-top[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.plan-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.01em;\n  line-height: 1.15;\n}\n\n.plan-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n  line-height: 1.55;\n}\n\n.plan-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 9px;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 99px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  flex-shrink: 0;\n}\n\n.plan-badge--free[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.1);\n  color: #4b5563;\n  border: 1px solid rgba(107, 114, 128, 0.15);\n}\n\n.plan-badge--premium[_ngcontent-%COMP%] {\n  background: var(--orange-mid);\n  color: var(--orange);\n  border: 1px solid var(--orange-border);\n}\n\n.plan-badge--institutional[_ngcontent-%COMP%] {\n  background: var(--gold-mid);\n  color: var(--gold-dark);\n  border: 1px solid var(--gold-border);\n}\n\n.plan-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n}\n\n.plan-price-val[_ngcontent-%COMP%] {\n  font-size: 44px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n\n\n\n.plan-price-val--orange[_ngcontent-%COMP%] { color: var(--orange); }\n.plan-price-val--gold[_ngcontent-%COMP%]   { color: var(--gold); }\n\n.plan-price-unit[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n\n.plan-duration[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: 99px;\n  padding: 4px 11px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  width: fit-content;\n}\n.plan-duration[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 11px; }\n\n.plan-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 2px 0;\n}\n\n.plan-features[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  flex: 1;\n}\n\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-primary);\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  line-height: 1.4;\n}\n\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n\n\n.icon--teal[_ngcontent-%COMP%]   { color: var(--teal); }\n.icon--orange[_ngcontent-%COMP%] { color: var(--orange); }\n.icon--gold[_ngcontent-%COMP%]   { color: var(--gold); }\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 10, 20, 0.60);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  backdrop-filter: blur(4px);\n}\n\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.30);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalSlideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n@keyframes _ngcontent-%COMP%_modalSlideUp {\n  from { opacity: 0; transform: translateY(24px) scale(0.97); }\n  to   { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n\n\n.modal-head[_ngcontent-%COMP%] {\n  padding: 20px 22px 18px;\n  color: white;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.modal-head--orange[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);\n}.modal-head--dark[_ngcontent-%COMP%]   { background: linear-gradient(135deg, #1a1d23 0%, #2d3142 100%); }\n.modal-head--green[_ngcontent-%COMP%]  { background: linear-gradient(135deg, #27ae7a 0%, #1d8c60 100%); }\n\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; font-weight: 900; }\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]  { font-size: 12px; opacity: 0.80; margin-top: 3px; }\n\n.modal-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  font-size: 18px;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.modal-close[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, 0.30); }\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n\n\n.modal-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.modal-stat-box[_ngcontent-%COMP%] {\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 10px 12px;\n}\n\n.modal-stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n}\n\n.modal-stat-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin-top: 3px;\n}\n\n.modal-stat-value--orange[_ngcontent-%COMP%] { color: var(--orange); }\n\n\n\n.modal-check-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.modal-check-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--teal-border);  \n\n}\n.modal-check-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--teal);  \n\n}\n.modal-check-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; cursor: pointer; color: var(--text-primary); }\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 10px;\n}\n\n\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: var(--text-secondary); }\n.form-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid var(--border-md);\n  border-radius: var(--r-md);\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--text-primary);\n}\n\n.form-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--red);\n  background: rgba(232, 74, 74, 0.08);\n  border: 1px solid rgba(232, 74, 74, 0.18);\n  border-radius: var(--r-sm);\n  padding: 8px 12px;\n}\n\n\n\n.amount-due[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: linear-gradient(135deg, rgba(232, 90, 30, 0.06), rgba(201, 150, 12, 0.06));\n  border: 1px solid var(--orange-border);\n  border-radius: var(--r-md);\n  padding: 12px 16px;\n}\n.amount-due-label[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: var(--text-secondary); }\n.amount-due-sub[_ngcontent-%COMP%]   { font-size: 11px; color: var(--text-muted); margin-top: 2px; }\n.amount-due-value[_ngcontent-%COMP%] { display: flex; align-items: baseline; gap: 4px; }\n.amount-due-number[_ngcontent-%COMP%] { font-size: 24px; font-weight: 900; color: var(--orange); }\n.amount-due-unit[_ngcontent-%COMP%]   { font-size: 13px; font-weight: 600; color: var(--text-secondary); }\n\n\n\n#paypal-button-container[_ngcontent-%COMP%] {\n  background: white;\n  padding: 10px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n}\n\n\n\n.payment-success-box[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 0 4px;\n}\n\n.payment-success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #27ae7a, #1d9e66);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(39, 174, 122, 0.35);\n  animation: _ngcontent-%COMP%_popIn 0.40s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from { transform: scale(0); opacity: 0; }\n  to   { transform: scale(1); opacity: 1; }\n}\n.payment-success-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 28px; color: white; }\n\n.payment-success-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: 20px; font-weight: 900; color: var(--text-primary); }\n.payment-success-box[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { font-size: 13px; color: var(--text-secondary); }\n\n.payment-ref-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  text-align: left;\n}\n\n.payment-ref-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n\n.payment-ref-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n\n.payment-ref-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text-primary);\n  word-break: break-all;\n  text-align: right;\n}\n.payment-ref-value--orange[_ngcontent-%COMP%] { color: var(--orange); }\n.payment-ref-value--green[_ngcontent-%COMP%]  { color: var(--green); }\n\n.payment-ref-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n}\n\n\n\n\n@media (max-width: 980px) {\n  .overview[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .overview-right[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\n  .plans-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n}\n\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] { padding: 20px 16px 40px; }\n  .detail-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .overview-right[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .overview-stat[_ngcontent-%COMP%] { border-left: none; border-top: 1px solid var(--border); }\n}\n\n@media (max-width: 580px) {\n  .plans-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .card-head[_ngcontent-%COMP%] { flex-direction: column; }\n  .plans-header[_ngcontent-%COMP%] { flex-direction: column; }\n  .modal-summary-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .modal-actions[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profile', template: "<div class=\"page\">\n\n  <!-- Page Header -->\n  <div class=\"page-header\">\n    <h1>Profile &amp; Subscription</h1>\n    <p>Manage your current plan and explore available upgrades</p>\n  </div>\n\n  <!-- \u2500\u2500 Overview Banner \u2500\u2500 -->\n  <div class=\"overview\" *ngIf=\"currentSubscription as sub\">\n    <div class=\"overview-left overview-left--current\">\n      <span class=\"overview-eyebrow\">Current subscription</span>\n      <div class=\"overview-plan-name\">\n        {{ sub.planOffer?.label || sub.plan }}\n      </div>\n      <div class=\"overview-status-badge overview-status-badge--current\">\n        <i class=\"bi bi-check-circle-fill\"></i>\n        {{ getStatusLabel(sub.statut) }}\n      </div>\n    </div>\n\n    <div class=\"overview-right\">\n      <div class=\"overview-stat\">\n        <span class=\"overview-stat-label\">Your current plan</span>\n        <p class=\"overview-stat-desc\">\n          Manage your subscription, billing and renewal settings.\n        </p>\n      </div>\n\n      <div class=\"overview-stat\">\n        <span class=\"overview-stat-label\">Days Remaining</span>\n        <span class=\"overview-stat-value\">{{ getRemainingDays() }}</span>\n      </div>\n\n      <div class=\"overview-stat\">\n        <span class=\"overview-stat-label\">Expiration Date</span>\n        <span class=\"overview-stat-date\" *ngIf=\"sub.plan !== 'FREE'; else freeExpiration\">\n          {{ sub.dateFin | date:'dd MMM' }}<br>\n          {{ sub.dateFin | date:'yyyy' }}\n        </span>\n        <ng-template #freeExpiration>\n          <span class=\"overview-stat-date\">Unlimited</span>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Subscription Details Card \u2500\u2500 -->\n  <div class=\"card\" *ngIf=\"currentSubscription as sub\">\n    <div class=\"card-head\">\n      <div>\n        <h2>Subscription Details</h2>\n        <p>Manage your subscription, billing and renewal settings</p>\n      </div>\n\n      <div class=\"card-head-right\">\n        <span class=\"badge badge--current\">\n          <i class=\"bi bi-check-circle-fill\"></i>\n          {{ getStatusLabel(sub.statut) }}\n        </span>\n      </div>\n    </div>\n\n    <div class=\"detail-grid\">\n      <!-- Left col -->\n      <div class=\"detail-col\">\n        <div class=\"detail-row\">\n          <span class=\"detail-label\">Plan</span>\n          <span class=\"detail-value\">{{ sub.planOffer?.label || sub.plan }}</span>\n          <span class=\"detail-sub detail-sub--current\">\n            <i class=\"bi bi-check-circle-fill\"></i>\n            {{ getStatusLabel(sub.statut) }}\n          </span>\n        </div>\n\n        <div class=\"detail-row\">\n          <div class=\"detail-dates\">\n            <div class=\"detail-date-item\">\n              <span class=\"detail-label\"><i class=\"bi bi-calendar3\"></i> Start date</span>\n              <span class=\"detail-value\" style=\"font-size:13px;\">\n                {{ sub.dateDebut | date:'dd MMM yyyy' }}\n              </span>\n              <span class=\"detail-sub detail-sub--current\">\n                <i class=\"bi bi-check-circle-fill\"></i>\n              </span>\n            </div>\n\n            <div class=\"detail-date-item\">\n              <span class=\"detail-label\"><i class=\"bi bi-calendar3\"></i> End date</span>\n              <span class=\"detail-value\" style=\"font-size:13px;\">\n                {{ sub.plan === 'FREE' ? 'Unlimited' : (sub.dateFin | date:'MMM yyyy') }}\n              </span>\n              <span class=\"detail-sub detail-sub--current\">\n                <i class=\"bi bi-check-circle-fill\"></i>\n                {{ getStatusLabel(sub.statut) }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Right col -->\n      <div class=\"detail-col\">\n        <div class=\"detail-row detail-row--inline\">\n          <div>\n            <span class=\"detail-label\">Auto-renewal</span>\n            <span class=\"detail-value\">\n              {{ sub.autoRenouvellement ? 'Enabled' : 'Disabled' }}\n            </span>\n          </div>\n\n          <button\n            class=\"kh-btn kh-btn--outline-current kh-btn--sm\"\n            [disabled]=\"isProcessing\"\n            (click)=\"toggleAutoRenew()\"\n          >\n            <i class=\"bi bi-arrow-repeat\"></i>\n            {{ sub.autoRenouvellement ? 'Disable Auto-Renewal' : 'Enable Auto-Renewal' }}\n          </button>\n        </div>\n\n        <div class=\"detail-row\">\n          <span class=\"detail-label\"><i class=\"bi bi-credit-card\"></i> Payment ref</span>\n          <div class=\"ref-box\">\n            {{ sub.paiementRef || 'No payment reference' }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Plans \u2500\u2500 -->\n  <div>\n    <div class=\"plans-header\">\n      <div>\n        <h2>Choose Your Plan</h2>\n        <p>Choose the best subscription for your business needs</p>\n      </div>\n    </div>\n\n    <div class=\"plans-grid\">\n      <div\n        *ngFor=\"let plan of plans\"\n        class=\"plan-card\"\n        [ngClass]=\"{\n          'plan-card--premium': plan.type === 'PREMIUM',\n          'plan-card--institutional': plan.type === 'INSTITUTIONAL',\n          'plan-card--current': isCurrentPlan(plan)\n        }\"\n      >\n        <!-- Ribbon current -->\n        <div class=\"plan-ribbon plan-ribbon--current\" *ngIf=\"isCurrentPlan(plan)\">\n          <i class=\"bi bi-check2-circle\"></i>\n          Current Subscription\n        </div>\n\n        <!-- Ribbon institutional (only if NOT current) -->\n        <div class=\"plan-ribbon plan-ribbon--institutional\" *ngIf=\"plan.type === 'INSTITUTIONAL' && !isCurrentPlan(plan)\">\n          <i class=\"bi bi-star-fill\"></i>\n          Enterprise\n        </div>\n\n        <div class=\"plan-top\">\n          <div>\n            <h3>{{ plan.label }}</h3>\n            <p>{{ plan.description }}</p>\n          </div>\n\n          <span\n            class=\"plan-badge\"\n            [ngClass]=\"{\n              'plan-badge--free': plan.type === 'FREE',\n              'plan-badge--premium': plan.type === 'PREMIUM',\n              'plan-badge--institutional': plan.type === 'INSTITUTIONAL'\n            }\"\n          >\n            {{ plan.type === 'FREE' ? 'Free' : (plan.type === 'PREMIUM' ? 'Premium' : 'Gold') }}\n          </span>\n        </div>\n\n        <div class=\"plan-price\">\n          <span\n            class=\"plan-price-val\"\n            [ngClass]=\"{\n              'plan-price-val--orange': isCurrentPlan(plan),\n              'plan-price-val--gold': plan.type === 'INSTITUTIONAL' && !isCurrentPlan(plan)\n            }\"\n          >\n            {{ plan.prix === 0 ? 'Free' : plan.prix }}\n          </span>\n          <span class=\"plan-price-unit\" *ngIf=\"plan.prix !== 0\">DT / month</span>\n        </div>\n\n        <div class=\"plan-duration\">\n  <i class=\"bi bi-clock\"></i>\n  {{ getDuration(plan) }}\n</div>\n\n        <div class=\"plan-divider\"></div>\n\n        <ul class=\"plan-features\">\n          <li\n            *ngFor=\"let item of getAvantagesList(plan.avantages || '')\"\n            [ngClass]=\"{\n              'plan-features--orange': isCurrentPlan(plan),\n              'plan-features--gold': plan.type === 'INSTITUTIONAL' && !isCurrentPlan(plan)\n            }\"\n          >\n            <i\n              class=\"bi bi-check2\"\n              [ngClass]=\"{\n                'icon--orange': isCurrentPlan(plan),\n                'icon--gold': plan.type === 'INSTITUTIONAL' && !isCurrentPlan(plan),\n                'icon--teal': !isCurrentPlan(plan) && plan.type !== 'INSTITUTIONAL'\n              }\"\n            ></i>\n            <span>{{ item }}</span>\n          </li>\n        </ul>\n\n        <button\n          class=\"kh-btn kh-btn--full\"\n          [ngClass]=\"{\n            'kh-btn--current-disabled': isCurrentPlan(plan),\n            'kh-btn--gold': plan.type === 'INSTITUTIONAL' && !isCurrentPlan(plan),\n            'kh-btn--action': !isCurrentPlan(plan) && plan.type !== 'INSTITUTIONAL'\n          }\"\n          [disabled]=\"isCurrentPlan(plan) || isProcessing || !canChangePlan(plan.type)\"\n          (click)=\"openPlanModal(plan)\"\n          style=\"margin-top:auto;\"\n        >\n          <i\n            class=\"bi\"\n            [ngClass]=\"{\n              'bi-check2-circle': isCurrentPlan(plan),\n              'bi-arrow-up-right': !isCurrentPlan(plan) && isUpgrade(plan.type),\n              'bi-arrow-repeat': !isCurrentPlan(plan) && !isUpgrade(plan.type)\n            }\"\n          ></i>\n          {{ getButtonLabel(plan) }}\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Modal \u2500\u2500 -->\n  <div class=\"modal-overlay\" *ngIf=\"showModal\" (click)=\"onOverlayClick($event)\">\n    <div class=\"modal-card\">\n\n      <!-- Step 1: Plan details -->\n      <div *ngIf=\"!showPayment && !paymentSuccess\">\n        <div class=\"modal-head modal-head--orange\">\n          <div>\n            <h3>{{ selectedPlan?.label }}</h3>\n            <p>{{ selectedPlan?.description }}</p>\n          </div>\n          <button class=\"modal-close\" type=\"button\" (click)=\"closeModal()\">\u00D7</button>\n        </div>\n\n        <div class=\"modal-body\" *ngIf=\"selectedPlan as plan\">\n          <div class=\"modal-summary-grid\">\n            <div class=\"modal-stat-box\">\n              <div class=\"modal-stat-label\">Plan</div>\n              <div class=\"modal-stat-value\">{{ plan.label }}</div>\n            </div>\n            <div class=\"modal-stat-box\">\n              <div class=\"modal-stat-label\">Type</div>\n              <div class=\"modal-stat-value\">{{ plan.type }}</div>\n            </div>\n            <div class=\"modal-stat-box\">\n              <div class=\"modal-stat-label\">Price</div>\n              <div class=\"modal-stat-value modal-stat-value--orange\">\n                {{ plan.prix === 0 ? 'Free' : (plan.prix + ' DT') }}\n              </div>\n            </div>\n            <div class=\"modal-stat-box\">\n              <div class=\"modal-stat-label\">Duration</div>\n              <div class=\"modal-stat-value\">{{ plan.duree === 0 ? 'Unlimited' : (plan.duree + ' days') }}</div>\n            </div>\n          </div>\n\n          <label class=\"modal-check-row\">\n            <input id=\"modalAutoRenew\" type=\"checkbox\" [(ngModel)]=\"modalAutoRenew\" />\n            <label for=\"modalAutoRenew\">Enable auto-renewal</label>\n          </label>\n\n          <label class=\"modal-check-row\">\n            <input id=\"modalNotifyBefore\" type=\"checkbox\" [(ngModel)]=\"modalNotifyBefore\" />\n            <label for=\"modalNotifyBefore\">Notify me before renewal</label>\n          </label>\n\n          <div class=\"form-group\" *ngIf=\"isDowngrade\">\n            <label for=\"modalStartDate\">Start date</label>\n            <input id=\"modalStartDate\" type=\"date\" [(ngModel)]=\"modalStartDate\" />\n          </div>\n\n          <p class=\"form-error\" *ngIf=\"paymentError\">{{ paymentError }}</p>\n\n          <div class=\"modal-actions\">\n            <button type=\"button\" class=\"kh-btn kh-btn--ghost\" (click)=\"closeModal()\">Cancel</button>\n            <button\n              type=\"button\"\n              class=\"kh-btn kh-btn--orange\"\n              [disabled]=\"isProcessing\"\n              (click)=\"proceedToPayment()\"\n            >\n              <i class=\"bi bi-credit-card\"></i>\n              {{ plan.prix === 0 ? 'Confirm Plan' : 'Proceed to Payment' }}\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Step 2: Payment -->\n      <div *ngIf=\"showPayment && !paymentSuccess\">\n        <div class=\"modal-head modal-head--dark\">\n          <div>\n            <h3>Secure Payment</h3>\n            <p>Choose your preferred payment method</p>\n          </div>\n          <button class=\"modal-close\" type=\"button\" (click)=\"closeModal()\">\u00D7</button>\n        </div>\n\n        <div class=\"modal-body\">\n          <div class=\"amount-due\">\n            <div>\n              <div class=\"amount-due-label\">Amount due</div>\n              <div class=\"amount-due-sub\">{{ selectedPlan?.label }} \u00B7 {{ selectedPlan?.duree }} days</div>\n            </div>\n            <div class=\"amount-due-value\">\n              <span class=\"amount-due-number\">{{ selectedPlan?.prix }}</span>\n              <span class=\"amount-due-unit\">DT</span>\n            </div>\n          </div>\n\n          <div id=\"paypal-button-container\"></div>\n\n          <p class=\"form-error\" *ngIf=\"paymentError\">{{ paymentError }}</p>\n\n          <button\n            type=\"button\"\n            class=\"kh-btn kh-btn--ghost kh-btn--full\"\n            (click)=\"backToDetails()\"\n          >\n            <i class=\"bi bi-arrow-left\"></i> Back\n          </button>\n        </div>\n      </div>\n\n      <!-- Step 3: Payment success -->\n      <div *ngIf=\"paymentSuccess\">\n        <div class=\"modal-head modal-head--green\">\n          <div>\n            <h3>Payment Confirmed</h3>\n            <p>Your subscription has been activated</p>\n          </div>\n          <button class=\"modal-close\" type=\"button\" (click)=\"closeModal()\">\u00D7</button>\n        </div>\n\n        <div class=\"modal-body\">\n          <div class=\"payment-success-box\">\n            <div class=\"payment-success-icon\">\n              <i class=\"bi bi-check-lg\"></i>\n            </div>\n            <h4>Payment Successful!</h4>\n            <p>Your {{ selectedPlan?.label }} plan is now active. Welcome aboard!</p>\n\n            <div class=\"payment-ref-grid\" *ngIf=\"currentSubscription\">\n              <div class=\"payment-ref-row\">\n                <span class=\"payment-ref-label\">Payment reference</span>\n                <span class=\"payment-ref-value payment-ref-value--orange\">{{ currentSubscription.paiementRef }}</span>\n              </div>\n              <div class=\"payment-ref-divider\"></div>\n              <div class=\"payment-ref-row\">\n                <span class=\"payment-ref-label\">Subscription starts</span>\n                <span class=\"payment-ref-value\">{{ currentSubscription.dateDebut | date:'dd MMM yyyy' }}</span>\n              </div>\n              <div class=\"payment-ref-divider\"></div>\n              <div class=\"payment-ref-row\">\n                <span class=\"payment-ref-label\">Subscription ends</span>\n                <span class=\"payment-ref-value\">{{ currentSubscription.dateFin | date:'dd MMM yyyy' }}</span>\n              </div>\n              <div class=\"payment-ref-divider\"></div>\n              <div class=\"payment-ref-row\">\n                <span class=\"payment-ref-label\">Amount paid</span>\n                <span class=\"payment-ref-value payment-ref-value--green\">{{ selectedPlan?.prix }} DT</span>\n              </div>\n            </div>\n\n            <button\n              type=\"button\"\n              class=\"kh-btn kh-btn--teal kh-btn--full\"\n              (click)=\"closeModal()\"\n            >\n              <i class=\"bi bi-check2-circle\"></i> Done\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>", styles: ["/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   KHOTWA \u2014 Profile & Subscription Page CSS\n   Updated: Orange for current plan, Gold for institutional\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --teal: #2abfbf;\n  --teal-dark: #1a9999;\n  --teal-light: #e1f5f5;\n  --teal-mid: rgba(42, 191, 191, 0.12);\n  --teal-border: rgba(42, 191, 191, 0.25);\n\n  --orange: #e85a1e;\n  --orange-dark: #c94a14;\n  --orange-light: #fff0ea;\n  --orange-mid: rgba(232, 90, 30, 0.10);\n  --orange-border: rgba(232, 90, 30, 0.22);\n\n  --gold: #c9960c;\n  --gold-dark: #a07a08;\n  --gold-light: #fffbeb;\n  --gold-mid: rgba(201, 150, 12, 0.12);\n  --gold-border: rgba(201, 150, 12, 0.30);\n\n  --text-primary: #1a1d23;\n  --text-secondary: #6b7280;\n  --text-muted: #9ca3af;\n\n  --border: rgba(0, 0, 0, 0.08);\n  --border-md: rgba(0, 0, 0, 0.13);\n  --bg: #eef1f4;\n  --bg-card: #ffffff;\n  --bg-inner: #f5f7f9;\n\n  --r-sm: 8px;\n  --r-md: 12px;\n  --r-lg: 16px;\n  --r-xl: 20px;\n  --r-2xl: 22px;\n\n  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);\n  --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.10);\n\n  --violet: #7c5cbf;\n  --red: #e84a4a;\n  --green: #27ae7a;\n  --amber: #f5a623;\n}\n\nhtml, body {\n  font-family: 'Plus Jakarta Sans', 'Segoe UI', system-ui, -apple-system, sans-serif;\n  background: var(--bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  line-height: 1.5;\n  min-height: 100vh;\n}\n\n/* \u2550\u2550 PAGE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n.page {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 30px 32px 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n/* \u2500\u2500 Page Header \u2500\u2500 */\n\n.page-header h1 {\n  font-size: 26px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n\n.page-header p {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n\n/* \u2500\u2500 Overview Banner \u2500\u2500 */\n\n.overview {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  border-radius: var(--r-2xl);\n  overflow: hidden;\n  border: 1px solid var(--border-md);\n  box-shadow: var(--shadow-md);\n  background: white;\n   border-radius: 20px;\n}\n\n.overview-left {\n  background: linear-gradient(145deg, #2abfbf 0%, #1a9999 100%);\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  border-radius: var(--r-2xl) 0 0 var(--r-2xl);\n}\n\n.overview-eyebrow {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.overview-plan-name {\n  font-size: 22px;\n  font-weight: 900;\n  color: white;\n  line-height: 1.2;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  word-break: break-word;\n}\n\n.overview-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.22);\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 13px;\n  border-radius: 99px;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  width: fit-content;\n}\n.overview-status-badge i { font-size: 12px; }\n\n.overview-right {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.overview-stat {\n  padding: 28px 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n  border-left: 1px solid var(--border);\n}\n\n.overview-stat-label {\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n}\n\n.overview-stat-desc {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n\n.overview-stat-value {\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n\n.overview-stat-date {\n  font-size: 26px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n\n/* \u2500\u2500 Card Base \u2500\u2500 */\n\n.card {\n  background: white;\n  border: 1px solid var(--border-md);\n  border-radius: var(--r-xl);\n  padding: 22px 24px;\n  box-shadow: var(--shadow-sm);\n}\n\n.card-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n\n.card-head h2 {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n\n.card-head p {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n\n.card-head-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n/* \u2500\u2500 Badges \u2500\u2500 */\n\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 99px;\n}\n.badge i { font-size: 11px; }\n\n.badge--current {\n  background: rgba(39, 174, 122, 0.1);\n  color: var(--green);\n  border: 1px solid rgba(39, 174, 122, 0.2);\n}\n\n.badge--orange {\n  background: var(--orange-mid);\n  color: var(--orange);\n  border: 1px solid var(--orange-border);\n}\n\n.badge--red {\n  background: rgba(232, 74, 74, 0.1);\n  color: var(--red);\n  border: 1px solid rgba(232, 74, 74, 0.2);\n}\n\n.badge--neutral {\n  background: rgba(107, 114, 128, 0.1);\n  color: #4b5563;\n  border: 1px solid rgba(107, 114, 128, 0.15);\n}\n\n/* \u2500\u2500 Detail Grid \u2500\u2500 */\n\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.detail-col {\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.detail-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.055);\n}\n\n.detail-row:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.detail-row--inline {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.detail-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.detail-label i { font-size: 11px; }\n\n.detail-value {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n\n.detail-sub {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.detail-sub i { font-size: 12px; }\n\n.detail-sub--current { color: var(--green); }\n\n.detail-dates {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.detail-date-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.ref-box {\n  background: white;\n  border: 1px solid var(--border-md);\n  border-radius: var(--r-md);\n  padding: 10px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-primary);\n  word-break: break-all;\n  line-height: 1.6;\n}\n\n/* \u2500\u2500 Buttons \u2500\u2500 */\n\n.kh-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: var(--r-md);\n  font-size: 12px;\n  font-weight: 700;\n  font-family: inherit;\n  border: none;\n  cursor: pointer;\n  transition: all 0.18s;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.kh-btn i { font-size: 13px; }\n\n.kh-btn--ghost {\n  background: var(--bg-inner);        /* gris clair au lieu de transparent */\n  border: 1.5px solid var(--border-md);\n  color: var(--text-primary);         /* texte noir fonc\u00E9 */\n  font-weight: 700;\n}\n.kh-btn--ghost:hover {\n  background: #e8eaed;\n  border-color: rgba(0,0,0,0.20);\n}\n.kh-btn--outline-current {\n  background: orange-light;\n  border: 1px solid var(--teal);\n  color: var(--teal);\n}\n.kh-btn--outline-current:hover { background: var(--teal-light); }\n\n.kh-btn--action {\n  background: linear-gradient(135deg, var(--teal), var(--teal-dark));\n  color: var(--orange-light);\n}\n.kh-btn--action:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(42, 191, 191, 0.32);\n}\n\n.kh-btn--orange {\n  background: linear-gradient(135deg, var(--teal), var(--teal-dark));\n  color: var(--orange-light);\n  box-shadow: 0 4px 16px rgba(42, 191, 191, 0.30);\n}\n.kh-btn--orange:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(232, 90, 30, 0.35);\n}\n\n.kh-btn--gold {\n  background: linear-gradient(135deg, var(--gold), #f0b429);\n  color: var(--orange-light);\n}\n.kh-btn--gold:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(201, 150, 12, 0.35);\n}\n\n.kh-btn--teal {\n  background: linear-gradient(135deg, var(--teal), var(--teal-dark));\n  color: var(--orange-light);\n}\n.kh-btn--teal:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(42, 191, 191, 0.32);\n}\n\n.kh-btn--current-disabled {\n  background: var(--orange-light);\n  color: var(--orange);\n  border: 1px solid var(--orange-border);\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.kh-btn--sm {\n  padding: 5px 12px;\n  font-size: 11px;\n  border-radius: var(--r-sm);\n}\n\n.kh-btn--full {\n  width: 100%;\n  min-height: 42px;\n  border-radius: var(--r-lg);\n  font-size: 13px;\n}\n\n.kh-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n/* \u2550\u2550 PLANS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n.plans-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.plans-header h2 {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n\n.plans-header p {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 3px;\n}\n\n.plans-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-top: 14px;\n}\n\n/* \u2500\u2500 Plan Card base \u2500\u2500 */\n\n.plan-card {\n  background: white;\n  border: 1px solid var(--border-md);\n  border-radius: 20px;\n  padding: 24px 22px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n  box-shadow: var(--shadow-sm);\n\n}\n\n.plan-card::before {\n  content: '';\n  position: absolute;\n  top: 0; left: 0; right: 0;\n  height: 3px;\n  background: var(--border-md);\n  border-radius: var(--r-2xl) var(--r-2xl) 0 0;\n}\n\n.plan-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n\n/* \u2500\u2500 Premium plan (default teal accent) \u2500\u2500 */\n.plan-card--premium::before {\n  background: linear-gradient(90deg, #2abfbf, #1a9999, #2abfbf);\n}\n.plan-card--premium {\n  background: linear-gradient(160deg, #f0fdfd 0%, #e0f7f7 40%, #ffffff 100%);\n}\n\n/* \u2500\u2500 CURRENT plan \u2014 ORANGE \u2500\u2500 */\n.plan-card--current {\n  border: 2px solid var(--orange);\n  box-shadow:\n    0 0 0 3px rgba(232, 90, 30, 0.12),\n    0 12px 40px rgba(232, 90, 30, 0.18),\n    var(--shadow-md);\n  background: linear-gradient(160deg, #fff5f0 0%, #ffe8dc 40%, #ffffff 100%);\n  transform: translateY(-6px) scale(1.03);\n  z-index: 2;\n    border-radius: 20px;\n\n}\n.plan-card--current::before {\n  background: linear-gradient(90deg, #e85a1e, #f5a07a, #e85a1e);\n}\n.plan-card--current:hover {\n  transform: translateY(-9px) scale(1.04);\n  box-shadow:\n    0 0 0 3px rgba(232, 90, 30, 0.18),\n    0 18px 50px rgba(232, 90, 30, 0.24),\n    var(--shadow-md);\n}\n\n/* \u2500\u2500 INSTITUTIONAL plan \u2014 GOLD \u2500\u2500 */\n.plan-card--institutional {\n  border: 1px solid var(--gold-border);\n  background: linear-gradient(160deg, #fffdf0 0%, #fff8d8 40%, #ffffff 100%);\n    border-radius: 20px;\n\n}\n.plan-card--institutional::before {\n  background: linear-gradient(90deg, #c9960c, #f5c842, #c9960c);\n}\n.plan-card--institutional:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(201, 150, 12, 0.18);\n}\n\n/* \u2500\u2500 Ribbon \u2500\u2500 */\n\n.plan-ribbon {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 10px;\n  font-weight: 800;\n  padding: 5px 12px;\n  border-radius: 99px;\n  letter-spacing: 0.04em;\n  color: white;\n}\n.plan-ribbon i { font-size: 11px; }\n\n.plan-ribbon--current {\n  background: linear-gradient(135deg, #e85a1e, #c94a14);\n  box-shadow: 0 3px 12px rgba(232, 90, 30, 0.35);\n}\n\n.plan-ribbon--institutional {\n  background: linear-gradient(135deg, #c9960c, #f5c842);\n  box-shadow: 0 3px 12px rgba(201, 150, 12, 0.3);\n  color: #5a3e02;\n}\n\n/* \u2500\u2500 Plan Card Content \u2500\u2500 */\n\n.plan-top {\n  margin-top: 26px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.plan-top h3 {\n  font-size: 19px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.01em;\n  line-height: 1.15;\n}\n\n.plan-top p {\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n  line-height: 1.55;\n}\n\n.plan-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 9px;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 99px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  flex-shrink: 0;\n}\n\n.plan-badge--free {\n  background: rgba(107, 114, 128, 0.1);\n  color: #4b5563;\n  border: 1px solid rgba(107, 114, 128, 0.15);\n}\n\n.plan-badge--premium {\n  background: var(--orange-mid);\n  color: var(--orange);\n  border: 1px solid var(--orange-border);\n}\n\n.plan-badge--institutional {\n  background: var(--gold-mid);\n  color: var(--gold-dark);\n  border: 1px solid var(--gold-border);\n}\n\n.plan-price {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n}\n\n.plan-price-val {\n  font-size: 44px;\n  font-weight: 900;\n  color: var(--text-primary);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n\n/* Price color variants */\n.plan-price-val--orange { color: var(--orange); }\n.plan-price-val--gold   { color: var(--gold); }\n\n.plan-price-unit {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n\n.plan-duration {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: 99px;\n  padding: 4px 11px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  width: fit-content;\n}\n.plan-duration i { font-size: 11px; }\n\n.plan-divider {\n  height: 1px;\n  background: var(--border);\n  margin: 2px 0;\n}\n\n.plan-features {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  flex: 1;\n}\n\n.plan-features li {\n  font-size: 12px;\n  color: var(--text-primary);\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  line-height: 1.4;\n}\n\n.plan-features li i {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n/* Icon colors */\n.icon--teal   { color: var(--teal); }\n.icon--orange { color: var(--orange); }\n.icon--gold   { color: var(--gold); }\n\n/* \u2550\u2550 MODAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 10, 20, 0.60);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  backdrop-filter: blur(4px);\n}\n\n.modal-card {\n  width: 100%;\n  max-width: 480px;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.30);\n  overflow: hidden;\n  animation: modalSlideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n@keyframes modalSlideUp {\n  from { opacity: 0; transform: translateY(24px) scale(0.97); }\n  to   { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n/* Modal header variants */\n.modal-head {\n  padding: 20px 22px 18px;\n  color: white;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.modal-head--orange {\n  background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);\n}.modal-head--dark   { background: linear-gradient(135deg, #1a1d23 0%, #2d3142 100%); }\n.modal-head--green  { background: linear-gradient(135deg, #27ae7a 0%, #1d8c60 100%); }\n\n.modal-head h3 { font-size: 18px; font-weight: 900; }\n.modal-head p  { font-size: 12px; opacity: 0.80; margin-top: 3px; }\n\n.modal-close {\n  background: rgba(255, 255, 255, 0.18);\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  font-size: 18px;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.modal-close:hover { background: rgba(255, 255, 255, 0.30); }\n\n.modal-body {\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n/* Modal summary grid */\n.modal-summary-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.modal-stat-box {\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  padding: 10px 12px;\n}\n\n.modal-stat-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n}\n\n.modal-stat-value {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin-top: 3px;\n}\n\n.modal-stat-value--orange { color: var(--orange); }\n\n/* Modal checkboxes */\n.modal-check-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.modal-check-row:hover {\n  border-color: var(--teal-border);  /* \u00E9tait orange-border */\n}\n.modal-check-row input[type=checkbox] {\n  accent-color: var(--teal);  /* \u00E9tait orange */\n}\n.modal-check-row label { font-size: 13px; font-weight: 600; cursor: pointer; color: var(--text-primary); }\n\n.modal-actions {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 10px;\n}\n\n/* Form elements */\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label { font-size: 12px; font-weight: 700; color: var(--text-secondary); }\n.form-group input[type=date] {\n  padding: 9px 12px;\n  border: 1px solid var(--border-md);\n  border-radius: var(--r-md);\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--text-primary);\n}\n\n.form-error {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--red);\n  background: rgba(232, 74, 74, 0.08);\n  border: 1px solid rgba(232, 74, 74, 0.18);\n  border-radius: var(--r-sm);\n  padding: 8px 12px;\n}\n\n/* Amount due row */\n.amount-due {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: linear-gradient(135deg, rgba(232, 90, 30, 0.06), rgba(201, 150, 12, 0.06));\n  border: 1px solid var(--orange-border);\n  border-radius: var(--r-md);\n  padding: 12px 16px;\n}\n.amount-due-label { font-size: 12px; font-weight: 700; color: var(--text-secondary); }\n.amount-due-sub   { font-size: 11px; color: var(--text-muted); margin-top: 2px; }\n.amount-due-value { display: flex; align-items: baseline; gap: 4px; }\n.amount-due-number { font-size: 24px; font-weight: 900; color: var(--orange); }\n.amount-due-unit   { font-size: 13px; font-weight: 600; color: var(--text-secondary); }\n\n/* PayPal container */\n#paypal-button-container {\n  background: white;\n  padding: 10px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n}\n\n/* Payment success box */\n.payment-success-box {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 0 4px;\n}\n\n.payment-success-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #27ae7a, #1d9e66);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(39, 174, 122, 0.35);\n  animation: popIn 0.40s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes popIn {\n  from { transform: scale(0); opacity: 0; }\n  to   { transform: scale(1); opacity: 1; }\n}\n.payment-success-icon i { font-size: 28px; color: white; }\n\n.payment-success-box h4 { font-size: 20px; font-weight: 900; color: var(--text-primary); }\n.payment-success-box > p { font-size: 13px; color: var(--text-secondary); }\n\n.payment-ref-grid {\n  width: 100%;\n  background: var(--bg-inner);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  text-align: left;\n}\n\n.payment-ref-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n\n.payment-ref-label {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n\n.payment-ref-value {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--text-primary);\n  word-break: break-all;\n  text-align: right;\n}\n.payment-ref-value--orange { color: var(--orange); }\n.payment-ref-value--green  { color: var(--green); }\n\n.payment-ref-divider {\n  height: 1px;\n  background: var(--border);\n}\n\n/* \u2550\u2550 RESPONSIVE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n\n@media (max-width: 980px) {\n  .overview { grid-template-columns: 1fr; }\n  .overview-right { grid-template-columns: repeat(3, 1fr); }\n  .plans-grid { grid-template-columns: 1fr 1fr; }\n}\n\n@media (max-width: 768px) {\n  .page { padding: 20px 16px 40px; }\n  .detail-grid { grid-template-columns: 1fr; }\n  .overview-right { grid-template-columns: 1fr; }\n  .overview-stat { border-left: none; border-top: 1px solid var(--border); }\n}\n\n@media (max-width: 580px) {\n  .plans-grid { grid-template-columns: 1fr; }\n  .card-head { flex-direction: column; }\n  .plans-header { flex-direction: column; }\n  .modal-summary-grid { grid-template-columns: 1fr; }\n  .modal-actions { grid-template-columns: 1fr; }\n}"] }]
    }], () => [{ type: i4.SubscriptionService, decorators: [{
                type: Inject,
                args: [SubscriptionService]
            }] }, { type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "app\\features\\entrepreneur\\profile\\profile.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=profile.component.js.map