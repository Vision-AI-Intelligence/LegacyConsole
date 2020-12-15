import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsInferenceRoutingModule } from './models-inference-routing.module';
import { ModelsInferenceComponent } from './models-inference.component';


@NgModule({
  declarations: [ModelsInferenceComponent],
  imports: [
    CommonModule,
    ModelsInferenceRoutingModule
  ]
})
export class ModelsInferenceModule { }
