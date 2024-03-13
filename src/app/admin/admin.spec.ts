import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './components/layout/layout.component';
import { RegistradosComponent } from './pages/registrados/registrados.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AceptadosComponent } from './pages/aceptados/aceptados.component';
import { DetallesConfirmadosComponent } from './pages/detalles-confirmados/detalles-confirmados.component';
import { QrgeneratorRoutingModule } from './admin-routing.module';

describe('adminModule', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LayoutComponent,
                RegistradosComponent,
                HeaderComponent,
                SideNavComponent,
                AceptadosComponent,
                DetallesConfirmadosComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                FontAwesomeModule,
                HttpClientTestingModule,
                RouterTestingModule, // Agrega RouterTestingModule aquí
                QrgeneratorRoutingModule
            ]
        }).compileComponents();
    });

    it('should create the LayoutComponent', () => {
        const fixture = TestBed.createComponent(LayoutComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the RegistradosComponent', () => {
        const fixture = TestBed.createComponent(RegistradosComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the HeaderComponent', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the SideNavComponent', () => {
        const fixture = TestBed.createComponent(SideNavComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the AceptadosComponent', () => {
        const fixture = TestBed.createComponent(AceptadosComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the DetallesConfirmadosComponent', () => {
        const fixture = TestBed.createComponent(DetallesConfirmadosComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
