import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { OnlineStatusService } from './online-status.service';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebSocketInitializerService {
  private currentUserId: number | null = null;
  private statusSubscription?: Subscription;

  constructor(
    private wsService: WebSocketService,
    private authService: AuthService,
    private messageService: MessageService,
    private onlineStatusService: OnlineStatusService
  ) {
    // Watch for auth state changes (login/logout)
    this.authService.currentUserSubject.subscribe(user => {
      if (user?.idUser) {
        // User logged in
        this.initializeForUser(user.idUser);
      } else {
        // User logged out
        this.handleLogout();
      }
    });
  }

  initialize(): void {
    // Called once at app startup
    const userId = this.authService.currentUser?.idUser;
    if (userId) {
      this.initializeForUser(userId);
    }
  }

  private initializeForUser(userId: number): void {
    // Skip if already connected for this user
    if (this.currentUserId === userId) return;

    this.currentUserId = userId;
    console.log('WebSocket: Initializing for user', userId);

    this.wsService.connect(userId);
    this.statusSubscription?.unsubscribe();
    this.statusSubscription = this.wsService.status$.subscribe(event => {
      if (event.online) {
        this.onlineStatusService.addOnlineUser(event.userId);
      } else {
        this.onlineStatusService.removeOnlineUser(event.userId);
      }
    });

    this.messageService.announceOnline(userId).subscribe({
      next: (onlineUsers) => {
        if (onlineUsers) {
          this.onlineStatusService.updateOnlineUsers(new Set(onlineUsers));
        }
      },
      error: (err) => console.error('Failed to announce online status:', err)
    });
  }

  private handleLogout(): void {
    console.log('WebSocket: User logged out, disconnecting');
    this.statusSubscription?.unsubscribe();
    this.statusSubscription = undefined;

    if (this.currentUserId) {
      const userId = this.currentUserId;
      this.onlineStatusService.removeOnlineUser(this.currentUserId);
      this.messageService.announceOffline(userId).subscribe({
        error: (err) => console.error('Failed to announce offline status:', err)
      });
      this.currentUserId = null;
    }

    this.onlineStatusService.clearOnlineUsers();
    this.wsService.disconnect();
  }
}