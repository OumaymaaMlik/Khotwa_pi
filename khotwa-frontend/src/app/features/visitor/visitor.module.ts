import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutVisitorModule } from '../../layout-visitor/layout-visitor.module';
import { LayoutVisitorComponent } from '../../layout-visitor/layout-visitor.component';

import { VisitorEventsComponent } from './events/events.component';
import { VisitorTalentComponent } from './talent/talent.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutVisitorComponent,
    children: [
      { path: '',       redirectTo: 'events', pathMatch: 'full' },
      { path: 'events', component: VisitorEventsComponent },
      { path: 'talent', component: VisitorTalentComponent },
    ]
  }
];

@NgModule({
  declarations: [
    VisitorEventsComponent,
    VisitorTalentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    LayoutVisitorModule,
  ],
})
export class VisitorModule {}
