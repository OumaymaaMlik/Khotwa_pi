import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    SafeUrlPipe,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SafeUrlPipe,
    AccountComponent,
  ],
})
export class SharedModule {}