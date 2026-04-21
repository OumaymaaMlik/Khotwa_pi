import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CampaignType, MarketingCollaboration } from '../../../core/models/marketing-collaboration.model';
import {
  ContentType,
  MarketingContentTask,
  MarketingTaskStatus,
  Platform
} from '../../../core/models/marketing-content-task.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-marketing-block',
  templateUrl: './MarketingBlock.component.html',
  styleUrls: ['./MarketingBlock.component.css']
})
export class MarketingBlockComponent {
  @Input() campaigns: MarketingCollaboration[] = [];
  @Input() tasks: MarketingContentTask[] = [];
  @Input() role!: Role;
  @Input() canCreateCampaign?: boolean;
  @Input() canManageTasks?: boolean;

  @Output() createCampaign = new EventEmitter<{ payload: unknown }>();
  @Output() createTask = new EventEmitter<{ payload: unknown }>();
  @Output() updateTaskStatus = new EventEmitter<{ taskId: number; status: MarketingTaskStatus }>();

  readonly campaignTypes: CampaignType[] = ['SOCIAL_MEDIA', 'EMAIL_MARKETING', 'CONTENT_MARKETING', 'PAID_ADS', 'EVENT', 'OTHER'];
  readonly contentTypes: ContentType[] = ['POST', 'VIDEO', 'ARTICLE', 'EMAIL', 'DESIGN', 'OTHER'];
  readonly platforms: Platform[] = ['FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'TIKTOK', 'YOUTUBE', 'EMAIL', 'WEBSITE', 'OTHER'];
  readonly taskStatuses: MarketingTaskStatus[] = ['TODO', 'IN_PROGRESS', 'READY', 'PUBLISHED'];

  trackByCampaign(_: number, campaign: MarketingCollaboration): number {
    return campaign.id;
  }

  trackByTask(_: number, task: MarketingContentTask): number {
    return task.id;
  }

  taskBadgeClass(status: MarketingTaskStatus): string {
    switch (status) {
      case 'PUBLISHED':
        return 'kh-badge--green';
      case 'READY':
        return 'kh-badge--blue';
      case 'IN_PROGRESS':
        return 'kh-badge--amber';
      default:
        return 'kh-badge--ghost';
    }
  }

  canUpdateTask(task: MarketingContentTask): boolean {
    return !!this.canManageTasks && task.status !== 'PUBLISHED';
  }
}
