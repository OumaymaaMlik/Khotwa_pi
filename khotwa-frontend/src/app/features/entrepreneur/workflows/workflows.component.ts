import { Component } from '@angular/core';
@Component({ selector:'app-entrepreneur-workflows', templateUrl:'./workflows.component.html', styleUrls:['./workflows.component.css'] })
export class EntrepreneurWorkflowsComponent {
  workflows = [
    {id:'w1',nom:'Proof-based validation',desc:'Verifies required document is present before validation',trigger:'On submission',status:'ACTIVE',etapes:['Task submission','Doc verification','Coach notification','Validation'],runs:34,icone:'✅',color:'#27AE7A'},
    {id:'w2',nom:'Alerte SLA — Blocage',desc:'Notification si une étape est bloquée plus de 15 jours',trigger:'Cron job quotidien',status:'ACTIVE',etapes:['Scan BDD','Calcul délai','SLA > 15j?','Notification admin'],runs:87,icone:'⏰',color:'#E8622A'},
    {id:'w3',nom:'Propagation de Retard',desc:'Recalcule les dates suivantes en cas de retard critical',trigger:'Task update',status:'ACTIVE',etapes:['Détection retard','Impact critical?','Recalcul dates','Notif équipe'],runs:12,icone:'📅',color:'#2ABFBF'},
    {id:'w4',nom:'Alerte Deadline 24h',desc:'Push notification 24h avant chaque deadline',trigger:'Cron every 6h',status:'ACTIVE',etapes:['Scan deadlines','< 24h?','Email + Push','Log envoi'],runs:156,icone:'🔔',color:'#F5A623'},
  ];
}
