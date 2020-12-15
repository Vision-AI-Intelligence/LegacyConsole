import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectInformationComponent } from './project-information.component';

const routes: Routes = [{ path: '', component: ProjectInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectInformationRoutingModule { }
