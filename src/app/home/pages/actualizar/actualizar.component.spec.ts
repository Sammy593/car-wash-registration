import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ActualizarComponent } from './actualizar.component';

describe('ActualizarComponent', () => {
  let component: ActualizarComponent;
  let fixture: ComponentFixture<ActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
    });
    fixture = TestBed.createComponent(ActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when form is invalid', () => {
    component.nombre_cliente = ''; // Invalid form state
    component.cedula = '1234567890';
    component.direccion = '123 Street';
    component.email = 'test@example.com';
    component.marca_vehiculo = 'Toyota';
    component.modelo_vehiculo = 'Corolla';
    component.fecha_ingreso = '2024-03-12';
    component.hora_ingreso = '12:00';
    component.tipo_lavado = 'Económico';

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();
  });

  it('should enable button when form is valid', () => {
    component.nombre_cliente = 'John Doe';
    component.cedula = '1234567890';
    component.direccion = '123 Street';
    component.email = 'test@example.com';
    component.marca_vehiculo = 'Toyota';
    component.modelo_vehiculo = 'Corolla';
    component.fecha_ingreso = '2024-03-12';
    component.hora_ingreso = '12:00';
    component.tipo_lavado = 'Económico';

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalsy();
  });

  // Add more test cases as needed to cover all functionalities
  it('should display error message when nombre_cliente is empty', () => {
    component.nombre_cliente = '';
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('small');
    expect(errorMessage.textContent).toContain('El nombre es requerido');
  });
  

  
 
  
  // Agrega pruebas adicionales para verificar el comportamiento del método actualizarRegistro()
      
});
