import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsMLJobsRoutingModule } from './models-ml-jobs-routing.module';
import { ModelsMLJobsComponent } from './models-ml-jobs.component';


@NgModule({
  declarations: [ModelsMLJobsComponent],
  imports: [
    CommonModule,
    ModelsMLJobsRoutingModule
  ]
})
export class ModelsMLJobsModule { }
