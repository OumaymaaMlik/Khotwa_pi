import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutEntrepreneurComponent } from './layout-entrepreneur.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutEntrepreneurComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutEntrepreneurComponent],
})
export class LayoutEntrepreneurModule {}
