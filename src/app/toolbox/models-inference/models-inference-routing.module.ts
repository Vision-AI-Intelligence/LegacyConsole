import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsInferenceComponent } from './models-inference.component';

const routes: Routes = [{ path: '', component: ModelsInferenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsInferenceRoutingModule { }
