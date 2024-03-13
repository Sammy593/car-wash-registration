import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { CarwashService } from '../carwash.service';
import { LayoutComponent2 } from './components/layout/layout.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { CalificacionServicioComponent } from './pages/calificacion-servicio/calificacion-servicio.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { QrgeneratorRoutingModule2 } from './home-routing.module';

// Importa CarwashService y crea un mock
class CarwashServiceMock { }

describe('homeModule', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LayoutComponent2,
                FormularioRegistroComponent,
                CalificacionServicioComponent,
                ActualizarComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                NgxCaptchaModule,
                QrgeneratorRoutingModule2,
                RouterTestingModule,
                HttpClientTestingModule // Añade HttpClientTestingModule
            ],
            providers: [
                { provide: CarwashService, useClass: CarwashServiceMock } // Proporciona el mock de CarwashService
            ]
        }).compileComponents();
    });

    it('should create the homeModule', () => {
        const fixture = TestBed.createComponent(LayoutComponent2);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the FormularioRegistroComponent', () => {
        const fixture = TestBed.createComponent(FormularioRegistroComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the CalificacionServicioComponent', () => {
        const fixture = TestBed.createComponent(CalificacionServicioComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should create the ActualizarComponent', () => {
        const fixture = TestBed.createComponent(ActualizarComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});