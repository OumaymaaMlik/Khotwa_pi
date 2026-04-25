import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Subscription,
  PlanOffer,
  PlanType
} from '../models/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private base = 'http://localhost:8084/khotwa';

  constructor(private http: HttpClient) {}

  getAllSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/subscriptions`);
  }

  getAdminSubscriptionDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/subscriptions/admin/details`);
  }

  getRevenueSummary(): Observable<any> {
    return this.http.get<any>(`${this.base}/subscriptions/admin/revenue/summary`);
  }

  getRevenueByDay(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/subscriptions/admin/revenue/day`);
  }

  getRevenueByMonth(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/subscriptions/admin/revenue/month`);
  }

  getRevenueByUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/subscriptions/admin/revenue/user`);
  }

  getRevenueByUserTotal(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/subscriptions/admin/revenue/user-total`);
  }

  getCurrentSubscriptionByUser(userId: number): Observable<Subscription> {
    return this.http.get<Subscription>(
      `${this.base}/subscriptions/user/${userId}/active`
    );
  }

  getAvailablePlans(): Observable<PlanOffer[]> {
    return this.http.get<PlanOffer[]>(`${this.base}/plans`);
  }

  selectPlan(userId: number, planOfferId: number): Observable<Subscription> {
    return this.http.post<Subscription>(
      `${this.base}/subscriptions/select-plan?userId=${userId}&planOfferId=${planOfferId}`,
      {}
    );
  }

  updateAutoRenew(subscriptionId: number, value: boolean): Observable<Subscription> {
    return this.http.put<Subscription>(
      `${this.base}/subscriptions/${subscriptionId}/auto-renew?value=${value}`,
      {}
    );
  }

  confirmPaypalPayment(
    userId: number,
    planOfferId: number,
    paypalOrderId: string,
    payerId: string,
    montantPaye?: number | null,
    discountPercent?: number | null
  ): Observable<Subscription> {
    return this.http.post<Subscription>(
      `${this.base}/payments/confirm`,
      {
        userId,
        planOfferId,
        paypalOrderId,
        payerId,
        // Inclus dans paiementRef côté backend si une remise était active
        montantPaye:     montantPaye     ?? null,
        discountPercent: discountPercent ?? null
      }
    );
  }

  getPaymentStatus(subscriptionId: number): Observable<any> {
    return this.http.get<any>(`${this.base}/payments/status/${subscriptionId}`);
  }

  cancelPending(subscriptionId: number): Observable<Subscription> {
    return this.http.put<Subscription>(
      `${this.base}/subscriptions/${subscriptionId}/cancel-pending`,
      null
    );
  }

  renewSubscription(id: number): Observable<Subscription> {
    return this.http.put<Subscription>(
      `${this.base}/subscriptions/${id}/renew`,
      null
    );
  }

  suspendSubscription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/subscriptions/${id}`);
  }

  addPlan(plan: PlanOffer): Observable<PlanOffer> {
    return this.http.post<PlanOffer>(`${this.base}/plans/add`, plan);
  }

  updatePlan(id: number, plan: PlanOffer): Observable<PlanOffer> {
    return this.http.put<PlanOffer>(`${this.base}/plans/${id}`, plan);
  }

  deletePlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/plans/${id}`);
  }

  requestPlanChange(userId: number, planType: PlanType): Observable<Subscription> {
    return this.http.post<Subscription>(
      `${this.base}/subscriptions/request-plan-change`,
      { idUser: userId, plan: planType }
    );
  }

  adminPending(subscriptionId: number): Observable<Subscription> {
    return this.http.put<Subscription>(
      `${this.base}/subscriptions/${subscriptionId}/admin-pending`,
      null
    );
  }

  /** Détails parsés d'un paiement (orderId, payerId, montant, remise…) */
  getPaymentDetails(subscriptionId: number): Observable<any> {
    return this.http.get<any>(`${this.base}/payments/details/${subscriptionId}`);
  }

  /** Tous les abonnements qui ont bénéficié d'une remise */
  getPaymentsWithDiscount(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/payments/with-discount`);
  }


  getUpgradeSuggestion(
    userId: number,
    premiumThreshold: number = 0,
    discountPercent: number = 20
  ): Observable<any> {
    return this.http.get<any>(
      `${this.base}/subscriptions/user/${userId}/upgrade-suggestion` +
      `?premiumThreshold=${premiumThreshold}&discountPercent=${discountPercent}`
    );
  }
}