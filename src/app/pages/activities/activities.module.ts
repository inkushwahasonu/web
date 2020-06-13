import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActivitiesComponent } from './activities.component';
import { FormsModule } from '@angular/forms';
import { ActivitiesService } from './activities.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  },
];

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
