import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EnvioemailComponent } from './envioemail.component';
import { CarwashService } from '../../../carwash.service';
import { of } from 'rxjs';

describe('EnvioemailComponent', () => {
  let component: EnvioemailComponent;
  let fixture: ComponentFixture<EnvioemailComponent>;
  let carwashServiceSpy: jasmine.SpyObj<CarwashService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CarwashService', ['getEstadoPendiente', 'rechazarSolicitud', 'impagoSolicitud']);
    const mockRecords = [{ _id: 1, nombre_cliente: 'John Doe', estado: 'Pendiente' }];

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EnvioemailComponent],
      providers: [{ provide: CarwashService, useValue: spy }]
    }).compileComponents();

    carwashServiceSpy = TestBed.inject(CarwashService) as jasmine.SpyObj<CarwashService>;
    carwashServiceSpy.getEstadoPendiente.and.returnValue(Promise.resolve(mockRecords));
    carwashServiceSpy.rechazarSolicitud.and.returnValue(Promise.resolve({}));
    carwashServiceSpy.impagoSolicitud.and.returnValue(Promise.resolve({}));
    fixture = TestBed.createComponent(EnvioemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pending records on initialization', () => {
    expect(component.registros).toEqual([{ _id: 1, nombre_cliente: 'John Doe', estado: 'Pendiente' }]);
    expect(carwashServiceSpy.getEstadoPendiente).toHaveBeenCalled();
  });

  it('should redirect to show details page', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    const id = 1;

    component.redirectToMostrarDetalle(id);

    expect(navigateSpy).toHaveBeenCalledWith(['admin/pages/verDetalles', { _id: id }]);
  });

  it('should reject a pending request', async () => {
    const id = '1';
    const consoleSpy = spyOn(console, 'log');

    await component.rechazarSolicitud(id);

    expect(consoleSpy).toHaveBeenCalledWith('Solicitud rechazada correctamente');
    expect(carwashServiceSpy.rechazarSolicitud).toHaveBeenCalledWith(id);
  });

  it('should accept a pending request', async () => {
    const id = '1';
    const consoleSpy = spyOn(console, 'log');

    await component.impagoSolicitud(id);

    expect(consoleSpy).toHaveBeenCalledWith('Solicitud aceptada correctamente');
    expect(carwashServiceSpy.impagoSolicitud).toHaveBeenCalledWith(id);
  });
});