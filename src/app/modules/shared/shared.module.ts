import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES LOCALES

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// COMPONENTES DEL NAVBAR
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

// ACCEDER A TODAS LAS RUTAS DEL PROYECTO
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule
  ]
})
export class SharedModule { }
