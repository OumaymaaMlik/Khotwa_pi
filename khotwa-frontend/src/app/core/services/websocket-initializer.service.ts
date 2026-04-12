import { Injectable } from '@angular/core';
import { WebSocketService } from './websocket.service';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { OnlineStatusService } from './online-status.service';

@Injectable({ providedIn: 'root' })
export class WebSocketInitializerService {
  constructor(
    private wsService: WebSocketService,
    private authService: AuthService,
    private messageService: MessageService,
    private onlineStatusService: OnlineStatusService
  ) {}

  initialize(): void {
    const userId = this.authService.currentUser?.idUser;

    if (!userId) {
      console.warn('WebSocketInitializer: No userId found, skipping connection.');
      return;
    }

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
}