export type AiGenerationStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export interface GlobalCollaborationInsight {
  status?: string | null;
  onboarding?: string | null;
  issue?: string | null;
  actions: string[];
  priority?: string | null;
}

export interface ResourceCollaborationInsight {
  pressure?: string | null;
  fulfillment?: string | null;
  issue?: string | null;
  actions: string[];
  priority?: string | null;
}

export interface MarketingCollaborationInsight {
  execution?: string | null;
  risk?: string | null;
  issue?: string | null;
  actions: string[];
  priority?: string | null;
}

export interface WeeklyCollaborationAiReport {
  id: number;
  weeklyReportId: number;
  generatedAt?: string | null;

  globalInsightJson?: string | null;
  globalStatus?: AiGenerationStatus | null;
  globalError?: string | null;

  resourceInsightJson?: string | null;
  resourceStatus?: AiGenerationStatus | null;
  resourceError?: string | null;

  marketingInsightJson?: string | null;
  marketingStatus?: AiGenerationStatus | null;
  marketingError?: string | null;

  globalInsight?: GlobalCollaborationInsight | null;
  resourceInsight?: ResourceCollaborationInsight | null;
  marketingInsight?: MarketingCollaborationInsight | null;
}
