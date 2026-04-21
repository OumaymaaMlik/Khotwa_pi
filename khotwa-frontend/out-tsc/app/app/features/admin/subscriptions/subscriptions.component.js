import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/subscription.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function SubscriptionsComponent_div_51_tr_43_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 48);
} if (rf & 2) {
    const s_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.getAvatarUrl(s_r4), i0.ɵɵsanitizeUrl)("alt", ctx_r1.getFullName(s_r4));
} }
function SubscriptionsComponent_div_51_tr_43_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background", ctx_r1.getAvatarColor(s_r4));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.getUserInitials(s_r4));
} }
function SubscriptionsComponent_div_51_tr_43_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.getAmountPaid(s_r4), " DT");
} }
function SubscriptionsComponent_div_51_tr_43_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1, "Free");
    i0.ɵɵelementEnd();
} }
function SubscriptionsComponent_div_51_tr_43_span_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_6_0;
    const s_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", s_r4.paiementRef);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("card"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.getPaymentRef(s_r4), "", ((tmp_6_0 = s_r4.paiementRef == null ? null : s_r4.paiementRef.length) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0) > 20 ? "\u2026" : "", " ");
} }
function SubscriptionsComponent_div_51_tr_43_span_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function SubscriptionsComponent_div_51_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "div", 31);
    i0.ɵɵtemplate(5, SubscriptionsComponent_div_51_tr_43_img_5_Template, 1, 2, "img", 32)(6, SubscriptionsComponent_div_51_tr_43_div_6_Template, 2, 3, "div", 33);
    i0.ɵɵelementStart(7, "div", 34)(8, "div", 35);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 36);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(12, "td")(13, "span", 37);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td")(16, "span", 38);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtemplate(19, SubscriptionsComponent_div_51_tr_43_span_19_Template, 2, 1, "span", 39)(20, SubscriptionsComponent_div_51_tr_43_span_20_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td")(22, "span", 37);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "td", 41);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "td", 41);
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "td")(31, "span", 42);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "td")(34, "span", 43);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "td");
    i0.ɵɵtemplate(37, SubscriptionsComponent_div_51_tr_43_span_37_Template, 3, 4, "span", 44)(38, SubscriptionsComponent_div_51_tr_43_span_38_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "td")(40, "div", 45)(41, "button", 46);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_51_tr_43_Template_button_click_41_listener() { const s_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.renewSubscription(s_r4)); });
    i0.ɵɵelement(42, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "button", 47);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_51_tr_43_Template_button_click_43_listener() { const s_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.confirmSuspend(s_r4)); });
    i0.ɵɵelement(44, "span", 6);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r4.idSubscription);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.hasAvatar(s_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hasAvatar(s_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getFullName(s_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getUserEmail(s_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.getPlanBadgeClass(s_r4.plan));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4.plan);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getOfferLabel(s_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.getAmountPaid(s_r4) !== "Free");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getAmountPaid(s_r4) === "Free");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.getStatusBadgeClass(s_r4.statut));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4.statut);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(26, 26, s_r4.dateDebut, "dd MMM yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("td-date--expired", s_r4.statut === "EXPIRED");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(29, 29, s_r4.dateFin, "dd MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("days-badge--low", ctx_r1.getRemainingDays(s_r4.dateFin) <= 7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.getRemainingDays(s_r4.dateFin), "d");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("renew-pill--on", s_r4.autoRenouvellement);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4.autoRenouvellement ? "ON" : "OFF");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", s_r4.paiementRef);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !s_r4.paiementRef);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("renew"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("suspend"), i0.ɵɵsanitizeHtml);
} }
function SubscriptionsComponent_div_51_tr_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 53);
    i0.ɵɵtext(2, "No subscriptions found.");
    i0.ɵɵelementEnd()();
} }
function SubscriptionsComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    i0.ɵɵelement(3, "span", 23);
    i0.ɵɵelementStart(4, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_51_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function SubscriptionsComponent_div_51_Template_input_input_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSearch()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 25)(6, "button", 26);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_51_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setFilter("ALL")); });
    i0.ɵɵtext(7, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 26);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_51_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setFilter("FREE")); });
    i0.ɵɵtext(9, "Free");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 26);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_51_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setFilter("PREMIUM")); });
    i0.ɵɵtext(11, "Premium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 26);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_51_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setFilter("INSTITUTIONAL")); });
    i0.ɵɵtext(13, "Institutional");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 27)(15, "table")(16, "thead")(17, "tr")(18, "th");
    i0.ɵɵtext(19, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Offer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Start");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "End");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th");
    i0.ɵɵtext(35, "Days left");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "th");
    i0.ɵɵtext(37, "Auto-renew");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "th");
    i0.ɵɵtext(39, "Payment ref");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "th");
    i0.ɵɵtext(41, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "tbody");
    i0.ɵɵtemplate(43, SubscriptionsComponent_div_51_tr_43_Template, 45, 32, "tr", 28)(44, SubscriptionsComponent_div_51_tr_44_Template, 3, 0, "tr", 29);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("search"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchQuery);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.filtre === "ALL");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.filtre === "FREE");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.filtre === "PREMIUM");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.filtre === "INSTITUTIONAL");
    i0.ɵɵadvance(31);
    i0.ɵɵproperty("ngForOf", ctx_r1.filteredSubscriptions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.filteredSubscriptions.length === 0);
} }
function SubscriptionsComponent_div_52_div_6_div_25_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const adv_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(adv_r8);
} }
function SubscriptionsComponent_div_52_div_6_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "p", 70);
    i0.ɵɵtext(2, "Features:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul");
    i0.ɵɵtemplate(4, SubscriptionsComponent_div_52_div_6_div_25_li_4_Template, 2, 1, "li", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const plan_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.getAvantagesList(plan_r7.avantages));
} }
function SubscriptionsComponent_div_52_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58)(1, "div", 59)(2, "span", 37);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 60)(5, "button", 61);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_52_div_6_Template_button_click_5_listener() { const plan_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openEditPlan(plan_r7)); });
    i0.ɵɵelement(6, "span", 6);
    i0.ɵɵtext(7, " Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 62);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_52_div_6_Template_button_click_8_listener() { const plan_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deletePlan(plan_r7)); });
    i0.ɵɵelement(9, "span", 6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "h3", 63);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 64);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 65)(15, "div", 66)(16, "span", 67);
    i0.ɵɵtext(17, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 66)(21, "span", 67);
    i0.ɵɵtext(22, "Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(25, SubscriptionsComponent_div_52_div_6_div_25_Template, 5, 1, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("plan-card--free", plan_r7.type === "FREE")("plan-card--premium", plan_r7.type === "PREMIUM")("plan-card--institutional", plan_r7.type === "INSTITUTIONAL");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.getPlanBadgeClass(plan_r7.type));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(plan_r7.type);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("edit"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("trash"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r7.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r7.description);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(plan_r7.prix === 0 ? "Free" : plan_r7.prix + " DT");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(plan_r7.duree === -1 ? "Unlimited" : plan_r7.duree + " days");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", plan_r7.avantages);
} }
function SubscriptionsComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 54)(2, "div", 55);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_52_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openAddPlan()); });
    i0.ɵɵelement(3, "div", 56);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Add new plan offer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, SubscriptionsComponent_div_52_div_6_Template, 26, 15, "div", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("plus"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.plans);
} }
function SubscriptionsComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelement(1, "span", 73);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Loading analytics...");
    i0.ɵɵelementEnd()();
} }
function SubscriptionsComponent_div_53_ng_container_2_div_14_div_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88)(1, "div", 89)(2, "span", 90);
    i0.ɵɵtext(3, "Free");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 91);
    i0.ɵɵelement(5, "div", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 93);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 89)(9, "span", 90);
    i0.ɵɵtext(10, "Premium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 91);
    i0.ɵɵelement(12, "div", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 93);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 89)(16, "span", 90);
    i0.ɵɵtext(17, "Institutional");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 91);
    i0.ɵɵelement(19, "div", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 93);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("width", ctx_r1.kpiFree / ctx_r1.kpiTotal * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.kpiFree);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("width", ctx_r1.kpiPremium / ctx_r1.kpiTotal * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.kpiPremium);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("width", ctx_r1.kpiInstitution / ctx_r1.kpiTotal * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.kpiInstitution);
} }
function SubscriptionsComponent_div_53_ng_container_2_div_14_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 96);
    i0.ɵɵtext(1, "No data yet.");
    i0.ɵɵelementEnd();
} }
function SubscriptionsComponent_div_53_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 76)(2, "div", 77)(3, "div", 78);
    i0.ɵɵelement(4, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 79)(6, "span", 80);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 81);
    i0.ɵɵtext(10, "Total Revenue");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 77)(12, "div", 82);
    i0.ɵɵelement(13, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 79)(15, "span", 80);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 81);
    i0.ɵɵtext(18, "Paid Subscriptions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 77)(20, "div", 83);
    i0.ɵɵelement(21, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 79)(23, "span", 80);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 81);
    i0.ɵɵtext(26, "Active Rate");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 77)(28, "div", 84);
    i0.ɵɵelement(29, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 79)(31, "span", 80);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span", 81);
    i0.ɵɵtext(34, "Expired");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 85)(36, "h3", 86);
    i0.ɵɵtext(37, "Plan Distribution");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(38, SubscriptionsComponent_div_53_ng_container_2_div_14_div_38_Template, 22, 9, "div", 87)(39, SubscriptionsComponent_div_53_ng_container_2_div_14_ng_template_39_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const noData_r10 = i0.ɵɵreference(40);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("dollar"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(8, 10, (tmp_5_0 = ctx_r1.revenueSummary == null ? null : ctx_r1.revenueSummary.totalRevenue) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0, "1.2-2"), " DT");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("card"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_7_0 = ctx_r1.revenueSummary == null ? null : ctx_r1.revenueSummary.totalPaidSubscriptions) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("trending"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.activeRate, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("chart"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.kpiExpired);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.kpiTotal > 0)("ngIfElse", noData_r10);
} }
function SubscriptionsComponent_div_53_ng_container_2_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 96);
    i0.ɵɵtext(1, "No paid subscriptions yet.");
    i0.ɵɵelementEnd();
} }
function SubscriptionsComponent_div_53_ng_container_2_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 100)(1, "div", 31)(2, "div", 49);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 34)(5, "div", 35);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 36);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 101);
    i0.ɵɵelement(10, "div", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 103);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    const row_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", ctx_r1.getAvatarColorFromId((tmp_5_0 = row_r11.idUser) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getRowInitials(row_r11), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", row_r11.prenom, " ", row_r11.nom, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", row_r11.paymentsCount, " payment(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", row_r11.total / ctx_r1.getMaxUserRevenue() * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(13, 9, row_r11.total, "1.2-2"), " DT");
} }
function SubscriptionsComponent_div_53_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 85)(2, "h3", 86);
    i0.ɵɵtext(3, "Revenue per User");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubscriptionsComponent_div_53_ng_container_2_div_15_div_4_Template, 2, 0, "div", 97);
    i0.ɵɵelementStart(5, "div", 98);
    i0.ɵɵtemplate(6, SubscriptionsComponent_div_53_ng_container_2_div_15_div_6_Template, 14, 12, "div", 99);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.revenueByUserTotal.length === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.revenueByUserTotal);
} }
function SubscriptionsComponent_div_53_ng_container_2_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 96);
    i0.ɵɵtext(1, "No data yet.");
    i0.ɵɵelementEnd();
} }
function SubscriptionsComponent_div_53_ng_container_2_div_16_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 107)(1, "div", 108);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 109);
    i0.ɵɵelement(5, "div", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 111);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(3, 4, row_r12.total, "1.0-0"), " DT");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", row_r12.total / ctx_r1.getMaxMonthRevenue() * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r12.month);
} }
function SubscriptionsComponent_div_53_ng_container_2_div_16_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵtemplate(1, SubscriptionsComponent_div_53_ng_container_2_div_16_div_5_div_1_Template, 8, 7, "div", 106);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.revenueByMonth);
} }
function SubscriptionsComponent_div_53_ng_container_2_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 85)(2, "h3", 86);
    i0.ɵɵtext(3, "Monthly Revenue");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubscriptionsComponent_div_53_ng_container_2_div_16_div_4_Template, 2, 0, "div", 97)(5, SubscriptionsComponent_div_53_ng_container_2_div_16_div_5_Template, 2, 1, "div", 104);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.revenueByMonth.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.revenueByMonth.length > 0);
} }
function SubscriptionsComponent_div_53_ng_container_2_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 96);
    i0.ɵɵtext(1, "No data yet.");
    i0.ɵɵelementEnd();
} }
function SubscriptionsComponent_div_53_ng_container_2_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 89)(1, "span", 114);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 91);
    i0.ɵɵelement(4, "div", 115);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 103);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r13.date);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", row_r13.total / ctx_r1.getMaxDayRevenue() * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(7, 4, row_r13.total, "1.2-2"), " DT");
} }
function SubscriptionsComponent_div_53_ng_container_2_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 85)(2, "h3", 86);
    i0.ɵɵtext(3, "Daily Revenue");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubscriptionsComponent_div_53_ng_container_2_div_17_div_4_Template, 2, 0, "div", 97);
    i0.ɵɵelementStart(5, "div", 112);
    i0.ɵɵtemplate(6, SubscriptionsComponent_div_53_ng_container_2_div_17_div_6_Template, 8, 7, "div", 113);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.revenueByDay.length === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.revenueByDay);
} }
function SubscriptionsComponent_div_53_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 74)(2, "button", 75);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_53_ng_container_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.revenueView = "summary"); });
    i0.ɵɵelement(3, "span", 6);
    i0.ɵɵtext(4, " Summary ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 75);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_53_ng_container_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.revenueView = "by-user"); });
    i0.ɵɵelement(6, "span", 6);
    i0.ɵɵtext(7, " By User ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 75);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_53_ng_container_2_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.revenueView = "by-month"); });
    i0.ɵɵelement(9, "span", 6);
    i0.ɵɵtext(10, " By Month ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 75);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_53_ng_container_2_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.revenueView = "by-day"); });
    i0.ɵɵelement(12, "span", 6);
    i0.ɵɵtext(13, " By Day ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, SubscriptionsComponent_div_53_ng_container_2_div_14_Template, 41, 13, "div", 29)(15, SubscriptionsComponent_div_53_ng_container_2_div_15_Template, 7, 2, "div", 29)(16, SubscriptionsComponent_div_53_ng_container_2_div_16_Template, 6, 2, "div", 29)(17, SubscriptionsComponent_div_53_ng_container_2_div_17_Template, 7, 2, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.revenueView === "summary");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("dollar"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.revenueView === "by-user");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("users"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.revenueView === "by-month");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("calendar"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.revenueView === "by-day");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("chart"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.revenueView === "summary");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.revenueView === "by-user");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.revenueView === "by-month");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.revenueView === "by-day");
} }
function SubscriptionsComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, SubscriptionsComponent_div_53_div_1_Template, 4, 0, "div", 71)(2, SubscriptionsComponent_div_53_ng_container_2_Template, 18, 16, "ng-container", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.analyticsLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.analyticsLoading);
} }
function SubscriptionsComponent_div_54_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 123)(1, "label");
    i0.ɵɵtext(2, "Plan type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 136);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_54_div_10_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.planForm.type, $event) || (ctx_r1.planForm.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 137);
    i0.ɵɵtext(5, "FREE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 138);
    i0.ɵɵtext(7, "PREMIUM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 139);
    i0.ɵɵtext(9, "INSTITUTIONAL");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.planForm.type);
} }
function SubscriptionsComponent_div_54_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 140);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.planFormError);
} }
function SubscriptionsComponent_div_54_span_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 141);
} }
function SubscriptionsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 116);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_54_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverlayClick($event)); });
    i0.ɵɵelementStart(1, "div", 117)(2, "button", 118);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_54_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePlanModal()); });
    i0.ɵɵtext(3, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 119)(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 120);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 121);
    i0.ɵɵtemplate(10, SubscriptionsComponent_div_54_div_10_Template, 10, 1, "div", 122);
    i0.ɵɵelementStart(11, "div", 123)(12, "label");
    i0.ɵɵtext(13, "Label (display name)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 124);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_54_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.planForm.label, $event) || (ctx_r1.planForm.label = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 123)(16, "label");
    i0.ɵɵtext(17, "Price (DT) \u2014 0 for free");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "input", 125);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_54_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.planForm.prix, $event) || (ctx_r1.planForm.prix = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 123)(20, "label");
    i0.ɵɵtext(21, "Duration (days) \u2014 -1 for unlimited");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 126);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_54_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.planForm.duree, $event) || (ctx_r1.planForm.duree = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 127)(24, "label");
    i0.ɵɵtext(25, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 128);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_54_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.planForm.description, $event) || (ctx_r1.planForm.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 127)(28, "label");
    i0.ɵɵtext(29, "Features (one per line)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "textarea", 129);
    i0.ɵɵtwoWayListener("ngModelChange", function SubscriptionsComponent_div_54_Template_textarea_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.planForm.avantages, $event) || (ctx_r1.planForm.avantages = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span", 130);
    i0.ɵɵtext(32, "Each line = one bullet point shown to users");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(33, SubscriptionsComponent_div_54_div_33_Template, 2, 1, "div", 131);
    i0.ɵɵelementStart(34, "div", 132)(35, "button", 133);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_54_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePlanModal()); });
    i0.ɵɵtext(36, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "button", 134);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_54_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savePlan()); });
    i0.ɵɵtemplate(38, SubscriptionsComponent_div_54_span_38_Template, 1, 0, "span", 135);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.editMode ? "Edit Plan Offer" : "Add New Plan Offer");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.editMode ? "Modify the plan details below." : "Configure and publish a new subscription plan.");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.editMode);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.planForm.label);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.planForm.prix);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.planForm.duree);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.planForm.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.planForm.avantages);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.planFormError);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.planSaving);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.planSaving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.editMode ? "Save changes" : "Create plan", " ");
} }
function SubscriptionsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 116);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_55_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverlayClick($event)); });
    i0.ɵɵelementStart(1, "div", 142);
    i0.ɵɵelement(2, "div", 143);
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Suspend this subscription?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " User ");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " \u2014 ");
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " plan.");
    i0.ɵɵelement(13, "br");
    i0.ɵɵtext(14, " This action will permanently delete the subscription record. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 144)(16, "button", 133);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_55_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelSuspend()); });
    i0.ɵɵtext(17, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 145);
    i0.ɵɵlistener("click", function SubscriptionsComponent_div_55_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.executeSuspend()); });
    i0.ɵɵtext(19, "Confirm suspend");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.icon("suspend"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", (tmp_2_0 = ctx_r1.suspendTarget == null ? null : ctx_r1.suspendTarget.user == null ? null : ctx_r1.suspendTarget.user.prenom) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "", " ", (tmp_2_0 = ctx_r1.suspendTarget == null ? null : ctx_r1.suspendTarget.user == null ? null : ctx_r1.suspendTarget.user.nom) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "#" + (ctx_r1.suspendTarget == null ? null : ctx_r1.suspendTarget.idUser), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.suspendTarget == null ? null : ctx_r1.suspendTarget.plan);
} }
export class SubscriptionsComponent {
    constructor(subscriptionService, sanitizer) {
        this.subscriptionService = subscriptionService;
        this.sanitizer = sanitizer;
        this.subscriptions = [];
        this.filteredSubscriptions = [];
        this.plans = [];
        this.activeTab = 'subscribers';
        this.filtre = 'ALL';
        this.searchQuery = '';
        this.revenueView = 'summary';
        // ── Analytics data from backend ───────────────────────────────────────────
        this.revenueSummary = null;
        this.revenueByUser = [];
        this.revenueByUserTotal = [];
        this.revenueByMonth = [];
        this.revenueByDay = [];
        this.analyticsLoading = false;
        this.analyticsCallsDone = 0;
        this.showPlanModal = false;
        this.showConfirmSuspend = false;
        this.editMode = false;
        this.planSaving = false;
        this.planFormError = '';
        this.suspendTarget = null;
        this.planForm = this.getEmptyPlan();
        this.svgMap = {
            users: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            box: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
            chart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
            search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
            edit: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
            trash: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
            renew: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
            suspend: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
            card: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
            plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
            trending: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
            dollar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
            calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
            user: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        };
        this.iconCache = {};
    }
    ngOnInit() {
        this.loadSubscriptions();
        this.loadPlans();
    }
    icon(name) {
        if (!this.iconCache[name]) {
            this.iconCache[name] = this.sanitizer.bypassSecurityTrustHtml(this.svgMap[name] ?? '');
        }
        return this.iconCache[name];
    }
    // ── Tab switching — load analytics lazily ─────────────────────────────────
    switchTab(tab) {
        this.activeTab = tab;
        if (tab === 'analytics' && !this.revenueSummary && !this.analyticsLoading) {
            this.loadAllAnalytics();
        }
    }
    loadAllAnalytics() {
        this.analyticsLoading = true;
        this.analyticsCallsDone = 0;
        this.subscriptionService.getRevenueSummary().subscribe({
            next: (d) => { this.revenueSummary = d; this.onAnalyticsDone(); },
            error: () => this.onAnalyticsDone()
        });
        this.subscriptionService.getRevenueByUser().subscribe({
            next: (d) => { this.revenueByUser = d ?? []; this.onAnalyticsDone(); },
            error: () => this.onAnalyticsDone()
        });
        this.subscriptionService.getRevenueByUserTotal().subscribe({
            next: (d) => { this.revenueByUserTotal = d ?? []; this.onAnalyticsDone(); },
            error: () => this.onAnalyticsDone()
        });
        this.subscriptionService.getRevenueByMonth().subscribe({
            next: (d) => { this.revenueByMonth = d ?? []; this.onAnalyticsDone(); },
            error: () => this.onAnalyticsDone()
        });
        this.subscriptionService.getRevenueByDay().subscribe({
            next: (d) => { this.revenueByDay = d ?? []; this.onAnalyticsDone(); },
            error: () => this.onAnalyticsDone()
        });
    }
    onAnalyticsDone() {
        this.analyticsCallsDone++;
        if (this.analyticsCallsDone >= 5)
            this.analyticsLoading = false;
    }
    // ── Chart scaling ─────────────────────────────────────────────────────────
    getMaxMonthRevenue() { return Math.max(...this.revenueByMonth.map((r) => r.total ?? 0), 1); }
    getMaxDayRevenue() { return Math.max(...this.revenueByDay.map((r) => r.total ?? 0), 1); }
    getMaxUserRevenue() { return Math.max(...this.revenueByUserTotal.map((r) => r.total ?? 0), 1); }
    // ── KPIs ──────────────────────────────────────────────────────────────────
    get kpiTotal() { return this.subscriptions.length; }
    get kpiFree() { return this.subscriptions.filter(s => s.plan === 'FREE').length; }
    get kpiPremium() { return this.subscriptions.filter(s => s.plan === 'PREMIUM').length; }
    get kpiInstitution() { return this.subscriptions.filter(s => s.plan === 'INSTITUTIONAL').length; }
    get kpiPaid() { return this.subscriptions.filter(s => !!s.paiementRef).length; }
    get kpiExpired() { return this.subscriptions.filter(s => s.statut === 'EXPIRED').length; }
    get activeRate() {
        if (!this.subscriptions.length)
            return 0;
        return Math.round((this.subscriptions.filter(s => s.statut === 'ACTIVE').length / this.subscriptions.length) * 100);
    }
    // ── Load ──────────────────────────────────────────────────────────────────
    loadSubscriptions() {
        this.subscriptionService.getAllSubscriptions().subscribe({
            next: (data) => { this.subscriptions = data ?? []; this.applyFilters(); },
            error: (err) => console.error(err)
        });
    }
    loadPlans() {
        this.subscriptionService.getAvailablePlans().subscribe({
            next: (data) => { this.plans = data ?? []; },
            error: (err) => console.error(err)
        });
    }
    // ── Filters ───────────────────────────────────────────────────────────────
    onSearch() { this.applyFilters(); }
    setFilter(value) { this.filtre = value; this.applyFilters(); }
    applyFilters() {
        const q = this.searchQuery.trim().toLowerCase();
        this.filteredSubscriptions = this.subscriptions.filter(s => {
            const matchFilter = this.filtre === 'ALL' || s.plan === this.filtre;
            const matchSearch = !q ||
                String(s.idSubscription ?? '').includes(q) ||
                (s.plan ?? '').toLowerCase().includes(q) ||
                (s.statut ?? '').toLowerCase().includes(q) ||
                (s.paiementRef ?? '').toLowerCase().includes(q) ||
                (s.user?.lastName ?? '').toLowerCase().includes(q) ||
                (s.user?.firstName ?? '').toLowerCase().includes(q);
            return matchFilter && matchSearch;
        });
    }
    // ── User helpers ──────────────────────────────────────────────────────────
    getUserInitials(s) {
        const p = s.user?.firstName?.trim() ?? '';
        const n = s.user?.lastName?.trim() ?? '';
        return `${p ? p.charAt(0).toUpperCase() : ''}${n ? n.charAt(0).toUpperCase() : ''}` || 'U';
    }
    getFullName(s) {
        const full = `${s.user?.firstName?.trim() ?? ''} ${s.user?.lastName?.trim() ?? ''}`.trim();
        return full || `User #${s.idUser ?? '-'}`;
    }
    getUserEmail(s) { return s.user?.email?.trim() || '-'; }
    hasAvatar(s) { return !!s.user?.avatar; }
    getAvatarUrl(s) {
        const a = s.user?.avatar?.trim();
        return a ? (a.startsWith('http') ? a : `/api/uploads/${a}`) : '';
    }
    getAvatarColor(s) {
        const colors = ['linear-gradient(135deg,#E8622A,#FF9A5C)', 'linear-gradient(135deg,#7850c8,#a480f0)', 'linear-gradient(135deg,#27AE7A,#5de0a8)', 'linear-gradient(135deg,#2ABFBF,#6ee7e7)'];
        return colors[(s.user?.idUser ?? s.idUser ?? 0) % colors.length];
    }
    getAvatarColorFromId(id) {
        const colors = ['linear-gradient(135deg,#E8622A,#FF9A5C)', 'linear-gradient(135deg,#7850c8,#a480f0)', 'linear-gradient(135deg,#27AE7A,#5de0a8)', 'linear-gradient(135deg,#2ABFBF,#6ee7e7)'];
        return colors[(id ?? 0) % colors.length];
    }
    getRowInitials(row) {
        return `${(row.prenom ?? '').charAt(0)}${(row.nom ?? '').charAt(0)}`.toUpperCase() || '?';
    }
    getOfferLabel(s) { return s.planOffer?.label ?? s.plan; }
    getAmountPaid(s) { const p = s.planOffer?.prix ?? 0; return p === 0 ? 'Free' : p.toFixed(2); }
    getPaymentRef(s) { return (s.paiementRef ?? '').slice(0, 20); }
    // ── Plans CRUD ────────────────────────────────────────────────────────────
    openAddPlan() { this.editMode = false; this.planFormError = ''; this.planForm = this.getEmptyPlan(); this.showPlanModal = true; }
    openEditPlan(plan) {
        this.editMode = true;
        this.planFormError = '';
        this.planForm = { ...plan };
        this.showPlanModal = true;
    }
    closePlanModal() { this.showPlanModal = false; this.planSaving = false; this.planFormError = ''; this.planForm = this.getEmptyPlan(); }
    savePlan() {
        this.planFormError = '';
        if (!this.planForm.label?.trim()) {
            this.planFormError = 'Label is required.';
            return;
        }
        if (this.planForm.prix == null || Number(this.planForm.prix) < 0) {
            this.planFormError = 'Price must be 0 or more.';
            return;
        }
        if (this.planForm.duree == null || Number(this.planForm.duree) === 0) {
            this.planFormError = 'Duration cannot be 0.';
            return;
        }
        const payload = {
            id: this.planForm.id, type: this.planForm.type,
            label: this.planForm.label.trim(), prix: Number(this.planForm.prix),
            duree: Number(this.planForm.duree), description: (this.planForm.description ?? '').trim(),
            avantages: (this.planForm.avantages ?? '').trim()
        };
        this.planSaving = true;
        const numId = payload.id != null ? Number(payload.id) : NaN;
        if (!isNaN(numId) && numId > 0) {
            this.subscriptionService.updatePlan(numId, payload).subscribe({
                next: () => { this.planSaving = false; this.closePlanModal(); this.loadPlans(); },
                error: (err) => { console.error(err); this.planSaving = false; this.planFormError = 'Failed to update plan.'; }
            });
        }
        else {
            this.subscriptionService.addPlan(payload).subscribe({
                next: () => { this.planSaving = false; this.closePlanModal(); this.loadPlans(); },
                error: (err) => { console.error(err); this.planSaving = false; this.planFormError = 'Failed to create plan.'; }
            });
        }
    }
    deletePlan(plan) {
        if (!confirm(`Delete plan "${plan.label}"?`))
            return;
        const id = Number(plan.id);
        if (isNaN(id) || id <= 0)
            return;
        this.subscriptionService.deletePlan(id).subscribe({ next: () => this.loadPlans(), error: console.error });
    }
    // ── Subscription actions ──────────────────────────────────────────────────
    renewSubscription(s) {
        if (!s.idSubscription)
            return;
        this.subscriptionService.renewSubscription(s.idSubscription).subscribe({ next: () => this.loadSubscriptions(), error: console.error });
    }
    confirmSuspend(s) { this.suspendTarget = s; this.showConfirmSuspend = true; }
    cancelSuspend() { this.suspendTarget = null; this.showConfirmSuspend = false; }
    executeSuspend() {
        if (!this.suspendTarget?.idSubscription)
            return;
        this.subscriptionService.suspendSubscription(this.suspendTarget.idSubscription).subscribe({
            next: () => { this.cancelSuspend(); this.loadSubscriptions(); }, error: console.error
        });
    }
    onOverlayClick(event) {
        if (event.target.classList.contains('modal-overlay')) {
            if (this.showPlanModal)
                this.closePlanModal();
            if (this.showConfirmSuspend)
                this.cancelSuspend();
        }
    }
    getPlanBadgeClass(plan) {
        return { FREE: 'kh-badge--neutral', PREMIUM: 'kh-badge--orange', INSTITUTIONAL: 'kh-badge--violet' }[plan] ?? 'kh-badge--neutral';
    }
    getStatusBadgeClass(status) {
        return { ACTIVE: 'kh-badge--green', EXPIRED: 'kh-badge--red', PENDING: 'kh-badge--orange', CANCELLED: 'kh-badge--neutral' }[status] ?? 'kh-badge--neutral';
    }
    getRemainingDays(dateFin) {
        const end = new Date(dateFin);
        const today = new Date();
        end.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return Math.max(Math.ceil((end.getTime() - today.getTime()) / 86400000), 0);
    }
    getAvantagesList(avantages) {
        return (avantages || '').split('\n').map(i => i.trim()).filter(Boolean);
    }
    getEmptyPlan() { return { type: 'FREE', label: '', prix: 0, duree: 30, description: '', avantages: '' }; }
    static { this.ɵfac = function SubscriptionsComponent_Factory(t) { return new (t || SubscriptionsComponent)(i0.ɵɵdirectiveInject(i1.SubscriptionService), i0.ɵɵdirectiveInject(i2.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubscriptionsComponent, selectors: [["app-subscriptions"]], decls: 56, vars: 23, consts: [["noData", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "kh-btn", "kh-btn--primary", 3, "click"], [3, "innerHTML"], [1, "kpi-row", "animate-2"], [1, "mini-kpi"], [1, "mini-kpi__val"], [1, "mini-kpi__label"], [1, "mini-kpi", "mini-kpi--orange"], [1, "mini-kpi", "mini-kpi--violet"], [1, "mini-kpi", "mini-kpi--green"], [1, "mini-kpi", "mini-kpi--red"], [1, "view-tabs", "animate-3"], [1, "view-tab", 3, "click"], [1, "tab-icon", 3, "innerHTML"], ["class", "animate-4", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "animate-4"], [1, "filters-bar"], [1, "search-box"], [1, "search-icon", 3, "innerHTML"], ["type", "text", "placeholder", "Search by name, plan, ref...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-chips"], [1, "tab", 3, "click"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "td-id"], [1, "user-cell"], ["class", "user-avatar-img", 3, "src", "alt", 4, "ngIf"], ["class", "user-avatar", 3, "background", 4, "ngIf"], [1, "user-meta"], [1, "user-name"], [1, "user-sub"], [1, "kh-badge", 3, "ngClass"], [1, "offer-chip"], ["class", "amount-chip", 4, "ngIf"], ["class", "td-muted", 4, "ngIf"], [1, "td-date"], [1, "days-badge"], [1, "renew-pill"], ["class", "ref-chip", 3, "title", 4, "ngIf"], [1, "actions"], ["title", "Renew", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "icon-btn", 3, "click"], ["title", "Suspend", 1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "icon-btn", 3, "click"], [1, "user-avatar-img", 3, "src", "alt"], [1, "user-avatar"], [1, "amount-chip"], [1, "td-muted"], [1, "ref-chip", 3, "title"], ["colspan", "12", 1, "empty-row"], [1, "plans-grid"], [1, "plan-card", "plan-card--add", 3, "click"], [1, "plan-add-icon", 3, "innerHTML"], ["class", "plan-card", 3, "plan-card--free", "plan-card--premium", "plan-card--institutional", 4, "ngFor", "ngForOf"], [1, "plan-card"], [1, "plan-card-top"], [1, "plan-card-actions"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "icon-btn", 3, "click"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "icon-btn", 3, "click"], [1, "plan-card-name"], [1, "plan-card-desc"], [1, "plan-card-meta"], [1, "plan-meta-item"], [1, "meta-label"], ["class", "plan-features", 4, "ngIf"], [1, "plan-features"], [1, "features-title"], ["class", "analytics-loading", 4, "ngIf"], [1, "analytics-loading"], [1, "kh-spinner", "kh-spinner--dark"], [1, "analytics-subnav"], [1, "analytics-tab", 3, "click"], [1, "analytics-grid"], [1, "analytics-card"], [1, "analytics-card__icon", "analytics-card__icon--teal"], [1, "analytics-card__body"], [1, "analytics-card__val"], [1, "analytics-card__label"], [1, "analytics-card__icon", "analytics-card__icon--green"], [1, "analytics-card__icon", "analytics-card__icon--orange"], [1, "analytics-card__icon", "analytics-card__icon--red"], [1, "analytics-breakdown"], [1, "breakdown-title"], ["class", "breakdown-bars", 4, "ngIf", "ngIfElse"], [1, "breakdown-bars"], [1, "breakdown-row"], [1, "breakdown-label"], [1, "breakdown-bar-wrap"], [1, "breakdown-bar", "breakdown-bar--neutral"], [1, "breakdown-count"], [1, "breakdown-bar", "breakdown-bar--orange"], [1, "breakdown-bar", "breakdown-bar--violet"], [1, "empty-row"], ["class", "empty-row", 4, "ngIf"], [1, "revenue-user-list"], ["class", "revenue-user-row", 4, "ngFor", "ngForOf"], [1, "revenue-user-row"], [1, "revenue-bar-wrap"], [1, "revenue-bar"], [1, "revenue-amount"], ["class", "chart-bars", 4, "ngIf"], [1, "chart-bars"], ["class", "chart-bar-col", 4, "ngFor", "ngForOf"], [1, "chart-bar-col"], [1, "chart-bar-label-top"], [1, "chart-bar-wrap"], [1, "chart-bar", "chart-bar--teal"], [1, "chart-bar-label"], [1, "revenue-day-list"], ["class", "breakdown-row", 4, "ngFor", "ngForOf"], [1, "breakdown-label", "day-label"], [1, "breakdown-bar", "breakdown-bar--teal"], [1, "modal-overlay", 3, "click"], [1, "modal-panel"], [1, "modal-close", 3, "click"], [1, "modal-header-block"], [1, "modal-subtitle"], [1, "form-grid"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["type", "text", "placeholder", "ex: Premium Plan", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.1", 3, "ngModelChange", "ngModel"], ["type", "number", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["type", "text", 3, "ngModelChange", "ngModel"], ["rows", "5", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["class", "form-error", 4, "ngIf"], [1, "modal-footer"], [1, "kh-btn", "kh-btn--ghost", 3, "click"], [1, "kh-btn", "kh-btn--primary", 3, "click", "disabled"], ["class", "kh-spinner", 4, "ngIf"], [3, "ngModelChange", "ngModel"], ["value", "FREE"], ["value", "PREMIUM"], ["value", "INSTITUTIONAL"], [1, "form-error"], [1, "kh-spinner"], [1, "modal-panel", "modal-panel--sm"], [1, "confirm-icon", 3, "innerHTML"], [1, "confirm-actions"], [1, "kh-btn", "kh-btn--danger", 3, "click"]], template: function SubscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
            i0.ɵɵtext(4, "Subscriptions Management");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function SubscriptionsComponent_Template_button_click_7_listener() { return ctx.openAddPlan(); });
            i0.ɵɵelement(8, "span", 6);
            i0.ɵɵtext(9, " Add Plan Offer ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 10);
            i0.ɵɵtext(15, "Total subscribers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 8)(17, "span", 9);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span", 10);
            i0.ɵɵtext(20, "Free");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 11)(22, "span", 9);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span", 10);
            i0.ɵɵtext(25, "Premium");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 12)(27, "span", 9);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span", 10);
            i0.ɵɵtext(30, "Institutional");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 13)(32, "span", 9);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span", 10);
            i0.ɵɵtext(35, "Paid");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 14)(37, "span", 9);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span", 10);
            i0.ɵɵtext(40, "Expired");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 15)(42, "button", 16);
            i0.ɵɵlistener("click", function SubscriptionsComponent_Template_button_click_42_listener() { return ctx.switchTab("subscribers"); });
            i0.ɵɵelement(43, "span", 17);
            i0.ɵɵtext(44, " Subscribers ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "button", 16);
            i0.ɵɵlistener("click", function SubscriptionsComponent_Template_button_click_45_listener() { return ctx.switchTab("plans"); });
            i0.ɵɵelement(46, "span", 17);
            i0.ɵɵtext(47, " Plan Offers ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "button", 16);
            i0.ɵɵlistener("click", function SubscriptionsComponent_Template_button_click_48_listener() { return ctx.switchTab("analytics"); });
            i0.ɵɵelement(49, "span", 17);
            i0.ɵɵtext(50, " Analytics ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(51, SubscriptionsComponent_div_51_Template, 45, 12, "div", 18)(52, SubscriptionsComponent_div_52_Template, 7, 2, "div", 18)(53, SubscriptionsComponent_div_53_Template, 3, 2, "div", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(54, SubscriptionsComponent_div_54_Template, 40, 12, "div", 19)(55, SubscriptionsComponent_div_55_Template, 20, 4, "div", 19);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2("", ctx.subscriptions.length, " subscriber(s) \u00B7 ", ctx.plans.length, " plan(s) configured");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx.icon("plus"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.kpiTotal);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.kpiFree);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.kpiPremium);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.kpiInstitution);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.kpiPaid);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.kpiExpired);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.activeTab === "subscribers");
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHTML", ctx.icon("users"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.activeTab === "plans");
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHTML", ctx.icon("box"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.activeTab === "analytics");
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHTML", ctx.icon("chart"), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.activeTab === "subscribers");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeTab === "plans");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeTab === "analytics");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPlanModal);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showConfirmSuspend);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.NumberValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.MinValidator, i4.NgModel, i3.DecimalPipe, i3.DatePipe], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}\n.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.page-sub[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:4px}\n\n\n\n.kpi-row[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}\n.mini-kpi[_ngcontent-%COMP%]{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 18px;display:flex;flex-direction:column;gap:4px;min-width:110px}\n.mini-kpi--red[_ngcontent-%COMP%]{border-color:rgba(232,74,74,0.3);background:rgba(232,74,74,0.05)}\n.mini-kpi--orange[_ngcontent-%COMP%]{border-color:rgba(232,98,42,0.3);background:rgba(232,98,42,0.05)}\n.mini-kpi--violet[_ngcontent-%COMP%]{border-color:rgba(120,80,200,0.3);background:rgba(120,80,200,0.05)}\n.mini-kpi--green[_ngcontent-%COMP%]{border-color:rgba(40,160,80,0.2);background:rgba(40,160,80,0.04)}\n.mini-kpi__val[_ngcontent-%COMP%]{font-family:\"Syne\",sans-serif;font-size:22px;font-weight:800}\n.mini-kpi__label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}\n\n\n\n.view-tabs[_ngcontent-%COMP%]{display:flex;gap:4px;border-bottom:2px solid var(--border);padding-bottom:2px}\n.view-tab[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 16px;font-size:13px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);border-bottom:2px solid transparent;margin-bottom:-4px;transition:all .15s;border-radius:var(--radius-sm) var(--radius-sm) 0 0}\n.view-tab[_ngcontent-%COMP%]:hover{color:var(--text-primary);background:rgba(0,0,0,.03)}\n.view-tab.active[_ngcontent-%COMP%]{color:var(--orange);border-bottom-color:var(--orange);background:rgba(232,98,42,.04)}\n.tab-icon[_ngcontent-%COMP%]{display:flex;align-items:center;opacity:.7}\n.view-tab.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%]{opacity:1}\n\n\n\n.icon-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:5px;line-height:1}\n.icon-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}\n\n\n\n.filters-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:wrap}\n.search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);padding:7px 12px}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;font-size:13px;font-family:inherit;min-width:220px}\n.search-icon[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--text-muted)}\n.filter-chips[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}\n.tab[_ngcontent-%COMP%]{padding:5px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all .15s}\n.tab.active[_ngcontent-%COMP%]{background:var(--orange);color:white;border-color:var(--orange)}\n\n\n\n.table-wrap[_ngcontent-%COMP%]{background:white;border-radius:var(--radius-lg);border:1px solid var(--border);overflow:auto}\ntable[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;min-width:900px}\nth[_ngcontent-%COMP%]{padding:11px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);background:var(--bg-app);text-align:left;white-space:nowrap}\ntd[_ngcontent-%COMP%]{padding:11px 14px;font-size:13px;border-top:1px solid var(--border);vertical-align:middle}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:rgba(0,0,0,.015)}\n.td-id[_ngcontent-%COMP%]{color:var(--text-muted);font-size:12px;font-weight:600}\n.td-date[_ngcontent-%COMP%]{color:var(--text-secondary);font-size:12px}\n.td-date--expired[_ngcontent-%COMP%]{color:var(--red,#e84a4a);font-weight:600}\n.td-muted[_ngcontent-%COMP%]{color:var(--text-muted)}\n\n\n\n.user-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}\n.user-avatar[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:8px;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}\n.user-avatar-img[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:8px;object-fit:cover;flex-shrink:0}\n.user-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px}\n.user-name[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--text-primary);white-space:nowrap}\n.user-sub[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted)}\n\n\n\n.offer-chip[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:6px;background:var(--bg-app);border:1px solid var(--border);font-size:11px;font-weight:600;color:var(--text-secondary)}\n.amount-chip[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:6px;background:rgba(39,174,122,.1);border:1px solid rgba(39,174,122,.2);font-size:12px;font-weight:700;color:#196}\n.days-badge[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:99px;background:var(--bg-app);border:1px solid var(--border);font-size:11px;font-weight:600;color:var(--text-secondary)}\n.days-badge--low[_ngcontent-%COMP%]{background:rgba(232,74,74,.1);border-color:rgba(232,74,74,.3);color:#b33}\n.renew-pill[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700;background:rgba(0,0,0,.06);color:var(--text-muted)}\n.renew-pill--on[_ngcontent-%COMP%]{background:rgba(40,160,80,.12);color:#196;border:1px solid rgba(40,160,80,.2)}\n.ref-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:6px;background:rgba(232,98,42,.08);color:var(--orange);font-size:11px;font-weight:600;font-family:monospace;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.empty-row[_ngcontent-%COMP%]{text-align:center;color:var(--text-muted);padding:32px;font-size:13px}\n.actions[_ngcontent-%COMP%]{display:flex;gap:6px}\n\n\n\n.plans-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}\n.plan-card[_ngcontent-%COMP%]{background:white;border-radius:var(--radius-lg);border:1px solid var(--border);padding:20px;display:flex;flex-direction:column;gap:12px;transition:all .2s;box-shadow:0 1px 4px rgba(0,0,0,.06)}\n.plan-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px rgba(0,0,0,.1);transform:translateY(-2px)}\n.plan-card--add[_ngcontent-%COMP%]{align-items:center;justify-content:center;border:2px dashed var(--border);cursor:pointer;color:var(--text-muted);font-size:13px;font-weight:600;gap:8px;background:var(--bg-app)}\n.plan-card--add[_ngcontent-%COMP%]:hover{border-color:var(--orange);color:var(--orange);background:rgba(232,98,42,.04)}\n.plan-add-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;border:2px dashed currentColor;display:flex;align-items:center;justify-content:center}\n.plan-card--premium[_ngcontent-%COMP%]{border-top:3px solid var(--orange)}\n.plan-card--institutional[_ngcontent-%COMP%]{border-top:3px solid #7850c8}\n.plan-card-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}\n.plan-card-actions[_ngcontent-%COMP%]{display:flex;gap:6px}\n.plan-card-name[_ngcontent-%COMP%]{font-family:\"Syne\",sans-serif;font-size:16px;font-weight:700;margin:0}\n.plan-card-desc[_ngcontent-%COMP%]{font-size:13px;color:var(--text-secondary);margin:0;line-height:1.5}\n.plan-card-meta[_ngcontent-%COMP%]{display:flex;gap:16px;padding:10px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}\n.plan-meta-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}\n.meta-label[_ngcontent-%COMP%]{font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}\n.plan-meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;font-weight:700}\n.plan-features[_ngcontent-%COMP%]{font-size:12px}\n.features-title[_ngcontent-%COMP%]{color:var(--text-muted);font-size:11px;text-transform:uppercase;letter-spacing:.04em;margin:0 0 6px}\n.plan-features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:16px;display:flex;flex-direction:column;gap:3px;color:var(--text-secondary)}\n\n\n\n.analytics-loading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:32px;color:var(--text-muted);font-size:14px}\n\n\n\n.analytics-subnav[_ngcontent-%COMP%]{display:flex;gap:6px;margin-bottom:20px;flex-wrap:wrap}\n.analytics-tab[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:7px 16px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);background:white;color:var(--text-secondary);cursor:pointer;transition:all .15s}\n.analytics-tab[_ngcontent-%COMP%]:hover{background:var(--bg-app)}\n.analytics-tab.active[_ngcontent-%COMP%]{background:var(--orange);color:white;border-color:var(--orange)}\n.analytics-tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}\n\n\n\n.analytics-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:20px}\n.analytics-card[_ngcontent-%COMP%]{background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;display:flex;align-items:center;gap:16px;box-shadow:0 1px 4px rgba(0,0,0,.06)}\n.analytics-card__icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}\n.analytics-card__icon--teal[_ngcontent-%COMP%]{background:rgba(42,191,191,.12);color:#1a9999}\n.analytics-card__icon--green[_ngcontent-%COMP%]{background:rgba(39,174,122,.12);color:#196}\n.analytics-card__icon--orange[_ngcontent-%COMP%]{background:rgba(232,98,42,.1);color:var(--orange)}\n.analytics-card__icon--red[_ngcontent-%COMP%]{background:rgba(232,74,74,.1);color:#b33}\n.analytics-card__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}\n.analytics-card__val[_ngcontent-%COMP%]{font-size:22px;font-weight:800;font-family:\"Syne\",sans-serif;line-height:1}\n.analytics-card__label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}\n\n\n\n.analytics-breakdown[_ngcontent-%COMP%]{background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;box-shadow:0 1px 4px rgba(0,0,0,.06)}\n.breakdown-title[_ngcontent-%COMP%]{font-size:15px;font-weight:700;margin:0 0 16px;color:var(--text-primary)}\n.breakdown-bars[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}\n.breakdown-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}\n.breakdown-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--text-secondary);width:90px;flex-shrink:0}\n.breakdown-bar-wrap[_ngcontent-%COMP%]{flex:1;background:var(--bg-app);border-radius:99px;height:8px;overflow:hidden}\n.breakdown-bar[_ngcontent-%COMP%]{height:100%;border-radius:99px;transition:width .6s ease;min-width:4px}\n.breakdown-bar--neutral[_ngcontent-%COMP%]{background:var(--text-muted)}\n.breakdown-bar--orange[_ngcontent-%COMP%]{background:var(--orange)}\n.breakdown-bar--violet[_ngcontent-%COMP%]{background:#7850c8}\n.breakdown-bar--teal[_ngcontent-%COMP%]{background:#2ABFBF}\n.breakdown-count[_ngcontent-%COMP%]{font-size:12px;font-weight:700;width:24px;text-align:right;color:var(--text-secondary)}\n\n\n\n.revenue-user-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}\n.revenue-user-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}\n.revenue-bar-wrap[_ngcontent-%COMP%]{flex:1;background:var(--bg-app);border-radius:99px;height:10px;overflow:hidden}\n.revenue-bar[_ngcontent-%COMP%]{height:100%;border-radius:99px;background:linear-gradient(90deg,#2ABFBF,#27AE7A);transition:width .6s ease;min-width:6px}\n.revenue-amount[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:var(--text-primary);white-space:nowrap;min-width:80px;text-align:right}\n\n\n\n.chart-bars[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:10px;height:160px;padding:0 4px}\n.chart-bar-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;flex:1;gap:6px;height:100%}\n.chart-bar-label-top[_ngcontent-%COMP%]{font-size:10px;font-weight:700;color:var(--text-secondary);white-space:nowrap}\n.chart-bar-wrap[_ngcontent-%COMP%]{flex:1;width:100%;display:flex;align-items:flex-end;background:var(--bg-app);border-radius:6px 6px 0 0;overflow:hidden}\n.chart-bar[_ngcontent-%COMP%]{width:100%;border-radius:6px 6px 0 0;transition:height .6s ease;min-height:4px}\n.chart-bar--teal[_ngcontent-%COMP%]{background:linear-gradient(180deg,#2ABFBF,#1a9999)}\n.chart-bar-label[_ngcontent-%COMP%]{font-size:10px;color:var(--text-muted);white-space:nowrap;text-align:center}\n\n\n\n.revenue-day-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}\n.day-label[_ngcontent-%COMP%]{width:100px !important}\n\n\n\n.kh-badge--neutral[_ngcontent-%COMP%]{background:rgba(0,0,0,.07);color:var(--text-secondary);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--orange[_ngcontent-%COMP%]{background:rgba(232,98,42,.1);color:var(--orange);border:1px solid rgba(232,98,42,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--violet[_ngcontent-%COMP%]{background:rgba(120,80,200,.12);color:#5a30a0;border:1px solid rgba(120,80,200,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--green[_ngcontent-%COMP%]{background:rgba(40,160,80,.1);color:#196;border:1px solid rgba(40,160,80,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--red[_ngcontent-%COMP%]{background:rgba(232,74,74,.1);color:#b33;border:1px solid rgba(232,74,74,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n\n\n\n.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}\n.modal-panel[_ngcontent-%COMP%]{background:white;border-radius:var(--radius-lg);width:100%;max-width:560px;max-height:90vh;overflow-y:auto;padding:28px;position:relative}\n.modal-panel--sm[_ngcontent-%COMP%]{max-width:380px;text-align:center}\n.modal-close[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;font-size:16px;color:var(--text-muted);width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:6px}\n.modal-close[_ngcontent-%COMP%]:hover{background:var(--bg-app)}\n.modal-header-block[_ngcontent-%COMP%]{margin-bottom:20px}\n.modal-header-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:\"Syne\",sans-serif;font-size:18px;font-weight:700;margin:0 0 4px}\n.modal-subtitle[_ngcontent-%COMP%]{font-size:13px;color:var(--text-secondary);margin:0}\n.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}\n.form-full[_ngcontent-%COMP%]{grid-column:1/-1}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.04em}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:8px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;font-family:inherit;background:white;color:var(--text-primary);transition:border-color .2s;width:100%;box-sizing:border-box}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:var(--orange)}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical;min-height:100px}\n.form-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);margin-top:2px}\n.form-error[_ngcontent-%COMP%]{background:rgba(232,74,74,.08);border:1px solid rgba(232,74,74,.3);border-radius:var(--radius-sm);padding:8px 12px;font-size:13px;color:#b33;margin-top:10px}\n.modal-footer[_ngcontent-%COMP%]{display:flex;gap:8px;justify-content:flex-end;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)}\n.confirm-icon[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:rgba(232,74,74,.1);color:#b33;display:flex;align-items:center;justify-content:center;margin:0 auto 12px}\n.modal-panel--sm[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:\"Syne\",sans-serif;font-size:17px;font-weight:700;margin:0 0 8px}\n.modal-panel--sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--text-secondary);margin:0 0 20px;line-height:1.6}\n.confirm-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}\n.kh-spinner[_ngcontent-%COMP%]{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;animation:_ngcontent-%COMP%_spin .7s linear infinite}\n.kh-spinner--dark[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.15);border-top-color:var(--text-primary)}\n@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubscriptionsComponent, [{
        type: Component,
        args: [{ selector: 'app-subscriptions', template: "<div class=\"page animate-1\">\n\n  <!-- \u2500\u2500 Header \u2500\u2500 -->\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"kh-page-title\">Subscriptions Management</h1>\n      <p class=\"page-sub\">{{ subscriptions.length }} subscriber(s) \u00B7 {{ plans.length }} plan(s) configured</p>\n    </div>\n    <button class=\"kh-btn kh-btn--primary\" (click)=\"openAddPlan()\">\n      <span [innerHTML]=\"icon('plus')\"></span> Add Plan Offer\n    </button>\n  </div>\n\n  <!-- \u2500\u2500 KPIs \u2500\u2500 -->\n  <div class=\"kpi-row animate-2\">\n    <div class=\"mini-kpi\"><span class=\"mini-kpi__val\">{{ kpiTotal }}</span><span class=\"mini-kpi__label\">Total subscribers</span></div>\n    <div class=\"mini-kpi\"><span class=\"mini-kpi__val\">{{ kpiFree }}</span><span class=\"mini-kpi__label\">Free</span></div>\n    <div class=\"mini-kpi mini-kpi--orange\"><span class=\"mini-kpi__val\">{{ kpiPremium }}</span><span class=\"mini-kpi__label\">Premium</span></div>\n    <div class=\"mini-kpi mini-kpi--violet\"><span class=\"mini-kpi__val\">{{ kpiInstitution }}</span><span class=\"mini-kpi__label\">Institutional</span></div>\n    <div class=\"mini-kpi mini-kpi--green\"><span class=\"mini-kpi__val\">{{ kpiPaid }}</span><span class=\"mini-kpi__label\">Paid</span></div>\n    <div class=\"mini-kpi mini-kpi--red\"><span class=\"mini-kpi__val\">{{ kpiExpired }}</span><span class=\"mini-kpi__label\">Expired</span></div>\n  </div>\n\n  <!-- \u2500\u2500 Tabs \u2500\u2500 -->\n  <div class=\"view-tabs animate-3\">\n    <button class=\"view-tab\" [class.active]=\"activeTab === 'subscribers'\" (click)=\"switchTab('subscribers')\">\n      <span class=\"tab-icon\" [innerHTML]=\"icon('users')\"></span> Subscribers\n    </button>\n    <button class=\"view-tab\" [class.active]=\"activeTab === 'plans'\" (click)=\"switchTab('plans')\">\n      <span class=\"tab-icon\" [innerHTML]=\"icon('box')\"></span> Plan Offers\n    </button>\n    <button class=\"view-tab\" [class.active]=\"activeTab === 'analytics'\" (click)=\"switchTab('analytics')\">\n      <span class=\"tab-icon\" [innerHTML]=\"icon('chart')\"></span> Analytics\n    </button>\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SUBSCRIBERS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div *ngIf=\"activeTab === 'subscribers'\" class=\"animate-4\">\n    <div class=\"filters-bar\">\n      <div class=\"search-box\">\n        <span class=\"search-icon\" [innerHTML]=\"icon('search')\"></span>\n        <input type=\"text\" placeholder=\"Search by name, plan, ref...\" [(ngModel)]=\"searchQuery\" (input)=\"onSearch()\">\n      </div>\n      <div class=\"filter-chips\">\n        <button class=\"tab\" [class.active]=\"filtre === 'ALL'\" (click)=\"setFilter('ALL')\">All</button>\n        <button class=\"tab\" [class.active]=\"filtre === 'FREE'\" (click)=\"setFilter('FREE')\">Free</button>\n        <button class=\"tab\" [class.active]=\"filtre === 'PREMIUM'\" (click)=\"setFilter('PREMIUM')\">Premium</button>\n        <button class=\"tab\" [class.active]=\"filtre === 'INSTITUTIONAL'\" (click)=\"setFilter('INSTITUTIONAL')\">Institutional</button>\n      </div>\n    </div>\n\n    <div class=\"table-wrap\">\n      <table>\n        <thead>\n          <tr>\n            <th>#</th><th>User</th><th>Plan</th><th>Offer</th><th>Amount</th>\n            <th>Status</th><th>Start</th><th>End</th><th>Days left</th>\n            <th>Auto-renew</th><th>Payment ref</th><th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let s of filteredSubscriptions\">\n            <td class=\"td-id\">{{ s.idSubscription }}</td>\n            <td>\n              <div class=\"user-cell\">\n                <img *ngIf=\"hasAvatar(s)\" [src]=\"getAvatarUrl(s)\" class=\"user-avatar-img\" [alt]=\"getFullName(s)\">\n                <div *ngIf=\"!hasAvatar(s)\" class=\"user-avatar\" [style.background]=\"getAvatarColor(s)\">{{ getUserInitials(s) }}</div>\n                <div class=\"user-meta\">\n                  <div class=\"user-name\">{{ getFullName(s) }}</div>\n                  <div class=\"user-sub\">{{ getUserEmail(s) }}</div>\n                </div>\n              </div>\n            </td>\n            <td><span class=\"kh-badge\" [ngClass]=\"getPlanBadgeClass(s.plan)\">{{ s.plan }}</span></td>\n            <td><span class=\"offer-chip\">{{ getOfferLabel(s) }}</span></td>\n            <td>\n              <span class=\"amount-chip\" *ngIf=\"getAmountPaid(s) !== 'Free'\">{{ getAmountPaid(s) }} DT</span>\n              <span class=\"td-muted\" *ngIf=\"getAmountPaid(s) === 'Free'\">Free</span>\n            </td>\n            <td><span class=\"kh-badge\" [ngClass]=\"getStatusBadgeClass(s.statut)\">{{ s.statut }}</span></td>\n            <td class=\"td-date\">{{ s.dateDebut | date:'dd MMM yyyy' }}</td>\n            <td class=\"td-date\" [class.td-date--expired]=\"s.statut === 'EXPIRED'\">{{ s.dateFin | date:'dd MMM yyyy' }}</td>\n            <td><span class=\"days-badge\" [class.days-badge--low]=\"getRemainingDays(s.dateFin) <= 7\">{{ getRemainingDays(s.dateFin) }}d</span></td>\n            <td><span class=\"renew-pill\" [class.renew-pill--on]=\"s.autoRenouvellement\">{{ s.autoRenouvellement ? 'ON' : 'OFF' }}</span></td>\n            <td>\n              <span *ngIf=\"s.paiementRef\" class=\"ref-chip\" [title]=\"s.paiementRef\">\n                <span [innerHTML]=\"icon('card')\"></span>{{ getPaymentRef(s) }}{{ (s.paiementRef?.length ?? 0) > 20 ? '\u2026' : '' }}\n              </span>\n              <span *ngIf=\"!s.paiementRef\" class=\"td-muted\">\u2014</span>\n            </td>\n            <td>\n              <div class=\"actions\">\n                <button class=\"kh-btn kh-btn--ghost kh-btn--sm icon-btn\" (click)=\"renewSubscription(s)\" title=\"Renew\"><span [innerHTML]=\"icon('renew')\"></span></button>\n                <button class=\"kh-btn kh-btn--danger kh-btn--sm icon-btn\" (click)=\"confirmSuspend(s)\" title=\"Suspend\"><span [innerHTML]=\"icon('suspend')\"></span></button>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"filteredSubscriptions.length === 0\">\n            <td colspan=\"12\" class=\"empty-row\">No subscriptions found.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 PLAN OFFERS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div *ngIf=\"activeTab === 'plans'\" class=\"animate-4\">\n    <div class=\"plans-grid\">\n      <div class=\"plan-card plan-card--add\" (click)=\"openAddPlan()\">\n        <div class=\"plan-add-icon\" [innerHTML]=\"icon('plus')\"></div>\n        <span>Add new plan offer</span>\n      </div>\n      <div class=\"plan-card\" *ngFor=\"let plan of plans\"\n        [class.plan-card--free]=\"plan.type === 'FREE'\"\n        [class.plan-card--premium]=\"plan.type === 'PREMIUM'\"\n        [class.plan-card--institutional]=\"plan.type === 'INSTITUTIONAL'\">\n        <div class=\"plan-card-top\">\n          <span class=\"kh-badge\" [ngClass]=\"getPlanBadgeClass(plan.type)\">{{ plan.type }}</span>\n          <div class=\"plan-card-actions\">\n            <button class=\"kh-btn kh-btn--ghost kh-btn--sm icon-btn\" (click)=\"openEditPlan(plan)\"><span [innerHTML]=\"icon('edit')\"></span> Edit</button>\n            <button class=\"kh-btn kh-btn--danger kh-btn--sm icon-btn\" (click)=\"deletePlan(plan)\"><span [innerHTML]=\"icon('trash')\"></span></button>\n          </div>\n        </div>\n        <h3 class=\"plan-card-name\">{{ plan.label }}</h3>\n        <p class=\"plan-card-desc\">{{ plan.description }}</p>\n        <div class=\"plan-card-meta\">\n          <div class=\"plan-meta-item\"><span class=\"meta-label\">Price</span><strong>{{ plan.prix === 0 ? 'Free' : (plan.prix + ' DT') }}</strong></div>\n          <div class=\"plan-meta-item\"><span class=\"meta-label\">Duration</span><strong>{{ plan.duree === -1 ? 'Unlimited' : (plan.duree + ' days') }}</strong></div>\n        </div>\n        <div class=\"plan-features\" *ngIf=\"plan.avantages\">\n          <p class=\"features-title\">Features:</p>\n          <ul><li *ngFor=\"let adv of getAvantagesList(plan.avantages)\">{{ adv }}</li></ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ANALYTICS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div *ngIf=\"activeTab === 'analytics'\" class=\"animate-4\">\n\n    <!-- Loading -->\n    <div *ngIf=\"analyticsLoading\" class=\"analytics-loading\">\n      <span class=\"kh-spinner kh-spinner--dark\"></span>\n      <span>Loading analytics...</span>\n    </div>\n\n    <ng-container *ngIf=\"!analyticsLoading\">\n\n      <!-- \u2500\u2500 Sub-nav \u2500\u2500 -->\n      <div class=\"analytics-subnav\">\n        <button class=\"analytics-tab\" [class.active]=\"revenueView === 'summary'\" (click)=\"revenueView = 'summary'\">\n          <span [innerHTML]=\"icon('dollar')\"></span> Summary\n        </button>\n        <button class=\"analytics-tab\" [class.active]=\"revenueView === 'by-user'\" (click)=\"revenueView = 'by-user'\">\n          <span [innerHTML]=\"icon('users')\"></span> By User\n        </button>\n        <button class=\"analytics-tab\" [class.active]=\"revenueView === 'by-month'\" (click)=\"revenueView = 'by-month'\">\n          <span [innerHTML]=\"icon('calendar')\"></span> By Month\n        </button>\n        <button class=\"analytics-tab\" [class.active]=\"revenueView === 'by-day'\" (click)=\"revenueView = 'by-day'\">\n          <span [innerHTML]=\"icon('chart')\"></span> By Day\n        </button>\n      </div>\n\n      <!-- \u2550\u2550 SUMMARY \u2550\u2550 -->\n      <div *ngIf=\"revenueView === 'summary'\">\n        <div class=\"analytics-grid\">\n          <div class=\"analytics-card\">\n            <div class=\"analytics-card__icon analytics-card__icon--teal\"><span [innerHTML]=\"icon('dollar')\"></span></div>\n            <div class=\"analytics-card__body\">\n              <span class=\"analytics-card__val\">{{ (revenueSummary?.totalRevenue ?? 0) | number:'1.2-2' }} DT</span>\n              <span class=\"analytics-card__label\">Total Revenue</span>\n            </div>\n          </div>\n          <div class=\"analytics-card\">\n            <div class=\"analytics-card__icon analytics-card__icon--green\"><span [innerHTML]=\"icon('card')\"></span></div>\n            <div class=\"analytics-card__body\">\n              <span class=\"analytics-card__val\">{{ revenueSummary?.totalPaidSubscriptions ?? 0 }}</span>\n              <span class=\"analytics-card__label\">Paid Subscriptions</span>\n            </div>\n          </div>\n          <div class=\"analytics-card\">\n            <div class=\"analytics-card__icon analytics-card__icon--orange\"><span [innerHTML]=\"icon('trending')\"></span></div>\n            <div class=\"analytics-card__body\">\n              <span class=\"analytics-card__val\">{{ activeRate }}%</span>\n              <span class=\"analytics-card__label\">Active Rate</span>\n            </div>\n          </div>\n          <div class=\"analytics-card\">\n            <div class=\"analytics-card__icon analytics-card__icon--red\"><span [innerHTML]=\"icon('chart')\"></span></div>\n            <div class=\"analytics-card__body\">\n              <span class=\"analytics-card__val\">{{ kpiExpired }}</span>\n              <span class=\"analytics-card__label\">Expired</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- Plan distribution -->\n        <div class=\"analytics-breakdown\">\n          <h3 class=\"breakdown-title\">Plan Distribution</h3>\n          <div class=\"breakdown-bars\" *ngIf=\"kpiTotal > 0; else noData\">\n            <div class=\"breakdown-row\">\n              <span class=\"breakdown-label\">Free</span>\n              <div class=\"breakdown-bar-wrap\"><div class=\"breakdown-bar breakdown-bar--neutral\" [style.width.%]=\"(kpiFree / kpiTotal) * 100\"></div></div>\n              <span class=\"breakdown-count\">{{ kpiFree }}</span>\n            </div>\n            <div class=\"breakdown-row\">\n              <span class=\"breakdown-label\">Premium</span>\n              <div class=\"breakdown-bar-wrap\"><div class=\"breakdown-bar breakdown-bar--orange\" [style.width.%]=\"(kpiPremium / kpiTotal) * 100\"></div></div>\n              <span class=\"breakdown-count\">{{ kpiPremium }}</span>\n            </div>\n            <div class=\"breakdown-row\">\n              <span class=\"breakdown-label\">Institutional</span>\n              <div class=\"breakdown-bar-wrap\"><div class=\"breakdown-bar breakdown-bar--violet\" [style.width.%]=\"(kpiInstitution / kpiTotal) * 100\"></div></div>\n              <span class=\"breakdown-count\">{{ kpiInstitution }}</span>\n            </div>\n          </div>\n          <ng-template #noData><p class=\"empty-row\">No data yet.</p></ng-template>\n        </div>\n      </div>\n\n      <!-- \u2550\u2550 BY USER (total per user) \u2550\u2550 -->\n      <div *ngIf=\"revenueView === 'by-user'\">\n        <div class=\"analytics-breakdown\">\n          <h3 class=\"breakdown-title\">Revenue per User</h3>\n          <div *ngIf=\"revenueByUserTotal.length === 0\" class=\"empty-row\">No paid subscriptions yet.</div>\n          <div class=\"revenue-user-list\">\n            <div class=\"revenue-user-row\" *ngFor=\"let row of revenueByUserTotal\">\n              <div class=\"user-cell\">\n                <div class=\"user-avatar\" [style.background]=\"getAvatarColorFromId(row.idUser ?? 0)\">\n                  {{ getRowInitials(row) }}\n                </div>\n                <div class=\"user-meta\">\n                  <div class=\"user-name\">{{ row.prenom }} {{ row.nom }}</div>\n                  <div class=\"user-sub\">{{ row.paymentsCount }} payment(s)</div>\n                </div>\n              </div>\n              <div class=\"revenue-bar-wrap\">\n                <div class=\"revenue-bar\" [style.width.%]=\"(row.total / getMaxUserRevenue()) * 100\"></div>\n              </div>\n              <span class=\"revenue-amount\">{{ row.total | number:'1.2-2' }} DT</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- \u2550\u2550 BY MONTH \u2550\u2550 -->\n      <div *ngIf=\"revenueView === 'by-month'\">\n        <div class=\"analytics-breakdown\">\n          <h3 class=\"breakdown-title\">Monthly Revenue</h3>\n          <div *ngIf=\"revenueByMonth.length === 0\" class=\"empty-row\">No data yet.</div>\n          <div class=\"chart-bars\" *ngIf=\"revenueByMonth.length > 0\">\n            <div class=\"chart-bar-col\" *ngFor=\"let row of revenueByMonth\">\n              <div class=\"chart-bar-label-top\">{{ row.total | number:'1.0-0' }} DT</div>\n              <div class=\"chart-bar-wrap\">\n                <div class=\"chart-bar chart-bar--teal\"\n                  [style.height.%]=\"(row.total / getMaxMonthRevenue()) * 100\">\n                </div>\n              </div>\n              <div class=\"chart-bar-label\">{{ row.month }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- \u2550\u2550 BY DAY \u2550\u2550 -->\n      <div *ngIf=\"revenueView === 'by-day'\">\n        <div class=\"analytics-breakdown\">\n          <h3 class=\"breakdown-title\">Daily Revenue</h3>\n          <div *ngIf=\"revenueByDay.length === 0\" class=\"empty-row\">No data yet.</div>\n          <div class=\"revenue-day-list\">\n            <div class=\"breakdown-row\" *ngFor=\"let row of revenueByDay\">\n              <span class=\"breakdown-label day-label\">{{ row.date }}</span>\n              <div class=\"breakdown-bar-wrap\">\n                <div class=\"breakdown-bar breakdown-bar--teal\" [style.width.%]=\"(row.total / getMaxDayRevenue()) * 100\"></div>\n              </div>\n              <span class=\"revenue-amount\">{{ row.total | number:'1.2-2' }} DT</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </ng-container>\n  </div>\n</div>\n\n<!-- \u2550\u2550 Modal \u2014 Add/Edit Plan \u2550\u2550 -->\n<div class=\"modal-overlay\" *ngIf=\"showPlanModal\" (click)=\"onOverlayClick($event)\">\n  <div class=\"modal-panel\">\n    <button class=\"modal-close\" (click)=\"closePlanModal()\">\u2715</button>\n    <div class=\"modal-header-block\">\n      <h2>{{ editMode ? 'Edit Plan Offer' : 'Add New Plan Offer' }}</h2>\n      <p class=\"modal-subtitle\">{{ editMode ? 'Modify the plan details below.' : 'Configure and publish a new subscription plan.' }}</p>\n    </div>\n    <div class=\"form-grid\">\n      <div class=\"form-group\" *ngIf=\"!editMode\">\n        <label>Plan type</label>\n        <select [(ngModel)]=\"planForm.type\">\n          <option value=\"FREE\">FREE</option>\n          <option value=\"PREMIUM\">PREMIUM</option>\n          <option value=\"INSTITUTIONAL\">INSTITUTIONAL</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Label (display name)</label>\n        <input type=\"text\" [(ngModel)]=\"planForm.label\" placeholder=\"ex: Premium Plan\">\n      </div>\n      <div class=\"form-group\">\n        <label>Price (DT) \u2014 0 for free</label>\n        <input type=\"number\" [(ngModel)]=\"planForm.prix\" min=\"0\" step=\"0.1\">\n      </div>\n      <div class=\"form-group\">\n        <label>Duration (days) \u2014 -1 for unlimited</label>\n        <input type=\"number\" [(ngModel)]=\"planForm.duree\">\n      </div>\n      <div class=\"form-group form-full\">\n        <label>Description</label>\n        <input type=\"text\" [(ngModel)]=\"planForm.description\">\n      </div>\n      <div class=\"form-group form-full\">\n        <label>Features (one per line)</label>\n        <textarea [(ngModel)]=\"planForm.avantages\" rows=\"5\"></textarea>\n        <span class=\"form-hint\">Each line = one bullet point shown to users</span>\n      </div>\n    </div>\n    <div class=\"form-error\" *ngIf=\"planFormError\">{{ planFormError }}</div>\n    <div class=\"modal-footer\">\n      <button class=\"kh-btn kh-btn--ghost\" (click)=\"closePlanModal()\">Cancel</button>\n      <button class=\"kh-btn kh-btn--primary\" (click)=\"savePlan()\" [disabled]=\"planSaving\">\n        <span class=\"kh-spinner\" *ngIf=\"planSaving\"></span>\n        {{ editMode ? 'Save changes' : 'Create plan' }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550 Modal \u2014 Confirm Suspend \u2550\u2550 -->\n<div class=\"modal-overlay\" *ngIf=\"showConfirmSuspend\" (click)=\"onOverlayClick($event)\">\n  <div class=\"modal-panel modal-panel--sm\">\n    <div class=\"confirm-icon\" [innerHTML]=\"icon('suspend')\"></div>\n    <h3>Suspend this subscription?</h3>\n    <p>\n      User <strong>{{ suspendTarget?.user?.prenom ?? '' }} {{ suspendTarget?.user?.nom ?? ('#' + suspendTarget?.idUser) }}</strong> \u2014\n      <strong>{{ suspendTarget?.plan }}</strong> plan.<br>\n      This action will permanently delete the subscription record.\n    </p>\n    <div class=\"confirm-actions\">\n      <button class=\"kh-btn kh-btn--ghost\" (click)=\"cancelSuspend()\">Cancel</button>\n      <button class=\"kh-btn kh-btn--danger\" (click)=\"executeSuspend()\">Confirm suspend</button>\n    </div>\n  </div>\n</div>", styles: [".page{display:flex;flex-direction:column;gap:24px}\n.page-header{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.page-sub{color:var(--text-secondary);margin-top:4px}\n\n/* KPI */\n.kpi-row{display:flex;gap:12px;flex-wrap:wrap}\n.mini-kpi{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 18px;display:flex;flex-direction:column;gap:4px;min-width:110px}\n.mini-kpi--red{border-color:rgba(232,74,74,0.3);background:rgba(232,74,74,0.05)}\n.mini-kpi--orange{border-color:rgba(232,98,42,0.3);background:rgba(232,98,42,0.05)}\n.mini-kpi--violet{border-color:rgba(120,80,200,0.3);background:rgba(120,80,200,0.05)}\n.mini-kpi--green{border-color:rgba(40,160,80,0.2);background:rgba(40,160,80,0.04)}\n.mini-kpi__val{font-family:\"Syne\",sans-serif;font-size:22px;font-weight:800}\n.mini-kpi__label{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}\n\n/* Tabs */\n.view-tabs{display:flex;gap:4px;border-bottom:2px solid var(--border);padding-bottom:2px}\n.view-tab{display:flex;align-items:center;gap:6px;padding:8px 16px;font-size:13px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);border-bottom:2px solid transparent;margin-bottom:-4px;transition:all .15s;border-radius:var(--radius-sm) var(--radius-sm) 0 0}\n.view-tab:hover{color:var(--text-primary);background:rgba(0,0,0,.03)}\n.view-tab.active{color:var(--orange);border-bottom-color:var(--orange);background:rgba(232,98,42,.04)}\n.tab-icon{display:flex;align-items:center;opacity:.7}\n.view-tab.active .tab-icon{opacity:1}\n\n/* Icon buttons */\n.icon-btn{display:inline-flex;align-items:center;gap:5px;line-height:1}\n.icon-btn span{display:flex;align-items:center}\n\n/* Filters */\n.filters-bar{display:flex;align-items:center;gap:12px;flex-wrap:wrap}\n.search-box{display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);padding:7px 12px}\n.search-box input{border:none;outline:none;font-size:13px;font-family:inherit;min-width:220px}\n.search-icon{display:flex;align-items:center;color:var(--text-muted)}\n.filter-chips{display:flex;gap:6px;flex-wrap:wrap}\n.tab{padding:5px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all .15s}\n.tab.active{background:var(--orange);color:white;border-color:var(--orange)}\n\n/* Table */\n.table-wrap{background:white;border-radius:var(--radius-lg);border:1px solid var(--border);overflow:auto}\ntable{width:100%;border-collapse:collapse;min-width:900px}\nth{padding:11px 14px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);background:var(--bg-app);text-align:left;white-space:nowrap}\ntd{padding:11px 14px;font-size:13px;border-top:1px solid var(--border);vertical-align:middle}\ntr:hover td{background:rgba(0,0,0,.015)}\n.td-id{color:var(--text-muted);font-size:12px;font-weight:600}\n.td-date{color:var(--text-secondary);font-size:12px}\n.td-date--expired{color:var(--red,#e84a4a);font-weight:600}\n.td-muted{color:var(--text-muted)}\n\n/* User cell */\n.user-cell{display:flex;align-items:center;gap:8px}\n.user-avatar{width:32px;height:32px;border-radius:8px;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}\n.user-avatar-img{width:32px;height:32px;border-radius:8px;object-fit:cover;flex-shrink:0}\n.user-meta{display:flex;flex-direction:column;gap:1px}\n.user-name{font-size:12px;font-weight:600;color:var(--text-primary);white-space:nowrap}\n.user-sub{font-size:11px;color:var(--text-muted)}\n\n/* Chips */\n.offer-chip{display:inline-block;padding:2px 8px;border-radius:6px;background:var(--bg-app);border:1px solid var(--border);font-size:11px;font-weight:600;color:var(--text-secondary)}\n.amount-chip{display:inline-block;padding:2px 8px;border-radius:6px;background:rgba(39,174,122,.1);border:1px solid rgba(39,174,122,.2);font-size:12px;font-weight:700;color:#196}\n.days-badge{display:inline-block;padding:2px 8px;border-radius:99px;background:var(--bg-app);border:1px solid var(--border);font-size:11px;font-weight:600;color:var(--text-secondary)}\n.days-badge--low{background:rgba(232,74,74,.1);border-color:rgba(232,74,74,.3);color:#b33}\n.renew-pill{display:inline-block;padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700;background:rgba(0,0,0,.06);color:var(--text-muted)}\n.renew-pill--on{background:rgba(40,160,80,.12);color:#196;border:1px solid rgba(40,160,80,.2)}\n.ref-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:6px;background:rgba(232,98,42,.08);color:var(--orange);font-size:11px;font-weight:600;font-family:monospace;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.empty-row{text-align:center;color:var(--text-muted);padding:32px;font-size:13px}\n.actions{display:flex;gap:6px}\n\n/* Plans grid */\n.plans-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}\n.plan-card{background:white;border-radius:var(--radius-lg);border:1px solid var(--border);padding:20px;display:flex;flex-direction:column;gap:12px;transition:all .2s;box-shadow:0 1px 4px rgba(0,0,0,.06)}\n.plan-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.1);transform:translateY(-2px)}\n.plan-card--add{align-items:center;justify-content:center;border:2px dashed var(--border);cursor:pointer;color:var(--text-muted);font-size:13px;font-weight:600;gap:8px;background:var(--bg-app)}\n.plan-card--add:hover{border-color:var(--orange);color:var(--orange);background:rgba(232,98,42,.04)}\n.plan-add-icon{width:40px;height:40px;border-radius:50%;border:2px dashed currentColor;display:flex;align-items:center;justify-content:center}\n.plan-card--premium{border-top:3px solid var(--orange)}\n.plan-card--institutional{border-top:3px solid #7850c8}\n.plan-card-top{display:flex;align-items:center;justify-content:space-between}\n.plan-card-actions{display:flex;gap:6px}\n.plan-card-name{font-family:\"Syne\",sans-serif;font-size:16px;font-weight:700;margin:0}\n.plan-card-desc{font-size:13px;color:var(--text-secondary);margin:0;line-height:1.5}\n.plan-card-meta{display:flex;gap:16px;padding:10px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}\n.plan-meta-item{display:flex;flex-direction:column;gap:2px}\n.meta-label{font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}\n.plan-meta-item strong{font-size:14px;font-weight:700}\n.plan-features{font-size:12px}\n.features-title{color:var(--text-muted);font-size:11px;text-transform:uppercase;letter-spacing:.04em;margin:0 0 6px}\n.plan-features ul{margin:0;padding-left:16px;display:flex;flex-direction:column;gap:3px;color:var(--text-secondary)}\n\n/* \u2500\u2500 Analytics loading \u2500\u2500 */\n.analytics-loading{display:flex;align-items:center;gap:12px;padding:32px;color:var(--text-muted);font-size:14px}\n\n/* \u2500\u2500 Analytics sub-nav \u2500\u2500 */\n.analytics-subnav{display:flex;gap:6px;margin-bottom:20px;flex-wrap:wrap}\n.analytics-tab{display:inline-flex;align-items:center;gap:7px;padding:7px 16px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);background:white;color:var(--text-secondary);cursor:pointer;transition:all .15s}\n.analytics-tab:hover{background:var(--bg-app)}\n.analytics-tab.active{background:var(--orange);color:white;border-color:var(--orange)}\n.analytics-tab span{display:flex;align-items:center}\n\n/* \u2500\u2500 Analytics KPI cards \u2500\u2500 */\n.analytics-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:20px}\n.analytics-card{background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;display:flex;align-items:center;gap:16px;box-shadow:0 1px 4px rgba(0,0,0,.06)}\n.analytics-card__icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}\n.analytics-card__icon--teal{background:rgba(42,191,191,.12);color:#1a9999}\n.analytics-card__icon--green{background:rgba(39,174,122,.12);color:#196}\n.analytics-card__icon--orange{background:rgba(232,98,42,.1);color:var(--orange)}\n.analytics-card__icon--red{background:rgba(232,74,74,.1);color:#b33}\n.analytics-card__body{display:flex;flex-direction:column;gap:3px}\n.analytics-card__val{font-size:22px;font-weight:800;font-family:\"Syne\",sans-serif;line-height:1}\n.analytics-card__label{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}\n\n/* \u2500\u2500 Analytics breakdown card \u2500\u2500 */\n.analytics-breakdown{background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;box-shadow:0 1px 4px rgba(0,0,0,.06)}\n.breakdown-title{font-size:15px;font-weight:700;margin:0 0 16px;color:var(--text-primary)}\n.breakdown-bars{display:flex;flex-direction:column;gap:12px}\n.breakdown-row{display:flex;align-items:center;gap:12px}\n.breakdown-label{font-size:12px;font-weight:600;color:var(--text-secondary);width:90px;flex-shrink:0}\n.breakdown-bar-wrap{flex:1;background:var(--bg-app);border-radius:99px;height:8px;overflow:hidden}\n.breakdown-bar{height:100%;border-radius:99px;transition:width .6s ease;min-width:4px}\n.breakdown-bar--neutral{background:var(--text-muted)}\n.breakdown-bar--orange{background:var(--orange)}\n.breakdown-bar--violet{background:#7850c8}\n.breakdown-bar--teal{background:#2ABFBF}\n.breakdown-count{font-size:12px;font-weight:700;width:24px;text-align:right;color:var(--text-secondary)}\n\n/* \u2500\u2500 Revenue by user \u2500\u2500 */\n.revenue-user-list{display:flex;flex-direction:column;gap:14px}\n.revenue-user-row{display:flex;align-items:center;gap:14px}\n.revenue-bar-wrap{flex:1;background:var(--bg-app);border-radius:99px;height:10px;overflow:hidden}\n.revenue-bar{height:100%;border-radius:99px;background:linear-gradient(90deg,#2ABFBF,#27AE7A);transition:width .6s ease;min-width:6px}\n.revenue-amount{font-size:13px;font-weight:700;color:var(--text-primary);white-space:nowrap;min-width:80px;text-align:right}\n\n/* \u2500\u2500 Bar chart (by month) \u2500\u2500 */\n.chart-bars{display:flex;align-items:flex-end;gap:10px;height:160px;padding:0 4px}\n.chart-bar-col{display:flex;flex-direction:column;align-items:center;flex:1;gap:6px;height:100%}\n.chart-bar-label-top{font-size:10px;font-weight:700;color:var(--text-secondary);white-space:nowrap}\n.chart-bar-wrap{flex:1;width:100%;display:flex;align-items:flex-end;background:var(--bg-app);border-radius:6px 6px 0 0;overflow:hidden}\n.chart-bar{width:100%;border-radius:6px 6px 0 0;transition:height .6s ease;min-height:4px}\n.chart-bar--teal{background:linear-gradient(180deg,#2ABFBF,#1a9999)}\n.chart-bar-label{font-size:10px;color:var(--text-muted);white-space:nowrap;text-align:center}\n\n/* \u2500\u2500 By day \u2500\u2500 */\n.revenue-day-list{display:flex;flex-direction:column;gap:10px}\n.day-label{width:100px !important}\n\n/* Badges */\n.kh-badge--neutral{background:rgba(0,0,0,.07);color:var(--text-secondary);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--orange{background:rgba(232,98,42,.1);color:var(--orange);border:1px solid rgba(232,98,42,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--violet{background:rgba(120,80,200,.12);color:#5a30a0;border:1px solid rgba(120,80,200,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--green{background:rgba(40,160,80,.1);color:#196;border:1px solid rgba(40,160,80,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n.kh-badge--red{background:rgba(232,74,74,.1);color:#b33;border:1px solid rgba(232,74,74,.2);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:700}\n\n/* Modals */\n.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}\n.modal-panel{background:white;border-radius:var(--radius-lg);width:100%;max-width:560px;max-height:90vh;overflow-y:auto;padding:28px;position:relative}\n.modal-panel--sm{max-width:380px;text-align:center}\n.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;font-size:16px;color:var(--text-muted);width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:6px}\n.modal-close:hover{background:var(--bg-app)}\n.modal-header-block{margin-bottom:20px}\n.modal-header-block h2{font-family:\"Syne\",sans-serif;font-size:18px;font-weight:700;margin:0 0 4px}\n.modal-subtitle{font-size:13px;color:var(--text-secondary);margin:0}\n.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n.form-group{display:flex;flex-direction:column;gap:5px}\n.form-full{grid-column:1/-1}\n.form-group label{font-size:11px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.04em}\n.form-group input,.form-group select,.form-group textarea{padding:8px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;font-family:inherit;background:white;color:var(--text-primary);transition:border-color .2s;width:100%;box-sizing:border-box}\n.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--orange)}\n.form-group textarea{resize:vertical;min-height:100px}\n.form-hint{font-size:11px;color:var(--text-muted);margin-top:2px}\n.form-error{background:rgba(232,74,74,.08);border:1px solid rgba(232,74,74,.3);border-radius:var(--radius-sm);padding:8px 12px;font-size:13px;color:#b33;margin-top:10px}\n.modal-footer{display:flex;gap:8px;justify-content:flex-end;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)}\n.confirm-icon{width:48px;height:48px;border-radius:50%;background:rgba(232,74,74,.1);color:#b33;display:flex;align-items:center;justify-content:center;margin:0 auto 12px}\n.modal-panel--sm h3{font-family:\"Syne\",sans-serif;font-size:17px;font-weight:700;margin:0 0 8px}\n.modal-panel--sm p{font-size:13px;color:var(--text-secondary);margin:0 0 20px;line-height:1.6}\n.confirm-actions{display:flex;gap:10px;justify-content:center}\n.kh-spinner{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;animation:spin .7s linear infinite}\n.kh-spinner--dark{border-color:rgba(0,0,0,.15);border-top-color:var(--text-primary)}\n@keyframes spin{to{transform:rotate(360deg)}}"] }]
    }], () => [{ type: i1.SubscriptionService }, { type: i2.DomSanitizer }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubscriptionsComponent, { className: "SubscriptionsComponent", filePath: "app\\features\\admin\\subscriptions\\subscriptions.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=subscriptions.component.js.map