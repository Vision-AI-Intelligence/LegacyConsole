import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbSidebarService, NbMenuModule, NbCardModule, NbSelectModule, NbPopoverModule, NbUserModule, NbDialogModule, NbToastrModule, NbGlobalPhysicalPosition } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbSelectModule,
    NbPopoverModule,
    NbUserModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot({ hasIcon: true, preventDuplicates: true, position: NbGlobalPhysicalPosition.BOTTOM_RIGHT, duration: 5000 })
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
