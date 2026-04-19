import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { NotificationService } from '../core/services/notification.service';
import { UserRole } from '../core/models';
import { filter } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface NavItem { label: string; icon: string; route: string; roles: UserRole[]; }

@Component({ selector: 'app-layout', templateUrl: './layout.component.html', styleUrls: ['./layout.component.css'] })
export class LayoutComponent implements OnInit {

  sidebarOpen   = true;
  sidebarMobile = false;
  notifOpen     = false;
  currentUrl    = '';

  private readonly BACKEND_ORIGIN = 'http://localhost:8084';
  private safeIconCache: Record<string, SafeHtml> = {};

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: 'dashboard', roles: ['ADMIN','ENTREPRENEUR','COACH','VISITOR'] },

    { label: 'Projects', icon: 'folder', route: 'projets', roles: ['ADMIN','ENTREPRENEUR','COACH','VISITOR'] },

    { label: 'Library', icon: 'book', route: 'bibliotheque', roles: ['ADMIN','ENTREPRENEUR','COACH','VISITOR'] },

    { label: 'Talent Market', icon: 'people', route: 'talent', roles: ['ADMIN','ENTREPRENEUR','COACH','VISITOR'] },


    // ADMIN ONLY
    { label: 'Users', icon: 'users', route: 'utilisateurs', roles: ['ADMIN'] },
    { label: 'Subscriptions', icon: 'card', route: 'subscriptions', roles: ['ADMIN'] },

    // COACH ONLY
    { label: 'My Startups', icon: 'rocket', route: 'startups', roles: ['COACH'] },
    { label: 'Validations', icon: 'check', route: 'validations', roles: ['COACH'] },
  ];

  svgIcons: Record<string, string> = {
    dashboard: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1.5"/><rect width="7" height="5" x="14" y="3" rx="1.5"/><rect width="7" height="9" x="14" y="12" rx="1.5"/><rect width="7" height="5" x="3" y="16" rx="1.5"/></svg>`,
    folder:    `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    workflow:  `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    calendar:  `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    message:   `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    book:      `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    rocket:    `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    check:     `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    event:     `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    people:    `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    progress:  `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    card2:     `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><circle cx="7" cy="15" r="1" fill="currentColor"/></svg>`,
    users:     `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    search:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    bell:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    home:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    logout:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    menu:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    close:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    chevLeft:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`,
    card:      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
  };

  constructor(
    public auth: AuthService,
    public notifService: NotificationService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => { this.currentUrl = e.url; });
    this.currentUrl = this.router.url;
    this.onResize();
    if (!this.auth.currentUser?.firstName) {
      this.auth.refreshProfile().subscribe({ next: () => {}, error: () => {} });
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth <= 900) {
      this.sidebarOpen   = false;
      this.sidebarMobile = true;
    } else {
      this.sidebarOpen   = true;
      this.sidebarMobile = false;
    }
  }

  toggleSidebar(): void { this.sidebarOpen = !this.sidebarOpen; }
  closeOnMobile(): void { if (this.sidebarMobile) this.sidebarOpen = false; }

  // ── Avatar ────────────────────────────────────────────────────────────────
  get avatarUrl(): string | null {
    const a = this.auth.currentUser?.avatar?.trim();
    if (!a) return null;
    return a.startsWith('http') ? a : `${this.BACKEND_ORIGIN}${a.startsWith('/') ? '' : '/'}${a}`;
  }
  onAvatarError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  // ── Nav helpers ───────────────────────────────────────────────────────────
  get visibleNav(): NavItem[] {
    const role = this.auth.currentUser?.role;
    return this.navItems.filter(item => role && item.roles.includes(role));
  }
  getRoute(item: NavItem): string  { return `${this.rolePrefix}/${item.route}`; }
  getIcon(name: string): SafeHtml {
    if (!this.safeIconCache[name]) {
      this.safeIconCache[name] =
        this.sanitizer.bypassSecurityTrustHtml(this.svgIcons[name] ?? '');
    }
    return this.safeIconCache[name];
  }
  getSectionIcon(section?: string): SafeHtml {
    if (section === 'Admin') return this.getIcon('users');
    return this.getIcon('dashboard');
  }

 get roleLabel(): string {
    const r = this.auth.currentUser?.role;
    if (r === 'ADMIN') return 'ADMINistrator';
    if (r === 'ENTREPRENEUR') return 'ENTREPRENEUR';
    if (r === 'COACH') return 'COACH';
    if (r === 'VISITOR') return 'VISITOR'; // Ajout du label
    return '';
  }

  get roleColor(): string {
    const r = this.auth.currentUser?.role;
    if (r === 'ADMIN') return '#E8622A';
    if (r === 'ENTREPRENEUR') return '#2ABFBF';
    if (r === 'COACH') return '#7C5CBF';
    return '#F5A623';
  }

  get rolePrefix(): string {
    const r = this.auth.currentUser?.role;
    if (r === 'ADMIN') return '/khotwaadmin';
    if (r === 'ENTREPRENEUR') return '/entrepreneur';
    if (r === 'COACH') return '/coach';
    return '/visitor';
  }
  get userInitials(): string {
    const f = this.auth.currentUser?.firstName?.trim() ?? '';
    const l = this.auth.currentUser?.lastName?.trim()  ?? '';
    return `${f.charAt(0).toUpperCase()}${l.charAt(0).toUpperCase()}` || '?';
  }

  // ── FIX : getter propre sans "as any" dans le template ──────────────────
  get userEmail(): string {
    const u = this.auth.currentUser as any;
    return u?.emailAddress || u?.email || '';
  }

isActive(item: NavItem): boolean {
  return this.router.url.split('?')[0] === `${this.rolePrefix}/${item.route}`;
}  //switchRole(role: UserRole) { this.auth.login(role); this.router.navigateByUrl(this.auth.getDefaultRoute()); }
logout(): void {
  this.auth.logout();
  this.router.navigateByUrl('/');
}  // ── Page title ────────────────────────────────────────────────────────────
  get currentPageLabel(): string {
    const found = this.visibleNav.find(i => this.isActive(i));
    return found?.label ?? 'Dashboard';
  }

  // ── Notifications ─────────────────────────────────────────────────────────
  get nonLus(): number { return this.notifService.nonLus(); }
  get notifs()         { return this.notifService.notifs(); }


}
