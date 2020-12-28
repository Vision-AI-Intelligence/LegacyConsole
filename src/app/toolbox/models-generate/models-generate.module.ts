import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsGenerateRoutingModule } from './models-generate-routing.module';
import { ModelsGenerateComponent } from './models-generate.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbProgressBarModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { CreateModelComponent } from './dialogs/create-model/create-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [ModelsGenerateComponent, CreateModelComponent],
  imports: [
    CommonModule,
    ModelsGenerateRoutingModule,
    ReactiveFormsModule,
    NbButtonModule,
    FormsModule,
    NbToastrModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NbCardModule,
    NbProgressBarModule,
    NbDialogModule,
    NbSelectModule,
    AngularFirestoreModule
  ]
})
export class ModelsGenerateModule { }
