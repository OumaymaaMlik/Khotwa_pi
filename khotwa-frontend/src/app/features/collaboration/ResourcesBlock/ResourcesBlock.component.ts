import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CollaborationStatus } from '../../../core/models/collaboration.model';
import { ResourceRequest, ResourceRequestStatus, Urgency } from '../../../core/models/resource-request.model';
import { ResourceType, SharedResource, UpdateSharedResourcePayload } from '../../../core/models/shared-resource.model';

type Role = 'entrepreneur' | 'admin' | 'coach';
type ResourceFormErrors = {
  name?: string;
  resourceType?: string;
  quantity?: string;
};
type ResourceRequestFormErrors = {
  title?: string;
  resourceType?: string;
  urgency?: string;
};

@Component({
  selector: 'app-resources-block',
  templateUrl: './ResourcesBlock.component.html',
  styleUrls: ['./ResourcesBlock.component.css']
})
export class ResourcesBlockComponent implements OnChanges {
  @Input() resources: SharedResource[] = [];
  @Input() resourceRequests: ResourceRequest[] = [];
  @Input() role!: Role;
  @Input() currentUserId = 0;
  @Input() collaborationOwnerId = 0;
  @Input() collaborationStatus: CollaborationStatus | null = null;
  @Input() resourceRequestActionInFlightId: number | null = null;
  @Input() canCreateResource?: boolean;
  @Input() canRequestResource?: boolean;
  @Input() canUpdateResourceRequestStatuses?: boolean;
  @Input() errorMessage: string | null = null;

  @Output() createResource = new EventEmitter<{ payload: unknown }>();
  @Output() updateResource = new EventEmitter<{ resourceId: number; payload: UpdateSharedResourcePayload }>();
  @Output() removeResource = new EventEmitter<{ resourceId: number }>();
  @Output() createResourceRequest = new EventEmitter<{ payload: unknown }>();
  @Output() removeResourceRequest = new EventEmitter<{ requestId: number }>();
  @Output() updateResourceRequestStatus = new EventEmitter<{
    requestId: number;
    status: ResourceRequestStatus;
    matchedResourceId?: number | null;
  }>();

  readonly resourceTypes: ResourceType[] = ['MATERIAL', 'SOFTWARE', 'HUMAN'];
  readonly availabilityPriority: Record<SharedResource['availabilityStatus'], number> = {
    AVAILABLE: 0,
    LIMITED: 1,
    UNAVAILABLE: 2,
  };
  readonly urgencyPriority: Record<ResourceRequest['urgency'], number> = {
    HIGH: 0,
    MEDIUM: 1,
    LOW: 2,
  };
  createFormOpen = false;
  createForm = {
    name: '',
    description: '',
    resourceType: '' as ResourceType | '',
    quantity: '',
  };
  createFormErrors: ResourceFormErrors = {};
  requestFormOpen = false;
  requestForm = {
    title: '',
    description: '',
    resourceType: '' as ResourceType | '',
    urgency: 'MEDIUM' as Urgency | '',
  };
  requestFormErrors: ResourceRequestFormErrors = {};
  selectedMatchedResourceIds: Record<number, number | null> = {};
  editingResourceId: number | null = null;
  private pendingRequestCreate = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resourceRequests'] && this.pendingRequestCreate) {
      const previousLength = (changes['resourceRequests'].previousValue as ResourceRequest[] | undefined)?.length ?? 0;
      const currentLength = (changes['resourceRequests'].currentValue as ResourceRequest[] | undefined)?.length ?? 0;

