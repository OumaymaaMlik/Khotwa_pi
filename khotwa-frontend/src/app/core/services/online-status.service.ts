import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OnlineStatusService {
  private onlineUsers$ = new BehaviorSubject<Set<number>>(new Set());

  constructor() {}

  updateOnlineUsers(users: Set<number>) {
    this.onlineUsers$.next(new Set(users));
  }

  addOnlineUser(userId: number) {
    const current = this.onlineUsers$.getValue();
    current.add(userId);
    this.onlineUsers$.next(new Set(current));
  }

  removeOnlineUser(userId: number) {
    const current = this.onlineUsers$.getValue();
    current.delete(userId);
    this.onlineUsers$.next(new Set(current));
  }

  getOnlineUsers(): Observable<Set<number>> {
    return this.onlineUsers$.asObservable();
  }

  isOnline(userId: number): boolean {
    return this.onlineUsers$.getValue().has(userId);
  }
}
