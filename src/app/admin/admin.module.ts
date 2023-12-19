import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard_4/dashboard.component';
import { RegistradosComponent } from './pages/registrados/registrados.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import { QrgeneratorRoutingModule } from './admin-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './pages/dashboard_4/main/main.component';
import { Chart1Component } from './pages/dashboard_4/chart-1/chart-1.component';
import { Chart2Component } from './pages/dashboard_4/chart-2/chart-2.component';
import { Chart3Component } from './pages/dashboard_4/chart-3/chart-3.component';
import { Chart4Component } from './pages/dashboard_4/chart-4/chart-4.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegistradosComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component
  ],
  imports: [
    BrowserModule,
    QrgeneratorRoutingModule,
    FontAwesomeModule,
    ChartModule
  ]
})
export class adminModule {}
