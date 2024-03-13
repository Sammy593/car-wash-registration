import { NgModule } from '@angular/core';
import { RegistradosComponent } from './pages/registrados/registrados.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import { QrgeneratorRoutingModule } from './admin-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AceptadosComponent } from './pages/aceptados/aceptados.component';
import { DetallesConfirmadosComponent } from './pages/detalles-confirmados/detalles-confirmados.component';

@NgModule({
  declarations: [
    RegistradosComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    AceptadosComponent,
    DetallesConfirmadosComponent
  ],
    imports: [
        BrowserModule,
        QrgeneratorRoutingModule,
        FontAwesomeModule,
        FormsModule
    ]
})
export class adminModule {}
