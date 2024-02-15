import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { LayoutComponent2 } from './components/layout/layout.component';

import { QrgeneratorRoutingModule2 } from './home-routing.module';

//Lucy
import { CalificacionServicioComponent } from './pages/calificacion-servicio/calificacion-servicio.component';
import { CargarArchivoComponent } from './components/cargar-archivo/cargar-archivo.component';
import { EstrellaComponent } from './components/estrella/estrella.component';
import {NgxCaptchaModule} from "ngx-captcha";
import { ActualizarComponent } from './pages/actualizar/actualizar.component';


@NgModule({
  declarations: [
    FormularioRegistroComponent,
    LayoutComponent2,
    CalificacionServicioComponent,
    CargarArchivoComponent,
    EstrellaComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    QrgeneratorRoutingModule2,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule
  ]
})
export class homeModule {}
