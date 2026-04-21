import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AiRecommendation,
  HiringAiRequest,
  HiringAiResponse,
  SkillGapAnalysis,
  TalentAiAdviceRequest,
  TalentAiAdviceResponse
} from '../models/talent.model';
import { TalentService } from './talent.service';

@Injectable({ providedIn: 'root' })
export class AiService {
  constructor(private talentService: TalentService) {}

  getHiringAdvice(payload: HiringAiRequest): Observable<HiringAiResponse> {
    return this.talentService.getHiringAiAdvice(payload);
  }

  getTalentAdvice(payload: TalentAiAdviceRequest): Observable<TalentAiAdviceResponse> {
    return this.talentService.getTalentAiAdvice(payload);
  }

  getSkillGap(talentId: number, jobId: number): Observable<SkillGapAnalysis> {
    return this.talentService.getSkillGap(talentId, jobId);
  }

  getRecommendations(): Observable<AiRecommendation[]> {
    return this.talentService.getAiRecommendations();
  }
}
