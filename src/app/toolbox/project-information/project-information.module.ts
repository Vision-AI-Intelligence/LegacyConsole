import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectInformationRoutingModule } from './project-information-routing.module';
import { ProjectInformationComponent } from './project-information.component';


@NgModule({
  declarations: [ProjectInformationComponent],
  imports: [
    CommonModule,
    ProjectInformationRoutingModule
  ]
})
export class ProjectInformationModule { }
