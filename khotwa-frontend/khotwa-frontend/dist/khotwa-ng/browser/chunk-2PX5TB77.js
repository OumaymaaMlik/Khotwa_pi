import {
  CommonModule,
  DomSanitizer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-FQARK65W.js";

// src/app/shared/safe-url.pipe.ts
var SafeUrlPipe = class _SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static {
    this.\u0275fac = function SafeUrlPipe_Factory(t) {
      return new (t || _SafeUrlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeUrl", type: _SafeUrlPipe, pure: true });
  }
};

// src/app/shared/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 57, vars: 1, consts: [[1, "kh-footer"], [1, "kh-footer__inner"], [1, "kh-footer__brand"], [1, "kh-footer__logo"], ["src", "assets/khotwa-logo.png", "alt", "KHOTWA", 1, "kh-footer__logo-img"], [1, "kh-footer__name"], [1, "kh-footer__tagline"], [1, "kh-footer__col"], [1, "kh-footer__col-title"], ["href", "#"], [1, "kh-footer__bottom"], [1, "kh-footer__socials"], ["href", "#", "title", "LinkedIn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], ["href", "#", "title", "Twitter/X"], ["d", "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "KHOTWA");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Multi-role incubation platform for ambitious entrepreneurs and dedicated coaches.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "p", 8);
        \u0275\u0275text(11, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "ul")(13, "li")(14, "a", 9);
        \u0275\u0275text(15, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li")(17, "a", 9);
        \u0275\u0275text(18, "Library");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li")(20, "a", 9);
        \u0275\u0275text(21, "Planning");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 7)(23, "p", 8);
        \u0275\u0275text(24, "Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul")(26, "li")(27, "a", 9);
        \u0275\u0275text(28, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "li")(30, "a", 9);
        \u0275\u0275text(31, "Help center");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "li")(33, "a", 9);
        \u0275\u0275text(34, "Contact");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "div", 7)(36, "p", 8);
        \u0275\u0275text(37, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li")(40, "a", 9);
        \u0275\u0275text(41, "Privacy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "li")(43, "a", 9);
        \u0275\u0275text(44, "Terms");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(45, "div", 10)(46, "p");
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 11)(49, "a", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 13);
        \u0275\u0275element(51, "path", 14)(52, "rect", 15)(53, "circle", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "a", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 13);
        \u0275\u0275element(56, "path", 18);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(47);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " KHOTWA. All rights reserved.");
      }
    }, styles: ["\n\n.kh-footer[_ngcontent-%COMP%] {\n  background: #070A12;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding: 40px 32px 20px;\n  flex-shrink: 0;\n}\n.kh-footer__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 32px;\n  margin-bottom: 32px;\n}\n.kh-footer__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.kh-footer__logo-img[_ngcontent-%COMP%] {\n  height: 48px;\n  width: auto;\n  object-fit: contain;\n}\n.kh-footer__name[_ngcontent-%COMP%] {\n  display: none;\n}\n.kh-footer__tagline[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(232, 228, 220, 0.4);\n  line-height: 1.7;\n  max-width: 280px;\n}\n.kh-footer__col-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.09em;\n  color: rgba(232, 228, 220, 0.35);\n  margin-bottom: 12px;\n}\n.kh-footer__col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 8px;\n}\n.kh-footer__col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(232, 228, 220, 0.5);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.kh-footer__col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(232, 228, 220, 0.9);\n}\n.kh-footer__bottom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding-top: 16px;\n}\n.kh-footer__bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(232, 228, 220, 0.3);\n}\n.kh-footer__socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.kh-footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(232, 228, 220, 0.3);\n  transition: color 0.15s;\n  display: flex;\n  align-items: center;\n}\n.kh-footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(232, 228, 220, 0.8);\n}\n@media (max-width: 768px) {\n  .kh-footer__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .kh-footer__brand[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n  .kh-footer__bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .kh-footer__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .kh-footer[_ngcontent-%COMP%] {\n    padding: 32px 16px 16px;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "app\\shared\\footer\\footer.component.ts", lineNumber: 8 });
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static {
    this.\u0275fac = function SharedModule_Factory(t) {
      return new (t || _SharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule] });
  }
};

export {
  FooterComponent,
  SharedModule
};
//# sourceMappingURL=chunk-2PX5TB77.js.map
