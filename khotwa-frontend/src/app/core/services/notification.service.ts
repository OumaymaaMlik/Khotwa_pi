import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { AuthService } from './auth.service';
import { Notification } from '../models/message.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  private _notifs$ = new BehaviorSubject<Notification[]>([]);

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.loadNotifications();
  }

  get currentUserId(): number {
    const u = this.authService.currentUser;
    if (!u) return 0;
    if (typeof u.idUser === 'number' && u.idUser > 0) return u.idUser;
    if (u.id != null && u.id !== '') {
      const n = Number(u.id);
      if (Number.isFinite(n) && n > 0) return n;
    }
    return 0;
  }

  reload() {
    this.loadNotifications();
  }

  /** Map backend DTO (isRead) to UI model (read). */
  private normalizeNotification(raw: any): Notification {
    return {
      id: raw.id,
      recipientId: raw.recipientId,
      senderId: raw.senderId,
      message: raw.message ?? '',
      type: raw.type,
      createdAt: raw.createdAt,
      read: raw.read ?? raw.isRead ?? false
    };
  }

  loadNotifications() {
    const userId = this.currentUserId;
    if (userId === 0) return;

    this.messageService.getNotifications(userId).subscribe({
      next: (notifs) =>
        this._notifs$.next((notifs ?? []).map((n) => this.normalizeNotification(n))),
      error: (err) => console.error('Failed to load notifications', err)
    });
  }

  latestFive() {
    return this._notifs$.getValue()
      .slice()
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);
  }

  notifs() { return this._notifs$.getValue(); }

  notifs$() { return this._notifs$.asObservable(); }

  nonLus() { return this._notifs$.getValue().filter(n => !n.read).length; }

  addNotification(notification: Notification | any) {
    const normalized = this.normalizeNotification(notification);
    const current = this._notifs$.getValue();
    this._notifs$.next([normalized, ...current]);
  }

  markAllRead() {
    const notifs = this._notifs$.getValue();
    const unread = notifs.filter(n => !n.read);
    unread.forEach(n => {
      this.messageService.markNotificationAsRead(n.id).subscribe({
        next: (updated) => {
          const u = this.normalizeNotification(updated);
          const current = this._notifs$.getValue().map(x => x.id === u.id ? u : x);
          this._notifs$.next(current);
        }
      });
    });
  }

  markRead(id: number) {
    this.messageService.markNotificationAsRead(id).subscribe({
      next: (updated) => {
        const u = this.normalizeNotification(updated);
        const current = this._notifs$.getValue().map(n => n.id === u.id ? u : n);
        this._notifs$.next(current);
      }
    });
  }
}
