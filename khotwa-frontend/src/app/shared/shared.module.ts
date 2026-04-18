import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SafeUrlPipe, FooterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SafeUrlPipe, FooterComponent, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SharedModule {}
