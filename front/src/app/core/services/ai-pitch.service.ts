import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export type PitchFieldKey =
  | 'description'
  | 'problemeAdresse'
  | 'solutionProposee'
  | 'businessModel'
  | 'innovationDescription'
  | 'scalabiliteDescription';

export const PITCH_FIELD_LABELS: Record<PitchFieldKey, string> = {
  description:            'Project description',
  problemeAdresse:        'Problem addressed',
  solutionProposee:       'Proposed solution',
  businessModel:          'Business model',
  innovationDescription:  'Innovation',
  scalabiliteDescription: 'Scalability',
};

export interface AiPitchResponse {
  improvedText: string;
  fieldKey: string;
  originalText: string;
}

@Injectable({ providedIn: 'root' })
export class AiPitchService {

  private readonly apiUrl = '/khotwa/ai/improve-pitch';

  constructor(private http: HttpClient) {}

  improveText(fieldKey: PitchFieldKey, originalText: string): Observable<AiPitchResponse> {
    return this.http.post<AiPitchResponse>(this.apiUrl, {
      fieldKey,
      fieldLabel: PITCH_FIELD_LABELS[fieldKey],
      originalText: originalText.trim(),
    });
  }
}
