import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../core/services/collaboration.service";
import * as i3 from "../../../core/services/auth.service";
import * as i4 from "@angular/common";
import * as i5 from "../members-block/members-block.component";
import * as i6 from "../collaboration-actions/collaboration-actions.component";
import * as i7 from "../RequestsBlock/RequestsBlock.component";
import * as i8 from "../ResourcesBlock/ResourcesBlock.component";
import * as i9 from "../MarketingBlock/MarketingBlock.component";
import * as i10 from "../project-context-card/project-context-card.component";
function CollaborationDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1, "Loading collaboration details...");
    i0.ɵɵelementEnd();
} }
function CollaborationDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function CollaborationDetailComponent_ng_container_2_app_project_context_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-project-context-card", 11);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("projectContext", ctx_r0.projectContext)("role", ctx_r0.currentUserRole);
} }
function CollaborationDetailComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CollaborationDetailComponent_ng_container_2_app_project_context_card_1_Template, 1, 2, "app-project-context-card", 5);
    i0.ɵɵelementStart(2, "app-collaboration-actions", 6);
    i0.ɵɵlistener("statusUpdated", function CollaborationDetailComponent_ng_container_2_Template_app_collaboration_actions_statusUpdated_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onStatusUpdated($event)); })("collaborationLeft", function CollaborationDetailComponent_ng_container_2_Template_app_collaboration_actions_collaborationLeft_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCollaborationLeft($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "app-members-block", 7);
    i0.ɵɵlistener("memberRemoved", function CollaborationDetailComponent_ng_container_2_Template_app_members_block_memberRemoved_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onMemberRemoved($event)); })("collaborationLeft", function CollaborationDetailComponent_ng_container_2_Template_app_members_block_collaborationLeft_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCollaborationLeft($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "app-requests-block", 8);
    i0.ɵɵlistener("requestAccepted", function CollaborationDetailComponent_ng_container_2_Template_app_requests_block_requestAccepted_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onRequestAccepted($event)); })("requestRejected", function CollaborationDetailComponent_ng_container_2_Template_app_requests_block_requestRejected_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onRequestRejected($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "app-resources-block", 9);
    i0.ɵɵlistener("createResource", function CollaborationDetailComponent_ng_container_2_Template_app_resources_block_createResource_5_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCreateResource($event)); })("createResourceRequest", function CollaborationDetailComponent_ng_container_2_Template_app_resources_block_createResourceRequest_5_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCreateResourceRequest($event)); })("updateResourceRequestStatus", function CollaborationDetailComponent_ng_container_2_Template_app_resources_block_updateResourceRequestStatus_5_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onUpdateResourceRequestStatus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "app-marketing-block", 10);
    i0.ɵɵlistener("createCampaign", function CollaborationDetailComponent_ng_container_2_Template_app_marketing_block_createCampaign_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCreateCampaign($event)); })("createTask", function CollaborationDetailComponent_ng_container_2_Template_app_marketing_block_createTask_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCreateTask($event)); })("updateTaskStatus", function CollaborationDetailComponent_ng_container_2_Template_app_marketing_block_updateTaskStatus_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onUpdateTaskStatus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const currentCollaboration_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.projectContext);
    i0.ɵɵadvance();
    i0.ɵɵproperty("collaboration", currentCollaboration_r3)("role", ctx_r0.currentUserRole)("currentUserId", ctx_r0.currentUserId)("canUpdateStatus", ctx_r0.canUpdateStatus)("canLeave", ctx_r0.canLeaveCollaboration);
    i0.ɵɵadvance();
    i0.ɵɵproperty("members", ctx_r0.members)("collaborationId", currentCollaboration_r3.id)("ownerUserId", currentCollaboration_r3.ownerId)("role", ctx_r0.currentUserRole)("currentUserId", ctx_r0.currentUserId)("canRemoveMembers", ctx_r0.canRemoveMembers)("canLeave", ctx_r0.canLeaveCollaboration);
    i0.ɵɵadvance();
    i0.ɵɵproperty("requests", ctx_r0.collaborationRequests)("viewMode", "collaboration")("role", ctx_r0.currentUserRole)("currentUserId", ctx_r0.currentUserId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("resources", ctx_r0.sharedResources)("resourceRequests", ctx_r0.resourceRequests)("role", ctx_r0.currentUserRole)("canCreateResource", ctx_r0.isMember)("canRequestResource", ctx_r0.isMember);
    i0.ɵɵadvance();
    i0.ɵɵproperty("campaigns", ctx_r0.marketingCampaigns)("tasks", ctx_r0.marketingTasks)("role", ctx_r0.currentUserRole)("canCreateCampaign", ctx_r0.isMember)("canManageTasks", ctx_r0.isMember);
} }
export class CollaborationDetailComponent {
    constructor(route, collaborationService, authService) {
        this.route = route;
        this.collaborationService = collaborationService;
        this.authService = authService;
        this.collaboration = null;
        this.projectContext = null;
        this.members = [];
        this.collaborationRequests = [];
        this.sharedResources = [];
        this.resourceRequests = [];
        this.marketingCampaigns = [];
        this.marketingTasks = [];
        this.currentUserRole = 'entrepreneur';
        this.currentUserId = 0;
        this.loading = false;
        this.error = null;
    }
    ngOnInit() {
        const userRole = this.authService.role;
        this.currentUserRole = (userRole ? userRole.toLowerCase() : 'entrepreneur');
        this.currentUserId = this.authService.currentUser?.idUser ?? 0;
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            if (id) {
                this.loadCollaboration(id);
            }
        });
    }
    loadCollaboration(id) {
        this.loading = true;
        this.error = null;
        this.collaborationService.getCollaboration(id).subscribe({
            next: (collaboration) => {
                this.collaboration = collaboration;
                this.members = collaboration?.members ?? [];
                this.loadCollaborationDetails(collaboration);
            },
            error: err => {
                this.loading = false;
                this.error = this.extractError(err);
            },
        });
    }
    loadCollaborationDetails(collaboration) {
        forkJoin({
            projectContext: this.collaborationService.getProjectContext(collaboration.projectId),
            sentRequests: this.collaborationService.getSentCollaborationRequests(),
            receivedRequests: this.collaborationService.getReceivedCollaborationRequests(),
            sharedResources: this.collaborationService.getSharedResources(collaboration.id),
            resourceRequests: this.collaborationService.getResourceRequests(collaboration.id),
            marketingCampaigns: this.collaborationService.getMarketingCampaigns(collaboration.id),
        }).subscribe({
            next: ({ projectContext, sentRequests, receivedRequests, sharedResources, resourceRequests, marketingCampaigns }) => {
                this.projectContext = projectContext ?? null;
                const allRequests = [...(sentRequests ?? []), ...(receivedRequests ?? [])];
                this.collaborationRequests = allRequests.filter(request => request?.targetCollaborationId === collaboration.id || request?.projectId === collaboration.projectId);
                this.sharedResources = sharedResources ?? [];
                this.resourceRequests = resourceRequests ?? [];
                this.marketingCampaigns = marketingCampaigns ?? [];
                const firstCampaignId = this.marketingCampaigns[0]?.id;
                if (!firstCampaignId) {
                    this.marketingTasks = [];
                    this.loading = false;
                    return;
                }
                this.collaborationService.getMarketingTasks(firstCampaignId).subscribe({
                    next: tasks => {
                        this.marketingTasks = tasks ?? [];
                        this.loading = false;
                    },
                    error: () => {
                        this.marketingTasks = [];
                        this.loading = false;
                    }
                });
            },
            error: err => {
                this.loading = false;
                this.error = this.extractError(err);
            },
        });
    }
    reloadDetail() {
        if (this.collaboration?.id) {
            this.loadCollaboration(this.collaboration.id);
        }
    }
    extractError(err) {
        const error = err;
        return error?.error?.message ?? error?.message ?? 'Unable to load collaboration details.';
    }
    get isOwner() {
        return (this.collaboration?.ownerId ?? 0) === this.currentUserId;
    }
    get isMember() {
        return this.members.some(member => member?.userId === this.currentUserId);
    }
    get canRemoveMembers() {
        return this.currentUserRole === 'admin' || this.isOwner;
    }
    get canLeaveCollaboration() {
        return this.currentUserRole === 'entrepreneur' && !this.isOwner;
    }
    get canUpdateStatus() {
        return this.currentUserRole === 'admin' || this.isOwner;
    }
    onMemberRemoved(event) {
        this.collaborationService.removeMember(event.collaborationId, event.memberId).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onCollaborationLeft(event) {
        this.collaborationService.leaveCollaboration(event.collaborationId).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onStatusUpdated(event) {
        this.collaborationService.updateStatus(event.collaborationId, event.newStatus).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onRequestAccepted(event) {
        this.collaborationService.acceptRequest(event.requestId).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onRequestRejected(event) {
        this.collaborationService.rejectRequest(event.requestId).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onCreateResource(event) {
        if (!this.collaboration?.id) {
            return;
        }
        this.collaborationService.createResource({
            ...event.payload,
            collaborationId: this.collaboration.id
        }).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onCreateResourceRequest(event) {
        if (!this.collaboration?.id) {
            return;
        }
        this.collaborationService.createResourceRequest({
            ...event.payload,
            collaborationId: this.collaboration.id
        }).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onUpdateResourceRequestStatus(event) {
        this.collaborationService.updateResourceRequestStatus(event.requestId, event.status).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onCreateCampaign(event) {
        if (!this.collaboration?.id) {
            return;
        }
        this.collaborationService.createCampaign({
            ...event.payload,
            collaborationId: this.collaboration.id
        }).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onCreateTask(event) {
        this.collaborationService.createTask(event.payload).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    onUpdateTaskStatus(event) {
        this.collaborationService.updateTaskStatus(event.taskId, event.status).subscribe({
            next: () => this.reloadDetail(),
            error: () => { }
        });
    }
    static { this.ɵfac = function CollaborationDetailComponent_Factory(t) { return new (t || CollaborationDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.CollaborationService), i0.ɵɵdirectiveInject(i3.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollaborationDetailComponent, selectors: [["app-collaboration-detail"]], decls: 3, vars: 3, consts: [["class", "kh-card collab-empty", 4, "ngIf"], ["class", "kh-card collab-alert collab-alert--error", 4, "ngIf"], [4, "ngIf"], [1, "kh-card", "collab-empty"], [1, "kh-card", "collab-alert", "collab-alert--error"], [3, "projectContext", "role", 4, "ngIf"], [3, "statusUpdated", "collaborationLeft", "collaboration", "role", "currentUserId", "canUpdateStatus", "canLeave"], [3, "memberRemoved", "collaborationLeft", "members", "collaborationId", "ownerUserId", "role", "currentUserId", "canRemoveMembers", "canLeave"], [3, "requestAccepted", "requestRejected", "requests", "viewMode", "role", "currentUserId"], [3, "createResource", "createResourceRequest", "updateResourceRequestStatus", "resources", "resourceRequests", "role", "canCreateResource", "canRequestResource"], [3, "createCampaign", "createTask", "updateTaskStatus", "campaigns", "tasks", "role", "canCreateCampaign", "canManageTasks"], [3, "projectContext", "role"]], template: function CollaborationDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CollaborationDetailComponent_div_0_Template, 2, 0, "div", 0)(1, CollaborationDetailComponent_div_1_Template, 2, 1, "div", 1)(2, CollaborationDetailComponent_ng_container_2_Template, 7, 27, "ng-container", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.collaboration);
        } }, dependencies: [i4.NgIf, i5.MembersBlockComponent, i6.CollaborationActionsComponent, i7.RequestsBlockComponent, i8.ResourcesBlockComponent, i9.MarketingBlockComponent, i10.ProjectContextCardComponent], styles: [".detail-stack[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.detail-panel[_ngcontent-%COMP%], .detail-banner[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n}\r\n\r\n.detail-panel[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.detail-header-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: minmax(280px, 1.6fr) minmax(220px, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.detail-panel--summary[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n}\r\n\r\n.detail-panel--alerts[_ngcontent-%COMP%] {\r\n  background: rgba(251, 237, 236, 0.85);\r\n  border: 1px solid rgba(211, 47, 47, 0.2);\r\n}\r\n\r\n.alert-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 12px;\r\n}\r\n\r\n.alert-chip[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n  border-radius: 999px;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n}\r\n\r\n.alert-chip--warn[_ngcontent-%COMP%] {\r\n  background: rgba(255, 199, 0, 0.12);\r\n  color: #8c6600;\r\n}\r\n\r\n.alert-chip--error[_ngcontent-%COMP%] {\r\n  background: rgba(211, 47, 47, 0.12);\r\n  color: #a1271c;\r\n}\r\n\r\n.alert-chip--ok[_ngcontent-%COMP%] {\r\n  background: rgba(0, 128, 0, 0.12);\r\n  color: #1f5d28;\r\n}\r\n\r\n.governance-status-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.status-card[_ngcontent-%COMP%] {\r\n  padding: 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.status-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.status-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.detail-subtitle[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n}\r\n\r\n.detail-panel__header[_ngcontent-%COMP%], .detail-actions[_ngcontent-%COMP%], .member-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.detail-panel__header[_ngcontent-%COMP%] {\r\n  align-items: flex-start;\r\n}\r\n\r\n.detail-panel__eyebrow[_ngcontent-%COMP%], .detail-note[_ngcontent-%COMP%], .member-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .detail-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.detail-meta[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.detail-meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n  display: grid;\r\n  gap: 4px;\r\n}\r\n\r\n.detail-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.detail-actions[_ngcontent-%COMP%] {\r\n  align-items: end;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.detail-actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  min-width: 240px;\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.detail-actions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .detail-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--r-md);\r\n  padding: 10px 12px;\r\n  background: white;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s ease;\r\n}\r\n.detail-actions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .detail-actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: var(--orange);\r\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.1);\r\n}\r\n\r\n.member-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.member-row[_ngcontent-%COMP%] {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n}\r\n\r\n.detail-feedback--error[_ngcontent-%COMP%], .detail-banner--error[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n.detail-feedback--success[_ngcontent-%COMP%] {\r\n  color: var(--green);\r\n}\r\n\r\n.context-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 14px;\r\n}\r\n\r\n.context-panel[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  display: grid;\r\n  gap: 14px;\r\n}\r\n\r\n.context-panel--block[_ngcontent-%COMP%] {\r\n  background: var(--bg-app);\r\n  border-radius: 12px;\r\n  padding: 14px;\r\n}\r\n\r\n.context-panel--wide[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.context-overview[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.context-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  align-items: center;\r\n}\r\n\r\n.context-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.context-description[_ngcontent-%COMP%] {\r\n  margin-top: 4px;\r\n  font-size: 13px;\r\n  color: var(--text-muted);\r\n  line-height: 1.5;\r\n}\r\n\r\n.context-status-badges[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.context-summary-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 10px;\r\n}\r\n\r\n.context-kpi[_ngcontent-%COMP%] {\r\n  background: var(--bg-app);\r\n  border-radius: 10px;\r\n  padding: 10px 12px;\r\n  display: grid;\r\n  gap: 4px;\r\n}\r\n\r\n.coach-insight-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 12px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.coach-insight-card[_ngcontent-%COMP%] {\r\n  padding: 14px;\r\n  border-radius: 14px;\r\n  background: var(--bg-app);\r\n  display: grid;\r\n  gap: 8px;\r\n}\r\n\r\n.coach-insight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.coach-insight-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.context-kpi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.context-kpi[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n}\r\n\r\n.context-kpi--warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: var(--red);\r\n}\r\n\r\n.kh-badge--blue[_ngcontent-%COMP%] {\r\n  background: #e8f2ff;\r\n  color: #184f90;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .context-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .context-panel--wide[_ngcontent-%COMP%] {\r\n    grid-column: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .detail-panel__header[_ngcontent-%COMP%], .detail-actions[_ngcontent-%COMP%], .member-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .detail-actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .context-summary-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollaborationDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-collaboration-detail', template: "<div *ngIf=\"loading\" class=\"kh-card collab-empty\">Loading collaboration details...</div>\n<div *ngIf=\"error\" class=\"kh-card collab-alert collab-alert--error\">{{ error }}</div>\n\n<ng-container *ngIf=\"collaboration as currentCollaboration\">\n  <app-project-context-card\n    *ngIf=\"projectContext\"\n    [projectContext]=\"projectContext\"\n    [role]=\"currentUserRole\">\n  </app-project-context-card>\n\n  <app-collaboration-actions\n    [collaboration]=\"currentCollaboration\"\n    [role]=\"currentUserRole\"\n    [currentUserId]=\"currentUserId\"\n    [canUpdateStatus]=\"canUpdateStatus\"\n    [canLeave]=\"canLeaveCollaboration\"\n    (statusUpdated)=\"onStatusUpdated($event)\"\n    (collaborationLeft)=\"onCollaborationLeft($event)\">\n  </app-collaboration-actions>\n\n  <app-members-block\n    [members]=\"members\"\n    [collaborationId]=\"currentCollaboration.id\"\n    [ownerUserId]=\"currentCollaboration.ownerId\"\n    [role]=\"currentUserRole\"\n    [currentUserId]=\"currentUserId\"\n    [canRemoveMembers]=\"canRemoveMembers\"\n    [canLeave]=\"canLeaveCollaboration\"\n    (memberRemoved)=\"onMemberRemoved($event)\"\n    (collaborationLeft)=\"onCollaborationLeft($event)\">\n  </app-members-block>\n\n  <app-requests-block\n    [requests]=\"collaborationRequests\"\n    [viewMode]=\"'collaboration'\"\n    [role]=\"currentUserRole\"\n    [currentUserId]=\"currentUserId\"\n    (requestAccepted)=\"onRequestAccepted($event)\"\n    (requestRejected)=\"onRequestRejected($event)\">\n  </app-requests-block>\n\n  <app-resources-block\n    [resources]=\"sharedResources\"\n    [resourceRequests]=\"resourceRequests\"\n    [role]=\"currentUserRole\"\n    [canCreateResource]=\"isMember\"\n    [canRequestResource]=\"isMember\"\n    (createResource)=\"onCreateResource($event)\"\n    (createResourceRequest)=\"onCreateResourceRequest($event)\"\n    (updateResourceRequestStatus)=\"onUpdateResourceRequestStatus($event)\">\n  </app-resources-block>\n\n  <app-marketing-block\n    [campaigns]=\"marketingCampaigns\"\n    [tasks]=\"marketingTasks\"\n    [role]=\"currentUserRole\"\n    [canCreateCampaign]=\"isMember\"\n    [canManageTasks]=\"isMember\"\n    (createCampaign)=\"onCreateCampaign($event)\"\n    (createTask)=\"onCreateTask($event)\"\n    (updateTaskStatus)=\"onUpdateTaskStatus($event)\">\n  </app-marketing-block>\n</ng-container>\n", styles: [".detail-stack {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.detail-panel,\r\n.detail-banner {\r\n  padding: 24px;\r\n}\r\n\r\n.detail-panel {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.detail-header-grid {\r\n  display: grid;\r\n  grid-template-columns: minmax(280px, 1.6fr) minmax(220px, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.detail-panel--summary {\r\n  min-height: 100%;\r\n}\r\n\r\n.detail-panel--alerts {\r\n  background: rgba(251, 237, 236, 0.85);\r\n  border: 1px solid rgba(211, 47, 47, 0.2);\r\n}\r\n\r\n.alert-list {\r\n  display: grid;\r\n  gap: 12px;\r\n}\r\n\r\n.alert-chip {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n  border-radius: 999px;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n}\r\n\r\n.alert-chip--warn {\r\n  background: rgba(255, 199, 0, 0.12);\r\n  color: #8c6600;\r\n}\r\n\r\n.alert-chip--error {\r\n  background: rgba(211, 47, 47, 0.12);\r\n  color: #a1271c;\r\n}\r\n\r\n.alert-chip--ok {\r\n  background: rgba(0, 128, 0, 0.12);\r\n  color: #1f5d28;\r\n}\r\n\r\n.governance-status-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.status-card {\r\n  padding: 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.status-card span {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.status-card strong {\r\n  font-size: 14px;\r\n}\r\n\r\n.detail-subtitle {\r\n  margin: 0;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n}\r\n\r\n.detail-panel__header,\r\n.detail-actions,\r\n.member-row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n}\r\n\r\n.detail-panel__header {\r\n  align-items: flex-start;\r\n}\r\n\r\n.detail-panel__eyebrow,\r\n.detail-note,\r\n.member-row p,\r\n.detail-meta span {\r\n  margin: 0;\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.detail-meta {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.detail-meta div {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n  display: grid;\r\n  gap: 4px;\r\n}\r\n\r\n.detail-meta strong {\r\n  font-size: 14px;\r\n}\r\n\r\n.detail-actions {\r\n  align-items: end;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.detail-actions label {\r\n  min-width: 240px;\r\n  display: grid;\r\n  gap: 6px;\r\n}\r\n\r\n.detail-actions input,\r\n.detail-actions select {\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--r-md);\r\n  padding: 10px 12px;\r\n  background: white;\r\n  font-size: 13px;\r\n  transition: border-color 0.2s ease;\r\n}\r\n.detail-actions input:focus,\r\n.detail-actions select:focus {\r\n  outline: none;\r\n  border-color: var(--orange);\r\n  box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.1);\r\n}\r\n\r\n.member-list {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.member-row {\r\n  padding: 12px 14px;\r\n  border-radius: 12px;\r\n  background: var(--bg-app);\r\n}\r\n\r\n.detail-feedback--error,\r\n.detail-banner--error {\r\n  color: var(--red);\r\n}\r\n\r\n.detail-feedback--success {\r\n  color: var(--green);\r\n}\r\n\r\n.context-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 14px;\r\n}\r\n\r\n.context-panel {\r\n  padding: 0;\r\n  display: grid;\r\n  gap: 14px;\r\n}\r\n\r\n.context-panel--block {\r\n  background: var(--bg-app);\r\n  border-radius: 12px;\r\n  padding: 14px;\r\n}\r\n\r\n.context-panel--wide {\r\n  grid-column: 1 / -1;\r\n}\r\n\r\n.context-overview {\r\n  display: grid;\r\n  gap: 10px;\r\n}\r\n\r\n.context-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  align-items: center;\r\n}\r\n\r\n.context-row span {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.context-description {\r\n  margin-top: 4px;\r\n  font-size: 13px;\r\n  color: var(--text-muted);\r\n  line-height: 1.5;\r\n}\r\n\r\n.context-status-badges {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.context-summary-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 10px;\r\n}\r\n\r\n.context-kpi {\r\n  background: var(--bg-app);\r\n  border-radius: 10px;\r\n  padding: 10px 12px;\r\n  display: grid;\r\n  gap: 4px;\r\n}\r\n\r\n.coach-insight-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 12px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.coach-insight-card {\r\n  padding: 14px;\r\n  border-radius: 14px;\r\n  background: var(--bg-app);\r\n  display: grid;\r\n  gap: 8px;\r\n}\r\n\r\n.coach-insight-card span {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.coach-insight-card strong {\r\n  font-size: 14px;\r\n}\r\n\r\n.context-kpi span {\r\n  color: var(--text-muted);\r\n  font-size: 12px;\r\n}\r\n\r\n.context-kpi strong {\r\n  font-size: 15px;\r\n}\r\n\r\n.context-kpi--warn strong {\r\n  color: var(--red);\r\n}\r\n\r\n.kh-badge--blue {\r\n  background: #e8f2ff;\r\n  color: #184f90;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .context-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .context-panel--wide {\r\n    grid-column: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .detail-panel__header,\r\n  .detail-actions,\r\n  .member-row {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .detail-actions label {\r\n    width: 100%;\r\n  }\r\n\r\n  .context-summary-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.CollaborationService }, { type: i3.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollaborationDetailComponent, { className: "CollaborationDetailComponent", filePath: "app\\features\\collaboration\\collaboration-detail\\collaboration-detail.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=collaboration-detail.component.js.map