import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataIOJobsComponent } from './data-io-jobs.component';

const routes: Routes = [{ path: '', component: DataIOJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataIOJobsRoutingModule { }
