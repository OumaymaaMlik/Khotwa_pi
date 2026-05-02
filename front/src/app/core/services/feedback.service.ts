import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

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
  private readonly apiUrl = '/api/feedback';
  private readonly feedbackUpdatedSubject = new Subject<void>();
  readonly feedbackUpdated$ = this.feedbackUpdatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  submitFeedback(payload: FormData): Observable<FeedbackItem> {
    return this.http.post<FeedbackItem>(this.apiUrl, payload).pipe(
      tap(() => this.feedbackUpdatedSubject.next())
    );
  }

  getAdminFeedbacks(): Observable<FeedbackItem[]> {
    return this.http.get<FeedbackItem[]>(`${this.apiUrl}/admin`);
  }

  markReviewed(feedbackId: number): Observable<FeedbackItem> {
    return this.http.put<FeedbackItem>(`${this.apiUrl}/${feedbackId}/review`, {}).pipe(
      tap(() => this.feedbackUpdatedSubject.next())
    );
  }
}
