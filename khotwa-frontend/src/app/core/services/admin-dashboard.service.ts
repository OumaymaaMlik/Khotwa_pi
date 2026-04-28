import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminDashboardDTO } from '../models/admin-dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private apiUrl = 'http://localhost:8080/api/admin/dashboard'; // Adjust the URL if necessary, but usually standard

  constructor(private http: HttpClient) {}

  getDashboardAnalytics(): Observable<AdminDashboardDTO> {
    return this.http.get<AdminDashboardDTO>(this.apiUrl);
  }
}
