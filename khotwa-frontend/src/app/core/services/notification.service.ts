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
    return this.authService.currentUser?.idUser ?? 0;
  }

  reload() {
    this.loadNotifications();
  }

  loadNotifications() {
    const userId = this.currentUserId;
    if (userId === 0) return; 

    this.messageService.getNotifications(userId).subscribe({
      next: (notifs) => this._notifs$.next(notifs),
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

  addNotification(notification: Notification) {
    const current = this._notifs$.getValue();
    this._notifs$.next([notification, ...current]);
  }

  markAllRead() {
    const notifs = this._notifs$.getValue();
    const unread = notifs.filter(n => !n.read);
    unread.forEach(n => {
      this.messageService.markNotificationAsRead(n.id).subscribe({
        next: (updated) => {
          const current = this._notifs$.getValue().map(x => x.id === updated.id ? updated : x);
          this._notifs$.next(current);
        }
      });
    });
  }

  markRead(id: number) {
    this.messageService.markNotificationAsRead(id).subscribe({
      next: (updated) => {
        const current = this._notifs$.getValue().map(n => n.id === updated.id ? updated : n);
        this._notifs$.next(current);
      }
    });
  }
}