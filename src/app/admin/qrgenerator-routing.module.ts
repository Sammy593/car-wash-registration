import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard_4/dashboard.component';
import { RegistradosComponent } from './pages/registrados/registrados.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin/dashboard_4',
        component: DashboardComponent,
      },
      {
        path: 'admin/registrados',
        component: RegistradosComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrgeneratorRoutingModule {}
