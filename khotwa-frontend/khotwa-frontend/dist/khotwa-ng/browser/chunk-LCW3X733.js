import {
  __spreadProps,
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-FQARK65W.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this._notifs = [
      { id: "n1", titre: "SLA Alert", message: 'Task "Prototype UI" blocked for 16 days', type: "warning", date: /* @__PURE__ */ new Date(), lu: false },
      { id: "n2", titre: "Deadline demain", message: "Livraison des maquettes \u2014 24h restantes", type: "error", date: /* @__PURE__ */ new Date(), lu: false },
      { id: "n3", titre: "Validation required", message: "Sara submitted a task for validation", type: "info", date: /* @__PURE__ */ new Date(), lu: false }
    ];
  }
  notifs() {
    return this._notifs;
  }
  nonLus() {
    return this._notifs.filter((n) => !n.lu).length;
  }
  markAllRead() {
    this._notifs = this._notifs.map((n) => __spreadProps(__spreadValues({}, n), { lu: true }));
  }
  markRead(id) {
    this._notifs = this._notifs.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { lu: true }) : n);
  }
  static {
    this.\u0275fac = function NotificationService_Factory(t) {
      return new (t || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-LCW3X733.js.map
