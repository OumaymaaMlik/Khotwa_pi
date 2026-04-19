import { Injectable } from '@angular/core';
import { SubscriptionService } from './subscription.service';

export interface Notification {
  id: string; titre: string; message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  date: Date; lu: boolean;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _notifs: Notification[] = [
    { id:'n1', titre:'SLA Alert', message:'Task "Prototype UI" blocked for 16 days', type:'warning', date:new Date(), lu:false },
    { id:'n2', titre:'Deadline demain', message:'Livraison des maquettes — 24h restantes', type:'error', date:new Date(), lu:false },
    { id:'n3', titre:'Validation required', message:'Sara submitted a task for validation', type:'info', date:new Date(), lu:false },
  ];

  constructor(private subscriptionService: SubscriptionService) {}

  notifs() { return this._notifs; }
  nonLus() { return this._notifs.filter(n => !n.lu).length; }
  markAllRead() { this._notifs = this._notifs.map(n => ({ ...n, lu: true })); }
  markRead(id: string) { this._notifs = this._notifs.map(n => n.id === id ? { ...n, lu: true } : n); }

  loadExpirationAlert(userId: number): void {
    this.subscriptionService.getCurrentSubscriptionByUser(userId).subscribe({
      next: (subscription) => {
        if (!subscription || subscription.statut !== 'ACTIVE') {
          return;
        }

        const expiresAt = new Date(subscription.dateFin);
        const now = new Date();
        const diffMs = expiresAt.getTime() - now.getTime();
        const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        if (daysLeft < 0) {
          const expiredId = `subscription-expired-${subscription.idSubscription ?? userId}`;
          if (!this._notifs.some(n => n.id === expiredId)) {
            this._notifs.unshift({
              id: expiredId,
              titre: 'Abonnement expiré',
              message: 'Votre abonnement a expiré. Veuillez le renouveler pour continuer à utiliser KHOTWA.',
              type: 'error',
              date: new Date(),
              lu: false,
            });
          }
          return;
        }

        if (daysLeft <= 7) {
          const alertId = `subscription-expiry-${subscription.idSubscription ?? userId}`;
          if (!this._notifs.some(n => n.id === alertId)) {
            this._notifs.unshift({
              id: alertId,
              titre: 'Expiration prochaine',
              message: `Votre abonnement expire dans ${daysLeft} jour${daysLeft === 1 ? '' : 's'}.`,
              type: 'warning',
              date: new Date(),
              lu: false,
            });
          }
        }
      },
      error: () => {
        // Ignore notification loading failures for now.
      }
    });
  }
}
