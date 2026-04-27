import { Injectable } from '@angular/core';
import { Client, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Subject } from 'rxjs';
import { Message, Notification } from '../models/message.model';

export interface TypingEvent {
  userId: number;
  typing: boolean;
  conversationId?: number;
}

export interface StatusEvent {
  userId: number;
  online: boolean;
}

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private client: Client;
  private subscriptions: StompSubscription[] = [];
  private desiredConversationIds = new Set<number>();
  private subscribedConversationIds = new Set<number>();
  private conversationTopicSubscriptions = new Map<number, StompSubscription[]>();
  private isConnected = false;
  private isConnecting = false; 

  newMessage$ = new Subject<Message>();
  messageUpdate$ = new Subject<Message>();
  newNotification$ = new Subject<Notification>();
  typing$ = new Subject<TypingEvent>();
  status$ = new Subject<StatusEvent>();
  conversationMessage$ = new Subject<Message>();
  conversationMessageUpdate$ = new Subject<Message>();

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('/khotwa/ws'),
      reconnectDelay: 5000,
      onDisconnect: () => {
        console.log('WebSocket disconnected');
        this.isConnected = false;
        this.isConnecting = false;
      },
      onStompError: (frame) => console.error('WebSocket error:', frame)
    });
  }

  connect(userId: number) {
    if (this.isConnected || this.isConnecting) return;
    this.isConnecting = true;

    this.client.onConnect = () => {
      this.isConnected = true;
      this.isConnecting = false;
      
      this.unsubscribeAll();
      this.subscribedConversationIds.clear();

      this.subscriptions.push(
        this.client.subscribe(`/topic/messages/${userId}`, (msg) => {
          const message = JSON.parse(msg.body);
          if (message.deletedForAll || message.deletedForUsers || message.status !== 'PENDING') {
            this.messageUpdate$.next(message);
          } else {
            this.newMessage$.next(message);
          }
        }),

        this.client.subscribe(`/topic/notifications/${userId}`, (msg) => {
          this.newNotification$.next(JSON.parse(msg.body));
        }),

        this.client.subscribe(`/topic/typing/${userId}`, (msg) => {
          this.typing$.next(JSON.parse(msg.body));
        }),

        this.client.subscribe(`/topic/status`, (msg) => {
          this.status$.next(JSON.parse(msg.body));
        })
      );

      this.desiredConversationIds.forEach((conversationId) => {
        this.subscribeConversationTopics(conversationId);
      });
    };

    this.client.activate();
  }

  private unsubscribeAll() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
    this.conversationTopicSubscriptions.clear();
    this.subscribedConversationIds.clear();
  }

  disconnect() {
    this.unsubscribeAll();
    this.client.deactivate();
    this.isConnected = false;
    this.isConnecting = false;
  }

  sendTyping(senderId: number, receiverId: number, isTyping: boolean) {
    if (this.client && this.client.connected) {
      this.client.publish({
        destination: '/app/typing',
        body: JSON.stringify({ senderId, receiverId, typing: isTyping })
      });
    }
  }

  sendOnlineStatus(userId: number, isOnline: boolean) {
    if (this.client && this.client.connected) {
      this.client.publish({
        destination: '/app/status',
        body: JSON.stringify({ userId, online: isOnline })
      });
    }
  }

  subscribeConversation(conversationId: number) {
    this.desiredConversationIds.add(conversationId);
    if (!this.client || !this.client.connected) return;
    this.subscribeConversationTopics(conversationId);
  }

  syncConversationSubscriptions(conversationIds: number[]) {
    const desired = new Set(conversationIds.filter(id => Number.isFinite(id)));
    this.desiredConversationIds = desired;
    if (!this.client || !this.client.connected) return;
    Array.from(this.subscribedConversationIds).forEach((id) => {
      if (!desired.has(id)) {
        this.unsubscribeConversationTopics(id);
      }
    });
    desired.forEach((id) => this.subscribeConversationTopics(id));
  }

  private subscribeConversationTopics(conversationId: number) {
    if (this.subscribedConversationIds.has(conversationId)) return;
    this.subscribedConversationIds.add(conversationId);
    const convSubs = [
      this.client.subscribe(`/topic/conversations/${conversationId}/messages`, (msg) => {
        this.conversationMessage$.next(JSON.parse(msg.body));
      }),
      this.client.subscribe(`/topic/conversations/${conversationId}/messages-updates`, (msg) => {
        this.conversationMessageUpdate$.next(JSON.parse(msg.body));
      }),
      this.client.subscribe(`/topic/conversations/${conversationId}/typing`, (msg) => {
        this.typing$.next(JSON.parse(msg.body));
      })
    ];
    this.conversationTopicSubscriptions.set(conversationId, convSubs);
    this.subscriptions.push(...convSubs);
  }

  private unsubscribeConversationTopics(conversationId: number) {
    const convSubs = this.conversationTopicSubscriptions.get(conversationId);
    if (!convSubs) return;
    convSubs.forEach((sub) => sub.unsubscribe());
    this.subscriptions = this.subscriptions.filter((s) => !convSubs.includes(s));
    this.conversationTopicSubscriptions.delete(conversationId);
    this.subscribedConversationIds.delete(conversationId);
  }

  sendConversationTyping(conversationId: number, userId: number, typing: boolean) {
    if (this.client && this.client.connected) {
      this.client.publish({
        destination: '/app/typing',
        body: JSON.stringify({ senderId: userId, conversationId, typing })
      });
    }
  }
}