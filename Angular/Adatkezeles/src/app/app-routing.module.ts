import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelsinkiComponent } from './helsinki/helsinki.component';
import { ImportalasComponent } from './importalas/importalas.component';

const routes: Routes = [
  {path: "kekturaimport", component : ImportalasComponent},
  {path: "helsinki", component: HelsinkiComponent},
  {path: "**", component: ImportalasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
