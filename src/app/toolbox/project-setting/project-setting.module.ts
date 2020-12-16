import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectSettingComponent } from './project-setting.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbToastrModule } from '@nebular/theme';


@NgModule({
  declarations: [ProjectSettingComponent],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbToastrModule
  ]
})
export class ProjectSettingModule { }
