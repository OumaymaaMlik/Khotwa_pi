import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { AuthService } from '../core/services/auth.service';
import { NotificationService } from '../core/services/notification.service';

interface NavItem { label: string; icon: string; route: string; }

@Component({
  selector: 'app-layout-coach',
  templateUrl: './layout-coach.component.html',
  styleUrls: ['./layout-coach.component.css']
})
export class LayoutCoachComponent implements OnInit, OnDestroy {
  notifOpen    = false;
  mobileOpen    = false;
  userMenuOpen = false;
  currentUrl   = '';
  scrolled     = false;

  navItems: NavItem[] = [
    { label: 'Dashboard',   icon: 'dashboard', route: 'dashboard'    },
    { label: 'Projects',    icon: 'folder',    route: 'projets'      },
    { label: 'My Startups', icon: 'rocket',    route: 'startups'     },
    { label: 'Validations', icon: 'check',     route: 'validations'  },
    { label: 'Planning',    icon: 'calendar',  route: 'planning'     },
    { label: 'Messages',    icon: 'message',   route: 'messages'     },
    { label: 'Library',     icon: 'book',      route: 'bibliotheque' },
    { label: 'Progress',    icon: 'progress',  route: 'progressions' },
    { label: 'Talent',      icon: 'people',    route: 'talent'       },
    { label: 'Account',     icon: 'user',      route: 'account'      },
    { label: 'My Profile',  icon: 'user',      route: 'profile'      },
  ];

  svgIcons: Record<string, string> = {
    dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    folder:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    rocket:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    check:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    calendar:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    message:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    book:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    progress:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    people:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    user:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    bell:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    home:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    logout:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  };

  constructor(
    public auth: AuthService,
    public notifService: NotificationService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => { this.currentUrl = e.url; });
    this.currentUrl = this.router.url;

    this.auth.refreshProfile().subscribe({
      next: () => {
        const userId = this.auth.currentUser?.idUser;
        if (userId && this.auth.isCoach) {
          this.notifService.reload();
        }
      }
    });
  }

  ngOnDestroy() {
    // WebSocket disabled in layout; notifications use HTTP polling
  }

  get rolePrefix(): string {
    const r = this.auth.role;
    if (r === 'ADMIN') return '/khotwaadmin';
    if (r === 'ENTREPRENEUR') return '/entrepreneur';
    if (r === 'COACH') return '/coach';
    return '';
  }

  @HostListener('window:scroll', [])
  onScroll() { this.scrolled = window.scrollY > 10; }

  isActive(item: NavItem): boolean { return this.currentUrl.includes(`/${item.route}`); }

  getIcon(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.svgIcons[name] || '');
  }

  getRoute(item: NavItem): string { return `/coach/${item.route}`; }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }

  onNotificationClick(notification: any) {
    this.notifService.markRead(notification.id);
    this.notifOpen = false;

    if (notification.senderId) {
      this.router.navigateByUrl(`${this.rolePrefix}/messages?conversationId=${notification.senderId}`);
    } else {
      this.router.navigateByUrl(`${this.rolePrefix}/messages`);
    }
  }

  get nonLus(): number { return Math.min(this.notifService.nonLus(), 99); }
  get notifs() { return this.notifService.latestFive(); }

  get userInitials(): string {
    const u = this.auth.currentUser;
    return `${u?.firstName?.[0] ?? ''}${u?.lastName?.[0] ?? ''}`.toUpperCase();
  }
}
