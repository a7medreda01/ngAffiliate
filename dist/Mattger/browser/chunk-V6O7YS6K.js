import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  FormsModule,
  OrderService,
  Router,
  RouterLink,
  TitleCasePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G3KNRNGM.js";

// src/app/pages/order-detail/order-detail.ts
var _forTrack0 = ($index, $item) => $item.status;
var _forTrack1 = ($index, $item) => $item.productId;
function OrderDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domElement(1, "div", 3);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading order...");
    \u0275\u0275domElementEnd()();
  }
}
function OrderDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 4);
    \u0275\u0275domListener("click", function OrderDetailComponent_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4, "\u2190 Back to Orders");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function OrderDetailComponent_Conditional_3_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 15);
  }
}
function OrderDetailComponent_Conditional_3_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 44);
    \u0275\u0275domListener("click", function OrderDetailComponent_Conditional_3_Conditional_22_For_2_Template_button_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateStatus(s_r5));
    });
    \u0275\u0275domElement(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("current", ctx_r1.order().status === s_r5);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("dot dot--", s_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, s_r5), " ");
  }
}
function OrderDetailComponent_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, OrderDetailComponent_Conditional_3_Conditional_22_For_2_Template, 4, 8, "button", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusOptions);
  }
}
function OrderDetailComponent_Conditional_3_For_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 47);
    \u0275\u0275domElement(1, "polyline", 50);
    \u0275\u0275domElementEnd();
  }
}
function OrderDetailComponent_Conditional_3_For_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const \u0275$index_77_r6 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_77_r6 + 1);
  }
}
function OrderDetailComponent_Conditional_3_For_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 51);
  }
  if (rf & 2) {
    const step_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("filled", ctx_r1.isTimelineStepDone(step_r7.status));
  }
}
function OrderDetailComponent_Conditional_3_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275conditionalCreate(2, OrderDetailComponent_Conditional_3_For_28_Conditional_2_Template, 2, 0, ":svg:svg", 47)(3, OrderDetailComponent_Conditional_3_For_28_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, OrderDetailComponent_Conditional_3_For_28_Conditional_6_Template, 1, 2, "div", 49);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const \u0275$index_77_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", ctx_r1.isTimelineStepDone(step_r7.status))("current", ctx_r1.order().status === step_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isTimelineStepDone(step_r7.status) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r7.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r6 < ctx_r1.timeline.length - 1 ? 6 : -1);
  }
}
function OrderDetailComponent_Conditional_3_For_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 54);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", item_r8.image, \u0275\u0275sanitizeUrl)("alt", item_r8.name);
  }
}
function OrderDetailComponent_Conditional_3_For_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 60);
    \u0275\u0275domElement(2, "rect", 61)(3, "circle", 62)(4, "polyline", 63);
    \u0275\u0275domElementEnd()();
  }
}
function OrderDetailComponent_Conditional_3_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 52)(2, "div", 53);
    \u0275\u0275conditionalCreate(3, OrderDetailComponent_Conditional_3_For_48_Conditional_3_Template, 1, 2, "img", 54)(4, OrderDetailComponent_Conditional_3_For_48_Conditional_4_Template, 5, 0, "div", 55);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "td", 57);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 58);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 59);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r8.image ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7 ", item_r8.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(11, 5, item_r8.price, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 8, item_r8.price * item_r8.quantity, "1.2-2"));
  }
}
function OrderDetailComponent_Conditional_3_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28)(1, "h3", 20);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 64);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order().notes);
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 5)(1, "button", 4);
    \u0275\u0275domListener("click", function OrderDetailComponent_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 6);
    \u0275\u0275domElement(3, "polyline", 7);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " Back to Orders ");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "div", 8)(6, "div", 9)(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 10)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(15, "div", 12);
    \u0275\u0275domListener("click", function OrderDetailComponent_Conditional_3_Template_div_click_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(16, "div", 13)(17, "button", 14);
    \u0275\u0275domListener("click", function OrderDetailComponent_Conditional_3_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatusMenu());
    });
    \u0275\u0275conditionalCreate(18, OrderDetailComponent_Conditional_3_Conditional_18_Template, 1, 0, "div", 15);
    \u0275\u0275text(19, " Update Status ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(20, "svg", 16);
    \u0275\u0275domElement(21, "polyline", 17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(22, OrderDetailComponent_Conditional_3_Conditional_22_Template, 3, 0, "div", 18);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(23, "div", 19)(24, "h3", 20);
    \u0275\u0275text(25, "Order Progress");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 21);
    \u0275\u0275repeaterCreate(27, OrderDetailComponent_Conditional_3_For_28_Template, 7, 7, "div", 22, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "div", 23)(30, "div", 24)(31, "div", 25)(32, "h3", 20);
    \u0275\u0275text(33, "Order Items");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "div", 26)(35, "table", 27)(36, "thead")(37, "tr")(38, "th");
    \u0275\u0275text(39, "Product");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "th");
    \u0275\u0275text(41, "Qty");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "th");
    \u0275\u0275text(43, "Unit Price");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "th");
    \u0275\u0275text(45, "Subtotal");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(46, "tbody");
    \u0275\u0275repeaterCreate(47, OrderDetailComponent_Conditional_3_For_48_Template, 15, 11, "tr", null, _forTrack1);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275conditionalCreate(49, OrderDetailComponent_Conditional_3_Conditional_49_Template, 5, 1, "div", 28);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(50, "div", 29)(51, "div", 25)(52, "h3", 20);
    \u0275\u0275text(53, "Order Summary");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "div", 30)(55, "span");
    \u0275\u0275text(56, "Subtotal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(60, "div", 30)(61, "span");
    \u0275\u0275text(62, "Shipping");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(63, "span", 31);
    \u0275\u0275text(64, "Free");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "div", 30)(66, "span");
    \u0275\u0275text(67, "Tax (est.)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "span");
    \u0275\u0275text(69, "$0.00");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(70, "div", 32);
    \u0275\u0275domElementStart(71, "div", 33)(72, "span");
    \u0275\u0275text(73, "Total");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "span");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "number");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(77, "div", 25)(78, "h3", 20);
    \u0275\u0275text(79, "Customer");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "div", 34)(81, "div", 35);
    \u0275\u0275text(82);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(83, "div")(84, "p", 36);
    \u0275\u0275text(85);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(86, "p", 37);
    \u0275\u0275text(87);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(88, "div", 25)(89, "h3", 20);
    \u0275\u0275text(90, "Shipping Address");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(91, "p", 38);
    \u0275\u0275text(92);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(93, "div", 39)(94, "div", 40)(95, "span", 41);
    \u0275\u0275text(96, "Order Placed");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(97, "span", 42);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "date");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(100, "div", 40)(101, "span", 41);
    \u0275\u0275text(102, "Last Updated");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(103, "span", 42);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "date");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.order().orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge--", ctx_r1.order().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.order().status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed on ", \u0275\u0275pipeBind2(14, 18, ctx_r1.order().createdAt, "MMMM d, yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("disabled", ctx_r1.updating());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.updating() ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showStatusMenu() ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.timeline);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.order().items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order().notes ? 49 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(59, 21, ctx_r1.getSubtotal(), "1.2-2"));
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(76, 24, ctx_r1.order().total, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.order().customer.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.order().customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order().customer.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order().shippingAddress);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 27, ctx_r1.order().createdAt, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 30, ctx_r1.order().updatedAt, "mediumDate"));
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  orderService = inject(OrderService);
  order = signal(null, ...ngDevMode ? [{ debugName: "order" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  updating = signal(false, ...ngDevMode ? [{ debugName: "updating" }] : []);
  showStatusMenu = signal(false, ...ngDevMode ? [{ debugName: "showStatusMenu" }] : []);
  statusOptions = [
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
    "refunded"
  ];
  timeline = [
    { status: "pending", label: "Order Placed" },
    { status: "processing", label: "Processing" },
    { status: "shipped", label: "Shipped" },
    { status: "delivered", label: "Delivered" }
  ];
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.orderService.getOrderById(id).subscribe({
      next: (order) => {
        this.order.set(order);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Failed to load order. Please try again.");
        this.loading.set(false);
      }
    });
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  getSubtotal() {
    const o = this.order();
    if (!o)
      return 0;
    return o.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
  getTimelineIndex(status) {
    const order = ["pending", "processing", "shipped", "delivered"];
    return order.indexOf(status);
  }
  isTimelineStepDone(step) {
    const order = this.order();
    if (!order)
      return false;
    if (order.status === "cancelled" || order.status === "refunded")
      return false;
    return this.getTimelineIndex(order.status) >= this.getTimelineIndex(step);
  }
  updateStatus(status) {
    const order = this.order();
    if (!order)
      return;
    this.updating.set(true);
    this.showStatusMenu.set(false);
    this.orderService.updateOrderStatus(order.id, status).subscribe({
      next: (updated) => {
        this.order.set(updated);
        this.updating.set(false);
      },
      error: () => this.updating.set(false)
    });
  }
  goBack() {
    this.router.navigate(["/orders"]);
  }
  toggleStatusMenu() {
    this.showStatusMenu.set(!this.showStatusMenu());
  }
  closeStatusMenu() {
    this.showStatusMenu.set(false);
  }
  static \u0275fac = function OrderDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], decls: 4, vars: 3, consts: [[1, "detail-page", 3, "click"], [1, "loading-state"], [1, "error-state"], [1, "spinner"], [1, "btn-back", 3, "click"], [1, "detail-header"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15 18 9 12 15 6"], [1, "header-row"], [1, "header-left"], [1, "header-meta"], [1, "meta-date"], [1, "header-actions", 3, "click"], [1, "status-picker-wrap"], [1, "btn-status", 3, "click", "disabled"], [1, "spinner-sm"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], [1, "status-dropdown"], [1, "timeline-card", "card"], [1, "card-title"], [1, "timeline"], [1, "timeline-step", 3, "done", "current"], [1, "detail-grid"], [1, "col-main"], [1, "card"], [1, "items-table-wrap"], [1, "items-table"], [1, "card", "notes-card"], [1, "col-side"], [1, "summary-row"], [1, "free-tag"], [1, "summary-divider"], [1, "summary-row", "total-row"], [1, "customer-block"], [1, "avatar-lg"], [1, "cust-name"], [1, "cust-email"], [1, "address-text"], [1, "card", "dates-card"], [1, "date-row"], [1, "date-label"], [1, "date-value"], [1, "status-option", 3, "current"], [1, "status-option", 3, "click"], [1, "timeline-step"], [1, "step-circle"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "step-label"], [1, "step-line", 3, "filled"], ["points", "20 6 9 17 4 12"], [1, "step-line"], [1, "product-cell"], [1, "product-img-wrap"], [1, "product-img", 3, "src", "alt"], [1, "product-img-placeholder"], [1, "product-name"], [1, "qty-cell"], [1, "price-cell"], [1, "subtotal-cell"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "3"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], [1, "notes-text"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function OrderDetailComponent_Template_div_click_0_listener() {
        return ctx.closeStatusMenu();
      });
      \u0275\u0275conditionalCreate(1, OrderDetailComponent_Conditional_1_Template, 4, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, OrderDetailComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, OrderDetailComponent_Conditional_3_Template, 106, 33);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() && ctx.order() ? 3 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DecimalPipe, TitleCasePipe, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.detail-page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  background: #f5f6fa;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 100px 20px;\n  gap: 16px;\n  color: #6b7280;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, .4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 20px;\n  transition: color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.detail-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  font-family: monospace;\n}\n.header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.meta-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.status-picker-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-status[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-status[_ngcontent-%COMP%]:disabled {\n  opacity: .7;\n  cursor: not-allowed;\n}\n.status-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .12);\n  min-width: 170px;\n  z-index: 50;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeIn 0.12s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.status-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  width: 100%;\n  background: none;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  text-align: left;\n  text-transform: capitalize;\n  transition: background 0.12s;\n}\n.status-option[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.status-option.current[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot--pending[_ngcontent-%COMP%] {\n  background: #ca8a04;\n}\n.dot--processing[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.dot--shipped[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.dot--delivered[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.dot--cancelled[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.dot--refunded[_ngcontent-%COMP%] {\n  background: #b91c1c;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge--pending[_ngcontent-%COMP%] {\n  background: #fefce8;\n  color: #ca8a04;\n}\n.badge--processing[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.badge--shipped[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.badge--delivered[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge--cancelled[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.badge--refunded[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.timeline-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 8px;\n}\n.timeline-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  flex: 1;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.3s;\n  z-index: 1;\n}\n.timeline-step.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #fff;\n}\n.timeline-step.current[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #2563eb;\n  color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, .15);\n}\n.step-label[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: center;\n}\n.timeline-step.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%], \n.timeline-step.current[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.step-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: #e5e7eb;\n  z-index: 0;\n}\n.step-line.filled[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 24px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 18px;\n}\n.items-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.items-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.items-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: .5px;\n  text-transform: uppercase;\n}\n.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f9fafb;\n}\n.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  vertical-align: middle;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.product-img-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.product-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.product-img-placeholder[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #d1d5db;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.qty-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.price-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.subtotal-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.notes-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.summary-row[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.free-tag[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n  font-size: 13px;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e5e7eb;\n  margin: 14px 0;\n}\n.total-row[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n}\n.customer-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #7c3aed);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cust-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 3px;\n}\n.cust-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.address-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n.dates-card.card[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n}\n.date-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.date-row[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.date-label[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.date-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n}\n@media (max-width: 900px) {\n  .detail-page[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=order-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailComponent, [{
    type: Component,
    args: [{ selector: "app-order-detail", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<div class="detail-page" (click)="closeStatusMenu()">

  <!-- Loading -->
  @if (loading()) {
    <div class="loading-state">
      <div class="spinner"></div>
      <span>Loading order...</span>
    </div>
  }

  <!-- Error -->
  @if (error()) {
    <div class="error-state">
      <p>{{ error() }}</p>
      <button class="btn-back" (click)="goBack()">\u2190 Back to Orders</button>
    </div>
  }

  <!-- Content -->
  @if (!loading() && !error() && order()) {
    <!-- Back + Header -->
    <div class="detail-header">
      <button class="btn-back" (click)="goBack()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to Orders
      </button>

      <div class="header-row">
        <div class="header-left">
          <h1>{{ order()!.orderNumber }}</h1>
          <div class="header-meta">
            <span class="badge badge--{{ order()!.status }}">{{ order()!.status }}</span>
            <span class="meta-date">Placed on {{ order()!.createdAt | date:'MMMM d, yyyy' }}</span>
          </div>
        </div>
        <div class="header-actions" (click)="$event.stopPropagation()">
          <div class="status-picker-wrap">
            <button class="btn-status" (click)="toggleStatusMenu()" [disabled]="updating()">
              @if (updating()) {
                <div class="spinner-sm"></div>
              }
              Update Status
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            @if (showStatusMenu()) {
              <div class="status-dropdown">
                @for (s of statusOptions; track s) {
                  <button
                    class="status-option"
                    [class.current]="order()!.status === s"
                    (click)="updateStatus(s)">
                    <span class="dot dot--{{ s }}"></span>
                    {{ s | titlecase }}
                  </button>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>

    <!-- Status Timeline -->
    <div class="timeline-card card">
      <h3 class="card-title">Order Progress</h3>
      <div class="timeline">
        @for (step of timeline; track step.status; let i = $index) {
          <div class="timeline-step" [class.done]="isTimelineStepDone(step.status)"
               [class.current]="order()!.status === step.status">
            <div class="step-circle">
              @if (isTimelineStepDone(step.status)) {
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              } @else {
                <span>{{ i + 1 }}</span>
              }
            </div>
            <span class="step-label">{{ step.label }}</span>
            @if (i < timeline.length - 1) {
              <div class="step-line" [class.filled]="isTimelineStepDone(step.status)"></div>
            }
          </div>
        }
      </div>
    </div>

    <!-- Two-column layout -->
    <div class="detail-grid">

      <!-- Left: Items -->
      <div class="col-main">
        <div class="card">
          <h3 class="card-title">Order Items</h3>
          <div class="items-table-wrap">
            <table class="items-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                @for (item of order()!.items; track item.productId) {
                  <tr>
                    <td class="product-cell">
                      <div class="product-img-wrap">
                        @if (item.image) {
                          <img [src]="item.image" [alt]="item.name" class="product-img" />
                        } @else {
                          <div class="product-img-placeholder">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                              <rect x="3" y="3" width="18" height="18" rx="3"/>
                              <circle cx="8.5" cy="8.5" r="1.5"/>
                              <polyline points="21 15 16 10 5 21"/>
                            </svg>
                          </div>
                        }
                      </div>
                      <span class="product-name">{{ item.name }}</span>
                    </td>
                    <td class="qty-cell">\xD7 {{ item.quantity }}</td>
                    <td class="price-cell">\${{ item.price | number:'1.2-2' }}</td>
                    <td class="subtotal-cell">\${{ (item.price * item.quantity) | number:'1.2-2' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

        <!-- Notes -->
        @if (order()!.notes) {
          <div class="card notes-card">
            <h3 class="card-title">Notes</h3>
            <p class="notes-text">{{ order()!.notes }}</p>
          </div>
        }
      </div>

      <!-- Right: Summary + Customer + Shipping -->
      <div class="col-side">

        <!-- Order Summary -->
        <div class="card">
          <h3 class="card-title">Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>\${{ getSubtotal() | number:'1.2-2' }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span class="free-tag">Free</span>
          </div>
          <div class="summary-row">
            <span>Tax (est.)</span>
            <span>$0.00</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row total-row">
            <span>Total</span>
            <span>\${{ order()!.total | number:'1.2-2' }}</span>
          </div>
        </div>

        <!-- Customer Info -->
        <div class="card">
          <h3 class="card-title">Customer</h3>
          <div class="customer-block">
            <div class="avatar-lg">{{ getInitials(order()!.customer.name) }}</div>
            <div>
              <p class="cust-name">{{ order()!.customer.name }}</p>
              <p class="cust-email">{{ order()!.customer.email }}</p>
            </div>
          </div>
        </div>

        <!-- Shipping Address -->
        <div class="card">
          <h3 class="card-title">Shipping Address</h3>
          <p class="address-text">{{ order()!.shippingAddress }}</p>
        </div>

        <!-- Dates -->
        <div class="card dates-card">
          <div class="date-row">
            <span class="date-label">Order Placed</span>
            <span class="date-value">{{ order()!.createdAt | date:'mediumDate' }}</span>
          </div>
          <div class="date-row">
            <span class="date-label">Last Updated</span>
            <span class="date-value">{{ order()!.updatedAt | date:'mediumDate' }}</span>
          </div>
        </div>

      </div>
    </div>
  }
</div>
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";\n\n/* src/app/pages/order-detail/order-detail.css */\n:host {\n  font-family: "Inter", sans-serif;\n}\n.detail-page {\n  padding: 32px 40px;\n  background: #f5f6fa;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 100px 20px;\n  gap: 16px;\n  color: #6b7280;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, .4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 20px;\n  transition: color 0.15s;\n}\n.btn-back:hover {\n  color: #2563eb;\n}\n.detail-header {\n  margin-bottom: 24px;\n}\n.header-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.header-left h1 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  font-family: monospace;\n}\n.header-meta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.meta-date {\n  font-size: 13px;\n  color: #6b7280;\n}\n.status-picker-wrap {\n  position: relative;\n}\n.btn-status {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-status:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-status:disabled {\n  opacity: .7;\n  cursor: not-allowed;\n}\n.status-dropdown {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .12);\n  min-width: 170px;\n  z-index: 50;\n  overflow: hidden;\n  animation: fadeIn 0.12s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.status-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  width: 100%;\n  background: none;\n  border: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  text-align: left;\n  text-transform: capitalize;\n  transition: background 0.12s;\n}\n.status-option:hover {\n  background: #f9fafb;\n}\n.status-option.current {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot--pending {\n  background: #ca8a04;\n}\n.dot--processing {\n  background: #2563eb;\n}\n.dot--shipped {\n  background: #16a34a;\n}\n.dot--delivered {\n  background: #059669;\n}\n.dot--cancelled {\n  background: #dc2626;\n}\n.dot--refunded {\n  background: #b91c1c;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.badge::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge--pending {\n  background: #fefce8;\n  color: #ca8a04;\n}\n.badge--processing {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.badge--shipped {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.badge--delivered {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge--cancelled {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.badge--refunded {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.timeline-card {\n  margin-bottom: 24px;\n}\n.timeline {\n  display: flex;\n  align-items: center;\n  padding-top: 8px;\n}\n.timeline-step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  flex: 1;\n}\n.step-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.3s;\n  z-index: 1;\n}\n.timeline-step.done .step-circle {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #fff;\n}\n.timeline-step.current .step-circle {\n  background: #eff6ff;\n  border-color: #2563eb;\n  color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, .15);\n}\n.step-label {\n  margin-top: 8px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: center;\n}\n.timeline-step.done .step-label,\n.timeline-step.current .step-label {\n  color: #2563eb;\n}\n.step-line {\n  position: absolute;\n  top: 18px;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: #e5e7eb;\n  z-index: 0;\n}\n.step-line.filled {\n  background: #2563eb;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 24px;\n  align-items: start;\n}\n.card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.card:last-child {\n  margin-bottom: 0;\n}\n.card-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 18px;\n}\n.items-table-wrap {\n  overflow-x: auto;\n}\n.items-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.items-table thead tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.items-table th {\n  padding: 10px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: .5px;\n  text-transform: uppercase;\n}\n.items-table tbody tr {\n  border-bottom: 1px solid #f9fafb;\n}\n.items-table tbody tr:last-child {\n  border: none;\n}\n.items-table td {\n  padding: 14px 12px;\n  vertical-align: middle;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.product-img-wrap {\n  flex-shrink: 0;\n}\n.product-img {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.product-img-placeholder {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #d1d5db;\n}\n.product-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.qty-cell {\n  font-size: 13px;\n  color: #6b7280;\n}\n.price-cell {\n  font-size: 13px;\n  color: #6b7280;\n}\n.subtotal-cell {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.notes-text {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.summary-row:last-child {\n  margin: 0;\n}\n.free-tag {\n  color: #16a34a;\n  font-weight: 600;\n  font-size: 13px;\n}\n.summary-divider {\n  height: 1px;\n  background: #e5e7eb;\n  margin: 14px 0;\n}\n.total-row {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n}\n.customer-block {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatar-lg {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #7c3aed);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cust-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 3px;\n}\n.cust-email {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.address-text {\n  font-size: 14px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n.dates-card.card {\n  padding: 18px 24px;\n}\n.date-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.date-row:last-child {\n  margin: 0;\n}\n.date-label {\n  color: #9ca3af;\n}\n.date-value {\n  font-weight: 600;\n  color: #374151;\n}\n@media (max-width: 900px) {\n  .detail-page {\n    padding: 20px;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .header-row {\n    flex-direction: column;\n  }\n  .timeline {\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .step-line {\n    display: none;\n  }\n}\n/*# sourceMappingURL=order-detail.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "app/pages/order-detail/order-detail.ts", lineNumber: 15 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=chunk-V6O7YS6K.js.map
