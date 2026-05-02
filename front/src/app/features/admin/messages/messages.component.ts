import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, ConversationRecap } from '../../../core/services/message.service';
import { AuthService } from '../../../core/services/auth.service';
import { WebSocketService } from '../../../core/services/websocket.service';
import { OnlineStatusService } from '../../../core/services/online-status.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Conversation, ConversationParticipant, Message } from '../../../core/models/message.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class AdminMessagesComponent implements OnInit, OnDestroy, AfterViewChecked {
  private readonly ADMIN_ID = 1;
  private readonly BACKEND_ORIGIN = '';

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
  showRecapCard = false;
  showMembersDrawer = false;
  recapLoading = false;
  recapError = '';
  recapData: ConversationRecap | null = null;
  replySuggestions: string[] = [];
  suggestionsLoading = false;
  typingUsers: string[] = [];
  private shouldScroll = false;
  private wsSubscriptions: Subscription[] = [];
  private autoSelectConversationId: number | null = null; // conversationId or participantId

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
        if (this.conversations.length > 0) {
          const conv = this.conversations.find(c => c.conversationId === conversationId);
          if (conv) this.selectConv(conv);
        } else {
          this.autoSelectConversationId = conversationId;
        }
      } else if (params['participantId']) {
        const participantId = Number(params['participantId']);
        if (this.conversations.length > 0) {
          const conv = this.conversations.find(c => c.participantId === participantId);
          if (conv) this.selectConv(conv);
        } else {
          this.autoSelectConversationId = participantId;
        }
      } else if (params['contactAdmin'] === 'true') {
        this.autoSelectConversationId = this.ADMIN_ID;
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
      this.wsService.conversationMessage$.subscribe(msg => this.handleNewMessage(msg)),
      this.wsService.conversationMessageUpdate$.subscribe(msg => this.handleMessageUpdate(msg)),
      this.wsService.newNotification$.subscribe((n: any) => {
        const msg = (n?.message || '').toLowerCase();
        const isProjectMembershipEvent = n?.type === 'PROJECT_ASSIGNMENT'
          || n?.type === 'PROJECT_UNASSIGNED'
          || msg.includes('assigned to project')
          || msg.includes('assigned to your project')
          || msg.includes('unassigned from project');
        if (!isProjectMembershipEvent) return;
        this.loadInbox();
      }),
      this.wsService.typing$.subscribe(event => {
        if (this.selectedConv?.conversationId && event.conversationId === this.selectedConv.conversationId) {
          const senderName = this.getParticipantNameById(this.selectedConv, event.userId);
          if (!senderName) return;
          if (event.typing) {
            if (!this.typingUsers.includes(senderName)) this.typingUsers.push(senderName);
          } else {
            this.typingUsers = this.typingUsers.filter(n => n !== senderName);
          }
          this.isTyping = this.typingUsers.length > 0;
        }
      }),
      this.onlineStatusService.getOnlineUsers().subscribe(() => this.cdr.markForCheck())
    );
  }

  isOnline(userId: number): boolean {
    if (!userId) return false;
    return this.onlineStatusService.isOnline(userId);
  }

  get onlineSummary(): string {
    if (!this.selectedConv) return '';
    const total = this.selectedConv.totalParticipants ?? 0;
    const online = this.getConversationOnlineCount(this.selectedConv);
    if (total <= 0) return 'Offline';
    return `${online}/${total} online`;
  }

  get typingLabel(): string {
    if (this.typingUsers.length === 0) return '';
    if (this.typingUsers.length === 1) return `${this.typingUsers[0]} is typing...`;
    if (this.typingUsers.length === 2) return `${this.typingUsers[0]} and ${this.typingUsers[1]} are typing...`;
    return `${this.typingUsers.slice(0, 3).join(', ')} are typing...`;
  }

  getConversationOnlineCount(conv: any): number {
    const participants: any[] = conv?.participants ?? [];
    if (!participants.length) return conv?.onlineCount ?? 0;
    return participants.filter(p => this.isOnline(p.userId)).length;
  }

  getSenderInitials(name?: string): string {
    if (!name) return '?';
    const chunks = name.trim().split(/\s+/).filter(Boolean);
    if (!chunks.length) return '?';
    return chunks.slice(0, 2).map(c => c[0].toUpperCase()).join('');
  }

  isLastMessage(msg: any): boolean {
    const messages = this.selectedConv?.messages ?? [];
    if (!messages.length) return false;
    return messages[messages.length - 1]?.id === msg.id;
  }

  getReadStatusTooltip(msg: any): string {
    if (msg.readBy?.length) return `Read by ${msg.readBy.join(', ')}`;
    return msg.status === 'PENDING' ? 'Unread' : 'Read';
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
      parentMessageContent: msg.parentMessageContent,
      senderName: msg.senderName,
      readBy: msg.readBy || []
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
    const conv = this.conversations.find(c => c.conversationId === msg.conversationId);
    const newMsgObj = this.mapToUIMessage(msg);

    if (conv) {
      if (!conv.messages.some((m: any) => m.id === msg.id)) {
        conv.messages.push(newMsgObj);
        if (this.selectedConv?.conversationId === conv.conversationId
          && !this.selectedConv.messages?.some((m: any) => m.id === msg.id)) {
          this.selectedConv.messages = [...(this.selectedConv.messages ?? []), newMsgObj];
        }
        conv.lastMsg = newMsgObj.text.trim() === '' || newMsgObj.text === '\u00A0' ? '📎 Attachment' : newMsgObj.text;
        conv.time = newMsgObj.time;
        conv.lastUpdate = new Date();
        if (msg.senderId !== this.currentUserId && this.selectedConv?.conversationId !== conv.conversationId) {
          conv.unread++;
        }
        if (this.selectedConv?.conversationId === conv.conversationId) {
          this.messageService.markConversationRead(conv.conversationId, this.currentUserId).subscribe({
            error: () => this.loadInbox()
          });
          this.shouldScroll = true;
        }
        this.conversations.sort((a, b) =>
        new Date(b.lastUpdate || 0).getTime() - new Date(a.lastUpdate || 0).getTime()
      );
      }
    } else {
      const senderName = msg.senderName || `User ${msg.senderId}`;
      this.conversations.unshift({
        id: `conv-${msg.conversationId}`,
        conversationId: msg.conversationId,
        participantId: msg.senderId,
        participants: [],
        totalParticipants: 2,
        onlineCount: this.isOnline(msg.senderId) ? 1 : 0,
        nom: senderName,
        initials: senderName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        color: this.getColor(msg.senderId),
        lastMsg: msg.body,
        unread: msg.senderId === this.currentUserId ? 0 : 1,
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
        m.readBy = msg.readBy || [];
        m.deleted = isDeleted;

        if (isDeleted) {
          m.text = 'message deleted';
          m.fileUrl = null;
          const conv = this.conversations.find(c => c.conversationId === msg.conversationId);
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
    const previousSelectedConversationId = this.selectedConv?.conversationId ?? null;
    this.messageService.getMyConversations(this.currentUserId).subscribe({
      next: (conversations: Conversation[]) => {
        this.conversations = conversations.map(c => this.mapConversationPreview(c));
        this.loading = false;
        this.wsService.syncConversationSubscriptions(
          this.conversations
            .map(c => c.conversationId)
            .filter((id: number | null | undefined): id is number => typeof id === 'number')
        );
        if (this.autoSelectConversationId) {
          const conv = this.conversations.find(
            c => c.conversationId === this.autoSelectConversationId || c.participantId === this.autoSelectConversationId
          );
          if (conv) {
            this.selectConv(conv);
          } else {
            this.selectedConv = null;
          }
          this.autoSelectConversationId = null;
        } else if (previousSelectedConversationId != null) {
          const stillAvailable = this.conversations.find(c => c.conversationId === previousSelectedConversationId);
          if (stillAvailable) {
            this.selectConv(stillAvailable);
          } else {
            this.selectedConv = null;
          }
        } else if (!this.selectedConv && this.conversations.length > 0) {
          this.selectConv(this.conversations[0]);
        } else {
          this.selectedConv = null;
        }
      },
      error: () => this.loading = false
    });
  }

  selectConv(c: any) {
    const participantChanged = this.selectedConv?.conversationId !== c.conversationId;
    this.selectedConv = { ...c, unread: 0 };
    this.typingUsers = [];
    c.unread = 0;
    this.replyingTo = null;
    if (participantChanged) {
      this.showRecapCard = false;
      this.recapData = null;
      this.recapError = '';
      this.replySuggestions = [];
    }
    if (c.conversationId) {
      this.messageService.getConversationMessages(c.conversationId, this.currentUserId).subscribe({
        next: (page) => {
          this.selectedConv.messages = (page.content ?? []).map(m => this.mapToUIMessage(m));
          this.messageService.markConversationRead(c.conversationId, this.currentUserId).subscribe({
            error: () => this.loadInbox()
          });
          this.shouldScroll = true;
          this.cdr.markForCheck();
        },
        error: () => this.loadInbox()
      });
    }
    this.loadReplySuggestions();
  }

  private loadReplySuggestions() {
    if (!this.selectedConv) return;
    if (!this.selectedConv.conversationId) {
      this.replySuggestions = [];
      return;
    }
    this.suggestionsLoading = true;
    this.messageService.getReplySuggestions(this.selectedConv.conversationId, this.currentUserId).subscribe({
      next: (res) => {
        this.replySuggestions = (res?.suggestions ?? []).slice(0, 3);
        this.suggestionsLoading = false;
      },
      error: () => {
        console.error('Failed to load reply suggestions');
        this.replySuggestions = [];
        this.suggestionsLoading = false;
      }
    });
  }

  applySuggestion(suggestion: string) {
    if (!suggestion) return;
    this.newMsg = suggestion;
  }

  toggleRecapCard() {
    if (!this.selectedConv) return;
    this.showMembersDrawer = false;
    this.showRecapCard = !this.showRecapCard;
    if (this.showRecapCard) {
      this.loadConversationRecap();
    }
  }

  toggleMembersDrawer() {
    if (!this.selectedConv) return;
    this.showRecapCard = false;
    this.showMembersDrawer = !this.showMembersDrawer;
  }

  getParticipantAvatarUrl(participant: ConversationParticipant): string | null {
    const avatar = participant?.avatar?.trim();
    if (!avatar) return null;
    return avatar.startsWith('http')
      ? avatar
      : `${this.BACKEND_ORIGIN}${avatar.startsWith('/') ? '' : '/'}${avatar}`;
  }

  getParticipantRoleLabel(role: ConversationParticipant['role']): string {
    if (role === 'OWNER') return 'Owner';
    if (role === 'ADMIN') return 'Admin';
    return 'Member';
  }

  private loadConversationRecap() {
    if (!this.selectedConv) return;
    if (!this.selectedConv.conversationId) {
      this.recapData = null;
      this.recapError = 'No recap available for this conversation.';
      this.recapLoading = false;
      return;
    }
    this.recapLoading = true;
    this.recapError = '';
    this.messageService.getConversationRecap(this.selectedConv.conversationId, this.currentUserId).subscribe({
      next: (recap) => {
        this.recapData = this.normalizeRecapForCurrentUser(recap);
        this.recapLoading = false;
      },
      error: () => {
        this.recapError = 'Unable to generate recap for now. Please try again.';
        this.recapLoading = false;
      }
    });
  }

  private normalizeRecapForCurrentUser(recap: ConversationRecap): ConversationRecap {
    return {
      summary: this.normalizeRecapText(recap.summary),
      keyMilestones: (recap.keyMilestones ?? []).map(item => this.normalizeRecapText(item)),
      nextSteps: (recap.nextSteps ?? []).map(item => this.normalizeRecapText(item))
    };
  }

  private normalizeRecapText(text: string): string {
    if (!text) return text;
    const otherParticipantName = this.selectedConv?.nom?.trim() || 'the other participant';
    return text
      .replace(/\{\{\s*USER_1\s*\}\}/gi, 'you')
      .replace(/\{\{\s*USER_2\s*\}\}/gi, otherParticipantName)
      .replace(/\bUSER_1\b/gi, 'you')
      .replace(/\bUSER_2\b/gi, otherParticipantName);
  }

 sendMsg() {
  if ((!this.newMsg.trim() && !this.pendingFileUrl) || !this.selectedConv) return;
  if (!this.selectedConv.conversationId) return;
  const message: any = {
    subject: 'Conversation Message',
    body: this.newMsg.trim() || (this.pendingFileUrl ? '\u00A0' : '📎 File attachment'),
    senderId: this.currentUserId,
    type: 'DIRECT_MESSAGE',
    fileUrl: this.pendingFileUrl || null,
    parentMessageId: this.replyingTo ? this.replyingTo.id : null
  };
  this.wsService.sendConversationTyping(this.selectedConv.conversationId, this.currentUserId, false);
  this.replySuggestions = [];
  this.messageService.sendConversationMessage(this.selectedConv.conversationId, message).subscribe({
  next: () => {
    this.newMsg = '';
    this.replyingTo = null;
    this.pendingFile = null;
    this.pendingFileUrl = null;
    this.cdr.markForCheck();
  },
  error: (err) => console.error('Failed to send message', err)
});
}


  // Helper methods for UI (Delete/Key Events/Color)
  onMsgKey(e: KeyboardEvent) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMsg(); } }

  onMsgInput() {
    if (!this.selectedConv) return;
    if (!this.selectedConv.conversationId) return;
    this.wsService.sendConversationTyping(this.selectedConv.conversationId, this.currentUserId, true);

    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => {
      this.wsService.sendConversationTyping(this.selectedConv.conversationId, this.currentUserId, false);
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

  cancelDelete() {
    this.showDeletePopup = false;
    this.pendingDeleteMsg = null;
  }

  getColor(id: number): string {
    const colors = ['#2ABFBF', '#7C5CBF', '#2ABFBF', '#27AE7A', '#2ABFBF'];
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

  private mapConversationPreview(c: Conversation): any {
    const others = (c.participants ?? []).filter(p => p.userId !== this.currentUserId);
    const isGroup = c.type === 'GROUP';
    const displayName = isGroup
      ? (c.title || 'Group conversation')
      : (others[0]?.fullName || c.title || 'Conversation');
    const participantId = isGroup ? null : (others[0]?.userId ?? null);
    const last = c.lastMessage;
    const preview = last?.body || '';
    return {
      id: `conv-${c.id}`,
      conversationId: c.id,
      participantId,
      participants: c.participants ?? [],
      totalParticipants: c.totalParticipants ?? (c.participants?.length ?? 0),
      onlineCount: c.onlineCount ?? 0,
      nom: displayName,
      initials: displayName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase(),
      color: this.getColor(c.id),
      unread: c.unreadCount ?? 0,
      lastMsg: preview,
      time: last?.createdAt ? new Date(last.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
      lastUpdate: last?.createdAt ? new Date(last.createdAt) : new Date(c.updatedAt),
      messages: []
    };
  }

  private getParticipantNameById(conv: any, userId: number): string {
    const p = (conv.participants ?? []).find((x: any) => x.userId === userId);
    return p?.fullName || '';
  }
}
