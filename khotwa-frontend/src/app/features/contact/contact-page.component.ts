import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FeedbackService } from '../../core/services/feedback.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  showFeedbackForm = false;
  submitting = false;
  successMessage = '';
  errorMessage = '';

  form = {
    rating: 0,
    subject: '',
    comment: ''
  };
  selectedFile: File | null = null;

  readonly subjects = [
    'Bug report',
    'Feature request',
    'Performance issue',
    'UI/UX feedback',
    'Other'
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private feedbackService: FeedbackService
  ) {}

  setRating(stars: number): void {
    this.form.rating = stars;
  }

  goToAdminChat(): void {
    const role = this.authService.currentUser?.role;
    const prefix = role === 'ADMIN' ? '/khotwaadmin'
      : role === 'COACH' ? '/coach'
      : '/entrepreneur';
    this.router.navigate([`${prefix}/messages`], { queryParams: { contactAdmin: true } });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  clearSelectedFile(fileInput?: HTMLInputElement): void {
    this.selectedFile = null;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  submitFeedback(): void {
    this.successMessage = '';
    this.errorMessage = '';
    if (!this.form.rating || !this.form.subject.trim() || !this.form.comment.trim()) {
      this.errorMessage = 'Please complete rating, subject, and comment.';
      return;
    }
    const payload = new FormData();
    payload.append('rating', String(this.form.rating));
    payload.append('subject', this.form.subject.trim());
    payload.append('comment', this.form.comment.trim());
    if (this.selectedFile) {
      payload.append('screenshot', this.selectedFile);
    }

    this.submitting = true;
    this.feedbackService.submitFeedback(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.successMessage = 'Feedback sent successfully. Thank you!';
        this.form = { rating: 0, subject: '', comment: '' };
        this.selectedFile = null;
      },
      error: () => {
        this.submitting = false;
        this.errorMessage = 'Unable to submit feedback right now. Please try again.';
      }
    });
  }
}
