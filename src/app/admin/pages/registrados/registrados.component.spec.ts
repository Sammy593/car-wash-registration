import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistradosComponent } from './registrados.component';
import { CarwashService } from '../../../carwash.service';
import { of } from 'rxjs';

describe('RegistradosComponent', () => {
  let component: RegistradosComponent;
  let fixture: ComponentFixture<RegistradosComponent>;
  let carwashServiceSpy: jasmine.SpyObj<CarwashService>;
  let activatedRouteMock: any;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    activatedRouteMock = { snapshot: { params: { _id: '123' } } };
    carwashServiceSpy = jasmine.createSpyObj('CarwashService', ['getById']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ RegistradosComponent ],
      providers: [
        { provide: CarwashService, useValue: carwashServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call obtenerUsuarioPorId and set values on init', async () => {
    const mockRegistro = {
      nombre_cliente: 'John Doe',
      cedula: '123456789',
      direccion: '123 Main St',
      email: 'john@example.com',
      marca_vehiculo: 'Toyota',
      modelo_vehiculo: 'Camry',
      fecha_ingreso: '2024-03-13',
      hora_ingreso: '09:00 AM',
      tipo_lavado: 'Standard',
      estado: 'Pendiente'
    };

    carwashServiceSpy.getById.and.returnValue(of(mockRegistro).toPromise());

    await component.ngOnInit();

    expect(carwashServiceSpy.getById).toHaveBeenCalledWith('123');
    expect(component.nombre_cliente).toEqual(mockRegistro.nombre_cliente);
    expect(component.cedula).toEqual(mockRegistro.cedula);
    expect(component.direccion).toEqual(mockRegistro.direccion);
    expect(component.email).toEqual(mockRegistro.email);
    expect(component.marca_vehiculo).toEqual(mockRegistro.marca_vehiculo);
    expect(component.modelo_vehiculo).toEqual(mockRegistro.modelo_vehiculo);
    expect(component.fecha_ingreso).toEqual(mockRegistro.fecha_ingreso);
    expect(component.hora_ingreso).toEqual(mockRegistro.hora_ingreso);
    expect(component.tipo_lavado).toEqual(mockRegistro.tipo_lavado);
  });

  it('should navigate back when regresar is called', () => {
    component.regresar();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin/pages/registrados']);
  });
});