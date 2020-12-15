import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsGenerateRoutingModule } from './models-generate-routing.module';
import { ModelsGenerateComponent } from './models-generate.component';


@NgModule({
  declarations: [ModelsGenerateComponent],
  imports: [
    CommonModule,
    ModelsGenerateRoutingModule
  ]
})
export class ModelsGenerateModule { }
