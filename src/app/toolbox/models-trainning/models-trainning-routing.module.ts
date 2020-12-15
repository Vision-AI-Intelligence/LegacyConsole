import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsTrainningComponent } from './models-trainning.component';

const routes: Routes = [{ path: '', component: ModelsTrainningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsTrainningRoutingModule { }
