import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const API_BASE = '/api';
export class CollaborationService {
    constructor(http) {
        this.http = http;
    }
    getCollaborations() {
        return this.http.get(`${API_BASE}/collaborations`).pipe(map(collaborations => collaborations.map(collaboration => this.normalizeCollaboration(collaboration))));
    }
    getMyCollaborations() {
        return this.getCollaborations();
    }
    getCollaboration(id) {
        return this.http.get(`${API_BASE}/collaborations/${id}`).pipe(map(collaboration => this.normalizeCollaboration(collaboration)));
    }
    getCollaborationsByProjectId(projectId) {
        return this.http.get(`${API_BASE}/collaborations/project/${projectId}`).pipe(map(collaborations => collaborations.map(collaboration => this.normalizeCollaboration(collaboration))));
    }
    createCollaboration(payload) {
        return this.http.post(`${API_BASE}/collaborations`, payload).pipe(map(collaboration => this.normalizeCollaboration(collaboration)));
    }
    updateCollaboration(id, payload) {
        return this.http.put(`${API_BASE}/collaborations/${id}`, payload).pipe(map(collaboration => this.normalizeCollaboration(collaboration)));
    }
    updateStatus(collaborationId, status) {
        return this.updateCollaboration(collaborationId, { status });
    }
    removeMember(collaborationId, memberId) {
        return this.http.delete(`${API_BASE}/collaborations/${collaborationId}/members/${memberId}`);
    }
    leaveCollaboration(id) {
        return this.http.post(`${API_BASE}/collaborations/${id}/leave`, {});
    }
    getEntrepreneurs(search) {
        const normalized = search?.trim();
        const params = normalized ? new HttpParams().set('search', normalized) : undefined;
        return this.http.get(`${API_BASE}/users/entrepreneurs`, { params });
    }
    getMyProjects() {
        return this.http.get(`${API_BASE}/projects/my`);
    }
    createCollaborationRequest(payload) {
        return this.http.post(`${API_BASE}/collaboration-requests`, payload);
    }
    getSentCollaborationRequests() {
        return this.http.get(`${API_BASE}/collaboration-requests/sent`);
    }
    getReceivedCollaborationRequests() {
        return this.http.get(`${API_BASE}/collaboration-requests/received`);
    }
    acceptRequest(requestId) {
        return this.http.post(`${API_BASE}/collaboration-requests/${requestId}/accept`, {});
    }
    rejectRequest(requestId) {
        return this.http.post(`${API_BASE}/collaboration-requests/${requestId}/reject`, {});
    }
    cancelRequest(_requestId) {
        return of(void 0);
    }
    respondToRequest(requestId, response) {
        return response === 'accepted'
            ? this.acceptRequest(requestId)
            : this.rejectRequest(requestId);
    }
    getProjectContext(projectId) {
        return this.http.get(`${API_BASE}/projects/${projectId}/context`);
    }
    getSharedResources(collaborationId) {
        return this.http.get(`${API_BASE}/shared-resources/collaboration/${collaborationId}`);
    }
    getResourceRequests(collaborationId) {
        return this.http.get(`${API_BASE}/resource-requests/collaboration/${collaborationId}`);
    }
    createResource(payload) {
        return this.http.post(`${API_BASE}/shared-resources`, payload);
    }
    createResourceRequest(payload) {
        return this.http.post(`${API_BASE}/resource-requests`, payload);
    }
    updateResourceRequestStatus(requestId, status) {
        return this.http.put(`${API_BASE}/resource-requests/${requestId}/status`, { status });
    }
    getMarketingCampaigns(collaborationId) {
        return this.http.get(`${API_BASE}/marketing-collaborations/collaboration/${collaborationId}`);
    }
    getMarketingTasks(marketingCollaborationId) {
        return this.http.get(`${API_BASE}/marketing-content-tasks/marketing-collaboration/${marketingCollaborationId}`);
    }
    createCampaign(payload) {
        return this.http.post(`${API_BASE}/marketing-collaborations`, payload);
    }
    createTask(payload) {
        return this.http.post(`${API_BASE}/marketing-content-tasks`, payload);
    }
    updateTaskStatus(taskId, status) {
        return this.http.put(`${API_BASE}/marketing-content-tasks/${taskId}/status`, { status });
    }
    normalizeCollaboration(collaboration) {
        return {
            ...collaboration,
            members: collaboration.members ?? [],
        };
    }
    static { this.ɵfac = function CollaborationService_Factory(t) { return new (t || CollaborationService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CollaborationService, factory: CollaborationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=collaboration.service.js.map