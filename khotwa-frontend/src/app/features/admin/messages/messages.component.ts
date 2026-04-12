import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../core/services/message.service';
import { AuthService } from '../../../core/services/auth.service';
import { WebSocketService } from '../../../core/services/websocket.service';
import { OnlineStatusService } from '../../../core/services/online-status.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Message } from '../../../core/models/message.model';
import { Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class AdminMessagesComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('messagesBody') messagesBody!: ElementRef;
  
  conversations: any[] = [];
  selectedConv: any = null;
  newMsg = '';
  loading = false;
  searchQuery = '';
  pendingFile: File | null = null;
  pendingFileUrl: string | null = null;
  showDeletePopup = false;
  pendingDeleteMsg: any = null;
  typingTimeout: any = null;
  isTyping = false;
  replyingTo: any = null;
  private shouldScroll = false;
  private wsSubscriptions: Subscription[] = [];
  private autoSelectConversationId: number | null = null;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private wsService: WebSocketService,
    private onlineStatusService: OnlineStatusService,
    private notifService: NotificationService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  get currentUserId(): number {
    return this.authService.currentUser?.idUser ?? 0;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['conversationId']) {
        this.autoSelectConversationId = Number(params['conversationId']);
      }
    });
    this.loadInbox();
    this.setupWebSocketListeners();
  }

  ngOnDestroy() {
    this.wsSubscriptions.forEach(s => s.unsubscribe());
  }

  ngAfterViewChecked() {
    if (this.shouldScroll && this.messagesBody) {
      this.messagesBody.nativeElement.scrollTop = this.messagesBody.nativeElement.scrollHeight;
      this.shouldScroll = false;
    }
  }

  setupWebSocketListeners() {
    this.wsSubscriptions.push(
      this.wsService.newMessage$.subscribe(msg => this.handleNewMessage(msg)),
      this.wsService.messageUpdate$.subscribe(msg => this.handleMessageUpdate(msg)),
      this.wsService.typing$.subscribe(event => {
        if (this.selectedConv?.participantId === event.userId) this.isTyping = event.typing;
      }),
      this.onlineStatusService.getOnlineUsers().subscribe(() => this.cdr.markForCheck())
    );
  }

  isOnline(userId: number): boolean {
    return this.onlineStatusService.isOnline(userId);
  }

  private mapToUIMessage(msg: Message) {
    const isDeleted = msg.deletedForAll || msg.deletedForUsers?.split(',').includes(String(this.currentUserId));
    return {
      id: msg.id,
      text: isDeleted ? 'message deleted' : msg.body,
      time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mine: msg.senderId === this.currentUserId,
      status: msg.status,
      fileUrl: isDeleted ? null : msg.fileUrl,
      deleted: isDeleted,
      parentMessageId: msg.parentMessageId,
      parentMessageContent: msg.parentMessageContent
    };
  }

  handleNewMessage(msg: Message) {
    const otherId = msg.senderId === this.currentUserId ? msg.receiverId : msg.senderId;
    const conv = this.conversations.find(c => c.participantId === otherId);
    const newMsgObj = this.mapToUIMessage(msg);

    if (conv) {
      conv.messages.push(newMsgObj);
      conv.lastMsg = msg.body;
      if (msg.receiverId === this.currentUserId) conv.unread++;
      if (this.selectedConv?.participantId === otherId) {
        this.selectedConv.messages.push(newMsgObj);
        if (msg.receiverId === this.currentUserId && msg.status === 'PENDING') {
          this.messageService.updateStatus(msg.id, 'READ').subscribe();
        }
        this.shouldScroll = true;
      }
    } else {
      this.conversations.unshift({
        id: `conv-${otherId}`,
        participantId: otherId,
        nom: `User ${otherId}`,
        initials: `U${otherId}`,
        color: this.getColor(otherId),
        lastMsg: msg.body,
        unread: msg.receiverId === this.currentUserId ? 1 : 0,
        messages: [newMsgObj]
      });
    }
  }

  handleMessageUpdate(msg: Message) {
    const updateFn = (m: any) => {
      if (m.id === msg.id) {
        m.status = msg.status;
        m.deleted = msg.deletedForAll || msg.deletedForUsers?.split(',').includes(String(this.currentUserId));
        if (m.deleted) { m.text = 'message deleted'; m.fileUrl = null; }
      }
    };
    this.conversations.forEach(c => c.messages.forEach(updateFn));
    if (this.selectedConv) this.selectedConv.messages.forEach(updateFn);
  }

  loadInbox() {
    this.loading = true;
    forkJoin([
      this.messageService.getActiveInbox(this.currentUserId),
      this.messageService.getSent(this.currentUserId)
    ]).subscribe({
      next: ([inboxPage, sentPage]) => {
        const all = [...inboxPage.content, ...sentPage.content];
        const unique = all.filter((msg, idx, self) => self.findIndex(m => m.id === msg.id) === idx);
        unique.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        this.conversations = this.groupByConversation(unique);
        this.loading = false;
        if (this.autoSelectConversationId) {
          const conv = this.conversations.find(c => c.participantId === this.autoSelectConversationId);
          if (conv) this.selectConv(conv);
          this.autoSelectConversationId = null;
        }
      },
      error: () => this.loading = false
    });
  }

  groupByConversation(messages: Message[]): any[] {
    const groups: { [key: number]: any } = {};
    messages.forEach(msg => {
      const otherId = msg.senderId === this.currentUserId ? msg.receiverId : msg.senderId;
      if (!groups[otherId]) {
        groups[otherId] = {
          participantId: otherId,
          nom: `User ${otherId}`,
          initials: `U${otherId}`,
          color: this.getColor(otherId),
          unread: 0,
          messages: []
        };
      }
      if (msg.status === 'PENDING' && msg.receiverId === this.currentUserId) groups[otherId].unread++;
      groups[otherId].messages.push(this.mapToUIMessage(msg));
      groups[otherId].lastMsg = msg.body;
    });
    return Object.values(groups);
  }

  selectConv(c: any) {
    this.selectedConv = { ...c, unread: 0 };
    c.unread = 0;
    this.replyingTo = null;
    c.messages.filter((m: any) => !m.mine && m.status === 'PENDING')
      .forEach((m: any) => this.messageService.updateStatus(m.id, 'READ').subscribe());
    this.shouldScroll = true;
  }

  sendMsg() {
    if ((!this.newMsg.trim() && !this.pendingFileUrl) || !this.selectedConv) return;
    const message: any = {
      subject: 'Direct Message',
      body: this.newMsg || '📎 File attachment',
      senderId: this.currentUserId,
      receiverId: this.selectedConv.participantId,
      type: 'DIRECT_MESSAGE',
      fileUrl: this.pendingFileUrl || null,
      parentMessage: this.replyingTo ? { id: this.replyingTo.id } : null
    };
    this.messageService.sendMessage(message).subscribe(saved => {
      this.selectedConv.messages.push(this.mapToUIMessage(saved));
      this.newMsg = ''; this.replyingTo = null; this.pendingFileUrl = null;
      this.shouldScroll = true;
    });
  }

  // Helper methods for UI (Delete/Key Events/Color)
  onMsgKey(e: KeyboardEvent) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMsg(); } }
  triggerFileInput() { this.fileInput.nativeElement.click(); }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.messageService.uploadFile(file).subscribe(url => this.pendingFileUrl = url);
  }
  confirmDelete(msg: any) { this.pendingDeleteMsg = msg; this.showDeletePopup = true; }
  deleteForAll() {
    if (!this.pendingDeleteMsg) return;
    this.messageService.deleteMessageForAll(this.pendingDeleteMsg.id).subscribe(() => {
      this.pendingDeleteMsg.deleted = true; this.pendingDeleteMsg.text = 'message deleted'; this.showDeletePopup = false;
    });
  }
  deleteForMe() {
    if (!this.pendingDeleteMsg) return;
    this.messageService.deleteMessageForMe(this.pendingDeleteMsg.id, this.currentUserId).subscribe(() => {
      this.pendingDeleteMsg.deleted = true; this.pendingDeleteMsg.text = 'message deleted'; this.showDeletePopup = false;
    });
  }
  getColor(id: number): string {
    const colors = ['#2ABFBF', '#7C5CBF', '#E8622A', '#27AE7A', '#F5A623'];
    return colors[id % colors.length];
  }
  replyTo(msg: any) { this.replyingTo = msg; }
  cancelReply() { this.replyingTo = null; }

  get filteredConversations(): any[] {
    if (!this.searchQuery || !this.searchQuery.trim()) {
      return this.conversations;
    }
    const q = this.searchQuery.toLowerCase();
    return this.conversations.filter(c =>
      (c.nom && c.nom.toLowerCase().includes(q)) ||
      (c.lastMsg && c.lastMsg.toLowerCase().includes(q))
    );
  }
}