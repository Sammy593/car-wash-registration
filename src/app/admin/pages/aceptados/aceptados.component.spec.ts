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
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render buttons based on estado', () => {
    component.registros = mockRegistros;
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(4);
  });


});