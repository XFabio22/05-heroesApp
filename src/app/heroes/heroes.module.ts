import { FormsModule } from '@angular/forms';
import { ImgPipe } from './pipes/img.pipe';
import { MaterialModule } from './../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';
import { ConfirmarComponent } from './Components/confirmar/confirmar.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    ImgPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  
  ]
})
export class HeroesModule { }
