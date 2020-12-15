import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManipulationRoutingModule } from './data-manipulation-routing.module';
import { DataManipulationComponent } from './data-manipulation.component';


@NgModule({
  declarations: [DataManipulationComponent],
  imports: [
    CommonModule,
    DataManipulationRoutingModule
  ]
})
export class DataManipulationModule { }
