import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  GlobalCollaborationHealth,
  MarketingCollaborationAnalysis,
  ResourceCollaborationAnalysis,
  WeeklyCollaborationReport,
  WeeklyCollaborationRiskLevel,
} from '../models/weekly-collaboration-report.model';
import {
  GlobalCollaborationInsight,
  MarketingCollaborationInsight,
  ResourceCollaborationInsight,
  WeeklyCollaborationAiReport,
} from '../models/weekly-collaboration-ai-report.model';

const API_BASE = '/api/collaborations/reports/weekly';
const AI_CATEGORY_BASE = '/api/weekly-reports';

interface WeeklyCollaborationReportResponse {
  id: number;
  weekStartDate: string;
  weekEndDate: string;
  generatedAt: string;
  collaborationsCreatedThisWeek: number;
  activeCollaborations: number;
  suspendedCollaborations: number;
  closedCollaborations: number;
  collaborationsClosedThisWeek: number;
  collaborationsByType: Record<string, number>;
  pendingCollaborationRequests: number;
  acceptedRequestsThisWeek: number;
  rejectedRequestsThisWeek: number;
  newMembersThisWeek: number;
  invitationsSentThisWeek: number;
  invitationsAcceptedThisWeek: number;
  invitationsRejectedThisWeek: number;
  openResourceRequests: number;
  fulfilledResourceRequests: number;
  cancelledResourceRequests: number;
  activeMarketingCampaigns: number;
  completedMarketingCampaigns: number;
  overdueMarketingTasks: number;
  publishedMarketingTasks: number;
  totalMarketingTasks: number;
  riskLevel: WeeklyCollaborationRiskLevel;
  globalCollaborationHealth: GlobalCollaborationHealth;
  resourceCollaborationAnalysis: ResourceCollaborationAnalysis;
  marketingCollaborationAnalysis: MarketingCollaborationAnalysis;
}

interface WeeklyCollaborationAiReportResponse {
  id: number;
  weeklyReportId: number;
  generatedAt?: string | null;

  globalInsightJson?: string | null;
  globalStatus?: WeeklyCollaborationAiReport['globalStatus'];
  globalError?: string | null;

  resourceInsightJson?: string | null;
  resourceStatus?: WeeklyCollaborationAiReport['resourceStatus'];
  resourceError?: string | null;

  marketingInsightJson?: string | null;
  marketingStatus?: WeeklyCollaborationAiReport['marketingStatus'];
  marketingError?: string | null;

  // Backward-compatible shape (older API responses)
  status?: string | null;
  globalInsight?: {
    status?: string | null;
    onboarding?: string | null;
    issue?: string | null;
    actions?: string[] | null;
    priority?: string | null;
  } | null;
  resourceInsight?: {
    pressure?: string | null;
    fulfillment?: string | null;
    issue?: string | null;
    actions?: string[] | null;
    priority?: string | null;
  } | null;
  marketingInsight?: {
    execution?: string | null;
    risk?: string | null;
    issue?: string | null;
    actions?: string[] | null;
    priority?: string | null;
  } | null;
  errorMessage?: string | null;
}

@Injectable({ providedIn: 'root' })
export class WeeklyCollaborationReportService {
  constructor(private http: HttpClient) {}

  getLatestReport(): Observable<WeeklyCollaborationReport> {
    return this.http.get<WeeklyCollaborationReportResponse>(`${API_BASE}/latest`)
      .pipe(map(report => this.toBackendReport(report)));
  }

  generateReport(): Observable<WeeklyCollaborationReport> {
    return this.http.post<WeeklyCollaborationReportResponse>(`${API_BASE}/generate`, {})
      .pipe(map(report => this.toBackendReport(report)));
  }

  getAllReports(): Observable<WeeklyCollaborationReport[]> {
    return this.http.get<WeeklyCollaborationReportResponse[]>(API_BASE)
      .pipe(map(reports => reports.map(report => this.toBackendReport(report))));
  }

  getReportById(id: number): Observable<WeeklyCollaborationReport> {
    return this.http.get<WeeklyCollaborationReportResponse>(`${API_BASE}/${id}`)
      .pipe(map(report => this.toBackendReport(report)));
  }

