import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResourceRequest, ResourceRequestStatus } from '../../../core/models/resource-request.model';
import { AvailabilityStatus, ResourceType, SharedResource } from '../../../core/models/shared-resource.model';

type Role = 'entrepreneur' | 'admin' | 'coach';

@Component({
  selector: 'app-resources-block',
  templateUrl: './ResourcesBlock.component.html',
  styleUrls: ['./ResourcesBlock.component.css']
})
export class ResourcesBlockComponent {
  @Input() resources: SharedResource[] = [];
  @Input() resourceRequests: ResourceRequest[] = [];
  @Input() role!: Role;
  @Input() canCreateResource?: boolean;
  @Input() canRequestResource?: boolean;
  @Input() canUpdateResourceRequestStatuses?: boolean;

  @Output() createResource = new EventEmitter<{ payload: unknown }>();
  @Output() createResourceRequest = new EventEmitter<{ payload: unknown }>();
  @Output() updateResourceRequestStatus = new EventEmitter<{ requestId: number; status: ResourceRequestStatus }>();

  readonly resourceTypes: ResourceType[] = ['FUNDING', 'EQUIPMENT', 'SOFTWARE', 'SERVICE', 'EXPERTISE', 'OTHER'];
  readonly availabilityStatuses: AvailabilityStatus[] = ['AVAILABLE', 'LIMITED', 'UNAVAILABLE'];
  readonly requestStatuses: ResourceRequestStatus[] = ['MATCHED', 'FULFILLED', 'CANCELLED'];

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

  canUpdateRequest(request: ResourceRequest): boolean {
    return !!this.canUpdateResourceRequestStatuses
      && request.status !== 'FULFILLED'
      && request.status !== 'CANCELLED';
  }
}
