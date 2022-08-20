import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlapComponent } from './urlap/urlap.component';

const routes: Routes = [
  {path:"urlap", component: UrlapComponent},
  {path:"**", component: UrlapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
