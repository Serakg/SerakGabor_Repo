import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportalasComponent } from './importalas/importalas.component';
import { HelsinkiComponent } from './helsinki/helsinki.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportalasComponent,
    HelsinkiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
