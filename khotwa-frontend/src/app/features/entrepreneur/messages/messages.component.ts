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
  selector: 'app-entrepreneur-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class EntrepreneurMessagesComponent implements OnInit, OnDestroy, AfterViewChecked {

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
        if (this.selectedConv?.participantId === event.userId) {
          this.isTyping = event.typing;
        }
      }),
      this.onlineStatusService.getOnlineUsers().subscribe(() => {
        this.cdr.markForCheck();
      })
    );
  }

  isOnline(userId: number): boolean {
    return this.onlineStatusService.isOnline(userId);
  }

  handleNewMessage(msg: Message) {
    const otherId = msg.senderId === this.currentUserId ? msg.receiverId : msg.senderId;
    const conv = this.conversations.find(c => c.participantId === otherId);
    const newMsgObj = this.mapToUIMessage(msg);

    if (conv) {
      if (!conv.messages.some((m: any) => m.id === msg.id)) {
        conv.messages.push(newMsgObj);
        conv.time = newMsgObj.time;    
        const isActuallyEmpty = !newMsgObj.text || newMsgObj.text.trim() === '' || newMsgObj.text === '\u00A0';

    conv.lastMsg = isActuallyEmpty ? '📎 Attachment' : newMsgObj.text;
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
        this.conversations.sort((a, b) => 
        new Date(b.lastUpdate || 0).getTime() - new Date(a.lastUpdate || 0).getTime()
      );
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
        const unique = all.filter((msg, index, self) =>
          index === self.findIndex(m => m.id === msg.id)
        );
        unique.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        this.conversations = this.groupByConversation(unique);
        this.loading = false;
        
        if (this.autoSelectConversationId) {
          const conv = this.conversations.find(c => c.participantId === this.autoSelectConversationId);
          if (conv) this.selectConv(conv);
          this.autoSelectConversationId = null;
        }
      },
      error: (err) => {
        console.error('Failed to load messages', err);
        this.loading = false;
      }
    });
  }

  groupByConversation(messages: Message[]): any[] {
    const groups: { [key: number]: any } = {};
    messages.forEach(msg => {
      const otherId = msg.senderId === this.currentUserId ? msg.receiverId : msg.senderId;
      if (!groups[otherId]) {
        groups[otherId] = {
          id: `conv-${otherId}`,
          participantId: otherId,
          nom: `User ${otherId}`,
          initials: `U${otherId}`,
          color: this.getColor(otherId),
          lastMsg: msg.body,
          time: this.formatTime(msg.createdAt),
          unread: 0,
          messages: []
        };
      }
      if (msg.status === 'PENDING' && msg.receiverId === this.currentUserId) {
        groups[otherId].unread++;
      }
      groups[otherId].messages.push(this.mapToUIMessage(msg));
    });
    return Object.values(groups);
  }

  private mapToUIMessage(msg: Message) {
    const isDeleted = msg.deletedForAll || msg.deletedForUsers?.split(',').includes(String(this.currentUserId));
    return {
      id: msg.id,
      text: isDeleted ? 'message deleted' : msg.body,
      time: this.formatTime(msg.createdAt),
      mine: msg.senderId === this.currentUserId,
      status: msg.status,
      fileUrl: isDeleted ? null : msg.fileUrl,
      deleted: isDeleted,
      parentMessageId: msg.parentMessageId,
      parentMessageContent: msg.parentMessageContent
    };
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

  private formatTime(date: any) {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  selectConv(c: any) {
    this.selectedConv = { ...c, unread: 0 };
    c.unread = 0;
    this.replyingTo = null;
    c.messages
      .filter((m: any) => !m.mine && m.status === 'PENDING')
      .forEach((m: any) => this.messageService.updateStatus(m.id, 'READ').subscribe());
    this.shouldScroll = true;
  }

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
    if (!file) return;
    this.pendingFile = file;
    this.messageService.uploadFile(file).subscribe({
      next: (url) => { this.pendingFileUrl = url; },
      error: (err) => console.error('Failed to upload file', err)
    });
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
      this.selectedConv.messages.push(uiMsg);
      this.updateConversationPreview(this.selectedConv.id, uiMsg.text, uiMsg.time);
      this.newMsg = '';
      this.replyingTo = null;   
      this.pendingFile = null;
      this.pendingFileUrl = null;
      this.shouldScroll = true;
      
      this.cdr.markForCheck(); 
    },
    error: (err) => console.error('Failed to send message', err)
  });
}

  onMsgKey(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.sendMsg();
    }
  }

  confirmDelete(msg: any) {
    this.pendingDeleteMsg = msg;
    this.showDeletePopup = true;
  }

  cancelDelete() {
    this.pendingDeleteMsg = null;
    this.showDeletePopup = false;
  }

  deleteForAll() {
    if (!this.pendingDeleteMsg) return;
    this.messageService.deleteMessageForAll(this.pendingDeleteMsg.id).subscribe({
      next: () => {
        this.pendingDeleteMsg.deleted = true;
        this.pendingDeleteMsg.text = 'message deleted';
        this.pendingDeleteMsg.fileUrl = null;
        this.cancelDelete();
      }
    });
  }

  deleteForMe() {
    if (!this.pendingDeleteMsg) return;
    this.messageService.deleteMessageForMe(this.pendingDeleteMsg.id, this.currentUserId).subscribe({
      next: () => {
        this.pendingDeleteMsg.deleted = true;
        this.pendingDeleteMsg.text = 'message deleted';
        this.pendingDeleteMsg.fileUrl = null;
        this.cancelDelete();
      }
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