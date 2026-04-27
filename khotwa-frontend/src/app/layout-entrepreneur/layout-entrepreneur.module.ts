import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutEntrepreneurComponent } from './layout-entrepreneur.component';

@NgModule({
  declarations: [LayoutEntrepreneurComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutEntrepreneurComponent],
})
export class LayoutEntrepreneurModule {}
