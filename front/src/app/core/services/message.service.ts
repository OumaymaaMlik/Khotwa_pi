import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, Notification, Page, Conversation, ConversationType } from '../models/message.model';

export interface ConversationRecap {
  summary: string;
  keyMilestones: string[];
  nextSteps: string[];
}

export interface ReplySuggestions {
  suggestions: string[];
}

export interface ConversationPresence {
  conversationId: number;
  onlineCount: number;
  totalCount: number;
  onlineUserIds: number[];
}

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  sendMessage(message: Partial<Message>): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/messages`, message);
  }

  deleteMessage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/messages/${id}`);
  }

  getNotifications(recipientId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/notifications/${recipientId}`);
  }

  getUnreadNotifications(recipientId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/notifications/${recipientId}/unread`);
  }

  markNotificationAsRead(id: number): Observable<Notification> {
    return this.http.patch<Notification>(`${this.apiUrl}/notifications/${id}/read`, null);
  }

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/files/upload`, formData, { responseType: 'text' });
  }

  markBulkNotificationsRead(ids: number[]): Observable<any> {
    return this.http.patch(`${this.apiUrl}/notifications/bulk/read`, ids);
  }

  markBulkNotificationsUnread(ids: number[]): Observable<any> {
    return this.http.patch(`${this.apiUrl}/notifications/bulk/unread`, ids);
  }

  deleteBulkNotifications(ids: number[]): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/notifications/bulk/delete`, { body: ids });
  }

  deleteMessageForAll(id: number): Observable<Message> {
    return this.http.delete<Message>(`${this.apiUrl}/messages/${id}/delete-for-all`);
  }

  deleteMessageForMe(id: number, userId: number): Observable<Message> {
    return this.http.delete<Message>(`${this.apiUrl}/messages/${id}/delete-for-me`, { params: { userId } });
  }

  announceOnline(userId: number): Observable<number[]> {
    return this.http.post<number[]>(`${this.apiUrl}/messages/presence/${userId}/online`, null);
  }

  announceOffline(userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/messages/presence/${userId}/offline`, null);
  }

  getOnlineUsers(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/messages/presence/all-online`);
  }

  initiateContact(senderId: number, receiverId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/conversations/direct/initiate?senderId=${senderId}&receiverId=${receiverId}`, {});
  }

  ensureDirectConversation(senderId: number, receiverId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/conversations/direct/ensure?senderId=${senderId}&receiverId=${receiverId}`, {});
  }

  getConversationRecap(conversationId: number, userId: number): Observable<ConversationRecap> {
    const params = new HttpParams()
      .set('conversationId', conversationId)
      .set('userId', userId);
    return this.http.get<ConversationRecap>(`${this.apiUrl}/messages/recap`, { params });
  }

  getReplySuggestions(conversationId: number, currentUserId: number): Observable<ReplySuggestions> {
    const params = new HttpParams()
      .set('conversationId', conversationId)
      .set('currentUserId', currentUserId);
    return this.http.get<ReplySuggestions>(`${this.apiUrl}/messages/suggestions`, { params });
  }

  getMyConversations(userId: number): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(`${this.apiUrl}/conversations/me`, { params: { userId } });
  }

  createConversation(actorId: number, payload: {
    type: ConversationType;
    title?: string;
    projectId?: number;
    participantIds: number[];
  }): Observable<Conversation> {
    return this.http.post<Conversation>(`${this.apiUrl}/conversations`, payload, { params: { actorId } });
  }

  getConversationMessages(conversationId: number, userId: number, page = 0, size = 100): Observable<Page<Message>> {
    const params = new HttpParams()
      .set('userId', userId)
      .set('page', page)
      .set('size', size);
    return this.http.get<Page<Message>>(`${this.apiUrl}/conversations/${conversationId}/messages`, { params });
  }

  sendConversationMessage(conversationId: number, payload: {
    senderId: number;
    subject?: string;
    body: string;
    type?: string;
    fileUrl?: string | null;
    parentMessageId?: number | null;
  }): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/conversations/${conversationId}/messages`, payload);
  }

  markConversationRead(conversationId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/conversations/${conversationId}/read`, null, { params: { userId } });
  }

  getConversationPresence(conversationId: number, userId: number): Observable<ConversationPresence> {
    return this.http.get<ConversationPresence>(`${this.apiUrl}/conversations/${conversationId}/presence`, { params: { userId } });
  }

  sendConversationTyping(conversationId: number, userId: number, typing: boolean): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/conversations/${conversationId}/typing`, {
      conversationId,
      userId,
      typing
    });
  }
}
