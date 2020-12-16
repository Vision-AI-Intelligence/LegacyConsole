import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataIOJobsRoutingModule } from './data-io-jobs-routing.module';
import { DataIOJobsComponent } from './data-io-jobs.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbProgressBarModule, NbToastrModule } from '@nebular/theme';


@NgModule({
  declarations: [DataIOJobsComponent],
  imports: [
    CommonModule,
    DataIOJobsRoutingModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbToastrModule,
    NbProgressBarModule
  ]
})
export class DataIOJobsModule { }
