import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../../core/models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit, OnDestroy {
  scrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 20; }

  constructor(private router: Router) {}

  // ── Slider ──────────────────────────────────────────────────────
  sliderIndex = 0;
  private sliderTimer: any;

  slides = [
    {
      badge: 'Next-generation incubation platform',
      title: 'Launch your startup',
      titleAccent: 'without friction',
      sub: 'The all-in-one platform for incubators, entrepreneurs and coaches — smart workflows, real-time tracking, automated certification.',
      bg: 'slide-bg-1',
    },
    {
      badge: 'Intelligent coaching',
      title: 'Support your',
      titleAccent: 'startups to success',
      sub: 'Manage your startup portfolio, validate deliverables and organise your coaching sessions from one single space.',
      bg: 'slide-bg-2',
    },
    {
      badge: 'Resource library',
      title: 'Learn,',
      titleAccent: 'grow, succeed',
      sub: 'Access hundreds of resources — videos, templates, legal guides — and track your progress in real time.',
      bg: 'slide-bg-3',
    },
  ];

  get currentSlide() { return this.slides[this.sliderIndex]; }

  ngOnInit() {
    this.sliderTimer = setInterval(() => {
      this.sliderIndex = (this.sliderIndex + 1) % this.slides.length;
    }, 5000);
  }
  ngOnDestroy() { clearInterval(this.sliderTimer); }

  goSlide(i: number) { this.sliderIndex = i; }
  prevSlide() { this.sliderIndex = (this.sliderIndex - 1 + this.slides.length) % this.slides.length; }
  nextSlide() { this.sliderIndex = (this.sliderIndex + 1) % this.slides.length; }

  // ── Nav ─────────────────────────────────────────────────────────
  readonly navItems = [
    { label: 'Features',     anchor: '#fonctionnalites' },
    { label: 'Spaces',       anchor: '#roles' },
    { label: 'How it works', anchor: '#processus' },
    { label: 'Pricing',      anchor: '#pricing' },
    { label: 'Contact',      anchor: '#contact' },
  ];

  // ── Roles ────────────────────────────────────────────────────────
  readonly roles = [
    { role: 'entrepreneur' as UserRole, emoji: '🚀', name: 'Entrepreneur', color: '#2ABFBF',
      desc: 'Manage your startup, track your incubation journey and collaborate with your coach.',
      features: ['Project management', 'Smart workflows', 'SLA tracking', 'Planning & deadlines', 'Resource library'] },
    { role: 'coach' as UserRole, emoji: '🎯', name: 'Coach / Mentor', color: '#0d4a38',
      desc: 'Support your startups, validate deliverables and organise your coaching sessions.',
      features: ['Startup tracking', 'Proof-based validation', 'Coaching sessions', 'Direct messaging', 'Personal calendar'] },
    { role: 'visitor' as UserRole, emoji: '✨', name: 'Talent / Visitor', color: '#0d9488',
      desc: 'Create your talent profile, browse job listings and submit applications in one place.',
      features: ['Talent profile', 'Job board', 'Applications tracking', 'Skills & CV links'] },
  ];

  // ── Features ─────────────────────────────────────────────────────
  readonly features = [
    { icon: '📁', title: 'Project Management',    desc: 'Steps, tasks, deliverables and real-time progress tracking with integrated Gantt view.',   bg: 'rgba(232,98,42,0.08)' },
    { icon: '⚡', title: 'Smart Workflows',        desc: 'SLA automation, 24h deadline alerts and delay propagation — zero configuration.',           bg: 'rgba(42,191,191,0.08)' },
    { icon: '✅', title: 'Proof-Based Validation', desc: 'Every task validated with an attached document. Full history and traceability.',           bg: 'rgba(39,174,122,0.08)' },
    { icon: '📅', title: 'Planning & Calendar',   desc: 'Interactive monthly calendar with coaching slots, deadlines and events.',                   bg: 'rgba(13,74,56,0.08)' },
    { icon: '📚', title: 'Resource Library',       desc: 'Videos, templates, legal guides — filtered by access level with progress tracking.',       bg: 'rgba(245,166,35,0.08)' },
    { icon: '💬', title: 'Integrated Messaging',  desc: 'Direct communication between all stakeholders with history and attachments.',              bg: 'rgba(232,74,74,0.08)' },
  ];

  // ── Steps ────────────────────────────────────────────────────────
  readonly steps = [
    { n: '1', cls: 's1', title: 'Sign up',            desc: 'Choose your role and access your personalised space in seconds.' },
    { n: '2', cls: 's2', title: 'Create your project', desc: 'Define your steps, deliverables and plan your incubation roadmap.' },
    { n: '3', cls: 's3', title: 'Collaborate',         desc: 'Work with your coach, validate tasks and track your SLA progress.' },
    { n: '4', cls: 's4', title: 'Get certified',       desc: 'Complete all steps and earn your official KHOTWA certification.' },
  ];

  // ── Plans ────────────────────────────────────────────────────────
  readonly plans = [
    {
      name: 'Starter', icon: '🌱', color: '#2ABFBF', price: 'Free', period: '',
      desc: 'Perfect for individuals exploring the platform.',
      badge: '', featured: false, cta: 'Start for free',
      features: ['1 active project', 'Basic workflows', 'Coach access', 'Resource library', 'Email support'],
    },
    {
      name: 'Growth', icon: '🚀', color: '#E8622A', price: '49dt', period: '/ month',
      desc: 'For entrepreneurs serious about their startup journey.',
      badge: 'Most popular', featured: true, cta: 'Start free trial',
      features: ['Up to 5 projects', 'Advanced workflows & SLA', 'Priority coach', 'Analytics dashboard', '10 GB storage', 'Priority support'],
    },
    {
      name: 'Incubator', icon: '🏢', color: '#0d4a38', price: '89dt', period: '/ month',
      desc: 'For incubators managing multiple startups at scale.',
      badge: '', featured: false, cta: 'Contact us',
      features: ['Unlimited projects', 'Multi-coach management', 'Custom workflows', 'API access', 'White-label branding', 'Dedicated account manager'],
    },
  ];

  goLogin() { this.router.navigateByUrl('/login'); }
  loginAs(role: UserRole) { this.router.navigateByUrl('/login'); }

  trackByLabel(_: number, item: { label: string }) { return item.label; }
  trackByTitle(_: number, item: { title: string }) { return item.title; }
  trackByName(_: number, item: { name: string }) { return item.name; }
  trackByStep(_: number, item: { n: string }) { return item.n; }
  trackByText(_: number, item: string) { return item; }
  trackByIndex(i: number) { return i; }
}
