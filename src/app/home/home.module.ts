import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { LayoutComponent2 } from './components/layout/layout.component';

import { QrgeneratorRoutingModule2 } from './home-routing.module';


@NgModule({
  declarations: [
    FormularioRegistroComponent,
    LayoutComponent2
  ],
  imports: [
    BrowserModule,
    QrgeneratorRoutingModule2,
    ReactiveFormsModule
  ]
})
export class homeModule {}
