import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { LayoutComponent2 } from './components/layout/layout.component';

import { QrgeneratorRoutingModule2 } from './home-routing.module';

//Lucy
import { CalificacionServicioComponent } from './pages/calificacion-servicio/calificacion-servicio.component';
import { CargarArchivoComponent } from './components/cargar-archivo/cargar-archivo.component';
import { EstrellaComponent } from './components/estrella/estrella.component';


@NgModule({
  declarations: [
    FormularioRegistroComponent,
    LayoutComponent2,
    CalificacionServicioComponent,
    CargarArchivoComponent,
    EstrellaComponent
  ],
  imports: [
    BrowserModule,
    QrgeneratorRoutingModule2,
    ReactiveFormsModule
  ]
})
export class homeModule {}
