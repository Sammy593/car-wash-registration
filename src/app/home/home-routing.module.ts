import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent2 } from './components/layout/layout.component';

import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent2,
    children: [
      {
        path: 'pages/formulario-registro',
        component: FormularioRegistroComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrgeneratorRoutingModule2 {}
