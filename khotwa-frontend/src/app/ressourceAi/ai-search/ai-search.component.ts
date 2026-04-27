import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AiService, AiRessource } from '../../core/services/ai.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ai-search',
  templateUrl: './ai-search.component.html',
  styleUrls: ['./ai-search.component.css']
})
export class AiSearchComponent implements OnDestroy {

  @Output() resultsFound    = new EventEmitter<AiRessource[]>();
  @Output() searchCleared   = new EventEmitter<void>();
  @Output() resourceClicked = new EventEmitter<string>();

  query     = '';
  isLoading = false;
  isAiMode  = false;
  error     = '';

  private searchSubject = new Subject<string>();

  constructor(private aiService: AiService) {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(q => {
        if (!q || q.length < 2) {
          this.isLoading = false;
          this.isAiMode  = false;
          this.searchCleared.emit();
          return [];
        }
        this.isLoading = true;
        this.error = '';
        return this.aiService.rechercheIntelligente(q, 8);
      })
    ).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        const results: AiRessource[] = res.results || [];
        console.log('[AI-SEARCH] query résultat:', results.length, 'items', results.map(r => r.id + ':' + r.titre + '(score=' + r.score + ')'));
        this.resultsFound.emit(results);
      },
      error: () => {
        this.isLoading = false;
        this.error = 'Erreur de recherche';
        this.searchCleared.emit();
      }
    });
  }

  onInput() {
    this.isAiMode = this.query.length >= 2;
    this.searchSubject.next(this.query);
  }

  clear() {
    this.query    = '';
    this.isAiMode = false;
    this.searchCleared.emit();
  }

  ngOnDestroy() { this.searchSubject.complete(); }
}