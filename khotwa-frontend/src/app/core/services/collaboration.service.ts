import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Collaboration,
  CollaborationStatus,
  CreateCollaborationRequest,
  UpdateCollaborationRequest,
} from '../models/collaboration.model';
import {
  CollaborationRequest,
  SendCollaborationRequestRequest,
} from '../models/collaboration-request.model';
import { EntrepreneurSelection } from '../models/entrepreneur-selection.model';
import {
  MarketingCollaboration,
  CreateMarketingCollaborationPayload,
} from '../models/marketing-collaboration.model';
import {
  CreateMarketingContentTaskPayload,
  MarketingContentTask,
  MarketingTaskStatus,
} from '../models/marketing-content-task.model';
import {
  CreateResourceRequestPayload,
  ResourceRequest,
  ResourceRequestStatus,
  UpdateResourceRequestStatusPayload,
} from '../models/resource-request.model';
import { ProjectCollaborationContext } from '../models/project-collaboration-context.model';
import { ProjectSummary } from '../models/project-summary.model';
import {
  CreateSharedResourcePayload,
  SharedResource,
  UpdateSharedResourcePayload,
} from '../models/shared-resource.model';

const API_BASE = '/api';

@Injectable({ providedIn: 'root' })
export class CollaborationService {
  constructor(private http: HttpClient) {}

  getCollaborations(): Observable<Collaboration[]> {
    return this.http.get<Collaboration[]>(`${API_BASE}/collaborations`).pipe(
      map(collaborations => collaborations.map(collaboration => this.normalizeCollaboration(collaboration)))
    );
  }

  getMyCollaborations(): Observable<Collaboration[]> {
    return this.getCollaborations();
  }

  getCollaboration(id: number): Observable<Collaboration> {
    return this.http.get<Collaboration>(`${API_BASE}/collaborations/${id}`).pipe(
      map(collaboration => this.normalizeCollaboration(collaboration))
    );
  }

  getCollaborationsByProjectId(projectId: number): Observable<Collaboration[]> {
    return this.http.get<Collaboration[]>(`${API_BASE}/collaborations/project/${projectId}`).pipe(
      map(collaborations => collaborations.map(collaboration => this.normalizeCollaboration(collaboration)))
    );
  }

  createCollaboration(payload: CreateCollaborationRequest): Observable<Collaboration> {
    return this.http.post<Collaboration>(`${API_BASE}/collaborations`, payload).pipe(
      map(collaboration => this.normalizeCollaboration(collaboration))
    );
  }

  updateCollaboration(id: number, payload: UpdateCollaborationRequest): Observable<Collaboration> {
    return this.http.put<Collaboration>(`${API_BASE}/collaborations/${id}`, payload).pipe(
      map(collaboration => this.normalizeCollaboration(collaboration))
    );
  }

  updateStatus(collaborationId: number, status: CollaborationStatus): Observable<Collaboration> {
    return this.updateCollaboration(collaborationId, { status });
  }

