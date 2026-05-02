import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {
  CampaignType,
  CreateMarketingCollaborationPayload,
  MarketingCollaboration,
  MarketingCollaborationStatus,
} from '../../../core/models/marketing-collaboration.model';
import { CollaborationMember } from '../../../core/models/collaboration-member.model';
import {
  ContentType,
  CreateMarketingContentTaskPayload,
  MarketingContentTask,
  MarketingTaskStatus,
  Platform,
} from '../../../core/models/marketing-content-task.model';
import { CollaborationStatus } from '../../../core/models/collaboration.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

type CampaignFormState = {
  title: string;
  campaignType: CampaignType | '';
  objective: string;
  description: string;
  startDate: string;
  endDate: string;
};

type TaskFormState = {
  marketingCollaborationId: number | null;
  assignedUserId: number | null;
  title: string;
  contentType: ContentType | '';
  platform: Platform | '';
  description: string;
  dueDate: string;
};

@Component({
  selector: 'app-marketing-block',
  templateUrl: './MarketingBlock.component.html',
  styleUrls: ['./MarketingBlock.component.css']
})
export class MarketingBlockComponent implements OnChanges {
  @Input() campaigns: MarketingCollaboration[] = [];
  @Input() tasks: MarketingContentTask[] = [];
  @Input() members: CollaborationMember[] = [];
  @Input() role!: Role;
  @Input() currentUserId = 0;
  @Input() collaborationOwnerId = 0;
  @Input() collaborationStatus: CollaborationStatus = 'ACTIVE';
  @Input() canCreateCampaign = false;
  @Input() canCreateTasks = false;

  @Output() createCampaign = new EventEmitter<{ payload: CreateMarketingCollaborationPayload }>();
  @Output() updateCampaignStatus = new EventEmitter<{ campaignId: number; status: MarketingCollaborationStatus }>();
  @Output() createTask = new EventEmitter<{ payload: CreateMarketingContentTaskPayload }>();
  @Output() updateTaskStatus = new EventEmitter<{ taskId: number; status: MarketingTaskStatus; publishedAt?: string | null }>();

  readonly campaignTypes: CampaignType[] = ['CROSS_PROMOTION', 'EVENT_PROMOTION'];
  readonly contentTypes: ContentType[] = ['POST', 'REEL', 'VIDEO'];
  readonly platforms: Platform[] = ['INSTAGRAM', 'TIKTOK', 'YOUTUBE', 'FACEBOOK', 'LINKEDIN', 'X'];

  campaignFormOpen = false;
  addTaskExpanded = false;
  campaignBriefExpanded = false;
  campaignForm: CampaignFormState = this.createEmptyCampaignForm();
  taskForm: TaskFormState = this.createEmptyTaskForm();

