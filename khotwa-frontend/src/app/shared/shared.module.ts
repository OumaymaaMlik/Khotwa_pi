import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { AiChatbotComponent } from '../ressourceAi/ai-chatbot/ai-chatbot.component';
import { AiSearchComponent }  from '../ressourceAi/ai-search/ai-search.component';
import { AiResumeComponent }  from '../ressourceAi/ai-resume/ai-resume.component';

@NgModule({
  declarations: [SafeUrlPipe,AccountComponent, FooterComponent,AiChatbotComponent,AiSearchComponent,AiResumeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SafeUrlPipe,AccountComponent, FooterComponent, FormsModule, ReactiveFormsModule, CommonModule,AiChatbotComponent,AiSearchComponent,AiResumeComponent,],


})
export class SharedModule {}
