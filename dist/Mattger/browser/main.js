import {
  ActivatedRoute,
  BehaviorSubject,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgSelectOption,
  OrderService,
  Output,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Validators,
  ViewEncapsulation,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  computed,
  effect,
  environment,
  inject,
  input,
  map,
  output,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  tap,
  throwError,
  withInterceptors,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G3KNRNGM.js";

// src/app/layouts/main-layout/main-layout.ts
var MainLayout = class _MainLayout {
  static \u0275fac = function MainLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayout, selectors: [["app-main-layout"]], decls: 2, vars: 0, consts: [[1, "raw"]], template: function MainLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayout, [{
    type: Component,
    args: [{ selector: "app-main-layout", imports: [RouterOutlet], template: '    <!-- <app-navbar></app-navbar> -->\r\n\r\n    <div class="raw">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <!-- <app-footer></app-footer> -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "app/layouts/main-layout/main-layout.ts", lineNumber: 12 });
})();

// src/app/shared/components/product-card/product-card.ts
var _c0 = (a0) => ["/product", a0];
function ProductCard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind2(3, 1, (ctx_r0.product.oldPrice - ctx_r0.product.price) / ctx_r0.product.oldPrice * 100, "1.0-0"), "%");
  }
}
function ProductCard_i_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 20);
  }
}
function ProductCard_i_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
  }
}
function ProductCard_i_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 22);
  }
}
var ProductCard = class _ProductCard {
  product;
  fullStars = [];
  halfStar = false;
  emptyStars = [];
  ngOnChanges(changes) {
    if (changes["product"] && this.product) {
      const full = Math.floor(this.product.rating || 0);
      const hasHalf = (this.product.rating || 0) % 1 >= 0.5;
      const empty = 5 - full - (hasHalf ? 1 : 0);
      this.fullStars = Array(full);
      this.halfStar = hasHalf;
      this.emptyStars = Array(empty);
    }
  }
  static \u0275fac = function ProductCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCard, selectors: [["app-product-card"]], inputs: { product: "product" }, features: [\u0275\u0275NgOnChangesFeature], decls: 24, vars: 14, consts: [[1, "card", "product-card", "border-0", "shadow-sm"], [1, "position-relative", "overflow-hidden"], ["alt", "product", 1, "card-img-top", 3, "src", "routerLink"], [1, "icons", "position-absolute", "top-0", "end-0", "p-2", "d-flex", "flex-column"], ["href", "#", 1, "icon-btn", "mb-2"], [1, "bi", "bi-heart"], ["href", "#", 1, "icon-btn"], [1, "bi", "bi-eye"], [1, "sale-amount"], [1, "overlay", "d-flex", "justify-content-center", "align-items-center"], [1, "btn", "btn-dark", "w-100"], [1, "card-body", "text-center", 3, "routerLink"], [1, "card-title"], [1, "price", "mb-2"], [1, "product-price", "me-2"], [1, "text-muted", "text-decoration-line-through"], [1, "rating", "text-warning"], ["class", "bi bi-star-fill", 4, "ngFor", "ngForOf"], ["class", "bi bi-star-half", 4, "ngIf"], ["class", "bi bi-star", 4, "ngFor", "ngForOf"], [1, "bi", "bi-star-fill"], [1, "bi", "bi-star-half"], [1, "bi", "bi-star"]], template: function ProductCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "a", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, ProductCard_Conditional_8_Template, 4, 4, "div", 8);
      \u0275\u0275elementStart(9, "div", 9)(10, "button", 10);
      \u0275\u0275text(11, "Add to Cart");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 11)(13, "h6", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 16);
      \u0275\u0275template(21, ProductCard_i_21_Template, 1, 0, "i", 17)(22, ProductCard_i_22_Template, 1, 0, "i", 18)(23, ProductCard_i_23_Template, 1, 0, "i", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.product.imageUrl, \u0275\u0275sanitizeUrl)("routerLink", \u0275\u0275pureFunction1(10, _c0, ctx.product.id));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.product.oldPrice > ctx.product.price ? 8 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx.product.id));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.product.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.product.price, "$");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.product.oldPrice, "$ ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.fullStars);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.halfStar);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.emptyStars);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, DecimalPipe], styles: ["\n\n.product-card[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  width: 300px;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 250px;\n  object-fit: cover;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 50%;\n  padding: 6px 10px;\n  color: black;\n  text-decoration: none;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  transition: 0.3s;\n  bottom: 0;\n  width: 100%;\n}\n.product-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transform: translateY(20px);\n  transition: 0.3s;\n}\n.product-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n.product-price[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.sale-amount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 5px;\n  background-color: var(--primary-color);\n  width: 58px;\n  height: 26px;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n}\n.card[_ngcontent-%COMP%], \n.card-img-top[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.3s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n/*# sourceMappingURL=product-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCard, [{
    type: Component,
    args: [{ selector: "app-product-card", imports: [CommonModule, RouterLink], template: `<div class="card product-card border-0 shadow-sm">\r
\r
  <!-- Image + overlay -->\r
  <div class="position-relative overflow-hidden">\r
\r
    <img [src]="product.imageUrl" [routerLink]="['/product', product.id]" class="card-img-top" alt="product" >\r
\r
    <!-- Icons -->\r
    <div class="icons position-absolute top-0 end-0 p-2 d-flex flex-column">\r
      <a href="#" class="icon-btn mb-2"><i class="bi bi-heart"></i></a>\r
      <a href="#" class="icon-btn"><i class="bi bi-eye"></i></a>\r
    </div>\r
\r
    <!-- sale  -->\r
    @if(product.oldPrice > product.price ){\r
    <div class="sale-amount">\r
      <p>-{{((product.oldPrice - product.price) / product.oldPrice * 100) | number:'1.0-0' }}%</p>\r
    </div>\r
    }\r
\r
\r
    <!-- Add to cart (hidden \u064A\u0638\u0647\u0631 hover) -->\r
    <div class="overlay d-flex justify-content-center align-items-center">\r
      <button class="btn btn-dark w-100">Add to Cart</button>\r
    </div>\r
\r
  </div>\r
\r
  <!-- Content -->\r
  <div class="card-body text-center" [routerLink]="['/product', product.id]">\r
    <h6 class="card-title">{{ product.name }}</h6>\r
\r
    <div class="price mb-2">\r
      <span class=" product-price me-2">{{ product.price }}$</span>\r
      <span class="text-muted text-decoration-line-through">\r
        {{ product.oldPrice }}$\r
      </span>\r
    </div>\r
\r
    <!-- Rating -->\r
    <div class="rating text-warning">\r
\r
      <!-- Full Stars -->\r
      <i class="bi bi-star-fill" *ngFor="let star of fullStars"></i>\r
\r
      <!-- Half Star -->\r
      <i class="bi bi-star-half" *ngIf="halfStar"></i>\r
\r
      <!-- Empty Stars -->\r
      <i class="bi bi-star" *ngFor="let star of emptyStars"></i>\r
\r
    </div>\r
  </div>\r
\r
</div>`, styles: ["/* src/app/shared/components/product-card/product-card.css */\n.product-card {\n  transition: transform 0.3s ease;\n  width: 300px;\n}\n.product-card:hover {\n  transform: translateY(-5px);\n}\n.product-card img {\n  height: 250px;\n  object-fit: cover;\n}\n.icon-btn {\n  background: white;\n  border-radius: 50%;\n  padding: 6px 10px;\n  color: black;\n  text-decoration: none;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.icon-btn:hover {\n  background: var(--primary-color);\n  color: white;\n}\n.overlay {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  transition: 0.3s;\n  bottom: 0;\n  width: 100%;\n}\n.product-card:hover .overlay {\n  opacity: 1;\n}\n.overlay button {\n  transform: translateY(20px);\n  transition: 0.3s;\n}\n.product-card:hover .overlay button {\n  transform: translateY(0);\n}\n.rating i {\n  margin: 0 2px;\n}\n.product-price {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.sale-amount {\n  position: absolute;\n  top: 15px;\n  left: 5px;\n  background-color: var(--primary-color);\n  width: 58px;\n  height: 26px;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n}\n.card,\n.card-img-top {\n  cursor: pointer;\n  transition: 0.3s;\n}\n.card:hover {\n  transform: scale(1.03);\n}\n/*# sourceMappingURL=product-card.css.map */\n"] }]
  }], null, { product: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCard, { className: "ProductCard", filePath: "app/shared/components/product-card/product-card.ts", lineNumber: 11 });
})();

// src/app/shared/components/four-product/four-product.ts
function FourProduct_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-product-card", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("product", product_r1);
  }
}
var FourProduct = class _FourProduct {
  products;
  static \u0275fac = function FourProduct_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FourProduct)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FourProduct, selectors: [["app-four-product"]], inputs: { products: "products" }, decls: 2, vars: 1, consts: [[1, "d-flex", "gap-4", "flex-wrap", "justify-content-center"], [4, "ngFor", "ngForOf"], [3, "product"]], template: function FourProduct_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, FourProduct_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.products);
    }
  }, dependencies: [ProductCard, CommonModule, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FourProduct, [{
    type: Component,
    args: [{ selector: "app-four-product", imports: [ProductCard, CommonModule], template: '<div class="d-flex gap-4 flex-wrap justify-content-center">\r\n<div *ngFor="let product of products" >\r\n    <app-product-card [product]="product"></app-product-card>\r\n</div>\r\n</div>' }]
  }], null, { products: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FourProduct, { className: "FourProduct", filePath: "app/shared/components/four-product/four-product.ts", lineNumber: 11 });
})();

// src/app/features/home/components/hero/hero.ts
var Hero = class _Hero {
  static \u0275fac = function Hero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], decls: 27, vars: 0, consts: [[1, "hero", "cont"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "hero-title"], [1, "hero-description"], ["href", "#", 1, "btn", "btn-dark", "btn-lg"], [1, "brands-bar"], [1, "brands-container"]], template: function Hero_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4)(5, "p");
      \u0275\u0275text(6, "FIND CLOTHES");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p");
      \u0275\u0275text(8, "THAT MATCHES");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p");
      \u0275\u0275text(10, "YOUR STYLE");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "p", 5);
      \u0275\u0275text(12, " Join our affiliate program and start earning commissions today. We offer a wide range of products and services to promote. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "a", 6);
      \u0275\u0275text(14, "Shop Now");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(15, "div", 7)(16, "div", 8)(17, "span");
      \u0275\u0275text(18, "VERSACE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "span");
      \u0275\u0275text(20, "ZARA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "span");
      \u0275\u0275text(22, "GUCCI");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "span");
      \u0275\u0275text(24, "PRADA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "span");
      \u0275\u0275text(26, "Calvin Klein");
      \u0275\u0275domElementEnd()()();
    }
  }, styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 650px;\n  background-image: url(/assets/images/homeImages/Group-2.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: right center;\n  display: flex;\n  align-items: center;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 1000;\n  margin-bottom: 20px;\n  font-family: "Anton", sans-serif;\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.hero[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n.hero-content[_ngcontent-%COMP%] {\n  min-height: 700px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  padding: 60px 40px 60px 80px;\n  max-width: 720px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 82px;\n  line-height: 0.95;\n  font-weight: 900;\n  color: #000;\n  margin: 0 0 24px;\n  letter-spacing: -2px;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  color: #6b6b6b;\n  max-width: 560px;\n  margin-bottom: 32px;\n}\n.hero-btn[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  border: none;\n  border-radius: 999px;\n  padding: 14px 54px;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 48px;\n}\n.hero-btn[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #fff;\n  opacity: 0.92;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.stat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  margin: 0 0 6px;\n  color: #000;\n}\n.stat-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #7a7a7a;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 65px;\n  background: #d8d8d8;\n}\n.hero-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 700px;\n  display: flex;\n  align-items: end;\n  justify-content: center;\n}\n.hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 700px;\n  height: auto;\n  object-fit: contain;\n}\n.brands-bar[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 34px 20px;\n}\n.brands-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 28px;\n  flex-wrap: wrap;\n}\n.brands-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 42px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n@media (max-width: 1199px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 64px;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    padding: 50px 30px 50px 50px;\n  }\n  .hero-image-wrapper[_ngcontent-%COMP%] {\n    min-height: 600px;\n  }\n}\n@media (max-width: 991px) {\n  .hero-content[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    padding: 40px 20px 20px;\n    text-align: center;\n    margin: 0 auto;\n  }\n  .hero-desc[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-image-wrapper[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 20px 20px 0;\n  }\n  .star-top[_ngcontent-%COMP%] {\n    right: 30px;\n    top: 10px;\n    font-size: 60px;\n  }\n  .star-middle[_ngcontent-%COMP%] {\n    left: 20px;\n    top: 35%;\n    font-size: 42px;\n  }\n  .brands-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media (max-width: 576px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 42px;\n    letter-spacing: -1px;\n  }\n  .hero-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 260px;\n  }\n  .stat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .brands-bar[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .brands-container[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .brands-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=hero.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [], template: '<div class="hero cont">\r\n  <div class="container">\r\n    <div class="row">\r\n      <div class="col-lg-6 col-md-12">\r\n        <h1 class="hero-title">\r\n          <p>FIND CLOTHES</p>\r\n          <p>THAT MATCHES</p>\r\n          <p>YOUR STYLE</p>\r\n        </h1>\r\n\r\n        <p class="hero-description">\r\n          Join our affiliate program and start earning commissions today.\r\n          We offer a wide range of products and services to promote.\r\n        </p>\r\n\r\n        <a href="#" class="btn btn-dark btn-lg ">Shop Now</a>\r\n    \r\n      </div>\r\n    </div>\r\n   </div>\r\n</div>\r\n  <div class="brands-bar">\r\n    <div class="brands-container">\r\n      <span>VERSACE</span>\r\n      <span>ZARA</span>\r\n      <span>GUCCI</span>\r\n      <span>PRADA</span>\r\n      <span>Calvin Klein</span>\r\n    </div>\r\n  </div>\r\n\r\n\r\n', styles: ['/* src/app/features/home/components/hero/hero.css */\n.hero {\n  width: 100%;\n  min-height: 650px;\n  background-image: url(/assets/images/homeImages/Group-2.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: right center;\n  display: flex;\n  align-items: center;\n}\n.hero-title {\n  font-size: 70px;\n  font-weight: 1000;\n  margin-bottom: 20px;\n  font-family: "Anton", sans-serif;\n}\n.hero-description {\n  font-size: 18px;\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.hero {\n  width: 100%;\n  overflow: hidden;\n}\n.hero-content {\n  min-height: 700px;\n}\n.hero-text {\n  padding: 60px 40px 60px 80px;\n  max-width: 720px;\n}\n.hero-title {\n  font-size: 82px;\n  line-height: 0.95;\n  font-weight: 900;\n  color: #000;\n  margin: 0 0 24px;\n  letter-spacing: -2px;\n}\n.hero-desc {\n  font-size: 16px;\n  line-height: 1.7;\n  color: #6b6b6b;\n  max-width: 560px;\n  margin-bottom: 32px;\n}\n.hero-btn {\n  background: #000;\n  color: #fff;\n  border: none;\n  border-radius: 999px;\n  padding: 14px 54px;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 48px;\n}\n.hero-btn:hover {\n  background: #000;\n  color: #fff;\n  opacity: 0.92;\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.stat-item h3 {\n  font-size: 42px;\n  font-weight: 800;\n  margin: 0 0 6px;\n  color: #000;\n}\n.stat-item span {\n  font-size: 16px;\n  color: #7a7a7a;\n}\n.stat-divider {\n  width: 1px;\n  height: 65px;\n  background: #d8d8d8;\n}\n.hero-image-wrapper {\n  position: relative;\n  min-height: 700px;\n  display: flex;\n  align-items: end;\n  justify-content: center;\n}\n.hero-image {\n  width: 100%;\n  max-width: 700px;\n  height: auto;\n  object-fit: contain;\n}\n.brands-bar {\n  background: #000;\n  padding: 34px 20px;\n}\n.brands-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 28px;\n  flex-wrap: wrap;\n}\n.brands-container span {\n  color: #fff;\n  font-size: 42px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n@media (max-width: 1199px) {\n  .hero-title {\n    font-size: 64px;\n  }\n  .hero-text {\n    padding: 50px 30px 50px 50px;\n  }\n  .hero-image-wrapper {\n    min-height: 600px;\n  }\n}\n@media (max-width: 991px) {\n  .hero-content {\n    min-height: auto;\n  }\n  .hero-text {\n    padding: 40px 20px 20px;\n    text-align: center;\n    margin: 0 auto;\n  }\n  .hero-desc {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero-stats {\n    justify-content: center;\n  }\n  .stat-divider {\n    display: none;\n  }\n  .hero-image-wrapper {\n    min-height: auto;\n    padding: 20px 20px 0;\n  }\n  .star-top {\n    right: 30px;\n    top: 10px;\n    font-size: 60px;\n  }\n  .star-middle {\n    left: 20px;\n    top: 35%;\n    font-size: 42px;\n  }\n  .brands-container span {\n    font-size: 28px;\n  }\n}\n@media (max-width: 576px) {\n  .hero-title {\n    font-size: 42px;\n    letter-spacing: -1px;\n  }\n  .hero-btn {\n    width: 100%;\n    max-width: 260px;\n  }\n  .stat-item h3 {\n    font-size: 32px;\n  }\n  .brands-bar {\n    padding: 24px 16px;\n  }\n  .brands-container {\n    gap: 18px;\n  }\n  .brands-container span {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=hero.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "app/features/home/components/hero/hero.ts", lineNumber: 9 });
})();

// src/app/features/home/components/cartcollection/cartcollection.ts
var Cartcollection = class _Cartcollection {
  products;
  constructor() {
    console.log(this.products);
  }
  static \u0275fac = function Cartcollection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cartcollection)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cartcollection, selectors: [["app-cartcollection"]], inputs: { products: "products" }, decls: 5, vars: 1, consts: [[1, "card-title", "container"], [3, "products"], [1, "view-btn"]], template: function Cartcollection_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1, "NEW ARRIVALS");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "app-four-product", 1);
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275text(4, "View All");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("products", ctx.products);
    }
  }, dependencies: [FourProduct, CommonModule], styles: ['\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  padding: 60px 0;\n  font-family: "Anton", sans-serif;\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  border-radius: 999px;\n  border: 1px solid #d9d9d9;\n  background: transparent;\n  font-size: 18px;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin: 0 auto;\n  display: flex;\n  margin: 40px auto;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #fff;\n  border-color: #000;\n}\n/*# sourceMappingURL=cartcollection.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cartcollection, [{
    type: Component,
    args: [{ selector: "app-cartcollection", imports: [FourProduct, CommonModule], template: '<div class="card-title container ">NEW ARRIVALS</div>\r\n<app-four-product [products]="products"></app-four-product>\r\n<button class="view-btn">View All</button>', styles: ['/* src/app/features/home/components/cartcollection/cartcollection.css */\n.card-title {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  padding: 60px 0;\n  font-family: "Anton", sans-serif;\n}\n.view-btn {\n  padding: 16px 48px;\n  border-radius: 999px;\n  border: 1px solid #d9d9d9;\n  background: transparent;\n  font-size: 18px;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin: 0 auto;\n  display: flex;\n  margin: 40px auto;\n}\n.view-btn:hover {\n  background: #000;\n  color: #fff;\n  border-color: #000;\n}\n/*# sourceMappingURL=cartcollection.css.map */\n'] }]
  }], () => [], { products: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cartcollection, { className: "Cartcollection", filePath: "app/features/home/components/cartcollection/cartcollection.ts", lineNumber: 11 });
})();

// src/app/features/home/components/cardreview/cardreview.ts
var Cardreview = class _Cardreview {
  static \u0275fac = function Cardreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cardreview)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cardreview, selectors: [["app-cardreview"]], decls: 50, vars: 0, consts: [[1, "testimonial", "py-5", "bg-light"], [1, "container"], [1, "text-center", "mb-5", "card-title"], [1, "row"], [1, "col-md-4", "mb-4"], [1, "card"], [1, "card-body", "text-left"], [1, "text-warning", "mb-3"], [1, "bi", "bi-star-fill"], [1, "bi", "bi-star"], [1, "card-inside-card"], [1, "badge"], [1, "card-text"]], template: function Cardreview_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "What Our Clients Say");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275domElement(9, "i", 8)(10, "i", 8)(11, "i", 8)(12, "i", 8)(13, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "div", 10);
      \u0275\u0275text(15, " Alex K. ");
      \u0275\u0275domElementStart(16, "span", 11);
      \u0275\u0275text(17, "\u2714");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "p", 12);
      \u0275\u0275text(19, '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum Lorem ipsum dolor ccusamus et iusto odio sit, amet consectetur adipisicing elit. Incidunt hic ex fugiat velit nobis fuga!."');
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(20, "div", 4)(21, "div", 5)(22, "div", 6)(23, "div", 7);
      \u0275\u0275domElement(24, "i", 8)(25, "i", 8)(26, "i", 8)(27, "i", 8)(28, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 10);
      \u0275\u0275text(30, " Mike Johnson ");
      \u0275\u0275domElementStart(31, "span", 11);
      \u0275\u0275text(32, "\u2714");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "p", 12);
      \u0275\u0275text(34, '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatum ducimus fugiat. Officia, dolorem distinctio?."');
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(35, "div", 4)(36, "div", 5)(37, "div", 6)(38, "div", 7);
      \u0275\u0275domElement(39, "i", 8)(40, "i", 8)(41, "i", 8)(42, "i", 8)(43, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "div", 10);
      \u0275\u0275text(45, " Mike Johnson ");
      \u0275\u0275domElementStart(46, "span", 11);
      \u0275\u0275text(47, "\u2714");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "p", 12);
      \u0275\u0275text(49, '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam reiciendis aspernatur. Similique, reprehenderit ipsa.."');
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, styles: ['\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  font-family: "Anton", sans-serif;\n  display: flex;\n  text-align: left;\n}\n.card-inside-card[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 150;\n  text-align: center;\n  font-family: "Anton", sans-serif;\n  display: flex;\n  text-align: left;\n}\n.card-inside-card[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.badge[_ngcontent-%COMP%] {\n  background-color: #07f178;\n  color: white;\n  font-size: 12px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=cardreview.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cardreview, [{
    type: Component,
    args: [{ selector: "app-cardreview", imports: [], template: ' <section class="testimonial py-5 bg-light">\r\n        <div class="container">\r\n            <h2 class="text-center mb-5 card-title">What Our Clients Say</h2>\r\n            <div class="row">\r\n                <div class="col-md-4 mb-4">\r\n                    <div class="card">\r\n                        <div class="card-body text-left">\r\n                              <div class="text-warning mb-3">\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star"></i>\r\n                            </div>\r\n                            <!-- <img src="https://randomuser.me/api/portraits/men/43.jpg" class="rounded-circle mb-3" alt="Client Avatar"> -->\r\n                            <div class="card-inside-card">\r\n                               Alex K.\r\n                                <span class="badge">\u2714</span>\r\n                            </div>\r\n                            <p class="card-text">"At vero eos et accusamus et iusto odio dignissimos ducimus qui\r\n                                blanditiis praesentium voluptatum Lorem ipsum dolor ccusamus et iusto odio sit, amet consectetur adipisicing elit. Incidunt hic ex fugiat velit nobis fuga!."</p>\r\n                          \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="col-md-4 mb-4">\r\n                    <div class="card">\r\n                       <div class="card-body text-left">\r\n                              <div class="text-warning mb-3">\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star"></i>\r\n                            </div>\r\n                            <!-- <img src="https://randomuser.me/api/portraits/men/43.jpg" class="rounded-circle mb-3" alt="Client Avatar"> -->\r\n                            <div class="card-inside-card">\r\n                               Mike Johnson\r\n                                <span class="badge">\u2714</span>\r\n                            </div>\r\n                            <p class="card-text">"At vero eos et accusamus et iusto odio dignissimos ducimus qui\r\n                                blanditiis praesentium voluptatum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptatum ducimus fugiat. Officia, dolorem distinctio?."</p>\r\n                          \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="col-md-4 mb-4">\r\n                    <div class="card">\r\n                       <div class="card-body text-left">\r\n                              <div class="text-warning mb-3">\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star-fill"></i>\r\n                                <i class="bi bi-star"></i>\r\n                            </div>\r\n                            <!-- <img src="https://randomuser.me/api/portraits/men/43.jpg" class="rounded-circle mb-3" alt="Client Avatar"> -->\r\n                            <div class="card-inside-card">\r\n                               Mike Johnson\r\n                                <span class="badge">\u2714</span>\r\n                            </div>\r\n                            <p class="card-text">"At vero eos et accusamus et iusto odio dignissimos ducimus qui\r\n                                blanditiis praesentium voluptatum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam reiciendis aspernatur. Similique, reprehenderit ipsa.."</p>\r\n                          \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>', styles: ['/* src/app/features/home/components/cardreview/cardreview.css */\n.card-title {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  font-family: "Anton", sans-serif;\n  display: flex;\n  text-align: left;\n}\n.card-inside-card {\n  font-size: 30px;\n  font-weight: 150;\n  text-align: center;\n  font-family: "Anton", sans-serif;\n  display: flex;\n  text-align: left;\n}\n.card-inside-card {\n  font-size: 20px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.badge {\n  background-color: #07f178;\n  color: white;\n  font-size: 12px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=cardreview.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cardreview, { className: "Cardreview", filePath: "app/features/home/components/cardreview/cardreview.ts", lineNumber: 9 });
})();

// src/app/features/home/components/dressstyle/dressstyle.ts
var Dressstyle = class _Dressstyle {
  static \u0275fac = function Dressstyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dressstyle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dressstyle, selectors: [["app-dressstyle"]], decls: 25, vars: 0, consts: [[1, "container-custom"], [1, "card-title"], [1, "row"], [1, "col-12", "casual-col"], [1, "style-card", "casual-bg"], [1, "card-content"], [1, "category-name"], [1, "col-12", "formal-col"], [1, "style-card", "formal-bg"], [1, "col-12", "gym-col"], [1, "style-card", "gym-bg"], [1, "col-12", "party-col"], [1, "style-card", "party-bg"]], template: function Dressstyle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "BROWSE BY DRESS STYLE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8, "Casual");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(9, "div", 7)(10, "div", 8)(11, "div", 5)(12, "div", 6);
      \u0275\u0275text(13, "Formal");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(14, "div", 2)(15, "div", 9)(16, "div", 10)(17, "div", 5)(18, "div", 6);
      \u0275\u0275text(19, "Gym");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(20, "div", 11)(21, "div", 12)(22, "div", 5)(23, "div", 6);
      \u0275\u0275text(24, "Party");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background: #f5f2ed;\n  font-family: "Inter", sans-serif;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.container-custom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n}\n.browse-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Playfair Display", serif;\n  font-size: 2.2rem;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: #1a1a1a;\n  margin-bottom: 2.5rem;\n}\n@media (max-width: 768px) {\n  .browse-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.style-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n  border-radius: 0;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.style-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1;\n  transition: background 0.3s ease;\n}\n.style-card[_ngcontent-%COMP%]:hover::before {\n  background: rgba(0, 0, 0, 0.45);\n}\n.style-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.2);\n}\n.card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1.5rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n  color: #ffffff;\n  margin-bottom: 0.5rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n}\n.category-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.9);\n  max-width: 85%;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  font-weight: 400;\n}\n.casual-bg[_ngcontent-%COMP%] {\n  background-image: url(https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&h=600&fit=crop);\n}\n.formal-bg[_ngcontent-%COMP%] {\n  background-image: url(https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=600&fit=crop);\n}\n.gym-bg[_ngcontent-%COMP%] {\n  background-image: url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop);\n}\n.party-bg[_ngcontent-%COMP%] {\n  background-image: url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop);\n}\n@media (min-width: 768px) {\n  .casual-col[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .formal-col[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .gym-col[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .party-col[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .style-card[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n  .category-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .casual-col[_ngcontent-%COMP%], \n   .party-col[_ngcontent-%COMP%] {\n    flex: 0 0 40%;\n    max-width: 40%;\n  }\n  .formal-col[_ngcontent-%COMP%], \n   .gym-col[_ngcontent-%COMP%] {\n    flex: 0 0 60%;\n    max-width: 60%;\n  }\n  .style-card[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n  .category-name[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .category-desc[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 575px) {\n  .casual-col[_ngcontent-%COMP%], \n   .formal-col[_ngcontent-%COMP%], \n   .gym-col[_ngcontent-%COMP%], \n   .party-col[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .style-card[_ngcontent-%COMP%] {\n    min-height: 220px;\n  }\n  .category-name[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .browse-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.row[_ngcontent-%COMP%] {\n  margin-right: -12px;\n  margin-left: -12px;\n  margin-bottom: 24px;\n}\n.row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  padding: 20px 0;\n  font-family: "Anton", sans-serif;\n}\n/*# sourceMappingURL=dressstyle.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dressstyle, [{
    type: Component,
    args: [{ selector: "app-dressstyle", imports: [], template: '<div class="container-custom">\r\n  <div class="card-title">BROWSE BY DRESS STYLE</div>\r\n\r\n  <!-- \u0627\u0644\u0635\u0641 \u0627\u0644\u0623\u0648\u0644: Casual (\u064A\u0633\u0627\u0631 - \u0623\u0635\u063A\u0631) + Formal (\u064A\u0645\u064A\u0646 - \u0623\u0643\u0628\u0631) -->\r\n  <div class="row">\r\n    <div class="col-12 casual-col">\r\n      <div class="style-card casual-bg">\r\n        <div class="card-content">\r\n          <div class="category-name">Casual</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-12 formal-col">\r\n      <div class="style-card formal-bg">\r\n        <div class="card-content">\r\n          <div class="category-name">Formal</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A: Gym (\u064A\u0633\u0627\u0631 - \u0623\u0643\u0628\u0631) + Party (\u064A\u0645\u064A\u0646 - \u0623\u0635\u063A\u0631) -->\r\n  <div class="row">\r\n    <div class="col-12 gym-col">\r\n      <div class="style-card gym-bg">\r\n        <div class="card-content">\r\n          <div class="category-name">Gym</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-12 party-col">\r\n      <div class="style-card party-bg">\r\n        <div class="card-content">\r\n          <div class="category-name">Party</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>', styles: ['/* src/app/features/home/components/dressstyle/dressstyle.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: #f5f2ed;\n  font-family: "Inter", sans-serif;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.container-custom {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n}\n.browse-title {\n  text-align: center;\n  font-family: "Playfair Display", serif;\n  font-size: 2.2rem;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: #1a1a1a;\n  margin-bottom: 2.5rem;\n}\n@media (max-width: 768px) {\n  .browse-title {\n    font-size: 1.6rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.style-card {\n  position: relative;\n  min-height: 200px;\n  border-radius: 0;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.style-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1;\n  transition: background 0.3s ease;\n}\n.style-card:hover::before {\n  background: rgba(0, 0, 0, 0.45);\n}\n.style-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.2);\n}\n.card-content {\n  position: relative;\n  z-index: 2;\n  padding: 1.5rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.category-name {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n  color: #ffffff;\n  margin-bottom: 0.5rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n}\n.category-desc {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.9);\n  max-width: 85%;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  font-weight: 400;\n}\n.casual-bg {\n  background-image: url(https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&h=600&fit=crop);\n}\n.formal-bg {\n  background-image: url(https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=600&fit=crop);\n}\n.gym-bg {\n  background-image: url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop);\n}\n.party-bg {\n  background-image: url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop);\n}\n@media (min-width: 768px) {\n  .casual-col {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .formal-col {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .gym-col {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .party-col {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .style-card {\n    min-height: 320px;\n  }\n  .category-name {\n    font-size: 2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .casual-col,\n  .party-col {\n    flex: 0 0 40%;\n    max-width: 40%;\n  }\n  .formal-col,\n  .gym-col {\n    flex: 0 0 60%;\n    max-width: 60%;\n  }\n  .style-card {\n    min-height: 250px;\n  }\n  .category-name {\n    font-size: 1.5rem;\n  }\n  .category-desc {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 575px) {\n  .casual-col,\n  .formal-col,\n  .gym-col,\n  .party-col {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .style-card {\n    min-height: 220px;\n  }\n  .category-name {\n    font-size: 1.6rem;\n  }\n  .browse-title {\n    font-size: 1.5rem;\n  }\n}\n.row {\n  margin-right: -12px;\n  margin-left: -12px;\n  margin-bottom: 24px;\n}\n.row > [class*=col-] {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.card-title {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  padding: 20px 0;\n  font-family: "Anton", sans-serif;\n}\n/*# sourceMappingURL=dressstyle.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dressstyle, { className: "Dressstyle", filePath: "app/features/home/components/dressstyle/dressstyle.ts", lineNumber: 9 });
})();

// src/app/services/product/product.ts
var ProductService = class _ProductService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;
  getProducts(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.search) {
        params = params.set("Search", filters.search);
      }
      if (filters.minPrice > 0) {
        params = params.set("MinPrice", filters.minPrice.toString());
      }
      if (filters.maxPrice < 99999) {
        params = params.set("MaxPrice", filters.maxPrice.toString());
      }
    }
    return this.http.get(`${this.baseUrl}products`, { params }).pipe(map((items) => this.mapProducts(items, filters)));
  }
  getProductById(id) {
    return this.http.get(`${this.baseUrl}products/${id}`).pipe(map((item) => this.mapProduct(item)));
  }
  getCategories() {
    return this.http.get(`${this.baseUrl}categories`);
  }
  getProductsByCategory(categoryId, filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.search) {
        params = params.set("Search", filters.search);
      }
      if (filters.minPrice > 0) {
        params = params.set("MinPrice", filters.minPrice.toString());
      }
      if (filters.maxPrice < 99999) {
        params = params.set("MaxPrice", filters.maxPrice.toString());
      }
    }
    return this.http.get(`${this.baseUrl}products/category/${categoryId}`, { params }).pipe(map((items) => this.mapProducts(items, filters)));
  }
  /** Map backend ProductDto → frontend Product */
  mapProduct(item) {
    return {
      id: item.id,
      name: item.name,
      description: item.description ?? "",
      details: item.details ?? "",
      price: item.price,
      rating: item.reviews?.length ? item.reviews.reduce((sum, r) => sum + r.rating, 0) / item.reviews.length : 0,
      reviewsCount: item.reviews?.length ?? 0,
      reviews: item.reviews ?? [],
      image: item.images?.[0] ?? "",
      images: item.images ?? [],
      stock: item.stock,
      stockQuantity: item.stock,
      categoryId: item.categoryId,
      categoryName: item.categoryName,
      category: item.categoryName,
      merchantName: item.merchantName,
      status: item.status,
      createdAt: item.createdAt
    };
  }
  /** Map array + apply client-side sorting */
  mapProducts(items, filters) {
    let products = items.map((item) => this.mapProduct(item));
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case "price-low":
          products.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          products.sort((a, b) => b.price - a.price);
          break;
        case "popular":
          products.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
          break;
        case "newest":
          products.sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA;
          });
          break;
      }
    }
    return products;
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/home/home/home.ts
var Home = class _Home {
  productService;
  products;
  constructor(productService) {
    this.productService = productService;
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products);
      },
      error: (error) => console.log(error)
    });
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 10, vars: 2, consts: [[3, "products"], [1, "divider"], [1, "card-title", "container"], [1, "view-btn"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-cartcollection", 0)(2, "hr", 1);
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, "TOP SELLING");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "app-four-product", 0);
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275text(7, "View All");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-cardreview")(9, "app-dressstyle");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("products", ctx.products);
      \u0275\u0275advance(4);
      \u0275\u0275property("products", ctx.products);
    }
  }, dependencies: [Hero, Cartcollection, Cardreview, FourProduct, Dressstyle], styles: ['\n\n.divider[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 3px;\n  background-color: #ccc;\n  margin: 20px auto;\n  border-radius: 2px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  padding: 60px 0;\n  font-family: "Anton", sans-serif;\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  border-radius: 999px;\n  border: 1px solid #d9d9d9;\n  background: transparent;\n  font-size: 18px;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin: 0 auto;\n  display: flex;\n  margin: 40px auto;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #fff;\n  border-color: #000;\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [Hero, Cartcollection, Cardreview, FourProduct, Dressstyle], template: '<!-- \u0647\u0646\u0627  \u0628\u0646\u062D\u0637 \u0627\u0644 commponents  -->\r\n<!-- <app-flash-sale></app-flash-sale>\r\n<app-browse-category></app-browse-category>\r\n<app-this-month></app-this-month>\r\n<app-category-banner></app-category-banner>\r\n<app-our-products></app-our-products>\r\n<app-new-arrival></app-new-arrival>\r\n<app-services></app-services> -->\r\n<!-- <div class="p-5">Home Component Her</div> -->\r\n<app-hero></app-hero>\r\n<app-cartcollection [products]="products"></app-cartcollection>\r\n<hr class="divider">\r\n<div class="card-title container ">TOP SELLING</div>\r\n\r\n<app-four-product [products]="products"></app-four-product>\r\n<button class="view-btn">View All</button>\r\n<app-cardreview></app-cardreview>\r\n<!-- <app-four-product [products]="products"></app-four-product> -->\r\n<app-dressstyle></app-dressstyle>\r\n<!-- \r\n <div class="d-flex">\r\n        <div class="hero-stats">\r\n            <div class="stat-item">\r\n              <h3>200+</h3>\r\n              <span>International Brands</span>\r\n            </div>\r\n        \r\n            <div class="stat-divider"></div>\r\n\r\n            <div class="stat-item">\r\n              <h3>2,000+</h3>\r\n              <span>High-Quality Products</span>\r\n            </div>\r\n\r\n            <div class="stat-divider"></div>\r\n\r\n            <div class="stat-item">\r\n              <h3>30,000+</h3>\r\n              <span>Happy Customers</span>\r\n            </div>\r\n         </div>\r\n\r\n\r\n      </div> -->', styles: ['/* src/app/features/home/home/home.css */\n.divider {\n  width: 80%;\n  height: 3px;\n  background-color: #ccc;\n  margin: 20px auto;\n  border-radius: 2px;\n}\n.card-title {\n  font-size: 70px;\n  font-weight: 1000;\n  text-align: center;\n  padding: 60px 0;\n  font-family: "Anton", sans-serif;\n}\n.view-btn {\n  padding: 16px 48px;\n  border-radius: 999px;\n  border: 1px solid #d9d9d9;\n  background: transparent;\n  font-size: 18px;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin: 0 auto;\n  display: flex;\n  margin: 40px auto;\n}\n.view-btn:hover {\n  background: #000;\n  color: #fff;\n  border-color: #000;\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "app/features/home/home/home.ts", lineNumber: 17 });
})();

