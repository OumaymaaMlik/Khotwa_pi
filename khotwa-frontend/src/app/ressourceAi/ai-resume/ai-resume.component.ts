import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AiService } from '../../core/services/ai.service';


@Component({
  selector: 'app-ai-resume',
  templateUrl: './ai-resume.component.html',
  styleUrls: ['./ai-resume.component.css']
})
export class AiResumeComponent implements OnInit {

  @Input() ressourceId!: number;
  @Input() titre  = '';
  @Input() type   = '';
  @Input() description = '';
  @Output() closed = new EventEmitter<void>();

  resume    = '';
  isLoading = false;
  error     = '';
  copied    = false;

  constructor(private aiService: AiService) {}

  ngOnInit() {
    this.generate();
  }

  generate() {
    this.isLoading = true;
    this.error     = '';
    this.resume    = '';

    // FIX — Toujours appeler getResume(id) en premier :
    // il lit le vrai contenu du fichier (PDF, Word, Excel, Image, Lien).
    // Fallback sur getResumeRapide uniquement si pas d'ID (cas rare).
    if (this.ressourceId) {
      this.aiService.getResume(this.ressourceId).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.resume    = res.resume;
        },
        error: (err) => {
          this.isLoading = false;
          if (err?.status === 404) {
            // Ressource introuvable en DB → fallback rapide si on a les métadonnées
            if (this.titre) {
              this.aiService.getResumeRapide(this.titre, this.type, this.description).subscribe({
                next: (res) => { this.resume = res.resume; },
                error: () => { this.error = 'Erreur lors de la génération du résumé.'; }
              });
            } else {
              this.error = 'Ressource introuvable. Elle a peut-être été supprimée.';
            }
          } else {
            this.error = 'Erreur lors de la génération du résumé. Vérifie ta connexion ou réessaie.';
          }
        }
      });
      return;
    }

    // Pas d'ID disponible → fallback sur titre + description
    if (this.titre || this.description) {
      this.aiService.getResumeRapide(this.titre, this.type, this.description).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.resume    = res.resume;
        },
        error: () => {
          this.isLoading = false;
          this.error = 'Erreur lors de la génération du résumé. Vérifie ta connexion ou réessaie.';
        }
      });
      return;
    }

    this.isLoading = false;
    this.error = 'Données insuffisantes pour générer un résumé.';
  }

  copy() {
    if (!this.resume) return;
    navigator.clipboard.writeText(this.resume).then(() => {
      this.copied = true;
      setTimeout(() => { this.copied = false; }, 2000);
    });
  }

  close() { this.closed.emit(); }
}