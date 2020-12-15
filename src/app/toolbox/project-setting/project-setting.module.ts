import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectSettingComponent } from './project-setting.component';


@NgModule({
  declarations: [ProjectSettingComponent],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule
  ]
})
export class ProjectSettingModule { }
