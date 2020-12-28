import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsTrainingComponent } from './models-training.component';

const routes: Routes = [{ path: '', component: ModelsTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsTrainingRoutingModule { }
