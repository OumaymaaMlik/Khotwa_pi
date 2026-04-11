import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly API_URL = 'http://localhost:8084/khotwa/api/users';

  constructor(private http: HttpClient) {}

  private adminHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-User-Id':   localStorage.getItem('user_id')   ?? '1',
      'X-User-Role': localStorage.getItem('user_role') ?? 'ADMIN',
    });
  }

  /** GET /api/users — liste tous les utilisateurs (admin) */
  getUsersHttp(filters: any = {}): Observable<any> {
    let params = new HttpParams();
    if (filters.role   && filters.role   !== 'all') params = params.set('role',   filters.role.toUpperCase());
    if (filters.search && filters.search.trim())    params = params.set('search', filters.search.trim());

    return this.http.get<any>(this.API_URL, {
      headers: this.adminHeaders(),
      params,
    });
  }

  /** GET /api/users/{id} */
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`, { headers: this.adminHeaders() });
  }

  /** GET /api/users/me */
  getMyProfile(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/me`, { headers: this.adminHeaders() });
  }

  /** PUT /api/users/me */
  updateMyProfile(body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/me`, body, { headers: this.adminHeaders() });
  }

  /** PUT /api/users/{id} — admin update */
  adminUpdateUser(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, body, { headers: this.adminHeaders() });
  }

  /** DELETE /api/users/{id} — admin */
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`, { headers: this.adminHeaders() });
  }
}
