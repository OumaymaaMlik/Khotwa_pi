import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UserService, UpdateProfilePayload, ChangePasswordPayload } from '../../core/services/user.service';
import { UserResponse } from '../../core/models/user.model';
import { HttpClient } from '@angular/common/http';

type Tab = 'info' | 'avatar' | 'password';

/** URL de base du backend - Assure-toi que le port correspond à ton Spring Boot */
const BACKEND_ORIGIN = 'http://localhost:8084';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  activeTab: Tab = 'info';
  loading       = true;
  saving        = false;
  successMsg    = '';
  errorMsg      = '';

  firstName    = '';
  lastName     = '';
  emailAddress = '';
  phoneNumber  = '';
  startup      = '';
  currentAvatar: string | null = null;

  avatarFile: File | null = null;
  avatarPreview: string | null = null;
  uploadingAvatar = false;

  currentPassword = '';
  newPassword     = '';
  confirmPassword = '';
  showCurrentPwd  = false;
  showNewPwd      = false;
  showConfirmPwd  = false;

  // Variables pour la vérification OTP
  phoneVerified       = false;   
  otpSent             = false;   
  otpCode             = '';      
  sendingOtp          = false;
  verifyingOtp        = false;
  phoneToVerify       = '';      

  constructor(
    public auth: AuthService,
    private userService: UserService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe({
      next: (profile: UserResponse) => {
        this.patchForm(profile);
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Unable to load your account. Please refresh the page.';
        this.loading  = false;
      },
    });
  }

  // ─────────────────────────────────────────────
  // Navigation & Helpers
  // ─────────────────────────────────────────────

  setTab(tab: Tab): void {
    this.activeTab = tab;
    this.clearMessages();
  }

  /** Résout l'URL de l'image pour le template */
  resolveAvatar(url: string | null): string | null {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('data:')) {
      return url;
    }
    const separator = url.startsWith('/') ? '' : '/';
    return `${BACKEND_ORIGIN}${separator}${url}`;
  }

  get displayedAvatar(): string | null {
    if (this.avatarPreview) return this.avatarPreview;
    return this.resolveAvatar(this.currentAvatar);
  }

  // ─────────────────────────────────────────────
  // Profil Personnel
  // ─────────────────────────────────────────────

  saveProfile(): void {
    this.clearMessages();
    if (!this.firstName.trim() || !this.lastName.trim()) {
      this.errorMsg = 'First name and last name are required.';
      return;
    }

    const payload: UpdateProfilePayload = {
      firstName:    this.firstName.trim(),
      lastName:     this.lastName.trim(),
      emailAddress: this.emailAddress.trim(),
      phoneNumber:  this.phoneNumber.trim() || undefined,
      startup:      this.startup.trim()     || undefined,
    };

    this.saving = true;
    this.userService.updateMyProfile(payload).subscribe({
      next: (updated: UserResponse) => {
        this.patchForm(updated);
        this.saving     = false;
        this.successMsg = 'Account updated successfully!';
        this.auth.refreshProfile().subscribe();
        
        if (updated.phoneNumber !== this.phoneToVerify) {
          this.otpSent = false;
          this.otpCode = '';
        }
      },
      error: (err: any) => {
        this.saving   = false;
        this.errorMsg = err?.error?.message || 'Failed to update account.';
      },
    });
  }

  // ─────────────────────────────────────────────
  // Gestion de l'Avatar
  // ─────────────────────────────────────────────

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;

    const allowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowed.includes(file.type)) {
      this.errorMsg = 'Only PNG, JPEG and WebP images are accepted.';
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      this.errorMsg = 'File must be smaller than 20 MB.';
      return;
    }

    this.clearMessages();
    this.avatarFile = file;

    const reader = new FileReader();
    reader.onload = (e) => { this.avatarPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
  }

  uploadAvatar(): void {
    if (!this.avatarFile) return;
    this.clearMessages();
    this.uploadingAvatar = true;

    this.userService.uploadAvatar(this.avatarFile).subscribe({
      next: (res) => {
        const avatarUrl = res.avatarUrl;
        this.userService.updateMyProfile({ avatar: avatarUrl }).subscribe({
          next: (updated: UserResponse) => {
            this.currentAvatar = updated.avatar;
            this.avatarPreview = null;
            this.avatarFile = null;
            this.uploadingAvatar = false;
            this.successMsg = 'Avatar mis à jour avec succès !';
            this.auth.refreshProfile().subscribe();
          },
          error: () => {
            const cacheBuster = new Date().getTime();
            this.currentAvatar = `${avatarUrl}?t=${cacheBuster}`;
            this.avatarPreview = null;
            this.avatarFile = null;
            this.uploadingAvatar = false;
            this.errorMsg = "L'avatar a été téléversé, mais le compte n'a pas pu être mis à jour.";
          },
        });
      },
      error: (err: any) => {
        this.uploadingAvatar = false;
        this.errorMsg = err?.error?.message || "Échec du téléversement de l'avatar.";
      },
    });
  }

  removeAvatar(): void {
    this.clearMessages();
    this.userService.updateMyProfile({ avatar: '' }).subscribe({
      next: () => {
        this.currentAvatar = null;
        this.avatarPreview = null;
        this.avatarFile    = null;
        this.successMsg    = 'Avatar removed.';
        this.auth.refreshProfile().subscribe();
      },
      error: () => { this.errorMsg = 'Failed to remove avatar.'; },
    });
  }

  cancelAvatarChange(): void {
    this.avatarFile    = null;
    this.avatarPreview = null;
    this.clearMessages();
  }



  // ─────────────────────────────────────────────
  // Sécurité (Mot de passe)
  // ─────────────────────────────────────────────

  changePassword(): void {
    this.clearMessages();
    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      this.errorMsg = 'All password fields are required.';
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.errorMsg = 'New password and confirmation do not match.';
      return;
    }
    if (this.newPassword.length < 8) {
      this.errorMsg = 'New password must be at least 8 characters.';
      return;
    }

    const payload: ChangePasswordPayload = {
      currentPassword: this.currentPassword,
      newPassword:     this.newPassword,
      confirmPassword: this.confirmPassword,
    };

    this.saving = true;
    this.userService.changePassword(payload).subscribe({
      next: () => {
        this.saving          = false;
        this.successMsg      = 'Password changed successfully!';
        this.currentPassword = '';
        this.newPassword     = '';
        this.confirmPassword = '';
      },
      error: (err: any) => {
        this.saving   = false;
        this.errorMsg = err?.error?.message || 'Failed to change password.';
      },
    });
  }

  // ─────────────────────────────────────────────
  // Getters & Internals
  // ─────────────────────────────────────────────

  get initials(): string {
    const f = this.firstName?.[0] ?? '';
    const l = this.lastName?.[0]  ?? '';
    return (f + l).toUpperCase();
  }

  get roleLabel(): string {
    switch (this.auth.role) {
      case 'ADMIN':        return 'Administrator';
      case 'COACH':        return 'Coach';
      case 'ENTREPRENEUR': return 'Entrepreneur';
      default:             return '';
    }
  }

  get passwordStrength(): 'weak' | 'medium' | 'strong' {
    if (this.newPassword.length < 8)  return 'weak';
    if (this.newPassword.length < 12) return 'medium';
    return 'strong';
  }

  get passwordStrengthLabel(): string {
    return { weak: 'Too short', medium: 'Medium', strong: 'Strong' }[this.passwordStrength];
  }

  private patchForm(profile: UserResponse): void {
    this.firstName     = profile.firstName    ?? '';
    this.lastName      = profile.lastName     ?? '';
    this.emailAddress  = profile.emailAddress ?? '';
    this.phoneNumber   = profile.phoneNumber  ?? '';
    this.startup       = profile.startup      ?? '';
    this.currentAvatar = profile.avatar       ?? null;
  }

  private clearMessages(): void {
    this.successMsg = '';
    this.errorMsg   = '';
  }
}