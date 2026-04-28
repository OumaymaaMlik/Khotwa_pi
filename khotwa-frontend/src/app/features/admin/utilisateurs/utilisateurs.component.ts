import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-admin-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class AdminUtilisateursComponent implements OnInit {

  users: any[] = [];
  loading = false;
  filtre = 'all';
  search = '';
  currentPage = 0;
  pageSize = 10;
  totalElements = 0;

  constructor(private userService: UserService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.userService.getUsersHttp({ page: this.currentPage, size: this.pageSize, role: this.filtre, search: this.search })
      .subscribe({
        next: (res: any) => {
          this.users = res.data ?? [];
          this.totalElements = res.totalElements ?? this.users.length;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }

  onFilterChange() { this.currentPage = 0; this.load(); }

  deleteUser(id: number) {
    if (!confirm('Supprimer cet utilisateur ?')) return;
    this.userService.deleteUser(id).subscribe({ next: () => this.load() });
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.totalElements) { this.currentPage++; this.load(); }
  }

  prevPage() {
    if (this.currentPage > 0) { this.currentPage--; this.load(); }
  }
}
