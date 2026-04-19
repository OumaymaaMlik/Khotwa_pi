import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../core/services/auth.service';
import { NotificationService } from '../core/services/notification.service';
import { filter } from 'rxjs/operators';

const BACKEND_ORIGIN = 'http://localhost:8084';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-layout-entrepreneur',
  templateUrl: './layout-entrepreneur.component.html',
  styleUrls: ['./layout-entrepreneur.component.css']
})
export class LayoutEntrepreneurComponent implements OnInit {

  notifOpen = false;
  mobileOpen = false;
  userMenuOpen = false;
  currentUrl = '';
  scrolled = false;

  private safeIconCache: Record<string, SafeHtml> = {};

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
    { label: 'Projects', icon: 'folder', route: 'projets' },
    { label: 'Workflows', icon: 'workflow', route: 'workflows' },
    { label: 'Planning', icon: 'calendar', route: 'planning' },
    { label: 'Messages', icon: 'message', route: 'messages' },
    { label: 'Library', icon: 'book', route: 'bibliotheque' },
    { label: 'Progress', icon: 'progress', route: 'progressions' },
    { label: 'Talent', icon: 'people', route: 'talent' },
    { label: 'Profile', icon: 'user', route: 'profile' },
    { label: 'Account', icon: 'settings', route: 'account' }
  ];

  svgIcons: Record<string, string> = {
    dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    workflow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/></svg>`,
    message: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14"/></svg>`,
    progress: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/></svg>`,
    people: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="4"/></svg>`,
    user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/></svg>`,
    settings: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>`,
    bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18"/></svg>`,
    logout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2"/></svg>`
  };

  constructor(
    public auth: AuthService,
    public notifService: NotificationService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

 ngOnInit() {
  this.router.events.pipe(
    filter(e => e instanceof NavigationEnd)
  ).subscribe((e: any) => this.currentUrl = e.url);

  this.currentUrl = this.router.url;

  this.auth.refreshProfile().subscribe({
    next: () => {
      const userId = this.auth.currentUser?.idUser;

      if (userId && this.auth.isEntrepreneur) {
        this.notifService.loadExpirationAlert(userId);
      }
    }
  });
}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  isActive(route: string): boolean {
    return this.currentUrl.includes(`/${route}`);
  }

  getIcon(name: string): SafeHtml {
    if (!this.safeIconCache[name]) {
      this.safeIconCache[name] =
        this.sanitizer.bypassSecurityTrustHtml(this.svgIcons[name] || '');
    }
    return this.safeIconCache[name];
  }

  getRoute(route: string): string {
    return `/entrepreneur/${route}`;
  }

  onNotifClick(notif: any): void {
    this.notifService.markRead(notif.id);
    if (notif.link) {
      this.router.navigateByUrl(notif.link);
      this.notifOpen = false;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }

  get nonLus(): number {
    return this.notifService.nonLus();
  }

  get notifs() {
    return this.notifService.notifs();
  }

  get userAvatarUrl(): string | null {
    const avatar = this.auth.currentUser?.avatar?.trim();
    if (!avatar) return null;
    return avatar.startsWith('http') ? avatar : `${BACKEND_ORIGIN}${avatar.startsWith('/') ? '' : '/'}${avatar}`;
  }

  get userInitials(): string {
    const u = this.auth.currentUser;
    return `${u?.firstName?.[0] ?? ''}${u?.lastName?.[0] ?? ''}`;
  }
}
