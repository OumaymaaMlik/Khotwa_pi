import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-layout-visitor',
  templateUrl: './layout-visitor.component.html',
  styleUrls: ['./layout-visitor.component.css']
})
export class LayoutVisitorComponent {
  menuOpen = false;

  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  get userName(): string {
    const u = this.auth.currentUser;
    return u ? u.firstName + ' ' + u.lastName : 'Visitor';
  }
}
