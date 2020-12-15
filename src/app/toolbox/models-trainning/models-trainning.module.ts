import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsTrainningRoutingModule } from './models-trainning-routing.module';
import { ModelsTrainningComponent } from './models-trainning.component';


@NgModule({
  declarations: [ModelsTrainningComponent],
  imports: [
    CommonModule,
    ModelsTrainningRoutingModule
  ]
})
export class ModelsTrainningModule { }
