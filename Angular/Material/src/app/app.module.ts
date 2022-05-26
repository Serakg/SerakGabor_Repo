import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlapComponent } from './urlap/urlap.component';

import{MatInputModule} from "@angular/material/input";
import{MatFormFieldModule} from "@angular/material/form-field";
import{MatButtonModule} from "@angular/material/button";
import{MatSelectModule} from "@angular/material/select";
import{MatTableModule} from "@angular/material/table";
import{MatIconModule} from "@angular/material/icon";
import{MatCheckboxModule} from "@angular/material/checkbox";
import{MatMenuModule} from "@angular/material/menu";
import{MatGridListModule} from "@angular/material/grid-list";
import{MatListModule} from "@angular/material/list";
import{MatRadioModule} from "@angular/material/radio";
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UrlapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
