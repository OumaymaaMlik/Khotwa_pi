import { Component } from '@angular/core';

@Component({ selector:'app-entrepreneur-messages', templateUrl:'./messages.component.html', styleUrls:['./messages.component.css'] })
export class EntrepreneurMessagesComponent {
  constructor() {}
  selectedConv: any = null;
  newMsg = '';
  conversations=[
    {id:'c1',nom:'Sara Trabelsi',initials:'ST',color:'#2ABFBF',lastMsg:'Hello!',time:'11:24',unread:2,messages:[{from:'Sara',text:'Hello! Update done',time:'11:20',mine:false}]},
    {id:'c2',nom:'Ahmed Coach',initials:'AC',color:'#7C5CBF',lastMsg:'Session confirmée',time:'10:15',unread:0,messages:[{from:'Ahmed',text:'Session vendredi 14h',time:'10:15',mine:false}]},
  ];
  selectConv(c:any){this.selectedConv={...c,unread:0};c.unread=0;}
  sendMsg(){if(!this.newMsg.trim()||!this.selectedConv)return;this.selectedConv.messages.push({from:'Moi',text:this.newMsg,time:'maintenant',mine:true});this.newMsg='';}
  onMsgKey(e:KeyboardEvent){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();this.sendMsg();}}
}
