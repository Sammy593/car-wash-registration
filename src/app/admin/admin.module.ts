import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard_4/dashboard.component';
import { RegistradosComponent } from './pages/registrados/registrados.component';
import { LayoutComponent } from './components/layout/layout.component';

import { QrgeneratorRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    RegistradosComponent,
    LayoutComponent
  ],
  imports: [
    QrgeneratorRoutingModule
  ]
})
export class adminModule {}
