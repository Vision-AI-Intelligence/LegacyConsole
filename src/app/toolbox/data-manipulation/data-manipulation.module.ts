import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManipulationRoutingModule } from './data-manipulation-routing.module';
import { DataManipulationComponent } from './data-manipulation.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbToastrModule } from '@nebular/theme';
import { DownloadDialogComponent } from './dialogs/download-dialog/download-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateTFRecordComponent } from './dialogs/generate-tfrecord/generate-tfrecord.component';


@NgModule({
  declarations: [DataManipulationComponent, DownloadDialogComponent, GenerateTFRecordComponent],
  imports: [
    CommonModule,
    DataManipulationRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    NbListModule,
    NbToastrModule,
    NbContextMenuModule,
    NbDialogModule
  ]
})
export class DataManipulationModule { }
