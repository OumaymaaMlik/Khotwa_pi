import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FeedbackItem {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  subject: string;
  comment: string;
  screenshotUrl?: string | null;
  reviewed: boolean;
  reviewedAt?: string | null;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private readonly apiUrl = 'http://localhost:8084/khotwa/api/feedback';

  constructor(private http: HttpClient) {}

  submitFeedback(payload: FormData): Observable<FeedbackItem> {
    return this.http.post<FeedbackItem>(this.apiUrl, payload);
  }

  getAdminFeedbacks(): Observable<FeedbackItem[]> {
    return this.http.get<FeedbackItem[]>(`${this.apiUrl}/admin`);
  }

  markReviewed(feedbackId: number): Observable<FeedbackItem> {
    return this.http.put<FeedbackItem>(`${this.apiUrl}/${feedbackId}/review`, {});
  }
}
