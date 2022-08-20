import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeladatComponent } from './feladat/feladat.component';
import { MintaComponent } from './minta/minta.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path: "minta", component: MintaComponent},
  {path: "feladat", component: FeladatComponent},
  {path: "notfound", component: NotfoundComponent},
  {path: "pipes", component: PipesComponent},
  {path: "", redirectTo: "/minta", pathMatch: "full"},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