      if (currentLength > previousLength) {
        this.closeCreateRequestForm();
        this.pendingRequestCreate = false;
      }
    }

    if (changes['errorMessage'] && this.pendingRequestCreate && this.errorMessage) {
      this.pendingRequestCreate = false;
    }

    if ((!this.canShowCreateRequestForm || this.isReadOnly) && this.requestFormOpen) {
      this.closeCreateRequestForm();
      this.pendingRequestCreate = false;
    }
  }

  trackByResource(_: number, resource: SharedResource): number {
    return resource.id;
  }

  trackByRequest(_: number, request: ResourceRequest): number {
    return request.id;
  }

  resourceRequestBadgeClass(status: ResourceRequestStatus): string {
    switch (status) {
      case 'FULFILLED':
        return 'kh-badge--green';
      case 'CANCELLED':
        return 'kh-badge--red';
      case 'MATCHED':
        return 'kh-badge--blue';
      default:
        return 'kh-badge--amber';
    }
  }

  get isReadOnly(): boolean {
    return this.role === 'coach' || this.collaborationStatus !== 'ACTIVE';
  }

  get canManageResourceWorkflow(): boolean {
    return !this.isReadOnly
      && !!this.canUpdateResourceRequestStatuses
      && (this.role === 'admin' || this.currentUserId === this.collaborationOwnerId);
  }

  get canShowCreateResourceForm(): boolean {
    return !this.isReadOnly && !!this.canCreateResource;
  }

  get sortedResources(): SharedResource[] {
    return [...this.resources].sort((left, right) => {
      const availabilityDiff =
        this.availabilityPriority[left.availabilityStatus] - this.availabilityPriority[right.availabilityStatus];

      if (availabilityDiff !== 0) {
        return availabilityDiff;
      }

      return (right.createdAt ?? '').localeCompare(left.createdAt ?? '');
    });
  }

  get canShowCreateRequestForm(): boolean {
    return !this.isReadOnly && !!this.canRequestResource;
  }

  openCreateRequestForm(): void {
    if (!this.canShowCreateRequestForm) {
      return;
    }

    this.requestFormOpen = true;
  }

  closeCreateRequestForm(): void {
    this.requestFormOpen = false;
    this.requestForm = {
      title: '',
      description: '',
      resourceType: '' as ResourceType | '',
      urgency: 'MEDIUM' as Urgency | '',
    };
    this.requestFormErrors = {};
  }

  submitCreateRequest(): void {
    this.requestFormErrors = this.validateResourceRequestForm(this.requestForm);

    if (Object.keys(this.requestFormErrors).length > 0) {
      return;
    }

    this.pendingRequestCreate = true;
    this.createResourceRequest.emit({
      payload: {
        title: this.requestForm.title.trim(),
        description: this.requestForm.description.trim() || null,
        resourceType: this.requestForm.resourceType,
        urgency: this.requestForm.urgency,
      }
    });
  }

  get sortedResourceRequests(): ResourceRequest[] {
    return [...this.resourceRequests].sort((left, right) => {
      const urgencyDiff = this.urgencyPriority[left.urgency] - this.urgencyPriority[right.urgency];

      if (urgencyDiff !== 0) {
        return urgencyDiff;
      }

      return (right.createdAt ?? '').localeCompare(left.createdAt ?? '');
    });
  }

  availableResourcesForRequest(request: ResourceRequest): SharedResource[] {
    return this.resources.filter(resource =>
      resource.resourceType === request.resourceType
      && (resource.quantity ?? 0) > 0
      && resource.availabilityStatus !== 'UNAVAILABLE'
    );
  }

  canMatchRequest(request: ResourceRequest): boolean {
    return this.canManageResourceWorkflow
      && request.status === 'OPEN'
      && this.availableResourcesForRequest(request).length > 0;
  }

  canCancelRequest(request: ResourceRequest): boolean {
    return this.canManageResourceWorkflow && (request.status === 'OPEN' || request.status === 'MATCHED');
  }

  canFulfillRequest(request: ResourceRequest): boolean {
    return this.canManageResourceWorkflow && request.status === 'MATCHED';
  }

  canRemoveResourceRequest(request: ResourceRequest): boolean {
    if (this.isReadOnly) {
      return false;
    }

    if (request.status !== 'OPEN' && request.status !== 'CANCELLED') {
      return false;
    }

    return this.role === 'admin' || this.currentUserId === request.requesterUserId;
  }

  isRequestActionInFlight(request: ResourceRequest): boolean {
    return this.resourceRequestActionInFlightId === request.id;
  }

  isMatchSelectionValid(request: ResourceRequest): boolean {
    const matchedResourceId = this.selectedMatchedResourceIds[request.id] ?? null;
    return !!matchedResourceId && this.availableResourcesForRequest(request).some(resource => resource.id === matchedResourceId);
  }

  canEditResource(resource: SharedResource): boolean {
    return !this.isReadOnly
      && (this.role === 'admin' || this.currentUserId === resource.ownerUserId);
  }

  canRemoveResource(resource: SharedResource): boolean {
    return !this.isReadOnly
      && (this.role === 'admin' || this.currentUserId === resource.ownerUserId);
  }

  openCreateResourceForm(): void {
    if (!this.canShowCreateResourceForm) {
      return;
    }

    this.createFormOpen = true;
  }

  closeCreateResourceForm(): void {
    this.createFormOpen = false;
    this.createForm = {
      name: '',
      description: '',
      resourceType: '' as ResourceType | '',
      quantity: '',
    };
    this.createFormErrors = {};
  }

  submitCreateResource(): void {
    this.createFormErrors = this.validateResourceForm(this.createForm);

    if (Object.keys(this.createFormErrors).length > 0) {
      return;
    }

    this.createResource.emit({
      payload: {
        name: this.createForm.name.trim(),
        description: this.createForm.description.trim() || null,
        resourceType: this.createForm.resourceType,
        quantity: this.createForm.quantity === '' ? null : Number(this.createForm.quantity),
      }
    });
  }

  startEditingResource(resource: SharedResource): void {
    if (!this.canEditResource(resource)) {
      return;
    }

    this.editingResourceId = resource.id;
  }

  stopEditingResource(): void {
    this.editingResourceId = null;
  }

  saveResource(
    resource: SharedResource,
    name: string,
    description: string,
    resourceType: string,
    quantity: string
  ): void {
    if (!this.canEditResource(resource)) {
      return;
    }

    this.updateResource.emit({
      resourceId: resource.id,
      payload: {
        name,
        description: description || null,
        resourceType: resourceType as ResourceType,
        quantity: quantity ? +quantity : null
      }
    });
    this.editingResourceId = null;
  }

  deleteResource(resource: SharedResource): void {
    if (!this.canRemoveResource(resource)) {
      return;
    }

    this.removeResource.emit({ resourceId: resource.id });
  }

  onMatchedResourceChange(requestId: number, value: string): void {
    const matchedResourceId = Number(value);
    this.selectedMatchedResourceIds[requestId] = Number.isFinite(matchedResourceId) && matchedResourceId > 0
      ? matchedResourceId
      : null;
  }

  matchRequest(request: ResourceRequest): void {
    if (this.isRequestActionInFlight(request) || !this.isMatchSelectionValid(request)) {
      return;
    }

    this.updateResourceRequestStatus.emit({
      requestId: request.id,
      status: 'MATCHED',
      matchedResourceId: this.selectedMatchedResourceIds[request.id] ?? null
    });
  }

  cancelRequest(request: ResourceRequest): void {
    if (this.isRequestActionInFlight(request)) {
      return;
    }

    this.updateResourceRequestStatus.emit({
      requestId: request.id,
      status: 'CANCELLED'
    });
  }

  fulfillRequest(request: ResourceRequest): void {
    if (this.isRequestActionInFlight(request)) {
      return;
    }

    this.updateResourceRequestStatus.emit({
      requestId: request.id,
      status: 'FULFILLED'
    });
  }

  deleteResourceRequest(request: ResourceRequest): void {
    if (!this.canRemoveResourceRequest(request) || this.isRequestActionInFlight(request)) {
      return;
    }

    this.removeResourceRequest.emit({ requestId: request.id });
  }

  private validateResourceForm(form: {
    name: string;
    resourceType: ResourceType | '';
    quantity: string;
  }): ResourceFormErrors {
    const errors: ResourceFormErrors = {};

    if (!form.name.trim()) {
      errors.name = 'Resource name is required.';
    }

    if (!form.resourceType) {
      errors.resourceType = 'Resource type is required.';
    }

    if (form.quantity !== '') {
      const quantity = Number(form.quantity);
      if (!Number.isFinite(quantity) || quantity < 0) {
        errors.quantity = 'Quantity must be 0 or greater.';
      }
    }

    return errors;
  }

  private validateResourceRequestForm(form: {
    title: string;
    resourceType: ResourceType | '';
    urgency: Urgency | '';
  }): ResourceRequestFormErrors {
    const errors: ResourceRequestFormErrors = {};

    if (!form.title.trim()) {
      errors.title = 'Request title is required.';
    }

    if (!form.resourceType) {
      errors.resourceType = 'Resource type is required.';
    }

    if (!form.urgency) {
      errors.urgency = 'Urgency is required.';
    }

    return errors;
  }
}
