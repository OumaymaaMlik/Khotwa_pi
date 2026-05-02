import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FeedbackService } from '../../core/services/feedback.service';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  private readonly ADMIN_ID = 1;
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
    private feedbackService: FeedbackService,
    private messageService: MessageService
  ) {}

  setRating(stars: number): void {
    this.form.rating = stars;
  }

  goToAdminChat(): void {
    const currentUserId = this.authService.currentUser?.idUser;
    const role = this.authService.currentUser?.role;
    const prefix = role === 'ADMIN' ? '/khotwaadmin'
      : role === 'COACH' ? '/coach'
      : '/entrepreneur';
    if (!currentUserId || role === 'ADMIN') {
      this.router.navigate([`${prefix}/messages`], { queryParams: { contactAdmin: true } });
      return;
    }
    this.messageService.ensureDirectConversation(currentUserId, this.ADMIN_ID).subscribe({
      next: (conversation: any) => {
        const conversationId = conversation?.id ?? conversation?.conversationId ?? this.ADMIN_ID;
        this.router.navigate([`${prefix}/messages`], { queryParams: { conversationId } });
      },
      error: () => {
        this.router.navigate([`${prefix}/messages`], { queryParams: { contactAdmin: true } });
      }
    });
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