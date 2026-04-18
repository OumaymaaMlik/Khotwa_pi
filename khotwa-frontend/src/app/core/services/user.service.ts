import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly API = 'http://localhost:8084/khotwa/api/users';

  constructor(private http: HttpClient) {}

  // GET /api/users/me
  getMyProfile(): Observable<any> {
    return this.http.get<any>(`${this.API}/me`);
  }

  // PUT /api/users/me
  updateMyProfile(body: any): Observable<any> {
    return this.http.put<any>(`${this.API}/me`, body);
  }

  // PUT /api/users/me/change-password
  changePassword(body: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.http.put<any>(`${this.API}/me/change-password`, body);
  }

  // GET /api/users  (ADMIN only — JWT role check server-side)
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  // Alias for components that use getUsersHttp()
  getUsersHttp(filters: any = {}): Observable<any> {
    return this.getAllUsers();
  }

  // GET /api/users/{id}
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  // PUT /api/users/{id}  (ADMIN)
  adminUpdateUser(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}`, body);
  }

  // PUT /api/users/{id}/plan  (ADMIN)
  updateUserPlan(id: number, body: { planType: string }): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}/plan`, body);
  }

  // DELETE /api/users/{id}  (ADMIN)
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
}
