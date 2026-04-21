import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SubscriptionService {
    constructor(http) {
        this.http = http;
        this.base = '/khotwa'; // ✅ URL relative — passe par le proxy Angular
    }
    getAllSubscriptions() {
        return this.http.get(`${this.base}/subscriptions`);
    }
    getAdminSubscriptionDetails() {
        return this.http.get(`${this.base}/subscriptions/admin/details`);
    }
    getRevenueSummary() {
        return this.http.get(`${this.base}/subscriptions/admin/revenue/summary`);
    }
    getRevenueByDay() {
        return this.http.get(`${this.base}/subscriptions/admin/revenue/day`);
    }
    getRevenueByMonth() {
        return this.http.get(`${this.base}/subscriptions/admin/revenue/month`);
    }
    getRevenueByUser() {
        return this.http.get(`${this.base}/subscriptions/admin/revenue/user`);
    }
    getRevenueByUserTotal() {
        return this.http.get(`${this.base}/subscriptions/admin/revenue/user-total`);
    }
    getCurrentSubscriptionByUser(userId) {
        return this.http.get(`${this.base}/subscriptions/user/${userId}/active`);
    }
    getAvailablePlans() {
        return this.http.get(`${this.base}/plans`);
    }
    selectPlan(userId, planOfferId) {
        return this.http.post(`${this.base}/subscriptions/select-plan?userId=${userId}&planOfferId=${planOfferId}`, {});
    }
    updateAutoRenew(subscriptionId, value) {
        return this.http.put(`${this.base}/subscriptions/${subscriptionId}/auto-renew?value=${value}`, {});
    }
    confirmPaypalPayment(userId, planOfferId, paypalOrderId, payerId) {
        return this.http.post(`${this.base}/payments/confirm`, { userId, planOfferId, paypalOrderId, payerId });
    }
    getPaymentStatus(subscriptionId) {
        return this.http.get(`${this.base}/payments/status/${subscriptionId}`);
    }
    cancelPending(subscriptionId) {
        return this.http.put(`${this.base}/subscriptions/${subscriptionId}/cancel-pending`, null);
    }
    renewSubscription(id) {
        return this.http.put(`${this.base}/subscriptions/${id}/renew`, null);
    }
    suspendSubscription(id) {
        return this.http.delete(`${this.base}/subscriptions/${id}`);
    }
    addPlan(plan) {
        return this.http.post(`${this.base}/plans/add`, plan);
    }
    updatePlan(id, plan) {
        return this.http.put(`${this.base}/plans/${id}`, plan);
    }
    deletePlan(id) {
        return this.http.delete(`${this.base}/plans/${id}`);
    }
    requestPlanChange(userId, planType) {
        return this.http.post(`${this.base}/subscriptions/request-plan-change`, { idUser: userId, plan: planType });
    }
    adminPending(subscriptionId) {
        return this.http.put(`${this.base}/subscriptions/${subscriptionId}/admin-pending`, null);
    }
    static { this.ɵfac = function SubscriptionService_Factory(t) { return new (t || SubscriptionService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubscriptionService, factory: SubscriptionService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubscriptionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=subscription.service.js.map