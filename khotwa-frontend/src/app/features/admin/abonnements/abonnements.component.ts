import { Component } from '@angular/core';
@Component({ selector:'app-admin-abonnements', templateUrl:'./abonnements.component.html', styleUrls:['./abonnements.component.css'] })
export class AdminSubscriptionsComponent {
  filtre = 'all';
  abonnements = [
    {id:'a1',user:'Sara Trabelsi',email:'sara@startup.tn',plan:'PREMIUM',status:'ACTIVE',debut:'2024-09-01',fin:'2025-09-01'},
    {id:'a2',user:'Omar Chaabane',email:'omar@agri.tn',plan:'FREE',status:'ACTIVE',debut:'2024-10-15',fin:'2025-10-15'},
    {id:'a3',user:'Nadia Ben Ali',email:'nadia@edu.tn',plan:'INSTITUTIONAL',status:'EXPIRED',debut:'2023-11-01',fin:'2024-11-01'},
    {id:'a4',user:'Hedi Slim',email:'hedi@btp.tn',plan:'PREMIUM',status:'ACTIVE',debut:'2024-08-01',fin:'2025-08-01'},
  ];
  get filteredSubscriptions() { return this.filtre==='all' ? this.abonnements : this.abonnements.filter(a=>a.plan===this.filtre); }
}
