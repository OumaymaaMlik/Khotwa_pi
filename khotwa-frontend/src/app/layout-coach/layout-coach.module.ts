import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutCoachComponent } from './layout-coach.component';

@NgModule({
  declarations: [LayoutCoachComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutCoachComponent],
})
export class LayoutCoachModule {}
