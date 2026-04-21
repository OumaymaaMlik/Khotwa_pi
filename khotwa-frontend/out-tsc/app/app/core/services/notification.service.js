import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NotificationService {
    constructor(http) {
        this.http = http;
        this.base = '/khotwa'; // ✅ URL relative — passe par le proxy Angular
        this._notifs = [];
    }
    loadExpirationAlert(userId) {
        this.http.get(`${this.base}/subscriptions/user/${userId}/expiration-alert`)
            .subscribe({
            next: (data) => {
                if (data?.hasAlert) {
                    const daysLeft = data.daysLeft;
                    const planLabel = data.planLabel ?? 'your plan';
                    this._notifs = this._notifs.filter(n => n.id !== 'expiration-alert');
                    const notif = {
                        id: 'expiration-alert',
                        titre: daysLeft === 0
                            ? 'Subscription expires today!'
                            : `Subscription expires in ${daysLeft} day(s)`,
                        message: `Your ${planLabel} subscription expires on ${data.dateFin}. Renew now to avoid interruption.`,
                        type: daysLeft <= 1 ? 'error' : 'warning',
                        date: new Date(),
                        lu: false,
                        link: '/entrepreneur/profile'
                    };
                    this._notifs = [notif, ...this._notifs];
                }
            },
            error: () => { } // silencieux — pas d'alerte si l'endpoint échoue
        });
    }
    addNotif(notif) {
        this._notifs = [notif, ...this._notifs];
    }
    notifs() { return this._notifs; }
    nonLus() { return this._notifs.filter(n => !n.lu).length; }
    markAllRead() { this._notifs = this._notifs.map(n => ({ ...n, lu: true })); }
    markRead(id) { this._notifs = this._notifs.map(n => n.id === id ? { ...n, lu: true } : n); }
    static { this.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=notification.service.js.map