import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Notification {
  id: string;
  titre: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  date: Date;
  lu: boolean;
  link?: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {

  private base = '/khotwa';  // ✅ URL relative — passe par le proxy Angular

  private _notifs: Notification[] = [];

  constructor(private http: HttpClient) {}

  loadExpirationAlert(userId: number): void {
    this.http.get<any>(`${this.base}/subscriptions/user/${userId}/expiration-alert`)
      .subscribe({
        next: (data) => {
          if (data?.hasAlert) {
            const daysLeft: number = data.daysLeft;
            const planLabel: string = data.planLabel ?? 'your plan';

            this._notifs = this._notifs.filter(n => n.id !== 'expiration-alert');

            const notif: Notification = {
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
        error: () => {} // silencieux — pas d'alerte si l'endpoint échoue
      });
  }

  addNotif(notif: Notification): void {
    this._notifs = [notif, ...this._notifs];
  }

  notifs(): Notification[]  { return this._notifs; }
  nonLus(): number          { return this._notifs.filter(n => !n.lu).length; }
  markAllRead(): void       { this._notifs = this._notifs.map(n => ({ ...n, lu: true })); }
  markRead(id: string): void { this._notifs = this._notifs.map(n => n.id === id ? { ...n, lu: true } : n); }
}