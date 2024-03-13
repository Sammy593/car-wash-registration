import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CarwashService } from '../../../carwash.service';
import { CalificacionServicioComponent } from './calificacion-servicio.component';

describe('CalificacionServicioComponent', () => {
  let component: CalificacionServicioComponent;
  let fixture: ComponentFixture<CalificacionServicioComponent>;
  let carwashServiceSpy: jasmine.SpyObj<CarwashService>;
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => 'mock_id'
      }
    }
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CarwashService', ['actualizarPagoSolicitud']);

    await TestBed.configureTestingModule({
      declarations: [CalificacionServicioComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CarwashService, useValue: spy }
      ]
    }).compileComponents();

    carwashServiceSpy = TestBed.inject(CarwashService) as jasmine.SpyObj<CarwashService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with required fields', () => {
    expect(component.form.get('calificacion')).toBeTruthy();
    expect(component.form.get('archivo')).toBeTruthy();
    expect(component.form.get('calificacion')!.validator).toBe(Validators.required);
    expect(component.form.get('archivo')!.validator).toBe(Validators.required);
  });

  it('should show message and enable file upload section when calling calificar()', () => {
    component.calificar();
    expect(component.mostrarMensaje).toBeTruthy();
    expect(component.mostrarSubirArchivo).toBeTruthy();
  });

  it('should set archivoSeleccionado to true and load image when calling enviarArchivo()', () => {
    const mockFile = new File([''], 'mock.jpg', { type: 'image/jpeg' });
    const event = { target: { files: [mockFile] } };
    component.enviarArchivo(event);
    expect(component.archivoSeleccionado).toBeTruthy();
    expect(component.imagenCargada).toEqual(mockFile);
  });

  it('should return true when puedeEnviar() is called with valid form and selected file', () => {
    component.form.setValue({ calificacion: '5', archivo: 'mock-file' });
    component.archivoSeleccionado = true;
    expect(component.puedeEnviar()).toBeTruthy();
  });

  it('should make HTTP request when enviarFormulario() is called with valid data', () => {
    const mockFile = new File([''], 'mock.jpg', { type: 'image/jpeg' });
    const mockFormData = new FormData();
    mockFormData.append('idSolicitud', 'mock_id');
    mockFormData.append('calificacion', '5');
    mockFormData.append('archivo', mockFile);

    component.form.setValue({ calificacion: '5', archivo: mockFile });
    component.archivoSeleccionado = true;
    carwashServiceSpy.actualizarPagoSolicitud.and.returnValue(of({}));

    component.enviarFormulario({ preventDefault: () => {} } as any);

    expect(carwashServiceSpy.actualizarPagoSolicitud).toHaveBeenCalledWith(mockFormData);
  });
});
