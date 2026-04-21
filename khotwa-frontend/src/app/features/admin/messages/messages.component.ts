import { Component } from '@angular/core';

@Component({ selector:'app-admin-messages', templateUrl:'./messages.component.html', styleUrls:['./messages.component.css'] })
export class AdminMessagesComponent {
  constructor() {}
  conversations = [
    {id:'c1',nom:'Sara Trabelsi',initials:'ST',color:'#2ABFBF',lastMsg:'Hello, I updated the deliverables',time:'11:24',unread:2,messages:[{from:'Sara',text:'Hello! I updated the sprint deliverables',time:'11:20',mine:false},{from:'Moi',text:"Great, I'll check that",time:'11:22',mine:true}]},
    {id:'c2',nom:'Ahmed Coach',initials:'AC',color:'#7C5CBF',lastMsg:'Coaching session confirmed',time:'10:15',unread:0,messages:[{from:'Ahmed',text:'Coaching session confirmed for Friday 2pm',time:'10:15',mine:false}]},
    {id:'c3',nom:'KHOTWA Team',initials:'KH',color:'#E8622A',lastMsg:'Reminder: webinar tomorrow 10am',time:'09:00',unread:1,messages:[{from:'KHOTWA',text:'Reminder: webinar tomorrow at 10am',time:'09:00',mine:false}]},
  ];
  selectedConv: any = null;
  newMsg = '';
  selectConv(c:any) { this.selectedConv={...c,unread:0}; c.unread=0; }
  sendMsg() {
    if(!this.newMsg.trim()||!this.selectedConv) return;
    this.selectedConv.messages.push({from:'Moi',text:this.newMsg,time:'maintenant',mine:true});
    this.newMsg='';
  }
  onMsgKey(e:KeyboardEvent) { if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();this.sendMsg();} }
}
