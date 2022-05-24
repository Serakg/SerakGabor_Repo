import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { EletciklusComponent } from './eletciklus/eletciklus.component';
import { JqueryComponent } from './jquery/jquery.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    EletciklusComponent,
    JqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
