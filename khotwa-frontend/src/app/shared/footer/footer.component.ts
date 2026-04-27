import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private authService: AuthService) {}

  get showContactLink(): boolean {
    const userId = this.authService.currentUser?.idUser ?? 0;
    return userId !== 1;
  }

  get contactRoute(): string {
    const role = this.authService.currentUser?.role;
    if (role === 'COACH') return '/coach/contact';
    if (role === 'ENTREPRENEUR') return '/entrepreneur/contact';
    if (role === 'ADMIN') return '/khotwaadmin/contact';
    return '/contact';
  }
}
