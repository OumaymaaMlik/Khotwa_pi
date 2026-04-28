import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { NotificationService } from '../core/services/notification.service';
import { filter } from 'rxjs/operators';

interface NavItem { label: string; icon: string; route: string; }

@Component({
  selector: 'app-layout-visitor',
  templateUrl: './layout-visitor.component.html',
  styleUrls: ['../layout-entrepreneur/layout-entrepreneur.component.css'],
})
export class LayoutVisitorComponent implements OnInit {
  notifOpen = false;
  mobileOpen = false;
  userMenuOpen = false;
  currentUrl = '';
  scrolled = false;

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
    { label: 'Offres', icon: 'folder', route: 'annonces' },
    { label: 'Mes candidatures', icon: 'message', route: 'candidatures' },
    { label: 'Mon profil talent', icon: 'people', route: 'profil' },
  ];

  svgIcons: Record<string, string> = {
    dashboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    message: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    people: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    home: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    logout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  };

  constructor(
    public auth: AuthService,
    public notifService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => { this.currentUrl = e.url; });
    this.currentUrl = this.router.url;
  }

  @HostListener('window:scroll', [])
  onScroll(): void { this.scrolled = window.scrollY > 10; }

  isActive(route: string): boolean { return this.currentUrl.includes(`/${route}`); }
  getIcon(name: string): string { return this.svgIcons[name] || ''; }
  getRoute(route: string): string { return `/visitor/${route}`; }
  logout(): void { this.auth.logout(); this.router.navigateByUrl('/'); }

  get nonLus(): number { return this.notifService.nonLus(); }
  get notifs() { return this.notifService.notifs(); }

  get userInitials(): string {
    const u = this.auth.currentUser;
    // ✅ firstName / lastName instead of prenom / nom
    return `${u?.firstName?.[0] ?? ''}${u?.lastName?.[0] ?? ''}`;
  }
}