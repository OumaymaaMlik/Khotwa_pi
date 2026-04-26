import { Component, OnInit } from '@angular/core';
import { FeedbackItem, FeedbackService } from '../../../core/services/feedback.service';

@Component({
  selector: 'app-admin-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class AdminFeedbacksComponent implements OnInit {
  feedbacks: FeedbackItem[] = [];
  loading = false;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    this.loading = true;
    this.feedbackService.getAdminFeedbacks().subscribe({
      next: (items) => {
        this.feedbacks = items ?? [];
        this.loading = false;
      },
      error: () => {
        this.feedbacks = [];
        this.loading = false;
      }
    });
  }

  markReviewed(item: FeedbackItem): void {
    if (item.reviewed) return;
    this.feedbackService.markReviewed(item.id).subscribe({
      next: (updated) => {
        this.feedbacks = this.feedbacks.map(f => f.id === updated.id ? updated : f);
      }
    });
  }
}
