import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TalentService } from './talent.service';
import { MatchingInsight } from '../models/talent.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private talentService: TalentService) {}

  getMatching(talentId: number, jobId: number): Observable<MatchingInsight> {
    return this.talentService.getMatchingInsight(talentId, jobId);
  }
}
