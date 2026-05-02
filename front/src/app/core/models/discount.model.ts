export interface Discount {
  id?: number;
  userId?: number | null;
  userFullName?: string | null;
  userEmail?: string | null;
  planOfferId: number;
  planOfferLabel?: string;
  planOfferPrix?: number;
  planOfferType?: string;
  discountPercent: number;
  discountedPrice?: number;
  validFrom: string; // ISO datetime
  validUntil: string;
  status?: 'ACTIVE' | 'EXPIRED' | 'USED';
  usedAt?: string | null;
  notes?: string | null;
  createdAt?: string;
}

export interface CreateDiscountRequest {
  userId?: number | null;
  planOfferId: number;
  discountPercent: number;
  validFrom: string;
  validUntil: string;
  notes?: string | null;
}