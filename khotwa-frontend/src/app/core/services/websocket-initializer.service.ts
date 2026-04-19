import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { OnlineStatusService } from './online-status.service';

@Injectable({ providedIn: 'root' })
export class WebSocketInitializerService {
  private currentUserId: number | null = null;

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
    this.onlineStatusService.addOnlineUser(userId);

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
    if (this.currentUserId) {
      this.onlineStatusService.removeOnlineUser(this.currentUserId);
      this.currentUserId = null;
    }
    this.wsService.disconnect();
  }
}