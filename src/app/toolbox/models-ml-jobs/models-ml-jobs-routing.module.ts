import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsMLJobsComponent } from './models-ml-jobs.component';

const routes: Routes = [{ path: '', component: ModelsMLJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsMLJobsRoutingModule { }
