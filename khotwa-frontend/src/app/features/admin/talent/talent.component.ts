import { Component } from '@angular/core';
import { MessageService } from '../../../core/services/message.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-admin-talent', templateUrl:'./talent.component.html', styleUrls:['./talent.component.css'] })
export class AdminTalentComponent {
  view = 'talents';
  talents = [
    {id:'t1',nom:'Karim Dridi',poste:'Full Stack Developer',competences:['Angular','Node.js','MongoDB'],score:92,disponible:true},
    {id:'t2',nom:'Amira Saidi',poste:'Designer UX/UI',competences:['Figma','Adobe XD','CSS'],score:88,disponible:true},
    {id:'t3',nom:'Youssef Ben Hmida',poste:'Data Scientist',competences:['Python','TensorFlow','SQL'],score:75,disponible:false},
    {id:'t4',nom:'Sonia Mhiri',poste:'Marketing Digital',competences:['SEO','Google Ads','Analytics'],score:81,disponible:true},
  ];
  annonces = [
    {id:'a1',startup:'EduTech Pro',poste:'Co-fondateur CTO',type:'cofondateur',competences:['React','AWS'],match:92},
    {id:'a2',startup:'HealthMobile',poste:'Stagiaire iOS Dev',type:'stagiaire',competences:['Swift','UIKit'],match:75},
  ];

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
        this.router.navigateByUrl(`/khotwaadmin/messages?conversationId=${targetId}`);
      },
      error: (err) => console.error('Failed to initiate contact', err)
    });
  }

}
