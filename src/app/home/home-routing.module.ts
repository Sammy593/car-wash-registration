import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent2 } from './components/layout/layout.component';

import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { CalificacionServicioComponent } from './pages/calificacion-servicio/calificacion-servicio.component';
import {ActualizarComponent} from "./pages/actualizar/actualizar.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent2,
    children: [
      {
        path: 'pages/formulario-registro',
        component: FormularioRegistroComponent,
      },
      {
        path: 'pages/calificacion-servicio',
        component: CalificacionServicioComponent,
      },
      {
        path: 'pages/actualizar',
        component: ActualizarComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrgeneratorRoutingModule2 {}
