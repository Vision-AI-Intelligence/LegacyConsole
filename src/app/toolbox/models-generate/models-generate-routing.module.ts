import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsGenerateComponent } from './models-generate.component';

const routes: Routes = [{ path: '', component: ModelsGenerateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsGenerateRoutingModule { }
