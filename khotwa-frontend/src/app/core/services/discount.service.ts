import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Discount, CreateDiscountRequest } from '../models/discount.model';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  private base = 'http://localhost:8084/khotwa/discounts';

  constructor(private http: HttpClient) {}

  // ── Admin ──────────────────────────────────────────────────────────────────

  getAllDiscounts(): Observable<Discount[]> {
    return this.http.get<Discount[]>(this.base);
  }

  createDiscount(req: CreateDiscountRequest): Observable<Discount> {
    return this.http.post<Discount>(this.base, req);
  }

  deactivateDiscount(id: number): Observable<Discount> {
    return this.http.put<Discount>(`${this.base}/${id}/deactivate`, {});
  }

  deleteDiscount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  // ── Entrepreneur ───────────────────────────────────────────────────────────

  getActiveDiscountsForUser(userId: number): Observable<Discount[]> {
    return this.http.get<Discount[]>(`${this.base}/user/${userId}/active`);
  }

  getBestDiscountForPlan(userId: number, planOfferId: number): Observable<Discount> {
    return this.http.get<Discount>(`${this.base}/user/${userId}/plan/${planOfferId}/best`);
  }

  markDiscountAsUsed(discountId: number): Observable<void> {
    return this.http.put<void>(`${this.base}/${discountId}/use`, {});
  }
}