import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectInformationRoutingModule } from './project-information-routing.module';
import { ProjectInformationComponent } from './project-information.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ProjectDialogComponent } from './dialogs/project-dialog/project-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectInformationComponent, ProjectDialogComponent],
  imports: [
    CommonModule,
    ProjectInformationRoutingModule,
    NbButtonModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbFormFieldModule,
    NbInputModule,
    ReactiveFormsModule
  ]
})
export class ProjectInformationModule { }
