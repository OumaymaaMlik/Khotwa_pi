import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SafeUrlPipe,AccountComponent, FooterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SafeUrlPipe,AccountComponent, FooterComponent, FormsModule, ReactiveFormsModule, CommonModule],


})
export class SharedModule {}
