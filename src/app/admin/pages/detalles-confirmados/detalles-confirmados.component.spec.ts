import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesConfirmadosComponent } from './detalles-confirmados.component';

describe('DetallesConfirmadosComponent', () => {
  let component: DetallesConfirmadosComponent;
  let fixture: ComponentFixture<DetallesConfirmadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesConfirmadosComponent]
    });
    fixture = TestBed.createComponent(DetallesConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
