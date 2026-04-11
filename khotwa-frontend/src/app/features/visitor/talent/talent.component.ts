import { Component } from '@angular/core';

@Component({
  selector: 'app-visitor-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class VisitorTalentComponent {
  view: 'talents' | 'listings' = 'talents';
  search = '';
  filterSkill = '';

  talents = [
    { id:'t1', nom:'Karim Dridi',       poste:'Full Stack Developer',   competences:['Angular','Node.js','MongoDB','TypeScript'], score:92, disponible:true,  exp:'3 years', location:'Tunis' },
    { id:'t2', nom:'Amira Saidi',        poste:'UX/UI Designer',         competences:['Figma','Adobe XD','CSS','Design System'],  score:88, disponible:true,  exp:'4 years', location:'Sousse' },
    { id:'t3', nom:'Youssef Ben Hmida',  poste:'Data Scientist',          competences:['Python','TensorFlow','SQL','Power BI'],     score:75, disponible:false, exp:'2 years', location:'Sfax' },
    { id:'t4', nom:'Sonia Mhiri',        poste:'Digital Marketing',       competences:['SEO','Google Ads','Analytics','Content'],   score:81, disponible:true,  exp:'5 years', location:'Tunis' },
    { id:'t5', nom:'Hamza Ghorbel',      poste:'Mobile Developer',        competences:['Flutter','Dart','Firebase','iOS'],          score:84, disponible:true,  exp:'3 years', location:'Tunis' },
    { id:'t6', nom:'Lina Cherif',        poste:'Product Manager',         competences:['Agile','Scrum','Jira','Roadmapping'],       score:90, disponible:false, exp:'6 years', location:'Bizerte' },
  ];

  listings = [
    { id:'a1', startup:'EduTech Pro',    poste:'Co-founder CTO',       type:'cofondateur', competences:['React','AWS','Architecture'],  match:92, description:'Looking for a technical co-founder to lead product development. Equity-based.' },
    { id:'a2', startup:'HealthMobile',   poste:'iOS Developer Intern',  type:'stagiaire',   competences:['Swift','UIKit','Xcode'],        match:75, description:'6-month internship to develop iOS health tracking features. PFE accepted.' },
    { id:'a3', startup:'AgriSmart',      poste:'IoT Engineer',          type:'cdi',         competences:['Arduino','MQTT','Python'],      match:88, description:'Full-time position to build connected sensors for smart agriculture.' },
    { id:'a4', startup:'BTP Connect',    poste:'UX Designer',           type:'freelance',   competences:['Figma','Prototyping','UX'],     match:69, description:'Freelance mission to redesign the mobile app interface. 2-month project.' },
  ];

  typeColors: Record<string, string> = {
    cofondateur: 'kh-badge--orange',
    stagiaire:   'kh-badge--teal',
    cdi:         'kh-badge--green',
    freelance:   'kh-badge--violet',
  };

  get allSkills(): string[] {
    const skills = new Set<string>();
    this.talents.forEach(t => t.competences.forEach(c => skills.add(c)));
    return [...skills].sort();
  }

  get filteredTalents() {
    return this.talents.filter(t => {
      const matchSearch = !this.search || t.nom.toLowerCase().includes(this.search.toLowerCase()) || t.poste.toLowerCase().includes(this.search.toLowerCase());
      const matchSkill  = !this.filterSkill || t.competences.includes(this.filterSkill);
      return matchSearch && matchSkill;
    });
  }

  get filteredListings() {
    return this.listings.filter(l =>
      !this.search ||
      l.poste.toLowerCase().includes(this.search.toLowerCase()) ||
      l.startup.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  get availableCount(): number { return this.talents.filter(t => t.disponible).length; }
}
