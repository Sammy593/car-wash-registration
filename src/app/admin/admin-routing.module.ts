import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { RegistradosComponent } from './pages/registrados/registrados.component';
import { EnvioemailComponent } from './pages//envioemail/envioemail.component';
import {AceptadosComponent} from "./pages/aceptados/aceptados.component";
import {DetallesConfirmadosComponent} from "./pages/detalles-confirmados/detalles-confirmados.component";

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'pages/registrados',
        component: EnvioemailComponent,
      },
      {
        path: 'pages/verDetalles',
        component: RegistradosComponent,
      },
      {
        path: 'pages/confirmados',
        component: AceptadosComponent,
      },
      {
        path: 'pages/confirmadosDetalles',
        component: DetallesConfirmadosComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrgeneratorRoutingModule {}
