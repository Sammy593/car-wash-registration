import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard_4/dashboard.component';
//import { RegistradosComponent } from './pages/registrados/registrados.component';
import { EnvioemailComponent } from './pages//envioemail/envioemail.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'pages/dashboard',
        component: DashboardComponent,
      },
      {
        path: 'pages/registrados',
        component: EnvioemailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrgeneratorRoutingModule {}
