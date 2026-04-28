import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BmcData } from '../models';

export interface BmcAnalysisResult {
  scoreGlobal:        number;
  maturiteLabel:      string;
  synthese:           string;
  pointsForts:        string[];
  incoherences:       string[];
  questionsCritiques: string[];
  recommandations:    string[];
}

@Injectable({ providedIn: 'root' })
export class BmcAnalysisService {

  private readonly apiUrl = 'http://localhost:8084/khotwa/ai/analyser-bmc';

  constructor(private http: HttpClient) {}

  analyser(
    titreSartup: string,
    secteur:     string,
    stade:       string,
    bmc:         BmcData
  ): Observable<BmcAnalysisResult> {
    return this.http.post<BmcAnalysisResult>(this.apiUrl, {
      titreSartup,
      secteur,
      stade,
      propositionValeur: bmc.propositionValeur,
      segmentsClientele: bmc.segmentsClientele,
      sourcesRevenus:    bmc.sourcesRevenus,
      canaux:            bmc.canaux,
      relationsClients:  bmc.relationsClients,
      ressourcesCles:    bmc.ressourcesCles,
      activitesCles:     bmc.activitesCles,
      structureCouts:    bmc.structureCouts,
      partenaires:       bmc.partenaires,
    });
  }
}