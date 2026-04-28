import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from './safe-url.pipe';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { AiSearchComponent } from '../ressourceAi/ai-search/ai-search.component';
import { AiChatbotComponent } from '../ressourceAi/ai-chatbot/ai-chatbot.component';

@NgModule({
  declarations: [SafeUrlPipe,AccountComponent, FooterComponent, AiSearchComponent, AiChatbotComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [SafeUrlPipe,AccountComponent, FooterComponent, AiSearchComponent, AiChatbotComponent, FormsModule, ReactiveFormsModule, CommonModule],


})
export class SharedModule {}
