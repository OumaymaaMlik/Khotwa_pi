import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserResponse } from '../models/user.model';
import { AuthService } from './auth.service';

export interface UpdateProfilePayload {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  startup?: string;
  avatar?: string;
  specialite?: string;    // AJOUT — spécialité du coach
  disponibilite?: string; // AJOUT — plage de dates "YYYY-MM-DD/YYYY-MM-DD"
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly API = '/api/users';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  // GET /me
  getMyProfile(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API}/me`);
  }

  // UPDATE /me
  updateMyProfile(payload: UpdateProfilePayload): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.API}/me`, payload).pipe(
      tap(() => this.auth.refreshProfile().subscribe())
    );
  }

  //  CHANGE PASSWORD
  changePassword(payload: ChangePasswordPayload): Observable<void> {
    return this.http.put<void>(`${this.API}/me/change-password`, payload);
  }

  //  ALL USERS (ADMIN)
  getAllUsers(params?: any): Observable<any> {
    return this.http.get<any>(`${this.API}`, { params });
  }

  getUsersHttp(params?: any): Observable<any> {
    return this.getAllUsers(params);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  adminUpdateUser(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}`, body);
  }

  //  PLAN
  updateUserPlan(id: number, body: { planType: string }): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}/plan`, body);
  }

  deleteUser(id : number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  uploadAvatar(file: File): Observable<{ avatarUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ avatarUrl: string }>(`${this.API}/me/avatar`, formData);
  }
}
