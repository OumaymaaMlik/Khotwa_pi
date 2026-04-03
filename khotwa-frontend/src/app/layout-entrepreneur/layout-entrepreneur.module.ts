import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutEntrepreneurComponent } from './layout-entrepreneur.component';

@NgModule({
  declarations: [LayoutEntrepreneurComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutEntrepreneurComponent],
})
export class LayoutEntrepreneurModule {}