  getAiReports(reportId: number): Observable<WeeklyCollaborationAiReport[]> {
    return this.http.get<WeeklyCollaborationAiReportResponse[]>(`${API_BASE}/${reportId}/ai-reports`)
      .pipe(map(reports => reports.map(report => this.toAiReport(report))));
  }

  getLatestAiReport(reportId: number): Observable<WeeklyCollaborationAiReport> {
    return this.http.get<WeeklyCollaborationAiReportResponse>(`${API_BASE}/${reportId}/ai-reports/latest`)
      .pipe(map(report => this.toAiReport(report)));
  }

  generateAiReport(reportId: number): Observable<WeeklyCollaborationAiReport> {
    return this.http.post<WeeklyCollaborationAiReportResponse>(`${API_BASE}/${reportId}/ai-reports/generate`, {})
      .pipe(map(report => this.toAiReport(report)));
  }

  generateGlobalAiInsights(reportId: number): Observable<WeeklyCollaborationAiReport> {
    return this.http.post<WeeklyCollaborationAiReportResponse>(`${AI_CATEGORY_BASE}/${reportId}/ai/global`, {})
      .pipe(map(report => this.toAiReport(report)));
  }

  generateResourceAiInsights(reportId: number): Observable<WeeklyCollaborationAiReport> {
    return this.http.post<WeeklyCollaborationAiReportResponse>(`${AI_CATEGORY_BASE}/${reportId}/ai/resource`, {})
      .pipe(map(report => this.toAiReport(report)));
  }

  generateMarketingAiInsights(reportId: number): Observable<WeeklyCollaborationAiReport> {
    return this.http.post<WeeklyCollaborationAiReportResponse>(`${AI_CATEGORY_BASE}/${reportId}/ai/marketing`, {})
      .pipe(map(report => this.toAiReport(report)));
  }

  generateLatestAiReport(): Observable<WeeklyCollaborationAiReport> {
    return this.http.post<WeeklyCollaborationAiReportResponse>(`${API_BASE}/latest/ai-reports/generate`, {})
      .pipe(map(report => this.toAiReport(report)));
  }

  prepareAiReport(reportId: number): Observable<WeeklyCollaborationAiReport> {
    return this.http.post<WeeklyCollaborationAiReportResponse>(`${API_BASE}/${reportId}/ai-reports/prepare`, {})
      .pipe(map(report => this.toAiReport(report)));
  }

  private toBackendReport(report: WeeklyCollaborationReportResponse): WeeklyCollaborationReport {
    return {
      id: report.id,
      weekStartDate: report.weekStartDate,
      weekEndDate: report.weekEndDate,
      generatedAt: report.generatedAt,
      collaborationsCreatedThisWeek: report.collaborationsCreatedThisWeek,
      activeCollaborations: report.activeCollaborations,
      suspendedCollaborations: report.suspendedCollaborations,
      closedCollaborations: report.closedCollaborations,
      collaborationsClosedThisWeek: report.collaborationsClosedThisWeek,
      collaborationsByType: report.collaborationsByType,
      pendingCollaborationRequests: report.pendingCollaborationRequests,
      acceptedRequestsThisWeek: report.acceptedRequestsThisWeek,
      rejectedRequestsThisWeek: report.rejectedRequestsThisWeek,
      newMembersThisWeek: report.newMembersThisWeek,
      invitationsSentThisWeek: report.invitationsSentThisWeek,
      invitationsAcceptedThisWeek: report.invitationsAcceptedThisWeek,
      invitationsRejectedThisWeek: report.invitationsRejectedThisWeek,
      openResourceRequests: report.openResourceRequests,
      fulfilledResourceRequests: report.fulfilledResourceRequests,
      cancelledResourceRequests: report.cancelledResourceRequests,
      activeMarketingCampaigns: report.activeMarketingCampaigns,
      completedMarketingCampaigns: report.completedMarketingCampaigns,
      overdueMarketingTasks: report.overdueMarketingTasks,
      publishedMarketingTasks: report.publishedMarketingTasks,
      totalMarketingTasks: report.totalMarketingTasks,
      riskLevel: report.riskLevel,
      globalCollaborationHealth: report.globalCollaborationHealth,
      resourceCollaborationAnalysis: report.resourceCollaborationAnalysis,
      marketingCollaborationAnalysis: report.marketingCollaborationAnalysis,
    };
  }

