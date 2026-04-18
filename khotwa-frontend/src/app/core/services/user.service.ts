import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserResponse } from '../models/user.model';
import { AuthService } from './auth.service';

const API_BASE = '/khotwa/api';

export interface UpdateProfilePayload {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  startup?: string;
  avatar?: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  /** GET /api/users/me */
  getMyProfile(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${API_BASE}/users/me`);
  }

  /** PUT /api/users/me */
  updateMyProfile(payload: UpdateProfilePayload): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${API_BASE}/users/me`, payload).pipe(
      tap(() => this.auth.refreshProfile().subscribe())
    );
  }

  uploadAvatar(file: File): Observable<{ avatarUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ avatarUrl: string }>(`${API_BASE}/users/me/avatar`, formData);
  }

  changePassword(payload: ChangePasswordPayload): Observable<void> {
    return this.http.put<void>(`${API_BASE}/users/me/change-password`, payload);
  }
}