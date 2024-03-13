import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallesConfirmadosComponent } from './detalles-confirmados.component';
import { CarwashService } from '../../../carwash.service';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

describe('DetallesConfirmadosComponent', () => {
  let component: DetallesConfirmadosComponent;
  let fixture: ComponentFixture<DetallesConfirmadosComponent>;
  let carwashServiceSpy: jasmine.SpyObj<CarwashService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        params: { '_id': '1' } // Simulamos que `_id` está presente en la ruta activa
      }
    };

    const carwashServiceSpyObj = jasmine.createSpyObj('CarwashService', ['getById']);

    await TestBed.configureTestingModule({
      declarations: [DetallesConfirmadosComponent],
      imports: [FormsModule], 
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: CarwashService, useValue: carwashServiceSpyObj },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) }
      ]
    }).compileComponents();

    carwashServiceSpy = TestBed.inject(CarwashService) as jasmine.SpyObj<CarwashService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details on init', async () => {
    const expectedUserData = {
      _id: '1',
      nombre_cliente: 'Test User',
      cedula: '123456',
      direccion: 'Test Address',
      email: 'test@example.com',
      marca_vehiculo: 'Test Brand',
      modelo_vehiculo: 'Test Model',
      fecha_ingreso: '2024-03-12',
      hora_ingreso: '12:00 PM',
      tipo_lavado: 'Test Wash',
      estado: 'Confirmed'
    };
  
    // Configurar el espía para que devuelva los datos simulados
    carwashServiceSpy.getById.and.returnValue(Promise.resolve(expectedUserData));
  
    // Iniciar el componente y esperar que se complete
    await component.ngOnInit();

  // Verificar que cada propiedad del objeto devuelto por el componente coincide con los datos simulados
  expect(component._id).toEqual(expectedUserData._id);
  expect(component.nombre_cliente).toEqual(expectedUserData.nombre_cliente);
  expect(component.cedula).toEqual(expectedUserData.cedula);
  expect(component.direccion).toEqual(expectedUserData.direccion);
  expect(component.email).toEqual(expectedUserData.email);
  expect(component.marca_vehiculo).toEqual(expectedUserData.marca_vehiculo);
  expect(component.modelo_vehiculo).toEqual(expectedUserData.modelo_vehiculo);
  expect(component.fecha_ingreso).toEqual(expectedUserData.fecha_ingreso);
  expect(component.hora_ingreso).toEqual(expectedUserData.hora_ingreso);
  expect(component.tipo_lavado).toEqual(expectedUserData.tipo_lavado);
  expect(component.estado).toEqual(expectedUserData.estado);
});

  

  it('should navigate to confirmados page on regresar()', () => {
    component.regresar();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin/pages/confirmados']);
  });
});
