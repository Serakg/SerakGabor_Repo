import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportalasComponent } from './importalas/importalas.component';

const routes: Routes = [
  {path: "kekturaimport", component : ImportalasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
