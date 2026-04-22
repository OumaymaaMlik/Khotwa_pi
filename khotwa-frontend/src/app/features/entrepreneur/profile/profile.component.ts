import { Component, OnInit, Inject } from '@angular/core';
import { SubscriptionService } from '../../../core/services/subscription.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription, PlanOffer, SubscriptionStatus } from '../../../core/models/subscription.model';
import { PlanType } from '../../../core/models/user.model';

declare var paypal: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentSubscription: Subscription | null = null;
  plans: PlanOffer[] = [];
  isProcessing = false;

  showModal         = false;
  selectedPlan: PlanOffer | null = null;
  isDowngrade       = false;
  modalAutoRenew    = false;
  modalNotifyBefore = false;
  modalStartDate    = '';

  showPayment       = false;
  paymentProcessing = false;
  paymentSuccess    = false;
  paymentError      = '';
  paypalRendered    = false;

  get currentUserId(): number {
    return this.authService.currentUser?.idUser ?? 0;
  }

  constructor(
    @Inject(SubscriptionService) private subscriptionService: SubscriptionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCurrentSubscription();
    this.loadPlans();
  }

  loadCurrentSubscription(): void {
    if (!this.currentUserId) return;

    this.subscriptionService.getCurrentSubscriptionByUser(this.currentUserId).subscribe({
      next: (data: Subscription) => {
        this.currentSubscription = data;
      },
      error: (err) => {
        console.error('subscription error =', err);
        this.currentSubscription = null;
      }
    });
  }

  loadPlans(): void {
    this.subscriptionService.getAvailablePlans().subscribe({
      next: (data: PlanOffer[]) => { this.plans = data; },
      error: (err: any) => { console.error('Error loading plans', err); }
    });
  }

  getStatusLabel(status: SubscriptionStatus): string {
    const labels: Record<string, string> = {
      ACTIVE: 'Active', EXPIRED: 'Expired', CANCELLED: 'Cancelled', PENDING: 'Pending'
    };
    return labels[status] ?? status;
  }

  // ── Takes PlanOffer (matches template) ──────────────────────────────────
  isCurrentPlan(plan: PlanOffer): boolean {
    if (!this.currentSubscription) return false;
    if (this.currentSubscription.planOffer?.id != null && plan.id != null) {
      return this.currentSubscription.planOffer.id === plan.id;
    }
    return this.currentSubscription.plan === plan.type;
  }

  getButtonLabel(plan: PlanOffer): string {
    if (this.isCurrentPlan(plan)) return 'Current Plan';
    if (!this.currentSubscription) return 'Choose Plan';
    return this.isUpgrade(plan.type) ? 'Upgrade now' : 'Switch at renewal';
  }
  getDuration(plan: PlanOffer): string {
  if (!plan.duree || plan.duree <= 0) return 'Unlimited';
  return `${plan.duree} days`;
}

  canChangePlan(type: PlanType): boolean {
    if (!this.currentSubscription) return true;
    if (this.currentSubscription.planOffer?.id != null) {
      const activePlanType = this.currentSubscription.planOffer.type;
      const activePlanId   = this.currentSubscription.planOffer.id;
      if (activePlanType !== type) return true;
      return this.plans.filter(p => p.type === type && p.id !== activePlanId).length > 0;
    }
    return this.currentSubscription.plan !== type;
  }

  isUpgrade(type: PlanType): boolean {
    if (!this.currentSubscription) return true;
    return this.getPlanRank(type) > this.getPlanRank(this.currentSubscription.plan);
  }

  getPlanRank(plan: PlanType): number {
    switch (plan) {
      case 'FREE':          return 1;
      case 'PREMIUM':       return 2;
      case 'INSTITUTIONAL': return 3;
    }
  }

  getRemainingDays(): number | string {
  if (!this.currentSubscription) return 0;

  if (this.currentSubscription.plan === 'FREE') {
    return '∞';
  }

  if (!this.currentSubscription.dateFin) return 0;

  const diff = new Date(this.currentSubscription.dateFin).getTime() - Date.now();
  return Math.max(Math.ceil(diff / 86_400_000), 0);
}

  getAvantagesList(avantages: string): string[] {
    if (!avantages) return [];
    return avantages.split('\n').map((a: string) => a.trim()).filter((a: string) => a.length > 0);
  }

  toggleAutoRenew(): void {
    if (!this.currentSubscription || this.isProcessing) return;
    const subscriptionId = this.currentSubscription.idSubscription;
    if (subscriptionId == null) return;
    const newValue = !this.currentSubscription.autoRenouvellement;
    if (!window.confirm(newValue ? 'Enable auto-renewal?' : 'Disable auto-renewal?')) return;
    this.isProcessing = true;
    this.subscriptionService.updateAutoRenew(subscriptionId, newValue).subscribe({
      next: (updated: Subscription) => {
        this.currentSubscription = { ...this.currentSubscription!, autoRenouvellement: updated.autoRenouvellement ?? newValue };
        this.isProcessing = false;
      },
      error: () => {
        this.currentSubscription = { ...this.currentSubscription!, autoRenouvellement: newValue };
        this.isProcessing = false;
      }
    });
  }

  openPlanModal(plan: PlanOffer): void {
    if (this.isCurrentPlan(plan) || this.isProcessing) return;
    this.selectedPlan      = plan;
    this.isDowngrade       = this.currentSubscription
      ? this.getPlanRank(plan.type) < this.getPlanRank(this.currentSubscription.plan) : false;
    this.modalAutoRenew    = this.currentSubscription?.autoRenouvellement ?? false;
    this.modalNotifyBefore = false;
    this.showModal         = true;
    this.showPayment       = false;
    this.paymentSuccess    = false;
    this.paymentError      = '';
    this.paypalRendered    = false;
    this.modalStartDate    = this.isDowngrade && this.currentSubscription?.dateFin
      ? new Date(this.currentSubscription.dateFin).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0];
  }

  closeModal(): void {
    this.showModal = false; this.selectedPlan = null;
    this.showPayment = false; this.paymentSuccess = false;
    this.paymentError = ''; this.paypalRendered = false;
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) this.closeModal();
  }

 proceedToPayment(): void {
  if (!this.selectedPlan || !this.currentUserId) {
    this.paymentError = 'Missing selected plan or user.';
    return;
  }

  this.paymentError = '';

  // Plan gratuit
  if (this.selectedPlan.prix === 0) {
    this._doFreeSubscribe();
    return;
  }

  // Plan payant
  this.isProcessing = true;

  this.subscriptionService.selectPlan(this.currentUserId, this.selectedPlan.id!).subscribe({
    next: (res: Subscription) => {
      this.currentSubscription = res;
      this.isProcessing = false;

      this.showPayment = true;
      this.paypalRendered = false;

      setTimeout(() => this._mountPaypalButton(), 150);
    },
    error: (err: any) => {
      console.error('Erreur démarrage paiement', err);
      this.isProcessing = false;
      this.paymentError = 'Unable to start payment. Please try again.';
    }
    
  });
}
  backToDetails(): void {
    if (this.currentSubscription?.idSubscription && this.currentSubscription.statut === 'PENDING') {
      this.subscriptionService.cancelPending(this.currentSubscription.idSubscription).subscribe({
        next: (res: Subscription) => { this.currentSubscription = res; }
      });
    }
    this.showPayment = false; this.paymentError = ''; this.paypalRendered = false;
  }

  private _mountPaypalButton(): void {
    const paypalSDK = (window as any)['paypal'];
    if (!paypalSDK) { this.paymentError = '⚠️ PayPal SDK not loaded. Check your index.html.'; return; }
    if (this.paypalRendered) return;
    const prixUSD = ((this.selectedPlan?.prix ?? 0) / 3.1).toFixed(2);
    const nomPlan = this.selectedPlan?.label ?? 'Plan';
    paypalSDK.Buttons({
      style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay' },
      createOrder: (_data: any, actions: any) => actions.order.create({
        purchase_units: [{ description: `Subscription ${nomPlan}`, amount: { currency_code: 'USD', value: prixUSD } }],
        application_context: {
          return_url: 'http://localhost:4200/entrepreneur/profile',
          cancel_url:  'http://localhost:4200/entrepreneur/profile',
          user_action: 'PAY_NOW'
        }
      }),
      onApprove: (data: any, actions: any) => {
        this.paymentProcessing = true;
        return actions.order.capture().then((_d: any) => this._confirmPayment(data.orderID, data.payerID));
      },
      onCancel: () => {
        this.paymentError = 'Payment cancelled.'; this.paymentProcessing = false;
        if (this.currentSubscription?.idSubscription) {
          this.subscriptionService.cancelPending(this.currentSubscription.idSubscription).subscribe({
            next: (res: Subscription) => { this.currentSubscription = res; this.showPayment = false; }
          });
        } else { this.showPayment = false; }
      },
      onError: (err: any) => {
        console.error('PayPal error:', err); this.paymentProcessing = false;
        this.paymentError = 'An error occurred. Please try again.';
        if (this.currentSubscription?.idSubscription) {
          this.subscriptionService.cancelPending(this.currentSubscription.idSubscription).subscribe({
            next: (res: Subscription) => { this.currentSubscription = res; }
          });
        }
      }
    }).render('#paypal-button-container');
    this.paypalRendered = true;
  }

  private _confirmPayment(orderId: string, payerId: string): void {
    if (!this.selectedPlan || !this.currentUserId) {
      this.paymentError = 'Missing data. Please try again.';
      this.paymentProcessing = false; return;
    }
    this.paymentProcessing = true; this.paymentError = '';
    this.subscriptionService.confirmPaypalPayment(this.currentUserId, this.selectedPlan.id!, orderId, payerId).subscribe({
      next: (res: Subscription) => {
        this.paymentProcessing = false; this.paymentSuccess = true;
        this.currentSubscription = res; this.loadCurrentSubscription();
        if (res.idSubscription != null && this.modalAutoRenew !== res.autoRenouvellement) {
          this.subscriptionService.updateAutoRenew(res.idSubscription, this.modalAutoRenew).subscribe();
        }
      },
      error: (err: any) => {
        console.error('Payment confirmation error:', err);
        this.paymentProcessing = false;
        this.paymentError = 'Payment received but activation failed. Please contact support.';
      }
    });
  }

  private _doFreeSubscribe(): void {
    this.isProcessing = true;
    this.subscriptionService.selectPlan(this.currentUserId, this.selectedPlan!.id!).subscribe({
      next: (res: Subscription) => {
        this.currentSubscription = res; this.isProcessing = false; this.paymentSuccess = true;
        if (res.idSubscription != null && this.modalAutoRenew !== res.autoRenouvellement) {
          this.subscriptionService.updateAutoRenew(res.idSubscription, this.modalAutoRenew).subscribe();
        }
        this.loadCurrentSubscription();
      },
      error: () => { this.isProcessing = false; this.paymentError = 'An error occurred. Please try again.'; }
    });
  }
}
