import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../core/services/message.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-entrepreneur-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class EntrepreneurTalentComponent {
  view = 'talents';

  talents = [
    { id: 't1', nom: 'Karim Dridi',       poste: 'Full Stack Developer',  competences: ['Angular', 'Node.js', 'MongoDB'],    score: 92, disponible: true  },
    { id: 't2', nom: 'Amira Saidi',        poste: 'UX/UI Designer',        competences: ['Figma', 'Adobe XD', 'CSS'],          score: 88, disponible: true  },
    { id: 't3', nom: 'Youssef Ben Hmida',  poste: 'Data Scientist',         competences: ['Python', 'TensorFlow', 'SQL'],        score: 75, disponible: false },
    { id: 't4', nom: 'Sonia Mhiri',        poste: 'Digital Marketing',      competences: ['SEO', 'Google Ads', 'Analytics'],     score: 81, disponible: true  },
  ];

  annonces = [
    { id: 'a1', startup: 'EduTech Pro',    poste: 'Co-founder CTO',     type: 'cofondateur', competences: ['React', 'AWS'],      match: 92 },
    { id: 'a2', startup: 'HealthMobile',   poste: 'iOS Dev Intern',      type: 'stagiaire',   competences: ['Swift', 'UIKit'],    match: 75 },
  ];

  showForm = false;

  newAnnonce = { poste: '', type: 'stagiaire', competences: '' };

  submitAnnonce() {
    if (!this.newAnnonce.poste) return;
    this.annonces.push({
      id: 'a' + Date.now(),
      startup: 'My Startup',
      poste: this.newAnnonce.poste,
      type: this.newAnnonce.type,
      competences: this.newAnnonce.competences.split(',').map(s => s.trim()).filter(Boolean),
      match: 0,
    });
    this.showForm = false;
    this.newAnnonce = { poste: '', type: 'stagiaire', competences: '' };
    this.view = 'annonces';
  }

  constructor(
    private router: Router,
    private messageService: MessageService,
    private auth: AuthService
  ) {}

  onContactTalent(talentId: string) {
    const targetId = parseInt(talentId.replace('t', '')); 
    const currentUserId = this.auth.currentUser?.idUser;

    if (!currentUserId) {
      console.error('User not logged in');
      return;
    }

    this.messageService.initiateContact(currentUserId, targetId).subscribe({
      next: (response) => {
        console.log('Conversation started!', response);
        const conversationId = response?.conversationId ?? targetId;
        this.router.navigateByUrl(`/entrepreneur/messages?conversationId=${conversationId}`);
      },
      error: (err) => console.error('Failed to initiate contact', err)
    });
  }

}
