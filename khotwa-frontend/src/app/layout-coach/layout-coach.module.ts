import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutCoachComponent } from './layout-coach.component';

@NgModule({
  declarations: [LayoutCoachComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutCoachComponent],
})
export class LayoutCoachModule {}
