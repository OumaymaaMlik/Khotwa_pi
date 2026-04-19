import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutVisitorComponent } from './layout-visitor.component';

@NgModule({
  declarations: [LayoutVisitorComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutVisitorComponent],
})
export class LayoutVisitorModule {}