  private toAiReport(report: WeeklyCollaborationAiReportResponse): WeeklyCollaborationAiReport {
    const globalInsightFromJson = this.parseInsightJson<WeeklyCollaborationAiReportResponse['globalInsight']>(report.globalInsightJson);
    const resourceInsightFromJson = this.parseInsightJson<WeeklyCollaborationAiReportResponse['resourceInsight']>(report.resourceInsightJson);
    const marketingInsightFromJson = this.parseInsightJson<WeeklyCollaborationAiReportResponse['marketingInsight']>(report.marketingInsightJson);

    return {
      id: report.id,
      weeklyReportId: report.weeklyReportId,
      generatedAt: report.generatedAt ?? null,

      globalInsightJson: report.globalInsightJson ?? null,
      globalStatus: report.globalStatus ?? (report.globalInsight || globalInsightFromJson ? 'SUCCESS' : null),
      globalError: this.normalizeText(report.globalError) ?? null,

      resourceInsightJson: report.resourceInsightJson ?? null,
      resourceStatus: report.resourceStatus ?? (report.resourceInsight || resourceInsightFromJson ? 'SUCCESS' : null),
      resourceError: this.normalizeText(report.resourceError) ?? null,

      marketingInsightJson: report.marketingInsightJson ?? null,
      marketingStatus: report.marketingStatus ?? (report.marketingInsight || marketingInsightFromJson ? 'SUCCESS' : null),
      marketingError: this.normalizeText(report.marketingError) ?? null,

      globalInsight: this.toGlobalInsight(report.globalInsight ?? globalInsightFromJson),
      resourceInsight: this.toResourceInsight(report.resourceInsight ?? resourceInsightFromJson),
      marketingInsight: this.toMarketingInsight(report.marketingInsight ?? marketingInsightFromJson),
    };
  }

  private toGlobalInsight(
    insight?: WeeklyCollaborationAiReportResponse['globalInsight']
  ): GlobalCollaborationInsight | null {
    if (!insight) {
      return null;
    }

    return {
      status: this.normalizeText(insight.status),
      onboarding: this.normalizeText(insight.onboarding),
      issue: this.normalizeText(insight.issue),
      actions: this.normalizeList(insight.actions),
      priority: this.normalizeText(insight.priority),
    };
  }

  private toResourceInsight(
    insight?: WeeklyCollaborationAiReportResponse['resourceInsight']
  ): ResourceCollaborationInsight | null {
    if (!insight) {
      return null;
    }

    return {
      pressure: this.normalizeText(insight.pressure),
      fulfillment: this.normalizeText(insight.fulfillment),
      issue: this.normalizeText(insight.issue),
      actions: this.normalizeList(insight.actions),
      priority: this.normalizeText(insight.priority),
    };
  }

  private toMarketingInsight(
    insight?: WeeklyCollaborationAiReportResponse['marketingInsight']
  ): MarketingCollaborationInsight | null {
    if (!insight) {
      return null;
    }

    return {
      execution: this.normalizeText(insight.execution),
      risk: this.normalizeText(insight.risk),
      issue: this.normalizeText(insight.issue),
      actions: this.normalizeList(insight.actions),
      priority: this.normalizeText(insight.priority),
    };
  }

  private normalizeText(value?: string | null): string | null {
    const trimmed = value?.trim();
    return trimmed ? trimmed : null;
  }

  private normalizeList(values?: string[] | null): string[] {
    return (values ?? [])
      .map(value => value?.trim())
      .filter((value): value is string => !!value);
  }

  private parseInsightJson<T>(value?: string | null): T | null {
    const trimmed = value?.trim();
    if (!trimmed) {
      return null;
    }

    try {
      const parsed = JSON.parse(trimmed) as T;
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch {
      return null;
    }
  }
}
