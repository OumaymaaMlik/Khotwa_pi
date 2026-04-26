import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AiService, ChatMessage, AiRessource } from '../../core/services/ai.service';
@Component({
  selector: 'app-ai-chatbot',
  templateUrl: './ai-chatbot.component.html',
  styleUrls: ['./ai-chatbot.component.css']
})
export class AiChatbotComponent implements OnInit {

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  messages: ChatMessage[] = [];
  inputMessage = '';
  isLoading = false;
  isOpen = false;

  ngOnInit() {
    // Message de bienvenue
    this.messages.push({
      role: 'assistant',
      content: '👋 Bonjour ! Je suis l\'assistant IA de Khotwa. Dis-moi ce que tu cherches et je te trouverai les meilleures ressources !',
      timestamp: new Date()
    });
  }

  constructor(private aiService: AiService, private router: Router, private auth: AuthService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const msg = this.inputMessage.trim();
    if (!msg || this.isLoading) return;

    // Ajouter le message utilisateur
    this.messages.push({
      role: 'user',
      content: msg,
      timestamp: new Date()
    });
    this.inputMessage = '';
    this.isLoading = true;

    setTimeout(() => this.scrollToBottom(), 50);

    // Appel API
    this.aiService.chat(msg).subscribe({
      next: (res) => {
        this.messages.push({
          role: 'assistant',
          content: res.reponse,
          ressources: res.found ? res.ressources : [],
          timestamp: new Date()
        });
        this.isLoading = false;
        setTimeout(() => this.scrollToBottom(), 50);
      },
      error: () => {
        this.messages.push({
          role: 'assistant',
          content: '⚠️ Une erreur est survenue. Réessaie dans quelques instants.',
          timestamp: new Date()
        });
        this.isLoading = false;
        setTimeout(() => this.scrollToBottom(), 50);
      }
    });
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  getTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      PDF: 'bi-file-earmark-pdf',
      VIDEO: 'bi-play-circle',
      EXCEL: 'bi-file-earmark-spreadsheet',
      WORD: 'bi-file-earmark-word',
      IMAGE: 'bi-image',
      LINK: 'bi-link-45deg'
    };
    return icons[type] || 'bi-file-earmark';
  }

  getPlanBadge(plan: string): string {
    const badges: Record<string, string> = {
      FREE: 'badge-free',
      PREMIUM: 'badge-premium',
      INSTITUTIONAL: 'badge-institutional'
    };
    return badges[plan] || 'badge-free';
  }

  clearHistory() {
    this.messages = [{
      role: 'assistant',
      content: '👋 Conversation réinitialisée ! Comment puis-je t\'aider ?',
      timestamp: new Date()
    }];
  }

  private scrollToBottom() {
    try {
      const el = this.messagesContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    } catch {}
  }

  openResource(r: AiRessource) {
    this.isOpen = false;
    // Navigate to the correct bibliotheque based on user role, with ressourceId as query param
    const role = this.auth.role;
    let path = '/entrepreneur/bibliotheque';
    if (role === 'ADMIN') path = '/khotwaadmin/bibliotheque';
    else if (role === 'COACH') path = '/coach/bibliotheque';
    this.router.navigate([path], { queryParams: { openId: r.id } });
  }

  quickQuestions = [
    'Comment financer ma startup ?',
    'Ressources sur le marketing digital',
    'Guide business plan',
    'Comment trouver des investisseurs ?'
  ];

  sendQuickQuestion(q: string) {
    this.inputMessage = q;
    this.sendMessage();
  }
}