// src/app/services/auth/auth.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  apiUrl = environment.baseUrl.replace(/\/api\/$/, "");
  currentUser$ = new BehaviorSubject(this.getUser());
  // ─── Login ────────────────────────────────────────────
  login(data) {
    return this.http.post(`${this.apiUrl}/api/Auth/login`, data).pipe(tap((res) => {
      this.saveSession(res.data.token, res.data);
    }));
  }
  // ─── Register ─────────────────────────────────────────
  // لو role = 'trader'   → register-merchant
  // لو role = 'marketer' → register-affiliate
  register(data) {
    const endpoint = data.role === "trader" ? "/api/Auth/register-merchant" : "/api/Auth/register-affiliate";
    const _a = data, { role } = _a, body = __objRest(_a, ["role"]);
    return this.http.post(`${this.apiUrl}${endpoint}`, body).pipe(tap((res) => {
      if (res?.data?.token) {
        this.saveSession(res.data.token, res.data);
      }
    }));
  }
  // ─── Logout ───────────────────────────────────────────
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.currentUser$.next(null);
    this.router.navigate(["/login"]);
  }
  // ─── Helpers ──────────────────────────────────────────
  getToken() {
    return localStorage.getItem("token");
  }
  getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  getCurrentUser() {
    return this.currentUser$.asObservable();
  }
  saveSession(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUser$.next(user);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/auth/login/login.ts
function Login_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function Login_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, " Min 6 characters ");
    \u0275\u0275elementEnd();
  }
}
function Login_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var Login = class _Login {
  fb;
  authService;
  router;
  loginForm;
  isLoading = false;
  errorMessage = "";
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Email or password is incorrect";
        this.isLoading = false;
      }
    });
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 74, vars: 6, consts: [[1, "page-wrap"], [1, "left-panel"], [1, "brand-name"], [1, "brand-sub"], [1, "divider"], [1, "form-title"], [1, "form-subtitle"], [1, "form-body", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-input"], ["class", "field-error", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-input"], [1, "forgot-link"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-signin", 3, "disabled"], [1, "form-footer"], ["routerLink", "/register"], [1, "right-panel"], [1, "deco-circle", "deco-c1"], [1, "deco-circle", "deco-c2"], [1, "deco-circle", "deco-c3"], [1, "right-headline"], [1, "right-sub"], [1, "feature-list"], [1, "feature-item"], [1, "feature-icon"], ["viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "2", "y", "5", "width", "14", "height", "11", "rx", "1.5", "stroke", "#fff", "stroke-width", "1.4"], ["d", "M6 5V4a3 3 0 116 0v1", "stroke", "#fff", "stroke-width", "1.4", "stroke-linecap", "round"], ["d", "M6 11h6", "stroke", "#fff", "stroke-width", "1.2", "stroke-linecap", "round"], [1, "feature-text"], ["d", "M2 13l4-4.5 3 3 3.5-5 3.5 4", "stroke", "#fff", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "14", "cy", "4", "r", "2", "stroke", "#fff", "stroke-width", "1.4"], ["x", "2", "y", "6", "width", "14", "height", "10", "rx", "1.5", "stroke", "#fff", "stroke-width", "1.4"], ["d", "M6 6V5a3 3 0 116 0v1", "stroke", "#fff", "stroke-width", "1.4", "stroke-linecap", "round"], ["cx", "9", "cy", "11", "r", "1.5", "fill", "#fff"], [1, "field-error"], [1, "error-msg"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "S O U Q");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5, "Premium Marketplace");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 4);
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10, "Sign in to your account to continue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
      \u0275\u0275text(14, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 10);
      \u0275\u0275template(16, Login_span_16_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8)(18, "label", 12);
      \u0275\u0275text(19, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 13);
      \u0275\u0275template(21, Login_span_21_Template, 2, 0, "span", 11);
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275text(23, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, Login_span_24_Template, 2, 1, "span", 15);
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17);
      \u0275\u0275text(28, " Don't have an account? ");
      \u0275\u0275elementStart(29, "a", 18);
      \u0275\u0275text(30, "Create one");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 19);
      \u0275\u0275element(32, "div", 20)(33, "div", 21)(34, "div", 22);
      \u0275\u0275elementStart(35, "div", 23);
      \u0275\u0275text(36, "Your store,");
      \u0275\u0275element(37, "br");
      \u0275\u0275text(38, "your rules.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 24);
      \u0275\u0275text(40, " Join thousands of traders and marketers building their business on our platform. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 25)(42, "div", 26)(43, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 28);
      \u0275\u0275element(45, "rect", 29)(46, "path", 30)(47, "path", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "div", 32)(49, "strong");
      \u0275\u0275text(50, "Trader Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Manage products & orders easily");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 26)(54, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 28);
      \u0275\u0275element(56, "path", 33)(57, "circle", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "div", 32)(59, "strong");
      \u0275\u0275text(60, "Marketer Tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "Track campaigns & earn commissions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 26)(64, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(65, "svg", 28);
      \u0275\u0275element(66, "rect", 35)(67, "path", 36)(68, "circle", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 32)(70, "strong");
      \u0275\u0275text(71, "Secure & Trusted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73, "Your data is always protected");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Signing in..." : "Sign In", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['/* src/app/features/auth/login/login.css */\n.page-wrap {\n  display: flex;\n  min-height: 100vh;\n  font-family: "DM Sans", sans-serif;\n}\n.left-panel {\n  width: 41%;\n  min-width: 340px;\n  background: #0a0a0a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 52px 40px;\n  position: relative;\n}\n.left-panel::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #ffffff;\n}\n.brand-name {\n  font-family: "Playfair Display", serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 14px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.brand-sub {\n  font-size: 11px;\n  color: #bbbbbb;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 42px;\n}\n.divider {\n  width: 38px;\n  height: 1px;\n  background: #2a2a2a;\n  margin: 0 auto 36px;\n}\n.form-title {\n  font-family: "Playfair Display", serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.form-subtitle {\n  font-size: 13px;\n  color: #d1d1d1;\n  text-align: center;\n  margin-bottom: 34px;\n  line-height: 1.6;\n}\n.form-body {\n  width: 100%;\n}\n.form-group {\n  width: 100%;\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #ffffff;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n  line-height: 1;\n}\n.form-input {\n  width: 100%;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #2a2a2a;\n  padding: 10px 0 12px 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  color: #ffffff;\n  outline: none;\n  transition: border-color 0.25s;\n  line-height: 1.4;\n}\n.form-input::placeholder {\n  color: #bbbbbb;\n  font-size: 14px;\n}\n.form-input:focus {\n  border-bottom-color: #ffffff;\n}\n.form-input:-webkit-autofill,\n.form-input:-webkit-autofill:hover,\n.form-input:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset;\n  -webkit-text-fill-color: #ffffff;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.forgot-link {\n  font-size: 11.5px;\n  color: #555555;\n  text-align: right;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.forgot-link:hover {\n  color: #aaaaaa;\n}\n.field-error {\n  display: block;\n  font-size: 11px;\n  color: #e05a5a;\n  margin-top: 5px;\n  letter-spacing: 0.3px;\n}\n.error-msg {\n  display: block;\n  font-size: 12px;\n  color: #e05a5a;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.btn-signin {\n  width: 100%;\n  background: #ffffff;\n  color: #0a0a0a;\n  border: none;\n  padding: 16px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-top: 32px;\n  margin-bottom: 24px;\n  border-radius: 24px;\n  transition: background 0.2s;\n}\n.btn-signin:hover {\n  background: #e8e4dc;\n}\n.btn-signin:active {\n  background: #d0ccc4;\n}\n.btn-signin:disabled {\n  background: #2a2a2a;\n  color: #555555;\n  cursor: not-allowed;\n}\n.form-footer {\n  font-size: 12px;\n  color: #555555;\n  text-align: center;\n  line-height: 1.6;\n}\n.form-footer a {\n  color: #aaaaaa;\n  text-decoration: none;\n  border-bottom: 1px solid #444444;\n  padding-bottom: 1px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.form-footer a:hover {\n  color: #ffffff;\n  border-color: #ffffff;\n}\n.right-panel {\n  flex: 1;\n  background: #f5f3ee;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 52px;\n  position: relative;\n  overflow: hidden;\n}\n.deco-circle {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.deco-c1 {\n  width: 500px;\n  height: 500px;\n  top: -120px;\n  right: -120px;\n  border: 1px solid #e0ddd6;\n}\n.deco-c2 {\n  width: 320px;\n  height: 320px;\n  top: 40px;\n  right: 40px;\n  border: 1px solid #e0ddd6;\n}\n.deco-c3 {\n  width: 620px;\n  height: 620px;\n  bottom: -260px;\n  left: -160px;\n  border: 1px solid #d8d5ce;\n}\n.right-headline {\n  font-family: "Playfair Display", serif;\n  font-size: 44px;\n  font-weight: 700;\n  color: #111111;\n  line-height: 1.15;\n  text-align: center;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 2;\n}\n.right-sub {\n  font-size: 14px;\n  color: #888888;\n  text-align: center;\n  line-height: 1.85;\n  max-width: 300px;\n  margin-bottom: 44px;\n  position: relative;\n  z-index: 2;\n}\n.feature-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  width: 100%;\n  max-width: 360px;\n  position: relative;\n  z-index: 2;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  padding: 16px 20px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e2da;\n  transition: border-color 0.2s;\n}\n.feature-item:hover {\n  border-color: #aaaaaa;\n}\n.feature-icon {\n  width: 40px;\n  height: 40px;\n  background: #111111;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon svg {\n  width: 17px;\n  height: 17px;\n}\n.feature-text {\n  line-height: 1.4;\n}\n.feature-text strong {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #111111;\n  margin-bottom: 3px;\n}\n.feature-text span {\n  font-size: 12px;\n  color: #888888;\n}\n@media (max-width: 820px) {\n  .page-wrap {\n    flex-direction: column;\n  }\n  .left-panel {\n    width: 100%;\n    min-width: unset;\n    padding: 48px 32px;\n  }\n  .right-panel {\n    display: none;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, ReactiveFormsModule, RouterLink], encapsulation: ViewEncapsulation.None, template: `<!-- <div class="page-wrap">\r
\r
  \r
  <div class="left-panel">\r
    <div class="brand-mark">SOUQ</div>\r
    <div class="brand-tagline">Premium Marketplace</div>\r
\r
    <div class="divider"></div>\r
\r
    <div class="form-title">Welcome back</div>\r
    <div class="form-subtitle">Sign in to your account to continue</div>\r
\r
    <div class="form-group">\r
      <label class="form-label" for="email">Email address</label>\r
      <input class="form-input" type="email" id="email" name="email" placeholder="you@example.com" autocomplete="email" required />\r
    </div>\r
\r
    <div class="form-group">\r
      <label class="form-label" for="password">Password</label>\r
      <input class="form-input" type="password" id="password" name="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password" required />\r
      <div class="forgot-link">Forgot password?</div>\r
    </div>\r
\r
    <button class="btn-primary" type="submit">Sign In</button>\r
\r
    <div class="form-footer">\r
      Don't have an account? <a routerLink="/register">Create one</a>\r
    </div>\r
  </div>\r
\r
  \r
  <div class="right-panel">\r
    <div class="deco-circle deco-c1"></div>\r
    <div class="deco-circle deco-c2"></div>\r
    <div class="deco-circle deco-c3"></div>\r
\r
    <div class="right-headline">Your store,<br>your rules.</div>\r
    <div class="right-sub">\r
      Join thousands of traders and marketers\r
      building their business on our platform.\r
    </div>\r
\r
    <div class="feature-list">\r
      <div class="feature-item">\r
        <div class="feature-icon">\r
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <rect x="1.5" y="4" width="13" height="10" rx="1.5" stroke="#fff" stroke-width="1.4"/>\r
            <path d="M5.5 4V3.5a2.5 2.5 0 015 0V4" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>\r
            <path d="M5 9h6" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>\r
          </svg>\r
        </div>\r
        <div class="feature-text">\r
          <strong>Trader Dashboard</strong>\r
          <span>Manage products &amp; orders easily</span>\r
        </div>\r
      </div>\r
\r
      <div class="feature-item">\r
        <div class="feature-icon">\r
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <path d="M2 11l3.5-3.5 2.5 2.5 3-4 3 3.5" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>\r
            <circle cx="13.5" cy="3.5" r="1.8" stroke="#fff" stroke-width="1.3"/>\r
          </svg>\r
        </div>\r
        <div class="feature-text">\r
          <strong>Marketer Tools</strong>\r
          <span>Track campaigns &amp; earn commissions</span>\r
        </div>\r
      </div>\r
\r
      <div class="feature-item">\r
        <div class="feature-icon">\r
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <rect x="2" y="5" width="12" height="9" rx="1.5" stroke="#fff" stroke-width="1.4"/>\r
            <path d="M5.5 5V4a2.5 2.5 0 015 0v1" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>\r
            <circle cx="8" cy="9.5" r="1.2" fill="#fff"/>\r
          </svg>\r
        </div>\r
        <div class="feature-text">\r
          <strong>Secure &amp; Trusted</strong>\r
          <span>Your data is always protected</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div> -->\r
<div class="page-wrap">\r
\r
  <!-- \u2550\u2550 LEFT: FORM \u2550\u2550 -->\r
  <div class="left-panel">\r
    <div class="brand-name">S O U Q</div>\r
    <div class="brand-sub">Premium Marketplace</div>\r
    <div class="divider"></div>\r
    <div class="form-title">Welcome back</div>\r
    <div class="form-subtitle">Sign in to your account to continue</div>\r
\r
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="form-body">\r
\r
      <div class="form-group">\r
        <label class="form-label" for="email">Email Address</label>\r
        <input\r
          class="form-input"\r
          type="email"\r
          id="email"\r
          formControlName="email"\r
          placeholder="you@example.com"\r
          autocomplete="email"\r
        />\r
        <span class="field-error"\r
              *ngIf="email?.invalid && email?.touched">\r
          Enter a valid email\r
        </span>\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="form-label" for="password">Password</label>\r
        <input\r
          class="form-input"\r
          type="password"\r
          id="password"\r
          formControlName="password"\r
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
          autocomplete="current-password"\r
        />\r
        <span class="field-error"\r
              *ngIf="password?.invalid && password?.touched">\r
          Min 6 characters\r
        </span>\r
        <div class="forgot-link">Forgot password?</div>\r
      </div>\r
\r
      <span class="error-msg" *ngIf="errorMessage">{{ errorMessage }}</span>\r
\r
      <button class="btn-signin" type="submit" [disabled]="isLoading">\r
        {{ isLoading ? 'Signing in...' : 'Sign In' }}\r
      </button>\r
\r
      <div class="form-footer">\r
        Don't have an account?\r
        <a routerLink="/register">Create one</a>\r
      </div>\r
\r
    </form>\r
  </div>\r
\r
  <!-- \u2550\u2550 RIGHT: PROMO \u2550\u2550 -->\r
  <div class="right-panel">\r
    <div class="deco-circle deco-c1"></div>\r
    <div class="deco-circle deco-c2"></div>\r
    <div class="deco-circle deco-c3"></div>\r
\r
    <div class="right-headline">Your store,<br>your rules.</div>\r
    <div class="right-sub">\r
      Join thousands of traders and marketers\r
      building their business on our platform.\r
    </div>\r
\r
    <div class="feature-list">\r
      <div class="feature-item">\r
        <div class="feature-icon">\r
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <rect x="2" y="5" width="14" height="11" rx="1.5" stroke="#fff" stroke-width="1.4"/>\r
            <path d="M6 5V4a3 3 0 116 0v1" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>\r
            <path d="M6 11h6" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>\r
          </svg>\r
        </div>\r
        <div class="feature-text">\r
          <strong>Trader Dashboard</strong>\r
          <span>Manage products &amp; orders easily</span>\r
        </div>\r
      </div>\r
\r
      <div class="feature-item">\r
        <div class="feature-icon">\r
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <path d="M2 13l4-4.5 3 3 3.5-5 3.5 4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>\r
            <circle cx="14" cy="4" r="2" stroke="#fff" stroke-width="1.4"/>\r
          </svg>\r
        </div>\r
        <div class="feature-text">\r
          <strong>Marketer Tools</strong>\r
          <span>Track campaigns &amp; earn commissions</span>\r
        </div>\r
      </div>\r
\r
      <div class="feature-item">\r
        <div class="feature-icon">\r
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="#fff" stroke-width="1.4"/>\r
            <path d="M6 6V5a3 3 0 116 0v1" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>\r
            <circle cx="9" cy="11" r="1.5" fill="#fff"/>\r
          </svg>\r
        </div>\r
        <div class="feature-text">\r
          <strong>Secure &amp; Trusted</strong>\r
          <span>Your data is always protected</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ['/* src/app/features/auth/login/login.css */\n.page-wrap {\n  display: flex;\n  min-height: 100vh;\n  font-family: "DM Sans", sans-serif;\n}\n.left-panel {\n  width: 41%;\n  min-width: 340px;\n  background: #0a0a0a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 52px 40px;\n  position: relative;\n}\n.left-panel::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #ffffff;\n}\n.brand-name {\n  font-family: "Playfair Display", serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 14px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.brand-sub {\n  font-size: 11px;\n  color: #bbbbbb;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 42px;\n}\n.divider {\n  width: 38px;\n  height: 1px;\n  background: #2a2a2a;\n  margin: 0 auto 36px;\n}\n.form-title {\n  font-family: "Playfair Display", serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.form-subtitle {\n  font-size: 13px;\n  color: #d1d1d1;\n  text-align: center;\n  margin-bottom: 34px;\n  line-height: 1.6;\n}\n.form-body {\n  width: 100%;\n}\n.form-group {\n  width: 100%;\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  font-family: "DM Sans", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #ffffff;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n  line-height: 1;\n}\n.form-input {\n  width: 100%;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #2a2a2a;\n  padding: 10px 0 12px 0;\n  font-family: "DM Sans", sans-serif;\n  font-size: 14px;\n  color: #ffffff;\n  outline: none;\n  transition: border-color 0.25s;\n  line-height: 1.4;\n}\n.form-input::placeholder {\n  color: #bbbbbb;\n  font-size: 14px;\n}\n.form-input:focus {\n  border-bottom-color: #ffffff;\n}\n.form-input:-webkit-autofill,\n.form-input:-webkit-autofill:hover,\n.form-input:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset;\n  -webkit-text-fill-color: #ffffff;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.forgot-link {\n  font-size: 11.5px;\n  color: #555555;\n  text-align: right;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.forgot-link:hover {\n  color: #aaaaaa;\n}\n.field-error {\n  display: block;\n  font-size: 11px;\n  color: #e05a5a;\n  margin-top: 5px;\n  letter-spacing: 0.3px;\n}\n.error-msg {\n  display: block;\n  font-size: 12px;\n  color: #e05a5a;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.btn-signin {\n  width: 100%;\n  background: #ffffff;\n  color: #0a0a0a;\n  border: none;\n  padding: 16px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-top: 32px;\n  margin-bottom: 24px;\n  border-radius: 24px;\n  transition: background 0.2s;\n}\n.btn-signin:hover {\n  background: #e8e4dc;\n}\n.btn-signin:active {\n  background: #d0ccc4;\n}\n.btn-signin:disabled {\n  background: #2a2a2a;\n  color: #555555;\n  cursor: not-allowed;\n}\n.form-footer {\n  font-size: 12px;\n  color: #555555;\n  text-align: center;\n  line-height: 1.6;\n}\n.form-footer a {\n  color: #aaaaaa;\n  text-decoration: none;\n  border-bottom: 1px solid #444444;\n  padding-bottom: 1px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.form-footer a:hover {\n  color: #ffffff;\n  border-color: #ffffff;\n}\n.right-panel {\n  flex: 1;\n  background: #f5f3ee;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 52px;\n  position: relative;\n  overflow: hidden;\n}\n.deco-circle {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.deco-c1 {\n  width: 500px;\n  height: 500px;\n  top: -120px;\n  right: -120px;\n  border: 1px solid #e0ddd6;\n}\n.deco-c2 {\n  width: 320px;\n  height: 320px;\n  top: 40px;\n  right: 40px;\n  border: 1px solid #e0ddd6;\n}\n.deco-c3 {\n  width: 620px;\n  height: 620px;\n  bottom: -260px;\n  left: -160px;\n  border: 1px solid #d8d5ce;\n}\n.right-headline {\n  font-family: "Playfair Display", serif;\n  font-size: 44px;\n  font-weight: 700;\n  color: #111111;\n  line-height: 1.15;\n  text-align: center;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 2;\n}\n.right-sub {\n  font-size: 14px;\n  color: #888888;\n  text-align: center;\n  line-height: 1.85;\n  max-width: 300px;\n  margin-bottom: 44px;\n  position: relative;\n  z-index: 2;\n}\n.feature-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  width: 100%;\n  max-width: 360px;\n  position: relative;\n  z-index: 2;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  padding: 16px 20px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e2da;\n  transition: border-color 0.2s;\n}\n.feature-item:hover {\n  border-color: #aaaaaa;\n}\n.feature-icon {\n  width: 40px;\n  height: 40px;\n  background: #111111;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-icon svg {\n  width: 17px;\n  height: 17px;\n}\n.feature-text {\n  line-height: 1.4;\n}\n.feature-text strong {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #111111;\n  margin-bottom: 3px;\n}\n.feature-text span {\n  font-size: 12px;\n  color: #888888;\n}\n@media (max-width: 820px) {\n  .page-wrap {\n    flex-direction: column;\n  }\n  .left-panel {\n    width: 100%;\n    min-width: unset;\n    padding: 48px 32px;\n  }\n  .right-panel {\n    display: none;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "app/features/auth/login/login.ts", lineNumber: 14 });
})();

// src/app/guards/auth-guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  return router.createUrlTree(["/login"]);
};
var guestGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn())
    return true;
  return router.createUrlTree(["/home"]);
};

