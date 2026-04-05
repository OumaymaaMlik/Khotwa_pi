import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SafeUrlPipe, FooterComponent],
  imports: [CommonModule],
  exports: [SafeUrlPipe, FooterComponent],
})
export class SharedModule {}
