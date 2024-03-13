import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { CarwashService } from '../../../carwash.service';
import { CalificacionServicioComponent } from './calificacion-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RouterTestingModule } from '@angular/router/testing';

describe('CalificacionServicioComponent', () => {
  let component: CalificacionServicioComponent;
  let fixture: ComponentFixture<CalificacionServicioComponent>;
  let carwashServiceSpy: jasmine.SpyObj<CarwashService>;
  let formBuilder: FormBuilder;

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
      imports: [HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule, NgxCaptchaModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({}) } }
        }
      ]
    }).compileComponents();

    carwashServiceSpy = TestBed.inject(CarwashService) as jasmine.SpyObj<CarwashService>;
    formBuilder = TestBed.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionServicioComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      calificacion: ['', Validators.required],
      archivo: ['', Validators.required]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with required fields', () => {
    expect(component.form.get('calificacion')).toBeTruthy();
    expect(component.form.get('archivo')).toBeTruthy();
    expect(component.form.get('calificacion')!.validator).toBeTruthy(); 
    expect(component.form.get('archivo')!.validator).toBeTruthy(); 
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

  
  });