// src/app/features/auth/register/register.ts
function Register_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "First name is required");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "At least 4 characters");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Last name is required");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "At least 4 characters");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Phone number is required");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Enter a valid Egyptian phone number");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "At least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Must contain uppercase, number and symbol");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Passwords don't match");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "circle", 52)(3, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var Register = class _Register {
  fb;
  authService;
  router;
  registerForm;
  isLoading = false;
  errorMessage = "";
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.registerForm = this.fb.group({
      firstName: ["", [
        Validators.required,
        Validators.minLength(4)
      ]],
      lastName: ["", [
        Validators.required,
        Validators.minLength(4)
      ]],
      email: ["", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(`^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]).+$`)
      ]],
      confirmPassword: ["", Validators.required],
      phoneNumber: ["", [
        Validators.required,
        Validators.pattern("^(\\+20|0)?1[0125][0-9]{8}$")
      ]],
      role: ["trader", Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  // Custom validator: password === confirmPassword
  passwordMatchValidator = (group) => {
    const pass = group.get("password")?.value;
    const confirm = group.get("confirmPassword")?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  };
  selectRole(role) {
    this.registerForm.patchValue({ role });
  }
  onSubmit() {
    if (this.registerForm.invalid)
      return;
    console.log("Form valid:", this.registerForm.valid);
    console.log("Form errors:", this.registerForm.errors);
    console.log("Form value:", this.registerForm.value);
    if (this.registerForm.invalid) {
      console.log("firstName:", this.registerForm.get("firstName")?.errors);
      console.log("lastName:", this.registerForm.get("lastName")?.errors);
      console.log("email:", this.registerForm.get("email")?.errors);
      console.log("password:", this.registerForm.get("password")?.errors);
      console.log("confirmPassword:", this.registerForm.get("confirmPassword")?.errors);
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    const formValue = this.registerForm.value;
    const data = {
      fullName: `${formValue.firstName} ${formValue.lastName}`,
      email: formValue.email,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword,
      phoneNumber: formValue.phoneNumber || "",
      role: formValue.role
      // محتاجه في الـ service عشان يختار الـ endpoint
    };
    this.authService.register(data).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        if (err.status === 400) {
          if (err.error?.errors && err.error.errors.length > 0) {
            this.errorMessage = err.error.errors[0];
          } else if (err.error?.message) {
            this.errorMessage = err.error.message;
          } else if (err.error?.data?.message) {
            this.errorMessage = err.error.data.message;
          } else {
            this.errorMessage = "Registration failed. Please try again.";
          }
        } else {
          this.errorMessage = "Something went wrong. Please try again.";
        }
        this.isLoading = false;
      }
    });
  }
  get selectedRole() {
    return this.registerForm.get("role")?.value;
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 114, vars: 20, consts: [[1, "page-wrap"], [1, "left-panel"], [1, "deco-grid"], [1, "left-top"], [1, "brand-mark"], [1, "brand-tagline"], [1, "left-middle"], [1, "left-headline"], [1, "left-desc"], [1, "left-bottom"], [1, "already-text"], ["routerLink", "/login", 1, "btn-outline"], [1, "right-panel"], [1, "reg-title"], [1, "reg-subtitle"], [1, "step-bar"], [1, "step-dot", "done"], [1, "step-dot"], [3, "ngSubmit", "formGroup"], [1, "section-label"], [1, "role-cards"], [1, "role-card", 3, "click"], [1, "role-icon"], ["viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "2", "y", "6", "width", "14", "height", "10", "rx", "1.5", "stroke", "#555", "stroke-width", "1.4"], ["d", "M6 6V5a3 3 0 116 0v1", "stroke", "#555", "stroke-width", "1.4", "stroke-linecap", "round"], ["d", "M6 11.5h6", "stroke", "#555", "stroke-width", "1.2", "stroke-linecap", "round"], [1, "role-name"], [1, "role-desc"], ["d", "M2 13l4-4.5 3 3 3.5-5 3.5 4", "stroke", "#555", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "14", "cy", "4", "r", "2", "stroke", "#555", "stroke-width", "1.4"], [1, "form-row"], [1, "form-group"], ["for", "first-name", 1, "form-label"], ["type", "text", "id", "first-name", "formControlName", "firstName", "placeholder", "Ahmed", "autocomplete", "given-name", "required", "", 1, "form-input"], [1, "err"], ["for", "last-name", 1, "form-label"], ["type", "text", "id", "last-name", "formControlName", "lastName", "placeholder", "Hassan", "autocomplete", "family-name", "required", "", 1, "form-input"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email", "required", "", 1, "form-input"], ["for", "Phone", 1, "form-label"], ["type", "tel", "id", "Phone", "formControlName", "phoneNumber", "placeholder", "123-456-7890", "autocomplete", "tel", "required", "", 1, "form-input"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password", "required", "", 1, "form-input"], ["for", "confirm-password", 1, "form-label"], ["type", "password", "id", "confirm-password", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password", "required", "", 1, "form-input"], [1, "error-box"], ["type", "hidden", "id", "selected-role", "formControlName", "role"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "terms-text"], ["href", "#"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["cx", "8", "cy", "8", "r", "7", "stroke", "#e53e3e", "stroke-width", "1.5"], ["d", "M8 5v3M8 10.5v.5", "stroke", "#e53e3e", "stroke-width", "1.5", "stroke-linecap", "round"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "SOUQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, "Premium Marketplace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
      \u0275\u0275text(10, "Start");
      \u0275\u0275element(11, "br");
      \u0275\u0275text(12, "selling");
      \u0275\u0275element(13, "br");
      \u0275\u0275text(14, "or earning");
      \u0275\u0275element(15, "br");
      \u0275\u0275text(16, "today.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8);
      \u0275\u0275text(18, " Whether you're a merchant listing");
      \u0275\u0275element(19, "br");
      \u0275\u0275text(20, " your products, or a marketer");
      \u0275\u0275element(21, "br");
      \u0275\u0275text(22, " growing your income \u2014 we've");
      \u0275\u0275element(23, "br");
      \u0275\u0275text(24, " built the tools for you. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 9)(26, "div", 10);
      \u0275\u0275text(27, "Already have an account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 11);
      \u0275\u0275text(29, "Sign In");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 12)(31, "div", 13);
      \u0275\u0275text(32, "Create account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 14);
      \u0275\u0275text(34, "Choose your role to get started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 15);
      \u0275\u0275element(36, "div", 16)(37, "div", 16)(38, "div", 17)(39, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "form", 18);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_40_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(41, "div", 19);
      \u0275\u0275text(42, "I am joining as");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 20)(44, "div", 21);
      \u0275\u0275listener("click", function Register_Template_div_click_44_listener() {
        return ctx.selectRole("trader");
      });
      \u0275\u0275elementStart(45, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 23);
      \u0275\u0275element(47, "rect", 24)(48, "path", 25)(49, "path", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "div", 27);
      \u0275\u0275text(51, "Trader");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 28);
      \u0275\u0275text(53, "List products & manage your store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 21);
      \u0275\u0275listener("click", function Register_Template_div_click_54_listener() {
        return ctx.selectRole("marketer");
      });
      \u0275\u0275elementStart(55, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 23);
      \u0275\u0275element(57, "path", 29)(58, "circle", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "div", 27);
      \u0275\u0275text(60, "Marketer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 28);
      \u0275\u0275text(62, "Promote products & earn commissions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 31)(64, "div", 32)(65, "label", 33);
      \u0275\u0275text(66, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 34);
      \u0275\u0275conditionalCreate(68, Register_Conditional_68_Template, 2, 0, "span", 35);
      \u0275\u0275conditionalCreate(69, Register_Conditional_69_Template, 2, 0, "span", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 32)(71, "label", 36);
      \u0275\u0275text(72, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 37);
      \u0275\u0275conditionalCreate(74, Register_Conditional_74_Template, 2, 0, "span", 35);
      \u0275\u0275conditionalCreate(75, Register_Conditional_75_Template, 2, 0, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 31)(77, "div", 32)(78, "label", 38);
      \u0275\u0275text(79, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 39);
      \u0275\u0275conditionalCreate(81, Register_Conditional_81_Template, 2, 0, "span", 35);
      \u0275\u0275conditionalCreate(82, Register_Conditional_82_Template, 2, 0, "span", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 32)(84, "label", 40);
      \u0275\u0275text(85, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 41);
      \u0275\u0275conditionalCreate(87, Register_Conditional_87_Template, 2, 0, "span", 35);
      \u0275\u0275conditionalCreate(88, Register_Conditional_88_Template, 2, 0, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 31)(90, "div", 32)(91, "label", 42);
      \u0275\u0275text(92, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 43);
      \u0275\u0275conditionalCreate(94, Register_Conditional_94_Template, 2, 0, "span", 35);
      \u0275\u0275conditionalCreate(95, Register_Conditional_95_Template, 2, 0, "span", 35);
      \u0275\u0275conditionalCreate(96, Register_Conditional_96_Template, 2, 0, "span", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 32)(98, "label", 44);
      \u0275\u0275text(99, "Confirm password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "input", 45);
      \u0275\u0275conditionalCreate(101, Register_Conditional_101_Template, 2, 0, "span", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(102, Register_Conditional_102_Template, 5, 1, "div", 46);
      \u0275\u0275element(103, "input", 47);
      \u0275\u0275elementStart(104, "button", 48);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 49);
      \u0275\u0275text(107, " By creating an account you agree to our ");
      \u0275\u0275elementStart(108, "a", 50);
      \u0275\u0275text(109, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(110, " and ");
      \u0275\u0275elementStart(111, "a", 50);
      \u0275\u0275text(112, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, ". ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275advance(40);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ((tmp_1_0 = ctx.registerForm.get("role")) == null ? null : tmp_1_0.value) === "trader");
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ((tmp_2_0 = ctx.registerForm.get("role")) == null ? null : tmp_2_0.value) === "marketer");
      \u0275\u0275advance(14);
      \u0275\u0275conditional(((tmp_3_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]) ? 69 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_5_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]) ? 74 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]) ? 75 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_7_0 = ctx.registerForm.get("email")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.registerForm.get("email")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]) ? 81 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_8_0 = ctx.registerForm.get("email")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.registerForm.get("email")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]) ? 82 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_9_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]) ? 87 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["pattern"]) ? 88 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_11_0 = ctx.registerForm.get("password")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.registerForm.get("password")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]) ? 94 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["minlength"]) ? 95 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_13_0 = ctx.registerForm.get("password")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx.registerForm.get("password")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["pattern"]) ? 96 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_14_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_14_0.touched) && (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"]) ? 101 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 102 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.isLoading ? "Creating..." : "Create Account");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink], styles: ['/* src/app/features/auth/register/register.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  --black: #0a0a0a;\n  --white: #ffffff;\n  --cream: #f5f3ee;\n  --cream-dark: #e8e4dc;\n  --gray-100: #f0ede6;\n  --gray-200: #d8d5ce;\n  --gray-300: #b0ada6;\n  --gray-400: #888780;\n  --gray-500: #666560;\n  --gray-600: #444340;\n  --gray-700: #2a2a28;\n  --font-serif:\n    "Playfair Display",\n    Georgia,\n    serif;\n  --font-sans: "DM Sans", sans-serif;\n  --radius-sm: 2px;\n  --radius-md: 6px;\n  --transition: 0.25s ease;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: var(--font-sans);\n  background: var(--cream);\n}\nbody {\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  min-height: 100vh;\n  background: transparent;\n}\n.page-wrap {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: none;\n}\n.left-panel {\n  width: 44%;\n  background: var(--black);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 44px 40px;\n  position: relative;\n  overflow: hidden;\n}\n.left-panel::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--white);\n}\n.deco-grid {\n  position: absolute;\n  inset: 0;\n  opacity: 0.035;\n  background-image:\n    linear-gradient(var(--white) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--white) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.left-top {\n  position: relative;\n  z-index: 2;\n}\n.brand-mark {\n  font-family: var(--font-serif);\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--white);\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.brand-tagline {\n  font-size: 11px;\n  color: var(--gray-300);\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.left-middle {\n  position: relative;\n  z-index: 2;\n}\n.left-headline {\n  font-family: var(--font-serif);\n  font-size: 44px;\n  font-weight: 700;\n  color: var(--white);\n  line-height: 1.1;\n  margin-bottom: 16px;\n}\n.left-panel::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--white);\n}\n.deco-grid {\n  position: absolute;\n  inset: 0;\n  opacity: 0.035;\n  background-image:\n    linear-gradient(var(--white) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--white) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.left-top {\n  position: relative;\n  z-index: 2;\n  margin-bottom: 50px;\n}\n.brand-mark {\n  font-family: var(--font-serif);\n  font-size: 34px;\n  font-weight: 700;\n  color: var(--white);\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.brand-tagline {\n  font-size: 12px;\n  color: var(--gray-300);\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.left-middle {\n  position: relative;\n  z-index: 2;\n}\n.left-headline {\n  font-family: var(--font-serif);\n  font-size: 52px;\n  font-weight: 700;\n  color: var(--white);\n  line-height: 1.1;\n  margin-bottom: 20px;\n}\n.left-desc {\n  font-size: 14px;\n  color: var(--cream-500);\n  line-height: 1.8;\n  letter-spacing: 0.2px;\n}\n.left-bottom {\n  position: relative;\n  z-index: 2;\n}\n.already-text {\n  font-size: 13px;\n  color: var(--white);\n  margin-bottom: 12px;\n  line-height: 1.5;\n}\n.btn-outline {\n  display: inline-block;\n  border: 1px solid var(--gray-700);\n  padding: 12px 28px;\n  font-family: var(--font-sans);\n  font-size: 11px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--white);\n  cursor: pointer;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  transition: border-color var(--transition), color var(--transition);\n  text-decoration: none;\n}\n.btn-outline:hover {\n  border-color: var(--white);\n  color: var(--white);\n}\n.right-panel {\n  width: 56%;\n  min-height: 100vh;\n  background: var(--cream);\n  padding: 44px 48px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n.reg-title {\n  font-family: var(--font-serif);\n  font-size: 30px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 10px;\n  line-height: 1.15;\n}\n.reg-subtitle {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin-bottom: 26px;\n  letter-spacing: 0.15px;\n  line-height: 1.7;\n  max-width: 480px;\n}\n.step-bar {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.step-dot {\n  height: 3px;\n  flex: 1;\n  border-radius: 2px;\n  background: var(--gray-200);\n}\n.step-dot.done {\n  background: var(--black);\n}\n.section-label {\n  font-size: 11px;\n  color: var(--gray-500);\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n  font-weight: 600;\n}\n.role-cards {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 26px;\n  align-items: stretch;\n}\n.role-card {\n  flex: 1;\n  background: var(--white);\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius-md);\n  padding: 18px 16px;\n  cursor: pointer;\n  transition: border-color var(--transition), background var(--transition);\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  min-height: 140px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.role-card:hover {\n  border-color: var(--cream-500);\n}\n.role-card.active {\n  border-color: var(--black);\n}\n.role-card.active::after {\n  content: "";\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: var(--black);\n  border-radius: 50%;\n}\n.role-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: var(--gray-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  transition: background var(--transition);\n}\n.role-card.active .role-icon {\n  background: var(--black);\n}\n.role-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.role-icon svg path,\n.role-icon svg circle,\n.role-icon svg rect {\n  stroke: var(--gray-500);\n  transition: stroke var(--transition);\n}\n.role-card.active .role-icon svg path,\n.role-card.active .role-icon svg circle,\n.role-card.active .role-icon svg rect {\n  stroke: var(--white);\n}\n.role-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 6px;\n}\n.role-desc {\n  font-size: 12.5px;\n  color: var(--gray-500);\n  line-height: 1.6;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.form-group {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full {\n  flex: 1 1 100%;\n}\n.form-label {\n  font-size: 11px;\n  color: var(--cream-500);\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.form-input {\n  background: transparent;\n  border: none;\n  border-bottom: 1.5px solid var(--gray-300);\n  padding: 12px 0;\n  font-family: var(--font-sans);\n  font-size: 14px;\n  color: #111;\n  outline: none;\n  transition: border-color var(--transition);\n}\n.form-input::placeholder {\n  color: var(--gray-300);\n}\n.form-input:focus {\n  border-bottom-color: var(--black);\n}\n.form-input:-webkit-autofill,\n.form-input:-webkit-autofill:hover,\n.form-input:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0px 1000px var(--cream) inset;\n  -webkit-text-fill-color: #111;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.btn-primary {\n  width: 100%;\n  background: var(--black);\n  color: var(--white);\n  border: none;\n  padding: 16px 14px;\n  font-family: var(--font-sans);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-top: 24px;\n  border-radius: 10px;\n  transition: background var(--transition);\n}\n.btn-primary:hover {\n  background: #333;\n}\n.btn-primary:active {\n  background: #555;\n}\n.terms-text {\n  font-size: 11px;\n  color: var(--gray-300);\n  text-align: center;\n  margin-top: 12px;\n  line-height: 1.6;\n}\n.terms-text a {\n  color: var(--cream-500);\n  text-decoration: none;\n  border-bottom: 1px solid var(--gray-300);\n  padding-bottom: 1px;\n  transition: color var(--transition), border-color var(--transition);\n}\n.terms-text a:hover {\n  color: #111;\n  border-color: #111;\n}\n.err {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 4px;\n}\n.error-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  color: #e53e3e;\n  font-size: 14px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  word-break: break-word;\n}\n.error-box svg {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n}\n.error-box svg circle,\n.error-box svg path {\n  stroke: #ef4444;\n}\n.error-box strong {\n  color: #1f2937;\n}\n@media (max-width: 760px) {\n  body {\n    padding: 0;\n    align-items: stretch;\n  }\n  .page-wrap {\n    flex-direction: column;\n    border-radius: 0;\n    min-height: 100vh;\n    box-shadow: none;\n  }\n  .left-panel {\n    width: 100%;\n    padding: 36px 28px;\n    min-height: 220px;\n  }\n  .right-panel {\n    width: 100%;\n    padding: 36px 28px;\n  }\n  .left-middle {\n    margin: 24px 0;\n  }\n  .left-headline {\n    font-size: 32px;\n  }\n  .role-cards {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [CommonModule, ReactiveFormsModule, RouterLink], encapsulation: ViewEncapsulation.None, template: `<!-- Page Wrapper -->\r
<div class="page-wrap">\r
\r
  <!-- \u2550\u2550 LEFT: BRAND \u2550\u2550 -->\r
  <div class="left-panel">\r
    <div class="deco-grid"></div>\r
\r
    <div class="left-top">\r
      <div class="brand-mark">SOUQ</div>\r
      <div class="brand-tagline">Premium Marketplace</div>\r
    </div>\r
\r
    <div class="left-middle">\r
      <div class="left-headline">Start<br>selling<br>or earning<br>today.</div>\r
      <div class="left-desc">\r
        Whether you're a merchant listing<br>\r
        your products, or a marketer<br>\r
        growing your income \u2014 we've<br>\r
        built the tools for you.\r
      </div>\r
    </div>\r
\r
    <div class="left-bottom">\r
      <div class="already-text">Already have an account?</div>\r
      <a class="btn-outline" routerLink="/login">Sign In</a>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 RIGHT: FORM \u2550\u2550 -->\r
  <div class="right-panel">\r
    <div class="reg-title">Create account</div>\r
    <div class="reg-subtitle">Choose your role to get started</div>\r
\r
    <!-- Progress bar -->\r
    <div class="step-bar">\r
      <div class="step-dot done"></div>\r
      <div class="step-dot done"></div>\r
      <div class="step-dot"></div>\r
      <div class="step-dot"></div>\r
    </div>\r
\r
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\r
\r
      <!-- Role Selection -->\r
      <div class="section-label">I am joining as</div>\r
      <div class="role-cards">\r
\r
        <div class="role-card"\r
             [class.active]="registerForm.get('role')?.value === 'trader'"\r
             (click)="selectRole('trader')">\r
          <div class="role-icon">\r
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="#555" stroke-width="1.4"/>\r
              <path d="M6 6V5a3 3 0 116 0v1" stroke="#555" stroke-width="1.4" stroke-linecap="round"/>\r
              <path d="M6 11.5h6" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>\r
            </svg>\r
          </div>\r
          <div class="role-name">Trader</div>\r
          <div class="role-desc">List products &amp; manage your store</div>\r
        </div>\r
\r
        <div class="role-card"\r
             [class.active]="registerForm.get('role')?.value === 'marketer'"\r
             (click)="selectRole('marketer')">\r
          <div class="role-icon">\r
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <path d="M2 13l4-4.5 3 3 3.5-5 3.5 4" stroke="#555" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>\r
              <circle cx="14" cy="4" r="2" stroke="#555" stroke-width="1.4"/>\r
            </svg>\r
          </div>\r
          <div class="role-name">Marketer</div>\r
          <div class="role-desc">Promote products &amp; earn commissions</div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- Form Fields -->\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="first-name">First name</label>\r
          <input class="form-input" type="text" id="first-name" formControlName="firstName" placeholder="Ahmed" autocomplete="given-name" required />\r
          @if (registerForm.get('firstName')?.touched && registerForm.get('firstName')?.errors?.['required']) {\r
             <span class="err">First name is required</span>\r
            }\r
            @if (registerForm.get('firstName')?.touched && registerForm.get('firstName')?.errors?.['minlength']) {\r
            <span class="err">At least 4 characters</span>\r
            }\r
        </div>\r
        <div class="form-group">\r
          <label class="form-label" for="last-name">Last name</label>\r
          <input class="form-input" type="text" id="last-name" formControlName="lastName" placeholder="Hassan" autocomplete="family-name" required />\r
          @if (registerForm.get('lastName')?.touched && registerForm.get('lastName')?.errors?.['required']) {\r
              <span class="err">Last name is required</span>\r
            }\r
            @if (registerForm.get('lastName')?.touched && registerForm.get('lastName')?.errors?.['minlength']) {\r
            <span class="err">At least 4 characters</span>\r
            }\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="email">Email address</label>\r
          <input class="form-input" type="email" id="email" formControlName="email" placeholder="you@example.com" autocomplete="email" required />\r
            @if (registerForm.get('email')?.touched && registerForm.get('email')?.errors?.['required']) {\r
           <span class="err">Email is required</span>\r
             }\r
           @if (registerForm.get('email')?.touched && registerForm.get('email')?.errors?.['pattern']) {\r
           <span class="err">Enter a valid email address</span>\r
           }\r
        </div>\r
       <div class="form-group">\r
          <label class="form-label" for="Phone">Phone Number</label>\r
          <input class="form-input" type="tel" id="Phone" formControlName="phoneNumber" placeholder="123-456-7890" autocomplete="tel" required />\r
           @if (registerForm.get('phoneNumber')?.touched && registerForm.get('phoneNumber')?.errors?.['required']) {\r
            <span class="err">Phone number is required</span>\r
                 }\r
           @if (registerForm.get('phoneNumber')?.touched && registerForm.get('phoneNumber')?.errors?.['pattern']) {\r
           <span class="err">Enter a valid Egyptian phone number</span>\r
             }\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="password">Password</label>\r
          <input class="form-input" type="password" id="password" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="new-password" required />\r
            @if (registerForm.get('password')?.touched && registerForm.get('password')?.errors?.['required']) {\r
              <span class="err">Password is required</span>\r
                   }\r
            @if (registerForm.get('password')?.touched && registerForm.get('password')?.errors?.['minlength']) {\r
              <span class="err">At least 8 characters</span>\r
            }\r
            @if (registerForm.get('password')?.touched && registerForm.get('password')?.errors?.['pattern']) {\r
            <span class="err">Must contain uppercase, number and symbol</span>\r
           }\r
        </div>\r
        <div class="form-group">\r
          <label class="form-label" for="confirm-password">Confirm password</label>\r
          <input class="form-input" type="password" id="confirm-password" formControlName="confirmPassword" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="new-password" required />\r
            @if (registerForm.get('confirmPassword')?.touched && registerForm.errors?.['passwordMismatch']) {\r
              <span class="err">Passwords don't match</span>\r
             }\r
        </div>\r
      </div>\r
      @if (errorMessage) {\r
  <div class="error-box">\r
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">\r
      <circle cx="8" cy="8" r="7" stroke="#e53e3e" stroke-width="1.5"/>\r
      <path d="M8 5v3M8 10.5v.5" stroke="#e53e3e" stroke-width="1.5" stroke-linecap="round"/>\r
    </svg>\r
    {{ errorMessage }}\r
  </div>\r
}\r
\r
      <!-- Hidden role input (sent with form) -->\r
      <input type="hidden" id="selected-role" formControlName="role" />\r
\r
      <button class="btn-primary" type="submit" [disabled]="isLoading">{{ isLoading ? 'Creating...' : 'Create Account' }}</button>\r
\r
      <div class="terms-text">\r
        By creating an account you agree to our\r
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.\r
      </div>\r
\r
    </form>\r
  </div>\r
\r
</div>\r
`, styles: ['/* src/app/features/auth/register/register.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  --black: #0a0a0a;\n  --white: #ffffff;\n  --cream: #f5f3ee;\n  --cream-dark: #e8e4dc;\n  --gray-100: #f0ede6;\n  --gray-200: #d8d5ce;\n  --gray-300: #b0ada6;\n  --gray-400: #888780;\n  --gray-500: #666560;\n  --gray-600: #444340;\n  --gray-700: #2a2a28;\n  --font-serif:\n    "Playfair Display",\n    Georgia,\n    serif;\n  --font-sans: "DM Sans", sans-serif;\n  --radius-sm: 2px;\n  --radius-md: 6px;\n  --transition: 0.25s ease;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: var(--font-sans);\n  background: var(--cream);\n}\nbody {\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  min-height: 100vh;\n  background: transparent;\n}\n.page-wrap {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: none;\n}\n.left-panel {\n  width: 44%;\n  background: var(--black);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 44px 40px;\n  position: relative;\n  overflow: hidden;\n}\n.left-panel::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--white);\n}\n.deco-grid {\n  position: absolute;\n  inset: 0;\n  opacity: 0.035;\n  background-image:\n    linear-gradient(var(--white) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--white) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.left-top {\n  position: relative;\n  z-index: 2;\n}\n.brand-mark {\n  font-family: var(--font-serif);\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--white);\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.brand-tagline {\n  font-size: 11px;\n  color: var(--gray-300);\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.left-middle {\n  position: relative;\n  z-index: 2;\n}\n.left-headline {\n  font-family: var(--font-serif);\n  font-size: 44px;\n  font-weight: 700;\n  color: var(--white);\n  line-height: 1.1;\n  margin-bottom: 16px;\n}\n.left-panel::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--white);\n}\n.deco-grid {\n  position: absolute;\n  inset: 0;\n  opacity: 0.035;\n  background-image:\n    linear-gradient(var(--white) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--white) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.left-top {\n  position: relative;\n  z-index: 2;\n  margin-bottom: 50px;\n}\n.brand-mark {\n  font-family: var(--font-serif);\n  font-size: 34px;\n  font-weight: 700;\n  color: var(--white);\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.brand-tagline {\n  font-size: 12px;\n  color: var(--gray-300);\n  letter-spacing: 3.5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.left-middle {\n  position: relative;\n  z-index: 2;\n}\n.left-headline {\n  font-family: var(--font-serif);\n  font-size: 52px;\n  font-weight: 700;\n  color: var(--white);\n  line-height: 1.1;\n  margin-bottom: 20px;\n}\n.left-desc {\n  font-size: 14px;\n  color: var(--cream-500);\n  line-height: 1.8;\n  letter-spacing: 0.2px;\n}\n.left-bottom {\n  position: relative;\n  z-index: 2;\n}\n.already-text {\n  font-size: 13px;\n  color: var(--white);\n  margin-bottom: 12px;\n  line-height: 1.5;\n}\n.btn-outline {\n  display: inline-block;\n  border: 1px solid var(--gray-700);\n  padding: 12px 28px;\n  font-family: var(--font-sans);\n  font-size: 11px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--white);\n  cursor: pointer;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  transition: border-color var(--transition), color var(--transition);\n  text-decoration: none;\n}\n.btn-outline:hover {\n  border-color: var(--white);\n  color: var(--white);\n}\n.right-panel {\n  width: 56%;\n  min-height: 100vh;\n  background: var(--cream);\n  padding: 44px 48px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n.reg-title {\n  font-family: var(--font-serif);\n  font-size: 30px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 10px;\n  line-height: 1.15;\n}\n.reg-subtitle {\n  font-size: 14px;\n  color: var(--gray-500);\n  margin-bottom: 26px;\n  letter-spacing: 0.15px;\n  line-height: 1.7;\n  max-width: 480px;\n}\n.step-bar {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.step-dot {\n  height: 3px;\n  flex: 1;\n  border-radius: 2px;\n  background: var(--gray-200);\n}\n.step-dot.done {\n  background: var(--black);\n}\n.section-label {\n  font-size: 11px;\n  color: var(--gray-500);\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n  font-weight: 600;\n}\n.role-cards {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 26px;\n  align-items: stretch;\n}\n.role-card {\n  flex: 1;\n  background: var(--white);\n  border: 1.5px solid var(--gray-200);\n  border-radius: var(--radius-md);\n  padding: 18px 16px;\n  cursor: pointer;\n  transition: border-color var(--transition), background var(--transition);\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  min-height: 140px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.role-card:hover {\n  border-color: var(--cream-500);\n}\n.role-card.active {\n  border-color: var(--black);\n}\n.role-card.active::after {\n  content: "";\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 8px;\n  height: 8px;\n  background: var(--black);\n  border-radius: 50%;\n}\n.role-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: var(--gray-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  transition: background var(--transition);\n}\n.role-card.active .role-icon {\n  background: var(--black);\n}\n.role-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.role-icon svg path,\n.role-icon svg circle,\n.role-icon svg rect {\n  stroke: var(--gray-500);\n  transition: stroke var(--transition);\n}\n.role-card.active .role-icon svg path,\n.role-card.active .role-icon svg circle,\n.role-card.active .role-icon svg rect {\n  stroke: var(--white);\n}\n.role-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 6px;\n}\n.role-desc {\n  font-size: 12.5px;\n  color: var(--gray-500);\n  line-height: 1.6;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.form-group {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full {\n  flex: 1 1 100%;\n}\n.form-label {\n  font-size: 11px;\n  color: var(--cream-500);\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.form-input {\n  background: transparent;\n  border: none;\n  border-bottom: 1.5px solid var(--gray-300);\n  padding: 12px 0;\n  font-family: var(--font-sans);\n  font-size: 14px;\n  color: #111;\n  outline: none;\n  transition: border-color var(--transition);\n}\n.form-input::placeholder {\n  color: var(--gray-300);\n}\n.form-input:focus {\n  border-bottom-color: var(--black);\n}\n.form-input:-webkit-autofill,\n.form-input:-webkit-autofill:hover,\n.form-input:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0px 1000px var(--cream) inset;\n  -webkit-text-fill-color: #111;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.btn-primary {\n  width: 100%;\n  background: var(--black);\n  color: var(--white);\n  border: none;\n  padding: 16px 14px;\n  font-family: var(--font-sans);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-top: 24px;\n  border-radius: 10px;\n  transition: background var(--transition);\n}\n.btn-primary:hover {\n  background: #333;\n}\n.btn-primary:active {\n  background: #555;\n}\n.terms-text {\n  font-size: 11px;\n  color: var(--gray-300);\n  text-align: center;\n  margin-top: 12px;\n  line-height: 1.6;\n}\n.terms-text a {\n  color: var(--cream-500);\n  text-decoration: none;\n  border-bottom: 1px solid var(--gray-300);\n  padding-bottom: 1px;\n  transition: color var(--transition), border-color var(--transition);\n}\n.terms-text a:hover {\n  color: #111;\n  border-color: #111;\n}\n.err {\n  display: block;\n  font-size: 12px;\n  color: #e53e3e;\n  margin-top: 4px;\n}\n.error-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 12px;\n  color: #e53e3e;\n  font-size: 14px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  word-break: break-word;\n}\n.error-box svg {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n}\n.error-box svg circle,\n.error-box svg path {\n  stroke: #ef4444;\n}\n.error-box strong {\n  color: #1f2937;\n}\n@media (max-width: 760px) {\n  body {\n    padding: 0;\n    align-items: stretch;\n  }\n  .page-wrap {\n    flex-direction: column;\n    border-radius: 0;\n    min-height: 100vh;\n    box-shadow: none;\n  }\n  .left-panel {\n    width: 100%;\n    padding: 36px 28px;\n    min-height: 220px;\n  }\n  .right-panel {\n    width: 100%;\n    padding: 36px 28px;\n  }\n  .left-middle {\n    margin: 24px 0;\n  }\n  .left-headline {\n    font-size: 32px;\n  }\n  .role-cards {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "app/features/auth/register/register.ts", lineNumber: 14 });
})();

// src/app/features/not-found/not-found.ts
var NotFound = class _NotFound {
  static \u0275fac = function NotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["app-not-found"]], decls: 25, vars: 0, consts: [[1, "page"], [1, "screen-wrap"], [1, "screen"], [1, "scanline"], [1, "screen-num"], [1, "outline"], [1, "cursor"], [1, "stand"], [1, "base"], [1, "tag"], [1, "title"], [1, "sub"], ["routerLink", "/home", 1, "btn-primary"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["d", "M6 2L1 7L6 12M1 7H13", "stroke", "#fff", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "divider"]], template: function NotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "div", 3);
      \u0275\u0275domElementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "4");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span");
      \u0275\u0275text(8, "0");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 5);
      \u0275\u0275text(10, "4");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(11, "div", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(12, "div", 7)(13, "div", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p", 9);
      \u0275\u0275text(15, "Error detected");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "h1", 10);
      \u0275\u0275text(17, "Page not found");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 11);
      \u0275\u0275text(19, "The page you're looking for doesn't exist or has been moved to another location.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "a", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(21, "svg", 13);
      \u0275\u0275domElement(22, "path", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(23, " Back to home ");
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElement(24, "div", 15);
      \u0275\u0275domElementEnd();
    }
  }, styles: ['\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_scan {\n  0% {\n    top: 0;\n  }\n  100% {\n    top: 100%;\n  }\n}\n.page[_ngcontent-%COMP%] {\n  background: #fff;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: "Segoe UI", sans-serif;\n  padding: 56px 24px;\n}\n.screen-wrap[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_float 4s ease-in-out infinite;\n  margin-bottom: 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.screen[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 260px;\n  background: #0a0a0a;\n  border: 2px solid #0a0a0a;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.scanline[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.06);\n  animation: _ngcontent-%COMP%_scan 2.5s linear infinite;\n}\n.screen-num[_ngcontent-%COMP%] {\n  font-size: 112px;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -4px;\n  line-height: 1;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n.outline[_ngcontent-%COMP%] {\n  color: #0a0a0a;\n  -webkit-text-stroke: 4px #fff;\n}\n.cursor[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 84px;\n  background: #fff;\n  margin-left: 6px;\n  animation: _ngcontent-%COMP%_blink 1s step-end infinite;\n  border-radius: 2px;\n}\n.stand[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 22px;\n  background: #0a0a0a;\n  border-radius: 0 0 6px 6px;\n}\n.base[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 9px;\n  background: #0a0a0a;\n  border-radius: 4px;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 5px;\n  color: #bbb;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  color: #0a0a0a;\n  text-align: center;\n  margin-bottom: 18px;\n  letter-spacing: -0.5px;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #888;\n  text-align: center;\n  max-width: 420px;\n  line-height: 1.65;\n  margin-bottom: 48px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 18px 36px;\n  background: #0a0a0a;\n  color: #fff;\n  border: 2px solid #0a0a0a;\n  border-radius: 4px;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #333;\n  transform: translateY(-2px);\n}\n.divider[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 3px;\n  background: #0a0a0a;\n  border-radius: 2px;\n  margin-top: 44px;\n}\n/*# sourceMappingURL=not-found.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "app-not-found", imports: [], template: `<div class="page">\r
\r
  <div class="screen-wrap">\r
    <div class="screen">\r
      <div class="scanline"></div>\r
      <div class="screen-num">\r
        <span class="outline">4</span>\r
        <span>0</span>\r
        <span class="outline">4</span>\r
        <div class="cursor"></div>\r
      </div>\r
    </div>\r
    <div class="stand"></div>\r
    <div class="base"></div>\r
  </div>\r
\r
  <p class="tag">Error detected</p>\r
  <h1 class="title">Page not found</h1>\r
  <p class="sub">The page you're looking for doesn't exist or has been moved to another location.</p>\r
\r
  <a routerLink="/home" class="btn-primary">\r
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">\r
      <path d="M6 2L1 7L6 12M1 7H13" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
    </svg>\r
    Back to home\r
  </a>\r
\r
  <div class="divider"></div>\r
\r
</div>`, styles: ['/* src/app/features/not-found/not-found.css */\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes scan {\n  0% {\n    top: 0;\n  }\n  100% {\n    top: 100%;\n  }\n}\n.page {\n  background: #fff;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: "Segoe UI", sans-serif;\n  padding: 56px 24px;\n}\n.screen-wrap {\n  animation: float 4s ease-in-out infinite;\n  margin-bottom: 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.screen {\n  width: 400px;\n  height: 260px;\n  background: #0a0a0a;\n  border: 2px solid #0a0a0a;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.scanline {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.06);\n  animation: scan 2.5s linear infinite;\n}\n.screen-num {\n  font-size: 112px;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -4px;\n  line-height: 1;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n.outline {\n  color: #0a0a0a;\n  -webkit-text-stroke: 4px #fff;\n}\n.cursor {\n  width: 3px;\n  height: 84px;\n  background: #fff;\n  margin-left: 6px;\n  animation: blink 1s step-end infinite;\n  border-radius: 2px;\n}\n.stand {\n  width: 64px;\n  height: 22px;\n  background: #0a0a0a;\n  border-radius: 0 0 6px 6px;\n}\n.base {\n  width: 130px;\n  height: 9px;\n  background: #0a0a0a;\n  border-radius: 4px;\n}\n.tag {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 5px;\n  color: #bbb;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.title {\n  font-size: 40px;\n  font-weight: 800;\n  color: #0a0a0a;\n  text-align: center;\n  margin-bottom: 18px;\n  letter-spacing: -0.5px;\n}\n.sub {\n  font-size: 18px;\n  color: #888;\n  text-align: center;\n  max-width: 420px;\n  line-height: 1.65;\n  margin-bottom: 48px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 18px 36px;\n  background: #0a0a0a;\n  color: #fff;\n  border: 2px solid #0a0a0a;\n  border-radius: 4px;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-primary:hover {\n  background: #333;\n  transform: translateY(-2px);\n}\n.divider {\n  width: 40px;\n  height: 3px;\n  background: #0a0a0a;\n  border-radius: 2px;\n  margin-top: 44px;\n}\n/*# sourceMappingURL=not-found.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "app/features/not-found/not-found.ts", lineNumber: 9 });
})();

// src/app/shared/components/product-faqs/product-faqs.ts
var ProductFaqs = class _ProductFaqs {
  static \u0275fac = function ProductFaqs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFaqs)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFaqs, selectors: [["app-product-faqs"]], decls: 36, vars: 0, consts: [["id", "faqAccordion", 1, "accordion"], [1, "accordion-item", "container", "mt-4"], [1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#q1", 1, "accordion-button"], ["id", "q1", "data-bs-parent", "#faqAccordion", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "accordion-item"], ["data-bs-toggle", "collapse", "data-bs-target", "#q2", 1, "accordion-button", "collapsed"], ["id", "q2", "data-bs-parent", "#faqAccordion", 1, "accordion-collapse", "collapse"], ["data-bs-toggle", "collapse", "data-bs-target", "#q3", 1, "accordion-button", "collapsed"], ["id", "q3", "data-bs-parent", "#faqAccordion", 1, "accordion-collapse", "collapse"], ["data-bs-toggle", "collapse", "data-bs-target", "#q4", 1, "accordion-button", "collapsed"], ["id", "q4", "data-bs-parent", "#faqAccordion", 1, "accordion-collapse", "collapse"], ["data-bs-toggle", "collapse", "data-bs-target", "#q5", 1, "accordion-button", "collapsed"], ["id", "q5", "data-bs-parent", "#faqAccordion", 1, "accordion-collapse", "collapse"]], template: function ProductFaqs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "button", 3);
      \u0275\u0275text(4, " What is the warranty period for this product? ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275text(7, " This product comes with a standard 1-year warranty covering manufacturing defects. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(8, "div", 6)(9, "h2", 2)(10, "button", 7);
      \u0275\u0275text(11, " Can I return or exchange the product? ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 8)(13, "div", 5);
      \u0275\u0275text(14, " Yes, you can return or exchange the product within 14 days of delivery, provided it is in its original condition. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(15, "div", 6)(16, "h2", 2)(17, "button", 9);
      \u0275\u0275text(18, " Is this product original and authentic? ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 10)(20, "div", 5);
      \u0275\u0275text(21, " Yes, all our products are 100% original and sourced from trusted suppliers. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(22, "div", 6)(23, "h2", 2)(24, "button", 11);
      \u0275\u0275text(25, " How long does shipping take? ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 12)(27, "div", 5);
      \u0275\u0275text(28, " Shipping usually takes between 3\u20137 business days depending on your location. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "div", 6)(30, "h2", 2)(31, "button", 13);
      \u0275\u0275text(32, " How can I contact customer support? ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "div", 14)(34, "div", 5);
      \u0275\u0275text(35, " You can contact our support team via email or live chat, and we\u2019ll be happy to assist you. ");
      \u0275\u0275domElementEnd()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductFaqs, [{
    type: Component,
    args: [{ selector: "app-product-faqs", imports: [], template: '<div class="accordion" id="faqAccordion">\r\n\r\n  <!-- Q1 -->\r\n  <div class="accordion-item container mt-4">\r\n    <h2 class="accordion-header">\r\n      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">\r\n        What is the warranty period for this product?\r\n      </button>\r\n    </h2>\r\n    <div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">\r\n      <div class="accordion-body">\r\n        This product comes with a standard 1-year warranty covering manufacturing defects.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Q2 -->\r\n  <div class="accordion-item">\r\n    <h2 class="accordion-header">\r\n      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">\r\n        Can I return or exchange the product?\r\n      </button>\r\n    </h2>\r\n    <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">\r\n      <div class="accordion-body">\r\n        Yes, you can return or exchange the product within 14 days of delivery, provided it is in its original condition.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Q3 -->\r\n  <div class="accordion-item">\r\n    <h2 class="accordion-header">\r\n      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q3">\r\n        Is this product original and authentic?\r\n      </button>\r\n    </h2>\r\n    <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">\r\n      <div class="accordion-body">\r\n        Yes, all our products are 100% original and sourced from trusted suppliers.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Q4 -->\r\n  <div class="accordion-item">\r\n    <h2 class="accordion-header">\r\n      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q4">\r\n        How long does shipping take?\r\n      </button>\r\n    </h2>\r\n    <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">\r\n      <div class="accordion-body">\r\n        Shipping usually takes between 3\u20137 business days depending on your location.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Q5 -->\r\n  <div class="accordion-item">\r\n    <h2 class="accordion-header">\r\n      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q5">\r\n        How can I contact customer support?\r\n      </button>\r\n    </h2>\r\n    <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">\r\n      <div class="accordion-body">\r\n        You can contact our support team via email or live chat, and we\u2019ll be happy to assist you.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFaqs, { className: "ProductFaqs", filePath: "app/shared/components/product-faqs/product-faqs.ts", lineNumber: 9 });
})();

// src/app/features/product/product-details/product-details.ts
var _c02 = () => [1, 2, 3, 4, 5];
function ProductDetails_div_0_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 66);
    \u0275\u0275listener("click", function ProductDetails_div_0_img_3_Template_img_click_0_listener() {
      const img_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectImage(img_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", img_r3 === ctx_r3.selectedImage);
    \u0275\u0275property("src", img_r3, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetails_div_0_i_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 67);
  }
}
function ProductDetails_div_0_i_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 68);
  }
}
function ProductDetails_div_0_i_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 69);
  }
}
function ProductDetails_div_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "In stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetails_div_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Out of Stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetails_div_0_span_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275listener("click", function ProductDetails_div_0_span_34_Template_span_click_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectedColor = c_r6);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.selectedColor === c_r6);
    \u0275\u0275property("ngClass", c_r6);
  }
}
function ProductDetails_div_0_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function ProductDetails_div_0_button_40_Template_button_click_0_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectedSize = s_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.selectedSize === s_r8 ? "text-light bg-dark" : "btn-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r8, " ");
  }
}
function ProductDetails_div_0_li_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9, ". ");
  }
}
function ProductDetails_div_0_div_106_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
  if (rf & 2) {
    const star_r10 = ctx.$implicit;
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", star_r10 <= item_r11.rating ? "bi-star-fill text-warning" : "bi-star text-muted");
  }
}
function ProductDetails_div_0_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275template(2, ProductDetails_div_0_div_106_i_2_Template, 1, 1, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275element(5, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 77);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r11.userName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r11.comment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 4, item_r11.createdAt, "mediumDate"), " ");
  }
}
function ProductDetails_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, ProductDetails_div_0_img_3_Template, 1, 3, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275element(5, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "h4", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10);
    \u0275\u0275template(11, ProductDetails_div_0_i_11_Template, 1, 0, "i", 11)(12, ProductDetails_div_0_i_12_Template, 1, 0, "i", 12)(13, ProductDetails_div_0_i_13_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 15);
    \u0275\u0275text(17, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProductDetails_div_0_Conditional_18_Template, 2, 0, "p", 16);
    \u0275\u0275conditionalCreate(19, ProductDetails_div_0_Conditional_19_Template, 2, 0, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "h4", 19);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h4", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h6", 21);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "hr");
    \u0275\u0275elementStart(30, "div", 23)(31, "strong");
    \u0275\u0275text(32, "Select Colors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 24);
    \u0275\u0275template(34, ProductDetails_div_0_span_34_Template, 1, 3, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "hr");
    \u0275\u0275elementStart(36, "div", 26)(37, "strong");
    \u0275\u0275text(38, "Choose Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 24);
    \u0275\u0275template(40, ProductDetails_div_0_button_40_Template, 2, 2, "button", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 28)(42, "div", 29)(43, "button", 30);
    \u0275\u0275listener("click", function ProductDetails_div_0_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.decrease());
    });
    \u0275\u0275text(44, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 31);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 32);
    \u0275\u0275listener("click", function ProductDetails_div_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.increase());
    });
    \u0275\u0275text(48, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 33);
    \u0275\u0275text(50, "Buy Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 34);
    \u0275\u0275element(52, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 36);
    \u0275\u0275element(54, "i", 37);
    \u0275\u0275elementStart(55, "div")(56, "h6");
    \u0275\u0275text(57, "Free Delivery ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "small");
    \u0275\u0275text(59, "Enter your postal code for Delivery Availability");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 36);
    \u0275\u0275element(61, "i", 38);
    \u0275\u0275elementStart(62, "div")(63, "h6");
    \u0275\u0275text(64, "Return Delivery ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "small");
    \u0275\u0275text(66, "Free 30 Days Delivery Returns");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "ul", 39)(68, "li", 40)(69, "button", 41);
    \u0275\u0275text(70, "Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "li", 40)(72, "button", 42);
    \u0275\u0275text(73, "Reviews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "li", 40)(75, "button", 43);
    \u0275\u0275text(76, "FAQs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 44)(78, "div", 45)(79, "div", 46)(80, "ul");
    \u0275\u0275template(81, ProductDetails_div_0_li_81_Template, 2, 1, "li", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 48)(83, "div", 49)(84, "div", 50)(85, "h5", 51);
    \u0275\u0275text(86, "All Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "h6", 52);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 50)(90, "button", 53);
    \u0275\u0275element(91, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 55)(93, "button", 56);
    \u0275\u0275text(94, " Sort by ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ul", 57)(96, "li")(97, "a", 58);
    \u0275\u0275text(98, "Newest");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "li")(100, "a", 58);
    \u0275\u0275text(101, "Oldest");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "button", 59);
    \u0275\u0275text(103, " Write a Review ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "div", 46)(105, "div", 60);
    \u0275\u0275template(106, ProductDetails_div_0_div_106_Template, 11, 8, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 62)(108, "button", 63);
    \u0275\u0275text(109, "Load more reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "button", 64);
    \u0275\u0275text(111, "Write a Review");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(112, "div", 65);
    \u0275\u0275element(113, "app-product-faqs");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.product.images);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.selectedImage || (ctx_r3.product.images == null ? null : ctx_r3.product.images[0]) || "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.fullStars);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.halfStar);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.emptyStars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.product.rating, "/5");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r3.product.stockQuantity ?? 0) > 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r3.product.stockQuantity ?? 0) == 0 ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r3.product.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", ctx_r3.product.oldPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", ctx_r3.product.sale, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.product.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.colors);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.sizes);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.product.quantity);
    \u0275\u0275advance(35);
    \u0275\u0275property("ngForOf", ctx_r3.specsArray);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("(", (ctx_r3.product.reviews == null ? null : ctx_r3.product.reviews.length) ?? 0, ")");
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r3.product.reviews);
  }
}
var ProductDetails = class _ProductDetails {
  route;
  service;
  product;
  specsText = "";
  specsArray = [];
  constructor(route, service) {
    this.route = route;
    this.service = service;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getProductById(id).subscribe({
      next: (p) => {
        if (p) {
          this.product = p;
          this.specsText = this.product.details ?? "";
          this.specsArray = this.specsText.split(".").filter((x) => x.trim() !== "");
          const full = Math.floor(this.product.rating);
          const hasHalf = this.product.rating % 1 >= 0.5;
          const empty = 5 - full - (hasHalf ? 1 : 0);
          this.fullStars = Array(full);
          this.halfStar = hasHalf;
          this.emptyStars = Array(empty);
        }
      },
      error: (err) => console.error(err)
    });
  }
  getFullStars(rating) {
    return Array(Math.floor(rating)).fill(0);
  }
  // GetProduct() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.service.getProductById(id).subscribe({
  //     next: (res) => {
  //       this.product = res;
  //       console.log(this.product)
  //           this.specsText = this.product.details
  //   this.specsArray = this.specsText.split('.').filter(x => x.trim() !== '');
  //   console.log("specsArray")
  //   console.log(this.specsArray)
  //     },
  //     error: (err) => console.error(err)
  //   });
  // }
  //calculate rating of product
  fullStars = [];
  halfStar = false;
  emptyStars = [];
  //design
  selectedImage = "";
  selectedColor = "";
  selectedSize = "";
  colors = ["bg-dark", "bg-danger"];
  sizes = ["Small", "Meidum", "Large", "X-Large"];
  selectImage(img) {
    this.selectedImage = img;
  }
  increase() {
    this.product.quantity = (this.product.quantity ?? 1) + 1;
  }
  decrease() {
    if ((this.product.quantity ?? 1) > 1) {
      this.product.quantity = (this.product.quantity ?? 1) - 1;
    }
  }
  static \u0275fac = function ProductDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetails)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetails, selectors: [["app-product-details"]], decls: 1, vars: 1, consts: [["class", "container my-5 ", 4, "ngIf"], [1, "container", "my-5"], [1, "row"], [1, "col-md-2", "gap-3", "thumbnails"], ["class", "thumb", 3, "src", "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-5", "text-center", "main-img-div"], [1, "main-img", "img-fluid", 3, "src"], [1, "col-md-4", "ms-md-1", "ms-lg-4"], [1, "fw-bold", "mt-3"], [1, "d-flex"], [1, "rating", "text-warning"], ["class", "bi bi-star-fill", 4, "ngFor", "ngForOf"], ["class", "bi bi-star-half", 4, "ngIf"], ["class", "bi bi-star", 4, "ngFor", "ngForOf"], [1, "text-black-50", "ms-2"], [1, "text-black-50", "ms-3"], [1, "text-success", "ms-3"], [1, "text-danger-emphasis", "ms-3"], [1, "d-flex", "gap-2", "align-content-center", "align-items-center"], [1, "fw-bold"], [1, "text-muted", "text-decoration-line-through"], [1, "rounded-pill", "p-2", "py-1", "text-danger", "bg-danger-subtle"], [1, "text-muted", "mt-3"], [1, "d-flex", "flex-column"], [1, "d-inline"], ["class", "color-box ms-1 my-2", 3, "ngClass", "active", "click", 4, "ngFor", "ngForOf"], [1, "mb-3", "d-flex", "flex-column"], ["class", "btn btn-sm m-1 rounded-pill border-0 size-btn px-3", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "qty-box", "d-flex"], [1, "btn", "btn-light", 3, "click"], [1, "px-3", "d-flex", "align-items-center"], [1, "btn", "btn-light", "btn-increase", "text-light", 3, "click"], [1, "btn", "buy-btn", "px-4", "w-50"], [1, "btn", "btn-outline-dark"], [1, "bi", "bi-heart"], [1, "delivery-box", "mb-2", "d-flex", "align-items-center"], [1, "bi", "bi-truck"], [1, "bi", "bi-arrow-repeat"], [1, "nav", "nav-pills", "col-12", "mt-5"], [1, "nav-item", "col-4"], ["data-bs-toggle", "pill", "data-bs-target", "#details", 1, "nav-link-btn", "active"], ["data-bs-toggle", "pill", "data-bs-target", "#reviews", 1, "nav-link-btn"], ["data-bs-toggle", "pill", "data-bs-target", "#faqs", 1, "nav-link-btn"], [1, "tab-content", "mt-3"], ["id", "details", 1, "tab-pane", "fade", "show", "active"], [1, "m-lg-4", "m-1"], [4, "ngFor", "ngForOf"], ["id", "reviews", 1, "tab-pane", "fade"], [1, "d-flex", "justify-content-between", "align-items-center", "mx-5", "my-3"], [1, "d-flex", "gap-2", "align-items-center"], [1, "mb-0"], [1, "text-muted", "mb-0"], [1, "btn", "bg-dark-subtle", "rounded-pill", "d-none", "d-md-flex", "p-2"], [1, "bi", "bi-sliders2-vertical"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "bg-dark-subtle", "rounded-pill", "dropdown-toggle", "p-2"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "btn", "bg-black", "text-light", "rounded-pill", "d-none", "d-md-flex", "px-3", "py-2"], [1, "d-flex", "flex-wrap", "justify-content-center", "gap-4"], ["class", "card col-md-5 p-3  col-10", 4, "ngFor", "ngForOf"], [1, "mt-4", "d-flex", "justify-content-center"], [1, "btn", "border-1", "border", "px-3", "rounded-pill"], [1, "btn", "bg-black", "text-light", "px-lg-3", "p-0", "rounded-pill", "d-md-none"], ["id", "faqs", 1, "tab-pane", "fade"], [1, "thumb", 3, "click", "src"], [1, "bi", "bi-star-fill"], [1, "bi", "bi-star-half"], [1, "bi", "bi-star"], [1, "color-box", "ms-1", "my-2", 3, "click", "ngClass"], [1, "btn", "btn-sm", "m-1", "rounded-pill", "border-0", "size-btn", "px-3", 3, "click", "ngClass"], [1, "card", "col-md-5", "p-3", "col-10"], [1, "mb-2"], ["class", "bi", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "bi", "bi-patch-check-fill", "text-success", "ms-1"], [1, "text-muted", "my-2"], [1, "small", "text-secondary"], [1, "bi", 3, "ngClass"]], template: function ProductDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductDetails_div_0_Template, 114, 19, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.product);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ProductFaqs, DatePipe], styles: ["\n\n.thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: 0.3s;\n  background-color: rgb(242, 242, 242);\n  padding: 10px;\n}\n@media (min-width:800px) {\n  .thumb[_ngcontent-%COMP%] {\n    max-height: 120px;\n    max-width: 120px;\n    margin-bottom: 15px;\n    margin-left: 20px;\n  }\n  .thumbnails[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (min-width: 100px) and (max-width: 800px) {\n  .thumb[_ngcontent-%COMP%] {\n    max-height: 100px;\n    max-width: 100px;\n    margin: 10px;\n  }\n  .thumbnails[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.thumb[_ngcontent-%COMP%]:hover, \n.thumb.active[_ngcontent-%COMP%] {\n  border: 2px solid #dc3545;\n}\n.main-img-div[_ngcontent-%COMP%] {\n}\n.main-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  background-color: rgb(242, 242, 242);\n  padding: 30px;\n  border-radius: 5px;\n}\n.color-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  margin: 0 6px;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.color-box.active[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n}\n.qty-box[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.qty-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n}\n.delivery-box[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.delivery-box[_ngcontent-%COMP%]:hover {\n  background-color: #f9f9f9;\n}\n.bi[_ngcontent-%COMP%] {\n  margin: 1px;\n}\n.btn-increase[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.bi-truck[_ngcontent-%COMP%], \n.bi-arrow-repeat[_ngcontent-%COMP%] {\n  font-size: 25px;\n  padding: 8px;\n  margin-right: 10px;\n}\n.buy-btn[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: #ddd;\n  border-radius: 50px;\n}\n.size-btn[_ngcontent-%COMP%] {\n  background-color: rgb(240, 240, 240);\n}\n.nav-link-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 2px solid rgb(214, 211, 211);\n  border-radius: 0;\n  background-color: white;\n  width: 100%;\n  padding: 10px;\n  font-size: 18px;\n  color: gray;\n}\n.nav-link-btn.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n  border-bottom: 3px solid rgb(95, 94, 94);\n}\n/*# sourceMappingURL=product-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetails, [{
    type: Component,
    args: [{ selector: "app-product-details", imports: [CommonModule, NgClass, ProductFaqs], template: `<div class="container my-5 " *ngIf="product">\r
  <div class="row">\r
\r
    <!-- \u{1F539} Column 1 (Thumbnails) -->\r
    <div class="col-md-2  gap-3 thumbnails">\r
      <img *ngFor="let img of product.images" [src]="img" class="thumb" [class.active]="img === selectedImage"\r
        (click)="selectImage(img)">\r
    </div>\r
\r
    <!-- \u{1F539} Column 2 (Main Image) -->\r
    <div class="col-md-5 text-center main-img-div">\r
      <img [src]="selectedImage || product.images?.[0] || ''" class="main-img img-fluid">\r
    </div>\r
\r
    <!-- \u{1F539} Column 3 (Details) -->\r
    <div class="col-md-4 ms-md-1 ms-lg-4 ">\r
\r
      <!-- Title -->\r
      <h4 class="fw-bold mt-3">{{product.name}}</h4>\r
\r
      <div class="d-flex">\r
        <!-- Rating -->\r
        <div class="rating text-warning ">\r
\r
          <!-- Full Stars -->\r
          <i class="bi bi-star-fill" *ngFor="let star of fullStars"></i>\r
\r
          <!-- Half Star -->\r
          <i class="bi bi-star-half" *ngIf="halfStar"></i>\r
\r
          <!-- Empty Stars -->\r
          <i class="bi bi-star" *ngFor="let star of emptyStars"></i>\r
        </div>\r
        <p class="text-black-50 ms-2">{{product.rating}}/5</p>\r
        <p class="text-black-50 ms-3">|</p>\r
        @if((product.stockQuantity ?? 0) > 0){\r
        <p class="text-success ms-3">In stock</p>\r
        }\r
        @if((product.stockQuantity ?? 0) == 0){\r
        <p class="text-danger-emphasis ms-3">Out of Stock</p>\r
        }\r
      </div>\r
\r
      <!-- Price -->\r
      <div class="d-flex gap-2 align-content-center align-items-center">\r
        <h4 class="fw-bold ">\${{product.price}}</h4>\r
        <h4 class="text-muted text-decoration-line-through ">\${{product.oldPrice}}</h4>\r
        <h6 class="rounded-pill p-2 py-1 text-danger bg-danger-subtle">-{{product.sale}}%</h6>\r
      </div>\r
      <!-- Description -->\r
      <p class="text-muted mt-3">\r
        {{product.description}}\r
      </p>\r
\r
      <hr>\r
\r
      <!-- Colors -->\r
      <div class="  d-flex flex-column">\r
        <strong>Select Colors</strong>\r
        <div class="d-inline">\r
          <span *ngFor="let c of colors" class="color-box ms-1 my-2" [ngClass]="c" [class.active]="selectedColor === c"\r
            (click)="selectedColor = c">\r
          </span>\r
        </div>\r
      </div>\r
      <hr>\r
      <!-- Sizes -->\r
      <div class="mb-3 d-flex flex-column">\r
        <strong>Choose Size</strong>\r
        <div class="d-inline">\r
          <button *ngFor="let s of sizes" class="btn btn-sm m-1 rounded-pill border-0 size-btn px-3"\r
            [ngClass]="selectedSize === s ? 'text-light bg-dark' : 'btn-outline-secondary'" (click)="selectedSize = s">\r
            {{s}}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Quantity + Buttons -->\r
      <div class="d-flex align-items-center gap-3 mb-3">\r
\r
        <div class="qty-box d-flex">\r
          <button class="btn btn-light" (click)="decrease()">-</button>\r
          <span class="px-3 d-flex align-items-center">{{product.quantity}}</span>\r
          <button class="btn btn-light btn-increase text-light" (click)="increase()">+</button>\r
        </div>\r
\r
        <button class="btn buy-btn px-4 w-50">Buy Now</button>\r
\r
        <button class="btn btn-outline-dark">\r
          <i class="bi bi-heart"></i>\r
        </button>\r
      </div>\r
\r
      <!-- Delivery -->\r
      <div class="delivery-box mb-2 d-flex align-items-center ">\r
        <i class="bi bi-truck"></i>\r
        <div>\r
          <h6>Free Delivery </h6>\r
          <small>Enter your postal code for Delivery Availability</small>\r
        </div>\r
      </div>\r
      <!-- Delivery -->\r
      <div class="delivery-box mb-2 d-flex align-items-center">\r
        <i class="bi bi-arrow-repeat"></i>\r
        <div>\r
          <h6>Return Delivery </h6>\r
          <small>Free 30 Days Delivery Returns</small>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
\r
\r
  <!-- ///dtails  -->\r
  <ul class="nav nav-pills col-12 mt-5">\r
    <li class="nav-item col-4">\r
      <button class=" nav-link-btn active " data-bs-toggle="pill" data-bs-target="#details">Details</button>\r
    </li>\r
    <li class="nav-item col-4">\r
      <button class="nav-link-btn  " data-bs-toggle="pill" data-bs-target="#reviews">Reviews</button>\r
    </li>\r
    <li class="nav-item col-4">\r
      <button class="nav-link-btn" data-bs-toggle="pill" data-bs-target="#faqs">FAQs</button>\r
    </li>\r
  </ul>\r
\r
  <div class="tab-content mt-3">\r
    <!-- details  -->\r
    <div class="tab-pane fade show active" id="details">\r
      <div class="m-lg-4 m-1">\r
        <ul>\r
          <li *ngFor="let item of specsArray">\r
            {{ item }}.\r
          </li>\r
        </ul>\r
      </div>\r
\r
    </div>\r
\r
    <!-- reviews  -->\r
    <div class="tab-pane fade" id="reviews">\r
      <div class="d-flex justify-content-between align-items-center mx-5 my-3">\r
        <!-- Title + Count -->\r
        <div class="d-flex gap-2 align-items-center">\r
          <h5 class="mb-0">All Reviews</h5>\r
          <h6 class="text-muted mb-0">({{product.reviews?.length ?? 0}})</h6>\r
        </div>\r
\r
        <!-- Buttons -->\r
        <div class="d-flex gap-2 align-items-center">\r
          <!-- Filter button -->\r
          <button class="btn bg-dark-subtle rounded-pill d-none d-md-flex p-2">\r
            <i class="bi bi-sliders2-vertical"></i>\r
          </button>\r
\r
          <!-- Sort dropdown -->\r
          <div class="dropdown">\r
            <button class="btn bg-dark-subtle rounded-pill dropdown-toggle p-2" type="button" data-bs-toggle="dropdown">\r
              Sort by\r
            </button>\r
            <ul class="dropdown-menu">\r
              <li><a class="dropdown-item" href="#">Newest</a></li>\r
              <li><a class="dropdown-item" href="#">Oldest</a></li>\r
            </ul>\r
          </div>\r
\r
          <!-- Write Review button -->\r
          <button class="btn bg-black text-light rounded-pill d-none d-md-flex px-3 py-2">\r
            Write a Review\r
          </button>\r
        </div>\r
      </div>\r
      <div class="m-lg-4 m-1">\r
        <div class="d-flex flex-wrap justify-content-center gap-4 ">\r
          <div *ngFor="let item of product.reviews" class="card col-md-5 p-3  col-10">\r
\r
            <!-- \u2B50 Stars -->\r
            <div class="mb-2">\r
              <i *ngFor="let star of [1,2,3,4,5]" class="bi"\r
                [ngClass]="star <= item.rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'">\r
              </i>\r
            </div>\r
\r
            <!-- \u{1F464} Name + Verified -->\r
            <div class="fw-bold">\r
              {{ item.userName }}\r
              <i class="bi bi-patch-check-fill text-success ms-1"></i>\r
            </div>\r
\r
            <!-- \u{1F4AC} Comment -->\r
            <div class="text-muted my-2">\r
              {{ item.comment }}\r
            </div>\r
\r
            <!-- \u{1F4C5} Date -->\r
            <div class="small text-secondary">\r
              {{ item.createdAt | date:'mediumDate' }}\r
            </div>\r
\r
          </div>\r
        </div>\r
        <div class="mt-4 d-flex justify-content-center">\r
          <button class="btn border-1 border px-3 rounded-pill">Load more reviews</button>\r
          <button class="btn bg-black text-light px-lg-3 p-0 rounded-pill d-md-none">Write a Review</button>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- FAQs  -->\r
    <div class="tab-pane fade" id="faqs">\r
      <app-product-faqs></app-product-faqs>\r
    </div>\r
  </div>\r
\r
</div>`, styles: ["/* src/app/features/product/product-details/product-details.css */\n.thumb {\n  width: 100%;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: 0.3s;\n  background-color: rgb(242, 242, 242);\n  padding: 10px;\n}\n@media (min-width:800px) {\n  .thumb {\n    max-height: 120px;\n    max-width: 120px;\n    margin-bottom: 15px;\n    margin-left: 20px;\n  }\n  .thumbnails {\n    flex-direction: column;\n  }\n}\n@media (min-width: 100px) and (max-width: 800px) {\n  .thumb {\n    max-height: 100px;\n    max-width: 100px;\n    margin: 10px;\n  }\n  .thumbnails {\n    flex-direction: row;\n  }\n}\n.thumb:hover,\n.thumb.active {\n  border: 2px solid #dc3545;\n}\n.main-img-div {\n}\n.main-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  background-color: rgb(242, 242, 242);\n  padding: 30px;\n  border-radius: 5px;\n}\n.color-box {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  margin: 0 6px;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.color-box.active {\n  border: 2px solid #000;\n}\n.qty-box {\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.qty-box button {\n  border: none;\n}\n.delivery-box {\n  border: 1px solid #ddd;\n  padding: 12px;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.delivery-box:hover {\n  background-color: #f9f9f9;\n}\n.bi {\n  margin: 1px;\n}\n.btn-increase {\n  background-color: var(--primary-color);\n}\n.bi-truck,\n.bi-arrow-repeat {\n  font-size: 25px;\n  padding: 8px;\n  margin-right: 10px;\n}\n.buy-btn {\n  background-color: var(--primary-color);\n  color: #ddd;\n  border-radius: 50px;\n}\n.size-btn {\n  background-color: rgb(240, 240, 240);\n}\n.nav-link-btn {\n  border: none;\n  border-bottom: 2px solid rgb(214, 211, 211);\n  border-radius: 0;\n  background-color: white;\n  width: 100%;\n  padding: 10px;\n  font-size: 18px;\n  color: gray;\n}\n.nav-link-btn.active {\n  font-weight: 600;\n  color: #000;\n  border-bottom: 3px solid rgb(95, 94, 94);\n}\n/*# sourceMappingURL=product-details.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetails, { className: "ProductDetails", filePath: "app/features/product/product-details/product-details.ts", lineNumber: 15 });
})();

// src/app/features/product/product/product.ts
var Product = class _Product {
  productservice;
  products;
  constructor(productservice) {
    this.productservice = productservice;
  }
  static \u0275fac = function Product_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Product)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Product, selectors: [["app-product"]], decls: 9, vars: 1, consts: [[1, "container", "mt-5"], [1, "d-flex", "gap-2"], ["routerLink", "", 1, "homeLink"], [3, "products"]], template: function Product_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "a", 2);
      \u0275\u0275text(4, "Home ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "/ Product");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(7, "app-product-details")(8, "app-four-product", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("products", ctx.products);
    }
  }, dependencies: [RouterLink, ProductDetails, FourProduct], styles: ["\n\n.homeLink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: gray;\n}\n/*# sourceMappingURL=product.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Product, [{
    type: Component,
    args: [{ selector: "app-product", imports: [RouterLink, ProductDetails, FourProduct], template: '<div class="container mt-5">\r\n    <!-- //router-Link -->\r\n    <div>\r\n        <div class="d-flex gap-2"><a routerLink="" class="homeLink">Home </a>\r\n            <p>/ Product</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<app-product-details></app-product-details>\r\n<app-four-product [products]="products"></app-four-product>', styles: ["/* src/app/features/product/product/product.css */\n.homeLink {\n  text-decoration: none;\n  color: gray;\n}\n/*# sourceMappingURL=product.css.map */\n"] }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Product, { className: "Product", filePath: "app/features/product/product/product.ts", lineNumber: 15 });
})();

// src/app/features/account/sidebar/sidebar.ts
var _c03 = () => ["/account/edit"];
var _c1 = () => ({ exact: true });
var _c2 = () => ["/account/payment"];
var _c3 = () => ["/account/my-orders"];
var Sidebar = class _Sidebar {
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], decls: 12, vars: 12, consts: [[1, "links", "flex-md-column"], ["routerLinkActive", "active", 1, "link-mav", 3, "routerLink", "routerLinkActiveOptions"]], template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h6");
      \u0275\u0275text(1, "Manage My Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 0)(3, "a", 1);
      \u0275\u0275text(4, " My Profile ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 1);
      \u0275\u0275text(6, " My Payment Options ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h6");
      \u0275\u0275text(8, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 0)(10, "a", 1);
      \u0275\u0275text(11, " My Orders ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c03))("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c2))("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c3))("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c1));
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n\n.links[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n.link-mav[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: gray;\n  padding: 4px;\n}\n.link-mav.active[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=sidebar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", imports: [RouterLink, RouterLinkActive], template: `<!-- Sidebar Navigation + Dynamic Content -->\r
<h6>Manage My Account</h6>\r
<div class="links flex-md-column">\r
\r
  <a [routerLink]="['/account/edit']"\r
     routerLinkActive="active"\r
     [routerLinkActiveOptions]="{ exact: true }"\r
     class="link-mav">\r
    My Profile\r
  </a>\r
\r
  <a [routerLink]="['/account/payment']"\r
     routerLinkActive="active"\r
     [routerLinkActiveOptions]="{ exact: true }"\r
     class="link-mav">\r
    My Payment Options\r
  </a>\r
\r
</div>\r
\r
<h6>My Orders</h6>\r
<div class="links flex-md-column">\r
\r
  <a [routerLink]="['/account/my-orders']"\r
     routerLinkActive="active"\r
     [routerLinkActiveOptions]="{ exact: true }"\r
     class="link-mav">\r
    My Orders\r
  </a>\r
\r
\r
</div>\r
\r
<!-- <a [routerLink]="['/account/wish-items']"\r
   routerLinkActive="active"\r
   [routerLinkActiveOptions]="{ exact: true }"\r
   class="link-mav text-black">\r
 <h6> My Wishlist</h6>\r
</a> -->`, styles: ["/* src/app/features/account/sidebar/sidebar.css */\n.links {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n.link-mav {\n  text-decoration: none;\n  color: gray;\n  padding: 4px;\n}\n.link-mav.active {\n  color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=sidebar.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "app/features/account/sidebar/sidebar.ts", lineNumber: 10 });
})();

// src/app/features/account/account/account.ts
var Account = class _Account {
  router;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.navigate(["/account/edit"]);
  }
  static \u0275fac = function Account_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Account)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Account, selectors: [["app-account"]], decls: 19, vars: 0, consts: [[1, "container"], [1, "links", "d-flex", "justify-content-between"], [1, "d-flex", "gap-2"], ["routerLink", "", 1, "homeLink"], [1, "d-flex"], [1, "text-danger"], [1, "container", "mt-4"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [1, "div-router"]], template: function Account_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "/ My Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "p");
      \u0275\u0275text(9, "Wellcom! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11, "MO Premi");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8);
      \u0275\u0275element(15, "app-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
      \u0275\u0275element(18, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink, RouterOutlet, Sidebar], styles: ["\n\n.cartLink[_ngcontent-%COMP%], \n.homeLink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: gray;\n}\n.links[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.div-router[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  padding: 70px;\n}\n@media (max-width:800px) {\n  .div-router[_ngcontent-%COMP%] {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=account.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Account, [{
    type: Component,
    args: [{ selector: "app-account", imports: [RouterLink, RouterOutlet, Sidebar], template: '<div class="container">\r\n        <!-- //router-Link -->\r\n    <div class="links d-flex justify-content-between">\r\n        <div class="d-flex gap-2"><a routerLink="" class="homeLink">Home </a>\r\n            <p>/ My Account</p>\r\n        </div>\r\n        <div class="d-flex">\r\n        <p>Wellcom! </p>\r\n        <p class="text-danger">MO Premi</p>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class="container mt-4">\r\n  <div class="row">\r\n\r\n    <!-- Sidebar -->\r\n    <div class="col-md-3">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n\r\n    <!-- Content -->\r\n    <div class="col-md-9">\r\n      <div class="  div-router">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>', styles: ["/* src/app/features/account/account/account.css */\n.cartLink,\n.homeLink {\n  text-decoration: none;\n  color: gray;\n}\n.links {\n  margin-top: 50px;\n}\n.div-router {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  padding: 70px;\n}\n@media (max-width:800px) {\n  .div-router {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=account.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Account, { className: "Account", filePath: "app/features/account/account/account.ts", lineNumber: 11 });
})();

// src/app/features/account/edit-profile/edit-profile.ts
var EditProfile = class _EditProfile {
  static \u0275fac = function EditProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfile, selectors: [["app-edit-profile"]], decls: 36, vars: 0, consts: [[1, "edit-parent-div", "p-3"], [1, "mb-3", "edit"], [1, "d-flex", "justify-content-between", "gap-1", "gap-lg-5", "flex-column", "flex-lg-row"], [1, "mb-3", "w-100"], ["type", "text", "placeholder", "Ah", 1, "form-control", "form-input"], ["type", "email", "placeholder", "Mo", 1, "form-control", "form-input"], ["type", "text", "placeholder", "ah@example.com", 1, "form-control", "form-input"], ["type", "email", "placeholder", "10 ex ,eg", 1, "form-control", "form-input"], [1, "d-flex", "flex-column", "gap-1", "mt-3"], ["type", "text", "placeholder", "Current", 1, "form-control", "form-input"], ["type", "email", "placeholder", "New", 1, "form-control", "form-input"], ["type", "email", "placeholder", "Confairm New", 1, "form-control", "form-input"], [1, "text-end"], ["id", "", 1, "btn", "p-3", "m-2"], ["id", "save-changes-btn", 1, "btn"]], template: function EditProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, "Edit Your Profile");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "form")(4, "div", 2)(5, "div", 3)(6, "label");
      \u0275\u0275text(7, "First Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(8, "input", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 3)(10, "label");
      \u0275\u0275text(11, "Last Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(12, "input", 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 2)(14, "div", 3)(15, "label");
      \u0275\u0275text(16, "Email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(17, "input", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "div", 3)(19, "label");
      \u0275\u0275text(20, "Address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(21, "input", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 8)(23, "div", 3)(24, "label");
      \u0275\u0275text(25, "Change Password");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(26, "input", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 3);
      \u0275\u0275domElement(28, "input", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 3);
      \u0275\u0275domElement(30, "input", 11);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "div", 12)(32, "a", 13);
      \u0275\u0275text(33, "Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "a", 14);
      \u0275\u0275text(35, "Save Changes");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n\n.edit[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.form-input[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #f5f5f5;\n  border: none;\n  border-radius: 5px;\n}\n.form-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: gray;\n}\n#save-changes-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 15px;\n}\n/*# sourceMappingURL=edit-profile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProfile, [{
    type: Component,
    args: [{ selector: "app-edit-profile", imports: [], template: '<div class="edit-parent-div  p-3">\r\n    <h4 class="mb-3 edit">Edit Your Profile</h4>\r\n\r\n    <form>\r\n        <div class="d-flex justify-content-between gap-1 gap-lg-5 flex-column flex-lg-row">\r\n            <div class="mb-3 w-100">\r\n                <label>First Name</label>\r\n                <input type="text" class="form-control form-input" placeholder="Ah">\r\n            </div>\r\n\r\n            <div class="mb-3 w-100">\r\n                <label>Last Name</label>\r\n                <input type="email" class="form-control form-input" placeholder="Mo">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="d-flex justify-content-between gap-1 gap-lg-5 flex-column flex-lg-row">\r\n            <div class="mb-3 w-100">\r\n                <label>Email</label>\r\n                <input type="text" class="form-control form-input" placeholder="ah@example.com">\r\n            </div>\r\n\r\n            <div class="mb-3 w-100">\r\n                <label>Address</label>\r\n                <input type="email" class="form-control form-input" placeholder="10 ex ,eg">\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class="d-flex flex-column gap-1 mt-3">\r\n            <div class="mb-3 w-100">\r\n                <label>Change Password</label>\r\n                <input type="text" class="form-control form-input" placeholder="Current">\r\n            </div>\r\n\r\n            <div class="mb-3 w-100">\r\n                <input type="email" class="form-control form-input" placeholder="New">\r\n            </div>\r\n            <div class="mb-3 w-100">\r\n                <input type="email" class="form-control form-input" placeholder="Confairm New">\r\n            </div>\r\n        </div>\r\n        <div class="text-end">\r\n            <a class="btn p-3 m-2" id="">Cancel</a>\r\n            <a class="btn" id="save-changes-btn">Save Changes</a>\r\n        </div>\r\n\r\n    </form>\r\n</div>', styles: ["/* src/app/features/account/edit-profile/edit-profile.css */\n.edit {\n  color: var(--primary-color);\n}\n.form-input {\n  height: 50px;\n  background-color: #f5f5f5;\n  border: none;\n  border-radius: 5px;\n}\n.form-input label {\n  color: gray;\n}\n#save-changes-btn {\n  width: 200px;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 15px;\n}\n/*# sourceMappingURL=edit-profile.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfile, { className: "EditProfile", filePath: "app/features/account/edit-profile/edit-profile.ts", lineNumber: 9 });
})();

// src/app/features/account/payment-options/payment-options.ts
function PaymentOptions_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(t_r1.type === "Deposit" ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", t_r1.amount);
  }
}
var PaymentOptions = class _PaymentOptions {
  balance = 1200;
  // رصيد افتراضي
  depositAmount = 0;
  depositMethod = "PayPal";
  // افتراضي
  transactions = [
    { id: 1, date: "2026-04-01", type: "Deposit", method: "PayPal", amount: 500 },
    { id: 2, date: "2026-03-28", type: "Deposit", method: "Credit Card", amount: 200 },
    { id: 3, date: "2026-03-25", type: "Deposit", method: "PayPal", amount: 300 }
  ];
  addDeposit() {
    if (this.depositAmount <= 0)
      return;
    this.balance += this.depositAmount;
    const newTransaction = {
      id: this.transactions.length + 1,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      type: "Deposit",
      method: this.depositMethod,
      amount: this.depositAmount
    };
    this.transactions.unshift(newTransaction);
    this.depositAmount = 0;
  }
  static \u0275fac = function PaymentOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentOptions)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentOptions, selectors: [["app-payment-options"]], decls: 41, vars: 2, consts: [[1, "container", "my-4"], [1, "mb-4"], [1, "card", "mb-4", "shadow-sm", "p-3", "text-center"], [1, "text-success"], [1, "card", "mb-4", "shadow-sm", "p-3"], [1, "row", "g-2", "mt-2"], [1, "col-md-4"], ["type", "number", "placeholder", "Amount", 1, "form-control"], [1, "form-select"], ["value", "PayPal"], ["value", "Credit Card"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "card", "shadow-sm", "p-3"], [1, "table", "table-striped", "mt-3"], [4, "ngFor", "ngForOf"]], template: function PaymentOptions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, "My Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "h5");
      \u0275\u0275text(5, "Current Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "h5");
      \u0275\u0275text(10, "Add Money to Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
      \u0275\u0275element(13, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6)(15, "select", 8)(16, "option", 9);
      \u0275\u0275text(17, "PayPal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Credit Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 6)(21, "button", 11);
      \u0275\u0275listener("click", function PaymentOptions_Template_button_click_21_listener() {
        return ctx.addDeposit();
      });
      \u0275\u0275text(22, "Deposit");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 12)(24, "h5");
      \u0275\u0275text(25, "Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "table", 13)(27, "thead")(28, "tr")(29, "th");
      \u0275\u0275text(30, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275template(40, PaymentOptions_tr_40_Template, 12, 7, "tr", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("$ ", ctx.balance);
      \u0275\u0275advance(33);
      \u0275\u0275property("ngForOf", ctx.transactions);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.card.text-center[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=payment-options.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentOptions, [{
    type: Component,
    args: [{ selector: "app-payment-options", standalone: true, imports: [CommonModule], template: `<div class="container my-4">\r
  <h4 class="mb-4">My Balance</h4>\r
\r
  <!-- Current Balance -->\r
  <div class="card mb-4 shadow-sm p-3 text-center">\r
    <h5>Current Balance</h5>\r
    <h2 class="text-success">$ {{ balance }}</h2>\r
  </div>\r
\r
  <!-- Deposit Money -->\r
  <div class="card mb-4 shadow-sm p-3">\r
    <h5>Add Money to Account</h5>\r
    <div class="row g-2 mt-2">\r
      <div class="col-md-4">\r
        <input type="number" class="form-control" placeholder="Amount" >\r
      </div>\r
\r
      <div class="col-md-4">\r
        <select class="form-select">\r
          <option value="PayPal">PayPal</option>\r
          <option value="Credit Card">Credit Card</option>\r
        </select>\r
      </div>\r
\r
      <div class="col-md-4">\r
        <button class="btn btn-primary w-100" (click)="addDeposit()">Deposit</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Transaction History -->\r
  <div class="card shadow-sm p-3">\r
    <h5>Transaction History</h5>\r
    <table class="table table-striped mt-3">\r
      <thead>\r
        <tr>\r
          <th>ID</th>\r
          <th>Date</th>\r
          <th>Type</th>\r
          <th>Method</th>\r
          <th>Amount</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let t of transactions">\r
          <td>{{ t.id }}</td>\r
          <td>{{ t.date }}</td>\r
          <td>\r
            <span [class]="t.type === 'Deposit' ? 'text-success' : 'text-danger'">{{ t.type }}</span>\r
          </td>\r
          <td>{{ t.method }}</td>\r
          <td>$ {{ t.amount }}</td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</div>`, styles: ["/* src/app/features/account/payment-options/payment-options.css */\n.card.text-center h2 {\n  font-size: 2.5rem;\n}\n.table th,\n.table td {\n  vertical-align: middle;\n}\n.card .btn {\n  height: 100%;\n}\n/*# sourceMappingURL=payment-options.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentOptions, { className: "PaymentOptions", filePath: "app/features/account/payment-options/payment-options.ts", lineNumber: 11 });
})();

// src/app/features/account/my-orders/my-orders.ts
function MyOrders_div_3_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r1.name, " \xD7 ", item_r1.quantity, " ");
  }
}
function MyOrders_div_3_button_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275text(1, " Buy Again ");
    \u0275\u0275elementEnd();
  }
}
function MyOrders_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "small");
    \u0275\u0275text(4, "ORDER PLACED");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "small");
    \u0275\u0275text(10, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "br");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "$ 4555");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "small");
    \u0275\u0275text(16, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "br");
    \u0275\u0275elementStart(18, "span", 5);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "small");
    \u0275\u0275text(22, "ORDER ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "br");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 6)(27, "div", 7);
    \u0275\u0275template(28, MyOrders_div_3_div_28_Template, 2, 2, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 9)(30, "button", 10);
    \u0275\u0275text(31, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, MyOrders_div_3_button_32_Template, 2, 0, "button", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(order_r2.date);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", order_r2.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", order_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", order_r2.items);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", order_r2.status === "Delivered");
  }
}
var MyOrders = class _MyOrders {
  orders = [
    {
      id: 101,
      date: "2026-04-01",
      status: "Delivered",
      items: [
        { name: "Apple iPhone 15", quantity: 1 },
        { name: "AirPods Pro", quantity: 2 }
      ]
    },
    {
      id: 102,
      date: "2026-03-28",
      status: "Pending",
      items: [
        { name: "Samsung Galaxy S23", quantity: 1 },
        { name: "Samsung Charger", quantity: 1 }
      ]
    },
    {
      id: 103,
      date: "2026-03-25",
      status: "Shipped",
      items: [
        { name: 'MacBook Pro 16"', quantity: 1 },
        { name: "USB-C Hub", quantity: 1 }
      ]
    },
    {
      id: 104,
      date: "2026-03-20",
      status: "Delivered",
      items: [
        { name: "Sony WH-1000XM5", quantity: 1 },
        { name: "Laptop Stand", quantity: 1 }
      ]
    }
  ];
  getTotal(order) {
    return order.items.reduce((total, item) => total + item.quantity * 100, 0);
  }
  getStatusClass(status) {
    switch (status) {
      case "Delivered":
        return "bg-success text-white";
      case "Pending":
        return "bg-warning text-dark";
      case "Shipped":
        return "bg-info text-white";
      default:
        return "bg-secondary text-white";
    }
  }
  static \u0275fac = function MyOrders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyOrders)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyOrders, selectors: [["app-my-orders"]], decls: 4, vars: 1, consts: [[1, "container", "my-4"], [1, "title"], ["class", "order-card mb-4 shadow-sm", 4, "ngFor", "ngForOf"], [1, "order-card", "mb-4", "shadow-sm"], [1, "order-header", "d-flex", "justify-content-between", "flex-wrap"], [1, "badge"], [1, "order-body", "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "order-items"], [4, "ngFor", "ngForOf"], [1, "order-actions", "text-end", "mt-3", "mt-md-0"], [1, "btn", "btn-outline-primary", "btn-sm", "me-2"], ["class", "btn btn-outline-secondary btn-sm", 4, "ngIf"], [1, "btn", "btn-outline-secondary", "btn-sm"]], template: function MyOrders_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
      \u0275\u0275text(2, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, MyOrders_div_3_Template, 33, 5, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.orders);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.title[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  margin-bottom: 30px;\n}\n.order-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n}\n.order-header[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  padding: 12px 16px;\n  border-bottom: 1px solid #ddd;\n  font-size: 13px;\n}\n.order-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.order-items[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  transition: 0.3s;\n}\n.order-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.confirm-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  padding: 25px;\n  border-radius: 16px;\n  width: 320px;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_pop 0.25s ease;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n@keyframes _ngcontent-%COMP%_pop {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=my-orders.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyOrders, [{
    type: Component,
    args: [{ selector: "app-my-orders", imports: [CommonModule, RouterModule], template: `<div class="container my-4">\r
  <h4 class="title">My Orders</h4>\r
\r
  <div class="order-card mb-4 shadow-sm" *ngFor="let order of orders">\r
    <div class="order-header d-flex justify-content-between flex-wrap">\r
      <div>\r
        <small>ORDER PLACED</small><br>\r
        <strong>{{ order.date }}</strong>\r
      </div>\r
\r
      <div>\r
        <small>TOTAL</small><br>\r
        <strong>$ 4555</strong>\r
      </div>\r
\r
      <div>\r
        <small>STATUS</small><br>\r
        <span class="badge" >\r
          {{ order.status }}\r
        </span>\r
      </div>\r
\r
      <div>\r
        <small>ORDER ID</small><br>\r
        <strong>#{{ order.id }}</strong>\r
      </div>\r
    </div>\r
\r
    <div class="order-body d-flex justify-content-between align-items-center flex-wrap">\r
      <div class="order-items">\r
        <div *ngFor="let item of order.items">\r
          {{ item.name }} \xD7 {{ item.quantity }}\r
        </div>\r
      </div>\r
\r
      <div class="order-actions text-end mt-3 mt-md-0">\r
        <button class="btn btn-outline-primary btn-sm me-2">\r
          View Details\r
        </button>\r
\r
        <button class="btn btn-outline-secondary btn-sm" *ngIf="order.status === 'Delivered'">\r
          Buy Again\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/account/my-orders/my-orders.css */\n.title {\n  color: var(--primary-color);\n  margin-bottom: 30px;\n}\n.order-card {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n}\n.order-header {\n  background: #f6f6f6;\n  padding: 12px 16px;\n  border-bottom: 1px solid #ddd;\n  font-size: 13px;\n}\n.order-body {\n  padding: 16px;\n}\n.order-items {\n  font-size: 14px;\n  font-weight: 500;\n}\n.order-card:hover {\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);\n  transition: 0.3s;\n}\n.order-actions button {\n  min-width: 120px;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.confirm-box {\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  padding: 25px;\n  border-radius: 16px;\n  width: 320px;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  animation: pop 0.25s ease;\n}\n.actions {\n  margin-top: 15px;\n}\n@keyframes pop {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=my-orders.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyOrders, { className: "MyOrders", filePath: "app/features/account/my-orders/my-orders.ts", lineNumber: 12 });
})();

