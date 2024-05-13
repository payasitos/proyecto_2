import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { GeneralComponent } from './pages/general/general.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MerchComponent } from './pages/merch/merch.component';


@NgModule({
  declarations: [
    GeneralComponent,
    ComicsComponent,
    JuegosComponent,
    MerchComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
