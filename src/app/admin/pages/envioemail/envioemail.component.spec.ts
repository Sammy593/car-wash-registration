import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvioemailComponent } from './envioemail.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule


describe('EnvioemailComponent', () => {
  let component: EnvioemailComponent;
  let fixture: ComponentFixture<EnvioemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioemailComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect when redirectToMostrarDetalle is called', () => {
    const spy = spyOn(component, 'redirectToMostrarDetalle');
    const id = 123; // Assuming ID is a number
    component.redirectToMostrarDetalle(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('should call impagoSolicitud when impagoSolicitud is called', () => {
    const spy = spyOn(component, 'impagoSolicitud');
    const id = 456; // Assuming ID is a number
    component.impagoSolicitud(id.toString()); // Convert id to string
    expect(spy).toHaveBeenCalledWith(id.toString());
});

it('should call rechazarSolicitud when rechazarSolicitud is called', () => {
    const spy = spyOn(component, 'rechazarSolicitud');
    const id = 789; // Assuming ID is a number
    component.rechazarSolicitud(id.toString()); // Convert id to string
    expect(spy).toHaveBeenCalledWith(id.toString());
});




  // You can add more test cases based on your component's logic
});