// src/app/features/wishlist/items/items.ts
function Items_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 5);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275property("product", product_r1);
  }
}
var Items = class _Items {
  products;
  static \u0275fac = function Items_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Items)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Items, selectors: [["app-items"]], inputs: { products: "products" }, decls: 9, vars: 1, consts: [[1, "d-flex", "flex-column", "container", "my-5"], [1, "d-flex", "justify-content-between", "align-content-center"], [1, "align-content-center"], [1, "btn", "border", "btn-move", "p-2", "px-lg-4"], [1, "d-flex", "gap-4", "flex-wrap", "my-5", "justify-content-center", "align-content-center"], [3, "product"]], template: function Items_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275text(5, "Move All To Bag");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, Items_For_8_Template, 1, 1, "app-product-card", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("WishList (", ctx.products.length, ")");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.products);
    }
  }, dependencies: [ProductCard], styles: ["\n\n.btn-move[_ngcontent-%COMP%] {\n  transition: .5s ease-in;\n}\n.btn-move[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  color: white;\n  background-color: var(--primary-color);\n}\n/*# sourceMappingURL=items.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Items, [{
    type: Component,
    args: [{ selector: "app-items", imports: [ProductCard], template: '<div class="d-flex flex-column container my-5  ">\r\n    <div class="d-flex justify-content-between align-content-center">\r\n        <h5 class="align-content-center">WishList ({{products.length}})</h5>\r\n        <button class="btn border btn-move p-2 px-lg-4">Move All To Bag</button>\r\n    </div>\r\n\r\n    <!-- //items  -->\r\n    <div class="d-flex gap-4 flex-wrap my-5 justify-content-center align-content-center">\r\n     @for(product of products ; track product){\r\n     <app-product-card [product]="product"></app-product-card>\r\n     }\r\n    </div>\r\n    \r\n</div>', styles: ["/* src/app/features/wishlist/items/items.css */\n.btn-move {\n  transition: .5s ease-in;\n}\n.btn-move:hover {\n  transform: scale(1.06);\n  color: white;\n  background-color: var(--primary-color);\n}\n/*# sourceMappingURL=items.css.map */\n"] }]
  }], null, { products: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Items, { className: "Items", filePath: "app/features/wishlist/items/items.ts", lineNumber: 10 });
})();

