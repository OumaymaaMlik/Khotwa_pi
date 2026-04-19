import { Injectable } from '@angular/core';
import { Client, StompSubscription } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import { Message, Notification } from '../models/message.model';

// Dynamic import of SockJS - loaded only when needed
let SockJS: any = null;

export interface TypingEvent {
  userId: number;
  typing: boolean;
}

export interface StatusEvent {
  userId: number;
  online: boolean;
}

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private client: Client | null = null;
  private subscriptions: StompSubscription[] = [];
  private isConnected = false;
  private isConnecting = false; 

  newMessage$ = new Subject<Message>();
  messageUpdate$ = new Subject<Message>();
  newNotification$ = new Subject<Notification>();
  typing$ = new Subject<TypingEvent>();
  status$ = new Subject<StatusEvent>();

  constructor() {
    // WebSocket disabled to prevent sockjs-client bundling issues
    // Use HTTP polling for notifications instead
  }

  private initializeWebSocket() {
    // WebSocket initialization disabled
    // Use HTTP polling for notifications instead
    this.client = null;
  }

  connect(userId: number) {
    if (!this.client) {
      console.warn('WebSocket client not available');
      return;
    }
    if (this.isConnected || this.isConnecting) return;
    this.isConnecting = true;

    this.client.onConnect = () => {
      this.isConnected = true;
      this.isConnecting = false;
      
      this.unsubscribeAll();

      const stomp = this.client;
      if (!stomp) return;

      this.subscriptions.push(
        stomp.subscribe(`/topic/messages/${userId}`, (msg: { body: string }) => {
          const message = JSON.parse(msg.body);
          if (message.deletedForAll || message.deletedForUsers || message.status !== 'PENDING') {
            this.messageUpdate$.next(message);
          } else {
            this.newMessage$.next(message);
          }
        }),

        stomp.subscribe(`/topic/notifications/${userId}`, (msg: { body: string }) => {
          this.newNotification$.next(JSON.parse(msg.body));
        }),

        stomp.subscribe(`/topic/typing/${userId}`, (msg: { body: string }) => {
          this.typing$.next(JSON.parse(msg.body));
        }),

        stomp.subscribe(`/topic/status`, (msg: { body: string }) => {
          this.status$.next(JSON.parse(msg.body));
        })
      );
    };

    this.client.activate();
  }

  private unsubscribeAll() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  disconnect() {
    if (!this.client) return;
    this.unsubscribeAll();
    this.client.deactivate();
    this.isConnected = false;
    this.isConnecting = false;
  }

  sendTyping(senderId: number, receiverId: number, isTyping: boolean) {
    if (!this.client || !this.client.connected) return;
    this.client.publish({
      destination: '/app/typing',
      body: JSON.stringify({ senderId, receiverId, typing: isTyping })
    });
  }

  sendOnlineStatus(userId: number, isOnline: boolean) {
    if (this.client && this.client.connected) {
      this.client.publish({
        destination: '/app/status',
        body: JSON.stringify({ userId, online: isOnline })
      });
    }
  }
}