  removeMember(collaborationId: number, memberId: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/collaborations/${collaborationId}/members/${memberId}`);
  }

  leaveCollaboration(id: number): Observable<void> {
    return this.http.post<void>(`${API_BASE}/collaborations/${id}/leave`, {});
  }

  getEntrepreneurs(search?: string): Observable<EntrepreneurSelection[]> {
    const normalized = search?.trim();
    const params = normalized ? new HttpParams().set('search', normalized) : undefined;
    return this.http.get<EntrepreneurSelection[]>(`${API_BASE}/users/entrepreneurs`, { params });
  }

  getMyProjects(): Observable<ProjectSummary[]> {
    return this.http.get<ProjectSummary[]>(`${API_BASE}/projects/my`);
  }

  createCollaborationRequest(payload: SendCollaborationRequestRequest): Observable<CollaborationRequest> {
    return this.http.post<CollaborationRequest>(`${API_BASE}/collaboration-requests`, payload);
  }

  getSentCollaborationRequests(): Observable<CollaborationRequest[]> {
    return this.http.get<CollaborationRequest[]>(`${API_BASE}/collaboration-requests/sent`);
  }

  getReceivedCollaborationRequests(): Observable<CollaborationRequest[]> {
    return this.http.get<CollaborationRequest[]>(`${API_BASE}/collaboration-requests/received`);
  }

  getCollaborationScopedRequests(collaborationId: number): Observable<CollaborationRequest[]> {
    return this.http.get<CollaborationRequest[]>(`${API_BASE}/collaboration-requests/collaboration/${collaborationId}`);
  }

  acceptRequest(requestId: number): Observable<CollaborationRequest> {
    return this.http.post<CollaborationRequest>(`${API_BASE}/collaboration-requests/${requestId}/accept`, {});
  }

  rejectRequest(requestId: number): Observable<CollaborationRequest> {
    return this.http.post<CollaborationRequest>(`${API_BASE}/collaboration-requests/${requestId}/reject`, {});
  }

  getProjectContext(projectId: number): Observable<ProjectCollaborationContext> {
    return this.http.get<ProjectCollaborationContext>(`${API_BASE}/projects/${projectId}/context`);
  }

  getSharedResources(collaborationId: number): Observable<SharedResource[]> {
    return this.http.get<SharedResource[]>(`${API_BASE}/shared-resources/collaboration/${collaborationId}`);
  }

  getResourceRequests(collaborationId: number): Observable<ResourceRequest[]> {
    return this.http.get<ResourceRequest[]>(`${API_BASE}/resource-requests/collaboration/${collaborationId}`);
  }

  createResource(payload: CreateSharedResourcePayload): Observable<SharedResource> {
    return this.http.post<SharedResource>(`${API_BASE}/shared-resources`, payload);
  }

  updateResource(resourceId: number, payload: UpdateSharedResourcePayload): Observable<SharedResource> {
    return this.http.put<SharedResource>(`${API_BASE}/shared-resources/${resourceId}`, payload);
  }

  deleteResource(resourceId: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/shared-resources/${resourceId}`);
  }

  createResourceRequest(payload: CreateResourceRequestPayload): Observable<ResourceRequest> {
    return this.http.post<ResourceRequest>(`${API_BASE}/resource-requests`, payload);
  }

  deleteResourceRequest(requestId: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/resource-requests/${requestId}`);
  }

  updateResourceRequestStatus(
    requestId: number,
    statusOrPayload: ResourceRequestStatus | UpdateResourceRequestStatusPayload
  ): Observable<ResourceRequest> {
    const payload =
      typeof statusOrPayload === 'string'
        ? { status: statusOrPayload }
        : statusOrPayload;

    return this.http.put<ResourceRequest>(`${API_BASE}/resource-requests/${requestId}/status`, payload);
  }

  getMarketingCampaigns(collaborationId: number): Observable<MarketingCollaboration[]> {
    return this.http.get<MarketingCollaboration[]>(`${API_BASE}/marketing-collaborations/collaboration/${collaborationId}`);
  }

  getMarketingTasks(marketingCollaborationId: number): Observable<MarketingContentTask[]> {
    return this.http.get<MarketingContentTask[]>(
      `${API_BASE}/marketing-content-tasks/marketing-collaboration/${marketingCollaborationId}`
    );
  }

  createCampaign(payload: CreateMarketingCollaborationPayload): Observable<MarketingCollaboration> {
    return this.http.post<MarketingCollaboration>(`${API_BASE}/marketing-collaborations`, payload);
  }

  createTask(payload: CreateMarketingContentTaskPayload): Observable<MarketingContentTask> {
    return this.http.post<MarketingContentTask>(`${API_BASE}/marketing-content-tasks`, payload);
  }

  updateTaskStatus(taskId: number, status: MarketingTaskStatus): Observable<MarketingContentTask> {
    return this.http.put<MarketingContentTask>(`${API_BASE}/marketing-content-tasks/${taskId}/status`, { status });
  }

  private normalizeCollaboration(collaboration: Collaboration): Collaboration {
    return {
      ...collaboration,
      members: collaboration.members ?? [],
    };
  }
}
