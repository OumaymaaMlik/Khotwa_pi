import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/user.model';
import { of, switchMap } from 'rxjs';
import { SubscriptionService } from '../../core/services/subscription.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  mode: 'signin' | 'signup' = 'signin';

  emailAddress = '';
  password     = '';
  firstName    = '';
  lastName     = '';
  phoneNumber  = '';
  selectedRole: UserRole | null = null;

  error   = '';
  success = '';
  loading = false;
  googleSigninInitialized = false;
  googleSignupInitialized = false;
  private googleIntent: 'signin' | 'signup' = 'signin';
  private sdkRetryTimer: ReturnType<typeof setTimeout> | null = null;

  roles = [
    { role: 'ENTREPRENEUR' as UserRole, label: 'Entrepreneur',    color: '#2ABFBF', icon: '🚀' },
    { role: 'COACH'        as UserRole, label: 'Coach / Mentor',   color: '#0d4a38', icon: '🎯' },
    { role: 'VISITOR'      as UserRole, label: 'Talent / Visitor', color: '#7C5CBF', icon: '✨' },
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const modeParam = this.route.snapshot.queryParamMap.get('mode');
    if (modeParam === 'signup') {
      this.mode = 'signup';
      this.googleIntent = 'signup';
    }
  }

  ngAfterViewInit(): void {
    this.initGoogleSignIn();
  }

  ngOnDestroy(): void {
    if (this.sdkRetryTimer) {
      clearTimeout(this.sdkRetryTimer);
      this.sdkRetryTimer = null;
    }
  }

  private initGoogleSignIn(retries = 15): void {
    const googleApi = (window as any).google;
    const clientId = '821008875875-svuordjraim16c8gb4gv6g0rffrrveui.apps.googleusercontent.com';
    const containerId = this.mode === 'signup' ? 'google-signup-btn' : 'google-signin-btn';

    if (!googleApi?.accounts?.id) {
      if (retries > 0) {
        this.sdkRetryTimer = setTimeout(() => this.initGoogleSignIn(retries - 1), 300);
      }
      return;
    }

    if (!clientId || clientId.startsWith('YOUR_GOOGLE_CLIENT_ID')) {
      this.error = 'Google login is not configured yet. Set your Google Client ID in login.component.ts.';
      return;
    }

    googleApi.accounts.id.initialize({
      client_id: clientId,
      callback: (response: google.accounts.id.CredentialResponse) => this.handleGoogleCallback(response)
    });

    const buttonContainer = document.getElementById(containerId);
    if (!buttonContainer) {
      if (retries > 0) {
        this.sdkRetryTimer = setTimeout(() => this.initGoogleSignIn(retries - 1), 200);
      }
      return;
    }

    buttonContainer.innerHTML = '';
    googleApi.accounts.id.renderButton(buttonContainer, {
      theme: 'outline',
      size: 'large',
      shape: 'pill',
      width: 320,
      text: this.mode === 'signup' ? 'signup_with' : 'signin_with'
    });
    if (this.mode === 'signup') {
      this.googleSignupInitialized = true;
    } else {
      this.googleSigninInitialized = true;
    }
    // Trigger change detection to avoid NG0100 (ExpressionChangedAfterItHasBeenCheckedError)
    this.cdr.detectChanges();
  }

  private handleGoogleCallback(response: google.accounts.id.CredentialResponse): void {
    this.zone.run(() => {
      this.error = '';
      this.success = '';

      if (!response?.credential) {
        this.error = 'Google sign-in did not return a valid token. Please try again.';
        return;
      }

      const isSignupIntent = this.googleIntent === 'signup';
      const role: UserRole | undefined = isSignupIntent
        ? (this.selectedRole ?? undefined)
        : undefined;

      if (isSignupIntent && !role) {
        this.error = 'Choose your role to continue with Google.';
        return;
      }

      this.loading = true;
      this.auth.loginWithGoogle(response.credential, isSignupIntent ? 'signup' : 'signin', role).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl(this.auth.getDefaultRoute());
        },
        error: (err) => {
          this.loading = false;
          const backendMessage = err?.error?.message || err?.error?.error || '';
          const isMissingAccount =
            err?.status === 404 ||
            err?.status === 409 ||
            /not\s*found|signup|sign\s*up|register/i.test(String(backendMessage));

          if (!isSignupIntent && isMissingAccount) {
            this.error = 'No account found for this Google email. Please sign up first.';
            return;
          }
          if (isSignupIntent && /already exists|already used|sign in/i.test(String(backendMessage))) {
            this.error = 'This Google account already exists. Please use Sign In.';
            return;
          }

          if (!backendMessage) {
            this.error = isSignupIntent
              ? 'This Google account may already exist. Please use Sign In.'
              : 'No account found for this Google email. Please sign up first.';
            return;
          }

          this.error = backendMessage;
        }
      });
    });
  }

  onGoogleSignInError(): void {
    if (this.loading) return;
    this.error = 'Google sign-in is not ready yet. Check Google Client ID and browser popup/third-party cookie settings, then retry.';
  }

  setMode(mode: 'signin' | 'signup'): void {
    this.mode = mode;
    this.googleIntent = mode;
    this.error = '';
    this.success = '';
    if (mode === 'signin') {
      this.googleSigninInitialized = false;
    } else {
      this.googleSignupInitialized = false;
    }
    setTimeout(() => this.initGoogleSignIn(), 0);
  }

  get googleSignupRoleLabel(): string {
    if (!this.selectedRole) return 'Choose your role to continue with Google.';
    const labels: Record<string, string> = {
      COACH: 'Sign up with Google as Coach',
      ENTREPRENEUR: 'Sign up with Google as Entrepreneur',
      VISITOR: 'Sign up with Google as Talent / Visitor',
    };
    return labels[this.selectedRole] ?? 'Sign up with Google';
  }

  // ── Sign In ── POST /api/auth/login

 signIn(): void {
   this.error = '';
   this.success = '';

   if (!this.emailAddress.trim() || !this.password) {
     this.error = 'Please fill in all fields.';
     return;
   }

   this.loading = true;

   this.auth.signIn({
     emailAddress: this.emailAddress.trim(),
     password: this.password
   }).pipe(
     switchMap(() => this.auth.refreshProfile()),
     switchMap(() => {
       const user = this.auth.currentUser;

       if (!user || user.role !== 'ENTREPRENEUR' || !user.idUser) {
         return of(null);
       }

       return this.subscriptionService.getUpgradeSuggestion(user.idUser);
     })
   ).subscribe({
     next: (suggestion: any) => {
       this.loading = false;

       if (suggestion?.shouldSuggest) {
         sessionStorage.setItem('upgradeSuggestion', JSON.stringify(suggestion));
       } else {
         sessionStorage.removeItem('upgradeSuggestion');
       }

       this.router.navigateByUrl(this.auth.getDefaultRoute());
     },
     error: (err: any) => {
       this.loading = false;

       if (this.auth.token) {
         this.router.navigateByUrl(this.auth.getDefaultRoute());
       } else {
         this.error = err?.error?.message || 'Invalid credentials. Please try again.';
       }
     }
   });
 }
  signUp() {
    this.error = ''; this.success = '';
    if (!this.selectedRole) {
      this.error = 'Please select a role to continue.';
      return;
    }
    if (!this.emailAddress.trim() || !this.password ||
        !this.firstName.trim()    || !this.lastName.trim()) {
      this.error = 'Please fill in all required fields.';
      return;
    }
    if (this.password.length < 8) {
      this.error = 'Password must be at least 8 characters.';
      return;
    }

    this.loading = true;
    const body = {
      firstName:    this.firstName.trim(),
      lastName:     this.lastName.trim(),
      emailAddress: this.emailAddress.trim(),
      password:     this.password,
      role:         this.selectedRole,
      phoneNumber:  this.phoneNumber.trim() || null
    };

    this.auth.signUp(body).subscribe({
      next: () => {
        // Register succeeded → auto login
        this.auth.signIn({ emailAddress: body.emailAddress, password: body.password })
          .subscribe({
            next: () => {
              this.loading = false;
              this.router.navigateByUrl(this.auth.getDefaultRoute());
            },
            error: () => {
              // Register OK but login failed → go to login page
              this.loading = false;
              this.mode = 'signin';
              this.success = 'Account created! Please sign in.';
            }
          });
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message ?? 'Registration failed. Email may already be in use.';
      }
    });
  }

  continueAsVisitor() {
    this.auth.setVisitorSession();
    this.router.navigateByUrl('/visitor/events');
  }
}