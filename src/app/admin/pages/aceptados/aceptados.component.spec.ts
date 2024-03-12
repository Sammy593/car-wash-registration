import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AceptadosComponent } from './aceptados.component';
import { CarwashService } from '../../../carwash.service';

describe('AceptadosComponent', () => {
  let component: AceptadosComponent;
  let fixture: ComponentFixture<AceptadosComponent>;
  let carwashService: CarwashService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AceptadosComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [CarwashService]
    }).compileComponents();

    fixture = TestBed.createComponent(AceptadosComponent);
    component = fixture.componentInstance;
    carwashService = TestBed.inject(CarwashService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call traerRegistrosPendientes and set registros on ngOnInit', async(async () => {
    const registros = [
      {
        _id: 1,
        nombre_cliente: 'John Doe',
        email: 'john@example.com',
        marca_vehiculo: 'Toyota',
        fecha_ingreso: '2024-03-12',
        tipo_lavado: 'Estándar',
        estado: 'Pendiente'
      }
    ];

    spyOn(carwashService, 'getEstadoAceptado').and.returnValue(Promise.resolve(registros));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(carwashService.getEstadoAceptado).toHaveBeenCalled();
    expect(component.registros).toEqual(registros);
  }));

  it('should navigate to confirmadosDetalles on redirectToMostrarDetalle', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigate');

    component.redirectToMostrarDetalle(1);

    expect(navigateSpy).toHaveBeenCalledWith(['/admin/pages/confirmadosDetalles', { _id: 1 }]);
  });

  it('should call carwashService.aceptarSolicitud and traerRegistrosPendientes on aceptarSolicitud', async(() => {
    const idSolicitud = '1';
    spyOn(component, 'traerRegistrosPendientes');
    spyOn(console, 'log');

    spyOn(carwashService, 'aceptarSolicitud').and.returnValue(Promise.resolve());

    component.aceptarSolicitud(idSolicitud).then(() => {
      expect(console.log).toHaveBeenCalledWith('Solicitud aceptada correctamente');
      expect(component.traerRegistrosPendientes).toHaveBeenCalled();
    });
  }));

  it('should handle error on aceptarSolicitud', async(() => {
    const idSolicitud = '1';
    spyOn(console, 'error');

    spyOn(carwashService, 'aceptarSolicitud').and.returnValue(Promise.reject('Error'));

    component.aceptarSolicitud(idSolicitud).then(() => {
      expect(console.error).toHaveBeenCalledWith('Error al aceptar la solicitud:', 'Error');
    });
  }));

  it('should call carwashService.impagoRegistro and traerRegistrosPendientes on rechazarSolicitud', async(() => {
    const idSolicitud = '1';
    spyOn(component, 'traerRegistrosPendientes');

    spyOn(carwashService, 'impagoRegistro').and.returnValue(Promise.resolve());

    component.rechazarSolicitud(idSolicitud).then(() => {
      expect(component.traerRegistrosPendientes).toHaveBeenCalled();
    });
  }));

  it('should handle error on rechazarSolicitud', async(() => {
    const idSolicitud = '1';
    spyOn(console, 'error');

    spyOn(carwashService, 'impagoRegistro').and.returnValue(Promise.reject('Error'));

    component.rechazarSolicitud(idSolicitud).then(() => {
      expect(console.error).toHaveBeenCalledWith('Error al aceptar la solicitud:', 'Error');
    });
  }));
});

