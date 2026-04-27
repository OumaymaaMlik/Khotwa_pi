import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  ressources?: AiRessource[];
  timestamp?: Date;
}

export interface AiRessource {
  id: string;
  titre: string;
  type: string;
  description: string;
  planType: string;
  score?: number;
}

export interface ChatResponse {
  reponse: string;
  ressources: AiRessource[];
  found: boolean;
}

export interface SearchResponse {
  query: string;
  results: AiRessource[];
  total: number;
}

export interface ResumeResponse {
  resume: string;
  ressourceId?: string;
}

@Injectable({ providedIn: 'root' })
export class AiService {

  private api = 'http://localhost:8084/khotwa/api/ai';

  constructor(private http: HttpClient) {}

  // ── Résumé automatique ──────────────────────────────
  getResume(ressourceId: number): Observable<ResumeResponse> {
    return this.http.get<ResumeResponse>(`${this.api}/resume/${ressourceId}`);
  }

  getResumeRapide(titre: string, type: string, description: string): Observable<ResumeResponse> {
    return this.http.post<ResumeResponse>(`${this.api}/resume/rapide`, { titre, type, description });
  }

  // ── Recherche intelligente ──────────────────────────
  rechercheIntelligente(query: string, topK = 6): Observable<SearchResponse> {
    return this.http
      .get<any[]>(`${this.api}/recherche`, {
        params: { query, limit: String(topK) }
      })
      .pipe(
        map((items: any[]) => {
          const results: AiRessource[] = (items ?? []).map(item => ({
            id:          String(item['ressourceId'] ?? item['id'] ?? ''),
            titre:       item['titre'] ?? item['title'] ?? '',
            type:        item['type'] ?? 'RESSOURCE',
            description: item['description'] ?? '',
            planType:    item['planType'] ?? 'FREE',
            // FIX 3 — afficher le vrai score retourné par le backend
            score:       typeof item['score'] === 'number' ? item['score'] : 0,
          }));
          // Trier par score décroissant (le plus pertinent en premier)
          results.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
          return { query, results, total: results.length };
        })
      );
  }

  // ── Chatbot ─────────────────────────────────────────
  chat(message: string): Observable<ChatResponse> {
    return this.http
      .post<any>(`${this.api}/chat`, { message })
      .pipe(
        map(res => {
          const rawRessources: any[] = res.ressources ?? [];
          const ressources: AiRessource[] = rawRessources.map(item => ({
            id:          String(item['ressourceId'] ?? item['id'] ?? ''),
            titre:       item['titre'] ?? item['title'] ?? 'Ressource',
            type:        item['type'] ?? 'RESSOURCE',
            description: item['description'] ?? '',
            planType:    item['planType'] ?? 'FREE',
            score:       typeof item['score'] === 'number' ? item['score'] : 0,
          }));
          return { reponse: res.reponse ?? '', found: res.found ?? false, ressources } as ChatResponse;
        })
      );
  }

  // ── Indexation (Admin) ──────────────────────────────
  reindexer(): Observable<any> {
    return this.http.post<any>(`${this.api}/indexation/refresh`, {});
  }
}
