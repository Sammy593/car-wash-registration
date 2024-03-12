import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AceptadosComponent } from './aceptados.component';
import { HttpClientModule } from '@angular/common/http';

describe('AceptadosComponent', () => {
  let component: AceptadosComponent;
  let fixture: ComponentFixture<AceptadosComponent>;

  const mockRegistros = [
    { _id: 1, nombre_cliente: 'John Doe', email: 'john.doe@example.com' },
    { _id: 2, nombre_cliente: 'Jane Smith', email: 'jane.smith@example.com', estado: 'Pagado' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AceptadosComponent],
      imports: [HttpClientModule] // Import HttpClientModule if necessary
    })
      .compileComponents();

    fixture = TestBed.createComponent(AceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Important for initial data binding
  });

  // **1. Test for rendering buttons based on estado:**

  it('should render buttons based on estado', () => {
    component.registros = mockRegistros;
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    // Assuming the "Ver detalles" button exists, adjust selector if needed
    expect(buttons.length).toBe(4);  // Expect four buttons (Ver detalles, Aceptar, Rechazar)
  });

  // **2. Test for redirectToMostrarDetalle:**

  it('should call redirectToMostrarDetalle on button click', waitForAsync(() => {
    const spy = spyOn(component, 'redirectToMostrarDetalle'); 
    const button = fixture.nativeElement.querySelector('button.my-custom-btn');
    button.click();
    expect(spy).toHaveBeenCalledWith(mockRegistros[0]._id); // Pass the correct ID
  }));

  // **3. Test for aceptarSolicitud:**

  it('should display message when no records are available', () => {
    component.registros = [];
    fixture.detectChanges();
    const messageElement = fixture.nativeElement.querySelector('.empty-message');
    expect(messageElement.textContent).toContain('No hay registros disponibles.');
  });
  it('should call redirectToMostrarDetalle when "Ver detalles" button is clicked', () => {
    const spy = spyOn(component, 'redirectToMostrarDetalle');
    const button = fixture.nativeElement.querySelector('.custom-btn');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
  it('should call aceptarSolicitud when "Aceptar" button is clicked and estado is "Pagado"', () => {
    const spy = spyOn(component, 'aceptarSolicitud');
    component.registros = [{ _id: 1, nombre_cliente: 'John Doe', email: 'john.doe@example.com', estado: 'Pagado' }];
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.green-btn');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
  it('should call rechazarSolicitud when "Rechazar" button is clicked and estado is "Pagado"', () => {
    const spy = spyOn(component, 'rechazarSolicitud');
    component.registros = [{ _id: 1, nombre_cliente: 'John Doe', email: 'john.doe@example.com', estado: 'Pagado' }];
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.red-btn');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
  
});
