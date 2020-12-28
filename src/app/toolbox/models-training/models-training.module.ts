import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsTrainingRoutingModule } from './models-training-routing.module';
import { ModelsTrainingComponent } from './models-training.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbToastrModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartTrainDialogComponent } from './dialogs/start-train-dialog/start-train-dialog.component';


@NgModule({
  declarations: [ModelsTrainingComponent, StartTrainDialogComponent],
  imports: [
    CommonModule,
    ModelsTrainingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbSelectModule,
    NbFormFieldModule,
    NbInputModule,
    NbDialogModule,
    NbToastrModule,
    NbActionsModule,
    NbCardModule,
    NbDialogModule,
    NbSpinnerModule
  ]
})
export class ModelsTrainingModule { }
