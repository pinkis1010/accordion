import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EPrescriptionComponent } from './e-prescription/e-prescription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    AppComponent,
    EPrescriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
,
    AccordionModule.forRoot()
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
