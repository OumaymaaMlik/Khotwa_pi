import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SubscriptionService } from '../../../core/services/subscription.service';
import {
  Subscription,
  PlanOffer,
  PlanType,
  SubscriptionStatus
} from '../../../core/models/subscription.model';

type FilterType = 'ALL' | PlanType;
type AdminTab = 'subscribers' | 'plans' | 'analytics';
type RevenueView = 'summary' | 'by-user' | 'by-month' | 'by-day';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  filteredSubscriptions: Subscription[] = [];
  plans: PlanOffer[] = [];

  activeTab: AdminTab = 'subscribers';
  filtre: FilterType = 'ALL';
  searchQuery = '';
  revenueView: RevenueView = 'summary';

  // ── Analytics data from backend ───────────────────────────────────────────
  revenueSummary: { totalRevenue: number; totalPaidSubscriptions: number } | null = null;
  revenueByUser: any[] = [];
  revenueByUserTotal: any[] = [];
  revenueByMonth: any[] = [];
  revenueByDay: any[] = [];
  analyticsLoading = false;
  private analyticsCallsDone = 0;

  showPlanModal = false;
  showConfirmSuspend = false;
  editMode = false;
  planSaving = false;
  planFormError = '';
  suspendTarget: Subscription | null = null;
  planForm: PlanOffer = this.getEmptyPlan();

  private svgMap: Record<string, string> = {
    users:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    box:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    chart:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    search:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    edit:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    trash:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
    renew:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
    suspend:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
    card:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    plus:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    trending: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    dollar:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    user:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  };
  private iconCache: Record<string, SafeHtml> = {};

  constructor(private subscriptionService: SubscriptionService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadSubscriptions();
    this.loadPlans();
  }

  icon(name: string): SafeHtml {
    if (!this.iconCache[name]) {
      this.iconCache[name] = this.sanitizer.bypassSecurityTrustHtml(this.svgMap[name] ?? '');
    }
    return this.iconCache[name];
  }

  // ── Tab switching — load analytics lazily ─────────────────────────────────
  switchTab(tab: AdminTab): void {
    this.activeTab = tab;
    if (tab === 'analytics' && !this.revenueSummary && !this.analyticsLoading) {
      this.loadAllAnalytics();
    }
  }

  loadAllAnalytics(): void {
    this.analyticsLoading = true;
    this.analyticsCallsDone = 0;

    this.subscriptionService.getRevenueSummary().subscribe({
      next: (d) => { this.revenueSummary = d; this.onAnalyticsDone(); },
      error: () => this.onAnalyticsDone()
    });
    this.subscriptionService.getRevenueByUser().subscribe({
      next: (d) => { this.revenueByUser = d ?? []; this.onAnalyticsDone(); },
      error: () => this.onAnalyticsDone()
    });
    this.subscriptionService.getRevenueByUserTotal().subscribe({
      next: (d) => { this.revenueByUserTotal = d ?? []; this.onAnalyticsDone(); },
      error: () => this.onAnalyticsDone()
    });
    this.subscriptionService.getRevenueByMonth().subscribe({
      next: (d) => { this.revenueByMonth = d ?? []; this.onAnalyticsDone(); },
      error: () => this.onAnalyticsDone()
    });
    this.subscriptionService.getRevenueByDay().subscribe({
      next: (d) => { this.revenueByDay = d ?? []; this.onAnalyticsDone(); },
      error: () => this.onAnalyticsDone()
    });
  }

  private onAnalyticsDone(): void {
    this.analyticsCallsDone++;
    if (this.analyticsCallsDone >= 5) this.analyticsLoading = false;
  }

  // ── Chart scaling ─────────────────────────────────────────────────────────
  getMaxMonthRevenue(): number { return Math.max(...this.revenueByMonth.map((r: any) => r.total ?? 0), 1); }
  getMaxDayRevenue(): number { return Math.max(...this.revenueByDay.map((r: any) => r.total ?? 0), 1); }
  getMaxUserRevenue(): number { return Math.max(...this.revenueByUserTotal.map((r: any) => r.total ?? 0), 1); }

  // ── KPIs ──────────────────────────────────────────────────────────────────
  get kpiTotal(): number { return this.subscriptions.length; }
  get kpiFree(): number { return this.subscriptions.filter(s => s.plan === 'FREE').length; }
  get kpiPremium(): number { return this.subscriptions.filter(s => s.plan === 'PREMIUM').length; }
  get kpiInstitution(): number { return this.subscriptions.filter(s => s.plan === 'INSTITUTIONAL').length; }
  get kpiPaid(): number { return this.subscriptions.filter(s => !!s.paiementRef).length; }
  get kpiExpired(): number { return this.subscriptions.filter(s => s.statut === 'EXPIRED').length; }
  get activeRate(): number {
    if (!this.subscriptions.length) return 0;
    return Math.round((this.subscriptions.filter(s => s.statut === 'ACTIVE').length / this.subscriptions.length) * 100);
  }

  // ── Load ──────────────────────────────────────────────────────────────────
  loadSubscriptions(): void {
    this.subscriptionService.getAllSubscriptions().subscribe({
      next: (data: Subscription[]) => { this.subscriptions = data ?? []; this.applyFilters(); },
      error: (err: HttpErrorResponse) => console.error(err)
    });
  }

  loadPlans(): void {
    this.subscriptionService.getAvailablePlans().subscribe({
      next: (data: PlanOffer[]) => { this.plans = data ?? []; },
      error: (err: HttpErrorResponse) => console.error(err)
    });
  }

  // ── Filters ───────────────────────────────────────────────────────────────
  onSearch(): void { this.applyFilters(); }
  setFilter(value: FilterType): void { this.filtre = value; this.applyFilters(); }

  applyFilters(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredSubscriptions = this.subscriptions.filter(s => {
      const matchFilter = this.filtre === 'ALL' || s.plan === this.filtre;
      const matchSearch = !q ||
        String(s.idSubscription ?? '').includes(q) ||
        (s.plan ?? '').toLowerCase().includes(q) ||
        (s.statut ?? '').toLowerCase().includes(q) ||
        (s.paiementRef ?? '').toLowerCase().includes(q) ||
        (s.user?.lastName ?? '').toLowerCase().includes(q) ||
        (s.user?.firstName ?? '').toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }

  // ── User helpers ──────────────────────────────────────────────────────────
  getUserInitials(s: Subscription): string {
    const p = s.user?.firstName?.trim() ?? ''; const n = s.user?.lastName?.trim() ?? '';
    return `${p ? p.charAt(0).toUpperCase() : ''}${n ? n.charAt(0).toUpperCase() : ''}` || 'U';
  }
  getFullName(s: Subscription): string {
    const full = `${s.user?.firstName?.trim() ?? ''} ${s.user?.lastName?.trim() ?? ''}`.trim();
    return full || `User #${s.idUser ?? '-'}`;
  }
  getUserEmail(s: Subscription): string { return (s.user as any)?.email?.trim() || '-'; }
  hasAvatar(s: Subscription): boolean { return !!s.user?.avatar; }
  getAvatarUrl(s: Subscription): string {
    const a = s.user?.avatar?.trim();
    return a ? (a.startsWith('http') ? a : `/api/uploads/${a}`) : '';
  }
  getAvatarColor(s: Subscription): string {
    const colors = ['linear-gradient(135deg,#E8622A,#FF9A5C)', 'linear-gradient(135deg,#7850c8,#a480f0)', 'linear-gradient(135deg,#27AE7A,#5de0a8)', 'linear-gradient(135deg,#2ABFBF,#6ee7e7)'];
    return colors[(s.user?.idUser ?? s.idUser ?? 0) % colors.length];
  }
  getAvatarColorFromId(id: number): string {
    const colors = ['linear-gradient(135deg,#E8622A,#FF9A5C)', 'linear-gradient(135deg,#7850c8,#a480f0)', 'linear-gradient(135deg,#27AE7A,#5de0a8)', 'linear-gradient(135deg,#2ABFBF,#6ee7e7)'];
    return colors[(id ?? 0) % colors.length];
  }
  getRowInitials(row: any): string {
    return `${(row.prenom ?? '').charAt(0)}${(row.nom ?? '').charAt(0)}`.toUpperCase() || '?';
  }
  getOfferLabel(s: Subscription): string { return s.planOffer?.label ?? s.plan; }
  getAmountPaid(s: Subscription): string { const p = s.planOffer?.prix ?? 0; return p === 0 ? 'Free' : p.toFixed(2); }
  getPaymentRef(s: Subscription): string { return (s.paiementRef ?? '').slice(0, 20); }

  // ── Plans CRUD ────────────────────────────────────────────────────────────
  openAddPlan(): void { this.editMode = false; this.planFormError = ''; this.planForm = this.getEmptyPlan(); this.showPlanModal = true; }
  openEditPlan(plan: PlanOffer): void {
    this.editMode = true; this.planFormError = '';
    this.planForm = { ...plan };
    this.showPlanModal = true;
  }
  closePlanModal(): void { this.showPlanModal = false; this.planSaving = false; this.planFormError = ''; this.planForm = this.getEmptyPlan(); }

  savePlan(): void {
    this.planFormError = '';
    if (!this.planForm.label?.trim()) { this.planFormError = 'Label is required.'; return; }
    if (this.planForm.prix == null || Number(this.planForm.prix) < 0) { this.planFormError = 'Price must be 0 or more.'; return; }
    if (this.planForm.duree == null || Number(this.planForm.duree) === 0) { this.planFormError = 'Duration cannot be 0.'; return; }

    const payload: PlanOffer = {
      id: this.planForm.id, type: this.planForm.type,
      label: this.planForm.label.trim(), prix: Number(this.planForm.prix),
      duree: Number(this.planForm.duree), description: (this.planForm.description ?? '').trim(),
      avantages: (this.planForm.avantages ?? '').trim()
    };
    this.planSaving = true;
    const numId = payload.id != null ? Number(payload.id) : NaN;

    if (!isNaN(numId) && numId > 0) {
      this.subscriptionService.updatePlan(numId, payload).subscribe({
        next: () => { this.planSaving = false; this.closePlanModal(); this.loadPlans(); },
        error: (err: HttpErrorResponse) => { console.error(err); this.planSaving = false; this.planFormError = 'Failed to update plan.'; }
      });
    } else {
      this.subscriptionService.addPlan(payload).subscribe({
        next: () => { this.planSaving = false; this.closePlanModal(); this.loadPlans(); },
        error: (err: HttpErrorResponse) => { console.error(err); this.planSaving = false; this.planFormError = 'Failed to create plan.'; }
      });
    }
  }

  deletePlan(plan: PlanOffer): void {
    if (!confirm(`Delete plan "${plan.label}"?`)) return;
    const id = Number(plan.id);
    if (isNaN(id) || id <= 0) return;
    this.subscriptionService.deletePlan(id).subscribe({ next: () => this.loadPlans(), error: console.error });
  }

  // ── Subscription actions ──────────────────────────────────────────────────
  renewSubscription(s: Subscription): void {
    if (!s.idSubscription) return;
    this.subscriptionService.renewSubscription(s.idSubscription).subscribe({ next: () => this.loadSubscriptions(), error: console.error });
  }
  confirmSuspend(s: Subscription): void { this.suspendTarget = s; this.showConfirmSuspend = true; }
  cancelSuspend(): void { this.suspendTarget = null; this.showConfirmSuspend = false; }
  executeSuspend(): void {
    if (!this.suspendTarget?.idSubscription) return;
    this.subscriptionService.suspendSubscription(this.suspendTarget.idSubscription).subscribe({
      next: () => { this.cancelSuspend(); this.loadSubscriptions(); }, error: console.error
    });
  }
  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      if (this.showPlanModal) this.closePlanModal();
      if (this.showConfirmSuspend) this.cancelSuspend();
    }
  }

  getPlanBadgeClass(plan: PlanType): string {
    return ({ FREE: 'kh-badge--neutral', PREMIUM: 'kh-badge--orange', INSTITUTIONAL: 'kh-badge--violet' } as any)[plan] ?? 'kh-badge--neutral';
  }
  getStatusBadgeClass(status: SubscriptionStatus): string {
    return ({ ACTIVE: 'kh-badge--green', EXPIRED: 'kh-badge--red', PENDING: 'kh-badge--orange', CANCELLED: 'kh-badge--neutral' } as any)[status] ?? 'kh-badge--neutral';
  }
  getRemainingDays(dateFin: Date | string): number {
    const end = new Date(dateFin); const today = new Date();
    end.setHours(0,0,0,0); today.setHours(0,0,0,0);
    return Math.max(Math.ceil((end.getTime() - today.getTime()) / 86400000), 0);
  }
  getAvantagesList(avantages: string): string[] {
    return (avantages || '').split('\n').map(i => i.trim()).filter(Boolean);
  }
  private getEmptyPlan(): PlanOffer { return { type: 'FREE', label: '', prix: 0, duree: 30, description: '', avantages: '' }; }
}