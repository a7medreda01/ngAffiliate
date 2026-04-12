import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrderService,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G3KNRNGM.js";

// src/app/pages/orders/orders.ts
var _c0 = (a0) => ["/orders", a0];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function OrdersComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function OrdersComponent_For_47_Template_button_click_0_listener($event) {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.activeStatus.set(tab_r2.value);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeStatus() === tab_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function OrdersComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading orders...");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_65_For_18_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "a", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 57)(4, "circle", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 29);
    \u0275\u0275element(8, "path", 60)(9, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Update Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 29);
    \u0275\u0275element(13, "polyline", 63)(14, "path", 64)(15, "path", 65)(16, "path", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Cancel Order ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, order_r5.id));
  }
}
function OrdersComponent_Conditional_65_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41)(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 46);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 47);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 48);
    \u0275\u0275listener("click", function OrdersComponent_Conditional_65_For_18_Template_td_click_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "div", 49)(22, "button", 50);
    \u0275\u0275listener("click", function OrdersComponent_Conditional_65_For_18_Template_button_click_22_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu(order_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 51);
    \u0275\u0275element(24, "circle", 52)(25, "circle", 53)(26, "circle", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, OrdersComponent_Conditional_65_For_18_Conditional_27_Template, 18, 3, "div", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-initials", ctx_r2.getInitials(order_r5.customer.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(order_r5.customer.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r5.customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.customer.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, order_r5.createdAt, "MMM d, yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge--", order_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(19, 15, order_r5.total, "1.2-2"));
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r2.openMenuId() === order_r5.id ? 27 : -1);
  }
}
function OrdersComponent_Conditional_65_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 68);
    \u0275\u0275element(3, "path", 69)(4, "rect", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No orders found");
    \u0275\u0275elementEnd()()();
  }
}
function OrdersComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ORDER ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "CUSTOMER NAME");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "TOTAL AMOUNT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "ACTIONS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, OrdersComponent_Conditional_65_For_18_Template, 28, 18, "tr", null, _forTrack1, false, OrdersComponent_Conditional_65_ForEmpty_19_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 38)(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.filteredOrders());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Showing ", ctx_r2.filteredOrders().length, " of ", ctx_r2.allOrders().length, " orders");
  }
}
var OrdersComponent = class _OrdersComponent {
  orderService = inject(OrderService);
  allOrders = signal([], ...ngDevMode ? [{ debugName: "allOrders" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  activeStatus = signal("all", ...ngDevMode ? [{ debugName: "activeStatus" }] : []);
  openMenuId = signal(null, ...ngDevMode ? [{ debugName: "openMenuId" }] : []);
  statusTabs = [
    { label: "All Orders", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Processing", value: "processing" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Refunded", value: "refunded" }
  ];
  filteredOrders = computed(() => {
    let orders = this.allOrders();
    if (this.activeStatus() !== "all") {
      orders = orders.filter((o) => o.status === this.activeStatus());
    }
    const q = this.searchQuery().toLowerCase();
    if (q) {
      orders = orders.filter((o) => o.orderNumber.toLowerCase().includes(q) || o.customer.name.toLowerCase().includes(q) || o.customer.email.toLowerCase().includes(q));
    }
    return orders;
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : []);
  totalRevenue = computed(() => this.allOrders().reduce((sum, o) => sum + o.total, 0), ...ngDevMode ? [{ debugName: "totalRevenue" }] : []);
  activeOrdersCount = computed(() => this.allOrders().filter((o) => o.status === "pending" || o.status === "processing" || o.status === "shipped").length, ...ngDevMode ? [{ debugName: "activeOrdersCount" }] : []);
  averageOrderValue = computed(() => {
    const orders = this.allOrders();
    return orders.length ? this.totalRevenue() / orders.length : 0;
  }, ...ngDevMode ? [{ debugName: "averageOrderValue" }] : []);
  ngOnInit() {
    this.loading.set(true);
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.allOrders.set(orders);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  toggleMenu(orderId) {
    this.openMenuId.set(this.openMenuId() === orderId ? null : orderId);
  }
  closeMenu() {
    this.openMenuId.set(null);
  }
  getInitials(name) {
    return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  static \u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], decls: 66, vars: 12, consts: [[1, "orders-page", 3, "click"], [1, "page-header"], [1, "header-left"], [1, "header-sub"], [1, "btn-create"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value"], [1, "stat-trend", "positive"], [1, "stat-trend", "neutral"], [1, "stat-trend", "negative"], [1, "growth-bar-wrap"], [1, "stat-value", "growth-pct"], [1, "growth-bar"], [1, "growth-fill", 2, "width", "84%"], [1, "toolbar"], [1, "status-tabs"], [1, "tab", 3, "active"], [1, "toolbar-right"], [1, "search-wrap"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search orders, customers...", 3, "ngModelChange", "ngModel"], [1, "btn-outline"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "loading-state"], [1, "tab", 3, "click"], [1, "spinner"], [1, "table-wrap"], [1, "table-footer"], [1, "showing-label"], [1, "order-num"], [1, "customer-cell"], [1, "avatar"], [1, "customer-info"], [1, "customer-name"], [1, "customer-email"], [1, "date-cell"], [1, "total-cell"], [1, "actions-cell", 3, "click"], [1, "action-wrap"], [1, "action-btn", 3, "click"], ["width", "18", "height", "4", "viewBox", "0 0 18 4", "fill", "currentColor"], ["cx", "2", "cy", "2", "r", "2"], ["cx", "9", "cy", "2", "r", "2"], ["cx", "16", "cy", "2", "r", "2"], [1, "dropdown-menu"], [1, "menu-item", 3, "routerLink"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "menu-item"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"], [1, "menu-item", "danger"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["colspan", "6", 1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "2"]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function OrdersComponent_Template_div_click_0_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Order Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Track, process, and fulfill your customer requests.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "line", 6)(10, "line", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Create New Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275text(15, "Total Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275text(20, "\u2191 12.4% from last month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "span", 10);
      \u0275\u0275text(23, "Active Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 11);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9)(29, "span", 10);
      \u0275\u0275text(30, "Average Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 11);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 14);
      \u0275\u0275text(35, "\u2193 2.1% this week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 9)(37, "span", 10);
      \u0275\u0275text(38, "Growth Target");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 15)(40, "span", 16);
      \u0275\u0275text(41, "84%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 17);
      \u0275\u0275element(43, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 19)(45, "div", 20);
      \u0275\u0275repeaterCreate(46, OrdersComponent_For_47_Template, 2, 3, "button", 21, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 22)(49, "div", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 24);
      \u0275\u0275element(51, "circle", 25)(52, "line", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "input", 27);
      \u0275\u0275listener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "button", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 29);
      \u0275\u0275element(56, "polygon", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Advanced Filters ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "button", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 29);
      \u0275\u0275element(60, "path", 31)(61, "polyline", 32)(62, "line", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " Export CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(64, OrdersComponent_Conditional_64_Template, 4, 0, "div", 34)(65, OrdersComponent_Conditional_65_Template, 23, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 6, ctx.totalRevenue(), "1.0-0"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.activeOrdersCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u{1F550} ", ctx.activeOrdersCount(), " pending shipment");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(33, 9, ctx.averageOrderValue(), "1.2-2"));
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.statusTabs);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.loading() ? 64 : 65);
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  font-family: "Inter", sans-serif;\n}\n.orders-page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  background: #f5f6fa;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.header-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.btn-create[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.1s;\n}\n.btn-create[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 22px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .06);\n  border: 1px solid #e5e7eb;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.1;\n}\n.stat-trend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.stat-trend.positive[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-trend.negative[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-trend.neutral[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.growth-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.growth-pct[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n}\n.growth-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.growth-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #7c3aed);\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 0;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-bottom: none;\n  border-radius: 14px 14px 0 0;\n  padding: 14px 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.tab[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 7px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  font-weight: 600;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 7px 12px;\n  color: #9ca3af;\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #374151;\n  outline: none;\n  width: 200px;\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n  white-space: nowrap;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 14px 14px;\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: .6px;\n  text-transform: uppercase;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f9fafb;\n  transition: background 0.15s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 14px;\n  color: #374151;\n  vertical-align: middle;\n}\n.order-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2563eb;\n  font-family: monospace;\n  font-size: 13px;\n}\n.customer-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #7c3aed);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.customer-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.customer-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 13px;\n}\n.total-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n  gap: 5px;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge--pending[_ngcontent-%COMP%] {\n  background: #fefce8;\n  color: #ca8a04;\n}\n.badge--processing[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.badge--shipped[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.badge--delivered[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge--cancelled[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.badge--refunded[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.action-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #111827;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 6px);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);\n  min-width: 160px;\n  z-index: 50;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeIn 0.12s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.menu-item.danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.menu-item.danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  gap: 16px;\n  color: #6b7280;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 14px 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px !important;\n  color: #9ca3af;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  opacity: .4;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.table-footer[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n@media (max-width: 900px) {\n  .orders-page[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .toolbar-right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n}\n/*# sourceMappingURL=orders.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<div class="orders-page" (click)="closeMenu()">

  <!-- Page Header -->
  <div class="page-header">
    <div class="header-left">
      <h1>Order Management</h1>
      <p class="header-sub">Track, process, and fulfill your customer requests.</p>
    </div>
    <button class="btn-create">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
      Create New Order
    </button>
  </div>

  <!-- Stat Cards -->
  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-label">Total Revenue</span>
      <span class="stat-value">\${{ totalRevenue() | number:'1.0-0' }}</span>
      <span class="stat-trend positive">\u2191 12.4% from last month</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">Active Orders</span>
      <span class="stat-value">{{ activeOrdersCount() }}</span>
      <span class="stat-trend neutral">\u{1F550} {{ activeOrdersCount() }} pending shipment</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">Average Value</span>
      <span class="stat-value">\${{ averageOrderValue() | number:'1.2-2' }}</span>
      <span class="stat-trend negative">\u2193 2.1% this week</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">Growth Target</span>
      <div class="growth-bar-wrap">
        <span class="stat-value growth-pct">84%</span>
        <div class="growth-bar"><div class="growth-fill" style="width: 84%"></div></div>
      </div>
    </div>
  </div>

  <!-- Toolbar -->
  <div class="toolbar">
    <div class="status-tabs">
      @for (tab of statusTabs; track tab.value) {
        <button
          class="tab"
          [class.active]="activeStatus() === tab.value"
          (click)="activeStatus.set(tab.value); $event.stopPropagation()">
          {{ tab.label }}
        </button>
      }
    </div>
    <div class="toolbar-right">
      <div class="search-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search orders, customers..."
          [ngModel]="searchQuery()"
          (ngModelChange)="searchQuery.set($event)" />
      </div>
      <button class="btn-outline">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
        Advanced Filters
      </button>
      <button class="btn-outline">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Export CSV
      </button>
    </div>
  </div>

  <!-- Table -->
  @if (loading()) {
    <div class="loading-state">
      <div class="spinner"></div>
      <span>Loading orders...</span>
    </div>
  } @else {
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER NAME</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TOTAL AMOUNT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          @for (order of filteredOrders(); track order.id) {
            <tr>
              <td class="order-num">{{ order.orderNumber }}</td>
              <td class="customer-cell">
                <div class="avatar" [attr.data-initials]="getInitials(order.customer.name)">
                  {{ getInitials(order.customer.name) }}
                </div>
                <div class="customer-info">
                  <span class="customer-name">{{ order.customer.name }}</span>
                  <span class="customer-email">{{ order.customer.email }}</span>
                </div>
              </td>
              <td class="date-cell">{{ order.createdAt | date:'MMM d, yyyy' }}</td>
              <td>
                <span class="badge badge--{{ order.status }}">{{ order.status }}</span>
              </td>
              <td class="total-cell">\${{ order.total | number:'1.2-2' }}</td>
              <td class="actions-cell" (click)="$event.stopPropagation()">
                <div class="action-wrap">
                  <button class="action-btn" (click)="toggleMenu(order.id)">
                    <svg width="18" height="4" viewBox="0 0 18 4" fill="currentColor">
                      <circle cx="2" cy="2" r="2"/><circle cx="9" cy="2" r="2"/><circle cx="16" cy="2" r="2"/>
                    </svg>
                  </button>
                  @if (openMenuId() === order.id) {
                    <div class="dropdown-menu">
                      <a [routerLink]="['/orders', order.id]" class="menu-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                        View Details
                      </a>
                      <button class="menu-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                        </svg>
                        Update Status
                      </button>
                      <button class="menu-item danger">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>
                        </svg>
                        Cancel Order
                      </button>
                    </div>
                  }
                </div>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="6" class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                  <rect x="9" y="3" width="6" height="4" rx="2"/>
                </svg>
                <p>No orders found</p>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div class="table-footer">
      <span class="showing-label">Showing {{ filteredOrders().length }} of {{ allOrders().length }} orders</span>
    </div>
  }
</div>
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";\n\n/* src/app/pages/orders/orders.css */\n:host {\n  font-family: "Inter", sans-serif;\n}\n.orders-page {\n  padding: 32px 40px;\n  background: #f5f6fa;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n.page-header h1 {\n  font-size: 26px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.header-sub {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.btn-create {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.1s;\n}\n.btn-create:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.stat-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 22px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .06);\n  border: 1px solid #e5e7eb;\n}\n.stat-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.stat-value {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.1;\n}\n.stat-trend {\n  font-size: 12px;\n  font-weight: 500;\n}\n.stat-trend.positive {\n  color: #16a34a;\n}\n.stat-trend.negative {\n  color: #dc2626;\n}\n.stat-trend.neutral {\n  color: #6b7280;\n}\n.growth-bar-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.growth-pct {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n}\n.growth-bar {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.growth-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #7c3aed);\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 0;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-bottom: none;\n  border-radius: 14px 14px 0 0;\n  padding: 14px 16px;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-tabs {\n  display: flex;\n  gap: 4px;\n}\n.tab {\n  background: none;\n  border: none;\n  padding: 7px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.tab:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.tab.active {\n  background: #eff6ff;\n  color: #2563eb;\n  font-weight: 600;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 7px 12px;\n  color: #9ca3af;\n}\n.search-wrap input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #374151;\n  outline: none;\n  width: 200px;\n}\n.search-wrap input::placeholder {\n  color: #9ca3af;\n}\n.btn-outline {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n  white-space: nowrap;\n}\n.btn-outline:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.table-wrap {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 14px 14px;\n  overflow: hidden;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nthead tr {\n  border-bottom: 1px solid #f3f4f6;\n}\nthead th {\n  padding: 12px 20px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: .6px;\n  text-transform: uppercase;\n}\ntbody tr {\n  border-bottom: 1px solid #f9fafb;\n  transition: background 0.15s;\n}\ntbody tr:last-child {\n  border-bottom: none;\n}\ntbody tr:hover {\n  background: #f9fafb;\n}\ntbody td {\n  padding: 16px 20px;\n  font-size: 14px;\n  color: #374151;\n  vertical-align: middle;\n}\n.order-num {\n  font-weight: 600;\n  color: #2563eb;\n  font-family: monospace;\n  font-size: 13px;\n}\n.customer-cell {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #7c3aed);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.customer-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.customer-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.customer-email {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.date-cell {\n  color: #6b7280;\n  font-size: 13px;\n}\n.total-cell {\n  font-weight: 700;\n  color: #111827;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n  gap: 5px;\n}\n.badge::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge--pending {\n  background: #fefce8;\n  color: #ca8a04;\n}\n.badge--processing {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.badge--shipped {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.badge--delivered {\n  background: #ecfdf5;\n  color: #059669;\n}\n.badge--cancelled {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.badge--refunded {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.actions-cell {\n  text-align: right;\n}\n.action-wrap {\n  position: relative;\n  display: inline-block;\n}\n.action-btn {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.action-btn:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #111827;\n}\n.dropdown-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 6px);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);\n  min-width: 160px;\n  z-index: 50;\n  overflow: hidden;\n  animation: fadeIn 0.12s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s;\n}\n.menu-item:hover {\n  background: #f9fafb;\n}\n.menu-item.danger {\n  color: #dc2626;\n}\n.menu-item.danger:hover {\n  background: #fef2f2;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  gap: 16px;\n  color: #6b7280;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 14px 14px;\n}\n.spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px !important;\n  color: #9ca3af;\n}\n.empty-state svg {\n  margin-bottom: 12px;\n  opacity: .4;\n}\n.empty-state p {\n  font-size: 14px;\n  margin: 0;\n}\n.table-footer {\n  margin-top: 12px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n@media (max-width: 900px) {\n  .orders-page {\n    padding: 20px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .toolbar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .toolbar-right {\n    flex-wrap: wrap;\n  }\n  .search-wrap input {\n    width: 140px;\n  }\n}\n/*# sourceMappingURL=orders.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "app/pages/orders/orders.ts", lineNumber: 15 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-XUAXXGJI.js.map
