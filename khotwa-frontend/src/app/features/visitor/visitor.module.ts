import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutVisitorModule } from '../../layout-visitor/layout-visitor.module';
import { LayoutVisitorComponent } from '../../layout-visitor/layout-visitor.component';
import { VisitorDashboardComponent } from './dashboard/dashboard.component';
import { VisitorAnnoncesComponent } from './annonces/annonces.component';
import { VisitorCandidaturesComponent } from './candidatures/candidatures.component';
import { VisitorProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutVisitorComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: VisitorDashboardComponent },
      { path: 'annonces', component: VisitorAnnoncesComponent },
      { path: 'candidatures', component: VisitorCandidaturesComponent },
      { path: 'profil', component: VisitorProfilComponent },
    ],
  },
];

@NgModule({
  declarations: [
    VisitorDashboardComponent,
    VisitorAnnoncesComponent,
    VisitorCandidaturesComponent,
    VisitorProfilComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutVisitorModule,
    RouterModule.forChild(routes),
  ],
})
export class VisitorModule {}
