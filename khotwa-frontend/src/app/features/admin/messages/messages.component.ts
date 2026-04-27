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
        const conversationId = Number(params['conversationId']);
        // If conversations are already loaded, select immediately
        if (this.conversations.length > 0) {
          const conv = this.conversations.find(c => c.participantId === conversationId);
          if (conv) this.selectConv(conv);
        } else {
          // Otherwise mark it for auto-selection after loading
          this.autoSelectConversationId = conversationId;
        }
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

  private getConversationDisplayName(msg: Message, otherId: number): string {
    if (msg.senderId === otherId && msg.senderName) return msg.senderName;
    if (msg.receiverId === otherId && msg.receiverName) return msg.receiverName;
    return `User ${otherId}`;
  }

  private updateConversationPreview(conversationId: number, lastMsg: string, time: string) {
    const conv = this.conversations.find(c => c.id === conversationId);
    if (conv) {
      conv.lastMsg = lastMsg.trim() === '\u00A0' ? '📎 Attachment' : lastMsg;
      conv.time = time;
      conv.lastUpdate = new Date();
          this.conversations.sort((a, b) =>
        new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
      );
    }
  }

  handleNewMessage(msg: Message) {
    const otherId = msg.senderId === this.currentUserId ? msg.receiverId : msg.senderId;
    const conv = this.conversations.find(c => c.participantId === otherId);
    const newMsgObj = this.mapToUIMessage(msg);

    if (conv) {
      if (!conv.messages.some((m: any) => m.id === msg.id)) {
        conv.messages.push(newMsgObj);
        conv.lastMsg = newMsgObj.text.trim() === '' || newMsgObj.text === '\u00A0' ? '📎 Attachment' : newMsgObj.text;
        conv.time = newMsgObj.time;
        conv.lastUpdate = new Date();
        if (msg.receiverId === this.currentUserId) {
          if (this.selectedConv?.participantId !== otherId) {
            conv.unread++;
          }
        }
        if (this.selectedConv?.participantId === otherId) {
          if (msg.receiverId === this.currentUserId && msg.status === 'PENDING') {
            this.messageService.updateStatus(msg.id, 'READ').subscribe();
          }
          this.shouldScroll = true;
        }
console.log('Tri en cours...', this.conversations.map(c => ({ name: c.nom, date: c.lastUpdate })));
        this.conversations.sort((a, b) =>
        new Date(b.lastUpdate || 0).getTime() - new Date(a.lastUpdate || 0).getTime()
      );
      }
    } else {
      const senderName = this.getConversationDisplayName(msg, otherId);
      this.conversations.unshift({
        id: `conv-${otherId}`,
        participantId: otherId,
        nom: senderName,
        initials: senderName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        color: this.getColor(otherId),
        lastMsg: msg.body,
        unread: msg.receiverId === this.currentUserId ? 1 : 0,
        messages: [newMsgObj]
      });
    }

    // Important: Trigger UI update
    this.cdr.markForCheck();
  }

  handleMessageUpdate(msg: Message) {
    const update = (m: any) => {
      if (m.id === msg.id) {
        const isDeleted = msg.deletedForAll || msg.deletedForUsers?.split(',').includes(String(this.currentUserId));
        m.status = msg.status;
        m.deleted = isDeleted;

        if (isDeleted) {
          m.text = 'message deleted';
          m.fileUrl = null;
          const otherId = msg.senderId === this.currentUserId ? msg.receiverId : msg.senderId;
          const conv = this.conversations.find(c => c.participantId === otherId);
          if (conv && conv.lastMsg !== 'message deleted') {
            const lastInArray = conv.messages[conv.messages.length - 1];
            if (lastInArray && lastInArray.id === msg.id) {
              conv.lastMsg = 'message deleted';
            }
          }
        }
      }
    };

    this.conversations.forEach(c => c.messages.forEach(update));
    if (this.selectedConv) this.selectedConv.messages.forEach(update);

    this.cdr.markForCheck();
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
        const senderName = this.getConversationDisplayName(msg, otherId);
        groups[otherId] = {
          participantId: otherId,
          nom: senderName,
          initials: senderName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
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
    body: this.newMsg.trim() || (this.pendingFileUrl ? '\u00A0' : '📎 File attachment'),
    senderId: this.currentUserId,
    receiverId: this.selectedConv.participantId,
    type: 'DIRECT_MESSAGE',
    fileUrl: this.pendingFileUrl || null,
    parentMessage: this.replyingTo ? { id: this.replyingTo.id } : null
  };
  this.wsService.sendTyping(this.currentUserId, this.selectedConv.participantId, false);
  this.messageService.sendMessage(message).subscribe({
  next: (saved) => {
    const uiMsg = this.mapToUIMessage(saved);
    // 1. Find the conversation index to update it directly in the array
    const index = this.conversations.findIndex(c => c.participantId === this.selectedConv.participantId);
    if (index !== -1) {
      // 2. Update the messages and preview text
      this.conversations[index].messages.push(uiMsg);
      const isActuallyEmpty = !uiMsg.text || uiMsg.text.trim() === '' || uiMsg.text === '\u00A0';
      this.conversations[index].lastMsg = isActuallyEmpty ? '📎 Attachment' : uiMsg.text;
      this.conversations[index].time = uiMsg.time;
      this.conversations[index].lastUpdate = new Date();
      // 3. Perform the sort
      this.conversations.sort((a, b) => {
        const dateA = a.lastUpdate ? new Date(a.lastUpdate).getTime() : 0;
        const dateB = b.lastUpdate ? new Date(b.lastUpdate).getTime() : 0;
        return dateB - dateA;
      });
      // 4. CRITICAL: Re-create the array reference
      this.conversations = [...this.conversations];
    }
    // Reset UI State
    this.newMsg = '';
    this.replyingTo = null;
    this.pendingFile = null;
    this.pendingFileUrl = null;
    this.shouldScroll = true;
    // Force Change Detection
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  },
  error: (err) => console.error('Failed to send message', err)
});
}


  // Helper methods for UI (Delete/Key Events/Color)
  onMsgKey(e: KeyboardEvent) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMsg(); } }

  onMsgInput() {
    if (!this.selectedConv) return;
    this.wsService.sendTyping(this.currentUserId, this.selectedConv.participantId, true);

    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => {
      this.wsService.sendTyping(this.currentUserId, this.selectedConv.participantId, false);
    }, 2000);
  }


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
  cancelFile() {
    this.pendingFile = null;
    this.pendingFileUrl = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = ''; // Reset the hidden input
    }
  }
}
