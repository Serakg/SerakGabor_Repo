import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportalasComponent } from './importalas/importalas.component';
import { HelsinkiComponent } from './helsinki/helsinki.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TesztElemComponent } from './teszt-elem/teszt-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportalasComponent,
    HelsinkiComponent,
    TesztElemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
