import { Component } from '@angular/core';

@Component({
  selector: 'app-coach-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class CoachSettingsComponent {
  activeTab: string = 'account';

  // Account settings
  email: string = 'coach&#64;example.com';
  fullName: string = 'Ahmed Ben Ali';
  phone: string = '+216 50 123 456';

  // Security settings
  mfaEnabled: boolean = false;
  lastPasswordChange: string = '2024-01-15';

  // Notifications
  emailNotifications: boolean = true;
  pushNotifications: boolean = true;
  weeklyDigest: boolean = true;

  // Preferences
  theme: string = 'light';
  language: string = 'en';

  // Activity log
  activityLog = [
    { event: 'Sign in', time: '2024-01-20 14:32:00', location: 'Tunis, TN' },
    { event: 'Password changed', time: '2024-01-15 09:15:00', location: 'Tunis, TN' },
    { event: 'MFA enabled', time: '2024-01-10 11:45:00', location: 'Tunis, TN' },
    { event: 'Profile updated', time: '2024-01-05 16:20:00', location: 'Sousse, TN' },
  ];

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  saveAccount() {
    alert('Account settings saved!');
  }

  saveSecurity() {
    alert('Security settings saved!');
  }

  saveNotifications() {
    alert('Notification preferences saved!');
  }

  savePreferences() {
    alert('Preferences saved!');
  }

  exportData() {
    alert('Your data export is being prepared. Check your email shortly.');
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion request submitted.');
    }
  }
}
