import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsInferenceRoutingModule } from './models-inference-routing.module';
import { ModelsInferenceComponent } from './models-inference.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbSelectModule, NbFormFieldModule, NbInputModule, NbDialogModule, NbToastrModule, NbActionsModule, NbCardModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { InferenceDialogComponent } from './dialogs/inference-dialog/inference-dialog.component';


@NgModule({
  declarations: [ModelsInferenceComponent, InferenceDialogComponent],
  imports: [
    CommonModule,
    ModelsInferenceRoutingModule,
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
    NbSpinnerModule,
    NbIconModule
  ]
})
export class ModelsInferenceModule { }
