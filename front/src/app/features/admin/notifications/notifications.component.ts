import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../core/services/message.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Notification } from '../../../core/models/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class AdminNotificationsComponent implements OnInit {

  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  groupedNotifications: { label: string, items: Notification[] }[] = [];
  checkedIds: Set<number> = new Set();
  activeFilter: 'all' | 'unread' | 'messages' | 'resolved' = 'all';
  loading = false;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    public notifService: NotificationService,
    private router: Router
  ) {}

  
  get currentUserId(): number {
    return this.authService.currentUser?.idUser ?? 0;
  }

  ngOnInit() {
    this.notifService.reload();
    this.notifService.notifs$().subscribe(notifs => {
      this.notifications = [...notifs].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      this.rebuildNotificationView();
    });
  }

  setActiveFilter(filter: 'all' | 'unread' | 'messages' | 'resolved'): void {
    this.activeFilter = filter;
    this.rebuildNotificationView();
  }

  private rebuildNotificationView(): void {
    this.filteredNotifications = this.computeFilteredNotifications();
    this.groupedNotifications = this.computeGroupedNotifications(this.filteredNotifications);
  }

  private computeFilteredNotifications(): Notification[] {
    switch (this.activeFilter) {
      case 'unread': return this.notifications.filter(n => !n.read);
      case 'messages': return this.notifications.filter(n => n.type === 'NEW_MESSAGE');
      case 'resolved': return this.notifications.filter(n => n.type === 'TICKET_RESOLVED');
      default: return this.notifications;
    }
  }

  private computeGroupedNotifications(source: Notification[]): { label: string, items: Notification[] }[] {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
    const thisWeek = new Date(today); thisWeek.setDate(thisWeek.getDate() - 7);

    const groups: { label: string, items: Notification[] }[] = [
      { label: 'Today', items: [] },
      { label: 'Yesterday', items: [] },
      { label: 'This Week', items: [] },
      { label: 'Older', items: [] }
    ];

    source.forEach(n => {
      const date = new Date(n.createdAt);
      if (date >= today) groups[0].items.push(n);
      else if (date >= yesterday) groups[1].items.push(n);
      else if (date >= thisWeek) groups[2].items.push(n);
      else groups[3].items.push(n);
    });

    return groups.filter(g => g.items.length > 0);
  }

  relativeTime(date: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 172800) return 'yesterday';
    return `${Math.floor(diff / 86400)} days ago`;
  }

  isChecked(id: number): boolean { return this.checkedIds.has(id); }

  toggleCheck(id: number) {
    if (this.checkedIds.has(id)) this.checkedIds.delete(id);
    else this.checkedIds.add(id);
  }

  checkAll() { this.filteredNotifications.forEach(n => this.checkedIds.add(n.id)); }
  uncheckAll() { this.checkedIds.clear(); }

  markSelectedRead() {
    const ids = Array.from(this.checkedIds);
    this.messageService.markBulkNotificationsRead(ids).subscribe({
      next: () => { this.notifService.reload(); this.checkedIds.clear(); }
    });
  }

  markSelectedUnread() {
    const ids = Array.from(this.checkedIds);
    this.messageService.markBulkNotificationsUnread(ids).subscribe({
      next: () => { this.notifService.reload(); this.checkedIds.clear(); }
    });
  }

  deleteSelected() {
    const ids = Array.from(this.checkedIds);
    this.messageService.deleteBulkNotifications(ids).subscribe({
      next: () => { this.notifService.reload(); this.checkedIds.clear(); }
    });
  }

  get hasChecked(): boolean { return this.checkedIds.size > 0; }

  openNotification(notification: Notification, event: MouseEvent): void {
    event.stopPropagation();
    this.notifService.markRead(notification.id);
    const msg = (notification.message || '').toLowerCase();
    const isProjectNotification = notification.type === 'PROJECT_ASSIGNMENT'
      || notification.type === 'PROJECT_UNASSIGNED'
      || msg.includes('assigned to project')
      || msg.includes('assigned to your project')
      || msg.includes('unassigned from project');
    if (notification.conversationId) {
      this.router.navigate(['/khotwaadmin/messages'], { queryParams: { conversationId: notification.conversationId } });
      return;
    }
    if (!isProjectNotification && notification.type === 'NEW_MESSAGE' && notification.senderId) {
      this.router.navigate(['/khotwaadmin/messages'], { queryParams: { participantId: notification.senderId } });
    }
  }
}