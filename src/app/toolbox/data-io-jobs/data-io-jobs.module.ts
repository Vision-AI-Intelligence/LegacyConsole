import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataIOJobsRoutingModule } from './data-io-jobs-routing.module';
import { DataIOJobsComponent } from './data-io-jobs.component';


@NgModule({
  declarations: [DataIOJobsComponent],
  imports: [
    CommonModule,
    DataIOJobsRoutingModule
  ]
})
export class DataIOJobsModule { }
