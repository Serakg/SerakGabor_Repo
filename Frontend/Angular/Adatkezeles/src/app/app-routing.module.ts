import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelsinkiComponent } from './helsinki/helsinki.component';
import { ImportalasComponent } from './importalas/importalas.component';
import { TesztElemComponent } from './teszt-elem/teszt-elem.component';

const routes: Routes = [
  {path: "kekturaimport", component : ImportalasComponent},
  {path: "helsinki", component: HelsinkiComponent},
  {path: "tesztelem", component: TesztElemComponent},
  {path: "**", component: ImportalasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
