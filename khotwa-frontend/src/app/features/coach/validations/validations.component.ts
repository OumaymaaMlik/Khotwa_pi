import { Component } from '@angular/core';
@Component({ selector:'app-coach-validations', templateUrl:'./validations.component.html', styleUrls:['./validations.component.css'] })
export class CoachValidationsComponent {
  validations = [
    {id:'v1',task:'Prototype UI — E-Learning',startup:'EduTech Pro (Sara)',doc:'maquette_v2.pdf',status:'pending',date:'2024-12-01'},
    {id:'v2',task:'Tests QA HealthMobile',startup:'HealthMobile (Sara)',doc:'rapport_tests.pdf',status:'pending',date:'2024-12-02'},
    {id:'v3',task:'Business Plan AgriSmart',startup:'AgriSmart (Sara)',doc:'business_plan_v3.pdf',status:'approved',date:'2024-11-28'},
  ];
  validate(id: string) { const v = this.validations.find(x=>x.id===id); if(v) v.status='approved'; }
  reject(id: string) { const v = this.validations.find(x=>x.id===id); if(v) v.status='rejected'; }
}
