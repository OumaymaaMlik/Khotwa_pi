import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/ressource.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function AdminBibliothequeComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtext(1, "Loading\u2026");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_78_tr_23_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("border-color", r_r2.categorie.couleur)("color", r_r2.categorie.couleur);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", r_r2.categorie.icone, " ", r_r2.categorie.nom, "");
} }
function AdminBibliothequeComponent_div_78_tr_23_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_78_tr_23_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r3.nom);
} }
function AdminBibliothequeComponent_div_78_tr_23_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, AdminBibliothequeComponent_div_78_tr_23_div_20_span_1_Template, 2, 1, "span", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", r_r2.tags);
} }
function AdminBibliothequeComponent_div_78_tr_23_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_78_tr_23_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_78_tr_23_button_35_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const r_r2 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.downloadRessource(r_r2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 7);
    i0.ɵɵelement(2, "path", 71)(3, "polyline", 72)(4, "line", 73);
    i0.ɵɵelementEnd()();
} }
function AdminBibliothequeComponent_div_78_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 44)(3, "span", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "p", 46);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 47);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "td")(11, "span", 48);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td")(14, "span", 49);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtemplate(17, AdminBibliothequeComponent_div_78_tr_23_span_17_Template, 2, 6, "span", 50)(18, AdminBibliothequeComponent_div_78_tr_23_span_18_Template, 2, 0, "span", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtemplate(20, AdminBibliothequeComponent_div_78_tr_23_div_20_Template, 2, 1, "div", 52)(21, AdminBibliothequeComponent_div_78_tr_23_span_21_Template, 2, 0, "span", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td", 53);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td", 54);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td")(27, "button", 55);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_78_tr_23_Template_button_click_27_listener() { const r_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.togglePublie(r_r2)); });
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "td")(30, "div", 56)(31, "button", 57);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_78_tr_23_Template_button_click_31_listener() { const r_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openEdit(r_r2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(32, "svg", 7);
    i0.ɵɵelement(33, "path", 58)(34, "path", 59);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(35, AdminBibliothequeComponent_div_78_tr_23_button_35_Template, 5, 0, "button", 60);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(36, "button", 61);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_78_tr_23_Template_button_click_36_listener() { const r_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.confirmDelete(r_r2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(37, "svg", 7);
    i0.ɵɵelement(38, "polyline", 62)(39, "path", 63)(40, "path", 64);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.typeIcons[r_r2.type]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r2.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r2.nomFichierOriginal);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r2.type);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r3.getAccessBadge(r_r2.planType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r2.planType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", r_r2.categorie);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !r_r2.categorie);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", r_r2.tags == null ? null : r_r2.tags.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(r_r2.tags == null ? null : r_r2.tags.length));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r2.tailleFormatee || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r2.vues);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("published", r_r2.publie);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r2.publie ? "Published" : "Draft");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", r_r2.urlFichier);
} }
function AdminBibliothequeComponent_div_78_tr_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 74);
    i0.ɵɵtext(2, "No resources found");
    i0.ɵɵelementEnd()();
} }
function AdminBibliothequeComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Resource");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Access");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Size");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Views");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "tbody");
    i0.ɵɵtemplate(23, AdminBibliothequeComponent_div_78_tr_23_Template, 41, 17, "tr", 42)(24, AdminBibliothequeComponent_div_78_tr_24_Template, 3, 0, "tr", 43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(23);
    i0.ɵɵproperty("ngForOf", ctx_r3.ressources);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.ressources.length === 0);
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const r_r9 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.downloadRessource(r_r9)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 92);
    i0.ɵɵelement(2, "path", 71)(3, "polyline", 72)(4, "line", 73);
    i0.ɵɵelementEnd()();
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 87)(1, "span", 88);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89)(4, "span", 90);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 91);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 55);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template_button_click_10_listener() { const r_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.togglePublie(r_r9)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 56)(13, "button", 57);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template_button_click_13_listener() { const r_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.openEdit(r_r9)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(14, "svg", 92);
    i0.ɵɵelement(15, "path", 58)(16, "path", 59);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_button_17_Template, 5, 0, "button", 60);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "button", 61);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template_button_click_18_listener() { const r_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r3 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r3.confirmDelete(r_r9)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(19, "svg", 92);
    i0.ɵɵelement(20, "polyline", 62)(21, "path", 63)(22, "path", 64);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.typeIcons[r_r9.type]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r9.titre.split(" \u2014 ")[1] || r_r9.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r9.tailleFormatee || r_r9.type);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r3.getAccessBadge(r_r9.planType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r9.planType);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("published", r_r9.publie);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r9.publie ? "Published" : "Draft");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", r_r9.urlFichier);
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtemplate(1, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_div_1_Template, 23, 10, "div", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const folder_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", folder_r7.fichiers);
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 76);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r6); const folder_r7 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.toggleFolder(folder_r7)); });
    i0.ɵɵelementStart(2, "div", 77);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 78);
    i0.ɵɵelement(4, "path", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div", 79)(6, "span", 80);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 81);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 82);
    i0.ɵɵelement(11, "polyline", 83);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_div_12_Template, 2, 1, "div", 84);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const folder_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(folder_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", folder_r7.fichiers.length, " file", folder_r7.fichiers.length > 1 ? "s" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("open", folder_r7.expanded);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", folder_r7.expanded);
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95);
    i0.ɵɵtext(1, "Individual files");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 97);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const r_r12 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.downloadRessource(r_r12)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 92);
    i0.ɵɵelement(2, "path", 71)(3, "polyline", 72)(4, "line", 73);
    i0.ɵɵelementEnd()();
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "span", 88);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 89)(4, "span", 90);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 91);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 49);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 55);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template_button_click_10_listener() { const r_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.togglePublie(r_r12)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 56)(13, "button", 97);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template_button_click_13_listener() { const r_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.openEdit(r_r12)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(14, "svg", 92);
    i0.ɵɵelement(15, "path", 58)(16, "path", 59);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_button_17_Template, 5, 0, "button", 98);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "button", 99);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template_button_click_18_listener() { const r_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.confirmDelete(r_r12)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(19, "svg", 92);
    i0.ɵɵelement(20, "polyline", 62)(21, "path", 63)(22, "path", 64);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.typeIcons[r_r12.type]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r12.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r12.tailleFormatee || r_r12.type);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r3.getAccessBadge(r_r12.planType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r12.planType);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("published", r_r12.publie);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r12.publie ? "Published" : "Draft");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", r_r12.urlFichier);
} }
function AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_1_Template, 2, 0, "div", 93)(2, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_div_2_Template, 23, 10, "div", 94);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const folder_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.folders.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", folder_r7.fichiers);
} }
function AdminBibliothequeComponent_div_79_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_1_Template, 13, 6, "ng-container", 43)(2, AdminBibliothequeComponent_div_79_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 43);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const folder_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", folder_r7.name !== "__solo__");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", folder_r7.name === "__solo__");
} }
function AdminBibliothequeComponent_div_79_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵtext(1, "No resources found");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵtemplate(1, AdminBibliothequeComponent_div_79_ng_container_1_Template, 3, 2, "ng-container", 42)(2, AdminBibliothequeComponent_div_79_p_2_Template, 2, 0, "p", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.folders);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.folders.length === 0);
} }
function AdminBibliothequeComponent_div_80_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", t_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r3.typeIcons[t_r15], " ", t_r15, "");
} }
function AdminBibliothequeComponent_div_80_option_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r16.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", c_r16.icone, " ", c_r16.nom, "");
} }
function AdminBibliothequeComponent_div_80_div_43_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 130);
    i0.ɵɵtext(1, "\u2014 select multiple PDFs for a course folder");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_80_div_43_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 131);
    i0.ɵɵelement(2, "path", 71)(3, "polyline", 132)(4, "line", 133);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 134);
    i0.ɵɵtext(8, "Up to 500 MB per file");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Click to select ", ctx_r3.form.type === "PDF" && !ctx_r3.isEditing ? "one or more PDFs" : "a file", "");
} }
function AdminBibliothequeComponent_div_80_div_43_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 137)(1, "span", 138);
    i0.ɵɵtext(2, "\uD83D\uDCCE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 139);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 140);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 141);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_div_43_div_8_div_1_Template_button_click_7_listener($event) { const i_r20 = i0.ɵɵrestoreView(_r19).index; const ctx_r3 = i0.ɵɵnextContext(4); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r3.removeFile(i_r20)); });
    i0.ɵɵtext(8, "\u2715");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r21 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(f_r21.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatSize(f_r21.size));
} }
function AdminBibliothequeComponent_div_80_div_43_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 135);
    i0.ɵɵtemplate(1, AdminBibliothequeComponent_div_80_div_43_div_8_div_1_Template, 9, 2, "div", 136);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.selectedFiles);
} }
function AdminBibliothequeComponent_div_80_div_43_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 142);
    i0.ɵɵtext(1, "(click to add more)");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_80_div_43_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 143)(1, "div", 144);
    i0.ɵɵtext(2, "\uD83D\uDCDA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 145)(4, "label");
    i0.ɵɵtext(5, "Course / Folder name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 146);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_43_div_10_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r3 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r3.courseName, $event) || (ctx_r3.courseName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 147);
    i0.ɵɵtext(8, " Files will be grouped as: ");
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, ", ");
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, "\u2026 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.courseName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r3.courseName || ctx_r3.form.titre || "\u2026", " \u2014 chapitre1.pdf");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r3.courseName || ctx_r3.form.titre || "\u2026", " \u2014 chapitre2.pdf");
} }
function AdminBibliothequeComponent_div_80_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 106)(1, "label");
    i0.ɵɵtext(2, " File Upload ");
    i0.ɵɵtemplate(3, AdminBibliothequeComponent_div_80_div_43_span_3_Template, 2, 0, "span", 124);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 125);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_div_43_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r17); const fileInput_r18 = i0.ɵɵreference(6); return i0.ɵɵresetView(fileInput_r18.click()); });
    i0.ɵɵelementStart(5, "input", 126, 0);
    i0.ɵɵlistener("change", function AdminBibliothequeComponent_div_80_div_43_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onFileChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AdminBibliothequeComponent_div_80_div_43_ng_container_7_Template, 9, 1, "ng-container", 43)(8, AdminBibliothequeComponent_div_80_div_43_div_8_Template, 2, 1, "div", 127)(9, AdminBibliothequeComponent_div_80_div_43_span_9_Template, 2, 0, "span", 128);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, AdminBibliothequeComponent_div_80_div_43_div_10_Template, 15, 3, "div", 129);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.form.type === "PDF" && !ctx_r3.isEditing);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("multiple", ctx_r3.form.type === "PDF" && !ctx_r3.isEditing)("accept", ctx_r3.form.type === "PDF" ? ".pdf,application/pdf" : "*");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFiles.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFiles.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFiles.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFiles.length > 1);
} }
function AdminBibliothequeComponent_div_80_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 106)(1, "label");
    i0.ɵɵtext(2, "External URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 148);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_44_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.form.urlExterne, $event) || (ctx_r3.form.urlExterne = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.urlExterne);
} }
function AdminBibliothequeComponent_div_80_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 109)(1, "label");
    i0.ɵɵtext(2, "Duration (seconds)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 149);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_45_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.form.dureeSec, $event) || (ctx_r3.form.dureeSec = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.dureeSec);
} }
function AdminBibliothequeComponent_div_80_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 109)(1, "label");
    i0.ɵɵtext(2, "Number of pages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 150);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_div_46_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r3 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r3.form.nombrePages, $event) || (ctx_r3.form.nombrePages = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.nombrePages);
} }
function AdminBibliothequeComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showForm = false); });
    i0.ɵɵelementStart(1, "div", 101);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r14); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 102)(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 103);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showForm = false); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 104)(8, "div", 105)(9, "div", 106)(10, "label");
    i0.ɵɵtext(11, "Title *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 107);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.titre, $event) || (ctx_r3.form.titre = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 106)(14, "label");
    i0.ɵɵtext(15, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "textarea", 108);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_textarea_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.description, $event) || (ctx_r3.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 109)(18, "label");
    i0.ɵɵtext(19, "Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.type, $event) || (ctx_r3.form.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_20_listener() { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onTypeChange()); });
    i0.ɵɵtemplate(21, AdminBibliothequeComponent_div_80_option_21_Template, 2, 3, "option", 111);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 109)(23, "label");
    i0.ɵɵtext(24, "Plan Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.planType, $event) || (ctx_r3.form.planType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(26, "option", 112);
    i0.ɵɵtext(27, "\uD83C\uDF10 Free");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 113);
    i0.ɵɵtext(29, "\uD83D\uDC8E Premium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 114);
    i0.ɵɵtext(31, "\uD83C\uDFDB\uFE0F Institutional");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 109)(33, "label");
    i0.ɵɵtext(34, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "select", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_select_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.categorieId, $event) || (ctx_r3.form.categorieId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(36, "option", 115);
    i0.ɵɵtext(37, "\u2014 None \u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(38, AdminBibliothequeComponent_div_80_option_38_Template, 2, 3, "option", 111);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 109)(40, "label");
    i0.ɵɵtext(41, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "input", 116);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.tags, $event) || (ctx_r3.form.tags = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(43, AdminBibliothequeComponent_div_80_div_43_Template, 11, 7, "div", 117)(44, AdminBibliothequeComponent_div_80_div_44_Template, 4, 1, "div", 117)(45, AdminBibliothequeComponent_div_80_div_45_Template, 4, 1, "div", 118)(46, AdminBibliothequeComponent_div_80_div_46_Template, 4, 1, "div", 118);
    i0.ɵɵelementStart(47, "div", 106)(48, "label", 119)(49, "input", 120);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_80_Template_input_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.form.publie, $event) || (ctx_r3.form.publie = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "span");
    i0.ɵɵtext(51, "Publish immediately");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(52, "div", 121)(53, "button", 122);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitForm()); });
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "button", 6);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_80_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r14); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showForm = false); });
    i0.ɵɵtext(56, "Cancel");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.isEditing ? "Edit Resource" : "Add New Resource");
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.titre);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.types);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.planType);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.categorieId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.categories);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.tags);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.form.type !== "LINK");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.form.type === "LINK");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.form.type === "VIDEO");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.form.type === "PDF" || ctx_r3.form.type === "WORD");
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.form.publie);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r3.form.titre);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.isEditing ? "Save Changes" : ctx_r3.selectedFiles.length > 1 ? "Upload " + ctx_r3.selectedFiles.length + " files" : "Add Resource", " ");
} }
function AdminBibliothequeComponent_div_81_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 161);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r3 = i0.ɵɵnextContext(2); ctx_r3.editingCatId = null; return i0.ɵɵresetView(ctx_r3.catForm = { nom: "", description: "", couleur: "#E8622A", icone: "\uD83D\uDCC1" }); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_81_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 162);
    i0.ɵɵelement(1, "div", 163);
    i0.ɵɵelementStart(2, "span", 164);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 165);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 166)(7, "button", 97);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_div_16_Template_button_click_7_listener() { const c_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.editCategorie(c_r29)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 92);
    i0.ɵɵelement(9, "path", 58)(10, "path", 59);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "button", 99);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_div_16_Template_button_click_11_listener() { const c_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteCategorie(c_r29)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(12, "svg", 92);
    i0.ɵɵelement(13, "polyline", 62)(14, "path", 63)(15, "path", 64);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const c_r29 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", c_r29.couleur);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r29.icone);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r29.nom);
} }
function AdminBibliothequeComponent_div_81_p_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 167);
    i0.ɵɵtext(1, "No categories yet");
    i0.ɵɵelementEnd();
} }
function AdminBibliothequeComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeCatPanel()); });
    i0.ɵɵelementStart(1, "div", 151);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r26); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 102)(3, "h2");
    i0.ɵɵtext(4, "Manage Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 103);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeCatPanel()); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 104)(8, "div", 152)(9, "input", 153);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_81_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.catForm.nom, $event) || (ctx_r3.catForm.nom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 154);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_81_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.catForm.icone, $event) || (ctx_r3.catForm.icone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 155);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_div_81_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.catForm.couleur, $event) || (ctx_r3.catForm.couleur = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 156);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_81_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r26); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitCategorie()); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, AdminBibliothequeComponent_div_81_button_14_Template, 2, 0, "button", 157);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 158);
    i0.ɵɵtemplate(16, AdminBibliothequeComponent_div_81_div_16_Template, 16, 4, "div", 159)(17, AdminBibliothequeComponent_div_81_p_17_Template, 2, 0, "p", 160);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.catForm.nom);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.catForm.icone);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.catForm.couleur);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r3.catForm.nom);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.editingCatId ? "Save" : "Add", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.editingCatId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.categories);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.categories.length === 0);
} }
function AdminBibliothequeComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_82_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cancelDelete()); });
    i0.ɵɵelementStart(1, "div", 168);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_82_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r30); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 169);
    i0.ɵɵtext(3, "\uD83D\uDDD1\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5, "Delete resource?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "You are about to delete ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, ". This cannot be undone.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 170)(12, "button", 171);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_82_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.doDelete()); });
    i0.ɵɵtext(13, "Yes, delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 6);
    i0.ɵɵlistener("click", function AdminBibliothequeComponent_div_82_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r30); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cancelDelete()); });
    i0.ɵɵtext(15, "Cancel");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r3.deleteTarget == null ? null : ctx_r3.deleteTarget.titre);
} }
export class AdminBibliothequeComponent {
    constructor(ressourceService) {
        this.ressourceService = ressourceService;
        this.view = 'table';
        this.ressources = [];
        this.folders = [];
        this.categories = [];
        this.loading = false;
        this.error = '';
        this.filterType = 'ALL';
        this.filterAccess = 'ALL';
        this.filterPublie = 'ALL';
        this.filterCategorieId = null;
        this.search = '';
        this.showForm = false;
        this.isEditing = false;
        this.editId = null;
        this.showDeleteConfirm = false;
        this.deleteTarget = null;
        this.form = this.emptyForm();
        this.selectedFiles = [];
        this.courseName = '';
        this.showCatPanel = false;
        this.catForm = { nom: '', description: '', couleur: '#E8622A', icone: '📁' };
        this.editingCatId = null;
        this.typeIcons = { PDF: '📄', VIDEO: '🎥', EXCEL: '📊', WORD: '📝', IMAGE: '🖼️', LINK: '🔗' };
        this.types = ['PDF', 'VIDEO', 'EXCEL', 'WORD', 'IMAGE', 'LINK'];
        this.planTypes = ['FREE', 'PREMIUM', 'INSTITUTIONAL'];
        this.statsData = {};
    }
    ngOnInit() { this.loadCategories(); this.loadStats(); this.load(); }
    emptyForm() {
        return { titre: '', description: '', type: 'PDF',
            planType: 'FREE', categorieId: null,
            tags: '', dureeSec: null, nombrePages: null,
            publie: true, urlExterne: '' };
    }
    load() {
        this.loading = true;
        this.error = '';
        const filters = { type: this.filterType, access: this.filterAccess, search: this.search };
        if (this.filterCategorieId)
            filters.categorieId = this.filterCategorieId;
        this.ressourceService.getRessourcesHttp(filters).subscribe({
            next: res => {
                const list = res.data ?? res;
                const detailCalls = list.map(r => this.ressourceService.getRessourceByIdHttp(r.id, 1, 'ADMIN').pipe(catchError(() => of(null))));
                if (detailCalls.length === 0) {
                    this.ressources = [];
                    this.folders = [];
                    this.loading = false;
                    return;
                }
                forkJoin(detailCalls).subscribe({
                    next: (details) => {
                        this.ressources = list.map((r, i) => {
                            const d = details[i]?.data?.ressource ?? details[i]?.data ?? null;
                            const tags = details[i]?.data?.tags ?? d?.tags ?? r.tags ?? [];
                            const prog = details[i]?.data?.maProgression ?? d?.maProgression ?? r.maProgression;
                            return { ...r, tags, maProgression: prog };
                        });
                        this.buildFolders();
                        this.loading = false;
                    },
                    error: () => { this.ressources = list; this.buildFolders(); this.loading = false; }
                });
            },
            error: () => { this.loading = false; }
        });
    }
    buildFolders() {
        const map = new Map();
        const solo = [];
        this.ressources.forEach(r => {
            const sep = r.titre.indexOf(' — ');
            if (sep > -1) {
                const key = r.titre.substring(0, sep).trim();
                if (!map.has(key))
                    map.set(key, []);
                map.get(key).push(r);
            }
            else {
                solo.push(r);
            }
        });
        this.folders = [];
        map.forEach((fichiers, name) => {
            if (fichiers.length > 1) {
                this.folders.push({ name, fichiers, expanded: false });
            }
            else {
                solo.push(...fichiers);
            }
        });
        if (solo.length > 0) {
            this.folders.push({ name: '__solo__', fichiers: solo, expanded: true });
        }
    }
    toggleFolder(f) { f.expanded = !f.expanded; }
    onSearch() { this.load(); }
    openCreate() {
        this.form = this.emptyForm();
        this.isEditing = false;
        this.editId = null;
        this.selectedFiles = [];
        this.courseName = '';
        this.showForm = true;
    }
    openEdit(r) {
        this.form = {
            titre: r.titre, description: r.description, type: r.type, planType: r.planType,
            categorieId: r.categorie?.id || null,
            tags: r.tags?.map((t) => t.nom).join(', ') || '',
            dureeSec: r.dureeSec || null, nombrePages: r.nombrePages || null,
            publie: r.publie, urlExterne: r.urlExterne || ''
        };
        this.isEditing = true;
        this.editId = r.id;
        this.selectedFiles = [];
        this.showForm = true;
    }
    onTypeChange() {
        this.selectedFiles = [];
        this.courseName = '';
    }
    onFileChange(e) {
        const newFiles = Array.from(e.target.files);
        // Accumulate files — adding to existing selection rather than replacing
        const existing = this.selectedFiles.map(f => f.name);
        const toAdd = newFiles.filter(f => !existing.includes(f.name));
        this.selectedFiles = [...this.selectedFiles, ...toAdd];
        e.target.value = '';
    }
    removeFile(i) { this.selectedFiles.splice(i, 1); }
    formatSize(bytes) {
        if (bytes < 1024)
            return bytes + ' B';
        if (bytes < 1048576)
            return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    }
    submitForm() {
        if (!this.form.titre)
            return;
        if (this.isEditing && this.editId) {
            const body = {
                titre: this.form.titre, description: this.form.description,
                planType: this.form.planType, publie: this.form.publie,
                urlExterne: this.form.urlExterne
            };
            if (this.form.categorieId)
                body.categorieId = this.form.categorieId;
            if (this.form.tags)
                body.tags = this.form.tags.split(',').map((t) => t.trim()).filter(Boolean);
            if (this.form.dureeSec)
                body.dureeSec = this.form.dureeSec;
            if (this.form.nombrePages)
                body.nombrePages = this.form.nombrePages;
            this.ressourceService.updateRessourceHttp(this.editId, body).subscribe({
                next: () => { this.showForm = false; this.load(); this.loadStats(); },
                error: err => alert('Error: ' + (err.error?.message || 'Server error'))
            });
            return;
        }
        const files = this.selectedFiles.length > 0 ? this.selectedFiles : [null];
        const isMulti = this.selectedFiles.length > 1;
        const courseTitle = isMulti && this.courseName.trim() ? this.courseName.trim() : this.form.titre;
        let completed = 0;
        const total = files.length;
        for (const file of files) {
            const fd = this.ressourceService.buildFormData(this.form, file);
            if (isMulti && file) {
                const fileLabel = file.name.replace(/\.[^/.]+$/, '');
                fd.set('titre', courseTitle + ' — ' + fileLabel);
                fd.set('description', this.form.description || ('Part of: ' + courseTitle));
            }
            this.ressourceService.createRessourceHttp(fd, 1).subscribe({
                next: () => { completed++; if (completed === total) {
                    this.showForm = false;
                    this.courseName = '';
                    this.load();
                    this.loadStats();
                } },
                error: err => alert('Error: ' + (err.error?.message || 'Server error'))
            });
        }
    }
    confirmDelete(r) { this.deleteTarget = r; this.showDeleteConfirm = true; }
    doDelete() {
        if (!this.deleteTarget)
            return;
        this.ressourceService.deleteRessourceHttp(this.deleteTarget.id).subscribe({
            next: () => { this.load(); this.loadStats(); },
            error: err => alert('Error: ' + (err.error?.message || 'Server error'))
        });
        this.showDeleteConfirm = false;
        this.deleteTarget = null;
    }
    cancelDelete() { this.showDeleteConfirm = false; this.deleteTarget = null; }
    togglePublie(r) {
        this.ressourceService.togglePublieHttp(r.id).subscribe({ next: () => this.load() });
    }
    downloadRessource(r) {
        const url = r.urlFichier?.startsWith('http') ? r.urlFichier
            : r.urlFichier ? `/khotwa${r.urlFichier.startsWith('/') ? '' : '/'}${r.urlFichier}`
                : r.urlExterne ?? '';
        if (!url) {
            alert('No file attached.');
            return;
        }
        fetch(url, { headers: { 'X-User-Id': '1', 'X-User-Role': 'ADMIN' } })
            .then(res => res.blob())
            .then(blob => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = r.nomFichierOriginal || r.titre; a.click(); URL.revokeObjectURL(a.href); })
            .catch(() => window.open(url, '_blank'));
    }
    loadStats() { this.ressourceService.getStatsHttp(1).subscribe({ next: r => this.statsData = r.data ?? {}, error: () => { } }); }
    get stats() { return this.statsData; }
    loadCategories() {
        this.ressourceService.getCategoriesHttp().subscribe({
            next: (res) => {
                this.categories = res.data ?? [];
            },
            error: (err) => {
                console.error('Erreur lors du chargement des catégories', err);
                this.categories = [];
                this.error = "Impossible de charger les catégories.";
            }
        });
    }
    openCatPanel() { this.showCatPanel = true; this.catForm = { nom: '', description: '', couleur: '#E8622A', icone: '📁' }; this.editingCatId = null; }
    closeCatPanel() { this.showCatPanel = false; }
    editCategorie(c) {
        this.editingCatId = c.id;
        this.catForm = { nom: c.nom, description: c.description || '', couleur: c.couleur || '#E8622A', icone: c.icone || '📁' };
    }
    submitCategorie() {
        if (!this.catForm.nom)
            return;
        if (this.editingCatId) {
            this.ressourceService.updateCategorieHttp(this.editingCatId, this.catForm).subscribe({
                next: () => { this.editingCatId = null; this.catForm = { nom: '', description: '', couleur: '#E8622A', icone: '📁' }; this.loadCategories(); },
                error: () => this.loadCategories()
            });
        }
        else {
            this.ressourceService.createCategorieHttp(this.catForm).subscribe({
                next: () => { this.catForm = { nom: '', description: '', couleur: '#E8622A', icone: '📁' }; this.loadCategories(); },
                error: () => this.loadCategories()
            });
        }
    }
    deleteCategorie(c) {
        if (!confirm(`Delete category "${c.nom}"?`))
            return;
        this.ressourceService.deleteCategorieHttp(c.id).subscribe({
            next: () => this.loadCategories(), error: () => this.loadCategories()
        });
    }
    getAccessBadge(a) {
        return a === 'FREE' ? 'kh-badge--green' : a === 'PREMIUM' ? 'kh-badge--amber' : 'kh-badge--violet';
    }
    getProgressColor(s) {
        return s === 'COMPLETED' ? 'var(--green)' : s === 'IN_PROGRESS' ? 'var(--teal)' : 'var(--text-muted)';
    }
    static { this.ɵfac = function AdminBibliothequeComponent_Factory(t) { return new (t || AdminBibliothequeComponent)(i0.ɵɵdirectiveInject(i1.RessourceService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminBibliothequeComponent, selectors: [["app-admin-bibliotheque"]], decls: 83, vars: 27, consts: [["fileInput", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "page-sub"], [1, "header-actions"], [1, "kh-btn", "kh-btn--ghost", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "view-toggle"], [3, "click"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"], [1, "kh-btn", "kh-btn--primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "kpi-row", "animate-2"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-value", 2, "color", "var(--green)"], [1, "kpi-value", 2, "color", "var(--teal)"], [1, "kpi-value", 2, "color", "var(--violet)"], [1, "kpi-value", 2, "color", "#E84A4A"], [1, "filters", "animate-2"], [1, "search-box"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search by title\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "filter-chips"], [1, "tab", 3, "click"], ["style", "text-align:center;padding:40px;color:var(--text-muted)", 4, "ngIf"], ["class", "table-wrap animate-3", 4, "ngIf"], ["class", "folders-view animate-3", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "table-wrap", "animate-3"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "res-name-cell"], [1, "res-type-icon"], [2, "font-weight", "600", "font-size", "13px"], [2, "font-size", "11px", "color", "var(--text-muted)"], [1, "kh-badge", "kh-badge--gray"], [1, "kh-badge"], ["class", "cat-chip", 3, "borderColor", "color", 4, "ngIf"], ["style", "color:var(--text-muted);font-size:12px", 4, "ngIf"], ["class", "res-tags", 4, "ngIf"], [2, "font-size", "12px", "color", "var(--text-muted)"], [2, "font-size", "12px"], [1, "status-toggle", 3, "click"], [1, "actions"], ["title", "Edit", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["class", "kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon", "title", "Download", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6M14 11v6"], [1, "cat-chip"], [2, "color", "var(--text-muted)", "font-size", "12px"], [1, "res-tags"], ["class", "res-tag", 4, "ngFor", "ngForOf"], [1, "res-tag"], ["title", "Download", 1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["colspan", "9", 2, "text-align", "center", "padding", "40px", "color", "var(--text-muted)"], [1, "folders-view", "animate-3"], [1, "folder-row", 3, "click"], [1, "folder-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "folder-info"], [1, "folder-name"], [1, "folder-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "folder-chevron"], ["points", "9 18 15 12 9 6"], ["class", "folder-files", 4, "ngIf"], [1, "folder-files"], ["class", "folder-file-row", 4, "ngFor", "ngForOf"], [1, "folder-file-row"], [1, "folder-file-icon"], [1, "folder-file-info"], [1, "folder-file-name"], [1, "folder-file-meta"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "solo-label", 4, "ngIf"], ["class", "folder-file-row solo-row", 4, "ngFor", "ngForOf"], [1, "solo-label"], [1, "folder-file-row", "solo-row"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", "kh-btn--icon", 3, "click"], ["class", "kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon", 3, "click", 4, "ngIf"], [1, "kh-btn", "kh-btn--danger", "kh-btn--sm", "kh-btn--icon", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", "kh-card", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group", "full"], ["type", "text", "placeholder", "e.g. Business Plan Guide 2024", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Brief description\u2026", 3, "ngModelChange", "ngModel"], [1, "form-group"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "FREE"], ["value", "PREMIUM"], ["value", "INSTITUTIONAL"], [3, "ngValue"], ["type", "text", "placeholder", "BMC, Finance (comma separated)", 3, "ngModelChange", "ngModel"], ["class", "form-group full", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "kh-btn", "kh-btn--primary", 3, "click", "disabled"], [3, "value"], ["class", "label-hint", 4, "ngIf"], [1, "file-upload-zone", 3, "click"], ["type", "file", 2, "display", "none", 3, "change", "multiple", "accept"], ["class", "file-list", 4, "ngIf"], ["class", "file-add-more", 4, "ngIf"], ["class", "course-name-field", 4, "ngIf"], [1, "label-hint"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "file-hint"], [1, "file-list"], ["class", "file-list-item", 4, "ngFor", "ngForOf"], [1, "file-list-item"], [1, "file-list-icon"], [1, "file-list-name"], [1, "file-list-size"], [1, "file-list-remove", 3, "click"], [1, "file-add-more"], [1, "course-name-field"], [1, "course-name-icon"], [1, "course-name-body"], ["type", "text", "placeholder", "e.g. Introduction to Entrepreneurship", 1, "course-name-input", 3, "ngModelChange", "ngModel"], [1, "course-name-hint"], ["type", "url", "placeholder", "https://example.com/resource", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "e.g. 2700 = 45 min", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "e.g. 45", "min", "1", 3, "ngModelChange", "ngModel"], [1, "modal-box", "kh-card", 2, "max-width", "560px", 3, "click"], [1, "cat-form"], ["type", "text", "placeholder", "Category name *", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Icon e.g. \uD83D\uDCC1", 2, "width", "80px", "text-align", "center", 3, "ngModelChange", "ngModel"], ["type", "color", 2, "width", "44px", "height", "36px", "padding", "2px", "border-radius", "6px", "border", "1px solid var(--border)", "cursor", "pointer", 3, "ngModelChange", "ngModel"], [1, "kh-btn", "kh-btn--primary", "kh-btn--sm", 3, "click", "disabled"], ["class", "kh-btn kh-btn--ghost kh-btn--sm", 3, "click", 4, "ngIf"], [1, "cat-list"], ["class", "cat-list-row", 4, "ngFor", "ngForOf"], ["style", "text-align:center;color:var(--text-muted);padding:20px", 4, "ngIf"], [1, "kh-btn", "kh-btn--ghost", "kh-btn--sm", 3, "click"], [1, "cat-list-row"], [1, "cat-color-dot"], [1, "cat-icon"], [1, "cat-name"], [1, "actions", 2, "margin-left", "auto"], [2, "text-align", "center", "color", "var(--text-muted)", "padding", "20px"], [1, "confirm-box", "kh-card", 3, "click"], [1, "confirm-icon"], [1, "confirm-actions"], [1, "kh-btn", "kh-btn--danger", 3, "click"]], template: function AdminBibliothequeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
            i0.ɵɵtext(4, "Resource Library");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5)(8, "button", 6);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_8_listener() { return ctx.openCatPanel(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(9, "svg", 7);
            i0.ɵɵelement(10, "path", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Categories ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(12, "div", 9)(13, "button", 10);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_13_listener() { return ctx.view = "table"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(14, "svg", 7);
            i0.ɵɵelement(15, "line", 11)(16, "line", 12)(17, "line", 13)(18, "line", 14)(19, "line", 15)(20, "line", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " List ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "button", 10);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_22_listener() { return ctx.view = "folders"; });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(23, "svg", 7);
            i0.ɵɵelement(24, "path", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Folders ");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(26, "button", 17);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_26_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(27, "svg", 18);
            i0.ɵɵelement(28, "line", 19)(29, "line", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(30, " Add Resource ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(31, "div", 21)(32, "div", 22)(33, "p", 23);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p", 24);
            i0.ɵɵtext(36, "Total");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 22)(38, "p", 25);
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p", 24);
            i0.ɵɵtext(41, "Free");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 22)(43, "p", 26);
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "p", 24);
            i0.ɵɵtext(46, "Premium");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 22)(48, "p", 27);
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "p", 24);
            i0.ɵɵtext(51, "Institutional");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 22)(53, "p", 28);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "p", 24);
            i0.ɵɵtext(56, "PDFs");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "div", 22)(58, "p", 27);
            i0.ɵɵtext(59);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "p", 24);
            i0.ɵɵtext(61, "Videos");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(62, "div", 29)(63, "div", 30);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(64, "svg", 7);
            i0.ɵɵelement(65, "circle", 31)(66, "path", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(67, "input", 33);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminBibliothequeComponent_Template_input_ngModelChange_67_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("input", function AdminBibliothequeComponent_Template_input_input_67_listener() { return ctx.onSearch(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "div", 34)(69, "button", 35);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_69_listener() { ctx.filterType = "ALL"; return ctx.load(); });
            i0.ɵɵtext(70, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "button", 35);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_71_listener() { ctx.filterType = "PDF"; return ctx.load(); });
            i0.ɵɵtext(72, "\uD83D\uDCC4 PDF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "button", 35);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_73_listener() { ctx.filterType = "VIDEO"; return ctx.load(); });
            i0.ɵɵtext(74, "\uD83C\uDFA5 Video");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "button", 35);
            i0.ɵɵlistener("click", function AdminBibliothequeComponent_Template_button_click_75_listener() { ctx.filterType = "EXCEL"; return ctx.load(); });
            i0.ɵɵtext(76, "\uD83D\uDCCA Excel");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(77, AdminBibliothequeComponent_div_77_Template, 2, 0, "div", 36)(78, AdminBibliothequeComponent_div_78_Template, 25, 2, "div", 37)(79, AdminBibliothequeComponent_div_79_Template, 3, 2, "div", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(80, AdminBibliothequeComponent_div_80_Template, 57, 17, "div", 39)(81, AdminBibliothequeComponent_div_81_Template, 18, 8, "div", 39)(82, AdminBibliothequeComponent_div_82_Template, 16, 1, "div", 39);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2("", ctx.stats.totalRessources || 0, " total \u2014 ", ctx.stats.ressourcesPubliees || 0, " published");
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("active", ctx.view === "table");
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("active", ctx.view === "folders");
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.stats.totalRessources || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.stats.free || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.stats.premium || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.stats.institutional || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate((ctx.stats.parType == null ? null : ctx.stats.parType.PDF) || 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate((ctx.stats.parType == null ? null : ctx.stats.parType.VIDEO) || 0);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "ALL");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "PDF");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "VIDEO");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.filterType === "EXCEL");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "table" && !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.view === "folders" && !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showForm);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCatPanel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showDeleteConfirm);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.CheckboxControlValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.MinValidator, i3.NgModel], styles: [".page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}\n.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.page-sub[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:4px}\n.kpi-row[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}\n.kpi-card[_ngcontent-%COMP%]{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:16px 20px;display:flex;flex-direction:column;gap:4px;min-width:90px}\n.kpi-value[_ngcontent-%COMP%]{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;line-height:1}\n.kpi-label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em}\n.filters[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}\n.filter-chips[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}\n.search-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:8px 14px;max-width:360px}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;font-size:13px;flex:1}\n.tab[_ngcontent-%COMP%]{padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}\n.tab.active[_ngcontent-%COMP%]{background:var(--orange);color:white;border-color:var(--orange)}\n.table-wrap[_ngcontent-%COMP%]{background:white;border-radius:var(--radius-lg);border:1px solid var(--border);overflow:hidden}\ntable[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}\nth[_ngcontent-%COMP%]{padding:12px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);background:var(--bg-app);text-align:left;white-space:nowrap}\ntd[_ngcontent-%COMP%]{padding:12px 14px;font-size:13px;border-top:1px solid var(--border)}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:rgba(0,0,0,0.015)}\n.res-name-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}\n.res-type-icon[_ngcontent-%COMP%]{font-size:22px;flex-shrink:0}\n.status-toggle[_ngcontent-%COMP%]{padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;border:1px solid;transition:all 0.2s;background:var(--bg-app);border-color:var(--border);color:var(--text-muted)}\n.status-toggle.published[_ngcontent-%COMP%]{background:#EAF3DE;border-color:#3B6D11;color:#27500A}\n.actions[_ngcontent-%COMP%]{display:flex;gap:6px}\n.res-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px}\n.res-tag[_ngcontent-%COMP%]{padding:2px 8px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;font-size:10px;font-weight:600;color:var(--text-secondary);white-space:nowrap}\n.cat-chip[_ngcontent-%COMP%]{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;border:1px solid currentColor;background:transparent;white-space:nowrap}\n.kh-progress[_ngcontent-%COMP%]{background:var(--border);border-radius:99px;overflow:hidden;height:5px;flex-shrink:0}\n.kh-progress__fill[_ngcontent-%COMP%]{height:100%;border-radius:99px;transition:width 0.3s ease}\n.prog-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}\n.prog-pct-sm[_ngcontent-%COMP%]{font-size:11px;font-weight:700;color:var(--text-secondary);white-space:nowrap}\n.filter-section-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.07em;align-self:center;white-space:nowrap}\n.filter-sep[_ngcontent-%COMP%]{width:1px;height:18px;background:var(--border);align-self:center;flex-shrink:0}\n.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}\n.modal-box[_ngcontent-%COMP%]{width:100%;max-width:640px;max-height:90vh;overflow-y:auto;padding:28px}\n.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700}\n.modal-close[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px 8px}\n.modal-footer[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)}\n.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}\n.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}\n.form-group.full[_ngcontent-%COMP%]{grid-column:1/-1}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:9px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;font-family:inherit;background:white;color:var(--text-primary);transition:border-color 0.2s;width:100%}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:var(--orange)}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical;min-height:80px}\n.file-upload-zone[_ngcontent-%COMP%]{border:2px dashed var(--border);border-radius:var(--radius-md);padding:24px;text-align:center;cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--text-muted)}\n.file-upload-zone[_ngcontent-%COMP%]:hover{border-color:var(--orange);background:rgba(232,98,42,0.03)}\n.file-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted)}\n.file-selected[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--text-primary)}\n.file-size[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);font-weight:400}\n.checkbox-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;cursor:pointer}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:16px;height:16px;accent-color:var(--orange)}\n.checkbox-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);font-weight:400;margin-left:4px}\n.confirm-box[_ngcontent-%COMP%]{width:100%;max-width:380px;padding:32px;text-align:center}\n.confirm-icon[_ngcontent-%COMP%]{font-size:40px;margin-bottom:12px}\n.confirm-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px}\n.confirm-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--text-secondary);margin-bottom:20px;line-height:1.55}\n.confirm-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}\n\n\n\n.label-hint[_ngcontent-%COMP%]{font-size:11px;font-weight:400;color:var(--teal);margin-left:6px}\n.file-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;width:100%}\n.file-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--bg-app);border-radius:6px;border:1px solid var(--border)}\n.file-list-icon[_ngcontent-%COMP%]{font-size:14px;flex-shrink:0}\n.file-list-name[_ngcontent-%COMP%]{font-size:12px;font-weight:600;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.file-list-size[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);flex-shrink:0}\n.file-list-remove[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;padding:0 2px;line-height:1;transition:color 0.15s;flex-shrink:0}\n.file-list-remove[_ngcontent-%COMP%]:hover{color:#E84A4A}\n.file-add-more[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);margin-top:8px;display:block;text-align:center}\n.batch-info[_ngcontent-%COMP%]{font-size:12px;color:var(--teal);font-weight:600;margin-top:6px;padding:6px 10px;background:rgba(42,191,191,0.08);border-radius:6px}\n\n\n\n.course-name-field[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(42,191,191,0.06);border:1px solid rgba(42,191,191,0.3);border-radius:var(--radius-md);margin-top:10px}\n.course-name-icon[_ngcontent-%COMP%]{font-size:24px;flex-shrink:0;margin-top:2px}\n.course-name-body[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:6px}\n.course-name-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--teal)}\n.course-name-input[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid rgba(42,191,191,0.4);border-radius:var(--radius-sm);font-size:13px;outline:none;font-family:inherit;background:white;color:var(--text-primary);transition:border-color 0.2s;width:100%}\n.course-name-input[_ngcontent-%COMP%]:focus{border-color:var(--teal)}\n.course-name-hint[_ngcontent-%COMP%]{font-size:11px;color:var(--text-secondary);line-height:1.5}\n.course-name-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--teal);font-weight:600}\n\n\n\n.header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n.view-toggle[_ngcontent-%COMP%]{display:flex;border:1px solid var(--border);border-radius:8px;overflow:hidden;background:white}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:7px 14px;font-size:12px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);display:flex;align-items:center;gap:6px;transition:all 0.15s}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:var(--orange);color:white}\n\n\n\n.folders-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}\n.folder-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);cursor:pointer;transition:all 0.15s}\n.folder-row[_ngcontent-%COMP%]:hover{border-color:var(--orange);background:#FFF8F5}\n.folder-icon[_ngcontent-%COMP%]{color:var(--orange);flex-shrink:0}\n.folder-info[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;gap:10px}\n.folder-name[_ngcontent-%COMP%]{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px}\n.folder-count[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);background:var(--bg-app);border:1px solid var(--border);border-radius:10px;padding:2px 8px}\n.folder-chevron[_ngcontent-%COMP%]{color:var(--text-muted);transition:transform 0.2s;flex-shrink:0}\n.folder-chevron.open[_ngcontent-%COMP%]{transform:rotate(90deg)}\n.folder-files[_ngcontent-%COMP%]{margin-left:24px;border-left:2px solid var(--border);padding-left:12px;display:flex;flex-direction:column;gap:3px;margin-bottom:8px}\n.folder-file-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:9px 14px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);transition:all 0.15s}\n.folder-file-row[_ngcontent-%COMP%]:hover{background:#FAFAF8}\n.folder-file-icon[_ngcontent-%COMP%]{font-size:16px;flex-shrink:0}\n.folder-file-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:1px}\n.folder-file-name[_ngcontent-%COMP%]{font-size:13px;font-weight:600}\n.folder-file-meta[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted)}\n.solo-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);padding:8px 4px 4px}\n.solo-row[_ngcontent-%COMP%]{margin-bottom:3px}\n\n\n\n.cat-form[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--border);flex-wrap:wrap}\n.cat-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto}\n.cat-list-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg-app);border-radius:var(--radius-sm)}\n.cat-color-dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;flex-shrink:0}\n.cat-icon[_ngcontent-%COMP%]{font-size:16px}\n.cat-name[_ngcontent-%COMP%]{font-size:13px;font-weight:600}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminBibliothequeComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-bibliotheque', template: "<div class=\"page animate-1\">\n\n  <!-- Header -->\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"kh-page-title\">Resource Library</h1>\n      <p class=\"page-sub\">{{ stats.totalRessources || 0 }} total \u2014 {{ stats.ressourcesPubliees || 0 }} published</p>\n    </div>\n    <div class=\"header-actions\">\n      <button class=\"kh-btn kh-btn--ghost\" (click)=\"openCatPanel()\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/></svg>\n        Categories\n      </button>\n      <div class=\"view-toggle\">\n        <button [class.active]=\"view==='table'\"   (click)=\"view='table'\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"/><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"/><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"/><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"/></svg>\n          List\n        </button>\n        <button [class.active]=\"view==='folders'\" (click)=\"view='folders'\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/></svg>\n          Folders\n        </button>\n      </div>\n      <button class=\"kh-btn kh-btn--primary\" (click)=\"openCreate()\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>\n        Add Resource\n      </button>\n    </div>\n  </div>\n\n  <!-- KPI -->\n  <div class=\"kpi-row animate-2\">\n    <div class=\"kpi-card\"><p class=\"kpi-value\">{{ stats.totalRessources || 0 }}</p><p class=\"kpi-label\">Total</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\" style=\"color:var(--green)\">{{ stats.free || 0 }}</p><p class=\"kpi-label\">Free</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\" style=\"color:var(--teal)\">{{ stats.premium || 0 }}</p><p class=\"kpi-label\">Premium</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\" style=\"color:var(--violet)\">{{ stats.institutional || 0 }}</p><p class=\"kpi-label\">Institutional</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\" style=\"color:#E84A4A\">{{ stats.parType?.PDF || 0 }}</p><p class=\"kpi-label\">PDFs</p></div>\n    <div class=\"kpi-card\"><p class=\"kpi-value\" style=\"color:var(--violet)\">{{ stats.parType?.VIDEO || 0 }}</p><p class=\"kpi-label\">Videos</p></div>\n  </div>\n\n  <!-- Filters -->\n  <div class=\"filters animate-2\">\n    <div class=\"search-box\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.35-4.35\"/></svg>\n      <input type=\"text\" placeholder=\"Search by title\u2026\" [(ngModel)]=\"search\" (input)=\"onSearch()\" />\n    </div>\n    <div class=\"filter-chips\">\n      <button class=\"tab\" [class.active]=\"filterType==='ALL'\" (click)=\"filterType='ALL';load()\">All</button>\n      <button class=\"tab\" [class.active]=\"filterType==='PDF'\" (click)=\"filterType='PDF';load()\">\uD83D\uDCC4 PDF</button>\n      <button class=\"tab\" [class.active]=\"filterType==='VIDEO'\" (click)=\"filterType='VIDEO';load()\">\uD83C\uDFA5 Video</button>\n      <button class=\"tab\" [class.active]=\"filterType==='EXCEL'\" (click)=\"filterType='EXCEL';load()\">\uD83D\uDCCA Excel</button>\n      <!-- <button class=\"tab\" [class.active]=\"filterAccess==='ALL'\" (click)=\"filterAccess='ALL';load()\">All access</button>\n      <button class=\"tab\" [class.active]=\"filterAccess==='FREE'\" (click)=\"filterAccess='PUBLIC';load()\">Public</button>\n      <button class=\"tab\" [class.active]=\"filterAccess==='PREMIUM'\" (click)=\"filterAccess='PREMIUM';load()\">Incubated</button>\n      <button class=\"tab\" [class.active]=\"filterAccess==='INSTITUTIONAL'\" (click)=\"filterAccess='INSTITUTIONAL';load()\">Premium</button>\n -->    </div>\n  </div>\n\n  <div *ngIf=\"loading\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">Loading\u2026</div>\n\n  <!-- \u2550\u2550 VUE TABLE \u2550\u2550 -->\n  <div class=\"table-wrap animate-3\" *ngIf=\"view==='table' && !loading\">\n    <table>\n      <thead>\n        <tr>\n          <th>Resource</th><th>Type</th><th>Access</th><th>Category</th>\n          <th>Tags</th><th>Size</th><th>Views</th><th>Status</th><th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let r of ressources\">\n          <td>\n            <div class=\"res-name-cell\">\n              <span class=\"res-type-icon\">{{ typeIcons[r.type] }}</span>\n              <div><p style=\"font-weight:600;font-size:13px\">{{ r.titre }}</p><p style=\"font-size:11px;color:var(--text-muted)\">{{ r.nomFichierOriginal }}</p></div>\n            </div>\n          </td>\n          <td><span class=\"kh-badge kh-badge--gray\">{{ r.type }}</span></td>\n          <td><span class=\"kh-badge\" [class]=\"getAccessBadge(r.planType)\">{{ r.planType }}</span></td>\n          <td>\n            <span *ngIf=\"r.categorie\" class=\"cat-chip\" [style.borderColor]=\"r.categorie.couleur\" [style.color]=\"r.categorie.couleur\">{{ r.categorie.icone }} {{ r.categorie.nom }}</span>\n            <span *ngIf=\"!r.categorie\" style=\"color:var(--text-muted);font-size:12px\">\u2014</span>\n          </td>\n          <td>\n            <div class=\"res-tags\" *ngIf=\"r.tags?.length\">\n              <span *ngFor=\"let t of r.tags\" class=\"res-tag\">{{ t.nom }}</span>\n            </div>\n            <span *ngIf=\"!r.tags?.length\" style=\"color:var(--text-muted);font-size:12px\">\u2014</span>\n          </td>\n          <td style=\"font-size:12px;color:var(--text-muted)\">{{ r.tailleFormatee || '\u2014' }}</td>\n          <td style=\"font-size:12px\">{{ r.vues }}</td>\n          <td><button class=\"status-toggle\" [class.published]=\"r.publie\" (click)=\"togglePublie(r)\">{{ r.publie ? 'Published' : 'Draft' }}</button></td>\n          <td>\n            <div class=\"actions\">\n              <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" title=\"Edit\" (click)=\"openEdit(r)\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>\n              </button>\n              <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" title=\"Download\" (click)=\"downloadRessource(r)\" *ngIf=\"r.urlFichier\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n              </button>\n              <button class=\"kh-btn kh-btn--danger kh-btn--sm kh-btn--icon\" title=\"Delete\" (click)=\"confirmDelete(r)\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14H6L5 6\"/><path d=\"M10 11v6M14 11v6\"/></svg>\n              </button>\n            </div>\n          </td>\n        </tr>\n        <tr *ngIf=\"ressources.length===0\"><td colspan=\"9\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">No resources found</td></tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- \u2550\u2550 VUE DOSSIERS \u2550\u2550 -->\n  <div class=\"folders-view animate-3\" *ngIf=\"view==='folders' && !loading\">\n    <ng-container *ngFor=\"let folder of folders\">\n\n      <!-- Dossier de cours (plusieurs fichiers) -->\n      <ng-container *ngIf=\"folder.name !== '__solo__'\">\n        <div class=\"folder-row\" (click)=\"toggleFolder(folder)\">\n          <div class=\"folder-icon\">\n            <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n              <path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/>\n            </svg>\n          </div>\n          <div class=\"folder-info\">\n            <span class=\"folder-name\">{{ folder.name }}</span>\n            <span class=\"folder-count\">{{ folder.fichiers.length }} file{{ folder.fichiers.length > 1 ? 's' : '' }}</span>\n          </div>\n          <svg class=\"folder-chevron\" [class.open]=\"folder.expanded\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"9 18 15 12 9 6\"/></svg>\n        </div>\n\n        <!-- Fichiers du dossier -->\n        <div class=\"folder-files\" *ngIf=\"folder.expanded\">\n          <div *ngFor=\"let r of folder.fichiers\" class=\"folder-file-row\">\n            <span class=\"folder-file-icon\">{{ typeIcons[r.type] }}</span>\n            <div class=\"folder-file-info\">\n              <span class=\"folder-file-name\">{{ r.titre.split(' \u2014 ')[1] || r.titre }}</span>\n              <span class=\"folder-file-meta\">{{ r.tailleFormatee || r.type }}</span>\n            </div>\n            <span class=\"kh-badge\" [class]=\"getAccessBadge(r.planType)\">{{ r.planType }}</span>\n            <button class=\"status-toggle\" [class.published]=\"r.publie\" (click)=\"togglePublie(r)\">{{ r.publie ? 'Published' : 'Draft' }}</button>\n            <div class=\"actions\">\n              <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" title=\"Edit\" (click)=\"openEdit(r)\">\n                <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>\n              </button>\n              <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" title=\"Download\" (click)=\"downloadRessource(r)\" *ngIf=\"r.urlFichier\">\n                <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n              </button>\n              <button class=\"kh-btn kh-btn--danger kh-btn--sm kh-btn--icon\" title=\"Delete\" (click)=\"confirmDelete(r)\">\n                <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14H6L5 6\"/><path d=\"M10 11v6M14 11v6\"/></svg>\n              </button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- Ressources individuelles (sans cours) -->\n      <ng-container *ngIf=\"folder.name === '__solo__'\">\n        <div class=\"solo-label\" *ngIf=\"folders.length > 1\">Individual files</div>\n        <div *ngFor=\"let r of folder.fichiers\" class=\"folder-file-row solo-row\">\n          <span class=\"folder-file-icon\">{{ typeIcons[r.type] }}</span>\n          <div class=\"folder-file-info\">\n            <span class=\"folder-file-name\">{{ r.titre }}</span>\n            <span class=\"folder-file-meta\">{{ r.tailleFormatee || r.type }}</span>\n          </div>\n          <span class=\"kh-badge\" [class]=\"getAccessBadge(r.planType)\">{{ r.planType }}</span>\n          <button class=\"status-toggle\" [class.published]=\"r.publie\" (click)=\"togglePublie(r)\">{{ r.publie ? 'Published' : 'Draft' }}</button>\n          <div class=\"actions\">\n            <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" (click)=\"openEdit(r)\">\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>\n            </button>\n            <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" (click)=\"downloadRessource(r)\" *ngIf=\"r.urlFichier\">\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n            </button>\n            <button class=\"kh-btn kh-btn--danger kh-btn--sm kh-btn--icon\" (click)=\"confirmDelete(r)\">\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14H6L5 6\"/><path d=\"M10 11v6M14 11v6\"/></svg>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n\n    </ng-container>\n    <p *ngIf=\"folders.length===0\" style=\"text-align:center;padding:40px;color:var(--text-muted)\">No resources found</p>\n  </div>\n</div>\n\n<!-- \u2550\u2550 MODAL ADD/EDIT \u2550\u2550 -->\n<div class=\"modal-overlay\" *ngIf=\"showForm\" (click)=\"showForm=false\">\n  <div class=\"modal-box kh-card\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-header\">\n      <h2>{{ isEditing ? 'Edit Resource' : 'Add New Resource' }}</h2>\n      <button class=\"modal-close\" (click)=\"showForm=false\">\u2715</button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-grid\">\n        <div class=\"form-group full\">\n          <label>Title *</label>\n          <input type=\"text\" [(ngModel)]=\"form.titre\" placeholder=\"e.g. Business Plan Guide 2024\" />\n        </div>\n        <div class=\"form-group full\">\n          <label>Description</label>\n          <textarea [(ngModel)]=\"form.description\" rows=\"3\" placeholder=\"Brief description\u2026\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Type *</label>\n          <select [(ngModel)]=\"form.type\" (ngModelChange)=\"onTypeChange()\">\n            <option *ngFor=\"let t of types\" [value]=\"t\">{{ typeIcons[t] }} {{ t }}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Plan Type *</label>\n          <select [(ngModel)]=\"form.planType\">\n            <option value=\"FREE\">\uD83C\uDF10 Free</option>\n            <option value=\"PREMIUM\">\uD83D\uDC8E Premium</option>\n            <option value=\"INSTITUTIONAL\">\uD83C\uDFDB\uFE0F Institutional</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select [(ngModel)]=\"form.categorieId\">\n            <option [ngValue]=\"null\">\u2014 None \u2014</option>\n            <option *ngFor=\"let c of categories\" [value]=\"c.id\">{{ c.icone }} {{ c.nom }}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Tags</label>\n          <input type=\"text\" [(ngModel)]=\"form.tags\" placeholder=\"BMC, Finance (comma separated)\" />\n        </div>\n        <div class=\"form-group full\" *ngIf=\"form.type !== 'LINK'\">\n          <label>\n            File Upload\n            <span *ngIf=\"form.type === 'PDF' && !isEditing\" class=\"label-hint\">\u2014 select multiple PDFs for a course folder</span>\n          </label>\n          <div class=\"file-upload-zone\" (click)=\"fileInput.click()\">\n            <input #fileInput type=\"file\" style=\"display:none\"\n                   [multiple]=\"form.type === 'PDF' && !isEditing\"\n                   [accept]=\"form.type === 'PDF' ? '.pdf,application/pdf' : '*'\"\n                   (change)=\"onFileChange($event)\" />\n            <ng-container *ngIf=\"selectedFiles.length === 0\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"/></svg>\n              <span>Click to select {{ form.type === 'PDF' && !isEditing ? 'one or more PDFs' : 'a file' }}</span>\n              <span class=\"file-hint\">Up to 500 MB per file</span>\n            </ng-container>\n            <div *ngIf=\"selectedFiles.length > 0\" class=\"file-list\">\n              <div *ngFor=\"let f of selectedFiles; let i = index\" class=\"file-list-item\">\n                <span class=\"file-list-icon\">\uD83D\uDCCE</span>\n                <span class=\"file-list-name\">{{ f.name }}</span>\n                <span class=\"file-list-size\">{{ formatSize(f.size) }}</span>\n                <button class=\"file-list-remove\" (click)=\"$event.stopPropagation(); removeFile(i)\">\u2715</button>\n              </div>\n            </div>\n            <span *ngIf=\"selectedFiles.length > 0\" class=\"file-add-more\">(click to add more)</span>\n          </div>\n\n          <!-- Champ nom du cours si plusieurs fichiers -->\n          <div class=\"course-name-field\" *ngIf=\"selectedFiles.length > 1\">\n            <div class=\"course-name-icon\">\uD83D\uDCDA</div>\n            <div class=\"course-name-body\">\n              <label>Course / Folder name</label>\n              <input type=\"text\" [(ngModel)]=\"courseName\" placeholder=\"e.g. Introduction to Entrepreneurship\" class=\"course-name-input\" />\n              <p class=\"course-name-hint\">\n                Files will be grouped as:\n                <strong>{{ courseName || form.titre || '\u2026' }} \u2014 chapitre1.pdf</strong>,\n                <strong>{{ courseName || form.titre || '\u2026' }} \u2014 chapitre2.pdf</strong>\u2026\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group full\" *ngIf=\"form.type === 'LINK'\">\n          <label>External URL</label>\n          <input type=\"url\" [(ngModel)]=\"form.urlExterne\" placeholder=\"https://example.com/resource\" />\n        </div>\n        <div class=\"form-group\" *ngIf=\"form.type === 'VIDEO'\">\n          <label>Duration (seconds)</label>\n          <input type=\"number\" [(ngModel)]=\"form.dureeSec\" placeholder=\"e.g. 2700 = 45 min\" min=\"0\" />\n        </div>\n        <div class=\"form-group\" *ngIf=\"form.type === 'PDF' || form.type === 'WORD'\">\n          <label>Number of pages</label>\n          <input type=\"number\" [(ngModel)]=\"form.nombrePages\" placeholder=\"e.g. 45\" min=\"1\" />\n        </div>\n        <div class=\"form-group full\">\n          <label class=\"checkbox-label\">\n            <input type=\"checkbox\" [(ngModel)]=\"form.publie\" />\n            <span>Publish immediately</span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"kh-btn kh-btn--primary\" (click)=\"submitForm()\" [disabled]=\"!form.titre\">\n        {{ isEditing ? 'Save Changes' : selectedFiles.length > 1 ? 'Upload ' + selectedFiles.length + ' files' : 'Add Resource' }}\n      </button>\n      <button class=\"kh-btn kh-btn--ghost\" (click)=\"showForm=false\">Cancel</button>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550 MODAL CATEGORIES \u2550\u2550 -->\n<div class=\"modal-overlay\" *ngIf=\"showCatPanel\" (click)=\"closeCatPanel()\">\n  <div class=\"modal-box kh-card\" (click)=\"$event.stopPropagation()\" style=\"max-width:560px\">\n    <div class=\"modal-header\">\n      <h2>Manage Categories</h2>\n      <button class=\"modal-close\" (click)=\"closeCatPanel()\">\u2715</button>\n    </div>\n    <div class=\"modal-body\">\n\n      <!-- Formulaire ajout/\u00E9dition -->\n      <div class=\"cat-form\">\n        <input type=\"text\" [(ngModel)]=\"catForm.nom\" placeholder=\"Category name *\" style=\"flex:1\" />\n        <input type=\"text\" [(ngModel)]=\"catForm.icone\" placeholder=\"Icon e.g. \uD83D\uDCC1\" style=\"width:80px;text-align:center\" />\n        <input type=\"color\" [(ngModel)]=\"catForm.couleur\" style=\"width:44px;height:36px;padding:2px;border-radius:6px;border:1px solid var(--border);cursor:pointer\" />\n        <button class=\"kh-btn kh-btn--primary kh-btn--sm\" (click)=\"submitCategorie()\" [disabled]=\"!catForm.nom\">\n          {{ editingCatId ? 'Save' : 'Add' }}\n        </button>\n        <button *ngIf=\"editingCatId\" class=\"kh-btn kh-btn--ghost kh-btn--sm\" (click)=\"editingCatId=null; catForm={nom:'',description:'',couleur:'#E8622A',icone:'\uD83D\uDCC1'}\">\n          Cancel\n        </button>\n      </div>\n\n      <!-- Liste des cat\u00E9gories -->\n      <div class=\"cat-list\">\n        <div *ngFor=\"let c of categories\" class=\"cat-list-row\">\n          <div class=\"cat-color-dot\" [style.background]=\"c.couleur\"></div>\n          <span class=\"cat-icon\">{{ c.icone }}</span>\n          <span class=\"cat-name\">{{ c.nom }}</span>\n          <div class=\"actions\" style=\"margin-left:auto\">\n            <button class=\"kh-btn kh-btn--ghost kh-btn--sm kh-btn--icon\" (click)=\"editCategorie(c)\">\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>\n            </button>\n            <button class=\"kh-btn kh-btn--danger kh-btn--sm kh-btn--icon\" (click)=\"deleteCategorie(c)\">\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14H6L5 6\"/><path d=\"M10 11v6M14 11v6\"/></svg>\n            </button>\n          </div>\n        </div>\n        <p *ngIf=\"categories.length===0\" style=\"text-align:center;color:var(--text-muted);padding:20px\">No categories yet</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550 DELETE CONFIRM \u2550\u2550 -->\n<div class=\"modal-overlay\" *ngIf=\"showDeleteConfirm\" (click)=\"cancelDelete()\">\n  <div class=\"confirm-box kh-card\" (click)=\"$event.stopPropagation()\">\n    <div class=\"confirm-icon\">\uD83D\uDDD1\uFE0F</div>\n    <h3>Delete resource?</h3>\n    <p>You are about to delete <strong>{{ deleteTarget?.titre }}</strong>. This cannot be undone.</p>\n    <div class=\"confirm-actions\">\n      <button class=\"kh-btn kh-btn--danger\" (click)=\"doDelete()\">Yes, delete</button>\n      <button class=\"kh-btn kh-btn--ghost\" (click)=\"cancelDelete()\">Cancel</button>\n    </div>\n  </div>\n</div>\n", styles: [".page{display:flex;flex-direction:column;gap:24px}\n.page-header{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px}\n.page-sub{color:var(--text-secondary);margin-top:4px}\n.kpi-row{display:flex;gap:12px;flex-wrap:wrap}\n.kpi-card{background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:16px 20px;display:flex;flex-direction:column;gap:4px;min-width:90px}\n.kpi-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:800;line-height:1}\n.kpi-label{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em}\n.filters{display:flex;flex-direction:column;gap:10px}\n.filter-chips{display:flex;gap:8px;flex-wrap:wrap}\n.search-box{display:flex;align-items:center;gap:8px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);padding:8px 14px;max-width:360px}\n.search-box input{border:none;outline:none;background:transparent;font-size:13px;flex:1}\n.tab{padding:6px 14px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;border:1px solid var(--border);cursor:pointer;background:white;color:var(--text-secondary);transition:all 0.15s}\n.tab.active{background:var(--orange);color:white;border-color:var(--orange)}\n.table-wrap{background:white;border-radius:var(--radius-lg);border:1px solid var(--border);overflow:hidden}\ntable{width:100%;border-collapse:collapse}\nth{padding:12px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);background:var(--bg-app);text-align:left;white-space:nowrap}\ntd{padding:12px 14px;font-size:13px;border-top:1px solid var(--border)}\ntr:hover td{background:rgba(0,0,0,0.015)}\n.res-name-cell{display:flex;align-items:center;gap:10px}\n.res-type-icon{font-size:22px;flex-shrink:0}\n.status-toggle{padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;border:1px solid;transition:all 0.2s;background:var(--bg-app);border-color:var(--border);color:var(--text-muted)}\n.status-toggle.published{background:#EAF3DE;border-color:#3B6D11;color:#27500A}\n.actions{display:flex;gap:6px}\n.res-tags{display:flex;flex-wrap:wrap;gap:4px}\n.res-tag{padding:2px 8px;background:var(--bg-app);border:1px solid var(--border);border-radius:4px;font-size:10px;font-weight:600;color:var(--text-secondary);white-space:nowrap}\n.cat-chip{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;border:1px solid currentColor;background:transparent;white-space:nowrap}\n.kh-progress{background:var(--border);border-radius:99px;overflow:hidden;height:5px;flex-shrink:0}\n.kh-progress__fill{height:100%;border-radius:99px;transition:width 0.3s ease}\n.prog-cell{display:flex;align-items:center;gap:6px}\n.prog-pct-sm{font-size:11px;font-weight:700;color:var(--text-secondary);white-space:nowrap}\n.filter-section-label{font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.07em;align-self:center;white-space:nowrap}\n.filter-sep{width:1px;height:18px;background:var(--border);align-self:center;flex-shrink:0}\n.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}\n.modal-box{width:100%;max-width:640px;max-height:90vh;overflow-y:auto;padding:28px}\n.modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}\n.modal-header h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700}\n.modal-close{background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px 8px}\n.modal-footer{display:flex;gap:8px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)}\n.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}\n.form-group{display:flex;flex-direction:column;gap:6px}\n.form-group.full{grid-column:1/-1}\n.form-group label{font-size:12px;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em}\n.form-group input,.form-group select,.form-group textarea{padding:9px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;font-family:inherit;background:white;color:var(--text-primary);transition:border-color 0.2s;width:100%}\n.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--orange)}\n.form-group textarea{resize:vertical;min-height:80px}\n.file-upload-zone{border:2px dashed var(--border);border-radius:var(--radius-md);padding:24px;text-align:center;cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--text-muted)}\n.file-upload-zone:hover{border-color:var(--orange);background:rgba(232,98,42,0.03)}\n.file-hint{font-size:11px;color:var(--text-muted)}\n.file-selected{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--text-primary)}\n.file-size{font-size:11px;color:var(--text-muted);font-weight:400}\n.checkbox-label{display:flex;align-items:center;gap:10px;cursor:pointer}\n.checkbox-label input{width:16px;height:16px;accent-color:var(--orange)}\n.checkbox-hint{font-size:11px;color:var(--text-muted);font-weight:400;margin-left:4px}\n.confirm-box{width:100%;max-width:380px;padding:32px;text-align:center}\n.confirm-icon{font-size:40px;margin-bottom:12px}\n.confirm-box h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px}\n.confirm-box p{font-size:13px;color:var(--text-secondary);margin-bottom:20px;line-height:1.55}\n.confirm-actions{display:flex;gap:10px;justify-content:center}\n\n/* Multi-file upload */\n.label-hint{font-size:11px;font-weight:400;color:var(--teal);margin-left:6px}\n.file-list{display:flex;flex-direction:column;gap:6px;width:100%}\n.file-list-item{display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--bg-app);border-radius:6px;border:1px solid var(--border)}\n.file-list-icon{font-size:14px;flex-shrink:0}\n.file-list-name{font-size:12px;font-weight:600;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.file-list-size{font-size:11px;color:var(--text-muted);flex-shrink:0}\n.file-list-remove{background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;padding:0 2px;line-height:1;transition:color 0.15s;flex-shrink:0}\n.file-list-remove:hover{color:#E84A4A}\n.file-add-more{font-size:11px;color:var(--text-muted);margin-top:8px;display:block;text-align:center}\n.batch-info{font-size:12px;color:var(--teal);font-weight:600;margin-top:6px;padding:6px 10px;background:rgba(42,191,191,0.08);border-radius:6px}\n\n/* Course name field */\n.course-name-field{display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(42,191,191,0.06);border:1px solid rgba(42,191,191,0.3);border-radius:var(--radius-md);margin-top:10px}\n.course-name-icon{font-size:24px;flex-shrink:0;margin-top:2px}\n.course-name-body{flex:1;display:flex;flex-direction:column;gap:6px}\n.course-name-body label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--teal)}\n.course-name-input{padding:8px 12px;border:1px solid rgba(42,191,191,0.4);border-radius:var(--radius-sm);font-size:13px;outline:none;font-family:inherit;background:white;color:var(--text-primary);transition:border-color 0.2s;width:100%}\n.course-name-input:focus{border-color:var(--teal)}\n.course-name-hint{font-size:11px;color:var(--text-secondary);line-height:1.5}\n.course-name-hint strong{color:var(--teal);font-weight:600}\n\n/* Header actions */\n.header-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n.view-toggle{display:flex;border:1px solid var(--border);border-radius:8px;overflow:hidden;background:white}\n.view-toggle button{padding:7px 14px;font-size:12px;font-weight:600;border:none;cursor:pointer;background:transparent;color:var(--text-secondary);display:flex;align-items:center;gap:6px;transition:all 0.15s}\n.view-toggle button.active{background:var(--orange);color:white}\n\n/* Folders view */\n.folders-view{display:flex;flex-direction:column;gap:4px}\n.folder-row{display:flex;align-items:center;gap:12px;padding:12px 16px;background:white;border:1px solid var(--border);border-radius:var(--radius-md);cursor:pointer;transition:all 0.15s}\n.folder-row:hover{border-color:var(--orange);background:#FFF8F5}\n.folder-icon{color:var(--orange);flex-shrink:0}\n.folder-info{flex:1;display:flex;align-items:center;gap:10px}\n.folder-name{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px}\n.folder-count{font-size:11px;color:var(--text-muted);background:var(--bg-app);border:1px solid var(--border);border-radius:10px;padding:2px 8px}\n.folder-chevron{color:var(--text-muted);transition:transform 0.2s;flex-shrink:0}\n.folder-chevron.open{transform:rotate(90deg)}\n.folder-files{margin-left:24px;border-left:2px solid var(--border);padding-left:12px;display:flex;flex-direction:column;gap:3px;margin-bottom:8px}\n.folder-file-row{display:flex;align-items:center;gap:10px;padding:9px 14px;background:white;border:1px solid var(--border);border-radius:var(--radius-sm);transition:all 0.15s}\n.folder-file-row:hover{background:#FAFAF8}\n.folder-file-icon{font-size:16px;flex-shrink:0}\n.folder-file-info{flex:1;display:flex;flex-direction:column;gap:1px}\n.folder-file-name{font-size:13px;font-weight:600}\n.folder-file-meta{font-size:11px;color:var(--text-muted)}\n.solo-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);padding:8px 4px 4px}\n.solo-row{margin-bottom:3px}\n\n/* Categories modal */\n.cat-form{display:flex;gap:8px;align-items:center;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--border);flex-wrap:wrap}\n.cat-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto}\n.cat-list-row{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg-app);border-radius:var(--radius-sm)}\n.cat-color-dot{width:12px;height:12px;border-radius:50%;flex-shrink:0}\n.cat-icon{font-size:16px}\n.cat-name{font-size:13px;font-weight:600}\n"] }]
    }], () => [{ type: i1.RessourceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminBibliothequeComponent, { className: "AdminBibliothequeComponent", filePath: "app\\features\\admin\\bibliotheque\\bibliotheque.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=bibliotheque.component.js.map