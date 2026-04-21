import { Component, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/ressource.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
const _c0 = ["videoPlayer"];
const _c1 = ["pdfCanvas"];
function CoachBibliothequeComponent_div_45_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_45_button_5_Template_button_click_0_listener() { const c_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.filterCategorieId = c_r4.id; return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.filterCategorieId === c_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", c_r4.icone, " ", c_r4.nom, "");
} }
function CoachBibliothequeComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 20);
    i0.ɵɵtext(2, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 21);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_45_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.filterCategorieId = null; return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(4, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CoachBibliothequeComponent_div_45_button_5_Template, 2, 4, "button", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("active", ctx_r1.filterCategorieId === null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.categories);
} }
function CoachBibliothequeComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtext(1, "Loading resources\u2026");
    i0.ɵɵelementEnd();
} }
function CoachBibliothequeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function CoachBibliothequeComponent_div_60_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r6.categorie.nom);
} }
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u2713 Completed");
    i0.ɵɵelementContainerEnd();
} }
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "In progress");
    i0.ɵɵelementContainerEnd();
} }
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Not started");
    i0.ɵɵelementContainerEnd();
} }
function CoachBibliothequeComponent_div_60_div_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 61)(2, "span", 62);
    i0.ɵɵelementContainerStart(3, 63);
    i0.ɵɵtemplate(4, CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_4_Template, 2, 0, "ng-container", 64)(5, CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_5_Template, 2, 0, "ng-container", 64)(6, CoachBibliothequeComponent_div_60_div_1_ng_container_18_ng_container_6_Template, 2, 0, "ng-container", 65);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 66);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 67);
    i0.ɵɵelement(10, "div", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const r_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("color", ctx_r1.getProgressColor(r_r6.maProgression.statut));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", r_r6.maProgression.statut);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "COMPLETED");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "IN_PROGRESS");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", r_r6.maProgression.pourcentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", r_r6.maProgression.pourcentage, "%")("background", ctx_r1.getProgressColor(r_r6.maProgression.statut));
} }
function CoachBibliothequeComponent_div_60_div_1_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r7.nom);
} }
function CoachBibliothequeComponent_div_60_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_60_div_1_div_19_span_1_Template, 2, 1, "span", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", r_r6.tags);
} }
function CoachBibliothequeComponent_div_60_div_1_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_60_div_1_button_26_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const r_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r1.downloadRessource(r_r6)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 73);
    i0.ɵɵelement(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Download ");
    i0.ɵɵelementEnd();
} }
function CoachBibliothequeComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_60_div_1_Template_div_click_0_listener() { const r_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openViewer(r_r6)); });
    i0.ɵɵelementStart(1, "div", 43)(2, "div", 44);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 45)(5, "span", 46);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CoachBibliothequeComponent_div_60_div_1_span_7_Template, 2, 1, "span", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "h3", 48);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 49);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 50)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 51);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, CoachBibliothequeComponent_div_60_div_1_ng_container_18_Template, 11, 10, "ng-container", 52)(19, CoachBibliothequeComponent_div_60_div_1_div_19_Template, 2, 1, "div", 53);
    i0.ɵɵelementStart(20, "div", 54)(21, "div", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(22, "svg", 56);
    i0.ɵɵelement(23, "path", 57)(24, "circle", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Click to open ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, CoachBibliothequeComponent_div_60_div_1_button_26_Template, 6, 0, "button", 59);
    i0.ɵɵpipe(27, "json");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.typeIcons[r_r6.type] || "\uD83D\uDCC1");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r1.getAccessBadge(r_r6.planType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r6.planType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r6.categorie);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r6.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r6.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r6.tailleFormatee || (r_r6.dureeSec ? i0.ɵɵpipeBind2(15, 12, r_r6.dureeSec / 60, "1.0-0") + " min" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", r_r6.vues, " views");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r6.maProgression && r_r6.maProgression.pourcentage > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r6.tags == null ? null : r_r6.tags.length);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", r_r6.urlFichier || i0.ɵɵpipeBind1(27, 15, r_r6).includes("urlExterne"));
} }
function CoachBibliothequeComponent_div_60_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "p");
    i0.ɵɵtext(2, "No resources found.");
    i0.ɵɵelementEnd()();
} }
function CoachBibliothequeComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_60_div_1_Template, 28, 17, "div", 40)(2, CoachBibliothequeComponent_div_60_div_2_Template, 3, 0, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.ressources);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.ressources.length === 0 && !ctx_r1.loading);
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 99)(1, "span", 66);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r1.getProgressColor(r_r12.maProgression.statut));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r12.maProgression.pourcentage, "% ");
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 100);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const r_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r1.downloadRessource(r_r12)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 101);
    i0.ɵɵelement(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    i0.ɵɵelementEnd()();
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template_div_click_0_listener() { const r_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.openViewer(r_r12)); });
    i0.ɵɵelementStart(1, "span", 92);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 93)(4, "span", 94);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 95);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 96)(10, "span", 46);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_div_12_Template, 3, 3, "div", 97)(13, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_button_13_Template, 5, 0, "button", 98);
    i0.ɵɵpipe(14, "json");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.typeIcons[r_r12.type] || "\uD83D\uDCC4");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r12.titre.split(" \u2014 ")[1] || r_r12.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r12.tailleFormatee || (r_r12.dureeSec ? i0.ɵɵpipeBind2(8, 8, r_r12.dureeSec / 60, "1.0-0") + " min" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.getAccessBadge(r_r12.planType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r12.planType, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r12.maProgression && r_r12.maProgression.pourcentage > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r12.urlFichier || i0.ɵɵpipeBind1(14, 11, r_r12).includes("urlExterne"));
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 89);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_div_1_Template, 15, 13, "div", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const folder_r10 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", folder_r10.fichiers);
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 80);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r9); const folder_r10 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleFolder(folder_r10)); });
    i0.ɵɵelementStart(2, "div", 81);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 82);
    i0.ɵɵelement(4, "path", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div", 83)(6, "span", 84);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 85);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 86);
    i0.ɵɵelement(11, "polyline", 87);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_div_12_Template, 2, 1, "div", 88);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const folder_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(folder_r10.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", folder_r10.fichiers.length, " file", folder_r10.fichiers.length > 1 ? "s" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("open", folder_r10.expanded);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", folder_r10.expanded);
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104);
    i0.ɵɵtext(1, "Individual resources");
    i0.ɵɵelementEnd();
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 99)(1, "span", 66);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r1.getProgressColor(r_r15.maProgression.statut));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r15.maProgression.pourcentage, "% ");
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 100);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_13_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const r_r15 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r1.downloadRessource(r_r15)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 101);
    i0.ɵɵelement(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    i0.ɵɵelementEnd()();
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template_div_click_0_listener() { const r_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openViewer(r_r15)); });
    i0.ɵɵelementStart(1, "span", 92);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 93)(4, "span", 94);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 95);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 96)(10, "span", 46);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_div_12_Template, 3, 3, "div", 97)(13, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_button_13_Template, 5, 0, "button", 98);
    i0.ɵɵpipe(14, "json");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.typeIcons[r_r15.type] || "\uD83D\uDCC4");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r15.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r15.tailleFormatee || (r_r15.dureeSec ? i0.ɵɵpipeBind2(8, 8, r_r15.dureeSec / 60, "1.0-0") + " min" : ""));
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.getAccessBadge(r_r15.planType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r15.planType, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r15.maProgression && r_r15.maProgression.pourcentage > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r15.urlFichier || i0.ɵɵpipeBind1(14, 11, r_r15).includes("urlExterne"));
} }
function CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_1_Template, 2, 0, "div", 102)(2, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_div_2_Template, 15, 13, "div", 103);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const folder_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.folders.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", folder_r10.fichiers);
} }
function CoachBibliothequeComponent_div_61_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_1_Template, 13, 6, "ng-container", 52)(2, CoachBibliothequeComponent_div_61_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 52);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const folder_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", folder_r10.name !== "__solo__");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", folder_r10.name === "__solo__");
} }
function CoachBibliothequeComponent_div_61_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37);
    i0.ɵɵtext(1, "No resources found.");
    i0.ɵɵelementEnd();
} }
function CoachBibliothequeComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_61_ng_container_1_Template, 3, 2, "ng-container", 79)(2, CoachBibliothequeComponent_div_61_p_2_Template, 2, 0, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.folders);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.folders.length === 0);
} }
function CoachBibliothequeComponent_div_62_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgression.statut) + "22")("color", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgression.statut));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.viewerRessource.maProgression.pourcentage, "% ");
} }
function CoachBibliothequeComponent_div_62_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 124);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 56);
    i0.ɵɵelement(2, "polyline", 125);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Auto-saved every 10s ");
    i0.ɵɵelementEnd();
} }
function CoachBibliothequeComponent_div_62_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 126);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_62_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadRessource(ctx_r1.viewerRessource)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 127);
    i0.ɵɵelement(2, "path", 74)(3, "polyline", 75)(4, "line", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Download ");
    i0.ɵɵelementEnd();
} }
function CoachBibliothequeComponent_div_62_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128);
    i0.ɵɵelement(1, "div", 129);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r1.viewerRessource.maProgression.pourcentage, "%")("background", ctx_r1.getProgressColor(ctx_r1.viewerRessource.maProgression.statut));
} }
function CoachBibliothequeComponent_div_62_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 130);
    i0.ɵɵelement(1, "div", 131);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading file\u2026");
    i0.ɵɵelementEnd()();
} }
function CoachBibliothequeComponent_div_62_div_18_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 135);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u25B6 Resuming from ", i0.ɵɵpipeBind2(2, 1, ctx_r1.resumeAt, "1.0-0"), "s");
} }
function CoachBibliothequeComponent_div_62_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 132)(1, "video", 133, 0);
    i0.ɵɵlistener("loadedmetadata", function CoachBibliothequeComponent_div_62_div_18_Template_video_loadedmetadata_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onVideoLoaded()); });
    i0.ɵɵtext(3, " Your browser does not support HTML5 video. ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CoachBibliothequeComponent_div_62_div_18_p_4_Template, 3, 4, "p", 134);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.viewerUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.resumeAt > 0);
} }
function CoachBibliothequeComponent_div_62_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 140)(1, "button", 141);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_62_div_19_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pdfPrevPage()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 142);
    i0.ɵɵelement(3, "polyline", 143);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 144)(5, "span", 145);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 146);
    i0.ɵɵtext(8, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 147);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 148);
    i0.ɵɵtext(12, "pages");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 141);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_62_div_19_div_1_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pdfNextPage()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(14, "svg", 142);
    i0.ɵɵelement(15, "polyline", 87);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "div", 149)(17, "div", 150);
    i0.ɵɵelement(18, "div", 151);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 152);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "number");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.pdfCurrentPage <= 1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.pdfCurrentPage);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.pdfTotalPages);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.pdfCurrentPage >= ctx_r1.pdfTotalPages);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("width", ctx_r1.pdfCurrentPage / ctx_r1.pdfTotalPages * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(21, 7, ctx_r1.pdfCurrentPage / ctx_r1.pdfTotalPages * 100, "1.0-0"), "% ");
} }
function CoachBibliothequeComponent_div_62_div_19_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 130);
    i0.ɵɵelement(1, "div", 131);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Rendering PDF\u2026");
    i0.ɵɵelementEnd()();
} }
function CoachBibliothequeComponent_div_62_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 136);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_62_div_19_div_1_Template, 22, 10, "div", 137);
    i0.ɵɵelementStart(2, "div", 138);
    i0.ɵɵelement(3, "canvas", 139, 1);
    i0.ɵɵtemplate(5, CoachBibliothequeComponent_div_62_div_19_div_5_Template, 4, 0, "div", 119);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfDoc);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.pdfDoc && !ctx_r1.viewerLoading);
} }
function CoachBibliothequeComponent_div_62_div_20_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 155);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r1.rawBlobUrl, i0.ɵɵsanitizeUrl);
} }
function CoachBibliothequeComponent_div_62_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 153);
    i0.ɵɵtemplate(1, CoachBibliothequeComponent_div_62_div_20_img_1_Template, 1, 1, "img", 154);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.rawBlobUrl);
} }
function CoachBibliothequeComponent_div_62_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 153)(1, "div", 156)(2, "span", 157);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "This file type cannot be previewed in the browser.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 158);
    i0.ɵɵtext(9, "\uD83D\uDCE5 Download file");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.typeIcons[(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.type) || "PDF"]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.titre);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", ctx_r1.viewerUrl, i0.ɵɵsanitizeUrl);
} }
function CoachBibliothequeComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 106);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_62_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView($event.target === $event.currentTarget && ctx_r1.closeViewer()); });
    i0.ɵɵelementStart(1, "div", 107)(2, "div", 108)(3, "div", 109)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CoachBibliothequeComponent_div_62_span_8_Template, 2, 5, "span", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 111);
    i0.ɵɵtemplate(10, CoachBibliothequeComponent_div_62_span_10_Template, 4, 0, "span", 112)(11, CoachBibliothequeComponent_div_62_button_11_Template, 6, 0, "button", 113);
    i0.ɵɵelementStart(12, "button", 114);
    i0.ɵɵlistener("click", function CoachBibliothequeComponent_div_62_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeViewer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(13, "svg", 115);
    i0.ɵɵelement(14, "line", 116)(15, "line", 117);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(16, CoachBibliothequeComponent_div_62_div_16_Template, 2, 4, "div", 118)(17, CoachBibliothequeComponent_div_62_div_17_Template, 4, 0, "div", 119)(18, CoachBibliothequeComponent_div_62_div_18_Template, 5, 2, "div", 120)(19, CoachBibliothequeComponent_div_62_div_19_Template, 6, 2, "div", 121)(20, CoachBibliothequeComponent_div_62_div_20_Template, 2, 1, "div", 122)(21, CoachBibliothequeComponent_div_62_div_21_Template, 10, 3, "div", 122);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.typeIcons[(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.type) || "PDF"]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.titre);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.maProgression) && ctx_r1.viewerRessource.maProgression.pourcentage > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.viewerType === "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewerRessource);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", (ctx_r1.viewerRessource == null ? null : ctx_r1.viewerRessource.maProgression) && ctx_r1.viewerRessource.maProgression.pourcentage > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewerLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewerType === "video" && !ctx_r1.viewerLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewerType === "pdf" && !ctx_r1.viewerLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewerType === "image" && !ctx_r1.viewerLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewerType === "other");
} }
export class CoachBibliothequeComponent {
    constructor(svc, sanitizer, zone) {
        this.svc = svc;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.ressources = [];
        this.folders = [];
        this.view = 'grid';
        this.categories = [];
        this.loading = false;
        this.error = '';
        this.filterType = 'ALL';
        this.filterAccess = 'ALL';
        this.filterCategorieId = null;
        this.search = '';
        this.stats = {};
        this.showViewer = false;
        this.viewerRessource = null;
        this.viewerType = 'other';
        this.viewerUrl = '';
        this.rawBlobUrl = '';
        this.blobUrl = null;
        this.viewerLoading = false;
        this.resumeAt = 0;
        this.pdfDoc = null;
        this.pdfCurrentPage = 1;
        this.pdfTotalPages = 1;
        this.pdfRendering = false;
        this.pdfScale = 1.5;
        this.saveInterval = null;
        this.typeIcons = {
            PDF: '📄', VIDEO: '🎥', EXCEL: '📊', WORD: '📝', IMAGE: '🖼️', LINK: '🔗'
        };
        this.userId = 3;
        this.userRole = 'COACH';
        this.userPlan = 'FREE'; // FREE | PREMIUM | INSTITUTIONAL
        this.apiBase = this.svc.getApiOrigin();
    }
    ngOnInit() { this.loadCategories(); this.loadStats(); this.load(); }
    ngOnDestroy() { this.stopSaveInterval(); this.revokeBlobUrl(); }
    // ── LOGIQUE D'URL UNIQUE ET NETTOYÉE ──────────────────────────────
    formatFullUrl(path) {
        if (!path || path === '#' || path === '')
            return '';
        if (path.startsWith('http'))
            return path;
        const base = this.apiBase.replace(/\/+$/, '');
        let cleanPath = path;
        // Si le backend renvoie déjà khotwa/api dans le path, on le retire pour éviter le doublon
        if (cleanPath.includes('khotwa/api')) {
            const parts = cleanPath.split('khotwa/api');
            cleanPath = parts[parts.length - 1];
        }
        // On s'assure qu'il y a un slash au début
        if (!cleanPath.startsWith('/')) {
            cleanPath = '/' + cleanPath;
        }
        const finalUrl = base + cleanPath;
        console.log("Coach URL built:", finalUrl);
        return finalUrl;
    }
    load() {
        this.loading = true;
        this.error = '';
        const filters = { userId: this.userId, role: this.userRole, plan: this.userPlan };
        if (this.filterType !== 'ALL')
            filters.type = this.filterType;
        if (this.filterAccess !== 'ALL')
            filters.access = this.filterAccess;
        if (this.filterCategorieId)
            filters.categorieId = this.filterCategorieId;
        if (this.search)
            filters.search = this.search;
        forkJoin({
            ressources: this.svc.getRessourcesHttp(filters),
            progressions: this.svc.getMesProgressionsHttp(this.userId)
        }).subscribe({
            next: ({ ressources, progressions }) => {
                const list = ressources.data ?? ressources;
                const progs = progressions.data ?? [];
                const pm = new Map();
                progs.forEach((p) => {
                    const rid = p.ressource?.id ?? p.ressourceId;
                    if (rid)
                        pm.set(rid, p);
                });
                this.ressources = list.map(r => ({
                    ...r,
                    maProgression: pm.has(r.id)
                        ? {
                            statut: pm.get(r.id).statut,
                            pourcentage: pm.get(r.id).pourcentage,
                            positionVideoSec: pm.get(r.id).positionVideoSec,
                            currentPage: pm.get(r.id).positionVideoSec
                        }
                        : r.maProgression
                }));
                this.buildFolders();
                this.loading = false;
            },
            error: () => { this.error = '⚠️ Impossible de joindre le serveur.'; this.loading = false; }
        });
    }
    loadStats() { this.svc.getStatsHttp(this.userId).subscribe({ next: r => this.stats = r.data ?? {}, error: () => { } }); }
    loadCategories() { this.svc.getCategoriesHttp().subscribe({ next: r => this.categories = r.data ?? [], error: () => { } }); }
    onSearch() { this.load(); }
    openViewer(r) {
        this.svc.getRessourceByIdHttp(r.id, this.userId, this.userRole, this.userPlan).subscribe({
            next: res => {
                const detail = res.data?.ressource ?? res.data ?? r;
                const tags = res.data?.tags ?? detail.tags ?? r.tags ?? [];
                this.startViewer({ ...r, ...detail, tags, maProgression: r.maProgression ?? detail.maProgression });
            },
            error: () => this.startViewer(r)
        });
    }
    startViewer(r) {
        this.viewerRessource = r;
        this.viewerType = r.type === 'VIDEO' ? 'video' : r.type === 'PDF' ? 'pdf' : r.type === 'IMAGE' ? 'image' : 'other';
        this.resumeAt = r.maProgression?.positionVideoSec ?? 0;
        this.revokeBlobUrl();
        this.blobUrl = null;
        this.rawBlobUrl = '';
        this.pdfDoc = null;
        if (!r.maProgression || r.maProgression.statut === 'NOT_STARTED') {
            this.svc.updateProgressionHttp(this.userId, r.id, 'IN_PROGRESS', 1).subscribe();
        }
        if (r.type === 'VIDEO') {
            this.viewerUrl = this.formatFullUrl(r.urlFichier || r.urlExterne);
            this.showViewer = true;
            this.startSaveInterval(r);
        }
        else if (r.type === 'PDF' || r.type === 'IMAGE') {
            this.viewerLoading = true;
            this.showViewer = true;
            this.svc.downloadAsBlob(r.id, this.userId, this.userRole, this.userPlan).subscribe({
                next: (blob) => {
                    this.rawBlobUrl = URL.createObjectURL(blob);
                    this.viewerLoading = false;
                    if (r.type === 'PDF')
                        this.loadPdfJs(this.rawBlobUrl, r);
                },
                error: () => { this.viewerLoading = false; }
            });
        }
        else {
            this.viewerUrl = this.formatFullUrl(r.urlExterne || r.urlFichier);
            this.showViewer = true;
        }
    }
    loadPdfJs(blobUrl, r) {
        if (typeof pdfjsLib === 'undefined')
            return;
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        pdfjsLib.getDocument(blobUrl).promise.then((doc) => {
            this.zone.run(() => {
                this.pdfDoc = doc;
                this.pdfTotalPages = doc.numPages;
                const savedPage = r.maProgression?.positionVideoSec ?? 1;
                this.pdfCurrentPage = Math.max(1, Math.min(savedPage, this.pdfTotalPages));
                setTimeout(() => this.renderPdfPage(this.pdfCurrentPage, r), 100);
            });
        });
    }
    renderPdfPage(pageNum, r) {
        if (!this.pdfDoc || this.pdfRendering)
            return;
        this.pdfRendering = true;
        this.pdfCurrentPage = pageNum;
        this.pdfDoc.getPage(pageNum).then((page) => {
            const canvas = this.pdfCanvasRef?.nativeElement;
            if (!canvas) {
                this.pdfRendering = false;
                return;
            }
            const viewport = page.getViewport({ scale: this.pdfScale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const ctx = canvas.getContext('2d');
            page.render({ canvasContext: ctx, viewport }).promise.then(() => {
                this.zone.run(() => {
                    this.pdfRendering = false;
                    const pct = Math.round((pageNum / this.pdfTotalPages) * 100);
                    const statut = pct >= 100 ? 'COMPLETED' : 'IN_PROGRESS';
                    const target = r ?? this.viewerRessource;
                    if (target) {
                        if (this.viewerRessource)
                            this.viewerRessource.maProgression = { statut, pourcentage: pct };
                        this.svc.saveVideoProgressionHttp(this.userId, target.id, statut, pct, pageNum).subscribe();
                    }
                });
            });
        });
    }
    pdfPrevPage() { if (this.pdfCurrentPage > 1)
        this.renderPdfPage(this.pdfCurrentPage - 1); }
    pdfNextPage() { if (this.pdfCurrentPage < this.pdfTotalPages)
        this.renderPdfPage(this.pdfCurrentPage + 1); }
    startSaveInterval(r) {
        this.stopSaveInterval();
        this.saveInterval = setInterval(() => {
            const video = this.videoPlayerRef?.nativeElement;
            if (!video || !this.viewerRessource)
                return;
            const sec = Math.floor(video.currentTime);
            const dur = video.duration || r.dureeSec || 1;
            const pct = Math.min(100, Math.round(sec / dur * 100));
            const statut = pct >= 95 ? 'COMPLETED' : 'IN_PROGRESS';
            this.svc.saveVideoProgressionHttp(this.userId, r.id, statut, pct, sec).subscribe();
        }, 10000);
    }
    stopSaveInterval() { if (this.saveInterval)
        clearInterval(this.saveInterval); }
    closeViewer() {
        this.stopSaveInterval();
        this.revokeBlobUrl();
        this.showViewer = false;
        this.viewerRessource = null;
        this.pdfDoc = null;
    }
    onVideoLoaded() {
        const video = this.videoPlayerRef?.nativeElement;
        if (video && this.resumeAt > 0)
            video.currentTime = this.resumeAt;
    }
    revokeBlobUrl() {
        if (this.rawBlobUrl?.startsWith('blob:'))
            URL.revokeObjectURL(this.rawBlobUrl);
    }
    downloadRessource(r) {
        const url = this.formatFullUrl(r.urlFichier || r.urlExterne);
        if (!url) {
            alert('Aucun fichier attaché.');
            return;
        }
        fetch(url, { headers: { 'X-User-Id': String(this.userId), 'X-User-Role': this.userRole } })
            .then(res => {
            if (!res.ok)
                throw new Error('Download failed');
            return res.blob();
        })
            .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = r.nomFichierOriginal || r.titre || 'document';
            a.click();
            URL.revokeObjectURL(a.href);
        })
            .catch(() => window.open(url, '_blank'));
    }
    isCompleted(r) { return r.maProgression?.statut === 'COMPLETED'; }
    getProgressColor(s) { return s === 'COMPLETED' ? 'var(--green)' : s === 'IN_PROGRESS' ? 'var(--teal)' : 'var(--text-muted)'; }
    getAccessBadge(a) { return a === 'FREE' ? 'kh-badge--green' : a === 'PREMIUM' ? 'kh-badge--amber' : 'kh-badge--violet'; }
    buildFolders() {
        const grouped = new Map();
        const solo = [];
        this.ressources.forEach((r) => {
            const sep = r.titre.indexOf(' — ');
            if (sep > -1) {
                const key = r.titre.substring(0, sep).trim();
                if (!grouped.has(key))
                    grouped.set(key, []);
                grouped.get(key).push(r);
            }
            else
                solo.push(r);
        });
        this.folders = [];
        grouped.forEach((fichiers, name) => {
            if (fichiers.length > 1)
                this.folders.push({ name, fichiers, expanded: false });
            else
                solo.push(...fichiers);
        });
        if (solo.length > 0)
            this.folders.push({ name: '__solo__', fichiers: solo, expanded: true });
    }
    toggleFolder(folder) { folder.expanded = !folder.expanded; }
    static { this.ɵfac = function CoachBibliothequeComponent_Factory(t) { return new (t || CoachBibliothequeComponent)(i0.ɵɵdirectiveInject(i1.RessourceService), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i0.NgZone)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoachBibliothequeComponent, selectors: [["app-coach-bibliotheque"]], viewQuery: function CoachBibliothequeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.videoPlayerRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfCanvasRef = _t.first);
        } }, decls: 63, vars: 24, consts: [["videoPlayer", ""], ["pdfCanvas", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "lib-stats", "animate-2"], [1, "lib-stat"], [1, "lib-stat__val"], [1, "lib-stat__label"], [1, "lib-stat__val", 2, "color", "var(--green)"], [1, "lib-stat__val", 2, "color", "var(--teal)"], [1, "lib-stat__val", 2, "color", "var(--violet)"], [1, "filters", "animate-2"], [1, "search-box"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search resources\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "filter-group"], [1, "filter-label"], [1, "tab", 3, "click"], ["class", "filter-group", 4, "ngIf"], [1, "view-toggle-row"], [3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["style", "padding:16px;background:#FCEBEB;border-radius:8px;color:#791F1F;font-size:13px", 4, "ngIf"], ["class", "res-grid animate-3", 4, "ngIf"], ["class", "folders-view animate-3", 4, "ngIf"], ["class", "viewer-overlay", 3, "click", 4, "ngIf"], ["class", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [2, "padding", "16px", "background", "#FCEBEB", "border-radius", "8px", "color", "#791F1F", "font-size", "13px"], [1, "res-grid", "animate-3"], ["class", "res-card kh-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "res-card", "kh-card", 3, "click"], [1, "res-card__top"], [1, "res-icon"], [1, "res-badges"], [1, "kh-badge"], ["class", "kh-badge kh-badge--gray", 4, "ngIf"], [1, "res-titre"], [1, "res-desc"], [1, "res-meta"], [2, "color", "var(--text-muted)"], [4, "ngIf"], ["class", "res-tags", 4, "ngIf"], [1, "res-card-actions"], [1, "res-open-hint"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "download-btn", "title", "Download", 3, "click", 4, "ngIf"], [1, "kh-badge", "kh-badge--gray"], [1, "prog-row"], [1, "prog-label"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "prog-pct"], [1, "kh-progress"], [1, "kh-progress__fill"], [1, "res-tags"], ["class", "res-tag", 4, "ngFor", "ngForOf"], [1, "res-tag"], ["title", "Download", 1, "download-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "empty-state"], [1, "folders-view", "animate-3"], [4, "ngFor", "ngForOf"], [1, "folder-row", 3, "click"], [1, "folder-icon-wrap"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "folder-meta"], [1, "folder-name"], [1, "folder-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "folder-chevron"], ["points", "9 18 15 12 9 6"], ["class", "folder-files", 4, "ngIf"], [1, "folder-files"], ["class", "folder-file-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "folder-file-row", 3, "click"], [1, "ff-icon"], [1, "ff-info"], [1, "ff-name"], [1, "ff-size"], [1, "ff-side-actions"], ["class", "ff-prog", 4, "ngIf"], ["class", "ff-dl-btn", 3, "click", 4, "ngIf"], [1, "ff-prog"], [1, "ff-dl-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["class", "solo-label", 4, "ngIf"], ["class", "folder-file-row solo-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "solo-label"], [1, "folder-file-row", "solo-row", 3, "click"], [1, "viewer-overlay", 3, "click"], [1, "viewer-box"], [1, "viewer-header"], [1, "viewer-title"], ["class", "viewer-prog-badge", 3, "background", "color", 4, "ngIf"], [1, "viewer-header-right"], ["class", "viewer-autosave-info", 4, "ngIf"], ["class", "viewer-dl-btn", "title", "Download", 3, "click", 4, "ngIf"], [1, "viewer-close", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "viewer-prog-bar", 4, "ngIf"], ["class", "viewer-loading", 4, "ngIf"], ["class", "viewer-content", 4, "ngIf"], ["class", "viewer-content viewer-content--pdf", 4, "ngIf"], ["class", "viewer-content viewer-content--center", 4, "ngIf"], [1, "viewer-prog-badge"], [1, "viewer-autosave-info"], ["points", "20 6 9 17 4 12"], ["title", "Download", 1, "viewer-dl-btn", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "viewer-prog-bar"], [1, "viewer-prog-fill"], [1, "viewer-loading"], [1, "viewer-spinner"], [1, "viewer-content"], ["controls", "", "preload", "metadata", 1, "viewer-video", 3, "loadedmetadata", "src"], ["class", "viewer-resume-hint", 4, "ngIf"], [1, "viewer-resume-hint"], [1, "viewer-content", "viewer-content--pdf"], ["class", "pdf-controls", 4, "ngIf"], [1, "pdf-canvas-wrap"], [1, "pdf-canvas"], [1, "pdf-controls"], [1, "pdf-nav-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "pdf-page-info"], [1, "pdf-page-current"], [1, "pdf-page-sep"], [1, "pdf-page-total"], [1, "pdf-page-label"], [1, "pdf-inline-prog"], [1, "kh-progress", 2, "width", "120px"], [1, "kh-progress__fill", "kh-progress__fill--teal"], [2, "font-size", "11px", "font-weight", "700", "color", "var(--teal)"], [1, "viewer-content", "viewer-content--center"], ["class", "viewer-img", "alt", "resource image", 3, "src", 4, "ngIf"], ["alt", "resource image", 1, "viewer-img", 3, "src"], [1, "viewer-download-prompt"], [1, "viewer-dl-icon"], ["target", "_blank", "download", "", 1, "kh-btn", "kh-btn--primary", 3, "href"]], template: function CoachBibliothequeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
            i0.ɵɵtext(4, "Resource Library");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 7)(9, "span", 8);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 9);
            i0.ɵɵtext(12, "Total");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7)(14, "span", 10);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 9);
            i0.ɵɵtext(17, "Free");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 7)(19, "span", 11);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span", 9);
            i0.ɵɵtext(22, "Premium");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 7)(24, "span", 12);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "span", 9);
            i0.ɵɵtext(27, "Institutional");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 13)(29, "div", 14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(30, "svg", 15);
            i0.ɵɵelement(31, "circle", 16)(32, "path", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(33, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function CoachBibliothequeComponent_Template_input_ngModelChange_33_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("input", function CoachBibliothequeComponent_Template_input_input_33_listener() { return ctx.onSearch(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 19)(35, "span", 20);
            i0.ɵɵtext(36, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "button", 21);
            i0.ɵɵlistener("click", function CoachBibliothequeComponent_Template_button_click_37_listener() { ctx.filterType = "ALL"; return ctx.load(); });
            i0.ɵɵtext(38, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 21);
            i0.ɵɵlistener("click", function CoachBibliothequeComponent_Template_button_click_39_listener() { ctx.filterType = "PDF"; return ctx.load(); });
            i0.ɵɵtext(40, "\uD83D\uDCC4 PDF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "button", 21);
            i0.ɵɵlistener("click", function CoachBibliothequeComponent_Template_button_click_41_listener() { ctx.filterType = "VIDEO"; return ctx.load(); });
            i0.ɵɵtext(42, "\uD83C\uDFA5 Video");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "button", 21);
            i0.ɵɵlistener("click", function CoachBibliothequeComponent_Template_button_click_43_listener() { ctx.filterType = "EXCEL"; return ctx.load(); });
            i0.ɵɵtext(44, "\uD83D\uDCCA Excel");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(45, CoachBibliothequeComponent_div_45_Template, 6, 3, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 23)(47, "button", 24);
            i0.ɵɵlistener("click", function CoachBibliothequeComponent_Template_button_click_47_listener() { return ctx.view = "grid"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(48, "svg", 25);
            i0.ɵɵelement(49, "rect", 26)(50, "rect", 27)(51, "rect", 28)(52, "rect", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(53, " Grid ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(54, "button", 24);
            i0.ɵɵlistener("click", function CoachBibliothequeComponent_Template_button_click_54_listener() { return ctx.view = "folders"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(55, "svg", 25);
            i0.ɵɵelement(56, "path", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(57, " Folders ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(58, CoachBibliothequeComponent_div_58_Template, 2, 0, "div", 31)(59, CoachBibliothequeComponent_div_59_Template, 2, 1, "div", 32)(60, CoachBibliothequeComponent_div_60_Template, 3, 2, "div", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(61, CoachBibliothequeComponent_div_61_Template, 3, 2, "div", 34)(62, CoachBibliothequeComponent_div_62_Template, 22, 11, "div", 35);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.ressources.length, " resource(s) available");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.stats.total || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.stats.free || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.stats.premium || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.stats.institutional || 0);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.filterType === "ALL");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "PDF");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "VIDEO");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "EXCEL");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.categories.length);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.view === "grid");
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("active", ctx.view === "folders");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "grid");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "folders" && !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showViewer);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i3.JsonPipe, i3.DecimalPipe], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}\n.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.page-sub[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:4px}\n.lib-stats[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}\n.lib-stat[_ngcontent-%COMP%]{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 20px;display:flex;flex-direction:column;gap:4px;min-width:100px}\n.lib-stat__val[_ngcontent-%COMP%]{font-family:'Syne',sans-serif;font-size:22px;font-weight:800}\n.lib-stat__label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em}\n.filters[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}\n.filter-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.filter-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);min-width:50px}\n.search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:8px 14px;width:100%;max-width:360px}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;font-size:13px;flex:1;color:var(--text-primary)}\n.tab[_ngcontent-%COMP%]{padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}\n.tab.active[_ngcontent-%COMP%]{background:var(--orange);color:white;border-color:var(--orange)}\n.res-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}\n.res-card[_ngcontent-%COMP%]{padding:20px;cursor:pointer;transition:all 0.2s;border:1px solid var(--border);border-radius:var(--radius-lg);background:white}\n.res-card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.1);border-color:var(--orange)}\n.res-card__top[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px}\n.res-icon[_ngcontent-%COMP%]{font-size:28px}\n.res-badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;align-items:flex-end}\n.res-titre[_ngcontent-%COMP%]{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:6px}\n.res-desc[_ngcontent-%COMP%]{font-size:12px;color:var(--text-secondary);line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.res-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-bottom:10px}\n.prog-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}\n.prog-label[_ngcontent-%COMP%]{font-size:11px;font-weight:600}\n.prog-pct[_ngcontent-%COMP%]{font-size:11px;font-weight:700;color:var(--orange)}\n.res-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}\n.res-tag[_ngcontent-%COMP%]{padding:2px 8px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;font-size:10px;font-weight:600;color:var(--text-secondary)}\n.res-actions[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)}\n.empty-state[_ngcontent-%COMP%]{grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)}\n.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}\n.modal-box[_ngcontent-%COMP%]{width:100%;max-width:560px;max-height:90vh;overflow-y:auto;padding:28px}\n.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-top:4px}\n.modal-icon[_ngcontent-%COMP%]{font-size:28px;margin-right:10px}\n.modal-close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px 8px}\n.modal-desc[_ngcontent-%COMP%]{font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:20px}\n.modal-meta[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.meta-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}\n.meta-key[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);font-weight:600}\n.meta-val[_ngcontent-%COMP%]{font-size:13px;font-weight:600}\n.modal-progress[_ngcontent-%COMP%]{margin-top:16px;padding-top:16px;border-top:1px solid var(--border)}\n.modal-footer[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);flex-wrap:wrap}\n\n\n\n.res-open-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--text-muted);margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}\n.viewer-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px}\n.viewer-box[_ngcontent-%COMP%]{background:var(--color-background-primary,#fff);border-radius:16px;width:100%;max-width:1100px;max-height:95vh;display:flex;flex-direction:column;overflow:hidden}\n.viewer-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--border);flex-shrink:0}\n.viewer-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;overflow:hidden}\n.viewer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:20px;flex-shrink:0}\n.viewer-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.viewer-prog-badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;flex-shrink:0}\n.viewer-header-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-shrink:0}\n.viewer-autosave-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--green,#27AE7A);font-weight:600}\n.viewer-close[_ngcontent-%COMP%]{background:none;border:1px solid var(--border);border-radius:8px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:var(--text-secondary);transition:all 0.15s}\n.viewer-close[_ngcontent-%COMP%]:hover{background:var(--bg-app);border-color:var(--text-muted)}\n.viewer-prog-bar[_ngcontent-%COMP%]{height:3px;background:var(--border);flex-shrink:0}\n.viewer-prog-fill[_ngcontent-%COMP%]{height:100%;transition:width 0.5s ease;border-radius:2px}\n.viewer-content[_ngcontent-%COMP%]{flex:1;overflow:hidden;display:flex;flex-direction:column;min-height:0}\n.viewer-content--center[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:40px}\n.viewer-video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;background:#000;min-height:0}\n.viewer-iframe[_ngcontent-%COMP%]{flex:1;width:100%;border:none;min-height:500px}\n.viewer-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain;border-radius:8px}\n.viewer-resume-hint[_ngcontent-%COMP%]{padding:8px 16px;font-size:12px;color:var(--teal,#2ABFBF);font-weight:600;background:rgba(42,191,191,0.08);text-align:center;flex-shrink:0}\n.viewer-download-prompt[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px}\n.viewer-dl-icon[_ngcontent-%COMP%]{font-size:56px}\n.viewer-download-prompt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:'Syne',sans-serif;font-size:20px;font-weight:700}\n.viewer-download-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-secondary);font-size:14px}\n\n.viewer-loading[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--text-muted)}\n.viewer-spinner[_ngcontent-%COMP%]{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--orange);border-radius:50%;animation:_ngcontent-%COMP%_spin 0.8s linear infinite}\n@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}\n\n\n\n.viewer-content--pdf[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0}\n.pdf-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid var(--border);flex-shrink:0;background:var(--bg-app)}\n.pdf-nav-btn[_ngcontent-%COMP%]{width:32px;height:32px;border:1px solid var(--border);border-radius:8px;background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;color:var(--text-secondary)}\n.pdf-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--orange);color:white;border-color:var(--orange)}\n.pdf-nav-btn[_ngcontent-%COMP%]:disabled{opacity:0.35;cursor:not-allowed}\n.pdf-page-info[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:4px;font-size:13px}\n.pdf-page-current[_ngcontent-%COMP%]{font-weight:800;font-family:'Syne',sans-serif;font-size:16px;color:var(--orange)}\n.pdf-page-sep[_ngcontent-%COMP%]{color:var(--text-muted)}\n.pdf-page-total[_ngcontent-%COMP%]{font-weight:600}\n.pdf-page-label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted)}\n.pdf-inline-prog[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:auto}\n.pdf-canvas-wrap[_ngcontent-%COMP%]{flex:1;overflow:auto;display:flex;justify-content:center;padding:16px;background:#525659}\n.pdf-canvas[_ngcontent-%COMP%]{display:block;box-shadow:0 4px 20px rgba(0,0,0,0.3);border-radius:2px;max-width:100%}\n\n\n\n.res-card-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}\n.res-open-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--text-muted)}\n.download-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;border:1px solid var(--border);background:white;color:var(--text-secondary);cursor:pointer;transition:all 0.15s}\n.download-btn[_ngcontent-%COMP%]:hover{background:var(--orange);color:white;border-color:var(--orange)}\n\n\n\n.viewer-dl-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:6px 14px;border:1px solid var(--border);border-radius:8px;background:white;cursor:pointer;font-size:12px;font-weight:600;color:var(--text-secondary);transition:all 0.15s}\n.viewer-dl-btn[_ngcontent-%COMP%]:hover{background:var(--orange);color:white;border-color:var(--orange)}\n\n\n\n.view-toggle-row[_ngcontent-%COMP%]{display:flex;gap:6px;margin-bottom:4px}\n.view-toggle-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}\n.view-toggle-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:var(--orange);color:white;border-color:var(--orange)}\n.folders-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}\n.folder-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);cursor:pointer;transition:all 0.15s}\n.folder-row[_ngcontent-%COMP%]:hover{border-color:var(--orange);background:#FFF8F5}\n.folder-icon-wrap[_ngcontent-%COMP%]{color:var(--orange);flex-shrink:0}\n.folder-meta[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:10px}\n.folder-name[_ngcontent-%COMP%]{font-family:'Syne',sans-serif;font-weight:700;font-size:14px}\n.folder-count[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);background:var(--bg-app);border:1px solid var(--border);border-radius:10px;padding:2px 8px}\n.folder-chevron[_ngcontent-%COMP%]{color:var(--text-muted);transition:transform 0.2s;flex-shrink:0}\n.folder-chevron.open[_ngcontent-%COMP%]{transform:rotate(90deg)}\n.folder-files[_ngcontent-%COMP%]{margin-left:20px;border-left:2px solid var(--border);padding-left:10px;display:flex;flex-direction:column;gap:3px;margin-bottom:6px}\n.folder-file-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:9px 12px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;transition:all 0.15s}\n.folder-file-row[_ngcontent-%COMP%]:hover{border-color:var(--teal);background:#F5FFFD}\n.ff-icon[_ngcontent-%COMP%]{font-size:16px;flex-shrink:0}\n.ff-info[_ngcontent-%COMP%]{flex: 1; \n    min-width: 0;\n    display: flex;\n    align-items: center;\n    gap: 12px;}\n.ff-name[_ngcontent-%COMP%]{font-size:13px;font-weight:600;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}\n.ff-meta[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted)}\n.ff-prog[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;flex-shrink:0}\n.ff-dl-btn[_ngcontent-%COMP%]{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 6px;cursor:pointer;color:var(--text-secondary);transition:all 0.15s;flex-shrink:0;display:flex;align-items:center}\n.ff-dl-btn[_ngcontent-%COMP%]:hover{background:var(--orange);color:white;border-color:var(--orange)}\n.solo-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);padding:8px 4px 4px}\n.solo-row[_ngcontent-%COMP%]{margin-bottom:3px}\n\n\n.ff-size[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: var(--text-muted);\n    min-width: 70px; \n\n}\n\n\n\n.ff-side-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    flex-shrink: 0;\n}\n\n\n\n.ff-dl-btn[_ngcontent-%COMP%] {\n    background: white;\n    border: 1px solid var(--border);\n    border-radius: 6px;\n    padding: 6px;\n    cursor: pointer;\n    color: var(--text-secondary);\n    transition: all 0.15s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ff-dl-btn[_ngcontent-%COMP%]:hover {\n    background: var(--orange);\n    color: white;\n    border-color: var(--orange);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoachBibliothequeComponent, [{
        type: Component,
        args: [{ selector: 'app-coach-bibliotheque', template: "<div class=\"page animate-1\">\n\n  <div class=\"page-header\">\n    <div><h1 class=\"kh-page-title\">Resource Library</h1><p class=\"page-sub\">{{ ressources.length }} resource(s) available</p></div>\n  </div>\n\n  <div class=\"lib-stats animate-2\">\n    <div class=\"lib-stat\"><span class=\"lib-stat__val\">{{ stats.total || 0 }}</span><span class=\"lib-stat__label\">Total</span></div>\n    <div class=\"lib-stat\"><span class=\"lib-stat__val\" style=\"color:var(--green)\">{{ stats.free || 0 }}</span><span class=\"lib-stat__label\">Free</span></div>\n    <div class=\"lib-stat\"><span class=\"lib-stat__val\" style=\"color:var(--teal)\">{{ stats.premium || 0 }}</span><span class=\"lib-stat__label\">Premium</span></div>\n    <div class=\"lib-stat\"><span class=\"lib-stat__val\" style=\"color:var(--violet)\">{{ stats.institutional || 0 }}</span><span class=\"lib-stat__label\">Institutional</span></div>\n  </div>\n\n  <div class=\"filters animate-2\">\n    <div class=\"search-box\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.35-4.35\"/></svg>\n      <input type=\"text\" placeholder=\"Search resources\u2026\" [(ngModel)]=\"search\" (input)=\"onSearch()\" />\n    </div>\n    <div class=\"filter-group\">\n      <span class=\"filter-label\">Type</span>\n      <button class=\"tab\" [class.active]=\"filterType==='ALL'\" (click)=\"filterType='ALL';load()\">All</button>\n      <button class=\"tab\" [class.active]=\"filterType==='PDF'\" (click)=\"filterType='PDF';load()\">\uD83D\uDCC4 PDF</button>\n      <button class=\"tab\" [class.active]=\"filterType==='VIDEO'\" (click)=\"filterType='VIDEO';load()\">\uD83C\uDFA5 Video</button>\n      <button class=\"tab\" [class.active]=\"filterType==='EXCEL'\" (click)=\"filterType='EXCEL';load()\">\uD83D\uDCCA Excel</button>\n    </div>\n    <!-- <div class=\"filter-group\">\n      <span class=\"filter-label\">Access</span>\n      <button class=\"tab\" [class.active]=\"filterAccess==='ALL'\" (click)=\"filterAccess='ALL';load()\">All</button>\n      <button class=\"tab\" [class.active]=\"filterAccess==='PUBLIC'\" (click)=\"filterAccess='PUBLIC';load()\">\uD83C\uDF10 Public</button>\n      <button class=\"tab\" [class.active]=\"filterAccess==='PREMIUM'\" (click)=\"filterAccess='PREMIUM';load()\">\uD83D\uDD12 Incubated</button>\n      <button class=\"tab\" [class.active]=\"filterAccess==='INSTITUTIONAL'\" (click)=\"filterAccess='INSTITUTIONAL';load()\">\uD83D\uDC8E Premium</button>\n    </div> -->\n    <div class=\"filter-group\" *ngIf=\"categories.length\">\n      <span class=\"filter-label\">Category</span>\n      <button class=\"tab\" [class.active]=\"filterCategorieId===null\" (click)=\"filterCategorieId=null;load()\">All</button>\n      <button class=\"tab\" *ngFor=\"let c of categories\" [class.active]=\"filterCategorieId===c.id\" (click)=\"filterCategorieId=c.id;load()\">{{ c.icone }} {{ c.nom }}</button>\n    </div>\n  </div>\n\n  <!-- Vue toggle -->\n  <div class=\"view-toggle-row\">\n    <button [class.active]=\"view==='grid'\"    (click)=\"view='grid'\">\n      <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/></svg>\n      Grid\n    </button>\n    <button [class.active]=\"view==='folders'\" (click)=\"view='folders'\">\n      <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/></svg>\n      Folders\n    </button>\n  </div>\n\n  <div *ngIf=\"loading\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">Loading resources\u2026</div>\n  <div *ngIf=\"error\" style=\"padding:16px;background:#FCEBEB;border-radius:8px;color:#791F1F;font-size:13px\">{{ error }}</div>\n\n  <div class=\"res-grid animate-3\" *ngIf=\"view==='grid'\">\n    <div *ngFor=\"let r of ressources\" class=\"res-card kh-card\" (click)=\"openViewer(r)\">\n      <div class=\"res-card__top\">\n        <div class=\"res-icon\">{{ typeIcons[r.type] || '\uD83D\uDCC1' }}</div>\n        <div class=\"res-badges\">\n          <span class=\"kh-badge\" [class]=\"getAccessBadge(r.planType)\">{{ r.planType }}</span>\n          <span *ngIf=\"r.categorie\" class=\"kh-badge kh-badge--gray\">{{ r.categorie.nom }}</span>\n        </div>\n      </div>\n      <h3 class=\"res-titre\">{{ r.titre }}</h3>\n      <p class=\"res-desc\">{{ r.description }}</p>\n      <div class=\"res-meta\">\n        <span>{{ r.tailleFormatee || (r.dureeSec ? (r.dureeSec/60|number:'1.0-0') + ' min' : '') }}</span>\n        <span style=\"color:var(--text-muted)\">{{ r.vues }} views</span>\n      </div>\n      <ng-container *ngIf=\"r.maProgression && r.maProgression.pourcentage > 0\">\n        <div class=\"prog-row\">\n          <span class=\"prog-label\" [style.color]=\"getProgressColor(r.maProgression.statut)\">\n            <ng-container [ngSwitch]=\"r.maProgression.statut\">\n              <ng-container *ngSwitchCase=\"'COMPLETED'\">\u2713 Completed</ng-container>\n              <ng-container *ngSwitchCase=\"'IN_PROGRESS'\">In progress</ng-container>\n              <ng-container *ngSwitchDefault>Not started</ng-container>\n            </ng-container>\n          </span>\n          <span class=\"prog-pct\">{{ r.maProgression.pourcentage }}%</span>\n        </div>\n        <div class=\"kh-progress\">\n          <div class=\"kh-progress__fill\" [style.width.%]=\"r.maProgression.pourcentage\" [style.background]=\"getProgressColor(r.maProgression.statut)\"></div>\n        </div>\n      </ng-container>\n      <div *ngIf=\"r.tags?.length\" class=\"res-tags\">\n        <span *ngFor=\"let t of r.tags\" class=\"res-tag\">{{ t.nom }}</span>\n      </div>\n      <div class=\"res-card-actions\">\n        <div class=\"res-open-hint\">\n          <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>\n          Click to open\n        </div>\n        <button *ngIf=\"r.urlFichier || (r | json).includes('urlExterne')\"\n                class=\"download-btn\"\n                title=\"Download\"\n                (click)=\"$event.stopPropagation(); downloadRessource(r)\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n          Download\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"ressources.length === 0 && !loading\" class=\"empty-state\"><p>No resources found.</p></div>\n  </div>\n</div>\n\n  <!-- \u2550\u2550 VUE DOSSIERS \u2014 m\u00EAme structure que admin \u2550\u2550 -->\n  <div class=\"folders-view animate-3\" *ngIf=\"view==='folders' && !loading\">\n  <ng-container *ngFor=\"let folder of folders\">\n\n    <ng-container *ngIf=\"folder.name !== '__solo__'\">\n      <div class=\"folder-row\" (click)=\"toggleFolder(folder)\">\n        <div class=\"folder-icon-wrap\">\n          <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/>\n          </svg>\n        </div>\n        <div class=\"folder-meta\">\n          <span class=\"folder-name\">{{ folder.name }}</span>\n          <span class=\"folder-count\">{{ folder.fichiers.length }} file{{ folder.fichiers.length > 1 ? 's' : '' }}</span>\n        </div>\n        <svg class=\"folder-chevron\" [class.open]=\"folder.expanded\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n          <polyline points=\"9 18 15 12 9 6\"/>\n        </svg>\n      </div>\n\n      <div class=\"folder-files\" *ngIf=\"folder.expanded\">\n        <div *ngFor=\"let r of folder.fichiers\" class=\"folder-file-row\" (click)=\"openViewer(r)\">\n          <span class=\"ff-icon\">{{ typeIcons[r.type] || '\uD83D\uDCC4' }}</span>\n          \n          <div class=\"ff-info\">\n            <span class=\"ff-name\">{{ r.titre.split(' \u2014 ')[1] || r.titre }}</span>\n            <span class=\"ff-size\">{{ r.tailleFormatee || (r.dureeSec ? (r.dureeSec/60|number:'1.0-0') + ' min' : '') }}</span>\n          </div>\n\n          <div class=\"ff-side-actions\">\n            <span class=\"kh-badge\" [class]=\"getAccessBadge(r.planType)\">\n              {{ r.planType }}\n            </span>\n\n            <div class=\"ff-prog\" *ngIf=\"r.maProgression && r.maProgression.pourcentage > 0\">\n              <span class=\"prog-pct\" [style.color]=\"getProgressColor(r.maProgression.statut)\">\n                {{ r.maProgression.pourcentage }}%\n              </span>\n            </div>\n\n            <button class=\"ff-dl-btn\" \n                    (click)=\"$event.stopPropagation(); downloadRessource(r)\"\n                    *ngIf=\"r.urlFichier || (r | json).includes('urlExterne')\">\n              <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n                <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/>\n              </svg>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"folder.name === '__solo__'\">\n      <div class=\"solo-label\" *ngIf=\"folders.length > 1\">Individual resources</div>\n      <div *ngFor=\"let r of folder.fichiers\" class=\"folder-file-row solo-row\" (click)=\"openViewer(r)\">\n        <span class=\"ff-icon\">{{ typeIcons[r.type] || '\uD83D\uDCC4' }}</span>\n        \n        <div class=\"ff-info\">\n          <span class=\"ff-name\">{{ r.titre }}</span>\n          <span class=\"ff-size\">{{ r.tailleFormatee || (r.dureeSec ? (r.dureeSec/60|number:'1.0-0') + ' min' : '') }}</span>\n        </div>\n\n        <div class=\"ff-side-actions\">\n          <span class=\"kh-badge\" [class]=\"getAccessBadge(r.planType)\">\n            {{ r.planType }}\n          </span>\n\n          <div class=\"ff-prog\" *ngIf=\"r.maProgression && r.maProgression.pourcentage > 0\">\n            <span class=\"prog-pct\" [style.color]=\"getProgressColor(r.maProgression.statut)\">\n              {{ r.maProgression.pourcentage }}%\n            </span>\n          </div>\n\n          <button class=\"ff-dl-btn\" \n                  (click)=\"$event.stopPropagation(); downloadRessource(r)\"\n                  *ngIf=\"r.urlFichier || (r | json).includes('urlExterne')\">\n            <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n              <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n  </ng-container>\n  <p *ngIf=\"folders.length===0\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">No resources found.</p>\n</div>\n\n<!-- \u2550\u2550 VIEWER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"viewer-overlay\" *ngIf=\"showViewer\" (click)=\"$event.target === $event.currentTarget && closeViewer()\">\n  <div class=\"viewer-box\">\n\n    <!-- Header -->\n    <div class=\"viewer-header\">\n      <div class=\"viewer-title\">\n        <span>{{ typeIcons[viewerRessource?.type || 'PDF'] }}</span>\n        <span>{{ viewerRessource?.titre }}</span>\n        <span *ngIf=\"viewerRessource?.maProgression && viewerRessource!.maProgression!.pourcentage > 0\"\n              class=\"viewer-prog-badge\"\n              [style.background]=\"getProgressColor(viewerRessource!.maProgression!.statut) + '22'\"\n              [style.color]=\"getProgressColor(viewerRessource!.maProgression!.statut)\">\n          {{ viewerRessource!.maProgression!.pourcentage }}%\n        </span>\n      </div>\n      <div class=\"viewer-header-right\">\n        <span *ngIf=\"viewerType === 'video'\" class=\"viewer-autosave-info\">\n          <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"20 6 9 17 4 12\"/></svg>\n          Auto-saved every 10s\n        </span>\n        <button *ngIf=\"viewerRessource\"\n                class=\"viewer-dl-btn\"\n                title=\"Download\"\n                (click)=\"downloadRessource(viewerRessource)\">\n          <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n          Download\n        </button>\n        <button class=\"viewer-close\" (click)=\"closeViewer()\">\n          <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>\n        </button>\n      </div>\n    </div>\n\n    <!-- Progress bar -->\n    <div class=\"viewer-prog-bar\" *ngIf=\"viewerRessource?.maProgression && viewerRessource!.maProgression!.pourcentage > 0\">\n      <div class=\"viewer-prog-fill\"\n           [style.width.%]=\"viewerRessource!.maProgression!.pourcentage\"\n           [style.background]=\"getProgressColor(viewerRessource!.maProgression!.statut)\"></div>\n    </div>\n\n    <!-- Loading -->\n    <div *ngIf=\"viewerLoading\" class=\"viewer-loading\">\n      <div class=\"viewer-spinner\"></div>\n      <p>Loading file\u2026</p>\n    </div>\n\n    <!-- \u2500\u2500 VIDEO \u2500\u2500 -->\n    <div class=\"viewer-content\" *ngIf=\"viewerType === 'video' && !viewerLoading\">\n      <video #videoPlayer class=\"viewer-video\" [src]=\"viewerUrl\" controls (loadedmetadata)=\"onVideoLoaded()\" preload=\"metadata\">\n        Your browser does not support HTML5 video.\n      </video>\n      <p class=\"viewer-resume-hint\" *ngIf=\"resumeAt > 0\">\u25B6 Resuming from {{ resumeAt | number:'1.0-0' }}s</p>\n    </div>\n\n    <!-- \u2500\u2500 PDF avec PDF.js \u2014 navigation page par page \u2500\u2500 -->\n    <div class=\"viewer-content viewer-content--pdf\" *ngIf=\"viewerType === 'pdf' && !viewerLoading\">\n\n      <!-- Contr\u00F4les PDF -->\n      <div class=\"pdf-controls\" *ngIf=\"pdfDoc\">\n        <button class=\"pdf-nav-btn\" (click)=\"pdfPrevPage()\" [disabled]=\"pdfCurrentPage <= 1\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"15 18 9 12 15 6\"/></svg>\n        </button>\n        <div class=\"pdf-page-info\">\n          <span class=\"pdf-page-current\">{{ pdfCurrentPage }}</span>\n          <span class=\"pdf-page-sep\">/</span>\n          <span class=\"pdf-page-total\">{{ pdfTotalPages }}</span>\n          <span class=\"pdf-page-label\">pages</span>\n        </div>\n        <button class=\"pdf-nav-btn\" (click)=\"pdfNextPage()\" [disabled]=\"pdfCurrentPage >= pdfTotalPages\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"9 18 15 12 9 6\"/></svg>\n        </button>\n        <!-- Progress inline -->\n        <div class=\"pdf-inline-prog\">\n          <div class=\"kh-progress\" style=\"width:120px\">\n            <div class=\"kh-progress__fill kh-progress__fill--teal\"\n                 [style.width.%]=\"(pdfCurrentPage / pdfTotalPages) * 100\"></div>\n          </div>\n          <span style=\"font-size:11px;font-weight:700;color:var(--teal)\">\n            {{ (pdfCurrentPage / pdfTotalPages * 100) | number:'1.0-0' }}%\n          </span>\n        </div>\n      </div>\n\n      <!-- Canvas PDF.js -->\n      <div class=\"pdf-canvas-wrap\">\n        <canvas #pdfCanvas class=\"pdf-canvas\"></canvas>\n        <div *ngIf=\"!pdfDoc && !viewerLoading\" class=\"viewer-loading\">\n          <div class=\"viewer-spinner\"></div>\n          <p>Rendering PDF\u2026</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- \u2500\u2500 IMAGE \u2500\u2500 -->\n    <div class=\"viewer-content viewer-content--center\" *ngIf=\"viewerType === 'image' && !viewerLoading\">\n      <img *ngIf=\"rawBlobUrl\" [src]=\"rawBlobUrl\" class=\"viewer-img\" alt=\"resource image\" />\n    </div>\n\n    <!-- \u2500\u2500 AUTRE \u2500\u2500 -->\n    <div class=\"viewer-content viewer-content--center\" *ngIf=\"viewerType === 'other'\">\n      <div class=\"viewer-download-prompt\">\n        <span class=\"viewer-dl-icon\">{{ typeIcons[viewerRessource?.type || 'PDF'] }}</span>\n        <h3>{{ viewerRessource?.titre }}</h3>\n        <p>This file type cannot be previewed in the browser.</p>\n        <a [href]=\"viewerUrl\" target=\"_blank\" download class=\"kh-btn kh-btn--primary\">\uD83D\uDCE5 Download file</a>\n      </div>\n    </div>\n\n  </div>\n</div>\n", styles: [".page{display:flex;flex-direction:column;gap:24px}\n.page-header{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.page-sub{color:var(--text-secondary);margin-top:4px}\n.lib-stats{display:flex;gap:12px;flex-wrap:wrap}\n.lib-stat{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:14px 20px;display:flex;flex-direction:column;gap:4px;min-width:100px}\n.lib-stat__val{font-family:'Syne',sans-serif;font-size:22px;font-weight:800}\n.lib-stat__label{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em}\n.filters{display:flex;flex-direction:column;gap:10px}\n.filter-group{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.filter-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);min-width:50px}\n.search-box{display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:8px 14px;width:100%;max-width:360px}\n.search-box input{border:none;outline:none;background:transparent;font-size:13px;flex:1;color:var(--text-primary)}\n.tab{padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}\n.tab.active{background:var(--orange);color:white;border-color:var(--orange)}\n.res-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}\n.res-card{padding:20px;cursor:pointer;transition:all 0.2s;border:1px solid var(--border);border-radius:var(--radius-lg);background:white}\n.res-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.1);border-color:var(--orange)}\n.res-card__top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px}\n.res-icon{font-size:28px}\n.res-badges{display:flex;flex-direction:column;gap:4px;align-items:flex-end}\n.res-titre{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:6px}\n.res-desc{font-size:12px;color:var(--text-secondary);line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.res-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-bottom:10px}\n.prog-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}\n.prog-label{font-size:11px;font-weight:600}\n.prog-pct{font-size:11px;font-weight:700;color:var(--orange)}\n.res-tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}\n.res-tag{padding:2px 8px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;font-size:10px;font-weight:600;color:var(--text-secondary)}\n.res-actions{display:flex;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)}\n.empty-state{grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)}\n.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}\n.modal-box{width:100%;max-width:560px;max-height:90vh;overflow-y:auto;padding:28px}\n.modal-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}\n.modal-header h2{font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-top:4px}\n.modal-icon{font-size:28px;margin-right:10px}\n.modal-close{background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px 8px}\n.modal-desc{font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:20px}\n.modal-meta{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.meta-item{display:flex;flex-direction:column;gap:3px}\n.meta-key{font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);font-weight:600}\n.meta-val{font-size:13px;font-weight:600}\n.modal-progress{margin-top:16px;padding-top:16px;border-top:1px solid var(--border)}\n.modal-footer{display:flex;gap:8px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);flex-wrap:wrap}\n\n/* \u2550\u2550 VIEWER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.res-open-hint{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--text-muted);margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}\n.viewer-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px}\n.viewer-box{background:var(--color-background-primary,#fff);border-radius:16px;width:100%;max-width:1100px;max-height:95vh;display:flex;flex-direction:column;overflow:hidden}\n.viewer-header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--border);flex-shrink:0}\n.viewer-title{display:flex;align-items:center;gap:10px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;overflow:hidden}\n.viewer-title span:first-child{font-size:20px;flex-shrink:0}\n.viewer-title span:nth-child(2){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.viewer-prog-badge{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;flex-shrink:0}\n.viewer-header-right{display:flex;align-items:center;gap:12px;flex-shrink:0}\n.viewer-autosave-info{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--green,#27AE7A);font-weight:600}\n.viewer-close{background:none;border:1px solid var(--border);border-radius:8px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:var(--text-secondary);transition:all 0.15s}\n.viewer-close:hover{background:var(--bg-app);border-color:var(--text-muted)}\n.viewer-prog-bar{height:3px;background:var(--border);flex-shrink:0}\n.viewer-prog-fill{height:100%;transition:width 0.5s ease;border-radius:2px}\n.viewer-content{flex:1;overflow:hidden;display:flex;flex-direction:column;min-height:0}\n.viewer-content--center{align-items:center;justify-content:center;padding:40px}\n.viewer-video{width:100%;height:100%;object-fit:contain;background:#000;min-height:0}\n.viewer-iframe{flex:1;width:100%;border:none;min-height:500px}\n.viewer-img{max-width:100%;max-height:100%;object-fit:contain;border-radius:8px}\n.viewer-resume-hint{padding:8px 16px;font-size:12px;color:var(--teal,#2ABFBF);font-weight:600;background:rgba(42,191,191,0.08);text-align:center;flex-shrink:0}\n.viewer-download-prompt{text-align:center;display:flex;flex-direction:column;align-items:center;gap:16px}\n.viewer-dl-icon{font-size:56px}\n.viewer-download-prompt h3{font-family:'Syne',sans-serif;font-size:20px;font-weight:700}\n.viewer-download-prompt p{color:var(--text-secondary);font-size:14px}\n\n.viewer-loading{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:var(--text-muted)}\n.viewer-spinner{width:36px;height:36px;border:3px solid var(--border);border-top-color:var(--orange);border-radius:50%;animation:spin 0.8s linear infinite}\n@keyframes spin{to{transform:rotate(360deg)}}\n\n/* PDF viewer */\n.viewer-content--pdf{flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0}\n.pdf-controls{display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid var(--border);flex-shrink:0;background:var(--bg-app)}\n.pdf-nav-btn{width:32px;height:32px;border:1px solid var(--border);border-radius:8px;background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;color:var(--text-secondary)}\n.pdf-nav-btn:hover:not(:disabled){background:var(--orange);color:white;border-color:var(--orange)}\n.pdf-nav-btn:disabled{opacity:0.35;cursor:not-allowed}\n.pdf-page-info{display:flex;align-items:baseline;gap:4px;font-size:13px}\n.pdf-page-current{font-weight:800;font-family:'Syne',sans-serif;font-size:16px;color:var(--orange)}\n.pdf-page-sep{color:var(--text-muted)}\n.pdf-page-total{font-weight:600}\n.pdf-page-label{font-size:11px;color:var(--text-muted)}\n.pdf-inline-prog{display:flex;align-items:center;gap:8px;margin-left:auto}\n.pdf-canvas-wrap{flex:1;overflow:auto;display:flex;justify-content:center;padding:16px;background:#525659}\n.pdf-canvas{display:block;box-shadow:0 4px 20px rgba(0,0,0,0.3);border-radius:2px;max-width:100%}\n\n/* Card download button */\n.res-card-actions{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}\n.res-open-hint{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--text-muted)}\n.download-btn{display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;border:1px solid var(--border);background:white;color:var(--text-secondary);cursor:pointer;transition:all 0.15s}\n.download-btn:hover{background:var(--orange);color:white;border-color:var(--orange)}\n\n/* Viewer download button */\n.viewer-dl-btn{display:flex;align-items:center;gap:6px;padding:6px 14px;border:1px solid var(--border);border-radius:8px;background:white;cursor:pointer;font-size:12px;font-weight:600;color:var(--text-secondary);transition:all 0.15s}\n.viewer-dl-btn:hover{background:var(--orange);color:white;border-color:var(--orange)}\n\n/* Folders view */\n.view-toggle-row{display:flex;gap:6px;margin-bottom:4px}\n.view-toggle-row button{display:flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}\n.view-toggle-row button.active{background:var(--orange);color:white;border-color:var(--orange)}\n.folders-view{display:flex;flex-direction:column;gap:4px}\n.folder-row{display:flex;align-items:center;gap:12px;padding:12px 16px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);cursor:pointer;transition:all 0.15s}\n.folder-row:hover{border-color:var(--orange);background:#FFF8F5}\n.folder-icon-wrap{color:var(--orange);flex-shrink:0}\n.folder-meta{flex:1;display:flex;align-items:center;gap:10px}\n.folder-name{font-family:'Syne',sans-serif;font-weight:700;font-size:14px}\n.folder-count{font-size:11px;color:var(--text-muted);background:var(--bg-app);border:1px solid var(--border);border-radius:10px;padding:2px 8px}\n.folder-chevron{color:var(--text-muted);transition:transform 0.2s;flex-shrink:0}\n.folder-chevron.open{transform:rotate(90deg)}\n.folder-files{margin-left:20px;border-left:2px solid var(--border);padding-left:10px;display:flex;flex-direction:column;gap:3px;margin-bottom:6px}\n.folder-file-row{display:flex;align-items:center;gap:16px;padding:9px 12px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;transition:all 0.15s}\n.folder-file-row:hover{border-color:var(--teal);background:#F5FFFD}\n.ff-icon{font-size:16px;flex-shrink:0}\n.ff-info{flex: 1; \n    min-width: 0;\n    display: flex;\n    align-items: center;\n    gap: 12px;}\n.ff-name{font-size:13px;font-weight:600;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}\n.ff-meta{font-size:11px;color:var(--text-muted)}\n.ff-prog{display:flex;align-items:center;gap:6px;flex-shrink:0}\n.ff-dl-btn{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 6px;cursor:pointer;color:var(--text-secondary);transition:all 0.15s;flex-shrink:0;display:flex;align-items:center}\n.ff-dl-btn:hover{background:var(--orange);color:white;border-color:var(--orange)}\n.solo-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);padding:8px 4px 4px}\n.solo-row{margin-bottom:3px}\n/* Style pour la taille du fichier (en gris \u00E0 c\u00F4t\u00E9 du nom) */\n.ff-size {\n    font-size: 12px;\n    color: var(--text-muted);\n    min-width: 70px; /* Taille fixe pour l'alignement */\n}\n\n/* Alignement des badges et boutons \u00E0 droite */\n.ff-side-actions {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    flex-shrink: 0;\n}\n\n/* Ajustement du bouton de t\u00E9l\u00E9chargement */\n.ff-dl-btn {\n    background: white;\n    border: 1px solid var(--border);\n    border-radius: 6px;\n    padding: 6px;\n    cursor: pointer;\n    color: var(--text-secondary);\n    transition: all 0.15s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ff-dl-btn:hover {\n    background: var(--orange);\n    color: white;\n    border-color: var(--orange);\n}\n"] }]
    }], () => [{ type: i1.RessourceService }, { type: i2.DomSanitizer }, { type: i0.NgZone }], { videoPlayerRef: [{
            type: ViewChild,
            args: ['videoPlayer']
        }], pdfCanvasRef: [{
            type: ViewChild,
            args: ['pdfCanvas']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoachBibliothequeComponent, { className: "CoachBibliothequeComponent", filePath: "app\\features\\coach\\bibliotheque\\bibliotheque.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=bibliotheque.component.js.map