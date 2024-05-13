import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MerchComponent } from './pages/merch/merch.component';

const routes: Routes = [
  {
    path:"general", component:GeneralComponent
  },
  {
    path:"comics", component:ComicsComponent
  },
  {
    path:"juegos", component:JuegosComponent
  },
  {
    path:"merch", component:MerchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