// src/app/features/wishlist/just-for-you/just-for-you.ts
var _c04 = () => [];
function JustForYou_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-product-card", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var JustForYou = class _JustForYou {
  product = {
    name: "Cake",
    price: 20,
    oldPrice: 30,
    rating: 4,
    image: "assets/images/banner4.jpg"
  };
  static \u0275fac = function JustForYou_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JustForYou)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JustForYou, selectors: [["app-just-for-you"]], decls: 10, vars: 2, consts: [[1, "d-flex", "justify-content-between", "mb-5", "align-content-center", "container"], [1, "d-flex"], [1, "before-div", "rounded-2", 2, "width", "17px", "height", "40px"], [1, "title-div", "p-2"], [1, "view-all-btn", "btn"], [1, "d-flex", "gap-4", "flex-wrap", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "my-5"], [3, "product"]], template: function JustForYou_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "p", 3);
      \u0275\u0275text(4, "Just For You");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275text(6, "See All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275template(8, JustForYou_div_8_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "hr", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c04).constructor(4));
    }
  }, dependencies: [ProductCard, CommonModule, NgForOf], styles: ["\n\n.view-all-btn[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 40px;\n  background-color: var(--primary-color);\n  color: white;\n  transition: .5s ease;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  border: 1px solid gray;\n  background-color: white;\n  color: black;\n}\n.before-div[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.title-div[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=just-for-you.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JustForYou, [{
    type: Component,
    args: [{ selector: "app-just-for-you", imports: [ProductCard, CommonModule], template: '<div class="d-flex justify-content-between mb-5 align-content-center container">\r\n    <div class="d-flex ">\r\n        <div style="width: 17px; height: 40px;" class="before-div rounded-2"></div>\r\n        <p class="title-div p-2 ">Just For You</p>\r\n    </div>\r\n    <button class="view-all-btn btn">See All</button>\r\n</div>\r\n\r\n\r\n<div class="d-flex gap-4 flex-wrap justify-content-center">\r\n    <div *ngFor="let _ of [].constructor(4)">\r\n        <app-product-card [product]="product"></app-product-card>\r\n    </div>\r\n</div>\r\n\r\n<!-- //view all products -->\r\n\r\n\r\n<hr class="my-5">', styles: ["/* src/app/features/wishlist/just-for-you/just-for-you.css */\n.view-all-btn {\n  width: 140px;\n  height: 40px;\n  background-color: var(--primary-color);\n  color: white;\n  transition: .5s ease;\n}\n.view-all-btn:hover {\n  border: 1px solid gray;\n  background-color: white;\n  color: black;\n}\n.before-div {\n  background-color: var(--primary-color);\n}\n.title-div {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=just-for-you.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JustForYou, { className: "JustForYou", filePath: "app/features/wishlist/just-for-you/just-for-you.ts", lineNumber: 11 });
})();

// src/app/services/wishlist/wishlist.service.ts
var WishlistService = class _WishlistService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;
  getWishlist() {
    return this.http.get(`${this.baseUrl}Wishlist`);
  }
  addToWishlist(productId) {
    return this.http.post(`${this.baseUrl}Wishlist`, { productId });
  }
  removeFromWishlist(productId) {
    return this.http.delete(`${this.baseUrl}Wishlist/${productId}`);
  }
  static \u0275fac = function WishlistService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/wishlist/wishlist/wishlist.ts
var Wishlist = class _Wishlist {
  wishlistService = inject(WishlistService);
  products = [];
  loading = false;
  error = "";
  ngOnInit() {
    this.loadWishlist();
  }
  loadWishlist() {
    this.loading = true;
    this.error = "";
    this.wishlistService.getWishlist().subscribe({
      next: (items) => {
        this.products = items.map((item) => ({
          id: item.productId,
          name: item.name,
          price: item.price,
          oldPrice: void 0,
          rating: item.rating ?? 0,
          image: item.imageUrl ?? "assets/images/products/placeholder.png",
          sale: void 0
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load wishlist:", err);
        this.error = "Failed to load wishlist";
        this.loading = false;
        this.products = [];
      }
    });
  }
  removeFromWishlist(productId) {
    this.wishlistService.removeFromWishlist(productId).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== productId);
      },
      error: (err) => console.error("Failed to remove from wishlist:", err)
    });
  }
  static \u0275fac = function Wishlist_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Wishlist)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Wishlist, selectors: [["app-wishlist"]], decls: 2, vars: 1, consts: [[3, "products"]], template: function Wishlist_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-items", 0)(1, "app-just-for-you");
    }
    if (rf & 2) {
      \u0275\u0275property("products", ctx.products);
    }
  }, dependencies: [Items, JustForYou, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Wishlist, [{
    type: Component,
    args: [{ selector: "app-wishlist", imports: [Items, JustForYou, CommonModule], template: '<app-items [products] ="products"></app-items>\r\n<app-just-for-you></app-just-for-you>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Wishlist, { className: "Wishlist", filePath: "app/features/wishlist/wishlist/wishlist.ts", lineNumber: 13 });
})();

// src/app/services/cart/cart.ts
var CartService = class _CartService {
  STORAGE_KEY = "cart_items";
  DELIVERY_FEE = 15;
  COUPON_CODES = {
    "SAVE20": 20,
    "SAVE10": 10,
    "WELCOME": 15
  };
  appliedDiscount = 0;
  // State
  _items = signal([], ...ngDevMode ? [{ debugName: "_items" }] : []);
  _summary = signal({
    subtotal: 0,
    discount: 0,
    deliveryFee: 0,
    total: 0,
    itemCount: 0
  }, ...ngDevMode ? [{ debugName: "_summary" }] : []);
  _loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : []);
  // Readonly
  items = this._items.asReadonly();
  summary = this._summary.asReadonly();
  loading = this._loading.asReadonly();
  constructor() {
    this.loadFromStorage();
  }
  loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const items = JSON.parse(stored);
        this._items.set(items);
        this.recalculateSummary();
      }
    } catch {
      console.warn("Failed to load cart from localStorage");
    }
  }
  saveToStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._items()));
    } catch {
      console.warn("Failed to save cart to localStorage");
    }
  }
  recalculateSummary() {
    const items = this._items();
    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const discount = subtotal * (this.appliedDiscount / 100);
    const deliveryFee = items.length > 0 ? this.DELIVERY_FEE : 0;
    const total = subtotal - discount + deliveryFee;
    this._summary.set({
      subtotal: Math.round(subtotal * 100) / 100,
      discount: Math.round(discount * 100) / 100,
      deliveryFee,
      total: Math.round(total * 100) / 100,
      itemCount: items.reduce((count, item) => count + item.quantity, 0)
    });
  }
  addToCart(product, quantity = 1) {
    return __async(this, null, function* () {
      this._loading.set(true);
      try {
        const items = [...this._items()];
        const existing = items.find((i) => i.productId === product.id);
        if (existing) {
          existing.quantity += quantity;
          existing.total = existing.price * existing.quantity;
        } else {
          items.push({
            productId: product.id,
            productName: product.name,
            description: product.description,
            price: product.price,
            image: product.image ?? product.images?.[0] ?? "",
            quantity,
            total: product.price * quantity
          });
        }
        this._items.set(items);
        this.recalculateSummary();
        this.saveToStorage();
      } finally {
        this._loading.set(false);
      }
    });
  }
  updateQuantity(productId, quantity) {
    return __async(this, null, function* () {
      if (quantity <= 0) {
        yield this.removeFromCart(productId);
        return;
      }
      this._loading.set(true);
      try {
        const items = this._items().map((item) => item.productId === productId ? __spreadProps(__spreadValues({}, item), { quantity, total: item.price * quantity }) : item);
        this._items.set(items);
        this.recalculateSummary();
        this.saveToStorage();
      } finally {
        this._loading.set(false);
      }
    });
  }
  removeFromCart(productId) {
    return __async(this, null, function* () {
      this._loading.set(true);
      try {
        const items = this._items().filter((item) => item.productId !== productId);
        this._items.set(items);
        this.recalculateSummary();
        this.saveToStorage();
      } finally {
        this._loading.set(false);
      }
    });
  }
  applyCoupon(code) {
    return __async(this, null, function* () {
      const discount = this.COUPON_CODES[code.toUpperCase()];
      if (discount) {
        this.appliedDiscount = discount;
        this.recalculateSummary();
        return true;
      }
      return false;
    });
  }
  clearCart() {
    return __async(this, null, function* () {
      this._loading.set(true);
      try {
        this._items.set([]);
        this.appliedDiscount = 0;
        this._summary.set({
          subtotal: 0,
          discount: 0,
          deliveryFee: 0,
          total: 0,
          itemCount: 0
        });
        this.saveToStorage();
      } finally {
        this._loading.set(false);
      }
    });
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/checkout/checkout.ts
var _forTrack0 = ($index, $item) => $item.productId;
function Checkout_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 47);
    \u0275\u0275element(2, "img", 48);
    \u0275\u0275elementStart(3, "h6", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h6", 50);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, product_r1.total, "USD"));
  }
}
function Checkout_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.orderError);
  }
}
var Checkout = class _Checkout {
  cartService = inject(CartService);
  orderService = inject(OrderService);
  router = inject(Router);
  billingData = {
    name: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: false,
    paymentMethod: "cash",
    couponCode: ""
  };
  isSubmitting = false;
  orderError = "";
  get products() {
    return this.cartService.items();
  }
  get subTotal() {
    return this.cartService.summary().subtotal;
  }
  get shipping() {
    return this.cartService.summary().deliveryFee;
  }
  get total() {
    return this.cartService.summary().total;
  }
  placeOrder() {
    if (this.isSubmitting)
      return;
    this.isSubmitting = true;
    this.orderError = "";
    const orderData = {
      customerName: this.billingData.name,
      customerPhone: this.billingData.phoneNumber,
      customerAddress: `${this.billingData.streetAddress}, ${this.billingData.apartment}, ${this.billingData.townCity}`,
      affiliateCommissionPct: 0
    };
    this.orderService.createOrder(orderData).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.cartService.clearCart();
        console.log("Order placed:", res);
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.orderError = "Failed to place order. Please try again.";
        console.error("Order failed:", err);
      }
    });
  }
  static \u0275fac = function Checkout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Checkout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Checkout, selectors: [["app-checkout"]], decls: 89, vars: 22, consts: [[1, "container", "checkout-page"], [1, "links"], [1, "d-flex", "gap-2", "flex-wrap"], ["routerLink", "/", 1, "homeLink"], ["routerLink", "/account", 1, "cartLink"], ["routerLink", "/cart", 1, "cartLink"], [1, "m-0"], [1, "my-5"], [1, "checkout-content"], [1, "billing-section"], [1, "col-12"], [1, "d-flex", "flex-column", "input-bill"], ["for", "name"], ["type", "text", "id", "name", "name", "name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "company"], ["type", "text", "id", "company", "name", "companyName", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "address"], ["type", "text", "id", "address", "name", "streetAddress", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "apartment"], ["type", "text", "id", "apartment", "name", "apartment", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "city"], ["type", "text", "id", "city", "name", "townCity", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["type", "text", "id", "phone", "name", "phoneNumber", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "emailAddress", 1, "input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2", "align-items-center", "save-info-row"], ["type", "checkbox", "id", "save-info", "name", "saveInfo", 3, "ngModelChange", "ngModel"], ["for", "save-info", 1, "mb-0"], [1, "order-section"], [1, "d-flex", "justify-content-between", "p-3", "align-items-center", "product-row"], [1, "d-flex", "flex-column", "p-3", "totals-box"], [1, "mt-3", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between"], [1, "payment-box"], [1, "payment-option"], ["type", "radio", "id", "bank", "value", "bank", "name", "paymentMethod", 3, "ngModelChange", "ngModel"], ["for", "bank"], [1, "bi", "bi-bank2"], ["type", "radio", "id", "cash", "value", "cash", "name", "paymentMethod", 3, "ngModelChange", "ngModel"], ["for", "cash"], [1, "bi", "bi-cash-coin"], [1, "coupon-row"], ["type", "text", "placeholder", "Coupon Code", "name", "couponCode", 1, "coupon-input", 3, "ngModelChange", "ngModel"], [1, "btn", "border", "btn-coupon", "p-2"], [1, "text-danger"], [1, "btn", "border", "btn-coupon", "p-2", "my-3", "px-lg-4", "place-order-btn", 3, "click", "disabled"], [1, "d-flex", "gap-2", "align-items-center"], ["alt", "product", 1, "product-img", 3, "src"], [1, "ms-3", "mb-0"], [1, "mb-0"]], template: function Checkout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 4);
      \u0275\u0275text(6, "/ My Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275text(8, "/ Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "/ CheckOut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "h2", 7);
      \u0275\u0275text(12, "Billing Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "form", 10)(16, "div", 11)(17, "label", 12);
      \u0275\u0275text(18, "First Name*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.name, $event) || (ctx.billingData.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "label", 14);
      \u0275\u0275text(22, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.companyName, $event) || (ctx.billingData.companyName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11)(25, "label", 16);
      \u0275\u0275text(26, "Street Address*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.streetAddress, $event) || (ctx.billingData.streetAddress = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 11)(29, "label", 18);
      \u0275\u0275text(30, "Apartment, floor, etc. (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.apartment, $event) || (ctx.billingData.apartment = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 11)(33, "label", 20);
      \u0275\u0275text(34, "Town/City*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.townCity, $event) || (ctx.billingData.townCity = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 11)(37, "label", 22);
      \u0275\u0275text(38, "Phone Number*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.phoneNumber, $event) || (ctx.billingData.phoneNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 11)(41, "label", 24);
      \u0275\u0275text(42, "Email Address*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.emailAddress, $event) || (ctx.billingData.emailAddress = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 26)(45, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.saveInfo, $event) || (ctx.billingData.saveInfo = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "label", 28);
      \u0275\u0275text(47, "Save this information for faster check-out next time");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 29);
      \u0275\u0275repeaterCreate(49, Checkout_For_50_Template, 8, 6, "div", 30, _forTrack0);
      \u0275\u0275elementStart(51, "div", 31)(52, "div", 32)(53, "h6");
      \u0275\u0275text(54, "Subtotal:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h6");
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "hr");
      \u0275\u0275elementStart(59, "div", 33)(60, "h6");
      \u0275\u0275text(61, "Shipping:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h6");
      \u0275\u0275text(63, "Free");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "hr");
      \u0275\u0275elementStart(65, "div", 33)(66, "h4");
      \u0275\u0275text(67, "Total:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h4");
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "currency");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 34)(72, "div", 35)(73, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.paymentMethod, $event) || (ctx.billingData.paymentMethod = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "label", 37);
      \u0275\u0275element(75, "i", 38);
      \u0275\u0275text(76, " Bank ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 35)(78, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_78_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.paymentMethod, $event) || (ctx.billingData.paymentMethod = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "label", 40);
      \u0275\u0275element(80, "i", 41);
      \u0275\u0275text(81, " Cash on delivery ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 42)(83, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function Checkout_Template_input_ngModelChange_83_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.billingData.couponCode, $event) || (ctx.billingData.couponCode = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 44);
      \u0275\u0275text(85, "Apply Coupon");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(86, Checkout_Conditional_86_Template, 2, 1, "p", 45);
      \u0275\u0275elementStart(87, "button", 46);
      \u0275\u0275listener("click", function Checkout_Template_button_click_87_listener() {
        return ctx.placeOrder();
      });
      \u0275\u0275text(88);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.companyName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.streetAddress);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.apartment);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.townCity);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.phoneNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.emailAddress);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.saveInfo);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.products);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 16, ctx.subTotal, "USD"));
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 19, ctx.total, "USD"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.paymentMethod);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.paymentMethod);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.billingData.couponCode);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.orderError ? 86 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Placing Order..." : "Place Order", " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, CurrencyPipe], styles: ["\n\n.checkout-page[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 60px;\n}\n.homeLink[_ngcontent-%COMP%], \n.cartLink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: gray;\n}\n.links[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.checkout-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  flex-wrap: wrap;\n}\n.billing-section[_ngcontent-%COMP%] {\n  flex: 1 1 48%;\n}\n.order-section[_ngcontent-%COMP%] {\n  flex: 1 1 40%;\n}\n.input-bill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 40px;\n  background-color: rgb(236, 236, 236);\n  border: none;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  padding: 10px;\n}\n.input-bill[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: gray;\n  margin-bottom: 8px;\n}\n#save-info[_ngcontent-%COMP%] {\n  width: 20px;\n  accent-color: var(--primary-color);\n}\n.save-info-row[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.product-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.payment-option[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.payment-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.payment-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  width: 100%;\n}\n.payment-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n.payment-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.btn-coupon[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n  height: 50px;\n  align-content: center;\n}\n.coupon-input[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 8px;\n  height: 50px;\n  padding: 10px;\n  flex: 1;\n}\n.coupon-input[_ngcontent-%COMP%]::placeholder {\n  padding: 10px;\n}\n.coupon-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.place-order-btn[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n@media (max-width: 768px) {\n  .billing-section[_ngcontent-%COMP%], \n   .order-section[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .input-bill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=checkout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkout, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, FormsModule, RouterLink, CurrencyPipe], template: `<div class="container checkout-page">\r
    <div class="links">\r
      <div class="d-flex gap-2 flex-wrap">\r
        <a routerLink="/" class="homeLink">Home</a>\r
        <a routerLink="/account" class="cartLink">/ My Account</a>\r
        <a routerLink="/cart" class="cartLink">/ Cart</a>\r
        <p class="m-0">/ CheckOut</p>\r
      </div>\r
    </div>\r
  \r
    <h2 class="my-5">Billing Details</h2>\r
  \r
    <div class="checkout-content">\r
      <!-- Left side -->\r
      <div class="billing-section">\r
        <form class="col-12">\r
          <div class="d-flex flex-column input-bill">\r
            <label for="name">First Name*</label>\r
            <input class="input" type="text" id="name" [(ngModel)]="billingData.name" name="name">\r
          </div>\r
  \r
          <div class="d-flex flex-column input-bill">\r
            <label for="company">Company Name</label>\r
            <input class="input" type="text" id="company" [(ngModel)]="billingData.companyName" name="companyName">\r
          </div>\r
  \r
          <div class="d-flex flex-column input-bill">\r
            <label for="address">Street Address*</label>\r
            <input class="input" type="text" id="address" [(ngModel)]="billingData.streetAddress" name="streetAddress">\r
          </div>\r
  \r
          <div class="d-flex flex-column input-bill">\r
            <label for="apartment">Apartment, floor, etc. (optional)</label>\r
            <input class="input" type="text" id="apartment" [(ngModel)]="billingData.apartment" name="apartment">\r
          </div>\r
  \r
          <div class="d-flex flex-column input-bill">\r
            <label for="city">Town/City*</label>\r
            <input class="input" type="text" id="city" [(ngModel)]="billingData.townCity" name="townCity">\r
          </div>\r
  \r
          <div class="d-flex flex-column input-bill">\r
            <label for="phone">Phone Number*</label>\r
            <input class="input" type="text" id="phone" [(ngModel)]="billingData.phoneNumber" name="phoneNumber">\r
          </div>\r
  \r
          <div class="d-flex flex-column input-bill">\r
            <label for="email">Email Address*</label>\r
            <input class="input" type="email" id="email" [(ngModel)]="billingData.emailAddress" name="emailAddress">\r
          </div>\r
  \r
          <div class="d-flex gap-2 align-items-center save-info-row">\r
            <input type="checkbox" id="save-info" [(ngModel)]="billingData.saveInfo" name="saveInfo">\r
            <label for="save-info" class="mb-0">Save this information for faster check-out next time</label>\r
          </div>\r
        </form>\r
      </div>\r
  \r
      <!-- Right side -->\r
      <div class="order-section">\r
        @for (product of products; track product.productId) {\r
          <div class="d-flex justify-content-between p-3 align-items-center product-row">\r
            <div class="d-flex gap-2 align-items-center">\r
              <img [src]="product.image" alt="product" class="product-img">\r
              <h6 class="ms-3 mb-0">{{ product.productName }}</h6>\r
            </div>\r
            <h6 class="mb-0">{{ product.total | currency:'USD' }}</h6>\r
          </div>\r
        }\r
  \r
        <div class="d-flex flex-column p-3 totals-box">\r
          <div class="mt-3 d-flex justify-content-between">\r
            <h6>Subtotal:</h6>\r
            <h6>{{ subTotal | currency:'USD' }}</h6>\r
          </div>\r
  \r
          <hr>\r
  \r
          <div class="d-flex justify-content-between">\r
            <h6>Shipping:</h6>\r
            <h6>Free</h6>\r
          </div>\r
  \r
          <hr>\r
  \r
          <div class="d-flex justify-content-between">\r
            <h4>Total:</h4>\r
            <h4>{{ total | currency:'USD' }}</h4>\r
          </div>\r
        </div>\r
  \r
        <div class="payment-box">\r
          <div class="payment-option">\r
            <input type="radio" id="bank" value="bank" [(ngModel)]="billingData.paymentMethod" name="paymentMethod" />\r
            <label for="bank">\r
              <i class="bi bi-bank2"></i>\r
              Bank\r
            </label>\r
          </div>\r
  \r
          <div class="payment-option">\r
            <input type="radio" id="cash" value="cash" [(ngModel)]="billingData.paymentMethod" name="paymentMethod" />\r
            <label for="cash">\r
              <i class="bi bi-cash-coin"></i>\r
              Cash on delivery\r
            </label>\r
          </div>\r
        </div>\r
  \r
        <div class="coupon-row">\r
          <input\r
            type="text"\r
            placeholder="Coupon Code"\r
            class="coupon-input"\r
            [(ngModel)]="billingData.couponCode"\r
            name="couponCode"\r
          >\r
          <button class="btn border btn-coupon p-2">Apply Coupon</button>\r
        </div>\r
  \r
        @if (orderError) {\r
          <p class="text-danger">{{ orderError }}</p>\r
        }\r
        <button class="btn border btn-coupon p-2 my-3 px-lg-4 place-order-btn" (click)="placeOrder()" [disabled]="isSubmitting">\r
          {{ isSubmitting ? 'Placing Order...' : 'Place Order' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>`, styles: ["/* src/app/features/checkout/checkout.css */\n.checkout-page {\n  margin-top: 50px;\n  margin-bottom: 60px;\n}\n.homeLink,\n.cartLink {\n  text-decoration: none;\n  color: gray;\n}\n.links {\n  margin-top: 50px;\n}\n.checkout-content {\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  flex-wrap: wrap;\n}\n.billing-section {\n  flex: 1 1 48%;\n}\n.order-section {\n  flex: 1 1 40%;\n}\n.input-bill input {\n  width: 85%;\n  height: 40px;\n  background-color: rgb(236, 236, 236);\n  border: none;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  padding: 10px;\n}\n.input-bill label {\n  color: gray;\n  margin-bottom: 8px;\n}\n#save-info {\n  width: 20px;\n  accent-color: var(--primary-color);\n}\n.save-info-row {\n  margin-top: 5px;\n}\n.product-img {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.payment-option {\n  border: 1px solid #ddd;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.payment-option input {\n  margin-right: 10px;\n}\n.payment-option label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  width: 100%;\n}\n.payment-option:hover {\n  border-color: var(--primary-color);\n}\n.payment-option input:checked + label {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.btn-coupon {\n  background-color: var(--primary-color);\n  color: white;\n  height: 50px;\n  align-content: center;\n}\n.coupon-input {\n  border: 1px solid black;\n  border-radius: 8px;\n  height: 50px;\n  padding: 10px;\n  flex: 1;\n}\n.coupon-input::placeholder {\n  padding: 10px;\n}\n.coupon-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.place-order-btn {\n  min-width: 180px;\n}\n@media (max-width: 768px) {\n  .billing-section,\n  .order-section {\n    flex: 1 1 100%;\n  }\n  .input-bill input {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=checkout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Checkout, { className: "Checkout", filePath: "app/features/checkout/checkout.ts", lineNumber: 15 });
})();

// src/app/components/quantity-selector/quantity-selector.ts
var QuantitySelectorComponent = class _QuantitySelectorComponent {
  quantity = input.required(...ngDevMode ? [{ debugName: "quantity" }] : []);
  quantityChange = output();
  decrease() {
    if (this.quantity() > 1) {
      this.quantityChange.emit(this.quantity() - 1);
    }
  }
  increase() {
    this.quantityChange.emit(this.quantity() + 1);
  }
  static \u0275fac = function QuantitySelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuantitySelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuantitySelectorComponent, selectors: [["app-quantity-selector"]], inputs: { quantity: [1, "quantity"] }, outputs: { quantityChange: "quantityChange" }, decls: 7, vars: 2, consts: [[1, "quantity-selector"], [1, "btn-decrease", 3, "click", "disabled"], [1, "quantity"], [1, "btn-increase", 3, "click"]], template: function QuantitySelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275domListener("click", function QuantitySelectorComponent_Template_button_click_1_listener() {
        return ctx.decrease();
      });
      \u0275\u0275text(2, "\u2212");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "button", 3);
      \u0275\u0275domListener("click", function QuantitySelectorComponent_Template_button_click_5_listener() {
        return ctx.increase();
      });
      \u0275\u0275text(6, "+");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("disabled", ctx.quantity() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.quantity());
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuantitySelectorComponent, [{
    type: Component,
    args: [{ selector: "app-quantity-selector", standalone: true, imports: [CommonModule], template: `
    <div class="quantity-selector">
      <button
        class="btn-decrease"
        (click)="decrease()"
        [disabled]="quantity() <= 1">\u2212</button>
      <span class="quantity">{{ quantity() }}</span>
      <button
        class="btn-increase"
        (click)="increase()">+</button>
    </div>
  ` }]
  }], null, { quantity: [{ type: Input, args: [{ isSignal: true, alias: "quantity", required: true }] }], quantityChange: [{ type: Output, args: ["quantityChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuantitySelectorComponent, { className: "QuantitySelectorComponent", filePath: "app/components/quantity-selector/quantity-selector.ts", lineNumber: 22 });
})();

// src/app/pages/cart/cart.ts
var _forTrack02 = ($index, $item) => $item.productId;
function CartComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 25);
    \u0275\u0275element(2, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "h3", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30)(9, "app-quantity-selector", 31);
    \u0275\u0275listener("quantityChange", function CartComponent_Conditional_10_For_3_Template_app_quantity_selector_quantityChange_9_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateQty(item_r3.productId, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function CartComponent_Conditional_10_For_3_Template_button_click_10_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.remove(item_r3.productId));
    });
    \u0275\u0275element(11, "i", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "span", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r3.image, \u0275\u0275sanitizeUrl)("alt", item_r3.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("quantity", item_r3.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", item_r3.total);
  }
}
function CartComponent_Conditional_10_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, " Coupon applied successfully! ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_10_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, " Invalid coupon code. ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_10_For_3_Template, 15, 6, "div", 9, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 10)(5, "h2");
    \u0275\u0275text(6, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "span");
    \u0275\u0275text(9, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "span");
    \u0275\u0275text(14, "Discount (-20%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "span");
    \u0275\u0275text(19, "Delivery Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "span");
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16)(28, "div", 17);
    \u0275\u0275element(29, "i", 18);
    \u0275\u0275elementStart(30, "input", 19);
    \u0275\u0275listener("input", function CartComponent_Conditional_10_Template_input_input_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCouponInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275listener("click", function CartComponent_Conditional_10_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyCoupon());
    });
    \u0275\u0275text(32, "Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, CartComponent_Conditional_10_Conditional_33_Template, 3, 0, "div", 21);
    \u0275\u0275conditionalCreate(34, CartComponent_Conditional_10_Conditional_34_Template, 3, 0, "div", 22);
    \u0275\u0275elementStart(35, "button", 23);
    \u0275\u0275listener("click", function CartComponent_Conditional_10_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkout());
    });
    \u0275\u0275text(36, " Go to Checkout ");
    \u0275\u0275element(37, "i", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.items());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", ctx_r3.summary().subtotal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("-$", ctx_r3.summary().discount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r3.summary().deliveryFee);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r3.summary().total);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r3.couponCode());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.couponApplied() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.couponError() ? 34 : -1);
  }
}
function CartComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Add some items to your cart to see them here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 39);
    \u0275\u0275text(7, "Continue Shopping");
    \u0275\u0275elementEnd()();
  }
}
var CartComponent = class _CartComponent {
  cartService = inject(CartService);
  couponCode = signal("", ...ngDevMode ? [{ debugName: "couponCode" }] : []);
  couponApplied = signal(false, ...ngDevMode ? [{ debugName: "couponApplied" }] : []);
  couponError = signal(false, ...ngDevMode ? [{ debugName: "couponError" }] : []);
  items = this.cartService.items;
  summary = this.cartService.summary;
  loading = this.cartService.loading;
  onCouponInput(event) {
    this.couponCode.set(event.target.value);
  }
  updateQty(id, qty) {
    return __async(this, null, function* () {
      yield this.cartService.updateQuantity(id, qty);
    });
  }
  remove(id) {
    return __async(this, null, function* () {
      yield this.cartService.removeFromCart(id);
    });
  }
  applyCoupon() {
    return __async(this, null, function* () {
      this.couponError.set(false);
      const success = yield this.cartService.applyCoupon(this.couponCode());
      if (success) {
        this.couponApplied.set(true);
      } else {
        this.couponError.set(true);
      }
    });
  }
  checkout() {
    console.log("Checkout...");
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 12, vars: 1, consts: [[1, "cart-page"], [1, "breadcrumb"], ["href", "/"], [1, "separator"], [1, "current"], [1, "page-title"], [1, "cart-layout"], [1, "empty-cart"], [1, "cart-items"], [1, "cart-item"], [1, "order-summary"], [1, "summary-row"], [1, "summary-row", "discount"], [1, "discount-amount"], [1, "summary-total"], [1, "total-amount"], [1, "coupon-section"], [1, "coupon-input"], [1, "bi", "bi-tag"], ["type", "text", "placeholder", "Add promo code", 3, "input", "value"], [1, "btn-apply", 3, "click"], [1, "coupon-message"], [1, "coupon-message", 2, "color", "#dc3545"], [1, "btn-checkout", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "item-image"], [3, "src", "alt"], [1, "item-details"], [1, "item-name"], [1, "item-description"], [1, "item-actions"], [3, "quantityChange", "quantity"], [1, "btn-remove", 3, "click"], [1, "bi", "bi-trash"], [1, "item-price"], [1, "price"], [1, "bi", "bi-check-circle"], [1, "bi", "bi-x-circle"], [1, "bi", "bi-cart-x"], ["href", "/category", 1, "btn-continue"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "Cart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1", 5);
      \u0275\u0275text(9, "YOUR CART");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, CartComponent_Conditional_10_Template, 38, 7, "div", 6)(11, CartComponent_Conditional_11_Template, 8, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.items().length > 0 ? 10 : 11);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    QuantitySelectorComponent
  ], styles: ["\n\n.cart-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.cart-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 25px;\n  font-size: 14px;\n}\n.cart-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: none;\n}\n.cart-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.cart-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: #999;\n}\n.cart-page[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 500;\n}\n.cart-page[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  margin-bottom: 30px;\n  color: #000;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 40px;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  gap: 20px;\n  padding: 25px;\n  background: #fff;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background: #f5f5f5;\n  border-radius: 15px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 80%;\n  object-fit: contain;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 5px;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 15px;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: none;\n  background: #ff4444;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {\n  background: #cc0000;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.cart-page[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 20px;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 25px;\n  color: #000;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  font-size: 15px;\n  color: #666;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .summary-row.discount[_ngcontent-%COMP%]   .discount-amount[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-weight: 600;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 20px;\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n  font-size: 18px;\n  font-weight: 600;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .summary-total[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #000;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 25px 0;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%]   .coupon-input[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f5f5;\n  padding: 12px 15px;\n  border-radius: 25px;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%]   .coupon-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #999;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%]   .coupon-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%]   .coupon-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%] {\n  padding: 12px 25px;\n  background: #000;\n  color: white;\n  border: none;\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-section[_ngcontent-%COMP%]   .btn-apply[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .coupon-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #28a745;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .btn-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px;\n  background: #000;\n  color: white;\n  border: none;\n  border-radius: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: background 0.3s;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .btn-checkout[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n.cart-page[_ngcontent-%COMP%]   .order-summary[_ngcontent-%COMP%]   .btn-checkout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cart-page[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.cart-page[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #ddd;\n  margin-bottom: 20px;\n}\n.cart-page[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  color: #333;\n}\n.cart-page[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 30px;\n}\n.cart-page[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .btn-continue[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 40px;\n  background: #000;\n  color: white;\n  text-decoration: none;\n  border-radius: 30px;\n  font-weight: 600;\n  transition: background 0.3s;\n}\n.cart-page[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .btn-continue[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n@media (max-width: 968px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .order-summary[_ngcontent-%COMP%] {\n    position: static !important;\n  }\n}\n@media (max-width: 640px) {\n  .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 100px 1fr !important;\n  }\n  .cart-item[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=cart.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [
      CommonModule,
      FormsModule,
      QuantitySelectorComponent
    ], template: '<div class="cart-page">\n  <!-- Breadcrumb -->\n  <nav class="breadcrumb">\n    <a href="/">Home</a>\n    <span class="separator">\u203A</span>\n    <span class="current">Cart</span>\n  </nav>\n\n  <h1 class="page-title">YOUR CART</h1>\n\n  @if (items().length > 0) {\n    <div class="cart-layout">\n      <!-- Cart Items -->\n      <div class="cart-items">\n        @for (item of items(); track item.productId) {\n          <div class="cart-item">\n            <div class="item-image">\n              <img [src]="item.image" [alt]="item.productName" />\n            </div>\n\n            <div class="item-details">\n              <h3 class="item-name">{{ item.productName }}</h3>\n              <p class="item-description">{{ item.description }}</p>\n\n              <div class="item-actions">\n                <app-quantity-selector\n                  [quantity]="item.quantity"\n                  (quantityChange)="updateQty(item.productId, $event)"\n                >\n                </app-quantity-selector>\n\n                <button class="btn-remove" (click)="remove(item.productId)">\n                  <i class="bi bi-trash"></i>\n                </button>\n              </div>\n            </div>\n\n            <div class="item-price">\n              <span class="price">${{ item.total }}</span>\n            </div>\n          </div>\n        }\n      </div>\n\n      <!-- Order Summary -->\n      <aside class="order-summary">\n        <h2>Order Summary</h2>\n\n        <div class="summary-row">\n          <span>Subtotal</span>\n          <span>${{ summary().subtotal }}</span>\n        </div>\n\n        <div class="summary-row discount">\n          <span>Discount (-20%)</span>\n          <span class="discount-amount">-${{ summary().discount }}</span>\n        </div>\n\n        <div class="summary-row">\n          <span>Delivery Fee</span>\n          <span>${{ summary().deliveryFee }}</span>\n        </div>\n\n        <div class="summary-total">\n          <span>Total</span>\n          <span class="total-amount">${{ summary().total }}</span>\n        </div>\n\n        <!-- Coupon -->\n        <div class="coupon-section">\n          <div class="coupon-input">\n            <i class="bi bi-tag"></i>\n            <input type="text" placeholder="Add promo code" [value]="couponCode()" (input)="onCouponInput($event)" />\n          </div>\n          <button class="btn-apply" (click)="applyCoupon()">Apply</button>\n        </div>\n        @if (couponApplied()) {\n          <div class="coupon-message">\n            <i class="bi bi-check-circle"></i> Coupon applied successfully!\n          </div>\n        }\n        @if (couponError()) {\n          <div class="coupon-message" style="color: #dc3545;">\n            <i class="bi bi-x-circle"></i> Invalid coupon code.\n          </div>\n        }\n\n        <!-- Checkout Button -->\n        <button class="btn-checkout" (click)="checkout()">\n          Go to Checkout\n          <i class="bi bi-arrow-right"></i>\n        </button>\n      </aside>\n    </div>\n  } @else {\n    <!-- Empty Cart -->\n    <div class="empty-cart">\n      <i class="bi bi-cart-x"></i>\n      <h2>Your cart is empty</h2>\n      <p>Add some items to your cart to see them here.</p>\n      <a href="/category" class="btn-continue">Continue Shopping</a>\n    </div>\n  }\n</div>\n', styles: ["/* src/app/pages/cart/cart.css */\n.cart-page {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.cart-page .breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 25px;\n  font-size: 14px;\n}\n.cart-page .breadcrumb a {\n  color: #666;\n  text-decoration: none;\n}\n.cart-page .breadcrumb a:hover {\n  color: #000;\n}\n.cart-page .breadcrumb .separator {\n  color: #999;\n}\n.cart-page .breadcrumb .current {\n  color: #000;\n  font-weight: 500;\n}\n.cart-page .page-title {\n  font-size: 36px;\n  font-weight: 800;\n  margin-bottom: 30px;\n  color: #000;\n}\n.cart-page .cart-layout {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 40px;\n}\n.cart-page .cart-items .cart-item {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  gap: 20px;\n  padding: 25px;\n  background: #fff;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.cart-page .cart-items .cart-item .item-image {\n  width: 120px;\n  height: 120px;\n  background: #f5f5f5;\n  border-radius: 15px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cart-page .cart-items .cart-item .item-image img {\n  max-width: 80%;\n  max-height: 80%;\n  object-fit: contain;\n}\n.cart-page .cart-items .cart-item .item-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.cart-page .cart-items .cart-item .item-details .item-name {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000;\n  margin-bottom: 5px;\n}\n.cart-page .cart-items .cart-item .item-details .item-description {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 15px;\n}\n.cart-page .cart-items .cart-item .item-details .item-actions {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.cart-page .cart-items .cart-item .item-details .item-actions .btn-remove {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: none;\n  background: #ff4444;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s;\n}\n.cart-page .cart-items .cart-item .item-details .item-actions .btn-remove:hover {\n  background: #cc0000;\n}\n.cart-page .cart-items .cart-item .item-price {\n  display: flex;\n  align-items: flex-start;\n}\n.cart-page .cart-items .cart-item .item-price .price {\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n}\n.cart-page .order-summary {\n  background: #fff;\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 20px;\n}\n.cart-page .order-summary h2 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 25px;\n  color: #000;\n}\n.cart-page .order-summary .summary-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  font-size: 15px;\n  color: #666;\n}\n.cart-page .order-summary .summary-row.discount .discount-amount {\n  color: #ff4444;\n  font-weight: 600;\n}\n.cart-page .order-summary .summary-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 20px;\n  margin-top: 20px;\n  border-top: 1px solid #eee;\n  font-size: 18px;\n  font-weight: 600;\n}\n.cart-page .order-summary .summary-total .total-amount {\n  font-size: 24px;\n  font-weight: 800;\n  color: #000;\n}\n.cart-page .order-summary .coupon-section {\n  display: flex;\n  gap: 10px;\n  margin: 25px 0;\n}\n.cart-page .order-summary .coupon-section .coupon-input {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f5f5;\n  padding: 12px 15px;\n  border-radius: 25px;\n}\n.cart-page .order-summary .coupon-section .coupon-input i {\n  color: #999;\n}\n.cart-page .order-summary .coupon-section .coupon-input input {\n  border: none;\n  background: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n}\n.cart-page .order-summary .coupon-section .coupon-input input::placeholder {\n  color: #999;\n}\n.cart-page .order-summary .coupon-section .btn-apply {\n  padding: 12px 25px;\n  background: #000;\n  color: white;\n  border: none;\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.cart-page .order-summary .coupon-section .btn-apply:hover {\n  background: #333;\n}\n.cart-page .order-summary .coupon-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #28a745;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.cart-page .order-summary .btn-checkout {\n  width: 100%;\n  padding: 18px;\n  background: #000;\n  color: white;\n  border: none;\n  border-radius: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: background 0.3s;\n}\n.cart-page .order-summary .btn-checkout:hover {\n  background: #333;\n}\n.cart-page .order-summary .btn-checkout i {\n  font-size: 18px;\n}\n.cart-page .empty-cart {\n  text-align: center;\n  padding: 80px 20px;\n}\n.cart-page .empty-cart i {\n  font-size: 80px;\n  color: #ddd;\n  margin-bottom: 20px;\n}\n.cart-page .empty-cart h2 {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  color: #333;\n}\n.cart-page .empty-cart p {\n  color: #666;\n  margin-bottom: 30px;\n}\n.cart-page .empty-cart .btn-continue {\n  display: inline-block;\n  padding: 15px 40px;\n  background: #000;\n  color: white;\n  text-decoration: none;\n  border-radius: 30px;\n  font-weight: 600;\n  transition: background 0.3s;\n}\n.cart-page .empty-cart .btn-continue:hover {\n  background: #333;\n}\n@media (max-width: 968px) {\n  .cart-layout {\n    grid-template-columns: 1fr !important;\n  }\n  .order-summary {\n    position: static !important;\n  }\n}\n@media (max-width: 640px) {\n  .cart-item {\n    grid-template-columns: 100px 1fr !important;\n  }\n  .cart-item .item-price {\n    grid-column: 2;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=cart.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "app/pages/cart/cart.ts", lineNumber: 18 });
})();

// src/app/components/product-card/product-card.ts
var _c05 = () => [1, 2, 3, 4, 5];
function ProductCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r0.product().discount, "%");
  }
}
function ProductCardComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 14);
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bi-star-fill", star_r2 <= ctx_r0.product().rating)("bi-star-half", star_r2 > ctx_r0.product().rating && star_r2 - 0.5 <= ctx_r0.product().rating)("bi-star", star_r2 > ctx_r0.product().rating + 0.5);
  }
}
function ProductCardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r0.product().originalPrice);
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product = input.required(...ngDevMode ? [{ debugName: "product" }] : []);
  addToCart = output();
  onAddToCart() {
    this.addToCart.emit(this.product());
  }
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: [1, "product"] }, outputs: { addToCart: "addToCart" }, decls: 19, vars: 9, consts: [[1, "product-card", 3, "click"], [1, "product-image"], ["loading", "lazy", 3, "src", "alt"], [1, "discount-badge"], [1, "product-info"], [1, "product-name"], [1, "rating"], [1, "stars"], [1, "bi", 3, "bi-star-fill", "bi-star-half", "bi-star"], [1, "reviews"], [1, "reviews-count"], [1, "price"], [1, "current-price"], [1, "original-price"], [1, "bi"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function ProductCardComponent_Template_div_click_0_listener() {
        return ctx.onAddToCart();
      });
      \u0275\u0275domElementStart(1, "div", 1);
      \u0275\u0275domElement(2, "img", 2);
      \u0275\u0275conditionalCreate(3, ProductCardComponent_Conditional_3_Template, 2, 1, "div", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "h3", 5);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "div", 6)(8, "span", 7);
      \u0275\u0275repeaterCreate(9, ProductCardComponent_For_10_Template, 1, 6, "i", 8, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 9);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 11)(16, "span", 12);
      \u0275\u0275text(17);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(18, ProductCardComponent_Conditional_18_Template, 2, 1, "span", 13);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("src", ctx.product().image, \u0275\u0275sanitizeUrl)("alt", ctx.product().name);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().discount ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.product().name);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c05));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.product().rating, "/5");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.product().reviewsCount, ")");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", ctx.product().price);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().originalPrice ? 18 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", standalone: true, imports: [CommonModule], template: '<div class="product-card" (click)="onAddToCart()">\r\n  <div class="product-image">\r\n    <img [src]="product().image" [alt]="product().name" loading="lazy" />\r\n    @if (product().discount) {\r\n    <div class="discount-badge">-{{ product().discount }}%</div>\r\n    }\r\n  </div>\r\n\r\n  <div class="product-info">\r\n    <h3 class="product-name">{{ product().name }}</h3>\r\n\r\n    <div class="rating">\r\n      <span class="stars">\r\n        @for (star of [1,2,3,4,5]; track star) {\r\n        <i\r\n          class="bi"\r\n          [class.bi-star-fill]="star <= product().rating"\r\n          [class.bi-star-half]="star > product().rating && star - 0.5 <= product().rating"\r\n          [class.bi-star]="star > product().rating + 0.5"\r\n        >\r\n        </i>\r\n        }\r\n      </span>\r\n      <span class="reviews">{{ product().rating }}/5</span>\r\n      <span class="reviews-count">({{ product().reviewsCount }})</span>\r\n    </div>\r\n\r\n    <div class="price">\r\n      <span class="current-price">${{ product().price }}</span>\r\n      @if (product().originalPrice) {\r\n      <span class="original-price">${{ product().originalPrice }}</span>\r\n      }\r\n    </div>\r\n  </div>\r\n</div>\r\n' }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }], addToCart: [{ type: Output, args: ["addToCart"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "app/components/product-card/product-card.ts", lineNumber: 12 });
})();

// src/app/components/price-filter/price-filter.ts
var PriceFilterComponent = class _PriceFilterComponent {
  min = input(0, ...ngDevMode ? [{ debugName: "min" }] : []);
  max = input(500, ...ngDevMode ? [{ debugName: "max" }] : []);
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  valueChange = output();
  /** Left offset % of the colored fill bar */
  fillLeft = computed(() => {
    const range = this.max() - this.min();
    return range > 0 ? (this.value().min - this.min()) / range * 100 : 0;
  }, ...ngDevMode ? [{ debugName: "fillLeft" }] : []);
  /** Width % of the colored fill bar */
  fillWidth = computed(() => {
    const range = this.max() - this.min();
    return range > 0 ? (this.value().max - this.value().min) / range * 100 : 100;
  }, ...ngDevMode ? [{ debugName: "fillWidth" }] : []);
  updateMin(event) {
    const val = +event.target.value;
    const clamped = Math.min(val, this.value().max - 1);
    this.valueChange.emit(__spreadProps(__spreadValues({}, this.value()), { min: clamped }));
  }
  updateMax(event) {
    const val = +event.target.value;
    const clamped = Math.max(val, this.value().min + 1);
    this.valueChange.emit(__spreadProps(__spreadValues({}, this.value()), { max: clamped }));
  }
  static \u0275fac = function PriceFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PriceFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PriceFilterComponent, selectors: [["app-price-filter"]], inputs: { min: [1, "min"], max: [1, "max"], value: [1, "value"] }, outputs: { valueChange: "valueChange" }, decls: 10, vars: 12, consts: [[1, "price-filter"], [1, "range-track-wrap"], [1, "range-fill"], ["type", "range", 1, "range-input", "range-min", 3, "input", "min", "max", "value"], ["type", "range", 1, "range-input", "range-max", 3, "input", "min", "max", "value"], [1, "price-labels"]], template: function PriceFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2);
      \u0275\u0275domElementStart(3, "input", 3);
      \u0275\u0275domListener("input", function PriceFilterComponent_Template_input_input_3_listener($event) {
        return ctx.updateMin($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "input", 4);
      \u0275\u0275domListener("input", function PriceFilterComponent_Template_input_input_4_listener($event) {
        return ctx.updateMax($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 5)(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("left", ctx.fillLeft(), "%")("width", ctx.fillWidth(), "%");
      \u0275\u0275advance();
      \u0275\u0275domProperty("min", ctx.min())("max", ctx.max())("value", ctx.value().min);
      \u0275\u0275advance();
      \u0275\u0275domProperty("min", ctx.min())("max", ctx.max())("value", ctx.value().max);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", ctx.value().min);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("$", ctx.value().max);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ['\n\n.price-filter[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.range-track-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.range-track-wrap[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background: #F0F0F0;\n  border-radius: 10px;\n  z-index: 0;\n}\n.range-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5px;\n  background: #000;\n  border-radius: 10px;\n  z-index: 1;\n  pointer-events: none;\n}\n.range-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background: transparent;\n  border-radius: 10px;\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  pointer-events: none;\n  z-index: 2;\n}\n.range-input[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  background: #000;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px #000;\n  cursor: pointer;\n  pointer-events: all;\n  transition: transform .15s;\n}\n[_ngcontent-%COMP%]:is():hover {\n  transform: scale(1.15);\n}\n[_ngcontent-%COMP%]:is():active {\n  transform: scale(1.1);\n}\n.range-input[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 22px;\n  height: 22px;\n  background: #000;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px #000;\n  cursor: pointer;\n  pointer-events: all;\n  transition: transform .15s;\n}\n.range-input[_ngcontent-%COMP%]::-moz-range-track {\n  background: transparent;\n  height: 5px;\n}\n.price-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n/*# sourceMappingURL=price-filter.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PriceFilterComponent, [{
    type: Component,
    args: [{ selector: "app-price-filter", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="price-filter">\r\n  <!-- Dual range track -->\r\n  <div class="range-track-wrap">\r\n    <div class="range-fill" [style.left.%]="fillLeft()" [style.width.%]="fillWidth()"></div>\r\n\r\n    <input\r\n      type="range"\r\n      class="range-input range-min"\r\n      [min]="min()"\r\n      [max]="max()"\r\n      [value]="value().min"\r\n      (input)="updateMin($event)"\r\n    />\r\n    <input\r\n      type="range"\r\n      class="range-input range-max"\r\n      [min]="min()"\r\n      [max]="max()"\r\n      [value]="value().max"\r\n      (input)="updateMax($event)"\r\n    />\r\n  </div>\r\n\r\n  <!-- Labels -->\r\n  <div class="price-labels">\r\n    <span>${{ value().min }}</span>\r\n    <span>${{ value().max }}</span>\r\n  </div>\r\n</div>\r\n\r\n', styles: ['/* src/app/components/price-filter/price-filter.css */\n.price-filter {\n  padding: 0;\n}\n.range-track-wrap {\n  position: relative;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.range-track-wrap::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background: #F0F0F0;\n  border-radius: 10px;\n  z-index: 0;\n}\n.range-fill {\n  position: absolute;\n  height: 5px;\n  background: #000;\n  border-radius: 10px;\n  z-index: 1;\n  pointer-events: none;\n}\n.range-input {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background: transparent;\n  border-radius: 10px;\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  pointer-events: none;\n  z-index: 2;\n}\n.range-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  background: #000;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px #000;\n  cursor: pointer;\n  pointer-events: all;\n  transition: transform .15s;\n}\n:is():hover {\n  transform: scale(1.15);\n}\n:is():active {\n  transform: scale(1.1);\n}\n.range-input::-moz-range-thumb {\n  width: 22px;\n  height: 22px;\n  background: #000;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px #000;\n  cursor: pointer;\n  pointer-events: all;\n  transition: transform .15s;\n}\n.range-input::-moz-range-track {\n  background: transparent;\n  height: 5px;\n}\n.price-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n/*# sourceMappingURL=price-filter.css.map */\n'] }]
  }], null, { min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], valueChange: [{ type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PriceFilterComponent, { className: "PriceFilterComponent", filePath: "app/components/price-filter/price-filter.ts", lineNumber: 12 });
})();

// src/app/pages/category/category.ts
var _c06 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
var _forTrack03 = ($index, $item) => $item.id;
function CategoryComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "label", 44);
    \u0275\u0275listener("click", function CategoryComponent_Conditional_24_For_2_Template_label_click_1_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCategory(cat_r2.slug));
    });
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 46);
    \u0275\u0275element(5, "polyline", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.selectedCategories().includes(cat_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.name);
  }
}
function CategoryComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275repeaterCreate(1, CategoryComponent_Conditional_24_For_2_Template, 6, 3, "li", null, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories());
  }
}
function CategoryComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "app-price-filter", 48);
    \u0275\u0275listener("valueChange", function CategoryComponent_Conditional_32_Template_app_price_filter_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatePriceRange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("min", 0)("max", 500)("value", ctx_r2.priceRange());
  }
}
function CategoryComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function CategoryComponent_Conditional_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sidebarOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_Conditional_64_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51)(2, "div", 52)(3, "div", 53);
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275repeaterCreate(1, CategoryComponent_Conditional_64_For_2_Template, 4, 0, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c06));
  }
}
function CategoryComponent_Conditional_65_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 56);
    \u0275\u0275listener("addToCart", function CategoryComponent_Conditional_65_For_2_Template_app_product_card_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    \u0275\u0275property("product", product_r8);
  }
}
function CategoryComponent_Conditional_65_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "circle", 58)(3, "line", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function CategoryComponent_Conditional_65_ForEmpty_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(7, "Reset Filters");
    \u0275\u0275elementEnd()();
  }
}
function CategoryComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, CategoryComponent_Conditional_65_For_2_Template, 1, 1, "app-product-card", 54, _forTrack03, false, CategoryComponent_Conditional_65_ForEmpty_3_Template, 8, 0, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products());
  }
}
function CategoryComponent_Conditional_66_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_Conditional_66_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function CategoryComponent_Conditional_66_For_7_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const page_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r2.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r11, " ");
  }
}
function CategoryComponent_Conditional_66_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CategoryComponent_Conditional_66_For_7_Conditional_0_Template, 2, 0, "span", 64)(1, CategoryComponent_Conditional_66_For_7_Conditional_1_Template, 2, 3, "button", 65);
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    \u0275\u0275conditional(page_r11 === -1 ? 0 : 1);
  }
}
function CategoryComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 61);
    \u0275\u0275listener("click", function CategoryComponent_Conditional_66_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "polyline", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275repeaterCreate(6, CategoryComponent_Conditional_66_For_7_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 61);
    \u0275\u0275listener("click", function CategoryComponent_Conditional_66_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(9, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 11);
    \u0275\u0275element(11, "polyline", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.visiblePages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
var CategoryComponent = class _CategoryComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
  // UI state
  sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
  openSections = signal(["categories", "price"], ...ngDevMode ? [{ debugName: "openSections" }] : []);
  // Filters
  selectedCategories = signal([], ...ngDevMode ? [{ debugName: "selectedCategories" }] : []);
  priceRange = signal({ min: 0, max: 500 }, ...ngDevMode ? [{ debugName: "priceRange" }] : []);
  sortBy = signal("popular", ...ngDevMode ? [{ debugName: "sortBy" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 9;
  // Data
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++)
        pages.push(i);
    } else {
      pages.push(1);
      if (current > 3)
        pages.push(-1);
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++)
        pages.push(i);
      if (current < total - 2)
        pages.push(-1);
      pages.push(total);
    }
    return pages;
  }, ...ngDevMode ? [{ debugName: "visiblePages" }] : []);
  rangeStart = computed(() => (this.currentPage() - 1) * this.pageSize + 1, ...ngDevMode ? [{ debugName: "rangeStart" }] : []);
  rangeEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.totalCount()), ...ngDevMode ? [{ debugName: "rangeEnd" }] : []);
  constructor() {
    this.productService.getCategories().subscribe((cats) => this.categories.set(cats));
    effect(() => this.loadProducts(), { allowSignalWrites: true });
  }
  loadProducts() {
    const filters = {
      categories: this.selectedCategories(),
      minPrice: this.priceRange().min,
      maxPrice: this.priceRange().max,
      sortBy: this.sortBy()
    };
    this.loading.set(true);
    this.productService.getProducts(filters).subscribe({
      next: (res) => {
        this.totalCount.set(res.length);
        this.totalPages.set(Math.max(1, Math.ceil(res.length / this.pageSize)));
        const start = (this.currentPage() - 1) * this.pageSize;
        this.products.set(res.slice(start, start + this.pageSize));
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Failed to load products:", err);
        this.loading.set(false);
      }
    });
  }
  toggleSection(key) {
    this.openSections.update((s) => s.includes(key) ? s.filter((k) => k !== key) : [...s, key]);
  }
  toggleCategory(slug) {
    this.selectedCategories.update((cats) => cats.includes(slug) ? cats.filter((c) => c !== slug) : [...cats, slug]);
    this.currentPage.set(1);
  }
  updatePriceRange(range) {
    this.priceRange.set(range);
  }
  onSortChange(e) {
    this.sortBy.set(e.target.value);
    this.currentPage.set(1);
  }
  applyFilters() {
    this.currentPage.set(1);
    this.sidebarOpen.set(false);
    this.loadProducts();
  }
  resetFilters() {
    this.selectedCategories.set([]);
    this.priceRange.set({ min: 0, max: 500 });
    this.currentPage.set(1);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  addToCart(product) {
    return __async(this, null, function* () {
      try {
        yield this.cartService.addToCart(product);
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    });
  }
  static \u0275fac = function CategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], decls: 67, vars: 15, consts: [[1, "category-page"], ["aria-label", "Breadcrumb", 1, "breadcrumb"], ["routerLink", "/"], [1, "sep"], [1, "current"], [1, "layout"], [1, "sidebar"], [1, "sidebar-inner"], [1, "sidebar-header"], [1, "sidebar-title"], ["aria-label", "Close filters", 1, "icon-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "filter-block"], [1, "filter-block__head", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "chevron"], ["points", "6 9 12 15 18 9"], [1, "filter-block__body", "category-list"], [1, "divider"], [1, "filter-block__body"], [1, "btn-apply", 3, "click"], [1, "sidebar-backdrop"], [1, "main"], [1, "main-header"], [1, "main-header__left"], [1, "page-title"], [1, "results-count"], [1, "main-header__right"], [1, "sort-label"], [1, "sort-select-wrap"], [1, "sort-select", 3, "change", "value"], ["value", "popular"], ["value", "newest"], ["value", "price-low"], ["value", "price-high"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "select-chevron"], [1, "filter-toggle-btn", 3, "click"], ["x1", "4", "y1", "6", "x2", "20", "y2", "6"], ["x1", "4", "y1", "12", "x2", "20", "y2", "12"], ["x1", "4", "y1", "18", "x2", "20", "y2", "18"], [1, "loading-grid"], [1, "products-grid"], [1, "pagination"], [1, "cat-item", 3, "click"], [1, "cat-name"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "cat-arrow"], ["points", "9 18 15 12 9 6"], [3, "valueChange", "min", "max", "value"], [1, "sidebar-backdrop", 3, "click"], [1, "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-line", 2, "width", "70%"], [1, "skeleton-line", 2, "width", "40%"], [3, "product"], [1, "empty-state"], [3, "addToCart", "product"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#ccc", "stroke-width", "1.5"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "btn-reset", 3, "click"], [1, "pg-btn", "pg-nav", 3, "click", "disabled"], ["points", "15 18 9 12 15 6"], [1, "pg-numbers"], [1, "pg-ellipsis"], [1, "pg-btn", 3, "active"], [1, "pg-btn", 3, "click"]], template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "Casual");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "aside", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function CategoryComponent_Template_button_click_14_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 11);
      \u0275\u0275element(16, "line", 12)(17, "line", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
      \u0275\u0275listener("click", function CategoryComponent_Template_button_click_19_listener() {
        return ctx.toggleSection("categories");
      });
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 16);
      \u0275\u0275element(23, "polyline", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(24, CategoryComponent_Conditional_24_Template, 3, 0, "ul", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(25, "div", 19);
      \u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
      \u0275\u0275listener("click", function CategoryComponent_Template_button_click_27_listener() {
        return ctx.toggleSection("price");
      });
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 16);
      \u0275\u0275element(31, "polyline", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(32, CategoryComponent_Conditional_32_Template, 2, 3, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "button", 21);
      \u0275\u0275listener("click", function CategoryComponent_Template_button_click_33_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275text(34, "Apply Filter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(35, CategoryComponent_Conditional_35_Template, 1, 0, "div", 22);
      \u0275\u0275elementStart(36, "main", 23)(37, "div", 24)(38, "div", 25)(39, "h1", 26);
      \u0275\u0275text(40, "Casual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 27);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 28)(44, "span", 29);
      \u0275\u0275text(45, "Sort by:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 30)(47, "select", 31);
      \u0275\u0275listener("change", function CategoryComponent_Template_select_change_47_listener($event) {
        return ctx.onSortChange($event);
      });
      \u0275\u0275elementStart(48, "option", 32);
      \u0275\u0275text(49, "Most Popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 33);
      \u0275\u0275text(51, "Newest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 34);
      \u0275\u0275text(53, "Price: Low to High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 35);
      \u0275\u0275text(55, "Price: High to Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 36);
      \u0275\u0275element(57, "polyline", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "button", 37);
      \u0275\u0275listener("click", function CategoryComponent_Template_button_click_58_listener() {
        return ctx.sidebarOpen.set(true);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 11);
      \u0275\u0275element(60, "line", 38)(61, "line", 39)(62, "line", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " Filters ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(64, CategoryComponent_Conditional_64_Template, 3, 1, "div", 41)(65, CategoryComponent_Conditional_65_Template, 4, 1, "div", 42);
      \u0275\u0275conditionalCreate(66, CategoryComponent_Conditional_66_Template, 12, 2, "div", 43);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(13);
      \u0275\u0275classProp("rotated", ctx.openSections().includes("categories"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.openSections().includes("categories") ? 24 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("rotated", ctx.openSections().includes("price"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.openSections().includes("price") ? 32 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.sidebarOpen() ? 35 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate3(" Showing ", ctx.rangeStart(), "\u2013", ctx.rangeEnd(), " of ", ctx.totalCount(), " Products ");
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.sortBy());
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.loading() ? 64 : 65);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.totalPages() > 1 ? 66 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    RouterLink,
    ProductCardComponent,
    PriceFilterComponent
  ], styles: ['\n\n.category-page[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 20px 40px 60px;\n  font-family:\n    "Satoshi",\n    "Inter",\n    sans-serif;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00000080;\n  text-decoration: none;\n  transition: color .2s;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.breadcrumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: #00000080;\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 500;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 295px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.sidebar[_ngcontent-%COMP%] {\n  border: 1px solid #0000001A;\n  border-radius: 20px;\n  background: #fff;\n  overflow: hidden;\n  position: sticky;\n  top: 20px;\n}\n.sidebar-inner[_ngcontent-%COMP%] {\n  padding: 20px 24px 28px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.sidebar-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: #666;\n  border-radius: 6px;\n  transition: background .15s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #0000001A;\n  margin: 16px 0;\n}\n.filter-block[_ngcontent-%COMP%] {\n  &__head {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: none;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: 700;\n    color: #000;\n    text-align: left;\n    margin-bottom: 0;\n    span {\n      flex: 1;\n    }\n  }\n  &__body {\n    margin-top: 16px;\n  }\n}\n.chevron[_ngcontent-%COMP%] {\n  transition: transform .25s ease;\n  flex-shrink: 0;\n}\n.chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.category-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  cursor: pointer;\n  font-size: 16px;\n  color: #00000099;\n  transition: color .15s;\n}\n.cat-item[_ngcontent-%COMP%]   .cat-arrow[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity .15s;\n}\n.cat-item[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.cat-item[_ngcontent-%COMP%]:hover   .cat-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cat-item.active[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 600;\n}\n.cat-item.active[_ngcontent-%COMP%]   .cat-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  width: 100%;\n  padding: 14px;\n  background: #000;\n  color: #fff;\n  border: none;\n  border-radius: 72px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background .2s;\n  letter-spacing: 0.01em;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  background: #1a1a1a;\n}\n.main[_ngcontent-%COMP%] {\n}\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n  &__left {\n    display: flex;\n    align-items: baseline;\n    gap: 16px;\n    flex-wrap: wrap;\n  }\n  &__right {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n  margin: 0;\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #00000099;\n}\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #00000099;\n  white-space: nowrap;\n}\n.sort-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.sort-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 0 32px 0 12px;\n  height: 36px;\n  border: none;\n  background: transparent;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  cursor: pointer;\n  outline: none;\n  font-family: inherit;\n}\n.select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  pointer-events: none;\n  color: #000;\n}\n.filter-toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #0000001A;\n  border-radius: 72px;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background .15s;\n}\n.filter-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.loading-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n}\n.skeleton-img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 3/4;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 20px;\n  margin-bottom: 12px;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 7px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 80px 20px;\n  text-align: center;\n  color: #999;\n  font-size: 16px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 72px;\n  border: 1px solid #000;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background .15s, color .15s;\n}\n.btn-reset[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #fff;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 24px;\n  border-top: 1px solid #0000001A;\n}\n.pg-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 40px;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid #0000001A;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: background .15s, border-color .15s;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5f5f5;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  border-color: #000;\n}\n.pg-nav[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pg-ellipsis[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  color: #999;\n  font-size: 14px;\n}\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .4);\n  z-index: 99;\n}\n@media (max-width: 1024px) {\n  .category-page[_ngcontent-%COMP%] {\n    padding: 16px 24px 48px;\n  }\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: min(320px, 85vw);\n    height: 100dvh;\n    border-radius: 0;\n    z-index: 100;\n    overflow-y: auto;\n    transition: left .3s ease;\n    border: none;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, .12);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .sidebar-backdrop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .icon-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .filter-toggle-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .products-grid[_ngcontent-%COMP%], \n   .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .category-page[_ngcontent-%COMP%] {\n    padding: 12px 16px 40px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .results-count[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .products-grid[_ngcontent-%COMP%], \n   .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=category.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryComponent, [{
    type: Component,
    args: [{ selector: "app-category", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      ProductCardComponent,
      PriceFilterComponent
    ], template: `
    <div class="category-page">

      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a routerLink="/">Home</a>
        <span class="sep">\u203A</span>
        <span class="current">Casual</span>
      </nav>

      <div class="layout">

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SIDEBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <aside class="sidebar" [class.open]="sidebarOpen()">
          <div class="sidebar-inner">

            <div class="sidebar-header">
              <span class="sidebar-title">Filters</span>
              <button class="icon-btn" (click)="sidebarOpen.set(false)" aria-label="Close filters">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <!-- \u2500\u2500 Categories \u2500\u2500 -->
            <div class="filter-block">
              <button class="filter-block__head" (click)="toggleSection('categories')">
                <span>Categories</span>
                <svg class="chevron" [class.rotated]="openSections().includes('categories')"
                     width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              @if (openSections().includes('categories')) {
                <ul class="filter-block__body category-list">
                  @for (cat of categories(); track cat.id) {
                    <li>
                      <label
                        class="cat-item"
                        [class.active]="selectedCategories().includes(cat.slug)"
                        (click)="toggleCategory(cat.slug)">
                        <span class="cat-name">{{ cat.name }}</span>
                        <svg class="cat-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </label>
                    </li>
                  }
                </ul>
              }
            </div>

            <div class="divider"></div>

            <!-- \u2500\u2500 Price \u2500\u2500 -->
            <div class="filter-block">
              <button class="filter-block__head" (click)="toggleSection('price')">
                <span>Price</span>
                <svg class="chevron" [class.rotated]="openSections().includes('price')"
                     width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              @if (openSections().includes('price')) {
                <div class="filter-block__body">
                  <app-price-filter
                    [min]="0"
                    [max]="500"
                    [value]="priceRange()"
                    (valueChange)="updatePriceRange($event)">
                  </app-price-filter>
                </div>
              }
            </div>

            <button class="btn-apply" (click)="applyFilters()">Apply Filter</button>

          </div>
        </aside>

        <!-- Sidebar backdrop (mobile) -->
        @if (sidebarOpen()) {
          <div class="sidebar-backdrop" (click)="sidebarOpen.set(false)"></div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MAIN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <main class="main">

          <!-- Header row -->
          <div class="main-header">
            <div class="main-header__left">
              <h1 class="page-title">Casual</h1>
              <span class="results-count">
                Showing {{ rangeStart() }}\u2013{{ rangeEnd() }} of {{ totalCount() }} Products
              </span>
            </div>
            <div class="main-header__right">
              <span class="sort-label">Sort by:</span>
              <div class="sort-select-wrap">
                <select [value]="sortBy()" (change)="onSortChange($event)" class="sort-select">
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <svg class="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>

              <!-- Filter toggle (mobile) -->
              <button class="filter-toggle-btn" (click)="sidebarOpen.set(true)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="4" y1="6" x2="20" y2="6"/>
                  <line x1="4" y1="12" x2="20" y2="12"/>
                  <line x1="4" y1="18" x2="20" y2="18"/>
                </svg>
                Filters
              </button>
            </div>
          </div>

          <!-- Loading -->
          @if (loading()) {
            <div class="loading-grid">
              @for (i of [1,2,3,4,5,6,7,8,9]; track i) {
                <div class="skeleton-card">
                  <div class="skeleton-img"></div>
                  <div class="skeleton-line" style="width:70%"></div>
                  <div class="skeleton-line" style="width:40%"></div>
                </div>
              }
            </div>
          } @else {
            <!-- Grid -->
            <div class="products-grid">
              @for (product of products(); track product.id) {
                <app-product-card
                  [product]="product"
                  (addToCart)="addToCart($event)">
                </app-product-card>
              } @empty {
                <div class="empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <p>No products found</p>
                  <button class="btn-reset" (click)="resetFilters()">Reset Filters</button>
                </div>
              }
            </div>
          }

          <!-- Pagination -->
          @if (totalPages() > 1) {
            <div class="pagination">
              <button
                class="pg-btn pg-nav"
                [disabled]="currentPage() === 1"
                (click)="goToPage(currentPage() - 1)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Previous
              </button>

              <div class="pg-numbers">
                @for (page of visiblePages(); track page) {
                  @if (page === -1) {
                    <span class="pg-ellipsis">...</span>
                  } @else {
                    <button
                      class="pg-btn"
                      [class.active]="page === currentPage()"
                      (click)="goToPage(page)">
                      {{ page }}
                    </button>
                  }
                }
              </div>

              <button
                class="pg-btn pg-nav"
                [disabled]="currentPage() === totalPages()"
                (click)="goToPage(currentPage() + 1)">
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          }

        </main>
      </div>
    </div>
  `, styles: ['/* src/app/pages/category/category.css */\n.category-page {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 20px 40px 60px;\n  font-family:\n    "Satoshi",\n    "Inter",\n    sans-serif;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.breadcrumb a {\n  color: #00000080;\n  text-decoration: none;\n  transition: color .2s;\n}\n.breadcrumb a:hover {\n  color: #000;\n}\n.breadcrumb .sep {\n  color: #00000080;\n}\n.breadcrumb .current {\n  color: #000;\n  font-weight: 500;\n}\n.layout {\n  display: grid;\n  grid-template-columns: 295px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.sidebar {\n  border: 1px solid #0000001A;\n  border-radius: 20px;\n  background: #fff;\n  overflow: hidden;\n  position: sticky;\n  top: 20px;\n}\n.sidebar-inner {\n  padding: 20px 24px 28px;\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.sidebar-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #000;\n}\n.icon-btn {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: #666;\n  border-radius: 6px;\n  transition: background .15s;\n}\n.icon-btn:hover {\n  background: #f5f5f5;\n}\n.divider {\n  height: 1px;\n  background: #0000001A;\n  margin: 16px 0;\n}\n.filter-block {\n  &__head {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: none;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: 700;\n    color: #000;\n    text-align: left;\n    margin-bottom: 0;\n    span {\n      flex: 1;\n    }\n  }\n  &__body {\n    margin-top: 16px;\n  }\n}\n.chevron {\n  transition: transform .25s ease;\n  flex-shrink: 0;\n}\n.chevron.rotated {\n  transform: rotate(180deg);\n}\n.category-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  cursor: pointer;\n  font-size: 16px;\n  color: #00000099;\n  transition: color .15s;\n}\n.cat-item .cat-arrow {\n  opacity: 0;\n  transition: opacity .15s;\n}\n.cat-item:hover {\n  color: #000;\n}\n.cat-item:hover .cat-arrow {\n  opacity: 1;\n}\n.cat-item.active {\n  color: #000;\n  font-weight: 600;\n}\n.cat-item.active .cat-arrow {\n  opacity: 1;\n}\n.btn-apply {\n  margin-top: 24px;\n  width: 100%;\n  padding: 14px;\n  background: #000;\n  color: #fff;\n  border: none;\n  border-radius: 72px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background .2s;\n  letter-spacing: 0.01em;\n}\n.btn-apply:hover {\n  background: #1a1a1a;\n}\n.main {\n}\n.main-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n  &__left {\n    display: flex;\n    align-items: baseline;\n    gap: 16px;\n    flex-wrap: wrap;\n  }\n  &__right {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n}\n.page-title {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n  margin: 0;\n}\n.results-count {\n  font-size: 16px;\n  color: #00000099;\n}\n.sort-label {\n  font-size: 16px;\n  color: #00000099;\n  white-space: nowrap;\n}\n.sort-select-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.sort-select {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 0 32px 0 12px;\n  height: 36px;\n  border: none;\n  background: transparent;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  cursor: pointer;\n  outline: none;\n  font-family: inherit;\n}\n.select-chevron {\n  position: absolute;\n  right: 4px;\n  pointer-events: none;\n  color: #000;\n}\n.filter-toggle-btn {\n  display: none;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #0000001A;\n  border-radius: 72px;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background .15s;\n}\n.filter-toggle-btn:hover {\n  background: #f5f5f5;\n}\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.loading-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.skeleton-card {\n  border-radius: 20px;\n  overflow: hidden;\n}\n.skeleton-img {\n  width: 100%;\n  aspect-ratio: 3/4;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: 20px;\n  margin-bottom: 12px;\n}\n.skeleton-line {\n  height: 14px;\n  border-radius: 7px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  margin-bottom: 8px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.empty-state {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 80px 20px;\n  text-align: center;\n  color: #999;\n  font-size: 16px;\n}\n.btn-reset {\n  padding: 10px 24px;\n  border-radius: 72px;\n  border: 1px solid #000;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background .15s, color .15s;\n}\n.btn-reset:hover {\n  background: #000;\n  color: #fff;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 24px;\n  border-top: 1px solid #0000001A;\n}\n.pg-numbers {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.pg-btn {\n  min-width: 40px;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid #0000001A;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: background .15s, border-color .15s;\n}\n.pg-btn:hover:not(:disabled) {\n  background: #f5f5f5;\n}\n.pg-btn:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.pg-btn.active {\n  background: #000;\n  color: #fff;\n  border-color: #000;\n}\n.pg-nav {\n  padding: 0 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pg-ellipsis {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  color: #999;\n  font-size: 14px;\n}\n.sidebar-backdrop {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .4);\n  z-index: 99;\n}\n@media (max-width: 1024px) {\n  .category-page {\n    padding: 16px 24px 48px;\n  }\n  .layout {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: min(320px, 85vw);\n    height: 100dvh;\n    border-radius: 0;\n    z-index: 100;\n    overflow-y: auto;\n    transition: left .3s ease;\n    border: none;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, .12);\n  }\n  .sidebar.open {\n    left: 0;\n  }\n  .sidebar-backdrop {\n    display: block;\n  }\n  .icon-btn {\n    display: flex;\n  }\n  .filter-toggle-btn {\n    display: flex;\n  }\n  .products-grid,\n  .loading-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .category-page {\n    padding: 12px 16px 40px;\n  }\n  .page-title {\n    font-size: 24px;\n  }\n  .results-count {\n    font-size: 14px;\n  }\n  .products-grid,\n  .loading-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .pagination {\n    flex-wrap: wrap;\n    gap: 12px;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=category.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "app/pages/category/category.ts", lineNumber: 225 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "home", component: Home, canActivate: [authGuard] },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  },
  { path: "product/:id", component: Product },
  { path: "cart", component: CartComponent },
  { path: "category", component: CategoryComponent },
  { path: "login", component: Login, canActivate: [guestGuard] },
  { path: "register", component: Register, canActivate: [guestGuard] },
  {
    path: "account",
    component: Account,
    children: [
      { path: "", redirectTo: "edit", pathMatch: "full" },
      { path: "edit", component: EditProfile },
      { path: "payment", component: PaymentOptions },
      { path: "my-orders", component: MyOrders }
    ]
  },
  { path: "wishlist", component: Wishlist },
  { path: "checkout", component: Checkout },
  {
    path: "orders",
    loadComponent: () => import("./chunk-XUAXXGJI.js").then((m) => m.OrdersComponent),
    canActivate: [authGuard]
  },
  {
    path: "orders/:id",
    loadComponent: () => import("./chunk-V6O7YS6K.js").then((m) => m.OrderDetailComponent),
    canActivate: [authGuard]
  },
  { path: "**", component: NotFound }
];

// src/app/interceptors/auth-interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  const authReq = token ? req.clone({
    headers: req.headers.set("Authorization", `Bearer ${token}`)
  }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      auth.logout();
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/layouts/footer/footer.ts
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 72, vars: 0, consts: [[1, "site-footer", "mt-5"], [1, "container", "my-5", "newsletter-box-container"], [1, "newsletter-box", "d-flex", "flex-column", "flex-md-row", "align-items-center", "justify-content-between", "p-4"], [1, "text-white", "mb-3", "mb-md-0"], [1, "fw-bold", "mb-0"], [1, "newsletter-form", "d-flex", "flex-column", "gap-3"], [1, "input-group"], [1, "input-group-text", "bg-white", "border-0"], [1, "bi", "bi-envelope"], ["type", "email", "placeholder", "Enter your email address", 1, "form-control", "border-0"], [1, "btn", "subscribe-btn"], [1, "footer-container", "container"], [1, "footer-section"], [1, "footer-title"], [1, "web-discription"], ["href", "#"], [1, "app-buttons", "d-flex", "gap-5"], [1, "bi", "bi-apple"], [1, "bi", "bi-google-play"], [1, "footer-bottom", "d-flex", "justify-content-between"], ["src", "https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png", "alt", "", 1, "img-fluid", 2, "width", "150px", "height", "40px"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, " STAY UPTO DATE ABOUT ");
      \u0275\u0275domElement(6, "br");
      \u0275\u0275text(7, " OUR LATEST OFFERS ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275domElement(11, "i", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(12, "input", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "button", 10);
      \u0275\u0275text(14, " Subscribe to Newsletter ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 11)(16, "div", 12)(17, "h3", 13);
      \u0275\u0275text(18, "SHOP.CO");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "h6", 14);
      \u0275\u0275text(20, "We have clothes that suits your style and which you\u2019re proud to wear. From women to men.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 12)(22, "h4", 13);
      \u0275\u0275text(23, "Help");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "ul")(25, "li")(26, "a", 15);
      \u0275\u0275text(27, "Help Center");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "li")(29, "a", 15);
      \u0275\u0275text(30, "Contact Us");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "li")(32, "a", 15);
      \u0275\u0275text(33, "FAQs");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(34, "div", 12)(35, "h4", 13);
      \u0275\u0275text(36, "Account");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "ul")(38, "li")(39, "a", 15);
      \u0275\u0275text(40, "Sign In");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(41, "li")(42, "a", 15);
      \u0275\u0275text(43, "Register");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "li")(45, "a", 15);
      \u0275\u0275text(46, "Orders");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(47, "div", 12)(48, "h4", 13);
      \u0275\u0275text(49, "Quick Links");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "ul")(51, "li")(52, "a", 15);
      \u0275\u0275text(53, "Pricing");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "li")(55, "a", 15);
      \u0275\u0275text(56, "Services");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(57, "li")(58, "a", 15);
      \u0275\u0275text(59, "Blog");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(60, "div", 12)(61, "h4", 13);
      \u0275\u0275text(62, "Download App");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "div", 16)(64, "a", 15);
      \u0275\u0275domElement(65, "i", 17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "a", 15);
      \u0275\u0275domElement(67, "i", 18);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(68, "div", 19)(69, "p");
      \u0275\u0275text(70, "\xA9 2026 Mattger. All rights reserved.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(71, "img", 20);
      \u0275\u0275domElementEnd()();
    }
  }, styles: ['\n\n.site-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-family: "Poppins", sans-serif;\n  padding-top: 50px;\n}\n.newsletter-box-container[_ngcontent-%COMP%] {\n  position: relative;\n  top: -80px;\n}\n.newsletter-box[_ngcontent-%COMP%] {\n  background-color: #000;\n  border-radius: 20px;\n  color: #fff;\n}\n.newsletter-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1.4;\n}\n.newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 30px;\n  overflow: hidden;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 12px;\n  box-shadow: none;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.subscribe-btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #000;\n  border-radius: 30px;\n  padding: 10px;\n  font-weight: 500;\n  transition: 0.3s;\n}\n.subscribe-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.footer-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 30px;\n  margin-top: -40px;\n  padding-bottom: 40px;\n}\n.footer-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.web-discription[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #555;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.app-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #000;\n  transition: 0.3s;\n}\n.app-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #555;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding: 15px 0;\n  margin-top: 20px;\n  font-size: 14px;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #777;\n}\n@media (max-width: 768px) {\n  .newsletter-box[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .newsletter-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .newsletter-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=footer.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [], template: '<footer class="site-footer mt-5 ">\r\n  <div class="container my-5 newsletter-box-container">\r\n  <div class="newsletter-box d-flex flex-column flex-md-row align-items-center justify-content-between p-4">\r\n    \r\n    <!-- Left Text -->\r\n    <div class="text-white mb-3 mb-md-0">\r\n      <h2 class="fw-bold mb-0">\r\n        STAY UPTO DATE ABOUT <br> OUR LATEST OFFERS\r\n      </h2>\r\n    </div>\r\n\r\n    <!-- Right Form -->\r\n    <div class="newsletter-form d-flex flex-column gap-3">\r\n      <div class="input-group">\r\n        <span class="input-group-text bg-white border-0">\r\n          <i class="bi bi-envelope"></i>\r\n        </span>\r\n        <input type="email" class="form-control border-0" placeholder="Enter your email address">\r\n      </div>\r\n\r\n      <button class="btn subscribe-btn">\r\n        Subscribe to Newsletter\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n  <div class="footer-container container">\r\n\r\n    <!-- 1. Site Name -->\r\n    <div class="footer-section">\r\n      <h3 class="footer-title">SHOP.CO</h3>\r\n      <h6 class="web-discription">We have clothes that suits your style and which you\u2019re proud to wear. From women to men.</h6>\r\n    </div>\r\n\r\n    <!-- 2. Support -->\r\n    <div class="footer-section">\r\n      <h4 class="footer-title">Help</h4>\r\n      <ul>\r\n        <li><a href="#">Help Center</a></li>\r\n        <li><a href="#">Contact Us</a></li>\r\n        <li><a href="#">FAQs</a></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- 3. Account -->\r\n    <div class="footer-section">\r\n      <h4 class="footer-title">Account</h4>\r\n      <ul>\r\n        <li><a href="#">Sign In</a></li>\r\n        <li><a href="#">Register</a></li>\r\n        <li><a href="#">Orders</a></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- 4. Quick Links -->\r\n    <div class="footer-section">\r\n      <h4 class="footer-title">Quick Links</h4>\r\n      <ul>\r\n        <li><a href="#">Pricing</a></li>\r\n        <li><a href="#">Services</a></li>\r\n        <li><a href="#">Blog</a></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- 5. Download App -->\r\n    <div class="footer-section">\r\n      <h4 class="footer-title">Download App</h4>\r\n      <div class="app-buttons d-flex gap-5">\r\n        <a href="#"><i class="bi bi-apple"></i></a>\r\n        <a href="#"><i class="bi bi-google-play"></i></a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class="footer-bottom d-flex justify-content-between">\r\n    <p>&copy; 2026 Mattger. All rights reserved.</p>\r\n    <img src="https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png"\r\n    style="width: 150px;height: 40px;"\r\n    alt="" class="img-fluid">\r\n  </div>\r\n</footer>', styles: ['/* src/app/layouts/footer/footer.css */\n.site-footer {\n  background-color: #f5f5f5;\n  font-family: "Poppins", sans-serif;\n  padding-top: 50px;\n}\n.newsletter-box-container {\n  position: relative;\n  top: -80px;\n}\n.newsletter-box {\n  background-color: #000;\n  border-radius: 20px;\n  color: #fff;\n}\n.newsletter-box h2 {\n  font-size: 28px;\n  line-height: 1.4;\n}\n.newsletter-form .input-group {\n  background: #fff;\n  border-radius: 30px;\n  overflow: hidden;\n}\n.newsletter-form input {\n  padding: 12px;\n  box-shadow: none;\n}\n.newsletter-form input:focus {\n  outline: none;\n  box-shadow: none;\n}\n.subscribe-btn {\n  background-color: #fff;\n  color: #000;\n  border-radius: 30px;\n  padding: 10px;\n  font-weight: 500;\n  transition: 0.3s;\n}\n.subscribe-btn:hover {\n  background-color: #ddd;\n}\n.footer-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 30px;\n  margin-top: -40px;\n  padding-bottom: 40px;\n}\n.footer-title {\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.web-discription {\n  color: #777;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.footer-section ul {\n  list-style: none;\n  padding: 0;\n}\n.footer-section ul li {\n  margin-bottom: 8px;\n}\n.footer-section ul li a {\n  text-decoration: none;\n  color: #555;\n  font-size: 14px;\n  transition: 0.3s;\n}\n.footer-section ul li a:hover {\n  color: #000;\n}\n.app-buttons i {\n  font-size: 24px;\n  color: #000;\n  transition: 0.3s;\n}\n.app-buttons i:hover {\n  color: #555;\n}\n.footer-bottom {\n  border-top: 1px solid #ddd;\n  padding: 15px 0;\n  margin-top: 20px;\n  font-size: 14px;\n}\n.footer-bottom p {\n  margin: 0;\n  color: #777;\n}\n@media (max-width: 768px) {\n  .newsletter-box {\n    text-align: center;\n  }\n  .newsletter-form {\n    width: 100%;\n  }\n  .newsletter-box h2 {\n    font-size: 22px;\n  }\n  .footer-bottom {\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "app/layouts/footer/footer.ts", lineNumber: 9 });
})();

// src/app/layouts/navbar/navbar.ts
function Navbar_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "input", 17)(2, "i", 18);
    \u0275\u0275elementEnd();
  }
}
var Navbar = class _Navbar {
  //from service of backend later
  wishLength = 5;
  cartLength = 3;
  //to header text
  topText = "Summer Sale For All Swim And Free Express Delivery - OFF 50%! ";
  //options language
  selectedOption = "";
  options = ["English", "\u0639\u0631\u0628\u064A"];
  select(option) {
    this.selectedOption = option;
  }
  logout() {
    console.log("User logged out");
    localStorage.removeItem("token");
  }
  showSearch = false;
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 81, vars: 4, consts: [[1, "d-flex", "bg-dark"], [1, "bg-dark", "text-light", "text-center", "sale-div"], ["routerLink", "register", 1, "ms-3", "text-light"], [1, "navbar", "navbar-expand-lg"], [1, "container", "d-flex", "gap-lg-5", "container-nav"], [1, "d-flex"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarContent", "aria-controls", "navbarContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["href", "#", 1, "navbar-brand"], ["id", "navbarContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "d-none", "d-lg-flex", "gap-3"], [1, "nav-item"], ["routerLink", "", 1, "nav-link"], ["routerLink", "contact", 1, "nav-link"], ["routerLink", "about", 1, "nav-link"], ["routerLink", "register", 1, "nav-link"], [1, "position-relative", "d-none", "d-lg-flex", "w-50"], ["type", "text", "placeholder", "What are you looking for ?", 1, "form-control", "pe-5"], [1, "bi", "bi-search", "position-absolute", "top-50", "end-0", "translate-middle-y", "me-3", "text-muted"], [1, "d-flex", "align-items-center"], [1, "btn", "icon", "d-lg-none", 3, "click"], [1, "bi", "bi-search"], ["routerLink", "wishlist", 1, "btn", "icon"], [1, "bi", "bi-heart"], [1, "length"], ["routerLink", "cart", 1, "btn", "icon"], [1, "bi", "bi-cart"], ["routerLink", "/orders", "title", "Orders", 1, "btn", "icon"], [1, "bi", "bi-bag-check"], ["id", "profileDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "icon", "profileicon"], [1, "bi", "bi-person", "fs-4"], ["aria-labelledby", "profileDropdown", 1, "dropdown-menu", "dropdown-menu-end", "profile-dropdown", "nox"], ["routerLink", "account", 1, "dropdown-item"], [1, "bi", "bi-person-circle", "me-2"], ["routerLink", "/orders", 1, "dropdown-item"], [1, "bi", "bi-bag-check", "me-2"], ["routerLink", "/account/payment", 1, "dropdown-item"], [1, "bi", "bi-credit-card", "me-2"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], ["class", "position-relative d-lg-none m-2 search-bar", 4, "ngIf"], ["id", "navbarContent", 1, "collapse", "navbar-collapse", "d-lg-none"], [1, "navbar-nav", "me-auto", "mobile-menu", "gap-1"], ["routerLink", "/orders", 1, "nav-link"], [1, "position-relative", "d-lg-none", "m-2", "search-bar"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, " SingUp Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "nav", 3)(6, "div", 4)(7, "div", 5)(8, "button", 6);
      \u0275\u0275element(9, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 8);
      \u0275\u0275text(11, "SHOP.CO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "ul", 10)(14, "li", 11)(15, "a", 12);
      \u0275\u0275text(16, "Shop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li", 11)(18, "a", 13);
      \u0275\u0275text(19, "On Sale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li", 11)(21, "a", 14);
      \u0275\u0275text(22, "New Arrivals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li", 11)(24, "a", 15);
      \u0275\u0275text(25, "Brands");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 16);
      \u0275\u0275element(27, "input", 17)(28, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 19)(30, "a", 20);
      \u0275\u0275listener("click", function Navbar_Template_a_click_30_listener() {
        return ctx.toggleSearch();
      });
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 22);
      \u0275\u0275element(33, "i", 23);
      \u0275\u0275elementStart(34, "p", 24);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "a", 25);
      \u0275\u0275element(37, "i", 26);
      \u0275\u0275elementStart(38, "p", 24);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 27);
      \u0275\u0275element(41, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 29);
      \u0275\u0275element(43, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "ul", 31)(45, "li")(46, "a", 32);
      \u0275\u0275element(47, "i", 33);
      \u0275\u0275text(48, " Account ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 34);
      \u0275\u0275element(51, "i", 35);
      \u0275\u0275text(52, " Orders ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 36);
      \u0275\u0275element(55, "i", 37);
      \u0275\u0275text(56, " Payment ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li");
      \u0275\u0275element(58, "hr", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "li")(60, "a", 39);
      \u0275\u0275listener("click", function Navbar_Template_a_click_60_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(61, "i", 40);
      \u0275\u0275text(62, " Log Out ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(63, Navbar_div_63_Template, 3, 0, "div", 41);
      \u0275\u0275elementStart(64, "div", 42)(65, "ul", 43)(66, "li", 11)(67, "a", 12);
      \u0275\u0275text(68, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li", 11)(70, "a", 13);
      \u0275\u0275text(71, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li", 11)(73, "a", 14);
      \u0275\u0275text(74, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "li", 11)(76, "a", 44);
      \u0275\u0275text(77, "Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li", 11)(79, "a", 15);
      \u0275\u0275text(80, "Join");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.topText);
      \u0275\u0275advance(33);
      \u0275\u0275textInterpolate(ctx.wishLength);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.cartLength);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngIf", ctx.showSearch);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n.sale-div[_ngcontent-%COMP%] {\n  min-height: 45px;\n  margin: auto;\n  align-content: center;\n  font-size: 17px;\n  padding: 3px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 10px;\n  background-color: rgba(240, 237, 237, 0.278);\n}\ni.bi-search[_ngcontent-%COMP%] {\n  pointer-events: none;\n  font-size: 1rem;\n}\n.position-relative[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 30px;\n}\nnav[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n}\n.icon[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 20px;\n  transition: .4s ease;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  position: relative;\n  color: var(--primary-color);\n}\n.length[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  font-size: 11px;\n  background-color: var(--primary-color);\n  border-radius: 50px;\n  color: white;\n  padding: 0px 10px 15px 4px;\n  height: 12px;\n  width: 12px;\n  margin: 0;\n}\n.bi-person[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-radius: 50px;\n  color: white;\n  padding: 5px;\n  margin: 10px;\n}\n@media (max-width:800px) {\n  .bi-person[_ngcontent-%COMP%] {\n    background-color: var(--primary-color);\n    border-radius: 50px;\n    color: white;\n    padding: 2px;\n    margin: 0px;\n  }\n}\n.profile-dropdown[_ngcontent-%COMP%] {\n  min-width: 180px;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.dropdown-menu.show.profile-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.nox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  right: 110px;\n  width: 200px;\n  transform: translate(-50%, -50%);\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 20px;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.search-bar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.container-nav[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  padding: 2px;\n  margin-right: 10px;\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  padding: 10px 14px;\n  color: #0a0909;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n@media (max-width:800px) {\n  .nox[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 60px;\n    right: 10px;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=navbar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [CommonModule, RouterLink], template: '<div class="d-flex bg-dark">\r\n  <div class="bg-dark text-light text-center sale-div">\r\n    {{ topText }}<a routerLink="register" class="ms-3 text-light"> SingUp Now</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- ///navbar -->\r\n\r\n<nav class="navbar navbar-expand-lg">\r\n  <div class="container d-flex gap-lg-5 container-nav">\r\n    <!-- Brand / Title -->\r\n    <div class="d-flex">\r\n      <!-- Toggle button for mobile -->\r\n      <button\r\n        class="navbar-toggler"\r\n        type="button"\r\n        data-bs-toggle="collapse"\r\n        data-bs-target="#navbarContent"\r\n        aria-controls="navbarContent"\r\n        aria-expanded="false"\r\n        aria-label="Toggle navigation"\r\n      >\r\n        <span class="navbar-toggler-icon"></span>\r\n      </button>\r\n      <a class="navbar-brand" href="#">SHOP.CO</a>\r\n    </div>\r\n\r\n    <!-- Navbar links and content -->\r\n    <div class="collapse navbar-collapse" id="navbarContent">\r\n      <ul class="navbar-nav me-auto d-none d-lg-flex gap-3">\r\n        <li class="nav-item"><a class="nav-link" routerLink="">Shop</a></li>\r\n        <li class="nav-item"><a class="nav-link" routerLink="contact">On Sale</a></li>\r\n        <li class="nav-item"><a class="nav-link" routerLink="about">New Arrivals</a></li>\r\n        <li class="nav-item"><a class="nav-link" routerLink="register">Brands</a></li>\r\n      </ul>\r\n\r\n      <!-- Search input -->\r\n      <div class="position-relative d-none d-lg-flex w-50">\r\n        <input type="text" class="form-control pe-5" placeholder="What are you looking for ?" />\r\n        <i\r\n          class="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Icons -->\r\n    <div class="d-flex align-items-center">\r\n      <a class="btn icon d-lg-none" (click)="toggleSearch()">\r\n        <i class="bi bi-search"></i>\r\n      </a>\r\n      <a class="btn icon" routerLink="wishlist">\r\n        <i class="bi bi-heart"></i>\r\n        <p class="length">{{ wishLength }}</p>\r\n      </a>\r\n      <a class="btn icon" routerLink="cart">\r\n        <i class="bi bi-cart"></i>\r\n        <p class="length">{{ cartLength }}</p>\r\n      </a>\r\n\r\n      <!-- \u2705 Orders icon -->\r\n      <a class="btn icon" routerLink="/orders" title="Orders">\r\n        <i class="bi bi-bag-check"></i>\r\n      </a>\r\n\r\n      <a\r\n        class="btn icon profileicon"\r\n        id="profileDropdown"\r\n        data-bs-toggle="dropdown"\r\n        aria-expanded="false"\r\n      >\r\n        <i class="bi bi-person fs-4"></i>\r\n      </a>\r\n\r\n      <ul\r\n        class="dropdown-menu dropdown-menu-end profile-dropdown nox"\r\n        aria-labelledby="profileDropdown"\r\n      >\r\n        <li>\r\n          <a class="dropdown-item" routerLink="account">\r\n            <i class="bi bi-person-circle me-2"></i> Account\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class="dropdown-item" routerLink="/orders">\r\n            <i class="bi bi-bag-check me-2"></i> Orders\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class="dropdown-item" routerLink="/account/payment">\r\n            <i class="bi bi-credit-card me-2"></i> Payment\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <hr class="dropdown-divider" />\r\n        </li>\r\n        <li>\r\n          <a class="dropdown-item" href="#" (click)="logout()">\r\n            <i class="bi bi-box-arrow-right me-2"></i> Log Out\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- Search input (mobile) -->\r\n<div class="position-relative d-lg-none m-2 search-bar" *ngIf="showSearch">\r\n  <input type="text" class="form-control pe-5" placeholder="What are you looking for ?" />\r\n  <i class="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>\r\n</div>\r\n\r\n<!-- Mobile menu -->\r\n<div class="collapse navbar-collapse d-lg-none" id="navbarContent">\r\n  <ul class="navbar-nav me-auto mobile-menu gap-1">\r\n    <li class="nav-item"><a class="nav-link" routerLink="">Home</a></li>\r\n    <li class="nav-item"><a class="nav-link" routerLink="contact">Contact</a></li>\r\n    <li class="nav-item"><a class="nav-link" routerLink="about">About</a></li>\r\n    <li class="nav-item"><a class="nav-link" routerLink="/orders">Orders</a></li>\r\n    <li class="nav-item"><a class="nav-link" routerLink="register">Join</a></li>\r\n  </ul>\r\n</div>\r\n', styles: ["/* src/app/layouts/navbar/navbar.css */\n.sale-div {\n  min-height: 45px;\n  margin: auto;\n  align-content: center;\n  font-size: 17px;\n  padding: 3px;\n}\n.form-control {\n  height: 40px;\n  border-radius: 10px;\n  background-color: rgba(240, 237, 237, 0.278);\n}\ni.bi-search {\n  pointer-events: none;\n  font-size: 1rem;\n}\n.position-relative ::placeholder {\n  font-size: 12px;\n}\n.navbar-brand {\n  font-weight: 600;\n  font-size: 30px;\n}\nnav {\n  border-bottom: 1px solid gray;\n}\n.icon {\n  position: relative;\n  font-size: 20px;\n  transition: .4s ease;\n}\n.icon:hover {\n  position: relative;\n  color: var(--primary-color);\n}\n.length {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  font-size: 11px;\n  background-color: var(--primary-color);\n  border-radius: 50px;\n  color: white;\n  padding: 0px 10px 15px 4px;\n  height: 12px;\n  width: 12px;\n  margin: 0;\n}\n.bi-person {\n  background-color: var(--primary-color);\n  border-radius: 50px;\n  color: white;\n  padding: 5px;\n  margin: 10px;\n}\n@media (max-width:800px) {\n  .bi-person {\n    background-color: var(--primary-color);\n    border-radius: 50px;\n    color: white;\n    padding: 2px;\n    margin: 0px;\n  }\n}\n.profile-dropdown {\n  min-width: 180px;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.dropdown-menu.show.profile-dropdown {\n  opacity: 1;\n  transform: translateY(0);\n}\n.nox {\n  position: absolute;\n  top: 60px;\n  right: 110px;\n  width: 200px;\n  transform: translate(-50%, -50%);\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 20px;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.search-bar {\n  animation: slideDown 0.5s ease;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.container-nav {\n  flex-wrap: nowrap;\n}\n.navbar-toggler {\n  padding: 2px;\n  margin-right: 10px;\n}\n.navbar-toggler-icon {\n  width: 18px;\n}\n.mobile-menu {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  padding: 10px 14px;\n  color: #0a0909;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n@media (max-width:800px) {\n  .nox {\n    position: absolute;\n    top: 60px;\n    right: 10px;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=navbar.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "app/layouts/navbar/navbar.ts", lineNumber: 11 });
})();

// src/app/app.ts
function App_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function App_app_footer_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer");
  }
}
var App = class _App {
  router;
  title = signal("Mattger", ...ngDevMode ? [{ debugName: "title" }] : []);
  constructor(router) {
    this.router = router;
  }
  isAuthRoute() {
    return this.router.url === "/login" || this.router.url === "/register";
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, App_app_navbar_0_Template, 1, 0, "app-navbar", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275template(2, App_app_footer_2_Template, 1, 0, "app-footer", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isAuthRoute());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isAuthRoute());
    }
  }, dependencies: [RouterOutlet, Footer, Navbar, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Footer, Navbar, CommonModule], template: '<app-navbar *ngIf="!isAuthRoute()"></app-navbar>\r\n\r\n<router-outlet ></router-outlet>\r\n\r\n<app-footer *ngIf="!isAuthRoute()"></app-footer>\r\n' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 14 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