  campaignFormErrors: Partial<Record<keyof CampaignFormState, string>> = {};
  taskFormErrors: Partial<Record<keyof TaskFormState, string>> = {};
  private collapseTaskFormOnNextRefresh = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['campaigns']) {
      const openCampaignId = this.openCampaign?.id ?? null;
      this.taskForm.marketingCollaborationId = openCampaignId;

      if (this.hasOpenCampaign) {
        this.campaignFormOpen = false;
      } else {
        this.addTaskExpanded = false;
      }
    }

    if (changes['members']) {
      const memberIds = new Set(this.members.map(member => member.userId));
      if (!this.taskForm.assignedUserId || !memberIds.has(this.taskForm.assignedUserId)) {
        this.taskForm.assignedUserId = this.members[0]?.userId ?? null;
      }
    }

    if (changes['tasks'] && this.collapseTaskFormOnNextRefresh) {
      this.taskForm = this.createEmptyTaskForm();
      this.taskForm.marketingCollaborationId = this.openCampaign?.id ?? null;
      this.taskFormErrors = {};
      this.addTaskExpanded = false;
      this.collapseTaskFormOnNextRefresh = false;
    }
  }

  get openCampaign(): MarketingCollaboration | null {
    return this.campaigns.find(campaign => campaign.status === 'DRAFT' || campaign.status === 'ACTIVE') ?? null;
  }

  get latestCampaign(): MarketingCollaboration | null {
    return this.campaigns[0] ?? null;
  }

  get hasOpenCampaign(): boolean {
    return !!this.openCampaign;
  }

  get hasClosedLatestCampaign(): boolean {
    return !!this.latestCampaign
      && (this.latestCampaign.status === 'COMPLETED' || this.latestCampaign.status === 'CANCELLED');
  }

  get showCreateCampaignButton(): boolean {
    return this.canCreateCampaign && !this.hasOpenCampaign;
  }

  get showCampaignForm(): boolean {
    return this.showCreateCampaignButton && this.campaignFormOpen;
  }

  get showTaskForm(): boolean {
    return this.canCreateTasksInOpenCampaign && this.addTaskExpanded;
  }

  get canManageOpenCampaign(): boolean {
    return this.canCreateCampaign && !!this.openCampaign;
  }

  get canCreateTasksInOpenCampaign(): boolean {
    return this.canCreateTasks && !!this.openCampaign;
  }

  get createCampaignButtonLabel(): string {
    return this.hasClosedLatestCampaign ? 'Create new campaign' : 'Create campaign';
  }

  get visibleCampaign(): MarketingCollaboration | null {
    return this.openCampaign ?? this.latestCampaign;
  }

  get hasCampaignBrief(): boolean {
    const campaign = this.visibleCampaign;
    return !!campaign?.objective || !!campaign?.description;
  }

  get sortedTasks(): MarketingContentTask[] {
    return [...this.tasks].sort((left, right) => {
      const leftDue = left.dueDate ? new Date(left.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
      const rightDue = right.dueDate ? new Date(right.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
      if (leftDue !== rightDue) {
        return leftDue - rightDue;
      }
      return left.title.localeCompare(right.title);
    });
  }

  get publishedTaskCount(): number {
    return this.tasks.filter(task => task.status === 'PUBLISHED').length;
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get readyTaskCount(): number {
    return this.tasks.filter(task => task.status === 'READY').length;
  }

  get overdueTaskCount(): number {
    const now = Date.now();

    return this.tasks.filter(task =>
      !!task.dueDate
      && task.status !== 'PUBLISHED'
      && new Date(task.dueDate).getTime() < now
    ).length;
  }

  get inFlightTaskCount(): number {
    return this.tasks.filter(task => task.status === 'TODO' || task.status === 'IN_PROGRESS').length;
  }

  get progressPercentage(): number {
    return this.totalTasks > 0
      ? Math.round((this.publishedTaskCount / this.totalTasks) * 100)
      : 0;
  }

  get nextDueTask(): MarketingContentTask | null {
    return this.sortedTasks.find(task => !!task.dueDate && task.status !== 'PUBLISHED') ?? null;
  }

  get campaignStateMessage(): string {
    if (this.hasOpenCampaign) {
      return 'You already have an open campaign. Complete or cancel it before starting a new one.';
    }

    return 'No open marketing campaign yet.';
  }

  get closedCampaignMessage(): string {
    return 'This campaign is closed. Create a new campaign to continue.';
  }

  get campaignReadOnlyMessage(): string {
    if (this.role === 'coach') {
      return 'Coach accounts can review the campaign workspace, but they cannot create or change campaigns.';
    }

    if (this.collaborationStatus !== 'ACTIVE') {
      return `This collaboration is ${this.collaborationStatus.toLowerCase()}. Campaign changes are paused.`;
    }

    return 'Only the collaboration owner or admin can create a new campaign.';
  }

  get noOpenCampaignDetailsMessage(): string {
    if (this.hasClosedLatestCampaign) {
      return this.closedCampaignMessage;
    }

    if (this.showCreateCampaignButton) {
      return 'Start the next shared campaign when the team is ready to plan new content.';
    }

    return this.campaignReadOnlyMessage;
  }

  get taskReadOnlyMessage(): string {
    if (this.hasClosedLatestCampaign) {
      return this.closedCampaignMessage;
    }

    if (!this.hasOpenCampaign) {
      return 'Open a campaign first, then assign content tasks to collaboration members.';
    }

    if (this.role === 'coach') {
      return 'Coach accounts can review tasks and progress, but they cannot create or update campaign work.';
    }

    if (this.collaborationStatus !== 'ACTIVE') {
      return `This collaboration is ${this.collaborationStatus.toLowerCase()}. Task updates are paused.`;
    }

    return 'Only collaboration members can create tasks for the open campaign.';
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

  campaignStatusClass(status: MarketingCollaborationStatus): string {
    switch (status) {
      case 'ACTIVE':
        return 'kh-badge--green';
      case 'COMPLETED':
        return 'kh-badge--gray';
      case 'CANCELLED':
        return 'kh-badge--ghost';
      default:
        return 'kh-badge--amber';
    }
  }

  isTaskOverdue(task: MarketingContentTask): boolean {
    return !!task.dueDate
      && task.status !== 'PUBLISHED'
      && new Date(task.dueDate).getTime() < Date.now();
  }

  canUpdateTask(task: MarketingContentTask): boolean {
    if (!this.hasOpenCampaign || this.role === 'coach' || this.collaborationStatus !== 'ACTIVE' || task.status === 'PUBLISHED') {
      return false;
    }

    return this.role === 'admin'
      || this.currentUserId === this.collaborationOwnerId
      || this.currentUserId === task.assignedUserId;
  }

  toggleCampaignForm(): void {
    if (!this.showCreateCampaignButton) {
      return;
    }

    this.campaignFormOpen = !this.campaignFormOpen;
    this.campaignFormErrors = {};
  }

  toggleTaskForm(): void {
    if (!this.canCreateTasksInOpenCampaign) {
      return;
    }

    this.addTaskExpanded = !this.addTaskExpanded;
    this.taskFormErrors = {};
  }

  toggleCampaignBrief(): void {
    if (!this.hasCampaignBrief) {
      return;
    }

    this.campaignBriefExpanded = !this.campaignBriefExpanded;
  }

  submitCampaign(): void {
    this.campaignFormErrors = this.validateCampaignForm(this.campaignForm);
    if (Object.keys(this.campaignFormErrors).length) {
      return;
    }

    this.createCampaign.emit({
      payload: {
        collaborationId: 0,
        title: this.campaignForm.title.trim(),
        description: this.normalizeOptionalText(this.campaignForm.description),
        objective: this.campaignForm.objective.trim(),
        campaignType: this.campaignForm.campaignType as CampaignType,
        startDate: this.campaignForm.startDate || null,
        endDate: this.campaignForm.endDate || null,
      }
    });

    this.campaignForm = this.createEmptyCampaignForm();
    this.campaignFormErrors = {};
    this.campaignFormOpen = false;
  }

  submitTask(): void {
    this.taskForm.marketingCollaborationId = this.openCampaign?.id ?? null;
    this.taskFormErrors = this.validateTaskForm(this.taskForm);
    if (Object.keys(this.taskFormErrors).length) {
      return;
    }

    this.createTask.emit({
      payload: {
        marketingCollaborationId: this.taskForm.marketingCollaborationId as number,
        assignedUserId: this.taskForm.assignedUserId as number,
        title: this.taskForm.title.trim(),
        description: this.normalizeOptionalText(this.taskForm.description),
        contentType: this.taskForm.contentType as ContentType,
        platform: this.taskForm.platform as Platform,
        dueDate: this.taskForm.dueDate || null,
      }
    });
    this.collapseTaskFormOnNextRefresh = true;
  }

  setCampaignStatus(status: MarketingCollaborationStatus): void {
    if (!this.openCampaign || !this.canManageOpenCampaign) {
      return;
    }

    this.updateCampaignStatus.emit({
      campaignId: this.openCampaign.id,
      status,
    });
  }

  setTaskStatus(task: MarketingContentTask, status: MarketingTaskStatus): void {
    if (!this.canUpdateTask(task) || task.status === status) {
      return;
    }

    this.updateTaskStatus.emit({
      taskId: task.id,
      status,
      publishedAt: status === 'PUBLISHED' ? this.nowAsLocalDateTime() : null,
    });
  }

  nextTaskAction(task: MarketingContentTask): { label: string; status: MarketingTaskStatus } | null {
    switch (task.status) {
      case 'TODO':
        return { label: 'Start', status: 'IN_PROGRESS' };
      case 'IN_PROGRESS':
        return { label: 'Mark ready', status: 'READY' };
      case 'READY':
        return { label: 'Publish', status: 'PUBLISHED' };
      default:
        return null;
    }
  }

  private validateCampaignForm(form: CampaignFormState): Partial<Record<keyof CampaignFormState, string>> {
    const errors: Partial<Record<keyof CampaignFormState, string>> = {};

    if (!form.title.trim()) {
      errors.title = 'Campaign title is required.';
    }

    if (!form.campaignType) {
      errors.campaignType = 'Campaign type is required.';
    }

    if (!form.objective.trim()) {
      errors.objective = 'Campaign objective is required.';
    }

    if (form.startDate && form.endDate && new Date(form.endDate).getTime() < new Date(form.startDate).getTime()) {
      errors.endDate = 'End date must be after the start date.';
    }

    return errors;
  }

  private validateTaskForm(form: TaskFormState): Partial<Record<keyof TaskFormState, string>> {
    const errors: Partial<Record<keyof TaskFormState, string>> = {};

    if (!form.marketingCollaborationId) {
      errors.marketingCollaborationId = 'An open campaign is required.';
    }

    if (!form.assignedUserId) {
      errors.assignedUserId = 'Assign the task to a collaboration member.';
    }

    if (!form.title.trim()) {
      errors.title = 'Task title is required.';
    }

    if (!form.contentType) {
      errors.contentType = 'Content type is required.';
    }

    if (!form.platform) {
      errors.platform = 'Platform is required.';
    }

    return errors;
  }

  private normalizeOptionalText(value: string): string | null {
    const normalized = value.trim();
    return normalized ? normalized : null;
  }

  private createEmptyCampaignForm(): CampaignFormState {
    return {
      title: '',
      campaignType: 'CROSS_PROMOTION',
      objective: '',
      description: '',
      startDate: '',
      endDate: '',
    };
  }

  private createEmptyTaskForm(): TaskFormState {
    return {
      marketingCollaborationId: this.openCampaign?.id ?? null,
      assignedUserId: this.members[0]?.userId ?? null,
      title: '',
      contentType: 'POST',
      platform: 'INSTAGRAM',
      description: '',
      dueDate: '',
    };
  }

  private nowAsLocalDateTime(): string {
    const now = new Date();
    const pad = (value: number): string => `${value}`.padStart(2, '0');

    return [
      now.getFullYear(),
      pad(now.getMonth() + 1),
      pad(now.getDate()),
    ].join('-') + 'T' + [
      pad(now.getHours()),
      pad(now.getMinutes()),
      pad(now.getSeconds()),
    ].join(':');
  }
}
